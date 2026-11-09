const ES = {
  nv1: 'Apps',
  nv2: 'Por qué',
  nv3: 'Apoyar',
  pill: 'Hecho a la vista, una app cada vez',
  pilltag: 'La historia',
  h1a: 'Ya tienes',
  h1b: 'la versión completa.',
  lede: 'Inlitx Apps hace apps libres y de código abierto que aguantan la comparación con cualquiera de pago. Sin cuenta que crear, sin anuncios, sin que nada salga de tu dispositivo y sin una versión de pago esperándote más adelante.',
  cta1: 'Ver las apps',
  cta2: 'Ver el código',
  c1: 'descargas totales',
  c2: 'estrellas en GitHub',
  c3: 'apps, todas gratis',
  tc1: 'Sin cuenta, nunca',
  tc2: 'Sin anuncios ni rastreo',
  tc3: 'Cada línea a la vista',
  tag1: 'Las apps',
  h2a: 'Tres apps.',
  h2b: 'Las tres enteramente tuyas.',
  sub1: 'Descargas gratuitas, sin cuenta de tienda y sin registro. Cada versión sale directamente del repositorio que la generó, con el código justo al lado.',
  get: 'Obtener',
  free: 'Gratis · sin compras dentro',
  from: 'Disponible en',
  src: 'Código',
  soon: 'Pronto en más tiendas',
  m1: 'Versión',
  m2: 'Tamaño',
  m3: 'Descargas',
  m4: 'Estrellas',
  m5: 'Licencia',
  m6: 'Requiere',
  a1cat: 'Productividad · Registro de hábitos',
  a1say: 'Marca un hábito con un solo toque y mira cómo se llena un año entero. Rachas, temporizador de concentración con rondas pomodoro, estadísticas que de verdad dicen algo, tres diseños completos y una isla que crece un poco cada vez que apareces.',
  a2cat: 'Salud y forma física · Registro de gimnasio',
  a2say: 'Toca en un mapa corporal real los músculos que quieres entrenar, registra repeticiones y peso serie a serie, y descansa con una alarma que de verdad te avisa. El progreso sale de tus propias series, no de una gráfica que alguien te vendió.',
  a3cat: 'Privacidad · Tapar datos personales',
  a3say: 'Tapa nombres, DNI, IBAN, caras y más en documentos y fotos antes de compartirlos, y borra también los datos ocultos. No tiene permiso de internet, así que nada de lo que abras puede salir de tu móvil.',
  st1: 'Nos cansamos de elegir entre apps que se sienten bien y apps que nos respetan.',
  st2: 'Toda app que merece la pena acaba igual. Un muro de pago justo en mitad de lo que estabas haciendo. Una suscripción por algo que el año pasado era gratis. Una cuenta que nunca pediste. Un anuncio en mitad de tu mañana.',
  st3: 'Las alternativas libres existían, y casi todas parecían exactamente eso: alternativas. Bordes ásperos, diseños cansados, buenas intenciones de alguien a quien ya no le quedaba tiempo para los detalles. La libertad no debería costarte la sensación de estar usando algo bueno.',
  st4: 'Así que Inlitx Apps existe para construir la otra opción. El movimiento, la tipografía, los estados vacíos, las mil decisiones pequeñas que nadie nota hasta que faltan, puestos en software libre, sin conexión, privado y abierto. Para siempre y para cualquiera.',
  st6: 'Detrás de esto no hay una empresa. Ni inversores, ni plan de crecimiento, ni la intención callada de venderte algo más adelante. Una persona, tres apps y el tiempo para hacerlas bien.',
  st5: 'Si no es lo bastante bueno para venderlo, no es lo bastante bueno para regalarlo.',
  tag2: 'Las reglas',
  h3a: 'Seis promesas,',
  h3b: 'en cada app que publicamos.',
  sub2: 'Esto no es una página de marketing. Son las restricciones dentro de las que diseñamos, y el motivo por el que algunas funciones nunca entran.',
  p1t: 'Sin conexión por defecto',
  p1b: 'Si una app puede funcionar sin red, funciona sin red del todo. Las pocas que de verdad la necesiten lo dirán, y solo la usarán para eso.',
  p2t: 'Sin cuentas',
  p2b: 'La abres y ya es tuya. Sin correo, sin contraseña y sin un perfil que abandonar después.',
  p3t: 'Sin anuncios ni rastreo',
  p3b: 'Sin analíticas, sin telemetría y sin SDK de terceros. Nada tuyo sale del dispositivo.',
  p4t: 'Código abierto',
  p4b: 'Cada línea se puede leer, auditar y bifurcar. Confianza que compruebas, no confianza que te piden.',
  p5t: 'Gratis, para siempre',
  p5b: 'Sin prueba, sin niveles y sin versión pro. La app completa desde el primer arranque, para todos.',
  p6t: 'Hecha para poder irte',
  p6b: 'Tus datos se exportan en un formato que es tuyo. Irse es tan fácil como llegar, y es a propósito.',
  tag4: 'Apoyar',
  h5: 'Nada que comprar, nunca.',
  sub4: 'Sin versión de pago, sin suscripción y sin nada guardado. Las tres de abajo no te cuestan nada y ayudan más de lo que parece.',
  s1t: 'Dale una estrella a la que uses',
  s1b: 'Todas las apps viven en la organización. Elige la que de verdad usas, porque una estrella es como casi todo el mundo acaba encontrándola.',
  s2t: 'Traduce una app',
  s2b: 'Cada idioma de estas apps lo escribió alguien que las usa. Abre el repositorio que te importe y añade el tuyo.',
  s3t: 'Cuenta lo que está roto',
  s3b: 'Un informe de fallo claro vale más que la mayoría de peticiones de funciones. Abre una incidencia en el repositorio al que pertenezca.',
  gt: 'Estas apps nunca te van a pedir nada.',
  gb: 'Ni una cuenta, ni tu atención, ni un pago, ahora ni después. Todo lo que hacen es tuyo desde el momento en que las instalas. Así que si alguna se ha vuelto parte de cómo funcionan tus días, lo que vuelva es decisión tuya y solo tuya, y un café es simplemente una forma más bonita de dar las gracias.',
  wl: 'Directo a una cartera, si lo prefieres · toca para copiar',
  copied: 'Copiado',
  fc: 'Hecho con cariño y regalado, por',
};

