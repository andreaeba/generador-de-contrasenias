// Seccion DOM: container
var body = document.getElementById('body');
var container = document.createElement('div');
container.classList.add('container');
body.appendChild(container);
var h1 = document.createElement('h1');
var h1Text = document.createTextNode('Generador de contraseñas');
h1.appendChild(h1Text);
container.appendChild(h1);
// Sección DOM: mostrar contraseña
var divShow = document.createElement('div');
divShow.classList.add('div-show');
container.appendChild(divShow);
var divPassword = document.createElement('div');
var divCopy = document.createElement('div');
var divRefresh = document.createElement('div');
divShow.appendChild(divPassword);
divShow.appendChild(divCopy);
divShow.appendChild(divRefresh);
divPassword.classList.add('password-section');
var textInit = document.createTextNode('e4¡qQ#98hGFFTh');
divPassword.appendChild(textInit);
var iconCopy = document.createElement('img');
iconCopy.setAttribute('src', './assets/copy.png');
iconCopy.setAttribute('alt', 'copy icon');
divCopy.classList.add('icons');
var iconRefresh = document.createElement('img');
iconRefresh.setAttribute('src', './assets/refresh.png');
iconRefresh.setAttribute('alt', 'refresh icon');
divRefresh.classList.add('icons');
divCopy.appendChild(iconCopy);
divRefresh.appendChild(iconRefresh);
// Sección DOM: configurar contraseña
var divConfig = document.createElement('div');
divConfig.classList.add('div-config');
container.appendChild(divConfig);
var h4 = document.createElement('h6');
var h4Text = document.createTextNode("Personalice su contraseña");
h4.classList.add('text-personalize');
h4.appendChild(h4Text);
divConfig.appendChild(h4);
var divSpecificConfig = document.createElement('div');
var divLength = document.createElement('div');
var divRules = document.createElement('div');
var divCaracter = document.createElement('div');
divLength.classList.add('select-config');
divRules.classList.add('select-config');
divCaracter.classList.add('select-config');
divConfig.appendChild(divSpecificConfig);
divSpecificConfig.classList.add('specific-config');
divSpecificConfig.appendChild(divLength);
divSpecificConfig.appendChild(divRules);
divSpecificConfig.appendChild(divCaracter);
var h6Length = document.createElement('h6');
var h6LengthText = document.createTextNode("Longitud");
var h6Rules = document.createElement('h6');
var h6RulesText = document.createTextNode("Reglas");
var h6Caracter = document.createElement('h6');
var h6CaracterText = document.createTextNode("Caracteres");
divLength.appendChild(h6Length);
h6Length.appendChild(h6LengthText);
divRules.appendChild(h6Rules);
h6Rules.appendChild(h6RulesText);
divCaracter.appendChild(h6Caracter);
h6Caracter.appendChild(h6CaracterText);
var form = document.createElement('form');
//Longitud de contraseña
var selectLength12 = document.createElement('div');
var selectLength9 = document.createElement('div');
var selectLength6 = document.createElement('div');
// Label 1
var labelTwelveCaracter = document.createElement('label');
labelTwelveCaracter.setAttribute("for", "checkTwelve");
labelTwelveCaracter.textContent = "12 caracteres";
var twelveCaracter = document.createElement('input');
twelveCaracter.setAttribute("type", "radio");
twelveCaracter.setAttribute("id", "checkTwelve");
twelveCaracter.setAttribute("name", "select-length");
// twelveCaracter.setAttribute("onchange", "verifica_seleccion(this)")
// Label 2
var labelNineCaracter = document.createElement('label');
labelNineCaracter.setAttribute("for", "checkNine");
labelNineCaracter.textContent = "9 caracteres";
var nineCaracter = document.createElement('input');
nineCaracter.setAttribute("type", "radio");
nineCaracter.setAttribute("id", "checkNine");
nineCaracter.setAttribute("name", "select-length");
// nineCaracter.setAttribute("onchange", "verifica_seleccion(this)")
// Label 3
var labelSixCaracter = document.createElement('label');
labelSixCaracter.setAttribute("for", "checkSix");
labelSixCaracter.textContent = "6 caracteres";
var sixCaracter = document.createElement('input');
sixCaracter.setAttribute("type", "radio");
sixCaracter.setAttribute("id", "checkSix");
sixCaracter.setAttribute("name", "select-length");
// sixCaracter.setAttribute("onchange", "verifica_seleccion(this)")
// function verifica_seleccion(check){
//     if(!check.checked){
//         check.checked=1;
//     }
// }
// verifica_seleccion(twelveCaracter)
form.appendChild(selectLength12);
form.appendChild(selectLength9);
form.appendChild(selectLength6);
divLength.appendChild(form);
selectLength12.appendChild(twelveCaracter);
selectLength12.appendChild(labelTwelveCaracter);
selectLength9.appendChild(nineCaracter);
selectLength9.appendChild(labelNineCaracter);
selectLength6.appendChild(sixCaracter);
selectLength6.appendChild(labelSixCaracter);
//Reglas
var selectRules1 = document.createElement('div');
var selectRules2 = document.createElement('div');
var selectRules3 = document.createElement('div');
// Label 1
var labelOnlyLetters = document.createElement('label');
labelOnlyLetters.setAttribute("for", "checkLetters");
labelOnlyLetters.textContent = "Solo letras";
var onlyLetters = document.createElement('input');
onlyLetters.setAttribute("type", "radio");
onlyLetters.setAttribute("id", "checkLetters");
onlyLetters.setAttribute("name", "select-rules");
// Label 2
var labelSimpleRead = document.createElement('label');
labelSimpleRead.setAttribute("for", "checkRead");
labelSimpleRead.textContent = "Lectura simple";
var simpleRead = document.createElement('input');
simpleRead.setAttribute("type", "radio");
simpleRead.setAttribute("id", "checkRead");
simpleRead.setAttribute("name", "select-rules");
// Label 3
var labelAllCaracter = document.createElement('label');
labelAllCaracter.setAttribute("for", "checkAll");
labelAllCaracter.textContent = "Todos los caracteres";
var allCaracter = document.createElement('input');
allCaracter.setAttribute("type", "radio");
allCaracter.setAttribute("id", "checkAll");
allCaracter.setAttribute("name", "select-rules");
//No meti esta seccion en un form, porque hay que ver como va eso de verdad
divRules.appendChild(selectRules1);
divRules.appendChild(selectRules2);
divRules.appendChild(selectRules3);
selectRules1.appendChild(onlyLetters);
selectRules1.appendChild(labelOnlyLetters);
selectRules2.appendChild(simpleRead);
selectRules2.appendChild(labelSimpleRead);
selectRules3.appendChild(allCaracter);
selectRules3.appendChild(labelAllCaracter);
// Caracteres
var selectCaracter1 = document.createElement('div');
var selectCaracter2 = document.createElement('div');
var selectCaracter3 = document.createElement('div');
var selectCaracter4 = document.createElement('div');
// Label 1
var labelUpperCase = document.createElement('label');
labelUpperCase.setAttribute("for", "check-characters");
labelUpperCase.textContent = "Mayúsculas";
var inputUpperCase = document.createElement('input');
inputUpperCase.setAttribute("type", "checkbox");
inputUpperCase.setAttribute("id", "input-upper-case");
// Label 2
var labelLowerCase = document.createElement('label');
labelLowerCase.setAttribute("for", "check-characters");
labelLowerCase.textContent = "Minúsculas";
var inputLowerCase = document.createElement('input');
inputLowerCase.setAttribute("type", "checkbox");
inputLowerCase.setAttribute("id", "input-lower-case");
// Label 3
var labelNumbers = document.createElement('label');
labelNumbers.setAttribute("for", "check-characters");
labelNumbers.textContent = "Números";
var inputNumbers = document.createElement('input');
inputNumbers.setAttribute("type", "checkbox");
inputNumbers.setAttribute("id", "input-numbers");
inputNumbers.disabled = true;
// Label 4
var labelSymbols = document.createElement('label');
labelSymbols.setAttribute("for", "check-characters");
labelSymbols.textContent = "Símbolos";
var inputSymbols = document.createElement('input');
inputSymbols.setAttribute("type", "checkbox");
inputSymbols.setAttribute("id", "input-symbols");
inputSymbols.disabled = true;
selectCaracter1.appendChild(inputUpperCase);
selectCaracter1.appendChild(labelUpperCase);
selectCaracter2.appendChild(inputLowerCase);
selectCaracter2.appendChild(labelLowerCase);
selectCaracter3.appendChild(inputNumbers);
selectCaracter3.appendChild(labelNumbers);
selectCaracter4.appendChild(inputSymbols);
selectCaracter4.appendChild(labelSymbols);
divCaracter.appendChild(selectCaracter1);
divCaracter.appendChild(selectCaracter2);
divCaracter.appendChild(selectCaracter3);
divCaracter.appendChild(selectCaracter4);
