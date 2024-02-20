let colorBoxA = document.querySelector('#main .first'),
    colorBoxB = document.querySelector('#main .second'),
    colorBoxC = document.querySelector('#main .third');

let selectedA = document.querySelector('#main .textBox .blue'),
    selectedB = document.querySelector('#main .textBox .red'),
    selectedC = document.querySelector('#main .textBox .yellow');

(function () {

const loop = function () {
     
      colorBoxC.classList.remove('off');
      colorBoxA.classList.add('on');
      selectedC.classList.remove('on');
      selectedA.classList.add('on');

      setTimeout(function () {
        colorBoxA.classList.remove('on');
        colorBoxA.classList.add('off');
      }, 4000);

      setTimeout(function () {
        colorBoxA.classList.remove('off');
        colorBoxB.classList.add('on');
        selectedA.classList.remove('on');
        selectedB.classList.add('on');
      }, 7000);

      setTimeout(function () {
        colorBoxB.classList.remove('on');
        colorBoxB.classList.add('off');
      }, 11000);

      setTimeout(function () {
        colorBoxB.classList.remove('off');
        colorBoxC.classList.add('on');
        selectedB.classList.remove('on');
        selectedC.classList.add('on');  
      }, 14000);

      setTimeout(function () {
        colorBoxC.classList.remove('on');
        colorBoxC.classList.add('off');
      }, 18000);
    
  };
  
  loop();
  setInterval(loop, 21000);
  
})();


let page = document.querySelectorAll('section');

// const observer = new IntersectionObserver((entries) =>{
//   entries.forEach(entry => {
//     if(entry.isIntersecting){ 
//           if(entry.target.className===`page2`) {
//             entry.target.classList.add('active')
//             console.log(entry.isIntersecting===true)
//           } else {
//               page[1].classList.remove('active')
//           }
//           if(entry.target.className==='page3') {
//             entry.target.classList.add('active')
//           } else {
//               page[2].classList.remove('active')
//           }
//           if(entry.target.className==='page4') {
//             entry.target.classList.add('active')
//           } else {
//               page[3].classList.remove('active')
//           }
//     };
//   });
// });

const observer = new IntersectionObserver((entries) =>{
  entries.forEach(entry => {
    if(entry.isIntersecting===true){
      entry.target.classList.toggle('active')       
  } else {
    entry.target.classList.remove('active')
  }
  });
});

observer.observe(page[0]);
observer.observe(page[1]);
observer.observe(page[2]);
observer.observe(page[3]);


const page2TextBox = document.querySelector('.page2 .textBox')
const page2Clicker = document.querySelectorAll('.page2 .button li')
const page2clickerBox = document.querySelectorAll('.page2 .button li');

for (let i = 0; i<page2Clicker.length; i++){
  const clicker = page2Clicker[i];
  const styleValue = [0, '-100%', '-200%', '-300%'][i];

  clicker.addEventListener('click', () =>{
    page2TextBox.style.top = styleValue;
    page2clickerBox.target.classList.toggle('on')
    console.log(clicker)
    console.log(styleValue)
  });
  
};

const colorBox = document.createElement('div')
colorBox.className = 'colorBox'


for(let i=0; i<21; i++){
    const colorCard = document.createElement('div')
    colorCard.className = 'colorCard'
    colorBox.append(colorCard)
}
console.log(colorBox)