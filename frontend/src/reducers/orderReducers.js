import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCES,
  ORDER_CREATE_FAIL,
} from "../constants/cartConstants";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_REQUEST:
      return { loading: true };
    case ORDER_CREATE_SUCCES:
      return { loading: false, success: true, order: action.payload };
    case ORDER_CREATE_FAIL:
      return { loading: false, error: action.payload };
  }
};
