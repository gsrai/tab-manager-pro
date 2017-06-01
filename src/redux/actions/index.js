import sha256 from "../../helpers/crypto";

export const ADD_GROUP = "ADD_GROUP";
export const EDIT_GROUP = "EDIT_GROUP";
export const DELETE_GROUP = "DELETE_GROUP";
export const LOAD_GROUPS = "LOAD_GROUPS";
export const LOAD_TABS = "LOAD_TABS";
export const SET_SCREEN = "SET_SCREEN";

// move to helper?
function readData(callback) {
  chrome.storage.sync.get('tabManager', function(obj) {
    console.info('tabManager object: ', obj);
    callback(obj.tabManager);
  })
}

function writeData(data) {
  var obj = {};
  obj['tabManager'] = data;

  if (!data) {
    console.warn('data is null, will not save');
    return;
  }

  chrome.storage.sync.set(obj, function() {
    console.info('tabGroups saved : ', obj);
  });
}

export function initGroups() {
  return (dispatch) => {
    readData(function(obj) {
      let groups = null;
      if (!obj || !obj.tabGroups) {
        console.info('initializing data as tabGroups are empty');
        groups = [];
        writeData({tabGroups: []}); 
      } else {
        groups = obj.tabGroups;
      }

      dispatch(loadGroups(groups));
    });
  }
}

export function loadGroups(groups) {
  return {
    type: LOAD_GROUPS,
    groups
  };
}

export function addGroup(name, tabs, editTimestamp, numberOfTabs) {
  return (dispatch) => {
    sha256(name).then((id) => dispatch(createGroup(id, name, tabs, editTimestamp, numberOfTabs)));
  }
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
    title: tab.title
  };
}

export function getTabs() {
  return (dispatch) => {
    chrome.tabs.query({}, (tabs) => {
        let tabModel = tabs.map(tabModelMapper);
        dispatch(loadTabs(tabModel));
      });
  }
}

export function setScreen(screen) {
  return {
    type: SET_SCREEN,
    screen
  };
}