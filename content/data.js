export const criteria="https://drive.google.com/file/d/1v0J0d8mJwbSH0eiOHgmuzGwX-PPbDQMp/view?usp=drive_link";
export const materials=[
["Localiza Salud","Buscador y registro de recursos y activos","https://localizasalud.sanidad.gob.es/"],
["ESCA 2026–2030","Estrategia andaluza de Salud Comunitaria","https://www.juntadeandalucia.es/sites/default/files/2026-03/Estrategia%20de%20Salud%20Comunitaria%20de%20Andalucia%202026-2030-ESCA.pdf"],
["Criterios andaluces · 9 junio 2026","Registro y validación de activos; comprobar acceso compartido",criteria],
["Manual de alta en Localiza Salud","Registro ciudadano paso a paso","https://localizasalud.sanidad.gob.es/maparecursos/manual/Como_subir_recursos_telematicamenteV2.pdf"],
["Chrysallis Andalucía","Ficha del recurso en Localiza Salud","https://localizasalud.sanidad.gob.es/maparecursos/main/ResourcesSearchDetail.action?id=26014"],
["Mapeo de salud y bienestar","Vídeo complementario · Badajoz","https://www.youtube.com/watch?v=Q-JMjKldsJM"],
["Capital social para cultivar salud","Vídeo complementario","https://www.youtube.com/watch?v=K9zBmMxJiTQ"],
["Experiencia de Paloma como mapeadora","Vídeo complementario","https://www.youtube.com/watch?v=wPkeHHnIIbE"]];
export const localiza=[
["00–08","Orientarse en Localiza Salud","Acceder sin iniciar sesión. Mostrar el menú inicial: Recursos/Activos frente a Actividades; explicar el ámbito territorial, la temática y la combinación de criterios. Distinguir búsqueda pública, cuenta ciudadana para proponer registros y perfil autorizado para validar."],
["08–23","Recursos/Activos vs. Actividades: el caso del Centro de Salud de Almuñécar","Tomar el Centro de Salud de Almuñécar como punto de partida para entender dos modalidades de búsqueda, no dos nombres para el mismo resultado. Al elegir «Recursos/Activos» y buscar Almuñécar aparece el Centro de Salud, pero «Receta de Pasos» se descubre únicamente al abrir su ficha. Al elegir «Actividades» y buscar Almuñécar, «Receta de Pasos» aparece directamente en los resultados. Hacer ambas búsquedas y preguntar qué información permite descubrir cada una. Concluir que un listado más numeroso de recursos no sustituye la búsqueda de actividades. Señalar la peculiaridad observada de la interfaz: el campo «Nombre de actividad» aparece en Recursos/Activos, no en Actividades; no atribuirle resultados que no se hayan comprobado."],
["23–37","Maracena: inventario y participación","Buscar Maracena sin filtro participativo: 38 registros. Activar «Ha sido identificado de forma participativa»: 7 registros. Diferenciar inventario de identificación comunitaria."],
["37–59","Chrysallis: ampliar territorio","Buscar Albolote: 2 registros; no aparece Chrysallis. Como no hay búsqueda por Distrito Sanitario Granada-Metropolitano, ampliar al nivel provincial: «Provincia: Granada» y «Temática: Salud sexual y reproductiva». El mapa aparece automáticamente, sin pulsar «Mostrar listado» ni «Localizar». Hacer zoom hacia Albolote y buscar marcadores amarillos (asociaciones); localizar Chrysallis y comprobar que figura validada como activo."],
["59–70","Granada: identificar y denominar","Recuperar la consulta documentada de Granada capital sobre envejecimiento con filtro «Ha sido identificado de forma participativa» (28 resultados observados). Comprobar en pantalla el nombre exacto de la temática antes de seleccionarla. Abrir la ficha del Centro de Participación Activa Buenos Aires y contrastar la denominación de CPA, Punto Vuela, GRUSE y GRAFA con los criterios de registro."],
["70–95","Alta ciudadana y validación","Antes de proponer un alta, comprobar que no existe ya el recurso o la actividad. Mostrar los datos que solicita el formulario oficial: descripción, ubicación, población destinataria, temática, gratuidad, periodicidad cuando proceda, participación, contacto y consentimiento. Distinguir claramente propuesta ciudadana, validación por perfil autorizado y posible visibilidad clínica."],
["95–100","Síntesis del taller","Recapitular tres aprendizajes: el resultado depende de los filtros; un recurso registrado no equivale por sí solo a un activo identificado participativamente; y las actividades deben buscarse también directamente, aunque puedan figurar dentro de fichas de recursos. Recordar que proponer un registro no equivale a validarlo."]];
// Fuente única para las tarjetas, el orden y el guion minutado.
// Cada entrada: [intervalo, título, indicaciones docentes, destino de consulta, resumen].
export const localizaSequence=localiza.map(([time,title,detail],i)=>({
 time,title,detail,
 id:['entrada-localiza','almunecar','maracena','chrysallis','denominaciones','registro','cierre-localiza'][i],
 summary:[
 'Menú, modalidades y filtros · acceso público',
 'Receta de Pasos: resultado directo en Actividades, indirecto en la ficha del centro',
 '38 registros frente a 7 identificados participativamente',
 'De Albolote a la provincia de Granada',
 'CPA Buenos Aires, Punto Vuela, GRUSE y GRAFA',
 'Duplicados, propuesta ciudadana y validación',
 'Filtros, participación y búsqueda de actividades'
 ][i]
}));
export const mapeo=[
["00–15","Propósito","Del inventario al mapeo con participación comunitaria. El producto de la sesión es un plan viable, no un mapa terminado."],
["15–32","Técnicas","Paseos comunitarios, mapas colectivos, entrevistas, grupos focales, fotovoz y talleres participativos."],
["32–43","Equipos","Tres equipos de aproximadamente cinco profesionales; elegir territorio, población y finalidad."],
["43–73","Planificación","Completar las seis decisiones: finalidad, ámbito, participantes, métodos, calendario y activos/documentación/devolución."],
["73–88","Exposición","Cada equipo presenta su propuesta en unos cinco minutos."],
["88–95","Viabilidad","Revisar equidad, participación ciudadana, recursos, plazos, personas responsables y devolución."],
["95–100","Cierre","Conectar el plan con el trabajo de campo posterior y su memoria."]];
export const decisions=[
["¿Para qué?","Finalidad y necesidad de salud"],["¿Dónde?","Delimitación territorial"],["¿Con quién?","Personas, asociaciones, colectivos y convocatoria"],["¿Cómo?","Técnicas participativas elegidas, función de cada una y secuencia"],["¿Cuándo?","Calendario, responsables y recursos"],["¿Qué activos?","Documentar, contrastar y devolver hallazgos"]];
