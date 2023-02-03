/*================================
    1. slicknav Mobile Menu
  ==================================*/
$(function () {
  $("#menu_two").slicknav({
    closeOnClick: true, // it's new line added
    appendTo: ".mobile_menu_load", //Clicking will remove menu the tag
  });
});
//Clicking will remove menu the tag

// scrol_my_menu_select start
/*================================
    2. Load Function
  ==================================*/
$(window).on("load", function () {
  smoothScrolling($("header ul li a[href^='#']"), 80);
});
/*  ================================
    3. Smoth Scroll
    ==================================*/
function smoothScrolling($links, $topGap) {
  var links = $links;
  var topGap = $topGap;

  links.on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ===
        this.pathname.replace(/^\//, "") &&
      location.hostname === this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - topGap,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
    return false;
  });
}

/*  ================================
    4. Scroll Function
    ==================================*/
$(window).on("scroll", function () {
  activeMenuItem($(".menu"));
});

/*================================
    5. Active current Li
  ==================================*/
function activeMenuItem($links) {
  var top = $(window).scrollTop(),
    windowHeight = $(window).height(),
    documentHeight = $(document).height(),
    cur_pos = top + 2,
    sections = $("section"),
    nav = $links,
    nav_height = nav.outerHeight(),
    home = nav.find(" > ul > li:first");

  sections.each(function () {
    var top = $(this).offset().top - nav_height - 40,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find("> ul > li > a").parent().removeClass("active");
      nav
        .find("a[href='#" + $(this).attr("id") + "']")
        .parent()
        .addClass("active");
    } else if (cur_pos === 2) {
      nav.find("> ul > li > a").parent().removeClass("active");
      home.addClass("active");
    } else if ($(window).scrollTop() + windowHeight > documentHeight - 400) {
      nav.find("> ul > li > a").parent().removeClass("active");
    }
  });
}
