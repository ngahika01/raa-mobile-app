import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistor } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";
import persistReducer from "redux-persist/es/persistReducer";
import {
  userGetDetailsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateReducer,
} from "./app/reducers/userReducers";
import { saveLocationReducer } from "./app/reducers/locationReducers";
import {
  createShopReducer,
  deleteShopReducer,
  getShopByUserReducer,
  getShopDetailsReducer,
  getShopReducer,
  updateShopReducer,
} from "./app/reducers/shopReducers";
import {
  bookingCreateReducer,
  bookingDeleteReducer,
  bookingListReducer,
  bookingMyReducer,
  bookingUpdateReducer,
} from "./app/reducers/bookingReducers";
const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userGetDetails: userGetDetailsReducer,
  userUpdate: userUpdateReducer,
  locationSave: saveLocationReducer,
  shopCreate: createShopReducer,
  shopDelete: deleteShopReducer,
  shopUpdate: updateShopReducer,
  shopGet: getShopReducer,
  shopDetails: getShopDetailsReducer,
  bookingCreate: bookingCreateReducer,
  bookingUpdate: bookingUpdateReducer,
  bookingDelete: bookingDeleteReducer,
  bookingList: bookingListReducer,
  userGetShop: getShopByUserReducer,
  bookingMy: bookingMyReducer,
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
