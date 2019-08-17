webpackHotUpdate("static/development/pages/detail.js",{

/***/ "../../../node_modules/grpc-web/index.js":
/*!****************************************************!*\
  !*** /Users/justin/node_modules/grpc-web/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},l="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(a){if(a){for(var b=l,c=["Promise"],d=0;d<c.length-1;d++){var e=c[d];e in b||(b[e]={});b=b[e]}c=c[c.length-1];d=b[c];a=a(d);a!=d&&null!=a&&aa(b,c,{configurable:!0,writable:!0,value:a})}}function ca(){ca=function(){};l.Symbol||(l.Symbol=da)}
var da=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function m(){ca();var a=l.Symbol.iterator;a||(a=l.Symbol.iterator=l.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(this)}});m=function(){}}function ea(a){var b=0;return fa(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function fa(a){m();a={next:a};a[l.Symbol.iterator]=function(){return this};return a}
function ha(a){m();var b=a[Symbol.iterator];return b?b.call(a):ea(a)}
ba(function(a){function b(a){this.b=0;this.c=void 0;this.a=[];var b=this.f();try{a(b.resolve,b.reject)}catch(k){b.reject(k)}}function c(){this.a=null}function d(a){return a instanceof b?a:new b(function(b){b(a)})}if(a)return a;c.prototype.b=function(a){null==this.a&&(this.a=[],this.f());this.a.push(a)};c.prototype.f=function(){var a=this;this.c(function(){a.h()})};var e=l.setTimeout;c.prototype.c=function(a){e(a,0)};c.prototype.h=function(){for(;this.a&&this.a.length;){var a=this.a;this.a=[];for(var b=
0;b<a.length;++b){var c=a[b];a[b]=null;try{c()}catch(F){this.g(F)}}}this.a=null};c.prototype.g=function(a){this.c(function(){throw a;})};b.prototype.f=function(){function a(a){return function(d){c||(c=!0,a.call(b,d))}}var b=this,c=!1;return{resolve:a(this.m),reject:a(this.g)}};b.prototype.m=function(a){if(a===this)this.g(new TypeError("A Promise cannot resolve to itself"));else if(a instanceof b)this.o(a);else{a:switch(typeof a){case "object":var c=null!=a;break a;case "function":c=!0;break a;default:c=
!1}c?this.l(a):this.h(a)}};b.prototype.l=function(a){var b=void 0;try{b=a.then}catch(k){this.g(k);return}"function"==typeof b?this.u(b,a):this.h(a)};b.prototype.g=function(a){this.i(2,a)};b.prototype.h=function(a){this.i(1,a)};b.prototype.i=function(a,b){if(0!=this.b)throw Error("Cannot settle("+a+", "+b+"): Promise already settled in state"+this.b);this.b=a;this.c=b;this.j()};b.prototype.j=function(){if(null!=this.a){for(var a=0;a<this.a.length;++a)f.b(this.a[a]);this.a=null}};var f=new c;b.prototype.o=
function(a){var b=this.f();a.A(b.resolve,b.reject)};b.prototype.u=function(a,b){var c=this.f();try{a.call(b,c.resolve,c.reject)}catch(F){c.reject(F)}};b.prototype.then=function(a,c){function d(a,b){return"function"==typeof a?function(b){try{e(a(b))}catch(xb){f(xb)}}:b}var e,f,g=new b(function(a,b){e=a;f=b});this.A(d(a,e),d(c,f));return g};b.prototype.catch=function(a){return this.then(void 0,a)};b.prototype.A=function(a,b){function c(){switch(d.b){case 1:a(d.c);break;case 2:b(d.c);break;default:throw Error("Unexpected state: "+
d.b);}}var d=this;null==this.a?f.b(c):this.a.push(c)};b.resolve=d;b.reject=function(a){return new b(function(b,c){c(a)})};b.race=function(a){return new b(function(b,c){for(var e=ha(a),f=e.next();!f.done;f=e.next())d(f.value).A(b,c)})};b.all=function(a){var c=ha(a),e=c.next();return e.done?d([]):new b(function(a,b){function f(b){return function(c){g[b]=c;h--;0==h&&a(g)}}var g=[],h=0;do g.push(void 0),h++,d(e.value).A(f(g.length-1),b),e=c.next();while(!e.done)})};return b});var n=n||{},p=this;
function q(a){return"string"==typeof a}function r(a,b){a=a.split(".");b=b||p;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}function t(){}
function u(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function v(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var ia="closure_uid_"+(1E9*Math.random()>>>0),ja=0;function ka(a,b,c){return a.call.apply(a.bind,arguments)}
function la(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=ka:w=la;return w.apply(null,arguments)}var ma=Date.now||function(){return+new Date};
function x(a,b){function c(){}c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.V=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};function na(a){switch(a){case 0:return"No Error";case 1:return"Access denied to content document";case 2:return"File not found";case 3:return"Firefox silently errored";case 4:return"Application custom error";case 5:return"An exception occurred";case 6:return"Http response at 400 or 500 level";case 7:return"Request was aborted";case 8:return"Request timed out";case 9:return"The resource is not available offline";default:return"Unrecognized error code"}};function y(a){if(Error.captureStackTrace)Error.captureStackTrace(this,y);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}x(y,Error);y.prototype.name="CustomError";function oa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var pa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function z(a,b){return a<b?-1:a>b?1:0};function qa(a,b){b.unshift(a);y.call(this,oa.apply(null,b));b.shift()}x(qa,y);qa.prototype.name="AssertionError";function ra(a,b){throw new qa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};function sa(){this.j=null;this.i=[];this.l=0;this.b=ta;this.f=this.a=this.h=0;this.c=null;this.g=0}var ta=0;function ua(a,b,c,d){a.b=3;a.j="The stream is broken @"+a.l+"/"+c+". Error: "+d+". With input:\n"+b;throw Error(a.j);}
function va(a,b){function c(a){0==a?g.h=a:128==a?g.h=a:ua(g,h,k,"invalid frame byte");g.b=1;g.a=0;g.f=0}function d(a){g.f++;g.a=(g.a<<8)+a;4==g.f&&(g.b=2,g.g=0,"undefined"!==typeof Uint8Array?g.c=new Uint8Array(g.a):g.c=Array(g.a),0==g.a&&f())}function e(a){g.c[g.g++]=a;g.g==g.a&&f()}function f(){var a={};a[g.h]=g.c;g.i.push(a);g.b=ta}for(var g=a,h=b instanceof Array?b:new Uint8Array(b),k=0;k<h.length;){switch(g.b){case 3:ua(g,h,k,"stream already broken");break;case ta:c(h[k]);break;case 1:d(h[k]);
break;case 2:e(h[k]);break;default:throw Error("unexpected parser state: "+g.b);}g.l++;k++}a=g.i;g.i=[];return 0<a.length?a:null};var wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(q(a))return q(b)&&1==b.length?a.indexOf(b,0):-1;for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};function xa(a){a:{var b=ya;for(var c=a.length,d=q(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:q(a)?a.charAt(b):a[b]};var A;a:{var za=p.navigator;if(za){var Aa=za.userAgent;if(Aa){A=Aa;break a}}A=""};function Ba(a,b){for(var c in a)b.call(void 0,a[c],c,a)}var Ca="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Da(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ca.length;f++)c=Ca[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function Ea(){0!=Fa&&(this[ia]||(this[ia]=++ja));this.H=this.H}var Fa=0;Ea.prototype.H=!1;function Ga(a){Ga[" "](a);return a}Ga[" "]=t;function Ha(a,b){var c=Ia;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)};var Ja=-1!=A.indexOf("Opera"),B=-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"),Ka=-1!=A.indexOf("Edge"),La=-1!=A.indexOf("Gecko")&&!(-1!=A.toLowerCase().indexOf("webkit")&&-1==A.indexOf("Edge"))&&!(-1!=A.indexOf("Trident")||-1!=A.indexOf("MSIE"))&&-1==A.indexOf("Edge"),Ma=-1!=A.toLowerCase().indexOf("webkit")&&-1==A.indexOf("Edge");function Na(){var a=p.document;return a?a.documentMode:void 0}var C;
a:{var Oa="",Pa=function(){var a=A;if(La)return/rv:([^\);]+)(\)|;)/.exec(a);if(Ka)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Ma)return/WebKit\/(\S+)/.exec(a);if(Ja)return/(?:Version)[ \/]?(\S+)/.exec(a)}();Pa&&(Oa=Pa?Pa[1]:"");if(B){var Qa=Na();if(null!=Qa&&Qa>parseFloat(Oa)){C=String(Qa);break a}}C=Oa}var Ia={};
function Ra(a){return Ha(a,function(){for(var b=0,c=pa(String(C)).split("."),d=pa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",h=d[f]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];if(0==g[0].length&&0==h[0].length)break;b=z(0==g[1].length?0:parseInt(g[1],10),0==h[1].length?0:parseInt(h[1],10))||z(0==g[2].length,0==h[2].length)||z(g[2],h[2]);g=g[3];h=h[3]}while(0==b)}return 0<=b})}var Sa;var Ta=p.document;
Sa=Ta&&B?Na()||("CSS1Compat"==Ta.compatMode?parseInt(C,10):5):void 0;var Ua=Object.freeze||function(a){return a};var Va;(Va=!B)||(Va=9<=Number(Sa));var Wa=Va,Xa=B&&!Ra("9"),Ya=function(){if(!p.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});p.addEventListener("test",t,b);p.removeEventListener("test",t,b);return a}();function D(a,b){this.type=a;this.a=this.target=b}D.prototype.b=function(){};function E(a,b){D.call(this,a?a.type:"");this.relatedTarget=this.a=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.pointerId=0;this.pointerType="";this.c=null;if(a){var c=this.type=a.type,d=a.changedTouches?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.a=b;if(b=a.relatedTarget){if(La){a:{try{Ga(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:
"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;null===d?(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0):(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;
this.pointerId=a.pointerId||0;this.pointerType=q(a.pointerType)?a.pointerType:Za[a.pointerType]||"";this.c=a;a.defaultPrevented&&this.b()}}x(E,D);var Za=Ua({2:"touch",3:"pen",4:"mouse"});E.prototype.b=function(){E.T.b.call(this);var a=this.c;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,Xa)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var G="closure_listenable_"+(1E6*Math.random()|0),$a=0;function ab(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.B=e;this.key=++$a;this.s=this.w=!1}function bb(a){a.s=!0;a.listener=null;a.proxy=null;a.src=null;a.B=null};function H(a){this.src=a;this.a={};this.b=0}H.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.a[f];a||(a=this.a[f]=[],this.b++);var g=cb(a,b,d,e);-1<g?(b=a[g],c||(b.w=!1)):(b=new ab(b,this.src,f,!!d,e),b.w=c,a.push(b));return b};function db(a,b){var c=b.type;if(c in a.a){var d=a.a[c],e=wa(d,b),f;(f=0<=e)&&Array.prototype.splice.call(d,e,1);f&&(bb(b),0==a.a[c].length&&(delete a.a[c],a.b--))}}
function cb(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.s&&f.listener==b&&f.capture==!!c&&f.B==d)return e}return-1};var eb="closure_lm_"+(1E6*Math.random()|0),fb={},gb=0;function hb(a,b,c,d,e){if(d&&d.once)ib(a,b,c,d,e);else if("array"==u(b))for(var f=0;f<b.length;f++)hb(a,b[f],c,d,e);else c=jb(c),a&&a[G]?a.f.add(String(b),c,!1,v(d)?!!d.capture:!!d,e):kb(a,b,c,!1,d,e)}
function kb(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=v(e)?!!e.capture:!!e,h=I(a);h||(a[eb]=h=new H(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=lb();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ya||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(mb(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");gb++}}
function lb(){var a=nb,b=Wa?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function ib(a,b,c,d,e){if("array"==u(b))for(var f=0;f<b.length;f++)ib(a,b[f],c,d,e);else c=jb(c),a&&a[G]?a.f.add(String(b),c,!0,v(d)?!!d.capture:!!d,e):kb(a,b,c,!0,d,e)}
function ob(a,b,c,d,e){if("array"==u(b))for(var f=0;f<b.length;f++)ob(a,b[f],c,d,e);else(d=v(d)?!!d.capture:!!d,c=jb(c),a&&a[G])?(a=a.f,b=String(b).toString(),b in a.a&&(f=a.a[b],c=cb(f,c,d,e),-1<c&&(bb(f[c]),Array.prototype.splice.call(f,c,1),0==f.length&&(delete a.a[b],a.b--)))):a&&(a=I(a))&&(b=a.a[b.toString()],a=-1,b&&(a=cb(b,c,d,e)),(c=-1<a?b[a]:null)&&pb(c))}
function pb(a){if("number"!=typeof a&&a&&!a.s){var b=a.src;if(b&&b[G])db(b.f,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(mb(c),d):b.addListener&&b.removeListener&&b.removeListener(d);gb--;(c=I(b))?(db(c,a),0==c.b&&(c.src=null,b[eb]=null)):bb(a)}}}function mb(a){return a in fb?fb[a]:fb[a]="on"+a}
function qb(a,b,c,d){var e=!0;if(a=I(a))if(b=a.a[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.capture==c&&!f.s&&(f=rb(f,d),e=e&&!1!==f)}return e}function rb(a,b){var c=a.listener,d=a.B||a.src;a.w&&pb(a);return c.call(d,b)}
function nb(a,b){if(a.s)return!0;if(!Wa){var c=b||r("window.event");b=new E(c,this);var d=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var e=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){e=!0}if(e||void 0==c.returnValue)c.returnValue=!0}c=[];for(e=b.a;e;e=e.parentNode)c.push(e);a=a.type;for(e=c.length-1;0<=e;e--){b.a=c[e];var f=qb(c[e],a,!0,b);d=d&&f}for(e=0;e<c.length;e++)b.a=c[e],f=qb(c[e],a,!1,b),d=d&&f}return d}return rb(a,new E(b,this))}
function I(a){a=a[eb];return a instanceof H?a:null}var sb="__closure_events_fn_"+(1E9*Math.random()>>>0);function jb(a){if("function"==u(a))return a;a[sb]||(a[sb]=function(b){return a.handleEvent(b)});return a[sb]};function J(){Ea.call(this);this.f=new H(this);this.P=this}x(J,Ea);J.prototype[G]=!0;J.prototype.removeEventListener=function(a,b,c,d){ob(this,a,b,c,d)};function K(a,b){a=a.P;var c=b.type||b;if(q(b))b=new D(b,a);else if(b instanceof D)b.target=b.target||a;else{var d=b;b=new D(c,a);Da(b,d)}a=b.a=a;tb(a,c,!0,b);tb(a,c,!1,b)}
function tb(a,b,c,d){if(b=a.f.a[String(b)]){b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.s&&g.capture==c){var h=g.listener,k=g.B||g.src;g.w&&db(a.f,g);e=!1!==h.call(k,d)&&e}}}};function ub(a,b,c){if("function"==u(a))c&&(a=w(a,c));else if(a&&"function"==typeof a.handleEvent)a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:p.setTimeout(a,b||0)};function vb(a,b,c){this.reset(a,b,c,void 0,void 0)}vb.prototype.a=null;var wb=0;vb.prototype.reset=function(a,b,c,d,e){"number"==typeof e||wb++;d||ma();delete this.a};function yb(a){this.f=a;this.b=this.c=this.a=null}function L(a,b){this.name=a;this.value=b}L.prototype.toString=function(){return this.name};var zb=new L("SEVERE",1E3),Ab=new L("CONFIG",700),Bb=new L("FINE",500);function Cb(a){if(a.c)return a.c;if(a.a)return Cb(a.a);ra("Root logger has no level set.");return null}yb.prototype.log=function(a,b,c){if(a.value>=Cb(this).value)for("function"==u(b)&&(b=b()),a=new vb(a,String(b),this.f),c&&(a.a=c),c=this;c;)c=c.a};var Db={},M=null;
function Eb(a){M||(M=new yb(""),Db[""]=M,M.c=Ab);var b;if(!(b=Db[a])){b=new yb(a);var c=a.lastIndexOf("."),d=a.substr(c+1);c=Eb(a.substr(0,c));c.b||(c.b={});c.b[d]=b;b.a=c;Db[a]=b}return b};function N(a,b){a&&a.log(Bb,b,void 0)};function Fb(){}Fb.prototype.a=null;function Gb(a){var b;(b=a.a)||(b={},Hb(a)&&(b[0]=!0,b[1]=!0),b=a.a=b);return b};var Ib;function Jb(){}x(Jb,Fb);function Kb(a){return(a=Hb(a))?new ActiveXObject(a):new XMLHttpRequest}function Hb(a){if(!a.b&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.b=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.b}Ib=new Jb;function O(a,b){this.b={};this.a=[];this.c=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&Lb(this,a)}O.prototype.g=function(){P(this);for(var a=[],b=0;b<this.a.length;b++)a.push(this.b[this.a[b]]);return a};O.prototype.f=function(){P(this);return this.a.concat()};function Mb(a){a.b={};a.a.length=0;a.c=0}
function P(a){if(a.c!=a.a.length){for(var b=0,c=0;b<a.a.length;){var d=a.a[b];Q(a.b,d)&&(a.a[c++]=d);b++}a.a.length=c}if(a.c!=a.a.length){var e={};for(c=b=0;b<a.a.length;)d=a.a[b],Q(e,d)||(a.a[c++]=d,e[d]=1),b++;a.a.length=c}}O.prototype.get=function(a,b){return Q(this.b,a)?this.b[a]:b};O.prototype.set=function(a,b){Q(this.b,a)||(this.c++,this.a.push(a));this.b[a]=b};
function Lb(a,b){if(b instanceof O){var c=b.f();b=b.g()}else{c=[];var d=0;for(e in b)c[d++]=e;d=[];var e=0;for(var f in b)d[e++]=b[f];b=d}for(f=0;f<c.length;f++)a.set(c[f],b[f])}O.prototype.forEach=function(a,b){for(var c=this.f(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};function Nb(a){P(a);for(var b={},c=0;c<a.a.length;c++){var d=a.a[c];b[d]=a.b[d]}return b}function Q(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var Ob=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function R(a){J.call(this);this.headers=new O;this.v=a||null;this.c=!1;this.G=this.a=null;this.K=this.u="";this.g=0;this.j="";this.i=this.J=this.o=this.I=!1;this.l=0;this.D=null;this.h=Pb;this.F=this.m=!1}x(R,J);var Pb="",Qb=R.prototype,Rb=Eb("goog.net.XhrIo");Qb.b=Rb;var Sb=/^https?$/i,Tb=["POST","PUT"];
function Ub(a,b,c){if(a.a)throw Error("[goog.net.XhrIo] Object is active with another request="+a.u+"; newUri="+b);a.u=b;a.j="";a.g=0;a.K="POST";a.I=!1;a.c=!0;a.a=a.v?Kb(a.v):Kb(Ib);a.G=a.v?Gb(a.v):Gb(Ib);a.a.onreadystatechange=w(a.L,a);try{N(a.b,S(a,"Opening Xhr")),a.J=!0,a.a.open("POST",String(b),!0),a.J=!1}catch(f){N(a.b,S(a,"Error opening Xhr: "+f.message));Vb(a,f);return}b=c||"";c=new O(a.headers);var d=xa(c.f()),e=p.FormData&&b instanceof p.FormData;!(0<=wa(Tb,"POST"))||d||e||c.set("Content-Type",
"application/x-www-form-urlencoded;charset=utf-8");c.forEach(function(a,b){this.a.setRequestHeader(b,a)},a);a.h&&(a.a.responseType=a.h);"withCredentials"in a.a&&a.a.withCredentials!==a.m&&(a.a.withCredentials=a.m);try{Wb(a),0<a.l&&(a.F=Xb(a.a),N(a.b,S(a,"Will abort after "+a.l+"ms if incomplete, xhr2 "+a.F)),a.F?(a.a.timeout=a.l,a.a.ontimeout=w(a.M,a)):a.D=ub(a.M,a.l,a)),N(a.b,S(a,"Sending request")),a.o=!0,a.a.send(b),a.o=!1}catch(f){N(a.b,S(a,"Send error: "+f.message)),Vb(a,f)}}
function Xb(a){return B&&Ra(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function ya(a){return"content-type"==a.toLowerCase()}R.prototype.M=function(){"undefined"!=typeof n&&this.a&&(this.j="Timed out after "+this.l+"ms, aborting",this.g=8,N(this.b,S(this,this.j)),K(this,"timeout"),this.abort(8))};function Vb(a,b){a.c=!1;a.a&&(a.i=!0,a.a.abort(),a.i=!1);a.j=b;a.g=5;Yb(a);Zb(a)}function Yb(a){a.I||(a.I=!0,K(a,"complete"),K(a,"error"))}
R.prototype.abort=function(a){this.a&&this.c&&(N(this.b,S(this,"Aborting")),this.c=!1,this.i=!0,this.a.abort(),this.i=!1,this.g=a||7,K(this,"complete"),K(this,"abort"),Zb(this))};R.prototype.L=function(){this.H||(this.J||this.o||this.i?$b(this):this.R())};R.prototype.R=function(){$b(this)};
function $b(a){if(a.c&&"undefined"!=typeof n)if(a.G[1]&&4==T(a)&&2==U(a))N(a.b,S(a,"Local request error detected and ignored"));else if(a.o&&4==T(a))ub(a.L,0,a);else if(K(a,"readystatechange"),4==T(a)){N(a.b,S(a,"Request complete"));a.c=!1;try{var b=U(a);a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=String(a.u).match(Ob)[1]||null;if(!f&&p.self&&p.self.location){var g=p.self.location.protocol;f=g.substr(0,
g.length-1)}e=!Sb.test(f?f.toLowerCase():"")}d=e}if(d)K(a,"complete"),K(a,"success");else{a.g=6;try{var h=2<T(a)?a.a.statusText:""}catch(k){N(a.b,"Can not get status: "+k.message),h=""}a.j=h+" ["+U(a)+"]";Yb(a)}}finally{Zb(a)}}}function Zb(a){if(a.a){Wb(a);var b=a.a,c=a.G[0]?t:null;a.a=null;a.G=null;K(a,"ready");try{b.onreadystatechange=c}catch(d){(a=a.b)&&a.log(zb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}
function Wb(a){a.a&&a.F&&(a.a.ontimeout=null);a.D&&(p.clearTimeout(a.D),a.D=null)}function T(a){return a.a?a.a.readyState:0}function U(a){try{return 2<T(a)?a.a.status:-1}catch(b){return-1}}
function ac(a){try{if(!a.a)return null;if("response"in a.a)return a.a.response;switch(a.h){case Pb:case "text":return a.a.responseText;case "arraybuffer":if("mozResponseArrayBuffer"in a.a)return a.a.mozResponseArrayBuffer}var b=a.b;b&&b.log(zb,"Response type "+a.h+" is not supported on this browser",void 0);return null}catch(c){return N(a.b,"Can not get response: "+c.message),null}}function bc(a,b){if(a.a&&4==T(a))return a=a.a.getResponseHeader(b),null===a?void 0:a}
function cc(a,b){return a.a?a.a.getResponseHeader(b):null}function S(a,b){return b+" ["+a.K+" "+a.u+" "+U(a)+"]"};var V=null,W=null;function dc(a){ec();for(var b=V,c=[],d=0;d<a.length;d+=3){var e=a[d],f=d+1<a.length,g=f?a[d+1]:0,h=d+2<a.length,k=h?a[d+2]:0,F=e>>2;e=(e&3)<<4|g>>4;g=(g&15)<<2|k>>6;k&=63;h||(k=64,f||(g=64));c.push(b[F],b[e],b[g],b[k])}return c.join("")}function fc(a){var b=a.length,c=0;"="===a[b-2]?c=2:"="===a[b-1]&&(c=1);var d=new Uint8Array(Math.ceil(3*b/4)-c),e=0;gc(a,function(a){d[e++]=a});return d.subarray(0,e)}
function gc(a,b){function c(b){for(;d<a.length;){var c=a.charAt(d++),e=W[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}ec();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function ec(){if(!V){V={};W={};for(var a=0;65>a;a++)V[a]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a),W[V[a]]=a,62<=a&&(W["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)]=a)}};function X(a){this.a=a.O;this.f=this.c=this.b=this.i=this.h=null;this.g=0;this.j=new sa;var b=this;hb(this.a,"readystatechange",function(){var a=cc(b.a,"Content-Type");if(a){a=a.toLowerCase();var d=cc(b.a,"grpc-status"),e=cc(b.a,"grpc-message");d&&b.b&&b.b({code:Number(d),details:e||"",metadata:void 0});if(0==a.lastIndexOf("application/grpc-web-text",0)){a=b.a;try{var f=a.a?a.a.responseText:""}catch(k){N(a.b,"Can not get responseText: "+k.message),f=""}a=f.length-f.length%4;f=f.substr(b.g,a-b.g);
if(0==f.length)return;b.g=a;f=fc(f)}else if(0==a.lastIndexOf("application/grpc",0))f=new Uint8Array(ac(b.a));else return;if(f=va(b.j,[].slice.call(f)))for(a=0;a<f.length;a++)if(0 in f[a]&&(d=f[a][0])&&(d=b.h(d))&&b.i(d),128 in f[a]&&0<f[a][128].length){d="";for(e=0;e<f[a][128].length;e++)d+=String.fromCharCode(f[a][128][e]);var g;d=d.trim().split("\r\n");e={};for(g=0;g<d.length;g++){var h=d[g].indexOf(":");e[d[g].substring(0,h).trim()]=d[g].substring(h+1).trim()}g=e;d=0;e="";"grpc-status"in g&&(d=
g["grpc-status"]);"grpc-message"in g&&(e=g["grpc-message"]);b.b&&b.b({code:Number(d),details:e,metadata:g})}4==T(b.a)&&b.f&&b.f()}});hb(this.a,"complete",function(){if(b.c){var a=b.a.g;if(0!=a)b.c({code:14,message:na(a)});else{a={};var d=b.a;d=(d.a&&4==T(d)?d.a.getAllResponseHeaders():"").split("\r\n");for(var e=0;e<d.length;e++)if(!/^[\s\xa0]*$/.test(d[e])){var f=2;for(var g=d[e].split(": "),h=[];0<f&&g.length;)h.push(g.shift()),f--;g.length&&h.push(g.join(": "));f=h;a[f[0]]=a[f[0]]?a[f[0]]+(", "+
f[1]):f[1]}"grpc-status"in a&&0!=Number(bc(b.a,"grpc-status"))&&b.c({code:Number(bc(b.a,"grpc-status")),message:bc(b.a,"grpc-message")})}}})}X.prototype.C=function(a,b){"data"==a?this.i=b:"status"==a?this.b=b:"end"==a?this.f=b:"error"==a&&(this.c=b);return this};X.prototype.on=X.prototype.C;X.prototype.cancel=function(){this.a.abort()};X.prototype.cancel=X.prototype.cancel;function hc(a){var b="";Ba(a,function(a,d){b+=d;b+=":";b+=a;b+="\r\n"});return b}function ic(a,b){a:{for(c in b){var c=!1;break a}c=!0}if(c)return a;c=hc(b);if(q(a)){b=encodeURIComponent("$httpHeaders");c=null!=c?"="+encodeURIComponent(String(c)):"";if(b+=c){c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;a=a[0]+(a[1]?"?"+a[1]:"")+a[2]}return a}a.a("$httpHeaders",c);return a};function Y(a){this.a=r("format",a)||"text";this.c=r("suppressCorsPreflight",a)||!1;this.b=r("withCredentials",a)||!1}
Y.prototype.N=function(a,b,c,d,e){var f=new R;f.m=this.b;var g=new X({O:f});g.h=d.b;g.C("data",function(a){e(null,a)});g.C("status",function(a){0!=a.code&&e({code:a.code,message:a.details},null)});g.C("error",function(a){0!=a.code&&e({code:a.code,message:a.message},null)});Lb(f.headers,c);jc(this,f);this.c&&(c=Nb(f.headers),Mb(f.headers),a=ic(a,c));b=d.a(b);b=kc(b);"text"==this.a?b=dc(b):"binary"==this.a&&(f.h="arraybuffer");Ub(f,a,b);return g};Y.prototype.rpcCall=Y.prototype.N;
Y.prototype.U=function(a,b,c,d){var e=this;return new Promise(function(f,g){e.N(a,b,c,d,function(a,b){a?g(a):f(b)})})};Y.prototype.unaryCall=Y.prototype.U;Y.prototype.S=function(a,b,c,d){var e=new R;e.m=this.b;var f=new X({O:e});f.h=d.b;Lb(e.headers,c);jc(this,e);this.c&&(c=Nb(e.headers),Mb(e.headers),a=ic(a,c));b=d.a(b);b=kc(b);"text"==this.a?b=dc(b):"binary"==this.a&&(e.h="arraybuffer");Ub(e,a,b);return f};Y.prototype.serverStreaming=Y.prototype.S;
function kc(a){for(var b=a.length,c=[0,0,0,0],d=new Uint8Array(5+b),e=3;0<=e;e--)c[e]=b%256,b>>>=8;d.set(new Uint8Array(c),1);d.set(a,5);return d}
function jc(a,b){"text"==a.a?(b.headers.set("Content-Type","application/grpc-web-text"),b.headers.set("Accept","application/grpc-web-text")):b.headers.set("Content-Type","application/grpc-web+proto");b.headers.set("X-User-Agent","grpc-web-javascript/0.1");b.headers.set("X-Grpc-Web","1");if(Q(b.headers.b,"deadline")){a=b.headers.get("deadline");a=Math.round(a-(new Date).getTime());var c=b.headers;Q(c.b,"deadline")&&(delete c.b.deadline,c.c--,c.a.length>2*c.c&&P(c));Infinity===a&&(a=0);0<a&&b.headers.set("grpc-timeout",
a+"m")}};var Z=module.exports;Z.AbstractClientBase={MethodInfo:function(a,b,c,d){this.name=d;this.a=b;this.b=c}};Z.GrpcWebClientBase=Y;Z.StatusCode={OK:0,CANCELLED:1,UNKNOWN:2,INVALID_ARGUMENT:3,DEADLINE_EXCEEDED:4,NOT_FOUND:5,ALREADY_EXISTS:6,PERMISSION_DENIED:7,UNAUTHENTICATED:16,RESOURCE_EXHAUSTED:8,FAILED_PRECONDITION:9,ABORTED:10,OUT_OF_RANGE:11,UNIMPLEMENTED:12,INTERNAL:13,UNAVAILABLE:14,DATA_LOSS:15};Z.MethodDescriptor=function(a,b,c,d,e,f){this.name=a;this.a=e;this.b=f};
Z.MethodType={UNARY:"unary",SERVER_STREAMING:"server_streaming"};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../Desktop/private/nextjs/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./pages/detail.js":
/*!*************************!*\
  !*** ./pages/detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _utils_blog_types__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/blog_types */ "./utils/blog_types.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/config */ "./utils/config.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../proto/blog_pb */ "./proto/blog_pb.js");
/* harmony import */ var _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_proto_blog_pb__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _proto_echo_grpc_pb__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../proto/echo_grpc_pb */ "./proto/echo_grpc_pb.js");
/* harmony import */ var _proto_echo_grpc_pb__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_proto_echo_grpc_pb__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _utils_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../utils/util */ "./utils/util.js");









