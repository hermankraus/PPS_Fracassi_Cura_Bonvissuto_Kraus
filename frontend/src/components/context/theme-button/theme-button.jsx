import { Button } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./theme-button.css";
import { useContext } from "react";
import { ThemeContext } from "../theme-context/theme-context";

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <Button
      variant="outline-dark"
      className={isDarkMode ? "dark button-context" : "light button-context"}
      onClick={handleThemeToggle}
      w={30}
      h={30}
      borderRadius="2rem"
      cursor="pointer"
    >
      <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
    </Button>
  );
};

export default ThemeButton;
