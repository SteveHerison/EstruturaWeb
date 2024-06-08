export const userReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload.name };
    case "CHANGE_AGE":
      return { ...state, age: action.payload.age };
    default:
      return state;
  }
};
export default userReducer;