const EN = {};
document.querySelectorAll('[data-i18n]').forEach((el) => {
  EN[el.dataset.i18n] = el.innerHTML;
});

const APPS = {
  streak: {
    repo: 'InlitX/streak',
    asset: 'arm64-v8a.apk',
    shots: {
      en: Array.from({ length: 8 }, (_, i) => `https://cdn.jsdelivr.net/gh/InlitX/streak@main/fastlane/metadata/android/en-US/images/phoneScreenshots/${i + 1}.png`),
      es: Array.from({ length: 8 }, (_, i) => `https://cdn.jsdelivr.net/gh/InlitX/streak@main/fastlane/metadata/android/es-ES/images/phoneScreenshots/${i + 1}.png`),
    },
  },
  gymmane: {
    repo: 'InlitX/GymMane',
    asset: 'arm64-v8a.apk',
    shots: {
      en: ['01-hero', '02-train', '03-rest', '04-progress', '05-library', '06-privacy']
        .map((name) => `https://cdn.jsdelivr.net/gh/InlitX/GymMane@main/docs/screenshots/store/en/${name}.jpg`),
      es: ['01-hero', '02-train', '03-rest', '04-progress', '05-library', '06-privacy']
        .map((name) => `https://cdn.jsdelivr.net/gh/InlitX/GymMane@main/docs/screenshots/store/es/${name}.jpg`),
    },
  },
  coverit: {
    repo: 'InlitX/CoverIt',
    asset: 'arm64-v8a.apk',
    shots: {
      en: Array.from({ length: 8 }, (_, i) => `https://cdn.jsdelivr.net/gh/InlitX/CoverIt@main/fastlane/metadata/android/en-US/images/phoneScreenshots/${i + 1}.png`),
      es: Array.from({ length: 8 }, (_, i) => `https://cdn.jsdelivr.net/gh/InlitX/CoverIt@main/fastlane/metadata/android/en-US/images/phoneScreenshots/${i + 1}.png`),
    },
  },
};

const store = (key, value) => {
  try {
    if (value === undefined) return localStorage.getItem(key);
    localStorage.setItem(key, value);
  } catch {
    return null;
  }
  return value;
};

const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;

function shots(code) {
  document.querySelectorAll('[data-shots]').forEach((rail) => {
    const app = APPS[rail.dataset.shots];
    if (!app) return;
    rail.innerHTML = '';
    app.shots[code].forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.decoding = 'async';
      img.loading = i < 3 ? 'eager' : 'lazy';
      img.style.transitionDelay = `${i * 40}ms`;
      rail.appendChild(img);
    });
  });
}

