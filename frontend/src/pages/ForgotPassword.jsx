import {
  useState,
} from "react";

import API from "../utils/axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import toast from "react-hot-toast";

const ForgotPassword = () => {

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword,
    setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({

      email: "",

      newPassword: "",

      confirmPassword: "",

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

  /* ================= RESET PASSWORD ================= */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      /* CHECK PASSWORD MATCH */

      if (
        formData.newPassword !==
        formData.confirmPassword
      ) {

        return toast.error(
          "Passwords Do Not Match"
        );

      }

      setLoading(true);

      try {

        const res =
          await API.post(
  "/admin/forgot-password",
            {

              email:
                formData.email,

              newPassword:
                formData.newPassword,

            }
          );

        toast.success(
          res.data.message
        );

        navigate("/login");

      } catch (error) {

        console.log(error);

        toast.error(

          error.response?.data
            ?.message ||

          "Reset Failed"

        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-5">

      <form
        onSubmit={
          handleSubmit
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

          Forgot Password

        </h1>

        <p className="text-center text-gray-400 mt-3">

          Reset Your Admin Password

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

          {/* NEW PASSWORD */}

          <div className="relative">

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              name="newPassword"
              placeholder="New Password"
              value={
                formData.newPassword
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

          {/* CONFIRM PASSWORD */}

          <div className="relative">

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              placeholder="Confirm Password"
              value={
                formData.confirmPassword
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
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-4 text-gray-400"
            >

              {showConfirmPassword
                ? "🙈"
                : "👁️"}

            </button>

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={
              loading
            }
            className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-xl text-white font-bold transition duration-300 hover:scale-105"
          >

            {loading
              ? "Resetting..."
              : "Reset Password"}

          </button>

          {/* LOGIN */}

          <p className="text-gray-300 text-center">

            Back To Login?

            <Link
              to="/login"
              className="text-red-500 ml-2 hover:underline"
            >

              Login

            </Link>

          </p>

        </div>

      </form>

    </div>
  );
};

export default ForgotPassword;