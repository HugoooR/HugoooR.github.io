$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typedOptions = {
        strings: ["Développeur Junior"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    };

    var typed = new Typed(".typing", typedOptions);

    var typed2 = new Typed(".typing-2", {
        strings: ["développeur junior", "étudiant en informatique", "fan d'Histoire"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi normal du formulaire

        const formData = {
            name: form.name.value,
            email: form.email.value,
            message: form.message.value
        };

        // Appel à l'API EmailJS pour envoyer l'email
        emailjs.send('service_x3rgx2q', 'template_4v1cg3s', formData, '4rcvpfZC3FT15CC9L') // If errors replace keys by visiting emailjs site
            .then(function(response) {
                console.log('Email envoyé avec succès!', response.status, response.text);
                alert('Votre message a été envoyé avec succès!');
                form.reset(); // Réinitialise le formulaire après l'envoi
            }, function(error) {
                console.error('Erreur lors de l\'envoi de l\'email:', error);
                alert('Une erreur est survenue. Veuillez réessayer.');
            });
    });
});

$(document).ready(function(){
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      center: true,
      items: 1,
      loop: true,
      margin: 10,
      nav: false, // Disable default nav
      responsive: {
        600: {
          items: 3
        }
      }
    });
  
    // Custom Navigation Events
    $(".custom-next-btn").click(function() {
      owl.trigger('next.owl.carousel');
    });
  
    $(".custom-prev-btn").click(function() {
      owl.trigger('prev.owl.carousel', [300]);
    });
});
  
document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('active');
    });
});