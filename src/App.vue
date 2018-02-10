<template>
  <div id="app">
    <router-view/>
    <loading v-if="loading"/>
  </div>
</template>

<script>
  import Loading from '@/components/Loading';

  /* Global dependences should be here */
  global.$ = global.jQuery = require('jquery');
  global.Tether = require('tether');
  require('bootstrap');

  export default {
    name: 'app',
    components: {
      'loading': Loading,
    },
    data() {
      return {
        loading: true,
      };
    },
    created() {
      this.$once('loaded', () => {
        this.loading = false;
      });
    },
  };
</script>

<!--Global styles should be here-->
<style lang="scss">
  @import './assets/scss/app.scss';

  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~font-awesome/css/font-awesome.css';
</style>
