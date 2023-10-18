var r = document.querySelector(':root');

function changeProperty(value){
  let prev = r.style.getPropertyValue('--property');
  r.style.setProperty('--prev', prev);
  r.style.setProperty('--property', value);

}