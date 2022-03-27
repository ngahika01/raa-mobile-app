import { SAVE_LOCATION } from "../constants/locationConstants";

export const saveLocation = (location) => async (dispatch) => {
  dispatch({
    type: SAVE_LOCATION,
    payload: location,
  });
};
