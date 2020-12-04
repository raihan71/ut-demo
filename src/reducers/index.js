import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import loading from './loading';
import documents from '../pages/Documents/reducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  loading,
  documents
});

export default rootReducer;
