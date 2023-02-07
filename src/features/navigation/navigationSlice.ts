import { createSlice } from '@reduxjs/toolkit'

type Screen = "main" | "add" | "edit";

type NavigationState {
  history: Screen[];
}

const initialState = { history: ["main"] } as NavigationState

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    pushState(state, action: PayloadAction<Screen>) {
      state.history.push(action.payload)
    },
    popState(state) {
      state.history.pop()
    },
    replaceState(state, action: PayloadAction<Screen>) {
      state.history.pop()
      state.history.push(action.payload)
    },
  },
})

export const { pushState, popState, replaceState } = navigationSlice.actions
export default navigationSlice.reducer