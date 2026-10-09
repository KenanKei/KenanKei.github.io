var ICONS = {
  github:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.29-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5Z"/></svg>',
  linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m2 7 10 7 10-7"/></svg>',
  globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20Z"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  zoom:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/></svg>',
  brief:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'
};

(function renderContent(){
  document.querySelectorAll('[data-bind]').forEach(function(el){
    var key = el.dataset.bind;
    if (DATA[key] !== undefined){
      if (key === 'bio1' || key === 'bio2') el.innerHTML = DATA[key];
      else el.textContent = DATA[key];
    }
  });
  document.title = 'Portfolio - ' + DATA.prenom + ' ' + DATA.nom + ' - ' + DATA.role;
  document.getElementById('year').textContent = new Date().getFullYear();

  document.getElementById('facts').innerHTML = DATA.facts.map(function(f){return '<div class="fact"><div class="k">'+f.k+'</div><div class="v">'+f.v+'</div></div>';}).join('');

  document.getElementById('contactList').innerHTML =
    '<li>'+ICONS.mail+'<a href="mailto:'+DATA.email+'">'+DATA.email+'</a></li>'+
    '<li>'+ICONS.phone+'<span>'+DATA.telephone+'</span></li>'+
    '<li>'+ICONS.pin+'<span>'+DATA.ville+'</span></li>'+
    '<li>'+ICONS.globe+'<a href="'+DATA.cvUrl+'" target="_blank" rel="noopener">Telecharger mon CV</a></li>';

  document.getElementById('skillsGrid').innerHTML = DATA.skills.map(function(cat){
    return '<div class="skill-card reveal"><h4><span class="ic">'+cat.icon+'</span>'+cat.category+'</h4><div class="skill-pills">'+
      cat.items.map(function(s){return '<span class="skill-pill '+(s.level==='learning'?'learning':'')+'"><span class="dot"></span>'+s.name+'</span>';}).join('')+
      '</div></div>';
  }).join('');

  document.getElementById('interestsGrid').innerHTML = DATA.interests.map(function(i){
    var accent = i.accent || '#5b8cff';
    return '<div class="interest reveal" style="--i-accent:'+accent+';--i-color:'+accent+';--i-bg:'+accent+'18;--i-border:'+accent+'40;--i-glow:'+accent+'66">'+
      '<div class="interest-icon">'+i.icon+'</div><h4>'+i.name+'</h4><p>'+i.description+'</p></div>';
  }).join('');

  document.getElementById('projectsGrid').innerHTML = DATA.projects.map(function(p,idx){
    var hasLink = p.link && p.link.trim() !== '';
    var status = p.status || (hasLink ? '' : 'wip');
    var clickable = status !== 'todo' && p.description;
    var cardClass = 'project reveal';
    var actionHTML = '';
    if (hasLink) actionHTML = '<a class="project-link" href="'+p.link+'" target="_blank" rel="noopener" onclick="event.stopPropagation()">Voir le projet '+ICONS.arrow+'</a>';
    else if (status === 'done'){ cardClass += ' is-done'; actionHTML = '<span class="project-link">'+ICONS.check+' Projet realise</span>'; }
    else if (status === 'todo'){ cardClass += ' is-placeholder'; actionHTML = '<span class="project-link is-disabled">'+ICONS.clock+' A venir</span>'; }
    else { cardClass += ' is-placeholder'; actionHTML = '<span class="project-link is-disabled">'+ICONS.clock+' En cours</span>'; }
    var mediaHTML = p.logo
      ? '<div class="project-logo"><img src="'+p.logo+'" alt="Logo '+p.title+'"></div>'
      : '<div class="project-orb" style="--o1:'+p.orb[0]+';--o2:'+p.orb[1]+'"></div>';
    var zoomIcon = clickable ? '<span class="project-ext">'+ICONS.zoom+'</span>' : '';
    return '<article class="'+cardClass+'" data-project-idx="'+idx+'" '+(clickable?'tabindex="0" role="button"':'')+'>'+
      '<div class="project-top">'+mediaHTML+'<span class="project-year">'+p.year+'</span></div>'+
      '<h3>'+p.title+'</h3><p>'+(p.summary || p.description || '')+'</p>'+
      '<div class="tags">'+p.tags.map(function(t){return '<span class="tag">'+t+'</span>';}).join('')+'</div>'+
      '<div class="project-action">'+actionHTML+zoomIcon+'</div></article>';
  }).join('');

  document.getElementById('timeline').innerHTML = DATA.timeline.map(function(t){
    return '<div class="tl-item reveal"><div class="tl-year">'+t.year+'</div><h4>'+t.title+'</h4><div class="place">'+t.place+'</div><p>'+t.description+'</p></div>';
  }).join('');

  document.getElementById('socials').innerHTML = DATA.socials.map(function(s){
    return '<a class="social" href="'+s.url+'" target="_blank" rel="noopener">'+(ICONS[s.icon] || ICONS.globe)+
      '<span class="label">'+s.label+'</span><span class="handle">'+s.handle+'</span></a>';
  }).join('');
})();

