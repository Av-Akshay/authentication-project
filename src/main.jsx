import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import ForgetPassword from "./pages/ForgetPassword.jsx";
import ChangePassword from "./pages/ChangePassword.jsx";
import Protected from "./components/Protected.jsx";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import User from "./pages/User.jsx";
const rotes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/registration",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: `/reset-password/:resetToken`,
        element:<ResetPassword/>
      },
      {
        path: "/forget",
        element: <ForgetPassword/>
      },
      {
        path: "/changepassword",
        element: <Protected Children={ChangePassword} />,
      },
      {
        path: "/user",
        element: <Protected Children={User} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={rotes} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
