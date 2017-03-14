$(document).ready(function() {
  var $menu = $('.hamburger');
  var $navbar = $('.navbar');

  $menu.click('click', toggleMenu);

  function toggleMenu() {
    $menu.toggleClass('open');
    $navbar.toggleClass('open');
  }

  $('.navlabel').on('click', scrollTo);

  function scrollTo(e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing');
    if ($menu.hasClass('open') && $navbar.hasClass('open')) {
      $menu.removeClass('open');
      $navbar.removeClass('open');
    }
  }
});
