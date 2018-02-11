<template>
  <div id="index">
    Index
    <br>
    <simple-modal></simple-modal>
    <button class="btn btn-primary" @click="$modal.show('simple-modal')">Open SimpleModal</button>
  </div>
</template>

<script>
  import SimpleModal from '@/modals/SimpleModal'

  export default {
    name: 'index',
    components: {
      'simple-modal': SimpleModal,
    },
  };
</script>

<style scoped lang="scss">
  #index{

  }
</style>
