import { LOAD_TABS } from '../actions/index';

/*
 *
 */
export default function tabs(state = [], action) {
  switch(action.type) {
    case LOAD_TABS:
      return [...state, ...action.tabs];
    default:
      return state;
  }
}