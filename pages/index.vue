<template>
  <div>
    <KeywordSearch />
    <RdSearch />
    <AreaSearch />
  </div>
</template>

<script>
import KeywordSearch from "~/components/KeywordSearch.vue"
import RdSearch from "~/components/RdSearch.vue"
import AreaSearch from "~/components/AreaSearch.vue"

export default {
  components: {
    KeywordSearch,
    RdSearch,
    AreaSearch
  },
  mounted() {
    this.$store.dispatch("syncAttractions")
  }
}
</script>

<style></style>
