(function(a,b,c){'use strict';function d(b,d){var e=!1,f=null,g=Math.random();a[g]=function(){e=!0},b="window["+g+"]();"+b;try{new Function(b)()}catch(a){console.error(a),f=a}c(function(){try{delete a[g]}catch(a){}"function"==typeof d&&d(f,e)})}var e=function(a,b,c,d){if(a)return a.addEventListener(b,c,d||!1),function(){a.removeEventListener(b,c,d||!1)}},f=function(){return b.documentMode||-1},g=function(a){try{return"string"==typeof a?JSON.parse(a):Object(a)}catch(a){return{}}},h="bookmarkletsgo",i="__BOOKMARKLETSGO",j="https://bookmarkletsgo.github.io",k="origin",l=8===f()?function(a,b){try{b.from=h,a.postMessage(JSON.stringify(b),"*")}catch(a){console.error(a),alert("Do not support this browser or this site.")}}:9===f()?function(a,b){b.from=h,a.postMessage(JSON.stringify(b),"*")}:function(a,b){b.from=h,a.postMessage(b,"*")},m=a[i]||{};a[i]=m;var n=function(a,b){return e(a,"message",function(c){console.debug(c);var d=g(c.data),e=c[k];console.info(JSON.stringify({origin:e,from:d.from,type:d.type,content:(d.content||"").slice(0,20)})),d.from===h&&(e===j||e===a.location[k]||e===a[k]||c.source===a.opener)&&b(d,e)})}(a,function(a){"script"===a.type?(!m["initialized"]&&d(a.content,function(a){a&&alert("Do not support this site due to Content Security Policy.\nDrag and drop bookmarklets to the 'Bookmarks Bar' of your browser.")}),n(),p&&p.close()):"opened_window_loaded"===a.content&&p&&l(p,{type:"get_script",content:"show-element-outlines"})}),o=j+"/bookmarklets.html"+function(){return"?i="+Math.floor(new Date().getTime()/36e5)}();a.name===h&&(a.name=null);var p=a.open(o,h);p||alert("Please allow \"Open Pop-up Windows\" on this site and try again.")})(window,document,setTimeout);