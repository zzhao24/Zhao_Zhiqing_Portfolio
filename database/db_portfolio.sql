-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 10, 2018 at 12:15 AM
-- Server version: 5.7.19
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolio`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_about`
--

DROP TABLE IF EXISTS `tbl_about`;
CREATE TABLE IF NOT EXISTS `tbl_about` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `img` varchar(30) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `per` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_about`
--

INSERT INTO `tbl_about` (`id`, `img`, `title`, `description`, `per`) VALUES
(1, 'brain.svg', 'Creative Idea', 'I can do nothing but with a piece of paper and a pencil. Brainstorm will be most important inspiration for me in a short time. Good ideas always came from here.', 0),
(2, 'fire.svg', 'Enthusiasm', 'I will try my best to do the best with the enthusiasm for my part. Never giving up every tiny little things for the case.', 0),
(3, 'team.svg', 'Team Work', 'I am independent with strong team ability. Helping each other will be the most important thing when achieving a case for the client.', 0),
(4, 'message.svg', 'Communicate', 'I love to communicate with others and my clients and this will be the best way to understand their desire of every case. And I am always having a positive optimistic attitude.', 0),
(5, 'ui76.png', 'Web & UI Design', '', 1),
(6, 'ux60.png', 'User Experience', '', 1),
(7, 'gd80.png', 'Graphic Design', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cover`
--

DROP TABLE IF EXISTS `tbl_cover`;
CREATE TABLE IF NOT EXISTS `tbl_cover` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `sentence` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_cover`
--

INSERT INTO `tbl_cover` (`id`, `sentence`) VALUES
(1, 'A Graphic Designer'),
(2, 'An Interactive Media Design Student'),
(3, 'From Fanshawe College'),
(4, 'Favourite Quote'),
(5, 'If you love life, don\'t waste time, for time is what life is made up to.'),
(6, '- Bruce Lee');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_info`
--

DROP TABLE IF EXISTS `tbl_info`;
CREATE TABLE IF NOT EXISTS `tbl_info` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `about_me` text NOT NULL,
  `email` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_info`
--

INSERT INTO `tbl_info` (`id`, `name`, `about_me`, `email`) VALUES
(1, 'Zhiqing Zhao', 'My name is Zhiqing Zhao, I am graduated from interactive Media Design Program at Fanshawe Collage. I really gained a lot of knowledge about media, marketing, visualizing, advertising, motion design and digital technology. When I am in design, coding, or branding, taking photos, the skills bellow are the basics that I could use smoothly.', 'zhiqingzhao@email.com');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

DROP TABLE IF EXISTS `tbl_projects`;
CREATE TABLE IF NOT EXISTS `tbl_projects` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `project_thumb` varchar(200) NOT NULL,
  `image_src` varchar(30) NOT NULL,
  `project_desc` text NOT NULL,
  `video` tinyint(4) NOT NULL,
  `video_src` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`id`, `project_thumb`, `image_src`, `project_desc`, `video`, `video_src`) VALUES
(1, 'beerPoster_thumb.png', 'beerPoster.png', 'This is a label I create for a brand called Hellmann’s. This is a fully creative label as a beer label for a sauce company.', 0, ''),
(2, 'chair_thumb.jpg', 'chair.jpg', 'There is a beautiful sight seen for the city London. Which located in spring bank park. Photograph and photoshop design were made by Zhiqing.', 0, ''),
(3, 'sightseen_thumb.jpg', 'sightseen.jpg', 'This photo were shot in China. I hope everyone can feel the mysterious and niceness that different  in Canada.', 0, ''),
(4, 'StyleGuide_thumb.png', 'StyleGuide.png', 'This a branding document I create for a infuser bottle. The brand and marketing idea was create by myself and the reason I called young-g means young generation will bring the energy to all over the world. ', 0, ''),
(5, 'v1_thumb.png', 'v1.png', 'This is an animation of my logo and introduce my personality.', 1, 'v1.mp4'),
(6, 'v2_thumb.png', 'v2.png', 'This is a project I created from 3D model and I will be working harder for creating a real object in the future. ', 1, 'v2.mp4'),
(7, 'phone_thumb.png', 'phone.png', 'This is an infographic design for how does the phone affect our lives. The information were searching on internet and the I designed for the infographic by using adobe photoshop.', 0, ''),
(8, 'chair2_thumb.jpg', 'chair2.jpg', 'There is a beautiful sight seen for the city London. Which located in spring bank park. Photograph and photoshop design were made by Zhiqing.', 0, '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
