(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"4F7W":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Typescript Starter Minimalist"}}}}')},"8+s/":function(e,t,r){"use strict";r("V+eJ"),r("bWfx"),r("f3/d"),r("hHhE"),r("HAE/");var n,a=r("q1tI"),o=(n=a)&&"object"==typeof n&&"default"in n?n.default:n;function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):r&&(u=r(u))}var f=function(e){var t,r;function a(){return e.apply(this,arguments)||this}r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var i=a.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),s()},i.componentDidUpdate=function(){s()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},i.render=function(){return o.createElement(n,this.props)},a}(a.PureComponent);return i(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),i(f,"canUseDOM",c),f}}},A61Z:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"navItems":[{"title":"Home","url":"/","isRelative":true},{"title":"Style Builder","url":"/style-builder","isRelative":true}]}}}}')},Ac47:function(e,t,r){"use strict";var n=r("q1tI"),a=r.n(n),o=r("4F7W"),i=function(e){var t=e.width;return a.a.createElement("svg",{viewBox:"0 0 135.467 135.467",width:t},a.a.createElement("defs",{id:"prefix__defs2"},a.a.createElement("linearGradient",{id:"prefix__linearGradient2393"},a.a.createElement("stop",{offset:0,id:"prefix__stop2391",stopColor:"#f60",stopOpacity:1}))),a.a.createElement("g",{id:"prefix__layer1",transform:"translate(30.89 -192.422)"},a.a.createElement("circle",{id:"prefix__path2444",cx:45.689,cy:249.113,r:56.772,fill:"#fff",fillOpacity:1,fillRule:"nonzero",stroke:"none",strokeWidth:.222}),a.a.createElement("path",{id:"prefix__path815",d:"M45.689 194.559c-30.132 0-54.555 24.423-54.555 54.554 0 30.132 24.423 54.555 54.555 54.555 30.131 0 54.554-24.423 54.554-54.555 0-30.131-24.423-54.554-54.554-54.554zM2.857 249.68l42.264 42.264c-23.21-.301-41.963-19.055-42.264-42.264zm52.42 41.195l-51.35-51.351c4.355-19.042 21.398-33.252 41.762-33.252 14.232 0 26.845 6.943 34.635 17.627l-5.93 5.233c-6.32-9.06-16.821-14.991-28.705-14.991-15.131 0-28.02 9.61-32.89 23.06L57.599 282c10.88-3.941 19.247-13.124 22.049-24.498H61.082v-8.388h27.452c-.005 20.364-14.215 37.407-33.257 41.763z",fill:"#744c9e",strokeWidth:.044}),a.a.createElement("path",{d:"M-26.274 271.1v5.319h16.967v48.29h12.04v-48.29H19.7v-5.22c0-2.937 0-5.32-.13-5.384 0-.098-10.344-.13-22.906-.13l-22.84.097v5.351zm76.254-5.448c3.328.783 5.873 2.284 8.157 4.665 1.207 1.306 3.002 3.59 3.132 4.177 0 .196-5.645 4.013-9.07 6.134-.131.098-.653-.457-1.175-1.305-1.697-2.415-3.426-3.459-6.135-3.654-3.915-.262-6.525 1.794-6.525 5.22 0 1.044.195 1.632.587 2.48.881 1.794 2.512 2.871 7.57 5.09 9.332 4.013 13.378 6.656 15.825 10.441 2.773 4.242 3.393 10.898 1.533 15.89-2.088 5.45-7.178 9.136-14.454 10.344-2.284.391-7.505.326-9.952-.098-5.22-.98-10.213-3.59-13.28-6.95-1.207-1.305-3.524-4.797-3.393-5.025l1.24-.783 4.894-2.839 3.687-2.153.848 1.142c1.077 1.696 3.492 3.98 4.895 4.763 4.241 2.187 9.919 1.893 12.725-.652 1.207-1.11 1.73-2.284 1.73-3.916 0-1.5-.23-2.186-.98-3.328-1.044-1.435-3.132-2.61-9.005-5.22-6.754-2.872-9.626-4.699-12.301-7.505-1.534-1.697-2.937-4.34-3.59-6.526-.489-1.892-.652-6.525-.195-8.385 1.403-6.526 6.33-11.094 13.378-12.399 2.284-.457 7.667-.261 9.919.326z",id:"prefix__path2462",fill:"#007acc",fillOpacity:1,stroke:"#fff",strokeWidth:1,strokeMiterlimit:4,strokeDasharray:"none",strokeOpacity:1})),a.a.createElement("style",{id:"style842"}),a.a.createElement("style",{id:"style2458"}))},c=r("A61Z"),u=r("Wbzz"),l=r("bD4J"),s=r.n(l),f=function(){var e=c.data.site.siteMetadata.navItems;return a.a.createElement("ul",{className:s.a.navWrapper},e.map((function(e,t){return e.isRelative?a.a.createElement(u.Link,{className:s.a.navItem,key:t,to:e.url},a.a.createElement("li",null,e.title)):a.a.createElement("a",{className:s.a.navItem,key:t,href:e.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement("li",null,e.title))})))},p=r("kGgR"),d=r.n(p),m=function(e){var t=e.shouldShowBigHeader,r=o.data.site.siteMetadata.title;return a.a.createElement("header",{className:d.a.bigHeader},a.a.createElement(f,null),t&&a.a.createElement("div",{className:d.a.logoImage},a.a.createElement(i,{width:"30vmin"})),a.a.createElement("h1",{className:d.a.logoText},r))},h=r("OwEJ"),y=r.n(h),b=function(){return a.a.createElement("div",{className:y.a.outer},a.a.createElement("footer",{className:y.a.inner},a.a.createElement("p",null,"Copyleft ",a.a.createElement("span",{className:y.a.copyleft},"©")," DL Ford 2020")))};r("Wotd"),r("wmEu"),t.a=function(e){var t=e.children,r=e.location;return a.a.createElement("div",{className:"page-wrapper"},a.a.createElement(m,{shouldShowBigHeader:"/"===r.pathname}),a.a.createElement("main",null,t),a.a.createElement(b,null))}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Gatsby Typescript Starter Minimalist","description":"A minimalist Gatsby Typescript starter","author":"DL Ford"}}}}')},H8eV:function(e,t,r){"use strict";r("f3/d"),r("a1Th"),r("Btvt"),r("XfO3"),r("HEwt"),r("rGqo"),r("rE2o"),r("ioFf");var n=r("EH9Q"),a=r("q1tI"),o=r.n(a),i=r("qhky");function c(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.a=function(e){var t=e.description,r=e.lang,a=void 0===r?"en":r,u=e.meta,l=e.title,s=n.data.site,f=t||s.siteMetadata.description,p=u||[];return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:f},{property:"og:title",content:l},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:f}].concat(c(p))})}},"HAE/":function(e,t,r){var n=r("XKFU");n(n.S+n.F*!r("nh4g"),"Object",{defineProperty:r("hswa").f})},OwEJ:function(e,t,r){e.exports={outer:"footer-module--outer--2JoXm",inner:"footer-module--inner--18AqQ",copyleft:"footer-module--copyleft--1ovir"}},Oyvg:function(e,t,r){var n=r("dyZX"),a=r("Xbzi"),o=r("hswa").f,i=r("kJMx").f,c=r("quPj"),u=r("C/va"),l=n.RegExp,s=l,f=l.prototype,p=/a/g,d=/a/g,m=new l(p)!==p;if(r("nh4g")&&(!m||r("eeVq")((function(){return d[r("K0xU")("match")]=!1,l(p)!=p||l(d)==d||"/a/i"!=l(p,"i")})))){l=function(e,t){var r=this instanceof l,n=c(e),o=void 0===t;return!r&&n&&e.constructor===l&&o?e:a(m?new s(n&&!o?e.source:e,t):s((n=e instanceof l)?e.source:e,n&&o?u.call(e):t),r?this:f,l)};for(var h=function(e){e in l||o(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},y=i(s),b=0;y.length>b;)h(y[b++]);f.constructor=l,l.prototype=f,r("KroJ")(n,"RegExp",l)}r("elZq")("RegExp")},Wotd:function(e,t,r){},bD4J:function(e,t,r){e.exports={navWrapper:"nav-module--navWrapper--3Hwka",navItem:"nav-module--navItem--3avxQ"}},bmMU:function(e,t,r){"use strict";r("f3/d"),r("SRfc"),r("a1Th"),r("h7Nl"),r("Oyvg"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("LK8F");var n=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){var c,u,l,s=n(t),f=n(r);if(s&&f){if((u=t.length)!=r.length)return!1;for(c=u;0!=c--;)if(!e(t[c],r[c]))return!1;return!0}if(s!=f)return!1;var p=t instanceof Date,d=r instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==r.getTime();var m=t instanceof RegExp,h=r instanceof RegExp;if(m!=h)return!1;if(m&&h)return t.toString()==r.toString();var y=a(t);if((u=y.length)!==a(r).length)return!1;for(c=u;0!=c--;)if(!o.call(r,y[c]))return!1;if(i&&t instanceof Element&&r instanceof Element)return t===r;for(c=u;0!=c--;)if(!("_owner"===(l=y[c])&&t.$$typeof||e(t[l],r[l])))return!1;return!0}return t!=t&&r!=r}(e,t)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||-2146828260===r.number)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}}},h7Nl:function(e,t,r){var n=Date.prototype,a=n.toString,o=n.getTime;new Date(NaN)+""!="Invalid Date"&&r("KroJ")(n,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},kGgR:function(e,t,r){e.exports={bigHeader:"header-module--bigHeader--5UjSW",logoText:"header-module--logoText--3jlSd",logoImage:"header-module--logoImage--3-YMb"}},qhky:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return he}));r("dZ+Y"),r("KKXr"),r("2Spj"),r("eM6i"),r("8+KV"),r("0l/t"),r("LK8F"),r("pIFo"),r("V+eJ"),r("/SS/"),r("hHhE"),r("91GP"),r("HAE/"),r("rE2o"),r("ioFf"),r("DNiP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("bWfx");var n,a,o,i,c=r("17x9"),u=r.n(c),l=r("8+s/"),s=r.n(l),f=r("bmMU"),p=r.n(f),d=r("q1tI"),m=r.n(d),h=r("MgzW"),y=r.n(h),b="bodyAttributes",v="htmlAttributes",g="titleAttributes",T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(T).map((function(e){return T[e]})),"charset"),E="cssText",A="href",O="http-equiv",S="innerHTML",C="itemprop",x="name",j="property",k="rel",I="src",P="target",M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",N="defer",R="encodeSpecialCharacters",H="onChangeClientState",_="titleTemplate",q=Object.keys(M).reduce((function(e,t){return e[M[t]]=t,e}),{}),D=[T.NOSCRIPT,T.SCRIPT,T.STYLE],F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Y=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},z=function(e){var t=Q(e,T.TITLE),r=Q(e,_);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=Q(e,L);return t||n||void 0},G=function(e){return Q(e,H)||function(){}},V=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},X=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),a=0;a<n.length;a++){var o=n[a].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},Z=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var a={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),i=0;i<o.length;i++){var c=o[i],u=c.toLowerCase();-1===t.indexOf(u)||r===k&&"canonical"===e[r].toLowerCase()||u===k&&"stylesheet"===e[u].toLowerCase()||(r=u),-1===t.indexOf(c)||c!==S&&c!==E&&c!==C||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),a[r]||(a[r]={}),!n[r][l]&&(a[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(a),i=0;i<o.length;i++){var c=o[i],u=y()({},n[c],a[c]);n[c]=u}return e}),[]).reverse()},Q=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:e.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ae=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;ue(T.BODY,n),ue(T.HTML,a),ce(f,p);var d={baseTag:le(T.BASE,r),linkTags:le(T.LINK,o),metaTags:le(T.META,i),noscriptTags:le(T.NOSCRIPT,c),scriptTags:le(T.SCRIPT,l),styleTags:le(T.STYLE,s)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),u(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ue(T.TITLE,t)},ue=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute("data-react-helmet"),a=n?n.split(","):[],o=[].concat(a),i=Object.keys(t),c=0;c<i.length;c++){var u=i[c],l=t[u]||"";r.getAttribute(u)!==l&&r.setAttribute(u,l),-1===a.indexOf(u)&&a.push(u);var s=o.indexOf(u);-1!==s&&o.splice(s,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);a.length===o.length?r.removeAttribute("data-react-helmet"):r.getAttribute("data-react-helmet")!==i.join(",")&&r.setAttribute("data-react-helmet",i.join(","))}},le=function(e,t){var r=document.head||document.querySelector(T.HEAD),n=r.querySelectorAll(e+"[data-react-helmet]"),a=Array.prototype.slice.call(n),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===S)r.innerHTML=t.innerHTML;else if(n===E)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute("data-react-helmet","true"),a.some((function(e,t){return i=t,r.isEqualNode(e)}))?a.splice(i,1):o.push(r)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:a,newTags:o}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[M[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case T.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})["data-react-helmet"]=!0,a=fe(r,n),[m.a.createElement(T.TITLE,a,e)];var e,r,n,a},toString:function(){return function(e,t,r,n){var a=se(r),o=ie(t);return a?"<"+e+' data-react-helmet="true" '+a+">"+Y(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Y(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case b:case v:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,a=((n={key:r})["data-react-helmet"]=!0,n);return Object.keys(t).forEach((function(e){var r=M[e]||e;if(r===S||r===E){var n=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:n}}else a[r]=t[e]})),m.a.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var a=Object.keys(n).filter((function(e){return!(e===S||e===E)})).reduce((function(e,t){var a=void 0===n[t]?t:t+'="'+Y(n[t],r)+'"';return e?e+" "+a:a}),""),o=n.innerHTML||n.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:pe(T.BASE,t,n),bodyAttributes:pe(b,r,n),htmlAttributes:pe(v,a,n),link:pe(T.LINK,o,n),meta:pe(T.META,i,n),noscript:pe(T.NOSCRIPT,c,n),script:pe(T.SCRIPT,u,n),style:pe(T.STYLE,l,n),title:pe(T.TITLE,{title:f,titleAttributes:p},n)}},me=s()((function(e){return{baseTag:X([A,P],e),bodyAttributes:V(b,e),defer:Q(e,N),encode:Q(e,R),htmlAttributes:V(v,e),linkTags:Z(T.LINK,[k,A],e),metaTags:Z(T.META,[x,w,O,j,C],e),noscriptTags:Z(T.NOSCRIPT,[S],e),onChangeClientState:G(e),scriptTags:Z(T.SCRIPT,[I,S],e),styleTags:Z(T.STYLE,[E],e),title:z(e),titleAttributes:V(g,e)}}),(function(e){ae&&re(ae),e.defer?ae=te((function(){oe(e,(function(){ae=null}))})):(oe(e),ae=null)}),de)((function(){return null})),he=(a=me,i=o=function(e){function t(){return W(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,a=e.newChildProps,o=e.nestedChildren;return J({},n,((t={})[r.type]=[].concat(n[r.type]||[],[J({},a,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,a=e.newProps,o=e.newChildProps,i=e.nestedChildren;switch(n.type){case T.TITLE:return J({},a,((t={})[n.type]=i,t.titleAttributes=J({},o),t));case T.BODY:return J({},a,{bodyAttributes:J({},o)});case T.HTML:return J({},a,{htmlAttributes:J({},o)})}return J({},a,((r={})[n.type]=J({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=J({},t);return Object.keys(e).forEach((function(t){var n;r=J({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return m.a.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[q[r]||r]=e[r],t}),t)}(K(a,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:i,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=K(e,["children"]),n=J({},r);return t&&(n=this.mapChildrenToProps(t,n)),m.a.createElement(a,n)},B(t,null,[{key:"canUseDOM",set:function(e){a.canUseDOM=e}}]),t}(m.a.Component),o.propTypes={base:u.a.object,bodyAttributes:u.a.object,children:u.a.oneOfType([u.a.arrayOf(u.a.node),u.a.node]),defaultTitle:u.a.string,defer:u.a.bool,encodeSpecialCharacters:u.a.bool,htmlAttributes:u.a.object,link:u.a.arrayOf(u.a.object),meta:u.a.arrayOf(u.a.object),noscript:u.a.arrayOf(u.a.object),onChangeClientState:u.a.func,script:u.a.arrayOf(u.a.object),style:u.a.arrayOf(u.a.object),title:u.a.string,titleAttributes:u.a.object,titleTemplate:u.a.string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=a.peek,o.rewind=function(){var e=a.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind}).call(this,r("yLpj"))},wmEu:function(e,t,r){},yLpj:function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"==typeof window&&(r=window)}e.exports=r}}]);
//# sourceMappingURL=a3336d3c033a5ec9d59a088cb032c68b95c64a61-b5677b99c04bb28b43aa.js.map