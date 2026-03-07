
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
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
      "chunk-DJT7AGCU.js",
      "chunk-3534MA7H.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-HTBNIJA7.js"
    ],
    "route": "/sports"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GUG3TMRU.js"
    ],
    "route": "/sports/basketball"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GUG3TMRU.js"
    ],
    "route": "/sports/football"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GUG3TMRU.js"
    ],
    "route": "/sports/cricket"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GUG3TMRU.js"
    ],
    "route": "/sports/tennis"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GUG3TMRU.js"
    ],
    "route": "/sports/badminton"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GUG3TMRU.js"
    ],
    "route": "/sports/volleyball"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GUG3TMRU.js"
    ],
    "route": "/sports/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XIPMX65I.js"
    ],
    "route": "/events"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-XHUB74JU.js",
      "chunk-3534MA7H.js"
    ],
    "route": "/timeline"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-WK7QZE3H.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-QJWPLIA7.js",
      "chunk-3534MA7H.js"
    ],
    "route": "/council"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-D4Q2BB4B.js",
      "chunk-3534MA7H.js"
    ],
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 925, hash: '78c18e8df9bdce5a61a498e47697485edca0ac5b24a330d17d5ac07308c9f8f9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1465, hash: 'd3bb18007a7fcfc2740609085f7f146157d683fd70c363f5ab44531d29ff878c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sports/index.html': {size: 19877, hash: 'b77b10123d79e9823613a004e1744a725c31cc2a1ce7ddd1a5e0413eb52764d8', text: () => import('./assets-chunks/sports_index_html.mjs').then(m => m.default)},
    'sports/basketball/index.html': {size: 13273, hash: '5485117e14cfa209190b036ac36e2ad6a7cf6e534e829d9dba92534a740756ac', text: () => import('./assets-chunks/sports_basketball_index_html.mjs').then(m => m.default)},
    'sports/tennis/index.html': {size: 11142, hash: 'b4c86c55d80adbcf073ad43720917ce80d1631845e57b6f951d82670602736ef', text: () => import('./assets-chunks/sports_tennis_index_html.mjs').then(m => m.default)},
    'sports/cricket/index.html': {size: 12072, hash: 'f945a654c6d60ec538943fa6446635ff62f9148d61db2649eeb598c23cba87c2', text: () => import('./assets-chunks/sports_cricket_index_html.mjs').then(m => m.default)},
    'sports/badminton/index.html': {size: 12317, hash: 'e91080880ff92e96524ad88f300823760018a3cac09aa482443a76053faaf319', text: () => import('./assets-chunks/sports_badminton_index_html.mjs').then(m => m.default)},
    'sports/volleyball/index.html': {size: 12087, hash: 'e35616c5676b81561ad23915de0329a7dbe8a554e285ebd87d633e8851eb660f', text: () => import('./assets-chunks/sports_volleyball_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 9088, hash: 'ec6f50bbce6552cbd79b0146d56c8091bc1fbffbea879cda6c61d2e252373bd2', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'sports/football/index.html': {size: 11142, hash: '2a29c1a26df7678e4da043e000394d2e417d3761e35050af53d9cb4141526e1d', text: () => import('./assets-chunks/sports_football_index_html.mjs').then(m => m.default)}
  },
};
