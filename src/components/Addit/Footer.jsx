import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class Footer extends React.Component {

  render() {
    const initialValue = this.props.initialValue || '';
    return (
      <div id="groupName">
        <TextField hintText="Group Name"
                   fullWidth={true}
                   maxLength="30"
                   onChange={this.props.onChangeCB} defaultValue={initialValue} />
      </div>
    );
  }
}

Footer.propTypes = {
  onChangeCB: PropTypes.func.isRequired,
  initialValue: PropTypes.string
};