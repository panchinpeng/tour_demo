import * as ActionTypes from "~/store/action-type"

export const state = () => ({
  attractions: []
})

export const mutations = {
  [ActionTypes.SYNCATTRACTIONS](state, datas) {
    state.attractions = datas.XML_Head.Infos.Info
  }
}

export const actions = {
  async syncAttractions({ commit }) {
    // let datas = await this.$axios.$get(
    //   "/XMLReleaseALL_public/scenic_spot_C_f.json"
    // )
    let datas = await this.$axios.$get("/scenic_spot_C_f.json")

    commit(ActionTypes.SYNCATTRACTIONS, datas)
  }
}
export const getters = {
  areas(state) {
    let returnData = []
    state.attractions.map(item => {
      if (item.Region) {
        returnData.push(item.Region)
      }
    })
    returnData = [...new Set(returnData)]
    return returnData
  },
  randomAttractions(state) {
    if (state.attractions.length === 0) {
      return []
    }
    let size = state.attractions.length
    let tmpSaveRandomAry = []
    let returnCatchDatas = []
    while (tmpSaveRandomAry.length < 4) {
      let rdNumber = Math.round(Math.random() * size)
      if (!tmpSaveRandomAry.includes(rdNumber)) {
        tmpSaveRandomAry.push(rdNumber)

        returnCatchDatas.push(state.attractions[rdNumber])
        console.log(returnCatchDatas, rdNumber, state.attractions[rdNumber])
      }
    }
    return returnCatchDatas
  }
}
