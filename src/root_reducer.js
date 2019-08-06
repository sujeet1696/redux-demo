import { combineReducers } from 'redux';
import * as reducer from '/home/ksolves/Documents/sujeet/training/ReactJs/redux-app/src/reducer/index.js';

export const reducers = combineReducers({
    name: reducer.update_name,
    add: reducer.update_add
  });
