import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TabListContainer from '../../containers/TabListContainer';
import Snackbar from 'material-ui/Snackbar';

const errorMsg = 'Name is empty or no Tabs selected';

export default class AdditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.name = '';
    this.tabs = [];
    this.state = {
      open: false,
      message: ''
    };
  }

  onSnackBarClose = () => {
    this.setState({
      open: false,
      message: ''
    });
  }

  componentWillUnmount() {
    this.name = '';
    this.tabs = [];
  }

  onNameChange = (e, value) => {
    this.name = String(value);
  }

  onUnselectTab = (tab) => {
    const tabs = this.tabs;
    const _tabs = tabs.filter((t) => t.id !== tab.id);
    this.tabs = [..._tabs];
  }

  onSelectTab = (tab) => {
    this.tabs = [...this.tabs, tab];
  }

  onSave = () => {
    const tabs = this.tabs;
    const name = this.name;
    const numberOfTabs = tabs.length;
    const tsp = new Date().getTime();

    if (numberOfTabs < 1 || !name || name.trim() === '') {
      this.setState({
        open: true,
        message: errorMsg
      });
    } else {
      this.props.onSave(name, tabs, tsp, numberOfTabs);
    }
  }


  render() {
    return (
      <div>
        <Header onSave={this.onSave} onCancel={this.props.onCancel}/>
        <TabListContainer onSelectTab={this.onSelectTab} onUnselectTab={this.onUnselectTab} />
        <Footer onChangeCB={this.onNameChange} />
        <Snackbar open={this.state.open} message={this.state.message} autoHideDuration={4000} onRequestClose={this.onSnackBarClose} />
      </div>
    );
  }
}

AdditScreen.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired
};