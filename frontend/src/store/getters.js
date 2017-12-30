export const organizationsState = state => state.organizations.organizations;
export const organizationsStateByName = state => name =>
  state.organizations.organizations.filter(o => o.name === name);
export const accountsState = state => state.accounts.accounts;
