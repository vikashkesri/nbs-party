import {
  useState,
} from "react";

import API from "../utils/axios";

import toast from "react-hot-toast";

const JoinUs = () => {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({

      name: "",

      email: "",

      phone: "",

      message: "",

    });

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  /* ================= SUBMIT ================= */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      try {

        await API.post(
          "/join/create",
          formData
        );

        toast.success(
          "Joined Successfully"
        );

        setFormData({

          name: "",

          email: "",

          phone: "",

          message: "",

        });

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed"
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <section
      id="join"
      className="bg-black text-white py-24 px-5"
    >

      <div className="max-w-4xl mx-auto bg-gray-900 border border-red-500/20 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-5xl font-bold text-center text-red-500">

          Join Us

        </h1>

        <form
          onSubmit={
            handleSubmit
          }
          className="space-y-6 mt-10"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={
              formData.name
            }
            onChange={
              handleChange
            }
            required
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={
              formData.email
            }
            onChange={
              handleChange
            }
            required
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 outline-none"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={
              formData.phone
            }
            onChange={
              handleChange
            }
            required
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 outline-none"
          />

          <textarea
            rows="5"
            name="message"
            placeholder="Message"
            value={
              formData.message
            }
            onChange={
              handleChange
            }
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 outline-none"
          ></textarea>

          <button
            type="submit"
            disabled={
              loading
            }
            className="w-full bg-red-500 hover:bg-red-600 py-5 rounded-2xl font-bold text-xl"
          >

            {loading
              ? "Joining..."
              : "Join Now"}

          </button>

        </form>

      </div>

    </section>
  );
};

export default JoinUs;