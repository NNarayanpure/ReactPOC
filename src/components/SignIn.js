import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAtom, useRecoilState, RecoilRoot, atom } from "recoil";
import { RecommendOutlined } from "@mui/icons-material";

const theme = createTheme();
const usernameAtom = atom({ key: "username - atom", default: 15 });
export default function SignIn() {
  let navigate = useNavigate();
  const [name, setName] = useRecoilState(usernameAtom);
  const [passkey, setPasskey] = useState("");
  const nameChange = (e) => setName(e.target.value);
  const passkeyChange = (e) => setPasskey(e.target.value);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="lg">
        <CssBaseline />
        <Box
          className="box-signin"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={useNavigate}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              required
              type="username"
              className="textfield-email"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={name}
              onChange={nameChange}
            />
            <h1>the recoiled name is: {name}</h1>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              value={passkey}
              onChange={passkeyChange}
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              disabled={!name || !passkey}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                // debugger;
                navigate("/Details");
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
