document.body.innerHTML = '';

var elemCatOne = document.createElement('divcatone');
elemCatOne.style.backgroundImage = `url("kittycat.jpg")`;
elemCatOne.style.backgroundSize = 'cover';
elemCatOne.style.position = 'fixed';
elemCatOne.style.left = '50%';
elemCatOne.style.top = '25%';
elemCatOne.style.transform = 'translate(-50%, -50%)';
elemCatOne.style.width = '300px';
elemCatOne.style.height = '300px';
elemCatOne.style.border = '10px solid #000000';
elemCatOne.style.cursor = 'pointer';

var elemPOne = document.createElement('p');
elemPOne.innerHTML = `O número de vezes que a imagem do gatinho foi clicada foi <input type="text" value=0 disabled style="width:30px"> vezes`;
elemPOne.style.position = 'fixed';
elemPOne.style.top = '100%';
elemPOne.style.left = '-25%';
elemPOne.style.width = '500px';

var elemCatTwo = document.createElement('divcattwo');
elemCatTwo.style.backgroundImage = `url("kittycat2.jpg")`;
elemCatTwo.style.backgroundSize = 'cover';
elemCatTwo.style.position = 'fixed';
elemCatTwo.style.left = '50%';
elemCatTwo.style.top = '75%';
elemCatTwo.style.transform = 'translate(-50%, -50%)';
elemCatTwo.style.width = '450px';
elemCatTwo.style.height = '300px';
elemCatTwo.style.border = '10px solid #000000';
elemCatTwo.style.cursor = 'pointer';

var elemPTwo = document.createElement('p');
elemPTwo.innerHTML = `O número de vezes que a imagem do gatinho foi clicada foi <input type="text" value=0 disabled style="width:30px"> vezes`;
elemPTwo.style.position = 'fixed';
elemPTwo.style.top = '100%';
elemPTwo.style.left = '-1%';
elemPTwo.style.width = '500px';

let contOne = 0;
let contTwo = 0;

elemCatOne.addEventListener('click', function () {
  elemPOne.querySelector('input').value = contOne++;
});

elemCatTwo.addEventListener('click', function () {
  elemPTwo.querySelector('input').value = contTwo++;
});

elemCatOne.appendChild(elemPOne);
document.body.appendChild(elemCatOne);
elemCatTwo.appendChild(elemPTwo);
document.body.appendChild(elemCatTwo);