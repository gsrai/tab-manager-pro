import { connect } from 'react-redux';
import { addGroup, setScreen } from '../redux/actions';
import AdditScreen from '../components/Addit/AdditScreen.jsx';
import { GROUP_LIST_SCREEN } from '../helpers/screens';


const mapStateToProps = (state) => {
  const groupNames = state.groups.map((g) => g.name);
  return {
    groupNames
  };
};

const mapDispatchToProps = dispatch => ({
  onSave: (name, tabs, tsp, numTabs) => {
    dispatch(addGroup(name, tabs, tsp, numTabs));
    dispatch(setScreen(GROUP_LIST_SCREEN));
  },
  onCancel: () => dispatch(setScreen(GROUP_LIST_SCREEN)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdditScreen);