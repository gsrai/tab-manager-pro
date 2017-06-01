import { connect } from 'react-redux';
import { getTabs, setScreen } from '../redux/actions';
import { ADD_GROUP_SCREEN } from '../helpers/screens';
import GroupListScreen from '../components/GroupList/GroupListScreen.jsx';

const mapStateToProps = (state, props) => ({
  groupModel: state.groups
});

const mapDispatchToProps = dispatch => ({
  getTabs: () => dispatch(getTabs()),
  openTabListScreen: () => dispatch(setScreen(ADD_GROUP_SCREEN)),
  removeGroup: () => { console.log("removing group") },
  editGroup: () => { console.log("editting group") }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupListScreen);