let show = false;
const menu = document.querySelector('#menu');

document.querySelector('#hambur').addEventListener('click', () => {

    show = !show;

    if (show) {
        menu.innerHTML = '<hr><nav class="topnav"><ul><li><a href="index.html">INICIO</a></li><li><a href="tiendasetcucilloten.html">SET CUBIERTOS</a></li><li><a href="tiendatablas.html">PARRILLAS/TABLAS</a></li><li><a href="Contactos.html">CONTACTOS</a></li><li><a href="Quienes somos.html">QUIENES SOMOS?</a></li><li><a href="comidas.html">COMIDAS</a></li><li><img class="argentina" src="fotos/argentina.png" alt="argentina"></li></ul></nav><hr>';
    } else {
        menu.innerHTML = '';
    }
});
