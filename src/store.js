import { createStore } from 'redux';
import { reducers } from './root_reducer'

const states = {
  name: 'Unknown',
  add: 'Unknown'
};

export const store = createStore( reducers, states);
