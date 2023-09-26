import { auth, signInWithGoogle } from "../firebase-config";

import GoogleIcon from "@mui/icons-material/Google";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const customSpacing = "16px";

const useStyles = {
  googleButton: {
    backgroundColor: "#4285f4",
    margin: `${customSpacing} 0`,
  },
  googleIcon: {
    marginRight: customSpacing,
  },
};

function Login() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // Maybe trigger a loading screen
      return;
    }
    if (user) navigate("/page-2");
  }, [user, loading]);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={signInWithGoogle}
        style={useStyles.googleButton}
      >
        <GoogleIcon style={useStyles.googleIcon} /> Login with Google
      </Button>
    </>
  );
}

export default Login;
