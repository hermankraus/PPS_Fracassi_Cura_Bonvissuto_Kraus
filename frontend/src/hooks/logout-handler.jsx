import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";

export const useLogout = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef();

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  const onClose = () => setIsOpen(false);

  const confirmLogout = () => {
    setIsOpen(true);
  };

  const LogoutDialog = () => (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Cerrar Sesión
          </AlertDialogHeader>

          <AlertDialogBody>
            ¿Estás seguro de que deseas cerrar sesión?
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancelar
            </Button>
            <Button colorScheme="red" onClick={handleLogout} ml={3}>
              Cerrar Sesión
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );

  return { confirmLogout, LogoutDialog };
};
