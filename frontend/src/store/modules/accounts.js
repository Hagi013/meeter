/* eslint-disable no-shadow,no-param-reassign */
import moment from 'moment';
import * as types from '../mutation-types';

const state = {
  accounts: [],
  dateFromAPI: '',
};

const mutations = {
  [types.ACCOUNT.REGISTER](state, payload) {
    if (Array.isArray(payload)) {
      state.accounts = payload;
    } else {
      state.accounts.push(payload);
    }
  },
  [types.ACCOUNT.GET_TIME](state) {
    state.dateFromAPI = moment();
  },
};

export default {
  state,
  mutations,
};
