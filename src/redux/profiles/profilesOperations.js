import axios from 'axios';
import actions from './profilesActions';

axios.defaults.baseURL = 'http://10.11.1.188:8080';
// axios.defaults.baseURL = 'http://localhost:8080';

const fetchProfiles = () => async dispatch => {
  dispatch(actions.fetchProfilesRequest());

  try {
    const response = await axios.get('/api/profiles/all');
    dispatch(actions.fetchProfilesSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchProfilesError(error));
  }
};

export default { fetchProfiles };
