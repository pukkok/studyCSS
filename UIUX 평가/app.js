const nav = document.querySelector('nav')
const section1 = document.querySelector('.section1')
const section2 = document.querySelector('.section2')
const section3 = document.querySelector('.section3')
const lookbookContainer = section3.querySelector('.container')
const lookBtn = document.querySelector('.section3 button')
const creditBox = document.querySelector('.credit-box')
const btnBox = document.querySelector('.section4 .btn-box')
const btnBoxPrevBtn = btnBox.querySelector('.prev')
const btnBoxNextBtn = btnBox.querySelector('.next')
const section5 = document.querySelector('.section5')

let lookIndex = 6
let isValid = true

//처음 보여주는 리스트
const showList = (lookIndex)=> {
    for(i=0; i<lookIndex; i++){
        const div = document.createElement('div')
        div.className = 'lookbook-list'
        const pTag = document.createElement('p')
        pTag.innerText=`${i+1}`
        const img = document.createElement('img')
        img.src= `./imgs/model-${i+1}.jpg`
        div.append(pTag, img)
        lookbookContainer.append(div)
    }
}
showList(lookIndex)
const lookbookItems = lookbookContainer.querySelectorAll('.lookbook-list')

let creditTexts = [
    {h3 : 'SHOW DIRECTION AND PRODUCTION' , p: 'Bureau Betak'},
    {h3 : 'VIDEO' , p: 'Bureau Future'},
    {h3 : 'STYLING' , p: 'Carlos Nazario'},
    {h3 : 'MUSIC DIRECTOR & ORIGINAL SCORE' , p: 'Sebastien Perrin'},
    {h3 : 'MAKEUP' , p: 'Dick Page'},
    {h3 : 'HAIR' , p: 'Orlando Pita for Orlando Pita Play'},
    {h3 : 'NAILS' , p: 'Jin Soon Choi for JinSoon Nails'},
    {h3 : 'CASTING' , p: 'Piergiorgio Del Moro/DMCASTING'},
    {h3 : 'LIGHTING DESIGNER' , p: 'John Torres'},
    {h3 : 'LIGHTING' , p: '4 Wall Entertainment'},
    {h3 : 'SOUND' , p: 'ADI: Audible Difference Inc.'},
    {h3 : 'GLOBAL LIVESTREAM SERVICE PROVIDER' , p: 'B Live'},
    {h3 : 'TAILORS' , p: 'Svitlana Malysheva (In-House) 7th Bone Tailors'},
]

for(i=0; i<creditTexts.length; i++){
    const div = document.createElement('div')
    const h3 = document.createElement('h3')
    h3.innerText = `${creditTexts[i].h3}`
    const pTag = document.createElement('p')
    pTag.innerText = `${creditTexts[i].p}`
    div.append(h3, pTag)
    creditBox.append(div)
}

const creditBoxItems = creditBox.querySelectorAll('.credit-box div')


// const nav
// 보완 필요
let checkPoint = section2.getBoundingClientRect()
let test = (e) => {
    let check = nav.getBoundingClientRect()
    // console.log(section2.offsetTop)
    console.log(check.top)
    // console.log(check.y)
    if(check.y < 0){
        nav.classList.add('sticky')
    }else{
        // nav.classList.remove('sticky')
    }
}

window.addEventListener('scroll', test)

const section5TextBox = section5.querySelectorAll('.text-box')
const navList = nav.querySelectorAll('li')

const moveToContents = (e) => {
    let runwayPoint = section1.getBoundingClientRect()
    let lookbookPoint = lookbookContainer.getBoundingClientRect()
    let shopPoint = section5TextBox[0].getBoundingClientRect()
    let latePoint = section5TextBox[1].getBoundingClientRect()

    navList.forEach((li) => {
        li.classList.remove('active')
    });

    if(e.target.innerText==='RUNWAY'){
        window.scrollBy({top : runwayPoint.y})
        navList[0].classList.add('active')
    }

    if(e.target.innerText==='LOOKBOOK'){
        window.scrollBy({top : lookbookPoint.y, behavior:'auto'})
        navList[1].classList.add('active')
    }

    if(e.target.innerText==='SHOP'){
        window.scrollBy({top : shopPoint.top})
        navList[2].classList.add('active')
    }

    if(e.target.innerText==='LATE SEASON'){
        window.scrollBy({top : latePoint.top})
        navList[3].classList.add('active')
    }
}

nav.addEventListener('click', moveToContents)

// 섹션3 리스트 추가 제거
const addList = () => {
    if(lookBtn.innerText === 'SEE ALL THE LOOKS'){
        lookbookContainer.innerHTML =''
        lookIndex = 65
        showList(lookIndex)
        lookBtn.innerText = 'CLOSE'
    }else if(lookBtn.innerText === 'CLOSE'){
        lookbookContainer.innerHTML =''
        lookIndex = 6
        showList(lookIndex)
    }
}

const changeCredit = (e) => {
    if(e.target.className==='next'){
        creditBoxItems.forEach(item => {
            btnBoxPrevBtn.disabled = false
            item.style.left = '-100%'
            btnBoxNextBtn.disabled = true
        })
    }else if(e.target.className=== 'prev'){
        creditBoxItems.forEach(item => {
            btnBoxNextBtn.disabled = false
            item.style.left = '0%'
            btnBoxPrevBtn.disabled = true
        })
    }

}

const modal = (i) => {
    const div = document.createElement('div')
    div.className = 'lookbook-modal'
    const img = document.createElement('img')
    img.src = `./imgs/model-${i+1}.jpg`
    const pTag = document.createElement('p')
    pTag.innerText = `Model ${i+1}번`
    const prevBtn = document.createElement('button')
    prevBtn.className ='prev'
    prevBtn.innerText = '<'
    const nextBtn = document.createElement('button')
    nextBtn.className ='next'
    nextBtn.innerText = '>'
    const closeBtn = document.createElement('button')
    closeBtn.className = 'close'
    closeBtn.innerText = 'x'
    div.append(img, pTag, prevBtn, nextBtn, closeBtn)
    section3.append(div)
}

const closePage = (e) => {
    if(e.target.classList.contains('close')){
        lookbookModal.remove()
    }
}

const changePage = (e) => {
    console.log(e.target)
    if(e.target.classList.contains('next')){
        modal(i+1)
    }
    else if(e.target.classList.contains('prev')){
        modal(i-1)
    }
}
let lookbookModal
console.log('테스트',lookbookModal)
const showModal = (i) => {
    modal(i)
    lookbookModal = section3.querySelector('.lookbook-modal')
    // 여러번 구현할수있도록 하기
    if(lookbookModal.classList.contains('lookbook-modal')){
        modalPrev = lookbookModal.querySelector('.prev')
        modalNext = lookbookModal.querySelector('.next')
        modalPrev.addEventListener('click', ()=>(modal(i-1)))
        modalNext.addEventListener('click',()=> modal(i+1))
        lookbookModal.addEventListener('click', closePage)
    }
}




lookbookItems.forEach((item, i)=>{
    item.addEventListener('click', ()=> showModal(i))
})

lookBtn.addEventListener('click', addList)
btnBox.addEventListener('click', changeCredit)






