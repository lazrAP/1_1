burger = document.querySelector('#burger');
navo = document.querySelector('ul');

burger.addEventListener('click', function(){
    navo.classList.toggle('v-class')
})



const scrollF = document.querySelector('#about');
const left = document.querySelector('.left');


scrollF.addEventListener('scroll', function(){
    const yaya = left.getBoundingClientRect();
    console.log(yaya);
})

const lulu = document.querySelector('.left');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight * 5;


    lulu.forEach(left => {
        const leftTop = left.getBoundingClientRect().top

        if(leftTop < triggerBottom){
            left.classList.add('show')
        }
        else{
             left.classList.remove('show')
        }
    })
}