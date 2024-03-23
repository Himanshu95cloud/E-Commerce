import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Your Header Text
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body1" sx={{ marginRight: 2, color: "black" }}>
            Categories
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, color: "black" }}>
            Sale
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, color: "black" }}>
            New Stock
          </Typography>
          <Typography variant="body1" sx={{ marginRight: 2, color: "black" }}>
            Clearance
          </Typography>

          <Typography variant="body1" sx={{ marginRight: 2, color: "black" }}>
            Trending
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              columnGap: "5px",
            }}
            mt={1}
          >
            <span>Himanshu</span>
            <span>Orders</span>
          </Box>
          <Box>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
