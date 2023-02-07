import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';

/*
 * pushState: Returns a value representing the state at the top of the history stack
 * popState: Returns a value representing the state at the top of the history stack
 * replaceState: Returns a value representing the state at the top of the history stack
 */

export const SCREENS = ['main', 'add', 'edit'] as const;

type ScreenTuple = typeof SCREENS;

export type Screen = ScreenTuple[number];

type NavigationState = {
  history: Screen[];
};

const initialState = { history: ['main'] } as NavigationState;

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    pushState(state, action: PayloadAction<Screen>) {
      if (state.history[state.history.length - 1] === action.payload) return;
      state.history.push(action.payload);
    },
    popState(state) {
      if (state.history.length === 1) return;
      state.history.pop();
    },
    replaceState(state, action: PayloadAction<Screen>) {
      state.history.pop();
      state.history.push(action.payload);
    },
  },
});

export const selectCurrentScreen = (state: RootState) => {
  const { history } = state.navigation;
  return history[history.length - 1];
};

export const selectStackLength = (state: RootState) => {
  return state.navigation.history.length;
};

export const { pushState, popState, replaceState } = navigationSlice.actions;
export default navigationSlice.reducer;
