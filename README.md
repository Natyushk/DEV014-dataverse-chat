# DATAVERSE CHAT

# Indice
* [1. Descripción](#1-Descripción)
* [2. Prototipo de alta fidelidad](#2-Prototipodealtafidelidad)
* [3. Funcionalidades Principales](#3-FuncionalidadesPrincipales)
* [4. Tecnologías Utilizadas](#4-TecnologíasUtilizadas)
* [5. Listado de problemas de test de usabilidad](#5-Listadodeproblemasdetestdeusabilidad)
* [6. Contribución](#6-Contribución)
* [7. Contacto](#7-Contacto)

## 1. Descripción

El proyecto "Personas Millonarias del Mundo" es una aplicación web que permite a los usuarios explorar datos relacionados con las personas más ricas del mundo. Los usuarios pueden filtrar la información por continente, ordenarla por fortuna o nombre de manera ascendente y descendente, y ver estadísticas sobre la fortuna total y el promedio de los individuos listados, asi como tambien interactuar con cada uno de los personajes y a manera de panel. Este proyecto es un sistema de chatbot que utiliza la API de OpenAI para generar respuestas automáticas a preguntas de los usuarios. Proporciona una interfaz de usuario simple donde los usuarios pueden ingresar sus preguntas y recibir respuestas del chatbot.

### 2. Prototipo de alta fidelidad

El prototipo de alta fidelidad presenta una interfaz limpia y fácil de usar, con opciones claras para filtrar y ordenar la información permitiendo la busqueda por nombre, ordenado ascendente y descendente y seleccionando la persona que se desea interacturar, asi como el ingreso del api key, y la interaccion en el panel. Incluye elementos visuales como imágenes de las personas millonarias y un diseño responsive para adaptarse a diferentes dispositivos, en la cual se utilizo el mobile first para el desarrollo de las vistas.

## 3. Funcionalidades Principales

- __Inicio:__ Tenemos la opción de filtrado, búsqueda por nombre de las personas, ingreso al chat grupal, ingreso/cambio de api key.
![inicio](https://raw.githubusercontent.com/Natyushk/DEV014-dataverse-chat/main/src/assets/inicio.png)
- __Filtrado de personas:__ Permite filtrar por continente y ordenar a las personas de manera ascendente y descendente por nombre o por fortuna. ![Filtrado de personas](https://raw.githubusercontent.com/Natyushk/DEV014-dataverse-chat/main/src/assets/filtrar.png)
- __Búsqueda por nombre:__ Permite buscar a las personas según las letras que el usurio ingrese y que coincidan con las perosonas millonarias. ![busqueda de personas](https://raw.githubusercontent.com/Natyushk/DEV014-dataverse-chat/main/src/assets/busqueda.png)
- __Interfaz de usuario intuitiva para enviar mensajes al chatbot:__ En el chat individual, permite al usuario interactuar con la persona seleccionada en la vista principal, enviando el mensaje al realizar clic en la flecha o simplemente dando un "enter". También permite ingresar al chat grupal, volver al inicio e igreso o cambio de la Api key.![chat individual](https://raw.githubusercontent.com/Natyushk/DEV014-dataverse-chat/main/src/assets/chat%20individual.png)
En el chat grupal, permite al usuario interacuar al usuario con todos los personajes. En esta vista tambien se tiene la opción de volver al inicio y cambiar o ingresar el Api key. ![chat grupal](https://raw.githubusercontent.com/Natyushk/DEV014-dataverse-chat/main/src/assets/chat%20grupal.png)
- __Integración con la API key de OpenAI para generar respuestas automáticas:__ En esta vista se permite el cambio o ingreso del Api key para la interacción con el chat bot. ![api key](https://raw.githubusercontent.com/Natyushk/DEV014-dataverse-chat/main/src/assets/api%20key.png)
- __Vista de error:__ En caso de ingresar incorrectamente la url, la pagina nos muestra una vista de error. ![error](https://raw.githubusercontent.com/Natyushk/DEV014-dataverse-chat/main/src/assets/error.png)


## 4. Tecnologías Utilizadas

- JavaScript
- HTML
- CSS
- API de OpenAI
- Versel
- Control de versiones con git y github
- Jest

## 5. Listado de problemas de test de usabilidad

1. Al filtrar por continente, el usuario puede encontrar confuso el funcionamiento si no se proporciona retroalimentación clara.
2. La experiencia de usuario al ordenar los resultados puede mejorar con indicadores visuales que muestren el estado actual de la ordenación.
3. Es posible que algunos usuarios no comprendan el significado de ciertas opciones de filtrado, por lo que se necesita una mejor explicación o etiquetado.
4. En dispositivos móviles, la disposición de los elementos puede resultar poco intuitiva, lo que podría afectar la facilidad de navegación.
5. Al momento de tener una conversación tanto en el panel como en el chat individual, las respuestas pueden no indicarse hasta el final, teniendo asi, el usuario que realizar un scroll hacia abajo.

## 6. Contribución

Si deseas contribuir al proyecto, ¡te damos la bienvenida! Puedes clonar este repositorio [Dataverse Chat](https://github.com/Natyushk/DEV014-dataverse-chat    ), hacer tus cambios y enviar un pull request. Asegúrate de seguir las pautas de contribución.

1. Haz un fork de este repositorio.
2. Clona tu fork en tu máquina local.
3. Crea una nueva rama para tu funcionalidad (`git checkout -b nueva-funcionalidad`).
4. Realiza tus cambios y haz commits (`git commit -am 'Agrega nueva funcionalidad'`).
5. Empuja tus cambios a tu repositorio en GitHub (`git push origin nueva-funcionalidad`).
6. Crea una nueva solicitud de extracción en GitHub.

## 7. Contacto

Si tienes preguntas, sugerencias o comentarios sobre el proyecto, no dudes en ponerte en contacto con nosotros a través de nuestro correo electrónico: [sandy.mmora@gmail.com](mailto:sandy.mmora@gmail.co) [natamolano_1@hotmail.com](mailto:natamolano_1@hotmail.com)

¡Gracias por tu interés en nuestro proyecto!