(function(){'use strict';function a(a){try{console.log(a.location.href),a.document.oncontextmenu=null}catch(a){console.log(a)}}function b(c){a(c),0<c.frames.length&&Array.from(c.frames).forEach(function(a){return b(a)})}b(window)})();