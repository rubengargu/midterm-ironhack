/* Crea tu propia lógica para hacer fetch de un post y enseñar su información utilizando DOM manipulation */
/* ADVANCED: consigue que la info del post funcione dinámicamente y enseñe un post u otro según la URL */

//Jarko explanation about how to select the data we want on the page

function getValue() {
    const currentUrl = window.location.href;
    const urlElements = currentUrl.slice(-1);
    return urlElements;
}

console.log(getValue()); // Output: "1"

let postUrl = getValue() || 1;


//Function to get the post for the Project page
const getPost = (post) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post}`)
    .then((response) => response.json())
    .then((res) => {
            document.querySelector('#projectSection').innerHTML += `<h1>${res.title}</h1>
    <div class="subtitle">
        <h2>${res.title}</h2>
    </div>
    <div class="img-container">
        <img src="./resources/images/projects-section/${res.id <= 3 ? res.id : Math.floor(Math.random() * 3 +1)}.jpg" alt="">
    </div>
    <div class="txt-container">
        <p>${res.body}</p>
    </div>`;
    })
    .catch((error) => console.log(error))
}

getPost(postUrl); 

window.onhashchange = function() {
    postUrl = getValue() || 1;
    getPost(postUrl);
  }

 //same function to get 3 post than index.js

 const get3posts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((res) => {
        for (let i = 0; i < 3; i++) {
            document.querySelector('.projectsBox').innerHTML += `<div class="project">
            <img src="./resources/images/projects-section/${res[i].id}.jpg" alt="" class ="projectsImg">
            <h3>${res[i].title}</h3>
            <p>${res[i].body}</p>
            <a href="project.html?p=${res[i].id}">Learn More</a>
            </div>`;
        }
    })
    .catch((error) => console.log(error))
}

window.addEventListener("load", get3posts);
