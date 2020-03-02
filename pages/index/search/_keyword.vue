<template>
  <b-container>
    <b-row>
      <b-col>{{ $route.params.keyword }}</b-col>
    </b-row>
    <b-row>
      <b-col>
        <TaiwanMap />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TaiwanMap from "~/components/search/TaiwanMap.vue"
export default {
  components: {
    TaiwanMap
  }
}
</script>

<style></style>
