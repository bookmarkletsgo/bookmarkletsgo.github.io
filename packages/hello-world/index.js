(function(a){'use strict';(function(a,b){for(var c=0;c<b.length;c++)b[c](a)})(a,[function(a){var b=a.document,c=a.Object;(function(d){d.forEach(function(d){if(d){var e=d.prototype;if(c.prototype.hasOwnProperty.call(e,"append"))return;c.defineProperty(e,"append",{configurable:!0,enumerable:!0,writable:!0,value:function(){var c=Array.prototype.slice.call(arguments),d=b.createDocumentFragment();c.forEach(function(c){var e=c instanceof a.Node;d.appendChild(e?c:b.createTextNode(c+""))}),this.appendChild(d)}})}})})([a.Element,a.Document,a.DocumentFragment])}]),alert("hello world!");var b=document.createElement("div");b.innerHTML="hello world!",document.body.append(b),console.log("hello world!")})(window);