import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory} from 'history';

import './App.css';
import List from './components/List';
import Header from './components/Header';
import Footer from './containers/Footer';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';

import baseReducer from './redux/reducers';
import rootSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(
  baseReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  )
);

const history = createBrowserHistory();

sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router history={history}>
          <Header />
          <Route exact path='/' component={List}/>
          <Footer />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
