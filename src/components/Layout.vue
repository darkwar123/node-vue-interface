<template>
  <section id="layout">
    <app-header/>
    <div class="app-content">
      <router-view/>
    </div>
    <app-footer/>
  </section>
</template>

<script>
  import api from '@/api';
  import Header from '@/components/Header';
  import Footer from '@/components/Footer';

  export default {
    name: 'layout',
    components: {
      'app-header': Header,
      'app-footer': Footer,
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
    display: flex;
    flex-direction: column;

    .app-content {
      flex: 1 0;
      padding: 1rem;
    }
  }
</style>
