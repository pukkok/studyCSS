// const target = document.querySelector('section');

// const observer = new IntersectionObserver(entries, options);

// const test = (entries, observer) => console.log('작동중');


// observer.observe(target);


let page = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
      if(entry.isIntersecting){
            if(entry.target.className===`page2`) {
              entry.target.classList.add('active')
            } else {
                page[1].classList.remove('active')
            }
            if(entry.target.className==='page3') {
              entry.target.classList.add('active')
            } else {
                page[2].classList.remove('active')
            }
            if(entry.target.className==='page4') {
              entry.target.classList.add('active')
            } else {
                page[3].classList.remove('active')
            }
        console.log(entry.target.className)
      };
    });
  });

observer.observe(page[0]);
observer.observe(page[1]);
observer.observe(page[2]);
observer.observe(page[3]);
