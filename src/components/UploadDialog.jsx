import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import PropTypes from 'prop-types';

export default class UploadDialog extends React.Component {
  constructor(props) {
    super(props);
  }

  onSubmit = () => {
    const files = document.getElementById('fileUpload').files;
    if (files.length <= 0) {
      return false;
    }

    const reader = new FileReader();

    reader.onload = (e) => {
      const result = JSON.parse(e.target.result);
      this.props.onSubmit(result);
    };
    reader.readAsText(files.item(0));
  }

  render() {
    const actions = [
      <FlatButton key={1}
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton key={2}
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onSubmit}
      />,
    ];
    return (
      <div id="UploadDialog">
        <Dialog title="Upload JSON (for nerds)"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.props.handleClose} >
          <input type="file" id="fileUpload" />
          <br />
          <span>Warning: this will wipe/corrupt all your groups if file is invalid,</span>
          <span> this feature is for recovering backed up group data, use at your own risk.</span>
        </Dialog>
      </div>
    );
  }
}

UploadDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};