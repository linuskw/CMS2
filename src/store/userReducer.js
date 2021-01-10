const initialState = {};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_USER":
      console.log(payload);
      return {
        user: payload,
      };
    case "LOGOUT_USER":
      console.log("logout");
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
