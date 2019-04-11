import { makeActionCreator } from '../../../lib/redux/helper';
import { FETCHING_ISSUES, SET_PROJECT_STATES, ADD_ISSUES, SET_ISSUES_LIST } from './constant';
import graphClient from '../../../lib/core-api/graphql/GraphClient';
import projectStateIssuesQuery from '../../../lib/core-api/graphql/query/projectStateIssues.graphql';
import updateIssueState from '../../../lib/core-api/graphql/query/updateIssueState.graphql';
import { findIssueById, findIssueIndexById } from '../reducers/issue';

export const fetchingIssues = makeActionCreator(FETCHING_ISSUES);
export const setProjectStates = makeActionCreator(SET_PROJECT_STATES, 'project');
export const addIssues = makeActionCreator(ADD_ISSUES, 'issues');
export const setIssuesList = makeActionCreator(SET_ISSUES_LIST, 'issues');

const isProjectExist = (state, projectId) => !!state.project.project.projects[projectId];

export const getIssuesByProjectId = (projectId) => (dispatch, getState) => {
  if (isProjectExist(getState(), projectId)) {
    return;
  }
  dispatch(fetchingIssues());
  graphClient.request(projectStateIssuesQuery, { id: projectId })
    .then(res => {
      const { project } = res.data.node;
      const issuesList = [];
      const states = project.states.reduce((env, curr) => {
        curr.issues.forEach(issue => issuesList.push({ ...issue, stateId: curr.id }));
        const { issues, ...rest } = curr;
        return {
          ...env,
          [curr.id]: rest,
        };
      }, {});
      dispatch(addIssues(issuesList));
      dispatch(setProjectStates({ id: project.id, label: project.label, states }));
    });
};

export const updateIssueLocally = (issueId, updatedIssue) => (dispatch, getState) => {
  const issueIndex = findIssueIndexById(getState(), issueId.toString());
  if (issueIndex === -1) {
    return;
  }
  const issuesList = getState().project.issue.issues;
  const newIssues = [...issuesList];
  newIssues[issueIndex] = updatedIssue;
  dispatch(setIssuesList(newIssues));
};

export const moveIssueToState = (issueId, stateTargetId) => (dispatch, getState) => {
  const issue = findIssueById(getState(), issueId.toString());
  issue.stateId = stateTargetId;
  dispatch(updateIssueLocally(issueId, issue));

  graphClient.mutate(updateIssueState, { id: issueId, stateId: stateTargetId });
};
