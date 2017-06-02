import { connect } from 'react-redux';
import { getTabs, setScreen, deleteGroup } from '../redux/actions';
import { ADD_GROUP_SCREEN } from '../helpers/screens';
import GroupListScreen from '../components/GroupList/GroupListScreen.jsx';

const mapStateToProps = (state) => ({
  groupModel: state.groups
});

const mapDispatchToProps = dispatch => ({
  getTabs: () => dispatch(getTabs()),
  openTabListScreen: () => dispatch(setScreen(ADD_GROUP_SCREEN)),
  removeGroup: (id) =>  dispatch(deleteGroup(id)),
  editGroup: () => { return; }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupListScreen);