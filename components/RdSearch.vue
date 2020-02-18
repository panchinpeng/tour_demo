<template>
  <div class="search-result">
    <b-container>
      <b-row>
        <b-col>
          <nuxt-link to="/about" class="more-link">
            more
          </nuxt-link>
          <h5 class="title">
            隨機景點
          </h5>
        </b-col>
      </b-row>
      <b-row>
        <template v-if="randomDatas.length > 0">
          <b-col
            v-for="item in randomDatas"
            :key="item.Id"
            class="flex-grow-2 flex-md-grow-0"
          >
            <b-card
              :title="item.Name"
              img-src="https://picsum.photos/600/300/?image=25"
              :img-alt="item.Name"
              img-top
              tag="article"
              style="width: 250px; font-size: 14px;"
              class="mb-1 p-1"
              body-class="p-1 card-body"
              title-tag="h5"
            >
              <OverlayScrollbarsComponent
                :options="{ scrollbars: { autoHide: 'scroll' } }"
              >
                <b-card-text>
                  {{ item.Description || item.Toldescribe }}
                </b-card-text>
              </OverlayScrollbarsComponent>
            </b-card>
          </b-col>
        </template>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import "overlayscrollbars/css/OverlayScrollbars.css"
import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"

export default {
  components: {
    OverlayScrollbarsComponent
  },
  data() {
    return {}
  },
  computed: {
    randomDatas() {
      return this.$store.getters.randomAttractions
    }
  },
  mounted() {},
  methods: {}
}
</script>

<style scoped>
@media (max-width: 767px) {
  .card {
    width: 100% !important;
  }
  .col {
    flex-basis: 100% !important;
  }
}
.title {
  color: var(--purple);
  transform: skewX(-20deg);
  border-bottom: 1px solid #00000026;
  padding-bottom: 10px;
  position: relative;
}
.title::after {
  content: "";
  position: absolute;
  display: block;
  width: 120px;
  height: 5px;
  bottom: -5px;
  left: 0;
  background-color: #2b5b04;
}
.card-body {
  height: 190px;
}
.card-text {
  height: 150px;
  /* overflow: auto; */
}
.more-link {
  float: right;
}
</style>
