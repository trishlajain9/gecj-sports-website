
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
      "chunk-GCTGHX4S.js",
      "chunk-RZ3A3WTV.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DAG3F42O.js"
    ],
    "route": "/sports"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7T5CULVA.js"
    ],
    "route": "/sports/basketball"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7T5CULVA.js"
    ],
    "route": "/sports/football"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7T5CULVA.js"
    ],
    "route": "/sports/cricket"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7T5CULVA.js"
    ],
    "route": "/sports/tennis"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7T5CULVA.js"
    ],
    "route": "/sports/badminton"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7T5CULVA.js"
    ],
    "route": "/sports/volleyball"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7T5CULVA.js"
    ],
    "route": "/sports/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E7TIGVD4.js"
    ],
    "route": "/events"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J5NY4IUI.js",
      "chunk-GHJ2HA2E.js"
    ],
    "route": "/timeline"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N23BLQB4.js"
    ],
    "route": "/gallery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-T6KMO6FV.js",
      "chunk-QFF77G4P.js"
    ],
    "route": "/council"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RBSABZ6S.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-VY7HFS4X.js",
      "chunk-GHJ2HA2E.js",
      "chunk-QFF77G4P.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4VUU475M.js",
      "chunk-GHJ2HA2E.js",
      "chunk-QFF77G4P.js"
    ],
    "route": "/admin/council"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RD66X5FX.js",
      "chunk-RZ3A3WTV.js",
      "chunk-GHJ2HA2E.js"
    ],
    "route": "/admin/news"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24301, hash: 'f2a8f7feca3b59ef97769e1e99c0b34121c23b5602c93602bed8cfbf89ba0dbd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17345, hash: '89f1d8120299b2819264f79d170e23df0a856edbf24eed693d4bc348be52e5ed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'home/index.html': {size: 42243, hash: '2e31d6f0cf6afd15c7f54018bd99c1c4a217428cf2a4587cf9373926df32b2a8', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'sports/index.html': {size: 39868, hash: '9ac497718310d5a9e215edb3d8e71529fc889dc9be767bee404f5a0324d0e3c2', text: () => import('./assets-chunks/sports_index_html.mjs').then(m => m.default)},
    'sports/cricket/index.html': {size: 34413, hash: 'bdab83877bd57ff4f3cfb8bde72618bcb97c3ec6d1d50e46006550b6a71d263c', text: () => import('./assets-chunks/sports_cricket_index_html.mjs').then(m => m.default)},
    'sports/tennis/index.html': {size: 33616, hash: 'b9ec1db7fd64648f17a99486a687f6a825b59884f823e3068bdda67a89bed36f', text: () => import('./assets-chunks/sports_tennis_index_html.mjs').then(m => m.default)},
    'sports/volleyball/index.html': {size: 34428, hash: '1c36d833a161e9e84b131b26c40eec4595bf71a45bc7b6aa7b33356f996490d2', text: () => import('./assets-chunks/sports_volleyball_index_html.mjs').then(m => m.default)},
    'sports/badminton/index.html': {size: 34652, hash: '54fa60060e10e38d6f618c382d33094cc757f3b90f3d6248d4c7f5e209ef2be9', text: () => import('./assets-chunks/sports_badminton_index_html.mjs').then(m => m.default)},
    'timeline/index.html': {size: 34813, hash: '147171bc7c5c9dcdb2a665f6409e6bbcb0e5d3b1290e81e1dac4bae8d1f6cd06', text: () => import('./assets-chunks/timeline_index_html.mjs').then(m => m.default)},
    'events/index.html': {size: 31955, hash: 'ffd57e83311d1900c0714277fcadc870b55c81370434aec0699199517a980a03', text: () => import('./assets-chunks/events_index_html.mjs').then(m => m.default)},
    'sports/basketball/index.html': {size: 35583, hash: '7f5bd4b9b07838fbb5e0c7dc760066244feaf18942855aeac46a880139310b15', text: () => import('./assets-chunks/sports_basketball_index_html.mjs').then(m => m.default)},
    'gallery/index.html': {size: 41056, hash: 'efb370070341e66f6747698413fcc3f5a94f827a37ad30567a5c7e982b3a9c46', text: () => import('./assets-chunks/gallery_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 38696, hash: '7a806fa8106a432b073f3eef2d2d3be68718831d2476894177f43c8427c2c986', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'sports/football/index.html': {size: 33616, hash: '85e48ec2fda811bd2bdbd8f351e4ec647f86728c4522f536497adba128a4acc9', text: () => import('./assets-chunks/sports_football_index_html.mjs').then(m => m.default)},
    'admin/news/index.html': {size: 36485, hash: 'ee084063ed7e0171de3b48e0f313e6c7b0337aa831b10c03213bae8086dd4f42', text: () => import('./assets-chunks/admin_news_index_html.mjs').then(m => m.default)},
    'styles-KDT7V5BU.css': {size: 8023, hash: 'cgxSprzgfFc', text: () => import('./assets-chunks/styles-KDT7V5BU_css.mjs').then(m => m.default)}
  },
};
