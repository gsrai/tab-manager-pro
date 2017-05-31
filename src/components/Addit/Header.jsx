import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar title="Tab Manager Pro" 
              iconElementLeft={<IconButton><NavigationClose /></IconButton>}
              iconElementRight={<FlatButton label="Save" />} />
    );
  }
}