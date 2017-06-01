import React, { PropTypes } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import TabList from './TabList.jsx'

export default class AdditScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      name: "",
      tabs: []
    });
  }

  onNameChange = (e, value) => {
    this.setState({
      name: String(value)
    });
  }

  onUnselectTab = (tab) => {
    const tabs = this.state.tabs;
    const _tabs = tabs.filter((t) => t.id !== tab.id);
    this.setState({
      tabs: [..._tabs]
    });
  }

  onSelectTab = (tab) => {
    this.setState({
      tabs: [...this.state.tabs, tab]
    });
  }

  onSave = () => {
    let { name, tabs } = this.state;
    let numberOfTabs = tabs.length;
    let tsp = new Date().getTime();

    if (numberOfTabs < 1 || !name || name.trim() === '') {
      console.log('name is empty or no tabs selected.');// better feedback and split this
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
}