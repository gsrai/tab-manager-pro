import React from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends React.Component {
  render() {
    return (
      <AppBar title="Tab Manager Pro"
              iconClassNameRight="muidocs-icon-navigation-expand-more" />
    );
  }
}