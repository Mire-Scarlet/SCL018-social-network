import { createUser } from '../firebase/firebase.js';
// aqui exportaras las funciones que necesites

// const printLogin = document.getElementById('root');

export const templateRegister = () => {
  const containerTemplateSignUp = document.createElement("section");
  containerTemplateSignUp.className = "signUp-container";
  // aqui tu codigo
  const login = `
    <main class= "grid-template" >
    <input type="mail" 
    placeholder="Ingresa tu Correo" 
    id="emailUp" />
    <input type="password"
    placeholder="Ingresa tu contraseña"
    id="passwordUp"/>
    <button id="enter">
    Iniciar sesión
    </button>
    <button id:"google">
    Continuar con google
    </button>
    <button id="register">
    Crear Cuenta
    </button>
    </main>
    `;
  containerTemplateSignUp.innerHTML = login;
  containerTemplateSignUp.querySelector('#register').addEventListener('click', () => {
    createUser();
    // console.log(containerTemplateSignUp);
  });
//Al poner containerTemplateSignUp retorna solo código, pero con login retorna templey, pero no funcionar firebase.
  return login;
};
