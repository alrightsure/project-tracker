import Vue from "vue";
import axios from "axios";

import storage from "electron-json-storage";

import App from "./App";
import router from "./router";
import store from "./store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

if (!process.env.IS_WEB) Vue.use(require("vue-electron"));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(Buefy);

storage.setDataPath(storage.getDefaultDataPath());
console.log(storage.getDataPath());

/* eslint-disable no-new */
new Vue({
    components: { App },
    router,
    store,
    template: "<App/>"
}).$mount("#app");
