import { NAME, ADD } from '/home/ksolves/Documents/sujeet/training/ReactJs/redux-app/src/action_type/index.js';


export const Update_name = (name) => {
  return {
    type: NAME,
    payload: {name}
  };
};

export const Update_add = (add) => {
  return {
    type: ADD,
    payload: {add}
  };
};
