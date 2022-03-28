import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "../screens/LoginScreen";
import CreateShop from "../screens/CreateShop";
import ProfileScreen from "../screens/ProfileScreen";
import AuthNav from "./AuthNav";
import HomeScreen from "../screens/HomeScreen";
import ShopDetails from "../screens/ShopDetails";
import AdminScreen from "../screens/AdminScreen";

const Stack = createNativeStackNavigator();
const FeedNav = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="profileScreen">
        <Stack.Screen
          name="profileScreen"
          options={{ headerShown: false }}
          component={ProfileScreen}
        />

        <Stack.Screen
          name="shop"
          options={{ headerShown: false }}
          component={CreateShop}
        />

        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="auth"
          options={{ headerShown: false }}
          component={AuthNav}
        />
        <Stack.Screen
          name="shopdetails"
          options={{ headerShown: false }}
          component={ShopDetails}
        />
        <Stack.Screen
          name="admin"
          options={{ headerShown: false }}
          component={AdminScreen}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default FeedNav;
