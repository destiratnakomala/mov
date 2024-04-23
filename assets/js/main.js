/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
 












/*===== FORM CONTACT =====*/
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    var formData = new FormData(this);

    // Send form data to server-side script
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "assets\php\send_email.php"); // Replace "send_email.php" with your server-side script URL
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                alert("Email sent successfully!");
                // Clear form fields
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
            } else {
                alert("Failed to send email. Please try again later.");
            }
        }
    };
    xhr.send(formData);
});



// SKILL
const slider = document.querySelector('.slider');

let slidePosition = 0;

function moveToNextSlide() {
  if (slidePosition === -100) {
    slidePosition = 0;
  } else {
    slidePosition -= 25;
  }
  slider.style.transform = `translateX(${slidePosition}%)`;
}

setInterval(moveToNextSlide, 3000); // Auto slide every 3 seconds


// tools
// Initialize ScrollReveal
ScrollReveal().reveal('.box', {
    delay: 300, // Delay before the reveal animation starts (in milliseconds)
    duration: 1000, // Duration of the reveal animation (in milliseconds)
    origin: 'bottom', // The origin of the animation ('top', 'right', 'bottom', 'left')
    distance: '20px', // Distance of the animation (in pixels)
    easing: 'ease', // Easing function ('linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out')
    reset: true // Whether to reset the animation after it's been revealed
});







// work

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[n].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);


const prevArrow = document.querySelector('.prev');
const nextArrow = document.querySelector('.next');
// Wait for the DOM content to load
document.addEventListener('DOMContentLoaded', function() {
    // Target the arrow elements
    const prevArrow = document.querySelector('.prev');
    const nextArrow = document.querySelector('.next');

    // Add event listeners to arrow buttons
    prevArrow.addEventListener('click', prevSlide);
    nextArrow.addEventListener('click', nextSlide);
});
