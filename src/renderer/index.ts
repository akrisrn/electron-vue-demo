import '@/components';
import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';

Vue.config.productionTip = false;

// noinspection JSUnusedGlobalSymbols
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
