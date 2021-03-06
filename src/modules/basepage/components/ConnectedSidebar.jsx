import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.png';
import { routes } from '../../../routes';

const ConnectedSidebar = () => (
  <section className="sidebar">
    <div className="side-header">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </div>
    <nav>
      <ul>
        <li className="active">
          <Link to={routes.dashboard}><span className="icon icon-graph" /> Tableau de bord</Link>
        </li>
        <li>
          <a href={routes.dashboard}><span className="icon icon-team" /> Teams</a>
        </li>
        <li>
          <Link to={routes.project.replace(':id', 1)}><span className="icon icon-project" /> Projets</Link>
        </li>
        <li>
          <a href={routes.dashboard}><span className="icon icon-ticket" /> Tickets</a>
        </li>
      </ul>
    </nav>
    <footer>
      <div><a href="/"><span className="icon icon-logout" /></a></div>
      <div><a href="/"><span className="icon icon-params" /></a></div>
    </footer>
  </section>
);

ConnectedSidebar.propTypes = {};

ConnectedSidebar.defaultProps = ({});

export default ConnectedSidebar;
