import currentScreenReducer from '../src/redux/reducers/currentScreen';
import tabsReducer from '../src/redux/reducers/tabs';
import groupsReducer from '../src/redux/reducers/groups';
import * as types from '../src/redux/actions/actionTypes';
import { GROUP_LIST_SCREEN, ADD_GROUP_SCREEN } from '../src/helpers/screens';


describe('currentScreen reducer', () => {
  it('should return the initial state', () => {
    expect(currentScreenReducer(undefined, {})).toEqual(GROUP_LIST_SCREEN);
  });

  it('should return the correct state when SET_SCREEN action is dispatched', () => {
    expect(currentScreenReducer(undefined, {
      type: types.SET_SCREEN,
      screen: ADD_GROUP_SCREEN
    })).toEqual(ADD_GROUP_SCREEN);
  });
});

describe('tabs reducer', () => {
  const tabsFixure = [{ url: 'foo', title: 'baz', id: 123 }];

  it('should return the initial state', () => {
    expect(tabsReducer(undefined, {})).toEqual([]);
  });

  it('should return the correct state when LOAD_TABS action is dispatched', () => {
    expect(tabsReducer(undefined, {
      type: types.LOAD_TABS,
      tabs: tabsFixure
    })).toEqual(tabsFixure);
  });

  it('should return the previous state when LOAD_TABS action is dispatched with no diff', () => {
    expect(tabsReducer(tabsFixure, {
      type: types.LOAD_TABS,
      tabs: tabsFixure
    })).toEqual(tabsFixure);
  });
});

describe('groups reducer', () => {
  const groupsFixture = [{
    name: 'foo', tabs: [{ url: 'foo', title: 'baz', id: 123 }],
    id: '123abc', editTimestamp: 1234, numberOfTabs: 1
  }];

  it('should return the initial state', () => {
    expect(groupsReducer(undefined, {})).toEqual([]);
  });

  it('should return the correct state when ADD_GROUP action is dispatched', () => {
    expect(groupsReducer(undefined, {
      type: types.ADD_GROUP,
      name: 'foo', tabs: [{ url: 'foo', title: 'baz', id: 123 }],
      id: '123abc', editTimestamp: 1234, numberOfTabs: 1
    })).toEqual(groupsFixture);
  });

  it('should return the correct state when EDIT_GROUP action is dispatched', () => {
    const newGroups = [{
      name: 'bar', tabs: [{ url: 'foo', title: 'baz', id: 123 }],
      id: '123abc', editTimestamp: 1234, numberOfTabs: 1
    }];
    expect(groupsReducer(groupsFixture, {
      type: types.EDIT_GROUP,
      name: 'bar', tabs: [{ url: 'foo', title: 'baz', id: 123 }],
      id: '123abc', editTimestamp: 1234, numberOfTabs: 1
    })).toEqual(newGroups);
  });

  it('should return the correct state when DELETE_GROUP action is dispatched', () => {
    expect(groupsReducer(groupsFixture, {
      type: types.DELETE_GROUP,
      id: '123abc'
    })).toEqual([]);
  });

  it('should return the correct state when LOAD_GROUPS action is dispatched', () => {
    expect(groupsReducer(undefined, {
      type: types.LOAD_GROUPS,
      groups: groupsFixture
    })).toEqual(groupsFixture);
  });
});