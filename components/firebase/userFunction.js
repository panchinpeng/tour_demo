import firebase from "firebase/app"
import "firebase/auth"
import { fdb } from "~/plugins/firebase.js"

export const userLogin = (username, password, sucFun, failFun) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .then(user => {
      commitForUser("loginCount", user.user.uid)
      sucFun(user.user.uid)
    })
    .catch(error => {
      // Handle Errors here.
      failFun(error.message)
    })
}

export const userLogout = sucFun => {
  firebase
    .auth()
    .signOut()
    .then(sucFun)
}

export const updateUserSetting = ({ uid, city, nickname }) => {
  return new Promise((resolve, reject) => {
    const ref = fdb.ref(`users/${uid}`)
    ref.update({ city, nickname }, err => {
      err ? reject(err) : resolve()
    })
  })
}

export const getUserSetting = uid => {
  return new Promise(resolve => {
    fdb
      .ref(`users/${uid}`)
      .once("value")
      .then(snapshot => resolve(snapshot.val()))
  })
}
// 紀錄使用者數量
export const commitForUser = (action, uid) => {
  return new Promise((resolve, reject) => {
    console.log("rrrr", `users/${uid}/${action}`)
    fdb.ref(`users/${uid}/${action}`).transaction(
      count => {
        if (count === null) {
          return 1
        }
        return count + 1
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
