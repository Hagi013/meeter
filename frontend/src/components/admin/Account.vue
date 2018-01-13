<template lang='pug'>
  .account
    .container-fluid
      // 新規
      .row
        .col
          .card
            .card-body
              .card-title New Account
              .card-text
                .row
                  .col-2
                    label(for='organization') Organization
                  .col
                    select#organization.form-control(v-model='newAccount.organization_id')
                      option
                      option(v-for='o in organizations' v-bind:value='o.id') {{o.name}}
                    small.form-control-feedback.text-danger(v-show='hasInputError.organization.value') {{ hasInputError.organization.msg }}
              .card-text.mt-3
                .row
                  .col-2
                    label(for='account-name') Account Name
                  .col
                    input#account-name.form-control(type='text' placeholder='Account Name' v-model='newAccount.name')
                    small.form-control-feedback.text-danger(v-show='hasInputError.name.value') {{ hasInputError.name.msg }}

              .text-right.my-3
                button.btn.btn-primary(type='button' v-on:click='register') Register
      // 一覧
      .row
        .col
          .card
            .card-body
              .card-title Organization List
              List(v-bind:accounts='accounts' v-bind:organizations='organizations')



</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import List from './account/list';
  import { notEmptyCheck } from '../../lib/utils/check-util';

  export default {
    name: 'Account',

    components: { List },

    data() {
      return {
        newAccount: {
          organization_id: '',
          name: '',
        },
        organizations: [],
        accounts: [],
        hasInputError: {
          organization: {
            value: false,
            msg: '',
          },
          name: {
            value: false,
            msg: '',
          },
        },

      };
    },

    async mounted() {
      await this.init();
    },

    methods: {
      ...mapActions(['getAllAccounts', 'registerAccount', 'getAllOrganizations']),
      ...mapGetters(['organizationsState', 'accountsState']),

      async init() {
        this.organizations = await this.getAllOrganizations();
        this.accounts = await this.getAllAccounts();
        this.newAccount = {
          organization_id: '',
          name: '',
        };
        Object.keys(this.hasInputError).forEach((k) => {
          this.hasInputError[k] = {
            value: false,
            msg: '',
          };
        });
      },

      register() {
        if (this.validate()) return;
        this.registerAccount(this.newAccount);
        this.init();
      },

      validate() {
        this.validateOrg();
        this.validateName();
        console.log(Object.keys(this.hasInputError).some(k => this.hasInputError[k].value));
        return Object.keys(this.hasInputError).some(k => this.hasInputError[k].value);
      },

      validateOrg() {
        if (notEmptyCheck(this.newAccount.organization_id)) {
          this.hasInputError.organization.value = false;
          return;
        }

        this.hasInputError.organization = {
          value: true,
          msg: 'You should input name.',
        };
      },

      validateName() {
        if (notEmptyCheck(this.newAccount.name)) {
          this.hasInputError.name.value = false;
          return;
        }

        this.hasInputError.name = {
          value: true,
          msg: 'You should select organization.',
        };
      },
    },

    computed: {},

    fileters: {},

    watch: {},
  };
</script>

<style>
</style>
