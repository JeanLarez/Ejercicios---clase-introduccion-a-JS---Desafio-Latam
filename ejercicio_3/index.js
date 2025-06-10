// Seleccionamos el elemento <img> del DOM
img = document.querySelector("img");

// Pedimos al usuario que nos indique un valor de border-radius (solo el número)
valorBorderRadiusUsuario = prompt("Introduce el valor de border-radius (en px):");

// Cambiamos el estilo del borde redondeado (border-radius) de la imagen
img.style.borderRadius = valorBorderRadiusUsuario + "px";
//.style.propiedad nos permite modificar estilos CSS desde JavaScript.
//Concatenamos "px" porque el valor ingresado es un número, pero CSS necesita la unidad.

//Esto nos muestra cómo JavaScript puede cambiar estilos visuales en tiempo real.
