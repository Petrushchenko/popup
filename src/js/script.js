'use strict'
var btn = $(".btn");
   
btn.on('click', openPopUp);

function openPopUp(){
     $('.modal').addClass("opened")
     .on('click', closePopUp);
}

function closePopUp(event){
    console.log(event.target);
    switch (event.target.className) {
        case 'modal__close':
        case "buttons__cancel":
        case 'modal opened':
            $('.modal').removeClass("opened");
            break;
        case 'buttons__uninstall':
            $('.modal').removeClass("opened").end();
            alert('DONE');
            break;
    }
}