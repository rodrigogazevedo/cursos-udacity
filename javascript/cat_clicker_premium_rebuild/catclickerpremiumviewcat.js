document.body.innerHTML = '';

// Modelo - dados e lógica de negócios
var model = {
    nameToImage: {
        "Tigrinho": "kittycat1.jpg",
        "Tom": "kittycat2.jpg",
        "Neve": "kittycat3.jpg",
        "Garfield": "kittycat4.jpg",
        "Pretinho": "kittycat5.jpg"
    },
    clickCount: {},
    currentDiv: null
};

// ViewModel - lógica de apresentação e interação
var viewModel = {
    // Atualiza o contador de cliques e solicita a renderização da visualização da imagem
    showImageWithCounter: function (nameImg, type) {
        if (!model.clickCount[nameImg]) {
            model.clickCount[nameImg] = 0;
        }

        if (model.currentDiv) {
            model.currentDiv.parentNode.removeChild(model.currentDiv);
        }

        if (type === "image") {
            model.clickCount[nameImg]++;
        }
        view.renderImage(nameImg, model.clickCount[nameImg]);
    }
};

// View - interface do usuário
var view = {
    // Renderiza a visualização da imagem
    renderImage: function (nameImg, clickCount) {
        var imageUrl = model.nameToImage[nameImg];

        var elemDiv = document.createElement('div');
        elemDiv.style.backgroundImage = `url("${imageUrl}")`;
        elemDiv.style.backgroundSize = 'cover';
        elemDiv.style.position = 'fixed';
        elemDiv.style.left = '50%';
        elemDiv.style.top = '50%';
        elemDiv.style.transform = 'translate(-50%, -50%)'; // Centraliza a div
        elemDiv.style.width = '300px';
        elemDiv.style.height = '300px';
        elemDiv.style.border = '10px solid #000000';
        elemDiv.style.cursor = 'pointer';

        var elemH3 = document.createElement('h3');
        elemH3.textContent = nameImg;
        elemH3.style.position = 'fixed';
        elemH3.style.top = '-25%';
        elemH3.style.left = '45%';
        elemH3.style.transform = 'translate(-50%, -50%)';

        var elemP = document.createElement('p');
        elemP.innerHTML = `O número de vezes que a imagem do gatinho foi clicada foi <input type="text" value=${clickCount} disabled style="width:30px"> vezes`;
        elemP.style.position = 'fixed';
        elemP.style.top = '100%';
        elemP.style.left = '-25%';
        elemP.style.width = '500px';

        elemDiv.appendChild(elemH3);
        elemDiv.appendChild(elemP);

        elemDiv.addEventListener('click', function () {
            viewModel.showImageWithCounter(nameImg, 'image');
            view.updateCounter(elemP, nameImg);
        });

        document.body.appendChild(elemDiv);

        model.currentDiv = elemDiv;
    },

    // Atualiza o contador na visualização da imagem
    updateCounter: function (elemP, nameImg) {
        elemP.textContent = `O número de vezes que a imagem do gatinho foi clicada foi ${model.clickCount[nameImg]} vezes`;
    },

    // Inicializa a interface do usuário
    init: function () {
        var listContainer = document.createElement('div');
        listContainer.style.textAlign = 'center';
        Object.keys(model.nameToImage).forEach(function (nameImg) {
            var listItem = view.createListItem(nameImg);
            listContainer.appendChild(listItem);
        });
        document.body.appendChild(listContainer);
    },

    // Cria os itens da lista
    createListItem: function (nameImg) {
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
        elem.style.margin = '10px'; // Centraliza a lista
        elem.style.marginBottom = '10px';

        elem.addEventListener('click', function () {
            viewModel.showImageWithCounter(nameImg, "button");
        });

        return elem;
    }
};

// Inicializa a interface do usuário
view.init();
