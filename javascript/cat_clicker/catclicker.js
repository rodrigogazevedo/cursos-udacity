document.body.innerHTML = '';

var elem = document.createElement('div');
elem.style.backgroundImage = `url("kittycat.jpg")`;
elem.style.backgroundSize = 'cover';
elem.style.position = 'fixed';
elem.style.left = '50%';
elem.style.top = '50%';
elem.style.transform = 'translate(-50%, -50%)';
elem.style.width = '300px';
elem.style.height = '300px';
elem.style.border = '10px solid #000000';
elem.style.cursor = 'pointer';

var elemP = document.createElement('p');
elemP.innerHTML = `O número de vezes que a imagem do gatinho foi clicada foi <input type="text" value=0 disabled style="width:30px"> vezes`;
elemP.style.position = 'fixed';
elemP.style.top = '100%';
elemP.style.left = '-25%';
elemP.style.width = '500px';

let cont = 0;

elem.addEventListener('click', function () {
  elemP.querySelector('input').value = cont++;
});

elem.appendChild(elemP);
document.body.appendChild(elem);