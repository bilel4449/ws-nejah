import { GET } from "./actionType";

const init = {
  users: [],
  loading: true,
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    default:
      return state;
  }
};
