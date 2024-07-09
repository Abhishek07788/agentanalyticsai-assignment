import axios from "axios";
import {
  SUCCUSS_ALL,
  SUCCUSS_SINGLE,
  ADD_SINGLE_SUCCESS,
  LOADING,
  LOADING_DETAILS,
  ERROR,
} from "./product.type";
const API = "https://mock-server-0rak.onrender.com/products";

// add new product --
export const addNewProduct = (editProduct) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.post(API, editProduct);
    dispatch({ type: ADD_SINGLE_SUCCESS, payload: res.data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

// get all products --
export const getAllProducts = (query, page) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    let params = {};
    if (page) {
      params._page = page;
      params._limit = 6;
    }
    if (query) {
      params.q = query;
    }
    const res = await axios.get(API, { params });
    dispatch({ type: SUCCUSS_ALL, payload: res.data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

// edit product --
export const editProduct = (id, editProduct) => async (dispatch) => {
  dispatch({ type: LOADING });
  try {
    const res = await axios.put(`${API}/${id}`, editProduct);
    dispatch({ type: SUCCUSS_SINGLE, payload: res.data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};

// get single product --
export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({ type: LOADING_DETAILS });
  try {
    const res = await axios.get(`${API}/${id}`);
    dispatch({ type: SUCCUSS_SINGLE, payload: res.data });
  } catch (e) {
    dispatch({ type: ERROR });
  }
};
