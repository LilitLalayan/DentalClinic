import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import { storage } from "..";
import "@fontsource/roboto";
// import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    boxShadow: "2px 2px 20px		paleturquoise	",
  },
  media: {
    height: 175,
    backgroundSize: "cover",
  },
  gridItem: {
    margin: 50,
    marginBottom: "100px",
    height: 300,
    maxWidth: 320,
  },
});

function Doctor({ doctor, index }) {
  const classes = useStyles();

  const [url, setUrl] = useState("");

  useEffect(() => {
    storage
      .ref()
      .child(`doctorImages/DocImg${index}.jpg`)
      .getDownloadURL()
      .then((url) => {
        // `url` is the download URL
        setUrl(url);
      })
      .catch((error) => {
        // Handle any errors
      });
  }, []);

  return (
    <Grid className={classes.gridItem}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={url}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {doctor.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {doctor.info}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
}

export default Doctor;
