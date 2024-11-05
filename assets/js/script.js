"use strict";
$ = jQuery;
$(document).ready(function () {
  gsapIntro();
  loadToTop();

  scrollHeader();
  subMenuHeader();
  swiperBanner();
  // scrollFeedBack();
  scrollCTA();
  menubar();
  selectMap();
  bookingForm();
  mapCompany();
  swiperRoom();
  toggleDropdown();
  animationTextReveal();
  swiperDeals();
  customAnimation();
  displayRatings();
  swiperRoomSuites();
  scrollFreezeCtaMess();
  amentities();
  swiperSuites();
  swiperBookRoom();
  showOrHidePasswords();
  commingCareer();
  toggleSubmenuMobile();
  scrollToolbarMobile();
  stickyFilter();
  toggleOpenDescWinkFacilities();
  handlePageVisibilityAndFavicon();
  responsiveImageMap();
});
function loadToTop() {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  window.addEventListener("load", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
function handlePageVisibilityAndFavicon() {
  const originalTitle = document.title;
  let faviconInterval;

  // Xử lý thay đổi tiêu đề khi tab/cửa sổ thay đổi trạng thái hiển thị
  $(document).on("visibilitychange", function () {
    if (document.hidden) {
      document.title = "Quay lại đi!";
    } else {
      document.title = originalTitle;
    }
  });

  function changeFavicon(src) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.getElementsByTagName("head")[0].appendChild(link);
    }
    link.href = src;
  }

  $(window).focus(function () {
    clearInterval(faviconInterval);
    changeFavicon("./assets/images/icon-signature-red.svg");
  });

  $(window).blur(function () {
    const favicons = [
      "./assets/images/icon-signature-red.svg",
      "./assets/images/icon-signature-black.svg",
    ];
    let faviconIndex = 0;
    faviconInterval = setInterval(function () {
      changeFavicon(favicons[faviconIndex]);
      faviconIndex = (faviconIndex + 1) % favicons.length; //
    }, 200);
  });
}

function gsapIntro() {
  gsap.registerPlugin(ScrollTrigger);
  if ($(".intro").length) {
    gsap.set(".image-signature .box", {
      scale: 0,
    });

    const tl = gsap.timeline({
      onComplete: () => {
        // Hide the intro section after the animation completes
        gsap.to(".intro", {
          // autoAlpha: 0,
          scaleY: 0,
          transformOrigin: "center top",
          ease: "expo.inOut",
          duration: 1,
          onComplete: () => {
            // Optionally remove the element from the DOM
            // document.querySelector('.intro').style.display = 'none';
          },
        });
      },
    });

    // First animation: image-container img
    tl.to(".image-container img", {
      scale: 4,
      transformOrigin: "center center",
      ease: "power1.inOut",
      duration: 2, // Optional duration for the first animation
    });

    // Second animation: image-signature .box, starts simultaneously with the first animation
    tl.to(
      ".image-signature .box",
      {
        scale: 35,
        transform: "skew(0deg)",
        transformOrigin: "center center",
        ease: "power2.inOut",
        duration: 2, // Optional duration for the second animation
      },
      0.65
    ); // Start at the same time as the previous animation
  }
}

function openAlert(event) {
  event.preventDefault();

  const alter = $(".alert-success");
  const progress = $(".progress-type");
  alter.addClass("show");
  progress.addClass("show");
  setTimeout(() => {
    alter.removeClass("show");
  }, 5000);
  setTimeout(() => {
    progress.removeClass("show");
  }, 5300);
}
function openAlertSignIn(event) {
  event.preventDefault();

  const alter = $(".alert-success-sign-in");
  const progress = $(".progress-type");
  alter.addClass("show");
  progress.addClass("show");
  setTimeout(() => {
    alter.removeClass("show");
  }, 5000);
  setTimeout(() => {
    progress.removeClass("show");
  }, 5300);
}
function displayRatings() {
  $(".rating-number").each(function () {
    const rating = parseFloat($(this).text().trim());

    const $container = $(this).siblings(".rating-container");
    $container.empty();

    const fullCircles = Math.floor(rating);
    const partialCircle = rating % 1 !== 0;

    // Create full circles
    for (let i = 0; i < fullCircles; i++) {
      const $circle = $("<div>").addClass("circle");
      $container.append($circle);
    }

    // Create partial circle if necessary
    if (partialCircle) {
      const $partial = $("<div>").addClass("circle partial");

      const percentageMissing = (5 - rating) * 100;
      const $coverCircle = $("<div>")
        .addClass("cover-circle")
        .css("width", `${percentageMissing}%`);

      $partial.append($coverCircle);
      $container.append($partial);
    }
  });
}

function customAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".data-fade-in").forEach((element, i) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 20,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 80%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "circ.out",
        stagger: 0.1,
      }
    );
  });

  if($(window).width() < 992){
    gsap.utils.toArray(".data-fade-in-mobile").forEach((element, i) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 20,
        },
        {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "bottom 80%",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "circ.out",
          stagger: 0.1,
        }
      );
    });
  }

  gsap.utils.toArray(".data-fade-up").forEach((element, i) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          end: "bottom 70%",
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "circ.out",
        stagger: 0.1,
      }
    );
  });
  gsap.utils.toArray(".data-fade-right").forEach((element, i) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: 200,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top 75%",
          end: "bottom 75%",
        },
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "circ.out",
        stagger: 0.1,
      }
    );
  });
  gsap.utils.toArray(".data-fade-left").forEach((element, i) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: -200,
      },
      {
        scrollTrigger: {
          trigger: element,
          start: "top 75%",
          end: "bottom 75%",
        },
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "circ.out",
        stagger: 0.1,
      }
    );
  });
}
function scrollHeader() {
  let height;
  if ($("body").hasClass("page-details-hotels")) {
    height =
      ($(".header__top-bar").height() + $(".header__main").height()) * -1;
  } else {
    height = $(".header__top-bar").height() * -1;
  }

  let navTop;

  function initializeScrollTrigger() {
    navTop = gsap
      .from("header", {
        y: height,
        paused: true,
        duration: 0.3,
        ease: "none",
        trigger: "header",
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        // Shrink navTop
        self.direction === -1 ? navTop.play() : navTop.reverse();
        // self.refresh();
        if (self.direction === -1) {
          $(".header__sub-menu")
            .addClass("scrolled-down")
            .removeClass("scrolled-up");
        } else {
          $(".header__sub-menu")
            .addClass("scrolled-up")
            .removeClass("scrolled-down");
        }
      },
    });
  }

  initializeScrollTrigger();

  // Re-initialize ScrollTrigger when page is refreshed
  $(window).on("load", initializeScrollTrigger);
}
function subMenuHeader() {
  let menuItem = $(".menu-item ");

  menuItem.on("mouseenter", function () {
    if ($(this).hasClass("menu-item-has-children")) {
      $(".box-img").addClass("hidden");
    }
  });

  menuItem.on("mouseleave", function () {
    if ($(this).hasClass("menu-item-has-children")) {
      $(".box-img").removeClass("hidden");
    }
  });
}

