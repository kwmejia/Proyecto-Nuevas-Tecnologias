-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: veterinariadali
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `citas`
--

DROP TABLE IF EXISTS `citas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `citas` (
  `cit_id` int NOT NULL AUTO_INCREMENT,
  `cit_fecha` date NOT NULL,
  `cit_estado` int DEFAULT NULL,
  `medico_med_id` int NOT NULL,
  `servicio_ser_id` int NOT NULL,
  `mascotas_mas_id` int NOT NULL,
  `sede_sed_id` int NOT NULL,
  PRIMARY KEY (`cit_id`),
  KEY `fk_citas_medico1_idx` (`medico_med_id`),
  KEY `fk_citas_servicio1_idx` (`servicio_ser_id`),
  KEY `fk_citas_mascotas1_idx` (`mascotas_mas_id`),
  KEY `fk_citas_sede1_idx` (`sede_sed_id`),
  CONSTRAINT `fk_citas_mascotas1` FOREIGN KEY (`mascotas_mas_id`) REFERENCES `mascotas` (`mas_id`),
  CONSTRAINT `fk_citas_medico1` FOREIGN KEY (`medico_med_id`) REFERENCES `medico` (`med_id`),
  CONSTRAINT `fk_citas_sede1` FOREIGN KEY (`sede_sed_id`) REFERENCES `sede` (`sed_id`),
  CONSTRAINT `fk_citas_servicio1` FOREIGN KEY (`servicio_ser_id`) REFERENCES `servicio` (`ser_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `citas`
--

