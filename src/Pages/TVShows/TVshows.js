import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Content from "../../Common/Content/Content";
import { fetchTvContent } from "../../Store/action";
import Loader from "../../Assets/images/1.gif";

const Movies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTvContent());
    // eslint-disable-next-line
  }, []);

  const data = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productStatus.status);

  if (status === "Loading") {
    return (
      <Box display="flex" justifyContent="center" className="loader">
        <img src={Loader} alt="NA..." />
      </Box>
    );
  }

  return (
    <Grid container spacing={5}>
      {data.map((item) => (
        <Content key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default Movies;
