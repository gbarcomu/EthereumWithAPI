# Nodo de ethereum con API

## Introducción

Este proyecto consiste en un contenedor de Docker con Ethereum y NodeJS.

El protocolo de consenso utilizado es POA (Proof of Authority).

El objetivo es tener un nodo operativo conectado a una red privada de Ethereum con una API de node que encapsule los métodos de **web3** y abstraiga al usuario del contenedor de conocer su funcionamiento.

## Puesta en marcha

Para construir el contenedor ejecutar el siguiente comando en el directorio raíz del proyecto.

```
docker build .
```

Para ponerlo en marcha ejecutar también en el directorio raíz

```
docker-compose up
```

### Dependencias

Únicamente es necesario tener instalado **Docker** y **Docker Compose**

## Puertos utilizados

* 30302 para la conexión con otros nodos de Ethereum
* 10010 para la API de NodeJS

## Información sobre el nodo de Ethereum

El nodo levantado es un Bootnode

## Construcción de la API

En primer lugar es necesario tener el proyecto arrancado (apartado **Puesta en marcha**)

Para comenzar a editar hay que ejecutar 
```
swagger-project edit
```

Probar el método **healthcheck** y comprobar que devuelve "Ethereum node is connected and running".

Una vez configurado todo, abrir la carpeta **node** en un editor o IDE y añadir los métodos que sean necesarios.

El proyecto está estructurado en dos capas:
* Controladores
* Servicios

con "ethereumConnection.helper" para la conexión mediante **web3** a Ethereum.

Para cada nuevo método definido en el controlador añadir en el editor de Swagger la definición de la ruta correspondiente.

Los cambios se actualizan automáticamente, no es necesario levantar de nuevo el proyecto para poder probarlos.
