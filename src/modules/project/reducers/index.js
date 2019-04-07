import { combineReducers } from 'redux';

import project from './project';
import issue from './issue';

export default combineReducers({
  project,
  issue,
});
