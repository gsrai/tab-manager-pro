import React from 'react';
import { mount } from 'enzyme';
import GroupList from '../../../src/components/GroupList/GroupList.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setup() {

  const props = {
    openTabs: function () {},
    removeGroup: function () {},
    editGroup: function () {},
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


  const enzymeWrapper = mount(<MuiThemeProvider><GroupList {...props} /></MuiThemeProvider>);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('GroupList', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('GroupList').exists()).toBe(true);
    });

    it('should render one list item', () => {
      const { enzymeWrapper, props} = setup();
      const { primaryText } = enzymeWrapper.find('ListItem').getNode().props;
      expect(enzymeWrapper.find('ListItem').getNodes().length).toEqual(1);
      expect(primaryText).toEqual(props.groupModel[0].name);
    });

    it('should render one list item', () => {
      const { enzymeWrapper} = setup();
      const text = enzymeWrapper.find('p').getNode().innerHTML;
      expect(text.includes('1 tab')).toBe(true);
      expect(text.includes('1/1/1970')).toBe(true);
    });

    // it('should call openTabs when option is clicked', () => {
    //   const { enzymeWrapper, props } = setup();
    //   console.log(enzymeWrapper.find('IconMenu').find('IconButton').getNodes());
    //   enzymeWrapper.find('IconMenu').find('IconButton').find('button').simulate('click');
    //   console.log(enzymeWrapper.find('#openTabsBtn').getNode());
    //   enzymeWrapper.find('#openTabsBtn').find('button').simulate('click');
    //   expect(props.onSelectTab).toHaveBeenCalled();
    // });
  });
});

