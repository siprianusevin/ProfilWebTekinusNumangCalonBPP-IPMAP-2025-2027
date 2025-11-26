 // Hamburger Menu Toggle
      const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-links li");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
      });

      // Close menu when clicking a link
      links.forEach((link) => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("active");
        });
      });

      // Scroll Reveal Animation
      // Ini memberikan efek elemen muncul perlahan saat di-scroll (Slow motion feel)
      function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          }
        }
      }

      window.addEventListener("scroll", reveal);
      // Trigger once on load
      reveal();