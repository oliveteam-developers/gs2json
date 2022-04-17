import { combineReducers } from 'redux';
import commonReducer from './commonReducer';
import openSheetReducer from './openSheetReducer';

export default combineReducers({
    common: commonReducer,
    openSheet: openSheetReducer,
});
