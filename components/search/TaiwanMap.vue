<template>
  <div id="map" class="google-map" />
</template>

<script>
export default {
  data() {
    return {
      map: null,
      lat: 25.0325917,
      lng: 121.5624999
    }
  },
  mounted() {
    // 透過動態增加script，確保讀到window.google，不透過head
    if (!process.server && !window.jQuery) {
      const script = document.createElement("script")
      script.onload = this.onScriptLoaded
      script.type = "text/javascript"
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyD4P7CCkZ5psoEK8yUIq2LN9KbkFYYTZT8"
      document.head.appendChild(script)
    } else {
      this.onScriptLoaded()
    }
  },
  methods: {
    onScriptLoaded() {
      this.initMap()
      this.setMarker()
    },
    // 建立地圖
    initMap() {
      // 透過 Map 物件建構子建立新地圖 map 物件實例，並將地圖呈現在 id 為 map 的元素中
      this.map = new window.google.maps.Map(document.getElementById("map"), {
        // 設定地圖的中心點經緯度位置
        center: { lat: this.lat, lng: this.lng },
        // 設定地圖縮放比例 0-20
        zoom: 10,
        // 限制使用者能縮放地圖的最大比例
        maxZoom: 20,
        // 限制使用者能縮放地圖的最小比例
        minZoom: 3,
        // 設定是否呈現右下角街景小人
        streetViewControl: false
        // 設定是否讓使用者可以切換地圖樣式：一般、衛星圖等
        // mapTypeControl: false
      })
    },
    // 建立地標
    setMarker() {
      // 建立一個新地標
      new window.google.maps.Marker({
        // 設定地標的座標
        position: { lat: this.lat, lng: this.lng },
        // 設定地標要放在哪一個地圖
        map: this.map
      })
    }
  }
}
</script>

<style>
#map {
  width: 100%;
  height: 600px;
}
</style>
