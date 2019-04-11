// @flow

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ProjectKanban from '../components/ProjectKanban';
import { getIssuesByProjectId, updateIssueLocally } from '../actions/issue';
import issueNormalizer from '../../../lib/normalizers/issueNormalizer';

const mapStateToProps = (state, { projectId }) => {
  const { project } = state.project;
  return {
    isFetchingIssues: project.fetchingIssues,
    currentProject: project.projects[projectId] || null,
  };
};

const mapDispatchToProps = dispatch => ({
  getProjectIssues: projectId => dispatch(getIssuesByProjectId(projectId)),
  updateProjectIssue: (issueId, updatedIssue) => dispatch(updateIssueLocally(issueId, updatedIssue)),
});

class ProjectKanbanContainer extends React.PureComponent {
  componentWillMount() {
    const { projectId, getProjectIssues } = this.props;
    getProjectIssues(projectId);
    this.subscribeProjectHub(projectId);
  }

  subscribeProjectHub(projectId) {
    const url = new URL(process.env.REACT_APP_MERCURE_HUB);
    url.searchParams.append('topic', `${process.env.REACT_APP_MERCURE_TOPIC}/project/${projectId}`);
    const eventSource = new EventSource(url);
    eventSource.onmessage = e => this.newIssueUpdate(e);
  }

  newIssueUpdate(event) {
    const { updateProjectIssue } = this.props;
    const issue = issueNormalizer.normalizeIssueResponse(event.data);
    updateProjectIssue(issue.id, issue);
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
  updateProjectIssue: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectKanbanContainer);
