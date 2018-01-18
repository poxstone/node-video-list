CREATE TABLE `lista_videos` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`url` varchar(256) NOT NULL,
	`creador` varchar(64) NOT NULL,
	`tema` varchar(256),
	`fecha` DATETIME,
	PRIMARY KEY (`id`)
);

