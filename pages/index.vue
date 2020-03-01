<template>
  <div>
    <KeywordSearch />
    <nuxt-child keep-alive />
  </div>
</template>

<script>
import KeywordSearch from "~/components/KeywordSearch.vue"

export default {
  components: {
    KeywordSearch
  }
}
</script>

<style></style>
