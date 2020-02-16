<template>
  <div>
    <Area />
    <RdSearch />
  </div>
</template>

<script>
import Area from "~/components/area.vue"
import RdSearch from "~/components/RdSearch.vue"

export default {
  components: {
    Area,
    RdSearch
    // RecentAdd
  },
  mounted() {
    this.$store.dispatch("syncAttractions")
  }
}
</script>

<style></style>
