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

Object.entries(nameToImage).map(([nameImg, imageUrl]) => {

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

    document.body.appendChild(elem);
});