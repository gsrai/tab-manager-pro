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
  constructor(props) {
    super(props);
  }

  createRightIconMenu(openCB, editCB, deleteCB) {
    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem primaryText={"Open"} onclick={openCB} />
        <MenuItem primaryText={"Edit"} onclick={editCB} />
        <MenuItem primaryText={"Delete"} onclick={deleteCB} />
      </IconMenu>
    );
  }

  createGroupComponent(group) {
    const { name, tabs, editTimestamp } = group;
    const numberOfTabs = tabs.length;
    const tabText = numberOfTabs > 1 ? numberOfTabs+" tabs" : numberOfTabs+" tab";
    const dateText = (new Date(editTimestamp)).toLocaleDateString();

    return (
      <div>
        <ListItem rightIconButton={createRightIconMenu(group)} 
                  primaryText={name}
                  secondaryText={<p>{tabText}<br />{dateText}</p>}
                  secondaryTextLines={2} />
        <Divider />
      </div>
    );
  }

  render() {
    const groupModel = this.prop.groupModel;
    const listComponents = groupModel.map((group) => this.createGroupComponent(group));
    return (
      <div>
          <Subheader>Groups</Subheader>
          <div id={"groupList"}>
            <List>
              <Divider />
              {...listComponents}
            </List>
          </div>
      </div>
    );
  }
}

GroupList.propTypes = {
  openTabs: PropTypes.func.isRequired,
  removeGroup: PropTypes.func.isRequired,
  editGroup: PropTypes.func.isRequired,
  groupModel: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })),
    editTimestamp: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  }))
}