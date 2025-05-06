<template>
  <nav class="bg-dark">
    <div class="container">
      <div class="d-flex align-items-center">
        <router-link to="/home">
          <h1 class="text-white py-3 h4">尚未命名</h1>
        </router-link>
        <router-link class="text-white nav-link-box" to="/test" active-class="active-box">
          練習
        </router-link>
      </div>
    </div>

  </nav>
</template>

<script setup name="Navbar">

</script>

<style scoped>
  .nav-link-box {
    display: block;
    padding: 0.5rem 1rem;
    color: #333;
    transition: background-color 0.3s ease;
  }
  .nav-link-box:hover,.active-box {
    background-color: #3d0d0d;
    font-weight: 900;
  }

</style>