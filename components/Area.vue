<template>
  <b-container class="search-wrap">
    <b-row>
      <b-col>
        <div class="bg-wrap">
          <b-input-group
            v-for="size in ['lg']"
            :key="size"
            :size="size"
            class="mb-3"
            prepend="城市: "
          >
            <b-form-input />
            <b-input-group-append>
              <b-button size="sm" text="Button" variant="success">
                Button
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
// import { BAlert } from "bootstrap-vue"
export default {
  computed: {
    areas() {
      return this.$store.getters.areas
    }
  }
}
</script>
<style></style>
