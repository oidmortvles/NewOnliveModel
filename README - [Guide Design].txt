Proyecto creado con React y Vite.
Node Version: 18.19.0

En base al Figma propuesto por Buffalo ↴
(https://www.figma.com/proto/qU8m77wDJVsAhxnVUgqSGi/Design-System?page-id=0%3A1&type%5B%E2%80%A6%5D2C-804%2C0.4=&t=8FkpfuBzkvGdcYXJ-1&scaling=scale-down&node-id=1146-9885&starting-point-node-id=649%3A7643)
Se construye respetando los lineamientos del diseño y prestando especial atencion al funcionamiento y optimización del producto.

Al estar construido con React sin uso de un Framework como NextJs, se hace un cuidado intensivo donde cada componente esté pensado para su futura reutilización y comunicación entre sí.
Cada elemento/componente tiene un contenedor pensado para su uso, donde este último es quien se encarga de ejecutar la mayor logica como Componente Padre, por ejemplo: "ReleaseGamesCard" => "ReleaseGamesSecction". 
De esta manera, se optimizan aún más los componentes y se crea una jerarquia que permita su reutilización.

Se adjunta el Mapa de Componentes ↴
(https://www.canva.com/design/DAF3cEXI8DI/iKGUUp8mOd9LkaUIyRQXUA/edit?ui=eyJBIjp7IkIiOnsiQiI6dHJ1ZX19LCJFIjp7IkE_IjoiUCJ9LCJHIjp7IkIiOnRydWV9fQ&category=tAEv8Hh5on0) 
Aquí se intenta dejar constancia de cada componente Hijo y su componente Padre, junto con el detalle de las propiedades que recibe.

En cuanto a las clases y su nomenclatura en CSS, se usa por el formato BEM, siendo el componente el bloque principal, y apartir de ello se usan las siglas del nombre. Por ejemplo:
Componete: ReleaseGameCard / Clase Css: ".cardGameAccessContainer" / Clases Css descencientes: ".rgcInfoGameCard".

