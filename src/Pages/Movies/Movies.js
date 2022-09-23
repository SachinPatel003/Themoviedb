import { Grid } from '@mui/material';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Content from "../../Common/Content/Content";
import { fetchMovieContent } from '../../Store/action';

const Movies = () => {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchMovieContent())
   // eslint-disable-next-line 
  }, [])
  
  const data = useSelector((state) => state.productReducer.products);


  return (
    <Grid flex-wrap container spacing={5}>
      {data.map((item) => (
        <Content key={item.id} item={item}/>
      ))}
    </Grid>
  );
};

export default Movies;
