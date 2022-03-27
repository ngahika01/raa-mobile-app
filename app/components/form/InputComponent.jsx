import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { HelperText, TextInput } from "react-native-paper";
import { useFormikContext } from "formik";

const InputComponent = ({ label, keyboardType, ...otherProps }) => {
  const [visble, setVisible] = useState(true);
  const { values, setFieldTouched, errors, setFieldValue, touched } =
    useFormikContext();

  return (
    <>
      <TextInput
        label={label}
        value={values[label]}
        mode="outlined"
        onChangeText={(text) => setFieldValue(label, text)}
        theme={{ roundness: 10 }}
        keyboardType={keyboardType}
        style={{ marginTop: 20 }}
        secureTextEntry={visble}
        {...otherProps}
        autoCapitalize={"none"}
        onBlur={() => setFieldTouched(label)}
        error={touched[label] && !!errors[label]}
      />
      <HelperText
        type="error"
        visible={touched[label] && errors[label] ? errors[label] : null}
      >
        {errors[label]}
      </HelperText>
    </>
  );
};

export default InputComponent;

