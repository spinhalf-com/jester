import { combineReducers } from 'redux';

import domains from './domains';
import metadata from './metadata';

export default combineReducers({
  domains,
  metadata,
});
