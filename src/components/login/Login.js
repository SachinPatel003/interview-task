import React from "react";
import { Form, Formik } from "formik";
import { Box, InputAdornment, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Input from "../common/Input/Input";
import useStyle from "./style";
import { setToken } from "../../utils";
import CustomButton from "../common/Button/Button";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/ASTPP-logo-01.png";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const classes = useStyle();
  const navigate = useNavigate();

  const onLogin = (values, { resetForm }) => {
    if (values.email === "Sachin" && values.password === "1234") {
      setToken(true);
      navigate("/team");
    } else {
      resetForm();
    }
  };

  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.displayCard}>
        <Formik initialValues={initialValues} onSubmit={onLogin}>
          <Form id="login-form">
            <Box className={classes.loginForm}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "40px 0px",
                }}
              >
                <Box className={classes.avatarLogo}>
                  <img src={logo} alt="logo" className={classes.logoImg} />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "26px", fontWeight: "800" }}>
                    Welcome back!
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ color: "gray", fontSize: "14px" }}>
                    Signin to continue to ASTPP
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.emailContent}>
                <Input
                  name="email"
                  label="Email / User Name (Sachin)"
                  Required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailOutlinedIcon
                          fontSize="small"
                          className={classes.passwordIcon}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box className={classes.passwordContent}>
                <Input
                  name="password"
                  Required
                  type={"password"}
                  label="Password (1234)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon
                          fontSize="small"
                          className={classes.passwordIcon}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box className={classes.loginBtn}>
                <CustomButton
                  btnLabel={"Login"}
                  form="login-form"
                  width="100%"
                  type="submit"
                />
              </Box>
            </Box>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};

export default Login;