LOCK TABLES `citas` WRITE;
/*!40000 ALTER TABLE `citas` DISABLE KEYS */;
/*!40000 ALTER TABLE `citas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `cli_id` int NOT NULL AUTO_INCREMENT,
  `cli_nombre` varchar(45) DEFAULT NULL,
  `cli_nit` varchar(45) NOT NULL,
  `cli_direccion` varchar(100) DEFAULT NULL,
  `cli_correo` varchar(100) NOT NULL,
  `cli_telefono` varchar(13) DEFAULT NULL,
  PRIMARY KEY (`cli_id`),
  UNIQUE KEY `cli_nit_UNIQUE` (`cli_nit`),
  UNIQUE KEY `cli_correo_UNIQUE` (`cli_correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `correos_medicos`
--

DROP TABLE IF EXISTS `correos_medicos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `correos_medicos` (
  `cor_id` int NOT NULL AUTO_INCREMENT,
  `cor_correo` varchar(100) NOT NULL,
  PRIMARY KEY (`cor_id`),
  UNIQUE KEY `cor_correo_UNIQUE` (`cor_correo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `correos_medicos`
--

LOCK TABLES `correos_medicos` WRITE;
/*!40000 ALTER TABLE `correos_medicos` DISABLE KEYS */;
/*!40000 ALTER TABLE `correos_medicos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especializacion`
--

DROP TABLE IF EXISTS `especializacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especializacion` (
  `esp_id` int NOT NULL AUTO_INCREMENT,
  `esp_nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`esp_id`),
  UNIQUE KEY `esp_nombre_UNIQUE` (`esp_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especializacion`
--

LOCK TABLES `especializacion` WRITE;
/*!40000 ALTER TABLE `especializacion` DISABLE KEYS */;
/*!40000 ALTER TABLE `especializacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especializacion_has_medico`
--

DROP TABLE IF EXISTS `especializacion_has_medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especializacion_has_medico` (
  `especializacion_esp_id` int NOT NULL,
  `medico_med_id` int NOT NULL,
  PRIMARY KEY (`especializacion_esp_id`,`medico_med_id`),
  KEY `fk_especializacion_has_medico_medico1_idx` (`medico_med_id`),
  KEY `fk_especializacion_has_medico_especializacion1_idx` (`especializacion_esp_id`),
  CONSTRAINT `fk_especializacion_has_medico_especializacion1` FOREIGN KEY (`especializacion_esp_id`) REFERENCES `especializacion` (`esp_id`),
  CONSTRAINT `fk_especializacion_has_medico_medico1` FOREIGN KEY (`medico_med_id`) REFERENCES `medico` (`med_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especializacion_has_medico`
--

LOCK TABLES `especializacion_has_medico` WRITE;
/*!40000 ALTER TABLE `especializacion_has_medico` DISABLE KEYS */;
/*!40000 ALTER TABLE `especializacion_has_medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `especie`
--

DROP TABLE IF EXISTS `especie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `especie` (
  `esp_id` int NOT NULL AUTO_INCREMENT,
  `esp_nombre` varchar(200) DEFAULT NULL,
  `esp_nombre_cientifico` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`esp_id`),
  UNIQUE KEY `esp_nombre_UNIQUE` (`esp_nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `especie`
--

LOCK TABLES `especie` WRITE;
/*!40000 ALTER TABLE `especie` DISABLE KEYS */;
/*!40000 ALTER TABLE `especie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historias_clinicas`
--

DROP TABLE IF EXISTS `historias_clinicas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historias_clinicas` (
  `his_id` int NOT NULL AUTO_INCREMENT,
  `his_fecha` date DEFAULT NULL,
  `his_descripcion` varchar(45) DEFAULT NULL,
  `citas_cit_id` int NOT NULL,
  `his_costo_total` double DEFAULT NULL,
  PRIMARY KEY (`his_id`),
  KEY `fk_historias_clinicas_citas1_idx` (`citas_cit_id`),
  CONSTRAINT `fk_historias_clinicas_citas1` FOREIGN KEY (`citas_cit_id`) REFERENCES `citas` (`cit_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historias_clinicas`
--

LOCK TABLES `historias_clinicas` WRITE;
/*!40000 ALTER TABLE `historias_clinicas` DISABLE KEYS */;
/*!40000 ALTER TABLE `historias_clinicas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `historias_clinicas_has_medicamentos`
--

DROP TABLE IF EXISTS `historias_clinicas_has_medicamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `historias_clinicas_has_medicamentos` (
  `historias_clinicas_his_id` int NOT NULL,
  `medicamentos_med_id` int NOT NULL,
  PRIMARY KEY (`historias_clinicas_his_id`,`medicamentos_med_id`),
  KEY `fk_historias_clinicas_has_medicamentos_medicamentos1_idx` (`medicamentos_med_id`),
  KEY `fk_historias_clinicas_has_medicamentos_historias_clinicas1_idx` (`historias_clinicas_his_id`),
  CONSTRAINT `fk_historias_clinicas_has_medicamentos_historias_clinicas1` FOREIGN KEY (`historias_clinicas_his_id`) REFERENCES `historias_clinicas` (`his_id`),
  CONSTRAINT `fk_historias_clinicas_has_medicamentos_medicamentos1` FOREIGN KEY (`medicamentos_med_id`) REFERENCES `medicamentos` (`med_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `historias_clinicas_has_medicamentos`
--

LOCK TABLES `historias_clinicas_has_medicamentos` WRITE;
/*!40000 ALTER TABLE `historias_clinicas_has_medicamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `historias_clinicas_has_medicamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mascotas`
--

DROP TABLE IF EXISTS `mascotas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mascotas` (
  `mas_id` int NOT NULL AUTO_INCREMENT,
  `mas_nombre` varchar(120) NOT NULL,
  `mas_edad` int NOT NULL,
  `mas_sexo` tinyint NOT NULL,
  `cliente_cli_id` int NOT NULL,
  `razas_raz_id` int NOT NULL,
  `mas_foto` varchar(65) DEFAULT NULL,
  PRIMARY KEY (`mas_id`),
  UNIQUE KEY `mas_foto_UNIQUE` (`mas_foto`),
  KEY `fk_mascotas_copy1_cliente1_idx` (`cliente_cli_id`),
  KEY `fk_mascotas_razas1_idx` (`razas_raz_id`),
  CONSTRAINT `fk_mascotas_copy1_cliente1` FOREIGN KEY (`cliente_cli_id`) REFERENCES `cliente` (`cli_id`),
  CONSTRAINT `fk_mascotas_razas1` FOREIGN KEY (`razas_raz_id`) REFERENCES `razas` (`raz_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mascotas`
--

LOCK TABLES `mascotas` WRITE;
/*!40000 ALTER TABLE `mascotas` DISABLE KEYS */;
/*!40000 ALTER TABLE `mascotas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicamentos`
--

DROP TABLE IF EXISTS `medicamentos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicamentos` (
  `med_id` int NOT NULL AUTO_INCREMENT,
  `med_nombre` varchar(100) DEFAULT NULL,
  `med_tipo_consumo` varchar(45) DEFAULT NULL,
  `med_valor` double DEFAULT NULL,
  PRIMARY KEY (`med_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicamentos`
--

LOCK TABLES `medicamentos` WRITE;
/*!40000 ALTER TABLE `medicamentos` DISABLE KEYS */;
/*!40000 ALTER TABLE `medicamentos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medico`
--

DROP TABLE IF EXISTS `medico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medico` (
  `med_id` int NOT NULL AUTO_INCREMENT,
  `med_nombre` varchar(45) DEFAULT NULL,
  `med_apellido` varchar(45) DEFAULT NULL,
  `med_profesion` varchar(45) DEFAULT NULL,
  `med_nit` varchar(45) NOT NULL,
  `correos_medicos_cor_id` int NOT NULL,
  PRIMARY KEY (`med_id`),
  UNIQUE KEY `med_nit_UNIQUE` (`med_nit`),
  UNIQUE KEY `correos_medicos_cor_id_UNIQUE` (`correos_medicos_cor_id`),
  KEY `fk_medico_correos_medicos1_idx` (`correos_medicos_cor_id`),
  CONSTRAINT `fk_medico_correos_medicos1` FOREIGN KEY (`correos_medicos_cor_id`) REFERENCES `correos_medicos` (`cor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medico`
--

LOCK TABLES `medico` WRITE;
/*!40000 ALTER TABLE `medico` DISABLE KEYS */;
/*!40000 ALTER TABLE `medico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `razas`
--

DROP TABLE IF EXISTS `razas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `razas` (
  `raz_id` int NOT NULL AUTO_INCREMENT,
  `raz_nombre` varchar(45) NOT NULL,
  `especie_esp_id` int NOT NULL,
  PRIMARY KEY (`raz_id`),
  UNIQUE KEY `raz_nombre_UNIQUE` (`raz_nombre`),
  KEY `fk_razas_especie1_idx` (`especie_esp_id`),
  CONSTRAINT `fk_razas_especie1` FOREIGN KEY (`especie_esp_id`) REFERENCES `especie` (`esp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `razas`
--

LOCK TABLES `razas` WRITE;
/*!40000 ALTER TABLE `razas` DISABLE KEYS */;
/*!40000 ALTER TABLE `razas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sede`
--

DROP TABLE IF EXISTS `sede`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sede` (
  `sed_id` int NOT NULL AUTO_INCREMENT,
  `sed_nombre` varchar(45) DEFAULT NULL,
  `sed_ciudad` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`sed_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sede`
--

LOCK TABLES `sede` WRITE;
/*!40000 ALTER TABLE `sede` DISABLE KEYS */;
/*!40000 ALTER TABLE `sede` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servicio`
--

DROP TABLE IF EXISTS `servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicio` (
  `ser_id` int NOT NULL AUTO_INCREMENT,
  `ser_procedimiento` varchar(45) DEFAULT NULL,
  `ser_costo` double DEFAULT NULL,
  `especializacion_esp_id` int NOT NULL,
  PRIMARY KEY (`ser_id`),
  KEY `fk_servicio_especializacion1_idx` (`especializacion_esp_id`),
  CONSTRAINT `fk_servicio_especializacion1` FOREIGN KEY (`especializacion_esp_id`) REFERENCES `especializacion` (`esp_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicio`
--

LOCK TABLES `servicio` WRITE;
/*!40000 ALTER TABLE `servicio` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicio` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-25 19:46:35