var _jsxFileName = "/Users/justin/Desktop/private/nextjs/pages/detail.js";











var _default =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(_default, _React$Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      blogDtail: "",
      detailData: {}
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(_default, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var cli, id, res, data, message, key, hres, hdata, hmessage;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cli = _proto_echo_grpc_pb__WEBPACK_IMPORTED_MODULE_16___default.a.PaySvrPromiseClient('http://localhost:8080');
                console.log(cli);
                id = this.props.query.id;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_17___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/v1/blog/detail?id=").concat(id), {
                  responseType: 'blob'
                });

              case 5:
                res = _context.sent;
                _context.next = 8;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_18__["default"])(res.data);

              case 8:
                data = _context.sent;
                message = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.detailRes.deserializeBinary(data);
                data = message.toObject();
                key = data.htmlTxtUrl.replace("http:" + _utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"] + "/redources/", "");
                _context.next = 14;
                return axios__WEBPACK_IMPORTED_MODULE_17___default.a.get("".concat(_utils_config__WEBPACK_IMPORTED_MODULE_14__["apiHost"], "/tool/file/read?key=").concat(key), {
                  responseType: 'blob'
                });

              case 14:
                hres = _context.sent;
                _context.next = 17;
                return Object(_utils_util__WEBPACK_IMPORTED_MODULE_18__["default"])(hres.data);

              case 17:
                hdata = _context.sent;
                hmessage = _proto_blog_pb__WEBPACK_IMPORTED_MODULE_15___default.a.fileReadRes.deserializeBinary(hdata);
                hdata = hmessage.toObject();
                this.setState({
                  blogDtail: hdata.txt,
                  detailData: data
                });

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          blogDtail = _this$state.blogDtail,
          detailData = _this$state.detailData;
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          background: "#fff",
          padding: "0 30px"
        },
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
        className: "jsx-2116749121" + " " + "news_title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, detailData.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2116749121" + " " + "bloginfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2116749121" + " " + "author",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2116749121" + " " + "lmname",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, Object(_utils_blog_types__WEBPACK_IMPORTED_MODULE_12__["getTpValue"])(detailData.type)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2116749121" + " " + "timer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, moment__WEBPACK_IMPORTED_MODULE_13___default()(detailData.createTime).format("YYYY-MM-DD")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("li", {
        className: "jsx-2116749121" + " " + "view",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, detailData.view, " \u4EBA\u5DF2\u9605\u8BFB"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          clear: 'both'
        },
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2116749121" + " " + "news_about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "\u7B80\u4ECB"), " ", detailData.preface), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: blogDtail
        },
        previewcontainer: "true",
        style: {
          width: "auto"
        },
        className: "jsx-2116749121" + " " + "markdown-body editormd-preview-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        style: {
          padding: "20px"
        },
        className: "jsx-2116749121" + " " + "share",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2116749121" + " " + "diggit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "\u5F88\u8D5E\u54E6\uFF01"), "(", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("b", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "79"), ")")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2116749121" + " " + "nextinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\u4E0A\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/18.html",
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "\u4E00\u4E2ASEO\u7AD9\u957F\u5206\u4EAB\u4E2A\u4EBA\u535A\u5BA2\u4EA7\u54C1\u7F51\u8D5A\u5EFA\u7AD9\u7ECF\u5386\u5168\u8FC7\u7A0B")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u4E0B\u4E00\u7BC7\uFF1A", react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "/diary/",
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "\u8FD4\u56DE\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2116749121" + " " + "news_pl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "\u6587\u7AE0\u8BC4\u8BBA"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2116749121" + " " + "gbko",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2116749121" + " " + "fb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          color: "#000"
        },
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "\u7A0B\u5E8F\u5458\u5C0F\u5F20"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2116749121" + " " + "fbtime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "2019-08-12 12:05:07")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2116749121" + " " + "fbinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "33232"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-2116749121" + " " + "fb",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("ul", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        style: {
          color: "#000"
        },
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "\u7A0B\u5E8F\u5458\u5C0F\u5F20"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2116749121" + " " + "fbtime",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "2019-02-17 16:02:42")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2116749121" + " " + "fbinfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "\u6CA1\u5174\u8DA3\u5C31\u4E0D\u8981\u5165\u95E8\u8FD9\u4E00\u884C\u4E86\u3002"))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        id: "plpost",
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
        className: "jsx-2116749121" + " " + "saying",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
        href: "javascript:void(0)",
        style: {
          textDecoration: "none",
          color: "#de1513"
        },
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "\u5171\u670934\u6761\u8BC4\u8BBA")), "\u6765\u8BF4\u4E24\u53E5\u5427..."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("textarea", {
        name: "saytext",
        rows: "6",
        id: "saytext",
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("input", {
        name: "imageField",
        type: "submit",
        value: "\u63D0\u4EA4",
        style: {
          outline: "none",
          cursor: "pointer"
        },
        className: "jsx-2116749121",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2116749121",
        __self: this
      }, ".nextinfo.jsx-2116749121 a.jsx-2116749121{-webkit-text-decoration:none;text-decoration:none;color:#555;}.nextinfo.jsx-2116749121 a.jsx-2116749121:hover{-webkit-text-decoration:underline;text-decoration:underline;color:#222;}.yzm.jsx-2116749121{margin:10px 10px 10px 0;}#plpost.jsx-2116749121 input[type=\"submit\"].jsx-2116749121{display:block;background:#303030;color:#fff;border:0;line-height:30px;padding:0 20px;border-radius:5px;float:right;margin-bottom:20px;margin-top:13px;margin-right:1%;}#saytext.jsx-2116749121{width:99%;outline:none;resize:none;}.saying.jsx-2116749121 span.jsx-2116749121{float:right;}.saying.jsx-2116749121{line-height:30px;color:#a9a6a6;margin-bottom:8px;}.news_pl.jsx-2116749121 h2.jsx-2116749121{border-bottom:#000 2px solid;line-height:40px;font-size:14px;padding-left:10px;color:#000;}.fbtime.jsx-2116749121{float:right;color:#999;font-size:12px;width:66px;overflow:hidden;white-space:nowrap;}.fbtime.jsx-2116749121 span.jsx-2116749121{float:right;color:#999;font-size:12px;width:67px;overflow:hidden;white-space:nowrap;}p.fbtime.jsx-2116749121{color:#000;}p.fbinfo.jsx-2116749121{margin:10px 0;word-wrap:break-word;}.fb.jsx-2116749121 ul.jsx-2116749121{margin:10px 10px;padding:10px 10px 10px 70px;border-bottom:#ececec 1px solid;background:url(/static/images/erweima.jpg) no-repeat top 14px left 10px;background-size:47px 47px;}.news_pl.jsx-2116749121{margin:10px 0 20px 0;width:100%;overflow:hidden;}.nextinfo.jsx-2116749121{line-height:24px;width:100%;overflow:hidden;margin:20px 0;}.nextinfo.jsx-2116749121>p.jsx-2116749121{padding:4px 10px;border-radius:5px;}.diggit.jsx-2116749121{width:160px;margin:auto;background:#E2523A;color:#fff;box-shadow:1px 2px 6px 0px rgba(0,0,0,.2);border-radius:3px;line-height:40px;text-align:center;}.news_about.jsx-2116749121{color:#888888;border:1px solid #F3F3F3;padding:10px;margin:20px auto 15px auto;line-height:23px;background:none repeat 0 0 #F6F6F6;}.bloginfo.jsx-2116749121{width:100%;overflow:hidden;}.news_title.jsx-2116749121{font-size:24px;font-weight:normal;padding:20px 0;color:#333;margin:0;}.bloginfo.jsx-2116749121 li.jsx-2116749121{float:left;margin-right:20px;list-style:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qdXN0aW4vRGVza3RvcC9wcml2YXRlL25leHRqcy9wYWdlcy9kZXRhaWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0dzQixBQUdrQyxBQUlLLEFBSUEsQUFHWixBQWFGLEFBS0ksQUFHQyxBQUtZLEFBT2pCLEFBUUEsQUFRRCxBQUdHLEFBSUcsQUFPSSxBQUtKLEFBTUEsQUFJTCxBQVVNLEFBUUwsQUFJTSxBQU9KLFVBN0ZBLENBb0NoQixBQStDbUIsQUFXSSxDQXpGeEIsQUFlYSxBQVFBLEFBcUNDLEVBOUVPLEFBb0RFLEFBb0NRLENBWU4sRUEvRVQsQUFtQ2MsQUFZakIsQUFNTyxJQVhQLEVBakRHLEFBb0JDLEFBUUEsQ0E3Q2pCLEFBa0ZxQixHQWtCbkIsQ0E1QmdCLENBM0NDLEFBa0ZHLEVBdEZGLENBMENGLENBL0RMLENBb0dRLENBdEZyQixBQXNDQyxBQXNCQSxHQXhDWSxBQVFBLENBOENNLElBVE4sQ0E5RUYsQUFvRUssQ0Fia0IsQUFvRGhDLENBbEZlLEVBc0NoQixDQTFDQSxBQWFpQixBQVFBLEFBMERELENBakhKLEVBcUdvQixDQXZGZCxDQThFeUIsSUFWM0MsRUE5RVcsQUE4R0UsQ0FqSGQsQUFzQ29CLElBU0MsQUFRQSxJQTJEbkIsQ0FwR2UsQ0FWakIsTUFnRTBFLEVBN0I3RCxBQThEVSxLQXJEdEIsQUFRQSxDQXpDbUIsS0F5Qm5CLE1Bb0RtQixBQVVxQixPQXRGM0IsV0E2RUssQ0E1RUUsZ0JBNkVELEFBU2xCLEdBckZnQixlQW1EVSxBQTBCM0IsQ0E1RWlCLGdCQUNsQixTQWtEQyIsImZpbGUiOiIvVXNlcnMvanVzdGluL0Rlc2t0b3AvcHJpdmF0ZS9uZXh0anMvcGFnZXMvZGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB7Z2V0VHBWYWx1ZX0gZnJvbSAnLi4vdXRpbHMvYmxvZ190eXBlcydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuaW1wb3J0IHthcGlIb3N0fSBmcm9tICcuLi91dGlscy9jb25maWcnO1xuaW1wb3J0IHByb3RvYnVmIGZyb20gXCIuLi9wcm90by9ibG9nX3BiXCI7XG5pbXBvcnQgZ2NsaWVudCBmcm9tIFwiLi4vcHJvdG8vZWNob19ncnBjX3BiXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgcmVhZFN0cmVhbSBmcm9tICcuLi91dGlscy91dGlsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyByZXEscXVlcnksanNvblBhZ2VSZXMgfSkge1xuICAgIGNvbnN0IHVzZXJBZ2VudCA9IHJlcSA/IHJlcS5oZWFkZXJzWyd1c2VyLWFnZW50J10gOiBuYXZpZ2F0b3IudXNlckFnZW50XG4gICAgcmV0dXJuIHsgdXNlckFnZW50LHF1ZXJ5LGpzb25QYWdlUmVzIH1cbiAgfVxuXG4gIHN0YXRlID0ge1xuICAgICAgYmxvZ0R0YWlsOlwiXCIsXG4gICAgICBkZXRhaWxEYXRhOnt9XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgbGV0IGNsaSA9IGdjbGllbnQuUGF5U3ZyUHJvbWlzZUNsaWVudCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwJyk7XG4gICAgICBjb25zb2xlLmxvZyhjbGkpXG5cbiAgICAgIGNvbnN0IHtpZH0gPSB0aGlzLnByb3BzLnF1ZXJ5XG4gICAgICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3YxL2Jsb2cvZGV0YWlsP2lkPSR7aWR9YCx7XG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXG4gICAgICB9KVxuICAgICAgbGV0IGRhdGEgPSBhd2FpdCByZWFkU3RyZWFtKHJlcy5kYXRhKTtcbiAgICAgIGxldCBtZXNzYWdlID0gcHJvdG9idWYuZGV0YWlsUmVzLmRlc2VyaWFsaXplQmluYXJ5KGRhdGEpO1xuICAgICAgZGF0YSA9IG1lc3NhZ2UudG9PYmplY3QoKTtcbiAgICAgIGxldCBrZXkgPSBkYXRhLmh0bWxUeHRVcmwucmVwbGFjZShcImh0dHA6XCIrYXBpSG9zdCArIFwiL3JlZG91cmNlcy9cIixcIlwiKTtcbiAgICAgIGxldCBocmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2FwaUhvc3R9L3Rvb2wvZmlsZS9yZWFkP2tleT0ke2tleX1gLHtcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnYmxvYidcbiAgICAgIH0pXG4gICAgICBsZXQgaGRhdGEgPSBhd2FpdCByZWFkU3RyZWFtKGhyZXMuZGF0YSk7XG4gICAgICBsZXQgaG1lc3NhZ2UgPSBwcm90b2J1Zi5maWxlUmVhZFJlcy5kZXNlcmlhbGl6ZUJpbmFyeShoZGF0YSk7XG4gICAgICBoZGF0YSA9IGhtZXNzYWdlLnRvT2JqZWN0KCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtibG9nRHRhaWw6aGRhdGEudHh0LGRldGFpbERhdGE6ZGF0YX0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2Jsb2dEdGFpbCxkZXRhaWxEYXRhfSA9IHRoaXMuc3RhdGVcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7YmFja2dyb3VuZDpcIiNmZmZcIixwYWRkaW5nOiBcIjAgMzBweFwifX0+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibmV3c190aXRsZVwiPntkZXRhaWxEYXRhLm5hbWV9PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ2luZm9cIj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJhdXRob3JcIj48L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsbW5hbWVcIj57Z2V0VHBWYWx1ZShkZXRhaWxEYXRhLnR5cGUpfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRpbWVyXCI+e21vbWVudChkZXRhaWxEYXRhLmNyZWF0ZVRpbWUpLmZvcm1hdChcIllZWVktTU0tRERcIil9PC9saT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidmlld1wiPntkZXRhaWxEYXRhLnZpZXd9IOS6uuW3sumYheivuzwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjbGVhcjonYm90aCd9fT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c19hYm91dFwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPueugOS7izwvc3Ryb25nPiB7ZGV0YWlsRGF0YS5wcmVmYWNlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBibG9nRHRhaWx9fSBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5IGVkaXRvcm1kLXByZXZpZXctY29udGFpbmVyXCIgcHJldmlld2NvbnRhaW5lcj1cInRydWVcIiBzdHlsZT17e3dpZHRoOlwiYXV0b1wifX0+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXJlXCIgc3R5bGU9e3twYWRkaW5nOiBcIjIwcHhcIn19PlxuICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRpZ2dpdFwiPlxuICAgICAgICAgICAgICAgPGE+5b6I6LWe5ZOm77yBPC9hPig8Yj43OTwvYj4pXG4gICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5leHRpbmZvXCI+XG4gICAgICAgICAgICAgIDxwPuS4iuS4gOevh++8mjxhIGhyZWY9XCIvZGlhcnkvMTguaHRtbFwiPuS4gOS4qlNFT+ermemVv+WIhuS6q+S4quS6uuWNmuWuouS6p+WTgee9kei1muW7uuermee7j+WOhuWFqOi/h+eoizwvYT48L3A+XG4gICAgICAgICAgICAgIDxwPuS4i+S4gOevh++8mjxhIGhyZWY9XCIvZGlhcnkvXCI+6L+U5Zue5YiX6KGoPC9hPjwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfcGxcIj5cbiAgICAgICAgICAgICAgPGgyPuaWh+eroOivhOiuujwvaDI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2Jrb1wiPiBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZiXCI+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7Y29sb3I6XCIjMDAwXCJ9fT7nqIvluo/lkZjlsI/lvKA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZidGltZVwiPjxzcGFuPjIwMTktMDgtMTIgMTI6MDU6MDc8L3NwYW4+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmYmluZm9cIj4zMzIzMjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmJcIj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tjb2xvcjpcIiMwMDBcIn19Pueoi+W6j+WRmOWwj+W8oDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmJ0aW1lXCI+PHNwYW4+MjAxOS0wMi0xNyAxNjowMjo0Mjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZiaW5mb1wiPuayoeWFtOi2o+WwseS4jeimgeWFpemXqOi/meS4gOihjOS6huOAgjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBscG9zdFwiPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2F5aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiBzdHlsZT17e3RleHREZWNvcmF0aW9uOiBcIm5vbmVcIixjb2xvcjogXCIjZGUxNTEzXCJ9fT7lhbHmnIkzNOadoeivhOiuujwvYT48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIOadpeivtOS4pOWPpeWQpy4uLlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJzYXl0ZXh0XCIgcm93cz1cIjZcIiBpZD1cInNheXRleHRcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJpbWFnZUZpZWxkXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi5o+Q5LqkXCIgc3R5bGU9e3tvdXRsaW5lOiBcIm5vbmVcIixjdXJzb3I6IFwicG9pbnRlclwifX0gLz5cbiAgICAgICAgICAgICAgICAgIHsvKiA8aW5wdXQgbmFtZT1cImlkXCIgdHlwZT1cImhpZGRlblwiIGlkPVwiaWRcIiB2YWx1ZT1cIjE5XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiY2xhc3NpZFwiIHR5cGU9XCJoaWRkZW5cIiBpZD1cImNsYXNzaWRcIiB2YWx1ZT1cIjNcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJlbmV3c1wiIHR5cGU9XCJoaWRkZW5cIiBpZD1cImVuZXdzXCIgdmFsdWU9XCJBZGRQbFwiIC8+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInJlcGlkXCIgdHlwZT1cImhpZGRlblwiIGlkPVwicmVwaWRcIiB2YWx1ZT1cIjBcIiAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZWNtc2Zyb21cIiB2YWx1ZT1cIi9kaWFyeS8xOS5odG1sXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm5leHRpbmZvIGF7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5leHRpbmZvIGE6aG92ZXJ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgIGNvbG9yOiMyMjI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC55em0ge1xuICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgICNwbHBvc3QgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzMDMwMzA7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDElO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2F5dGV4dCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA5OSU7XG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNheWluZyBzcGFuIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgICAgICAuc2F5aW5ne1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2E5YTZhNjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgfSBcbiAgICAgICAgICAgLm5ld3NfcGwgaDJ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAjMDAwIDJweCBzb2xpZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLmZidGltZXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDY2cHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZmJ0aW1lIHNwYW57XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHdpZHRoOiA2N3B4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgcC5mYnRpbWV7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICBwLmZiaW5mb3tcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5mYiB1bHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNzBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206ICNlY2VjZWMgMXB4IHNvbGlkO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvaW1hZ2VzL2Vyd2VpbWEuanBnKSBuby1yZXBlYXQgdG9wIDE0cHggbGVmdCAxMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0N3B4IDQ3cHg7XG4gICAgICAgICAgIH0gIFxuICAgICAgICAgICAubmV3c19wbHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHggMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAubmV4dGluZm97XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIC5uZXh0aW5mbyA+IHB7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgfVxuICAgICAgICAgICAuZGlnZ2l0e1xuICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI0UyNTIzQTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA2cHggMHB4IHJnYmEoMCwwLDAsLjIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgIH1cbiAgICAgICAgICAgLm5ld3NfYWJvdXQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4ODg4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNGM0YzRjM7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggYXV0byAxNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgMCAwICNGNkY2RjY7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ2luZm8ge1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXdzX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYmxvZ2luZm8gbGkge1xuICAgICAgICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PiAgICAgXG4gICAgKVxuICB9XG59XG5cblxuIl19 */\n/*@ sourceURL=/Users/justin/Desktop/private/nextjs/pages/detail.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(_ref) {
        var req, query, jsonPageRes, userAgent;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req, query = _ref.query, jsonPageRes = _ref.jsonPageRes;
                userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
                return _context2.abrupt("return", {
                  userAgent: userAgent,
                  query: query,
                  jsonPageRes: jsonPageRes
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);



/***/ }),

/***/ "./proto/echo_grpc_pb.js":
/*!*******************************!*\
  !*** ./proto/echo_grpc_pb.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var grpc = {};
grpc.web = __webpack_require__(/*! grpc-web */ "../../../node_modules/grpc-web/index.js");

var proto = __webpack_require__(/*! ./payserver_pb.js */ "./proto/payserver_pb.js");
/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */


proto.PaySvrClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';
  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */

  this.client_ = new grpc.web.GrpcWebClientBase(options);
  /**
   * @private @const {string} The hostname
   */

  this.hostname_ = hostname;
  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */

  this.credentials_ = credentials;
  /**
   * @private @const {?Object} Options for the client
   */

  this.options_ = options;
};
/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */


