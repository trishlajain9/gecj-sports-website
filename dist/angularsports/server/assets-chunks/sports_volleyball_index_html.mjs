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

.sport-detail[_ngcontent-ng-c1831875386] {
  max-width: 980px;
  margin: 0 auto;
  padding: 100px 16px 40px;
  color: #e6f4ff;
}
.back[_ngcontent-ng-c1831875386] {
  color: #93c5fd;
  text-decoration: none;
  font-weight: 700;
}
.back[_ngcontent-ng-c1831875386]:hover {
  text-decoration: underline;
}
.title[_ngcontent-ng-c1831875386] {
  margin: 10px 0 12px;
  font-size: 2rem;
  font-weight: 900;
  color: #98e1ff;
}
.img-wrap[_ngcontent-ng-c1831875386] {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, .35);
  background: #0f1e33;
}
.img-wrap[_ngcontent-ng-c1831875386]   img[_ngcontent-ng-c1831875386] {
  width: 100%;
  height: auto;
  display: block;
}
.desc[_ngcontent-ng-c1831875386] {
  margin-top: 16px;
  font-size: 1.05rem;
  color: #cbe3ff;
}
.gallery[_ngcontent-ng-c1831875386] {
  margin-top: 18px;
}
.gallery-title[_ngcontent-ng-c1831875386] {
  font-size: 1.4rem;
  font-weight: 800;
  color: #98e1ff;
  margin: 12px 0;
}
.photos[_ngcontent-ng-c1831875386] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
}
.photos[_ngcontent-ng-c1831875386]   img[_ngcontent-ng-c1831875386] {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 6px 22px rgba(0, 0, 0, .35);
  background: #0f1e33;
}
@media (max-width: 700px) {
  .title[_ngcontent-ng-c1831875386] {
    font-size: 1.6rem;
  }
}
/*# sourceMappingURL=/sport-detail.component.css.map */</style></head>
<body class="mat-typography"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click"],["error"]);</script>
  <app-root ng-version="19.2.14" _nghost-ng-c2391801727="" ngh="2" ng-server-context="ssg"><app-navbar _ngcontent-ng-c2391801727="" _nghost-ng-c1855032956="" ngh="0"><nav _ngcontent-ng-c1855032956="" class="navbar"><div _ngcontent-ng-c1855032956="" class="nav-container"><div _ngcontent-ng-c1855032956="" class="logo-area"><span _ngcontent-ng-c1855032956="" class="college-name">GECJ</span><img _ngcontent-ng-c1855032956="" src="assets/Logo/Gecjlogo.jpeg" alt="Logo" class="college-logo"></div><ul _ngcontent-ng-c1855032956="" class="nav-links"><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/home" routerlinkactive="active" ng-reflect-router-link="/home" ng-reflect-router-link-active="active" href="/home" class="" jsaction="click:;">Home</a></li><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/sports" routerlinkactive="active" ng-reflect-router-link="/sports" ng-reflect-router-link-active="active" href="/sports" class="active" jsaction="click:;">Sports</a></li><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/timeline" routerlinkactive="active" ng-reflect-router-link="/timeline" ng-reflect-router-link-active="active" href="/timeline" class="" jsaction="click:;">Events Timeline</a></li><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/gallery" routerlinkactive="active" ng-reflect-router-link="/gallery" ng-reflect-router-link-active="active" href="/gallery" class="" jsaction="click:;">Gallery</a></li><li _ngcontent-ng-c1855032956=""><a _ngcontent-ng-c1855032956="" routerlink="/contact" routerlinkactive="active" ng-reflect-router-link="/contact" ng-reflect-router-link-active="active" href="/contact" class="" jsaction="click:;">Contact Us</a></li></ul></div></nav></app-navbar><main _ngcontent-ng-c2391801727="" class="main-content"><router-outlet _ngcontent-ng-c2391801727=""></router-outlet><app-sport-detail _nghost-ng-c1831875386="" ngh="1"><section _ngcontent-ng-c1831875386="" class="sport-detail"><a _ngcontent-ng-c1831875386="" routerlink="/sports" class="back" ng-reflect-router-link="/sports" href="/sports" jsaction="click:;">← Back to Sports</a><h1 _ngcontent-ng-c1831875386="" class="title">Volleyball</h1><div _ngcontent-ng-c1831875386="" class="img-wrap"><img _ngcontent-ng-c1831875386="" src="assets/sports/Volleyball/V1.jpg" alt="Volleyball image" jsaction="error:;"></div><p _ngcontent-ng-c1831875386="" class="desc">Work together to spike, block, and set your way to the national level.</p><div _ngcontent-ng-c1831875386="" class="gallery"><h2 _ngcontent-ng-c1831875386="" class="gallery-title">Photos</h2><div _ngcontent-ng-c1831875386="" class="photos"><img _ngcontent-ng-c1831875386="" src="assets/sports/Volleyball/V1.jpg" alt="Volleyball photo 1" jsaction="error:;"><img _ngcontent-ng-c1831875386="" src="assets/sports/Volleyball/V2.jpg" alt="Volleyball photo 2" jsaction="error:;"><img _ngcontent-ng-c1831875386="" src="assets/sports/Volleyball/V3.jpg" alt="Volleyball photo 3" jsaction="error:;"><!--bindings={
  "ng-reflect-ng-for-of": "assets/sports/Volleyball/V1.jp"
}--></div></div><!--bindings={
  "ng-reflect-ng-if": "3"
}--></section><!--bindings={
  "ng-reflect-ng-if-else": "[object Object]"
}--><!--container--></app-sport-detail><!--container--></main><app-footer _ngcontent-ng-c2391801727="" _nghost-ng-c2019350193="" ngh="0"><footer _ngcontent-ng-c2019350193="" class="site-footer"><div _ngcontent-ng-c2019350193="" class="footer-left"><h4 _ngcontent-ng-c2019350193="">Quick Links</h4><ul _ngcontent-ng-c2019350193=""><li _ngcontent-ng-c2019350193=""><a _ngcontent-ng-c2019350193="" routerlink="/contact" ng-reflect-router-link="/contact" href="/contact" jsaction="click:;">Contact Us</a></li><li _ngcontent-ng-c2019350193=""><a _ngcontent-ng-c2019350193="" routerlink="/sports" ng-reflect-router-link="/sports" href="/sports" jsaction="click:;">Sports</a></li></ul></div><div _ngcontent-ng-c2019350193="" class="footer-right"><h4 _ngcontent-ng-c2019350193="">Connect</h4><ul _ngcontent-ng-c2019350193=""><li _ngcontent-ng-c2019350193=""><a _ngcontent-ng-c2019350193="" href="mailto:abhishek11_soni@yahoo.co.in">abhishek11_soni@yahoo.co.in</a></li><li _ngcontent-ng-c2019350193=""><a _ngcontent-ng-c2019350193="" href="https://www.facebook.com/profile.php?id=61585274101643" target="_blank" rel="noopener">Facebook</a></li></ul></div></footer></app-footer></app-root>
<link rel="modulepreload" href="chunk-K7CTBRBP.js"><link rel="modulepreload" href="chunk-7E6OIKHZ.js"><link rel="modulepreload" href="chunk-QKIANUNH.js"><link rel="modulepreload" href="chunk-QOX7GY5A.js"><link rel="modulepreload" href="chunk-WDMUDEB6.js"><script src="polyfills.js" type="module"></script><script src="main.js" type="module"></script>
<link rel="modulepreload" href="chunk-GUG3TMRU.js">


<script id="ng-state" type="application/json">{"__nghData__":[{},{"t":{"0":"t1","1":"t4"},"c":{"0":[{"i":"t1","r":1,"t":{"9":"t2"},"c":{"9":[{"i":"t2","r":1,"t":{"4":"t3"},"c":{"4":[{"i":"t3","r":1,"x":3}]}}]}}],"1":[]}},{"c":{"2":[{"i":"c1831875386","r":1}]}}]}</script></body></html>`;