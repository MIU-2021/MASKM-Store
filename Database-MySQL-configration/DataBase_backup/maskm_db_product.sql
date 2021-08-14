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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint NOT NULL,
  `created_on` date DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `featured` bit(1) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `rating` double NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `product_category_id` bigint DEFAULT NULL,
  `seller_s_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKcwclrqu392y86y0pmyrsi649r` (`product_category_id`),
  KEY `FK41ftb3njjurjerd6nl4ivo0xi` (`seller_s_id`),
  CONSTRAINT `FK41ftb3njjurjerd6nl4ivo0xi` FOREIGN KEY (`seller_s_id`) REFERENCES `seller` (`s_id`),
  CONSTRAINT `FKcwclrqu392y86y0pmyrsi649r` FOREIGN KEY (`product_category_id`) REFERENCES `product_category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (5,'2021-08-14','Nike T-shirt slim fit for Men',_binary '\0','https://static.nike.com/a/images/t_PDP_1280_v1/f_auto/6e4b2c60-8c1c-44b1-bf35-f4b538b28e64/mens-t-shirt-93lL4G.png',36,0,'Pending','Nike T-shirt2',1,NULL),(18,'2021-08-12','this Shoes for girls ',_binary '\0','https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102',250,0,'Pending','Shoes Nike',1,2),(19,'2021-08-12','this Shoes for men',_binary '\0','https://s3.amazonaws.com/nikeinc/assets/84925/Sp19_BB_Nike_Adapt_20181218_NIKE0538_Detail5_rectangle_1600.jpg?1547068102',250,0,'Pending','Shoes Adidas',1,2),(42,'2021-08-13','Pants',_binary '\0','https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',20,0,'Pending','Pants',1,2),(94,'2021-08-13','Socks 100% Cotton ',_binary '\0','https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',500,0,'Pending','Socks',1,2),(105,'2021-08-13','Shirt 100% Cotton ',_binary '\0','https://www.google.tn/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',50,0,'Pending','Shirt',1,2),(148,'2021-08-13','T-Shirt 100% Cotton ',_binary '\0','https://lh3.googleusercontent.com/ogw/ADea4I66MfEPYHi8dzX2zjBywTmbBLBvU7pWR2T5gctwHbU=s83-c-mo',10,0,'Pending','T-Shirt',1,2),(155,'2021-08-13','for Girls',_binary '\0','https://review.chinabrands.com/chinabrands/seo/image/20181126/replica%20designer%20clothes%20uk.jpg',200,0,'Pending','Shoes',21,2),(156,'2021-08-13','Mens Clothes That Any Guy Would Love (1668)',_binary '\0','https://i.pinimg.com/originals/1c/e2/f5/1ce2f52461bc381f09edea1242f16f14.jpg',600,0,'Pending','Men Casual T-Shirt',21,2),(162,'2021-08-14','Male Suite',_binary '\0','https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyS20Ultra__1_.JPG',1800,0,'Pending','Suite',1,2);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
