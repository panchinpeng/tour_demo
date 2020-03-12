import * as ActionTypes from "~/store/action-type"

export const state = () => ({
  attractions: [],
  authentication: false
})

export const mutations = {
  [ActionTypes.SYNCATTRACTIONS](state, datas) {
    // state.attractions = datas.XML_Head.Infos.Info
    const tmp = datas.XML_Head.Infos.Info
    let tmp2 = []
    tmp.forEach((item, index) => {
      tmp2[index] = item.Changetime
    })

    let tmp3 = tmp2.slice(0).sort((a, b) => Date.parse(b) - Date.parse(a))

    let tmp4 = []
    tmp3.forEach(item => {
      const tmpIndex = tmp2.indexOf(item)
      tmp4.push(tmp[tmpIndex])
      tmp2[tmpIndex] = null
    })
    state.attractions = tmp4
  },
  [ActionTypes.SETLOGINSTATUS](state, data) {
    state.authentication = data
  }
}

export const actions = {
  async syncAttractions({ commit }) {
    let datas = await this.$axios.$get("/scenic_spot_C_f.json")
    // let datas = await this.$axios.$get("/scenic_spot_C_f.json")

    commit(ActionTypes.SYNCATTRACTIONS, datas)
  },
  setLoginStatus({ commit }, status) {
    status = !!status
    commit(ActionTypes.SETLOGINSTATUS, status)
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
  loadedAttraction(state) {
    return state.attractions.length > 0
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
