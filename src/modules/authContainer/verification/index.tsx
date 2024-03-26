import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmailVerification: React.FC = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newCode = verificationCode.split("");
      newCode[index] = value;
      setVerificationCode(newCode.join(""));
    }
  };

  const handleSubmit = () => {
    navigate("/shopping-intrest");
  };

  return (
    <Box mt={5} display={"flex"} justifyContent={"center"}>
      <Box
        width={"20vw"}
        padding={3}
        border={"1px solid grey"}
        borderRadius={"8px"}
      >
        <Typography
          textAlign={"center"}
          fontWeight={600}
          variant="h4"
          gutterBottom
        >
          Email Verification
        </Typography>
        <Typography textAlign={"center"} variant="body1" gutterBottom>
          An email has been sent to this email: {"email"}
        </Typography>
        <Typography textAlign={"center"} variant="body1" gutterBottom>
          Enter verification code:
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[...Array(6)].map((_, index) => (
            <TextField
              size="small"
              key={index}
              variant="outlined"
              inputProps={{ maxLength: 1 }}
              style={{ marginRight: "8px", width: "40px" }}
              value={verificationCode[index] || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, index)
              }
            />
          ))}
        </div>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          style={{ marginTop: "16px", backgroundColor: "black" }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default EmailVerification;
