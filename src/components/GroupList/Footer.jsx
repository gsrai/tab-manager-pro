import React from 'react';
import PropTypes from 'prop-types';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20
};

export default class Footer extends React.Component {
  render() {
    const {getTabs } = this.props;
    const onClickHandler = () => {
      getTabs();
    };

    return (
      <div id="footer">
        <FloatingActionButton mini={true} style={style} onClick={onClickHandler}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

Footer.propTypes = {
  getTabs:PropTypes.func.isRequired
};