(function projectModal(){
  var backdrop = document.getElementById('modalBackdrop');
  var content = document.getElementById('modalContent');
  function openModal(idx){
    var p = DATA.projects[idx];
    if (!p) return;
    var status = p.status || 'wip';
    var statusLabels = {
      done:{label:'Projet realise',cls:'done',icon:ICONS.check},
      wip:{label:'En cours',cls:'wip',icon:ICONS.clock},
      todo:{label:'A venir',cls:'todo',icon:ICONS.clock}
    };
    var st = statusLabels[status] || statusLabels.wip;
    var mediaHTML = p.logo
      ? '<div class="modal-logo"><img src="'+p.logo+'" alt="Logo '+p.title+'"></div>'
      : '<div class="modal-orb" style="--o1:'+p.orb[0]+';--o2:'+p.orb[1]+'"></div>';
    var metaItems = [];
    if (p.context) metaItems.push('<span>'+ICONS.brief+p.context+'</span>');
    if (p.duration) metaItems.push('<span>'+ICONS.cal+p.duration+'</span>');
    if (p.role) metaItems.push('<span>'+ICONS.user+p.role+'</span>');
    var missionsHTML = (p.missions && p.missions.length)
      ? '<section><h3>Missions principales</h3><ul>'+p.missions.map(function(m){return '<li>'+m+'</li>';}).join('')+'</ul></section>' : '';
    var resultatsHTML = p.resultats ? '<section><h3>Resultat et apprentissage</h3><p>'+p.resultats+'</p></section>' : '';
    var tagsHTML = (p.tags && p.tags.length)
      ? '<section><h3>Technologies utilisees</h3><div class="modal-tags">'+p.tags.map(function(t){return '<span class="modal-tag">'+t+'</span>';}).join('')+'</div></section>' : '';
    var linkBtn = p.link ? '<a class="btn btn-primary" href="'+p.link+'" target="_blank" rel="noopener">Voir le projet '+ICONS.arrow+'</a>' : '';

    content.innerHTML =
      '<button class="modal-close" aria-label="Fermer">'+ICONS.close+'</button>'+
      '<div class="modal-header"><div class="modal-header-top">'+mediaHTML+'<span class="modal-badge '+st.cls+'">'+st.icon+' '+st.label+'</span></div>'+
      '<h2>'+p.title+'</h2><div class="modal-meta">'+metaItems.join('')+'</div></div>'+
      '<div class="modal-body"><section><h3>Description</h3><p>'+(p.description || p.summary || '')+'</p></section>'+
      missionsHTML+resultatsHTML+tagsHTML+
      (linkBtn ? '<div class="modal-actions">'+linkBtn+'</div>' : '')+'</div>';

    content.querySelector('.modal-close').addEventListener('click', closeModal);
    backdrop.classList.add('open');
    backdrop.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
    content.scrollTop = 0;
  }
  function closeModal(){
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden','true');
    document.body.classList.remove('modal-open');
  }
  document.getElementById('projectsGrid').addEventListener('click', function(e){
    var card = e.target.closest('.project');
    if (!card || card.classList.contains('is-placeholder')) return;
    var idx = parseInt(card.dataset.projectIdx, 10);
    if (!isNaN(idx)) openModal(idx);
  });
  backdrop.addEventListener('click', function(e){ if (e.target === backdrop) closeModal(); });
  document.addEventListener('keydown', function(e){ if (e.key === 'Escape' && backdrop.classList.contains('open')) closeModal(); });
})();

