-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-10-2023 a las 06:03:00
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ejercicio2`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacts`
--

DROP TABLE IF EXISTS `contacts`;
CREATE TABLE IF NOT EXISTS `contacts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `user` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `contacts`
--

INSERT INTO `contacts` (`id`, `nombre`, `apellido`, `telefono`, `user`, `createdAt`, `updatedAt`) VALUES
(6, 'eduardo ', 'vasquez', '22222', 'andres', '2023-10-06 05:48:40', '2023-10-06 05:48:40'),
(7, 'andres', 'fernandez', '25252525', 'andres', '2023-10-06 05:56:31', '2023-10-06 05:56:31'),
(8, 'rafa', 'najarro', '111111', 'andres', '2023-10-06 05:56:50', '2023-10-06 05:56:50'),
(9, 'fernandez', 'vasquez', '4545454', 'andres', '2023-10-06 05:59:59', '2023-10-06 05:59:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'andresfv09', 'andresfernandez11@gmail.com', '$2a$10$1ygwkJuKFcxUGeFHsv/r7eV6amL14wwYISJCl19A1kRDnr1hdI0AW', '2023-10-06 02:45:42', '2023-10-06 02:45:42'),
(2, 'andres', 'andres@gmail.com', '$2a$10$r7eY1VjM89chC8dxwW.2quYxZaewVAwv6RJXOE.qImHmC6/ofFHd6', '2023-10-06 04:35:41', '2023-10-06 04:35:41'),
(3, 'andres', 'andres3@gmail.com', '$2a$10$VNn9ndCedXrsc5XX7BPzoeNTh7AM1e5nNg6a7DJvIAVekokzuCZ46', '2023-10-06 04:40:38', '2023-10-06 04:40:38'),
(4, 'andres45', 'andres34@gmail.com', '$2a$10$v/6gw0oPDuHgvnRj.X8qyO7GM96gpla4eIOlvDX0zmpQyI2MF2sgC', '2023-10-06 04:44:18', '2023-10-06 04:44:18'),
(5, 'vasquez', 'andres50@gmail.com', '$2a$10$8m3ke7UB2HYvonCdNtOi3.oCsPR6pnU8VUEG9x/vFh1nD0OA2CjB2', '2023-10-06 05:42:38', '2023-10-06 05:42:38');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
