/* Concatenar es simplemente unir dos cadenas de texto */
saludo= "Hola pedro";
pregunta= " ¿Como estas?";
frase= saludo + pregunta;
document.writeln(frase);

/* Para concatenar números se puede forzar un string (ya que si una variable detecta texto automáticamente vuelve todo String)*/
n1= 5;
n2= 8;
/* Claro, podríamos definir a cada número como una cadena para después concatenarlos, pero este método nos permites hacerlos dinámicamente */
nuevafrase= ""+n1+n2;
document.writeln(nuevafrase);

/* Tenemos otro método para concatenar en este caso un método de cadena */
n3= "1";
frase2= n3.concat(n2);
document.writeln("Otra manera de concatenar: " + frase2);

/* La manera recomendada de concatenar es la siguiente: */
nombre= "Ignacio Aliendres";
/* Una manera */
/* frase1= "Soy "+ nombre + " y estoy caminando"; */

/* La manera recomendada */
/* Es mantener crtl + alt y presionar la tecla "}" */
/* El símbolo poronga ese se llama backtick */
frase1= `Soy ${nombre} y estoy caminando`;
document.writeln(frase1)

/* También nos permite escribir carácteres como '' y "" */

/* Incluso podemos pasar cosas a HTML */
fraseHTML= 
`<div>
    <h1>Titulo</h1>
    <h2>Subtitulo</h2>
</div>`;

document.writeln(fraseHTML);