import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'

const app =createApp(App);

app.config.globalProperties.$getImage = (imageName) => {
    return require(`@/assets/images/${imageName}`);
}

app.use(router).mount('#app')
