# C3 : SQL

## DDL

_(Apresentar o SQL para criação do esquema definido acima num SGBD MySQL.)_


```sql
USE `test`;

DROP TABLE IF EXISTS `tabela_a`;
DROP TABLE IF EXISTS `tabela_b`;

CREATE TABLE IF NOT EXISTS `tabela_a` (
  `model` int(4) unsigned NOT NULL,
  `speed` int(4) unsigned NOT NULL,
  `ram` int(3) unsigned NOT NULL,
  `hd` float unsigned NOT NULL,
  `screen` float unsigned NOT NULL,
  `price` int(7) NOT NULL,
  PRIMARY KEY (`model`)
);

CREATE TABLE IF NOT EXISTS `tabela_b` (
  `model` int(4) unsigned NOT NULL,
  `speed` int(4) unsigned NOT NULL,
  `ram` int(3) unsigned NOT NULL,
  `hd` float unsigned NOT NULL,
  `cd` varchar(3) COLLATE latin1_bin NOT NULL,
  `price` int(7) NOT NULL,
  PRIMARY KEY (`model`)
);
```

## DML

USE `leonorvicente`;

INSERT INTO `loja` VALUES (1,'Nome Loja 1','Morada Loja 1','4000-000',220001111),(2,'Nome Loja 2','Morada Loja 2','4000-001',220001112),(3,'Nome Loja 3','Morada Loja 3','4000-002',220001113),(4,'Nome Loja 4','Morada Loja 4','4000-003',220001114),(5,'Nome Loja 5','Morada Loja 5','4000-004',220001115),(6,'Nome Loja 6','Morada Loja 6','4000-005',220001116),(7,'Nome Loja 7','Morada Loja 7','4000-006',220001117),(8,'Nome Loja 8','Morada Loja 8','4000-007',220001118),(9,'Nome Loja 9','Morada Loja 9','4000-008',220001119),(10,'Nome Loja 10','Morada Loja 10','4000-009',220001120),(11,'Nome Loja 11','Morada Loja 11','4000-010',220001121),(12,'Nome Loja 12','Morada Loja 12','4000-011',220001122),(13,'Nome Loja 13','Morada Loja 13','4000-012',220001123),(14,'Nome Loja 14','Morada Loja 14','4000-013',220001124),(15,'Nome Loja 15','Morada Loja 15','4000-014',220001125),(16,'Nome Loja 16','Morada Loja 16','4000-015',220001126),(17,'Nome Loja 17','Morada Loja 17','4000-016',220001127),(18,'Nome Loja 18','Morada Loja 18','4000-017',220001128),(19,'Nome Loja 19','Morada Loja 19','4000-018',220001129),(20,'Nome Loja 20','Morada Loja 20','4000-019',220001130),(21,'Nome Loja 21','Morada Loja 21','4000-020',220001131),(22,'Nome Loja 22','Morada Loja 22','4000-021',220001132),(23,'Nome Loja 23','Morada Loja 23','4000-022',220001133),(24,'Nome Loja 24','Morada Loja 24','4000-023',220001134),(25,'Nome Loja 25','Morada Loja 25','4000-024',220001135),(26,'Nome Loja 26','Morada Loja 26','4000-025',220001136),(27,'Nome Loja 27','Morada Loja 27','4000-026',220001137),(28,'Nome Loja 28','Morada Loja 28','4000-027',220001138),(29,'Nome Loja 29','Morada Loja 29','4000-028',220001139),(30,'Nome Loja 30','Morada Loja 30','4000-029',220001140);

INSERT INTO `produto` VALUES (1,3,4,'L',1,'Produto 1',1.00),(2,4,6,'M',1,'Produto 2',2.00),(3,5,8,'XL',1,'Produto 3',3.00),(4,6,10,'L',1,'Produto 4',4.00),(5,7,12,'M',1,'Produto 5',5.00),(6,8,14,'XL',1,'Produto 6',6.00),(7,9,16,'L',1,'Produto 7',7.00),(8,10,18,'M',1,'Produto 8',8.00),(9,11,20,'XL',1,'Produto 9',9.00),(10,12,22,'L',1,'Produto 10',10.00),(11,13,24,'M',1,'Produto 11',11.00),(12,14,26,'XL',1,'Produto 12',12.00),(13,15,28,'L',1,'Produto 13',13.00),(14,16,30,'M',1,'Produto 14',14.00),(15,17,32,'XL',1,'Produto 15',15.00),(16,18,34,'L',1,'Produto 16',16.00),(17,19,36,'M',1,'Produto 17',17.00),(18,20,38,'XL',1,'Produto 18',18.00),(19,21,40,'L',1,'Produto 19',19.00),(20,22,42,'M',1,'Produto 20',20.00),(21,23,44,'XL',1,'Produto 21',21.00),(22,24,46,'L',1,'Produto 22',22.00),(23,25,48,'M',1,'Produto 23',23.00),(24,26,50,'XL',1,'Produto 24',24.00),(25,27,52,'L',1,'Produto 25',25.00),(26,28,54,'M',1,'Produto 26',26.00),(27,29,56,'XL',1,'Produto 27',27.00),(28,30,58,'L',1,'Produto 28',28.00),(29,31,60,'M',1,'Produto 29',29.00),(30,32,62,'XL',1,'Produto 30',30.00);

