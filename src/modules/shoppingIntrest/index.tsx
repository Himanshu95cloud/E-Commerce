import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";

const interestData = [
  "Shoes",
  "Jewelry",
  "Bottom Wear",
  "Upper Wear",
  "Accessories",
  "Bags",
  "Hats",
  "Scarves",
  "Sunglasses",
  "Watches",
  "Belts",
  "Perfumes",
  "Cosmetics",
  "Skincare",
  "Haircare",
  "Books",
  "Electronics",
  "Home Decor",
  "Kitchenware",
  "Fitness Equipment",
  "Sports Gear",
  "Outdoor Gear",
  "Toys",
  "Camera ",
];

const itemsPerPage = 6;

const MarkInterest = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

  const handleCheckboxChange = (interest: string) => {
    const isSelected = selectedInterests.includes(interest);
    if (isSelected) {
      setSelectedInterests(
        selectedInterests.filter((item) => item !== interest)
      );
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  const handleSubmit = () => {
    console.log("Selected Interests:", selectedInterests);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value - 1);
  };

  const renderInterests = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, interestData.length);
    const interestsToDisplay = interestData.slice(startIndex, endIndex);

    return interestsToDisplay.map((interest, index) => (
      <Box display="flex" alignItems="center" key={index}>
        <Checkbox
          checked={selectedInterests.includes(interest)}
          onChange={() => handleCheckboxChange(interest)}
          color="default"
        />
        <Typography>{interest}</Typography>
      </Box>
    ));
  };

  return (
    <Box mt={5} display="flex" justifyContent="center">
      <Box width="25vw" padding={3} border="1px solid grey" borderRadius="8px">
        <Typography
          textAlign="center"
          fontWeight={600}
          variant="h4"
          gutterBottom
        >
          Mark your interest
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          fontWeight={400}
          gutterBottom
        >
          We will notify you.
        </Typography>
        {renderInterests()}
        <Box
          display="flex"
          alignItems={"center"}
          justifyContent="space-between"
          mt={3}
        >
          <Pagination
            count={Math.ceil(interestData.length / itemsPerPage)}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
            size="large"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ backgroundColor: "black" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MarkInterest;
