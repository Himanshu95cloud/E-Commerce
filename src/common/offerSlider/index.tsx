import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

interface OfferComponentProps {
  offerText: string[];
}

const OfferComponent: React.FC<OfferComponentProps> = ({ offerText }) => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const handleNextOffer = () => {
    setCurrentOfferIndex((prevIndex) =>
      prevIndex === offerText.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousOffer = () => {
    setCurrentOfferIndex((prevIndex) =>
      prevIndex === 0 ? offerText.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E8E8E8",
        color: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <IconButton color="inherit" onClick={handlePreviousOffer}>
        <NavigateBeforeIcon />
      </IconButton>
      <Typography variant="body1">{offerText[currentOfferIndex]}</Typography>
      <IconButton color="inherit" onClick={handleNextOffer}>
        <NavigateNextIcon />
      </IconButton>
    </Box>
  );
};

export default OfferComponent;
