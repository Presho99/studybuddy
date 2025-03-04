import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffc64f", // Golden Yellow
    },
    secondary: {
      main: "#43533d", // Dark Green
    },
    background: {
      default: "#fff", // White Background
      paper: "#f5f5f5", // Light Grey for Cards
    },
    text: {
      primary: "#1f2b1a", // Deep Green for Text
      secondary: "#43533d", // Darker text color
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px", // Rounded buttons
          textTransform: "none", // No uppercase text
        },
      },
    },
  },
});

export default theme;
