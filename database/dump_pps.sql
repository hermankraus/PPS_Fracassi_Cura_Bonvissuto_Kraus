-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: pps_database
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `administrators`
--

DROP TABLE IF EXISTS `administrators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `administrators` (
  `Legajo` int NOT NULL,
  `email` varchar(130) NOT NULL,
  `password` varchar(256) NOT NULL,
  PRIMARY KEY (`Legajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `administrators`
--

LOCK TABLES `administrators` WRITE;
/*!40000 ALTER TABLE `administrators` DISABLE KEYS */;
INSERT INTO `administrators` VALUES (120120,'administrador@utn.com.ar','Admin123');
/*!40000 ALTER TABLE `administrators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careerjoboffer`
--

DROP TABLE IF EXISTS `careerjoboffer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `careerjoboffer` (
  `IdCarreer` int NOT NULL,
  `IdOffer` int NOT NULL,
  PRIMARY KEY (`IdCarreer`,`IdOffer`),
  KEY `FK_Carreer_IdOffer_idx` (`IdOffer`),
  CONSTRAINT `FK_Carreer_IdCarreer` FOREIGN KEY (`IdCarreer`) REFERENCES `careers` (`idCareers`),
  CONSTRAINT `FK_Carreer_IdOffer` FOREIGN KEY (`IdOffer`) REFERENCES `joboffer` (`idJobOffer`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careerjoboffer`
--

LOCK TABLES `careerjoboffer` WRITE;
/*!40000 ALTER TABLE `careerjoboffer` DISABLE KEYS */;
/*!40000 ALTER TABLE `careerjoboffer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `careers`
--

DROP TABLE IF EXISTS `careers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `careers` (
  `idCareers` int NOT NULL AUTO_INCREMENT,
  `nameCareers` varchar(70) NOT NULL,
  `InstitutionCareers` varchar(45) NOT NULL,
  `Type` enum('Grado','Tecnicatura') NOT NULL,
  `State` enum('Pending','Accepted','Rejected') NOT NULL,
  PRIMARY KEY (`idCareers`),
  UNIQUE KEY `UNIQUE` (`nameCareers`,`InstitutionCareers`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `careers`
--

LOCK TABLES `careers` WRITE;
/*!40000 ALTER TABLE `careers` DISABLE KEYS */;
INSERT INTO `careers` VALUES (1,'prueba','prueba','Tecnicatura','Pending'),(2,'222','222','Grado','Pending'),(3,'111','1222','Tecnicatura','Pending'),(4,'444','444','Grado','Pending'),(5,'5','5','Grado','Pending'),(6,'6','6','Grado','Pending'),(7,'7','7','Grado','Accepted'),(8,'asdasd','asddas','Grado','Accepted'),(9,'a','a','Grado','Accepted');
/*!40000 ALTER TABLE `careers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `CUIT` varchar(11) NOT NULL,
  `CompanyName` varchar(45) NOT NULL,
  `BusinessName` varchar(45) NOT NULL,
  `Address` varchar(100) NOT NULL,
  `ContactEmail` varchar(45) NOT NULL,
  `ContactPhone` varchar(45) DEFAULT NULL,
  `Website` varchar(100) DEFAULT NULL,
  `Type` varchar(45) DEFAULT NULL,
  `NumberOfEmployees` int DEFAULT NULL,
  `Password` varchar(256) NOT NULL,
  `State` enum('Pending','Accepted','Rejected') NOT NULL,
  PRIMARY KEY (`CUIT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES ('12346789','Prueba','Prueba','Prueba123','prueba@gmail.com',NULL,NULL,NULL,NULL,'iqARBnZ2PkSMCrkiB02tXg==;guUawXI4jsdSTNTD0o3OlBZjnZ1jv3smRLvj5XHyDVo=','Pending'),('22408681499','Test SRL','Test','testing 123','test@test.com',NULL,NULL,NULL,NULL,'XPD6OpVjhvylNF4QKTVjEQ==;kNDaBK3wky/HMox4CzvEwFcxkcJiNyl4OH8qdkf7gNU=','Accepted'),('30498681499','Ezequias SRL','Ezequias SRL','Balcarce 15','ezequias@gmail.com',NULL,NULL,NULL,NULL,'YItX3d2CBqTiYukCvABtSw==;kPacfHXCEWvyFcZ95ja1oEsQg6w25Ue6BPq5kP/zPb4=','Pending'),('30653813402','NCA Nuevo Central Argentino SA','Nuevo Central Argentino SA','Av. Alberdi 50 bis','info@nca.com.ar',NULL,NULL,NULL,NULL,'ORrBZ/vDwGixQmC67pNYfw==;MtHNxCDOQbJNBCjryZfavpU4m+i+dVmrEAzI55XIkQg=','Pending');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `joboffer`
--

DROP TABLE IF EXISTS `joboffer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `joboffer` (
  `idJobOffer` int NOT NULL AUTO_INCREMENT,
  `ContractType` enum('internship','work') NOT NULL,
  `EmploymentType` enum('fulltime','parttime') NOT NULL,
  `WorkLocation` enum('remote','onsite','hybrid') NOT NULL,
  `Description` varchar(500) NOT NULL,
  `cuitcompany` varchar(45) NOT NULL,
  `State` enum('inprogress','finalized') NOT NULL,
  `finallydate` date DEFAULT NULL,
  `WorkPlace` varchar(45) NOT NULL,
  `MinSubjects` int DEFAULT NULL,
  `EstimatedDate` date DEFAULT NULL,
  `InternshipDuration` varchar(45) DEFAULT NULL,
  `Title` varchar(45) NOT NULL,
  PRIMARY KEY (`idJobOffer`),
  KEY `FK_JobOffer_Companies_idx` (`cuitcompany`),
  CONSTRAINT `FK_JobOffer_Companies` FOREIGN KEY (`cuitcompany`) REFERENCES `company` (`CUIT`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `joboffer`
--

LOCK TABLES `joboffer` WRITE;
/*!40000 ALTER TABLE `joboffer` DISABLE KEYS */;
INSERT INTO `joboffer` VALUES (1,'internship','fulltime','remote','1','12346789','inprogress','2024-06-08','111',0,'2024-06-08','111','FALOPA'),(3,'internship','fulltime','remote','Pepito','30653813402','inprogress','2025-06-22','Casita',2,'2025-06-22','3 months','ANALISTA');
/*!40000 ALTER TABLE `joboffer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offerskills`
--

DROP TABLE IF EXISTS `offerskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offerskills` (
  `idJobOffer` int NOT NULL,
  `idSkills` int NOT NULL,
  PRIMARY KEY (`idJobOffer`,`idSkills`),
  KEY `FK_Skills_idSkills_idx` (`idSkills`),
  CONSTRAINT `FK_JobOffer_OfferSkill` FOREIGN KEY (`idJobOffer`) REFERENCES `joboffer` (`idJobOffer`),
  CONSTRAINT `FK_Skills_idSkills` FOREIGN KEY (`idSkills`) REFERENCES `skills` (`idSkills`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offerskills`
--

LOCK TABLES `offerskills` WRITE;
/*!40000 ALTER TABLE `offerskills` DISABLE KEYS */;
/*!40000 ALTER TABLE `offerskills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `idSkills` int NOT NULL AUTO_INCREMENT,
  `descriptionSkills` varchar(45) NOT NULL,
  `State` enum('Pending','Accepted','Rejected') NOT NULL,
  PRIMARY KEY (`idSkills`),
  UNIQUE KEY `descriptionSkills_UNIQUE` (`descriptionSkills`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (1,'ReactJs','Accepted'),(2,'Tableau','Accepted');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `Legajo` int NOT NULL,
  `DocumentType` enum('DNI','LC','LE','PS') NOT NULL,
  `DocumentNumber` varchar(45) NOT NULL,
  `Name` varchar(45) NOT NULL,
  `LastName` varchar(45) NOT NULL,
  `PhoneNumber` varchar(45) DEFAULT NULL,
  `CellPhoneNumber` varchar(45) DEFAULT NULL,
  `Address` varchar(45) DEFAULT NULL,
  `AddressNumber` int DEFAULT NULL,
  `Floor` int DEFAULT NULL,
  `Flat` varchar(45) DEFAULT NULL,
  `Country` varchar(45) DEFAULT NULL,
  `Province` varchar(45) DEFAULT NULL,
  `City` varchar(45) DEFAULT NULL,
  `DateOfBirth` datetime DEFAULT NULL,
  `MaritalStatus` varchar(45) DEFAULT NULL,
  `CUIL` varchar(45) NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `Career` varchar(45) DEFAULT NULL,
  `ApprovedSubjects` int DEFAULT NULL,
  `AverageWithFails` float DEFAULT NULL,
  `AverageWithoutFails` float DEFAULT NULL,
  `YearOfStudy` int DEFAULT NULL,
  `Turn` varchar(45) DEFAULT NULL,
  `CurriculumPlan` varchar(45) DEFAULT NULL,
  `YearOfEntry` int DEFAULT NULL,
  `Biography` varchar(300) DEFAULT NULL,
  `SecondaryTitle` varchar(45) DEFAULT NULL,
  `GithubUrl` varchar(150) DEFAULT NULL,
  `LinkedUrl` varchar(150) DEFAULT NULL,
  `Email` varchar(45) NOT NULL,
  `Password` varchar(256) NOT NULL,
  `State` enum('Pending','Accepted','Rejected') NOT NULL,
  PRIMARY KEY (`Legajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1762,'DNI','36490136','Agustin','Marotta',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'23364901366','Masculino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'agumarota@gmail.com','Hy3hcG8mc3/F5GyD5ESXag==;U7MnDmx5+twi2D0V48jERY3G1lKDAhrsN+BBqL996u8=','Accepted'),(23123,'DNI','35123123','Marcelo','Fracassi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'35123123333','Masculino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'Fracassimarcelo@gmail.com','oPEzApcnd4fK05rC3QNHCg==;41Bv/TwTfiaPuzMu4M6+/+d9M5apTOK3BjPeXOq7NWQ=','Accepted'),(49968,'DNI','40868149','test123','test',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'23408681499','Masculino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'password@Test123.com','vwBt2HxmTdnIJYO2/gNaTg==;lJWV+Mctlg9NoHUVHxXa1ktVkf5TzT255TIpBkQG4ZY=','Accepted'),(49969,'DNI','40868149','Ezequias','Bonvissuto',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'23408681499','Masculino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'ezequiasbonvissuto@gmail.com','dpKPsb3ZactCxWNL/J/ZVw==;81+bZy3jXsBoBxog3gbFvKhuPpCR5B09GQYNYMUZ6lk=','Pending'),(49990,'DNI','41635165','herman','kraus','03329599929','03329599929','Balcarce',1235,12,'12','Argentina','Santa','Rosario',NULL,'Soltero','20416351652','Masculino','TUP',11,10,7,2021,'1','2014',2021,'asdasdasdas','Tecnico mecanico','https://github.com/hermankraus/PPS_Fracassi_Cura_Bonvissuto_Kraus','https://linkedin.com/herman','herman@asd.com','Ud4iqkTVG/1czlgW6dRvLA==;Z8zhRH/Bc2FGjaf5G/CxSzyI15Z01chVlT+YuTftgzI=','Accepted'),(50001,'DNI','42123123','Azul','Cura',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'23421231233','Femenino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'azututurrita@gmail.com','2odvF4i+tjje0FdXUPuFtA==;o0p/9YnEw4d279NyX2Cr3ha+2/277sGGhlMYXXmdFZU=','Accepted'),(50002,'DNI','40123123','Renzo','Timpanaro',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'4012312333','Masculino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'renzotimpa@gmail.com','yjY9keWn8Ws2/H+Z3EkkOw==;6xPKJC6PVZI5j25j7m+dnxg1zJ6rIL/uCcjtXTXP060=','Rejected'),(50032,'DNI','42545122','Azul','Cura',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'42545122222','Femenino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'azulcura1@gmail.com','1PlpAH1zJ7eTOIua5iUqdg==;JGIE/tbhMwjKpe2Dx1tP/5MKCd2W7nMw34Qd08xQh+U=','Rejected'),(68149,'DNI','42868149','Hermna','Krauss',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'42868149999','Masculino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'hermankraus111@gmail.com','HSCZu5f/Wp3bpUI6JwxaFA==;Dx7YdVML3tpzK6MqIXbtxDwJqG+wIjAiYQPGQqUB/eE=','Rejected'),(222222,'LC','408681492','test','test1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'234086814992','Masculino',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'test@gmail.com','mtkZx9ZHVi3D8gV53NbnQw==;HDtrUz48J2yowLW1Y5H1cAfIc+yXL5GFRgIuSii49po=','Pending');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentscareers`
--

DROP TABLE IF EXISTS `studentscareers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentscareers` (
  `idStudents` int NOT NULL,
  `idCareers` int NOT NULL,
  `enrollmentDate` date NOT NULL,
  `graduationDate` date DEFAULT NULL,
  `isComplete` enum('YES','NO') NOT NULL,
  PRIMARY KEY (`idStudents`,`idCareers`),
  KEY `StudentsCareers_idCareers_idx` (`idCareers`),
  CONSTRAINT `StudentsCareers_idCareers` FOREIGN KEY (`idCareers`) REFERENCES `careers` (`idCareers`),
  CONSTRAINT `StudentsCareers_idStudents` FOREIGN KEY (`idStudents`) REFERENCES `student` (`Legajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentscareers`
--

LOCK TABLES `studentscareers` WRITE;
/*!40000 ALTER TABLE `studentscareers` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentscareers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentsexperience`
--

DROP TABLE IF EXISTS `studentsexperience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentsexperience` (
  `idStudentsExperience` int NOT NULL AUTO_INCREMENT,
  `idStudents` int NOT NULL,
  `description` varchar(150) NOT NULL,
  `company` varchar(45) NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date DEFAULT NULL,
  `IdSkills` int DEFAULT NULL,
  PRIMARY KEY (`idStudentsExperience`),
  KEY `StudentsExperiencie_IdStudents_idx` (`idStudents`),
  KEY `StudentsExperiencie_IdSkills_idx` (`IdSkills`),
  CONSTRAINT `StudentsExperiencie_IdSkills` FOREIGN KEY (`IdSkills`) REFERENCES `skills` (`idSkills`),
  CONSTRAINT `StudentsExperiencie_IdStudents` FOREIGN KEY (`idStudents`) REFERENCES `student` (`Legajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentsexperience`
--

LOCK TABLES `studentsexperience` WRITE;
/*!40000 ALTER TABLE `studentsexperience` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentsexperience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentsjoboffers`
--

DROP TABLE IF EXISTS `studentsjoboffers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentsjoboffers` (
  `idJobOffers` int NOT NULL,
  `idStudents` int NOT NULL,
  PRIMARY KEY (`idJobOffers`,`idStudents`),
  KEY `StudentsJobOffersIdStudents_idx` (`idStudents`),
  CONSTRAINT `StudentsJobOffersIdJobOffers` FOREIGN KEY (`idJobOffers`) REFERENCES `joboffer` (`idJobOffer`),
  CONSTRAINT `StudentsJobOffersIdStudents` FOREIGN KEY (`idStudents`) REFERENCES `student` (`Legajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentsjoboffers`
--

LOCK TABLES `studentsjoboffers` WRITE;
/*!40000 ALTER TABLE `studentsjoboffers` DISABLE KEYS */;
INSERT INTO `studentsjoboffers` VALUES (3,49968),(1,49969),(3,49969),(3,50001);
/*!40000 ALTER TABLE `studentsjoboffers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentsskills`
--

DROP TABLE IF EXISTS `studentsskills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `studentsskills` (
  `idStudents` int NOT NULL,
  `idSkills` int NOT NULL,
  PRIMARY KEY (`idStudents`,`idSkills`),
  KEY `StudentsSkills_idSkills_idx` (`idSkills`),
  CONSTRAINT `StudentsSkills_idSkills` FOREIGN KEY (`idSkills`) REFERENCES `skills` (`idSkills`),
  CONSTRAINT `StudentsSkills_idStudents` FOREIGN KEY (`idStudents`) REFERENCES `student` (`Legajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentsskills`
--

LOCK TABLES `studentsskills` WRITE;
/*!40000 ALTER TABLE `studentsskills` DISABLE KEYS */;
/*!40000 ALTER TABLE `studentsskills` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-27 18:33:23
