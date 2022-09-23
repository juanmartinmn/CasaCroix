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