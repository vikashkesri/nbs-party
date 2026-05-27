import {
  useState,
} from "react";

import API from "../utils/axios";

import toast from "react-hot-toast";

const Problems = () => {

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({

      name: "",

      district: "",

      problem: "",

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
          "/problems/create",
          formData
        );

        toast.success(
          "Problem Submitted"
        );

        setFormData({

          name: "",

          district: "",

          problem: "",

        });

      } catch (error) {

        console.log(error);

        toast.error(
          "Submission Failed"
        );

      } finally {

        setLoading(false);

      }
    };

  return (
    <section
      id="problems"
      className="bg-black text-white py-24 px-5"
    >

      <div className="max-w-4xl mx-auto bg-gray-900 border border-red-500/20 rounded-3xl p-10 shadow-2xl">

        <h1 className="text-5xl font-bold text-center text-red-500">

          Public Problems

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
            type="text"
            name="district"
            placeholder="District"
            value={
              formData.district
            }
            onChange={
              handleChange
            }
            required
            className="w-full p-5 rounded-2xl bg-black border border-gray-700 outline-none"
          />

          <textarea
            rows="6"
            name="problem"
            placeholder="Write Your Problem"
            value={
              formData.problem
            }
            onChange={
              handleChange
            }
            required
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
              ? "Submitting..."
              : "Submit Problem"}

          </button>

        </form>

      </div>

    </section>
  );
};

export default Problems;