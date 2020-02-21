<template>
  <div>
    <KeywordSearch />
    <RdSearch />
    <AreaSearch />
    <HotComment />
  </div>
</template>

<script>
import KeywordSearch from "~/components/KeywordSearch.vue"
import RdSearch from "~/components/RdSearch.vue"
import AreaSearch from "~/components/AreaSearch.vue"
import HotComment from "~/components/HotComment.vue"

export default {
  components: {
    KeywordSearch,
    RdSearch,
    AreaSearch,
    HotComment
  },
  mounted() {
    this.$store.dispatch("syncAttractions")
  }
}
</script>

<style></style>
