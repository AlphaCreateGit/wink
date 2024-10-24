"use strict";
$ = jQuery;
$(document).ready(function () {
  scrollHeader();
  subMenuHeader();
  swiperBanner();
  gsapIntro();
  scrollFeedBack();
  scrollCTA();
  menubar();
  selectMap();
  bookingForm();
  mapCompany();
  commingSoon();
  swiperRoom();
  scrollWinkRewards();
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
});
function handlePageVisibilityAndFavicon() {
  const originalTitle = document.title;
  let faviconInterval;

  // Xử lý thay đổi tiêu đề khi tab/cửa sổ thay đổi trạng thái hiển thị
  $(document).on("visibilitychange", function () {
    if (document.hidden) {
      document.title = "Quay lại đi! 😢";
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
      "./assets/images/logo.svg",
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
    scale: 3,
    transformOrigin: "center center",
    ease: "power1.inOut",
    duration: 2.5, // Optional duration for the first animation
  });

  // Second animation: image-signature .box, starts simultaneously with the first animation
  tl.to(
    ".image-signature .box",
    {
      scale: 340,
      transformOrigin: "center center",
      ease: "power2.inOut",
      duration: 1.5, // Optional duration for the second animation
    },
    1
  ); // Start at the same time as the previous animation
}

function scrollFreezeCtaMess() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.create({
    trigger: ".footer",
    start: "top bottom",
    end: "bottom 80vh",
    toggleClass: "freeze",
    scrub: 1,
  });
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
        duration: 0.5,
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
          calendar.style.left = rect.left + window.scrollX + "px";
        } else {
          calendar.style.top = rect.bottom + window.scrollY + 20 + "px";
          calendar.style.left = rect.left + window.scrollX + "px";
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
      const tmpText = $textDropdown.text();
      const tmpImgSrc = $textDropdown.find("img").attr("src"); // Get the current image src if present
      const $img = $item.find("img"); // Check if the clicked item contains an img

      // Swap text content
      $textDropdown.text($item.text());

      // If the item has an image, swap the img src
      if ($img.length) {
        $textDropdown.html($item.html()); // Swap the entire HTML, including the img
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

function swiperDeals() {
  if ($(".swiper-deals").length) {
    const swiperDeals = new Swiper(".swiper-deals", {
      slidesPerView: 1.2,
      spaceBetween: 16,
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
        },
        1023: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          spaceBetween: 24,
        },
      },
    });
  }
}

