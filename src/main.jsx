import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import rootReducer from './redux/reducers/rootReducer'
import AppContainer from './containers/AppContainer';

const store = createStore(rootReducer, applyMiddleware(thunk));
const app = document.getElementById('app');

var main = () => {
  injectTapEventPlugin();
  render(
    <Provider store={store}>
      <MuiThemeProvider>
        <AppContainer />
      </MuiThemeProvider>
    </Provider>, app);
}

document.addEventListener('DOMContentLoaded', main);