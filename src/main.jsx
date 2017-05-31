import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import { createStore } from 'redux'
// import todoReducer from './redux/reducers/TodoReducer'
import App from './components/App.jsx';

// const store = createStore(todoReducer);
const app = document.getElementById('app');

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// , app);

var main = () => {
  injectTapEventPlugin();
  render(<MuiThemeProvider><App /></MuiThemeProvider>, app);
}

document.addEventListener('DOMContentLoaded', main);