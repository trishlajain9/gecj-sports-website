export default `<!DOCTYPE html><html lang="en"><head>
  <meta charset="utf-8">
  <title>Angularsports</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&amp;display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="stylesheet" href="styles.css"><style ng-app-id="ng">

.college-img-container[_ngcontent-ng-c2391801727] {
  width: 100%;
  text-align: center;
  background-color: #f5f5f5;
}
.college-img[_ngcontent-ng-c2391801727] {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
/*# sourceMappingURL=/app.component.css.map */</style><style ng-app-id="ng">

.nav-container[_ngcontent-ng-c1855032956] {
  display: flex;
  align-items: center;
  gap: 24px;
}
.logo-area[_ngcontent-ng-c1855032956] {
  display: flex;
  align-items: center;
  gap: 12px;
}
.college-name[_ngcontent-ng-c1855032956] {
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 2px;
  background:
    linear-gradient(
      90deg,
      #00f5ff 0%,
      #39e0ff 35%,
      #ffd36b 70%,
      #ff7b6b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  text-shadow: 0 6px 22px rgba(0, 230, 255, 0.09), 0 2px 8px rgba(0, 0, 0, 0.18);
}
.college-logo[_ngcontent-ng-c1855032956] {
  height: 50px;
  border-radius: 8px;
  background: #0a1224;
  padding: 2px;
}
.nav-links[_ngcontent-ng-c1855032956] {
  display: flex;
  gap: 18px;
  margin: 0 32px;
}
.nav-actions[_ngcontent-ng-c1855032956] {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-left: auto;
}
.admin-logo[_ngcontent-ng-c1855032956] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.25s ease;
}
.admin-logo[_ngcontent-ng-c1855032956]:hover, 
.admin-logo[_ngcontent-ng-c1855032956]:focus-visible {
  background: rgba(0, 230, 255, 0.12);
  border-color: #00e6ff;
  outline: none;
}
.navbar[_ngcontent-ng-c1855032956] {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background:
    linear-gradient(
      90deg,
      #0a1224 0%,
      #1b263b 100%);
  padding: 20px 0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.10);
}
.nav-container[_ngcontent-ng-c1855032956] {
  max-width: 1200px;
  margin: auto;
  position: relative;
}
.logo[_ngcontent-ng-c1855032956] {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
.logo[_ngcontent-ng-c1855032956]   img[_ngcontent-ng-c1855032956] {
  height: 50px;
}
.nav-links[_ngcontent-ng-c1855032956] {
  display: flex;
  justify-content: center;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}
.nav-links[_ngcontent-ng-c1855032956]   li[_ngcontent-ng-c1855032956] {
  position: relative;
}
.nav-links[_ngcontent-ng-c1855032956]   a[_ngcontent-ng-c1855032956] {
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}
.nav-links[_ngcontent-ng-c1855032956]   a[_ngcontent-ng-c1855032956]:hover, 
.nav-links[_ngcontent-ng-c1855032956]   a.active[_ngcontent-ng-c1855032956] {
  border: 2px solid #1976d2;
  background: rgba(33, 150, 243, 0.10);
  color: #fff;
}
/*# sourceMappingURL=/navbar.component.css.map */</style><style ng-app-id="ng">

.site-footer[_ngcontent-ng-c2019350193] {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background:
    linear-gradient(
      90deg,
      #0a1224 0%,
      #1b263b 100%);
  color: #fff;
  padding: 2rem 3rem 1.2rem 3rem;
  font-size: 1rem;
}
.footer-left[_ngcontent-ng-c2019350193], 
.footer-right[_ngcontent-ng-c2019350193] {
  display: flex;
  flex-direction: column;
}
.footer-left[_ngcontent-ng-c2019350193]   h4[_ngcontent-ng-c2019350193], 
.footer-right[_ngcontent-ng-c2019350193]   h4[_ngcontent-ng-c2019350193] {
  margin-bottom: 0.7rem;
  font-size: 1.1rem;
  color: #dad2d2;
}
.site-footer[_ngcontent-ng-c2019350193]   a[_ngcontent-ng-c2019350193] {
  color: #22D3EE;
  text-decoration: none;
  transition: color 0.2s;
  font-weight: 600;
}
.site-footer[_ngcontent-ng-c2019350193]   a[_ngcontent-ng-c2019350193]:hover {
  color: #1565c0;
}
@media (max-width: 700px) {
  .site-footer[_ngcontent-ng-c2019350193] {
    flex-direction: column;
    align-items: stretch;
    padding: 1.2rem 1rem 0.7rem 1rem;
    font-size: 0.95rem;
  }
  .footer-left[_ngcontent-ng-c2019350193], 
   .footer-right[_ngcontent-ng-c2019350193] {
    margin-bottom: 1.2rem;
  }
}
/*# sourceMappingURL=/footer.component.css.map */</style><style ng-app-id="ng">

.featured-sports-section[_ngcontent-ng-c2791235360] {
  max-width: 1200px;
  margin: 3rem auto 2rem auto;
  padding: 0 1.5rem;
  text-align: center;
}
.section-title[_ngcontent-ng-c2791235360] {
  font-size: 2.3rem;
  font-weight: 900;
  color: #22D3EE;
  margin-bottom: 0.5rem;
}
.section-desc[_ngcontent-ng-c2791235360] {
  color: #b2c2d6;
  font-size: 1.15rem;
  margin-bottom: 2.5rem;
}
.sports-grid[_ngcontent-ng-c2791235360] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem 2rem;
  justify-items: center;
}
.flip-card[_ngcontent-ng-c2791235360] {
  width: 320px;
  height: 340px;
  perspective: 1000px;
  cursor: pointer;
}
.flip-card-inner[_ngcontent-ng-c2791235360] {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);
}
.flip-card[_ngcontent-ng-c2791235360]:hover   .flip-card-inner[_ngcontent-ng-c2791235360] {
  transform: rotateY(180deg);
}
.flip-card-front[_ngcontent-ng-c2791235360], 
.flip-card-back[_ngcontent-ng-c2791235360] {
  position: absolute;
  inset: 0;
  border-radius: 22px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.8rem;
  text-align: center;
}
.flip-card-front[_ngcontent-ng-c2791235360] {
  background: #17213a;
  border: 1.5px solid rgba(34, 211, 238, 0.15);
  box-shadow: 0 4px 32px rgba(0, 188, 212, 0.13);
}
.flip-card-front[_ngcontent-ng-c2791235360]   .sport-img[_ngcontent-ng-c2791235360] {
  width: 130px;
  height: 100px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 1.2rem;
  box-shadow: 0 2px 16px rgba(0, 230, 255, 0.18);
}
.flip-card-front[_ngcontent-ng-c2791235360]   h3[_ngcontent-ng-c2791235360] {
  color: #d6f6fa;
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}
.flip-hint[_ngcontent-ng-c2791235360] {
  color: #22D3EE;
  font-size: 0.88rem;
  opacity: 0.7;
  letter-spacing: 0.04em;
}
.flip-card-back[_ngcontent-ng-c2791235360] {
  background:
    linear-gradient(
      135deg,
      #0e3a5c 0%,
      #17213a 60%,
      #0a2540 100%);
  border: 1.5px solid rgba(34, 211, 238, 0.35);
  box-shadow: 0 8px 40px rgba(0, 230, 255, 0.22);
  transform: rotateY(180deg);
  gap: 0.8rem;
}
.flip-card-back[_ngcontent-ng-c2791235360]   h3[_ngcontent-ng-c2791235360] {
  color: #22D3EE;
  font-size: 1.45rem;
  font-weight: 800;
  margin-bottom: 0.3rem;
}
.flip-card-back[_ngcontent-ng-c2791235360]   p[_ngcontent-ng-c2791235360] {
  color: #b2c2d6;
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0.5rem;
}
.sport-btn[_ngcontent-ng-c2791235360] {
  display: inline-block;
  background: #22D3EE;
  color: #0a2540;
  font-weight: 700;
  font-size: 1.05rem;
  border-radius: 2rem;
  padding: 0.55rem 2rem;
  text-decoration: none;
  box-shadow: 0 2px 12px rgba(0, 230, 255, 0.25);
  margin-top: 0.3rem;
  overflow: hidden;
  position: relative;
}
.sport-btn[_ngcontent-ng-c2791235360]   span[_ngcontent-ng-c2791235360] {
  display: block;
  position: relative;
  z-index: 10;
}
.sport-btn[_ngcontent-ng-c2791235360]:hover   span[_ngcontent-ng-c2791235360] {
  animation: _ngcontent-ng-c2791235360_sportMoveScaleUpInitial 0.3s forwards, _ngcontent-ng-c2791235360_sportMoveScaleUpEnd 0.3s forwards 0.3s;
}
@keyframes _ngcontent-ng-c2791235360_sportMoveScaleUpInitial {
  to {
    transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);
    opacity: 0;
  }
}
@keyframes _ngcontent-ng-c2791235360_sportMoveScaleUpEnd {
  from {
    transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
.sport-btn[_ngcontent-ng-c2791235360]::before {
  content: "";
  position: absolute;
  background: #0a2540;
  width: 120%;
  height: 0;
  padding-bottom: 120%;
  top: -110%;
  left: -10%;
  border-radius: 50%;
  transform: translate3d(0, 68%, 0) scale3d(0, 0, 0);
  z-index: 1;
}
.sport-btn[_ngcontent-ng-c2791235360]:hover::before {
  transform: translate3d(0, 0, 0) scale3d(1, 1, 1);
  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
}
.sport-btn[_ngcontent-ng-c2791235360]::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0a2540;
  transform: translate3d(0, -100%, 0);
  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);
  z-index: 2;
}
.sport-btn[_ngcontent-ng-c2791235360]:hover::after {
  transform: translate3d(0, 0, 0);
  transition-duration: 0.05s;
  transition-delay: 0.4s;
  transition-timing-function: linear;
}
@media (max-width: 900px) {
  .sports-grid[_ngcontent-ng-c2791235360] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .flip-card[_ngcontent-ng-c2791235360] {
    width: min(320px, 90vw);
    height: 320px;
  }
}
/*# sourceMappingURL=/sports.component.css.map */</style></head>
<body class="mat-typography"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],[]);</script>
  <app-root ng-version="19.2.14" _nghost-ng-c2391801727="" ngh="2" ng-server-context="ssg"><app-navbar _ngcontent-ng-c2391801727="" _nghost-ng-c1855032956="" ngh="0"><nav _ngcontent-ng-c1855032956="" class="navbar"><div _ngcontent-ng-c1855032956="" class="nav-container"><div _ngcontent-ng-c1855032956="" class="logo-area"><span _ngcontent-ng-c1855032956="" class="college-name">GECJ</span><img _ngcontent-ng-c1855032956="" src="assets/Logo/Gecjlogo.jpeg" alt="Logo" class="college-logo"></div><ul _ngcontent-ng-c1855032956="" class="nav-links"><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/home" routerlinkactive="active" ng-reflect-router-link="/home" ng-reflect-router-link-active="active" href="/home" class="" jsaction="click:;">Home</a></li><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/sports" routerlinkactive="active" ng-reflect-router-link="/sports" ng-reflect-router-link-active="active" href="/sports" class="active" jsaction="click:;">Sports</a></li><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/timeline" routerlinkactive="active" ng-reflect-router-link="/timeline" ng-reflect-router-link-active="active" href="/timeline" class="" jsaction="click:;">Events Timeline</a></li><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/gallery" routerlinkactive="active" ng-reflect-router-link="/gallery" ng-reflect-router-link-active="active" href="/gallery" class="" jsaction="click:;">Gallery</a></li><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/contact" routerlinkactive="active" ng-reflect-router-link="/contact" ng-reflect-router-link-active="active" href="/contact" class="" jsaction="click:;">Contact Us</a></li></ul></div></nav></app-navbar><main _ngcontent-ng-c2391801727="" class="main-content"><router-outlet _ngcontent-ng-c2391801727=""></router-outlet><app-sports _nghost-ng-c2791235360="" ngh="1"><section _ngcontent-ng-c2791235360="" class="featured-sports-section"><h2 _ngcontent-ng-c2791235360="" class="section-title">Featured Sports</h2><p _ngcontent-ng-c2791235360="" class="section-desc">Discover a wide range of sports activities and join the GECJ sports community.</p><div _ngcontent-ng-c2791235360="" class="sports-grid"><div _ngcontent-ng-c2791235360="" class="flip-card"><div _ngcontent-ng-c2791235360="" class="flip-card-inner"><div _ngcontent-ng-c2791235360="" class="flip-card-front"><img _ngcontent-ng-c2791235360="" class="sport-img" src="assets/sports/basketball/B1.jpeg" alt="Image of Basketball" title="Basketball"><h3 _ngcontent-ng-c2791235360="">Basketball</h3><span _ngcontent-ng-c2791235360="" class="flip-hint">Hover to explore</span></div><div _ngcontent-ng-c2791235360="" class="flip-card-back"><h3 _ngcontent-ng-c2791235360="">Basketball</h3><p _ngcontent-ng-c2791235360="">Where the court becomes a battleground. Play bold, lead fearless and let your victory echo across campus.</p><a _ngcontent-ng-c2791235360="" class="sport-btn" ng-reflect-router-link="/sports,basketball" href="/sports/basketball" jsaction="click:;"><span _ngcontent-ng-c2791235360="">View Details</span></a></div></div></div><div _ngcontent-ng-c2791235360="" class="flip-card"><div _ngcontent-ng-c2791235360="" class="flip-card-inner"><div _ngcontent-ng-c2791235360="" class="flip-card-front"><img _ngcontent-ng-c2791235360="" class="sport-img" src="assets/sports/Carrom/C1.jpeg" alt="Image of Carrom" title="Carrom"><h3 _ngcontent-ng-c2791235360="">Carrom</h3><span _ngcontent-ng-c2791235360="" class="flip-hint">Hover to explore</span></div><div _ngcontent-ng-c2791235360="" class="flip-card-back"><h3 _ngcontent-ng-c2791235360="">Carrom</h3><p _ngcontent-ng-c2791235360="">Master precision and strategy as every strike sharpens focus. Read the board, control the pace, and own the final move.</p><a _ngcontent-ng-c2791235360="" class="sport-btn" ng-reflect-router-link="/sports,carrom" href="/sports/carrom" jsaction="click:;"><span _ngcontent-ng-c2791235360="">View Details</span></a></div></div></div><div _ngcontent-ng-c2791235360="" class="flip-card"><div _ngcontent-ng-c2791235360="" class="flip-card-inner"><div _ngcontent-ng-c2791235360="" class="flip-card-front"><img _ngcontent-ng-c2791235360="" class="sport-img" src="assets/sports/cricket/CR1.jpg" alt="Image of Cricket" title="Cricket"><h3 _ngcontent-ng-c2791235360="">Cricket</h3><span _ngcontent-ng-c2791235360="" class="flip-hint">Hover to explore</span></div><div _ngcontent-ng-c2791235360="" class="flip-card-back"><h3 _ngcontent-ng-c2791235360="">Cricket</h3><p _ngcontent-ng-c2791235360="">Where every run carries pride and every wicket builds legacy. Stand tall and turn pressure into pure dominance.</p><a _ngcontent-ng-c2791235360="" class="sport-btn" ng-reflect-router-link="/sports,cricket" href="/sports/cricket" jsaction="click:;"><span _ngcontent-ng-c2791235360="">View Details</span></a></div></div></div><div _ngcontent-ng-c2791235360="" class="flip-card"><div _ngcontent-ng-c2791235360="" class="flip-card-inner"><div _ngcontent-ng-c2791235360="" class="flip-card-front"><img _ngcontent-ng-c2791235360="" class="sport-img" src="assets/sports/Chess/CH1.jpg" alt="Image of Chess" title="Chess"><h3 _ngcontent-ng-c2791235360="">Chess</h3><span _ngcontent-ng-c2791235360="" class="flip-hint">Hover to explore</span></div><div _ngcontent-ng-c2791235360="" class="flip-card-back"><h3 _ngcontent-ng-c2791235360="">Chess</h3><p _ngcontent-ng-c2791235360="">Think three moves ahead with calm confidence and sharp tactics. Build your attack, guard your king, and checkmate with purpose.</p><a _ngcontent-ng-c2791235360="" class="sport-btn" ng-reflect-router-link="/sports,chess" href="/sports/chess" jsaction="click:;"><span _ngcontent-ng-c2791235360="">View Details</span></a></div></div></div><div _ngcontent-ng-c2791235360="" class="flip-card"><div _ngcontent-ng-c2791235360="" class="flip-card-inner"><div _ngcontent-ng-c2791235360="" class="flip-card-front"><img _ngcontent-ng-c2791235360="" class="sport-img" src="assets/sports/Badminton/ba1.jpg" alt="Image of Badminton" title="Badminton"><h3 _ngcontent-ng-c2791235360="">Badminton</h3><span _ngcontent-ng-c2791235360="" class="flip-hint">Hover to explore</span></div><div _ngcontent-ng-c2791235360="" class="flip-card-back"><h3 _ngcontent-ng-c2791235360="">Badminton</h3><p _ngcontent-ng-c2791235360="">Strike with lightning speed and unshakable determination. Smash with pride, move with purpose and claim every rally as yours.</p><a _ngcontent-ng-c2791235360="" class="sport-btn" ng-reflect-router-link="/sports,badminton" href="/sports/badminton" jsaction="click:;"><span _ngcontent-ng-c2791235360="">View Details</span></a></div></div></div><div _ngcontent-ng-c2791235360="" class="flip-card"><div _ngcontent-ng-c2791235360="" class="flip-card-inner"><div _ngcontent-ng-c2791235360="" class="flip-card-front"><img _ngcontent-ng-c2791235360="" class="sport-img" src="assets/sports/Volleyball/V1.jpg" alt="Image of Volleyball" title="Volleyball"><h3 _ngcontent-ng-c2791235360="">Volleyball</h3><span _ngcontent-ng-c2791235360="" class="flip-hint">Hover to explore</span></div><div _ngcontent-ng-c2791235360="" class="flip-card-back"><h3 _ngcontent-ng-c2791235360="">Volleyball</h3><p _ngcontent-ng-c2791235360="">Rise above the net with unity, power and fearless spirit. Block strong, strike harder and lead your team to championship glory.</p><a _ngcontent-ng-c2791235360="" class="sport-btn" ng-reflect-router-link="/sports,volleyball" href="/sports/volleyball" jsaction="click:;"><span _ngcontent-ng-c2791235360="">View Details</span></a></div></div></div><!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--></div></section></app-sports><!--container--></main><app-footer _ngcontent-ng-c2391801727="" _nghost-ng-c2019350193="" ngh="0"><footer _ngcontent-ng-c2019350193="" class="site-footer"><div _ngcontent-ng-c2019350193="" class="footer-left"><h4 _ngcontent-ng-c2019350193="">Quick Links</h4><ul _ngcontent-ng-c2019350193=""><li _ngcontent-ng-c2019350193=""><a _ngcontent-ng-c2019350193="" routerlink="/contact" ng-reflect-router-link="/contact" href="/contact" jsaction="click:;">Contact Us</a></li><li _ngcontent-ng-c2019350193=""><a _ngcontent-ng-c2019350193="" routerlink="/sports" ng-reflect-router-link="/sports" href="/sports" jsaction="click:;">Sports</a></li></ul></div><div _ngcontent-ng-c2019350193="" class="footer-right"><h4 _ngcontent-ng-c2019350193="">Connect</h4><ul _ngcontent-ng-c2019350193=""><li _ngcontent-ng-c2019350193=""><a _ngcontent-ng-c2019350193="" href="mailto:abhishek11_soni@yahoo.co.in">abhishek11_soni@yahoo.co.in</a></li><li _ngcontent-ng-c2019350193=""><a _ngcontent-ng-c2019350193="" href="https://www.facebook.com/profile.php?id=61585274101643" target="_blank" rel="noopener">Facebook</a></li></ul></div></footer></app-footer></app-root>
<link rel="modulepreload" href="chunk-K7CTBRBP.js"><link rel="modulepreload" href="chunk-7E6OIKHZ.js"><link rel="modulepreload" href="chunk-QKIANUNH.js"><link rel="modulepreload" href="chunk-QOX7GY5A.js"><link rel="modulepreload" href="chunk-WDMUDEB6.js"><script src="polyfills.js" type="module"></script><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-HTBNIJA7.js">


<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"6":"t0"},"c":{"6":[{"i":"t0","r":1,"x":6}]}},{"c":{"2":[{"i":"c2791235360","r":1}]}}]}</script></body></html>`;