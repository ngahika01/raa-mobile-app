import {
  SHOP_CREATE_FAIL,
  SHOP_CREATE_REQUEST,
  SHOP_CREATE_RESET,
  SHOP_CREATE_SUCCESS,
  SHOP_DELETE_FAIL,
  SHOP_DELETE_REQUEST,
  SHOP_DELETE_RESET,
  SHOP_DELETE_SUCCESS,
  SHOP_DETAILS_FAIL,
  SHOP_DETAILS_REQUEST,
  SHOP_DETAILS_RESET,
  SHOP_DETAILS_SUCCESS,
  SHOP_GET_FAIL,
  SHOP_GET_REQUEST,
  SHOP_GET_RESET,
  SHOP_GET_SUCCESS,
  SHOP_UPDATE_FAIL,
  SHOP_UPDATE_REQUEST,
  SHOP_UPDATE_RESET,
  SHOP_UPDATE_SUCCESS,
  SHOP_USER_FAIL,
  SHOP_USER_REQUEST,
  SHOP_USER_RESET,
  SHOP_USER_SUCCESS,
} from "../constants/shopConstants";

export const createShopReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOP_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SHOP_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload,
        success: true,
      };
    case SHOP_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHOP_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const updateShopReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOP_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SHOP_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        shop: action.payload,
        success: true,
      };
    case SHOP_UPDATE_FAIL:
      return {
        ...state,
      loading: false,
        error: action.payload,
      };
    case SHOP_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const deleteShopReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOP_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SHOP_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case SHOP_DELETE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHOP_DELETE_RESET:
      return {};
    default:
      return state;
  }
};

export const getShopReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOP_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SHOP_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload,
      };
    case SHOP_GET_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHOP_GET_RESET:
      return {};
    default:
      return state;
  }
};

export const getShopDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOP_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SHOP_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload,
      };
    case SHOP_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHOP_DETAILS_RESET:
      return {};
    default:
      return state;
  }
};

export const getShopByUserReducer = (state = {}, action) => {
  switch (action.type) {
    case SHOP_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SHOP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        shops: action.payload,
      };
    case SHOP_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SHOP_USER_RESET:
      return {};
    default:
      return state;
  }
};
