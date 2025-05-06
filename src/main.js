import { createApp } from 'vue'

import App from './App.vue'
import './scss/all.scss';


const app = createApp(App)
// 外部元件
import router from './router/index';
import { RouterLink ,RouterView} from 'vue-router';
import { createPinia } from 'pinia';
const pinia = createPinia();

app.component(RouterLink);
app.component(RouterView);
app.use(router)
app.use(pinia)

app.mount('#app')
