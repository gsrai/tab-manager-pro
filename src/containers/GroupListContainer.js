import { connect } from 'react-redux';
import { getTabs, removeGroup } from '../redux/actions';
import GroupListScreen from '../components/GroupList/GroupListScreen.jsx';

const mapStateToProps = (state) => ({
  groupModel: state.groups
});

const mapDispatchToProps = dispatch => ({
  getTabs: () => dispatch(getTabs()),
  removeGroup: (id) =>  dispatch(removeGroup(id)),
  editGroup: () => { return; }
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupListScreen);