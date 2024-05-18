-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: pps_database
-- ------------------------------------------------------
-- Server version	8.4.0

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
  `Password` varchar(45) NOT NULL,
  `State` enum('Pending','Accepted','Rejected') NOT NULL,
  PRIMARY KEY (`CUIT`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
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
  `Password` varchar(45) NOT NULL,
  `State` enum('Pending','Accepted','Rejected') NOT NULL,
  PRIMARY KEY (`Legajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-17 21:00:48
