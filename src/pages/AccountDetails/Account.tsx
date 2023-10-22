import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./AdminLogin";

function Account() {
  const [val, setVal] = useState(false);
  const navigate = useNavigate(); // Initialize navigate
  const handleAccountClick = () => {
    navigate("/page"); // Navigate to the /account route
  };
  return (
    <>
      {!val && (
        <div>
          <h1>here is account </h1>
          Admin login
          <p>are you a admin</p>
          <Button
            variant="contained"
            onClick={() => {
              setVal(true);
            }}
          >
            Yes
          </Button>
          <Button variant="contained" onClick={handleAccountClick}>
            Go back
          </Button>
        </div>
      )}
      {val && <AdminLogin />}
    </>
  );
}

export default Account;
