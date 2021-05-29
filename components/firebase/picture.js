import firebase from "firebase/app"
import "firebase/storage"

import { fdb } from "~/plugins/firebase.js"

export function uploadAvatar(file, uid, progressHandler = () => {}) {
  const ref = fdb.ref("users")
  return new Promise((resolve, reject) => {
    const storageRef = firebase.storage().ref()
    const metadata = {
      contentType: file.type
    }
    const filename = Date.now() + file.name
    const uploadTask = storageRef.child(filename).put(file, metadata)
    uploadTask.on(
      "state_changed",
      progressHandler,
      () => {},
      async () => {
        try {
          let snapshot = await ref.child(uid).once("value")
          let obj = snapshot.val()
          if (obj && obj.filename) {
            // 刪除檔案
            await firebase
              .storage()
              .ref()
              .child(obj.filename)
              .delete()
          }
          let url = await uploadTask.snapshot.ref.getDownloadURL()
          ref.child(uid).update({
            filename
          })
          resolve(url)
        } catch (e) {
          console.log("happen error", e)
          reject(e)
        }
      }
    )
  })
}
export function getAvatarUrl(username) {
  return new Promise(resolve => {
    const ref = fdb.ref("users")
    ref.child(username).once("value", async snapshot => {
      const obj = snapshot.val()
      if (obj && obj.filename) {
        const url = await firebase
          .storage()
          .ref()
          .child(obj.filename)
          .getDownloadURL()
        resolve(url)
      }
      resolve(null)
    })
  })
}
