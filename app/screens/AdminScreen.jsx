import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Appbar,
  DataTable,
  Divider,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetails } from "../actions/userActions";
import { listBookings } from "../actions/bookingActions";
import { listShops } from "../actions/shopActions";

const AdminScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const userGetDetails = useSelector((state) => state.userGetDetails);
  const { users } = userGetDetails;

  const bookingList = useSelector((state) => state.bookingList);
  const { bookings } = bookingList;

  const shopDetails = useSelector((state) => state.shopDetails);
  const { shops } = shopDetails;

  useEffect(() => {
    dispatch(getUserDetails());
    dispatch(listBookings());
    dispatch(listShops());
  }, [dispatch]);

  const { colors } = useTheme();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
    >
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Admin" />
      </Appbar>
      <ScrollView
        style={{
          padding: 10,
        }}
      >
        <Title
          style={{
            color: colors.accent,
          }}
        >
          All Users
        </Title>
        <DataTable
          shouldRasterizeIOS
          style={{
            backgroundColor: colors.background,
          }}
        >
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Phone</DataTable.Title>
            <DataTable.Title numeric>Role</DataTable.Title>
            <DataTable.Title>isAdmin</DataTable.Title>
          </DataTable.Header>
          {users &&
            users.map((user) => (
              <DataTable.Row key={user.id}>
                <DataTable.Cell>{user.name}</DataTable.Cell>
                <DataTable.Cell numeric>{user.phoneNumber}</DataTable.Cell>
                <DataTable.Cell numeric>{user.role}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {user.isAdmin ? (
                    <Text
                      style={{
                        color: "green",
                      }}
                    >
                      Admin
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: "red",
                      }}
                    >
                      Not admin
                    </Text>
                  )}
                </DataTable.Cell>
              </DataTable.Row>
            ))}
        </DataTable>
        <Divider
          style={{
            backgroundColor: colors.accent,
            marginTop: 10,
          }}
        />
        <Title
          style={{
            color: colors.accent,
          }}
        >
          Bookings
        </Title>
        <DataTable
          shouldRasterizeIOS
          style={{
            backgroundColor: colors.background,
          }}
        >
          <DataTable.Header>
            <DataTable.Title>Shop</DataTable.Title>
            <DataTable.Title numeric>User</DataTable.Title>
            <DataTable.Title numeric>completed</DataTable.Title>
            <DataTable.Title numeric>Created At</DataTable.Title>
          </DataTable.Header>
          {bookings &&
            bookings.map((booking) => (
              <DataTable.Row key={booking._id}>
                <DataTable.Cell>
                  {booking.shop && booking.shop.name}
                </DataTable.Cell>
                <DataTable.Cell numeric>{booking.user.name}</DataTable.Cell>
                <DataTable.Cell numeric>
                  {booking.completed ? (
                    <Text
                      style={{
                        color: "green",
                      }}
                    >
                      Completed
                    </Text>
                  ) : (
                    <Text
                      style={{
                        color: "red",
                      }}
                    >
                      Not completed
                    </Text>
                  )}
                </DataTable.Cell>
                <DataTable.Cell numeric>{booking.createdAt}</DataTable.Cell>
              </DataTable.Row>
            ))}
        </DataTable>
        <Divider
          style={{
            backgroundColor: colors.accent,
            marginTop: 10,
          }}
        />
        <Title
          style={{
            color: colors.accent,
          }}
        >
          All Shops
        </Title>
        <DataTable
          shouldRasterizeIOS
          style={{
            backgroundColor: colors.background,
          }}
        >
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title numeric>Phone Number</DataTable.Title>
            <DataTable.Title numeric>Services</DataTable.Title>
          </DataTable.Header>
          {shops &&
            shops.map((shop) => (
              <DataTable.Row key={shop._id}>
                <DataTable.Cell>{shop.name}</DataTable.Cell>
                <DataTable.Cell numeric>{shop.phoneNumber}</DataTable.Cell>
                <DataTable.Cell numeric>{shop.services}</DataTable.Cell>
              </DataTable.Row>
            ))}
        </DataTable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({});
