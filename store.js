import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistor } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
const reducer = combineReducers({

});
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const initialState = {};
const middleware = [thunk];
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  persistedReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
