const body = document.body

const container = document.createElement('div')
const h1 = document.createElement('h1')
const divH1 = document.createElement('div')
divH1.classList.add('title')

const h1Text = document.createTextNode('Generador de contraseñas')

container.classList.add('container')

body.appendChild(divH1)
h1.appendChild(h1Text)
divH1.appendChild(h1)
body.appendChild(container)


// Sección donde se muestra la contraseña

const divShow = document.createElement('div')
const divPassword = document.createElement('div')

// Ícono de copiar a portapapeles
const divCopy = document.createElement('div')
// Ícono de refrescar contraseña
const divRefresh = document.createElement('div')

divShow.classList.add('final-password')

container.appendChild(divShow)
divShow.appendChild(divPassword)
divShow.appendChild(divCopy)
divShow.appendChild(divRefresh)

divPassword.classList.add('final-password-input')

const span = document.createElement('span')
const textInit = document.createTextNode('e4!@¿¿i04FTh')

span.appendChild(textInit)
divPassword.appendChild(span)

span.setAttribute("id", "textPass")

const iconCopy = document.createElement('img')
const iconRefresh = document.createElement('img')

iconCopy.setAttribute('src', './assets/copy.png')
iconCopy.setAttribute('alt', 'copy icon' )

divCopy.classList.add('icons')
divCopy.setAttribute("aria-label", "Copy")


iconRefresh.setAttribute('src', './assets/refresh.png')
iconRefresh.setAttribute('alt', 'refresh icon')

divRefresh.classList.add('icons')
divRefresh.setAttribute("aria-label", "Refresh")

divCopy.appendChild(iconCopy)
divRefresh.appendChild(iconRefresh)

// Sección para configurar contraseña

const divConfig = document.createElement('div')
const h4 = document.createElement('h4')

const h4Text = document.createTextNode("Personalice su contraseña")

divConfig.classList.add('config-section')
h4.classList.add('text-personalize')

container.appendChild(divConfig)
h4.appendChild(h4Text)
divConfig.appendChild(h4)

const divSpecificConfig = document.createElement('div')
const divLength = document.createElement('div')
const divRules = document.createElement('div')
const divCaracter = document.createElement('div')

const footer = document.createElement('div')
const pFooter = document.createElement('p')
const textFooter = document.createTextNode('Creado por Andrea')

body.appendChild(footer)
footer.appendChild(pFooter)
pFooter.appendChild(textFooter)

pFooter.classList.add('footer')


divLength.classList.add('form-parameters')
divRules.classList.add('form-parameters')
divCaracter.classList.add('form-parameters')

const h6Length = document.createElement('h6')
const h6Rules = document.createElement('h6')
const h6Caracter = document.createElement('h6')

h6Length.classList.add('h6title')
h6Rules.classList.add('h6title')
h6Caracter.classList.add('h6title')

const h6LengthText = document.createTextNode("Longitud")
const h6RulesText = document.createTextNode("Reglas")
const h6CaracterText = document.createTextNode("Caracteres")

const form = document.createElement('form')

form.setAttribute("name", "passForm")

form.classList.add('form-control')

divConfig.appendChild(divSpecificConfig)
divLength.appendChild(h6Length)
h6Length.appendChild(h6LengthText)
divRules.appendChild(h6Rules)
h6Rules.appendChild(h6RulesText)
divCaracter.appendChild(h6Caracter)
h6Caracter.appendChild(h6CaracterText)
divSpecificConfig.appendChild(form)
form.appendChild(divLength)
form.appendChild(divRules)
form.appendChild(divCaracter)




// Objetos de caracteres y tipos

const caracters = {
    numeros: "0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9",
    simbolos: "@ ! $ % & * @ ! $ % & *",
    mayusculas: "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z",
    minusculas: "a b c d e f g h i j k l m n o p q r s t u v w x y z"
}

const types = {
    numeros: true,   
    simbolos: true,
    mayusculas: true,
    minusculas: true,
}

// Creación dinámica de los inputs de longitud de caracteres

const lengthChar = [12, 9, 6]

for (const elem of lengthChar) {
    const selectLength = document.createElement('div')

    const label = document.createElement('label')
    label.setAttribute("for", `check-${elem}`)
    label.textContent = `${elem} caracteres`

    const input = document.createElement('input')
    input.setAttribute("type", "radio")
    input.setAttribute("id", `check-${elem}`)
    input.setAttribute("name", "select-length")
    input.setAttribute("value", `${elem}`)
    input.classList.add('long-input')

    selectLength.appendChild(input)
    selectLength.appendChild(label)
    divLength.appendChild(selectLength)


    input.addEventListener("change", () => {
    generatePassword()

    })
}

// Creación dinámica de los inputs de reglas

const rules: string[] = ["Solo-letras", "Lectura-simple", "Todos-los-caracteres"]


for (const elem of rules) {

    const selectRules = document.createElement('div')

    const label = document.createElement('label')
    label.setAttribute("for", `check-${elem}`)
    label.setAttribute("id", `label-${elem}`)

    const input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("id", `check-${elem}`);
    input.setAttribute("name", "select-rules");
    input.setAttribute("value", `${elem}`)
    input.classList.add('rules-input')

    selectRules.appendChild(input)
    selectRules.appendChild(label)
    divRules.appendChild(selectRules)

    input.addEventListener("change", () => {
    generatePassword()

    })
}

const nameSoloLetras = document.getElementById('label-Solo-letras')
const nameSecturaSimple = document.getElementById('label-Lectura-simple')
const nameTodosLosCaractes = document.getElementById('label-Todos-los-caracteres')

