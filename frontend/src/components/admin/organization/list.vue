<template lang='pug'>
  .list

    table.table.table-hover
      thead
        tr
          th(scope='col') id
          th(scope='col') name
          th(scope='col') phone
          th(scope='col') location
          th(scope='col') create_time

      tbody
        tr(v-for='o in organizations')
          td {{o.id}}
          td {{o.name}}
          td {{o.phone}}
          td {{o.location}}
          td {{o.id | calcDatetime}}

</template>

<script>
  import moment from 'moment';

  export default {
    name: 'List',

    components: {},

    props: ['organizations'],

    data() {
      return {
      };
    },

    mounted() {},

    methods: {},

    computed: {},

    filters: {
      calcDatetime: id => moment(Number(id)).format('YYYY-MM-DD HH:mm:ss'),
    },

    watch: {},
  };
</script>

<style>
</style>
