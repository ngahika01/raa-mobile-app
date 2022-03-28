import { StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Appbar,
  Button,
  Card,
  HelperText,
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
      <Appbar>
        <Appbar.Content style={{
          alignItems: "center",
        }} title="Home" />
      </Appbar>
      <StatusBar style="dark" />
      <Map>
        {shops &&
          shops.map((shop) => (
            <>
              <Marker
                image={require("../assets/icons8-mechanic-48.png")}
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
          onPress={() => {
            if(userInfo.role ==="driver"){
              navigation.navigate("shopDetails", { shop: item });
            }

          }}
          style={{
            position: "absolute",
            bottom: 20,

            backgroundColor: colors.background,
            borderRadius: 10,
            elevation: 10,
            right: 20,
            left: 20,
          }}
        >
          <HelperText type="error">Click to book appointment now</HelperText>
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

                <Paragraph>
                  {
                    // break where there is a comma in the string
                    item?.services.split(",").join("\n")
                  }
                </Paragraph>
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
