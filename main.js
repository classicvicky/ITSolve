var open = document.getElementById('open');
var list = document.getElementById('list');
var close = document.getElementById('close')

open.addEventListener('click', function(){
    list.style.display = 'block';
    open.style.display = 'none';
    close.style.display = 'block';
})

close.addEventListener('click', function(){
    list.style.display = 'none';
    open.style.display = 'block';
    close.style.display = 'none'; 
})

