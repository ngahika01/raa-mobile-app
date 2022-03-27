import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "react-native-paper";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="auto" />
      <Map />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
