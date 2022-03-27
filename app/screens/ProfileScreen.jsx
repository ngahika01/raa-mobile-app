import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Appbar,
  Card,
  useTheme,
  Text,
  Title,
  Headline,
  List,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const navigation = useNavigation();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <StatusBar style="auto" />
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Profile" />
      </Appbar>

      <Card
        style={{
          backgroundColor: colors.background,
          margin: 10,
        }}
      >
        <Card.Content>
          <Headline>Name : {userInfo.name} </Headline>
          <Title>Role : {userInfo.role} </Title>
        </Card.Content>
      </Card>
      <List.Item
        style={{
          backgroundColor: colors.accent,
          margin: 10,
        }}
        title="Create shop"
        onPress={() => navigation.navigate("shop")}
        

        
        right={() => <List.Icon icon="plus" />}
      />
      <List.Item
        style={{
          backgroundColor: colors.accent,
          margin: 10,
        }}
        title="Logout"
        onPress={() => {
          dispatch(logout());
          navigation.reset({
            index: 0,
            routes: [{ name: "login" }],
          });

        }}
        right={() => <List.Icon icon="logout" />}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
