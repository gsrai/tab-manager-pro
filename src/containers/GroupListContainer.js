import { connect } from 'react-redux';
import { getTabs, removeGroup, setScreenEdit } from '../redux/actions';
import GroupListScreen from '../components/GroupList/GroupListScreen.jsx';
import { EDIT_GROUP_SCREEN } from '../helpers/screens';

const mapStateToProps = (state) => ({
  groupModel: state.groups
});

const mapDispatchToProps = dispatch => ({
  getTabs: () => dispatch(getTabs()),
  removeGroup: (id) =>  dispatch(removeGroup(id)),
  editGroup: (id) => dispatch(setScreenEdit(EDIT_GROUP_SCREEN, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupListScreen);