import React from 'react';
import PropTypes from 'prop-types';

const ProjectKanban = ({ teams, isFetchingTeams }) => (
  <div>
    <h2>Teams</h2>
    {isFetchingTeams && <p>Loading...</p>}
    <ul>
      {!isFetchingTeams && teams && teams.map(team => (
        <li key={team.id}>
          {team.label} - {team.description}
          <ul>
            {team.projects.map(project => (
              <li key={project.id}><a href={`/project/${project.id}`}>{project.label}</a></li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);

ProjectKanban.propTypes = {
  teams: PropTypes.array.isRequired,
  isFetchingTeams: PropTypes.bool.isRequired,
};

ProjectKanban.defaultProps = ({});

export default ProjectKanban;
