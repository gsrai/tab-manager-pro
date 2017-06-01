import React, { PropTypes } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import GroupList from './GroupList.jsx'

export default class GroupListScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  openTabs(group) {
    chrome.windows.create({
      url: group.tabs.map(tab => tab.url),
      focused: true
    });
  }

  render() {
    const { openTabListScreen, 
            getTabs, 
            groupModel, 
            editGroup, 
            removeGroup } = this.props;
    return (
      <div>
        <Header />
        <GroupList groupModel={groupModel} 
                   editGroup={editGroup} 
                   removeGroup={removeGroup} openTabs={this.openTabs} />
                   
        <Footer openTabListScreen={openTabListScreen} getTabs={getTabs} />
      </div>
    );
  }
}

GroupListScreen.propTypes = {
  openTabListScreen: PropTypes.func.isRequired,
  getTabs: PropTypes.func.isRequired,
  removeGroup: PropTypes.func.isRequired,
  editGroup: PropTypes.func.isRequired,
  groupModel: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })),
    editTimestamp: PropTypes.number.isRequired,
    numberOfTabs: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }))
}