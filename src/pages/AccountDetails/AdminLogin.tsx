import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  List,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Input,
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

function AdminLogin() {
  const navigate = useNavigate();

  const [foodList, setFoodList] = useState({});
  const [file, setFile] = useState({} as any);

  // State variable for the food item details
  const [foodItem, setFoodItem] = useState({
    title: "",
    description: "",
    serialNo: "",
    halfPrice: "",
    fullPrice: "",
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [error, setError] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [per, setPerc] = useState(0);
  const [isSnackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const list: any = [];
      const querySnapshot = await getDocs(collection(db, "foodItems"));
      querySnapshot.forEach((doc) => list.push({ id: doc.id, ...doc.data() }));

      setFoodList(list);
    };

    fetchData();
  }, []);

  console.log(foodList);

  const openSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      // const uploadTask = uploadBytesResumable(storageRef, file);

      // uploadTask.on(
      //   "state_changed",
      //   (snapshot) => {
      //     const progress =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     console.log("Upload is " + progress + "% done");
      //     setPerc(progress);
      //     switch (snapshot.state) {
      //       case "paused":
      //         console.log("Upload is paused");
      //         break;
      //       case "running":
      //         console.log("Upload is running");
      //         break;
      //       default:
      //         break;
      //     }
      //   },
      //   (error) => {
      //     console.log(error);
      //   },
      //   () => {
      //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //       setFoodItem((prev) => ({ ...prev, img: downloadURL }));
      //     });
      //   }
      // );
    };
    file && uploadFile();
  }, [file]);

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

    // Add the food item to Firestore
    try {
      await addDoc(collection(db, "foodItems"), foodItem);
      openSnackbar("Food item added successfully"); // Open Snackbar on success
      setFoodItem({
        // Clear the input fields
        title: "",
        description: "",
        serialNo: "",
        halfPrice: "",
        fullPrice: "",
      });
    } catch (error) {
      console.error("Error adding food item:", error);
      openSnackbar("Failed to add food item"); // Open Snackbar on failure
    }
    handleDialogClose();
  };

  // Function to update the food item state
  const updateFoodItem = (field: string, value: string | number) => {
    setFoodItem({
      ...foodItem,
      [field]: value,
    });
  };

  const handleSnackbarClose = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
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
          <Button variant="contained" onClick={handleDialogOpen}>
            Add Food Item
          </Button>{" "}
          {/* Add button to open the dialog */}
          <Dialog open={isDialogOpen} onClose={handleDialogClose}>
            <form onSubmit={addFoodItem}>
              <DialogTitle>Add Food Item</DialogTitle>
              <div></div>
              <DialogContent>
                {/* Input fields for food details */}
                <TextField
                  label="Title"
                  variant="outlined"
                  value={foodItem.title}
                  onChange={(e) => updateFoodItem("title", e.target.value)}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  value={foodItem.description}
                  onChange={(e) =>
                    updateFoodItem("description", e.target.value)
                  }
                />
                <TextField
                  label="Serial No"
                  variant="outlined"
                  value={foodItem.serialNo}
                  onChange={(e) => updateFoodItem("serialNo", e.target.value)}
                />
                <TextField
                  label="Half Price"
                  variant="outlined"
                  value={foodItem.halfPrice}
                  onChange={(e) => updateFoodItem("halfPrice", e.target.value)}
                />
                <TextField
                  label="Full Price"
                  variant="outlined"
                  value={foodItem.fullPrice}
                  onChange={(e) => updateFoodItem("fullPrice", e.target.value)}
                />
                <Input type="file" onChange={(e) => updateFoodItem} />
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
