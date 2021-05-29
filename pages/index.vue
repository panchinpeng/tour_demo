<template>
  <div>
    <userMenu />
    <KeywordSearch />
    <nuxt-child />
    <loading />
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
import loading from "~/components/common/loading"
export default {
  components: {
    KeywordSearch,
    userMenu,
    loading
  },
  async fetch({ store }) {
    let user = await dbUserLogined()
    if (user) {
      store.dispatch("setLoginStatus", user)
    }
    let nowCounter = await fbSetReadCountAddOne()
    store.dispatch("setUserCounter", nowCounter)
  },
  scrollToTop: true
}
</script>

<style></style>
