<template>
  <div class="hello">
    <img src="../assets/images/logo.png">
    <h1><i class="fa fa-header"></i>{{ msg }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'ello World',
      };
    },
  };
</script>

<style scoped lang="scss">
  .hello{
    text-align: center;
  }
</style>
