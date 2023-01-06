# ecommerce-s1-g12
Proyecto e-Commerce

------------------------------------------------------------------------------------------------------------------------
¡¡¡¡¡¡¡¡¡¡ACTUALIZADO!!!!!!!!!!!!!!!
------------------------------------------------------------------------------------------------------------------------
Actualizar la base de datos o hacer una nueva para los ultimos cambios realizados



------------------------------------------
para probar
correciones del back: para hacer las pruebas de los productos traidos de la base de datos, en la url despues del localhost colocar "/products" para mostrar en formato json todos los productos en la base de datos 

(nota para QA: en la misma url tambien se deberian crear productos mediante postman o similares, aunque no hubo tiempo de especificar para que insertara solo ciertos datos, posiblemente haya que rellenar todos los campos. igualmente, cualquier duda o error no duden en notificar de vuelta)



para mostrar, actualizar o borrar 1 articulo en especifico, en la url despues del localhost colocar "/products/ID_del_articulo_de_prueba", para mostrar los datos de ese producto en
particular


los endpoints de la tabla carrito se acceden de la misma manera que /products, solo hay que cambiarlo a que diga "/cart"

en el archivo prueba.js en la carpeta src de backend, solo descomentando la linea 56, agrega todos los productos (al menos los que tenian la foto con el valor y el nombre, mas tarde le pido a la clienta las demas descripciones si le es posible)
![image](https://user-images.githubusercontent.com/107662095/210926830-58ab4564-63fb-48c8-88a8-318dde6964bc.png)

Dentro de backend, en la carpeta modelDB esta el archivo productos.js, en una lista estan los productos que se insertan en la base de datos automaticamente (con la base de datos actualizada)
