// @flow

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectKanban from '../components/ProjectKanban';
import { getTeamsProjectInfo } from '../../team/actions/teams';

const mapStateToProps = state => ({
  teams: state.team.teams.teamsInformations,
  isFetchingTeams: state.team.teams.fetchingTeams,
});

const mapDispatchToProps = dispatch => ({
  getTeamsProjectInformations: () => dispatch(getTeamsProjectInfo()),
});

class ProjectKanbanContainer extends React.PureComponent {
  componentWillMount() {
    const { getTeamsProjectInformations } = this.props;
    getTeamsProjectInformations();
  }

  render() {
    return (
      <ProjectKanban {...this.props} />
    );
  }
}

ProjectKanbanContainer.propTypes = {
  getTeamsProjectInformations: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectKanbanContainer);
