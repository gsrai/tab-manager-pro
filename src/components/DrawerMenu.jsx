import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import UploadDialog from './UploadDialog.jsx';

export default class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openUploadDialog: false,
    };
  }

  onDownloadJsonClick = () => {
    chrome.storage.sync.get('tabManager', function (storageObj) {
      const url = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(storageObj));
      chrome.downloads.download({
        url,
        saveAs: true,
        filename: 'tabManagerPro.json'
      }, () => {});
    });
  }

  handleOpenUploadDialog = () => {
    this.setState({openUploadDialog: true});
  };

  handleCloseUploadDialog = () => {
    this.setState({openUploadDialog: false});
  };

  uploadDialogOnSubmit = (data) => {
    console.log(data);
    this.handleCloseUploadDialog();
  }

  render() {
    return (
      <div id="drawerMenu">
        <Drawer open={this.props.open} docked={false} onRequestChange={this.props.toggle} >
          <MenuItem onClick={this.onDownloadJsonClick} >Download JSON</MenuItem>
          <MenuItem onClick={this.handleOpenUploadDialog} >Upload JSON</MenuItem>
          <MenuItem>Archive (coming soon)</MenuItem>
        </Drawer>
        <UploadDialog open={this.state.openUploadDialog}
                      onSubmit={this.uploadDialogOnSubmit}        
                      handleClose={this.handleCloseUploadDialog} />
      </div>
    );
  }
}

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};