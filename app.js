const searchBtn = document.querySelector('button')
searchBtn.addEventListener('click', findCard)

function findCard(e) {
    e.preventDefault()
    const finder = document.getElementById('search-input')
    const cards = document.querySelectorAll('a')

    cards.forEach(card => {
        const h3 = card.querySelector('h3').innerText
        const p = card.querySelector('p').innerText
        if(!h3.includes(finder.value) && !p.includes(finder.value)){
            card.classList.add('off')
        }else{
            card.classList.remove('off')
        }
    })
}



const input = +`5`.trim()

Array(input).fill(0).forEach((x, idx) => {
    const star = '*'.repeat(input-idx)
    console.log(star)
})