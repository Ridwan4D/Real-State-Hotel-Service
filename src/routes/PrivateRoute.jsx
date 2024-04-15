import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types"; // ES6

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  // console.log(location);
  if (loading) {
    return (
      <div className="h-[60vh] flex items-center justify-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location?.pathname  || "/"}></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.node,
}
export default PrivateRoute;
