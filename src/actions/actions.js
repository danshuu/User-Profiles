import * as types from "../constants/actionTypes";

export const changeStoreData = text => ({
  types: types.CONSTANT_TYPE,
  payload: text
});
