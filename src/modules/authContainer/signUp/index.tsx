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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
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
