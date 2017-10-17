<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>

<!--Global styles should be here-->
<style lang="scss">
  @import './assets/scss/variables.scss';
  @import './assets/scss/app.scss';

  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~font-awesome/css/font-awesome.css';
</style>
