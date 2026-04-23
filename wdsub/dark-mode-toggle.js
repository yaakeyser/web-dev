let togDiv1 = document.getElementById("tog-div-1");
let togDiv2 = document.getElementById("tog-div-2");


// togDiv1.style.backgroundColor = "black"
// togDiv1.style.backgroundColor = "white"


let isOn = true;

function mngMode(event) {

  
  // Change background color to black if light mode, else white
  if (isOn) document.body.style.backgroundColor = "black";
  else document.body.style.backgroundColor = "white";
  
  // Change text color to white if light mode, else black
  if (isOn) document.body.style.color = "white";
  else document.body.style.color = "black";
  
  // Change text to "dark mode on" if light mode, else "dark mode off"
  if (isOn) togDiv2.innerHTML = "<p>dark mode on</p>";
  else togDiv2.innerHTML = "<p>dark mode off</p>";
  
  // Flip the isOn switch
  isOn = !isOn;
  
}


// const WHITE = "Dark Mode Off"
// const BLACK = "Dark Mode On"