proto.PaySvrPromiseClient = function (hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';
  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */

  this.client_ = new grpc.web.GrpcWebClientBase(options);
  /**
   * @private @const {string} The hostname
   */

  this.hostname_ = hostname;
  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */

  this.credentials_ = credentials;
  /**
   * @private @const {?Object} Options for the client
   */

  this.options_ = options;
};
/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TestReq,
 *   !proto.TestRes>}
 */


var methodDescriptor_PaySvr_Test = new grpc.web.MethodDescriptor('/PaySvr/Test', grpc.web.MethodType.UNARY, proto.TestReq, proto.TestRes,
/** @param {!proto.TestReq} request */
function (request) {
  return request.serializeBinary();
}, proto.TestRes.deserializeBinary);
/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.TestReq,
 *   !proto.TestRes>}
 */

var methodInfo_PaySvr_Test = new grpc.web.AbstractClientBase.MethodInfo(proto.TestRes,
/** @param {!proto.TestReq} request */
function (request) {
  return request.serializeBinary();
}, proto.TestRes.deserializeBinary);
/**
 * @param {!proto.TestReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TestRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TestRes>|undefined}
 *     The XHR Node Readable Stream
 */

proto.PaySvrClient.prototype.test = function (request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ + '/PaySvr/Test', request, metadata || {}, methodDescriptor_PaySvr_Test, callback);
};
/**
 * @param {!proto.TestReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TestRes>}
 *     A native promise that resolves to the response
 */


