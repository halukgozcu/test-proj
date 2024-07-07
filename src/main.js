import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import abc from "./router.js";
import {ss} from "./router.js";
import {createPinia} from "pinia";

const pinia = createPinia()
ss();
createApp(App).use(abc).use(pinia).mount('#app')
