/*
 Navicat Premium Data Transfer

 Source Server         : wamp
 Source Server Type    : MySQL
 Source Server Version : 80031
 Source Host           : localhost:3306
 Source Schema         : pilkada_survey_apps

 Target Server Type    : MySQL
 Target Server Version : 80031
 File Encoding         : 65001

 Date: 30/03/2024 13:04:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for form_questions
-- ----------------------------
DROP TABLE IF EXISTS `form_questions`;
CREATE TABLE `form_questions`  (
  `id` int(0) UNSIGNED NOT NULL AUTO_INCREMENT,
  `answer` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL,
  `order` tinyint(0) NULL DEFAULT NULL,
  `id_activated` int(0) UNSIGNED NOT NULL,
  `created_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6),
  `updated_at` timestamp(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `f_ans_ibfk_id_activated`(`id_activated`) USING BTREE,
  CONSTRAINT `f_que_ibfk_id_activated` FOREIGN KEY (`id_activated`) REFERENCES `status_activated` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
