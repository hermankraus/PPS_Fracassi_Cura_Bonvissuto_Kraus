import { useToast } from "@chakra-ui/react";

const useToaster = () => {
  const toast = useToast();

  const successToast = () => {
    toast({
      title: "ACA TOASTER A EDITAR",
      description: "ACA TOASTER A EDITAR",
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  const errorToast = () => {
    toast({
      title: "ACA TOASTER A EDITAR",
      description: "ACA TOASTER A EDITAR",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  return { successToast, errorToast };
};

export default useToaster;