function commingSoon() {
  if ($(".cooming-sec").length) {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".panel").slice(1);
    const content = gsap.utils.toArray(".animate-left");
    const numberStart = $(".number-start");
    const numberEnd = $(".number-end");
    const totalSlides = $(".panel").length;
    let currentSlide = 1;

    numberStart.text(currentSlide);
    numberEnd.text(totalSlides);

    const postionPinSection = $(window).width() > 767 ? "5%" : "40px";

    // Timeline for panels with scrub true
    const panelTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".comming-soon",
        start: `top ${postionPinSection}`,
        end: () => "+=" + 100 * panels.length + "%",
        pin: true,
        scrub: true, // Scrub for panels
        markers: false,
        onUpdate: (self) => {
          const newSlide = Math.min(
            Math.max(1, Math.ceil(self.progress * totalSlides)),
            totalSlides
          );
          if (newSlide !== currentSlide) {
            currentSlide = newSlide;
            numberStart.text(currentSlide); // Update slide count
          }
        },
      },
    });

    // Animate panels with scrub effect
    panels.forEach((panel, index) => {
      panelTl.from(
        panel,
        {
          yPercent: 100,
          ease: "none",
          duration: 1,
          stagger: 0.5,
        },
        "+=0.5"
      );
    });

    // Separate animations for content with no scrub but still reverse effect
    panels.forEach((panel, index) => {
      gsap.fromTo(
        content[index],
        {
          yPercent: 10,
          autoAlpha: 0,
        },
        {
          yPercent: 0,
          autoAlpha: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: panel,
            start: "top 40%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse", // Play on scroll down, reverse on scroll up
            //markers: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }
}
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

    $(".map-content").removeClass("show");
    $(`.map-content[data-city-map="${city}"]`).addClass("show");
  });

  $(".icon-back").on("click", function (e) {
    $(".map-content-wrapper").removeClass("show");
    $(".marker-detail").removeClass("active");
    $(".map-content-detail").removeClass("show");

    $(".map-content").removeClass("show");
    $(".marker").removeClass("hidden");
  });

  $(".icon-back-lv2").on("click", function (e) {
    $(".map-content-detail").removeClass("show");
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
  });

  $(".marker-detail").on("click", function (e) {
    const city = $(this).data("city");
    const citys = $(this).data("v2-city");

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
        slidesPerGroup: 2,
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
    let interleaveOffsetRoom = 0.76;
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
  if ($(".career-intro-sec").length) {
    gsap.registerPlugin(ScrollTrigger);

    const panels = gsap.utils.toArray(".panel").slice(1); // Get all panels except the first one
    const numberStart = $(".number-start");
    const numberEnd = $(".number-end");
    const totalSlides = $(".panel").length;
    let currentSlide = 1;

    numberStart.text(currentSlide);
    numberEnd.text(totalSlides);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".career-intro-sec",
        start: "top 3%",
        end: () => "+=" + 100 * panels.length + "%", // Extend the timeline based on the number of panels
        pin: true,
        scrub: 1,
        // markers: true,
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

    // Animate the panels on scroll without mouse interaction
    panels.forEach((panel, index) => {
      tl.fromTo(
        panel,
        {
          autoAlpha: 0,
          yPercent: 10,
        },
        {
          autoAlpha: 1,
          yPercent: 0,
          ease: "none",
        },
        "+=0.5"
      );
    });

    ScrollTrigger.refresh(); // Refresh ScrollTrigger after setting up animations
  }
}

function stickyFilter() {
  $(window).scroll(function () {
    if ($(".hotels__filter").length) {
      let heightHeader = $(".header").height();
      let currentScroll = $(window).scrollTop();
      let hotelsOffset = $(".hotels__container").offset().top - heightHeader;

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

    // Update the last scroll position for future comparison
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".map-new",
        start: "top 8%",
        end: "bottom 60%",
        pin: true,
        scrub: true,
        // markers: true,
        onUpdate: (self) => {
          // Use self.scroll() to get the current scroll position and compare with previous scroll
          const scrollDirection = self.direction; // 1 for down, -1 for up

          if (scrollDirection === -1) {
            // -1 means scrolling up
            document.querySelectorAll(".marker-detail").forEach((marker) => {
              marker.classList.remove("active");
            });
            document
              .querySelectorAll(".map-content-detail")
              .forEach((marker) => {
                marker.classList.remove("show");
              });
            console.log("Scrolling up, active class removed");
          }
        },
        onComplete: () => {
          console.log("Animation completed!"); // Check if this logs
        },
      },
    });

    // Animate .ic-wink-head (fade in and move up)
    tl.fromTo(
      ".ic-wink-head",
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" } // Fade in
    );

    // Animate .wink-head-office (fade in and move up)
    tl.fromTo(
      ".wink-head-office",
      { opacity: 0, yPercent: 20 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "power1.inOut" } // Fade in
    ).to(
      ".wink-head-office",
      {
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        delay: 1,
        yPercent: -20,
      },
      "-=0.25"
    ); // Start fading out .wink-head-office halfway through .ic-wink-head fade in

    // Fade out .ic-wink-head after .wink-head-office has faded out
    tl.to(".ic-wink-head", {
      opacity: 0, // Fade out
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
      }
    );

    tl.fromTo(
      ".map-new .map-content",
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "none" } // Fade in
    );
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
      $desc.css("height", $desc.prop("scrollHeight") + "px");
    } else {
      $desc.css("height", "70");
    }
  });
}
