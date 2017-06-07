import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../../src/components/GroupList/Footer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setup() {

  const props = {
    getTabs: function () { }
  };

  spyOn(props, 'getTabs');

  const enzymeWrapper = mount(<MuiThemeProvider><Footer {...props} /></MuiThemeProvider>);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('Footer', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('Footer').exists()).toBe(true);
    });

    it('should call getTabs clicked', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('FloatingActionButton').find('button').simulate('click');
      expect(props.getTabs).toHaveBeenCalledTimes(1);
    });
  });
});

