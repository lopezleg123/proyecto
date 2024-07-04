# Grupo 12 2023-2

Este es el repositorio del *Grupo 12*, cuyos integrantes son:

* Felipe Marchant Vargas - 202173643-3
* Angelo Russu Cisternas - 202173509-7
* Sebastián Arrieta Moron - 202173511-9
* **Tutor**: Ignacio Muñoz

# Grupo 20 2024-1
Este es el repositorio del *Grupo 20*, del ramo de Ingeneria de Software cuyos integrantes son:

Durante el semestre usaremos el proyecto del paralelo 201 como base para las hitos del semestre

* Felipe Marchant Vargas - 202173643-3
* Angelo Russu Cisternas - 202173509-7
* Agustin Lopez  - 202130549-1
* Joaquin Rojo Olea - 202173550-k
* **Tutor**: Vicente Ruiz



## Wiki 2023-2

Puede acceder a la Wiki mediante el siguiente [enlace](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/home) 
 
Wiki: 
- [Identificación de los miembros del equipo.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Identificaci%C3%B3n-de-los-miembros-del-equipo)
- [Objetivos y criterios de éxito del proyecto.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Objetivos-y-criterios-de-%C3%A9xito-del-proyecto)
- [Actores relevantes.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Actores-Relevantes)
- [Diagrama de contexto.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Diagrama-de-contexto)
- [Modelo de dominio.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Modelo-de-dominio)
- [Diagrama de secuencia.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Diagrama-de-secuencia)
- [Evidencias visuales proyecto.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Evidencias-visuales-proyecto)
- [Evaluación final proyecto.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Evaluaci%C3%B3n-final-proyecto)

## Wiki 2024-1

Puede acceder a la Wiki del semestre mediante el siguiente [enlace](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/home) 

- [Retrospectiva.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Retrospectiva)
- [Objetivos y criterios de éxito del proyecto](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Objetivos-y-criterios-de-%C3%A9xito-del-proyecto-2024)
- [Actores relevantes.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Actores-Relevantes-2024)
- [Diagrama de contexto.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Diagrama-de-contexto-2024)
- [Modelo de dominio.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Modelo-de-Dominio-2024)
- [Proceso descrito.]()
- [Casos unitarios Hito 3.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Casos-Unitarios-2024)
- [Desarrollo HU Hito 3.](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/issues/7)
- [Evaluacion de la arquitectura](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Arquitectura-del-proyecto)
- [Video Explicativo H4](https://youtu.be/DRPNSUuRo7w)
- [Inspeccion de Sonarqube](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Inspecci%C3%B3n-de-C%C3%B3digo-con-Sonarqube)
- [Inspeccion](https://sonarcloud.io/project/overview?id=joakoxsi_proyecto)
- [Inspeccion V2](https://sonarcloud.io/summary/overall?id=joakoxsi_ProyectoV2)
- [Pruebas de carga](https://gitlab.inf.utfsm.cl/felipe.marchant/proyecto-inf236-grupo-12/-/wikis/Pruebas-de-Carga)

## Videos

* [Video presentación avance 1](https://youtu.be/CnrHKVUSTLQ)
* [Video de implemetación del proyecto](https://youtu.be/pNo8Co4I7ug)

## Aspectos técnicos relevantes

### Avances entrega 5 
Modificación de la vista para reservar hora. Se elige primero el tipo de exámen. A partir de esto se muetran los diferentes horarios disponibles. Estos horarios varian dependiendo cada tipo de exámen. Se adjuntan una imagen para radiografia(duración  de 30 minutos) y otra para resonancia magnética(duración de 1,5 horas). 
![image](https://github.com/Nachops/INF236P201G12/assets/112965241/28762470-0dfc-4b70-be28-f99d64e03acf)  
![image](https://github.com/Nachops/INF236P201G12/assets/112965241/5c1b1513-3301-422e-8366-d929aa685f32)
Se agregó una nueva vista que corresponde a la busqueda de una hora ya registrada según el id de la hora y el rut del paciente. 
![image](https://github.com/Nachops/INF236P201G12/assets/112965241/6e6b3c8b-9381-44b8-8d59-49b08044f438)

### Instrucciones de uso del prototipo implementado en la entrega 4
![image](https://github.com/Nachops/INF236P201G12/assets/102710333/2a82e2a5-ab9c-48fa-afd1-a3958dc8b5d9)

Esto es una parte del código implementado en el prototipo correspondiente a la historia de usuario que describe el registro de horas reservados por los pacientes, en esta parte del código se gestiona la lógica del formulario junto con el HTML correspondiente.

Para probar las pantallas trabajadas en este prototipo es necesario abrir la consola y ubicarse en la dirección de la carpeta cliente del proyecto, una vez en esta carpeta se debe iniciar el programa escribiendo el comando “npm start”.

Para visualizar la pantalla trabajada se debe ingresar la siguiente dirección en algún navegador.
http://localhost:3000/register

![image](https://github.com/Nachops/INF236P201G12/assets/102710333/f593aba8-ee01-48f9-9af1-9cf1fa534862)

En esta vista es posible ingresar los datos correspondientes a el registro de hora para un examen médico, una vez ingresados se puede presionar el botón de “Registrar Hora”, toda esta información para motivos de este prototipo es guardada en un objeto que puede ser visualizado en la consola del navegador.

![image](https://github.com/Nachops/INF236P201G12/assets/102710333/543aad0f-51b1-4d84-ab1f-b538b1e98bf4)
