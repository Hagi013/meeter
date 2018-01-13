<template lang='pug'>
  #app
    Navbar
    router-view
</template>

<script>
  import Navbar from './components/admin/Navbar';

  export default {
    name: 'app',
    components: {
      Navbar,
    },
  };
</script>

<style>

</style>
