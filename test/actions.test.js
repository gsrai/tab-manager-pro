import {
  loadGroups,
  createGroup,
  editGroup,
  deleteGroup,
  loadTabs,
  setScreen
} from '../src/redux/actions/index';

import * as types from '../src/redux/actions/actionTypes';

describe('actions', () => {
  it('should load groups correctly', () => {
    const groups = [{
      name: 'foo', tabs: [], id: '123abc', editTimestamp: 1234, numberOfTabs: 0
    }];

    const expectedAction = {
      type: types.LOAD_GROUPS,
      groups
    };

    expect(loadGroups(groups)).toEqual(expectedAction);
  });

  it('should add a group correctly', () => {
    const name = 'foo';
    const tabs = [];
    const id = '123abc';
    const editTimestamp = 1234;
    const numberOfTabs = 0;

    const expectedAction = {
      type: types.ADD_GROUP,
      name, tabs, id, editTimestamp, numberOfTabs
    };

    expect(createGroup(id, name, tabs, editTimestamp, numberOfTabs)).toEqual(expectedAction);
  });

  it('should edit a group correctly', () => {
    const name = 'foo';
    const tabs = [];
    const id = '123abc';
    const editTimestamp = 1234;
    const numberOfTabs = 0;

    const expectedAction = {
      type: types.EDIT_GROUP,
      name, tabs, id, editTimestamp, numberOfTabs
    };

    expect(editGroup(id, name, tabs, editTimestamp, numberOfTabs)).toEqual(expectedAction);
  });

  it('should delete a group correctly', () => {
    const id = '123abc';

    const expectedAction = {
      type: types.DELETE_GROUP,
      id
    };

    expect(deleteGroup(id)).toEqual(expectedAction);
  });

  it('should load tabs correctly', () => {
    const tabs = [ {url: 'foo', title: 'bar', id: 123 }];

    const expectedAction = {
      type: types.LOAD_TABS,
      tabs
    };

    expect(loadTabs(tabs)).toEqual(expectedAction);
  });

  it('should set the screen correctly', () => {
    const screen = 'FOO_SCREEN';

    const expectedAction = {
      type: types.SET_SCREEN,
      screen
    };

    expect(setScreen(screen)).toEqual(expectedAction);
  });
});