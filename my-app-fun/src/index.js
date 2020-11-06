import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducres from './store/modules/index';
import { Provider } from 'react-redux';
// import { createStore } from 'redux';

// const store = createStore(rootReducres)

ReactDOM.render(
  // <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);

