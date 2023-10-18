var r = document.querySelector(":root");

function changeProperty(value, property = "--property") {
  r.style.setProperty(property, value);
}
