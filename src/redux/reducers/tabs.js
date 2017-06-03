import { LOAD_TABS } from '../actions/index';

export default function tabs(state = [], action) {
  switch(action.type) {
    case LOAD_TABS:
      if (shouldUpdate(action.tabs, state)) { return action.tabs; }
      return state;

    default:
      return state;
  }
}

function shouldUpdate(newState, oldState) {
  let nextTabIds = newState.map((t) => t.id);
  let prevTabIds = oldState.map((t) => t.id);

  nextTabIds = nextTabIds.sort((a, b) => a - b);
  prevTabIds = prevTabIds.sort((a, b) => a - b);

  const isSameLength = nextTabIds.length === prevTabIds.length;
  const hasDiff = nextTabIds.filter((e) => !prevTabIds.includes(e)).length > 0;
  const shouldUpdate = !isSameLength || hasDiff;
  return shouldUpdate;
}