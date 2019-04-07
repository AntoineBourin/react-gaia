// @flow

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectKanban from '../components/ProjectKanban';
import { getIssuesByProjectId } from '../actions/issue';

const mapStateToProps = (state, { projectId }) => {
  const { project } = state.project;
  return {
    isFetchingIssues: project.fetchingIssues,
    currentProject: project.projects[projectId] || null,
  };
};

const mapDispatchToProps = dispatch => ({
  getProjectIssues: projectId => dispatch(getIssuesByProjectId(projectId)),
});

class ProjectKanbanContainer extends React.PureComponent {
  componentWillMount() {
    const { projectId, getProjectIssues } = this.props;
    getProjectIssues(projectId);
  }

  render() {
    return (
      <ProjectKanban {...this.props} />
    );
  }
}

ProjectKanbanContainer.propTypes = {
  projectId: PropTypes.string.isRequired,
  getProjectIssues: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectKanbanContainer);
