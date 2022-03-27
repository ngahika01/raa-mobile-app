import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import DropDown from "react-native-paper-dropdown";
import { useFormikContext } from "formik";
import { HelperText, useTheme } from "react-native-paper";

const MultiSelectComponent = ({ label, items, ...otherProps }) => {
  const [showDropDown, setShowDropDown] = useState(false);
    const [showMultiSelectDropDown, setShowMultiSelectDropDown] =
      useState(false);


  const { setFieldValue, values, setFieldTouched, touched, errors } =
    useFormikContext();
  const { colors } = useTheme();

  return (
    <>
      <DropDown
        activeColor={colors.error}
        {...otherProps}
        dropDownItemTextStyle={{
          color: colors.accent,
        }}
        multiSelect={true}
        label={label}
        value={values[label]}
        mode={"outlined"}
        visible={showMultiSelectDropDown}
        showDropDown={() => setShowMultiSelectDropDown(true)}
        onDismiss={() => setShowMultiSelectDropDown(false)}
        setValue={(value) => {
          //set field value to value or id of each role
          setFieldValue(label, value);
          console.log(value, "value");
          setShowMultiSelectDropDown(false);
        }}
        list={items}
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

export default MultiSelectComponent;

const styles = StyleSheet.create({});
