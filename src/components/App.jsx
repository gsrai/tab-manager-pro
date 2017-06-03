import React from 'react';
import PropTypes from 'prop-types';
import AdditScreen from '../containers/AdditScreenContainer';
import GroupListScreen from '../containers/GroupListContainer';
import { GROUP_LIST_SCREEN, ADD_GROUP_SCREEN, EDIT_GROUP_SCREEN } from '../helpers/screens';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    props.initStore();
    this.groupListComponent = (<GroupListScreen />);
    this.tabListComponent = (<AdditScreen />);
  }

  getCurrentScreenComponent(csc) {
    switch(csc) {
      case GROUP_LIST_SCREEN:
        return this.groupListComponent;

      case ADD_GROUP_SCREEN:
        return this.tabListComponent;

      case EDIT_GROUP_SCREEN:
        return this.tabListComponent;

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