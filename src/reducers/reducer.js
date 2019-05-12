import * as types from "../constants/actionTypes";

const initialState = {
  data: "hi"
};

export default (state = initialState, { type, payload }) => {
  const stateCopy = { ...state };
  switch (type) {
    case types.CONSTANT_TYPE:
      stateCopy.data = payload;
      return { ...stateCopy };
    default:
      return state;
  }
};
