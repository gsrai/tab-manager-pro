import { connect } from 'react-redux';
import { initGroups } from '../redux/actions';
import App from '../components/App.jsx';

const mapStateToProps = state => ({
  currentScreen: state.currentScreen.screen
});

const mapDispatchToProps = dispatch => ({
  initStore: () => dispatch(initGroups())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);