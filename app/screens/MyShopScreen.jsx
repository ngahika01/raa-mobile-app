import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Appbar,
  Button,
  DataTable,
  IconButton,
  Title,
  useTheme,
} from "react-native-paper";
import { deleteShop, getShopByUser } from "../actions/shopActions";
import { useNavigation } from "@react-navigation/native";

const MyShopScreen = () => {
  const dispatch = useDispatch();
  const userGetShop = useSelector((state) => state.userGetShop);
  const { shops, error } = userGetShop;
  const { colors } = useTheme();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const shopDelete = useSelector((state) => state.shopDelete);
  const { error: errorDelete, success } = shopDelete;
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getShopByUser(userInfo._id));
    if (success) {
      alert("Shop Deleted Successfully");
    }
  }, [dispatch, userInfo, success]);

  const handleDelete = (id) => {
    dispatch(deleteShop(id));
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Shop" />
      </Appbar>
      <Title
        style={{
          color: colors.accent,
        }}
      >
        My Shops
      </Title>
      <DataTable
        style={{
          marginTop: 10,
          backgroundColor: colors.background,
        }}
      >
        <DataTable.Header>
          <DataTable.Title>Shop Name</DataTable.Title>
          <DataTable.Title>Shop phone Number</DataTable.Title>
          <DataTable.Title>Services</DataTable.Title>
          <DataTable.Title>Actions</DataTable.Title>
        </DataTable.Header>
        {shops &&
          shops.map((shop, index) => (
            <DataTable.Row key={shop._id}>
              {/* <DataTable.Cell>{index + 1}</DataTable.Cell> */}
              <DataTable.Cell>{shop.name}</DataTable.Cell>
              <DataTable.Cell>{shop.phoneNumber}</DataTable.Cell>
              <DataTable.Cell>{shop.services}</DataTable.Cell>
              <DataTable.Cell>
                <IconButton
                  icon="delete"
                  onPress={() => handleDelete(shop._id)}
                  color={colors.error}
                  size={24}
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))}
      </DataTable>
    </SafeAreaView>
  );
};

export default MyShopScreen;
