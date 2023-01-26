/* Crea tu propia lógica para hacer un fetch que emule una post request a un servidor y enseñe un mensaje en consola cuando la llamada se resuelva */
/*  ADVANCED: utiliza DOM manipulation para enseñarle al user que su mensaje se ha enviado correctamente o no */

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    alert("Thank you! Your Message Has Been Sent.");
  })
  .catch(error => {
    console.error("Error:", error);
    alert("Oh, oh... your message could not be sent, please try again later.");
  });
});
