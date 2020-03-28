<template>
  <div class="search-wrap">
    <b-container>
      <b-row>
        <b-col>
          <div class="bg-wrap">
            <b-input-group
              v-for="size in ['sm']"
              :key="size"
              :size="size"
              class="my-3"
              prepend="城市: "
            >
              <b-form-input v-model="keywordSearch" />
              <b-input-group-append>
                <b-button
                  size="sm"
                  text="Button"
                  variant="success"
                  @click="search"
                >
                  搜尋
                </b-button>
              </b-input-group-append>
            </b-input-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
// import { BAlert } from "bootstrap-vue"
export default {
  data() {
    return {
      keywordSearch: ""
    }
  },
  methods: {
    search() {
      if (!this.keywordSearch) {
        return
      }
      this.$router.push("/search/" + this.keywordSearch)
    }
  }
}
</script>
<style>
.bg-wrap {
  position: relative;
  z-index: 100;
}
</style>
