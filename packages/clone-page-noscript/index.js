(function(a,b,c){'use strict';function d(a){var b=a.String.prototype;b.endsWith||(b.endsWith=function(a,b){return(void 0===b||b>this.length)&&(b=this.length),this.slice(b-a.length,b)===a})}function e(a){var b=a.document,c=a.Object;(function(d){d.forEach(function(d){if(d){var e=d.prototype;if(c.prototype.hasOwnProperty.call(e,"append"))return;c.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var c=Array.prototype.slice.call(arguments),d=b.createDocumentFragment();c.forEach(function(c){var e=c instanceof a.Node;d.appendChild(e?c:b.createTextNode(c+""))}),this.appendChild(d)}})}})})([a.Element,a.Document,a.DocumentFragment])}function g(a){var b=a.Object;(function(a){a.forEach(function(a){if(a){var c=a.prototype;if(b.prototype.hasOwnProperty.call(c,"remove"))return;b.defineProperty(c,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})}})})([a.Element,a.CharacterData,a.DocumentType])}function h(a){var b=a.Element.prototype;b.getAttributeNames||(b.getAttributeNames=function(){for(var a=this.attributes,b=a.length,c=Array(b),d=0;d<b;d++)c[d]=a[d].name;return c})}function i(a,b){for(var c=0;c<b.length;c++)b[c](a)}function j(a,b,c){if(!a)return!1;c=Object.assign({enableScript:!0},c);var d=null;try{d=a.contentDocument||a.document}catch(a){}if(!d||!d.documentElement)return!1;try{d.documentElement.innerHTML=b}catch(a){try{return void d.write(b)}catch(a){return console.log(a),void alert("Do not support this browser or this site.")}}if(c.enableScript){if(o()){var f=a.contentWindow||a;i(f,[h,e,g])}l(m(d.querySelectorAll("script")),function(a){try{var b=d.createElement("script");l(a.getAttributeNames(),function(c){b.setAttribute(c,a.getAttribute(c))}),a.textContent&&(b.textContent=a.textContent),a.remove(),d.head.append(b)}catch(a){console.error(a)}})}}var k=Function,f=k.bind.bind(k.call),l=f([].forEach),m=f([].slice),n=[].includes?f([].includes):function(b,a){return 0<=b.indexOf(a)},o=function(){return"documentMode"in b},p=f(b.createElement,b),q=function(){var b;return function(a){return b||(b=p("a")),b.href=a,b.href}}(),r=f(b.querySelectorAll,b),s=Element.prototype,t=f(s.setAttribute),u=f(s.getAttribute);i(a,[function(a){var b=a.String.prototype;b.startsWith||(b.startsWith=function(a,b){var c=0<b?0|b:0;return this.slice(c,c+a.length)===a})},d,h]);var v=function(a,b){var c=a[b];c&&a.getAttribute(b)!==c&&(a[b]=c)};i(a,[function(a){var b=a.Object;"function"!=typeof b.assign&&b.defineProperty(b,"assign",{value:function(a){if(null===a||a===void 0)throw new TypeError("Cannot convert undefined or null to object");for(var c,d=b(a),e=1;e<arguments.length;e++)if(c=arguments[e],null!==c&&void 0!==c)for(var f in c)b.prototype.hasOwnProperty.call(c,f)&&(d[f]=c[f]);return d},writable:!0,configurable:!0})},d]);i(a,[function(a){var b=a.String.prototype;b.includes||(b.includes=function(a,b){if(a instanceof RegExp)throw new TypeError("first argument must not be a RegExp");return void 0===b&&(b=0),-1!==this.indexOf(a,b)})}]),function(){l(b.links,function(a){return v(a,"href")}),l(r("link"),function(a){return v(a,"href")}),l(r("script"),function(a){return v(a,"src")}),l(r("img"),function(a){return v(a,"src")}),l(r("form"),function(a){v(a,"action"),l(a.getAttributeNames(),function(b){b.startsWith("data-")&&b.endsWith("url")&&t(a,b,q(u(a,b)))})})}();var w=document.documentElement.innerHTML;w.includes("<base ")||(w=w.replace(/(<head[^>]*>)/,"$1<base href=\""+location.href+"\">"));var x=function(d){d=Object.assign({},d);var e;try{var f=d.url?"about:blank"+d.url:c.pathname.endsWith("/")?"about:blank/":"";e=a.open(f,"_blank"),e.document.toString()}catch(b){e&&e.close(),e=a.open("","_blank")}if(e)try{var g=a.context||{window:a,location:c,document:b};(function(a){a.context=g,a.opener=null;var b=a.URL;a.URL=function(a,c){return c&&"null"!==c&&"about://"!==c||(c=g.location.origin),c.startsWith("about")&&(c=g.location.href),new b(a,c)}})(e)}catch(a){}else alert("Please allow \"Open Pop-up Windows\" on this site and try again.");return e}();Object.defineProperty(x,"localStorage",{get:function(){return x.sessionStorage},configurable:!0,enumerable:!0}),j(x,w,{enableScript:!1});var y=x.document.querySelector("#bookmarkletsgo");y&&y.remove()})(window,document,location);