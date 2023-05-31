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
import PrivateRoute from "./components/utils/PrivateRoute.jsx"
import "./index.css"
import CardGameScreen from "./screens/CardGameScreen.jsx"
import HomeScreen from "./screens/HomeScreen.jsx"
import LoginScreen from "./screens/LoginScreen.jsx"
import ProfileScreen from "./screens/ProfileScreen.jsx"
import RegisterScreen from "./screens/Register.jsx"
import store from "./store.js"

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
