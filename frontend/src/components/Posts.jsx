import {
  useEffect,
  useState,
} from "react";

import API from "../utils/axios";

const Posts = () => {

  /* ================= STATES ================= */

  const [posts, setPosts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

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

        console.log(
          "FETCH POSTS ERROR =>",
          error
        );

      } finally {

        setLoading(false);

      }
    };

  /* ================= LIKE POST ================= */

  const handleLike =
    async (id) => {

      try {

        await API.put(
          `/posts/like/${id}`
        );

      } catch (error) {

        console.log(
          "LIKE ERROR =>",
          error
        );

      }
    };

  /* ================= SHARE POST ================= */

  const handleShare =
    async (post) => {

      try {

        if (
          navigator.share
        ) {

          await navigator.share({

            title:
              post.title,

            text:
              post.description,

            url:
              window.location.href,

          });

        }

        await API.put(
          `/posts/share/${post._id}`
        );

      } catch (error) {

        console.log(
          "SHARE ERROR =>",
          error
        );

      }
    };

  /* ================= USE EFFECT ================= */

  useEffect(() => {

    fetchPosts();

  }, []);

  return (

    <section
      id="posts"
      className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-24 px-5"
    >

      <div className="max-w-7xl mx-auto">

        {/* ================= HEADING ================= */}

        <div className="text-center">

          <h1 className="text-4xl md:text-6xl font-extrabold text-red-500">

            Latest Posts

          </h1>

          <p className="text-gray-400 mt-5 text-lg">

            Voice of Bihar Youth • Justice • Equality

          </p>

        </div>

        {/* ================= LOADING ================= */}

        {loading ? (

          <div className="text-center text-2xl mt-20 text-gray-400">

            Loading Posts...

          </div>

        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {posts.length > 0 ? (

              posts.map((post) => (

                <div
                  key={post._id}
                  className="bg-gray-900/80 backdrop-blur-lg rounded-3xl overflow-hidden border border-red-500/20 shadow-2xl hover:-translate-y-3 hover:shadow-red-500/20 transition duration-500 group"
                >

                  {/* ================= IMAGE ================= */}

                  {post.image && (

                    <div className="overflow-hidden">

                      <img
                        src={`http://localhost:5000${post.image}`}
                        alt={post.title}
                        className="w-full h-[250px] object-cover group-hover:scale-110 transition duration-700"
                      />

                    </div>

                  )}

                  {/* ================= CONTENT ================= */}

                  <div className="p-6">

                    <h2 className="text-2xl font-bold text-red-500 line-clamp-2">

                      {post.title}

                    </h2>

                    <p className="text-gray-300 mt-4 leading-7 line-clamp-4">

                      {post.description}

                    </p>

                    {/* ================= BUTTONS ================= */}

                    <div className="flex items-center gap-4 mt-8">

                      {/* LIKE BUTTON */}

                      <button
                        onClick={() =>
                          handleLike(
                            post._id
                          )
                        }
                        className="flex-1 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-full font-semibold transition duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
                      >

                        ❤️ Like

                      </button>

                      {/* SHARE BUTTON */}

                      <button
                        onClick={() =>
                          handleShare(
                            post
                          )
                        }
                        className="flex-1 border border-white hover:bg-white hover:text-black px-5 py-3 rounded-full font-semibold transition duration-300 hover:scale-105"
                      >

                        🔗 Share

                      </button>

                    </div>

                  </div>

                </div>

              ))

            ) : (

              <div className="col-span-full text-center text-2xl text-gray-400">

                No Posts Found

              </div>

            )}

          </div>

        )}

      </div>

    </section>
  );
};

export default Posts;