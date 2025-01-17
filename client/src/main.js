import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import store from './store'
import router from './router'
import './theme/index.css';
import axios from 'axios';
import md5 from 'js-md5';
import './mock/loginmock.js'
// import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
Vue.prototype.$md5 = md5;
Vue.prototype.$server = "http://localhost";
Vue.prototype.$localServer = "http://localhost";
Vue.prototype.$url = Vue.prototype.$server +  ":10086";
Vue.prototype.$loginUrl = Vue.prototype.$url +  "/user/login";
Vue.prototype.$registerUrl = Vue.prototype.$url +  "/user/register";
Vue.prototype.$salt = "QYXTQL%%%%%11231LDLJHHAHSACOASJCPJASODPP:LNKJDAS@123123qwe123dfaf513234";


new Vue({
  store,
  router,
  render: h => h(App),

}).$mount('#app');
