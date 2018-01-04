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
                    option(v-for='o in this.organizationsState()' v-bind:value='o.id') {{o.name}}
              .row.mt-3
                .col-2
                  label(for='to') To
                .col
                  select#to.form-control(v-model='toOrganization')
                    option
                    option(v-for='o in this.organizationsState()' v-bind:value='o.id') {{o.name}}

            .card-text.mt-3
              .row
                .col
                  table.table.table-hover
                    thead
                      th Date
                      th
                        tr From
                        tr Organization
                      th
                        tr To
                        tr Organization
                      th Content
                    tbody
                      tr(v-for='message in filteredMessages')
                        td {{message.sentTime | calcDatetime}}
                        td
                          tr {{whoIs(message.fromId)}}
                          tr {{belongsTo(message.fromId)}}
                        td
                          tr {{whoIs(message.toId)}}
                          tr {{belongsTo(message.toId)}}
                        td {{message.text}}

</template>

<script>
  import moment from 'moment';
  import { mapActions, mapGetters } from 'vuex';
  import { emptyCheck } from '../lib/utils/check-util';

  export default {
    name: 'Message',

    data() {
      return {
        fromOrganization: '',
        toOrganization: '',
        filteredMessages: [],
      };
    },

    async mounted() {
      await this.init();
    },

    methods: {
      ...mapActions(['getAllOrganizations', 'getAllAccounts', 'getAllMessages']),
      ...mapGetters(['organizationsState', 'accountsState', 'messagesState']),

      async init() {
        await this.getAllOrganizations();
        await this.getAllAccounts();
        await this.getAllMessages();

        this.fromOrganization = '';
        this.toOrganization = '';

        this.filteredMessages = this.messagesState();
      },

      whoIs(id) {
        const match = this.accountsState().filter(o => o.id === id)[0];
        if (emptyCheck(match)) return id;
        return match.name;
      },

      belongsTo(id) {
        const who = this.accountsState().filter(o => o.id === id)[0];
        if (emptyCheck(who)) return null;
        const organization = this.organizationsState().filter(o => o.id === who.organization_id)[0];
        if (emptyCheck(organization)) return null;
        return organization.name;
      },
    },

    filters: {
      calcDatetime: time => moment(Number(time)).format('YYYY-MM-DD HH:mm:ss'),
    },
  };
</script>

<style scoped>

</style>
