import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class Footer extends React.Component {

  render() {
    return (
      <div id="groupName">
        <TextField hintText="Group Name" 
                   fullWidth={true} 
                   onChange={this.props.onChangeCB} />
      </div>
    );
  }
}

Footer.propTypes = {
  onChangeCB: PropTypes.func.isRequired
}