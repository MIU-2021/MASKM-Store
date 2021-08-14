-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: localhost    Database: maskm_db
-- ------------------------------------------------------
-- Server version	8.0.26

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
-- Table structure for table `ord`
--

DROP TABLE IF EXISTS `ord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ord` (
  `id` bigint NOT NULL,
  `created_on` datetime DEFAULT NULL,
  `order_paid` bit(1) DEFAULT NULL,
  `price` double NOT NULL,
  `buyer_b_id` bigint DEFAULT NULL,
  `order_status` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2kq4cjo79k4kgxo2qamidwaws` (`buyer_b_id`),
  CONSTRAINT `FK2kq4cjo79k4kgxo2qamidwaws` FOREIGN KEY (`buyer_b_id`) REFERENCES `buyer` (`b_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ord`
--

LOCK TABLES `ord` WRITE;
/*!40000 ALTER TABLE `ord` DISABLE KEYS */;
INSERT INTO `ord` VALUES (100,'2021-08-13 00:00:00',_binary '\0',500,12,'Shipped'),(102,'2021-08-13 00:00:00',_binary '\0',536,12,'Cancelled'),(107,'2021-08-13 00:00:00',_binary '\0',394,12,'Cancelled'),(110,'2021-08-13 00:00:00',_binary '\0',536,12,'Cancelled'),(113,'2021-08-13 00:00:00',_binary '\0',86,12,'Pending'),(116,'2021-08-13 00:00:00',_binary '\0',290,12,'Pending'),(120,'2021-08-13 00:00:00',_binary '\0',20,12,'Pending'),(122,'2021-08-13 00:00:00',_binary '\0',536,12,'Pending'),(125,'2021-08-13 00:00:00',_binary '\0',536,12,'Pending'),(128,'2021-08-13 00:00:00',_binary '\0',536,12,'Cancelled'),(141,'2021-08-13 00:00:00',_binary '\0',536,12,'Pending'),(163,'2021-08-14 00:00:00',_binary '\0',250,12,'Pending'),(165,'2021-08-14 00:00:00',_binary '\0',600,12,'Pending'),(170,'2021-08-14 00:00:00',_binary '\0',1700,12,'Pending'),(173,'2021-08-14 00:00:00',_binary '\0',250,12,'Cancelled');
/*!40000 ALTER TABLE `ord` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-14 13:17:53
