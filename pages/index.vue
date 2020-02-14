<template>
  <div class="search-wrap">
    <Area />
  </div>
</template>

<script>
import Area from "~/components/area.vue"
// import RecentAdd from "~/components/recentAdd.vue"

export default {
  components: {
    Area
    // RecentAdd
  },
  mounted() {
    this.$store.dispatch("syncAttractions")
  }
}
</script>

<style></style>
