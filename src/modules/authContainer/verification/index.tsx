import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EmailVerification: React.FC = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState(Array(6).fill(""));
  const [verificationError, setVerificationError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newCode = [...verificationCode];
      newCode[index] = value;
      setVerificationCode(newCode);
      setVerificationError(""); // Clear error message when input changes
    }
  };

  const handleSubmit = () => {
    // Check if all verification code fields are filled
    const isCodeFilled = verificationCode.every((code) => code.length === 1);

    if (isCodeFilled) {
      navigate("/shopping-intrest");
    } else {
      setVerificationError("Please fill in all the verification code fields.");
    }
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
          {verificationCode.map((code, index) => (
            <TextField
              size="small"
              key={index}
              variant="outlined"
              inputProps={{ maxLength: 1 }}
              style={{ marginRight: "8px", width: "40px" }}
              value={code}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChange(e, index)
              }
            />
          ))}
        </div>
        {verificationError && (
          <Typography variant="body2" color="error" align="center">
            {verificationError}
          </Typography>
        )}
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
