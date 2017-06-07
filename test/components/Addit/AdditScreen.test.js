import React from 'react';
import { shallow } from 'enzyme';
import AdditScreen from '../../../src/components/Addit/AdditScreen.jsx';

function setup() {

  const props = {
    groupNames: ['foo', 'bar'],
    onSave: function () {},
    onCancel: function () {}
  };

  spyOn(props, 'onSave');
  spyOn(props, 'onCancel');


  const enzymeWrapper = shallow(<AdditScreen {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('AdditScreen', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });
  });
});

