import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useUser } from "./context";

const RequireAuth = ({ children }) => {
  const { state } = useUser();
  const isAuth = state.name;

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
