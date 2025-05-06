<template>
  <input type="text" v-model="pText" placeholder="請輸入姓名">
  <p>Hello,{{ pText }}</p>
  <hr>
  <div class="d-flex">
    <div>
      <input type="text" v-model="imgUrl" placeholder="請輸入網址">
    </div>
    <img :src="imgUrl" alt="圖片" height="200">
  </div>
  <hr>
  <div class="d-flex">
    <input type="number" v-model="inputNum" placeholder="請輸入數字">
    <p class="text-danger" v-show="showWarning">「超過上限！」</p>
  </div>
  <hr>
  <div class="d-flex">
    <input type="number" v-model="qty" placeholder="請輸入數量">
    <input type="number" v-model="price" placeholder="請輸入單價">
  </div>
  <p>總價:{{total}}</p>
  <hr>
  <label for="userHeight">身高：</label>
  <input type="text" v-model="userInfo.userHeight" placeholder="輸入身高" id="userHeight">
  <label for="userWeight">體重：</label>
  <input type="text" v-model="userInfo.userWeight" placeholder="輸入體重" id="userWeight">
  <p>使用者的BMI:{{userBmi ?`${userBmi.toFixed(2) }`:"請輸入身高體重"}} 
    <span v-show="userInfo.userWarning" class="text-danger ms-4">請注意健康！</span>
  </p>
</template>


<script setup name="Vtest">
// 第1題：建立一個輸入框和一個段落，當使用者在輸入框輸入名字時，段落會即時顯示「Hello, [名字]！」
  import { ref, watch,computed,reactive } from 'vue';
  const pText = ref("")
// 第2題：建立一個圖片與一個輸入框，使用者在輸入框輸入圖片網址時，圖片會即時顯示該網址的圖。
  const imgUrl = ref("")
// 第3題：有一個數字輸入框，當使用者輸入數字時，若數值超過 100，畫面下方顯示「超過上限！」。
  const inputNum = ref()
  const showWarning = ref(false)
  watch(inputNum,(newValue)=> showWarning.value = newValue > 100)
// 第4題：建立兩個輸入框（分別為「數量」與「單價」）與一個顯示「總價」的區域。當任一輸入值變化時，自動重新計算總價。
  const qty = ref()
  const price = ref()
  const total = computed(()=>{
    return qty.value*price.value || ""
  })

// 第5題：建立一個簡單的 BMI 計算器，有「身高(cm)」與「體重(kg)」輸入欄位，以及一個計算結果區塊，顯示「你的 BMI 為：xx」和 BMI 評價（過輕、正常、過重）。
  const userInfo = reactive({
    userHeight: 0,
    userWeight: 0,
    userWarning:false
  })
  const userBmi = computed(()=>{
    return (userInfo.userWeight/(userInfo.userHeight/100)**2)
  })
  watch(userBmi,(newVal)=>{
    userInfo.userWarning = newVal > 30
  })
// 第2題：
</script>

<style scoped>

</style>