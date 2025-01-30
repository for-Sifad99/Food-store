const hover = document.querySelector('#hover');
const menu1 = document.querySelector('#menu1');

hover.addEventListener('click', () =>{
  if (menu1.classList.contains('hidden')){
    menu1.classList.remove('hidden');
  }else{
    menu1.classList.add('hidden');
  }
})

const menu2 = document.querySelector('#menu2');
hover.addEventListener('click', () =>{
  if (menu2.classList.contains('hidden')){
    menu2.classList.remove('hidden');
  }else{
    menu2.classList.add('hidden');
  }
})