<template lang='pug'>
  .account
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
  export default {
    name: 'Account',

    components: { },

    data() {
      return {
      };
    },

    mounted() {},

    methods: {
    },

    computed: {},

    fileters: {},

    watch: {},
  };
</script>

<style>
</style>
