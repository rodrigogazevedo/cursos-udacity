document.body.innerHTML = '';

var nameToImage = {
    "Tigrinho": "kittycat1.jpg",
    "Tom": "kittycat2.jpg",
    "Neve": "kittycat3.jpg",
    "Garfield": "kittycat4.jpg",
    "Pretinho": "kittycat5.jpg"
};

var currentDiv = null;
var clickCount = {};

for (var nameImg in nameToImage) {

    var elem = document.createElement('div');
    elem.textContent = nameImg;

    elem.style.cursor = 'pointer';
    elem.style.backgroundColor = '#708090';
    elem.style.color = '#FFFFFF';
    elem.style.width = '100px';
    elem.style.height = '30px';
    elem.style.border = '5px solid #000000';
    elem.style.position = 'relative';
    elem.style.textAlign = 'center';
    elem.style.lineHeight = elem.style.height;
    elem.style.borderRadius = '30px';
    elem.style.marginBottom = '10px';


    clickCount[nameImg] = 0;

    elem.addEventListener('click', (function (name) {
    return function () {
        if (currentDiv) {
        currentDiv.parentNode.removeChild(currentDiv);
        }

        var elemDiv = document.createElement('div');

        var imageUrl = nameToImage[name];
        elemDiv.style.backgroundImage = `url("${imageUrl}")`;
        elemDiv.style.backgroundSize = 'cover';
        elemDiv.style.position = 'fixed';
        elemDiv.style.left = '50%';
        elemDiv.style.top = '50%';
        elemDiv.style.transform = 'translate(-50%, -50%)';
        elemDiv.style.width = '300px';
        elemDiv.style.height = '300px';
        elemDiv.style.border = '10px solid #000000';
        elemDiv.style.cursor = 'pointer';

        var elemH3 = document.createElement('h3');
        elemH3.textContent = name;
        elemH3.style.position = 'fixed';
        elemH3.style.top = '-25%';
        elemH3.style.left = '45%';
        elemH3.style.transform = 'translate(-50%, -50%)';

        var elemP = document.createElement('p');
        elemP.innerHTML = `O número de vezes que a imagem do gatinho foi clicada foi <input type="text" value=0 disabled style="width:30px"> vezes`;
        elemP.style.position = 'fixed';
        elemP.style.top = '100%';
        elemP.style.left = '-25%';
        elemP.style.width = '500px';

        elemDiv.addEventListener('click', function () {
            clickCount[name]++;
            elemP.querySelector('input').value = clickCount[name];
        });

        elem.addEventListener('click', function () {
            elemDiv.parentNode.removeChild(elemDiv);
        });

        elemDiv.appendChild(elemH3);
        elemDiv.appendChild(elemP);
        document.body.appendChild(elemDiv);

        currentDiv = elemDiv;
    };
    })(nameImg));

    document.body.appendChild(elem);
};