import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class Header extends React.Component {
  render() {
    const { onSave, onCancel } = this.props;
    return (
      <div className="header">
        <AppBar title="Tab Manager Pro"
                iconElementLeft={<IconButton id="additCloseBtn" onClick={onCancel} ><NavigationClose /></IconButton>}
                iconElementRight={<FlatButton label="Save" onClick={onSave} id="additSaveBtn" />} />
      </div>
    );
  }
}

Header.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};