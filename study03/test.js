let page = document.querySelectorAll('section');

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


const page2Clicker = document.querySelectorAll('.page2 ul li a');
const page2Test = document.querySelector('.page2 .testBox');

for (let i = 0; i < page2Clicker.length; i++){
  const clicker = page2Clicker[i];
  const leftValue = [0, '-100vw', '-200vw'][i];
  
  clicker.addEventListener('click', () =>{
    console.log(clicker);
    console.log(leftValue);
    page2Test.style.marginLeft = leftValue;
  });
};