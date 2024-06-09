import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

const Chat = () => {
  const style = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "EF6C00",
    headerFontColor: "blue",
    headerFontSize: "12px",
    botBubbleColor: "rgba(38, 81, 113)",
    botFontColor: "#fff",
    userBubbleColor: "rgba(38, 81, 113)",
    userFontColor: "#4a4a4a",
  };
  const navigate = useNavigate();

  const steps = [
    {
      id: "1",
      message:
        "Hola! Estoy aquí para ayudarte. Puedes elegir una de las siguientes opciones:",
      trigger: "2",
    },
    {
      id: "2",
      options: [
        { value: 1, label: "Cuenta Empresa", trigger: "3" },
        { value: 2, label: "Cuenta Alumno", trigger: "4" },
        { value: 3, label: "Publicar ofertas laborales", trigger: "5" },
        { value: 4, label: "Postular a ofertas laborales", trigger: "6" },
        { value: 6, label: "Otros", trigger: "8" },
      ],
    },
    {
      id: "3",
      message:
        "Para crear una cuenta empresa, por favor, haga clic en 'Presionar aquí'.",
      trigger: "3.1",
    },
    {
      id: "3.1",
      options: [
        {
          value: 1,
          label: "Presionar aquí",
          trigger: () => {
            navigate("/register");
            return "9";
          },
        },
      ],
    },
    {
      id: "4",
      message:
        "Para crear una cuenta estudiante, por favor, haga clic en 'Presionar aquí'.",
      trigger: "4.1",
    },
    {
      id: "4.1",
      options: [
        {
          value: 1,
          label: "Presionar aquí",
          trigger: () => {
            navigate("/register");
            return "9";
          },
        },
      ],
    },
    {
      id: "5",
      message:
        "Para publicar ofertas laborales, por favor, haga clic en 'Presionar aquí'.",
      trigger: "5.1",
    },
    {
      id: "5.1",
      options: [
        {
          value: 1,
          label: "Presionar aquí",
          trigger: () => {
            navigate("/register");
            return "9";
          },
        },
      ],
    },
    {
      id: "6",
      message: "Mensaje para el paso 6",
      trigger: "9",
    },
    {
      id: "8",
      message:
        "Para mas informacion comunicarse via email a bolsadetrabajo@utn.com.ar",
      trigger: "9",
    },
    {
      id: "9",
      message: "Tiene otra consulta?",
      trigger: "10",
    },
    {
      id: "10",
      options: [
        { value: 1, label: "Si", trigger: "11" },
        { value: 2, label: "No", trigger: "12" },
      ],
    },
    {
      id: "11",
      message:
        "¿En qué área necesitas información? Puedes elegir una de las siguientes opciones:",
      trigger: "2",
    },
    {
      id: "12",
      message: "Chau!",
      trigger: "13",
    },
    {
      id: "13",
      message: "Cerrando chat",
      end: true,
    },
  ];

  const [opened, setOpened] = useState(true);

  const handlerChat = () => {
    if (opened) {
      setOpened(false);
      setTimeout(() => {
        setOpened(true);
      }, 1);
    }
  };

  return (
    <ThemeProvider theme={style}>
      <div className="chat">
        {opened && (
          <ChatBot
            handleEnd={handlerChat}
            steps={steps}
            floating={true}
            userAvatar="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            botAvatar="https://cdn0.iconfinder.com/data/icons/artificial-intelligence-and-machine-learning-glyph/48/AI-Icon-17-512.png"
          />
        )}
      </div>
    </ThemeProvider>
  );
};

export default Chat;
