import { combineReducers, } from 'redux';
import referrals from './referrals';
import checklist from './checklist'

const rootReducer = combineReducers({
  referrals,
  checklist
});

export default rootReducer;