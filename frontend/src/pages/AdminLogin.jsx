import { useState } from "react";

import API from "../utils/axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import toast from "react-hot-toast";

const AdminLogin = () => {

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({

      email: "",

      password: "",

    });

  /* ================= HANDLE CHANGE ================= */

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,

      });

    };

  /* ================= LOGIN ================= */

  const handleLogin =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      try {

        const res =
          await API.post(
            "/admin/login",
            formData
          );

        if (res.data.token) {

          localStorage.setItem(
            "token",
            res.data.token
          );

          toast.success(
            "Login Success"
          );

          navigate(
            "/dashboard"
          );

        } else {

          toast.error(
            "Token Not Found"
          );

        }

      } catch (error) {

        console.log(error);

        toast.error(

          error.response?.data
            ?.message ||

          "Login Failed"

        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-5">

      <form
        onSubmit={
          handleLogin
        }
        className="bg-gray-900 border border-red-500/20 p-10 rounded-3xl w-full max-w-md shadow-2xl"
      >

        {/* LOGO */}

        <div className="flex justify-center mb-5">

          <img
            src="/hero.png"
            alt="Logo"
            className="w-24 h-24 rounded-full border-4 border-red-500 object-cover shadow-xl"
          />

        </div>

        {/* HEADING */}

        <h1 className="text-4xl font-bold text-center text-red-500">

          Admin Login

        </h1>

        <p className="text-center text-gray-400 mt-3">

          Welcome Back Admin

        </p>

        {/* FORM */}

        <div className="mt-8 space-y-5">

          {/* EMAIL */}

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-red-500 transition"
          />

          {/* PASSWORD */}

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="password"
              placeholder="Enter Password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
              required
              className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white outline-none focus:border-red-500 transition"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(
                  !showPassword
                )
              }
              className="absolute right-4 top-4 text-gray-400"
            >

              {showPassword
                ? "🙈"
                : "👁️"}

            </button>

          </div>

          {/* FORGOT PASSWORD */}

          <div className="text-right">

            <Link
              to="/forgot-password"
              className="text-red-500 text-sm hover:underline"
            >

              Forgot Password?

            </Link>

          </div>

          {/* LOGIN BUTTON */}

          <button
            type="submit"
            disabled={
              loading
            }
            className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-xl text-white font-bold transition duration-300 hover:scale-105"
          >

            {loading
              ? "Logging In..."
              : "Login"}

          </button>

          {/* REGISTER */}

          <p className="text-gray-300 text-center">

            No account?

            <Link
              to="/register"
              className="text-red-500 ml-2 hover:underline"
            >

              Register

            </Link>

          </p>

        </div>

      </form>

    </div>
  );
};

export default AdminLogin;