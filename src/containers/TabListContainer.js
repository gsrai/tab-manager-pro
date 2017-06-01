import { connect } from 'react-redux';
import { addGroup } from '../redux/actions';
import AdditScreen from '../components/Addit/AdditScreen.jsx';

const mapStateToProps = (state, props) => ({
  tabModel: state.tabs
});

const mapDispatchToProps = dispatch => ({
  onSave: (name, tabs, tsp, numTabs) => dispatch(addGroup(name, tabs, tsp, numTabs))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditScreen);