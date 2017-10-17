import Vue from 'vue';
import * as _ from 'lodash';
import * as $ from 'jquery/dist/jquery';
import * as io from 'socket.io-client/dist/socket.io';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

window._ = _;
window.$ = $;
window.io = io;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
