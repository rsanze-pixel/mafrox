/* ==================================================================
   MAFROX — PÁGINAS DE LÍNEAS (compartido por las 3 páginas)
     linea-res.html · linea-porcino.html · productos-importados.html

   Este archivo NO se usa en index.html. Contiene:
     1) BÁSICOS     · scroll suave, menú, barra de progreso, cursor,
                      detector de fondo claro/oscuro, botón magnético.
                      (son los mismos efectos del inicio: G2 · G3 · G4 ·
                      G6 · G10 y el detector G12)
     2) MAPA DE CORTES  · solo en las páginas gemelas (res y porcino)
     3) IMPORTADOS      · entrada estilo Apple + bloques que se abren
                          en una ficha con carrusel y botón Cotiza.

   Los TEXTOS de cada corte y de cada bloque NO están aquí: están en
   cada HTML, dentro de su bloque "DATOS". Este archivo solo los mueve.
   Los AJUSTES (velocidades, tamaños) sí están aquí, con su número
   comentado para que sepas qué tocar.
   ================================================================== */
(function(){
  'use strict';

  var hayGsap = typeof gsap !== 'undefined';
  if(hayGsap && typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  /* Idioma actual (lo cambia mafrox-extras.js en <html lang="…">) */
  function idioma(){ return document.documentElement.getAttribute('lang') === 'en' ? 'en' : 'es'; }
  /* Avisa a quien lo pida cuando cambia el idioma */
  var alCambiarIdioma = [];
  new MutationObserver(function(){ alCambiarIdioma.forEach(function(fn){ fn(idioma()); }); })
    .observe(document.documentElement, { attributes:true, attributeFilter:['lang'] });

  /* Lee un color de la paleta (mafrox-colores.css) */
  function colorMafrox(nombre){
    return getComputedStyle(document.documentElement).getPropertyValue(nombre).trim() || '#000';
  }
  window.colorMafrox = colorMafrox;

  /* ================================================================
     1) BÁSICOS
     ================================================================ */

  /* ── Scroll suave (Lenis). Si no carga, se usa el scroll normal ── */
  var lenis;
  if(typeof Lenis !== 'undefined'){
    lenis = new Lenis({ duration:1.15 });   // suavidad del scroll (1.0 a 1.3)
    if(hayGsap){
      lenis.on('scroll', ScrollTrigger.update);
      gsap.ticker.add(function(t){ lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
    } else {
      (function raf(t){ lenis.raf(t); requestAnimationFrame(raf); })(0);
    }
  } else {
    lenis = {
      stop: function(){ document.body.style.overflow = 'hidden'; },
      start: function(){ document.body.style.overflow = ''; },
      scrollTo: function(d){ var el = typeof d === 'string' ? document.querySelector(d) : d;
        if(el && el.scrollIntoView) el.scrollIntoView({ behavior:'smooth' }); else if(typeof d === 'number') window.scrollTo({ top:d, behavior:'smooth' }); }
    };
  }
  window.lenis = lenis;

  /* ── Menú a pantalla completa (G6) ── */
  var menu = document.getElementById('menu');
  var menuVideo = document.getElementById('menuVideo');
  function abrirMenu(){
    if(!menu) return;
    menu.classList.add('is-open'); document.body.classList.add('menu-abierto'); lenis.stop();
    if(menuVideo){ menuVideo.currentTime = 0; var pr = menuVideo.play(); if(pr && pr.catch) pr.catch(function(){}); }
  }
  function cerrarMenu(){
    if(!menu) return;
    menu.classList.remove('is-open'); document.body.classList.remove('menu-abierto'); lenis.start();
    if(menuVideo) menuVideo.pause();
  }
  window.lenisCerrarMenuMafrox = cerrarMenu;
  var bMenu = document.getElementById('menuBtn'), bCerrar = document.getElementById('closeBtn');
  if(bMenu) bMenu.addEventListener('click', abrirMenu);
  if(bCerrar) bCerrar.addEventListener('click', cerrarMenu);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') cerrarMenu(); });
  var menuNav = document.querySelector('.menu__nav');
  document.querySelectorAll('.menu__item').forEach(function(item){
    item.addEventListener('click', function(){ if((item.getAttribute('href') || '') !== '#') cerrarMenu(); });
    item.addEventListener('mouseenter', function(){ menuNav.classList.add('hover-activo'); item.classList.add('item-activo'); });
    item.addEventListener('mouseleave', function(){ menuNav.classList.remove('hover-activo'); item.classList.remove('item-activo'); });
  });
  /* "Contáctanos" del menú abre el formulario */
  var mc = document.getElementById('menuContacto');
  if(mc) mc.dataset.manejado = '1';
  if(mc) mc.addEventListener('click', function(e){
    e.preventDefault(); cerrarMenu();
    setTimeout(function(){ if(window.mafroxAbrirContacto) window.mafroxAbrirContacto(); }, 350);
  });

  /* ── Barra de progreso (G2) ── */
  var barra = document.getElementById('progreso');
  function progreso(){
    if(!barra) return;
    var max = document.documentElement.scrollHeight - innerHeight;
    barra.style.width = (max > 0 ? Math.min(100, scrollY / max * 100) : 0) + '%';
  }

  /* ── Palabra que rota en el pie ("Carne ___") ── */
  var rot = document.getElementById('rot');
  if(rot && hayGsap){
    gsap.timeline({ repeat:-1, defaults:{ ease:'expo.inOut' } })
      .to(rot, { y:function(){ return -rot.children[0].offsetHeight; },     duration:.6, delay:1.4 })
      .to(rot, { y:function(){ return -rot.children[0].offsetHeight * 2; }, duration:.6, delay:1.4 })
      .to(rot, { y:function(){ return -rot.children[0].offsetHeight * 3; }, duration:.6, delay:1.4 })
      .to(rot, { y:0, duration:.6, delay:1.4 });
  }

  /* ── Botón magnético (el de "Conversemos" y los de "Cotiza") ──
     Todo botón con la clase .magnet se acerca al cursor.
     FUERZA: .35 (horizontal) y .5 (vertical). Súbelos para más imán. */
  function hacerMagnetico(b){
    if(!hayGsap || b.dataset.magnetico) return;
    b.dataset.magnetico = '1';
    b.addEventListener('mousemove', function(e){
      var r = b.getBoundingClientRect();
      gsap.to(b, { x:(e.clientX - r.left - r.width / 2) * .35, y:(e.clientY - r.top - r.height / 2) * .5, duration:.4, ease:'power3.out' });
    });
    b.addEventListener('mouseleave', function(){ gsap.to(b, { x:0, y:0, duration:.7, ease:'elastic.out(1,.3)' }); });
    b.addEventListener('mousedown', function(){ gsap.to(b, { scale:.94, duration:.1 }); });
    b.addEventListener('mouseup', function(){ gsap.to(b, { scale:1, duration:.2 }); });
  }
  document.querySelectorAll('.magnet').forEach(hacerMagnetico);

  /* ── Abrir el formulario con un mensaje ya escrito ("Cotiza") ── */
  /* producto = lo que va después de "Hola Mafrox, estoy interesado en
     cotizar ..." (el texto completo se arma en mafrox-extras.js) */
  function cotizar(producto){
    if(window.mafroxAbrirContacto) window.mafroxAbrirContacto(producto);
  }
  window.mafroxCotizar = cotizar;

  /* ── Detector de fondo claro/oscuro (logo y cursor cambian de color) ── */
  function colorEn(x, y){
    if(!document.elementsFromPoint) return null;
    var pila = document.elementsFromPoint(x, y);
    for(var i = 0; i < pila.length; i++){
      var e = pila[i];
      if(!e || e === document.documentElement || e === document.body) continue;
      if(e.closest('.barra-sup, .cursor-punto, .cursor-estela, #mfxWhatsWrap')) continue;
      var c = getComputedStyle(e).backgroundColor || '';
      var m = c.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?/);
      if(m && (m[4] === undefined || parseFloat(m[4]) > 0.5)) return [+m[1], +m[2], +m[3]];
    }
    return null;
  }
  function fondo(){
    var oscuro = false;
    var secs = document.querySelectorAll('[data-oscuro="1"]');
    for(var i = 0; i < secs.length; i++){ var r = secs[i].getBoundingClientRect(); if(r.top <= 70 && r.bottom >= 70){ oscuro = true; break; } }
    if(!oscuro){ var c = colorEn(Math.round(innerWidth * .5), 70); oscuro = !!(c && (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) < 140); }
    document.body.classList.toggle('fondo-oscuro', oscuro);
  }
  /* El detector de fondo corre 1 de cada 3 cuadros (unas 20 veces por
     segundo en vez de 60): alcanza para el ojo y aliviana laptops modestas.
     La barra de progreso sí se actualiza en cada cuadro (es muy liviana). */
  var CADA = 3, cuadroFondo = 0;
  (function bucle(){ if(++cuadroFondo % CADA === 0) fondo(); progreso(); requestAnimationFrame(bucle); })();

  /* ── Cursor personalizado (G3): círculo + 3 estelas ── */
  (function(){
    if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    var punto = document.createElement('div'); punto.className = 'cursor-punto';
    var estelas = [1,2,3].map(function(n){ var e = document.createElement('div'); e.className = 'cursor-estela e' + n; return e; });
    document.body.appendChild(punto); estelas.forEach(function(e){ document.body.appendChild(e); });
    var mx = innerWidth / 2, my = innerHeight / 2, pp = { x:mx, y:my }, ep = estelas.map(function(){ return { x:mx, y:my }; });
    addEventListener('mousemove', function(e){ mx = e.clientX; my = e.clientY; });
    (function raf(){
      pp.x += (mx - pp.x) * .35; pp.y += (my - pp.y) * .35;
      punto.style.transform = 'translate(' + pp.x + 'px,' + pp.y + 'px) translate(-50%,-50%)';
      var px = pp.x, py = pp.y, f = [.34, .26, .20];
      ep.forEach(function(p, i){ p.x += (px - p.x) * f[i]; p.y += (py - p.y) * f[i];
        estelas[i].style.transform = 'translate(' + p.x + 'px,' + p.y + 'px) translate(-50%,-50%)'; px = p.x; py = p.y; });
      requestAnimationFrame(raf);
    })();
    /* El color del cursor depende de lo que tiene DEBAJO (no de la barra
       superior): sobre fondos oscuros o del mismo verde se vuelve claro. */
    var cuadroColor = 0;
    function colorBajo(x, y){
      var pila = document.elementsFromPoint ? document.elementsFromPoint(x, y) : [];
      for(var i = 0; i < pila.length; i++){
        var e = pila[i];
        if(e.classList && (e.classList.contains('cursor-punto') || e.classList.contains('cursor-estela'))) continue;
        var tag = e.tagName.toLowerCase();
        if(tag === 'img' || tag === 'video' || tag === 'canvas') return 'foto';
        var cs = getComputedStyle(e);
        if(e instanceof SVGElement && tag !== 'svg'){
          var f = cs.fill || '', m1 = f.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?/);
          var fo = parseFloat(cs.fillOpacity || 1);
          if(m1 && fo > .5 && (m1[4] === undefined || +m1[4] > .5)) return [+m1[1], +m1[2], +m1[3]];
          continue;
        }
        var c = cs.backgroundColor || '', m = c.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)(?:[,\s/]+([\d.]+))?/);
        if(m && (m[4] === undefined || parseFloat(m[4]) > .5)) return [+m[1], +m[2], +m[3]];
      }
      return [247, 245, 238];
    }
    (function revisar(){
      if(++cuadroColor % 3 === 0){
        var c = colorBajo(pp.x, pp.y);
        var claro = c === 'foto' || (0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]) < 150;
        document.body.classList.toggle('cur-claro', claro);
      }
      requestAnimationFrame(revisar);
    })();
    document.addEventListener('mousedown', function(){ document.body.classList.add('clic'); });
    document.addEventListener('mouseup', function(){ document.body.classList.remove('clic'); });
    /* "sobre-link": se revisa al mover (sirve también para botones creados después) */
    document.addEventListener('pointerover', function(e){
      var t = e.target && e.target.closest ? e.target.closest('a, button, .magnet, [role="button"], .corte') : null;
      document.body.classList.toggle('sobre-link', !!t);
    }, { passive:true });
    document.addEventListener('mouseleave', function(){ punto.style.opacity = 0; estelas.forEach(function(e){ e.style.opacity = 0; }); });
    document.addEventListener('mouseenter', function(){ punto.style.opacity = ''; estelas.forEach(function(e){ e.style.opacity = ''; }); });
  })();

  /* ── Aparición suave de bloques al bajar (clase .aparece) ── */
  if(hayGsap){
    gsap.utils.toArray('.aparece').forEach(function(el){
      gsap.from(el, { opacity:0, y:40, duration:1, ease:'expo.out', scrollTrigger:{ trigger:el, start:'top 82%' } });
    });
  }


  /* ================================================================
     2) MAPA DE CORTES (páginas gemelas: res y porcino)

     2a) INTRO DEL ANIMAL (estilo Marvel)
        El video se ve DENTRO de la silueta del animal. Empieza con un
        zoom metido en el cuerpo (la pantalla es todo video) y la silueta
        se encoge hasta quedar justo en su lugar del mapa. Ahí se funde
        con el mapa de cortes.
        AJUSTES:
          T_ZOOM   = ms del zoom (de gigante a su lugar)
          T_PAUSA  = ms que la silueta se queda con el video
          T_FUNDIDO= ms del fundido hacia el mapa
          ZOOM_ANIMAL = cuántas veces más grande empieza
          FOCO     = punto del cuerpo donde empieza el zoom (0 a 1)
     ================================================================ */
  var T_ZOOM = 1900, T_PAUSA = 450, T_FUNDIDO = 800, ZOOM_ANIMAL = 26;
  var FOCO = { x: .55, y: .42 };

  /* 2b) CLIC EN UN CORTE
        La foto del corte sale de su zona y se agranda; el resto del
        animal se atenúa. Abajo se abre la ficha (de lado a lado).
        AJUSTES:
          TAM_PIEZA = tamaño máximo de la foto agrandada (px)
          T_PIEZA   = segundos que tarda en agrandarse */
  var TAM_PIEZA = 320, T_PIEZA = .9;

  function mapaDeCortes(){
    var mapa = document.querySelector('.mapa');
    var datos = window.MAFROX_CORTES;
    if(!mapa || !datos) return;
    var svg = mapa.querySelector('svg');
    var cortes = Array.prototype.slice.call(svg.querySelectorAll('.corte'));
    var etiquetas = Array.prototype.slice.call(svg.querySelectorAll('.etiqueta'));
    var seccionFicha = document.getElementById('fichaCorte');
    var ficha = seccionFicha.querySelector('.ficha-corte__in');
    var chips = document.getElementById('chipsCortes');
    var pieza = mapa.querySelector('.pieza'), piezaImg = pieza.querySelector('img'), piezaTxt = pieza.querySelector('figcaption');
    var ANIMAL = mapa.dataset.animal;
    var elegido = null, metodo = null;
    var ids = [];
    cortes.forEach(function(g){ if(ids.indexOf(g.dataset.corte) < 0) ids.push(g.dataset.corte); });

    /* Precarga las fotos de los cortes para que el agrandado sea inmediato */
    ids.forEach(function(id){ var im = new Image(); im.src = 'images/lineas/cortes/' + ANIMAL + '-corte-' + id + '.webp'; });

    /* Nombres dentro del dibujo
       - Se parten en 1, 2 o 3 líneas para caber en el ancho de su zona (data-max).
       - Si aun así no caben, la letra se achica (hasta un mínimo legible).
       - "sub" = nombre alterno entre paréntesis, ej. (Ribeye). En celular no
         se muestra para que el nombre principal se lea grande.
       - El tamaño base de la letra lo pone el CSS (.mapa .etiqueta text). */
    var SVGNS = 'http://www.w3.org/2000/svg';
    function partir(pal, n){                 // reparte las palabras en n líneas parejas
      if(n <= 1) return [pal.join(' ')];
      var mejor = null, peor = 1e9;
      (function probar(desde, quedan, acum){
        if(quedan === 1){
          var l = acum.concat([pal.slice(desde).join(' ')]);
          var m = Math.max.apply(null, l.map(function(x){ return x.length; }));
          if(m < peor){ peor = m; mejor = l; }
          return;
        }
        for(var k = desde + 1; k <= pal.length - quedan + 1; k++) probar(k, quedan - 1, acum.concat([pal.slice(desde, k).join(' ')]));
      })(0, n, []);
      return mejor;
    }
    /* ¿El nombre quedó completo DENTRO de su zona? (revisa puntos del borde de cada línea) */
    function dentro(t, zonas){
      var ok = true, m = t.getAttribute('transform') ? t.transform.baseVal.consolidate().matrix : null;
      t.querySelectorAll('tspan').forEach(function(ts){
        if(!ok) return;
        var b = ts.getBBox();
        for(var i = 0; i <= 6 && ok; i++){
          [.18, .82].forEach(function(f){
            if(!ok) return;
            var p = svg.createSVGPoint(); p.x = b.x + 1 + (b.width - 2) * i / 6; p.y = b.y + b.height * f;
            if(m) p = p.matrixTransform(m);          // nombre girado: pasa el punto a coordenadas del dibujo
            if(!zonas.some(function(z){ return z.isPointInFill(p); })) ok = false;
          });
        }
      });
      return ok;
    }
    function etiquetar(t, txt, sub, zonas){
      var cel = innerWidth <= 700;
      var max = +t.getAttribute('data-max') || 120, x = t.getAttribute('x'), y = +t.getAttribute('y');
      t.style.fontSize = ''; t.textContent = '';
      var base = parseFloat(getComputedStyle(t).fontSize) || 16, minimo = base * .4;
      var pal = txt.split(' '), verSub = sub && !cel;
      /* dibuja el nombre en "lineas" con letra "fs", centrado en (x, y) */
      function pintar(lineas, fs, girado){
        t.textContent = ''; t.style.fontSize = fs + 'px';
        if(girado) t.setAttribute('transform', 'rotate(-90 ' + x + ' ' + y + ')'); else t.removeAttribute('transform');
        var fsSub = fs * .74, alto = fs * 1.06;
        var total = lineas.length * alto + (verSub ? fsSub * 1.15 : 0);
        var y0 = y - total / 2 + alto / 2;
        lineas.forEach(function(l, i){
          var ts = document.createElementNS(SVGNS, 'tspan');
          ts.setAttribute('x', x); ts.setAttribute('y', (y0 + i * alto).toFixed(1)); ts.textContent = l; t.appendChild(ts);
        });
        if(verSub){
          var ts = document.createElementNS(SVGNS, 'tspan');
          ts.setAttribute('x', x); ts.setAttribute('y', (y0 + (lineas.length - .5) * alto + fsSub * .75).toFixed(1));
          ts.style.fontSize = fsSub.toFixed(1) + 'px'; ts.setAttribute('class', 'sub');
          ts.textContent = '(' + sub + ')'; t.appendChild(ts);
        }
      }
      function anchoOk(){
        var ok = true; t.querySelectorAll('tspan').forEach(function(ts){ if(ts.getComputedTextLength() > max) ok = false; }); return ok;
      }
      /* 1) Horizontal: prueba de la letra más grande a la más chica, en 1, 2
            o 3 líneas, hasta que el nombre entre completo en su zona.
         2) Vertical (solo zonas angostas y altas, como las patas): se usa
            únicamente si así la letra queda bastante más grande (×1.35). */
      var hor = null;
      for(var fs = base; fs >= minimo && !hor; fs -= .5){
        for(var n = 1; n <= Math.min(3, pal.length) && !hor; n++){
          pintar(partir(pal, n), fs, false);
          if(anchoOk() && dentro(t, zonas)) hor = { l:partir(pal, n), fs:fs };
        }
      }
      var limite = hor ? hor.fs * 1.35 : minimo;
      for(var fv = base; fv >= limite; fv -= .5){
        for(var n2 = 1; n2 <= Math.min(2, pal.length); n2++){
          pintar(partir(pal, n2), fv, true);
          if(dentro(t, zonas)) return;
        }
      }
      if(hor){ pintar(hor.l, hor.fs, false); return; }
      pintar(partir(pal, Math.min(2, pal.length)), minimo);   // último recurso
    }

    /* Botones con el nombre de cada corte (útiles en celular) */
    ids.forEach(function(id, i){
      var d = datos[id]; if(!d) return;
      var b = document.createElement('button');
      b.type = 'button'; b.className = 'chip'; b.dataset.corte = id;
      b.innerHTML = '<span class="chip__n">' + (i < 9 ? '0' : '') + (i + 1) + '</span><span class="chip__t"></span>';
      chips.appendChild(b);
      b.addEventListener('click', function(){ elegir(id); });
      b.addEventListener('mouseenter', function(){ marcarHover(id, true); });
      b.addEventListener('mouseleave', function(){ marcarHover(id, false); });
    });
    function marcarHover(id, si){ svg.querySelectorAll('[data-corte="' + id + '"]').forEach(function(x){ x.classList.toggle('corte--hover', si); }); }

    function textos(){
      var en = idioma() === 'en';
      etiquetas.forEach(function(g){ var d = datos[g.dataset.corte], t = g.querySelector('text'); if(t && d){ var L = en ? d.en : d.es; etiquetar(t, L.nombre, L.sub, Array.prototype.slice.call(svg.querySelectorAll('.corte[data-corte="' + g.dataset.corte + '"] polygon'))); } });
      chips.querySelectorAll('.chip').forEach(function(b){ var d = datos[b.dataset.corte]; b.querySelector('.chip__t').textContent = en ? d.en.nombre : d.es.nombre; });
      if(elegido){ pintarFicha(false); piezaTxt.textContent = en ? datos[elegido].en.nombre : datos[elegido].es.nombre; }
    }
    textos(); alCambiarIdioma.push(textos);
    /* al girar el celular o cambiar el ancho, los nombres se vuelven a acomodar */
    var anchoAntes = innerWidth;
    addEventListener('resize', function(){ if(Math.abs(innerWidth - anchoAntes) > 40){ anchoAntes = innerWidth; textos(); } });

    function marcar(){
      cortes.concat(etiquetas).forEach(function(g){
        var activo = g.dataset.corte === elegido;
        g.classList.toggle('corte--activo', activo);
        g.classList.toggle('corte--apagado', !!elegido && !activo);
      });
      mapa.classList.toggle('mapa--elegido', !!elegido);
      chips.querySelectorAll('.chip').forEach(function(b){ b.classList.toggle('chip--activo', b.dataset.corte === elegido); });
    }

    /* Rectángulo (en px, dentro de .mapa) de la zona VISIBLE del corte */
    function zona(id){
      var m = mapa.getBoundingClientRect(), r = null;
      svg.querySelectorAll('.corte[data-corte="' + id + '"] polygon').forEach(function(p){
        var b = p.getBoundingClientRect();
        if(!r) r = { l:b.left, t:b.top, r:b.right, b:b.bottom };
        else { r.l = Math.min(r.l, b.left); r.t = Math.min(r.t, b.top); r.r = Math.max(r.r, b.right); r.b = Math.max(r.b, b.bottom); }
      });
      /* el polígono va recortado por la silueta: se limita a la caja del dibujo */
      var s = svg.getBoundingClientRect();
      r.l = Math.max(r.l, s.left); r.r = Math.min(r.r, s.right); r.t = Math.max(r.t, s.top); r.b = Math.min(r.b, s.bottom);
      /* la etiqueta marca mejor el centro real de la zona */
      /* (se usa la posición de su nombre en el dibujo, aunque esté oculto en celular) */
      var t = svg.querySelector('.etiqueta[data-corte="' + id + '"] text');
      var cx = (r.l + r.r) / 2, cy = (r.t + r.b) / 2;
      if(t && svg.getScreenCTM){
        var pt = svg.createSVGPoint(); pt.x = +t.getAttribute('x'); pt.y = +t.getAttribute('y');
        var q = pt.matrixTransform(svg.getScreenCTM()); cx = q.x; cy = q.y;
      }
      return { x:cx - m.left, y:cy - m.top, w:Math.max(30, Math.min(r.r - r.l, r.b - r.t)), mw:m.width, mh:m.height };
    }

    /* La foto del corte crece desde su zona */
    function mostrarPieza(id){
      var z = zona(id), en = idioma() === 'en';
      var tam = Math.min(TAM_PIEZA, z.mw * (innerWidth < 700 ? .42 : .32));
      var x = Math.max(tam / 2 + 8, Math.min(z.mw - tam / 2 - 8, z.x));
      var y = Math.max(tam / 2 + 8, Math.min(z.mh - tam / 2 - 40, z.y));
      piezaImg.src = 'images/lineas/cortes/' + ANIMAL + '-corte-' + id + '.webp';
      piezaTxt.textContent = en ? datos[id].en.nombre : datos[id].es.nombre;
      pieza.classList.add('pieza--visible');
      if(!hayGsap){ pieza.style.cssText = 'left:' + x + 'px;top:' + y + 'px;width:' + tam + 'px;height:' + tam + 'px;opacity:1'; return; }
      gsap.killTweensOf(pieza);
      gsap.set(pieza, { xPercent:-50, yPercent:-50 });   // centrada en su punto
      gsap.fromTo(pieza,
        { left:z.x, top:z.y, width:z.w, height:z.w, opacity:0, rotate:-8 },
        { left:x, top:y, width:tam, height:tam, opacity:1, rotate:0, duration:T_PIEZA, ease:'expo.out' });
      gsap.fromTo(piezaTxt, { opacity:0, y:10 }, { opacity:1, y:0, duration:.5, delay:T_PIEZA * .5 });
    }
    function ocultarPieza(id){
      if(!pieza.classList.contains('pieza--visible')) return;
      if(!hayGsap || !id){ pieza.classList.remove('pieza--visible'); return; }
      var z = zona(id);
      gsap.to(pieza, { left:z.x, top:z.y, width:z.w, height:z.w, opacity:0, rotate:-6, duration:.5, ease:'expo.in',
        onComplete:function(){ pieza.classList.remove('pieza--visible'); } });
    }

    var METODOS = [
      { id:'freir',    es:'Freír',    en:'Frying'  },
      { id:'parrilla', es:'Parrilla', en:'Grill'   },
      { id:'plancha',  es:'Plancha',  en:'Griddle' }
    ];

    function pintarFicha(animar){
      var d = datos[elegido], en = idioma() === 'en', L = en ? d.en : d.es, R = en ? d.receta.en : d.receta.es;
      var nro = ids.indexOf(elegido) + 1;
      if(!metodo || !d.metodos[metodo]) metodo = (METODOS.filter(function(m){ return d.metodos[m.id]; })[0] || {}).id || null;
      /* CRITERIO DE LOS BOTONES (Freír / Parrilla / Plancha):
         solo aparecen los métodos que SÍ le van al corte (los que tienen
         datos en "metodos"). Los que no van, ya no se muestran.
         Si el corte no va con ninguno de los tres (ej. osobuco, para guiso),
         no se muestra "Cómo cocinarlo" y la RECETA ocupa todo el ancho. */
      var validos = METODOS.filter(function(m){ return d.metodos[m.id]; });
      var tabs = validos.map(function(m){
        return '<button type="button" class="metodo' + (m.id === metodo ? ' metodo--activo' : '') + '" data-metodo="' + m.id + '">' +
               '<span class="metodo__ico metodo__ico--' + m.id + '" aria-hidden="true"></span>' + (en ? m.en : m.es) + '</button>';
      }).join('');
      var Mt = metodo ? d.metodos[metodo] : null;
      var coccion = Mt
        ? '<figure class="coccion__foto"><img src="images/lineas/' + ANIMAL + '-' + metodo + '.webp" alt="" loading="lazy"></figure>' +
          '<div class="coccion__txt"><h4>' + (en ? Mt.en.plato : Mt.es.plato) + '</h4><p>' + (en ? Mt.en.tip : Mt.es.tip) + '</p></div>'
        : '';
      var bloqueCoccion = validos.length
        ? '<div class="coccion"><span class="eyebrow"><i></i>' + (en ? 'How to cook it' : 'Cómo cocinarlo') + '</span>' +
            '<div class="metodos" role="tablist">' + tabs + '</div><div class="coccion__det">' + coccion + '</div></div>'
        : '';
      ficha.innerHTML =
        '<div class="ficha-corte__cab">' +
          '<span class="ficha-corte__n">' + (nro < 10 ? '0' : '') + nro + '</span>' +
          '<div class="ficha-corte__nombre"><h3>' + L.nombre + (L.sub ? ' <small>(' + L.sub + ')</small>' : '') + '</h3><p>' + L.desc + '</p></div>' +
          '<div class="ficha-corte__usos"><span class="eyebrow"><i></i>' + (en ? 'What it is used for' : 'Lo que se hace con este corte') + '</span><p>' + L.usos + '</p></div>' +
          '<button type="button" class="magnet ficha-corte__cotiza">' + (en ? 'Quote this cut' : 'Cotiza este corte') + '</button>' +
        '</div>' +
        '<div class="ficha-corte__cuerpo' + (validos.length ? '' : ' ficha-corte__cuerpo--solo-receta') + '">' +
          bloqueCoccion +
          '<div class="receta"><span class="eyebrow"><i></i>' + (en ? 'Popular recipe' : 'Receta popular') + '</span>' +
            '<h4 class="receta__nombre">' + R.nombre + '</h4>' +
            '<p class="receta__sub">' + (en ? 'Ingredients · serves 4' : 'Ingredientes · para 4 personas') + '</p>' +
            '<ul class="receta__ing">' + R.ingredientes.map(function(x){ return '<li>' + x + '</li>'; }).join('') + '</ul>' +
            (R.preparacion ? '<p class="receta__sub">' + (en ? 'Method' : 'Preparación') + '</p><p class="receta__prep">' + R.preparacion + '</p>' : '') +
          '</div>' +
        '</div>';
      seccionFicha.hidden = false;
      ficha.querySelectorAll('.metodo').forEach(function(b){
        b.addEventListener('click', function(){ metodo = b.dataset.metodo; pintarFicha(false);
          if(hayGsap) gsap.from(ficha.querySelector('.coccion__det').children, { opacity:0, y:14, duration:.5, stagger:.06, ease:'expo.out' }); });
      });
      var cot = ficha.querySelector('.ficha-corte__cotiza');
      hacerMagnetico(cot);
      // Ej.: "Hola Mafrox, estoy interesado en cotizar el corte Lomo fino de res."
      cot.addEventListener('click', function(){
        var animal = ANIMAL === 'res' ? (en ? 'beef' : 'res') : (en ? 'pork' : 'cerdo');
        cotizar(en ? 'the ' + L.nombre + ' cut (' + animal + ')' : 'el corte ' + L.nombre + ' de ' + animal);
      });
      if(animar && hayGsap) gsap.from(ficha.querySelectorAll('.ficha-corte__cab > *, .coccion, .receta'), { opacity:0, y:22, duration:.7, stagger:.06, ease:'expo.out' });
    }

    function elegir(id){
      if(elegido === id){ soltar(); return; }
      var antes = elegido;
      if(antes) ocultarPieza(null);
      elegido = id; metodo = null; marcar();
      mostrarPieza(id); pintarFicha(true);
      if(window.ScrollTrigger) ScrollTrigger.refresh();
    }
    function soltar(){
      var antes = elegido; elegido = null; marcar(); ocultarPieza(antes);
      if(window.ScrollTrigger) ScrollTrigger.refresh();
    }
    /* Clic en la foto agrandada: baja hasta la ficha */
    pieza.addEventListener('click', function(){ var r = seccionFicha.getBoundingClientRect(); lenis.scrollTo(scrollY + r.top - 40); });
    pieza.setAttribute('role', 'button');

    cortes.forEach(function(g){
      g.setAttribute('tabindex', '0'); g.setAttribute('role', 'button');
      g.addEventListener('click', function(e){ e.stopPropagation(); elegir(g.dataset.corte); });
      g.addEventListener('keydown', function(e){ if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); elegir(g.dataset.corte); } });
      g.addEventListener('mouseenter', function(){ marcarHover(g.dataset.corte, true); });
      g.addEventListener('mouseleave', function(){ marcarHover(g.dataset.corte, false); });
    });
    /* Clic en el fondo del mapa = soltar el corte */
    svg.addEventListener('click', function(e){ if(!e.target.closest('.corte') && elegido) soltar(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && elegido) soltar(); });
    addEventListener('resize', function(){ if(elegido && hayGsap){ gsap.set(pieza, { clearProps:'left,top,width,height' }); mostrarPieza(elegido); } });

    /* ── Aparición del mapa (después de la intro) ── */
    function aparecer(){
      mapa.classList.add('mapa--listo');
      if(!hayGsap) return;
      gsap.from(etiquetas, { opacity:0, duration:.6, stagger:.03, ease:'none' });
      gsap.from('.mapa__pista', { opacity:0, y:10, duration:.6, delay:.2 });
      gsap.from(chips.children, { opacity:0, y:12, duration:.4, stagger:.025, delay:.2 });
      gsap.from('.mapa-sec__intro > *', { opacity:0, y:24, duration:.9, stagger:.08, ease:'expo.out' });
    }
    introAnimal(svg, aparecer);
  }

  function introAnimal(svg, alTerminar){
    var html = document.documentElement;
    var cont = document.getElementById('introAnimal');
    if(!cont || !html.classList.contains('intro-animal-activa')){ alTerminar(); return; }
    var lienzo = cont.querySelector('canvas'), ctx = lienzo.getContext && lienzo.getContext('2d');
    var video = cont.querySelector('video'), foto = new Image();
    var terminado = false, dpr = Math.min(2, devicePixelRatio || 1), W = 0, H = 0;
    var d = svg.querySelector('.silueta').getAttribute('d');
    var vb = svg.viewBox.baseVal;
    if(!ctx || typeof Path2D === 'undefined'){ fin(); return; }
    var forma = new Path2D(d);
    foto.src = video.getAttribute('poster') || '';
    if(lenis.stop) lenis.stop();
    try{ var pr = video.play(); if(pr && pr.catch) pr.catch(function(){}); }catch(e){}
    video.addEventListener('error', function(){ video.removeAttribute('src'); });   // sin video: queda la foto

    function ajustar(){ W = innerWidth; H = innerHeight; lienzo.width = Math.round(W * dpr); lienzo.height = Math.round(H * dpr); }
    ajustar(); addEventListener('resize', ajustar);
    function fuente(){ return (video.readyState >= 2 && video.videoWidth) ? video : (foto.complete && foto.naturalWidth ? foto : null); }
    function suave(t){ return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

    /* Dónde termina la silueta: exactamente donde está el dibujo del mapa */
    function destino(){
      var r = svg.getBoundingClientRect();
      var e = Math.min(r.width / vb.width, r.height / vb.height);
      return { x:r.left + (r.width - vb.width * e) / 2, y:r.top + (r.height - vb.height * e) / 2, e:e };
    }
    function dibujar(k, alfaVideo){
      var t = destino(), src = fuente();
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = colorMafrox('--crema'); ctx.fillRect(0, 0, W, H);
      /* escala: de ZOOM_ANIMAL veces (dentro del cuerpo) a la del mapa */
      var e = t.e * Math.pow(ZOOM_ANIMAL, 1 - k);
      var fx = FOCO.x * vb.width, fy = FOCO.y * vb.height;
      var px = W / 2 + ((t.x + fx * t.e) - W / 2) * k, py = H / 2 + ((t.y + fy * t.e) - H / 2) * k;
      ctx.save();
      ctx.setTransform(dpr * e, 0, 0, dpr * e, dpr * (px - fx * e), dpr * (py - fy * e));
      ctx.clip(forma, 'evenodd');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if(src){
        var vw = src.videoWidth || src.naturalWidth, vh = src.videoHeight || src.naturalHeight, c = Math.max(W / vw, H / vh);
        ctx.globalAlpha = alfaVideo;
        ctx.drawImage(src, (W - vw * c) / 2, (H - vh * c) / 2, vw * c, vh * c);
        ctx.globalAlpha = 1;
      } else {
        ctx.fillStyle = colorMafrox('--verde'); ctx.fillRect(0, 0, W, H);
      }
      ctx.restore();
    }
    function fin(){
      if(terminado) return; terminado = true;
      html.classList.remove('intro-animal-activa');
      cont.style.display = 'none';
      try{ video.pause(); }catch(e){}
      if(lenis.start) lenis.start();
      if(window.ScrollTrigger) ScrollTrigger.refresh();
      alTerminar();
    }
    cont.querySelector('.intro-saltar').addEventListener('click', fin);
    var inicio = null, arrancado = false;
    function correr(){
      if(arrancado) return; arrancado = true;
      (function cuadro(ahora){
        if(terminado) return;
        if(inicio === null) inicio = ahora;
        var t = ahora - inicio;
        if(t < T_ZOOM) dibujar(suave(t / T_ZOOM), 1);
        else if(t < T_ZOOM + T_PAUSA) dibujar(1, 1);
        else if(t < T_ZOOM + T_PAUSA + T_FUNDIDO){
          var f = (t - T_ZOOM - T_PAUSA) / T_FUNDIDO;
          dibujar(1, 1);
          cont.style.opacity = 1 - f;   // se funde y deja ver el mapa de cortes
        } else { fin(); return; }
        requestAnimationFrame(cuadro);
      })(performance.now());
    }
    /* Espera a que haya video o foto (máx. 1,2 s) */
    dibujar(0, 1);
    if(fuente()) correr();
    video.addEventListener('canplay', correr, { once:true });
    foto.onload = function(){ setTimeout(correr, 150); };
    setTimeout(correr, 1200);
    setTimeout(fin, 8500);   // seguro: nunca deja la página tapada
  }

  /* ================================================================
     3) PRODUCTOS IMPORTADOS

     3a) ENTRADA ESTILO APPLE ("GO")
        El titular se ve con el video del mapa con rutas de luz DENTRO de sus letras.
        Empieza con el zoom metido en una letra (la pantalla entera es
        video) y, al bajar, el titular se encoge hasta verse completo.
        Luego el video se apaga y el texto queda con un degradado.
        AJUSTES:
          ZOOM_INICIAL = cuántas veces más grande empieza el titular
          FOCO_LETRA   = letra donde empieza el zoom (posición en la
                         primera línea, empezando en 0). Conviene una
                         letra de trazo recto (l, i, d) para que la
                         pantalla empiece llena de video: 2 = la "l" de "Del".
          Las fases van en % del recorrido (data-recorrido en el HTML
          dice cuántas pantallas dura todo el efecto).
     ================================================================ */
  var ZOOM_INICIAL = 110, FOCO_LETRA = 2;
  /* ═══ MODO AUTOMÁTICO (ya no depende del scroll) ═══
       ESPERA_AUTO   = milisegundos que se ve el video a pantalla completa
                       antes de empezar (1000 = 1 segundo)
       DURACION_AUTO = milisegundos que dura todo el efecto (zoom + frase)
       MANTENER_VIDEO = true  → el video se queda dentro de las letras
                        false → al final el video se apaga y el texto queda
                                con el degradado de la marca (como antes) */
  var ESPERA_AUTO = 1000, DURACION_AUTO = 4500, MANTENER_VIDEO = false;
  var FASE_ZOOM = .37, FASE_APAGA = .52, FASE_FIN = .6;   // de .6 a 1 la frase se queda quieta (pausa antes del siguiente bloque)

  function entradaApple(){
    var sec = document.getElementById('apple');
    if(!sec) return;
    var lienzo = sec.querySelector('canvas'), ctx = lienzo.getContext('2d');
    var video = sec.querySelector('video'), foto = new Image();
    var tit = sec.querySelector('.apple__titular'), sub = sec.querySelector('.apple__sub');
    var guia = sec.querySelector('.scroll-down--inicio'), guiaFin = sec.querySelector('.scroll-down--fin');
    foto.src = video.getAttribute('poster') || '';
    var dpr = Math.min(2, devicePixelRatio || 1), W = 0, H = 0, p = 0;
    function lineas(){ var t = (idioma() === 'en' ? tit.dataset.en : tit.dataset.es) || ''; return t.split('|'); }
    function ajustar(){ W = lienzo.clientWidth; H = lienzo.clientHeight; lienzo.width = Math.round(W * dpr); lienzo.height = Math.round(H * dpr); }
    addEventListener('resize', ajustar); ajustar();
    try{ var pr = video.play(); if(pr && pr.catch) pr.catch(function(){}); }catch(e){}
    function suave(t){ return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
    function lim(v){ return Math.max(0, Math.min(1, v)); }
    var fam = getComputedStyle(document.body).fontFamily;

    function dibujar(){
      if(!W) return;
      var L = lineas();
      /* El titular deja sitio debajo para la frase y el "Scroll down":
         su tamaño depende del ancho y también del ALTO de la pantalla. */
      var tam = Math.min(W * (W < 700 ? .155 : .135), H * .2);   // celular: .155 deja margen a los lados
      var alto = tam * .98;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.font = '600 ' + tam + 'px ' + fam;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      /* Posición natural de cada línea (centradas en pantalla) */
      var CENTRO = H * .4;   // el titular queda un poco arriba del centro
      var y0 = CENTRO - (L.length - 1) * alto / 2;
      /* La frase va justo debajo del titular. (El "Desliza hacia abajo"
         queda fijo abajo al centro: lo ubica el CSS.) */
      var finTitular = y0 + (L.length - 1) * alto + tam * .42;
      sub.style.top = Math.round(finTitular + Math.max(16, H * .03)) + 'px';
      /* Punto de zoom: el centro de la letra FOCO_LETRA de la 1ª línea */
      var l1 = L[0] || '', ancho1 = ctx.measureText(l1).width;
      var fl = Math.min(FOCO_LETRA, Math.max(0, l1.length - 1));
      var antes = ctx.measureText(l1.slice(0, fl)).width, letra = ctx.measureText(l1.charAt(fl)).width;
      var fx = W / 2 - ancho1 / 2 + antes + letra / 2, fy = y0;
      var k = suave(lim(p / FASE_ZOOM));
      var s = Math.pow(ZOOM_INICIAL, 1 - k);   // zoom exponencial: se siente parejo
      var px = W / 2 + (fx - W / 2) * k, py = H / 2 + (fy - H / 2) * k;   // el foco viaja del centro a su lugar
      ctx.setTransform(dpr * s, 0, 0, dpr * s, dpr * (px - fx * s), dpr * (py - fy * s));
      /* Texto con degradado de la marca (se ve cuando el video se apaga) */
      var g = ctx.createLinearGradient(0, y0 - alto, 0, y0 + alto * L.length);
      g.addColorStop(0, colorMafrox('--crema')); g.addColorStop(1, colorMafrox('--lima'));
      ctx.fillStyle = g;
      L.forEach(function(t, i){ ctx.fillText(t, W / 2, y0 + i * alto); });
      /* Video dentro de las letras */
      var a = MANTENER_VIDEO ? 1 : 1 - lim((p - FASE_APAGA) / (FASE_FIN - FASE_APAGA));
      var src = (video.readyState >= 2 && video.videoWidth) ? video : (foto.complete && foto.naturalWidth ? foto : null);
      /* SIN PESTAÑEO: mientras no hay video ni foto, no se pinta nada
         (antes se veía un instante el texto lleno de color). */
      if(src) sec.classList.add('apple--listo');
      if(src && a > 0){
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.globalCompositeOperation = 'source-atop';
        ctx.globalAlpha = a;
        var vw = src.videoWidth || src.naturalWidth, vh = src.videoHeight || src.naturalHeight;
        var e = Math.max(W / vw, H / vh);
        ctx.drawImage(src, (W - vw * e) / 2, (H - vh * e) / 2, vw * e, vh * e);
        ctx.globalAlpha = 1; ctx.globalCompositeOperation = 'source-over';
      }
      sub.style.opacity = lim((p - FASE_FIN + .05) / .07);
      sub.style.transform = 'translateY(' + (1 - lim((p - FASE_FIN + .05) / .07)) * 24 + 'px)';
      if(guia) guia.style.opacity = sec.classList.contains('apple--listo') ? 1 - lim(p / .06) : 0;
      /* al final, con la frase completa, vuelve a invitar a bajar */
      if(guiaFin) guiaFin.style.opacity = lim((p - FASE_FIN - .04) / .06) * (1 - lim((p - .96) / .04));
    }
    /* Solo se dibuja cuando la entrada está en pantalla. Fuera de ella el
       lienzo no trabaja y el video se pausa (ahorra batería y procesador). */
    var enPantalla = true;
    if('IntersectionObserver' in window){
      new IntersectionObserver(function(ent){
        enPantalla = ent[0].isIntersecting;
        if(enPantalla){ try{ var pv = video.play(); if(pv && pv.catch) pv.catch(function(){}); }catch(e){} }
        else { try{ video.pause(); }catch(e){} }
      }).observe(sec);
    }
    (function bucle(){ if(enPantalla) dibujar(); requestAnimationFrame(bucle); })();
    /* AVANCE AUTOMÁTICO: cuando ya hay video (o su foto), espera
       ESPERA_AUTO y luego lleva el efecto de 0 a 1 en DURACION_AUTO. */
    var t0 = 0, reducido = matchMedia('(prefers-reduced-motion: reduce)').matches;
    (function avanzar(ahora){
      if(!sec.classList.contains('apple--listo')){ requestAnimationFrame(avanzar); return; }
      if(!t0) t0 = ahora + ESPERA_AUTO;
      p = reducido ? 1 : lim((ahora - t0) / DURACION_AUTO);
      if(p < 1) requestAnimationFrame(avanzar);
    })(performance.now());
    function medir(){
      var r = sec.getBoundingClientRect();
      /* Mientras la entrada llena la pantalla, la barra superior del
         celular queda transparente (no tapa el video). */
      document.body.classList.toggle('en-apple', r.top < 1 && r.bottom > 90);
    }
    medir(); addEventListener('scroll', medir, { passive:true });
    if(lenis.on) lenis.on('scroll', medir);
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(dibujar);
  }

  /* ================================================================
     3b) BLOQUES → FICHA
        Cada bloque (Res, Porcino, Aves, Menudencias) al hacer clic se
        abre desde su propio rectángulo hasta llenar la pantalla (efecto
        Flip) y muestra: título, texto, frase resaltante, botón Cotiza
        (magnético) y el carrusel de fotos con su barra de control.
        AJUSTES:
          T_ABRIR   = segundos que tarda en abrirse/cerrarse
          FOTO_MS   = milisegundos que dura cada foto del carrusel
     ================================================================ */
  var T_ABRIR = .8, FOTO_MS = 3500;

  function bloquesImportados(){
    var bloques = document.querySelectorAll('.bloque');
    var capa = document.getElementById('fichaImp');
    if(!bloques.length || !capa) return;
    var actual = null, timer = null, pausado = false, idx = 0, inicio = 0;
    var cont = capa.querySelector('.fimp__cont');

    function rectA(el){
      var r = el.getBoundingClientRect();
      return 'inset(' + Math.max(0, r.top) + 'px ' + Math.max(0, innerWidth - r.right) + 'px ' + Math.max(0, innerHeight - r.bottom) + 'px ' + Math.max(0, r.left) + 'px round 18px)';
    }

    function pintar(b){
      var en = idioma() === 'en', d = function(k){ return b.getAttribute('data-' + k + (en ? '-en' : '')) || b.getAttribute('data-' + k); };
      var fotos = (b.dataset.fotos || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
      cont.innerHTML =
        '<div class="fimp__panel">' +
          '<span class="eyebrow"><i></i>' + (en ? 'Imported products' : 'Productos importados') + ' · ' + b.dataset.n + '</span>' +
          '<h2 class="fimp__titulo">' + d('titulo') + '</h2>' +
          '<p class="fimp__texto">' + d('texto') + '</p>' +
          '<p class="fimp__frase">' + d('frase') + '</p>' +
          '<ul class="fimp__lista">' + (d('lista') || '').split('|').map(function(x){ return x ? '<li>' + x + '</li>' : ''; }).join('') + '</ul>' +
          '<div class="fimp__cta"><button type="button" class="magnet fimp__cotiza">' + (en ? 'Request a quote' : 'Cotiza aquí') + '</button></div>' +
        '</div>' +
        '<div class="fimp__carrusel">' +
          fotos.map(function(f, i){ return '<img class="fimp__foto' + (i === 0 ? ' activa' : '') + '" src="' + f + '" alt="">'; }).join('') +
          '<div class="fimp__control">' +
            '<button type="button" class="fimp__btn" data-dir="-1" aria-label="' + (en ? 'Previous' : 'Anterior') + '">‹</button>' +
            '<button type="button" class="fimp__btn fimp__pausa" aria-label="' + (en ? 'Pause' : 'Pausa') + '"><span></span></button>' +
            '<button type="button" class="fimp__btn" data-dir="1" aria-label="' + (en ? 'Next' : 'Siguiente') + '">›</button>' +
            '<div class="fimp__puntos">' + fotos.map(function(_, i){ return '<button type="button" class="fimp__punto" data-i="' + i + '"><i></i></button>'; }).join('') + '</div>' +
          '</div>' +
        '</div>';
      var cot = cont.querySelector('.fimp__cotiza');
      hacerMagnetico(cot);
      // Ej.: "Hola Mafrox, estoy interesado en cotizar carne importada de res."
      //      (el texto sale del atributo data-cotiza / data-cotiza-en de cada bloque)
      cot.addEventListener('click', function(){ cotizar(d('cotiza') || d('titulo').replace(/<br\s*\/?>/g, ' ')); });
      cont.querySelectorAll('.fimp__btn[data-dir]').forEach(function(x){ x.addEventListener('click', function(){ ir(idx + (+x.dataset.dir)); }); });
      cont.querySelector('.fimp__pausa').addEventListener('click', function(){ pausado = !pausado; capa.classList.toggle('fimp--pausa', pausado); inicio = performance.now() - (pausado ? 0 : 0); });
      cont.querySelectorAll('.fimp__punto').forEach(function(x){ x.addEventListener('click', function(){ ir(+x.dataset.i); }); });
      idx = 0; inicio = performance.now(); marcar();
    }
    function fotosEls(){ return cont.querySelectorAll('.fimp__foto'); }
    function marcar(){
      var f = fotosEls();
      f.forEach(function(im, i){ im.classList.toggle('activa', i === idx); });
      cont.querySelectorAll('.fimp__punto').forEach(function(x, i){ x.classList.toggle('activo', i === idx); x.classList.toggle('visto', i < idx); });
    }
    function ir(i){ var n = fotosEls().length; if(!n) return; idx = (i + n) % n; inicio = performance.now(); marcar(); }
    /* El punto activo se va llenando: indica cuánto falta para la siguiente foto */
    (function reloj(t){
      if(actual){
        if(pausado) inicio = t - (parseFloat(capa.dataset.avance || 0) * FOTO_MS);
        var av = Math.min(1, (t - inicio) / FOTO_MS);
        capa.dataset.avance = av;
        var p = cont.querySelector('.fimp__punto.activo i'); if(p) p.style.transform = 'scaleX(' + av + ')';
        if(av >= 1 && !pausado) ir(idx + 1);
      }
      requestAnimationFrame(reloj);
    })(0);

    function abrir(b){
      actual = b; pausado = false; capa.classList.remove('fimp--pausa');
      pintar(b);
      capa.hidden = false; lenis.stop(); document.body.classList.add('ficha-abierta');
      if(hayGsap){
        gsap.fromTo(capa, { clipPath:rectA(b) }, { clipPath:'inset(0px 0px 0px 0px round 0px)', duration:T_ABRIR, ease:'expo.inOut' });
        gsap.fromTo(cont.querySelectorAll('.fimp__panel > *'), { opacity:0, y:26 }, { opacity:1, y:0, duration:.7, stagger:.06, ease:'expo.out', delay:T_ABRIR * .6 });
        gsap.fromTo(cont.querySelector('.fimp__carrusel'), { opacity:0, scale:1.06 }, { opacity:1, scale:1, duration:1, ease:'expo.out', delay:T_ABRIR * .45 });
      }
      capa.querySelector('.fimp__cerrar').focus({ preventScroll:true });
    }
    function cerrar(){
      if(!actual) return;
      var b = actual;
      function fin(){ capa.hidden = true; actual = null; lenis.start(); document.body.classList.remove('ficha-abierta'); b.focus({ preventScroll:true }); }
      if(hayGsap) gsap.to(capa, { clipPath:rectA(b), duration:T_ABRIR * .8, ease:'expo.inOut', onComplete:fin }); else fin();
    }
    bloques.forEach(function(b){ b.addEventListener('click', function(){ abrir(b); }); });
    capa.querySelector('.fimp__cerrar').addEventListener('click', cerrar);
    document.addEventListener('keydown', function(e){
      if(!actual) return;
      if(e.key === 'Escape') cerrar();
      if(e.key === 'ArrowRight') ir(idx + 1);
      if(e.key === 'ArrowLeft') ir(idx - 1);
    });
    alCambiarIdioma.push(function(){ if(actual) pintar(actual); });

    /* Al pasar sobre un bloque, su foto se acerca un poco */
    bloques.forEach(function(b){
      var im = b.querySelector('.bloque__foto');
      if(!im || !hayGsap) return;
      b.addEventListener('mousemove', function(e){
        var r = b.getBoundingClientRect();
        gsap.to(im, { x:(e.clientX - r.left - r.width / 2) * .04, y:(e.clientY - r.top - r.height / 2) * .08, duration:.6, ease:'power3.out' });
      });
      b.addEventListener('mouseleave', function(){ gsap.to(im, { x:0, y:0, duration:.8, ease:'expo.out' }); });
    });
  }

  function arrancar(){ mapaDeCortes(); entradaApple(); bloquesImportados(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arrancar); else arrancar();
})();
