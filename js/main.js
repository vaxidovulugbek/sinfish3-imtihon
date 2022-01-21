// let a = 0;
// document.getElementById('modeBtn').addEventListener('click', function () {
//   // document.getElementById('header').classList.toggle('dark');
//   document.body.classList.toggle('dark');
//   if (a == 0) {
//     a++;
//   } else {
//     a = 0;
//   }
// });

let modalBtn = document.getElementById("openBtn");
let modal = document.getElementById("openModal")
let closeModal = document.getElementById("closeBtn")
let modalBtn2 = document.getElementById("openBtn2");
let modal2 = document.getElementById("openModal2")
let closeModal2 = document.getElementById("closeBtn2")
// let bodyPadding = document.getElementById("bodyPadding")

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

closeBtn2.addEventListener("click" , function (e){
  console.log(e);
})

