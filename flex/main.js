var r = document.querySelector(':root');

function changeProperty(value){
  r.style.setProperty('--property', value);
}