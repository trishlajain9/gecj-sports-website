
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
      "chunk-E2G2WAFK.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I4O3IOVJ.js"
    ],
    "route": "/sports"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5SAJ3E7O.js"
    ],
    "route": "/sports/basketball"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5SAJ3E7O.js"
    ],
    "route": "/sports/football"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5SAJ3E7O.js"
    ],
    "route": "/sports/cricket"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5SAJ3E7O.js"
    ],
    "route": "/sports/tennis"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5SAJ3E7O.js"
    ],
    "route": "/sports/badminton"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5SAJ3E7O.js"
    ],
    "route": "/sports/volleyball"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5SAJ3E7O.js"
    ],
    "route": "/sports/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TDRRA6UA.js"
    ],
    "route": "/events"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-PF5WSILL.js",
      "chunk-PGXPSVGV.js"
    ],
    "route": "/timeline"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-UBYUXNJW.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NU37NBCF.js"
    ],
    "route": "/council"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-5GL6VVAB.js"
    ],
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24391, hash: 'd0fea97dc399d8e15aa6ed8a2353ec6ba10665df41f16ed3a013f50c1b7ac993', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17396, hash: 'eac384f4d6c08abd27a0448b2eb00d19c9fb5e714ab191df7f8842441af1b7e0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'sports/basketball/index.html': {size: 35130, hash: 'fb459dd154487efd872b42dc487d232d906544966804ead2c03d3c37380b39d0', text: () => import('./assets-chunks/sports_basketball_index_html.mjs').then(m => m.default)},
    'sports/cricket/index.html': {size: 33960, hash: '85f079953d8649a7ee4414121a097af7dcb23d7c901cc8367905ebdf4e79f5d3', text: () => import('./assets-chunks/sports_cricket_index_html.mjs').then(m => m.default)},
    'sports/football/index.html': {size: 33163, hash: '0cab817e2d42eda97d820629b576aff7ea1f82af7c68aea637d215c311d3711a', text: () => import('./assets-chunks/sports_football_index_html.mjs').then(m => m.default)},
    'sports/tennis/index.html': {size: 33163, hash: '98b796cd80366dd21136c183bd3a665285d0481ae2f2043acf39468785e68588', text: () => import('./assets-chunks/sports_tennis_index_html.mjs').then(m => m.default)},
    'sports/badminton/index.html': {size: 34199, hash: 'bf0e7883bb525dfb0b240a34f7fcc1ba751a839170418f1e5bccf8196bf8e977', text: () => import('./assets-chunks/sports_badminton_index_html.mjs').then(m => m.default)},
    'sports/volleyball/index.html': {size: 33975, hash: '3f7fbf1a90cae74ed947348af196e5b48c47e7ec30c1162288b39920d1c55557', text: () => import('./assets-chunks/sports_volleyball_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 31502, hash: 'b5b49746c6e3186d355f33a42ef3b165def26a3eaea1b3a0d38aa4a82437759c', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'sports/index.html': {size: 40879, hash: '683c67f05857a9e5b22fc8eb166ef1094ebce5cdbf7150be6469409d98c257d6', text: () => import('./assets-chunks/sports_index_html.mjs').then(m => m.default)},
    'styles-VXUAHAEJ.css': {size: 8062, hash: 'nTQG0ePmmNc', text: () => import('./assets-chunks/styles-VXUAHAEJ_css.mjs').then(m => m.default)}
  },
};
