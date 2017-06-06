import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../../src/components/Addit/Footer.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setup() {

  const props = {
    onChangeCB: function () { }
  };

  spyOn(props, 'onChangeCB');

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

    it('should call onChangeCB when value changes', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('TextField').getNode().props.onChange(); // prop passed and call it
      expect(props.onChangeCB).toHaveBeenCalled();
    });
  });
});

