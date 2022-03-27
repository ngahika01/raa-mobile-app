import { StyleSheet, View, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Text, useTheme } from "react-native-paper";
import * as Yup from "yup";
import Form from "../components/form/Form";
import InputComponent from "../components/form/InputComponent";
import DropDownComponent from "./DropDownComponent";
import { roles } from "../data/data";
import { Link, useNavigation } from "@react-navigation/native";
import SubmitButton from "../components/form/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";
import { useEffect } from "react";
import { USER_CREATE_RESET } from "../constants/userConstants";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Password is required"),
  role: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Role is required"),
});

const RegisterScreen = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo, success } = userRegister;
  const navigation = useNavigation();

  console.log(error);
  useEffect(() => {
    if (success && userInfo && userInfo.role === "mechanic") {
      navigation.navigate("shop");
      dispatch({
        type: USER_CREATE_RESET,
      });
    }
    if(success && userInfo && userInfo.role === "driver"){
      navigation.navigate("home");
      dispatch({
        type: USER_CREATE_RESET,
      });
    }

    
  }, [success, navigation, userInfo]);

  const handleSubmit = async ({ name, password, role }) => {
    dispatch(
      register({
        name,
        password,
        role,
      })
    );
  };

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
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../assets/undraw_Account_re_o7id.png")}
            style={{
              width: "90%",
              height: 300,
              alignSelf: "center",
              resizeMode: "contain",
              borderRadius: 10,
            }}
          />
          <Form
            initialValues={{
              name: "",
              password: "",
              role: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
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
              <SubmitButton
                value={`Sign up`}
                textColor={colors.primary}
                color={colors.accent}
                icon={"login"}
              />
              <Link
                style={{
                  color: colors.primary,
                }}
                to={"/login"}
              >
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
