'use strict'
var btn = $(".btn");
   
btn.on('click', openPopUp);

function openPopUp(){

    let modal = new PopUp(this).showPopUp();
    
}

function closePopUp(event){
    
    switch (event.target.className) {
        case 'modal__close':
        case "buttons__cancel":
        case 'modal opened':
            $('.modal').removeClass("opened");
            break;
        case 'buttons__alt':
            $('.modal').removeClass("opened");
            alert('DONE');
            break;
    }
}
class PopUp {
    constructor(btn){
        this.text = btn.textContent;

    }
    showPopUp() {
    
        let mod = document.createElement('div');
        mod.classList = "modal opened";

        let alert = document.createElement('div');
        alert.classList = 'modal__alert';

        let btnModalClose = document.createElement('span');
        btnModalClose.classList = "modal__close";

        let imgWrapper = document.createElement("div");
        imgWrapper.classList = "modal__warning";

        let buttonsWrapper = document.createElement('div');
        buttonsWrapper.classList = "modal__buttons";

        let image, text;
        switch (this.text) {
            case 'uninstall':
                image = document.createElement('img');
                text = document.createElement('p');
                text.textContent = `Are you sure you want to ${this.text} the Shazam app`;
                image.setAttribute("src","images/icon-warning_notify-red.svg");
                imgWrapper.append(image, text);
                break;
            case 'information':
                image = document.createElement('img');
                text = document.createElement('p');
                text.textContent = `You are access to ${this.text}`;
                image.setAttribute("src","images/information.svg");
                imgWrapper.append(image, text);

                break;
            default:
                text = document.createElement('p');
                text.textContent = `You are access to ${this.text}`;
                imgWrapper.append(text);
                break;
        }
        
        let btnCancel = document.createElement('button');
        btnCancel.classList = "buttons__cancel";
        btnCancel.textContent = "cancel";
        btnCancel.setAttribute('type', 'button');

        let alternativeBtn = document.createElement('button');
        alternativeBtn.classList = "buttons__alt";
        alternativeBtn.textContent = this.text;
        alternativeBtn.setAttribute('type', 'button');

        buttonsWrapper.append(btnCancel, alternativeBtn);

        alert.append(btnModalClose, imgWrapper, buttonsWrapper);
        mod.append(alert);
        mod.addEventListener('click', closePopUp);
        console.log(mod);

        let fragment = document.createDocumentFragment();
        fragment.append(mod);
        
        $('.wrapper').append(fragment);

    }
    closePopUp(event){
        
        switch (event.target.className) {
            case 'modal__close':
            case "buttons__cancel":
            case 'modal opened':
                $('.modal').removeClass("opened");
                break;
            case 'buttons__alt':
                $('.modal').removeClass("opened");
                alert('DONE');
                break;
        }
    }

}
