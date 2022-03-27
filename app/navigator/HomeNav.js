import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";
import ShopDetails from "../screens/ShopDetails";

const Stack = createNativeStackNavigator();
const HomeNav = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="profileScreen">
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="shopDetails"
          options={{ headerShown: false }}
          component={ShopDetails}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default HomeNav;
