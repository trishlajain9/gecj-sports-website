
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
    "renderMode": 2,
    "preload": [
      "chunk-6A5S22GH.js",
      "chunk-VX4CVLAQ.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-ZOFNAUBM.js",
      "chunk-4X3RRI2D.js"
    ],
    "route": "/sports"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3MVQ3GUH.js"
    ],
    "route": "/sports/basketball"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3MVQ3GUH.js"
    ],
    "route": "/sports/football"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3MVQ3GUH.js"
    ],
    "route": "/sports/cricket"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3MVQ3GUH.js"
    ],
    "route": "/sports/tennis"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3MVQ3GUH.js"
    ],
    "route": "/sports/badminton"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3MVQ3GUH.js"
    ],
    "route": "/sports/volleyball"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3MVQ3GUH.js"
    ],
    "route": "/sports/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-V5YBUW42.js"
    ],
    "route": "/events"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P2I3HF7Z.js",
      "chunk-BTM6K7XR.js",
      "chunk-4X3RRI2D.js"
    ],
    "route": "/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TVCXFSPB.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FT4EC2BD.js",
      "chunk-KREUKUNO.js"
    ],
    "route": "/council"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OIF5P4HB.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7L4WRONA.js",
      "chunk-BTM6K7XR.js",
      "chunk-KREUKUNO.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-QLVB3DYP.js",
      "chunk-BTM6K7XR.js",
      "chunk-KREUKUNO.js"
    ],
    "route": "/admin/council"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XQ7PLK7X.js",
      "chunk-VX4CVLAQ.js",
      "chunk-BTM6K7XR.js"
    ],
    "route": "/admin/news"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24118, hash: '27d2238452ff8d8d6e73d38256d5aa19191402e4b98c89d1d6892266a409d0f1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17345, hash: 'ed6767e57c4af215c87748fa9325a2a865dd79b511bd7850d3c202bb42c57490', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 61575, hash: '524db1a9503d4753a71301d98dc321bc552f95c16317a8badac940013b6f82bb', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'sports/index.html': {size: 57752, hash: '182b321a349d6c27d8e95fb492e1f2211eac1197f246986bd36c0c17a7bd9442', text: () => import('./assets-chunks/sports_index_html.mjs').then(m => m.default)},
    'sports/basketball/index.html': {size: 54897, hash: '846d6f02e13e1c3a1bfd33d29181fb2440c6af3e31efc0a7c71e00fd9844ce61', text: () => import('./assets-chunks/sports_basketball_index_html.mjs').then(m => m.default)},
    'sports/tennis/index.html': {size: 54684, hash: 'c2d84bc3fd7da292cde9699ac2d0f062b715235b63cd028782403fbc2891323e', text: () => import('./assets-chunks/sports_tennis_index_html.mjs').then(m => m.default)},
    'sports/cricket/index.html': {size: 54874, hash: '9c593717e801bfe23063f5ca02321000854a903be8454c2a2d610fc6f69a04a1', text: () => import('./assets-chunks/sports_cricket_index_html.mjs').then(m => m.default)},
    'sports/football/index.html': {size: 54885, hash: 'a6c2482380d337d58f32d2bb9d2bf401c46ee13837e5aaaf00f030b32a743d4e', text: () => import('./assets-chunks/sports_football_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 52121, hash: 'd7c763bcfc0a395d1945aa5b1371512156455890bad2e91884707cb2beff54c8', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'sports/volleyball/index.html': {size: 54701, hash: '91d4d08a89192a516d954b28c7a887ff89c365239ac0d7ef8ade437c0b658722', text: () => import('./assets-chunks/sports_volleyball_index_html.mjs').then(m => m.default)},
    'sports/badminton/index.html': {size: 54701, hash: 'efd3fee83a09e0e281dd606891350863303cad18dc9712f987dbc3d2b9b683b9', text: () => import('./assets-chunks/sports_badminton_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 58862, hash: '2c0a430cec115f4e9dc03247b7ca8279c7f9467031c958b143315e85e9d26c0d', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 55576, hash: '2f0a3ee2bd7c752947b43d7d643c114bcc271f034b555d9f9d4121c293cb944f', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'timeline/index.html': {size: 54296, hash: '2a9e968a9d5957b8770a4a6dd54ce52265785eda90c1dac26024ee616e458d54', text: () => import('./assets-chunks/timeline_index_html.mjs').then(m => m.default)},
    'admin/news/index.html': {size: 56651, hash: '71a9351a94c6dc67f82f88e46d32ff57a2eb22f4c4dfc5b82bd879c5cc93daac', text: () => import('./assets-chunks/admin_news_index_html.mjs').then(m => m.default)},
    'styles-UP2NVUR4.css': {size: 8125, hash: 'd4CGa5mTI2M', text: () => import('./assets-chunks/styles-UP2NVUR4_css.mjs').then(m => m.default)}
  },
};
