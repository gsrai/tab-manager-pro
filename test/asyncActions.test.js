import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/redux/actions/index';
import * as types from '../src/redux/actions/actionTypes';


const middlewares = [ thunk ];
const mockStore = configureStore(middlewares);
const mockGroups = [{
  name: 'foo', tabs: [], id: '123abc', editTimestamp: 1234, numberOfTabs: 0
}];

const chrome = {
  storage: {
    sync: {
      get: function (key, cb) { cb({ tabManager: { tabGroups: mockGroups } }); },
      set: function () {},
    },
    onChanged: {
      addListener: function (cb) { cb(); }
    }
  }
};

window.chrome['storage'] = chrome.storage;

describe('async actions', () => {
  beforeEach(() => {
    spyOn(chrome.storage.sync, 'get').and.callThrough();
    spyOn(chrome.storage.sync, 'set');
    spyOn(chrome.storage.onChanged, 'addListener');
  });

  it('creates LOAD_GROUPS when init groups has been done', (done) => {
    const expectedActions = [
      { type: types.LOAD_GROUPS, groups: mockGroups }
    ];

    const store = mockStore({ groups: mockGroups });

    store.dispatch(actions.initGroups());
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }, 0);
  });

  // need to refactor these async action creators as they are completely untestable

  // it('creates ADD_GROUP when create group has been done', (done) => {
  //   const expectedActions = [
  //     { type: actions.ADD_GROUP, groups: mockGroups }
  //   ];

  //   const store = mockStore({ groups: mockGroups });

  //   store.dispatch(actions.initGroups());
  //   setTimeout(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //     done();
  //   }, 0);
  // });

  // it('creates LOAD_GROUPS when init groups has been done', (done) => {
  //   const expectedActions = [
  //     { type: actions.LOAD_GROUPS, groups: mockGroups }
  //   ];

  //   const store = mockStore({ groups: mockGroups });

  //   store.dispatch(actions.initGroups());
  //   setTimeout(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //     done();
  //   }, 0);
  // });
});