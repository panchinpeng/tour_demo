<template>
  <div class="pt-1">
    <b-container>
      <b-row>
        <b-col>
          <div>
            <b-nav tabs>
              <b-nav-item to="/about/hot">
                最新
              </b-nav-item>
              <b-nav-item to="/about/area">
                區域
              </b-nav-item>
            </b-nav>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <nuxt-child />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  middleware: ["storeDataVerify", "aboutTransformDefault"]
}
</script>

<style>
.nuxt-link-active {
  border: 1px solid #ccc !important;
}
</style>