(function smoothScrollAnchors(){
  var NAV_OFFSET = 80;
  document.querySelectorAll('a[data-scroll], a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var burger = document.getElementById('burger');
      var menu = document.getElementById('mobileMenu');
      if (menu && menu.classList.contains('open')){
        burger.classList.remove('open');
        menu.classList.remove('open');
        document.body.style.overflow = '';
      }
      var top = href === '#top' ? 0 : target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({top: top, behavior:'smooth'});
    });
  });
})();

(function navigation(){
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  burger.addEventListener('click', function(){
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
  });
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  var sections = links.map(function(l){ return document.querySelector(l.getAttribute('href')); }).filter(Boolean);
  function onScroll(){
    var y = window.scrollY;
    nav.classList.toggle('scrolled', y > 40);
    var current = null;
    sections.forEach(function(sec){ if (y >= sec.offsetTop - window.innerHeight * 0.4) current = sec.id; });
    links.forEach(function(l){ l.classList.toggle('active', l.getAttribute('href') === '#' + current && !l.classList.contains('nav-cta')); });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
})();

(function revealOnScroll(){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e,i){
      if (e.isIntersecting){
        var el = e.target;
        el.style.transitionDelay = (i % 4) * 80 + 'ms';
        el.classList.add('is-visible');
        io.unobserve(el);
      }
    });
  }, {threshold:0.12, rootMargin:'0px 0px -60px 0px'});
  document.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
})();

(function tilt(){
  document.querySelectorAll('.project').forEach(function(card){
    if (card.classList.contains('is-placeholder')) return;
    card.addEventListener('mousemove', function(e){
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width;
      var y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', x * 100 + '%');
      card.style.setProperty('--my', y * 100 + '%');
      card.style.transform = 'perspective(900px) rotateX('+((0.5-y)*4)+'deg) rotateY('+((x-0.5)*4)+'deg) translateY(-4px)';
    });
    card.addEventListener('mouseleave', function(){ card.style.transform = ''; });
  });
})();

(function contactForm(){
  var form = document.getElementById('contactForm');
  var msg = document.getElementById('formMsg');
  if (!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    var d = new FormData(form);
    var subject = encodeURIComponent('Contact portfolio - ' + d.get('name'));
    var body = encodeURIComponent(d.get('message') + '\n\n- ' + d.get('name') + ' (' + d.get('email') + ')');
    window.location.href = 'mailto:' + DATA.email + '?subject=' + subject + '&body=' + body;
    msg.textContent = 'Ouverture de votre client mail...';
    msg.classList.add('show');
    setTimeout(function(){ msg.classList.remove('show'); }, 4000);
  });
})();

