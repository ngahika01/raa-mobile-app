import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider, useDispatch, useSelector } from "react-redux";
import InnerComponent from "./app/components/InnerComponent";
import { theme } from "./app/config/theme";
import LoginScreen from "./app/screens/LoginScreen";
import store from "./store";
import { Provider as PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import AuthNav from "./app/navigator/AuthNav";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
        }}
      >
        <Provider store={store}>
          <PersistGate persistor={persistStore(store)}>
            <NavigationContainer>
              <StatusBar style={"light"} />
              <SafeAreaProvider>
                <InnerComponent />
              </SafeAreaProvider>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
