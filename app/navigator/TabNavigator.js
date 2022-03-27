import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      activeColor={colors.accent}
      inactiveColor={colors.primary}
      barStyle={{ backgroundColor: colors.background }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