(function space(){
  var canvas = document.getElementById('space');
  var hero = document.querySelector('.hero');
  var heroContent = document.getElementById('heroContent');
  var isMobile = window.matchMedia('(max-width: 820px)').matches;

  var renderer = new THREE.WebGLRenderer({canvas: canvas, antialias:true, alpha:true, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  if (renderer.outputEncoding !== undefined) renderer.outputEncoding = THREE.sRGBEncoding;
  if (renderer.toneMapping !== undefined) renderer.toneMapping = THREE.ACESFilmicToneMapping;
  if (renderer.toneMappingExposure !== undefined) renderer.toneMappingExposure = 0.9;

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(42, window.innerWidth / window.innerHeight, 0.1, 3000);
  camera.position.set(0, 0, 5.0);

  scene.add(new THREE.AmbientLight(0x6a7acc, 0.35));
  var sun = new THREE.DirectionalLight(0xffffff, 1.15); sun.position.set(4.5, 2.2, 4.5); scene.add(sun);
  var rim = new THREE.DirectionalLight(0x4a6ac0, 0.55); rim.position.set(-5, -2, -4); scene.add(rim);
  var fill = new THREE.DirectionalLight(0x8f6bff, 0.18); fill.position.set(-3, 3, 2); scene.add(fill);

  var STAR_COUNT = isMobile ? 400 : 900;
  var starPos = new Float32Array(STAR_COUNT * 3);
  var starCol = new Float32Array(STAR_COUNT * 3);
  for (var i = 0; i < STAR_COUNT; i++){
    var r = 80 + Math.random() * 320;
    var theta = Math.random() * Math.PI * 2;
    var phi = Math.acos(2 * Math.random() - 1);
    starPos[i*3] = r * Math.sin(phi) * Math.cos(theta);
    starPos[i*3+1] = r * Math.sin(phi) * Math.sin(theta);
    starPos[i*3+2] = r * Math.cos(phi);
    var c = new THREE.Color().setHSL(0.58 + Math.random() * 0.08, 0.3, 0.72 + Math.random() * 0.18);
    starCol[i*3] = c.r; starCol[i*3+1] = c.g; starCol[i*3+2] = c.b;
  }
  var starGeo = new THREE.BufferGeometry();
  starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
  starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({
    size:0.9, sizeAttenuation:true, vertexColors:true, transparent:true, opacity:0.55, depthWrite:false
  })));

  var R = 1.5;
  var earthGroup = new THREE.Group();
  earthGroup.position.x = isMobile ? 0 : 1.0;
  scene.add(earthGroup);

  var loader = new THREE.TextureLoader();
  loader.setCrossOrigin('anonymous');
  var earthMat = new THREE.MeshPhongMaterial({color:0xffffff, shininess:6, specular:new THREE.Color(0x1a2033)});

  loader.load(
    'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg',
    function(tex){ tex.encoding = THREE.sRGBEncoding; earthMat.map = tex; earthMat.needsUpdate = true; hideLoader(); },
    undefined,
    function(){ earthMat.color = new THREE.Color(0x1a3a70); earthMat.needsUpdate = true; hideLoader(); }
  );

  earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(R, 96, 96), earthMat));

  var atmMat = new THREE.ShaderMaterial({
    vertexShader: 'varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: 'varying vec3 vNormal; void main(){ float i=pow(max(0.0,0.55-dot(vNormal,vec3(0.0,0.0,1.0))),3.2); gl_FragColor=vec4(0.35,0.55,1.0,1.0)*i*0.9; }',
    blending: THREE.AdditiveBlending, side: THREE.BackSide, transparent: true, depthWrite: false
  });
  earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.14, 64, 64), atmMat));

  var haloMat = new THREE.ShaderMaterial({
    vertexShader: 'varying vec3 vNormal; void main(){ vNormal=normalize(normalMatrix*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: 'varying vec3 vNormal; void main(){ float i=pow(max(0.0,0.4-dot(vNormal,vec3(0.0,0.0,1.0))),6.0); gl_FragColor=vec4(0.4,0.5,0.9,1.0)*i*1.3; }',
    blending: THREE.AdditiveBlending, side: THREE.BackSide, transparent: true, depthWrite: false
  });
  earthGroup.add(new THREE.Mesh(new THREE.SphereGeometry(R * 1.4, 48, 48), haloMat));

  var LAT = 48.69, LON = 6.18;
  var u = (LON + 180) / 360;
  var phiN = u * Math.PI * 2;
  var thetaN = (90 - LAT) * Math.PI / 180;
  var nancyDir = new THREE.Vector3(-Math.cos(phiN) * Math.sin(thetaN), Math.cos(thetaN), Math.sin(phiN) * Math.sin(thetaN)).normalize();
  var BASE_ROT_Y = Math.atan2(-nancyDir.x, nancyDir.z) - Math.PI / 2;
  var BASE_ROT_X = Math.atan2(nancyDir.y, Math.hypot(nancyDir.x, nancyDir.z));

  function glowTexture(){
    var cv = document.createElement('canvas'); cv.width = cv.height = 128;
    var ctx = cv.getContext('2d');
    var g = ctx.createRadialGradient(64,64,0,64,64,64);
    g.addColorStop(0,'rgba(220,255,250,0.95)');
    g.addColorStop(0.25,'rgba(120,220,255,0.6)');
    g.addColorStop(0.6,'rgba(80,150,255,0.15)');
    g.addColorStop(1,'rgba(80,150,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0,0,128,128);
    return new THREE.CanvasTexture(cv);
  }
  var markerSprite = new THREE.Sprite(new THREE.SpriteMaterial({map:glowTexture(), transparent:true, blending:THREE.AdditiveBlending, depthWrite:false, opacity:0}));
  markerSprite.position.copy(nancyDir).multiplyScalar(R * 1.008);
  markerSprite.scale.setScalar(0.42);
  earthGroup.add(markerSprite);

  function labelTexture(text){
    var cv = document.createElement('canvas'); cv.width = 512; cv.height = 128;
    var ctx = cv.getContext('2d');
    ctx.font = '500 52px "Space Grotesk", sans-serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.shadowColor = 'rgba(120,220,255,.8)'; ctx.shadowBlur = 18;
    ctx.fillStyle = '#eaf6ff';
    ctx.fillText(text, 256, 64); ctx.fillText(text, 256, 64);
    return new THREE.CanvasTexture(cv);
  }
  var labelSprite = new THREE.Sprite(new THREE.SpriteMaterial({map:labelTexture('Nancy'), transparent:true, depthWrite:false, opacity:0}));
  labelSprite.position.copy(nancyDir).multiplyScalar(R * 1.008).add(new THREE.Vector3(0, 0.2, 0));
  labelSprite.scale.set(0.85, 0.212, 1);
  earthGroup.add(labelSprite);

  var clock = new THREE.Clock();
  var progress = 0, targetProgress = 0, spin = 0;
  function lerp(a,b,t){ return a + (b-a)*t; }
  function easeInOut(t){ return t<0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2; }

  function onScroll(){
    var scrollable = hero.offsetHeight - window.innerHeight;
    var y = window.scrollY;
    targetProgress = Math.min(1, Math.max(0, y / Math.max(scrollable, 1)));
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function updateHeroText(p){
    var t = Math.min(1, p / 0.35);
    var e = 1 - Math.pow(1 - t, 2);
    heroContent.style.opacity = String(1 - e);
    heroContent.style.transform = 'translateY(' + (-e * 60) + 'px)';
    heroContent.style.filter = 'blur(' + (e * 4) + 'px)';
    heroContent.style.pointerEvents = p > 0.3 ? 'none' : 'auto';
  }

  function animate(){
    requestAnimationFrame(animate);
    progress = lerp(progress, targetProgress, 0.09);
    var e = easeInOut(progress);
    spin += 0.0011;
    earthGroup.rotation.y = BASE_ROT_Y + (1 - e) * 2.4 + spin * (1 - progress);
    earthGroup.rotation.x = lerp(0.26, BASE_ROT_X, e);
    earthGroup.position.x = (isMobile ? 0 : 1.0) * (1 - e);
    camera.position.z = lerp(5.0, 2.55, e);
    camera.lookAt(0, 0, 0);
    var markerT = Math.max(0, (progress - 0.5) / 0.5);
    var pulse = 0.9 + Math.sin(clock.getElapsedTime() * 2.6) * 0.12;
    markerSprite.material.opacity = markerT * pulse;
    markerSprite.scale.setScalar(0.42 * (0.7 + markerT * 0.6));
    labelSprite.material.opacity = markerT * 0.9;
    updateHeroText(progress);
    renderer.render(scene, camera);
  }
  animate();

  function hideLoader(){
    var l = document.getElementById('loader');
    document.body.classList.remove('loading');
    setTimeout(function(){ l.classList.add('hidden'); }, 300);
  }
  setTimeout(hideLoader, 4000);
})();