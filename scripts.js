var body = document.body;
var container = document.createElement('div');
var h1 = document.createElement('h1');
var divH1 = document.createElement('div');
divH1.classList.add('title');
var h1Text = document.createTextNode('Generador de contraseñas');
container.classList.add('container');
body.appendChild(divH1);
h1.appendChild(h1Text);
divH1.appendChild(h1);
body.appendChild(container);
// Sección donde se muestra la contraseña
var divShow = document.createElement('div');
var divPassword = document.createElement('div');
// Ícono de copiar a portapapeles
var divCopy = document.createElement('div');
// Ícono de refrescar contraseña
var divRefresh = document.createElement('div');
divShow.classList.add('final-password');
container.appendChild(divShow);
divShow.appendChild(divPassword);
divShow.appendChild(divCopy);
divShow.appendChild(divRefresh);
divPassword.classList.add('final-password-input');
var span = document.createElement('span');
var textInit = document.createTextNode('e4!@¿¿i04FTh');
span.appendChild(textInit);
divPassword.appendChild(span);
span.setAttribute("id", "textPass");
var iconCopy = document.createElement('img');
var iconRefresh = document.createElement('img');
iconCopy.setAttribute('src', './assets/copy.png');
iconCopy.setAttribute('alt', 'copy icon');
divCopy.classList.add('icons');
divCopy.setAttribute("aria-label", "Copy");
iconRefresh.setAttribute('src', './assets/refresh.png');
iconRefresh.setAttribute('alt', 'refresh icon');
divRefresh.classList.add('icons');
divRefresh.setAttribute("aria-label", "Refresh");
divCopy.appendChild(iconCopy);
divRefresh.appendChild(iconRefresh);
// Sección para configurar contraseña
var divConfig = document.createElement('div');
var h4 = document.createElement('h4');
var h4Text = document.createTextNode("Personalice su contraseña");
divConfig.classList.add('config-section');
h4.classList.add('text-personalize');
container.appendChild(divConfig);
h4.appendChild(h4Text);
divConfig.appendChild(h4);
var divSpecificConfig = document.createElement('div');
var divLength = document.createElement('div');
var divRules = document.createElement('div');
var divCaracter = document.createElement('div');
var footer = document.createElement('div');
var pFooter = document.createElement('p');
var textFooter = document.createTextNode('Creado por Andrea');
body.appendChild(footer);
footer.appendChild(pFooter);
pFooter.appendChild(textFooter);
pFooter.classList.add('footer');
divLength.classList.add('form-parameters');
divRules.classList.add('form-parameters');
divCaracter.classList.add('form-parameters');
var h6Length = document.createElement('h6');
var h6Rules = document.createElement('h6');
var h6Caracter = document.createElement('h6');
h6Length.classList.add('h6title');
h6Rules.classList.add('h6title');
h6Caracter.classList.add('h6title');
var h6LengthText = document.createTextNode("Longitud");
var h6RulesText = document.createTextNode("Reglas");
var h6CaracterText = document.createTextNode("Caracteres");
var form = document.createElement('form');
form.setAttribute("name", "passForm");
form.classList.add('form-control');
divConfig.appendChild(divSpecificConfig);
divLength.appendChild(h6Length);
h6Length.appendChild(h6LengthText);
divRules.appendChild(h6Rules);
h6Rules.appendChild(h6RulesText);
divCaracter.appendChild(h6Caracter);
h6Caracter.appendChild(h6CaracterText);
divSpecificConfig.appendChild(form);
form.appendChild(divLength);
form.appendChild(divRules);
form.appendChild(divCaracter);
// Objetos de caracteres y tipos
var caracters = {
    numeros: "0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9",
    simbolos: "@ ! $ % & * @ ! $ % & *",
    mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z"
};
var types = {
    numeros: true,
    simbolos: true,
    mayusculas: true,
    minusculas: true
};
// Creación dinámica de los inputs de longitud de caracteres
var lengthChar = [12, 9, 6];
for (var _i = 0, lengthChar_1 = lengthChar; _i < lengthChar_1.length; _i++) {
    var elem = lengthChar_1[_i];
    var selectLength = document.createElement('div');
    var label = document.createElement('label');
    label.setAttribute("for", "check-".concat(elem));
    label.textContent = "".concat(elem, " caracteres");
    var input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", "check-".concat(elem));
    input.setAttribute("name", "select-length");
    input.setAttribute("value", "".concat(elem));
    input.classList.add('long-input');
    selectLength.appendChild(input);
    selectLength.appendChild(label);
    divLength.appendChild(selectLength);
    input.addEventListener("change", function () {
        generatePassword();
    });
}
// Creación dinámica de los inputs de reglas
var rules = ["Solo-letras", "Lectura-simple", "Todos-los-caracteres"];
for (var _a = 0, rules_1 = rules; _a < rules_1.length; _a++) {
    var elem = rules_1[_a];
    var selectRules = document.createElement('div');
    var label = document.createElement('label');
    label.setAttribute("for", "check-".concat(elem));
    label.setAttribute("id", "label-".concat(elem));
    var input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", "check-".concat(elem));
    input.setAttribute("name", "select-rules");
    input.setAttribute("value", "".concat(elem));
    input.classList.add('rules-input');
    selectRules.appendChild(input);
    selectRules.appendChild(label);
    divRules.appendChild(selectRules);
    input.addEventListener("change", function () {
        generatePassword();
    });
}
var nameSoloLetras = document.getElementById('label-Solo-letras');
var nameSecturaSimple = document.getElementById('label-Lectura-simple');
var nameTodosLosCaractes = document.getElementById('label-Todos-los-caracteres');
nameSoloLetras.textContent = "Solo letras";
nameSecturaSimple.textContent = "Lectura simple";
nameTodosLosCaractes.textContent = "Todos los caracteres";
// Creación dinámica de los inputs de tipos de caracteres
var character = ["mayusculas", "minusculas", "numeros", "simbolos"];
for (var _b = 0, character_1 = character; _b < character_1.length; _b++) {
    var elem = character_1[_b];
    var selectChar = document.createElement('div');
    var label = document.createElement('label');
    label.setAttribute("for", "check-".concat(elem));
    label.setAttribute("id", "label-".concat(elem));
    var input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.setAttribute("id", "check-".concat(elem));
    input.setAttribute("name", "select-char");
    input.setAttribute("value", "".concat(elem));
    input.classList.add('select-char');
    selectChar.appendChild(input);
    selectChar.appendChild(label);
    divCaracter.appendChild(selectChar);
    input.addEventListener("change", function () {
        generatePassword();
    });
}
var nameMayusculas = document.getElementById('label-mayusculas');
var nameMinusculas = document.getElementById('label-minusculas');
var nameNumeros = document.getElementById('label-numeros');
var nameSimbolos = document.getElementById('label-simbolos');
nameMayusculas.textContent = "Mayúsculas";
nameMinusculas.textContent = "Minúsculas";
nameNumeros.textContent = "Números";
nameSimbolos.textContent = "Símbolos";
// Función para generar contraseñas
var generatePassword = function () {
    var longInputs = document.getElementsByClassName("long-input");
    var rulesInputs = document.getElementsByClassName("rules-input");
    var charInputs = document.getElementsByClassName("select-char");
    var char = "";
    var password = "";
    var selectValueLong = 0;
    for (var _i = 0, longInputs_1 = longInputs; _i < longInputs_1.length; _i++) {
        var longInput = longInputs_1[_i];
        if (longInput.checked == true) {
            if (longInput.value == 12) {
                selectValueLong = 12;
            }
            else if (longInput.value == 9) {
                selectValueLong = 9;
            }
            else if (longInput.value == 6) {
                selectValueLong = 6;
            }
        }
    }
    for (var _a = 0, rulesInputs_1 = rulesInputs; _a < rulesInputs_1.length; _a++) {
        var ruleInput = rulesInputs_1[_a];
        if (ruleInput.checked == true) {
            if (ruleInput.value == "Solo-letras") {
                document.getElementById("check-simbolos").removeAttribute("checked");
                document.getElementById("check-numeros").removeAttribute("checked");
                document.getElementById("check-simbolos").setAttribute("disabled", "true");
                document.getElementById("check-numeros").setAttribute("disabled", "true");
                document.getElementById('check-mayusculas').setAttribute("checked", "checked");
                document.getElementById('check-minusculas').setAttribute("checked", "checked");
                types.mayusculas = true;
                types.minusculas = true;
                types.numeros = false;
                types.simbolos = false;
            }
            else if (ruleInput.value == "Lectura-simple") {
                document.getElementById('check-mayusculas').setAttribute("checked", "checked");
                document.getElementById('check-minusculas').setAttribute("checked", "checked");
                document.getElementById('check-numeros').setAttribute("checked", "checked");
                document.getElementById("check-simbolos").setAttribute("disabled", "true");
                document.getElementById("check-simbolos").removeAttribute("checked");
                document.getElementById("check-numeros").removeAttribute("disabled");
                types.mayusculas = true;
                types.minusculas = true;
                types.numeros = true;
                types.simbolos = false;
            }
            else if (ruleInput.value == "Todos-los-caracteres") {
                document.getElementById('check-mayusculas').setAttribute("checked", "checked");
                document.getElementById('check-minusculas').setAttribute("checked", "checked");
                document.getElementById('check-numeros').setAttribute("checked", "checked");
                document.getElementById('check-simbolos').setAttribute("checked", "checked");
                document.getElementById("check-numeros").removeAttribute("disabled");
                document.getElementById("check-simbolos").removeAttribute("disabled");
                types.mayusculas = true;
                types.minusculas = true;
                types.numeros = true;
                types.simbolos = true;
            }
        }
    }
    for (var _b = 0, charInputs_1 = charInputs; _b < charInputs_1.length; _b++) {
        var selectChar = charInputs_1[_b];
        for (var type in types) {
            if (selectChar.checked == true) {
                if (type == selectChar.value) {
                    char = char + caracters[type] + " ";
                }
            }
        }
    }
    var newArray = char.split(' ');
    // Función para crear la contraseña random
    for (var i = 0; i < selectValueLong; i++) {
        password = password + newArray[Math.floor(Math.random() * newArray.length)];
    }
    textInit.textContent = password;
};
// Función para copiar la contraseña
var copyToClipBoard = function () {
    var content = document.getElementById('textPass').innerHTML;
    navigator.clipboard.writeText(content)
        .then(function () {
        console.log("Text copied to clipboard...");
    })["catch"](function (err) {
        console.log('Something went wrong', err);
    });
    alert("¡Copiado en portapapeles!");
};
iconCopy.addEventListener("click", copyToClipBoard);
// Función para refrescar la contraseña
iconRefresh.addEventListener("click", function () {
    generatePassword();
});
// Función para que al inicializar la página tome algunos atributos por default y cree la contraseña
var inicializarPagina = function () {
    var checkInitLength = document.getElementById('check-12');
    var checkInitRules = document.getElementById('check-Solo-letras');
    var checkInitMayusculas = document.getElementById('check-mayusculas');
    var checkInitMinusculas = document.getElementById('check-minusculas');
    checkInitLength.setAttribute('checked', 'checked');
    checkInitRules.setAttribute('checked', 'checked');
    checkInitMayusculas.setAttribute('checked', 'checked');
    checkInitMinusculas.setAttribute('checked', 'checked');
    document.getElementById("check-simbolos").setAttribute("disabled", "true");
    document.getElementById("check-numeros").setAttribute("disabled", "true");
    types.numeros = false;
    types.simbolos = false;
    generatePassword();
};
window.onload = inicializarPagina();
