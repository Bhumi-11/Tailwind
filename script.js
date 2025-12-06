let button = document.querySelectorAll(".menubutton p")[0]
button.addEventListener('click',function(){
    let list = document.querySelectorAll('.header .menubutton .mainmenu')
    console.log();
    list.className += 'active' 
})