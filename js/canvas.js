//create 1600 div with "pixel" className
for (let step = 0; step < 1600; step++) {
  //create a div
  var pixel = document.createElement("div");
  //select the container with canvas Class
  var canvas = document.querySelector(".canvas");
  //append the div to the container
  document.querySelector(".canvas").appendChild(pixel);
  //add a class to the div
  pixel.setAttribute("class", "pixel");
}