INSERT INTO `fornecedores` VALUES (1,'Nome Fornecedor 1','Morada Fornecedor 1','2000-000',1),(2,'Nome Fornecedor 2','Morada Fornecedor 2','2000-001',1),(3,'Nome Fornecedor 3','Morada Fornecedor 3','2000-002',1),(4,'Nome Fornecedor 4','Morada Fornecedor 4','2000-003',2),(5,'Nome Fornecedor 5','Morada Fornecedor 5','2000-004',2),(6,'Nome Fornecedor 6','Morada Fornecedor 6','2000-005',2),(7,'Nome Fornecedor 7','Morada Fornecedor 7','2000-006',2),(8,'Nome Fornecedor 8','Morada Fornecedor 8','2000-007',1),(9,'Nome Fornecedor 9','Morada Fornecedor 9','2000-008',1),(10,'Nome Fornecedor 10','Morada Fornecedor 10','2000-009',1),(11,'Nome Fornecedor 11','Morada Fornecedor 11','2000-010',2),(12,'Nome Fornecedor 12','Morada Fornecedor 12','2000-011',2),(13,'Nome Fornecedor 13','Morada Fornecedor 13','2000-012',2),(14,'Nome Fornecedor 14','Morada Fornecedor 14','2000-013',2),(15,'Nome Fornecedor 15','Morada Fornecedor 15','2000-014',1),(16,'Nome Fornecedor 16','Morada Fornecedor 16','2000-015',1),(17,'Nome Fornecedor 17','Morada Fornecedor 17','2000-016',1),(18,'Nome Fornecedor 18','Morada Fornecedor 18','2000-017',2),(19,'Nome Fornecedor 19','Morada Fornecedor 19','2000-018',2),(20,'Nome Fornecedor 20','Morada Fornecedor 20','2000-019',2),(21,'Nome Fornecedor 21','Morada Fornecedor 21','2000-020',2),(22,'Nome Fornecedor 22','Morada Fornecedor 22','2000-021',1),(23,'Nome Fornecedor 23','Morada Fornecedor 23','2000-022',1),(24,'Nome Fornecedor 24','Morada Fornecedor 24','2000-023',1),(25,'Nome Fornecedor 25','Morada Fornecedor 25','2000-024',2),(26,'Nome Fornecedor 26','Morada Fornecedor 26','2000-025',2),(27,'Nome Fornecedor 27','Morada Fornecedor 27','2000-026',2),(28,'Nome Fornecedor 28','Morada Fornecedor 28','2000-027',2),(29,'Nome Fornecedor 29','Morada Fornecedor 29','2000-028',1),(30,'Nome Fornecedor 30','Morada Fornecedor 30','2000-029',1);

INSERT INTO `clientes` VALUES (1,'Cliente 1',910001001,'3000-000',1),(2,'Cliente 2',910001002,'3000-001',1),(3,'Cliente 3',910001003,'3000-002',1),(4,'Cliente 4',910001004,'3000-003',1),(5,'Cliente 5',910001005,'3000-004',1),(6,'Cliente 6',910001006,'3000-005',1),(7,'Cliente 7',910001007,'3000-006',1),(8,'Cliente 8',910001008,'3000-007',1),(9,'Cliente 9',910001009,'3000-008',1),(10,'Cliente 10',910001010,'3000-009',1),(11,'Cliente 11',910001011,'3000-010',1),(12,'Cliente 12',910001012,'3000-011',1),(13,'Cliente 13',910001013,'3000-012',1),(14,'Cliente 14',910001014,'3000-013',1),(15,'Cliente 15',910001015,'3000-014',1),(16,'Cliente 16',910001016,'3000-015',1),(17,'Cliente 17',910001017,'3000-016',1),(18,'Cliente 18',910001018,'3000-017',1),(19,'Cliente 19',910001019,'3000-018',1),(20,'Cliente 20',910001020,'3000-019',1),(21,'Cliente 21',910001021,'3000-020',1),(22,'Cliente 22',910001022,'3000-021',1),(23,'Cliente 23',910001023,'3000-022',1),(24,'Cliente 24',910001024,'3000-023',1),(25,'Cliente 25',910001025,'3000-024',1),(26,'Cliente 26',910001026,'3000-025',1),(27,'Cliente 27',910001027,'3000-026',1),(28,'Cliente 28',910001028,'3000-027',1),(29,'Cliente 29',910001029,'3000-028',1),(30,'Cliente 30',910001030,'3000-029',1);

