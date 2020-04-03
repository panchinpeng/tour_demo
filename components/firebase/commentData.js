import { fdb } from "~/plugins/firebase.js"
import firebase from "firebase/app"
import "firebase/auth"
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
      console.log(snapshot)
      returnData.push({ key: snapshot.key, ...snapshot.val() })
    })

  return returnData
}

export const fbGetRealCommentData = () => {
  let returnData = []
  return new Promise(resolve => {
    const ref = fdb.ref("comment")
    ref.on("value", snapshot => {
      let commentDatas = snapshot.val()

      for (const key in commentDatas) {
        // eslint-disable-next-line no-prototype-builtins
        if (commentDatas.hasOwnProperty(key)) {
          returnData.push(commentDatas[key])
        }
      }
      resolve(returnData)
    })
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
