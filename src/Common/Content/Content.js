import "./Content.css";
import {
  Card,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import ThemeGlb from "./ContentTheme";
import { ThemeProvider } from "@mui/material/styles";

const Content = ({ item }) => {
  const vote = (item.vote_average * 10).toFixed(0);
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={ThemeGlb}>
        <CssBaseline />
        <Card sx={{ maxWidth: "206px", height: "420px" }}>
          <CardMedia
            className="cardMedia"
            sx={{ margin: 0, msWrapThrough: "none" }}
            component="img"
            height="312px"
            image={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`}
            alt="green iguana"
          />
          <CardContent style={{ position: "relative" }}>
            <div className="canvas">{vote}%</div>
            <div>
              <Typography gutterBottom variant="body1" component="body1">
                {item.name || item.title}
              </Typography>
            </div>
            <Typography variant="body2" component="body2">
              {item.first_air_date || item.release_date}
            </Typography>
          </CardContent>
        </Card>
      </ThemeProvider>
    </Grid>
  );
};

export default Content;
