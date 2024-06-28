import React, { useContext, useState } from 'react';
import { HStack, Image, Link, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import images from '../../assets/constants/images';
import { RxDropdownMenu } from "react-icons/rx";
import { FaWindowClose } from "react-icons/fa";
import './navbar.css';
import { useLogout } from '../../hooks/logout-handler';
import { ThemeContext } from '../../components/context/theme-context/theme-context';
import AnimatedButton from '../../shared/button';

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
        <AnimatedButton
          color="black"
          minW="10rem"
          minH="1rem"
          onClick={confirmLogout}
          cursor="pointer">
          Cerrar Sesión
        </AnimatedButton>
      </HStack>
      <LogoutDialog />
    </>
  );
};


export const NavbarUser = () => {
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
        hideBelow="1200px"
      >
        <Image
          src={images.logo}
          className='image'
          alt="Logo"
          w="14rem"
          h="4.5rem"
          mr="12rem"
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
        <AnimatedButton
          color="black"
          minW="10rem"
          minH="1rem"
          ml="9rem"
          onClick={confirmLogout}
          cursor="pointer">
          Cerrar Sesión
        </AnimatedButton>
      </HStack>

      <HStack hideFrom="1200px" justifyContent="center" alignContent="center" mt="2rem" p="0.5rem" boxShadow="md">
        <RxDropdownMenu
          alt="Emoji Navbar"
          size="4rem"
          onClick={handleEmojiNavbarClick}
          cursor="pointer"
          ml="5rem"
          className='emoji'
        />
        <Image
          src={images.logo}
          className='image'
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
          boxShadow="md"
          p={4}
          display={{ base: 'flex', lg: 'none' }}
          className={`navbar ${isDarkMode ? 'dark' : 'light'}`}
        >
          <FaWindowClose
            size="2rem"
            onClick={handleEmojiNavbarClick}
            cursor="pointer"
          />
          <Image
            src={images.logo}
            className='image'
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
          <AnimatedButton
            color="black"
            minW="10rem"
            minH="1rem"
            onClick={confirmLogout}
            cursor="pointer">
            Cerrar Sesión
          </AnimatedButton>
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
          className='image'
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
        }}>
          Oportunidades Laborales
        </Link>
        <Link ml="1rem" onClick={() => {
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
        <AnimatedButton
          color="black"
          minW="10rem"
          minH="1rem"
          ml="9rem"
          onClick={confirmLogout}
          cursor="pointer">
          Cerrar Sesión
        </AnimatedButton>
      </HStack>

      <HStack
        hideFrom="1020px"
        justifyContent="center"
        alignContent="center"
        mt="2rem"
        p="0.5rem"
        boxShadow="xl">
        <RxDropdownMenu
          alt="Emoji Navbar"
          size="4rem"
          onClick={handleEmojiNavbarClick}
          cursor="pointer"
          ml="5rem"
          className='emoji'
        />

        <Image
          src={images.logo}
          className='image'
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
          boxShadow="md"
          p={4}
          display={{ base: 'flex', lg: 'none' }}
          className={`navbar ${isDarkMode ? 'dark' : 'light'}`}
        >
          <FaWindowClose
            size="2rem"
            onClick={handleEmojiNavbarClick}
            cursor="pointer"
          />
          <Image
            src={images.logo}
            className='image'
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
          <AnimatedButton
            color="black"
            minW="10rem"
            minH="1rem"
            onClick={confirmLogout}
            cursor="pointer">
            Cerrar Sesión
          </AnimatedButton>
        </VStack>
      )}
      <LogoutDialog />
    </>
  );
};
