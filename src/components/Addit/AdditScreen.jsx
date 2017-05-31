import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import TabList from './TabList.jsx'

export default class App extends React.Component {
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