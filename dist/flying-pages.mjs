var e,t=function(e,t){var n=!1;return function(){n||(e.apply(null,arguments),n=!0,setTimeout(function(){n=!1},t))}},n=function(e,t,n){return Math.floor(Math.sqrt(Math.pow(t-(e.offsetLeft+e.offsetWidth/2),2)+Math.pow(n-(e.offsetTop+e.offsetHeight/2),2)))},o=new Set,r=(e=document.createElement("link")).relList&&e.relList.supports&&e.relList.supports("prefetch")?function(e){return new Promise(function(t,n){var o=document.createElement("link");o.rel="prefetch",o.href=e,o.onload=t,o.onerror=n,document.head.appendChild(o)})}:function(e){return fetch(e,{credentials:"include"})},i=function(e,t,n){o.has(e)||(o.add(e),document.querySelector("a[href='"+e+"']").style.color="red",t(function(){r(e).then(n).catch(n)}))},c=function(e){e=e||1;var t=[],n=0;function o(){n<e&&t.length>0&&(t.shift()(),n++)}return[function(e){t.push(e)>1||o()},function(){n--,o()}]},a=window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,s=navigator.connection&&(navigator.connection.saveData||(navigator.connection.effectiveType||"").includes("2g")),u=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);function l(e){if(!s&&a){e=Object.assign({},{throttle:3,desktopPreloadMethod:"nearby-mouse",mobilePreloadMethod:"all-in-viewport",mouseProximity:200,excludeKeywords:[]},e);var o=new Set,r=c(e.throttle),l=r[0],d=r[1],f=u?e.mobilePreloadMethod:e.desktopPreloadMethod,h=new IntersectionObserver(function(e,t){e.forEach(function(e){"all-in-viewport"===f&&e.isIntersecting&&i(e.target.href,l,d),"nearby-mouse"===f&&(e.isIntersecting?o.add(e.target):o.delete(e.target))})});document.querySelectorAll("a[href^='"+window.location.origin+"']").forEach(function(t){var n=new RegExp(e.excludeKeywords.join("|"));e.excludeKeywords.length&&n.test(t.href)||h.observe(t)}),"nearby-mouse"===f&&document.addEventListener("mousemove",t(function(t){[].concat(o).forEach(function(o){n(o,t.pageX,t.pageY)<e.mouseProximity&&(i(o.href,l,d),o.style.color="red")})},300))}}export{l as listen};
