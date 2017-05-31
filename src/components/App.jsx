import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import GroupList from './GroupList.jsx'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <GroupList />
        <Footer />
      </div>
    );
  }
}