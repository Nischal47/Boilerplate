import { combineReducers } from 'redux';
import authReducers from '../../modules/auth/store/reducers';

const rootReducer = combineReducers({
  auth: authReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
