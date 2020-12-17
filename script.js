let allImages = document.querySelectorAll('.blcks');
let buttonUp = document.querySelector('#up');
let buttonDown = document.querySelector('#under');

buttonUp.addEventListener('click', () => {
    allImages.forEach(el => {
        if(el.style.order === '0') {
            el.style.order = (allImages.length-1).toString();
        } else {
            el.style.order = (parseInt(el.style.order) - 1).toString();
        }
    })
})

buttonDown.addEventListener('click', () => {
    allImages.forEach(el => {
        if(el.style.order === '2') {
            el.style.order = '0';
        } else {
            el.style.order = (parseInt(el.style.order) + 1).toString();
        }
    })
})

let width = document.querySelector('#width').value;
let height = document.querySelector('#height');
let submitBtn = document.querySelector('#btn-submit');

submitBtn.addEventListener('click', () => {
    let width = document.querySelector('#width').value;
    let height = document.querySelector('#height').value;
    allImages.forEach(el => {
        el.style.width = `${width.toString()}px`;
        el.style.height = `${height.toString()}px`;
    })
})

let number = Math.round(Math.random() * (31-1) + 1);
console.log(number);

let month = new Date().getMonth() + 1;
console.log(number - month);

let student = {
    name: 'Vasya',
    education: {
        univer: 'Nure',
        faculty: 'KIU',
        course: 3,
    }
}

console.log(student);





