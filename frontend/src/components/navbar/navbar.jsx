import React, { useContext, useState } from 'react';
import { HStack, Image, Text, Link, Box, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/constants/images';
import './navbar.css';
import { useLogout } from '../../hooks/logout-handler';
import { ThemeContext } from '../../components/context/theme-context/theme-context';

export const NavbarAdmin = () => {
  const navigate = useNavigate();
  const { confirmLogout, LogoutDialog } = useLogout();
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <>
      <HStack className={`navbar ${isDarkMode ? 'dark' : 'light'}`}
        p={2}
        overflowX="auto"
        minW="full"
      >
        <Image src={images.logo} alt="Logo" w="8rem" h="4rem" />
        <Link onClick={() => navigate('/admin/student')} ml="2rem">
          Información de los estudiantes
        </Link>
        <Link onClick={() => navigate('/admin/company')} ml="2rem">
          Información de las empresas
        </Link>
        <Link onClick={() => navigate('/admin/skill')} ml="2rem">
          Añadir habilidades
        </Link>
        <Link onClick={() => navigate('/admin/career')} ml="2rem">
          Añadir carreras universitarias
        </Link>
        <Box ml="auto" onClick={confirmLogout} cursor="pointer">
          <Text>Cerrar Sesión</Text>
        </Box>
      </HStack>
      <LogoutDialog />
    </>
  );
};


export const NavbarUser = () => {
  const navigate = useNavigate();
  const { confirmLogout, LogoutDialog } = useLogout();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleEmojiNavbarClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <HStack
        className={`navbar`}
        p={2}
        overflowX="auto"
        minW="full"
        hideBelow="1200px"
      >
        <Image
          src={images.logo}
          alt="Logo"
          w="14rem"
          h="4.5rem"
          p={0}
          cursor="pointer"
          onClick={() => {
            navigate('/student/my-profile');
            setIsMenuVisible(false);
          }}
        />
        <Link onClick={() => {
          navigate('/student/oportunities');
          setIsMenuVisible(false);
        }} ml="2rem">
          Oportunidades Laborales
        </Link>
        <Link onClick={() => {
          navigate('/student/postulations');
          setIsMenuVisible(false);
        }} ml="2rem">
          Mis Postulaciones
        </Link>
        <Link onClick={() => {
          navigate('/student/my-profile');
          setIsMenuVisible(false);
        }} ml="2rem">
          Mi Perfil
        </Link>
        <Box ml="auto" onClick={confirmLogout} cursor="pointer">
          <Text>Cerrar Sesión</Text>
        </Box>
      </HStack>

      <HStack hideFrom="1200px" justifyContent="center" alignContent="center" mt="2rem" p="0.5rem" boxShadow="md">
        <Image
          src={images.emojiNavbar}
          alt="Emoji Navbar"
          w="3rem"
          h="3rem"
          onClick={handleEmojiNavbarClick}
          cursor="pointer"
          ml="5rem"
        />
        <Image
          src={images.logo}
          alt="Logo"
          w="14rem"
          h="4.5rem"
          p={0} />
      </HStack>
      {isMenuVisible && (
        <VStack
          pos="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="99"
          bg="white"
          boxShadow="md"
          p={4}
          display={{ base: 'flex', lg: 'none' }}
        >
          <Image
            src={images.emojiNavbar}
            alt="Emoji Navbar"
            w="3rem"
            h="3rem"
            onClick={handleEmojiNavbarClick}
            cursor="pointer"
          />
          <Image
            src={images.logo}
            alt="Logo"
            w="14rem"
            h="4.5rem"
            p={0}
            cursor="pointer"
            onClick={() => {
              navigate('/student/my-profile');
              setIsMenuVisible(false);
            }}
          />
          <Link onClick={() => {
            navigate('/student/oportunities');
            setIsMenuVisible(false);
          }} >
            Oportunidades Laborales
          </Link>
          <Link onClick={() => {
            navigate('/student/postulations');
            setIsMenuVisible(false);
          }} >
            Mis Postulaciones
          </Link>
          <Link onClick={() => {
            navigate('/student/my-profile');
            setIsMenuVisible(false);
          }} >
            Mi Perfil
          </Link>
          <Text onClick={confirmLogout} cursor="pointer">Cerrar Sesión</Text>
        </VStack>
      )}
      <LogoutDialog />
    </>
  );
};

export const NavbarCompany = () => {
  const navigate = useNavigate();
  const { confirmLogout, LogoutDialog } = useLogout();
  const { isDarkMode } = useContext(ThemeContext);

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleEmojiNavbarClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <HStack
        className={`navbar ${isDarkMode ? 'dark' : 'light'}`}
        p={2}
        overflowX="auto"
        minW="full"
        hideBelow="1020px"
      >
        <Image
          src={images.logo}
          alt="Logo"
          mr="10rem"
          w="14rem"
          h="4.5rem"
          p={0}
          cursor="pointer"
          onClick={() => {
            navigate('/company/my-profile');
            setIsMenuVisible(false);
          }}
        />
        <Link onClick={() => {
          navigate('/company/oportunities');
          setIsMenuVisible(false);
        }} ml="2rem">
          Oportunidades Laborales
        </Link>
        <Link onClick={() => {
          navigate("/company/postulations"
          );
          setIsMenuVisible(false);
        }} >
          Postulaciones
        </Link>
        <Link onClick={() => {
          navigate('/company/my-profile');
          setIsMenuVisible(false);
        }} ml="2rem">
          Mi Perfil
        </Link>
        <Box ml="auto" onClick={confirmLogout} cursor="pointer">
          <Text>Cerrar Sesión</Text>
        </Box>
      </HStack>

      <HStack
        hideFrom="1020px"
        justifyContent="center"
        alignContent="center"
        mt="2rem"
        p="0.5rem"
        boxShadow="xl">
        <Image
          src={images.emojiNavbar}
          alt="Emoji Navbar"
          w="3rem"
          h="3rem"
          onClick={handleEmojiNavbarClick}
          cursor="pointer"
          ml="5rem"
        />
        <Image
          src={images.logo}
          alt="Logo"
          w="14rem"
          h="4.5rem"
          p={0} />
      </HStack>
      {isMenuVisible && (
        <VStack
          pos="absolute"
          top="0"
          left="0"
          right="0"
          zIndex="99"
          bg="white"
          boxShadow="md"
          p={4}
          display={{ base: 'flex', lg: 'none' }}
        >
          <Image
            src={images.emojiNavbar}
            alt="Emoji Navbar"
            w="3rem"
            h="3rem"
            onClick={handleEmojiNavbarClick}
            cursor="pointer"
          />
          <Image
            src={images.logo}
            alt="Logo"
            w="14rem"
            h="4.5rem"
            p={0}
            cursor="pointer"
            onClick={() => {
              navigate('/company/my-profile');
              setIsMenuVisible(false);
            }}
          />
          <Link onClick={() => {
            navigate('/company/oportunities');
            setIsMenuVisible(false);
          }} >
            Oportunidades Laborales
          </Link>
          <Link onClick={() => {
            navigate("/company/postulations"
            );
            setIsMenuVisible(false);
          }} >
            Postulaciones
          </Link>
          <Link onClick={() => {
            navigate('/company/my-profile');
            setIsMenuVisible(false);
          }} >
            Mi Perfil
          </Link>
          <Text onClick={confirmLogout} cursor="pointer">Cerrar Sesión</Text>
        </VStack>
      )}
      <LogoutDialog />
    </>
  );
};
