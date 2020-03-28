<template>
  <footer class="footer-wrap">
    <b-container>
      <b-row>
        <b-col class="d-flex justify-content-end align-items-center user-icon">
          <font-awesome-icon icon="users" />
          <span class="ml-2">{{ $store.state.counter }}</span>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {}
</script>

<style>
.user-icon {
  font-size: 1.4rem;
}
</style>
