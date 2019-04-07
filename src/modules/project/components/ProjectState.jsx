import React from 'react';
import PropTypes from 'prop-types';
import { DropTarget } from 'react-dnd';
import { ItemTypes } from '../../../draggableTypes';

import IssueThumbnail from '../../issue/components/IssueThumbnail';

const stateTarget = {
  drop: (props, monitor) => {
    const source = monitor.getItem();
    props.moveIssue(source.props.issue.id, props.projectState.id);
  },
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
});

const ProjectState = ({ projectState, issues, moveIssue, projectId, connectDropTarget, isOver }) => connectDropTarget(
  <div>
    <header>
      <h2>{projectState.label}</h2>
    </header>
    <div className="issues">
      {issues.map(issue => (
        <IssueThumbnail issue={issue} key={issue.id} />
      ))}
    </div>
  </div>,
);

ProjectState.propTypes = {
  projectState: PropTypes.object.isRequired,
  issues: PropTypes.array.isRequired,
  moveIssue: PropTypes.func.isRequired,
  projectId: PropTypes.string.isRequired,
};

ProjectState.defaultProps = ({});

export default DropTarget(ItemTypes.ISSUE, stateTarget, collect)(ProjectState);
