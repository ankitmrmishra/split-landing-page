const leftside = document.querySelector('.leftpart')
const rightside = document.querySelector('.rightpart')
const container = document.querySelector('.container')

leftside.addEventListener('mouseover' , () => {
     leftside.classList.add('show')
      leftside.classList.remove('hide')
     rightside.classList.add('hide')
     rightside.classList.remove('show')
})
rightside.addEventListener('mouseover' , () => {
     leftside.classList.add('hide')
     leftside.classList.remove('show')
     rightside.classList.add('show')
     rightside.classList.remove('hide')
})