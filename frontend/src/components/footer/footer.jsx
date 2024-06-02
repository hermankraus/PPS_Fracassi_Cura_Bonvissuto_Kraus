import "./footer.css";
import Chat from "../chat-bot/chat";
import { Container, Text, Box, Link } from "@chakra-ui/react";
import { ThemeContext } from "../context/theme-context/theme-context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterPage = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "light-mode-footer" : "footer-container"}>
      <Container p={5}>
        <Text>Derechos reservados &copy; PPS</Text>
        <Text>
          <Link
            cursor="pointer"
            textDecoration="none"
            to="https://www.frro.utn.edu.ar/"
            target="_blank"
            rel="noopener noreferrer"
            color="white"
            className="utn"
          >
            UTN | Universidad Tecnológica Nacional
          </Link>
        </Text>
        <Text>Zeballos 1341, S2000 Rosario, Santa Fe</Text>
        <Box cursor="pointer" className="emojis-social-media">
          <Link
            to="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            mr="1rem"
            className="facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link
            to="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
        </Box>
      </Container>
      <Container>
        <Chat />
        <p>Prueba</p>
      </Container>
    </div>
  );
};

export default FooterPage;
