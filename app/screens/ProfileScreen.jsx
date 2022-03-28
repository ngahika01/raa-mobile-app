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
  Paragraph,
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
          <Title>Phone Number : {userInfo.phoneNumber} </Title>
          {userInfo && userInfo.isAdmin && (
            <Paragraph
              style={{
                color: colors.error,
              }}
            >
              Admin
            </Paragraph>
          )}
        </Card.Content>
      </Card>
      {userInfo.role === "mechanic" && (
        <List.Item
          style={{
            backgroundColor: colors.accent,
            margin: 10,
          }}
          title="Create shop"
          onPress={() => navigation.navigate("shop")}
          right={() => <List.Icon icon="plus" />}
        />
      )}

      {userInfo && userInfo.isAdmin && (
        <List.Item
          style={{
            backgroundColor: colors.accent,
            margin: 10,
          }}
          title="Admin Section"
          onPress={() => {
            navigation.navigate("admin");
          }}
          right={() => <List.Icon icon="folder" />}
        />
      )}
      {userInfo && userInfo.isAdmin && (
        <List.Item
          style={{
            backgroundColor: colors.accent,
            margin: 10,
          }}
          title="My Shops"
          onPress={() => {
            navigation.navigate("myShops");
          }}
          right={() => <List.Icon icon="store" />}
        />
      )}
      <List.Item
        style={{
          backgroundColor: colors.accent,
          margin: 10,
        }}
        title="My bookings"
        onPress={() => {
          navigation.navigate("mybooks", { userInfo });
        }}
        right={() => <List.Icon icon="folder" />}
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
            routes: [{ name: "auth" }],
          });
        }}
        right={() => <List.Icon icon="logout" />}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