function swiperBanner() {
  var interleaveOffset = 0.9;

  var swiperBanner = new Swiper(".swiper-banner", {
    loop: true,
    speed: 1200,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    on: {
      progress: function (swiper) {
        swiper.slides.forEach(function (slide) {
          var slideProgress = slide.progress || 0;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          // Kiểm tra nếu innerTranslate không phải là NaN
          if (!isNaN(innerTranslate)) {
            var slideInner = slide.querySelector(".slide-banner");
            if (slideInner) {
              slideInner.style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
            }
          }
        });
      },
      touchStart: function (swiper) {
        swiper.slides.forEach(function (slide) {
          slide.style.transition = "";
        });
      },
      setTransition: function (swiper, speed) {
        var easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
        swiper.slides.forEach(function (slide) {
          slide.style.transition = speed + "ms " + easing;
          var slideInner = slide.querySelector(".slide-banner");
          if (slideInner) {
            slideInner.style.transition = speed + "ms " + easing;
          }
        });
      },
    },
  });
  swiperBanner.navigation.destroy();
}
function scrollFeedBack() {
  let btn;

  function initializeScrollTrigger() {
    btn = gsap
      .from(".feedback", {
        x: "-100%",
        paused: true,
        duration: 0.5,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? btn.play() : btn.reverse();
      },
    });
  }

  initializeScrollTrigger();

  // Re-initialize ScrollTrigger when page is refreshed
  $(window).on("load", initializeScrollTrigger);
}
function scrollCTA() {
  function initializeScrollTrigger() {
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        if (self.direction === -1) {
          $(".cta-mess").removeClass("hide");
          $(".cta-share").removeClass("hide");
        } else {
          $(".cta-mess").addClass("hide");
          $(".cta-share").addClass("hide");
        }
      },
    });
  }

  initializeScrollTrigger();

  // Re-initialize ScrollTrigger when page is refreshed
  $(window).on("load", initializeScrollTrigger);
}
function scrollFreezeCtaMess() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".footer__container--bottom-overlay",
    start: "top bottom",
    end: "bottom 80vh", // Adjust end point for more controlled placement
    toggleClass: "freeze",
    scrub: 1,
  });
}

function menubar() {
  var bar = $(".bar");
  gsap.config({
    autoSleep: 60,
    force3D: true,
    nullTargetWarn: false,
  });
  // Tạo timeline cho animation mở và đóng
  var menuTl = gsap.timeline({ paused: true });
  menuTl
    .from(
      ".menu-container li, .sub-menu__bottom",
      {
        duration: 0.5,
        autoAlpha: 0,
        stagger: 0.1,
        marginLeft: 50,
      },
      0.7
    )
    .from(
      ".box-img",
      {
        duration: 1,
        autoAlpha: 0,
      },
      1.2
    );

  bar.on("click", function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").addClass("not-active");
      menuTl.reverse();
    } else {
      $(this).removeClass("not-active").addClass("active");
      menuTl.play();
    }
    $(".header__sub-menu").toggleClass("active");
    setTimeout(() => {
      $(".menu-item-has-children").removeClass("open");
    }, 1000);
    // check when menu active
    const $body = $("body");
    const $header = $("header");

    if ($body.hasClass("overflow-hidden")) {
      $body.removeClass("overflow-hidden").css("width", "");
      $header.css("width", "");
    } else {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      $body
        .addClass("overflow-hidden")
        .css("width", `calc(100% - ${scrollBarWidth}px)`);
      $header.css("width", `calc(100% - ${scrollBarWidth}px)`);
    }
  });

  // check hover submenu
  // $(".menu-container .menu-item").hover(function () {
  //   $(".menu-container .menu-item").removeClass("active");
  //   $(this).addClass("active");
  // });
}
function toggleScrollLock() {
  const body = $("body");

  if (body.hasClass("no-scroll")) {
    body.removeClass("no-scroll");
    body.css("padding-right", "");
  } else {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    body.addClass("no-scroll");
    body.css("padding-right", scrollBarWidth + "px");
  }
}

