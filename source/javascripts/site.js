window.addEventListener('DOMContentLoaded', function() {
  var mir = document.getElementsByClassName('mir')[0];
  var body = document.body;
  // var coffeeSecret = document.getElementById('secret2');
  var coffee = document.getElementsByClassName('coffee')[0];

  mir.addEventListener('mouseenter', function () {
    body.classList.add('focused');
    // coffeeSecret.style.color = "#101010";
  }, false);

  mir.addEventListener('mouseleave', function() {
    body.classList.remove('focused');
    // coffeeSecret.style.color = "#F5F5F5";
  }, false);

  mir.addEventListener('click', function () {
    body.classList.remove('focused');
    // coffeeSecret.style.color = "#F5F5F5";
  }, false);

  coffee.addEventListener('mouseenter', function () {
    // coffeeSecret.style.color = "#101010";
  }, false);

  coffee.addEventListener('mouseleave', function() {
    // coffeeSecret.style.color = "#F5F5F5";
  }, false);

  coffee.addEventListener('click', function () {
    // coffeeSecret.style.color = "#F5F5F5";
  }, false);


});
