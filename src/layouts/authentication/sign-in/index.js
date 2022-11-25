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
import axios from "axios";
// react-router-dom components
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
// import Switch from "@mui/material/Switch";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import fetchData from "../../../AwsFunction";
// import axios from "axios";
// import updateUserSession from "utils/Common";

function Basic() {
  // const [rememberMe, setRememberMe] = useState(false);

  // const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData("energy_meter");
  });
  const checkAuthUser = () => {
    // event.preventDefault();
    // setError(null);
    // setLoading(true);
    // if (user === "amruta@technodeuser.com" && pwd === "technodes@123") {
    //   setTimeout(() => {
    //     setLoading(false);
    //     sessionStorage.setItem("user", JSON.stringify({ name: "Amruta" }));
    //     navigate("/dashboard");
    //   }, 2000);
    // } else {
    //   // navigate("/authentication/sign-in");
    //   setError("Invalid UserName and Password!!");
    //   setTimeout(setLoading(false), 2000);
    // }
    setError(null);
    setLoading(true);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    const url = "http://iot.technodes.in/checkConnection.php";
    axios
      .get(url, {
        params: {
          email,
          pwd,
        },
      })
      .then((response) => {
        const authUser = response.data;
        if (email === authUser.EMAIL && pwd === authUser.PASSWORD) {
          // TODO : Add this condition authUser.MAC_ID === sessionStorage.getItem("device")
          setLoading(false);
          sessionStorage.setItem("user", JSON.stringify({ name: authUser.FIRST_NAME }));
          if (sessionStorage.getItem("data")) {
            navigate("/dashboard");
          }
        } else {
          navigate("/authentication/sign-in");
          setError("Invalid UserName and Password!!");
          setLoading(false);
        }
      });

    // axios
    //   .post("authURL", {
    //     username: user,
    //     password: pwd,
    //   })
    //   .then((response) => {
    //     setLoading(false);
    //     sessionStorage.setItem("user", { name: "Amruta" });
    //     updateUserSession(response.data.token, response.data.user);
    //     console.log("success response", response);
    //   })
    //   .catch((errorMsg) => {
    //     setLoading(false);
    //     if (errorMsg.response.status === 401 || errorMsg.response.status === 400) {
    //       setError(errorMsg.response.data.message);
    //     } else {
    //       console.log("Something went Wrong. Please try again");
    //     }
    //   });
  };

  return (
    <BasicLayout>
      {console.log("114 sign-in")}
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" method="get">
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Password"
                onChange={(e) => setPwd(e.target.value)}
                fullWidth
                required
              />
            </MDBox>
            {/* <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox> */}
            <MDBox mt={4} mb={1}>
              <MDButton
                variant="gradient"
                color="info"
                onClick={(e) => checkAuthUser(e)}
                disabled={loading}
                fullWidth
              >
                {loading ? "Loading..." : "Login"}
              </MDButton>
              {error !== null ? (
                <center>
                  <p style={{ color: "red" }}>{error}</p>
                </center>
              ) : null}
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
