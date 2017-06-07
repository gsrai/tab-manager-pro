import React from 'react';
import { mount } from 'enzyme';
import Header from '../../../src/components/GroupList/Header.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setup() {

  const props = {};
  const enzymeWrapper = mount(<MuiThemeProvider><Header {...props} /></MuiThemeProvider>);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Header', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('Header').exists()).toBe(true);
    });

    it('should render correct title', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('AppBar').getNode().props.title).toEqual('Tab Manager Pro');
    });
  });
});

