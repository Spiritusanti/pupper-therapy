(this["webpackJsonppupper-therapy"]=this["webpackJsonppupper-therapy"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(2),c=a.n(o),i=(a(9),a(3)),s=(a(10),function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Pupper therapy"),r.a.createElement("p",null,"Welcome to Pupper Therapy. A page full of dogs to distract from the day to day."))}),l=(a(11),function(e){var t=e.image;return r.a.createElement("div",{className:"image-card"},r.a.createElement("img",{src:t,alt:"dog",width:"450"}))}),u=(a(12),function(e){var t=e.images;return r.a.createElement("div",{className:"image-grid"},t?t.map((function(e,t){return r.a.createElement(l,{key:t,image:e})})):"loading...")}),m=(a(13),function(){var e=Object(n.useState)(),t=Object(i.a)(e,2),a=t[0],o=t[1];return Object(n.useEffect)((function(){fetch("https://dog.ceo/api/breeds/image/random/50").then((function(e){return e.json()})).then((function(e){return o(e.message)}))}),[o]),r.a.createElement("div",{className:"app"},r.a.createElement(s,{onChange:""}),r.a.createElement("div",{className:"grid-wrapper"},r.a.createElement(u,{images:a})))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.3aeb4642.chunk.js.map