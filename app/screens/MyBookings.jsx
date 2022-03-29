import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Appbar, DataTable, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { myBookings } from "../actions/bookingActions";

const MyBookings = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const bookingMy = useSelector((state) => state.bookingMy);
  const { bookings, error } = bookingMy;

  const dispatch = useDispatch();
  console.log(error);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    dispatch(myBookings(userInfo._id));
  }, [userInfo, dispatch]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
    >
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="My Bookings" />
      </Appbar>
      <DataTable
        style={{
          backgroundColor: colors.background,
        }}
      >
        <DataTable.Header>
          <DataTable.Title>Booking ID</DataTable.Title>
          <DataTable.Title>Shop Name</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Time</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>
        {bookings &&
          bookings.map((booking) => (
            <DataTable.Row key={booking._id}>
              <DataTable.Cell>{booking._id}</DataTable.Cell>
              <DataTable.Cell>
                {booking.shop && booking.shop.name}
              </DataTable.Cell>
              <DataTable.Cell>{booking.createdAt}</DataTable.Cell>
              <DataTable.Cell>
                {booking.completed ? (
                  <Text
                    style={{
                      color: "green",
                    }}
                  >
                    C
                  </Text>
                ) : (
                  <Text
                    style={{
                      color: colors.error,
                    }}
                  >
                    {" "}
                    NC
                  </Text>
                )}
              </DataTable.Cell>
            </DataTable.Row>
          ))}
      </DataTable>
    </SafeAreaView>
  );
};

export default MyBookings;

const styles = StyleSheet.create({});
