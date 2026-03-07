
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-3BMF7PRU.js",
      "chunk-AH7KCEHW.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N7S7JMGI.js"
    ],
    "route": "/sports"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XISLKIBC.js"
    ],
    "route": "/sports/basketball"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XISLKIBC.js"
    ],
    "route": "/sports/football"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XISLKIBC.js"
    ],
    "route": "/sports/cricket"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XISLKIBC.js"
    ],
    "route": "/sports/tennis"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XISLKIBC.js"
    ],
    "route": "/sports/badminton"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XISLKIBC.js"
    ],
    "route": "/sports/volleyball"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XISLKIBC.js"
    ],
    "route": "/sports/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OCJIJ3B2.js"
    ],
    "route": "/events"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-C62RFINL.js",
      "chunk-AH7KCEHW.js"
    ],
    "route": "/timeline"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-ONYFIWEK.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-FLSKOYJ3.js",
      "chunk-AH7KCEHW.js"
    ],
    "route": "/council"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-3W6O2BPO.js",
      "chunk-AH7KCEHW.js"
    ],
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24392, hash: 'cce33119176f071137433aaa2f05aea39e56db37af14bf667afd765462793c1a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17396, hash: '8370776ccafcb07123d19b3100f7a7c7eedc39bda71b89dd4fbe388ac5059f67', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sports/basketball/index.html': {size: 35131, hash: 'c8980042ad8ef2bc34afe67ce9494d630ed38105f75bcbecfcf988b87c6452df', text: () => import('./assets-chunks/sports_basketball_index_html.mjs').then(m => m.default)},
    'sports/index.html': {size: 40880, hash: '050bf6d68e00127784a20c596fbaef1f3f727c448fb440ede51f4f66689966e9', text: () => import('./assets-chunks/sports_index_html.mjs').then(m => m.default)},
    'sports/cricket/index.html': {size: 33961, hash: 'ba732835c89ac9c60595c98ede9d8917a0255d549c3e6fff33ef47a6a3825727', text: () => import('./assets-chunks/sports_cricket_index_html.mjs').then(m => m.default)},
    'sports/tennis/index.html': {size: 33164, hash: '0c85eefd31195a29a623bfd989bc79c058f2c3ba57c6ae9ea492cb31b52a72c4', text: () => import('./assets-chunks/sports_tennis_index_html.mjs').then(m => m.default)},
    'sports/football/index.html': {size: 33164, hash: 'de9fcc658f62e7f9418dd9160e539aed375516ded7fb3fffda66a11a36cb49af', text: () => import('./assets-chunks/sports_football_index_html.mjs').then(m => m.default)},
    'sports/badminton/index.html': {size: 34200, hash: '69a1957fa3eb438bdb0825c40f9e52c0c9aee589e5ba7490ebbf76a21a9aba93', text: () => import('./assets-chunks/sports_badminton_index_html.mjs').then(m => m.default)},
    'sports/volleyball/index.html': {size: 33976, hash: 'cec3b4fd301a1e34fe1c4a11b37565c50f494ff8f08cb136debdc187b49af160', text: () => import('./assets-chunks/sports_volleyball_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 31503, hash: 'fc5521e081966af8e1ca7234790cacdc9b8072aaf39634533c984eed1944ec47', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'styles-IZ4JPS2A.css': {size: 8190, hash: 'Q8X8D1KuBpc', text: () => import('./assets-chunks/styles-IZ4JPS2A_css.mjs').then(m => m.default)}
  },
};
