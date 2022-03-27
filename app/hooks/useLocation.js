import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const navigation = useNavigation();
  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        alert("Location permission not granted, please enable it to use this app");
        return;
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return location;
};
