import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistor } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import { userGetDetailsReducer, userLoginReducer, userRegisterReducer,userUpdateReducer } from "./app/reducers/userReducers";
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userGetDetails: userGetDetailsReducer,
  userUpdate: userUpdateReducer,
  
  

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
