(function () {
  var toggle = document.getElementById('lbc-menu-toggle');
  var nav = document.getElementById('lbc-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('lbc-nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
})();
