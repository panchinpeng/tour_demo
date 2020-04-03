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
import { dbUserLogined } from "~/components/firebase/commentData"
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
    if (!this.$store.state.authentication) {
      let user = await dbUserLogined()
      if (user) {
        this.$store.dispatch("setLoginStatus", user)
      }
    }
    let nowCounter = await fbSetReadCountAddOne()
    this.$store.dispatch("setUserCounter", nowCounter)
  }
}
</script>

<style></style>