function bookingForm() {
  //----------------------------------------------------
  // date
  if ($(".banner-hero__form").length) {
    var picker = new Lightpick({
      field: document.getElementById("startday"),
      secondField: document.getElementById("endday"),
      singleDate: false,
      minDate: moment().startOf("now"),
      numberOfMonths: 2,
      startDate: moment().startOf("day").toDate(),
      endDate: moment().startOf("day").add(1, "days").toDate(),
      onOpen: function () {
        var input = picker._opts.field;
        var rect = input.getBoundingClientRect();
        var calendar = picker.el;
        if (rect.top >= window.innerHeight / 2) {
          calendar.style.top =
            rect.top + window.scrollY - calendar.offsetHeight - 38 + "px";
          calendar.style.left = rect.left + window.scrollX - 30 + "px";
        } else {
          calendar.style.top = rect.bottom + window.scrollY + 20 + "px";
          calendar.style.left = rect.left + window.scrollX - 30 + "px";
        }
      },
    });
  }

  if ($(".modal-booking").length) {
    var pickerMobile = new Lightpick({
      field: document.getElementById("startdayMobile"),
      secondField: document.getElementById("enddayMobile"),
      singleDate: false,
      minDate: moment().startOf("now"),
      numberOfMonths: 1,
      startDate: moment().startOf("day").toDate(),
      endDate: moment().startOf("day").add(1, "days").toDate(),
    });
  }
  //----------------------------------------------------

  if ($(".modalContactUsEvent").length) {
    var pickerExprie = new Lightpick({
      field: document.getElementById("expireDate"),
      minDate: moment().startOf("day"),
      singleDate: false,
    });
  }
  if ($(".modalSuites").length) {
    var pickerExprie = new Lightpick({
      field: document.getElementById("expireDateSuites"),
      minDate: moment().startOf("day"),
      singleDate: false,
    });
  }

  //----------------------------------------------------
  // select hotels
  $(".dropdown-custom__hotels").on("click", function (e) {
    const clickYPosition = e.clientY;
    const viewportHeight = $(window).height();

    if (clickYPosition > viewportHeight / 2) {
      console.log("aa");
      $(".dropdown-custom__menu").addClass("dropdown-up");
    } else {
      console.log("abb");
      $(".dropdown-custom__menu").removeClass("dropdown-up");
    }
  });
  // end select hotels
  //----------------------------------------------------
  //----------------------------------------------------
  // select adults
  const unitsDisplay = $(".units-display");
  const selectBox = $(".select-box");

  function updateDisplay(thisItem) {
    const adultValElement = thisItem
      .closest(".units")
      .find('span[name="adult-val"]');
    const childValElement = thisItem
      .closest(".units")
      .find('span[name="child-val"]');
    const adultVal = thisItem.closest(".select-box").find(".adult .val");
    const childVal = thisItem.closest(".select-box").find(".child .val");
    const totalSum = thisItem.closest(".units").find("#total-sum");

    adultValElement.text(adultVal.text());
    childValElement.text(childVal.text());
    const totalSumVal = parseInt(adultVal.text()) + parseInt(childVal.text());
    totalSum.text(totalSumVal);
  }

  unitsDisplay.on("click", function (e) {
    const clickYPosition = e.clientY;
    const viewportHeight = $(window).height();
    selectBox
      .toggleClass("dropdown-up", clickYPosition > viewportHeight / 2)
      .toggleClass("active");
    e.stopPropagation();
  });

  $(".select .min").on("click", function () {
    const valElement = $(this).next();
    const thisItem = $(this);
    let currentValue = parseInt(valElement.text());

    if (currentValue > 0) {
      valElement.text(--currentValue);
      updateDisplay(thisItem);
    }
  });

  $(".select .plus").on("click", function () {
    const valElement = $(this).prev();
    const thisItem = $(this);
    let currentValue = parseInt(valElement.text());
    valElement.text(++currentValue);
    updateDisplay(thisItem);
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".units").length) {
      selectBox.removeClass("active");
    }
  });
  // end select adults
  //----------------------------------------------------
}

function swiperRoom() {
  var interleaveOffset = 0.9;

  var swiper = new Swiper(".swiper-room", {
    loop: true,
    speed: 1000,
    grabCursor: true,
    watchSlidesProgress: true,
    mousewheelControl: true,
    keyboardControl: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    on: {
      progress: function (swiper) {
        swiper.slides.forEach(function (slide) {
          var slideProgress = slide.progress || 0;
          var innerOffset = swiper.width * interleaveOffset;
          var innerTranslate = slideProgress * innerOffset;
          // Kiểm tra nếu innerTranslate không phải là NaN
          if (!isNaN(innerTranslate)) {
            var slideInner = slide.querySelector(".slide-inner");
            if (slideInner) {
              slideInner.style.transform =
                "translate3d(" + innerTranslate + "px, 0, 0)";
            }
          }
        });
      },
      touchStart: function (swiper) {
        swiper.slides.forEach(function (slide) {
          slide.style.transition = "";
        });
      },
      setTransition: function (swiper, speed) {
        var easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
        swiper.slides.forEach(function (slide) {
          slide.style.transition = speed + "ms " + easing;
          var slideInner = slide.querySelector(".slide-inner");
          if (slideInner) {
            slideInner.style.transition = speed + "ms " + easing;
          }
        });
      },
    },
  });
}

function animationTextReveal() {
  gsap.registerPlugin(SplitType, ScrollTrigger);

  $(".offer__text p").each(function (index, element) {
    const split = new SplitType(element, {
      type: "chars",
      wordsClass: "char",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
        // pin: true,
        // markers: true,
      },
    });

    // Animate the characters
    tl.set(
      split.chars,
      {
        color: "#c22033",
        stagger: 0.1,
      },
      0.1
    );
  });
}

function toggleDropdown() {
  const $dropdowns = $(".dropdown-custom");

  $dropdowns.each(function () {
    const $dropdown = $(this);
    const $btnDropdown = $dropdown.find(".dropdown-custom__btn");
    const $dropdownMenu = $dropdown.find(".dropdown-custom__menu");
    const $dropdownItems = $dropdown.find(".dropdown-custom__item");
    const $textDropdown = $dropdown.find(".dropdown-custom__text");

    $btnDropdown.on("click", function (e) {
      e.stopPropagation();
      closeAllDropdowns($dropdown);
      $dropdownMenu.toggleClass("dropdown--active");
      $btnDropdown.toggleClass("--active");
    });

    $(document).on("click", function () {
      closeAllDropdowns();
    });

    $dropdownItems.on("click", function (e) {
      e.stopPropagation();
      const $item = $(this);
      let tmpText = $textDropdown.text();
      
      const tmpImgSrc = $textDropdown.find("img").attr("src"); // Get the current image src if present
      const $img = $item.find("img"); // Check if the clicked item contains an img

      // Swap text content
      $textDropdown.text($item.text());
      
      // If the item has an image, swap the img src
      if ($img.length) {
        $textDropdown.html($item.html()); // Swap the entire HTML, including the img
        
        if($item.hasClass("language__item")){
          tmpText = `<span>${tmpText}</span>`;
        }

        $item.html(
          `${tmpImgSrc ? `<img src="${tmpImgSrc}" />` : ""} ${tmpText}`
        ); // Swap img and text back to the item
      } else if ($item.hasClass("language__item")) {
        $item.text(tmpText);
      }

      closeAllDropdowns();
    });

    function closeAllDropdowns(exception) {
      $(".dropdown-custom__btn").removeClass("active");
      console.log("1");
      $dropdowns.each(function () {
        const $menu = $(this).find(".dropdown-custom__menu");
        const $ic = $(this).find(".dropdown-custom__btn");
        if (!exception || !$(this).is(exception)) {
          $menu.removeClass("dropdown--active");
          $ic.removeClass("--active");
        }
      });
    }
  });
}

