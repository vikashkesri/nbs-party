import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import toast from "react-hot-toast";

import API from "../utils/axios";

const UpdatePost = () => {

  const { id } =
    useParams();

  const navigate =
    useNavigate();

  /* ================= STATES ================= */

  const [loading, setLoading] =
    useState(false);

  const [image, setImage] =
    useState(null);

  const [preview, setPreview] =
    useState("");

  const [formData, setFormData] =
    useState({

      title: "",

      description: "",

    });

  /* ================= FETCH POST ================= */

  const fetchPost =
    async () => {

      try {

        const res =
          await API.get(
            `/posts/${id}`
          );

        setFormData({

          title:
            res.data.post.title,

          description:
            res.data.post.description,

        });

        setPreview(
          res.data.post.image
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed To Load Post"
        );

      }
    };

  /* ================= USE EFFECT ================= */

  useEffect(() => {

    fetchPost();

  }, [id]);

  /* ================= HANDLE CHANGE ================= */

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  /* ================= HANDLE IMAGE ================= */

  const handleImage = (e) => {

    const file =
      e.target.files[0];

    if (file) {

      setImage(file);

      setPreview(
        URL.createObjectURL(
          file
        )
      );

    }

  };

  /* ================= UPDATE POST ================= */

  const handleUpdate =
    async (e) => {

      e.preventDefault();

      setLoading(true);

      try {

        const data =
          new FormData();

        data.append(
          "title",
          formData.title
        );

        data.append(
          "description",
          formData.description
        );

        if (image) {

          data.append(
            "image",
            image
          );

        }

        await API.put(
          `/posts/update/${id}`,
          data,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        toast.success(
          "Post Updated Successfully"
        );

        navigate(
          "/dashboard"
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Update Failed"
        );

      } finally {

        setLoading(false);

      }

    };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-5 py-10">

      <form
        onSubmit={
          handleUpdate
        }
        className="bg-gray-900 border border-red-500/20 p-10 rounded-3xl w-full max-w-3xl shadow-2xl"
      >

        {/* HEADING */}

        <h1 className="text-5xl font-bold text-center text-red-500">
          Update Post
        </h1>

        <div className="mt-10 space-y-5">

          {/* TITLE */}

          <input
            type="text"
            name="title"
            value={
              formData.title
            }
            onChange={
              handleChange
            }
            placeholder="Post Title"
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 outline-none"
          />

          {/* DESCRIPTION */}

          <textarea
            rows="6"
            name="description"
            value={
              formData.description
            }
            onChange={
              handleChange
            }
            placeholder="Description"
            required
            className="w-full p-4 rounded-xl bg-black border border-gray-700 outline-none"
          ></textarea>

          {/* IMAGE */}

          {preview && (

            <img
              src={
                preview.startsWith(
                  "blob:"
                )
                  ? preview
                  : `http://localhost:5000${preview}`
              }
              alt="preview"
              className="w-full h-[300px] object-cover rounded-2xl"
            />

          )}

          {/* FILE */}

          <input
            type="file"
            accept="image/*"
            onChange={
              handleImage
            }
          />

          {/* BUTTON */}

          <button
            type="submit"
            disabled={
              loading
            }
            className="w-full bg-red-500 hover:bg-red-600 py-4 rounded-xl font-bold text-xl"
          >

            {loading
              ? "Updating..."
              : "Update Post"}

          </button>

        </div>

      </form>

    </div>
  );
};

export default UpdatePost;