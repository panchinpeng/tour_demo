import * as ActionTypes from "~/store/action-type"

export const state = () => ({
  attractions: []
})

export const mutations = {
  [ActionTypes.SYNCATTRACTIONS](state, datas) {
    state.attractions = datas.XML_Head.Infos
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
