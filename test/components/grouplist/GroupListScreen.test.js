import React from 'react';
import { shallow } from 'enzyme';
import GroupListScreen from '../../../src/components/GroupList/GroupListScreen.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setup() {

  const props = {
    openTabs: function () {},
    removeGroup: function () {},
    editGroup: function () {},
    getTabs: function () {},
    groupModel: [{
      name: 'baz',
      tabs: [{ url: 'foo', title: 'bar', id: 123 }],
      editTimestamp: 123,
      id:'123abc',
      numberOfTabs: 1
    }]
  };

  spyOn(props, 'openTabs');
  spyOn(props, 'removeGroup');
  spyOn(props, 'editGroup');
  spyOn(props, 'getTabs');

  const enzymeWrapper = shallow(<MuiThemeProvider><GroupListScreen {...props} /></MuiThemeProvider>);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('GroupListScreen', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('GroupListScreen').exists()).toBe(true);
    });
  });
});

