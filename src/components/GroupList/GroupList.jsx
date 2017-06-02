import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { grey400 } from 'material-ui/styles/colors';

export default class GroupList extends React.Component {
  constructor(props) {
    super(props);
  }

  createRightIconMenu = (openCB, deleteCB, editCB) => {

    const iconButtonElement = (
      <IconButton touch={false} tooltip='more' tooltipPosition='bottom-left'>
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem primaryText={'Open'} onClick={openCB} />
        <MenuItem primaryText={'Edit'} onClick={editCB} />
        <MenuItem primaryText={'Delete'} onClick={deleteCB} />
      </IconMenu>
    );
  }

  createSecondaryText = (tabText, dateText) => {
    return (<p>{tabText}<br />{dateText}</p>);
  }

  getLang() {
    if (navigator.languages != undefined) {
      return navigator.languages[0];
    }

    return navigator.language;
  }

  createGroupComponent = (group, i) => {
    const { name, tabs, editTimestamp } = group;
    const numberOfTabs = tabs.length;
    const tabText = numberOfTabs > 1 ? numberOfTabs+' tabs' : numberOfTabs+' tab';
    const dateText = new Date(editTimestamp).toLocaleDateString(this.getLang());
    const { openTabs, removeGroup, editGroup } = this.props;

    return (
      <div key={i}>
        <ListItem rightIconButton={
                    this.createRightIconMenu(openTabs.bind(null, group),
                                        removeGroup.bind(null,group.id),
                                        editGroup.bind(null,...group))
                  }
                  primaryText={name}
                  secondaryText={this.createSecondaryText(tabText, dateText)}
                  secondaryTextLines={2} />
        <Divider />
      </div>
    );
  }

  render() {
    const groupModel = this.props.groupModel;
    let listComponents = groupModel.map((group, i) => this.createGroupComponent(group, i));
    listComponents = listComponents.reverse();

    return (
      <div>
          <Subheader>Groups</Subheader>
          <div id={'groupList'}>
            <List>
              <Divider />
              {listComponents}
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
    numberOfTabs: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
  }))
};