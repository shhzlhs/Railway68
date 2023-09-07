import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";

export const routers = (
  <Routes>
    <Route path="/home" element={<HomePage />}></Route>
    <Route path="/" element={<HomePage />}></Route>
  </Routes>
);
