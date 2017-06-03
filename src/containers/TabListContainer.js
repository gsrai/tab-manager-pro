import { connect } from 'react-redux';
import TabList from '../components/Addit/TabList.jsx';

const mapStateToProps = (state) => {
  return {
    model: state.tabs
  };
};

export default connect(mapStateToProps)(TabList);