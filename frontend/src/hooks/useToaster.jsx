import { useToast } from "@chakra-ui/react";

const useToaster = () => {
  const toast = useToast();

  const successToast = (message) => {
    toast({
      title: "Success",
      description: message,
      status: "success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  const errorToast = (message) => {
    toast({
      title: "Error",
      description: message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  return { successToast, errorToast };
};

export default useToaster;
