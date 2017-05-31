import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20
};

export default class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <FloatingActionButton mini={true} style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}