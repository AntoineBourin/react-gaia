import { connect } from 'react-redux';
import ProjectState from '../components/ProjectState';
import { moveIssueToState } from '../actions/issue';
import { getIssuesByState } from '../reducers/issue';

const mapStateToProps = (state, { projectState }) => {
  const stateIssues = getIssuesByState(state, projectState.id);
  return {
    issues: stateIssues,
  };
};
const mapDispatchToProps = dispatch => ({
  moveIssue: (issueId, stateId) => dispatch(moveIssueToState(issueId, stateId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectState);
