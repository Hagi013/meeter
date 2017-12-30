/* eslint-disable consistent-return */
import moment from 'moment';
import * as types from './mutation-types';
import Try from '../lib/try';
import Organization from '../model/organization';
import Account from '../model/account';

export const registerOrganization = async ({ commit, state }, organization) => {
  const resultWrapped = await Try.promiseApply(() => Organization.save(organization));
  if (resultWrapped.isFailure()) return;

  const registered = Organization.apply(resultWrapped.get());
  commit(types.ORGANIZATION.REGISTER, registered);
};

export const getAllOrganizations = async ({ commit, state }) => {
  const dateFromAPI = state.organizations.dateFromAPI;
  if (dateFromAPI !== '' || moment().diff(moment(dateFromAPI), 'minutes') < 1) return state.organizations.organizations;

  const resultWrapped = await Try.promiseApply(() => Organization.findAll());
  if (resultWrapped.isFailure()) Error('Finding via API is failed');

  const organizations = resultWrapped.get();
  commit(types.ORGANIZATION.GET_TIME);
  commit(types.ORGANIZATION.REGISTER, organizations);
  return state.organizations.organizations;
};

export const registerAccount = async ({ commit, state }, account) => {
  if (account.constructor.name !== 'Account') return;

  await Account.save(account);
  const accounts = state.accounts.accounts;
  commit(types.ACCOUNT.REGISTER, accounts);
};

export const getAllAccounts = async ({ commit, state }) => {
  const dateFromAPI = state.accounts.dateFromAPI;
  if (dateFromAPI === '' || moment().diff(moment(dateFromAPI), 'minutes') < 1) return state.accounts.accounts;

  const accountsWrap = await Try.promiseApply(() => Account.findAll());
  if (accountsWrap.isFailure()) return Error('Finding via API is failed');
  const registered = accountsWrap.get();

  commit(types.ACCOUNT.GET_TIME);
  commit(types.ACCOUNT.REGISTER, registered);
  return state.accounts.accounts;
};
