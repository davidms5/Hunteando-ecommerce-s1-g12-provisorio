use railway;


CREATE TABLE CLIENTE (
	ID_CLIENTE INT NOT NULL  PRIMARY KEY AUTO_INCREMENT,
	NOMBRE VARCHAR(100) NOT NULL ,
	DIRECCION VARCHAR(50) NOT NULL,
	NUMERO_CELULAR VARCHAR (45)git NOT NULL ,
	NUMERO_TELEFONO VARCHAR (45) ,
	EMAIL VARCHAR (50)  
	

);



CREATE TABLE PRODUCTO (
	ID_PRODUCTO INT NOT NULL  PRIMARY KEY AUTO_INCREMENT,
	ID_CLIENTE INT ,
	NOMBRE_PRODUCTO VARCHAR (100) NOT NULL ,
	CATEGORIA VARCHAR (50) NOT NULL,
	CANTIDAD INT NOT NULL,
	EXISTENCIA VARCHAR (15) NOT NULL	CHECK( EXISTENCIA IN('Disponible','No Disponible') ) ,
	PRECIO_VENTA INT NOT NULL,
	MARCA VARCHAR (50) NOT NULL,
	PROMOCION INT ,
	DESCUENTO INT,
         CONSTRAINT CLIENTES FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTE (ID_CLIENTE)
         );
         
CREATE TABLE DETALLE_PEDIDO (
ID_DETALLE_PEDIDO INT NOT NULL  PRIMARY KEY ,
CANTIDAD INT  NOT NULL ,
PRECIO_UNITARIO INT NOT NULL ,
PRECIO_POR_MAYOR INT NOT NULL,
PRECIO_TOTAL INT
);



CREATE TABLE PEDIDO (
	ID_PEDIDO INT NOT NULL  PRIMARY KEY,
	CODIGO_COMPROBANTE INT ,
	ID_CLIENTE INT NOT NULL ,
	ID_DETALLE_PEDIDO INT NOT NULL ,
	ID_PRODUCTO INT NOT NULL ,
	FECHA DATE NOT NULL,
	PAGO_PEDIDO VARCHAR(15) NOT NULL CHECK ( PAGO_PEDIDO IN('Credito', 'Trasferencia', 'Debito') ),
	ID_PAGO_PEDIDO INT NOT NULL ,
	ESTADO_PEDIDO VARCHAR(20) NOT NULL		CHECK ( ESTADO_PEDIDO IN('Proceso', 'Realizado', 'Cancelado', 'Fallido') ) ,
	
	CONSTRAINT ID_CLIENTE FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTE (ID_CLIENTE) , 
	CONSTRAINT ID_PRODUCTO FOREIGN KEY (ID_PRODUCTO) REFERENCES PRODUCTO (ID_PRODUCTO) , 
	CONSTRAINT ID_DETALLE_PEDIDO FOREIGN KEY (ID_DETALLE_PEDIDO) REFERENCES DETALLE_PEDIDO (ID_DETALLE_PEDIDO) 
	 
);


CREATE TABLE ENVIO (
	ID_ENVIO INT NOT NULL  PRIMARY KEY ,
    ID_CLIENTE INT,
	ID_PEDIDO INT NOT NULL ,	
	ID_REEMBOLSO INT,
	FECHA_ENVIO DATE,
	TIPO_ENTREGA VARCHAR (50) NOT NULL,
	CONSTRAINT ID_PEDIDO FOREIGN KEY (ID_PEDIDO) REFERENCES  PEDIDO (ID_PEDIDO) , 
	CONSTRAINT ID_CLIENT FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTE (ID_CLIENTE) 
);