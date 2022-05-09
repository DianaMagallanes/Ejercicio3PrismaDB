# Ejercicio 3 PrismaDB (API: Express + DB)
Ejercicio 3 Semana 5 Backend Launch X

Este repo es un proyecto que se conecta a una DB de Postgresql por medio de una API.

<h2>Requerimientos</h2>
<ul>
  <li>Endpoint para consultar todos los explorers.</li>
  <li>Endpoint para consultar información de un explorer en base a su ID</li>
  <li>Endpoint para dar de alta nuevos explorers.</li>
  <li>Endpoint para actualizar la misión de los explorers.</li>
  <li>Endpoint para eliminar los explorers.</li>
  
  <li>Endpoint para consultar todas las misiones.</li>
  <li>Endpoint para consultar información de una misión en base a su ID</li>
  <li>Endpoint para dar de alta nuevas misiones.</li>
  <li>Endpoint para actualizar la cantidad de personas inscritas en la misión.</li>
  <li>Endpoint para eliminar las misiones.</li>
</ul>


<h2>Dependencias</h2>
<ul>
  <li>Jest versión 28.1.0 (Para realizar pruebas unitarias)¿.</li>
  <li>ESLint versión 8.15.0 (Para realizar corregir inconsistencias/errores en escritura).</li>
  <li>Express versión 4.18.1 (Como server).</li>
  <li>Prisma versión 3.13.0 (Toolkit para realizar operaciones a DB).</li>
</ul>




<h2>End points</h2>


**Método de petición HTTP**| **endpoint**  |  **image** |   
|---|---|---|
|**GET**|  **/explorers** <br> Toda la información de todos los explorers. |   <img src="https://user-images.githubusercontent.com/28024862/167332011-e30497ef-c056-4fd4-a992-8b50312f3d6e.PNG">  |
|**GET**|  **/explorers/:id** <br>  Información de un explorer (filtrado por ID).|  <img src="https://user-images.githubusercontent.com/28024862/167332061-de0beab5-ac5d-475e-a8f2-6a747f7ba71e.PNG">   |
|**POST**|  **/explorers** <br> Dar de alta un nuevo explorer (name,username,mission). |   <img src="https://user-images.githubusercontent.com/28024862/167332112-c2257fdb-1743-41cf-9cd0-38cb33b0cbec.PNG">  |
|**PUT**|  **/explorers/:id** <br> Actualizar misión del explorer. |   <img src="https://user-images.githubusercontent.com/28024862/167332143-e0346446-119b-4645-adcd-7c28b9ec73b1.PNG">  |
|**DELETE**|  **/explorers/:id** <br> Eliminar explorer en base a su ID. |   <img src="https://user-images.githubusercontent.com/28024862/167332194-42c78e44-efe1-4114-b21c-972bdd944d2d.PNG">  |
|**GET**|  **/missions/** <br> Toda la información de todas las misiones. |   <img src="https://user-images.githubusercontent.com/28024862/167332727-267dff14-06c9-4dd3-ac1e-1a30f35a0050.PNG">  |
|**GET**|  **/missions/:id** <br> Información de una misión (filtrado por ID). |   <img src="https://user-images.githubusercontent.com/28024862/167332771-036f19de-957c-4d77-96ce-f39932838397.PNG">  |
|**POST**|  **/explorers** <br> Dar de alta una nueva misión (name,lang,missionCommander,enrollments,hasCertification). |   <img src="https://user-images.githubusercontent.com/28024862/167332814-547b74b5-864f-48cd-8e56-b7d547d30c5d.PNG">  |
|**PUT**|  **/explorers/:id** <br> Actualizar cantidad de inscripciones a una misión. |   <img src="https://user-images.githubusercontent.com/28024862/167332854-9bd11338-a0c3-4ee8-8d54-08800e1e00f5.PNG">  |
|**DELETE**|  **/explorers/:id** <br> Eliminar una misión en base a su ID. |   <img src="https://user-images.githubusercontent.com/28024862/167332887-a84aca20-46c9-4be8-b465-b8a6601349de.PNG">  |


