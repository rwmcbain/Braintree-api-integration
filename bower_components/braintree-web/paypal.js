!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,(t.braintree||(t.braintree={})).paypal=e()}}(function(){var e;return function t(e,n,r){function o(a,s){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(i)return i(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return o(n?n:t)},u,u.exports,t,e,n,r)}return n[a].exports}for(var i="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(t,n,r){(function(t){"use strict";!function(o,i){"object"==typeof r&&"undefined"!=typeof n?n.exports=i("undefined"==typeof t?o:t):"function"==typeof e&&e.amd?e([],function(){return i(o)}):o.framebus=i(o)}(this,function(e){function t(e){return null==e?!1:null==e.Window?!1:e.constructor!==e.Window?!1:(I.push(e),!0)}function n(e){var t,n={};for(t in P)P.hasOwnProperty(t)&&(n[t]=P[t]);return n._origin=e||"*",n}function r(e){var t,n,r=a(this);return s(e)?!1:s(r)?!1:(n=Array.prototype.slice.call(arguments,1),t=c(e,n,r),t===!1?!1:(h(m.top,t,r),!0))}function o(e,t){var n=a(this);return E(e,t,n)?!1:(O[n]=O[n]||{},O[n][e]=O[n][e]||[],O[n][e].push(t),!0)}function i(e,t){var n,r,o=a(this);if(E(e,t,o))return!1;if(r=O[o]&&O[o][e],!r)return!1;for(n=0;n<r.length;n++)if(r[n]===t)return r.splice(n,1),!0;return!1}function a(e){return e&&e._origin||"*"}function s(e){return"string"!=typeof e}function c(e,t,n){var r=!1,o={event:e,origin:n},i=t[t.length-1];"function"==typeof i&&(o.reply=A(i,n),t=t.slice(0,-1)),o.args=t;try{r=g+JSON.stringify(o)}catch(a){throw new Error("Could not stringify event: "+a.message)}return r}function l(e){var t,n,r,o;if(e.data.slice(0,g.length)!==g)return!1;try{t=JSON.parse(e.data.slice(g.length))}catch(i){return!1}return null!=t.reply&&(n=e.origin,r=e.source,o=t.reply,t.reply=function(e){var t=c(o,[e],n);return t===!1?!1:void r.postMessage(t,n)},t.args.push(t.reply)),t}function u(t){m||(m=t||e,m.addEventListener?m.addEventListener("message",f,!1):m.attachEvent?m.attachEvent("onmessage",f):null===m.onmessage?m.onmessage=f:m=null)}function p(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}function f(e){var t;s(e.data)||(t=l(e),t&&(d("*",t.event,t.args,e),d(e.origin,t.event,t.args,e),y(e.data,t.origin,e.source)))}function d(e,t,n,r){var o;if(O[e]&&O[e][t])for(o=0;o<O[e][t].length;o++)O[e][t][o].apply(r,n)}function _(e){return e.top!==e?!1:null==e.opener?!1:e.opener===e?!1:e.opener.closed===!0?!1:!0}function h(e,t,n){var r;try{for(e.postMessage(t,n),_(e)&&h(e.opener.top,t,n),r=0;r<e.frames.length;r++)h(e.frames[r],t,n)}catch(o){}}function y(e,t,n){var r,o;for(r=I.length-1;r>=0;r--)o=I[r],o.closed===!0?I=I.slice(r,1):n!==o&&h(o.top,e,t)}function A(e,t){function n(o,i){e(o,i),P.target(t).unsubscribe(r,n)}var r=p();return P.target(t).subscribe(r,n),r}function E(e,t,n){return s(e)?!0:"function"!=typeof t?!0:s(n)?!0:!1}var m,P,I=[],O={},g="/*framebus*/";return u(),P={target:n,include:t,publish:r,pub:r,trigger:r,emit:r,subscribe:o,sub:o,on:o,unsubscribe:i,unsub:i,off:i}})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,n){"use strict";var r=e("./lib/set-attributes"),o=e("./lib/default-attributes"),i=e("./lib/assign");t.exports=function(e){var t=document.createElement("iframe"),n=i({},o,e);return n.style&&"string"!=typeof n.style&&(i(t.style,n.style),delete n.style),r(t,n),t.getAttribute("id")||(t.id=t.name),t}},{"./lib/assign":3,"./lib/default-attributes":4,"./lib/set-attributes":5}],3:[function(e,t,n){"use strict";t.exports=function(e){var t=Array.prototype.slice.call(arguments,1);return t.forEach(function(t){"object"==typeof t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}},{}],4:[function(e,t,n){t.exports={src:"about:blank",frameBorder:0,allowtransparency:!0,scrolling:"no"}},{}],5:[function(e,t,n){"use strict";t.exports=function(e,t){var n;for(var r in t)t.hasOwnProperty(r)&&(n=t[r],null==n?e.removeAttribute(r):e.setAttribute(r,n))}},{}],6:[function(e,t,n){"use strict";var r=e("./lib/error");t.exports={CALLBACK_REQUIRED:{type:r.types.MERCHANT,code:"CALLBACK_REQUIRED"},INSTANTIATION_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"INSTANTIATION_OPTION_REQUIRED"},INCOMPATIBLE_VERSIONS:{type:r.types.MERCHANT,code:"INCOMPATIBLE_VERSIONS"},METHOD_CALLED_AFTER_TEARDOWN:{type:r.types.MERCHANT,code:"METHOD_CALLED_AFTER_TEARDOWN"},BRAINTREE_API_ACCESS_RESTRICTED:{type:r.types.MERCHANT,code:"BRAINTREE_API_ACCESS_RESTRICTED",message:"Your access is restricted and cannot use this part of the Braintree API."}}},{"./lib/error":18}],7:[function(e,t,n){"use strict";function r(e,t){var n,r=t?i(t):{},s=o(e.authorization).attrs,c=i(e.analyticsMetadata);r.braintreeLibraryVersion=a.BRAINTREE_LIBRARY_VERSION;for(n in r._meta)r._meta.hasOwnProperty(n)&&(c[n]=r._meta[n]);return r._meta=c,s.tokenizationKey?r.tokenizationKey=s.tokenizationKey:r.authorizationFingerprint=s.authorizationFingerprint,r}var o=e("./create-authorization-data"),i=e("./json-clone"),a=e("./constants");t.exports=r},{"./constants":13,"./create-authorization-data":15,"./json-clone":29}],8:[function(e,t,n){"use strict";function r(e){return Math.floor(e/1e3)}function o(e,t,n){var o=e.getConfiguration(),s=e._request,c=r(Date.now()),l=o.gatewayConfiguration.analytics.url,u={analytics:[{kind:i.ANALYTICS_PREFIX+t,timestamp:c}]};s({url:l,method:"post",data:a(o,u),timeout:i.ANALYTICS_REQUEST_TIMEOUT_MS},n)}var i=e("./constants"),a=e("./add-metadata");t.exports={sendEvent:o}},{"./add-metadata":7,"./constants":13}],9:[function(e,t,n){(function(e){"use strict";function n(t){return t=t||e.navigator.userAgent,t.indexOf("Opera Mini")>-1}function r(t){return t=t||e.navigator.userAgent,s(t)&&t.indexOf("Firefox")>-1}function o(t){return t=t||e.navigator.userAgent,-1!==t.indexOf("MSIE")?parseInt(t.replace(/.*MSIE ([0-9]+)\..*/,"$1"),10):/Trident.*rv:11/.test(t)?11:null}function i(t){return t=t||e.location.protocol,"https:"===t}function a(t){return t=t||e.navigator.userAgent,/iPhone|iPod|iPad/.test(t)}function s(t){return t=t||e.navigator.userAgent,/Android/.test(t)}function c(t){return t=t||e.navigator.userAgent,!(u(t)||p(t)||n(t))}function l(e){return/\bGSA\b/.test(e)}function u(t){return t=t||e.navigator.userAgent,a(t)?l(t)?!0:/.+AppleWebKit(?!.*Safari)/.test(t):!1}function p(t){var r=/Version\/[\d\.]+/;return t=t||e.navigator.userAgent,s(t)?r.test(t)&&!n(t):!1}t.exports={isOperaMini:n,isAndroidFirefox:r,getIEVersion:o,isHTTPS:i,isIos:a,isAndroid:s,supportsPopups:c}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,n){"use strict";function r(e,t){var n,r,i=document.createElement("a");return i.href=t,r="https:"===i.protocol?i.host.replace(/:443$/,""):"http:"===i.protocol?i.host.replace(/:80$/,""):i.host,n=i.protocol+"//"+r,n===e?!0:(i.href=e,o(e))}var o=e("../is-whitelisted-domain");t.exports={checkOrigin:r}},{"../is-whitelisted-domain":28}],11:[function(e,t,n){"use strict";var r=e("../enumerate");t.exports=r(["CONFIGURATION_REQUEST"],"bus:")},{"../enumerate":17}],12:[function(e,t,n){"use strict";function r(e){if(e=e||{},this.channel=e.channel,!this.channel)throw new s({type:s.types.INTERNAL,code:"MISSING_CHANNEL_ID",message:"Channel ID must be specified."});this.merchantUrl=e.merchantUrl,this._isDestroyed=!1,this._isVerbose=!1,this._listeners=[],this._log("new bus on channel "+this.channel,[location.href])}var o=e("framebus"),i=e("./events"),a=e("./check-origin").checkOrigin,s=e("../error");r.prototype.on=function(e,t){var n,r,i=t,s=this;this._isDestroyed||(this.merchantUrl&&(i=function(){a(this.origin,s.merchantUrl)&&t.apply(this,arguments)}),n=this._namespaceEvent(e),r=Array.prototype.slice.call(arguments),r[0]=n,r[1]=i,this._log("on",r),o.on.apply(o,r),this._listeners.push({eventName:e,handler:i,originalHandler:t}))},r.prototype.emit=function(e){var t;this._isDestroyed||(t=Array.prototype.slice.call(arguments),t[0]=this._namespaceEvent(e),this._log("emit",t),o.emit.apply(o,t))},r.prototype._offDirect=function(e){var t=Array.prototype.slice.call(arguments);this._isDestroyed||(t[0]=this._namespaceEvent(e),this._log("off",t),o.off.apply(o,t))},r.prototype.off=function(e,t){var n,r,o=t;if(!this._isDestroyed){if(this.merchantUrl)for(n=0;n<this._listeners.length;n++)r=this._listeners[n],r.originalHandler===t&&(o=r.handler);this._offDirect(e,o)}},r.prototype._namespaceEvent=function(e){return["braintree",this.channel,e].join(":")},r.prototype.teardown=function(){var e,t;for(t=0;t<this._listeners.length;t++)e=this._listeners[t],this._offDirect(e.eventName,e.handler);this._listeners.length=0,this._isDestroyed=!0},r.prototype._log=function(e,t){this._isVerbose&&console.log(e,t)},r.events=i,t.exports=r},{"../error":18,"./check-origin":10,"./events":11,framebus:1}],13:[function(e,t,n){"use strict";var r="3.6.2",o="web";t.exports={ANALYTICS_PREFIX:"web.",ANALYTICS_REQUEST_TIMEOUT_MS:2e3,INTEGRATION_TIMEOUT_MS:6e4,VERSION:r,INTEGRATION:"custom",SOURCE:"client",PLATFORM:o,BRAINTREE_LIBRARY_VERSION:"braintree/"+o+"/"+r}},{}],14:[function(e,t,n){"use strict";var r=e("./error"),o=e("../errors");t.exports=function(e,t){t.forEach(function(t){e[t]=function(){throw new r({type:o.METHOD_CALLED_AFTER_TEARDOWN.type,code:o.METHOD_CALLED_AFTER_TEARDOWN.code,message:t+" cannot be called after teardown."})}})}},{"../errors":6,"./error":18}],15:[function(e,t,n){"use strict";function r(e){return/^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)}function o(e){var t=e.split("_"),n=t[0],r=t.slice(2).join("_");return{merchantId:r,environment:n}}function i(e){var t,n,i={attrs:{},configUrl:""};return r(e)?(n=o(e),i.attrs.tokenizationKey=e,i.configUrl=s[n.environment]+"/merchants/"+n.merchantId+"/client_api/v1/configuration"):(t=JSON.parse(a(e)),i.attrs.authorizationFingerprint=t.authorizationFingerprint,i.configUrl=t.configUrl),i}var a=e("../lib/polyfill").atob,s={production:"https://api.braintreegateway.com:443",sandbox:"https://api.sandbox.braintreegateway.com:443"};t.exports=i},{"../lib/polyfill":32}],16:[function(e,t,n){"use strict";t.exports=function(e){return function(){var t=arguments;setTimeout(function(){e.apply(null,t)},1)}}},{}],17:[function(e,t,n){"use strict";function r(e,t){return t=null==t?"":t,e.reduce(function(e,n){return e[n]=t+n,e},{})}t.exports=r},{}],18:[function(e,t,n){"use strict";function r(e){if(!r.types.hasOwnProperty(e.type))throw new Error(e.type+" is not a valid type.");if(!e.code)throw new Error("Error code required.");if(!e.message)throw new Error("Error message required.");this.name="BraintreeError",this.code=e.code,this.message=e.message,this.type=e.type,this.details=e.details}var o=e("./enumerate");r.prototype=Object.create(Error.prototype),r.prototype.constructor=r,r.types=o(["CUSTOMER","MERCHANT","NETWORK","INTERNAL","UNKNOWN"]),t.exports=r},{"./enumerate":17}],19:[function(e,t,n){"use strict";function r(){}function o(e){if(!e)throw new Error("Valid configuration is required");if(_.forEach(function(t){if(!e.hasOwnProperty(t))throw new Error("A valid frame "+t+" must be provided")}),!/^[\w_]+$/.test(e.name))throw new Error("A valid frame name must be provided")}function i(e){o(e),this._serviceId=p().replace(/-/g,""),this._options={name:e.name+"_"+this._serviceId,dispatchFrameUrl:e.dispatchFrameUrl,openFrameUrl:e.openFrameUrl},this._state=e.state,this._bus=new s({channel:this._serviceId}),this._setBusEvents()}var a=e("./popup"),s=e("../../bus"),c=e("../shared/events"),l=e("../shared/errors"),u=e("../shared/constants"),p=e("../../uuid"),f=e("iframer"),d=e("../../error"),_=["name","dispatchFrameUrl","openFrameUrl"];i.prototype.initialize=function(e){var t=function(){e(),this._bus.off(c.DISPATCH_FRAME_READY,t)}.bind(this);this._bus.on(c.DISPATCH_FRAME_READY,t),this._writeDispatchFrame()},i.prototype._writeDispatchFrame=function(){var e=u.DISPATCH_FRAME_NAME+"_"+this._serviceId,t=this._options.dispatchFrameUrl;this._dispatchFrame=f({name:e,src:t,"class":u.DISPATCH_FRAME_CLASS,height:0,width:0,style:{position:"absolute",left:"-9999px"}}),document.body.appendChild(this._dispatchFrame)},i.prototype._setBusEvents=function(){this._bus.on(c.DISPATCH_FRAME_REPORT,function(e,t){this._onCompleteCallback&&this._onCompleteCallback.call(null,e.err,e.payload),this._onCompleteCallback=null,t&&t()}.bind(this)),this._bus.on(s.events.CONFIGURATION_REQUEST,function(e){e(this._state)}.bind(this))},i.prototype.open=function(e){return this._onCompleteCallback=e,this._frame=a.open(this._options),this.isFrameClosed()?(this._cleanupFrame(),void(e&&e(new d(l.FRAME_SERVICE_FRAME_OPEN_FAILED)))):void this._pollForPopupClose()},i.prototype.redirect=function(e){this._frame&&!this.isFrameClosed()&&(this._frame.location.href=e)},i.prototype.close=function(){this.isFrameClosed()||this._frame.close()},i.prototype.focus=function(){this.isFrameClosed()||this._frame.focus()},i.prototype.createHandler=function(e){return e=e||{},{close:function(){e.beforeClose&&e.beforeClose(),this.close()}.bind(this),focus:function(){e.beforeFocus&&e.beforeFocus(),this.focus()}.bind(this)}},i.prototype.createNoopHandler=function(){return{close:r,focus:r}},i.prototype.teardown=function(){this.close(),this._dispatchFrame.parentNode.removeChild(this._dispatchFrame),this._dispatchFrame=null,this._cleanupFrame()},i.prototype.isFrameClosed=function(){return null==this._frame||this._frame.closed},i.prototype._cleanupFrame=function(){this._frame=null,clearInterval(this._popupInterval),this._popupInterval=null},i.prototype._pollForPopupClose=function(){return this._popupInterval=setInterval(function(){this.isFrameClosed()&&(this._cleanupFrame(),this._onCompleteCallback&&this._onCompleteCallback(new d(l.FRAME_SERVICE_FRAME_CLOSED)))}.bind(this),u.POPUP_POLL_INTERVAL),this._popupInterval},t.exports=i},{"../../bus":12,"../../error":18,"../../uuid":35,"../shared/constants":25,"../shared/errors":26,"../shared/events":27,"./popup":22,iframer:2}],20:[function(e,t,n){"use strict";var r=e("./frame-service");t.exports={create:function(e,t){var n=new r(e);n.initialize(function(){t(n)})}}},{"./frame-service":19}],21:[function(e,t,n){"use strict";var r=e("../../shared/constants"),o=e("./position");t.exports=function(){return[r.POPUP_BASE_OPTIONS,"top="+o.top(),"left="+o.left()].join(",")}},{"../../shared/constants":25,"./position":24}],22:[function(e,t,n){"use strict";t.exports={open:e("./open")}},{"./open":23}],23:[function(e,t,n){(function(n){"use strict";var r=e("./compose-options");t.exports=function(e){return n.open(e.openFrameUrl,e.name,r())}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./compose-options":21}],24:[function(e,t,n){(function(n){"use strict";function r(){var e=n.outerHeight||document.documentElement.clientHeight,t=null==n.screenY?n.screenTop:n.screenY;return i(e,a.POPUP_HEIGHT,t)}function o(){var e=n.outerWidth||document.documentElement.clientWidth,t=null==n.screenX?n.screenLeft:n.screenX;return i(e,a.POPUP_WIDTH,t)}function i(e,t,n){return(e-t)/2+n}var a=e("../../shared/constants");t.exports={top:r,left:o,center:i}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../../shared/constants":25}],25:[function(e,t,n){"use strict";var r=535,o=450;t.exports={DISPATCH_FRAME_NAME:"dispatch",DISPATCH_FRAME_CLASS:"braintree-dispatch-frame",POPUP_BASE_OPTIONS:"resizable,scrollbars,height="+r+",width="+o,POPUP_WIDTH:o,POPUP_HEIGHT:r,POPUP_POLL_INTERVAL:100,POPUP_CLOSE_TIMEOUT:100}},{}],26:[function(e,t,n){"use strict";var r=e("../../error");t.exports={FRAME_SERVICE_FRAME_CLOSED:{type:r.types.INTERNAL,code:"FRAME_SERVICE_FRAME_CLOSED",message:"Frame closed before tokenization could occur."},FRAME_SERVICE_FRAME_OPEN_FAILED:{type:r.types.INTERNAL,code:"FRAME_SERVICE_FRAME_OPEN_FAILED",message:"Frame failed to open."}}},{"../../error":18}],27:[function(e,t,n){"use strict";var r=e("../../enumerate");t.exports=r(["DISPATCH_FRAME_READY","DISPATCH_FRAME_REPORT"],"frameService:")},{"../../enumerate":17}],28:[function(e,t,n){"use strict";function r(e){return e.split(".").slice(-2).join(".")}function o(e){var t;return e=e.toLowerCase(),/^https:/.test(e)?(i=i||document.createElement("a"),i.href=e,t=r(i.hostname),a.hasOwnProperty(t)):!1}var i,a={"paypal.com":1,"braintreepayments.com":1,"braintreegateway.com":1};t.exports=o},{}],29:[function(e,t,n){"use strict";t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],30:[function(e,t,n){"use strict";t.exports=function(e){return Object.keys(e).filter(function(t){return"function"==typeof e[t]})}},{}],31:[function(e,t,n){"use strict";function r(e){var t=!1;return function(){t||(t=!0,e.apply(null,arguments))}}t.exports=r},{}],32:[function(e,t,n){(function(e){"use strict";function n(e){var t,n,r,o,i,a,s,c,l=new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",p="";if(!l.test(e))throw new Error("Non base64 encoded input passed to window.atob polyfill");c=0;do o=u.indexOf(e.charAt(c++)),i=u.indexOf(e.charAt(c++)),a=u.indexOf(e.charAt(c++)),s=u.indexOf(e.charAt(c++)),t=(63&o)<<2|i>>4&3,n=(15&i)<<4|a>>2&15,r=(3&a)<<6|63&s,p+=String.fromCharCode(t)+(n?String.fromCharCode(n):"")+(r?String.fromCharCode(r):"");while(c<e.length);return p}var r="function"==typeof e.atob?e.atob:n;t.exports={atob:r,_atob:n}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],33:[function(e,t,n){(function(e){"use strict";function n(e){var t;for(t in e)if(e.hasOwnProperty(t))return!0;return!1}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&"[object Array]"===Object.prototype.toString.call(e)||!1}function o(t){var n,r;return t=t||e.location.href,/\?/.test(t)?(n=t.replace(/#.*$/,"").replace(/^.*\?/,"").split("&"),r=n.reduce(function(e,t){var n=t.split("="),r=decodeURIComponent(n[0]),o=decodeURIComponent(n[1]);return e[r]=o,e},{})):{}}function i(e,t){var n,o,a,s=[];for(a in e)e.hasOwnProperty(a)&&(o=e[a],n=t?r(e)?t+"[]":t+"["+a+"]":a,"object"==typeof o?s.push(i(o,n)):s.push(encodeURIComponent(n)+"="+encodeURIComponent(o)));return s.join("&")}function a(e,t){return e=e||"",null!=t&&"object"==typeof t&&n(t)&&(e+=-1===e.indexOf("?")?"?":"",e+=-1!==e.indexOf("=")?"&":"",e+=i(t)),e}t.exports={parse:o,stringify:i,queryify:a}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],34:[function(e,t,n){"use strict";var r=e("./error"),o=e("../errors");t.exports=function(e,t){if("function"!=typeof e)throw new r({type:o.CALLBACK_REQUIRED.type,code:o.CALLBACK_REQUIRED.code,message:t+" must include a callback function."})}},{"../errors":6,"./error":18}],35:[function(e,t,n){"use strict";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"===e?t:3&t|8;return n.toString(16)})}t.exports=r},{}],36:[function(e,t,n){"use strict";function r(e){this._client=e.client,this._assetsUrl=e.client.getConfiguration().gatewayConfiguration.paypal.assetsUrl+"/web/"+s,this._loadingFrameUrl=this._assetsUrl+"/html/paypal-landing-frame.min.html",this._authorizationInProgress=!1}var o=e("../../lib/frame-service/external"),i=e("../../lib/error"),a=e("../../lib/once"),s="3.6.2",c=e("../shared/constants"),l=e("../../lib/constants").INTEGRATION_TIMEOUT_MS,u=e("../../lib/analytics"),p=e("../../lib/throw-if-no-callback"),f=e("../../lib/methods"),d=e("../../lib/deferred"),_=e("../shared/errors"),h=e("../../lib/convert-methods-to-error"),y=e("../../lib/querystring");r.prototype._initialize=function(e){var t=this._client,n=setTimeout(function(){u.sendEvent(t,"paypal.load.timed-out")},l);o.create({name:c.LANDING_FRAME_NAME,dispatchFrameUrl:this._assetsUrl+"/html/dispatch-frame.min.html",openFrameUrl:this._loadingFrameUrl},function(r){this._frameService=r,clearTimeout(n),u.sendEvent(t,"paypal.load.succeeded"),e()}.bind(this))},r.prototype.tokenize=function(e,t){var n=this._client;return p(t,"tokenize"),t=a(d(t)),e&&c.FLOW_ENDPOINTS.hasOwnProperty(e.flow)?(this._authorizationInProgress?(u.sendEvent(n,"paypal.tokenization.error.already-opened"),t(new i(_.PAYPAL_TOKENIZATION_REQUEST_ACTIVE))):(this._authorizationInProgress=!0,u.sendEvent(n,"paypal.tokenization.opened"),this._navigateFrameToAuth(e,t),this._frameService.open(this._createFrameServiceCallback(e,t))),this._frameService.createHandler({beforeClose:function(){u.sendEvent(n,"paypal.tokenization.closed.by-merchant")}})):(t(new i(_.PAYPAL_FLOW_OPTION_REQUIRED)),this._frameService.createNoopHandler())},r.prototype._createFrameServiceCallback=function(e,t){var n=this._client;return function(r,o){this._authorizationInProgress=!1,r?"FRAME_SERVICE_FRAME_CLOSED"===r.code?(u.sendEvent(n,"paypal.tokenization.closed.by-user"),t(new i(_.PAYPAL_POPUP_CLOSED))):"FRAME_SERVICE_FRAME_OPEN_FAILED"===r.code&&t(new i(_.PAYPAL_POPUP_OPEN_FAILED)):this._tokenizePayPal(e,o,t)}.bind(this)},r.prototype._tokenizePayPal=function(e,t,n){var r=this._client;this._frameService.redirect(this._loadingFrameUrl),r.request({endpoint:"payment_methods/paypal_accounts",method:"post",data:this._formatTokenizeData(e,t)},function(e,t){e?(u.sendEvent(r,"paypal.tokenization.failed"),n(e instanceof i?e:new i({type:_.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,code:_.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,message:_.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message,details:{originalError:e}}))):(u.sendEvent(r,"paypal.tokenization.success"),n(null,this._formatTokenizePayload(t))),this._frameService.close()}.bind(this))},r.prototype._formatTokenizePayload=function(e){var t,n={};return e.paypalAccounts&&(n=e.paypalAccounts[0]),t={nonce:n.nonce,details:{},type:n.type},n.details&&n.details.payerInfo&&(t.details=n.details.payerInfo),t},r.prototype._formatTokenizeData=function(e,t){var n=this._client.getConfiguration(),r=n.gatewayConfiguration,o="TOKENIZATION_KEY"===n.authorizationType,i={paypalAccount:{correlationId:this._frameService._serviceId,options:{validate:"vault"===e.flow&&!o}}};return t.ba_token?i.paypalAccount.billingAgreementToken=t.ba_token:(i.paypalAccount.paymentToken=t.paymentId,i.paypalAccount.payerId=t.PayerID,i.paypalAccount.unilateral=r.paypal.unvettedMerchant,e.hasOwnProperty("intent")&&(i.paypalAccount.intent=e.intent)),i},r.prototype._navigateFrameToAuth=function(e,t){var n=this._client,r="paypal_hermes/"+c.FLOW_ENDPOINTS[e.flow];n.request({endpoint:r,method:"post",data:this._formatPaymentResourceData(e)},function(n,r,o){var a;n?(t(422===o?new i({type:_.PAYPAL_INVALID_PAYMENT_OPTION.type,code:_.PAYPAL_INVALID_PAYMENT_OPTION.code,message:_.PAYPAL_INVALID_PAYMENT_OPTION.message,details:{originalError:n}}):n instanceof i?n:new i({type:_.PAYPAL_FLOW_FAILED.type,code:_.PAYPAL_FLOW_FAILED.code,message:_.PAYPAL_FLOW_FAILED.message,details:{originalError:n}})),this._frameService.close()):(a="checkout"===e.flow?r.paymentResource.redirectUrl:r.agreementSetup.approvalUrl,"commit"===e.useraction&&(a=y.queryify(a,{useraction:"commit"})),this._frameService.redirect(a))}.bind(this))},r.prototype._formatPaymentResourceData=function(e){var t,n=this._client.getConfiguration().gatewayConfiguration,r=this._frameService._serviceId,o={returnUrl:n.paypal.assetsUrl+"/web/"+s+"/html/paypal-redirect-frame.min.html?channel="+r,cancelUrl:n.paypal.assetsUrl+"/web/"+s+"/html/paypal-cancel-frame.min.html?channel="+r,correlationId:r,experienceProfile:{brandName:e.displayName||n.paypal.displayName,localeCode:e.locale,noShipping:(!e.enableShippingAddress).toString(),addressOverride:e.shippingAddressEditable===!1}};if("checkout"===e.flow){o.amount=e.amount,o.currencyIsoCode=e.currency,o.offerPaypalCredit=e.offerCredit===!0,e.hasOwnProperty("intent")&&(o.intent=e.intent);for(t in e.shippingAddressOverride)e.shippingAddressOverride.hasOwnProperty(t)&&(o[t]=e.shippingAddressOverride[t])}else o.shippingAddress=e.shippingAddressOverride,e.billingAgreementDescription&&(o.description=e.billingAgreementDescription);return o},r.prototype.teardown=function(e){this._frameService.teardown(),h(this,f(r.prototype)),u.sendEvent(this._client,"paypal.teardown-completed"),"function"==typeof e&&(e=d(e))()},t.exports=r},{"../../lib/analytics":8,"../../lib/constants":13,"../../lib/convert-methods-to-error":14,"../../lib/deferred":16,"../../lib/error":18,"../../lib/frame-service/external":20,"../../lib/methods":30,"../../lib/once":31,"../../lib/querystring":33,"../../lib/throw-if-no-callback":34,"../shared/constants":38,"../shared/errors":39}],37:[function(e,t,n){"use strict";function r(e,t){var n,r,d;return l(t,"create"),t=s(t),null==e.client?void t(new i({type:p.INSTANTIATION_OPTION_REQUIRED.type,code:p.INSTANTIATION_OPTION_REQUIRED.code,message:"options.client is required when instantiating PayPal."})):(n=e.client.getConfiguration(),d=n.analyticsMetadata.sdkVersion,d!==f?void t(new i({type:p.INCOMPATIBLE_VERSIONS.type,code:p.INCOMPATIBLE_VERSIONS.code,message:"Client (version "+d+") and PayPal (version "+f+") components must be from the same SDK version."})):n.gatewayConfiguration.paypalEnabled!==!0?void t(new i(c.PAYPAL_NOT_ENABLED)):a.supportsPopups()?(o.sendEvent(e.client,"paypal.initialized"),r=new u(e),void r._initialize(function(){t(null,r)})):void t(new i(c.PAYPAL_BROWSER_NOT_SUPPORTED)))}var o=e("../lib/analytics"),i=e("../lib/error"),a=e("../lib/browser-detection"),s=e("../lib/deferred"),c=e("./shared/errors"),l=e("../lib/throw-if-no-callback"),u=e("./external/paypal"),p=e("../errors"),f="3.6.2";t.exports={create:r,VERSION:f}},{"../errors":6,"../lib/analytics":8,"../lib/browser-detection":9,"../lib/deferred":16,"../lib/error":18,"../lib/throw-if-no-callback":34,"./external/paypal":36,"./shared/errors":39}],38:[function(e,t,n){"use strict";var r=535,o=450;t.exports={AUTH_INIT_ERROR_MESSAGE:"Could not initialize PayPal flow.",LANDING_FRAME_NAME:"braintreepaypallanding",POPUP_BASE_OPTIONS:"resizable,scrollbars,height="+r+",width="+o,POPUP_WIDTH:o,POPUP_HEIGHT:r,POPUP_POLL_INTERVAL:100,FLOW_ENDPOINTS:{checkout:"create_payment_resource",vault:"setup_billing_agreement"}}},{}],39:[function(e,t,n){"use strict";var r=e("../../lib/error");t.exports={PAYPAL_NOT_ENABLED:{type:r.types.MERCHANT,code:"PAYPAL_NOT_ENABLED",message:"PayPal is not enabled for this merchant."},PAYPAL_TOKENIZATION_REQUEST_ACTIVE:{type:r.types.MERCHANT,code:"PAYPAL_TOKENIZATION_REQUEST_ACTIVE",message:"Another tokenization request is active."},PAYPAL_ACCOUNT_TOKENIZATION_FAILED:{type:r.types.NETWORK,code:"PAYPAL_ACCOUNT_TOKENIZATION_FAILED",message:"Could not tokenize user's PayPal account."},PAYPAL_FLOW_FAILED:{type:r.types.NETWORK,code:"PAYPAL_FLOW_FAILED",message:"Could not initialize PayPal flow."},PAYPAL_FLOW_OPTION_REQUIRED:{type:r.types.MERCHANT,code:"PAYPAL_FLOW_OPTION_REQUIRED",message:"PayPal flow property is invalid or missing."},PAYPAL_BROWSER_NOT_SUPPORTED:{type:r.types.CUSTOMER,code:"PAYPAL_BROWSER_NOT_SUPPORTED",message:"Browser is not supported."},PAYPAL_POPUP_OPEN_FAILED:{type:r.types.MERCHANT,code:"PAYPAL_POPUP_OPEN_FAILED",message:"PayPal popup failed to open, make sure to tokenize in response to a user action."},PAYPAL_POPUP_CLOSED:{type:r.types.CUSTOMER,code:"PAYPAL_POPUP_CLOSED",message:"Customer closed PayPal popup before authorizing."},PAYPAL_INVALID_PAYMENT_OPTION:{type:r.types.MERCHANT,code:"PAYPAL_INVALID_PAYMENT_OPTION",message:"PayPal payment options are invalid."}}},{"../../lib/error":18}]},{},[37])(37)});
