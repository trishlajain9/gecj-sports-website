
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
      "chunk-B5NH7ANV.js",
      "chunk-AH7KCEHW.js"
    ],
    "route": "/council"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-VOYSJ3JE.js",
      "chunk-AH7KCEHW.js"
    ],
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24392, hash: '95f0596472c4bd194f28047b2cc136882c98e85760f31b1dc7d8eb72c3558154', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17396, hash: '3943bad1bfdbd0c3c9f27d4f5776e7281623e5062740dc6301bb40f397d5bb4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sports/basketball/index.html': {size: 35131, hash: '4c05bb5606b5df3a366233d9e65c6d5b4baacb15ae4c6a0b608ca705527e7271', text: () => import('./assets-chunks/sports_basketball_index_html.mjs').then(m => m.default)},
    'sports/football/index.html': {size: 33164, hash: '19c98485564072b4ad60690970bfbffa3021678f88b671ea6e6173cfd01da22e', text: () => import('./assets-chunks/sports_football_index_html.mjs').then(m => m.default)},
    'sports/tennis/index.html': {size: 33164, hash: 'aa488761928c00c301a1058f790a6d6c61645894161d9976e54b204580cfa0ef', text: () => import('./assets-chunks/sports_tennis_index_html.mjs').then(m => m.default)},
    'sports/index.html': {size: 40880, hash: 'abfe1e5f4908183ce2244b3d52bbaa7118add4609dc804de656c238ef11eacae', text: () => import('./assets-chunks/sports_index_html.mjs').then(m => m.default)},
    'sports/badminton/index.html': {size: 34200, hash: '08d7fd1079a847bd7de1231cf747f23af8c9762e7f39e55315bd8e90b410d0db', text: () => import('./assets-chunks/sports_badminton_index_html.mjs').then(m => m.default)},
    'sports/volleyball/index.html': {size: 33976, hash: 'cd7c489de2350898fd4d0db2f7300790fef1513acd69f882c78821e6a661303a', text: () => import('./assets-chunks/sports_volleyball_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 31503, hash: 'aedc1030397efe78d9b4270326c0101e46a1ac07eb998506d8da1787a77908d1', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'sports/cricket/index.html': {size: 33961, hash: '66c3d31e7b6ef0c11c825ef77d887ddc09d3843b69a1baf31d556151d1cbb5af', text: () => import('./assets-chunks/sports_cricket_index_html.mjs').then(m => m.default)},
    'styles-IZ4JPS2A.css': {size: 8190, hash: 'Q8X8D1KuBpc', text: () => import('./assets-chunks/styles-IZ4JPS2A_css.mjs').then(m => m.default)}
  },
};
