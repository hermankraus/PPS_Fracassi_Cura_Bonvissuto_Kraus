# Proyecto Final 3TUP5

## Integrantes:
- Ezequias Bonvissuto
- Herman Kraus
- Marcelo Fracassi
- Azul Cura

### Sobre el Proyecto.
El proyecto nace a partir del relevamiento de la Bolsa de trabajo actual que tiene la UTN FRRO.
Aplicando las distintas herramientas que aprendimos durante el recorrido de la carrera, nos comprometimos a reestructurar la pagina de la Bolsa de trabajo, cumpliendo con los nuevos requerimientos y aplicando nuevos conceptos de _usabilidad_.
Durante el desarrollo, utilizamos la metodología __Scrum__, con _Springs_ de 15 días, el proyecto llego al nivel de produccion a finales del 8vo _Spring_.

### Tecnologías
- [Javascript],[ReactJs] Fueron el lenguaje y la libreria principal para el desarrollo en frontend.
  Para complementar el diseño UI de la pagina, se agregaron las librerias [Chakra] y [Framer Motions].
- [C#], [.NET], [Mysql] Fueron las 3 tecnologias principales que usamos en el back y la Bdd.
  Con el transcurso del desarrollo se agregaron dependencias, como [JWT],para el manejo de sesiones y roles de usuario.
  [MailKit], para enviar mails, a traves de programación reactiva entre otras dependencias mas tipicas y necesarias
  para conectarnos con la bdd [MySql]


### Instalación

1. Clonar el Repositorio.
```bash
git clone https://github.com/hermankraus/PPS_Fracassi_Cura_Bonvissuto_Kraus.git
```
2. Navegar al directorio del proyecto.
```bash
cd PPS_Fracassi_Cura_Bonvissuto_Kraus
```
3. Instalar dependencias
 - FrontEnd
 ```bash
 cd frontend
 ```
 ```bash
 npm install
 ```
 - BackEnd
 ```bash
 cd backend
 ```
 ```bash
 dotnet build
 ```
4. Levantar el proyecto.
- FrontEnd
```bash
 cd frontend
 ```
 ```bash
 npm run dev
 ```
- BackEnd
```bash
 cd backend
 ```
 ```bash
 dotnet run
 ```
