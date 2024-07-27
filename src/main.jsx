import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// import Home from './Components/Home/Home.jsx'
import Layout from "./Layout";

import Hero from "./components/Hero";
import Benefits from "./components/BenefitSection";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import User from "./components/User/User";
import AssetForm from "./components/AssetForm/AssetForm";
import PreditionCase from "./components/PredictionMaintenace/Prediction";
import { ResourseAllowcation } from "./components/Resource Allowcation/ResourceAllowcation";
import Chart from "./components/Chart/Chart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Hero />} />
      <Route path="/benefits" element={<Benefits />} />
      <Route path="/feature" element={<Feature />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route path="/asset" element={<AssetForm />} />
      <Route path="/asset-prediction" element={<PreditionCase />} />
      <Route path="/resource-allowcation" element={<ResourseAllowcation />} />
      <Route path="/chart" element={<Chart />} />

      {/* API fetch karne ke liye yha se bhi kar sakta hai , yha par sirf route ko use kiya he  */}
      {/* <Route path='github' element={<Github /> }/> */}

      {/* yha par hum direct bhi api data fetch kar sakte he with the help of loader */}

      {/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github /> }/> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
