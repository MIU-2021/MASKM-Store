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
-- Table structure for table `ord_line_items`
--

DROP TABLE IF EXISTS `ord_line_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ord_line_items` (
  `ord_id` bigint NOT NULL,
  `line_items_id` bigint NOT NULL,
  UNIQUE KEY `UK_ko4ghe0a5ej0rlmjyxo7fvt71` (`line_items_id`),
  KEY `FKgusy1j2uygmhh746oiy176x94` (`ord_id`),
  CONSTRAINT `FKgusy1j2uygmhh746oiy176x94` FOREIGN KEY (`ord_id`) REFERENCES `ord` (`id`),
  CONSTRAINT `FKtl3ui44krjccii8tjk39vw0f4` FOREIGN KEY (`line_items_id`) REFERENCES `line_item` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ord_line_items`
--

LOCK TABLES `ord_line_items` WRITE;
/*!40000 ALTER TABLE `ord_line_items` DISABLE KEYS */;
INSERT INTO `ord_line_items` VALUES (100,101),(102,103),(102,104),(107,108),(107,109),(110,111),(110,112),(113,114),(113,115),(116,117),(116,118),(120,121),(122,123),(122,124),(125,126),(125,127),(128,129),(128,130),(141,142),(141,143),(163,164),(165,166),(170,171),(170,172),(173,174);
/*!40000 ALTER TABLE `ord_line_items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-08-14 13:17:54
