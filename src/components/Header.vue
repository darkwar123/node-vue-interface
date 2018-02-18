<template>
  <nav id="app-header" class="navbar sticky-top navbar-light bg-light">
    header {{scrollTop}}
  </nav>
</template>

<script>
  import api from '@/api';

  export default {
    name: 'app-header',
    data() {
      return {
        scrollTop: 0,
      };
    },
    created() {
      window.document.body.onscroll = () => {
        this.scrollTop = window.pageYOffset || window.document.documentElement.scrollTop;
      };
    },
  };
</script>

<style lang="scss">
  #app-header {
    width: 100%;

  }
</style>
