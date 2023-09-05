import React from "react";
import { Route, Routes } from "react-router-dom";
import AppContainer from "./AppContainer";
import HomePages from "./Pages/HomePages";
import AdminPage from "./Pages/AdminPage";
import AboutPage from "./Pages/AboutPage";
import PlayerDetail from "./Pages/PlayerDetail";
export let routes = (
  <Routes>
    <Route path="/players" element={<AppContainer />}></Route>
    <Route path="/" element={<HomePages />}></Route>
    <Route path="/home" element={<HomePages />}></Route>
    <Route path="/admin" element={<AdminPage />}></Route>
    <Route path="/about" element={<AboutPage />}></Route>
    <Route path="/player/:id" element={<PlayerDetail />}></Route>
  </Routes>
);
