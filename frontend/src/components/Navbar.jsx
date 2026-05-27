import { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import toast from "react-hot-toast";

const Navbar = () => {

  const [menuOpen, setMenuOpen] =
    useState(false);

  const navigate =
    useNavigate();

  /* ================= TOKEN ================= */

  const token =
    localStorage.getItem(
      "token"
    );

  /* ================= ADMIN ================= */

  const admin =
    JSON.parse(
      localStorage.getItem(
        "admin"
      )
    ) || null;

  /* ================= LOGOUT ================= */

  const handleLogout = () => {

    localStorage.removeItem(
      "token"
    );

    localStorage.removeItem(
      "admin"
    );

    toast.success(
      "Logout Success"
    );

    navigate("/");
  };

  return (

    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.37)]">

      <div className="max-w-7xl mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">

        {/* ================= LOGO ================= */}

        <Link
          to="/"
          className="flex items-center gap-4 cursor-pointer group"
        >

          <div className="relative">

            <img
              src="/hero.png"
              alt="hero"
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-red-500 shadow-xl group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 rounded-full bg-red-500/20 blur-xl"></div>

          </div>

          <div>

            <h1 className="text-xl md:text-3xl font-black bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">

              Naujawan Bihar Sabha

            </h1>

            <p className="text-[10px] md:text-xs uppercase tracking-[4px] text-gray-400">

              Inquilab Zindabad

            </p>

          </div>

        </Link>

        {/* ================= DESKTOP MENU ================= */}

        <div className="hidden lg:flex items-center gap-8">

          {[
            "Home",
            "About",
            "Posts",
            "Join",
            "Problems",
            "Contact",
          ].map((item, index) => (

            <a
              key={index}
              href={`#${
                item === "Join"
                  ? "join"
                  : item.toLowerCase()
              }`}
              className="relative text-white font-medium hover:text-red-500 transition duration-300 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300"
            >

              {item === "Join"
                ? "Join Us"
                : item}

            </a>

          ))}

        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="hidden lg:flex items-center gap-4">

          {!token ? (

            <>

              {/* LOGIN */}

              <Link
                to="/login"
                className="px-5 py-2 rounded-full border border-red-500 text-white hover:bg-red-500 hover:shadow-red-500/30 hover:shadow-lg transition-all duration-300 font-semibold"
              >

                Login

              </Link>

              {/* REGISTER */}

              <Link
                to="/register"
                className="px-5 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 hover:scale-105 hover:shadow-xl transition-all duration-300 font-semibold"
              >

                Register

              </Link>

            </>

          ) : (

            <div className="flex items-center gap-4">

              {/* PROFILE */}

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-2 rounded-full shadow-xl">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="profile"
                  className="w-11 h-11 rounded-full border-2 border-red-500"
                />

                <div>

                  <h2 className="text-sm font-bold text-white">

                    {admin?.name || "Admin"}

                  </h2>

                  <p className="text-xs text-gray-400">

                    Administrator

                  </p>

                </div>

              </div>

              {/* DASHBOARD */}

              <Link
                to="/dashboard"
                className="px-5 py-2 rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
              >

                Dashboard

              </Link>

              {/* LOGOUT */}

              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-full bg-red-500 hover:bg-red-600 hover:scale-105 transition-all duration-300 font-semibold shadow-lg"
              >

                Logout

              </button>

            </div>

          )}

        </div>

        {/* ================= MOBILE BUTTON ================= */}

        <button
          className="lg:hidden text-white text-3xl"
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
        >

          {menuOpen ? "✕" : "☰"}

        </button>

      </div>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen
            ? "max-h-[600px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >

        <div className="bg-black/95 backdrop-blur-2xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">

          {[
            "Home",
            "About",
            "Posts",
            "Join",
            "Problems",
            "Contact",
          ].map((item, index) => (

            <a
              key={index}
              href={`#${
                item === "Join"
                  ? "join"
                  : item.toLowerCase()
              }`}
              onClick={() =>
                setMenuOpen(false)
              }
              className="text-white text-lg font-medium hover:text-red-500 hover:translate-x-2 transition-all duration-300"
            >

              {item === "Join"
                ? "Join Us"
                : item}

            </a>

          ))}

          {!token ? (

            <>

              {/* LOGIN */}

              <Link
                to="/login"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="border border-red-500 py-3 rounded-2xl text-center hover:bg-red-500 transition-all duration-300 font-semibold"
              >

                Login

              </Link>

              {/* REGISTER */}

              <Link
                to="/register"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="bg-gradient-to-r from-red-500 to-orange-500 py-3 rounded-2xl text-center font-semibold shadow-xl"
              >

                Register

              </Link>

            </>

          ) : (

            <>

              {/* PROFILE */}

              <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 rounded-2xl">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                  alt="profile"
                  className="w-12 h-12 rounded-full border-2 border-red-500"
                />

                <div>

                  <h2 className="font-bold text-white">

                    {admin?.name || "Admin"}

                  </h2>

                  <p className="text-sm text-gray-400">

                    Administrator

                  </p>

                </div>

              </div>

              {/* DASHBOARD */}

              <Link
                to="/dashboard"
                onClick={() =>
                  setMenuOpen(false)
                }
                className="bg-blue-500 py-3 rounded-2xl text-center font-semibold hover:bg-blue-600 transition"
              >

                Dashboard

              </Link>

              {/* LOGOUT */}

              <button
                onClick={() => {

                  handleLogout();

                  setMenuOpen(false);

                }}
                className="bg-red-500 py-3 rounded-2xl text-center font-semibold hover:bg-red-600 transition"
              >

                Logout

              </button>

            </>

          )}

        </div>

      </div>

    </nav>

  );
};

export default Navbar;