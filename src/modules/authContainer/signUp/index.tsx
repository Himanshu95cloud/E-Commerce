import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

interface SignUpProps {
  onSubmit: (formData: any) => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: false });
  };

  const handleSubmit = () => {
    let hasErrors = false;
    const updatedFormErrors = { ...formErrors };

    // Check if any required field is empty
    if (!formData.username) {
      updatedFormErrors.username = true;
      hasErrors = true;
    }

    if (!formData.email) {
      updatedFormErrors.email = true;
      hasErrors = true;
    }

    if (!formData.password) {
      updatedFormErrors.password = true;
      hasErrors = true;
    }

    if (!formData.confirmPassword) {
      updatedFormErrors.confirmPassword = true;
      hasErrors = true;
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      updatedFormErrors.password = true;
      updatedFormErrors.confirmPassword = true;
      hasErrors = true;
    }

    // If there are errors, update the state to show the warnings
    if (hasErrors) {
      setFormErrors(updatedFormErrors);
    } else {
      // Proceed with form submission if there are no errors
      onSubmit(formData);
    }
  };

  return (
    <div>
      <Typography
        textAlign={"center"}
        fontWeight={600}
        variant="h4"
        gutterBottom
      >
        Create Your Account
      </Typography>
      <div className="input-group">
        <Typography mt={1} mb={1} variant="subtitle1">
          Username
        </Typography>
        <TextField
          size="small"
          variant="outlined"
          fullWidth
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={formErrors.username}
          helperText={formErrors.username ? "Username is required" : ""}
          className="mt-10"
        />
      </div>
      <div className="input-group">
        <Typography mt={1} mb={1} variant="subtitle1">
          Email
        </Typography>
        <TextField
          size="small"
          type="email"
          variant="outlined"
          fullWidth
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
          helperText={formErrors.email ? "Email is required" : ""}
          className="mt-10"
        />
      </div>
      <div className="input-group">
        <Typography mt={1} mb={1} variant="subtitle1">
          Password
        </Typography>
        <TextField
          size="small"
          type="password"
          variant="outlined"
          fullWidth
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={formErrors.password}
          helperText={formErrors.password ? "Passwords do not match" : ""}
          className="mt-10"
        />
      </div>
      <div className="input-group">
        <Typography mt={1} mb={1} variant="subtitle1">
          Confirm Password
        </Typography>
        <TextField
          type="password"
          variant="outlined"
          fullWidth
          size="small"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={formErrors.confirmPassword}
          helperText={
            formErrors.confirmPassword ? "Passwords do not match" : ""
          }
          className="mt-10"
        />
      </div>

      <Box marginTop={"20px"}>
        <Button
          sx={{ backgroundColor: "black" }}
          variant="contained"
          className="mt-10"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Sign Up
        </Button>
      </Box>
    </div>
  );
};

export default SignUp;
