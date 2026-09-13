import { useEffect } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" replace />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </>
  );
}

export default App;