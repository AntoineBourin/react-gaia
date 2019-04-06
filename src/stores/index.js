import { combineReducers } from 'redux';

import user from '../modules/user/reducers';
import team from '../modules/team/reducers';

export default combineReducers({
  user,
  team,
});
