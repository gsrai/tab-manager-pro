import React from 'react';
import AppBar from 'material-ui/AppBar';
import DrawerMenu from '../DrawerMenu.jsx';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import IconButton from 'material-ui/IconButton';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleDrawerToggle = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    return (
      <div>
        <AppBar title="Tab Manager Pro"
                iconElementLeft={<IconButton onClick={this.handleDrawerToggle} ><NavigationMenu /></IconButton>} />
        <DrawerMenu open={ this.state.open } toggle={this.handleDrawerToggle} />
      </div>
    );
  }
}