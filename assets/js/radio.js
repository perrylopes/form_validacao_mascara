let m = document.getElementById('form_m');
let gm = document.getElementById('genero_m');
let f = document.getElementById('form_f');
let gf = document.getElementById('genero_f');


m.addEventListener('click', function(){
   m.style.backgroundColor ='#fbf7f7';
   f.style.backgroundColor = "#f4f4f4"
   gm.checked = true;

});

f.addEventListener('click', function(){
    f.style.backgroundColor ='#fbf7f7';
    m.style.backgroundColor = '#f4f4f4';
    gf.checked = true;
 })