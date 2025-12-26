import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {store} from'./Redux/store.ts'
import { Provider } from "react-redux";


import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <App />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
      />
    </BrowserRouter>
    </Provider>
  </StrictMode>
);
