import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import ProtectedRoute from "./routes/ProtectedRoute";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Groups from "./pages/Groups";
import CreateGroup from "./pages/CreateGroup";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/groups" element={<Groups />} />

        <Route
          path="/create-group"
          element={
            <ProtectedRoute>
              <CreateGroup />
            </ProtectedRoute>
          }
        />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;