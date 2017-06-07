import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TabListContainer from '../../containers/TabListContainer';
import Snackbar from 'material-ui/Snackbar';

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

  doesGroupExist = (name) => {
    const { groupNames } = this.props;
    return groupNames.filter((n) => n === name).length !== 0;
  }

  onSave = () => {
    const tabs = this.tabs;
    const name = this.name;
    const numberOfTabs = tabs.length;
    const tsp = new Date().getTime();

    let errorMsg = '';

    if (numberOfTabs < 1 ) {
      errorMsg = 'Please select at least one tab';
    } else if (!name || name.trim() === '') {
      errorMsg = 'Please enter a group name';
    } else if (this.doesGroupExist(name)) {
      errorMsg = 'Group name is already taken';
    }

    if (errorMsg) {
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
  onCancel: PropTypes.func.isRequired,
  groupNames: PropTypes.arrayOf(PropTypes.string.isRequired)
};