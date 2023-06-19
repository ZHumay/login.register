import React from 'react'
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
  import { signInValidations } from "./validations";
function Confirm() {
    const { handleSubmit, handleChange, touched, values, errors } = useFormik({
        initialValues: {
          email: "",
          password: "",
        },
        validationSchema: signInValidations,
        onSubmit: ({ email, password }, bag) => {
        },
      });
  return (
    
    <Grid>
    <Paper elevation={20} style={paperStyle}>
      <Grid textalign="center" marginBottom={2}>
        <Typography variant="h5" fontWeight="bold">
          Confirm code
        </Typography>
        <Typography variant="caption">
          Please fill this from to create an account!
        </Typography>
      </Grid>
      <Grid>
        {errors.general && <Alert severity="error">{errors.general}</Alert>}
      </Grid>
      <form onSubmit={handleSubmit}>
     
        <TextField
          fullWidth
          type="password"
          name="password"
          label="Code"
          variant="standard"
          placeholder="Enter you code"
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
          >
            Submit
          </Button>
        </Grid>
      </form>
    </Paper>
  </Grid>
  )
}

export default Confirm