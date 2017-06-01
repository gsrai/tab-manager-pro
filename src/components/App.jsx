import React from 'react';
import TablistListScreen from './containers/TablistListContainer';
import GroupListScreen from './containers/GroupListContainer';
import { GROUP_LIST_SCREEN, ADD_GROUP_SCREEN, EDIT_GROUP_SCREEN } from '../helpers/screens';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    props.initStore();
  }
  
  getCurrentScreenComponent(screen) {
    switch(screen) {
      case GROUP_LIST_SCREEN:
        return <GroupListScreen />;

      case ADD_GROUP_SCREEN:
        return <TablistListScreen />;

      case EDIT_GROUP_SCREEN:
        return <TablistListScreen />;
    }
  }
  render() {
    const currentScreen = this.props.currentScreen;
    return (
      <div>
        {getCurrentScreenComponent(currentScreen)}
      </div>
    );
  }
}

App.propTypes = {
  initStore: PropTypes.func.isRequired,
  currentScreen: PropTypes.string.isRequired
}