function updSwiperNumericPagination(swiper) {
  const totalSlides = swiper.slides.length;
  const slidesPerView = Math.floor(swiper.params.slidesPerView);
  let currentIndex = swiper.realIndex + slidesPerView; // Start counting from 3

  // Adjust currentIndex based on the total number of slides
  if (currentIndex > totalSlides) {
    currentIndex = slidesPerView; // Wrap around back to slidesPerView
  }

  // Ensure currentIndex is at least slidesPerView
  if (currentIndex < slidesPerView) {
    currentIndex = slidesPerView; // Ensure it doesn't go below slidesPerView
  }

  const paginationElement = swiper.pagination.el;
  
  if (paginationElement) {
    paginationElement.innerHTML = 
      '<span class="count">' + currentIndex + '</span>/<span class="total">' + totalSlides + "</span>";
  } else {
    console.warn("Pagination element not found");
  }
}

function swiperDeals() {
  if ($(".swiper-deals").length) {
    const swiperDeals = new Swiper(".swiper-deals", {
      slidesPerView: 1.2,
      spaceBetween: 16,
      slidesOffsetAfter: 16,
      // loop: true,
      pagination: {
        el: ".deals-sec .swiper-pagination",
        type: "fraction",
      },
      navigation: {
        nextEl: ".deals__list .swiper-button-next",
        prevEl: ".deals__list .swiper-button-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 2,
          spaceBetween: 40,
          slidesOffsetAfter: 0,
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: 40,
          slidesOffsetAfter: 0,
        },
        992: {
          spaceBetween: 24,
          slidesOffsetAfter: 0,
        },
      },
      on: {
        init: function () {
          updSwiperNumericPagination(this);
        },
        slideChange: function () {
          updSwiperNumericPagination(this);
        },
      },
    });
  }
}

function commingSoon() {
  if ($(window).width() >= 991 && $(".cooming-sec").length) {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".panel").slice(1);
    const content = gsap.utils.toArray(".animate-left");
    const numberStart = $(".number-start");
    const numberEnd = $(".number-end");
    const totalSlides = $(".panel").length;
    let currentSlide = 1;

    numberStart.text(currentSlide);
    numberEnd.text(totalSlides);

    const positionPinSection = $(window).width() > 767 ? 0 : 40;

    const startPosition = `top+=${positionPinSection}`;

    const panelTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".comming-soon",
        start: startPosition,
        end: () => "+=" + 150 * panels.length + "%",
        pin: true,
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const newSlide = Math.min(
            Math.max(1, Math.ceil(self.progress * totalSlides)),
            totalSlides
          );
          if (newSlide !== currentSlide) {
            currentSlide = newSlide;
            numberStart.text(currentSlide);

            content.forEach((el) => el.classList.remove('show'));
            // Add 'show' class to the current content element
            content[currentSlide - 1].classList.add('show');
          }
        },
      },
    });

    const allPanels = $(".panel");
    panels.forEach((panel, index) => {
      console.log(index);
      
      panelTl.fromTo(
        panel,
        {
          height: "100%",
          zIndex: index === 0 ? 1 : 0,
        },
        {
          height: "0%",
          ease: "none",
          duration: 1.5,
          zIndex: 1,
          onStart: () => {
            gsap.set(panel, { zIndex: 1 });
          },
          onComplete: () => {
            gsap.set(panel, { zIndex: 0 });
          },
        },
        "+=0.5"
      );

      panelTl.fromTo(  
        allPanels.get(index),
        {
          scale: 1,
        },
        {
          scale: 1.2,
        },
        "+=0.5"
      );
    });

    ScrollTrigger.refresh();
  }
}


window.addEventListener('load', () => {
  commingSoon();
  scrollWinkRewards();
  ScrollTrigger.refresh();
});

window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});

