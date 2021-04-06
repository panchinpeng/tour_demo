import * as ActionTypes from "~/store/action-type"

export const state = () => ({
  updateFavorite: true,
  attractions: [],
  authentication: false,
  counter: 0,
  username: "",
  showSkeleton: false
})

export const mutations = {
  [ActionTypes.SYNCATTRACTIONS](state, datas) {
    // state.attractions = datas.XML_Head.Infos.Info
    const tmp = datas
    // let tmp2 = []
    // tmp.forEach((item, index) => {
    //   tmp2[index] = item.Changetime
    // })

    // let tmp3 = tmp2.slice(0).sort((a, b) => Date.parse(b) - Date.parse(a))

    // let tmp4 = []
    // tmp3.forEach(item => {
    //   const tmpIndex = tmp2.indexOf(item)
    //   tmp4.push(tmp[tmpIndex])
    //   tmp2[tmpIndex] = null
    // })
    // state.attractions = tmp4
    state.attractions = tmp
  },
  [ActionTypes.SETLOGINSTATUS](state, data) {
    state.authentication = data
  },
  [ActionTypes.SETUSERCOUNTER](state, data) {
    state.counter = data
  },
  [ActionTypes.SETFAVORITE](state, data) {
    state.updateFavorite = data
  },
  [ActionTypes.SETUSERNAME](state, data) {
    state.username = data
  },
  [ActionTypes.SHOWSKEKETON](state, data) {
    state.showSkeleton = data
  }
}

export const actions = {
  async syncAttractions({ commit }) {
    let datas = await this.$axios.$get("/scenic_spot_C_f.json")
    // let datas = await this.$axios.$get("/scenic_spot_C_f.json")

    let filterAry = datas.XML_Head.Infos.Info.map(item => {
      return {
        Add: item.Add,
        Changetime: item.Changetime,
        Id: item.Id,
        Keyword: item.Keyword,
        Name: item.Name,
        Opentime: item.Opentime,
        Region: item.Region,
        Tel: item.Tel,
        Toldescribe: item.Toldescribe,
        Town: item.Town,
        Travellinginfo: item.Travellinginfo,
        Zipcode: item.Zipcode,
        Ticketinfo: item.Ticketinfo
      }
    })
    commit(ActionTypes.SYNCATTRACTIONS, filterAry)
  },
  setLoginStatus({ commit }, status) {
    commit(ActionTypes.SETLOGINSTATUS, status)
  },
  setUserCounter({ commit }, data) {
    data * 1 > 0 && commit(ActionTypes.SETUSERCOUNTER, data)
  },
  setShouldUpdateFavorite({ commit }, data) {
    commit(ActionTypes.SETFAVORITE, data)
  },
  setUsername({ commit }, data) {
    commit(ActionTypes.SETUSERNAME, data)
  },
  setShowSkeketon({ commit }, data) {
    commit(ActionTypes.SHOWSKEKETON, !!data)
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
