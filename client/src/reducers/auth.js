import { REGISTER_SUCCESS, REGISTER_FAIL } from "../actions/types";

const intitialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = intitialState, action) {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage: setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
  }
}
