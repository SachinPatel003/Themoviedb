
const productiState = {
    products: []
  };


  export const productReducer = (state = productiState, action) => {
    if (action.type === "setItem") {
      return { products: action.payload };
    }
    return state;
  };


  


// switch case

// const productiState = {
//   products: []
// };

// export const productReducer = (state = productiState, action) => {
//   console.log('===', state, action )
//   switch (action.type) {
//     case "setMovie":
//       return {
//         products: action.payload, 
//       };
//     default:
//       return state;
//   }
// };
