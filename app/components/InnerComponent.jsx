import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { PersistGate } from "redux-persist/integration/react";
import React, { useEffect, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";
import persistStore from "redux-persist/es/persistStore";
import store from "../../store";
import { theme } from "../config/theme";
import MyTabs from "../navigator/TabNavigator";
import AuthNav from "../navigator/AuthNav";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default InnerComponent = ({ children }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const persistor = persistStore(store);

  return <>{userInfo ? <MyTabs /> : <AuthNav />}</>;
};
