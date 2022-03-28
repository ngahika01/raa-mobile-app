import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Appbar,
  Card,
  DataTable,
  Title,
  useTheme,
  Text,
  Divider,
  Paragraph,
  Button,
} from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../actions/bookingActions";
import { BOOKING_CREATE_RESET } from "../constants/bookingConstants";

const optionsPerPage = [2, 3, 4];

const ShopDetails = () => {
  const dispatch = useDispatch();

  const bookingCreate = useSelector((state) => state.bookingCreate);
  const { loading, success, error } = bookingCreate;

  const route = useRoute();
  const { shop } = route.params;
  const navigation = useNavigation();
  const { colors } = useTheme();

  React.useEffect(() => {
    if (success) {
      dispatch({
        type: BOOKING_CREATE_RESET,
      });
      navigation.goBack();
    }
  }, [success, navigation]);

  console.log(error);

  if (success) {
    alert("Booking Successful");
  }

  const handleBook = () => {
    dispatch(
      createBooking({
        shop: shop._id,
        phoneNumber: shop.phoneNumber,
      })
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Appbar>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title={shop.name + "  shop details"} />
      </Appbar>

      <ScrollView>
        <Card
          style={{
            marginTop: 10,
            backgroundColor: colors.background,
          }}
        >
          <Card.Content>
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Shop Name: {shop.name}
            </Text>
            <Divider
              style={{
                backgroundColor: colors.primary,
                marginTop: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Shop Contacts: {shop.phoneNumber}
            </Text>
            <Divider
              style={{
                backgroundColor: colors.primary,
                marginTop: 10,
              }}
            />
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Services Offrered:
            </Text>
            <Paragraph>{shop.services.split(",").join("\n")}</Paragraph>
            <Divider
              style={{
                backgroundColor: colors.primary,
                marginTop: 10,
              }}
            />
          </Card.Content>

          <Card.Actions
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onPress={handleBook}
              style={{
                backgroundColor: colors.primary,
                marginTop: 10,
                marginBottom: 10,
              }}
              color={colors.background}
            >
              Book now
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ShopDetails;

const styles = StyleSheet.create({});
