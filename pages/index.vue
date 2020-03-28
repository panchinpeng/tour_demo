<template>
  <div>
    <userMenu />
    <KeywordSearch />
    <nuxt-child />
  </div>
</template>

<script>
import userMenu from "~/components/academic/menu.vue"
import KeywordSearch from "~/components/KeywordSearch.vue"
import {
  fbSetReadCountAddOne
  // fbSetReadCount
} from "~/components/firebase/commentData"
export default {
  components: {
    KeywordSearch,
    userMenu
  },
  async created() {
    let nowCounter = await fbSetReadCountAddOne()
    this.$store.dispatch("setUserCounter", nowCounter)
  }
}
</script>

<style></style>
