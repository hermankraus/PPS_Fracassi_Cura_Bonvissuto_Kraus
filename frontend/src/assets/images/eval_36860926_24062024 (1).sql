	-- 	evaluación de SQL 24/06/2024
	-- recuerda que evaluamos el adecuado uso de variables y no debe quedar nada hardcodeado

	use db_36860926_24062024;  # recordá quitar los [] por favor

	#1
	-- Crear las tablas Provincias y Localidades con sus correspondientes columnas, primary keys, 
	-- foreign keys (si correspondiera) y su vinculación con la tabla Personas.
	-- Insertar la provincia de Santa Fe, la localidad de Rosario y asociar todos los clientes y 
	-- proveedores a dicha localidad.

	CREATE TABLE `db_36860926_24062024`.`provincias` (
	  `id_provincias` INT NOT NULL,
	  `provincias` VARCHAR(100) NOT NULL,
	  PRIMARY KEY (`id_provincias`));

	CREATE TABLE `db_36860926_24062024`.`localidades` (
	  `id_localidades` INT NOT NULL,
	  `localidades` VARCHAR(50) NOT NULL,
	  `id_provincias` INT NOT NULL,
	  PRIMARY KEY (`id_localidades`),
	  INDEX `FK_provincias_id_idx` (`id_provincias` ASC) VISIBLE,
	  CONSTRAINT `FK_provincias_id`
		FOREIGN KEY (`id_provincias`)
		REFERENCES `db_36860926_24062024`.`provincias` (`id_provincias`)
		ON DELETE NO ACTION
		ON UPDATE NO ACTION);

	ALTER TABLE `db_36860926_24062024`.`personas` 
	ADD COLUMN `localidad_id` INT NULL AFTER `piso_dto_blk`,
	ADD INDEX `fk_localidad_id_idx` (`localidad_id` ASC) VISIBLE;
	;
	ALTER TABLE `db_36860926_24062024`.`personas` 
	ADD CONSTRAINT `fk_localidad_id`
	  FOREIGN KEY (`localidad_id`)
	  REFERENCES `db_36860926_24062024`.`localidades` (`id_localidades`)
	  ON DELETE NO ACTION
	  ON UPDATE NO ACTION;
	  
INSERT INTO provincias(provincias) VALUES(1, 'Santa Fe'); #Me olvide de poner autoincremtal la tabla, me dijo tomi que ponga aqui esto.
SET @cod_provincia = LAST_INSERT_ID();
la cantidad de campos que declaras no coincide con la cantidad de valores;
INSERT INTO localidades(localidades, id_provincias) VALUES(1, 'Rosario', @cod_provincia); #Lo mismo en este
la cantidad de campos que declaras no coincide con la cantidad de valores;

SET @cod_localidad = LAST_INSERT_ID();

UPDATE personas
SET `localidad_id` = @cod_localidad 
WHERE `tipo_persona` IN (clientes, proveedores);
?????

mal;

#2
-- Insertar en las tablas correspondientes la información relativa al cliente dando de alta tus datos personales (o inventados):
-- Nombre y apellido
-- Calle y nro - Localidad
-- Tipo doc. DNI y nro de DNI
-- Condición de IVA: COnsumidor Final
-- Teléfono

#Persona
SET @dni = '36860926';
SET @nombre = 'Marcelo';
SET @apellido = 'Fracassi';
SET @tipo_i = 'Consumidor Final';
SET @tipo_r = 'r';
SET @direccion= 'Mendoza223';

INSERT INTO persona(nro_doc, nombre, apellido, tipo_doc_ident_id, tipo_doc_resp_id, direccion) 
VALUES (@dni, @nombre, @apellido, @tipo_i, @tipo_r, @direccion);

#Cliente
SET @fec_nac = '1992-10-10';
SET @edad = 30;
SET @telefono = '3416691492';
SET @celular= '341698789';

INSERT INTO clientes(nro_doc, fec_nac, edad, telefono, celular)
VALUES (@dni, @fec_nac, @edad, @telefono, @tipo_r, @celular);
SET @cod_dni = LAST_INSERT_ID();

mal!!! para que usas todas esas variables? demuestra que no sabes usarlas;


