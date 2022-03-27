import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Button,
  Card,
  Paragraph,
  Subheading,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import { StatusBar } from "expo-status-bar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { listShops } from "../actions/shopActions";
import { Callout, Marker } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const HomeScreen = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();

  const shopDetails = useSelector((state) => state.shopDetails);
  const { shops } = shopDetails;

  const navigation = useNavigation();
  useEffect(() => {
    dispatch(listShops());
  }, [dispatch]);
  const [item, setItem] = React.useState(null);

  const { colors } = useTheme();
  const MarkerComp = (shop) => {
    console.log(shop);
    return (
      <Callout
        onPress={() => {
          navigation.navigate("shop", { shop: shop });
        }}
      >
        <View style={{ flexDirection: "row", position: "absolute" }}>
          <MaterialCommunityIcons
            name="car-convertible"
            size={30}
            color={colors.primary}
          />
          <Text>{shop.name}</Text>
        </View>
      </Callout>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="dark" />
      <Map>
        {shops &&
          shops.map((shop) => (
            <>
              <Marker
                onPress={() => {
                  setItem(shop);
                }}
                key={shop._id}
                // title={shop.name}
                draggable={false}
                coordinate={{
                  latitude: shop.location.latitude,
                  longitude: shop.location.longitude,
                }}
              />
            </>
          ))}
      </Map>
      {item && (
        <Card
          style={{
            position: "absolute",
            bottom: 20,

            backgroundColor: colors.background,
            borderRadius: 10,
            elevation: 10,
          }}
        >
          <Card.Content
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Card.Cover
              source={{ uri: item?.image }}
              style={{
                width: 100,
                height: 100,
                resizeMode: "contain",
              }}
            />
            <Card.Actions
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View>
                <Subheading>Shop Name: {item?.name}</Subheading>

                <Subheading>Contacts: {item?.phoneNumber}</Subheading>

                <Title>Services:</Title>

                <Paragraph>{item?.services}</Paragraph>
              </View>
            </Card.Actions>
          </Card.Content>
        </Card>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
