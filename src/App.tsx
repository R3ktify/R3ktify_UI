import { indigo } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import Footer from "./components/Footer/Footer";
import NavMenu from "./components/NavMenu/NavMenu";
import AppRoutes from "./routers";

const theme = createTheme({
  palette: {
    primary: {
      main: indigo["A400"],
      light: indigo["A200"],
      dark: indigo["A700"],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavMenu />
      <AppRoutes />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
