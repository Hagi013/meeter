/* eslint-disable no-shadow,no-param-reassign */
import moment from 'moment';
import * as types from '../mutation-types';

const state = {
  organizations: [],
  dateFromAPI: '',
};

const mutations = {
  [types.ORGANIZATION.REGISTER](state, payload) {
    if (Array.isArray(payload)) {
      state.organizations = payload;
    } else {
      state.organizations.push(payload);
    }
  },
  [types.ORGANIZATION.GET_TIME](state) {
    state.dateFromAPI = moment();
  },
};
export default {
  state,
  mutations,
};
