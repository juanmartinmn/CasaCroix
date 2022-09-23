document.querySelector('#reserva').addEventListener('click',function(){
    let nombre = document.querySelector('#name').value;
    let cantidad = document.querySelector('#mesa').value
    let fecha = document.querySelector('#date').value;
    let hora = document.querySelector('#hora').value;

    // Date Format
    let array = fecha.split('-');
    month = array[1];
    day = array[2];
    let date = `${day}/${month}`;

    const url = `https://api.whatsapp.com/send?phone=543816203040&text=Hola!, me gustaria hacer una reserva en Casa Croix para ${cantidad} persona/s el dia ${date} para ${hora} a nombre de ${nombre}. Muchas gracias!`;

    window.open(url)
})

document.querySelector('#eventos').addEventListener('click',function(){
    let nombre = document.querySelector('#nombre').value;
    let tipo = document.querySelector('#tipoEvento').value;
    let mayores = document.querySelector('#mayores').value;
    let menores = document.querySelector('#menores').value;
    let invitados = parseInt(mayores) + parseInt(menores);
    let fecha = document.querySelector('#fecha').value;
    let hora = document.querySelector('#horario').value;
    let tipoEv = document.querySelector('#tipoEv').value;
    let excepciones = document.querySelector('#excepciones').value;
    let otros = document.querySelector('#otros').value;


    let array = fecha.split('-');
    year = array[0];
    month = array[1];
    day = array[2];
    let date = `${day}/${month}/${year}`;



    const link = `https://api.whatsapp.com/send?phone=543815671888&text=Hola!, me gustaria presupuestar un evento en Casa Croix %0A Nombre Completo: ${nombre}%0A Tipo de Evento: ${tipo}%0A Cantidad de Invitados: ${invitados} (Mayores: ${mayores} Menores: ${menores})%0A Fecha: ${date}%0A Hora: ${hora}%0A ${tipoEv}%0A Celiacos, Vegetarianos y Veganos: ${excepciones}%0A Otros: ${otros}%0AMuchas gracias!`;
                
    window.open(link);
})
