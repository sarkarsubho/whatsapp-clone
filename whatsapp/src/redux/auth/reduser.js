import { loginsuccess } from "./action.types";

const initState = {
  user: {},
  isAuth: false,
};

export const reduser = (store = initState, { type, payload }) => {
  switch (type) {
    case loginsuccess:
      return {
        ...store,
        isAuth: true,
        user:payload
      };
    default:
      return store;
  }
};
