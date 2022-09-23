document.querySelector('#submit').addEventListener('click',function(){
    let nombre = document.querySelector('#name').value;
    let cantidad = document.querySelector('#mesa').value
    let fecha = document.querySelector('#date').value;
    let hora = document.querySelector('#hora').value;


    const url = `https://api.whatsapp.com/send?phone=543815671888&text=
                Hola!, me gustaria hacer una reserva en Casa Croix para ${cantidad} personas
                el dia ${fecha} para ${hora} a nombre de ${nombre}. Muchas gracias!
                `;

    window.open(url)
})