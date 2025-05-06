
import { defineStore } from "pinia";
import $ from 'jquery'

export const useApiStore = defineStore('api',{
  state(){
    return{
      productData:[],

    }
  },
  actions:{
    // 產品data
    async getProducts(){
      try{
        const response = await $.get('https://ec-course-api.hexschool.io/v2/api/starstar/products/all')
        this.productData = response.products
      }catch{
        alert('獲取產品失敗')
      }
    },

    // 結帳資訊
    async orderPush(formData) {
      try {
        const response = await $.ajax({
          url: "https://ec-course-api.hexschool.io/v2/api/starstar/order",
          method: "POST",
          contentType: "application/json",
          data: JSON.stringify({
            data: {
              user: {
                name: formData.name,
                email: formData.email,
                tel: formData.tel,
                address: formData.address,
              },
              message: formData.message || "",
            },
          }),
        });
    
        console.log("訂單送出成功", response);
        alert("訂單已成功送出！");
      } catch (error) {
        console.error("推送失敗：", error);
        alert("訂單送出失敗，請稍後再試。");
      }
    }
  },
})