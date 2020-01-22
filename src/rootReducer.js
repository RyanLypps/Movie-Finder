import { combineReducers } from 'redux';
import searchReducer from './containers/search/searchReducer';

const rootReducer = combineReducers({

    search: searchReducer
    
});

export default rootReducer;
