import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { withRouter } from "react-router";
import { useDispatch } from "react-redux";
import * as Actions from "../../store/actions";
import "./style.scss";

function Login({ history }: any) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [valuesValidate, setValuesValidate] = useState({
    email: false,
    password: false,
  });
  const postLogin = () => {
    if (values.email == "" || values.password == "") {
      setValuesValidate({
        email: values.email == "",
        password: values.password == "",
      });
      dispatch(Actions.showSnackbarMessage("Giriş Başarısız", "error"));
    } else {
      dispatch(Actions.showSnackbarMessage("Giriş Başaralı"));
      history.push("/p/Dashboard");
    }
  };

  const handleChange = (prop: any) => (event: any) => {
    setValuesValidate({
      email: false,
      password: false,
    });
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };
  return (
    <div className="homepage-bgimage">
      <Card className={"login-loginCard" + " login-card"}>
        <Avatar
          alt="Remy Sharp"
          src="/assets/logo.png"
          className={"login-logo"}
        />
        <span className="login-title">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
        </span>
        <TextField
          className={"login-margin"}
          id="input-with-icon-textfield"
          variant="outlined"
          label="Kullanıcı Adı"
          onChange={handleChange("email")}
          value={values.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon style={{ color: "#2A75B4" }} />
              </InputAdornment>
            ),
          }}
          error={valuesValidate.email}
          helperText={valuesValidate.email == true && "Kullanıcı adı hatalı"}
        />

        <TextField
          className="login-margin"
          id="input-with-icon-textfield"
          variant="outlined"
          label="Şifre"
          placeholder="********"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon style={{ color: "#2A75B4" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={valuesValidate.password}
          helperText={valuesValidate.password == true && "Şifre hatalı"}
        />

        <Button variant="contained" color="primary" onClick={postLogin}>
          Giriş Yap
        </Button>

        <span className="login-title">Veya</span>
        <span className="login-title">Kaydol</span>
      </Card>
    </div>
  );
}

export default withRouter(Login);
