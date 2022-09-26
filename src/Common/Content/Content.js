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
    <Grid item>
      <ThemeProvider theme={ThemeGlb}>
        <CssBaseline />
        <Card
          sx={{
            width: { xs:"150px" , sm: "150px", md: "180px" },
            height: {xs:"310px" , sm: "310px", md: "352px" },
          }}
        >
          <CardMedia
            className="cardMedia"
            sx={{ margin: 0, msWrapThrough: "none" }}
            component="img"
            image={`https://image.tmdb.org/t/p/w300/${item.backdrop_path}`}
            alt="image not available"
          />
          <CardContent style={{ position: "relative" }}>
            <div className="canvas">{vote}%</div>
            <div>
              <Typography gutterBottom variant="body1" component="body1">
                {(item.name || item.title).slice(0, 27)}
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
