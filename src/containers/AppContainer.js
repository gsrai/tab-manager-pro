import { connect } from 'react-redux';
import { initGroups } from '../redux/actions'
import App from '../components/App.jsx';

const mapStateToProps = state => ({
  currentScreen: state.currentScreen
});

const mapDispatchToProps = dispatch => ({
  initStore: () => dispatch(initGroups(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);