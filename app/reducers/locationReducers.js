import { SAVE_LOCATION } from "../constants/locationConstants";

export const saveLocationReducer = (state = {}, action) => {
  switch (action.type) {
    case SAVE_LOCATION:
      return {
        ...state,
        place: action.payload,
      };
    default:
      return state;
  }
};
