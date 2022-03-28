import {
  BOOKING_CREATE_FAILURE,
  BOOKING_CREATE_REQUEST,
  BOOKING_CREATE_RESET,
  BOOKING_CREATE_SUCCESS,
  BOOKING_DELETE_FAILURE,
  BOOKING_DELETE_REQUEST,
  BOOKING_DELETE_RESET,
  BOOKING_DELETE_SUCCESS,
  BOOKING_GET_FAIL,
  BOOKING_GET_REQUEST,
  BOOKING_GET_RESET,
  BOOKING_GET_SUCCESS,
  BOOKING_LIST_FAIL,
  BOOKING_LIST_REQUEST,
  BOOKING_LIST_SUCCESS,
  BOOKING_MY_FAIL,
  BOOKING_MY_REQUEST,
  BOOKING_MY_SUCCESS,
  BOOKING_UPDATE_FAILURE,
  BOOKING_UPDATE_REQUEST,
  BOOKING_UPDATE_RESET,
  BOOKING_UPDATE_SUCCESS,
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

export const bookingUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        booking: action.payload,
      };
    default:
      return state;

    case BOOKING_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case BOOKING_UPDATE_RESET:
      return {};
  }
};

export const bookingDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        booking: action.payload,
      };
    default:
      return state;

    case BOOKING_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case BOOKING_DELETE_RESET:
      return {};
  }
};

export const bookingGetReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        booking: action.payload,
      };
    default:
      return state;

    case BOOKING_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case BOOKING_GET_RESET:
      return {};
  }
};

export const bookingListReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        bookings: action.payload,
      };
    default:
      return state;

    case BOOKING_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};
export const bookingMyReducer = (state = {}, action) => {
  switch (action.type) {
    case BOOKING_MY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKING_MY_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        bookings: action.payload,
      };
    default:
      return state;

    case BOOKING_MY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
  }
};