proto.PaySvrPromiseClient.prototype.test = function (request, metadata) {
  return this.client_.unaryCall(this.hostname_ + '/PaySvr/Test', request, metadata || {}, methodDescriptor_PaySvr_Test);
};

module.exports = proto;

/***/ }),

/***/ "./proto/payserver_pb.js":
/*!*******************************!*\
  !*** ./proto/payserver_pb.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
var jspb = __webpack_require__(/*! google-protobuf */ "./node_modules/google-protobuf/google-protobuf.js");

var goog = jspb;
var global = Function('return this')();
goog.exportSymbol('proto.TestReq', null, global);
goog.exportSymbol('proto.TestRes', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */

proto.TestReq = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.TestReq, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.TestReq.displayName = 'proto.TestReq';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.TestReq.prototype.toObject = function (opt_includeInstance) {
    return proto.TestReq.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.TestReq} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.TestReq.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      name: jspb.Message.getFieldWithDefault(msg, 1, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TestReq}
 */


proto.TestReq.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestReq();
  return proto.TestReq.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestReq}
 */


proto.TestReq.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setName(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.TestReq.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.TestReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.TestReq.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getName();

  if (f.length > 0) {
    writer.writeString(1, f);
  }
};
/**
 * optional string name = 1;
 * @return {string}
 */


