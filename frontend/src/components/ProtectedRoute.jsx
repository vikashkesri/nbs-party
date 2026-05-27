import {
  Navigate,
  useLocation,
} from "react-router-dom";

const ProtectedRoute = ({
  children,
}) => {

  /* ================= TOKEN ================= */

  const token =
    localStorage.getItem(
      "token"
    );

  const location =
    useLocation();

  /* ================= NO TOKEN ================= */

  if (!token) {

    return (

      <Navigate
        to="/login"
        state={{
          from:
            location,
        }}
        replace
      />

    );
  }

  /* ================= AUTHORIZED ================= */

  return children;
};

export default ProtectedRoute;