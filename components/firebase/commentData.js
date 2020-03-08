import { fdb } from "~/plugins/firebase.js"

export const fbSetComment = comment => {
  const ref = fdb.ref("commentReply")
  ref.push(comment)
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
  let returnData = []
  const ref = fdb.ref("comment")
  ref.on("value", snapshot => {
    let commentDatas = snapshot.val()

    for (const key in commentDatas) {
      // eslint-disable-next-line no-prototype-builtins
      if (commentDatas.hasOwnProperty(key)) {
        returnData.push(commentDatas[key])
      }
    }
  })
  return returnData
}
