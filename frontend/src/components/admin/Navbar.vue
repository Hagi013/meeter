<template lang='pug'>
  .navbar
    nav.navbar.navbar-expand-lg.navbar-light.bg-light
      button.navbar-toggler(type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation')
        span.navbar-toggler-icon

      #navbarSupportedContent.collapse.navbar-collapse
        ul.navbar-nav.mr-auto
          li.nav-item.active
            a.nav-link.clickable(v-on:click='goto("landing")') Home
          li.nav-item.active
            a.nav-link.clickable(v-on:click='goto("organization")') Organization
          li.nav-item.active
            a.nav-link.clickable(v-on:click='goto("account")') Account
          li.nav-item.active
            a.nav-link.clickable(v-on:click='goto("message")') Message

</template>

<script>
  import router from '../../router/index';

  export default {
    name: 'Navbar',
    data() {
      return {
        path: {
          login: '/login',
          landing: '/',
          organization: '/admin/organization',
          account: '/admin/account',
          message: '/admin/message',
        },
      };
    },
    mounted() {
    },
    methods: {
      goto(path) {
        router.push(this.path[path]);
      },
    },
    computed: {},
    filters: {},
    watch: {},
  };
</script>

<style>

  .clickable {
    cursor: pointer;
  }

</style>
