
var Name=document.querySelector('h2');
var logout=document.getElementById('logout');

let params = new URLSearchParams(window.location.search);

Name.innerHTML='Welcome '+ params.get('name');


logout.addEventListener('click',function(){

  localStorage.clear();
  window.location='login.html'

});

console.log(params.get('name'));  