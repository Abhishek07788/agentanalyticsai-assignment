import {
  SUCCUSS_ALL,
  SUCCUSS_SINGLE,
  ADD_SINGLE_SUCCESS,
  LOADING,
  LOADING_DETAILS,
  ERROR,
} from "./product.type";

const initialData = {
  products: [],
  singleProduct: [],
  error: false,
  loading: false,
  details_loading: false,
};

export const productReducer = (state = initialData, { payload, type }) => {
  switch (type) {
    case LOADING: {
      return { ...state, loading: true, details_loading: false, error: false };
    }
    case LOADING_DETAILS: {
      return { ...state, loading: false, details_loading: true, error: false };
    }
    case ADD_SINGLE_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        details_loading: false,
        products: [...state.products, payload],
      };
    }
    case SUCCUSS_ALL: {
      return {
        ...state,
        loading: false,
        details_loading: false,
        error: false,
        products: payload,
      };
    }
    case SUCCUSS_SINGLE: {
      return {
        ...state,
        loading: false,
        details_loading: false,
        error: false,
        singleProduct: payload,
      };
    }
    case ERROR: {
      return { ...state, loading: false, details_loading: false, error: true };
    }
    default: {
      return state;
    }
  }
};
