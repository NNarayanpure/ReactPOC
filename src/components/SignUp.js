import React, { useState } from "react";
//  import { makeStyles } from "@mui/styles/makeStyles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Container } from "@mui/system";
// import { DateField } from "@mui/x-date-pickers/DateField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Autocomplete from "@mui/material/Autocomplete";

const options = ["India", "USA", "UK", "France"];
const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

function refreshPage() {
  window.location.reload(false);
}

export default function Signup() {
  const classes = useStyles();
  // create state variables for each input
  const [username, setFirstName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);
  };
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <>
      <Container>
        <h1>Create New Account</h1>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="username"
            variant="filled"
            required
            value={username}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {/* <DateField /> */}
          <div className="div-dropdown-date">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker label="Date of birth" />
              </DemoContainer>
            </LocalizationProvider>

            <br />
            <Autocomplete
              className="drpdwn-country"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={options}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Country" />
              )}
            />
          </div>
          <TextField
            label="Email"
            variant="filled"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            variant="filled"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="btn-cancel-submit">
            <Button variant="contained" onClick={refreshPage} href="#">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              href="/SignIn"
              disabled={!username || !email || !password}
            >
              Signup
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
