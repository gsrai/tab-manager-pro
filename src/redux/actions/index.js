import sha256 from '../../helpers/crypto';
import { ADD_GROUP_SCREEN } from '../../helpers/screens';

export const ADD_GROUP = 'ADD_GROUP';
export const EDIT_GROUP = 'EDIT_GROUP';
export const DELETE_GROUP = 'DELETE_GROUP';
export const LOAD_GROUPS = 'LOAD_GROUPS';
export const LOAD_TABS = 'LOAD_TABS';
export const SET_SCREEN = 'SET_SCREEN';

// move to helper?
function readData(callback) {
  chrome.storage.sync.get('tabManager', function (obj) {
    callback(obj.tabManager);
  });
}

function writeData(data) {
  const obj = {};
  obj['tabManager'] = data;

  if (!data) {
    return;
  }

  chrome.storage.sync.set(obj, function () {});
}

export function initGroups() {
  return (dispatch) => {
    readData(function (obj) {
      let groups = null;
      if (!obj || !obj.tabGroups) {
        groups = [];
        writeData({tabGroups: []});
      } else {
        groups = obj.tabGroups;
      }

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

function doesGroupExist(name, tabGroups) {
  const numberOfGroups = tabGroups.length;

  for (let i = 0; i < numberOfGroups; i++) {
    if (tabGroups[i].name === name) {
      return true;
    }
  }

  return false;
}

export function addGroup(name, tabs, editTimestamp, numberOfTabs) {
  return (dispatch) => {
    sha256(name).then((id) => {
      const group = {id, name, tabs, editTimestamp, numberOfTabs};
      readData(function (data) {
        const tabGroups = data.tabGroups;

        if (!doesGroupExist(group.name, tabGroups)) {
          tabGroups.push(group);
        } else {
          // group already exists throw error or feedback
        }

        writeData({ tabGroups });
      });

      const addCallback = () => {
        dispatch(createGroup(id, name, tabs, editTimestamp, numberOfTabs));
        chrome.storage.onChanged.removeListener(addCallback);
      };

      chrome.storage.onChanged.addListener(addCallback);
    });
  };
}

export function removeGroup(id) {
  return (dispatch) => {
    readData(function (data) {
      const _tabGroups = data.tabGroups;

      const tabGroups = _tabGroups.filter((g) => g.id !== id);
      writeData({ tabGroups });
    });

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