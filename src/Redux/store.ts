import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from "redux-saga";
import CVSlice from './slices';

import rootSaga from "./RootSaga";
let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];
const allReducer = {
    CVSlice
  }
const store = configureStore({
    reducer: allReducer,
    middleware
})
sagaMiddleware.run(rootSaga);
export default store