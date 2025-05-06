
<template>
  <Navbar/>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script setup name="app">
  import Navbar from './components/Navbar.vue';
</script>

<style scoped>

</style>
