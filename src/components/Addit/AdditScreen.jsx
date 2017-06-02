import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import TabList from './TabList.jsx';

export default class AdditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.name = '';
    this.tabs = [];
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
      // name is empty or no tabs selected. better feedback and split this
    } else {
      this.props.onSave(name, tabs, tsp, numberOfTabs);
    }
  }


  render() {
    return (
      <div>
        <Header onSave={this.onSave} onCancel={this.props.onCancel}/>
        <TabList model={this.props.tabModel}
                 onSelectTab={this.onSelectTab}
                 onUnselectTab={this.onUnselectTab} />
        <Footer onChangeCB={this.onNameChange} />
      </div>
    );
  }
}

AdditScreen.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  tabModel: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }))
};