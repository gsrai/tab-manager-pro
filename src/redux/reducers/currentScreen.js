import { SET_SCREEN } from '../actions/index';
import { GROUP_LIST_SCREEN } from '../../helpers/filters';

export default function currentScreen(state=GROUP_LIST_SCREEN, action) {
  switch(action.type) {
    case SET_SCREEN:
      return action.screen;

    default:
      return state;
  }
}