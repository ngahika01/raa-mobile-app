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
import { useSelector } from "react-redux";
import Form from "../components/form/Form";
import InputComponent from "../components/form/InputComponent";
import SubmitButton from "../components/form/SubmitButton";
import MultiSelectComponent from "./MultiSelectComponent";
import { services } from "../data/data";
import ImagePickerComponent from "../components/form/ImagePickerComponent";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  location: Yup.string().required("Location is required"),
  image: Yup.string().required("Image is required"),
  services: Yup.object().required("Services is required"),
  phoneNumber: Yup.string()
    .required("Phone number is required")
    // valid phone number
    .matches(
      /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
      "Phone number is not valid"
    ),
});

const CreateShop = () => {
  const locationSave = useSelector((state) => state.locationSave);
  const { place } = locationSave;
  const [visible, setVisible] = React.useState(false);

  const { colors } = useTheme();
  const navigation = useNavigation();
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
                validationSchema={validationSchema}
                initialValues={{
                  name: "",
                  location: "",
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
