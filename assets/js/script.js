/**
 * @Script js for (Template/Project Name)
 * @project     - Project Name
 * @author      -
 * @created_by  -
 * @created_at  -
 * @modified_by -
 **/

$(window).on("load", function () {
  // code should be execute here
});

/**
 * ========================================================
 * this function execute when DOM element ready
 * ========================================================
 */

$(document).ready(function () {
  /* code execute from here */
  // custom accordion
  $(function () {
    if ($(".accordion-list").length) {
      $(".accordion-list").on("click", ".accordion-title", function (e) {
        e.preventDefault();
        // remove siblings activities
        $(this)
          .closest(".accordion-list-item")
          .siblings()
          .removeClass("open")
          .find(".accordion-desc")
          .slideUp();
        $(this)
          .closest(".accordion-list-item")
          .siblings()
          .find(".ni")
          .addClass("ni-downward-ios")
          .removeClass("ni-upword-ios");

        // add slideToggle into this
        $(this)
          .closest(".accordion-list-item")
          .toggleClass("open")
          .find(".accordion-desc")
          .slideToggle();
        $(this).find(".ni").toggleClass("ni-downward-ios ni-upword-ios");
      });
    }
  });

  // wow js init
  $(function () {
    var wow = new WOW({
      animateClass: "animated",
      mobile: true,
    });
    wow.init();
  });
});

// Swipper js
const swiper = new Swiper(".testi-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },

  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    550: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

const swiper2 = new Swiper(".newsupdate-slider", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next-unique",
    prevEl: ".swiper-button-prev-unique",
  },

  breakpoints: {
    350: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    550: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

// Swipper js end