function selectMap() {
  let activeMarker = null;

  $(window).width() < 768 ? $(".map-content-wrapper").addClass("show") : null;

  $(".marker").on("click", function (e) {
    $(".marker").addClass("hidden");
    if ($(window).width() < 767) {
      // Remove 'active' class from all marker-detail elements
      $(".marker-detail").removeClass("active");
    }
    const city = $(this).data("city");
    $(this).addClass("hidden");
    $(".map-img").addClass("zoom");
    $(".map-content-wrapper").addClass("show");
    $(".map__marker").addClass("hide");

    $(".map-content").removeClass("show");
    $(`.map-content[data-city-map="${city}"]`).addClass("show");
  });

  $(".icon-back").on("click", function (e) {
    $(".map-content-wrapper").removeClass("show");
    $(".map__marker").removeClass("hide");
    $(".marker-detail").removeClass("active");
    $(".map-content-detail").removeClass("show");

    $(".map-content").removeClass("show");
    $(".marker").removeClass("hidden");

    if ($("img[usemap='#vietnam_map']").length) {
      const dataMobile = $(window).width() < 768 ? "-mobile" : "";
      const imageMap =
        $(window).width() < 768 ? "#vietnam_map_mobile" : "#vietnam_map";
      $(`img[usemap='${imageMap}']`).attr(
        "src",
        `./assets/images/map-default${dataMobile}.png`
      );
    }
  });

  $(".icon-back-lv2").on("click", function (e) {
    $(".map-content-detail").removeClass("show");

    if($(".map.homepage").length){
      let target = $(e.target);
      let mapDetailDataHotel = target.closest(".map-content-detail").data("hotel");  

      if(mapDetailDataHotel === 'da-nang-center' || mapDetailDataHotel === 'da-nang-riverside'){
        $(`.map-content[data-city-map='da-nang']`).addClass("show");
      }
      else if(mapDetailDataHotel){
        $(`.map-content[data-city-map='${mapDetailDataHotel}']`).addClass("show");
      }
    }

    if ($("img[usemap='#vietnam_map']").length) {
      const dataMobile = $(window).width() < 768 ? "-mobile" : "";
      const imageMap =
        $(window).width() < 768 ? "#vietnam_map_mobile" : "#vietnam_map";
      $(`img[usemap='${imageMap}']`).attr(
        "src",
        `./assets/images/map-default${dataMobile}.png`
      );
    }
  });
  if ($(window).width() < 767) {
    // Remove 'active' class from all marker-detail elements
    $(".marker-detail").removeClass("active");
  }
  $(".box-body .item").on("click", function (e) {
    const city = $(this).data("city-item");
    $(".marker-detail").removeClass("active");
    $(`.marker-detail[data-city="${city}"]`).addClass("active");
    $(`.map-content-detail[data-hotel="${city}"]`).addClass("show");
    $(`.map-content[data-city-map="${city}"]`).removeClass("show");

    if(city === 'da-nang-center' || city === 'da-nang-riverside'){
      $(`.map-content[data-city-map='da-nang']`).removeClass("show");
    }

    if ($("img[usemap='#vietnam_map']").length) {
      const dataMobile = $(window).width() < 768 ? "-mobile" : "";
      const imageMap =
        $(window).width() < 768 ? "#vietnam_map_mobile" : "#vietnam_map";
      $(`[usemap='${imageMap}']`).attr(
        "src",
        `./assets/images/map-${city}${dataMobile}.png`
      );
    }
  });

  $(".marker-detail, map area").on("click", function (e) {
    e.preventDefault();

    const city = $(this).data("city");
    const citys = $(this).data("v2-city");

    if ($("img[usemap='#vietnam_map']").length) {
      const dataMobile = $(window).width() < 768 ? "-mobile" : "";
      const imageMap =
        $(window).width() < 768 ? "#vietnam_map_mobile" : "#vietnam_map";
      $(`[usemap='${imageMap}']`).attr(
        "src",
        `./assets/images/map-${city}${dataMobile}.png`
      );

      $(".map-content").removeClass("show");

      $(`.map-content[data-city-map="${city}"]`).addClass("show");

      if(city === 'da-nang-center' || city === 'da-nang-riverside'){
        $(`.map-content[data-city-map='da-nang']`).removeClass("show");
      }
    }

    // Xóa các lớp 'show' và 'active' trước
    // $(".map-content").removeClass("show");
    $(".marker-detail").removeClass("active");
    $(".map-content-detail").removeClass("show");

    // Thêm lớp 'active' cho marker được click
    $(this).addClass("active");

    // Hiển thị map-content và map-content-detail theo city
    // $(`.map-content[data-city-map="${city}"]`).addClass("show");
    $(`.map-content-detail[data-hotel="${city}"]`).addClass("show");

    // Nếu citys tồn tại, thực hiện cập nhật thêm
    if (citys) {
      // Ẩn các nội dung liên quan đến city ban đầu
      $(".map-content").removeClass("show");
      $(".marker-detail").removeClass("active");

      // Thêm lớp 'active' và hiển thị map-content theo citys
      $(this).addClass("active");
      $(`.map-content[data-city-map="${citys}"]`).addClass("show");

      if(city === 'da-nang-center' || city === 'da-nang-riverside'){
        $(`.map-content[data-city-map='da-nang']`).removeClass("show");
      }
    }
  });
}
function scrollWinkRewards() {
  if ($(".rewards-sec").length) {
    gsap.registerPlugin(ScrollTrigger);

    function getClipPathForSmallScreens(pixelValue, viewportWidth) {
      const percentage = (pixelValue / viewportWidth) * 100;
      const pixelValueTop = viewportWidth < 991 ? 4 : 10;
      const pixelValueBottom = viewportWidth < 991 ? 96 : 90;
      return `polygon(${pixelValue}px ${pixelValueTop}%, ${
        100 - percentage
      }% ${pixelValueTop}%, ${
        100 - percentage
      }% ${pixelValueBottom}%, ${pixelValue}px ${pixelValueBottom}%)`;
    }

    function applyClipPathAnimation(
      section,
      clipPathValue,
      startTrigger,
      endTrigger
    ) {
      let pinValue = $(section).hasClass("rewards-sec-event") ? false : true;
      if (pinValue) {
        pinValue = viewportWidth > 990;
      }

      gsap.to($(section).find(".rewards-sec__img"), {
        clipPath: clipPathValue,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: startTrigger,
          end: endTrigger,
          scrub: 1,
          toggleActions: "play reverse play reverse",
          pin: pinValue,
        },
      });
    }

    const viewportWidth = window.innerWidth;
    const pixelValue = viewportWidth < 991 ? 24 : 80;

    // 24px 4%, 93.6% 4%, 93.6% 96%, 24px 96%
    $(".rewards-sec").each(function () {
      const section = this;
      const clipPathValue = getClipPathForSmallScreens(
        pixelValue,
        viewportWidth
      );

      if (viewportWidth <= 767) {
        applyClipPathAnimation(
          section,
          clipPathValue,
          "top 20%",
          "bottom bottom"
        );
      } else {
        // Kiểm tra nếu section có class 'rewards-sec-event'
        const startValue = $(section).hasClass("rewards-sec-event")
          ? "top 30%"
          : "top 8%";

        applyClipPathAnimation(
          section,
          clipPathValue,
          startValue,
          "bottom bottom"
        );
      }
    });
  }
}

