window.addEventListener('DOMContentLoaded', function() {
  var mir = document.getElementsByClassName('mir')[0];
  var body = document.body;

  mir.addEventListener('mouseenter', function () {
    body.classList.add('focused');
  }, false);

  mir.addEventListener('mouseleave', function() {
    body.classList.remove('focused');
  }, false);

  mir.addEventListener('click', function () {
    body.classList.remove('focused');
  }, false);
});
