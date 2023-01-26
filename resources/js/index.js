/* Crea tu propia lógica para hacer fetch de 3 posts distintos y enseñarlos en la homepage con DOM manipulation */

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

/* Función para hacer un scroll Up */

let scrollBtn = document.querySelector(".scrollUp");

const scrollMeAllTheWayUp = () => {
  console.log(window);
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

scrollBtn.addEventListener("click", scrollMeAllTheWayUp)