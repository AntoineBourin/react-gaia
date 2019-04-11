import { createReducer } from '../../../lib/redux/helper';
import { ADD_ISSUES, SET_ISSUES_LIST } from '../actions/constant';

const initialState = {
  issues: [],
};

const actionHandlers = {
  [ADD_ISSUES]: (state, { issues }) => (
    { ...state,
      issues: state.issues.concat(issues),
    }),
  [SET_ISSUES_LIST]: (state, { issues }) => (
    { ...state,
      issues,
    }),
};

export const getIssuesByState = (state, projectStateId) => (
  state.project.issue.issues.filter(issue => issue.stateId === projectStateId));

export const findIssueById = (state, issueId) => (
  state.project.issue.issues.find(issue => issue.id === issueId));

export const findIssueIndexById = (state, issueId) => (
  state.project.issue.issues.findIndex(issue => issue.id === issueId));

export default createReducer(initialState, actionHandlers);
