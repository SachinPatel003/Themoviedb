import { createTheme } from "@mui/material/styles";

const ThemeGlb = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
         body1{
             font-weight: 700 !important;
            font-size: "16px" !important ;
          }
          body2{
              color:gray;
              font-size: "20px" !important ;
          }
          span{
            border: 2px solid red;
            width:"100%" ;
            height:"400px";
          }.
        `,
    },
  },
});

export default ThemeGlb;
