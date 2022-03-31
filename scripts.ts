// Seccion DOM: container
const body = document.getElementById('body')
const container = document.createElement('div')

container.classList.add('container')

body.appendChild(container)

const h1 = document.createElement('h1')
const h1Text = document.createTextNode('Generador de contraseñas')

h1.appendChild(h1Text)
container.appendChild(h1)

// Sección DOM: mostrar contraseña

const divShow = document.createElement('div')
divShow.classList.add('div-show')

container.appendChild(divShow)

const divPassword = document.createElement('div')
const divCopy = document.createElement('div')
const divRefresh = document.createElement('div')

divShow.appendChild(divPassword)
divShow.appendChild(divCopy)
divShow.appendChild(divRefresh)

divPassword.classList.add('password-section')
const textInit = document.createTextNode('e4¡qQ<>98hGFFTh') 
divPassword.appendChild(textInit)

const iconCopy = document.createElement('img')
iconCopy.setAttribute('src', './assets/copy.png')
iconCopy.setAttribute('alt', 'copy icon' )
divCopy.classList.add('icons')

const iconRefresh = document.createElement('img')
iconRefresh.setAttribute('src', './assets/refresh.png')
iconRefresh.setAttribute('alt', 'refresh icon')
divRefresh.classList.add('icons')

divCopy.appendChild(iconCopy)
divRefresh.appendChild(iconRefresh)

// Sección DOM: configurar contraseña

const divConfig = document.createElement('div')
divConfig.classList.add('div-config')

container.appendChild(divConfig)

const h4 = document.createElement('h6')
const h4Text = document.createTextNode("Personalice su contraseña")
h4.classList.add('text-personalize')

h4.appendChild(h4Text)
divConfig.appendChild(h4)

const divSpecificConfig = document.createElement('div')
const divLength = document.createElement('div')
const divRules = document.createElement('div')
const divCaracter = document.createElement('div')

divLength.classList.add('select-config')
divRules.classList.add('select-config')
divCaracter.classList.add('select-config')

divConfig.appendChild(divSpecificConfig)
divSpecificConfig.classList.add('specific-config')
divSpecificConfig.appendChild(divLength)
divSpecificConfig.appendChild(divRules)
divSpecificConfig.appendChild(divCaracter)

const h6Length = document.createElement('h6')
const h6LengthText = document.createTextNode("Longitud")

const h6Rules = document.createElement('h6')
const h6RulesText = document.createTextNode("Reglas")

const h6Caracter = document.createElement('h6')
const h6CaracterText = document.createTextNode("Caracteres")

divLength.appendChild(h6Length)
h6Length.appendChild(h6LengthText)
divRules.appendChild(h6Rules)
h6Rules.appendChild(h6RulesText)
divCaracter.appendChild(h6Caracter)
h6Caracter.appendChild(h6CaracterText)

const form = document.createElement('form')


//Longitud de contraseña
const selectLength12 = document.createElement('div')
const selectLength9 = document.createElement('div')
const selectLength6 = document.createElement('div')


const labelTwelveCaracter = document.createElement('label')
labelTwelveCaracter.setAttribute("for", "checkTwelve")
labelTwelveCaracter.textContent = "12 caracteres"

const twelveCaracter = document.createElement('input');
twelveCaracter.setAttribute("type", "radio");
twelveCaracter.setAttribute("id", "checkTwelve");


const labelNineCaracter = document.createElement('label')
labelNineCaracter.setAttribute("for", "checkNine");
labelNineCaracter.textContent = "9 caracteres"

const nineCaracter = document.createElement('input');
nineCaracter.setAttribute("type", "radio");
nineCaracter.setAttribute("id", "checkNine");


const labelSixCaracter = document.createElement('label')
labelSixCaracter.setAttribute("for", "checkSix")
labelSixCaracter.textContent = "6 caracteres"

const sixCaracter = document.createElement('input');
sixCaracter.setAttribute("type", "radio");
sixCaracter.setAttribute("id", "checkSix");

form.appendChild(selectLength12)
form.appendChild(selectLength9)
form.appendChild(selectLength6)

divLength.appendChild(form)
selectLength12.appendChild(twelveCaracter)
selectLength12.appendChild(labelTwelveCaracter)
selectLength9.appendChild(nineCaracter)
selectLength9.appendChild(labelNineCaracter)
selectLength6.appendChild(sixCaracter)
selectLength6.appendChild(labelSixCaracter)





