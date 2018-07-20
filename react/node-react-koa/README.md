CREATE DATABASE IF NOT EXISTS antd DEFAULT CHARSET utf8 COLLATE utf8_general_ci;

CREATE TABLE `user` ( `id` int(11) NOT NULL AUTO_INCREMENT, `username` varchar(255) NOT NULL, `age` int(2) NOT NULL, `address` varchar(255) NOT NULL, `isdelete`  int(2) DEFAULT 0, PRIMARY KEY(`id`));