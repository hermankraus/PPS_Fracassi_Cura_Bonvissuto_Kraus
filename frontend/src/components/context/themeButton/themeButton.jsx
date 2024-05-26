import { Button } from "@chakra-ui/react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./themeButton.css";
import { useContext } from "react";
import { ThemeContext } from "../themeContext/themeContext";

const ThemeButton = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    toggleTheme();
  };

  return (
    <div>
      <div className={isDarkMode ? "dark" : "light"}></div>
      <Button
        variant="outline-dark"
        className="button-context"
        onClick={handleThemeToggle}
        w={30}
        h={30}
        borderRadius="2rem"
        cursor="pointer"
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </Button>
    </div>
  );
};

export default ThemeButton;
