<template>
  <div class="container">
    <div class="row">
      <div class="col-2 bg-info">
        <router-link class="text-white text-center nav-link-box mt-2" active-class="active-box" to="/test/products">
          產品頁面
        </router-link>
        <router-link class="text-white text-center nav-link-box mt-2" active-class="active-box" to="/test/userTable">
          使用者表單
        </router-link>
        <router-link class="text-white text-center nav-link-box mt-2" active-class="active-box" to="/test/vtest">
          vtest
        </router-link>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup name="Test">

</script>

<style scoped>
  .nav-link-box {
    display: block;
    padding: 0.5rem 1rem;
    color: #333;
    transition: background-color 0.3s ease;
  }
  .nav-link-box:hover,.active-box {
    background-color: #9c87e6;
    font-weight: 900;
    
  }
</style>