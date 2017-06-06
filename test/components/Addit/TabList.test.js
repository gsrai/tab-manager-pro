import React from 'react';
import { mount } from 'enzyme';
import TabList from '../../../src/components/Addit/TabList.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function setup() {

  const props = {
    onSelectTab: function () {},
    onUnselectTab: function () {},
    model: [{ url: 'foo', title: 'bar', id: 123 }]
  };

  spyOn(props, 'onSelectTab');
  spyOn(props, 'onUnselectTab');


  const enzymeWrapper = mount(<MuiThemeProvider><TabList {...props} /></MuiThemeProvider>);

  return {
    props,
    enzymeWrapper
  };
}

describe('components', () => {
  describe('TabList', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.find('TabList').exists()).toBe(true);
    });

    it('should render one list item', () => {
      const { enzymeWrapper, props} = setup();
      const { secondaryText } = enzymeWrapper.find('ListItem').getNode().props;
      expect(enzymeWrapper.find('ListItem').getNodes().length).toEqual(1);
      expect(secondaryText).toEqual(props.model[0].title);
    });

    it('should call onSelectTab when item is checked', () => {
      const { enzymeWrapper, props } = setup();
      const e = { nativeEvent: { target: { id: 123 } } };
      enzymeWrapper.find('Checkbox').getNode().props.onCheck(e, true);
      expect(props.onSelectTab).toHaveBeenCalledWith(props.model[0]);
    });

    it('should call onUnSelectTab when item is checked', () => {
      const { enzymeWrapper, props } = setup();
      const e = { nativeEvent: { target: { id: 123 } } };
      enzymeWrapper.find('Checkbox').getNode().props.onCheck(e, false);
      expect(props.onUnselectTab).toHaveBeenCalledWith(props.model[0]);
    });
  });
});

