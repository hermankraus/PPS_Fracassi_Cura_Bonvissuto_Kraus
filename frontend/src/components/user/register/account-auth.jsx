import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const AccountAuth = () => {
  const navigate = useNavigate();
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Hemos recibido tu registro,
        Tu cuenta esta pendiente de aprobacion por nuestro equipo.
        Te notificaremos por correo electronico una vez que haya sido aprobada.
      </h1>
      <p style={{ fontSize: "1.2rem" }}>
        Gracias por confiar en nuestra plataforma.
      </p>
      <Button 
      fontSize={16}
      minW="8rem"
      minH="2rem"
      borderRadius={6}
      bg="#265171"
      color="white"
      onClick={() => navigate("/")}
      mr="1rem"
      mb="1rem"
      cursor="pointer">Home</Button>
    </div>
  );
};

export default AccountAuth;
