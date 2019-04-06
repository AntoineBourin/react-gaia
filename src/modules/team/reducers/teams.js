import { createReducer } from '../../../lib/redux/helper';
import { FETCHING_TEAMS, SET_USER_TEAMS } from '../actions/constant';

const initialState = {
  fetchingTeams: false,
  teamsInformations: [],
};

const actionHandlers = {
  [FETCHING_TEAMS]: (state) => ({ ...state, fetchingTeams: true }),
  [SET_USER_TEAMS]: (state, { teams }) => ({
    ...state,
    fetchingTeams: false,
    teamsInformations: teams,
  }),
};

export default createReducer(initialState, actionHandlers);
