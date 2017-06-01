import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';

export default class TabList extends React.Component {

  render() {
    return (
      <div>
          <Subheader>Create Tab Group</Subheader>
          <div id="tabList">
            <List>
              <Divider />
              <ListItem primaryText="Learn Clojure" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Learn React" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Youtube - Trading Algorithms" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Lorem Ipsum" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Wikipedia - Hitler" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Gmail inbox" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Learn Clojure" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Learn React" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Youtube - Trading Algorithms" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Lorem Ipsum" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Wikipedia - Hitler" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Gmail inbox" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Learn Clojure" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Learn React" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Youtube - Trading Algorithms" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Lorem Ipsum" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Wikipedia - Hitler" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Gmail inbox" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Learn Clojure" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Learn React" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Youtube - Trading Algorithms" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Lorem Ipsum" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Wikipedia - Hitler" leftCheckbox={<Checkbox />} />
              <ListItem primaryText="Gmail inbox" leftCheckbox={<Checkbox />} />
              <Divider />
            </List>
          </div>
      </div>
    );
  }
}