import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Error from "../Pages/Error";
import AboutPage from "../Pages/AboutPage";
import AccountPage from "../Pages/AccountPage";
import VTI from "../Pages/VTI";
import AccountDetails from "./AccountDetails";

export let routes = (
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="*" element={<Error />}></Route>
    <Route path="/home" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/account" element={<AccountPage />} />
    <Route path="/VTI" element={<VTI />} />
    <Route path="/account/:id" element={<AccountDetails />} />
  </Routes>
);
