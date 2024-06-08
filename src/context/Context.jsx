import { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import { userReducer } from "../reducers/userReducer";

const initialState = {
  name: "",
  age: null,
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
