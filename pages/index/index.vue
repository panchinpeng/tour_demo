<template>
  <div>
    <div v-show="$store.getters.loadedAttraction">
      <RdSearch />
      <AreaSearch />
      <HotComment />
      <Service />
      <Footer />
    </div>
    <div
      v-show="!$store.getters.loadedAttraction"
      style="display: flex;height: 80vh;justify-content: center;align-items: center"
    >
      <b-spinner style="width: 3rem; height: 3rem;" label="Large Spinner" />
      <b-spinner
        variant="success"
        style="width: 3rem; height: 3rem;"
        label="Large Spinner"
        type="grow"
      />
    </div>
  </div>
</template>

<script>
import RdSearch from "~/components/RdSearch.vue"
import AreaSearch from "~/components/AreaSearch.vue"
import HotComment from "~/components/HotComment.vue"
import Service from "~/components/Service.vue"
import Footer from "~/components/Footer.vue"

export default {
  components: {
    RdSearch,
    AreaSearch,
    HotComment,
    Service,
    Footer
  },

  mounted() {
    if (this.$store.state.attractions.length === 0) {
      this.$store.dispatch("syncAttractions")
    }
  }
}
</script>

<style></style>
