
const statusObj = {
    status:"idle"
  };


  export const productStatus = (state = statusObj, action) => {
    if (action.type === "setStatus"){
        return { status: action.payload };
      }
 
    return state;
  };


  

