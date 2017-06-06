import React from 'react';
import { mount } from 'enzyme';
import Header from '../../../src/components/Addit/Header.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setup() {

  const props = {
    onSave: function () {},
    onCancel: function () {}
  };

  spyOn(props, 'onSave');
  spyOn(props, 'onCancel');


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
      expect(enzymeWrapper.find('Header').hasClass('header')).toBe(true);
    });

    it('should call onSave when save button is clicked', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('#additSaveBtn').simulate('click');
      expect(props.onSave).toHaveBeenCalled();
    });

    it('should call onCancel when save button is clicked', () => {
      const { enzymeWrapper, props } = setup();
      enzymeWrapper.find('#additCloseBtn').simulate('click');
      expect(props.onCancel).toHaveBeenCalled();
    });
  });
});

