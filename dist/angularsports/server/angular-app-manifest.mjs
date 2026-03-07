
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
      "chunk-HMNTIPAM.js",
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
      "chunk-Q3LOEMIE.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-B5NH7ANV.js",
      "chunk-AH7KCEHW.js"
    ],
    "route": "/council"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SN43QHM2.js",
      "chunk-AH7KCEHW.js"
    ],
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24392, hash: 'f3888894c8c7dea199547f46d0ba97b73e9229fcceef1eb046f0e5b431dd2c00', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17396, hash: '53f23b55894eddd876b128f3cb0f7955a160d97ae557c015133fd749625520d1', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sports/basketball/index.html': {size: 35131, hash: 'ae0c3804d324c542270cb4ff9c110acda1f13910447810037348448b9fb7a5b5', text: () => import('./assets-chunks/sports_basketball_index_html.mjs').then(m => m.default)},
    'sports/index.html': {size: 40880, hash: '162a6f344e47511e5c06cea860055c8f6e4a0cb87a6786dfa9c05fec58592678', text: () => import('./assets-chunks/sports_index_html.mjs').then(m => m.default)},
    'sports/football/index.html': {size: 33164, hash: '7b6653af40b78a3fef049942715dcb710988e1aa394ed098c306585bc3def1a3', text: () => import('./assets-chunks/sports_football_index_html.mjs').then(m => m.default)},
    'sports/cricket/index.html': {size: 33961, hash: 'be70af70a88a3b7755e3017af89051de498973d7ad930da6068162a5863a5f65', text: () => import('./assets-chunks/sports_cricket_index_html.mjs').then(m => m.default)},
    'sports/tennis/index.html': {size: 33164, hash: 'bab7d64843b6b8ae2eb86947f332436832bf740092189c7ba9840d69f1cb7f69', text: () => import('./assets-chunks/sports_tennis_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 31503, hash: '5d411fecf9b878bed1a1730ff6468049d52d68524acc0ca784f998c5a10a3c91', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'sports/volleyball/index.html': {size: 33976, hash: '45d79ad515474694a811a506b84d8824e96b59bd591334985b3565b4af6db1d2', text: () => import('./assets-chunks/sports_volleyball_index_html.mjs').then(m => m.default)},
    'sports/badminton/index.html': {size: 34200, hash: '5a4ebcb4a9d66059e2851c247e5e5fe904671bc5a217e540baec77c5c660d005', text: () => import('./assets-chunks/sports_badminton_index_html.mjs').then(m => m.default)},
    'styles-IZ4JPS2A.css': {size: 8190, hash: 'Q8X8D1KuBpc', text: () => import('./assets-chunks/styles-IZ4JPS2A_css.mjs').then(m => m.default)}
  },
};
