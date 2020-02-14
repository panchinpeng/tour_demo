<template>
  <b-container class="p-1">
    <b-row>
      <b-col>
        <Area />
      </b-col>
    </b-row>
  </b-container>
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