#3
-- Insertar en las tablas correspondientes un ticket de compra con el siguiente detalle:
-- Cliente: insertado en el punto anterior
-- Fecha/Hora: la del momento
-- 2 azúcares
-- 1 yerba
-- Haz uso de variables para insertar el detalle del ticket, cálculos, etc.
-- Ayudín: primero insertar el ticket con importe total en 0, insertar los detalles del ticket, 
-- calcular el importe total a través de la suma de los importe parciales y actualizar el ticket.

SET @cliente_id = @cod_dni;
SET @fecha_hora = NOW();
SET @total_importe = 0;

INSERT INTO tickets(cliente_id, fechora, total_importe)
VALUES (@cliente_id, @fecha_hora, @total_importe);

SET @ticket_id = LAST_INSERT_ID();

SELECT producto 
FROM productos
WHERE producto like 'azucar'; #no me da el tiempo para setear el prod variable

SET @producto1 = 4;
SET @cantidad1 = 2;
SET @precio_unitario = 50;
SET @importe1 = @cantidad1 * @precio_unitario;

INSERT INTO detallestickets(ticket_id, nro_linea, cantidad, producto_id, importe_unitario, importe_parcial)
VALUES (@ticket_id, 1, @cantidad1, @producto1, @precio_unitario, @importe1);

SELECT producto 
FROM productos
WHERE producto = 'yerba';

SET @producto2 = 4;
SET @cantidad2 = 1;
SET @precio_unitario2 = 150; 
SET @importe2 = @cantidad2 * @precio_unit2;

INSERT INTO detallestickets(ticket_id, nro_linea, cantidad, producto_id, importe_unitario, importe_parcial)
VALUES (@ticket_id, 2, @cantidad2, @producto2, @precio_unitario2, @importe2);

SET @total_importe = @importe1 + @importe2;

UPDATE tickets
SET total_importe = @total_importe
WHERE id = @ticket_id and cliente_id = @cliente_id;

la consigna era clara, no se puede hardcodear nada;

#4
-- Realizar un informe con el monto mínimo, el monto máximo y el valor del ticket promedio.
-- -------------------------------------------------------------------------------------
-- | Importe ticket menor monto | Importe ticket mayor monto | Importe ticket promedio |
-- -------------------------------------------------------------------------------------
-- | $xxxx.xx                   | $xxxx.xx                   | $xxxx.xx               |
-- -------------------------------------------------------------------------------------

SELECT 
    MIN(importe_total) AS importe_menor,
    MAX(importe_total) AS importe_mayor,
    AVG(importe_total) AS importe_promedio
FROM tickets;
concat("$", ... para formatear resultado y alias para encabezados?;

SET @importe_promedio = importe_promedio;
SET @importe_menor = importe_menor;
SET @importe_mayor = importe_mayor;

para que seteas estas variables????;

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


SELECT 
    t.id AS nro_ticket,
    c.nombre AS nombre,
	c.apellido AS apellido,    
    t.fechora AS fecha,
    t.total_importe AS importe_total
FROM 
    tickets t
INNER JOIN 
    clientes c ON t.cliente_id = c.id
WHERE 
    t.total_importe > @importe_promedio;
Error Code: 1054. Unknown column 'c.nombre' in 'field list';

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

SELECT p.nro_doc, ped.nro_doc, ped.fecha, SUM(ped.precio_uni_compra), pe.nro_doc
FROM pedidos ped
INNER JOIN proveedores p ON ped.nro_doc= p.nro_doc
INNER JOIN personas pe ON p=nro_doc = pe.nro_doc
WHERE ped.fecha BETWEEN '2023-01-01' AND '2023-12-31'
GROUP BY 
    p.nro_doc
ORDER BY 
	ped.precio_uni_compra DESC;

Error Code: 1054. Unknown column 'p' in 'on clause';

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

SELECT 
    c.id,
    c.categoria,
    COUNT(p.id) AS cantidad
FROM 
    categorias c
LEFT JOIN 
    productos p ON c.id = p.categoria_id
GROUP BY 
    c.id, c.categoria
ORDER BY 
    cantidad DESC;
bien!;

-- FIN DEL EXAMEN
-- FIN DEL EXAMEN
-- FIN DEL EXAMEN