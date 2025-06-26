const track = document.getElementById('carouselTrack');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;

    function moveSlide(direction) {
      currentSlide = (currentSlide + direction + slides.length) % slides.length;
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      
    }

    setInterval(() => moveSlide(1), 5000);


      const nav = document.querySelector('.mobile-nav');
      const ham = document.getElementById('hamburger');
      const cross = document.getElementById("cross");
    ham.addEventListener("click" , () =>{
        nav.classList.remove("close");
        nav.classList.add("open");
    })
    cross.addEventListener("click" , () => {
        nav.classList.remove("open");
        nav.classList.add("close");
    })
$(document).ready(function(){
  $('.job-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
      0:{ items:1 },
      768:{ items:2 },
      1024:{ items:3 }
    }
  });
});

 const hiddenSections = document.querySelectorAll('.hidden-section');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  hiddenSections.forEach(section => {
    observer.observe(section);
  });
