import { StyleSheet, View, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Text, useTheme } from "react-native-paper";
import * as Yup from "yup";
import Form from "../components/form/Form";
import InputComponent from "../components/form/InputComponent";
import DropDownComponent from "./DropDownComponent";
import { roles } from "../data/data";
import { Link } from "@react-navigation/native";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  role: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const RegisterScreen = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Appbar>
        <Appbar.Content
          title="Sign up"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Appbar>
      <View
        style={{
          flex: 1,
          justifyContent:"center"
        }}
      >
        <Image
          source={require("../assets/undraw_Account_re_o7id.png")}
          style={{
            width: "90%",
            height: 300,
            alignSelf: "center",
            resizeMode: "contain",
          }}
        />
        <Form
          initialValues={{
            name: "",
            password: "",
            role: "",
          }}
        >
          <View
            style={{
              flex: 1,
              padding: 10,
            }}
          >
            <InputComponent
              label={"name"}
              keyboardType={"default"}
              secureTextEntry={false}
            />
            <InputComponent label={"password"} keyboardType={"default"} />
            <DropDownComponent items={roles} label={"role"} />
            <Link style={{
              color: colors.primary,
            }} to={"/login"}>
               Have an account?{" "}
              <Text
                style={{
                  textDecorationLine: "underline",
                }}
              >
                Login
              </Text>
            </Link>
          </View>
        </Form>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
