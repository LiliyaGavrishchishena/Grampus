import types from './profilesActionTypes';

export default function profilesReducer(state = [], { type, payload }) {
  switch (type) {
    case types.PROFILES_FETCH_SUCCESS:
      return payload.ids.profiles;

    default:
      return state;
  }
}
