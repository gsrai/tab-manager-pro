import React from 'react';
import PropTypes from 'prop-types';
import AdditScreen from '../containers/AdditScreenContainer';
import EditScreen from '../containers/EditScreenContainer';
import GroupListScreen from '../containers/GroupListContainer';
import { GROUP_LIST_SCREEN, ADD_GROUP_SCREEN, EDIT_GROUP_SCREEN } from '../helpers/screens';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    props.initStore();
  }

  getCurrentScreenComponent(csc) {
    switch(csc) {
      case GROUP_LIST_SCREEN:
        return (<GroupListScreen />);

      case ADD_GROUP_SCREEN:
        return (<AdditScreen />);

      case EDIT_GROUP_SCREEN:
        return (<EditScreen />);

      default:
        return (<div>Error: unknown screenType: csc</div>);
    }
  }
  render() {
    const currentScreen = this.props.currentScreen;
    return (
      <div>
        {this.getCurrentScreenComponent(currentScreen)}
      </div>
    );
  }
}

App.propTypes = {
  initStore: PropTypes.func.isRequired,
  currentScreen: PropTypes.string.isRequired
};