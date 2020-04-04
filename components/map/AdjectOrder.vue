<template>
  <!-- 調整mpa順序 -->
  <b-modal id="adjectView" centered ok-only title="已選擇站點">
    <div style="text-align: right;color: #6cbdaa;">
      拖曳即可調整景點順序
    </div>
    <ul class="model-list">
      <li
        v-for="item in datasList"
        :key="`adject${item}`"
        draggable="true"
        :data-dist="item"
        @dragstart="dragstart(item)"
        @drop.prevent.stop="droped"
        @dragenter.prevent.stop=""
        @dragover.prevent.stop=""
        @dragend="dragend"
        @touchstart.prevent="touchstart"
        @touchend.prevent="touchend"
      >
        {{ favoriteContent[item].caption }}
      </li>
    </ul>
    <template v-slot:modal-footer>
      <div class="w-100">
        <b-button variant="primary" size="sm" class="float-right" @click="add">
          加入
        </b-button>
      </div>
    </template>
    <p v-if="queryString || startString" class="map-tip">
      溫馨提醒: 可於googleMap視窗中，按下<span>更多選項</span>，看更多訊息唷
    </p>
    <iframe
      v-if="queryString || startString"
      style="width: 100%;height: 500px"
      :src="
        `https://www.google.com/maps/embed/v1/directions?key=AIzaSyACCUIh_N26TdQELm4Ey7Bn1lXLaXce288&origin=${startString}${queryString}&destination=${endString}`
      "
      frameborder="0"
    />
  </b-modal>
</template>

<script>
// https://www.google.com/maps/embed/v1/directions?key=你的金鑰&origin=台北市政府&waypoints=台北101|國父紀念館&destination=台北小巨蛋"
export default {
  props: {
    prepareToMap: {
      type: Array,
      default: function() {
        return []
      }
    },
    favoriteContent: {
      type: Object,
      default: function() {}
    }
  },
  data() {
    return {
      datasList: this.prepareToMap,
      queryString: "",
      startString: "",
      endString: ""
    }
  },
  methods: {
    touchstart() {
      event.target.classList.add("dragging")
    },
    touchend() {
      let dropY = event.changedTouches[0].pageY

      const refElements = [...document.querySelectorAll(".model-list>li")]

      // 計算結束停在哪個元素上
      let findDist = refElements.findIndex(item => {
        let itemInfo = item.getBoundingClientRect()
        return dropY > itemInfo.top && dropY < itemInfo.top + itemInfo.height
      })
      if (findDist === -1) {
        // 找不到的話 確認拖曳結束時是否停在最後一個的Y軸下，是的話放在最下面
        let lastItem = refElements[
          refElements.length - 1
        ].getBoundingClientRect()
        if (dropY > lastItem.top + lastItem.height) {
          findDist = refElements.length - 1
        }
      }
      if (findDist === -1) {
        //找不到的話 確認拖曳結束時是否停在第一個的Y軸上，是的話放在最上面
        let firstItem = refElements[0].getBoundingClientRect()
        if (dropY < firstItem.top) {
          findDist = 0
        }
      }
      let sourceElement = event.target
      let oldIndex = this.datasList.findIndex(
        item => item === sourceElement.dataset.dist
      )

      if (oldIndex !== findDist) {
        // 當拖曳停下位置不是自己 在更換
        this.datasList.splice(oldIndex, 1)
        this.datasList.splice(findDist, 0, sourceElement.dataset.dist)
      }
      console.log(findDist)
      event.target.classList.remove("dragging")
    },
    dragstart(dataId) {
      // console.log(event, dataId)
      event.dataTransfer.setData("unique", dataId)
      event.target.classList.add("dragging")
      // e.dataTransfer.setData()
    },
    dragend() {
      event.target.classList.remove("dragging")
    },
    droped() {
      const originId = event.dataTransfer.getData("unique")
      const distId = event.target.dataset.dist
      let tmpOldIndex = this.datasList.findIndex(item => item == originId)
      let tmpNewIndex = this.datasList.findIndex(item => item == distId)
      // 刪除
      this.datasList.splice(tmpOldIndex, 1)
      this.datasList.splice(tmpNewIndex, 0, originId)
      // console.log(originId, distId)
    },
    add() {
      let sortData = this.datasList
      let composeQuery = sortData.map(
        item => this.favoriteContent[item].caption
      )
      if (composeQuery.length < 2) {
        alert("選擇景點必須2個以上...")
      } else {
        this.startString = composeQuery.shift()
        this.endString = composeQuery.pop()
        // https://www.google.com/maps/embed/v1/directions?key=你的金鑰&origin=台北市政府&waypoints=台北101|國父紀念館&destination=台北小巨蛋
        composeQuery = composeQuery.join("|")
        if (composeQuery) {
          this.queryString = "&waypoints=" + composeQuery
        }
      }
    }
  }
}
</script>

<style>
.model-list {
  list-style-type: decimal;
}
.model-list > li {
  height: 30px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  text-align: center;
}
.dragging {
  opacity: 0.5;
}
.map-tip {
  background-color: pink;
  border-radius: 4px;
  text-align: right;
  font-size: 12px;
  float: right;
  padding: 2px 10px;
}
.map-tip > span {
  font-weight: 900;
}
</style>
