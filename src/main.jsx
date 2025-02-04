import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./sidebar";
import UpdateContext from "./components/updateContext";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
    <UpdateContext>
      <Sidebar />
    </UpdateContext>
    </BrowserRouter>
);
