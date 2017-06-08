import { ADD_GROUP_SCREEN } from '../../helpers/screens';
import {
  ADD_GROUP, EDIT_GROUP,
  DELETE_GROUP, LOAD_GROUPS,
  LOAD_TABS, SET_SCREEN, SET_SCREEN_EDIT
} from './actionTypes';

// move to helper?
function readData(key, callback) {
  chrome.storage.sync.get(key, function (obj) {
    callback(obj);
  });
}

// can only overwrite one item, not all
function writeData(key, data) {
  const obj = {};
  obj[key] = data;

  if (!data) { return; }

  chrome.storage.sync.set(obj, function () {});
}

// load groups into the store
export function initGroups() {
  return (dispatch) => {
    readData(null, function (obj) {
      const groups = Object.keys(obj).map((i) => obj[i]);
      dispatch(loadGroups(groups));
    });
  };
}

export function loadGroups(groups) {
  return {
    type: LOAD_GROUPS,
    groups
  };
}

export function addGroup(name, tabs, editTimestamp, numberOfTabs) {
  return (dispatch) => {
    const id = String(new Date().getTime());
    const group = {id, name, tabs, editTimestamp, numberOfTabs};
    writeData(id, group);
    const addCallback = () => {
      dispatch(createGroup(id, name, tabs, editTimestamp, numberOfTabs));
      chrome.storage.onChanged.removeListener(addCallback);
    };
    chrome.storage.onChanged.addListener(addCallback);
  };
}

export function removeGroup(id) {
  return (dispatch) => {
    chrome.storage.sync.remove(id);
    const deleteCallback = () => {
      dispatch(deleteGroup(id));
      chrome.storage.onChanged.removeListener(deleteCallback);
    };
    chrome.storage.onChanged.addListener(deleteCallback);
  };
}

export function createGroup(id, name, tabs, editTimestamp, numberOfTabs) {
  return {
    type: ADD_GROUP,
    id,
    name,
    tabs,
    editTimestamp,
    numberOfTabs
  };
}

export function editGroup(id, name, tabs, editTimestamp, numberOfTabs) {
  return (dispatch) => {
    readData(id, function (data) {
      const group = data[id];
      if (group) {
        const newGroup = Object.assign({}, group, {
          name,
          tabs,
          editTimestamp,
          numberOfTabs
        });
        writeData(id, newGroup);
      }
    });

    const addCallback = () => {
      dispatch(editGroupInStore(id, name, tabs, editTimestamp, numberOfTabs));
      chrome.storage.onChanged.removeListener(addCallback);
    };

    chrome.storage.onChanged.addListener(addCallback);
  };
}

export function editGroupInStore(id, name, tabs, editTimestamp, numberOfTabs) {
  return {
    type: EDIT_GROUP,
    id,
    name,
    tabs,
    editTimestamp,
    numberOfTabs
  };
}

export function deleteGroup(id) {
  return {
    type: DELETE_GROUP,
    id
  };
}

export function loadTabs(tabs) {
  return {
    type: LOAD_TABS,
    tabs
  };
}

const tabModelMapper = (tab) => {
  return {
    url: tab.url,
    title: tab.title,
    id: tab.id
  };
};

export function getTabs() {
  return (dispatch) => {
    dispatch(setScreen(ADD_GROUP_SCREEN));
    chrome.tabs.query({}, (tabs) => {
      const tabModel = tabs.map(tabModelMapper);
      dispatch(loadTabs(tabModel));
    });
  };
}

export function setScreen(screen) {
  return {
    type: SET_SCREEN,
    screen
  };
}

export function setScreenEdit(screen, id) {
  return {
    type: SET_SCREEN_EDIT,
    screen,
    id
  };
}