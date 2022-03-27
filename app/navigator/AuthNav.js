import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MyTabs from "./TabNavigator";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";


const Stack = createNativeStackNavigator();
const AuthNav = () => {
  const user = null;
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
      
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="signup"
          options={{ headerShown: false }}
          component={RegisterScreen}
        />
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={MyTabs}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default AuthNav;

const styles = StyleSheet.create({});
