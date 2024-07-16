import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./components/context/theme-context/theme-context";

import "./index.css";

import { AuthProvider } from "./components/context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ChakraProvider>
);
