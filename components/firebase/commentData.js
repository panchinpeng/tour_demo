import { fdb } from "~/plugins/firebase.js"
import firebase from "firebase/app"
import "firebase/auth"
import moment from "moment"
import { commitForUser } from "./userFunction"
import { getAvatarUrl } from "./picture"

const checkLogin = () => {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(user => {
      resolve(user ? user.uid : false)
    })
  })
}

export const dbUserLogined = async () => {
  let loginStatus = await checkLogin()
  return loginStatus
}

export const fbSetComment = (comment, uid) => {
  if (checkLogin()) {
    const ref = fdb.ref("commentReply")
    ref.push({ ...comment, uid }, err => {
      if (err) {
        alert("回復訊息出現錯誤")
        console.log(err)
      } else {
        try {
          commitForUser("replyCount", uid)
        } catch (err) {
          console.log("紀錄回覆數錯誤", err)
        }
      }
    })
  }
}
export const fbGetReply = id => {
  let returnData = []
  const tmpSaveUserAvatar = {}
  const ref = fdb.ref("commentReply")
  ref
    .orderByChild("id")
    .equalTo(id)
    .on("child_added", async snapshot => {
      const data = snapshot.val()
      if (tmpSaveUserAvatar[data.uid]) {
        data.avatar = tmpSaveUserAvatar[data.uid]
      } else {
        data.avatar = await getAvatarUrl(data.uid)
        tmpSaveUserAvatar[data.uid] = data.avatar
      }

      returnData.push({ key: snapshot.key, ...data })
    })

  return returnData
}

export const fbGetRealCommentData = () => {
  // let returnData = []
  return new Promise((resolve, reject) => {
    const ref = fdb
      .ref("commentRank")
      .orderByValue()
      .limitToLast(1)
    ref.once("value", async snapshot => {
      if (snapshot.val()) {
        let publicId = Object.keys(snapshot.val())[0]
        const resultComment = await getTourComment(publicId)
        let returnData = []
        for (let key in resultComment) {
          let data = resultComment[key]
          returnData.push({ id: key, ...data })
        }
        resolve([publicId, returnData])
      }
      reject(null)
    })
  })
}
// 取某一個景點的留言(按時間降序排列)
export const getTourComment = (tid, limit = 12) => {
  const ref = fdb
    .ref(`comment/${tid}`)
    .orderByChild("d")
    .limitToLast(limit)
  const tmpSaveUserAvatar = {}
  return new Promise(resolve => {
    ref.on("value", async snapshot => {
      const resultComment = snapshot.val()

      for (let key in resultComment) {
        let data = resultComment[key]
        // cache 圖片，避免每次都去讀圖片
        if (tmpSaveUserAvatar[data.u]) {
          data.avatar = tmpSaveUserAvatar[data.u]
        } else {
          data.avatar = await getAvatarUrl(data.u)
          tmpSaveUserAvatar[data.u] = data.avatar
        }
      }
      resolve(resultComment)
    })
  })
}
export const fbSetRealCommentData = (msg, tourId, u) => {
  return new Promise(resolve => {
    if (checkLogin()) {
      const ref = fdb.ref("comment")
      ref
        .child(tourId)
        .push({ u, msg, d: moment().format("YYYY-MM-DD HH:mm:ss") })
      try {
        Promise.all([
          commitForUser("commitCount", u),
          pushHotComment(tourId)
        ]).then(() => resolve())
      } catch (err) {
        alert("留言失敗")
        resolve()
      }
    }
  })
}

// 留言次數
const pushHotComment = tourId => {
  return new Promise((resolve, reject) => {
    const ref = fdb.ref(`commentRank/${tourId}`)
    // 交易機制
    ref.transaction(
      rank => {
        if (rank) {
          // 如果有設定過
          return rank + 1
        } else {
          // 如果從未設定過
          return 1
        }
      },
      (err, suc) => {
        if (err === null && suc) {
          resolve()
        }
        reject(err)
      }
    )
  })
}

export const fbGetReadCount = () => {
  const ref = fdb.ref("user-test")
  ref.on("value", snapshot => {
    return snapshot.val()
  })
}

export const fbSetReadCountAddOne = () => {
  const ref = fdb.ref(process.env.onlineApi)
  return new Promise(resolve => {
    ref.once("value", snapshot => {
      ref.set(snapshot.val() + 1)
      resolve(snapshot.val() + 1)
    })
  })
}
