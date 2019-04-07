import { createReducer } from '../../../lib/redux/helper';
import { FETCHING_ISSUES, SET_PROJECT_STATES } from '../actions/constant';

const initialState = {
  fetchingIssues: false,
  projects: {},
};

const actionHandlers = {
  [SET_PROJECT_STATES]: (state, { project }) => (
    { ...state,
      projects: {
        ...state.projects,
        [project.id]: project,
      },
    }),
  [FETCHING_ISSUES]: state => ({ ...state, fetchingIssues: true }),
};

export default createReducer(initialState, actionHandlers);
