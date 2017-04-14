var menu = document.querySelector('.burgerMenu');
var target = document.getElementById('hiddenMenu');

menu.addEventListener('touchstart', function() {
  if (target.classList.value !== 'is-active') {
    target.classList.add('is-active');
  } else if (target.classList.value === 'is-active') {
    target.classList.remove('is-active');
  }
});

// function BurgerMenuClick() {
//   var target = document.getElementById("hiddenMenu");

//   console.log(target.style)
//   if (target.style.display == "none") {
//     console.log('hoge')
//     target.style.display = "block";
//   }
//   else {
//     target.style.display = "none";
//   }
// }