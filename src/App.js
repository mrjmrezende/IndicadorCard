import React from "react";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline, StyledEngineProvider } from "@material-ui/core";

// routing
import Dashboard from "./views/dashboard/default";

// defaultTheme
import theme from "./themes";

// project imports

//-----------------------|| APP ||-----------------------//

const App = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme(customization)}>
        <CssBaseline />
        <Dashboard />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
