import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "./Pages/HomePages";
import AdminPage from "./Pages/AdminPage";
import AboutPage from "./Pages/AboutPage";
import PlayerDetail from "./Pages/PlayerDetail";
import PlayersPage from "./Pages/PlayersPage";
import Error from "./Pages/Error";
export let routes = (
  <Routes>
    <Route path="/players" element={<PlayersPage />}></Route>
    <Route path="/" element={<PlayersPage />}></Route>
    <Route path="*" element={<Error />}></Route>
    <Route path="/home" element={<HomePages />}></Route>
    <Route path="/admin" element={<AdminPage />}></Route>
    <Route path="/about" element={<AboutPage />}></Route>
    <Route path="/player/:id" element={<PlayerDetail />}></Route>
  </Routes>
);
