import { SET_SCREEN, SET_SCREEN_EDIT } from '../actions/actionTypes';
import { GROUP_LIST_SCREEN } from '../../helpers/screens';

const initialState = {
  screen: GROUP_LIST_SCREEN,
  id: null
};

export default function currentScreen(state=initialState, action) {
  switch(action.type) {
    case SET_SCREEN:
      return { screen: action.screen };

    case SET_SCREEN_EDIT:
      return { screen: action.screen, id: action.id };

    default:
      return state;
  }
}