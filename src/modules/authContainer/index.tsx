import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SignIn from "./signIn";
import SignUp from "./signUp";
import OfferComponent from "../../common/offerSlider";

const AuthContainer: React.FC = () => {
  const [activeAction, setActiveAction] = useState<"signIn" | "signUp">(
    "signIn"
  );

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: "signIn" | "signUp"
  ) => {
    setActiveAction(newValue);
  };

  const handleSignIn = (formData: any) => {
    console.log("Signing In with data:", formData);
    // Implement your sign-in logic here
  };

  const handleSignUp = (formData: any) => {
    console.log("Signing Up with data:", formData);
    // Implement your sign-up logic here
  };
  const offerText = [
    "10% off for business Signup",
    "20% off for Wholesale Signup",
  ];
  return (
    <>
      <OfferComponent offerText={offerText} />
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Box
          sx={{
            width: "400px",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <Tabs
            value={activeAction}
            onChange={handleChange}
            centered
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Sign In" value="signIn" />
            <Tab label="Sign Up" value="signUp" />
          </Tabs>
          <Box sx={{ padding: "20px" }}>
            {activeAction === "signIn" && <SignIn onSubmit={handleSignIn} />}
            {activeAction === "signUp" && <SignUp onSubmit={handleSignUp} />}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AuthContainer;
