import { ADD_GROUP, EDIT_GROUP, DELETE_GROUP, LOAD_GROUPS } from '../actions/actionTypes';

export default function groups(state = [], action) {
  switch(action.type) {
    case ADD_GROUP: {
      const group = {
        id: action.id,
        name: action.name,
        tabs: action.tabs,
        editTimestamp: action.editTimestamp,
        numberOfTabs: action.numberOfTabs
      };
      return [...state, group];
    }

    case EDIT_GROUP: {
      const _group = state.filter((g) => g.id === action.id)[0];
      // check for more than one (collision dupe key)
      const finalGroup = Object.assign({}, _group, {
        name: action.name,
        tabs: action.tabs,
        editTimestamp: action.editTimestamp,
        numberOfTabs: action.numberOfTabs
      });
      return [...state.filter((g) => g.id !== action.id), finalGroup];
    }

    case DELETE_GROUP: {
      const id = action.id;
      const newState = state.filter((g) => g.id !== id);
      return newState;
    }

    case LOAD_GROUPS:
      return [...action.groups];

    default:
      return state;
  }
}