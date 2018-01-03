<template lang='pug'>
  .message
    .container-fluid
      .row
        .col
          .card-body
            .card-title Search
            .card-text
              .row
                .col-2
                  label(for='from') From
                .col
                  select#from.form-control(v-model='fromOrganization')
                    option
                    option(v-for='o in organizations' v-bind:value='o.id') {{o.name}}
              .row.mt-3
                .col-2
                  label(for='to') To
                .col
                  select#to.form-control(v-model='toOrganization')
                    option
                    option(v-for='o in organizations' v-bind:value='o.id') {{o.name}}

            .card-text.mt-3
              .row
                .col
                  table.table.table-hover
                    thead
                      th Date
                      th From
                      th To
                      th Content
                    tbody
                      tr(v-for='message in filteredMessages')
                        td {{message.sent_time | calcDatetime}}
                        td {{message.from_id}}
                        td {{message.to_id}}
                        td {{message.text}}
      .row

</template>

<script>
  import moment from 'moment';
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Message',

    data() {
      return {
        organizations: [],
        fromOrganization: '',
        toOrganization: '',
        messages: [],
        filteredMessages: [],
      };
    },

    async mounted() {
      await this.init();
    },

    methods: {
      ...mapActions(['getAllOrganizations', 'getAllAccounts']),
      ...mapGetters([]),

      async init() {
        this.organizations = await this.getAllOrganizations();
      },
    },

    filters: {
      calcDatetime: id => moment(Number(id)).format('YYYY-MM-DD HH:mm:ss'),
    },
  };
</script>

<style scoped>

</style>
