import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import ConnectedTemplate from '../../basepage/components/ConnectedTemplate';
import ProjectStateContainer from '../containers/ProjectStateContainer';

const ProjectKanban = ({ currentProject }) => (
  <ConnectedTemplate>
    {currentProject
    && (
      <div className="project">
        <h1>Projet <strong>{currentProject.label}</strong></h1>
        <DragDropContextProvider backend={HTML5Backend}>
          <div className="states">
            {currentProject.states
            && Object.values(currentProject.states).map(state => (
              <ProjectStateContainer projectId={currentProject.id} key={state.id} projectState={state} />
            ))}
          </div>
        </DragDropContextProvider>
      </div>
    )}
  </ConnectedTemplate>
);

ProjectKanban.propTypes = {
  currentProject: PropTypes.object,
};

ProjectKanban.defaultProps = ({
  currentProject: {},
});

export default ProjectKanban;
