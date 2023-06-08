import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import App from "./App.jsx"
import "./index.css"
import store from "./store/store.js"
import PrivateRoute from "./utils/PrivateRoute.jsx"
import CardGameScreen from "./views/cardGame/CardGameScreen.jsx"
import HomeScreen from "./views/home/HomeScreen.jsx"
import LoginScreen from "./views/login/LoginScreen.jsx"
import ProfileScreen from "./views/profile/ProfileScreen.jsx"
import RegisterScreen from "./views/register/RegisterScreen.jsx"
import CountTrainer from "@views/countTrainer/CountTrainer.jsx"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<App />}
    >
      <Route
        index={true}
        path="/"
        element={<HomeScreen />}
      />
      <Route
        path="/login"
        element={<LoginScreen />}
      />
      <Route
        path="/register"
        element={<RegisterScreen />}
      />

      {/* Private Routes */}
      <Route
        path=""
        element={<PrivateRoute />}
      >
        <Route
          path="/profile"
          element={<ProfileScreen />}
        />
        <Route
          path="/cardGame"
          element={<CardGameScreen />}
        />
        <Route
          path="/countTrainer"
          element={<CountTrainer/>}
        />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
