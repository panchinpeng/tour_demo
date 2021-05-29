import { fdb } from "~/plugins/firebase.js"
const ref = fdb.ref("favorite")
export const setFavorite = async (uid, tourId, caption) => {
  ref
    .child(uid)
    .child(tourId)
    .set({ caption, addTime: Date.now() })
}

export const removeFavorite = async (uid, tourId) => {
  ref
    .child(uid)
    .child(tourId)
    .remove()
}
export const readFavorite = async uid => {
  return new Promise(resolve => {
    ref.child(uid).once("value", snapshot => {
      const result = snapshot.val()
      resolve(result ? result : {})
    })
  })
}

export const readFavoriteReal = async uid => {
  return new Promise(resolve => {
    ref.child(uid).once("value", snapshot => {
      const result = snapshot.val()
      resolve(result ? result : {})
    })
  })
}

export const readFavoriteCount = async uid => {
  let result = await readFavorite(uid)
  result = Object.keys(result)
  return result.length
}
