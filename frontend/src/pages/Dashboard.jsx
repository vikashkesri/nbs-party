import {
  useEffect,
  useState,
} from "react";

import API from "../utils/axios";

import toast from "react-hot-toast";

import {
  useNavigate,
} from "react-router-dom";

const Dashboard = () => {

  const navigate =
    useNavigate();

  /* ================= STATES ================= */

  const [loading, setLoading] =
    useState(false);

  const [posts, setPosts] =
    useState([]);

  const [joins, setJoins] =
    useState([]);

  const [problems, setProblems] =
    useState([]);

  const [formData, setFormData] =
    useState({

      title: "",

      description: "",

    });

  const [image, setImage] =
    useState(null);

  /* ================= FETCH POSTS ================= */

  const fetchPosts =
    async () => {

      try {

        const res =
          await API.get(
            "/posts/all"
          );

        setPosts(
          res.data.posts || []
        );

      } catch (error) {

        console.log(error);

        toast.error(
          "Failed To Fetch Posts"
        );

      }
    };

  /* ================= FETCH JOINS ================= */

  const fetchJoins =
    async () => {

      try {

        const res =
          await API.get(
            "/join/all"
          );

        setJoins(
          res.data.joins || []
        );

      } catch (error) {

        console.log(error);

      }
    };

  /* ================= FETCH PROBLEMS ================= */

  const fetchProblems =
    async () => {

      try {

        const res =
          await API.get(
            "/problems/all"
          );

        setProblems(
          res.data.problems || []
        );

      } catch (error) {

        console.log(error);

      }
    };

  /* ================= USE EFFECT ================= */

  useEffect(() => {

    fetchPosts();

    fetchJoins();

    fetchProblems();

  }, []);

  /* ================= HANDLE CHANGE ================= */

  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,

      });

    };

  /* ================= CREATE POST ================= */

  const handleCreate =
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

        await API.post(
          "/posts/create",
          data,
          {
            headers: {
              "Content-Type":
                "multipart/form-data",
            },
          }
        );

        toast.success(
          "Post Created Successfully"
        );

        setFormData({

          title: "",

          description: "",

        });

        setImage(null);

        fetchPosts();

      } catch (error) {

        console.log(error);

        toast.error(
          error.response?.data
            ?.message ||
            "Create Failed"
        );

      } finally {

        setLoading(false);

      }
    };

  /* ================= DELETE POST ================= */

  const handleDelete =
    async (id) => {

      try {

        await API.delete(
          `/posts/delete/${id}`
        );

        toast.success(
          "Post Deleted"
        );

        fetchPosts();

      } catch (error) {

        console.log(error);

      }
    };

  /* ================= DELETE JOIN ================= */

  const handleDeleteJoin =
    async (id) => {

      try {

        await API.delete(
          `/join/delete/${id}`
        );

        toast.success(
          "Join Deleted"
        );

        fetchJoins();

      } catch (error) {

        console.log(error);

      }
    };

  /* ================= DELETE PROBLEM ================= */

  const handleDeleteProblem =
    async (id) => {

      try {

        await API.delete(
          `/problems/delete/${id}`
        );

        toast.success(
          "Problem Deleted"
        );

        fetchProblems();

      } catch (error) {

        console.log(error);

      }
    };

  /* ================= LOGOUT ================= */

  const handleLogout =
    () => {

      localStorage.removeItem(
        "token"
      );

      toast.success(
        "Logout Success"
      );

      navigate("/login");
    };

  return (
    <div className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}

      <div className="w-full border-b border-red-500/20 bg-gray-950 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

          <h1 className="text-3xl font-bold text-red-500">

            NBS PARTY

          </h1>

          <div className="flex items-center gap-5">

            <button
              onClick={() =>
                navigate("/")
              }
              className="hover:text-red-500 transition"
            >
              Home
            </button>

            <button
              onClick={
                handleLogout
              }
              className="bg-red-500 hover:bg-red-600 px-5 py-2 rounded-xl font-bold transition"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

      {/* ================= HERO ================= */}

      <div className="relative h-[400px] flex items-center justify-center text-center px-5 overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10">

          <h1 className="text-6xl font-extrabold text-red-500">

            Admin Dashboard

          </h1>

          <p className="text-gray-300 mt-6 text-xl">

            Manage Posts, Members and Public Problems

          </p>

        </div>

      </div>

      {/* ================= CREATE POST ================= */}

      <div className="max-w-7xl mx-auto px-5 py-20">

        <div className="bg-gray-900 border border-red-500/20 rounded-3xl p-10 shadow-2xl">

          <h2 className="text-4xl font-bold text-red-500 mb-10">

            Create New Post

          </h2>

          <form
            onSubmit={
              handleCreate
            }
            className="space-y-6"
          >

            <input
              type="text"
              name="title"
              placeholder="Post Title"
              value={
                formData.title
              }
              onChange={
                handleChange
              }
              required
              className="w-full p-5 rounded-2xl bg-black border border-gray-700 outline-none"
            />

            <textarea
              rows="6"
              name="description"
              placeholder="Description"
              value={
                formData.description
              }
              onChange={
                handleChange
              }
              required
              className="w-full p-5 rounded-2xl bg-black border border-gray-700 outline-none"
            ></textarea>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(
                  e.target.files[0]
                )
              }
            />

            <button
              type="submit"
              disabled={
                loading
              }
              className="w-full bg-red-500 hover:bg-red-600 py-5 rounded-2xl font-bold text-xl"
            >

              {loading
                ? "Creating..."
                : "Create Post"}

            </button>

          </form>

        </div>

      </div>

      {/* ================= POSTS ================= */}

      <div className="max-w-7xl mx-auto px-5 pb-20">

        <h2 className="text-5xl font-bold text-center text-red-500 mb-16">

          All Posts

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {posts.map((post) => (

            <div
              key={post._id}
              className="bg-gray-900 border border-red-500/20 rounded-3xl overflow-hidden shadow-2xl"
            >

              {post.image && (

                <img
                  src={`http://localhost:5000${post.image}`}
                  alt={post.title}
                  className="w-full h-[250px] object-cover"
                />

              )}

              <div className="p-6">

                <h3 className="text-3xl font-bold text-red-500">

                  {post.title}

                </h3>

                <p className="text-gray-300 mt-5">

                  {post.description}

                </p>

                <div className="flex gap-4 mt-8">

                  <button
                    onClick={() =>
                      navigate(
                        `/update/${post._id}`
                      )
                    }
                    className="flex-1 bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-bold"
                  >

                    Edit

                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        post._id
                      )
                    }
                    className="flex-1 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold"
                  >

                    Delete

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ================= JOINED MEMBERS ================= */}

      <div className="max-w-7xl mx-auto px-5 pb-20">

        <h2 className="text-5xl font-bold text-center text-red-500 mb-16">

          Joined Members

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {joins.map((join) => (

            <div
              key={join._id}
              className="bg-gray-900 border border-red-500/20 rounded-3xl p-6 shadow-2xl"
            >

              <h3 className="text-3xl font-bold text-red-500">

                {join.name}

              </h3>

              <p className="text-gray-300 mt-4">

                {join.email}

              </p>

              <p className="text-gray-300 mt-2">

                {join.phone}

              </p>

              <p className="text-gray-400 mt-5">

                {join.message}

              </p>

              <button
                onClick={() =>
                  handleDeleteJoin(
                    join._id
                  )
                }
                className="w-full mt-8 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold"
              >

                Delete

              </button>

            </div>

          ))}

        </div>

      </div>

      {/* ================= PROBLEMS ================= */}

      <div className="max-w-7xl mx-auto px-5 pb-20">

        <h2 className="text-5xl font-bold text-center text-red-500 mb-16">

          Public Problems

        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {problems.map((item) => (

            <div
              key={item._id}
              className="bg-gray-900 border border-red-500/20 rounded-3xl p-6 shadow-2xl"
            >

              <h3 className="text-3xl font-bold text-red-500">

                {item.name}

              </h3>

              <p className="text-gray-300 mt-3">

                District:
                {" "}
                {item.district}

              </p>

              <p className="text-gray-400 mt-5 leading-8">

                {item.problem}

              </p>

              <button
                onClick={() =>
                  handleDeleteProblem(
                    item._id
                  )
                }
                className="w-full mt-8 bg-red-500 hover:bg-red-600 py-3 rounded-xl font-bold"
              >

                Delete

              </button>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;