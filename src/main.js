import Vue from 'vue';
import VModal from 'vue-js-modal';

Vue.use(VModal);

import App from './App.vue';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App },
});
