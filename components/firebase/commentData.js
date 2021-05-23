import { fdb } from "~/plugins/firebase.js"
import firebase from "firebase/app"
import "firebase/auth"
import moment from "moment"
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

export const fbSetComment = comment => {
  if (checkLogin()) {
    const ref = fdb.ref("commentReply")
    ref.push(comment)
  }
}
export const fbGetReply = id => {
  let returnData = []
  const ref = fdb.ref("commentReply")
  ref
    .orderByChild("id")
    .equalTo(id)
    .on("child_added", snapshot => {
      returnData.push({ key: snapshot.key, ...snapshot.val() })
    })

  return returnData
}

export const fbGetRealCommentData = () => {
  // let returnData = []
  return new Promise(resolve => {
    const ref = fdb
      .ref("commentRank")
      .orderByValue()
      .limitToLast(1)
    ref.once("value", async snapshot => {
      let publicId = Object.keys(snapshot.val())[0]
      const resultComment = await getTourComment(publicId)
      let returnData = []
      for (let key in resultComment) {
        let data = resultComment[key]
        returnData.push({ id: key, ...data })
      }
      resolve([publicId, returnData])
    })
  })
}
// 取某一個景點的留言(按時間降序排列)
export const getTourComment = (tid, limit = 12) => {
  const ref = fdb
    .ref(`comment/${tid}`)
    .orderByChild("d")
    .limitToLast(limit)
  return new Promise(resolve => {
    ref.on("value", snapshot => {
      resolve(snapshot.val())
    })
  })
}
export const fbSetRealCommentData = (msg, tourId, u) => {
  if (checkLogin()) {
    const ref = fdb.ref("comment")
    ref
      .child(tourId)
      .push({ u, msg, d: moment().format("YYYY-MM-DD HH:mm:ss") })

    pushHotComment(tourId)
  }
}
// 留言次數
const pushHotComment = tourId => {
  const ref = fdb.ref(`commentRank/${tourId}`)
  // 交易機制
  ref.transaction(rank => {
    if (rank) {
      // 如果有設定過
      return rank + 1
    } else {
      // 如果從未設定過
      return 1
    }
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