function swiperRoomSuites() {
  if ($(".wink-room-sec").length) {
    let swiperParentRoom;
    function initSliderWinkRoom() {
      const swiperParentRoom = new Swiper(".swiper-parent-room", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 24,

        // loop: true,
        pagination: {
          el: ".swiper-control-parent .swiper-pagination",
          type: "fraction",
        },
        navigation: {
          nextEl: ".swiper-control-parent .swiper-button-next",
          prevEl: ".swiper-control-parent .swiper-button-prev",
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
        on: {
          init: function () {
            updSwiperNumericPagination(this);
          },
          slideChange: function () {
            updSwiperNumericPagination(this);
          },
        },
      });
    }
    if (window.innerWidth < 768) {
      if (swiperParentRoom) {
        swiperParentRoom.destroy(true, true); // Destroy the Swiper instance
        swiperParentRoom = null; // Reset the instance
      }
    } else {
      if (!swiperParentRoom) {
        initSliderWinkRoom(); // Initialize if Swiper isn't already created
      }
    }

    let interleaveOffsetChild = 0.9;
    var swiperChildImage = $(".swiper-child-img");
    swiperChildImage.each(function () {
      var $this = $(this); // Cache the current Swiper element

      // Initialize Swiper for each element
      new Swiper($this[0], {
        slidesPerView: 1,
        allowTouchMove: false,
        speed: 1000,
        pagination: {
          el: $this.find(".swiper-pagination")[0],
          type: "fraction",
        },
        navigation: {
          nextEl: $this.find(".swiper-button-next")[0],
          prevEl: $this.find(".swiper-button-prev")[0],
        },
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        // loop: true,

        on: {
          progress: function (swiper) {
            swiper.slides.forEach(function (slide) {
              var slideProgress = slide.progress || 0;
              var innerOffset = swiper.width * interleaveOffsetChild;
              var innerTranslate = slideProgress * innerOffset;
              // Kiểm tra nếu innerTranslate không phải là NaN
              if (!isNaN(innerTranslate)) {
                var slideInner = slide.querySelector(".slide-banner");
                if (slideInner) {
                  slideInner.style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }
              }
            });
          },
          touchStart: function (swiper) {
            swiper.slides.forEach(function (slide) {
              slide.style.transition = "";
            });
          },
          setTransition: function (swiper, speed) {
            var easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
            swiper.slides.forEach(function (slide) {
              slide.style.transition = speed + "ms " + easing;
              var slideInner = slide.querySelector(".slide-banner");
              if (slideInner) {
                slideInner.style.transition = speed + "ms " + easing;
              }
            });
          },
        },
      });
    });
  }
}
function amentities() {
  var swiperAmen = new Swiper(".swiper-amenities", {
    effect: "fade",
    slidesPerView: 1,
    allowTouchMove: false,
  });
  var swiperAmenContent = new Swiper(".swiper-amenities-content", {
    slidesPerView: 1,

    pagination: {
      el: ".amen-right .swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".amen-right .swiper-button-next",
      prevEl: ".amen-right .swiper-button-prev",
    },
    thumbs: {
      swiper: swiperAmen,
    },
  });
  const $contents = $(".amenities__title .item");
  let $activeElement = $contents.first();

  if ($activeElement.length) {
    $activeElement.addClass("active");
  }

  $contents.each(function (index) {
    $(this).on("mouseover", function () {
      swiperAmen.slideTo(index);
      console.log(index);

      if ($activeElement.length) {
        $activeElement.removeClass("active");
      }

      $(this).addClass("active");
      $activeElement = $(this);
    });
    // click
    $(this).on("click", function () {
      swiperAmenContent.slideTo(index);
      setTimeout(function () {
        $(".amenities__top .amen-right .box-detail").addClass("active");
      }, 300);
    });
  });
  $(".amenities__top .amen-right .box-detail .head .icon-close").on(
    "click",
    function () {
      $(".amenities__top .amen-right .box-detail").removeClass("active");
    }
  );
}
function removeBoxDetail(event) {
  event.preventDefault();

  let target = $(event.target);
  if (target.length) {
    target.closest(".box-detail").removeClass("active");
  }
}
function swiperSuites() {
  if ($(".wink-room__suites").length) {
    let interleaveOffsetSuites = 0.8;
    var swiperSuites = $(".swiper-suites");
    swiperSuites.each(function () {
      var $this = $(this); // Cache the current Swiper element
      console.log($this[0]);

      // Initialize Swiper for each element
      new Swiper($this[0], {
        slidesPerView: 1,
        // allowTouchMove: false,
        speed: 1000,
        pagination: {
          el: $this.find(".swiper-pagination")[0],
          type: "fraction",
        },
        navigation: {
          nextEl: $this.find(".swiper-button-next")[0],
          prevEl: $this.find(".swiper-button-prev")[0],
        },
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        // loop: true,

        on: {
          progress: function (swiper) {
            swiper.slides.forEach(function (slide) {
              var slideProgress = slide.progress || 0;
              var innerOffset = swiper.width * interleaveOffsetSuites;
              var innerTranslate = slideProgress * innerOffset;
              // Kiểm tra nếu innerTranslate không phải là NaN
              if (!isNaN(innerTranslate)) {
                var slideInner = slide.querySelector(".slide-banner");
                if (slideInner) {
                  slideInner.style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }
              }
            });
          },
          touchStart: function (swiper) {
            swiper.slides.forEach(function (slide) {
              slide.style.transition = "";
            });
          },
          setTransition: function (swiper, speed) {
            var easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
            swiper.slides.forEach(function (slide) {
              slide.style.transition = speed + "ms " + easing;
              var slideInner = slide.querySelector(".slide-banner");
              if (slideInner) {
                slideInner.style.transition = speed + "ms " + easing;
              }
            });
          },
        },
      });
    });
  }
}

