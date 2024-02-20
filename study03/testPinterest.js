//root id 불러오기
const root = document.getElementById(`root`);

// 헤더영역
const header = document.createElement('header')
const logoBox = document.createElement('div')
logoBox.className = 'logoBox'
logoBox.innerHTML =`
<img src="./imgs/logo.png" alt="">
<h1>Personal Color</h1>
<h2><a href="#">탐색</a></h2>
`
const nav = document.createElement('nav')
const navUl = document.createElement('ul')
for(i=0; i<5; i++){
  const list = document.createElement(`li`)
  const aTag = document.createElement('a')
  const text = [`소개`, `비즈니스`, `언론`, `로그인`, `가입하기`]
  aTag.innerText= text[i]
  navUl.appendChild(list).append(aTag)
}

nav.append(navUl)

header.append(logoBox, nav)

//main 시작
const main = document.createElement('main')
main.id = 'main'

//page1
const page1 = document.createElement('section')
page1.className='page1'

const p1TextBox = document.createElement('div')
p1TextBox.className = 'textBox';
p1TextBox.innerHTML =`
<h2>
  <span class="blue">파란색</span>
  <span class="red">빨간색</span>
  <span class="yellow">노란색</span>
  계열입니다
</h2>
<h2>본인의 색을 찾아보세요</h2>
`
main.appendChild(page1);
page1.appendChild(p1TextBox);

for(let i=0; i<3; i++){
  const colorBox = document.createElement('div')
  const colorBoxClass = ['blue', 'red', 'yellow'];
  colorBox.className = `colorBox ${colorBoxClass[i]}`
  page1.appendChild(colorBox);

  for(let i=0; i<3; i++){
  for(let j=0; j<7; j++){
    const colorCard = document.createElement('div');
      colorCard.className = `colorCard line${j+1}`;
      colorBox.appendChild(colorCard)
    }
}
};  

//page3
const page3 = document.createElement('section')
page3.classList = 'page3'
const p3TextBox = document.createElement('div')
p3TextBox.className='textBox'
p3TextBox.innerHTML=`
<h2>Color Consulting</h2>
<h3>
미국 컬러 리서치연구소(CR)의 연구결과에 따르면 소비자의 상품 선택은 초기 90초안에 잠재적으로 결정된다고 합니다.
<br>
그리고 상품이 좋고 싫다는 판단의 <b>60∼90%가 컬러에 의해서 좌우된다</b>고 합니다.
<br>
따라서 기업은 상품의 가치를 컬러로 명쾌하게 표현할 수 있어야 합니다.
<br>
잇컬러는 기업이 원하는 방향과 컬러 트렌드에 대한 면밀한 조사를 통해
<br>
체계적인 컬러 시스템으로 성공적인 기업의 브랜딩으로 이끌어 가도록 하겠습니다.
<br></h3>
`
const chartBox = document.createElement('div')
chartBox.className = 'chartBox'
const chartA = document.createElement('div')
chartA.className = 'chart'
chartA.innerHTML = `
<div>
  <h4 class=graphA>87%</h4>
</div>
<h4>시각 (오감)</h4>
`
const chartB = document.createElement('div')
chartB.className = 'chart'
chartB.innerHTML = `
<div>
  <h4 class=graphB>80%</h4>
</div>
<h4>컬러 (시각)</h4>
`
chartBox.append(chartA, chartB)
page3.append(p3TextBox, chartBox)
main.append(page3)
// 구현
root.append(header, main)

var colorBoxA = document.querySelector('#main .page1 .colorBox.blue'),
    colorBoxB = document.querySelector('#main .page1 .colorBox.red'),
    colorBoxC = document.querySelector('#main .page1 .colorBox.yellow');

var selectedA = document.querySelector('#main .textBox .blue'),
    selectedB = document.querySelector('#main .textBox .red'),
    selectedC = document.querySelector('#main .textBox .yellow');
// console.log(colorBoxC)

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


// const page2TextBox = document.querySelector('.page2 .textBox')
// const page2Clicker = document.querySelectorAll('.page2 .button li')
// const page2clickerBox = document.querySelectorAll('.page2 .button li');

// for (let i = 0; i<page2Clicker.length; i++){
//   const clicker = page2Clicker[i];
//   const styleValue = [0, '-100%', '-200%', '-300%'][i];

//   clicker.addEventListener('click', () =>{
//     page2TextBox.style.top = styleValue;
//     page2clickerBox.target.classList.toggle('on')
//     console.log(clicker)
//     console.log(styleValue)
//   });
  
// };