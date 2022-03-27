import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Text, useTheme } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Map from "../components/Map";
import MapView from "react-native-maps";

const CreateShop = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <StatusBar style="dark" />
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Create Shop" />
      </Appbar>
      <View
        style={{
          flex: 1,
        }}
      >
        <Map >
            <MapView.Marker
            
            />
        </Map>
      </View>
    </SafeAreaView>
  );
};

export default CreateShop;

const styles = StyleSheet.create({});
