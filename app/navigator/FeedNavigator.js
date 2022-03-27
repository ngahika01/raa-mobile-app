import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LoginScreen from "../screens/LoginScreen";
import CreateShop from "../screens/CreateShop";
import ProfileScreen from "../screens/ProfileScreen";

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
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default FeedNav;
