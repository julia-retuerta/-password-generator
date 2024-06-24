// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// PASOS

//Sincronizar el length del nuevo password con el input range
//Que al cambiar el range, se refleje en el length
//Que al darle al botón de generar contraseña, genere una contraseña
//Que al darle al botón de generar contraseña, se genere una contrseña de la longitud que le hemos dicho

const availableCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/';

let passwordLength = 16;
let finalPassword = '';

const rangeLabelElement = document.getElementById('range-label');
const rangeInputElement = document.getElementById('range');

const updateLabel = () => {
  rangeLabelElement.textContent = `LENGTH: ${rangeInputElement.value}`;
};

rangeInputElement.addEventListener('input', updateLabel);

const generatePasswordButtonElement = document.getElementById('generate-password-button');

const generatePassword = () => {
  finalPassword = '';
  for (let i = 0; i < passwordLength; i++) {
    const randomPosition = Math.floor(Math.random() * availableCharacters.length - 1);
    const randomCharacter = availableCharacters.charAt(randomPosition);
    finalPassword += randomCharacter;
  }
};

generatePasswordButtonElement.addEventListener('click', generatePassword);
