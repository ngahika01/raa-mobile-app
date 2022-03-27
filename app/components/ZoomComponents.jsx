import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconButton, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const ZoomComponnents = ({ zoomIn, zoomOut, gotoHome }) => {
  const { colors } = useTheme();
  return (
    <View
      style={{
        position: "absolute",
        top: 100,
        right: 0,
        color: colors.accent,
        zIndex: 999,
        flex: 1,
      }}
    >
      <IconButton
        icon="plus-circle"
        color={colors.accent}
        size={40}
        onPress={zoomIn}
      />
      <IconButton
        size={40}
        icon="minus-circle"
        color={colors.accent}
        onPress={zoomOut}
      />
      <IconButton
        size={40}
        icon={() => (
          <MaterialIcons color={colors.accent} name="my-location" size={40} />
        )}
        color={colors.background}
        onPress={gotoHome}
      />
    </View>
  );
};

export default ZoomComponnents;

const styles = StyleSheet.create({
  container: {},
});
