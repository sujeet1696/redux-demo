import { NAME, ADD } from '/home/ksolves/Documents/sujeet/training/ReactJs/redux-app/src/action_type/index.js';

const update_name = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case NAME:
      return action.payload.name;
    default:
      return state;
  }
}

const update_add = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return action.payload.add;
    default:
      return state;
  }
}

export {update_name,update_add};
