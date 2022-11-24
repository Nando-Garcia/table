/* ------------------------------ DATOS DE LA TABLA*/
var materias = ['Matemáticas','História','Química','Física','Biología']
var calificaciones_parcial = [[8,7,10,6,5],[9,7,8,10,6],[8,7,9,10,6]]
/*-------------------------------------------------*/

// Imprime las materias
for (i=1; i<=materias.length; i++){
    var fila = document.createElement('td')
    var contenido = document.createTextNode (`${materias[i-1]}`);
    fila.appendChild(contenido)

    const tabla = document.querySelector(`#col${i}`)
    tabla.appendChild(fila)
}

// Imprime las calificaciones
for (i=1; i<=calificaciones_parcial.length; i++){
    parcial (i-1)
}

        // Funcion invocada para imprimir las calificaciones por parcial creando nodos td
        function parcial (i) {
            for (j=1; j<=calificaciones_parcial[i].length; j++) {
                var fila = document.createElement('td')
                var contenido = document.createTextNode (`${calificaciones_parcial[i][j-1]}`);
                fila.appendChild(contenido)
            
                const tabla = document.querySelector(`#col${j}`)
                tabla.appendChild(fila)
            }
        }

// Imprime el promedio general por materia
for (i=1; i<=materias.length; i++){
    var fila = document.createElement('td')
    var contenido = document.createTextNode (prom(i-1));
    fila.appendChild(contenido)
    
    const tabla = document.querySelector(`#col${i}`)
    tabla.appendChild(fila)
}
    // Funcion invocada para imprimir el promedio creando nodos td
        function prom (i) {
            var promedio = 0
            for(j=0; j<calificaciones_parcial.length; j++) {
                promedio += calificaciones_parcial[j][i] 
            }
            promedio /= calificaciones_parcial.length

            return promedio.toFixed(2)
        }

// Imprime promedios por parcial
var fila = document.createElement('td')
const tabla = document.querySelector('#prom')
tabla.appendChild(fila)

var promedio_general = []

for (i=1; i<=calificaciones_parcial.length; i++) {
    var fila = document.createElement('td')
    var contenido = document.createTextNode (prom_parcial(i-1));
    fila.appendChild(contenido)
    
    const tabla = document.querySelector(`#prom`)
    tabla.appendChild(fila)
}

            function prom_parcial (i) {
                let sum = 0;                
                for (let j=0; j<calificaciones_parcial[i].length; j++) {
                    sum += calificaciones_parcial[i][j];
                }
                promedio_parcial = sum/calificaciones_parcial[i].length
                promedio_general.push(promedio_parcial)
                return promedio_parcial
            }

// Imprime promedio general
var fila = document.createElement('td')
var contenido = document.createTextNode (((promedio_general[0]+promedio_general[1]+promedio_general[2])/3).toFixed(2));
fila.appendChild(contenido)

const tabla_final = document.querySelector('#prom-gral')
tabla_final.appendChild(fila)