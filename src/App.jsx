import React from "react";
import Home from "./Home/Home";
import { Routes, Route } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Signup from "./components/Signup";

function App() {
  return (
    <>
      {/*dark:bg-gray-900 dark:text-gray-100 */}
      <div className="dark:bg-gray-900 dark:text-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
