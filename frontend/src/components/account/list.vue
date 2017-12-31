<template lang='pug'>
  .list

    table.table.table-hover

      thead
      tr
        th(scope='col') id
        th(scope='col') organization
        th(scope='col') name
        th(scope='col') create_time

      tbody
        tr(v-for='a in accounts')
          td {{a.id}}
          td {{organizationName(a.organization_id)}}
          td {{a.name}}
          td {{a.id | calcDatetime}}

</template>

<script>
  import moment from 'moment';

  export default {
    name: 'List',

    props: ['accounts', 'organizations'],

    methods: {
      organizationName(id) {
        return this.$props.organizations.filter(o => o.id === id).map(o => o.name)[0];
      },
    },

    filters: {
      calcDatetime(id) {
        return moment(Number(id)).format('YYYY-MM-DD HH:mm:ss');
      },

    },

  };

</script>

<style scoped>

</style>
