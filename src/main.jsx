import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import OutletPage from "./OutletPage";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Services from "./components/Services";
import CommercialProperty from "./components/CommercialProperty";
import ResidentialProjects from "./components/ResidentialProjects";


const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<OutletPage />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blogs" element={<Blog/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/commercial_property" element={<CommercialProperty/>} />
        <Route path="/residential_projects" element={<ResidentialProjects/>} />
        
      </Route>
      
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
