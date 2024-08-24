import ReactDOM from 'react-dom/client';
import { createStore,applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import rootReducer, { rootSaga } from './modules';
//import loggerMiddleware from './lib/loggerMiddleware';
import {createLogger} from 'redux-logger';
import {thunk} from 'redux-thunk'; //thunk 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미
import createSagaMiddleware from 'redux-saga';
//import {composeWithDevTools} from 'redux-devtools-extension';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(thunk,logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
