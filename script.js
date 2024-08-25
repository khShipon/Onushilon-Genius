const mobileBtn = document.querySelector('#mobile-btn');
const closeBtn = document.querySelector('#close-btn');
const overlay = document.querySelector('#myNav');


mobileBtn.addEventListener('click', () => {
    overlay.style.width = '100%';
});

closeBtn.addEventListener('click', () => {
    overlay.style.width = '0%';
});
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

document.getElementById('submit-comment').addEventListener('click', function() {
  const comment = document.getElementById('comment').value;
  if (comment) {
      const commentList = document.getElementById('comment-list');
      const newComment = document.createElement('p');
      newComment.textContent = comment;
      commentList.appendChild(newComment);
      document.getElementById('comment').value = ''; // Clear the textarea
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const notices = [
      "২০২৬ ব্যাচে ভর্তি হলেই থাকছে ৫০% ছাড়!",
     
  ];

  let noticeIndex = 0;
  const marquee = document.querySelector('.news-headline marquee');

  setInterval(() => {
      noticeIndex = (noticeIndex + 1) % notices.length;
      marquee.textContent = notices[noticeIndex];
  }, 10000); // Change notice every 10 seconds
});


// Toggle between Sign Up and Login forms
function toggleFormCustom(formName) {
  const signupFormCustom = document.getElementById('signupFormCustom');
  const loginFormCustom = document.getElementById('loginFormCustom');
  const signupBtnCustom = document.getElementById('signupBtnCustom');
  const loginBtnCustom = document.getElementById('loginBtnCustom');

  if (formName === 'signup') {
      signupFormCustom.classList.add('active-custom');
      loginFormCustom.classList.remove('active-custom');
      signupBtnCustom.classList.add('active-custom');
      loginBtnCustom.classList.remove('active-custom');
  } else {
      signupFormCustom.classList.remove('active-custom');
      loginFormCustom.classList.add('active-custom');
      signupBtnCustom.classList.remove('active-custom');
      loginBtnCustom.classList.add('active-custom');
  }
}

// Ensure the Sign-Up form is displayed by default
document.addEventListener('DOMContentLoaded', function() {
  toggleFormCustom('signup');
});
