import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  Alert,
} from "@mui/material";
import { useFormik } from "formik";
import { paperStyle } from "./AuthStyles";
import { signUpValidations } from "./validations";
import {
  registerUserAsync,
  confirmUserAsync,
} from "../../slices/userSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { registrationStatus, confirmationCode, error } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (registrationStatus === "succeeded" && confirmationCode) {
      navigate(`/confirm/${confirmationCode}`);
    }
  }, [registrationStatus, confirmationCode, navigate]);

  const {
    handleSubmit,
    handleChange,
    touched,
    values,
    errors,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: signUpValidations,
    onSubmit: ({ email, password }) => {
      dispatch(registerUserAsync({ email, password })).then((action) => {
        const confirmCode = action.payload;
        if (confirmCode) {
          dispatch(confirmUserAsync(confirmCode)).then(() => {
            navigate(`/confirm/${confirmCode}`);
          });
        }
      });
    },
  });

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid textalign="center" marginBottom={2}>
          <Typography variant="h5" fontWeight="bold">
            Register
          </Typography>
          <Typography variant="caption">
            Please fill this form to create an account!
          </Typography>
        </Grid>
        <Grid>
          {error && <Alert severity="error">{error}</Alert>}
        </Grid>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            variant="standard"
            placeholder="Enter your email"
            onChange={handleChange}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            fullWidth
            type="password"
            name="password"
            label="Password"
            variant="standard"
            placeholder="Enter your password"
            onChange={handleChange}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Grid marginTop={3}>
            <Button
              fullWidth
              textalign="center"
              type="submit"
              variant="contained"
              color="primary"
              disabled={registrationStatus === "loading"}
            >
              {registrationStatus === "loading" ? "Loading..." : "Submit"}
            </Button>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
};

export default RegisterPage;