INSERT INTO `funcionarios` VALUES (1,'Funcionario','Funcionario 1','Morada Funcionario 1',111111111,'960000001','funcionario_1@loja.com',1),(2,'Funcionario','Funcionario 2','Morada Funcionario 2',111111112,'960000002','funcionario_2@loja.com',1),(3,'Funcionario','Funcionario 3','Morada Funcionario 3',111111113,'960000003','funcionario_3@loja.com',1),(4,'Funcionario','Funcionario 4','Morada Funcionario 4',111111114,'960000004','funcionario_4@loja.com',1),(5,'Funcionario','Funcionario 5','Morada Funcionario 5',111111115,'960000005','funcionario_5@loja.com',1),(6,'Funcionario','Funcionario 6','Morada Funcionario 6',111111116,'960000006','funcionario_6@loja.com',1),(7,'Funcionario','Funcionario 7','Morada Funcionario 7',111111117,'960000007','funcionario_7@loja.com',1),(8,'Funcionario','Funcionario 8','Morada Funcionario 8',111111118,'960000008','funcionario_8@loja.com',1),(9,'Funcionario','Funcionario 9','Morada Funcionario 9',111111119,'960000009','funcionario_9@loja.com',1),(10,'Funcionario','Funcionario 10','Morada Funcionario 10',111111120,'960000010','funcionario_10@loja.com',1),(11,'Funcionario','Funcionario 11','Morada Funcionario 11',111111121,'960000011','funcionario_11@loja.com',1),(12,'Funcionario','Funcionario 12','Morada Funcionario 12',111111122,'960000012','funcionario_12@loja.com',1),(13,'Funcionario','Funcionario 13','Morada Funcionario 13',111111123,'960000013','funcionario_13@loja.com',1),(14,'Funcionario','Funcionario 14','Morada Funcionario 14',111111124,'960000014','funcionario_14@loja.com',1),(15,'Funcionario','Funcionario 15','Morada Funcionario 15',111111125,'960000015','funcionario_15@loja.com',1),(16,'Funcionario','Funcionario 16','Morada Funcionario 16',111111126,'960000016','funcionario_16@loja.com',1),(17,'Funcionario','Funcionario 17','Morada Funcionario 17',111111127,'960000017','funcionario_17@loja.com',1),(18,'Funcionario','Funcionario 18','Morada Funcionario 18',111111128,'960000018','funcionario_18@loja.com',1),(19,'Gestor','Gestor 1','Morada Gestor 1',111111129,'960000019','gestor_1@loja.com',1),(20,'Funcionario','Funcionario 20','Morada Funcionario 20',111111130,'960000020','funcionario_20@loja.com',1),(21,'Funcionario','Funcionario 21','Morada Funcionario 21',111111131,'960000021','funcionario_21@loja.com',1),(22,'Funcionario','Funcionario 22','Morada Funcionario 22',111111132,'960000022','funcionario_22@loja.com',1),(23,'Funcionario','Funcionario 23','Morada Funcionario 23',111111133,'960000023','funcionario_23@loja.com',1),(24,'Funcionario','Funcionario 24','Morada Funcionario 24',111111134,'960000024','funcionario_24@loja.com',1),(25,'Gestor','Gestor 2','Morada Gestor 2',111111135,'960000025','gestor_2@loja.com',1),(26,'Funcionario','Funcionario 26','Morada Funcionario 26',111111136,'960000026','funcionario_26@loja.com',1),(27,'Funcionario','Funcionario 27','Morada Funcionario 27',111111137,'960000027','funcionario_27@loja.com',1),(28,'Funcionario','Funcionario 28','Morada Funcionario 28',111111138,'960000028','funcionario_28@loja.com',1),(29,'Funcionario','Funcionario 29','Morada Funcionario 29',111111139,'960000029','funcionario_29@loja.com',1),(30,'Funcionario','Funcionario 30','Morada Funcionario 30',111111140,'960000030','funcionario_30@loja.com',1);

