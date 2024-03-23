import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface SignInProps {
  onSubmit: (formData: any) => void;
}

const SignIn: React.FC<SignInProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

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
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="mt-10"
      />
      <Button
        className="mt-10"
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit}
      >
        Sign In
      </Button>
    </div>
  );
};

export default SignIn;
