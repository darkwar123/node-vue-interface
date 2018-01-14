<template>
  <section id="layout">
    <router-view/>
  </section>
</template>

<script>
  import api from '@/api';

  export default {
    name: 'layout',
    components: { },
    beforeRouteEnter(to, from, next) {
      return next();
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/scss/variables.scss";

  #layout {
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
