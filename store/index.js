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
    let datas = await this.$axios.$get(
      "/XMLReleaseALL_public/scenic_spot_C_f.json"
    )
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
  }
}