INSERT INTO `pedidos` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(6,6),(7,7),(8,8),(9,9),(10,10),(11,11),(12,12),(13,13),(14,14),(15,15),(16,1),(17,2),(18,3),(19,4),(20,5),(21,6),(22,7),(23,8),(24,9),(25,10),(26,11),(27,12),(28,13),(29,14),(30,15);

INSERT INTO `vendas` VALUES (1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,1),(14,1),(15,1),(16,1),(17,1),(18,1),(19,1),(20,1),(21,1),(22,1),(23,1),(24,1),(25,1),(26,1),(27,1),(28,1),(29,1),(30,1);

INSERT INTO `reservas` VALUES (1,'Cliente 1',1.00,'Paga',1),(2,'Cliente 2',2.00,'Por Pagar',2),(3,'Cliente 3',3.00,'Paga',3),(4,'Cliente 4',4.00,'Por Pagar',4),(5,'Cliente 5',5.00,'Paga',5),(6,'Cliente 6',6.00,'Por Pagar',6),(7,'Cliente 7',7.00,'Paga',7),(8,'Cliente 8',8.00,'Por Pagar',1),(9,'Cliente 9',9.00,'Paga',2),(10,'Cliente 10',10.00,'Por Pagar',3),(11,'Cliente 11',11.00,'Paga',4),(12,'Cliente 12',12.00,'Por Pagar',5),(13,'Cliente 13',13.00,'Paga',6),(14,'Cliente 14',14.00,'Por Pagar',7),(15,'Cliente 15',15.00,'Paga',1),(16,'Cliente 16',17.00,'Por Pagar',2),(17,'Cliente 17',19.00,'Paga',3),(18,'Cliente 18',21.00,'Por Pagar',4),(19,'Cliente 19',23.00,'Paga',5),(20,'Cliente 20',25.00,'Por Pagar',6),(21,'Cliente 21',27.00,'Paga',7),(22,'Cliente 22',29.00,'Por Pagar',1),(23,'Cliente 23',31.00,'Paga',2),(24,'Cliente 24',33.00,'Por Pagar',3),(25,'Cliente 25',35.00,'Paga',4),(26,'Cliente 26',37.00,'Por Pagar',5),(27,'Cliente 27',39.00,'Paga',6),(28,'Cliente 28',41.00,'Por Pagar',7),(29,'Cliente 29',43.00,'Paga',1),(30,'Cliente 30',45.00,'Por Pagar',2);

INSERT INTO `produtoreservas` VALUES (1,1),(16,1),(2,2),(17,2),(3,3),(18,3),(4,4),(19,4),(5,5),(20,5),(6,6),(21,6),(7,7),(22,7),(8,8),(23,8),(9,9),(24,9),(10,10),(25,10),(11,11),(26,11),(12,12),(27,12),(13,13),(28,13),(14,14),(29,14),(15,15),(30,15);

INSERT INTO `produtovendas` VALUES (1,1,1.00),(2,2,2.00),(3,3,3.00),(4,4,4.00),(5,5,5.00),(6,6,6.00),(7,7,7.00),(8,8,8.00),(9,9,9.00),(10,10,10.00),(11,11,11.00),(12,12,12.00),(13,13,13.00),(14,14,14.00),(15,15,15.00),(16,1,16.00),(17,2,17.00),(18,3,18.00),(19,4,19.00),(20,5,20.00),(21,6,21.00),(22,7,22.00),(23,8,23.00),(24,9,24.00),(25,10,25.00),(26,11,26.00),(27,12,27.00),(28,13,28.00),(29,14,29.00),(30,15,30.00);

INSERT INTO `produtopedidos` VALUES (1,1,1,1.00),(2,2,2,4.00),(3,3,1,3.00),(4,4,2,8.00),(5,5,1,5.00),(6,6,2,12.00),(7,7,1,7.00),(8,8,2,16.00),(9,9,1,9.00),(10,10,2,20.00),(11,11,1,11.00),(12,12,2,24.00),(13,13,1,13.00),(14,14,2,28.00),(15,15,1,15.00),(16,1,1,16.00),(17,2,2,34.00),(18,3,1,18.00),(19,4,2,38.00),(20,5,1,20.00),(21,6,2,42.00),(22,7,1,22.00),(23,8,2,46.00),(24,9,1,24.00),(25,10,2,50.00),(26,11,1,26.00),(27,12,2,54.00),(28,13,1,28.00),(29,14,2,58.00),(30,15,1,30.00);


---
[< Previous](rebd04.md) | [^ Main](https://github.com/exemploTrabalho/reportSIBD/) | Next >
:--- | :---: | ---: 
