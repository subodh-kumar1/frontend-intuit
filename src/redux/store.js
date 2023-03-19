import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers";
import { initSagas } from "./sagas/initSagas";
import initialState from "./reducers/initialState";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// we need an initialState otherwise , store will freak out

const sagaMiddleware = createSagaMiddleware({
  onError(error) {
    setImmediate(() => {
      throw error;
    });
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// redux sagas is a middleware that we apply to the store
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, reduxImmutableStateInvariant())
  )
);

initSagas(sagaMiddleware);

export default store;
