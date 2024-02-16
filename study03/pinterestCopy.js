var colorBoxA = document.querySelector('#main .first'),
    colorBoxB = document.querySelector('#main .second'),
    colorBoxC = document.querySelector('#main .third');

var selectedA = document.querySelector('#main .textBox .blue'),
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

let observer = new IntersectionObserver((e) =>{
  e.forEach((tester)=>{
    if (tester.isIntersecting){
            tester.target.style.opacity = 1;
            // tester.target.style.transform = 'rotate(0deg)';
    } else {
      tester.target.style.opacity = 0;
    }
    })
})

let section = document.querySelectorAll('section');
observer.observe(section[0]);
observer.observe(section[1]);
observer.observe(section[2]);