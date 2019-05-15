'use strict';

const userGroup = document.getElementById("users")

const getProfile = () => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      let lastName = data.results["0"].name.last;
      lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)

      let title = data.results["0"].name.title;
      title = title.charAt(0).toUpperCase() + title.slice(1)

      let image = data.results["0"].picture.large;

      createDom(title, lastName, image);
    })
    .catch(error => console.log("oops, looks like we got an error: ", error))
    .finally(() => console.log("finally, This function always runs..."))
}

// Thank you Emily!
const createDom = (title, lastName, image) => {
  userGroup.innerHTML += `
    <div style='display:inline-block; margin:3%;'>
      <div>
      ${title + ". " + lastName}
      <br>
      <img src='${image}'/>
      </div>
    </div>
  `
}