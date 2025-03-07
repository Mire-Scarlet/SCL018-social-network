import { signOutUser, printPost } from '../firebase/firebase.js';
import { feedPost } from './post.js';

export const feedSpace = () => {
  const containerFeedSpace = document.createElement('section');
  containerFeedSpace.className = 'feed-container';
  containerFeedSpace.innerHTML = `
  <div id='feedContainer' class='feedContainer'>
    <nav class='navbar' id='navbar'>
    <img class='icon' src='./imagenes/home.svg'/>
       <a href="#/feed" class= 'url'>INICIO</a> 
       <a href="#/newPost" class= 'url'>NUEVA PUBLICACIÓN</a> <img class='icon' src="./imagenes/review.svg"/>
       <a href="#/logout" id='logout' class= 'url'>CERRAR SESIÓN</a>
       <img class='icon' src="./imagenes/perfil.svg" />
    </nav>
       
     <main class= 'posts-main'>
     <section id='post'></section>
     </main>
     <footer class='footer'>
     "Mewple, todos los derechos reservados ©"
     </footer>
     </div>  
      `;

  printPost(feedPost, 'posts');

  containerFeedSpace.querySelector('#logout').addEventListener('click', () => {
    signOutUser();
  });

  return containerFeedSpace;
};
