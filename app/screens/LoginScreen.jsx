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
import { useEffect } from "react";
import { login } from "../actions/userActions";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const LoginScreen = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo, success, error } = userLogin;

  const navigation = useNavigation();

  useEffect(() => {
    if (success) {
      navigation.navigate("home");
      dispatch({
        type: USER_CREATE_RESET,
      });
    }
    if (error) {
      alert(error);
    }
  }, [success, navigation, dispatch, error]);

  const handleSubmit = async ({ name, password, role }) => {
    dispatch(login({ name, password }));
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
          title="Login"
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
          }}
        >
          <>
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
                <SubmitButton
                  color={colors.accent}
                  textColor={colors.primary}
                  value={"Login"}
                  icon={"login"}
                />
                <View
                  style={{
                    marginTop: 10,
                  }}
                >
                  <Link
                    style={{
                      color: colors.primary,
                    }}
                    to={"/signup"}
                  >
                    Have an account?{" "}
                    <Text
                      style={{
                        textDecorationLine: "underline",
                      }}
                    >
                      Register
                    </Text>
                  </Link>
                </View>
              </View>
            </Form>
          </>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
