import {
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Appbar,
  Modal,
  Portal,
  Provider,
  Text,
  Title,
  useTheme,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import Map from "../components/Map";
import MapView, { Marker } from "react-native-maps";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import Form from "../components/form/Form";
import InputComponent from "../components/form/InputComponent";
import SubmitButton from "../components/form/SubmitButton";
import MultiSelectComponent from "./MultiSelectComponent";
import { services } from "../data/data";
import ImagePickerComponent from "../components/form/ImagePickerComponent";
import { createShop } from "../actions/shopActions";
import { useEffect } from "react";
import { SHOP_CREATE_RESET } from "../constants/shopConstants";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  image: Yup.string().required("Image is required"),
  services: Yup.string().required("Services is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9]{10}$/, "Phone number is not valid"),
});

const CreateShop = () => {
  const locationSave = useSelector((state) => state.locationSave);
  const { place } = locationSave;
  const [loc, setLoc] = React.useState();
  const [visible, setVisible] = React.useState(false);

  const { colors } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const shopCreate = useSelector((state) => state.shopCreate);
  const { loading, error, success } = shopCreate;

  useEffect(() => {
    if (success) {
      navigation.navigate("home");
      dispatch({
        type: SHOP_CREATE_RESET,
      });
    }
  }, [success, navigation, dispatch]);
  if (error) {
    alert(error);
  }

  const handleSubmit = ({ name, image, services, phoneNumber }) => {
    dispatch(
      createShop({
        name,
        image,
        services,
        phoneNumber,
        location: loc,
      })
    );
  };
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
        <Map latD={0.0009} lngD={0.00092}>
          <Marker
            draggable
            onDragEnd={(e) => {
              setVisible(true);
              setLoc({
                latitude: e.nativeEvent.coordinate.latitude,
                longitude: e.nativeEvent.coordinate.longitude,
              });
            }}
            coordinate={{
              latitude: place.latitude,
              longitude: place.longitude,
            }}
          />
        </Map>
        <Modal
          visible={visible}
          dismissable={false}
          style={{
            backgroundColor: colors.background,
            top: "1%",
            margin: 10,
            padding: 20,
          }}
        >
          <ScrollView>
            <Title
              style={{
                textAlign: "center",
              }}
            >
              Save shop
            </Title>
            <KeyboardAvoidingView>
              <Form
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                initialValues={{
                  name: "",
                  image: "",
                  services: "",
                  phoneNumber: "",
                }}
              >
                <InputComponent
                  keyboardType={"default"}
                  label="name"
                  secureTextEntry={false}
                />
                <MultiSelectComponent label={"services"} items={services} />

                <InputComponent
                  keyboardType={"default"}
                  label="location"
                  secureTextEntry={false}
                  value={loc?.latitude + "," + loc?.longitude}
                />
                <ImagePickerComponent />
                <InputComponent
                  keyboardType={"numeric"}
                  label="phoneNumber"
                  secureTextEntry={false}
                />
                <SubmitButton
                  color={colors.primary}
                  icon="content-save"
                  value={`Save`}
                  textColor={colors.accent}
                />
              </Form>
            </KeyboardAvoidingView>
          </ScrollView>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default CreateShop;

const styles = StyleSheet.create({});
