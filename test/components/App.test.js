import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App.jsx';
import { GROUP_LIST_SCREEN } from '../../src/helpers/screens';

function setup() {

  const props = {
    initStore: function () {},
    currentScreen: GROUP_LIST_SCREEN
  };

  spyOn(props, 'initStore');

  const enzymeWrapper = shallow(<App {...props} />);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('App', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.exists()).toBe(true);
    });

    it('should initialize store on init', () => {
      const { props } = setup();
      expect(props.initStore).toHaveBeenCalledTimes(1);
    });
  });
});

