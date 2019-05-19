'use strict';

const userGroup = document.getElementById("users");
let counter = 0;

const getProfile = () => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {

      // Title
      let title = data.results["0"].name.title;
      title = title.charAt(0).toUpperCase() + title.slice(1)

      // First Name
      let firstName = data.results["0"].name.first;
      firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)

      // Last Name
      let lastName = data.results["0"].name.last;
      lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)

      // Profile image
      let image = data.results["0"].picture.large;

      // Address
      let street = data.results["0"].location.street;
      let city = data.results["0"].location.city;
      let state = data.results["0"].location.state;
      let zip = data.results["0"].location.postcode;
      let address = street + ", " + city + ", " + state + ", " + zip;

      // DOB
      let dob = data.results["0"].dob.date;
      dob = dob.slice(0, 10);

      // Age
      let age = data.results["0"].dob.age;

      // Email
      let email = data.results["0"].email;

      // Generate Unique ID
      let id = counter;
      createUser(title, firstName, lastName, image, email, address, dob, age, id);
      counter++;
    })
    .catch(error => console.log("oops, looks like we got an error: ", error))
    .finally(() => console.log("finally, This function always runs..."))
}

const createUser = (title, firstName, lastName, image, email, address, dob, age, id) => {

  const profileBox = document.createElement("div");
  const nameLabel = document.createElement("div");
  const userImage = document.createElement("img");
  const moreBtn = document.createElement("button");
  const container = document.createElement("div");
  const fullName = document.createElement("div");
  const cAddress = document.createElement("div");
  const birth = document.createElement("div");
  const personAge = document.createElement("div");
  const eAddress = document.createElement("div");

  const index = id;

  userGroup.setAttribute("style", "display:inline-block; margin:3%;")
  nameLabel.innerText = `${title}, ${lastName}`;
  userImage.setAttribute("src", image);
  moreBtn.innerText = " Full Information";
  moreBtn.setAttribute("onClick", `displayMore(${index})`);

  container.setAttribute("class", "more-info");
  container.setAttribute("style", "display:none;");

  fullName.innerText = `${"Full Name: " + firstName + ", " + lastName}`;

  cAddress.innerText = `${"Full Address: " + address}`;

  birth.innerText = `${"DOB: " + dob}`;

  personAge.innerText = `${"Age: " + age}`;

  eAddress.innerText = `${"Email Address: " + email}`;

  profileBox.appendChild(nameLabel);
  profileBox.appendChild(userImage);
  profileBox.appendChild(moreBtn);
  moreBtn.appendChild(container)
  container.appendChild(fullName);
  container.appendChild(cAddress);
  container.appendChild(birth);
  container.appendChild(personAge);
  container.appendChild(eAddress);

  userGroup.appendChild(profileBox);

}

//Hellper method to toggle each `Full Information` button
function displayMore(id) {
  if (document.getElementsByClassName("more-info")[id].style.display === "none") {
    document.getElementsByClassName("more-info")[id].style.display = "inline-block";
  } else {
    document.getElementsByClassName("more-info")[id].style.display = "none";
  }
}

