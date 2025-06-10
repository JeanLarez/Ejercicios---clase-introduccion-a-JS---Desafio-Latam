// Solicitamos al usuario los datos por separado

info1 = prompt("Introduce una dirección");
info2 = prompt("Introduce el numero de departamento");
info3 = prompt("Introduce una comuna");

// Seleccionamos los elementos del DOM donde colocaremos los datos
//document.querySelector("#id") selecciona un elemento HTML por su ID.
ele1 = document.querySelector("#direccion");
//ele1 = document.getElementById("direccion");
ele2 = document.querySelector("#departamento");
// ele1 = document.getElementById("direccion");
ele3 = document.querySelector("#comuna");
// ele1 = document.getElementById("direccion");

// Reemplazamos el contenido interno de cada elemento con los datos ingresados
//.innerHTML cambia el contenido de ese elemento en la página.
ele1.innerHTML = info1;
ele2.innerHTML = info2;
ele3.innerHTML = info3;


//Todo ocurre en tiempo real: al cargar la página, el script pide la info y la muestra.
