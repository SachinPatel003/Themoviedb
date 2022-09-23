import { Grid } from '@mui/material';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Content from "../../Common/Content/Content";
import { fetchTvContent } from '../../Store/action';

const Movies = () => {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchTvContent())
   // eslint-disable-next-line 
  }, [])
  
  const data = useSelector((state) => state.productReducer.products);

  return (
    <Grid container spacing={5}>
      {data.map((item) => (
        <Content key={item.id} item={item}/>
      ))}
    </Grid>
  );
};

export default Movies;













































// import { Grid } from '@mui/material';
// import axios from 'axios'
// import React, { useEffect, useState } from "react";
// import Content from '../../Components/Content/Content';

// const TVShows = () => {
//   const [content, setContent] = useState([]);

//   const fetchTrendingall = async () => {
//     const { data } = await axios.get(
//       `https://api.themoviedb.org/3/trending/tv/week?api_key=dd5685fc0c5640abc7ed586478a6ab70`
//     );
//     setContent(data.results);
//   };

//   useEffect(() => {
//     fetchTrendingall();
//   }, []);

//   return (
//     <Grid container spacing={5}>
//       {content.map((item) => (
//         <Content key={item.id} item={item}/>
//       ))}
//     </Grid>
//   );
// };

// export default TVShows;
