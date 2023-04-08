import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "../src/assets/main.css";
import { projectAuth } from './firebase/config';
import axios from "axios";

axios.defaults.baseURL = "https://vue3-293e6-default-rtdb.firebaseio.com";

let app;

projectAuth.onAuthStateChanged(()=>{
    if(!app){
       createApp(App).use(router).mount("#app");

    }
})

