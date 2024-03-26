import React, { useState } from "react";
import Box from "@mui/material/Box";
import SignIn from "./signIn";
import SignUp from "./signUp";
import OfferComponent from "../../common/offerSlider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AuthContainer: React.FC = () => {
  const [activeAction, setActiveAction] = useState<"signIn" | "signUp">(
    "signUp"
  );
  const navigate = useNavigate();
  const handleSwitchAction = () => {
    setActiveAction(activeAction === "signIn" ? "signUp" : "signIn");
  };

  const handleSignIn = (formData: any) => {
    console.log("Signing In with data:", formData);
  };

  const handleSignUp = (formData: any) => {
    console.log("Signing Up with data:", formData);

    // Validate form data
    if (
      formData.username &&
      formData.email &&
      formData.password &&
      formData.confirmPassword
    ) {
      // Proceed with redirection if all fields are filled
      navigate("/email-verification");
    } else {
      // Display an error message or perform any other action for invalid data
      console.error("Please fill in all the required fields");
    }
  };

  const offerText = [
    "10% off for business Signup",
    "20% off for Wholesale Signup",
  ];

  return (
    <>
      <OfferComponent offerText={offerText} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        {activeAction === "signIn" && (
          <Box
            minWidth={"20vw"}
            padding={3}
            border={"1px solid grey"}
            borderRadius={"8px"}
          >
            <SignIn onSubmit={handleSignIn} />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ marginTop: "10px" }}
            >
              <span style={{ color: "grey" }}>Not a member? </span>
              <Button sx={{ color: "black" }} onClick={handleSwitchAction}>
                Sign Up
              </Button>
            </Box>
          </Box>
        )}
        {activeAction === "signUp" && (
          <Box
            minWidth={"20vw"}
            padding={3}
            border={"1px solid grey"}
            borderRadius={"8px"}
          >
            <SignUp onSubmit={handleSignUp} />
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ marginTop: "10px" }}
            >
              <span style={{ color: "grey" }}>Already a member? </span>
              <Button sx={{ color: "black" }} onClick={handleSwitchAction}>
                Sign In
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </>
  );
};

export default AuthContainer;
