import axios from "axios";
import { url } from "../config/url";
import {
  SHOP_CREATE_FAIL,
  SHOP_CREATE_REQUEST,
  SHOP_CREATE_SUCCESS,
  SHOP_DELETE_FAIL,
  SHOP_DELETE_REQUEST,
  SHOP_DELETE_SUCCESS,
  SHOP_DETAILS_FAIL,
  SHOP_DETAILS_REQUEST,
  SHOP_DETAILS_SUCCESS,
  SHOP_GET_FAIL,
  SHOP_GET_REQUEST,
  SHOP_GET_SUCCESS,
  SHOP_UPDATE_FAIL,
  SHOP_UPDATE_REQUEST,
  SHOP_UPDATE_SUCCESS,
} from "../constants/shopConstants";

export const createShop = (shop) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SHOP_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.post(`${url}/shop/`, shop, config);
    dispatch({
      type: SHOP_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listShops = (shop) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SHOP_DETAILS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${url}/shop`, config);
    dispatch({
      type: SHOP_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getShop = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SHOP_GET_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(`${url}/shop/${id}`, config);
    dispatch({
      type: SHOP_GET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateShop = (shop) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SHOP_UPDATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.put(`${url}/shop/${shop._id}`, shop, config);
    dispatch({
      type: SHOP_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SHOP_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteShop = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: SHOP_DELETE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    await axios.delete(`${url}/shop/${id}`, config);
    dispatch({
      type: SHOP_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: SHOP_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
