var menumoviltop = $('.menumovil-top');
var menutop = $('.menu-top');

menumoviltop.on('click', slideMenu);

function slideMenu() {
    menutop.slideToggle(400);
    //menu.fadeToggle(400);
}

$('.sidebar ul li').on('click', cargarContenido);


function cargarContenido() {
    //le quito la clase activo a todos los botones para despues marcar el que toco.
    $('.sidebar ul li').removeClass('active');
    //primero oculto todas las secciones
    $('.thewaywework p').css('display', 'none');

    //el boton me dice que seccion quiere cargar
    var texto = '.' + $(this).text().toLowerCase(); //.toUpperCase

    //al boton que estoy tocando le añado la clase activo
    $(this).addClass('active');

    //muestro la seccion espcifica que carga contenido   
    $(texto).fadeIn(1000);

}