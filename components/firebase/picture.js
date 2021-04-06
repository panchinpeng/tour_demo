import firebase from "firebase/app"
import "firebase/storage"

import { fdb } from "~/plugins/firebase.js"
const ref = fdb.ref("users")

export function uploadAvatar(file, uid, progressHandler = () => {}) {
  return new Promise((resolve, reject) => {
    const storageRef = firebase.storage().ref()
    const metadata = {
      contentType: file.type
    }
    const uploadTask = storageRef
      .child(Date.now() + file.name)
      .put(file, metadata)
    uploadTask.on(
      "state_changed",
      progressHandler,
      () => {},
      async () => {
        let url = await uploadTask.snapshot.ref.getDownloadURL()
        ref.child(uid).set(
          {
            url
          },
          err => {
            if (err) {
              reject(err)
            } else {
              resolve(url)
            }
          }
        )
      }
    )
  })
}
