import { ADD_GROUP, EDIT_GROUP, DELETE_GROUP, LOAD_GROUPS } from '../actions/index';

/*
 *
 */
export default function groups(state = [], action) {
  switch(action.type) {
    case ADD_GROUP:
      const { id, name, tabs, editTimestamp, numberOfTabs } = action;
      const group = {id, name, tabs, editTimestamp, numberOfTabs};
      return [...state, group];

    case EDIT_GROUP:
      const { id, name, tabs, editTimestamp, numberOfTabs } = action;
      let group = state.filter((group) => group.id === id)[0];
      // check for more than one (collision dupe key)
      const finalGroup = Object.assign({}, group, {
        name, 
        tabs, 
        editTimestamp, 
        numberOfTabs
      });
      return [...state.filter((group) => group.id !== id), finalGroup];
    
    case DELETE_GROUP:
      const id = action.id;
      const newState = state.filter((group) => group.id !== id);
      return newState;
    
    case LOAD_GROUPS:
      return [...action.groups];

    default:
      return state;
  }
}