import { api } from '../../../lib/core-api/api';
import currentUserTeamsProjects from '../../../lib/core-api/graphql/query/currentUserTeamsProjects.graphql';
import { makeActionCreator } from '../../../lib/redux/helper';
import { FETCHING_TEAMS, SET_USER_TEAMS } from './constant';

export const fetchingTeams = makeActionCreator(FETCHING_TEAMS);
export const setTeamsData = makeActionCreator(SET_USER_TEAMS, 'teams');

export const getTeamsProjectInfo = () => dispatch => {
  dispatch(fetchingTeams());
  api.graphClient.request(currentUserTeamsProjects, {})
    .then(res => {
      dispatch(setTeamsData(res.data.node.me.teams));
    });
};
