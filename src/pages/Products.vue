<template>
  <h1>產品頁面</h1>
  <section class="container">
    <div class="row">
      <div class="col-4 gy-4" v-for="product in apiStore.productData" :key="product.id">
        <div class="card h-100">
          <img :src="product.imageUrl" alt="" class="card-img">
          <div class="card-body">
            <div class="card-title object-fit-cover">{{ product.title }}</div>
            <div class="card-content">{{ product.content }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup name="Products">
  import { onMounted } from 'vue';
  import { useApiStore } from '../stores/apiStore';

  const apiStore = useApiStore();

  onMounted(() => {
    apiStore.getProducts();
  });
  
</script>

<style scoped>
  .card-img{
    height: 200px;
    max-width: 100%;
    object-fit: cover;
    object-position: center;
    display: block;
  }
</style>