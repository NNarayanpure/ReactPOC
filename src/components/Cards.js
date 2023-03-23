import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Header } from "./Header";
import ProfilePage from "./Profile";
import SignIn from "./SignIn";
import axios from "axios";

export default function MediaCard() {
  // state = {
  //   persons: [],
  // };

  // useEffect = () => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
  //     const persons = res.data;
  //     this.setState({ persons });
  //   });
  // };
  const [eventDetails, setEventDetails] = useState([]);
  function getEvents() {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)

      .then((data) => {
        debugger;
        setEventDetails(data);
      });
  }
  useEffect(() => {
    getEvents();
  }, []);

  const [spacing, setSpacing] = React.useState(2);
  return (
    <div>
      <Header />
      <h1>Welcome to Homepage</h1>
      <div>
        {/* grid */}
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={spacing}>
              {eventDetails.map((person) => (
                <>
                  {/* <li key={person.name}>{person.name}</li> */}

                  <Card
                    sx={{
                      height: 300,
                      width: 250,
                      // padding: 10,

                      marginTop: 25,
                      marginBottom: 10,
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                    }}
                  >
                    <CardMedia
                      // sx={{ height: 140 }}

                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {person.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Hey, Geeks !<br />I am a Software developer who has
                        hands-on experience of React for 5years. right now I am
                        working for Deloitte.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      {/* <Button
                        size="small"
                        justifyContent="center"
                        alignItem="center"
                      >
                        View More
                      </Button> */}
                      <div
                        className="div-card-btn"
                        position="center"
                        display="flex"
                        alignItem="center"
                      >
                        <Button variant="contained" href="/Profile">
                          View More
                        </Button>
                      </div>
                      {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                  </Card>
                </>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
