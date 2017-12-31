<template lang='pug'>
  .organization
    .container-fluid
      // 新規
      .row
        .col
          .card
            .card-body
              .card-title New Organization
              .card-text
                .row
                  .col-2
                    label(for='organization-name') Company Name
                  .col
                    input#organization-name.form-control(type='text' placeholder='Company Name' v-model='newOrganization.name')

              .card-text.mt-3
                .row
                  .col-2
                    label(for='organization-phone') Phone Number
                  .col
                    input#organization-phone.form-control(type='tel' placeholder='Phone Number' v-model='newOrganization.phone')
                    small.form-control-feedback.text-danger(v-show='hasInputError.phone.value') {{ hasInputError.phone.msg }}

              .card-text.mt-3
                .row
                  .col-2
                    label(for='organization-location') Company location
                  .col
                    input#organization-location.form-control(type='text' placeholder='Company Location' v-model='newOrganization.location')

              .text-right.my-3
                button.btn.btn-primary(type='button' v-on:click='register') Register
      // 一覧
      .row
        .col
          .card
            .card-body
              .card-title Organization List
              List(v-bind:organizations='organizations')



</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import List from './organization/list';
  import { emptyCheck } from '../lib/utils/check-util';

  export default {
    name: 'Organization',

    components: { List },

    data() {
      return {
        organizations: this.$store.state.organizations.organizations,
        newOrganization: {
          name: '',
          phone: '',
          location: '',
        },
        hasInputError: {
          phone: {
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
      ...mapActions(['registerOrganization', 'getAllOrganizations']),

      ...mapGetters(['organizationsState', 'organizationsStateByName']),

      async init() {
        this.newOrganization = {
          name: '',
          phone: '',
          location: '',
        };

        this.hasInputError = {
          phone: {
            value: false,
            msg: '',
          },
        };

        await this.getAllOrganizations();
        this.organizations = this.organizationsState();
      },

      async register() {
        if (this.validate()) return;
        this.registerOrganization(this.newOrganization);
        await this.init();
      },

      validate() {
        if (this.validatePhoneNumber()) return true;
        return false;
      },

      validatePhoneNumber() {
        if (emptyCheck(this.newOrganization.phone) || !this.newOrganization.phone.match(/^\d{7,13}$/)) {
          this.hasInputError = {
            phone: {
              value: true,
              msg: 'You should input phone number.',
            },
          };
          return true;
        }
        return false;
      },
    },

    computed: {},

    fileters: {},

    watch: {},
  };
</script>

<style>
</style>
