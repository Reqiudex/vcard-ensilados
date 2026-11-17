// vCard Ensilados Santa Cruz: galería accesible y video de fondo solo donde conviene.
(function () {
  // Galería: botones, flechas del teclado y deslizar con el dedo.
  var cont = document.getElementById('gallery-images');
  if (cont) {
    var fotos = cont.querySelectorAll('img');
    var contador = document.getElementById('gallery-contador');
    var actual = 0;
    var mostrar = function (i) {
      actual = (i + fotos.length) % fotos.length;
      cont.style.transform = 'translateX(' + (-actual * 100) + '%)';
      fotos.forEach(function (f, k) { f.setAttribute('aria-hidden', String(k !== actual)); });
      if (contador) contador.textContent = 'Foto ' + (actual + 1) + ' de ' + fotos.length;
    };
    document.getElementById('next-button').addEventListener('click', function () { mostrar(actual + 1); });
    document.getElementById('prev-button').addEventListener('click', function () { mostrar(actual - 1); });
    var galeria = cont.parentElement;
    galeria.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { mostrar(actual + 1); }
      if (e.key === 'ArrowLeft') { mostrar(actual - 1); }
    });
    var x0 = null;
    galeria.addEventListener('touchstart', function (e) { x0 = e.touches[0].clientX; }, { passive: true });
    galeria.addEventListener('touchend', function (e) {
      if (x0 === null) return;
      var dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) mostrar(actual + (dx < 0 ? 1 : -1));
      x0 = null;
    });
    mostrar(0);
  }

  // Video de fondo: solo en pantallas anchas, sin "reducir movimiento" ni ahorro de datos.
  // En móviles queda la foto fija (el video pesaba ~13 MB y retrasaba la carga).
  var conexion = navigator.connection || {};
  var permitir = window.matchMedia('(min-width: 900px)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches &&
    !conexion.saveData;
  if (permitir) {
    window.addEventListener('load', function () {
      var f = document.createElement('iframe');
      f.src = 'https://www.youtube-nocookie.com/embed/Bj3R61S_iZs?autoplay=1&mute=1&loop=1&playlist=Bj3R61S_iZs&controls=0&playsinline=1&rel=0';
      f.title = 'Video de fondo decorativo';
      f.allow = 'autoplay; encrypted-media';
      f.tabIndex = -1;
      f.setAttribute('aria-hidden', 'true');
      document.getElementById('video-wrapper').appendChild(f);
    });
  }
})();
