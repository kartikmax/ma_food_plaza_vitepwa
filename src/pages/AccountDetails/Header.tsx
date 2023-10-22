import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";

interface FoodItem {
    name: string;
    halfPrice: number;
    fullPrice: number;
    description: string;
    // Add any other properties as needed
  }

interface HeaderProps {
    onAddFoodItem?: (foodItem: FoodItem) => void;
  }
  

  const Header: React.FC<HeaderProps> = ({ onAddFoodItem }) => {
  const [open, setOpen] = useState(false);
  const [foodItem, setFoodItem] = useState({
    name: "",
    halfPrice: 0,
    fullPrice: 0,
    description: "",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFoodItem({
      ...foodItem,
      [name]: value,
    });
  };

  const handleAddFoodItem = () => {
    // Validate the input fields here
    if (
      foodItem.name === "" ||
      isNaN(foodItem.halfPrice) ||
      isNaN(foodItem.fullPrice) ||
      foodItem.description.split(" ").length < 10
    ) {
      // Handle validation error
      alert("Please fill in all fields and ensure proper formatting.");
      return;
    }

    // Call the callback function to add the food item
    onAddFoodItem && onAddFoodItem(foodItem);

    // Clear the input fields and close the dialog
    setFoodItem({
      name: "",
      halfPrice: 0,
      fullPrice: 0,
      description: "",
    });
    setOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <h2>Menu</h2>
      <Button variant="outlined" onClick={handleOpen}>
        Add Food Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Food Item</DialogTitle>
        <DialogContent>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={foodItem.name}
            onChange={handleInputChange}
          />
          <TextField
            name="halfPrice"
            label="Half Price"
            variant="outlined"
            fullWidth
            value={foodItem.halfPrice}
            onChange={handleInputChange}
          />
          <TextField
            name="fullPrice"
            label="Full Price"
            variant="outlined"
            fullWidth
            value={foodItem.fullPrice}
            onChange={handleInputChange}
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={foodItem.description}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddFoodItem} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;
