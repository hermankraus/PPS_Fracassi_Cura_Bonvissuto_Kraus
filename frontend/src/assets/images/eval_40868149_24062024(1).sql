-- 	evaluación de SQL 24/06/2024
-- recuerda que evaluamos el adecuado uso de variables y no debe quedar nada hardcodeado

use db_40868149_24062024;  # recordá quitar los [] por favor

#1
-- Crear las tablas Provincias y Localidades con sus correspondientes columnas, primary keys, 
-- foreign keys (si correspondiera) y su vinculación con la tabla Personas.
-- Insertar la provincia de Santa Fe, la localidad de Rosario y asociar todos los clientes y 
-- proveedores a dicha localidad.
si pegas primero localidades y despues provincias no funciona...;
CREATE TABLE `db_40868149_24062024`.`Localidades` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `localidad` VARCHAR(50) NOT NULL,
  `provincia_id` INT NOT NULL,
  PRIMARY KEY (`id`));
  CREATE TABLE `db_40868149_24062024`.`Provincias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `provincia` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));
  ALTER TABLE `db_40868149_24062024`.`Personas` 
  
DROP FOREIGN KEY `fk_personas_tiposdocumentos_I`;
ALTER TABLE `db_40868149_24062024`.`Personas` 
CHANGE COLUMN `tip_doc_ident_id` `tip_doc_ident_id` INT NOT NULL ,
CHANGE COLUMN `localidad_id` `localidad_id` INT NULL DEFAULT NULL ,
ADD INDEX `fk_personas_localidad_idx` (`localidad_id` ASC) VISIBLE;
; 
no entiendo porque hiciste esto....;

ALTER TABLE `db_40868149_24062024`.`Personas` 
ADD CONSTRAINT `fk_personas_tiposdocumentos_I`
  FOREIGN KEY (`tip_doc_ident_id`)
  REFERENCES `db_40868149_24062024`.`TiposDocumentos` (`id`)
  ON DELETE RESTRICT
  ON UPDATE RESTRICT,
ADD CONSTRAINT `fk_personas_localidad`
  FOREIGN KEY (`localidad_id`)
  REFERENCES `db_40868149_24062024`.`Localidades` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `db_40868149_24062024`.`Localidades` 
ADD INDEX `FK_localidades_provincia_idx` (`provincia_id` ASC) VISIBLE;
;
ALTER TABLE `db_40868149_24062024`.`Localidades` 
ADD CONSTRAINT `FK_localidades_provincia`
  FOREIGN KEY (`provincia_id`)
  REFERENCES `db_40868149_24062024`.`Provincias` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  INSERT INTO `db_40868149_24062024`.`Provincias` (`provincia`) VALUES ("Santa Fe");
set @id_provincia = last_insert_id();

INSERT INTO `db_40868149_24062024`.`Localidades`
(`localidad`,
`provincia_id`)
VALUES
("Rosario",@id_provincia);

set @id_localidad = last_insert_id();
UPDATE `db_40868149_24062024`.`Personas`
SET `localidad_id` = @id_localidad;
bien;
#2
-- Insertar en las tablas correspondientes la información relativa al cliente dando de alta tus datos personales (o inventados):
-- Nombre y apellido
-- Calle y nro - Localidad
-- Tipo doc. DNI y nro de DNI
-- Condición de IVA: COnsumidor Final
-- Teléfono
INSERT INTO `db_40868149_24062024`.`Personas`
(`nro_doc`,
`nombre`,
`apellido`,
`razon_social`,
`tip_doc_ident_id`,
`tip_doc_resp_id`,
`calle`,
`altura`,
`piso_dto_blk`,
`localidad_id`)
VALUES
("40868149",
"Ezequias",
"Bonvissuto",
null,
96,
5,
"Balcarce",
"1524",
"6 b",
@id_localidad);
set @mi_nro_dni = 40868149;
INSERT INTO `db_40868149_24062024`.`Clientes`
(`nro_doc`,
`fec_nac`,
`edad`,
`telefono`,
`celular`)
VALUES
(@mi_nro_dni,'1998-03-30',26,null,"3329599929");
bien;

#3
-- Insertar en las tablas correspondientes un ticket de compra con el siguiente detalle:
-- Cliente: insertado en el punto anterior
-- Fecha/Hora: la del momento
-- 2 azúcares
-- 1 yerba
-- Haz uso de variables para insertar el detalle del ticket, cálculos, etc.
-- Ayudín: primero insertar el ticket con importe total en 0, insertar los detalles del ticket, 
-- calcular el importe total a través de la suma de los importe parciales y actualizar el ticket.

INSERT INTO `db_40868149_24062024`.`Tickets`
(`cliente_id`,
`fechora`,
`importe_total`)
VALUES
(@mi_nro_dni,Now(),0);

set @id_ticket = last_insert_id();

set @id_yerba = (select id from Productos where producto = "yerba"); limit 1;
set @id_azucar = (select id from Productos where producto = "azucar"); limit 1;
set @precio_yerba = (select precio FROM Precios WHERE producto_id = @id_yerba and fecha_vigencia <= NOW() order by fecha_vigencia desc LIMIT 1);
set @precio_azucar = (Select precio from Precios WHERE producto_id = @id_azucar and fecha_vigencia <= NOW() order by fecha_vigencia desc Limit 1);

set @calculo = @precio_azucar * 2;

INSERT INTO `db_40868149_24062024`.`DetallesTickets`
(`ticket_id`,
`nro_linea`, 
`cantidad`,
`producto_id`,
`importe_unitario`,
`importe_parcial`)
VALUES
(@id_ticket,1,1,@id_yerba,@precio_yerba,@precio_yerba),
(@id_ticket,2,2,@id_azucar,@precio_azucar,@calculo);

set @total_ticket = @calculo + @precio_yerba;
UPDATE `db_40868149_24062024`.`Tickets`
SET`importe_total` = @total_ticket
WHERE `id` = @id_ticket;

bien;

#4
-- Realizar un informe con el monto mínimo, el monto máximo y el valor del ticket promedio.
-- -------------------------------------------------------------------------------------
-- | Importe ticket menor monto | Importe ticket mayor monto | Importe ticket promedio |
-- -------------------------------------------------------------------------------------
-- | $xxxx.xx                   | $xxxx.xx                   | $xxxx.xx               |
-- -------------------------------------------------------------------------------------
SELECT min(importe_total) as "Importe ticket menor monto ", max(importe_total) as "Importe ticket mayor monto ", 
avg(importe_total) as "Importe ticket promedio" From Tickets;
concat("$",.... ??;

#5
-- Informar los tickets cuyo importe total esté por encima del valor del ticket promedio.
-- -------------------------------------------------------------------------------------
-- | Nro de ticket | Nombre y apellido o Razón social | Fecha      | Importe total   |
-- -------------------------------------------------------------------------------------
-- | x             | xxxxxxxxxxxxxx                   | dd/mm/yyyy | $xxxx.xx        |
-- -------------------------------------------------------------------------------------
-- | x             | xxxxxxxxxxxxxx                   | dd/mm/yyyy | $xxxx.xx        |
-- -------------------------------------------------------------------------------------
-- 
-- 

-- -------------------------------------------------------------------------------------
-- | x             | xxxxxxxxxxxxxx                   | dd/mm/yyyy | $xxxx.xx        |
-- -------------------------------------------------------------------------------------

SELECT T.id, P.nombre, T.fechora, T.importe_total from Tickets T INNER JOIN Clientes C on T.cliente_id = C.nro_doc 
INNER JOIN Personas P on C.nro_doc = P.nro_doc Where T.importe_total;
mal;

#6
-- Informar los montos totales de los pedidos realizados a cada proveedor entre el 01/01/2023 y el 31/12/2023 
-- ordenadas por monto total en forma descendente.
-- -------------------------------------------------------------------------------------
-- | CUIT Proveedor | Nombre y apellido o Razón social | Monto total                 |
-- -------------------------------------------------------------------------------------
-- | xxxxxxxxxxx    | xxxxxxxxxxxxxx                   | $xxxx.xx                    |
-- -------------------------------------------------------------------------------------
-- | xxxxxxxxxxx    | xxxxxxxxxxxxxx                   | $xxxx.xx                    |
-- -------------------------------------------------------------------------------------
-- 
-- 
-- -------------------------------------------------------------------------------------
-- | xxxxxxxxxxx    | xxxxxxxxxxxxxx                   | $xxxx.xx                    |
-- -------------------------------------------------------------------------------------

select PR.nro_doc, CONCAT(P.nombre, " ", P.apellido), T.importe_total From Proveedores PR INNER JOIN
Personas P on PR.nro_doc = P.nro_doc INNER JOIN Tickets T on P.nro_doc = T.cliente_id group by T.importe_total; 
mal;

#7
-- Mostrar la cantidad productos asociados a cada categoría, si una categoría no tuviera ningún producto 
-- asociado indicar 0, ordenar por cantidad en forma decreciente.
-- -------------------------------------------------------------------------------------
-- | Identificador | Categoría                         | Cantidad                      |
-- -------------------------------------------------------------------------------------
-- | 1             | xxxxxxxxxxxxxx                    | xx                            |
-- -------------------------------------------------------------------------------------
-- | 2             | xxxxxxxxxxxxxx                    | xx                            |
-- -------------------------------------------------------------------------------------
-- 
-- 
-- -------------------------------------------------------------------------------------
-- | n             | xxxxxxxxxxxxxx                    | 0                             |
-- -------------------------------------------------------------------------------------

-- pega aquí la resolución del ejercicio 7
-- pega aquí la resolución del ejercicio 7
-- pega aquí la resolución del ejercicio 7

incompleto;

-- FIN DEL EXAMEN
-- FIN DEL EXAMEN
-- FIN DEL EXAMEN
