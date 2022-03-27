import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "../screens/LoginScreen";
import CreateShop from "../screens/CreateShop";
import ProfileScreen from "../screens/ProfileScreen";
import MyTabs from "./TabNavigator";
import HomeScreen from "../screens/HomeScreen";

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
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default FeedNav;