proto.TestReq.prototype.getName = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 1, "")
  );
};
/** @param {string} value */


proto.TestReq.prototype.setName = function (value) {
  jspb.Message.setProto3StringField(this, 1, value);
};
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */


proto.TestRes = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};

goog.inherits(proto.TestRes, jspb.Message);

if (goog.DEBUG && !COMPILED) {
  proto.TestRes.displayName = 'proto.TestRes';
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto suitable for use in Soy templates.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
   * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
   *     for transitional soy proto support: http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.TestRes.prototype.toObject = function (opt_includeInstance) {
    return proto.TestRes.toObject(opt_includeInstance, this);
  };
  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Whether to include the JSPB
   *     instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.TestRes} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */


  proto.TestRes.toObject = function (includeInstance, msg) {
    var f,
        obj = {
      code: jspb.Message.getFieldWithDefault(msg, 1, 0),
      msg: jspb.Message.getFieldWithDefault(msg, 2, "")
    };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }

    return obj;
  };
}
/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TestRes}
 */


proto.TestRes.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TestRes();
  return proto.TestRes.deserializeBinaryFromReader(msg, reader);
};
/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TestRes} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TestRes}
 */


proto.TestRes.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }

    var field = reader.getFieldNumber();

    switch (field) {
      case 1:
        var value =
        /** @type {number} */
        reader.readInt32();
        msg.setCode(value);
        break;

      case 2:
        var value =
        /** @type {string} */
        reader.readString();
        msg.setMsg(value);
        break;

      default:
        reader.skipField();
        break;
    }
  }

  return msg;
};
/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */


proto.TestRes.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.TestRes.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};
/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TestRes} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */


proto.TestRes.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getCode();

  if (f !== 0) {
    writer.writeInt32(1, f);
  }

  f = message.getMsg();

  if (f.length > 0) {
    writer.writeString(2, f);
  }
};
/**
 * optional int32 code = 1;
 * @return {number}
 */


proto.TestRes.prototype.getCode = function () {
  return (
    /** @type {number} */
    jspb.Message.getFieldWithDefault(this, 1, 0)
  );
};
/** @param {number} value */


proto.TestRes.prototype.setCode = function (value) {
  jspb.Message.setProto3IntField(this, 1, value);
};
/**
 * optional string msg = 2;
 * @return {string}
 */


proto.TestRes.prototype.getMsg = function () {
  return (
    /** @type {string} */
    jspb.Message.getFieldWithDefault(this, 2, "")
  );
};
/** @param {string} value */


proto.TestRes.prototype.setMsg = function (value) {
  jspb.Message.setProto3StringField(this, 2, value);
};

goog.object.extend(exports, proto);

/***/ })

})
//# sourceMappingURL=detail.js.a0be7c948f015f27d3b6.hot-update.js.map