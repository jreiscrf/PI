import React from "react";
import RoutesApp from "./routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import Stores from "./stores";

function App() {
  return (
    <>
      <Provider store={Stores}>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </Provider>
    </>
  );
}

export default App;
