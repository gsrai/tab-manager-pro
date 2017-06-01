import React, { PropTypes } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import TabList from './TabList.jsx'

export default class AdditScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <TabList />
        <Footer />
      </div>
    );
  }
}

AdditScreen.propTypes = {
  getTabs: PropTypes.func.isRequired,
  tabModel: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }))
}