nameSoloLetras.textContent = "Solo letras"
nameSecturaSimple.textContent = "Lectura simple"
nameTodosLosCaractes.textContent = "Todos los caracteres"

// Creación dinámica de los inputs de tipos de caracteres

const character: string[] = ["mayusculas", "minusculas", "numeros", "simbolos"]

for (const elem of character) {
    const selectChar = document.createElement('div')
    const label = document.createElement('label')
    label.setAttribute("for", `check-${elem}`)
    label.setAttribute("id", `label-${elem}`)

    const input = document.createElement('input')
    input.setAttribute("type", "checkbox")
    input.setAttribute("id", `check-${elem}`)
    input.setAttribute("name", "select-char");
    input.setAttribute("value", `${elem}`)

    input.classList.add('select-char')

    selectChar.appendChild(input)
    selectChar.appendChild(label)
    divCaracter.appendChild(selectChar)

    input.addEventListener("change", () => {
    generatePassword()

    })

}

    const nameMayusculas = document.getElementById('label-mayusculas')
    const nameMinusculas = document.getElementById('label-minusculas')
    const nameNumeros = document.getElementById('label-numeros')
    const nameSimbolos = document.getElementById('label-simbolos')

    nameMayusculas.textContent = "Mayúsculas"
    nameMinusculas.textContent = "Minúsculas"
    nameNumeros.textContent = "Números"
    nameSimbolos.textContent = "Símbolos"

// Función para generar contraseñas

const generatePassword = () => {

    const longInputs = document.getElementsByClassName("long-input")
    const rulesInputs = document.getElementsByClassName("rules-input")
    const charInputs = document.getElementsByClassName("select-char")

    let char = ""
    let password = ""
    let selectValueLong = 0

    for(const longInput of longInputs) {
        if(longInput.checked == true) {
            if(longInput.value == 12) {
                selectValueLong = 12
            } else if(longInput.value == 9) {
                selectValueLong = 9
            } else if(longInput.value == 6) {
                selectValueLong = 6
            }           
        }
    }

    for(const ruleInput of rulesInputs) {

        if (ruleInput.checked == true)  {
            if(ruleInput.value == "Solo-letras") {

                document.getElementById("check-simbolos").removeAttribute("checked")
                document.getElementById("check-numeros").removeAttribute("checked")
                document.getElementById("check-simbolos").setAttribute("disabled", "true")
                document.getElementById("check-numeros").setAttribute("disabled", "true")
                document.getElementById('check-mayusculas').setAttribute("checked", "checked")
                document.getElementById('check-minusculas').setAttribute("checked", "checked")
                    
                types.mayusculas = true
                types.minusculas = true
                types.numeros = false
                types.simbolos = false

            } else if(ruleInput.value == "Lectura-simple") {

                document.getElementById('check-mayusculas').setAttribute("checked", "checked")
                document.getElementById('check-minusculas').setAttribute("checked", "checked")
                document.getElementById('check-numeros').setAttribute("checked", "checked")
                document.getElementById("check-simbolos").setAttribute("disabled", "true")
                document.getElementById("check-simbolos").removeAttribute("checked")
                document.getElementById("check-numeros").removeAttribute("disabled")   

                types.mayusculas = true
                types.minusculas = true
                types.numeros = true
                types.simbolos = false

            } else if(ruleInput.value == "Todos-los-caracteres") {

                document.getElementById('check-mayusculas').setAttribute("checked", "checked")
                document.getElementById('check-minusculas').setAttribute("checked", "checked")
                document.getElementById('check-numeros').setAttribute("checked", "checked")
                document.getElementById('check-simbolos').setAttribute("checked", "checked")
                document.getElementById("check-numeros").removeAttribute("disabled")
                document.getElementById("check-simbolos").removeAttribute("disabled")
                types.mayusculas = true
                types.minusculas = true
                types.numeros = true
                types.simbolos = true
                
            }
        }

    }

    for(const selectChar of charInputs) {
        for(const type in types) {
            if(selectChar.checked == true) {
                if(type == selectChar.value) {
                    char = char + caracters[type] + " " 
                            
                }
            }
        }

    }

    let newArray = char.split(' ')

    // Función para crear la contraseña random

    for(let i = 0; i < selectValueLong ; i++) {

        password = password + newArray[Math.floor(Math.random() * newArray.length)]
    }

    textInit.textContent = password

}

// Función para copiar la contraseña

const copyToClipBoard = () => {

    let content = document.getElementById('textPass').innerHTML;
    
    navigator.clipboard.writeText(content)
        .then(() => {
        console.log("Text copied to clipboard...")
    })
        .catch(err => {
        console.log('Something went wrong', err);
    })
    alert("¡Copiado en portapapeles!");
}

iconCopy.addEventListener("click", copyToClipBoard)

// Función para refrescar la contraseña

iconRefresh.addEventListener("click", () => {

    generatePassword()

})

// Función para que al inicializar la página tome algunos atributos por default y cree la contraseña

const inicializarPagina = () => {

    const checkInitLength = document.getElementById('check-12')
    const checkInitRules = document.getElementById('check-Solo-letras')
    const checkInitMayusculas = document.getElementById('check-mayusculas')
    const checkInitMinusculas = document.getElementById('check-minusculas')

    checkInitLength.setAttribute('checked', 'checked')
    checkInitRules.setAttribute('checked', 'checked')
    checkInitMayusculas.setAttribute('checked', 'checked')
    checkInitMinusculas.setAttribute('checked', 'checked')
    document.getElementById("check-simbolos").setAttribute("disabled", "true")
    document.getElementById("check-numeros").setAttribute("disabled", "true")
    types.numeros = false
    types.simbolos = false

    generatePassword()
    
}

window.onload = inicializarPagina() 
