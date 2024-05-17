import {
  Container,
  Stack,
  Text,
  Heading,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import "./Register.css";
import images from "../../../assets/constants/images";

const RegisterStudent = () => {
  return (
    <Container>
      <Box>
        <Stack>
          <Box
            justifyContent="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
            mt="1rem"
          >
            <Image
              src={images.logo}
              alt="Logo"
              w="14rem"
              h="4.5rem"
              p={0}
              mt={0}
            />
            <Heading>Registro de usuario bolsa de trabajo</Heading>
          </Box>
          <Container className="register-label-one">
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Apellido</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Documento de identidad</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Fecha de nacimiento</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
          </Container>
          <Container className="register-label-two">
            <FormControl>
              <FormLabel>Numero de telefono</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
            <FormControl>
              <Text>Seleccione el sexo</Text>
              <Checkbox isInvalid value="Masculino">
                Masculino
              </Checkbox>
              <Checkbox value="Femenino0">Femenino</Checkbox>
            </FormControl>
            <FormControl>
              <FormLabel>Domicilio en Rosario</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>CUIL o CUIT</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
          </Container>
          <Container className="register-label-three">
            <FormControl>
              <FormLabel>Legajo</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input className="custom-input" variant="filled" />
            </FormControl>
            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                className="custom-input"
                variant="filled"
                type="password"
              />
              <FormLabel>Repetir contraseña</FormLabel>
              <Input type="password" />
            </FormControl>
          </Container>
          {/* ME FALTA ARMAR EL SUBMIT */}
        </Stack>
      </Box>
    </Container>
  );
};

export default RegisterStudent;
