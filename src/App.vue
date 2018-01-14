<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  /* Global dependences should be here */
  global.$ = global.jQuery = require('jquery');
  global.Tether = require('tether');
  require('bootstrap');

  export default {
    name: 'app',
  };
</script>

<!--Global styles should be here-->
<style lang="scss">
  @import './assets/scss/app.scss';

  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~font-awesome/css/font-awesome.css';
</style>
