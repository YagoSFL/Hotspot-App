import { combineReducers } from 'redux'
import hotspotsReducer from '../reducers/hotspotsReducer';

const rootReducer = combineReducers({
    hotspots: hotspotsReducer,
});

export default rootReducer