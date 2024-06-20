import Login from "../pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export const guestRoutes = [
{
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
},
{
    key: "login",
    title: "Login",
    path: "/login",
    enabled: true,
    component: Login,
}
]; 

export const AppRoutes = () => {
    return (
      <Routes>
        <Route>
          {guestRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Route>
      </Routes>
    );
};