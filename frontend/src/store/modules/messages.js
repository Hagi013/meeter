/* eslint-disable no-shadow,no-param-reassign */
import moment from 'moment';
import * as types from '../mutation-types';

const state = {
  messages: [],
  dateFromAPI: '',
};

const mutations = {
  [types.MESSAGE.REGISTER](state, payload) {
    if (Array.isArray(payload)) {
      state.messages = payload;
    } else {
      state.messages.push(payload);
    }
  },
  [types.MESSAGE.GET_TIME](state) {
    state.dateFromAPI = moment();
  },
};

export default {
  state,
  mutations,
};
