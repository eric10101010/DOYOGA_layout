"use strict";

(function (d) {
  var config = {
    kitId: 'kfd7may',
    scriptTimeout: 3000,
    async: true
  },
      h = d.documentElement,
      t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;

  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);

    try {
      Typekit.load(config);
    } catch (e) {}
  };

  s.parentNode.insertBefore(tk, s);
})(document);

var courseSwiper = new Swiper(".courseSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 2,
  slidesPerColumn: 2,
  spaceBetween: 30,
  breakpoints: {
    992: {
      slidesPerView: 1.5,
      slidesPerColumn: 1
    }
  }
});
var swiper = new Swiper(".mySwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 2
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var teacherSwiper = new Swiper(".teacherSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 1,
  slidesPerColumn: 4,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1
    },
    1200: {
      slidesPerView: 3,
      slidesPerColumn: 1
    }
  }
});
var recommandSwiper = new Swiper(".recommandSwiper", {
  slidesPerColumnFill: 'row',
  slidesPerView: 1.5,
  slidesPerColumn: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      slidesPerColumn: 1
    },
    1200: {
      slidesPerView: 4.5,
      slidesPerColumn: 1
    }
  }
});
var levelSwiper = new Swiper(".course-level", {
  slidesPerColumnFill: 'row',
  slidesPerView: 1,
  slidesPerColumn: 3,
  spaceBetween: 30,
  loop: false,
  breakpoints: {
    375: {
      slidesPerView: 1,
      slidesPerColumn: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 1
    },
    992: {
      slidesPerView: 3,
      slidesPerColumn: 2
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
//# sourceMappingURL=all.js.map
