import React, { useState } from "react";
import {
  TextField,
  Button,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FoodItem from "./FoodItem";
import Header from "./Header"; // Import the Header component
import Chole from "./chole.jpeg";
import Salad from "./salad.jpeg";

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [error, setError] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false); // State for the dialog

  const handleLogin = () => {
    if (username === "agentlogin" && password === "hello123") {
      setLoggedIn(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleAccountClick = () => {
    navigate("/page");
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const addFoodItem = () => {
    // Implement your logic to add a food item here
    handleDialogClose();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <TextField
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ margin: "10px" }}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ margin: "10px" }}
        error={error}
        helperText={error ? "Incorrect username or password" : ""}
      />
      <Button variant="contained" color="primary" onClick={handleLogin}>
        Log In
      </Button>
      {loggedIn && (
        <>
          <Header /> 
          <List style={{ marginTop: "20px" }}>
            <FoodItem
              primary="Food Item 1"
              description="Delicious food item 1"
              serialNo="12345"
              imageSrc={Chole}
              halfPrice={5.99}
              fullPrice={10.99}
            />
            <FoodItem
              primary="Food Item 2"
              description="Tasty food item 2"
              serialNo="67890"
              imageSrc={Salad}
              halfPrice={4.99}
              fullPrice={9.99}
            />
          </List>
          <button onClick={handleDialogOpen}>Add Food Item</button> {/* Add button to open the dialog */}
          <Dialog open={isDialogOpen} onClose={handleDialogClose}>
            <DialogTitle>Add Food Item</DialogTitle>
            <DialogContent>
              {/* Input fields for food details */}
              <TextField label="Title" variant="outlined" />
              <TextField label="Description" variant="outlined" />
              <TextField label="Serial No" variant="outlined" />
              <TextField label="Half Price" variant="outlined" />
              <TextField label="Full Price" variant="outlined" />
              <input type="file" accept="image/*" />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleDialogClose} color="primary">
                Cancel
              </Button>
              <Button onClick={addFoodItem} color="primary">
                Add
              </Button>
            </DialogActions>
          </Dialog>
        </>
      )}
      <Button variant="contained" onClick={handleAccountClick}>
        Go back
      </Button>
    </div>
  );
}

export default AdminLogin;
