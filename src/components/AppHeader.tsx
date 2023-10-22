import React from "react";
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { AccountCircle as AccountCircleIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AppHeader = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleAccountClick = () => {
    navigate("/account"); // Navigate to the /account route
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={handleAccountClick}>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
