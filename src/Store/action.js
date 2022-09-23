
export const fetchMovieContent = () => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=dd5685fc0c5640abc7ed586478a6ab70`
    );
    const data = await response.json();

    dispatch({
      type: "setItem",
      payload: data.results,
    });
  };
};

export const fetchTvContent = () => {
  return async (dispatch, getState) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=dd5685fc0c5640abc7ed586478a6ab70"
    );
    const data = await response.json();

    // console.log(data.results);

    dispatch({
      type: "setItem",
      payload: data.results,
    });
  };
};















// import { createSlice } from "@reduxjs/toolkit";

// const ContentSlice = createSlice({
//   name: "content",
//   initialState: {
//     data: [],
//     status: "Idle",
//   },

//   reducers: {
//     setContent(state, action) {
//       state.data = action.payload;
//     },

//     setStatus(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setContent, setStatus } = ContentSlice.actions;
// export default ContentSlice.reducer;

// // thunk for movie
// export function fetchMovieContent() {
//   return async function fetchContentThunk(dispatch, getState) {
//     dispatch(setStatus("Loading"));
//     try {
//       const res = await fetch(
//         "https://api.themoviedb.org/3/trending/movie/week?api_key=dd5685fc0c5640abc7ed586478a6ab70"
//       );
//       const data = await res.json();
//       dispatch(setContent(data.results));
//       dispatch(setStatus("Idle"));
//     } catch (err) {
//       dispatch(setStatus("npm install redux"));
//     }
//   };
// }

// //Thunk for TV

// export function fetchTvContent() {
//   return async function fetchContentThunk(dispatch, getState) {
//     dispatch(setStatus("Loading"));
//     try {
//       const res = await fetch(
//         "https://api.themoviedb.org/3/trending/tv/week?api_key=dd5685fc0c5640abc7ed586478a6ab70"
//       );
//       const data = await res.json();
//       dispatch(setContent(data.results));
//       dispatch(setStatus("Idle"));
//     } catch (err) {
//       dispatch(setStatus("Error"));
//     }
//   };
// }
