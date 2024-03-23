import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <div>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        name="username"
        value={formData.username}
        onChange={handleChange}
        className="mt-10"
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="mt-10"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="mt-10"
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="mt-10"
      />

      <Button
        variant="contained"
        className="mt-10"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;
