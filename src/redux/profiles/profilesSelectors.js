import { createSelector } from 'reselect';

const getProfiles = state => state.profiles;
const getProfilesEntities = state => state.entities.profiles;

const getAllProfiles = createSelector(
  [getProfiles, getProfilesEntities],
  (ids, profiles) => ids.map(id => profiles[id]),
);
export default { getAllProfiles };
