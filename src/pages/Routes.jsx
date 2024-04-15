import React from "react";
import Auth from "../pages/Auth";
import NoPage from "./Dashboard/NoPage";
import Dashboard from "../pages/Dashboard";
import Fontend from "../pages/Fontend";
import { Routes,Route } from "react-router-dom";

export default function Index() {
  return (
    <Routes>
      <Route path='/*' element={< Fontend />} />
      <Route path='/dashboard/*' element={<Dashboard />} />
      <Route path='/auth/*' element={<Auth />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