function swiperBookRoom() {
  if ($(".img-room").length) {
    let interleaveOffsetRoom = 0.75;
    var swiperChildRoom = $(".swiper-book-room");
    swiperChildRoom.each(function () {
      var $this = $(this); // Cache the current Swiper element

      // Initialize Swiper for each element
      new Swiper($this[0], {
        slidesPerView: "auto",
        allowTouchMove: false,
        speed: 1000,
        pagination: {
          el: $this.find(".swiper-pagination")[0],
          type: "fraction",
        },
        navigation: {
          nextEl: $this.find(".swiper-button-next")[0],
          prevEl: $this.find(".swiper-button-prev")[0],
        },
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        loop: true,

        on: {
          progress: function (swiper) {
            swiper.slides.forEach(function (slide) {
              var slideProgress = slide.progress || 0;
              var innerOffset = swiper.width * interleaveOffsetRoom;
              var innerTranslate = slideProgress * innerOffset;
              // Kiểm tra nếu innerTranslate không phải là NaN
              if (!isNaN(innerTranslate)) {
                var slideInner = slide.querySelector(".slide-banner");
                if (slideInner) {
                  slideInner.style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }
              }
            });
          },
          touchStart: function (swiper) {
            swiper.slides.forEach(function (slide) {
              slide.style.transition = "";
            });
          },
          setTransition: function (swiper, speed) {
            var easing = "cubic-bezier(0.25, 0.1, 0.25, 1)";
            swiper.slides.forEach(function (slide) {
              slide.style.transition = speed + "ms " + easing;
              var slideInner = slide.querySelector(".slide-banner");
              if (slideInner) {
                slideInner.style.transition = speed + "ms " + easing;
              }
            });
          },
        },
      });
    });
  }
}
function showOrHidePasswords() {
  let valueInput = $(".input-password .form-input");
  $(".input-password .icon-eye").on("click", function () {
    if (valueInput.attr("type") === "password") {
      valueInput.attr("type", "text");
      $(this).addClass("change-icon");
    } else {
      valueInput.attr("type", "password");
      $(this).removeClass("change-icon");
    }
  });
}

function commingCareer() {
  if ($(".career-intro-sec").length && $(window).width() >= 991) {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const panels = gsap.utils.toArray(".panel").slice(1); // Get all panels except the first one
    const numberStart = $(".number-start");
    const numberEnd = $(".number-end");
    const totalSlides = $(".panel").length;
    let currentSlide = 1;

    numberStart.text(currentSlide);
    numberEnd.text(totalSlides);

    var contentElements = document.querySelectorAll(
      ".comming-soon .panels .panel"
    );
    var totalHeight = 0;
    contentElements.forEach((element, index) => {
      var heightElement = element.offsetHeight;
      totalHeight += heightElement;
    });
    gsap.to(".comming-soon", {
      scrollTrigger: {
        toggleActions: "play reverse play reverse",
        start: "top top",
        end: `+=${totalHeight}`,
        pin: ".comming-soon",
        pinSpacing: true,
        onUpdate: (self) => {
          const newSlide = Math.min(
            Math.max(1, Math.ceil(self.progress * totalSlides)),
            totalSlides
          );

          if (newSlide !== currentSlide) {
            currentSlide = newSlide;
            numberStart.text(currentSlide); // Update the current slide number
          }
        },
      },
    });

    // scroll to image
    contentElements.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          if (self.progress === 1) {
            const nextSection = contentElements[index];
            if (nextSection) {
              $(".comming-soon .panels .panel").removeClass("show");
              $(nextSection).addClass("show");
            }
          } else {
            const prevSection = contentElements[index - 1];
            if (prevSection && index > 0) {
              $(".comming-soon .panels .panel").removeClass("show");
              $(prevSection).addClass("show");
            } else {
              $(".comming-soon .panels .panel").removeClass("show");
              $(contentElements[index]).addClass("show");
            }
          }
        },
      });
    });
    // ScrollTrigger.refresh(); // Refresh ScrollTrigger after setting up animations
  }
}

function stickyFilter() {
  $(window).scroll(function () {
    if ($(".hotels__filter").length) {
      let heightHeader = $(".header").height();
      let currentScroll = $(window).scrollTop();
      let hotelsOffset = $(".hotels__container").offset().top - 60;

      // Thêm biến để lưu giá trị cuộn trước đó
      let previousScroll = $(this).data("previousScroll") || 0;

      if (currentScroll >= hotelsOffset) {
        $(".hotels__filter").addClass("fixed");

        // Kiểm tra hướng cuộn
        if (currentScroll > previousScroll) {
          // Cuộn xuống
          $(".hotels__filter")
            .addClass("scrolling-down")
            .removeClass("scrolling-up");
        } else {
          // Cuộn lên
          $(".hotels__filter")
            .addClass("scrolling-up")
            .removeClass("scrolling-down");
        }
      } else {
        $(".hotels__filter").removeClass("fixed scrolling-down scrolling-up");
      }

      // Lưu giá trị cuộn hiện tại cho lần kiểm tra tiếp theo
      $(this).data("previousScroll", currentScroll);
    }
  });

  $(window).scroll(function () {
    if ($(".positions-hiring").length) {
      let heightHeader = $(".header").height();
      let currentScroll = $(window).scrollTop();
      let hotelsOffset =
        $(".positions-hiring__container .position-list").offset().top -
        heightHeader +
        56;

      // Thêm biến để lưu giá trị cuộn trước đó
      let previousScroll = $(this).data("previousScroll") || 0;

      if (currentScroll >= hotelsOffset) {
        $(".position-filters").addClass("fixed");

        // Kiểm tra hướng cuộn
        if (currentScroll > previousScroll) {
          // Cuộn xuống
          $(".position-filters")
            .addClass("scrolling-down")
            .removeClass("scrolling-up");
        } else {
          // Cuộn lên
          $(".position-filters")
            .addClass("scrolling-up")
            .removeClass("scrolling-down");
        }
      } else {
        $(".position-filters").removeClass("fixed scrolling-down scrolling-up");
      }

      // Lưu giá trị cuộn hiện tại cho lần kiểm tra tiếp theo
      $(this).data("previousScroll", currentScroll);
    }
  });
}
function mapCompany() {
  if ($(".map-new").length) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".map-new",
        start: "top 60px",
        end: "+=120%",
        pin: true,
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          const scrollDirection = self.direction; // 1 for down, -1 for up

          if (scrollDirection === -1) {
            document.querySelectorAll(".marker-detail").forEach((marker) => {
              marker.classList.remove("active");
            });
            document
              .querySelectorAll(".map-content-detail")
              .forEach((marker) => {
                marker.classList.remove("show");
              });
          }
        },
        onComplete: () => {
          console.log("Animation completed!"); // Check if this logs
        },
        onLeave: () => {
          $(".map-new").addClass("remove-spacing");
        },
      },
    });

    // Your animation steps here...
    tl.fromTo(
      ".ic-wink-head",
      { opacity: 0, yPercent: 20, zIndex: 2 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut", zIndex: 0 }
    );

    tl.fromTo(
      ".wink-head-office",
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" }
    )
      .to(
        ".wink-head-office",
        {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
          delay: 1,
          yPercent: -20,
        },
        "-=0.25"
      )
      .to(".ic-wink-head", {
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
      });

    tl.fromTo(
      ".marker-detail",
      { opacity: 0, yPercent: 10 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.5,
        stagger: {
          amount: 0.25,
          from: "end",
          ease: "none",
        },
        onComplete: () => {
          if($(window).width() > 767) {
            $(".marker-detail.ho-chi-minh").addClass("active");
            $(".map-content-detail[data-hotel='ho-chi-minh']").addClass("show");
          }
        }
      }
    );

    // Add a delay of 3 seconds after the marker-detail animation
    tl.call(() => {}, {}, "+=3");

    tl.fromTo(
      ".map-new .map-content",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "none" }
    );
  }
}

