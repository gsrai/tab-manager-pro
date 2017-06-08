import { connect } from 'react-redux';
import { editGroup, setScreen } from '../redux/actions';
import EditScreen from '../components/Addit/EditScreen.jsx';
import { GROUP_LIST_SCREEN } from '../helpers/screens';


const mapStateToProps = (state) => {
  const id = state.currentScreen.id;
  const group = state.groups.filter((g) => g.id === id)[0];
  const groupName = group.name;
  const tabs = group.tabs;
  const groupNames = state.groups.map((g) => g.name);

  return {
    groupNames,
    tabs,
    id,
    groupName
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: (id, name, tabs, tsp, numTabs) => {
    dispatch(editGroup(id, name, tabs, tsp, numTabs));
    dispatch(setScreen(GROUP_LIST_SCREEN));
  },
  onCancel: () => dispatch(setScreen(GROUP_LIST_SCREEN)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditScreen);