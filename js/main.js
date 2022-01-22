let BTN = document.getElementById("btn")

document.getElementById('modeBtn').addEventListener('click', function () {
  BTN.classList.toggle('toggl')
});



let modalBtn = document.getElementById("openBtn");
let modal = document.getElementById("openModal")
let closeModal = document.getElementById("closeBtn")

let modalBtn2 = document.getElementById("openBtn2");
let modal2 = document.getElementById("openModal2")
let closeModal2 = document.getElementById("closeBtn2")

let modalBtn3 = document.querySelector(".openBtn3")
let modal3 = document.getElementById("openModal3")
let closeModal3 = document.getElementById("closeBtn3")

modalBtn.addEventListener('click',function(){
  modal.style.display = "block"
} )
closeModal.addEventListener('click', function(){
  modal.style.display = 'none'
})

modalBtn2.addEventListener('click',function(){
  modal2.style.display = "block"
} )
closeModal2.addEventListener('click', function(){
  modal2.style.display = 'none'
})

modalBtn3.addEventListener('click',function(){
  modal3.style.display = "block"
} )
closeModal3.addEventListener('click', function(){
  modal3.style.display = 'none'
})



