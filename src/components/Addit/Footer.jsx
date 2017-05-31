import React from 'react';
import TextField from 'material-ui/TextField';

export default class Footer extends React.Component {

  render() {
    return (
      <div id="groupName">
        <TextField hintText="Group Name" fullWidth={true} />
      </div>
    );
  }
}