import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

export default class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  onDownloadJsonClick = () => {
    chrome.storage.sync.get('tabManager', function (storageObj) {
      const url = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storageObj));
      chrome.downloads.download({
        url,
        saveAs: true,
        filename: 'tabManagerPro.json'
      }, (id) => console.log(id));
    });
  }

  render() {
    return (
      <div id="drawerMenu">
        <Drawer open={this.props.open} docked={false} onRequestChange={this.props.toggle} >
          <MenuItem onClick={this.onDownloadJsonClick} >Download JSON</MenuItem>
          <MenuItem>Upload JSON</MenuItem>
          <MenuItem>Archive (coming soon)</MenuItem>
        </Drawer>
      </div>
    );
  }
}

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};