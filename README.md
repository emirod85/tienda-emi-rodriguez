- ## Proyecto final ReactJS - Emiliano Rodriguez-

  Es un E-commerce de venta de productos de musica, especialmente vinilos, CDs, reproductores, etc.

- ### Páginas

  1.  Home: La página home muestra un NavBar con un Banner y un boton para comenzar a comprar.
  1.  Tienda: La vista inicial de la tienda contiene todos los productos. Tambien a traves del NavBar podemos acceder al listado de productos filtrando por categoría. A través del botón "VIEW MORE" accedemos a la vista detallada del producto, la cual contiene su descripción, stock, precio, imagen, etc. Luego de seleccionar la cantidad de unidades deseada podemos agregar al carrito los productos con el boton ADD TO CHART.
  1.  Carrito: Luego de haber agregado el o los productos deseados al carrito, podemos acceder al mismo tanto desde el item detail, como desde el navBar, donde siempre tenemos el icono del Cart para acceder en cualquier momento.
      En el carrito podemos ver el listado de productos elegidos listos para su compra, con su breve descripcion, precio unitario, subtotales y el precio total de la compra.
      Tambien podemos eliminar productos del carrito en caso de arrepentirnos de algun producto en particular.
      Para simular la compra, el cliente debe completar un formulario con sus datos y presionar el boton PLACE ORDER, a traves del cual se envia la informacion de los productos escogidos y los datos personales de comprador a la base de datos Firebase utilizada en este proyecto.

- ### Librerias
  Las librerias con sus respectivas versiones utilizadas son:

1.  FireBase v. 9.8.3 : Base de datos provista por google, utilizada para guardar la informacion de los productos, tambien las imagenes en el Storage de FireBase, (obteniendo una ID unica de cada uno de ellos) y pudiendo linkear nuestro proyecto. Tambien usado para pushear la información de la venta y obtener un ID identificador de la compra.
1.  React-bootstrap v. 2.3.1: Libreria utilizada para facilitar el estilado del proyecto
1.  React-router-dom v. 6.3.0: Colección de componentes que facilitan la navegación entre páginas de React.

- ### Deploy
  El deploy del sitio fue realizado en Netlify.
