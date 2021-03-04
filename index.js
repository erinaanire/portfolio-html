const headingTag = document.getElementById("heading");
console.log("headingTag",headingTag);

const newHeading = document.createElement("h1");
//const headTag = document.createElement("h5");
//const para = document.createElement("p");
const node = document.createTextNode("Erina Rodrigues.");
newHeading.appendChild(node);
//console.log("ka ala",paraTag);
const divTag = headingTag.appendChild(newHeading);
//const headTag = document.createElement("h5");
//var headingOutput = headingTag.appendChild(paraTag);
