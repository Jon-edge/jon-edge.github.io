/*! For license information please see app.3ff8094c.js.LICENSE.txt */
!function(){"use strict";var t,e={69774:function(t,e,n){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function s(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===h)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function d(){}function v(){}function p(){}var m={};l(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(C([])));g&&g!==e&&n.call(g,a)&&(m=g);var w=p.prototype=d.prototype=Object.create(m);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(i,a,u,c){var l=f(t[i],t,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==r(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(h).then((function(t){s.value=t,u(s)}),(function(t){return o("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return v.prototype=p,l(w,"constructor",p),l(p,"constructor",v),v.displayName=l(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,l(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),l(E.prototype,u,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),l(w,c,"Generator"),l(w,a,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function i(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}n(28594),n(74124),n(88981),n(2707),n(69720),n(89554),n(41539),n(54747),n(92222),n(69600),n(57327),n(74916),n(23123),n(73210),n(82526),n(41817),n(32165),n(66992),n(78783),n(33948),n(47042),n(68309),n(91038),n(88674),n(72443),n(39341),n(73706),n(10408),n(69070),n(30489),n(68304),n(39575),n(29135),n(92990),n(18927),n(33105),n(35035),n(74345),n(7174),n(32846),n(44731),n(77209),n(96319),n(58867),n(37789),n(33739),n(29368),n(14483),n(12056),n(3462),n(30678),n(27462),n(33824),n(55021),n(12974),n(15016),n(9653),n(40561),n(34553),n(47941);var l=function(t,e){var n=new Uint32Array(1);window.crypto.getRandomValues(n);var r=n[0]/4294967296;return Math.floor(r*(e-t+1))+t},s=function(){function t(e){var n,r,o=e.maxReelItems,i=void 0===o?30:o,a=e.removeWinner,u=void 0===a||a,c=e.reelContainerSelector,s=e.onSpinStart,f=e.onSpinEnd,h=e.onNameListChanged;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.nameList=[],this.havePreviousWinner=!1,this.reelContainer=document.querySelector(c),this.maxReelItems=i,this.shouldRemoveWinner=u,this.onSpinStart=s,this.onSpinEnd=f,this.onNameListChanged=h,this.reelAnimation=null===(n=this.reelContainer)||void 0===n?void 0:n.animate([{transform:"none",filter:"blur(0)"},{filter:"blur(1px)",offset:.5},{transform:"translateY(-".concat(120*(this.maxReelItems-1),"px)"),filter:"blur(0)"}],{duration:this.maxReelItems*l(25,150),easing:"ease-in-out",iterations:l(1,3)}),null===(r=this.reelAnimation)||void 0===r||r.cancel()}var e,n,r,a,s;return e=t,n=[{key:"names",get:function(){return this.nameList},set:function(t){var e;this.nameList=function(t){for(var e,n=t.length;0!==n;){e=l(0,n-1),n-=1;var r=[t[e],t[n]];t[n]=r[0],t[e]=r[1]}return t}(t),((null===(e=this.reelContainer)||void 0===e?void 0:e.children)?Array.from(this.reelContainer.children):[]).forEach((function(t){return t.remove()})),this.havePreviousWinner=!1,this.onNameListChanged&&this.onNameListChanged()}},{key:"shouldRemoveWinnerFromNameList",get:function(){return this.shouldRemoveWinner},set:function(t){this.shouldRemoveWinner=t}},{key:"spin",value:(a=o().mark((function e(){var n,r,a,u,c,l,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.nameList.length){e.next=3;break}return console.error("Name List is empty. Cannot start spinning."),e.abrupt("return",!1);case 3:if(this.onSpinStart&&this.onSpinStart(),n=this.reelContainer,r=this.reelAnimation,a=this.shouldRemoveWinner,n&&r){e.next=7;break}return e.abrupt("return",!1);case 7:for(u=t.shuffleNames(this.nameList);u.length&&u.length<this.maxReelItems;)u=[].concat(i(u),i(u));return u=u.slice(0,this.maxReelItems-Number(this.havePreviousWinner)),c=document.createDocumentFragment(),u.forEach((function(t){var e=document.createElement("div");e.innerHTML=t,c.appendChild(e)})),n.appendChild(c),l=u[u.length-1],a&&this.nameList.splice(this.nameList.findIndex((function(t){return t===u[u.length-1]})),1),s=new Promise((function(t){r.onfinish=t})),r.play(),e.next=19,s;case 19:return r.finish(),Array.from(n.children).slice(0,n.children.length-1).forEach((function(t){return t.remove()})),this.havePreviousWinner=!0,this.onSpinEnd&&this.onSpinEnd(l),e.abrupt("return",!0);case 24:case"end":return e.stop()}}),e,this)})),s=function(){var t=this,e=arguments;return new Promise((function(n,r){var o=a.apply(t,e);function i(t){u(o,n,r,i,c,"next",t)}function c(t){u(o,n,r,i,c,"throw",t)}i(void 0)}))},function(){return s.apply(this,arguments)})}],r=[{key:"shuffleNames",value:function(t){for(var e=Object.keys(t),n=[],r=0,o=e.length;r<t.length&&o>0;r+=1){var i=Math.random()*o|0,a=e[i];n.push(t[a]);var u=e[o-=1];e[o]=a,e[i]=u}return n}}],n&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f=(n(85827),{B8:7902.133,"A#8":7458.62,A8:7040,"G#8":6644.875,G8:6271.927,"F#8":5919.911,F8:5587.652,E8:5274.041,"D#8":4978.032,D8:4698.636,"C#8":4434.922,C8:4186.009,B7:3951.066,"A#7":3729.31,A7:3520,"G#7":3322.438,G7:3135.963,"F#7":2959.955,F7:2793.826,E7:2637.02,"D#7":2489.016,D7:2349.318,"C#7":2217.461,C7:2093.005,B6:1975.533,"A#6":1864.655,A6:1760,"G#6":1661.219,G6:1567.982,"F#6":1479.978,F6:1396.913,E6:1318.51,"D#6":1244.508,D6:1174.659,"C#6":1108.731,C6:1046.502,B5:987.7666,"A#5":932.3275,A5:880,"G#5":830.6094,G5:783.9909,"F#5":739.9888,F5:698.4565,E5:659.2551,"D#5":622.254,D5:587.3295,"C#5":554.3653,C5:523.2511,B4:493.8833,"A#4":466.1638,A4:440,"G#4":415.3047,G4:391.9954,"F#4":369.9944,F4:349.2282,E4:329.6276,"D#4":311.127,D4:293.6648,"C#4":277.1826,C4:261.6256,B3:246.9417,"A#3":233.0819,A3:220,"G#3":207.6523,G3:195.9977,"F#3":184.9972,F3:174.6141,E3:164.8138,"D#3":155.5635,D3:146.8324,"C#3":138.5913,C3:130.8128,B2:123.4708,"A#2":116.5409,A2:110,"G#2":103.8262,G2:97.99886,"F#2":92.49861,F2:87.30706,E2:82.40689,"D#2":77.78175,D2:73.41619,"C#2":69.29566,C2:65.40639,B1:61.73541,"A#1":58.27047,A1:55,"G#1":51.91309,G1:48.99943,"F#1":46.2493,F1:43.65353,E1:41.20344,"D#1":38.89087,D1:36.7081,"C#1":34.64783,C1:32.7032,B0:30.86771,"A#0":29.13524,A0:27.5,"G#0":25.95654,G0:24.49971,"F#0":23.12465,F0:21.82676,E0:20.60172,"D#0":19.44544,D0:18.35405,"C#0":17.32391,C0:16.3516});function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var v=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];h(this,t),(window.AudioContext||window.webkitAudioContext)&&(this.audioContext=new(window.AudioContext||window.webkitAudioContext)),this.isMuted=e}var e,n;return e=t,n=[{key:"mute",get:function(){return this.isMuted},set:function(t){this.isMuted=t}},{key:"playSound",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.type,r=void 0===n?"sine":n,o=e.easeOut,i=void 0===o||o,a=e.volume,u=void 0===a?.1:a,c=this.audioContext;if(c){var l=c.createOscillator(),s=c.createGain();l.connect(s),s.connect(c.destination),l.type=r,s.gain.value=u;var h=c.currentTime,d=t.reduce((function(t,e){var n=e.key,r=e.duration;return l.frequency.setValueAtTime(f[n],h+t),t+r}),0);i&&(s.gain.exponentialRampToValueAtTime(u,h+d-.1),s.gain.exponentialRampToValueAtTime(.01,h+d)),l.start(h),l.stop(h+d)}}},{key:"win",value:function(){if(this.isMuted)return Promise.resolve(!1);var t=[{key:"C4",duration:.175},{key:"D4",duration:.175},{key:"E4",duration:.175},{key:"G4",duration:.275},{key:"E4",duration:.15},{key:"G4",duration:.9}],e=t.reduce((function(t,e){return t+e.duration}),0);return this.playSound(t,{type:"triangle",volume:.1,easeOut:!0}),new Promise((function(t){setTimeout((function(){t(!0)}),1e3*e)}))}},{key:"spin",value:function(t){if(this.isMuted)return Promise.resolve(!1);var e=[{key:"D#3",duration:.1},{key:"C#3",duration:.1},{key:"C3",duration:.1}],n=e.reduce((function(t,e){return t+e.duration}),0),r=Math.floor(10*t);return this.playSound(Array.from(Array(r),(function(t,n){return e[n%3]})),{type:"triangle",easeOut:!1,volume:.1}),new Promise((function(t){setTimeout((function(){t(!0)}),1e3*n)}))}}],n&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),p=n(39883);function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function y(){y=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new S(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var u=x(a,n);if(u){if(u===s)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,a),i}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var s={};function f(){}function h(){}function d(){}var v={};u(v,o,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(C([])));g&&g!==e&&n.call(g,o)&&(v=g);var w=d.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==m(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function C(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=d,u(w,"constructor",d),u(d,"constructor",h),h.displayName=u(d,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(c(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),u(w,a,"Generator"),u(w,o,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:C(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}function g(t,e,n,r,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void n(t)}u.done?e(c):Promise.resolve(c).then(r,o)}function w(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}!function(){console.error("Initialize slot machine...");var t=document.getElementById("draw-button"),e=document.getElementById("fullscreen-button"),n=document.getElementById("settings-button"),r=document.getElementById("settings"),o=document.getElementById("settings-panel"),i=document.getElementById("settings-save"),a=document.getElementById("settings-close"),u=document.getElementById("sunburst"),c=document.getElementById("confetti-canvas"),l=document.getElementById("name-list"),f=document.getElementById("remove-from-list"),h=document.getElementById("enable-sound"),d=document.getElementById("lucky-draw"),m=document.createElement("div");if(m.id="leaderboard",d.appendChild(m),t&&e&&n&&r&&o&&i&&a&&u&&c&&l&&f&&h){var b=localStorage.getItem("namePickCounts"),E=null==b?{}:JSON.parse(b);if(c instanceof HTMLCanvasElement){var x,L=new v,k=["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],S=["Sam","Jon","Michael","RJ","Matthew","Daniel","William","Morgan","Madison","Fari"],C=["Cache","Peter","Madison"],O=["Fari","Morgan"],A=p.Z.create(c,{resize:!0,useWorker:!0}),j=function t(){var e=window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth,n=Math.max(.5,Math.min(1,e/1e3));A({particleCount:1,gravity:.8,spread:90,origin:{y:.6},colors:[k[Math.floor(Math.random()*k.length)]],scalar:n}),x=window.requestAnimationFrame(t)},F=function(){x&&window.cancelAnimationFrame(x),u.style.display="none"},I=function(){m.innerHTML="";var t=document.createElement("div");t.textContent="WINNERS:",m.appendChild(t),Object.entries(E).sort((function(t,e){return e[1]-t[1]})).forEach((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(e,n)||function(t,e){if(t){if("string"==typeof t)return w(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1],a=document.createElement("div");a.textContent="".concat(o,": ").concat(i),m.appendChild(a)}))},G=function(){var e,r=(e=y().mark((function e(r){return y().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.disabled=!1,n.disabled=!1,E[r]=(E[r]||0)+1,localStorage.setItem("namePickCounts",JSON.stringify(E)),I(),j(),u.style.display="block",e.next=9,L.win();case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(t){g(i,r,o,a,u,"next",t)}function u(t){g(i,r,o,a,u,"throw",t)}a(void 0)}))});return function(t){return r.apply(this,arguments)}}(),_=new s({reelContainerSelector:"#reel",maxReelItems:40,onSpinStart:function(){F(),t.disabled=!0,n.disabled=!0,L.spin(4)},onSpinEnd:G,onNameListChanged:F}),P=document.getElementById("slotOptions");null!=P&&P.addEventListener("change",(function(t){if(null!=t.target){var e,n=t.target.value;e="radio_devqa"===n?S:"radio_ops"===n?C:"radio_allcompany"===n?[].concat(S,C,O):S,_.names=e}}));var N=function(){o.scrollTop=0,r.style.display="none"};t.addEventListener("click",(function(){_.names.length||(_.names=S),_.spin()})),document.documentElement.requestFullscreen&&document.exitFullscreen||e.remove(),e.addEventListener("click",(function(){document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen()})),n.addEventListener("click",(function(){l.value=_.names.length?_.names.join("\n"):"",f.checked=_.shouldRemoveWinnerFromNameList,h.checked=!L.mute,r.style.display="block"})),i.addEventListener("click",(function(){_.names=l.value?l.value.split(/\n/).filter((function(t){return Boolean(t.trim())})):[],_.shouldRemoveWinnerFromNameList=f.checked,L.mute=!h.checked,N()})),a.addEventListener("click",N),I()}else console.error("Confetti canvas is not an instance of Canvas. This is possibly a bug.")}else console.error("One or more Element ID is invalid. This is possibly a bug.")}(),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./service-worker.js").then((function(t){})).catch((function(t){}))}))}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,r),i.exports}r.m=e,t=[],r.O=function(e,n,o,i){if(!n){var a=1/0;for(s=0;s<t.length;s++){n=t[s][0],o=t[s][1],i=t[s][2];for(var u=!0,c=0;c<n.length;c++)(!1&i||a>=i)&&Object.keys(r.O).every((function(t){return r.O[t](n[c])}))?n.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}i=i||0;for(var s=t.length;s>0&&t[s-1][2]>i;s--)t[s]=t[s-1];t[s]=[n,o,i]},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,a=n[0],u=n[1],c=n[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(c)var s=c(r)}for(e&&e(n);l<a.length;l++)i=a[l],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(s)},n=self.webpackChunkedge_hudl_master=self.webpackChunkedge_hudl_master||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=r.O(void 0,[736],(function(){return r(69774)}));o=r.O(o)}();