const root = document.querySelector(':root');

function blueMode() {
  root.style.setProperty('--primary-color', 'skyblue');
  root.style.setProperty('--secondary-color', 'blueviolet');
}

function greenMode() {
  root.style.setProperty('--primary-color', 'lightgreen');
  root.style.setProperty('--secondary-color', 'green'); 
}
function orangeMode() {
  root.style.setProperty('--primary-color', 'blanchedalmond');
  root.style.setProperty('--secondary-color', '#C04000');
}
if (location.pathname == "/index.html" || location.pathname == null) {
  window.alert("Hi! I am on a break right now but you're free to scroll through my work");
}
