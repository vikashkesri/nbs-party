import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import "./App.css";

/* ================= COMPONENTS ================= */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Posts from "./components/Posts";
import JoinUs from "./components/JoinUs";
import Problems from "./components/Problems";
import Contact from "./components/Contact";
import ProtectedRoute from "./components/ProtectedRoute";

/* ================= PAGES ================= */

import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/Logout";
import UpdatePost from "./pages/UpdatePost";
import ForgotPassword from "./pages/ForgotPassword";

/* ================= HOME PAGE ================= */

const HomePage = () => {

  return (

    <div className="bg-black text-white">

      <Navbar />

      <Hero />

      <About />

      <Posts />

      <JoinUs />

      <Problems />

      <Contact />

    </div>

  );
};

/* ================= APP ================= */

function App() {

  return (

    <BrowserRouter>

      <Toaster position="top-right" />

      <Routes>

        {/* ================= PUBLIC WEBSITE ================= */}

        <Route
          path="/"
          element={<HomePage />}
        />

        {/* ================= ADMIN LOGIN ================= */}

        <Route
          path="/login"
          element={<AdminLogin />}
        />

        {/* ================= ADMIN REGISTER ================= */}

        <Route
          path="/register"
          element={<AdminRegister />}
        />

        {/* ================= FORGOT PASSWORD ================= */}

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        {/* ================= DASHBOARD ================= */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        {/* ================= UPDATE POST ================= */}

        <Route
          path="/update/:id"
          element={
            <ProtectedRoute>

              <UpdatePost />

            </ProtectedRoute>
          }
        />

        {/* ================= LOGOUT ================= */}

        <Route
          path="/logout"
          element={
            <ProtectedRoute>

              <Logout />

            </ProtectedRoute>
          }
        />

        {/* ================= INVALID ROUTES ================= */}

        <Route
          path="*"
          element={
            <Navigate
              to="/"
            />
          }
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;