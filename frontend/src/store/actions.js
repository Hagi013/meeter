/* eslint-disable consistent-return */
import moment from 'moment';
import * as types from './mutation-types';
import Try from '../lib/try';
import Organization from '../model/organization';
import Account from '../model/account';
import Message from '../model/message';

const organizationSet = {
  stateFile: 'organizations',
  state: 'organizations',
  types: 'ORGANIZATION',
  serv: Organization,
};

const accountSet = {
  stateFile: 'accounts',
  state: 'accounts',
  types: 'ACCOUNT',
  serv: Account,
};

const messageSet = {
  stateFile: 'messages',
  state: 'messages',
  types: 'MESSAGE',
  serv: Message,
};

const getAll = async (commit, state, set) => {
  const dateFromAPI = state[set.stateFile].dateFromAPI;
  if (dateFromAPI !== '' && moment().diff(moment(dateFromAPI), 'minutes') < 1) return state[set.stateFile][set.state];

  const resultWrapped = await Try.promiseApply(() => set.serv.findAll());
  if (resultWrapped.isFailure()) Error('Finding via API is failed');

  const results = resultWrapped.get();
  commit(types[set.types].GET_TIME);
  commit(types[set.types].REGISTER, results);
  return state[set.stateFile][set.state];
};

const register = async (commit, set, target) => {
  const resultWrapped = await Try.promiseApply(() => set.serv.save(target));
  if (resultWrapped.isFailure()) return;

  const registered = set.serv.apply(resultWrapped.get());
  commit(types[set.types].REGISTER, registered);
};

export const registerOrganization = async ({ commit, state }, organization) => {
  await register(commit, organizationSet, organization);
};

export const getAllOrganizations = async ({ commit, state }) => {
  const results = await getAll(commit, state, organizationSet);
  return results;
};

export const registerAccount = async ({ commit, state }, account) => {
  await register(commit, accountSet, account);
};

export const getAllAccounts = async ({ commit, state }) => {
  const results = await getAll(commit, state, accountSet);
  return results;
};

export const getAllMessages = async ({ commit, state }) => {
  const results = await getAll(commit, state, messageSet);
  return results;
};
