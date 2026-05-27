import { useState } from "react";
import API from "../utils/axios";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

const AdminRegister = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleRegister = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const res = await API.post(
        "/admin/register",
        formData
      );

      if (res.data.token) {

        localStorage.setItem(
          "token",
          res.data.token
        );

        toast.success("Register Success");

        navigate("/dashboard");

      } else {

        toast.error("Token Not Found");

      }

    } catch (error) {

      console.log(error);

      toast.error(
        error.response?.data?.message ||
        "Register Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-5">

      <form
        onSubmit={handleRegister}
        className="bg-gray-900 border border-red-500/20 p-10 rounded-3xl w-full max-w-md shadow-2xl"
      >

        <h1 className="text-4xl font-bold text-center text-red-500">
          Admin Register
        </h1>

        <div className="mt-8 space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-xl text-white font-bold transition"
          >
            {
              loading
                ? "Loading..."
                : "Register"
            }
          </button>

          <p className="text-gray-300 text-center">

            Already have an account?

            <Link
              to="/login"
              className="text-red-500 ml-2"
            >
              Login
            </Link>

          </p>

        </div>

      </form>

    </div>
  );
};

export default AdminRegister;