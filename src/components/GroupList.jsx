import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {grey400} from 'material-ui/styles/colors';

const iconButtonElement = (
  <IconButton touch={false} tooltip="more" tooltipPosition="bottom-left">
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem primaryText={"Open"} />
    <MenuItem primaryText={"Edit"} />
    <MenuItem primaryText={"Delete"} />
  </IconMenu>
);

export default class GroupList extends React.Component {

  render() {
    return (
      <div>
          <Subheader>Groups</Subheader>
          <div id={"groupList"}>
            <List>
              <Divider />
              <ListItem rightIconButton={rightIconMenu} 
                        primaryText="Clojure"
                        secondaryText={<p>3 Tabs<br />5/30/2017</p>}
                        secondaryTextLines={2} />
              <Divider />
              <ListItem rightIconButton={rightIconMenu} 
                        primaryText="Bitcoin"
                        secondaryText={<p>14 Tabs<br />9/12/2017</p>}
                        secondaryTextLines={2} />
              <Divider />
              <ListItem rightIconButton={rightIconMenu} 
                        primaryText="Material-UI w/React"
                        secondaryText={<p>1 Tab<br />5/23/2017</p>}
                        secondaryTextLines={2} />
              <Divider />
              <ListItem rightIconButton={rightIconMenu} 
                        primaryText="React Videos"
                        secondaryText={<p>6 Tabs<br />4/21/2017</p>}
                        secondaryTextLines={2} />
              <Divider />
              <ListItem rightIconButton={rightIconMenu} 
                        primaryText="Trading Algos"
                        secondaryText={<p>7 Tabs<br />5/2/2017</p>}
                        secondaryTextLines={2} />
              <Divider />
            </List>
          </div>
      </div>
    );
  }
}