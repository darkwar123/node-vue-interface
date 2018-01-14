<template>
  <div class="hello">
    <img src="../assets/images/logo.png">
    <h1>
      {{ msg }}
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'index',
    data() {
      return {
        msg: 'Hello World',
      };
    },
  };
</script>

<style scoped lang="scss">
  .hello{
    text-align: center;
  }
</style>
