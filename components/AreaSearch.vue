<template>
  <div class="area-search">
    <b-container>
      <b-row>
        <b-col>
          <h5 class="title">
            地區找景點
          </h5>
        </b-col>
      </b-row>
      <b-row class="pt-1">
        <b-col class="d-none d-md-block">
          <carousel :per-page="6" pagination-active-color="#aaa">
            <Slide v-for="item in areas" :key="item">
              <nuxt-link :to="'/search/' + item" class="city-wrap">
                {{ item }}
              </nuxt-link>
            </Slide>
          </carousel>
        </b-col>
        <b-col class="d-none d-sm-block d-md-none">
          <carousel :per-page="4" pagination-active-color="#aaa">
            <Slide v-for="item in areas" :key="item">
              <div class="city-wrap">
                {{ item }}
              </div>
            </Slide>
          </carousel>
        </b-col>
        <b-col class="d-sm-none">
          <carousel :per-page="3" pagination-active-color="#aaa">
            <Slide v-for="item in areas" :key="item">
              <div class="city-wrap">
                {{ item }}
              </div>
            </Slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel"
export default {
  components: {
    Carousel,
    Slide
  },
  computed: {
    areas() {
      return this.$store.getters.areas
    }
  }
}
</script>

<style>
.city-wrap {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #aaa;
  box-shadow: 1px 1px 2px 1px #aaa;
  margin-bottom: 15px;
  cursor: pointer;
  position: relative;
}
.city-wrap:hover {
  animation: wheel 0.5s;
}

.city-wrap::after {
  content: "";
  display: block;
  width: 20px;
  height: 4px;
  background-color: transparent;
  position: absolute;
  bottom: -15px;
  left: 40%;
  z-index: 22;
  transition: all 2s;
}

.city-wrap:hover::after {
  background-color: #000;
}

@keyframes wheel {
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
