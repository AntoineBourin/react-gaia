import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../../../draggableTypes';

const issueSource = {
  beginDrag: (props) => ({ props }),
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging(),
});

const IssueThumbnail = ({ issue, connectDragSource }) => connectDragSource(
  <div>
    <p>{issue.title}</p>
  </div>,
);

IssueThumbnail.propTypes = {
  issue: PropTypes.object.isRequired,
};

IssueThumbnail.defaultProps = ({});

export default DragSource(ItemTypes.ISSUE, issueSource, collect)(IssueThumbnail);
