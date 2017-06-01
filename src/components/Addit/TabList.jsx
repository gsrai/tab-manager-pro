import React, { PropTypes } from 'react';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

export default class TabList extends React.Component {
  constructor(props) {
    super(props);
  }

  onCheck = (e, isChecked) => {
    const id = Number(e.nativeEvent.target.id);
    const model = this.props.model;
    const tab = model.filter((t) => t.id === id)[0];

    if (isChecked) {
      this.props.onSelectTab(tab);
    } else {
      this.props.onUnselectTab(tab);
    }
  }

  createCheckbox = (id) => {
    return(
      <Checkbox id={id} onCheck={this.onCheck} />
    );
  }

  createTabComponent = (tab) => {
    return(
      <div id={'tabItem'+tab.id} >
        <ListItem secondaryText={tab.title} 
                  secondaryTextLines={1}
                  leftCheckbox={this.createCheckbox(tab.id)} />
        <Divider />
      </div>
    );
  }

  render() {
    const model = this.props.model;
    const listComponents = model.map((tab) => this.createTabComponent(tab));

    return (
      <div>
          <Subheader>Create Tab Group</Subheader>
          <div id="tabList">
            <List>
              <Divider />
              {listComponents}
            </List>
          </div>
      </div>
    );
  }
}

TabList.propTypes = {
  onSelectTab: PropTypes.func.isRequired,
  onUnselectTab: PropTypes.func.isRequired,
  model: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }))
}