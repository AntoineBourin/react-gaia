import React from 'react';
import PropTypes from 'prop-types';
import ConnectedSidebarContainer from '../containers/ConnectedSidebarContainer';

const ConnectedTemplate = ({ children }) => (
  <div id="connected-template">
    <ConnectedSidebarContainer />
    <div className="content">
      {children}
    </div>
  </div>
);

ConnectedTemplate.propTypes = {
  children: PropTypes.object,
};

ConnectedTemplate.defaultProps = ({
  children: {},
});

export default ConnectedTemplate;
