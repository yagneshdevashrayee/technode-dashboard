/**
=========================================================
* Material Dashboard 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";
// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import { Loader } from "assets/images/Loader";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import { useMaterialUIController } from "context";
// import Dashboard from "layouts/dashboard";
// import * as AWS from "aws-sdk";
import "App.css";

export default function App() {
  const [controller] = useMaterialUIController();
  const { direction, layout, darkMode } = controller;
  const { pathname } = useLocation();
  // console.log("pathname", pathname);
  const [, setDataState] = useState();

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);
  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  useEffect(() => {
    setDataState(sessionStorage.getItem("data"));
  }, [sessionStorage.getItem("data")]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      // console.log("route", route);
      if (route.collapse) {
        // console.log("route.collapse", route.collapse);
        return getRoutes(route.collapse);
      }

      if (route.route) {
        // console.log("route.route", route.route);
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });
  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      {/* {console.log("75 app.js")} */}
      <CssBaseline />
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/authentication/sign-in" />} />
      </Routes>
    </ThemeProvider>
  );
}
