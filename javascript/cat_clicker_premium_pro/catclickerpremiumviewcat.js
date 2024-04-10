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
        
        // Atualiza as informações do gato selecionado quando a imagem do gato é clicada
        view.updateSelectedCatInfo(nameImg);
    }
};

// View - interface do usuário
var view = {
    // Variável para armazenar temporariamente as informações do gato selecionado
    selectedCatInfo: null,

    // Função para preencher os campos de entrada com as informações do gato selecionado
    fillInputFields: function () {
        var inputNewName = document.getElementById('catNameInput');
        var inputNewImageUrl = document.getElementById('catImageUrlInput');
        var inputClickCount = document.getElementById('clickCountInput');

        if (view.selectedCatInfo) {
            inputNewName.value = view.selectedCatInfo.name;
            inputNewImageUrl.value = view.selectedCatInfo.imageUrl;
            inputClickCount.value = view.selectedCatInfo.clickCount;
        }
    },

    // Função para atualizar as informações do gato selecionado
    updateSelectedCatInfo: function (nameImg) {
        view.selectedCatInfo = {
            name: nameImg,
            imageUrl: model.nameToImage[nameImg],
            clickCount: model.clickCount[nameImg] || 0
        };
    },

    // Função para remover a div de inputs
    removeInputContainer: function () {
        var inputContainer = document.getElementById('input-container');
        if (inputContainer) {
            inputContainer.parentNode.removeChild(inputContainer);
        }
    },

    // Função para remover a imagem atual
    removeImage: function () {
        if (model.currentDiv) {
            model.currentDiv.parentNode.removeChild(model.currentDiv);
            model.currentDiv = null; // Define a imagem atual como null
        }
    },

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
            // Atualiza as informações do gato selecionado quando a imagem do gato é clicada
            view.updateSelectedCatInfo(nameImg);
        });

        document.body.appendChild(elemDiv);

        model.currentDiv = elemDiv;
    },

    // Atualiza o contador na visualização da imagem
    updateCounter: function (elemP, nameImg) {
        elemP.innerHTML = `O número de vezes que a imagem do gatinho foi clicada foi <input type="text" value=${model.clickCount[nameImg]} disabled style="width:30px"> vezes`;
    },

    // Inicializa a interface do usuário
    init: function () {
        document.body.innerHTML = ''; // Limpa o conteúdo do corpo do documento

        var listContainer = document.createElement('div');
        listContainer.style.textAlign = 'center';
        Object.keys(model.nameToImage).forEach(function (nameImg) {
            var listItem = view.createListItem(nameImg);
            listContainer.appendChild(listItem);
        });
        document.body.appendChild(listContainer);

        var buttonAdmin = document.createElement('button');
        buttonAdmin.textContent = 'Admin';
        buttonAdmin.style.width = '110px';
        buttonAdmin.style.height = '50px';
        buttonAdmin.style.margin = '10px auto';
        buttonAdmin.style.position = 'relative';
        buttonAdmin.style.textAlign = 'center';
        buttonAdmin.style.margin = '10px';
        buttonAdmin.addEventListener('click', function () {
            view.removeInputs();
            view.removeImage();
            view.removeInputContainer();

            // Cria inputs de texto vazios
            var inputContainer = document.createElement('div');
            //inputContainer.style.textAlign = 'center';
            inputContainer.style.marginTop = '10px';
            inputContainer.id = 'input-container';

            var nameLabel = document.createElement('label');
            nameLabel.textContent = 'Nome: ';
            nameLabel.for = 'catNameInput';
            inputContainer.appendChild(nameLabel);

            var inputNewName = document.createElement('input');
            inputNewName.type = 'text';
            inputNewName.placeholder = 'Insira o nome do gato';
            inputNewName.id = 'catNameInput';
            inputNewName.style.marginRight = '5px';
            inputContainer.appendChild(inputNewName);

            inputContainer.appendChild(document.createElement('br')); // Adiciona uma quebra de linha

            var imgUrlLabel = document.createElement('label');
            imgUrlLabel.textContent = 'URL da imagem: ';
            imgUrlLabel.for = 'catImageUrlInput';
            inputContainer.appendChild(imgUrlLabel);

            var inputNewImageUrl = document.createElement('input');
            inputNewImageUrl.type = 'text';
            inputNewImageUrl.placeholder = 'Insira a URL da foto do gato';
            inputNewImageUrl.id = 'catImageUrlInput';
            inputNewImageUrl.style.width = '200px';

            inputContainer.appendChild(inputNewImageUrl);

            inputContainer.appendChild(document.createElement('br')); // Adiciona uma quebra de linha

            var clickCountLabel = document.createElement('label');
            clickCountLabel.textContent = 'Cliques: ';
            clickCountLabel.for = 'clickCountInput';
            inputContainer.appendChild(clickCountLabel);

            var inputClickCount = document.createElement('input');
            inputClickCount.type = 'text';
            inputClickCount.id = 'clickCountInput';
            inputClickCount.style.marginRight = '5px';
            inputClickCount.disabled = true;
            inputContainer.appendChild(inputClickCount);

            // Calcula a quantidade de cliques da imagem selecionada
            var selectedImageName = inputNewName.value.trim();
            if (model.clickCount[selectedImageName] !== undefined) {
                inputClickCount.value = model.clickCount[selectedImageName];
            } else {
                inputClickCount.value = 0;
            }

            inputContainer.appendChild(document.createElement('br')); // Adiciona uma quebra de linha

            var saveButton = document.createElement('button');
            saveButton.textContent = 'Salvar';
            saveButton.addEventListener('click', function () {
                var newName = inputNewName.value.trim();
                var newImageUrl = inputNewImageUrl.value.trim();
                if (newName !== '' && newImageUrl !== '') {
                    // Adiciona novo nome e URL da imagem à lista de gatos existentes
                    model.nameToImage[newName] = newImageUrl;
                    // Renderiza a lista novamente
                    view.init();
                }
            });
            inputContainer.appendChild(saveButton);

            var cancelButton = document.createElement('button');
            cancelButton.textContent = 'Cancelar';
            cancelButton.addEventListener('click', function () {
                view.removeInputContainer(); // Remove a área de inputs do admin
            });
            inputContainer.appendChild(cancelButton);

            document.body.appendChild(inputContainer);

            // Preenche os campos de entrada com as informações do gato selecionado
            view.fillInputFields();
        });
        document.body.appendChild(buttonAdmin);
    },

    removeInputs: function () {
        var inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach(function (input) {
            input.parentNode.removeChild(input);
        });
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

            // Atualiza os campos de entrada com as informações do gato selecionado
            view.fillInputFields();
        });

        return elem;
    }
};

// Inicializa a interface do usuário
view.init();