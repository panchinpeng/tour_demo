import firebase from "firebase/app"
import "firebase/auth"

export const userLogin = (username, password, sucFun, failFun) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .then(user => {
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
