import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import abc from "./router.js";
import {ss} from "./router.js";

ss();
createApp(App).use(abc).mount('#app')
