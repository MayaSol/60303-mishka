    var nav_toggle = document.querySelector(".main-nav__toggle");
    var main_nav = document.querySelector(".main-nav");

   if (window.innerWidth <= 768) {
      main_nav.classList.add("main-nav--closed");
    }

    nav_toggle.addEventListener("click", function(event) {
        event.preventDefault();
        if (main_nav.classList.contains("main-nav--closed"))
        {
            main_nav.classList.remove("main-nav--closed");
            main_nav.classList.add("main-nav--opened");
        }
        else
        {
            main_nav.classList.remove("main-nav--opened");
            main_nav.classList.add("main-nav--closed");
        }
    });

    window.addEventListener("resize", funcWindowResize );

    function funcWindowResize() {
      if (window.innerWidth > 768)
      {

        if (main_nav.classList.contains("main-nav--closed"))
        {
           main_nav.classList.remove("main-nav--closed");
        }

        else
        {
          if (main_nav.classList.contains("main-nav--opened"))
          {
           main_nav.classList.remove("main-nav--opened");
          }
        }
      }

      else
      {
        main_nav.classList.add("main-nav--closed");
      }
    }
