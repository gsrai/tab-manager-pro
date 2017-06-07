import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';

export default class DrawerMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="drawerMenu">
        <Drawer open={this.props.open} docked={false} onRequestChange={this.props.toggle} >
          <MenuItem>Download JSON</MenuItem>
          <MenuItem>Upload JSON</MenuItem>
          <MenuItem>Archive (coming soon)</MenuItem>
          <MenuItem>About</MenuItem>
        </Drawer>
      </div>
    );
  }
}

DrawerMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};