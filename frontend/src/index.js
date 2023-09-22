import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "../src/index.css";
import AddTutorial from "./components/AddTutorial";
import Layout from "./Layout";
import TutorialsList from "./components/TutorialList";
import EditTutorial from "./components/EditTutorial";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/tutorials/add",
//     element: <AddTutorial />,
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
        <Route path="tutorials/add" element={<AddTutorial />} />
        <Route path="tutorials" element={<TutorialsList />} />
        <Route path="tutorials/:id" element={<EditTutorial />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
