import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { DataTable, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { myBookings } from "../actions/bookingActions";

const MyBookings = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const bookingMy = useSelector((state) => state.bookingMy);
  const { bookings } = bookingMy;

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  useEffect(() => {
    myBookings(userInfo._id);
  }, [userInfo, dispatch]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
    >
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Booking ID</DataTable.Title>
          <DataTable.Title>Shop Name</DataTable.Title>
          <DataTable.Title>Date</DataTable.Title>
          <DataTable.Title>Time</DataTable.Title>
          <DataTable.Title>Status</DataTable.Title>
        </DataTable.Header>
        {bookings.map((booking) => (
          <DataTable.Row key={booking._id}>
            <DataTable.Cell>{booking._id}</DataTable.Cell>
            <DataTable.Cell>{booking.shopName}</DataTable.Cell>
            <DataTable.Cell>{booking.date}</DataTable.Cell>
            <DataTable.Cell>{booking.time}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </SafeAreaView>
  );
};

export default MyBookings;

const styles = StyleSheet.create({});
