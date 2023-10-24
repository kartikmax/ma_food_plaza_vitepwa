import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Input,
  CircularProgress, // Add Circular Progress component
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import FoodItem from "./FoodItem";
import Header from "./Header";
import Chole from "./chole.jpeg";
import Salad from "./salad.jpeg";
import { db, storage } from "../../firebase-config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";


interface FoodItem {
  description: string;
  fullPrice: any;
  halfPrice: any;
  id: string;
  title: string;
  imageLink: string;
}


function AdminLogin() {
  const navigate = useNavigate();

  const [foodList, setFoodList] = useState<FoodItem[]>([]) // Initialize foodList as an array

  const [foodItem, setFoodItem] = useState({
    title: "",
    description: "",
    serialNo: "",
    halfPrice: "",
    fullPrice: "",
    imageLink: "",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [error, setError] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const list:any  = [];
        const querySnapshot = await getDocs(collection(db, "foodItems"));
        querySnapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));
        setFoodList(list);
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const openSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

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

  const addFoodItem = async (e: any) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "foodItems"), foodItem);
      openSnackbar("Food item added successfully");
      setFoodItem({
        title: "",
        description: "",
        serialNo: "",
        halfPrice: "",
        fullPrice: "",
        imageLink: "",
      });
    } catch (error) {
      console.error("Error adding food item:", error);
      openSnackbar("Failed to add food item");
    }
    handleDialogClose();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const storageRef = ref(storage, `food-images/${selectedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, selectedFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error("Error uploading image:", error);
        },
        () => {
          getDownloadURL(storageRef).then((downloadURL) => {
            setFoodItem({
              ...foodItem,
              imageLink: downloadURL,
            });
          });
        }
      );
    }
  };

  const handleSnackbarClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
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
          {loading ? ( // Show loading spinner while fetching data
            <CircularProgress />
          ) : (
            <List style={{ marginTop: "20px" }}>
              {foodList.map((food) => (
                <FoodItem
                  key={food.id}
                  primary={food.title}
                  description={food.description}
                  serialNo={food.id}
                  imageSrc={food.imageLink || Salad} // Use imageLink or Salad as fallback
                  halfPrice={food.halfPrice}
                  fullPrice={food.fullPrice}
                />
              ))}
            </List>
          )}
          <Button variant="contained" onClick={handleDialogOpen}>
            Add Food Item
          </Button>{" "}
          <Dialog open={isDialogOpen} onClose={handleDialogClose}>
            <form onSubmit={addFoodItem}>
              <DialogTitle>Add Food Item</DialogTitle>
              <div></div>
              <DialogContent>
                <TextField
                  label="Title"
                  variant="outlined"
                  value={foodItem.title}
                  onChange={(e) => setFoodItem({ ...foodItem, title: e.target.value })}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  value={foodItem.description}
                  onChange={(e) => setFoodItem({ ...foodItem, description: e.target.value })}
                />
                <TextField
                  label="Serial No"
                  variant="outlined"
                  value={foodItem.serialNo}
                  onChange={(e) => setFoodItem({ ...foodItem, serialNo: e.target.value })}
                />
                <TextField
                  label="Half Price"
                  variant="outlined"
                  value={foodItem.halfPrice}
                  onChange={(e) => setFoodItem({ ...foodItem, halfPrice: e.target.value })}
                />
                <TextField
                  label="Full Price"
                  variant="outlined"
                  value={foodItem.fullPrice}
                  onChange={(e) => setFoodItem({ ...foodItem, fullPrice: e.target.value })}
                />
                <Input type="file" onChange={handleImageChange} />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleDialogClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Add
                </Button>
              </DialogActions>
            </form>
          </Dialog>
          <Snackbar
            open={isSnackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            TransitionComponent={Slide}
          >
            <MuiAlert severity="success" elevation={6} variant="filled">
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </>
      )}
      <br />

      <Button variant="contained" onClick={handleAccountClick}>
        Go back
      </Button>
    </div>
  );
}

export default AdminLogin;
