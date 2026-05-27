import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {

    localStorage.removeItem("token");

    setTimeout(() => {
      navigate("/login");
    }, 2000);

  }, []);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-5">

      <div className="bg-gray-900 border border-red-500/20 p-10 rounded-3xl shadow-2xl text-center max-w-md w-full">

        <h1 className="text-4xl font-bold text-red-500">
          Logout Success
        </h1>

        <p className="text-gray-300 mt-5 text-lg">
          Redirecting to login page...
        </p>

        <div className="mt-8">

          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

        </div>

      </div>

    </div>
  );
};

export default Logout;