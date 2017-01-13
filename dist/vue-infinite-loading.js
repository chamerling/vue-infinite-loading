!function(p,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueInfiniteLoading=e():p.VueInfiniteLoading=e()}(this,function(){return function(p){function e(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return p[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var t={};return e.m=p,e.c=t,e.p="/",e(0)}([function(p,e,t){"use strict";function o(p){return p&&p.__esModule?p:{default:p}}Object.defineProperty(e,"__esModule",{value:!0});var n=t(5),i=o(n);e.default=i.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("infinite-loading",i.default)},function(p,e){"use strict";function t(p){return"BODY"===p.tagName?window:["scroll","auto"].indexOf(getComputedStyle(p).overflowY)>-1?p:t(p.parentNode)}function o(p,e){var t=void 0,o=isNaN(p.scrollTop)?p.pageYOffset:p.scrollTop;if("top"===e)t=o;else{var n=getComputedStyle(p===window?document.body:p),i=p===window?window.innerHeight:parseInt(n.height,10),x=p===window?document.body.scrollHeight:p.scrollHeight,a=parseInt(n.paddingTop,10),r=parseInt(n.paddingBottom,10);t=x-i-o-a-r}return t}Object.defineProperty(e,"__esModule",{value:!0});var n={bubbles:"loading-bubbles",circles:"loading-circles",default:"loading-default",spiral:"loading-spiral",waveDots:"loading-wave-dots"};e.default={data:function(){return{scrollParent:null,scrollHandler:null,isLoading:!1,isComplete:!1,isFirstLoad:!0}},computed:{spinnerType:function(){return n[this.spinner]||n.default}},props:{distance:{type:Number,default:100},onInfinite:{type:Function,required:!0},spinner:String,direction:{type:String,default:"bottom"}},ready:function(){this.scrollParent=t(this.$el),this.scrollHandler=function(){this.isLoading||this.attemptLoad()}.bind(this),setTimeout(this.scrollHandler,1),this.scrollParent.addEventListener("scroll",this.scrollHandler)},events:{"$InfiniteLoading:loaded":function(){this.isFirstLoad=!1,this.isLoading&&this.$nextTick(this.attemptLoad)},"$InfiniteLoading:complete":function(){this.isLoading=!1,this.isComplete=!0,this.scrollParent.removeEventListener("scroll",this.scrollHandler)},"$InfiniteLoading:reset":function(){this.isLoading=!1,this.isComplete=!1,this.isFirstLoad=!0,this.scrollParent.addEventListener("scroll",this.scrollHandler),setTimeout(this.scrollHandler,1)}},methods:{attemptLoad:function(){var p=o(this.scrollParent,this.direction);!this.isComplete&&p<=this.distance?(this.isLoading=!0,this.onInfinite.call()):this.isLoading=!1}},destroyed:function(){this.isComplete||this.scrollParent.removeEventListener("scroll",this.scrollHandler)}}},function(p,e,t){e=p.exports=t(3)(),e.push([p.id,".loading-wave-dots[_v-34e13b62]{position:relative}.loading-wave-dots[_v-34e13b62]:before{content:'';position:absolute;top:50%;left:50%;margin-left:-4px;margin-top:-4px;width:8px;height:8px;background-color:#bbb;border-radius:50%;animation:linear loading-wave-dots 2.8s infinite}@keyframes loading-wave-dots{0%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}5%{box-shadow:-32px -4px 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}10%{box-shadow:-32px -6px 0 #999,-16px -4px 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb;transform:translateY(0)}15%{box-shadow:-32px 2px 0 #bbb,-16px -2px 0 #999,16px 4px 0 #bbb,32px 4px 0 #bbb;transform:translateY(-4px);background-color:#bbb}20%{box-shadow:-32px 6px 0 #bbb,-16px 4px 0 #bbb,16px 2px 0 #bbb,32px 6px 0 #bbb;transform:translateY(-6px);background-color:#999}25%{box-shadow:-32px 2px 0 #bbb,-16px 2px 0 #bbb,16px -4px 0 #999,32px -2px 0 #bbb;transform:translateY(-2px);background-color:#bbb}30%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px -2px 0 #bbb,32px -6px 0 #999;transform:translateY(0)}35%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px -2px 0 #bbb}40%{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}to{box-shadow:-32px 0 0 #bbb,-16px 0 0 #bbb,16px 0 0 #bbb,32px 0 0 #bbb}}.loading-circles[_v-34e13b62]{position:relative}.loading-circles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-2.5px;margin-left:-2.5px;width:5px;height:5px;border-radius:50%;animation:linear loading-circles .75s infinite}@keyframes loading-circles{0%{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}12.5%{box-shadow:0 -12px 0 #dfdfdf,8.52px -8.52px 0 #505050,12px 0 0 #646464,8.52px 8.52px 0 #797979,0 12px 0 #8d8d8d,-8.52px 8.52px 0 #a2a2a2,-12px 0 0 #b6b6b6,-8.52px -8.52px 0 #cacaca}25%{box-shadow:0 -12px 0 #cacaca,8.52px -8.52px 0 #dfdfdf,12px 0 0 #505050,8.52px 8.52px 0 #646464,0 12px 0 #797979,-8.52px 8.52px 0 #8d8d8d,-12px 0 0 #a2a2a2,-8.52px -8.52px 0 #b6b6b6}37.5%{box-shadow:0 -12px 0 #b6b6b6,8.52px -8.52px 0 #cacaca,12px 0 0 #dfdfdf,8.52px 8.52px 0 #505050,0 12px 0 #646464,-8.52px 8.52px 0 #797979,-12px 0 0 #8d8d8d,-8.52px -8.52px 0 #a2a2a2}50%{box-shadow:0 -12px 0 #a2a2a2,8.52px -8.52px 0 #b6b6b6,12px 0 0 #cacaca,8.52px 8.52px 0 #dfdfdf,0 12px 0 #505050,-8.52px 8.52px 0 #646464,-12px 0 0 #797979,-8.52px -8.52px 0 #8d8d8d}62.5%{box-shadow:0 -12px 0 #8d8d8d,8.52px -8.52px 0 #a2a2a2,12px 0 0 #b6b6b6,8.52px 8.52px 0 #cacaca,0 12px 0 #dfdfdf,-8.52px 8.52px 0 #505050,-12px 0 0 #646464,-8.52px -8.52px 0 #797979}75%{box-shadow:0 -12px 0 #797979,8.52px -8.52px 0 #8d8d8d,12px 0 0 #a2a2a2,8.52px 8.52px 0 #b6b6b6,0 12px 0 #cacaca,-8.52px 8.52px 0 #dfdfdf,-12px 0 0 #505050,-8.52px -8.52px 0 #646464}87.5%{box-shadow:0 -12px 0 #646464,8.52px -8.52px 0 #797979,12px 0 0 #8d8d8d,8.52px 8.52px 0 #a2a2a2,0 12px 0 #b6b6b6,-8.52px 8.52px 0 #cacaca,-12px 0 0 #dfdfdf,-8.52px -8.52px 0 #505050}to{box-shadow:0 -12px 0 #505050,8.52px -8.52px 0 #646464,12px 0 0 #797979,8.52px 8.52px 0 #8d8d8d,0 12px 0 #a2a2a2,-8.52px 8.52px 0 #b6b6b6,-12px 0 0 #cacaca,-8.52px -8.52px 0 #dfdfdf}}.loading-bubbles[_v-34e13b62]{position:relative}.loading-bubbles[_v-34e13b62]:before{content:'';position:absolute;left:50%;top:50%;margin-top:-.5px;margin-left:-.5px;width:1px;height:1px;border-radius:50%;animation:linear loading-bubbles .85s infinite}@keyframes loading-bubbles{0%{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}12.5%{box-shadow:0 -12px 0 3.2px #666,8.52px -8.52px 0 .4px #666,12px 0 0 .8px #666,8.52px 8.52px 0 1.2px #666,0 12px 0 1.6px #666,-8.52px 8.52px 0 2px #666,-12px 0 0 2.4px #666,-8.52px -8.52px 0 2.8px #666}25%{box-shadow:0 -12px 0 2.8px #666,8.52px -8.52px 0 3.2px #666,12px 0 0 .4px #666,8.52px 8.52px 0 .8px #666,0 12px 0 1.2px #666,-8.52px 8.52px 0 1.6px #666,-12px 0 0 2px #666,-8.52px -8.52px 0 2.4px #666}37.5%{box-shadow:0 -12px 0 2.4px #666,8.52px -8.52px 0 2.8px #666,12px 0 0 3.2px #666,8.52px 8.52px 0 .4px #666,0 12px 0 .8px #666,-8.52px 8.52px 0 1.2px #666,-12px 0 0 1.6px #666,-8.52px -8.52px 0 2px #666}50%{box-shadow:0 -12px 0 2px #666,8.52px -8.52px 0 2.4px #666,12px 0 0 2.8px #666,8.52px 8.52px 0 3.2px #666,0 12px 0 .4px #666,-8.52px 8.52px 0 .8px #666,-12px 0 0 1.2px #666,-8.52px -8.52px 0 1.6px #666}62.5%{box-shadow:0 -12px 0 1.6px #666,8.52px -8.52px 0 2px #666,12px 0 0 2.4px #666,8.52px 8.52px 0 2.8px #666,0 12px 0 3.2px #666,-8.52px 8.52px 0 .4px #666,-12px 0 0 .8px #666,-8.52px -8.52px 0 1.2px #666}75%{box-shadow:0 -12px 0 1.2px #666,8.52px -8.52px 0 1.6px #666,12px 0 0 2px #666,8.52px 8.52px 0 2.4px #666,0 12px 0 2.8px #666,-8.52px 8.52px 0 3.2px #666,-12px 0 0 .4px #666,-8.52px -8.52px 0 .8px #666}87.5%{box-shadow:0 -12px 0 .8px #666,8.52px -8.52px 0 1.2px #666,12px 0 0 1.6px #666,8.52px 8.52px 0 2px #666,0 12px 0 2.4px #666,-8.52px 8.52px 0 2.8px #666,-12px 0 0 3.2px #666,-8.52px -8.52px 0 .4px #666}to{box-shadow:0 -12px 0 .4px #666,8.52px -8.52px 0 .8px #666,12px 0 0 1.2px #666,8.52px 8.52px 0 1.6px #666,0 12px 0 2px #666,-8.52px 8.52px 0 2.4px #666,-12px 0 0 2.8px #666,-8.52px -8.52px 0 3.2px #666}}.loading-default[_v-34e13b62]{position:relative;border:1px solid #999;animation:ease loading-rotating 1.5s infinite}.loading-default[_v-34e13b62]:before{content:'';position:absolute;display:block;top:0;left:50%;margin-top:-3px;margin-left:-3px;width:6px;height:6px;background-color:#999;border-radius:50%}.loading-spiral[_v-34e13b62]{border:2px solid #777;border-right-color:transparent;animation:linear loading-rotating .85s infinite}@keyframes loading-rotating{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.infinite-loading-container[_v-34e13b62]{clear:both;text-align:center}.infinite-loading-container [class^=loading-][_v-34e13b62]{display:inline-block;margin:15px 0;width:28px;height:28px;font-size:28px;line-height:28px;border-radius:50%}.infinite-status-prompt[_v-34e13b62]{color:#666;font-size:14px;text-align:center;padding:10px 0}",""])},function(p,e){p.exports=function(){var p=[];return p.toString=function(){for(var p=[],e=0;e<this.length;e++){var t=this[e];t[2]?p.push("@media "+t[2]+"{"+t[1]+"}"):p.push(t[1])}return p.join("")},p.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];"number"==typeof i&&(o[i]=!0)}for(n=0;n<e.length;n++){var x=e[n];"number"==typeof x[0]&&o[x[0]]||(t&&!x[2]?x[2]=t:t&&(x[2]="("+x[2]+") and ("+t+")"),p.push(x))}},p}},function(p,e){p.exports=' <div class=infinite-loading-container _v-34e13b62=""> <div v-show=isLoading _v-34e13b62=""> <slot name=spinner _v-34e13b62=""> <i :class=spinnerType _v-34e13b62=""></i> </slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; isFirstLoad" _v-34e13b62=""> <slot name=no-results _v-34e13b62="">No results :(</slot> </div> <div class=infinite-status-prompt v-show="!isLoading &amp;&amp; isComplete &amp;&amp; !isFirstLoad" _v-34e13b62=""> <slot name=no-more _v-34e13b62="">No more data :)</slot> </div> </div> '},function(p,e,t){var o,n,i={};t(7),o=t(1),n=t(4),p.exports=o||{},p.exports.__esModule&&(p.exports=p.exports.default);var x="function"==typeof p.exports?p.exports.options||(p.exports.options={}):p.exports;n&&(x.template=n),x.computed||(x.computed={}),Object.keys(i).forEach(function(p){var e=i[p];x.computed[p]=function(){return e}})},function(p,e,t){function o(p,e){for(var t=0;t<p.length;t++){var o=p[t],n=l[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(r(o.parts[i],e))}else{for(var x=[],i=0;i<o.parts.length;i++)x.push(r(o.parts[i],e));l[o.id]={id:o.id,refs:1,parts:x}}}}function n(p){for(var e=[],t={},o=0;o<p.length;o++){var n=p[o],i=n[0],x=n[1],a=n[2],r=n[3],s={css:x,media:a,sourceMap:r};t[i]?t[i].parts.push(s):e.push(t[i]={id:i,parts:[s]})}return e}function i(p,e){var t=c(),o=g[g.length-1];if("top"===p.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),g.push(e);else{if("bottom"!==p.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function x(p){p.parentNode.removeChild(p);var e=g.indexOf(p);e>=0&&g.splice(e,1)}function a(p){var e=document.createElement("style");return e.type="text/css",i(p,e),e}function r(p,e){var t,o,n;if(e.singleton){var i=h++;t=u||(u=a(e)),o=s.bind(null,t,i,!1),n=s.bind(null,t,i,!0)}else t=a(e),o=d.bind(null,t),n=function(){x(t)};return o(p),function(e){if(e){if(e.css===p.css&&e.media===p.media&&e.sourceMap===p.sourceMap)return;o(p=e)}else n()}}function s(p,e,t,o){var n=t?"":o.css;if(p.styleSheet)p.styleSheet.cssText=m(e,n);else{var i=document.createTextNode(n),x=p.childNodes;x[e]&&p.removeChild(x[e]),x.length?p.insertBefore(i,x[e]):p.appendChild(i)}}function d(p,e){var t=e.css,o=e.media,n=e.sourceMap;if(o&&p.setAttribute("media",o),n&&(t+="\n/*# sourceURL="+n.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */"),p.styleSheet)p.styleSheet.cssText=t;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(t))}}var l={},b=function(p){var e;return function(){return"undefined"==typeof e&&(e=p.apply(this,arguments)),e}},f=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),c=b(function(){return document.head||document.getElementsByTagName("head")[0]}),u=null,h=0,g=[];p.exports=function(p,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=f()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var t=n(p);return o(t,e),function(p){for(var i=[],x=0;x<t.length;x++){var a=t[x],r=l[a.id];r.refs--,i.push(r)}if(p){var s=n(p);o(s,e)}for(var x=0;x<i.length;x++){var r=i[x];if(0===r.refs){for(var d=0;d<r.parts.length;d++)r.parts[d]();delete l[r.id]}}}};var m=function(){var p=[];return function(e,t){return p[e]=t,p.filter(Boolean).join("\n")}}()},function(p,e,t){var o=t(2);"string"==typeof o&&(o=[[p.id,o,""]]);t(6)(o,{});o.locals&&(p.exports=o.locals)}])});