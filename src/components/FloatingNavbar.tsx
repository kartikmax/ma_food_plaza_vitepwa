import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  ShoppingCart as ShoppingCartIcon,
  Category as CategoryIcon,
  Home as HomeIcon,
  Payment as PaymentIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const FloatingNavBar = () => {
  const [value, setValue] = useState("welcome");
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);

    // Use navigate to programmatically navigate to the selected route
    switch (newValue) {
      case "welcome":
        navigate("/");
        break;
      case "cart":
        navigate("/cart");
        break;
      case "category":
        navigate("/category");
        break;
      case "payment":
        navigate("/pay");
        break;
      default:
        break;
    }
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <BottomNavigationAction
        label="Welcome"
        value="welcome"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="Cart"
        value="cart"
        icon={<ShoppingCartIcon />}
      />
      <BottomNavigationAction
        label="Category"
        value="category"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
        label="Payment"
        value="payment"
        icon={<PaymentIcon />}
      />
    </BottomNavigation>
  );
};

export default FloatingNavBar;
