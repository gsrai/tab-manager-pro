import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TabList from './TabList.jsx';
import Snackbar from 'material-ui/Snackbar';

export default class EditScreen extends React.Component {
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

  componentWillMount() {
    this.name = this.props.groupName;
    this.tabs = this.props.tabs;
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
    const id = this.props.id;
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
      this.props.onSave(id, name, tabs, tsp, numberOfTabs);
    }
  }

  render() {
    return (
      <div>
        <Header onSave={this.onSave} onCancel={this.props.onCancel}/>
        <TabList onSelectTab={this.onSelectTab}
                 onUnselectTab={this.onUnselectTab}
                 editing={true}
                 model={this.props.tabs} />
        <Footer onChangeCB={this.onNameChange} initialValue={this.name} />
        <Snackbar open={this.state.open} message={this.state.message} autoHideDuration={4000} onRequestClose={this.onSnackBarClose} />
      </div>
    );
  }
}

EditScreen.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  groupName: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })),
  id: PropTypes.string.isRequired,
  groupNames: PropTypes.arrayOf(PropTypes.string.isRequired)
};