function mapCompanyNew() {
  if ($(".map-new").length) {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".map-new",
        start: "top 60px",
        end: "+=120%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const scrollDirection = self.direction;

          if (scrollDirection === -1) {
            document
              .querySelectorAll(".map-content-detail")
              .forEach((marker) => {
                marker.classList.remove("show");
              });
          }
        },
        onLeave: () => {
          $(".map-new").addClass("remove-spacing");
        },
      },
    });

    // Phase 1: Show the first image
    tl.fromTo(
      ".wink-head-office",
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, duration: 1.5, ease: "power1.inOut" }
    ).to(".wink-head-office", {
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
      yPercent: 0,
    });

    // Phase 2: Show images 1 to 3
    const imagesCountPhase1 = 2;
    for (let i = 1; i <= imagesCountPhase1; i++) {
      tl.call(
        () => {
          updateImageSource((i - 1) / imagesCountPhase1);
        },
        null,
        `+=0.75`
      );
    }

    // Phase 3: Show images 4 to 8 after showing image 3
    const imagesCountPhase2 = 4; // From 4 to 8
    tl.call(() => {
      // Optionally: Handle any actions before showing phase 2 images
      console.log("Transitioning to images 4 to 8");
    }, null, `+=0.75`);

    for (let i = 4; i <= 4 + imagesCountPhase2 - 1; i++) {
      tl.call(
        () => {
          updateImageSource((i - 1) / (imagesCountPhase1 + imagesCountPhase2));
        },
        null,
        `+=0.75`
      );
    }

    // Reveal marker details
    tl.fromTo(
      ".marker-detail",
      { opacity: 0, yPercent: 10 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.5,
        stagger: {
          amount: 0.25,
          from: "end",
          ease: "none",
        },
      }
    );

    tl.fromTo(
      ".map-new .map-content",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "none" }
    );

    function updateImageSource(scrollPosition) {
      const currentImage = Math.ceil(scrollPosition * (imagesCountPhase1 + imagesCountPhase2));
      const finalImageIndex = Math.min(Math.max(currentImage, 1), imagesCountPhase1 + imagesCountPhase2);
      const dataMobile = $(window).width() < 768 ? "-mobile" : "";
      const imageSrc = `./assets/images/map-new-step-${finalImageIndex}${dataMobile}.png`;
      $("img[usemap='#vietnam_map'], img[usemap='#vietnam_map_mobile']").attr("src", imageSrc);
      
      if (finalImageIndex == imagesCountPhase1 + imagesCountPhase2 && $(window).width() > 767) {
        $(".map-content-detail[data-hotel='ho-chi-minh']").addClass("show");
      }
    }
  }
}

function toggleSubmenuMobile() {
  if ($(window).width() > 991) return;

  $("header .menu-item > a").on("click", function (event) {
    if (!$(this).closest(".menu-item-has-children").length) return;

    event.preventDefault();

    $(this).closest(".menu-item-has-children").addClass("open");
  });

  $("header .menu-item .btn-back").on("click", function () {
    $(this).closest(".menu-item-has-children").removeClass("open");
  });
}

function scrollToolbarMobile() {
  let btn;

  function initializeScrollTrigger() {
    btn = gsap
      .from(".toolbar-mobile", {
        y: "100%",
        paused: true,
        duration: 0.5,
      })
      .progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? btn.play() : btn.reverse();
      },
    });
  }

  initializeScrollTrigger();

  // Re-initialize ScrollTrigger when page is refreshed
  $(window).on("load", initializeScrollTrigger);
}

function toggleModalFindingRoom(event) {
  let target = $(event.target);
  let dataModal = target.data("modal");

  $(`.modal[data-modal='${dataModal}']`).toggleClass("active");
}

function toggleOpenDescWinkFacilities() {
  $(".wink-room-sec .box input[type='checkbox']").on("click", function () {
    const $box = $(this).closest(".box");
    const $desc = $box.find(".box-desc .desc ul");

    $box.toggleClass("open");

    if ($box.hasClass("open")) {
      let heightBox;

      if (window.innerWidth < 767) {
        heightBox = $desc.prop("scrollHeight") - 100;
      } else {
        heightBox = $desc.prop("scrollHeight");
      }

      $desc.css("height", heightBox + "px");
    } else {
      $desc.css("height", "70px");
    }
  });
}

function handleFilePDFSelect(event, infoElementId) {
  const file = event.target.files[0];
  const infoElement = document.getElementById(infoElementId);
  const maxSize = 20 * 1024 * 1024; // 20MB in bytes

  if (file && file.size > maxSize) {
    infoElement.textContent = `File is too large. Maximum size is 20MB.`;
  }
}

function responsiveImageMap() {
  if ($("img[usemap]").length < 1) return;

  $("img[usemap]").rwdImageMaps();
}
