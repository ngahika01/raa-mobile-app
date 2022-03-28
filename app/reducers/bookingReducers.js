import {
  BOOKING_CREATE_FAILURE,
  BOOKING_CREATE_REQUEST,
  BOOKING_CREATE_RESET,
  BOOKING_CREATE_SUCCESS,
} from "../constants/bookingConstants";

export const bookingCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        booking: action.payload,
      };
    default:
      return state;

    case BOOKING_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case BOOKING_CREATE_RESET:
      return {};
  }
};
