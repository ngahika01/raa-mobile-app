import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { ActivityIndicator, useTheme, withTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView from "react-native-maps";
import useLocation from "../hooks/useLocation";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRef } from "react";
import ZoomComponnents from "./ZoomComponents";
import { saveLocation } from "../actions/locationActions";

const Map = ({ children, latD, lngD, datLat, dataLng, ...otherProps }) => {
  const map = useRef(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const locationSave = useSelector((state) => state.locationSave);
  const {place} = locationSave;



  // console.log(location);
  const [loc, setLoc] = useState({
    latitude: -1.0912 || location.latitude || datLat,
    longitude: 37.0117 || location.longitude || dataLng,
    latitudeDelta: latD ? latD : 0.0922,
    longitudeDelta: lngD ? lngD : 0.0421,
  });

  useEffect(() => {
    if (location) {
      map?.current?.animateToRegion({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: latD,
        longitudeDelta: lngD,
      });
      setLoc({
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
      dispatch(saveLocation(location));
    }


    if (datLat && dataLng) {
      map?.current?.animateToRegion({
        latitude: datLat,
        longitude: dataLng,
        latitudeDelta: latD,
        longitudeDelta: lngD,
      });
      setLoc({
        latitude: datLat,
        longitude: dataLng,
        latitudeDelta: latD,
        longitudeDelta: lngD,
      });
    }
  }, [dispatch, location, datLat, dataLng]);
  const onZoomInPress = () => {
    map?.current?.getCamera().then((cam) => {
      cam.zoom += 1;
      map?.current?.animateCamera(cam);
    });
  };

  const onZoomOut = () => {
    map?.current?.getCamera().then((cam) => {
      cam.zoom -= 1;
      map?.current?.animateCamera(cam);
    });
  };

  const animateToMyLocation = () => {
    map?.current?.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {
        <>
          <ZoomComponnents
            zoomIn={onZoomInPress}
            zoomOut={onZoomOut}
            gotoHome={
              location && location.latitude && location.longitude
                ? animateToMyLocation
                : () => alert("Please enable location in permissions")
            }
          />
          <MapView
            ref={map}
            initialRegion={loc}
            loadingEnabled
            {...otherProps}
            loadingBackgroundColor={colors.background}
            loadingIndicatorColor={colors.accent}
            showsCompass
            mapType="standard"
            showsScale={true}
            style={styles.map}
          >
            {children}
          </MapView>
        </>
      }
    </SafeAreaView>
  );
};

export default withTheme(Map);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },
});
