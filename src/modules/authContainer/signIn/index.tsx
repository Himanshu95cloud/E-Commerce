import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

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
      <Typography
        textAlign={"center"}
        fontWeight={600}
        variant="h4"
        gutterBottom
      >
        Sign In
      </Typography>

      <Typography
        textAlign={"center"}
        fontWeight={400}
        variant="h6"
        gutterBottom
      >
        Welcome back to ECOMMERCE
      </Typography>
      <Typography
        textAlign={"center"}
        fontWeight={400}
        variant="body1"
        gutterBottom
      >
        The next gen business marketplace
      </Typography>

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
      <Box marginTop={"20px"}>
        {" "}
        <Button
          className="mt-10"
          variant="contained"
          color="primary"
          sx={{ backgroundColor: "black" }}
          fullWidth
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
};

export default SignIn;
