const imageOne = document.querySelector('#img-1')
const imageTwo = document.querySelector('#img-2')
const imageThree = document.querySelector('#img-3')


const btnImageOne = document.querySelector('#btn-img-1')
const btnImageTwo = document.querySelector('#btn-img-2')
const btnImageThree = document.querySelector('#btn-img-3')

const spanLinks = document.querySelector('#count-links')
const spanImages = document.querySelector('#count-images')

const arrLinks = document.querySelectorAll('a')
const arrImages = document.images


btnImageOne.addEventListener('click', () => {
  const inputImageOne = document.querySelector('#input-img-1').value
  imageOne.src = inputImageOne
})

btnImageTwo.addEventListener('click', () => {
  const inputImageTwo = document.querySelector('#input-img-2').value
  imageTwo.src = inputImageTwo
})

btnImageThree.addEventListener('click', () => {
  const inputImageThree = document.querySelector('#input-img-3').value
  imageThree.src = inputImageThree
})


spanLinks.innerHTML = arrLinks.length
spanImages.innerHTML = arrImages.length


