let counter = 0;
let ending = '';
const text = document.querySelector(".counter-text");

const printFunc = () => {
    counter++;
    switch (counter%10) {
        case 2:
        case 3:
        case 4: ending = 'a';
                break;
        default: ending = ''
                break;
    }
    text.innerHTML = `Вы нажали на кнопку ${counter} раз${ending}!`;
}