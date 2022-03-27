import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme } from "react-native-paper";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { theme } from "../config/theme";
import FeedNav from "./FeedNavigator";
import HomeNav from "./HomeNav";

const Tab = createMaterialBottomTabNavigator();

export default function MyTabs() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="myhome"
      activeColor={colors.accent}
      inactiveColor={colors.primary}
      barStyle={{ backgroundColor: colors.background }}
      theme={theme}
    >
      <Tab.Screen
        name="myhome"
        component={HomeNav}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="profile"
        component={FeedNav}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="account-cog"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
