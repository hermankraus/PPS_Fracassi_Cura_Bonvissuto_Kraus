import { useToast } from "@chakra-ui/react";

const useToaster = () => {
  const toast = useToast();

  const successToast = () => {
    toast({
      title: "",
      description: "",
      status: "Success",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  const errorToast = () => {
    toast({
      title: "",
      description: "",
      status: "Error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };

  return { successToast, errorToast };
};

export default useToaster;
