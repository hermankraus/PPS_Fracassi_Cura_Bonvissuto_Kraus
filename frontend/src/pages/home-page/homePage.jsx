import images from "../../assets/constants/images";
import { HStack, Image, Button, VStack, Container } from "@chakra-ui/react";
import "./homePage.css";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../components/context/themeContext/themeContext";
import { useContext, useEffect } from "react";
import { gettest } from "../../Axios/test-service";

export const HomePage = () => {
  /*ACA RECIBIMOS A TODOS LOS USUARIOS -> hay que agregar el boton de log ig que viaje al form de azu y un boton de registrarse*/
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handlerLogin = () => {
    navigate("/login");
  };

  const handlerRegister = () => {
    navigate("/register");
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await gettest();
        console.log(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <Container className="home-page">
        <Image src={images.logo} alt="Logo" w="14rem" h="4.5rem" p={0} mt={0} />
        <Button onClick={handlerLogin} className="home-page-button">
          Iniciar sesión
        </Button>
      </Container>

      <Container>
        <HStack>
          <img className="img" src={images.HomeImg3} alt="home-img" />
          <VStack className="home-page-body ">
            <h1>Bienvenido!</h1>
            <h4>
              Para poder facilitar el vinculo entre estudiantes universitarios y
              el sector empresarial se creó el Sistema Virtual de búsqueda de
              empleo para insertarse en el mundo laboral IT.
            </h4>
            <h4>
              Si no estás registrado, puedes{" "}
              <a onClick={handlerRegister}>registrarte aquí</a>
            </h4>
          </VStack>
        </HStack>
      </Container>
    </div>
  );
};
