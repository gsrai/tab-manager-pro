import React from 'react';
import { shallow } from 'enzyme';
import AdditScreen from '../../../src/components/Addit/AdditScreen.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setup() {

  const props = {
    onSave: function () {},
    onCancel: function () {}
  };

  spyOn(props, 'onSave');
  spyOn(props, 'onCancel');


  const enzymeWrapper = shallow(<MuiThemeProvider><AdditScreen {...props} /></MuiThemeProvider>);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('AdditScreen', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('AdditScreen').exists()).toBe(true);
    });
  });
});

