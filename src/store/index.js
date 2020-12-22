import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = { }

const configureStore = ( ) => {

  const store =  createStore(
      reducers,
      initialState,
      composeWithDevTools( applyMiddleware(thunk))
  );
  return store;
};
export default configureStore;

