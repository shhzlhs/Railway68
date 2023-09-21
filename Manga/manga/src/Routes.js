import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import UploadStory from "./Pages/UploadStory";
import AdminPage from "./Pages/AdminPage";

export const routers = (
  <Routes>
    <Route path="/home" element={<HomePage />}></Route>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/upload" element={<UploadStory />}></Route>
    <Route path="/admin" element={<AdminPage />}></Route>
  </Routes>
);
