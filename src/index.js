import React from "react";
import ReactDOM from "react-dom/client";
import "./core/scss/global.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./views/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ListarUsuarios from "./views/usuarios/listar";
import CadastrarUsuario from "./views/usuarios/cadastro";
import Header from "./core/components/header";
import Sidebar from "./core/components/sidebar";
import Router from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Router/>
    <ToastContainer hideProgressBar/>
  </BrowserRouter>
);
