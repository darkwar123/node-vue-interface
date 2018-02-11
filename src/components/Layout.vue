<template>
  <section id="layout">
    <router-view/>
  </section>
</template>

<script>
  import api from '@/api';

  export default {
    name: 'layout',
    components: {

    },
    created() {
      this.$parent.$emit('loaded');
    },
    beforeRouteEnter(to, from, next) {
      api.connect().then(() => {
        next();
      })
      .catch(console.log);
    },
  };
</script>

<style lang="scss">
  #layout {
    width: 100%;
    height: 100%;
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
  }
</style>