function paint(code) {
  const dict = code === 'es' ? ES : EN;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const text = dict[el.dataset.i18n];
    if (!text) return;
    const svg = el.querySelector('svg');
    el.innerHTML = text;
    if (svg) el.appendChild(svg);
  });
  document.documentElement.lang = code;
  document.querySelectorAll('#lang span').forEach((el) => {
    el.classList.toggle('is-on', el.dataset.lang === code);
  });
  shots(code);
  store('inlitx-lang', code);
}

let lang = store('inlitx-lang') === 'es' ? 'es' : 'en';
paint(lang);

document.getElementById('lang').addEventListener('click', () => {
  lang = lang === 'es' ? 'en' : 'es';
  paint(lang);
});

async function copy(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.cssText = 'position:fixed;top:-100px;opacity:0';
    document.body.appendChild(field);
    field.select();
    const done = document.execCommand('copy');
    field.remove();
    return done;
  }
}

document.querySelectorAll('.wallet').forEach((wallet) => {
  const label = wallet.querySelector('.wallet__a');
  const address = wallet.dataset.copy;
  let timer = 0;
  wallet.addEventListener('click', async () => {
    if (!(await copy(address))) return;
    clearTimeout(timer);
    wallet.classList.add('is-done');
    label.textContent = lang === 'es' ? ES.copied : 'Copied';
    timer = setTimeout(() => {
      wallet.classList.remove('is-done');
      label.textContent = address;
    }, 1600);
  });
});

const bar = document.querySelector('.bar');
const onScroll = () => bar.classList.toggle('is-small', window.scrollY > 24);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: calm ? 'auto' : 'smooth', block: 'start' });
  });
});

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('in');
    io.unobserve(entry.target);
  });
}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

document.querySelectorAll('.hero .reveal, .sec > .reveal, .apps, .rail, .help').forEach((group) => {
  const items = group.matches('.apps, .rail, .help') ? [...group.children] : [group];
  items.forEach((el, i) => {
    el.style.transitionDelay = `${i * 90}ms`;
  });
});

function tickTo(nodes, from, to) {
  if (!nodes.length || !to) return;
  const start = performance.now();
  const step = (now) => {
    const t = calm ? 1 : Math.min(1, (now - start) / 1400);
    const eased = 1 - (1 - t) ** 3;
    const value = Math.round(from + (to - from) * eased).toLocaleString();
    nodes.forEach((node) => { node.textContent = value; });
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function counter(name) {
  const nodes = [...document.querySelectorAll(`[data-count="${name}"]`)];
  const saved = Number(store(`inlitx-${name}`)) || 0;
  if (saved) nodes.forEach((node) => { node.textContent = saved.toLocaleString(); });
  return (value) => {
    if (typeof value !== 'number' || !value) return;
    store(`inlitx-${name}`, value);
    if (value === saved) return;
    tickTo(nodes, saved, value);
  };
}

function fill(name, value) {
  if (!value) return;
  document.querySelectorAll(`[data-fill="${name}"]`).forEach((node) => { node.textContent = value; });
}

const megabytes = (bytes) => `${Math.round(bytes / 1048576)} MB`;

const totals = { stars: 0, downloads: 0 };
const setStars = counter('stars');
const setDownloads = counter('downloads');

const grab = (url) => fetch(url).then((res) => (res.ok ? res.json() : null)).catch(() => null);

Object.entries(APPS).forEach(([id, app]) => {
  const setAppStars = counter(`${id}-stars`);
  const setAppDownloads = counter(`${id}-downloads`);

  grab(`https://api.github.com/repos/${app.repo}`).then((repo) => {
    if (!repo) return;
    setAppStars(repo.stargazers_count);
    totals.stars += repo.stargazers_count || 0;
    setStars(totals.stars);
  });

  grab(`https://api.github.com/repos/${app.repo}/releases?per_page=100`).then((releases) => {
    if (!Array.isArray(releases) || !releases.length) return;
    let downloads = 0;
    releases.forEach((release) => {
      (release.assets || []).forEach((asset) => { downloads += asset.download_count || 0; });
    });
    setAppDownloads(downloads);
    totals.downloads += downloads;
    setDownloads(totals.downloads);

    const latest = releases.find((release) => !release.draft && !release.prerelease) || releases[0];
    fill(`${id}-version`, latest.tag_name);
    const main = (latest.assets || []).find((asset) => asset.name.endsWith(app.asset));
    if (main) fill(`${id}-size`, megabytes(main.size));
  });
});
