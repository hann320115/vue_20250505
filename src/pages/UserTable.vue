<template>
  <div class="container">
    <h1>結帳表單</h1>
    <form @submit.prevent="submitForm">
      <input v-model="form.name" placeholder="姓名" class="form-control mb-2" required />
      <input v-model="form.email" type="email" placeholder="Email" class="form-control mb-2" required />
      <input v-model="form.tel" type="tel" placeholder="電話" class="form-control mb-2" required />
      <input v-model="form.address" placeholder="地址" class="form-control mb-2" required />
      <textarea v-model="form.message" placeholder="留言（可選）" class="form-control mb-3" rows="3"></textarea>
      <button class="btn btn-primary" type="submit">送出訂單</button>
    </form>
  </div>
</template>

<script setup name="UserTable">
  import { ref } from 'vue';
  import { useApiStore } from '../stores/apiStore';
  const apiStore = useApiStore();
  const form = ref({
    name: '',
    email: '',
    tel: '',
    address: '',
    message: '', // 可選留言
  });
  const submitForm = () => {
    apiStore.orderPush(form.value);
  };
</script>

<style scoped>

</style>