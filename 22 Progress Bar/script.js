window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var docHeight = document.body.offsetHeight;
    var winHeight = window.innerHeight;
    var scrollPercent = scrollTop / (docHeight - winHeight) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
  });
  