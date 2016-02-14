//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);


/*! svg.js v2.2.2 MIT*/;!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=t.document?e(t,t.document):function(t){return e(t,t.document)}:t.SVG=e(t,t.document)}("undefined"!=typeof window?window:this,function(t,e){function n(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}function i(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function r(t){return t.charAt(0).toUpperCase()+t.slice(1)}function s(t){return 4==t.length?["#",t.substring(1,2),t.substring(1,2),t.substring(2,3),t.substring(2,3),t.substring(3,4),t.substring(3,4)].join(""):t}function o(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function a(t,e,n){return null==n?n=t.height/t.width*e:null==e&&(e=t.width/t.height*n),{width:e,height:n}}function h(t,e,n){return{x:e*t.a+n*t.c+0,y:e*t.b+n*t.d+0}}function u(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function l(t){return t instanceof y.Matrix||(t=new y.Matrix(t)),t}function c(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function f(t){return t=t.replace(y.regex.whitespace,"").replace(y.regex.matrix,"").split(y.regex.matrixElements),u(y.utils.map(t,function(t){return parseFloat(t)}))}function d(t,e){return"number"==typeof t.from?t.from+(t.to-t.from)*e:t instanceof y.Color||t instanceof y.Number||t instanceof y.Matrix?t.at(e):1>e?t.from:t.to}function p(t){for(var e=0,n=t.length,i="";n>e;e++)i+=t[e][0],null!=t[e][1]&&(i+=t[e][1],null!=t[e][2]&&(i+=" ",i+=t[e][2],null!=t[e][3]&&(i+=" ",i+=t[e][3],i+=" ",i+=t[e][4],null!=t[e][5]&&(i+=" ",i+=t[e][5],i+=" ",i+=t[e][6],null!=t[e][7]&&(i+=" ",i+=t[e][7])))));return i+" "}function m(t){for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e]instanceof SVGElement&&m(t.childNodes[e]);return y.adopt(t).id(y.eid(t.nodeName))}function x(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function g(t){var e=t.toString().match(y.regex.reference);return e?e[1]:void 0}var y=this.SVG=function(t){return y.supported?(t=new y.Doc(t),y.parser||y.prepare(t),t):void 0};if(y.ns="http://www.w3.org/2000/svg",y.xmlns="http://www.w3.org/2000/xmlns/",y.xlink="http://www.w3.org/1999/xlink",y.svgjs="http://svgjs.com/svgjs",y.supported=function(){return!!e.createElementNS&&!!e.createElementNS(y.ns,"svg").createSVGRect}(),!y.supported)return!1;y.did=1e3,y.eid=function(t){return"Svgjs"+r(t)+y.did++},y.create=function(t){var n=e.createElementNS(this.ns,t);return n.setAttribute("id",this.eid(t)),n},y.extend=function(){var t,e,n,i;for(t=[].slice.call(arguments),e=t.pop(),i=t.length-1;i>=0;i--)if(t[i])for(n in e)t[i].prototype[n]=e[n];y.Set&&y.Set.inherit&&y.Set.inherit()},y.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,y.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&y.extend(e,t.extend),t.construct&&y.extend(t.parent||y.Container,t.construct),e},y.adopt=function(t){if(t.instance)return t.instance;var e;return e="svg"==t.nodeName?t.parentNode instanceof SVGElement?new y.Nested:new y.Doc:"linearGradient"==t.nodeName?new y.Gradient("linear"):"radialGradient"==t.nodeName?new y.Gradient("radial"):y[r(t.nodeName)]?new(y[r(t.nodeName)]):new y.Element(t),e.type=t.nodeName,e.node=t,t.instance=e,e instanceof y.Doc&&e.namespace().defs(),e.setData(JSON.parse(t.getAttribute("svgjs:data"))||{}),e},y.prepare=function(t){var n=e.getElementsByTagName("body")[0],i=(n?new y.Doc(n):t.nested()).size(2,0),r=y.create("path");i.node.appendChild(r),y.parser={body:n||t.parent(),draw:i.style("opacity:0;position:fixed;left:100%;top:100%;overflow:hidden"),poly:i.polyline().node,path:r}},y.regex={unit:/^(-?[\d\.]+)([a-z%]{0,2})$/,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,matrix:/matrix\(|\)/g,matrixElements:/,*\s+|,/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^-?[\d\.]+$/,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,negExp:/e\-/gi,comma:/,/g,hyphen:/\-/g,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,whitespaces:/\s+/,X:/X/g},y.utils={map:function(t,e){var n,i=t.length,r=[];for(n=0;i>n;n++)r.push(e(t[n]));return r},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(t){return[].filter.call(t,function(t){return t instanceof SVGElement})}},y.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},y.Color=function(t){var e;this.r=0,this.g=0,this.b=0,"string"==typeof t?y.regex.isRgb.test(t)?(e=y.regex.rgb.exec(t.replace(/\s/g,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):y.regex.isHex.test(t)&&(e=y.regex.hex.exec(s(t)),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"==typeof t&&(this.r=t.r,this.g=t.g,this.b=t.b)},y.extend(y.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+o(this.r)+o(this.g)+o(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new y.Color(t),this},at:function(t){return this.destination?(t=0>t?0:t>1?1:t,new y.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),y.Color.test=function(t){return t+="",y.regex.isHex.test(t)||y.regex.isRgb.test(t)},y.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},y.Color.isColor=function(t){return y.Color.isRgb(t)||y.Color.test(t)},y.Array=function(t,e){t=(t||[]).valueOf(),0==t.length&&e&&(t=e.valueOf()),this.value=this.parse(t)},y.extend(y.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],n=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(n);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,n=[];e>t;t++)-1==n.indexOf(this.value[t])&&n.push(this.value[t]);return this.value=n},at:function(t){if(!this.destination)return this;for(var e=0,n=this.value.length,i=[];n>e;e++)i.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new y.Array(i)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(/\s+/)},reverse:function(){return this.value.reverse(),this}}),y.PointArray=function(t,e){this.constructor.call(this,t,e||[[0,0]])},y.PointArray.prototype=new y.Array,y.extend(y.PointArray,{toString:function(){for(var t=0,e=this.value.length,n=[];e>t;t++)n.push(this.value[t].join(","));return n.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,n=this.value.length,i=[];n>e;e++)i.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new y.PointArray(i)},parse:function(t){if(t=t.valueOf(),Array.isArray(t))return t;t=this.split(t);for(var e,n=0,i=t.length,r=[];i>n;n++)e=t[n].split(","),r.push([parseFloat(e[0]),parseFloat(e[1])]);return r},move:function(t,e){var n=this.bbox();if(t-=n.x,e-=n.y,!isNaN(t)&&!isNaN(e))for(var i=this.value.length-1;i>=0;i--)this.value[i]=[this.value[i][0]+t,this.value[i][1]+e];return this},size:function(t,e){var n,i=this.bbox();for(n=this.value.length-1;n>=0;n--)this.value[n][0]=(this.value[n][0]-i.x)*t/i.width+i.x,this.value[n][1]=(this.value[n][1]-i.y)*e/i.height+i.y;return this},bbox:function(){return y.parser.poly.setAttribute("points",this.toString()),y.parser.poly.getBBox()}}),y.PathArray=function(t,e){this.constructor.call(this,t,e||[["M",0,0]])},y.PathArray.prototype=new y.Array,y.extend(y.PathArray,{toString:function(){return p(this.value)},move:function(t,e){var n=this.bbox();if(t-=n.x,e-=n.y,!isNaN(t)&&!isNaN(e))for(var i,r=this.value.length-1;r>=0;r--)i=this.value[r][0],"M"==i||"L"==i||"T"==i?(this.value[r][1]+=t,this.value[r][2]+=e):"H"==i?this.value[r][1]+=t:"V"==i?this.value[r][1]+=e:"C"==i||"S"==i||"Q"==i?(this.value[r][1]+=t,this.value[r][2]+=e,this.value[r][3]+=t,this.value[r][4]+=e,"C"==i&&(this.value[r][5]+=t,this.value[r][6]+=e)):"A"==i&&(this.value[r][6]+=t,this.value[r][7]+=e);return this},size:function(t,e){var n,i,r=this.bbox();for(n=this.value.length-1;n>=0;n--)i=this.value[n][0],"M"==i||"L"==i||"T"==i?(this.value[n][1]=(this.value[n][1]-r.x)*t/r.width+r.x,this.value[n][2]=(this.value[n][2]-r.y)*e/r.height+r.y):"H"==i?this.value[n][1]=(this.value[n][1]-r.x)*t/r.width+r.x:"V"==i?this.value[n][1]=(this.value[n][1]-r.y)*e/r.height+r.y:"C"==i||"S"==i||"Q"==i?(this.value[n][1]=(this.value[n][1]-r.x)*t/r.width+r.x,this.value[n][2]=(this.value[n][2]-r.y)*e/r.height+r.y,this.value[n][3]=(this.value[n][3]-r.x)*t/r.width+r.x,this.value[n][4]=(this.value[n][4]-r.y)*e/r.height+r.y,"C"==i&&(this.value[n][5]=(this.value[n][5]-r.x)*t/r.width+r.x,this.value[n][6]=(this.value[n][6]-r.y)*e/r.height+r.y)):"A"==i&&(this.value[n][1]=this.value[n][1]*t/r.width,this.value[n][2]=this.value[n][2]*e/r.height,this.value[n][6]=(this.value[n][6]-r.x)*t/r.width+r.x,this.value[n][7]=(this.value[n][7]-r.y)*e/r.height+r.y);return this},parse:function(t){if(t instanceof y.PathArray)return t.valueOf();var e,n,i,r,s,o,a=0,h=0,u={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7};for(t="string"==typeof t?t.replace(y.regex.negExp,"X").replace(y.regex.pathLetters," $& ").replace(y.regex.hyphen," -").replace(y.regex.comma," ").replace(y.regex.X,"e-").trim().split(y.regex.whitespaces):t.reduce(function(t,e){return[].concat.apply(t,e)},[]),e=0;e<t.length;++e)if(t[e].indexOf(".")!=t[e].lastIndexOf(".")){var l=t[e].split("."),c=[l.shift(),l.shift()].join(".");t.splice.apply(t,[e,1].concat(c,l.map(function(t){return"."+t}))),e+=l.length}var o=[];do{for(y.regex.isPathLetter.test(t[0])?(r=t[0],t.shift()):"M"==r.toUpperCase()&&(r="L"),s=[r.toUpperCase()],e=0;e<u[s[0]];++e)s.push(parseFloat(t.shift()));r==s[0]?"M"==r||"L"==r||"C"==r||"Q"==r?(a=s[u[s[0]]-1],h=s[u[s[0]]]):"V"==r?h=s[1]:"H"==r?a=s[1]:"A"==r&&(a=s[6],h=s[7]):"m"==r||"l"==r||"c"==r||"s"==r||"q"==r||"t"==r?(s[1]+=a,s[2]+=h,null!=s[3]&&(s[3]+=a,s[4]+=h),null!=s[5]&&(s[5]+=a,s[6]+=h),a=s[u[s[0]]-1],h=s[u[s[0]]]):"v"==r?(s[1]+=h,h=s[1]):"h"==r?(s[1]+=a,a=s[1]):"a"==r&&(s[6]+=a,s[7]+=h,a=s[6],h=s[7]),"M"==s[0]&&(n=a,i=h),"Z"==s[0]&&(a=n,h=i),o.push(s)}while(t.length);return o},bbox:function(){return y.parser.path.setAttribute("d",this.toString()),y.parser.path.getBBox()}}),y.Number=y.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:0>t?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(y.regex.unit),e&&(this.value=parseFloat(e[1]),"%"==e[2]?this.value/=100:"s"==e[2]&&(this.value*=1e3),this.unit=e[2])):t instanceof y.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},valueOf:function(){return this.value},plus:function(t){return new y.Number(this+new y.Number(t),this.unit)},minus:function(t){return this.plus(-new y.Number(t))},times:function(t){return new y.Number(this*new y.Number(t),this.unit)},divide:function(t){return new y.Number(this/new y.Number(t),this.unit)},to:function(t){var e=new y.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new y.Number(t),this},at:function(t){return this.destination?new y.Number(this.destination).minus(this).times(t).plus(this):this}}}),y.ViewBox=function(t){var e,n,i,r,s=1,o=1,a=t.bbox(),h=(t.attr("viewBox")||"").match(/-?[\d\.]+/g),u=t,l=t;for(i=new y.Number(t.width()),r=new y.Number(t.height());"%"==i.unit;)s*=i.value,i=new y.Number(u instanceof y.Doc?u.parent().offsetWidth:u.parent().width()),u=u.parent();for(;"%"==r.unit;)o*=r.value,r=new y.Number(l instanceof y.Doc?l.parent().offsetHeight:l.parent().height()),l=l.parent();this.x=a.x,this.y=a.y,this.width=i*s,this.height=r*o,this.zoom=1,h&&(e=parseFloat(h[0]),n=parseFloat(h[1]),i=parseFloat(h[2]),r=parseFloat(h[3]),this.zoom=this.width/this.height>i/r?this.height/r:this.width/i,this.x=e,this.y=n,this.width=i,this.height=r)},y.extend(y.ViewBox,{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height}}),y.Element=y.invent({create:function(t){this._stroke=y.defaults.attrs.stroke,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var n=a(this.bbox(),t,e);return this.width(new y.Number(n.width)).height(new y.Number(n.height))},clone:function(){var t=m(this.node.cloneNode(!0));return this.after(t),t},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var n=this.bbox();return t>n.x&&e>n.y&&t<n.x+n.width&&e<n.y+n.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(/\s+/)},hasClass:function(t){return-1!=this.classes().indexOf(t)},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return y.get(this.attr(t))},parent:function(t){var e=this;if(!e.node.parentNode)return null;if(e=y.adopt(e.node.parentNode),!t)return e;for(;e.node instanceof SVGElement;){if("string"==typeof t?e.matches(t):e instanceof t)return e;e=y.adopt(e.node.parentNode)}},doc:function(){return this instanceof y.Doc?this:this.parent(y.Doc)},parents:function(t){var e=[],n=this;do{if(n=n.parent(t),!n||!n.node)break;e.push(n)}while(n.parent);return e},matches:function(t){return n(this.node,t)},"native":function(){return this.node},svg:function(t){var n=e.createElement("svg");if(!(t&&this instanceof y.Parent))return n.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),n.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");n.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<(\w+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var i=0,r=n.firstChild.childNodes.length;r>i;i++)this.node.appendChild(n.firstChild.firstChild);return this},writeDataToDom:function(){if(this.each||this.lines){var t=this.each?this:this.lines();t.each(function(){this.writeDataToDom()})}return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttributeNS(y.svgjs,"svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this}}}),y.FX=y.invent({create:function(t){this.target=t},extend:{animate:function(t,e,n){var i,r,s,o=this.target,a=this;return"object"==typeof t&&(n=t.delay,e=t.ease,t=t.duration),t="="==t?t:null==t?1e3:new y.Number(t).valueOf(),e=e||"<>",a.at=function(t){var n;if(t=0>t?0:t>1?1:t,null==i){i=[];for(s in a.attrs)i.push(s);if(o.morphArray&&(a.destination.plot||i.indexOf("points")>-1)){var h,u=new o.morphArray(a.destination.plot||a.attrs.points||o.array());a.destination.size&&u.size(a.destination.size.width.to,a.destination.size.height.to),h=u.bbox(),a.destination.x?u.move(a.destination.x.to,h.y):a.destination.cx&&u.move(a.destination.cx.to-h.width/2,h.y),h=u.bbox(),a.destination.y?u.move(h.x,a.destination.y.to):a.destination.cy&&u.move(h.x,a.destination.cy.to-h.height/2),a.destination={plot:o.array().morph(u)}}}if(null==r){r=[];for(s in a.styles)r.push(s)}for(t="<>"==e?-Math.cos(t*Math.PI)/2+.5:">"==e?Math.sin(t*Math.PI/2):"<"==e?-Math.cos(t*Math.PI/2)+1:"-"==e?t:"function"==typeof e?e(t):t,a.destination.plot?o.plot(a.destination.plot.at(t)):(a.destination.x?o.x(a.destination.x.at(t)):a.destination.cx&&o.cx(a.destination.cx.at(t)),a.destination.y?o.y(a.destination.y.at(t)):a.destination.cy&&o.cy(a.destination.cy.at(t)),a.destination.size&&o.size(a.destination.size.width.at(t),a.destination.size.height.at(t))),a.destination.viewbox&&o.viewbox(a.destination.viewbox.x.at(t),a.destination.viewbox.y.at(t),a.destination.viewbox.width.at(t),a.destination.viewbox.height.at(t)),a.destination.leading&&o.leading(a.destination.leading.at(t)),n=i.length-1;n>=0;n--)o.attr(i[n],d(a.attrs[i[n]],t));for(n=r.length-1;n>=0;n--)o.style(r[n],d(a.styles[r[n]],t));a.situation.during&&a.situation.during.call(o,t,function(e,n){return d({from:e,to:n},t)})},"number"==typeof t&&(this.timeout=setTimeout(function(){var i=(new Date).getTime();a.situation.start=i,a.situation.play=!0,a.situation.finish=i+t,a.situation.duration=t,a.situation.ease=e,a.render=function(){if(a.situation.play===!0){var i=(new Date).getTime(),r=i>a.situation.finish?1:(i-a.situation.start)/t;a.situation.reversing&&(r=-r+1),a.at(r),i>a.situation.finish?(a.destination.plot&&o.plot(new y.PointArray(a.destination.plot.destination).settle()),a.situation.loop===!0||"number"==typeof a.situation.loop&&a.situation.loop>0?(a.situation.reverse&&(a.situation.reversing=!a.situation.reversing),"number"==typeof a.situation.loop&&((!a.situation.reverse||a.situation.reversing)&&--a.situation.loop,a.situation.reverse||1!=a.situation.loop||--a.situation.loop),a.animate(t,e,n)):a.situation.after?a.situation.after.apply(o,[a]):a.stop()):a.animationFrame=requestAnimationFrame(a.render)}else a.animationFrame=requestAnimationFrame(a.render)},a.render()},new y.Number(n).valueOf())),this},bbox:function(){return this.target.bbox()},attr:function(t,e){if("object"==typeof t)for(var n in t)this.attr(n,t[n]);else{var i=this.target.attr(t);"transform"==t?(this.attrs[t]&&(e=this.attrs[t].destination.multiply(e)),this.attrs[t]=new y.Matrix(this.target).morph(e),this.param&&(e=this.target.transform("rotation"),this.attrs[t].param={from:this.target.param||{rotation:e,cx:this.param.cx,cy:this.param.cy},to:this.param})):this.attrs[t]=y.Color.isColor(e)?new y.Color(i).morph(e):y.regex.unit.test(e)?new y.Number(i).morph(e):{from:i,to:e}}return this},style:function(t,e){if("object"==typeof t)for(var n in t)this.style(n,t[n]);else this.styles[t]={from:this.target.style(t),to:e};return this},x:function(t){return this.destination.x=new y.Number(this.target.x()).morph(t),this},y:function(t){return this.destination.y=new y.Number(this.target.y()).morph(t),this},cx:function(t){return this.destination.cx=new y.Number(this.target.cx()).morph(t),this},cy:function(t){return this.destination.cy=new y.Number(this.target.cy()).morph(t),this},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){if(this.target instanceof y.Text)this.attr("font-size",t);else{var n=this.target.bbox();this.destination.size={width:new y.Number(n.width).morph(t),height:new y.Number(n.height).morph(e)}}return this},plot:function(t){return this.destination.plot=t,this},leading:function(t){return this.target.destination.leading&&(this.destination.leading=new y.Number(this.target.destination.leading).morph(t)),this},viewbox:function(t,e,n,i){if(this.target instanceof y.Container){var r=this.target.viewbox();this.destination.viewbox={x:new y.Number(r.x).morph(t),y:new y.Number(r.y).morph(e),width:new y.Number(r.width).morph(n),height:new y.Number(r.height).morph(i)}}return this},update:function(t){return this.target instanceof y.Stop&&(null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new y.Number(t.offset))),this},during:function(t){return this.situation.during=t,this},after:function(t){return this.situation.after=t,this},loop:function(t,e){return this.situation.loop=this.situation.loops=t||!0,this.situation.reverse=!!e,this},stop:function(t){return t===!0?(this.animate(0),this.situation.after&&this.situation.after.apply(this.target,[this])):(clearTimeout(this.timeout),cancelAnimationFrame(this.animationFrame),this.attrs={},this.styles={},this.situation={},this.destination={}),this},pause:function(){return this.situation.play===!0&&(this.situation.play=!1,this.situation.pause=(new Date).getTime()),this},play:function(){if(this.situation.play===!1){var t=(new Date).getTime()-this.situation.pause;this.situation.finish+=t,this.situation.start+=t,this.situation.play=!0}return this}},parent:y.Element,construct:{animate:function(t,e,n){return(this.fx||(this.fx=new y.FX(this))).stop().animate(t,e,n)},stop:function(t){return this.fx&&this.fx.stop(t),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this}}}),y.BBox=y.invent({create:function(t){if(t){var e;try{e=t.node.getBBox()}catch(n){if(t instanceof y.Shape){var i=t.clone().addTo(y.parser.draw);e=i.bbox(),i.remove()}else e={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height}x(this)},parent:y.Element,construct:{bbox:function(){return new y.BBox(this)}}}),y.TBox=y.invent({create:function(t){if(t){var e=t.ctm().extract(),n=t.bbox();this.width=n.width*e.scaleX,this.height=n.height*e.scaleY,this.x=n.x+e.x,this.y=n.y+e.y}x(this)},parent:y.Element,construct:{tbox:function(){return new y.TBox(this)}}}),y.RBox=y.invent({create:function(e){if(e){var n=e.doc().parent(),i=e.node.getBoundingClientRect(),r=1;for(this.x=i.left,this.y=i.top,this.x-=n.offsetLeft,this.y-=n.offsetTop;n=n.offsetParent;)this.x-=n.offsetLeft,this.y-=n.offsetTop;for(n=e;n.parent&&(n=n.parent());)n.viewbox&&(r*=n.viewbox().zoom,this.x-=n.x()||0,this.y-=n.y()||0);this.width=i.width/=r,this.height=i.height/=r}x(this),this.x+=t.scrollX,this.y+=t.scrollY},parent:y.Element,construct:{rbox:function(){return new y.RBox(this)}}}),[y.BBox,y.TBox,y.RBox].forEach(function(t){y.extend(t,{merge:function(e){var n=new t;return n.x=Math.min(this.x,e.x),n.y=Math.min(this.y,e.y),n.width=Math.max(this.x+this.width,e.x+e.width)-n.x,n.height=Math.max(this.y+this.height,e.y+e.height)-n.y,x(n)}})}),y.Matrix=y.invent({create:function(t){var e,n=u([1,0,0,1,0,0]);for(t=t instanceof y.Element?t.matrixify():"string"==typeof t?f(t):6==arguments.length?u([].slice.call(arguments)):"object"==typeof t?t:n,e=b.length-1;e>=0;e--)this[b[e]]=t&&"number"==typeof t[b[e]]?t[b[e]]:n[b[e]]},extend:{extract:function(){var t=h(this,0,1),e=h(this,1,0),n=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,skewX:-n,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:n}},clone:function(){return new y.Matrix(this)},morph:function(t){return this.destination=new y.Matrix(t),this},at:function(t){if(!this.destination)return this;var e=new y.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t});if(this.param&&this.param.to){var n={rotation:this.param.from.rotation+(this.param.to.rotation-this.param.from.rotation)*t,cx:this.param.from.cx,cy:this.param.from.cy};e=e.rotate((this.param.to.rotation-2*this.param.from.rotation)*t,n.cx,n.cy),e.param=n}return e},multiply:function(t){return new y.Matrix(this.native().multiply(l(t).native()))},inverse:function(){return new y.Matrix(this.native().inverse())},translate:function(t,e){return new y.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,n,i){return(1==arguments.length||3==arguments.length)&&(e=t),3==arguments.length&&(i=n,n=e),this.around(n,i,new y.Matrix(t,0,0,e,0,0))},rotate:function(t,e,n){return t=y.utils.radians(t),this.around(e,n,new y.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return"x"==t?this.scale(-1,1,e,0):this.scale(1,-1,0,e)},skew:function(t,e,n,i){return this.around(n,i,this.native().skewX(t||0).skewY(e||0))},skewX:function(t,e,n){return this.around(e,n,this.native().skewX(t||0))},skewY:function(t,e,n){return this.around(e,n,this.native().skewY(t||0))},around:function(t,e,n){return this.multiply(new y.Matrix(1,0,0,1,t||0,e||0)).multiply(n).multiply(new y.Matrix(1,0,0,1,-t||0,-e||0))},"native":function(){for(var t=y.parser.draw.node.createSVGMatrix(),e=b.length-1;e>=0;e--)t[b[e]]=this[b[e]];return t},toString:function(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}},parent:y.Element,construct:{ctm:function(){return new y.Matrix(this.node.getCTM())},screenCTM:function(){return new y.Matrix(this.node.getScreenCTM())}}}),y.extend(y.Element,{attr:function(t,e,n){if(null==t){for(t={},e=this.node.attributes,n=e.length-1;n>=0;n--)t[e[n].nodeName]=y.regex.isNumber.test(e[n].nodeValue)?parseFloat(e[n].nodeValue):e[n].nodeValue;return t}if("object"==typeof t)for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return e=this.node.getAttribute(t),null==e?y.defaults.attrs[t]:y.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),("fill"==t||"stroke"==t)&&(y.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof y.Image&&(e=this.doc().defs().pattern(0,0,function(){this.add(e)}))),"number"==typeof e?e=new y.Number(e):y.Color.isColor(e)?e=new y.Color(e):Array.isArray(e)?e=new y.Array(e):e instanceof y.Matrix&&e.param&&(this.param=e.param),"leading"==t?this.leading&&this.leading(e):"string"==typeof n?this.node.setAttributeNS(n,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),y.extend(y.Element,y.FX,{transform:function(t,e){var n,i=this.target||this;if("object"!=typeof t)return n=new y.Matrix(i).extract(),"object"==typeof this.param&&(n.rotation=this.param.rotation,n.cx=this.param.cx,n.cy=this.param.cy),"string"==typeof t?n[t]:n;if(n=this instanceof y.FX&&this.attrs.transform?this.attrs.transform:new y.Matrix(i),e=!!e||!!t.relative,null!=t.a)n=e?n.multiply(new y.Matrix(t)):new y.Matrix(t);else if(null!=t.rotation)c(t,i),e&&(t.rotation+=this.param&&null!=this.param.rotation?this.param.rotation:n.extract().rotation),this.param=t,this instanceof y.Element&&(n=e?n.rotate(t.rotation,t.cx,t.cy):n.rotate(t.rotation-n.extract().rotation,t.cx,t.cy));else if(null!=t.scale||null!=t.scaleX||null!=t.scaleY){if(c(t,i),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,!e){var r=n.extract();t.scaleX=1*t.scaleX/r.scaleX,t.scaleY=1*t.scaleY/r.scaleY}n=n.scale(t.scaleX,t.scaleY,t.cx,t.cy)}else if(null!=t.skewX||null!=t.skewY){if(c(t,i),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,!e){var r=n.extract();n=n.multiply((new y.Matrix).skew(r.skewX,r.skewY,t.cx,t.cy).inverse())}n=n.skew(t.skewX,t.skewY,t.cx,t.cy)}else t.flip?n=n.flip(t.flip,null==t.offset?i.bbox()["c"+t.flip]:t.offset):(null!=t.x||null!=t.y)&&(e?n=n.translate(t.x,t.y):(null!=t.x&&(n.e=t.x),null!=t.y&&(n.f=t.y)));return this.attr(this instanceof y.Pattern?"patternTransform":this instanceof y.Gradient?"gradientTransform":"transform",n)}}),y.extend(y.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){var t=(this.attr("transform")||"").split(/\)\s*/).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(y.regex.matrixElements).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(u(e[1])):t[e[0]].apply(t,e[1])},new y.Matrix);return this.attr("transform",t),t},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),n=t.rect(1,1),i=n.screenCTM().inverse();return n.remove(),this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),y.extend(y.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"==typeof t)for(e in t)this.style(e,t[e]);else{if(!y.regex.isCss.test(t))return this.node.style[i(t)];t=t.split(";");for(var n=0;n<t.length;n++)e=t[n].split(":"),this.style(e[0].replace(/\s+/g,""),e[1])}else this.node.style[i(t)]=null===e||y.regex.isBlank.test(e)?"":e;return this}}),y.Parent=y.invent({create:function(t){this.constructor.call(this,t)},inherit:y.Element,extend:{children:function(){return y.utils.map(y.utils.filterSVGElements(this.node.childNodes),function(t){return y.adopt(t)})},add:function(t,e){return this.has(t)||(e=null==e?this.children().length:e,this.node.insertBefore(t.node,this.node.childNodes[e]||null)),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return this.children().indexOf(t)},get:function(t){return this.children()[t]},first:function(){return this.children()[0]},last:function(){return this.children()[this.children().length-1]},each:function(t,e){var n,i,r=this.children();for(n=0,i=r.length;i>n;n++)r[n]instanceof y.Element&&t.apply(r[n],[n,r]),e&&r[n]instanceof y.Container&&r[n].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),y.extend(y.Parent,{ungroup:function(t,e){return 0===e||this instanceof y.Defs?this:(t=t||(this instanceof y.Doc?this:this.parent(y.Parent)),e=e||1/0,this.each(function(){return this instanceof y.Defs?this:this instanceof y.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),y.Container=y.invent({create:function(t){this.constructor.call(this,t)},inherit:y.Parent,extend:{viewbox:function(t){return 0==arguments.length?new y.ViewBox(this):(t=1==arguments.length?[t.x,t.y,t.width,t.height]:[].slice.call(arguments),this.attr("viewBox",t))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){y.Element.prototype[t]=function(e){var n=this;return this.node["on"+t]="function"==typeof e?function(){return e.apply(n,arguments)}:null,this}}),y.listeners=[],y.handlerMap=[],y.on=function(t,e,n,i){var r=n.bind(i||t.instance||t),s=(y.handlerMap.indexOf(t)+1||y.handlerMap.push(t))-1,o=e.split(".")[0],a=e.split(".")[1]||"*";y.listeners[s]=y.listeners[s]||{},y.listeners[s][o]=y.listeners[s][o]||{},y.listeners[s][o][a]=y.listeners[s][o][a]||{},y.listeners[s][o][a][n]=r,t.addEventListener(o,r,!1)
},y.off=function(t,e,n){var i=y.handlerMap.indexOf(t),r=e&&e.split(".")[0],s=e&&e.split(".")[1];if(-1!=i)if(n)y.listeners[i][r]&&y.listeners[i][r][s||"*"]&&(t.removeEventListener(r,y.listeners[i][r][s||"*"][n],!1),delete y.listeners[i][r][s||"*"][n]);else if(s&&r){if(y.listeners[i][r]&&y.listeners[i][r][s]){for(n in y.listeners[i][r][s])y.off(t,[r,s].join("."),n);delete y.listeners[i][r][s]}}else if(s)for(e in y.listeners[i])for(namespace in y.listeners[i][e])s===namespace&&y.off(t,[e,s].join("."));else if(r){if(y.listeners[i][r]){for(namespace in y.listeners[i][r])y.off(t,[r,namespace].join("."));delete y.listeners[i][r]}}else{for(e in y.listeners[i])y.off(t,e);delete y.listeners[i]}},y.extend(y.Element,{on:function(t,e,n){return y.on(this.node,t,e,n),this},off:function(t,e){return y.off(this.node,t,e),this},fire:function(t,e){return t instanceof Event?this.node.dispatchEvent(t):this.node.dispatchEvent(new w(t,{detail:e})),this}}),y.Defs=y.invent({create:"defs",inherit:y.Container}),y.G=y.invent({create:"g",inherit:y.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:-this.x()+t},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:-this.y()+t},!0)},cx:function(t){return null==t?this.tbox().cx:this.x(t-this.tbox().width/2)},cy:function(t){return null==t?this.tbox().cy:this.y(t-this.tbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new y.G)}}}),y.extend(y.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof y.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof y.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),y.Mask=y.invent({create:function(){this.constructor.call(this,y.create("mask")),this.targets=[]},inherit:y.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return delete this.targets,this.parent().removeElement(this),this}},construct:{mask:function(){return this.defs().put(new y.Mask)}}}),y.extend(y.Element,{maskWith:function(t){return this.masker=t instanceof y.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),y.ClipPath=y.invent({create:function(){this.constructor.call(this,y.create("clipPath")),this.targets=[]},inherit:y.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return delete this.targets,this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new y.ClipPath)}}}),y.extend(y.Element,{clipWith:function(t){return this.clipper=t instanceof y.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),y.Gradient=y.invent({create:function(t){this.constructor.call(this,y.create(t+"Gradient")),this.type=t},inherit:y.Container,extend:{at:function(t,e,n){return this.put(new y.Stop).update(t,e,n)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,n){return"transform"==t&&(t="gradientTransform"),y.Container.prototype.attr.call(this,t,e,n)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),y.extend(y.Gradient,y.FX,{from:function(t,e){return"radial"==(this.target||this).type?this.attr({fx:new y.Number(t),fy:new y.Number(e)}):this.attr({x1:new y.Number(t),y1:new y.Number(e)})},to:function(t,e){return"radial"==(this.target||this).type?this.attr({cx:new y.Number(t),cy:new y.Number(e)}):this.attr({x2:new y.Number(t),y2:new y.Number(e)})}}),y.extend(y.Defs,{gradient:function(t,e){return this.put(new y.Gradient(t)).update(e)}}),y.Stop=y.invent({create:"stop",inherit:y.Element,extend:{update:function(t){return("number"==typeof t||t instanceof y.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new y.Number(t.offset)),this}}}),y.Pattern=y.invent({create:"pattern",inherit:y.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,n){return"transform"==t&&(t="patternTransform"),y.Container.prototype.attr.call(this,t,e,n)}},construct:{pattern:function(t,e,n){return this.defs().pattern(t,e,n)}}}),y.extend(y.Defs,{pattern:function(t,e,n){return this.put(new y.Pattern).update(n).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),y.Doc=y.invent({create:function(t){t&&(t="string"==typeof t?e.getElementById(t):t,"svg"==t.nodeName?this.constructor.call(this,t):(this.constructor.call(this,y.create("svg")),t.appendChild(this.node)),this.namespace().size("100%","100%").defs())},inherit:y.Container,extend:{namespace:function(){return this.attr({xmlns:y.ns,version:"1.1"}).attr("xmlns:xlink",y.xlink,y.xmlns).attr("xmlns:svgjs",y.svgjs,y.xmlns)},defs:function(){if(!this._defs){var t;this._defs=(t=this.node.getElementsByTagName("defs")[0])?y.adopt(t):new y.Defs,this.node.appendChild(this._defs.node)}return this._defs},parent:function(){return"#document"==this.node.parentNode.nodeName?null:this.node.parentNode},spof:function(){var t=this.node.getScreenCTM();return t&&this.style("left",-t.e%1+"px").style("top",-t.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this}}}),y.Shape=y.invent({create:function(t){this.constructor.call(this,t)},inherit:y.Element}),y.Bare=y.invent({create:function(t,e){if(this.constructor.call(this,y.create(t)),e)for(var n in e.prototype)"function"==typeof e.prototype[n]&&(this[n]=e.prototype[n])},inherit:y.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(e.createTextNode(t)),this}}}),y.extend(y.Parent,{element:function(t,e){return this.put(new y.Bare(t,e))},symbol:function(){return this.defs().element("symbol",y.Container)}}),y.Use=y.invent({create:"use",inherit:y.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,y.xlink)}},construct:{use:function(t,e){return this.put(new y.Use).element(t,e)}}}),y.Rect=y.invent({create:"rect",inherit:y.Shape,construct:{rect:function(t,e){return this.put(new y.Rect).size(t,e)}}}),y.Circle=y.invent({create:"circle",inherit:y.Shape,construct:{circle:function(t){return this.put(new y.Circle).rx(new y.Number(t).divide(2)).move(0,0)}}}),y.extend(y.Circle,y.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),y.Ellipse=y.invent({create:"ellipse",inherit:y.Shape,construct:{ellipse:function(t,e){return this.put(new y.Ellipse).size(t,e).move(0,0)}}}),y.extend(y.Ellipse,y.Rect,y.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),y.extend(y.Circle,y.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new y.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new y.Number(t).divide(2))},size:function(t,e){var n=a(this.bbox(),t,e);return this.rx(new y.Number(n.width).divide(2)).ry(new y.Number(n.height).divide(2))}}),y.Line=y.invent({create:"line",inherit:y.Shape,extend:{array:function(){return new y.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,n,i){return t=4==arguments.length?{x1:t,y1:e,x2:n,y2:i}:new y.PointArray(t).toLine(),this.attr(t)},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var n=a(this.bbox(),t,e);return this.attr(this.array().size(n.width,n.height).toLine())}},construct:{line:function(t,e,n,i){return this.put(new y.Line).plot(t,e,n,i)}}}),y.Polyline=y.invent({create:"polyline",inherit:y.Shape,construct:{polyline:function(t){return this.put(new y.Polyline).plot(t)}}}),y.Polygon=y.invent({create:"polygon",inherit:y.Shape,construct:{polygon:function(t){return this.put(new y.Polygon).plot(t)}}}),y.extend(y.Polyline,y.Polygon,{array:function(){return this._array||(this._array=new y.PointArray(this.attr("points")))},plot:function(t){return this.attr("points",this._array=new y.PointArray(t))},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var n=a(this.bbox(),t,e);return this.attr("points",this.array().size(n.width,n.height))}}),y.extend(y.Line,y.Polyline,y.Polygon,{morphArray:y.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),y.Path=y.invent({create:"path",inherit:y.Shape,extend:{morphArray:y.PathArray,array:function(){return this._array||(this._array=new y.PathArray(this.attr("d")))},plot:function(t){return this.attr("d",this._array=new y.PathArray(t))},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var n=a(this.bbox(),t,e);return this.attr("d",this.array().size(n.width,n.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new y.Path).plot(t)}}}),y.Image=y.invent({create:"image",inherit:y.Shape,extend:{load:function(t){if(!t)return this;var n=this,i=e.createElement("img");return i.onload=function(){var e=n.parent(y.Pattern);null!==e&&(0==n.width()&&0==n.height()&&n.size(i.width,i.height),e&&0==e.width()&&0==e.height()&&e.size(n.width(),n.height()),"function"==typeof n._loaded&&n._loaded.call(n,{width:i.width,height:i.height,ratio:i.width/i.height,url:t}))},this.attr("href",i.src=this.src=t,y.xlink)},loaded:function(t){return this._loaded=t,this}},construct:{image:function(t,e,n){return this.put(new y.Image).load(t).size(e||0,n||e||0)}}}),y.Text=y.invent({create:function(){this.constructor.call(this,y.create("text")),this.dom.leading=new y.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",y.defaults.attrs["font-family"])},inherit:y.Shape,extend:{clone:function(){var t=m(this.node.cloneNode(!0));return this.after(t),t},x:function(t){return null==t?this.attr("x"):(this.textPath||this.lines().each(function(){this.dom.newLined&&this.x(t)}),this.attr("x",t))},y:function(t){var e=this.attr("y"),n="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-n:e:this.attr("y","number"==typeof t?t+n:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if("undefined"==typeof t){for(var t="",e=this.node.childNodes,n=0,i=e.length;i>n;++n)0!=n&&3!=e[n].nodeType&&1==y.adopt(e[n]).dom.newLined&&(t+="\n"),t+=e[n].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{t=t.split("\n");for(var n=0,r=t.length;r>n;n++)this.tspan(t[n]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new y.Number(t),this.rebuild())},lines:function(){var t=y.utils.map(y.utils.filterSVGElements(this.node.childNodes),function(t){return y.adopt(t)});return new y.Set(t)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this;this.lines().each(function(){this.dom.newLined&&(this.textPath||this.attr("x",e.attr("x")),this.attr("dy",e.dom.leading*new y.Number(e.attr("font-size"))))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=t.leading?new y.Number(t.leading.value,t.leading.unit):new y.Number(1.3),this}},construct:{text:function(t){return this.put(new y.Text).text(t)},plain:function(t){return this.put(new y.Text).plain(t)}}}),y.Tspan=y.invent({create:"tspan",inherit:y.Shape,extend:{text:function(t){return"function"==typeof t?t.call(this,this):this.plain(t),this},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(y.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),y.extend(y.Text,y.Tspan,{plain:function(t){return this._build===!1&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,n=new y.Tspan;return this._build===!1&&this.clear(),e.appendChild(n.node),n.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),y.TextPath=y.invent({create:"textPath",inherit:y.Element,parent:y.Text,construct:{path:function(t){for(var e=new y.TextPath,n=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+n,y.xlink),this},plot:function(t){var e=this.track();return e&&e.plot(t),this},track:function(){var t=this.textPath();return t?t.reference("href"):void 0},textPath:function(){return this.node.firstChild&&"textPath"==this.node.firstChild.nodeName?y.adopt(this.node.firstChild):void 0}}}),y.Nested=y.invent({create:function(){this.constructor.call(this,y.create("svg")),this.style("overflow","visible")},inherit:y.Container,construct:{nested:function(){return this.put(new y.Nested)}}}),y.A=y.invent({create:"a",inherit:y.Container,extend:{to:function(t){return this.attr("href",t,y.xlink)},show:function(t){return this.attr("show",t,y.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new y.A).to(t)}}}),y.extend(y.Element,{linkTo:function(t){var e=new y.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),y.Marker=y.invent({create:"marker",inherit:y.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,n){return this.defs().marker(t,e,n)}}}),y.extend(y.Defs,{marker:function(t,e,n){return this.put(new y.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(n)}}),y.extend(y.Line,y.Polyline,y.Polygon,y.Path,{marker:function(t,e,n,i){var r=["marker"];return"all"!=t&&r.push(t),r=r.join("-"),t=arguments[1]instanceof y.Marker?arguments[1]:this.doc().marker(e,n,i),this.attr(r,t)}});var v={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};["fill","stroke"].forEach(function(t){var e,n={};n[t]=function(n){if("string"==typeof n||y.Color.isRgb(n)||n&&"function"==typeof n.fill)this.attr(t,n);else for(e=v[t].length-1;e>=0;e--)null!=n[v[t][e]]&&this.attr(v.prefix(t,v[t][e]),n[v[t][e]]);return this},y.extend(y.Element,y.FX,n)}),y.extend(y.Element,y.FX,{rotate:function(t,e,n){return this.transform({rotation:t,cx:e,cy:n})},skew:function(t,e,n,i){return this.transform({skewX:t,skewY:e,cx:n,cy:i})},scale:function(t,e,n,i){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:n}):this.transform({scaleX:t,scaleY:e,cx:n,cy:i})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return this.transform({flip:t,offset:e})},matrix:function(t){return this.attr("transform",new y.Matrix(t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x((this.target||this).x()+t)},dy:function(t){return this.y((this.target||this).y()+t)},dmove:function(t,e){return this.dx(t).dy(e)}}),y.extend(y.Rect,y.Ellipse,y.Circle,y.Gradient,y.FX,{radius:function(t,e){var n=(this.target||this).type;return"radial"==n||"circle"==n?this.attr({r:new y.Number(t)}):this.rx(t).ry(null==e?t:e)}}),y.extend(y.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),y.extend(y.Parent,y.Text,y.FX,{font:function(t){for(var e in t)"leading"==e?this.leading(t[e]):"anchor"==e?this.attr("text-anchor",t[e]):"size"==e||"family"==e||"weight"==e||"stretch"==e||"variant"==e||"style"==e?this.attr("font-"+e,t[e]):this.attr(e,t[e]);return this}}),y.Set=y.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,n=[].slice.call(arguments);for(t=0,e=n.length;e>t;t++)this.members.push(n[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,n=this.members.length;n>e;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){var t=new y.BBox;if(0==this.members.length)return t;var e=this.members[0].rbox();return t.x=e.x,t.y=e.y,t.width=e.width,t.height=e.height,this.each(function(){t=t.merge(this.rbox())}),t}},construct:{set:function(t){return new y.Set(t)}}}),y.FX.Set=y.invent({create:function(t){this.set=t}}),y.Set.inherit=function(){var t,e=[];for(var t in y.Shape.prototype)"function"==typeof y.Shape.prototype[t]&&"function"!=typeof y.Set.prototype[t]&&e.push(t);e.forEach(function(t){y.Set.prototype[t]=function(){for(var e=0,n=this.members.length;n>e;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new y.FX.Set(this)):this}}),e=[];for(var t in y.FX.prototype)"function"==typeof y.FX.prototype[t]&&"function"!=typeof y.FX.Set.prototype[t]&&e.push(t);e.forEach(function(t){y.FX.Set.prototype[t]=function(){for(var e=0,n=this.set.members.length;n>e;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},y.extend(y.Element,{data:function(t,e,n){if("object"==typeof t)for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(i){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:n===!0||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),y.extend(y.Element,{remember:function(t,e){if("object"==typeof arguments[0])for(var e in t)this.remember(e,t[e]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),y.get=function(t){var n=e.getElementById(g(t)||t);return y.adopt(n)},y.select=function(t,n){return new y.Set(y.utils.map((n||e).querySelectorAll(t),function(t){return y.adopt(t)}))},y.extend(y.Parent,{select:function(t){return y.select(t,this.node)}});var b="abcdef".split("");if("function"!=typeof w){var w=function(t,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var i=e.createEvent("CustomEvent");return i.initCustomEvent(t,n.bubbles,n.cancelable,n.detail),i};w.prototype=t.Event.prototype,t.CustomEvent=w}return function(e){for(var n=0,i=["moz","webkit"],r=0;r<i.length&&!t.requestAnimationFrame;++r)e.requestAnimationFrame=e[i[r]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[i[r]+"CancelAnimationFrame"]||e[i[r]+"CancelRequestAnimationFrame"];e.requestAnimationFrame=e.requestAnimationFrame||function(t){var i=(new Date).getTime(),r=Math.max(0,16-(i-n)),s=e.setTimeout(function(){t(i+r)},r);return n=i+r,s},e.cancelAnimationFrame=e.cancelAnimationFrame||e.clearTimeout}(t),y});


// svg.filter.js 0.4 - Copyright (c) 2013-2014 Wout Fierens - Licensed under the MIT license
;(function(){function t(e){if(Array.isArray(e))e=new SVG.Array(e);return e.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function n(e){if(!Array.isArray(e))return e;for(var t=0,n=e.length,r=[];t<n;t++)r.push(e[t]);return r.join(" ")}SVG.Filter=function(){this.constructor.call(this,SVG.create("filter"))};SVG.Filter.prototype=new SVG.Parent;SVG.extend(SVG.Filter,{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",put:function(e,t){this.add(e,t);return e.attr({"in":this.source,result:e})},blend:function(e,t,n){return this.put(new SVG.BlendEffect).attr({"in":e,in2:t,mode:n||"normal"})},colorMatrix:function(e,n){if(e=="matrix")n=t(n);return this.put(new SVG.ColorMatrixEffect).attr({type:e,values:typeof n=="undefined"?null:n})},convolveMatrix:function(e){e=t(e);return this.put(new SVG.ConvolveMatrixEffect).attr({order:Math.sqrt(e.split(" ").length),kernelMatrix:e})},componentTransfer:function(e){var t=new SVG.ComponentTransferEffect;t.rgb=new SVG.Set;["r","g","b","a"].forEach(function(e){t[e]=(new(SVG["Func"+e.toUpperCase()])).attr("type","identity");t.rgb.add(t[e]);t.node.appendChild(t[e].node)});if(e){if(e.rgb){["r","g","b"].forEach(function(n){t[n].attr(e.rgb)});delete e.rgb}for(var n in e)t[n].attr(e[n])}return this.put(t)},composite:function(e,t,n){return this.put(new SVG.CompositeEffect).attr({"in":e,in2:t,operator:n})},flood:function(e){return this.put(new SVG.FloodEffect).attr({"flood-color":e})},offset:function(e,t){return this.put(new SVG.OffsetEffect).attr({dx:e,dy:t})},image:function(e){return this.put(new SVG.ImageEffect).attr("href",e,SVG.xlink)},merge:function(){},gaussianBlur:function(){return this.put(new SVG.GaussianBlurEffect).attr("stdDeviation",n(Array.prototype.slice.call(arguments)))},toString:function(){return"url(#"+this.attr("id")+")"}});SVG.extend(SVG.Defs,{filter:function(e){var t=this.put(new SVG.Filter);if(typeof e==="function")e.call(t,t);return t}});SVG.extend(SVG.Container,{filter:function(e){return this.defs().filter(e)}});SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(e){this.filterer=e instanceof SVG.Element?e:this.doc().filter(e);this.attr("filter",this.filterer);return this.filterer},unfilter:function(e){if(this.filterer&&e===true)this.filterer.remove();delete this.filterer;return this.attr("filter",null)}});SVG.Effect=function(){};SVG.Effect.prototype=new SVG.Element;SVG.extend(SVG.Effect,{"in":function(e){return this.attr("in",e)},result:function(){return this.attr("id")+"Out"},toString:function(){return this.result()}});var e=["blend","colorMatrix","componentTransfer","composite","convolveMatrix","diffuseLighting","displacementMap","flood","gaussianBlur","image","merge","morphology","offset","specularLighting","tile","turbulence","distantLight","pointLight","spotLight"];e.forEach(function(t){var n=t.charAt(0).toUpperCase()+t.slice(1);SVG[n+"Effect"]=function(){this.constructor.call(this,SVG.create("fe"+n))};SVG[n+"Effect"].prototype=["componentTransfer"].indexOf(n)>-1?new SVG.Parent:new SVG.Effect;e.forEach(function(e){SVG[n+"Effect"].prototype[e]=function(){return this.parent[e].apply(this.parent,arguments).in(this)}})});["r","g","b","a"].forEach(function(e){SVG["Func"+e.toUpperCase()]=function(){this.constructor.call(this,SVG.create("feFunc"+e.toUpperCase()))};SVG["Func"+e.toUpperCase()].prototype=new SVG.Element});SVG.extend(SVG.FloodEffect,{});SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}).call(this);

ACTIVE_PAGE = null;
PAGES = [];


(function(){

  var delta = 0;
  var scrollingAllowed = true;

  function showNextPage(){
    var index = _.findIndex(PAGES,function(page){
      return page === ACTIVE_PAGE;
    });
    if (index !== -1 && PAGES[index+1] && PAGES[index+1].page) {
      location.hash = '#!'+PAGES[index+1].id;
      delta = 0;
      scrollingAllowed = false;
      setTimeout(function(){
        scrollingAllowed = true;
      },1000)
    }
  }

  function showPreviousPage(){
    var index = _.findIndex(PAGES,function(page){
      return page === ACTIVE_PAGE;
    });
    if (index !== -1 && PAGES[index-1] && PAGES[index-1].page) {
      location.hash = '#!'+PAGES[index-1].id;
      delta = 0;
      scrollingAllowed = false;
      setTimeout(function(){
        scrollingAllowed = true;
      },1000)
    }
  }

  function handleMousewheel(e){
    if (window.innerWidth >= 768) {
      e.preventDefault();
      if (scrollingAllowed) {
        delta += e.wheelDelta || -e.deltaY;
        if (delta < -10) {
          showNextPage();
        } else if (delta > 10) {
          showPreviousPage();
        }
      }
    }
  }

  // document.addEventListener('mousewheel',handleMousewheel);
  document.addEventListener('wheel',handleMousewheel);
  document.addEventListener('keydown',function(e){
    if (e.keyCode === 40 || e.keyCode === 74) { // key down or j
      showNextPage();
    } else if (e.keyCode === 38 ||  e.keyCode === 75) { // key up or k
      showPreviousPage();
    } else if (e.keyCode === 27) { // esc
      var openWindow = _.find(PAGES,function(page){
        return page.window && !page.element.hidden;
      });
      if (openWindow) {
        openWindow.goBackToActivePage();
      }
    }
  });

})();


(function(){

  var mainElement = document.querySelector('.main');
  var navElement = document.getElementById('nav');
  var hamburgerElement = navElement.querySelector('.hamburger');

  function handleClick(e) {
    if (window.innerWidth < 768) {
      e.preventDefault();
      if (navElement.classList.contains('active')) {
        hideNav();
      } else {
        showNav();
      }
    }
  }

  function showNav() {
    navElement.classList.add('active');
    mainElement.classList.add('inactive');
  }

  function hideNav() {
    navElement.classList.remove('active');
    mainElement.classList.remove('inactive');
  }

  hamburgerElement.addEventListener('click',handleClick);
  window.addEventListener('hashchange',hideNav);

})();


(function(){

  var aElements = document.querySelectorAll('header h2 a');

  _.each(aElements,function(aElement){
    new Window(aElement);
  });

  function Window(aElement){

    var id = aElement.dataset.id;
    var element = document.getElementById(id);

    function init(){
      var selfObject = {
        id: id,
        window: true,
        element: element,
        goBackToActivePage: goBackToActivePage,
        showHide: showHide
      }
      PAGES.push(selfObject);
    }

    function show(){
      aElement.classList.add('active');
      element.hidden = false;
    }

    function hide(){
      aElement.classList.remove('active');
      element.hidden = true;
    }

    function showHide(){
      var hash = location.hash.substr(2);
      if (hash === id) {
        show();
      } else {
        hide();
      }
    }

    function goBackToActivePage(){
      location.hash = '!'+ACTIVE_PAGE.id;
    }

    element.addEventListener('click',function(e){
      if (e.target === element){
        e.preventDefault();
        goBackToActivePage();
      }
    });

    aElement.addEventListener('click',function(e){
      if (!element.hidden){
        e.preventDefault();
        goBackToActivePage();
      }
    });

    window.addEventListener('hashchange',showHide);

    init();

  }

})();


(function(){

  var id = 'start';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var startElement = document.getElementById(id);
  var startNavElement = document.getElementById('nav').querySelectorAll('a[href="#!"]')[1];
  var terms = [];
  var openTerm;
  var draw = SVG('start--drawing');
  var moveIsAllowed = true;
  var selfObject;

  function init(){
    _.each(startElement.querySelectorAll('.start--term'),function(termElement){
      new Term(termElement);
    })
    selfObject = {
      id: '',
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
    ACTIVE_PAGE = selfObject;
  }

  function Term(termElement) {

    var aElement = termElement.querySelector('a');
    var h1Element = aElement.querySelector('h1');
    var textElement = termElement.querySelector('.text');
    var self = this;
    var linesTo = [];
    var id = termElement.dataset.id;
    var lines = [];
    var randomMove = _.random(150, 250);
    var moveX = 0;
    var moveY = 0;

    function init(){
      terms.push(self);
      linesTo = termElement.dataset.connection.split(',');
    }

    function getX(termElement,h1Element){
      var x = termElement.offsetLeft - 15 + 40 - moveX;
      return x;
    }
    function getY(termElement,h1Element){
      var y = termElement.offsetTop + h1Element.offsetHeight/2 + 40 - moveY;
      return y;
    }
    function getX2(termElement,h1Element){
      var x = termElement.offsetLeft - 15 + 40 - moveX;
      return x;
    }
    function getY2(termElement,h1Element){
      var y = termElement.offsetTop + h1Element.offsetHeight/2 + 40 - moveY;
      return y;
    }

    function drawLines(){
      if (window.innerWidth >= 768) {
        var x1 = getX(termElement,h1Element);
        var y1 = getY(termElement,h1Element);
        _.each(linesTo,function(to){
          var line = draw.line(x1, y1, x1, y1);
          line.filter(function(add){
            add.gaussianBlur(1);
          });
          var term = _.find(terms,function(term){
            return to === term.id;
          });
          line.toTerm = term;
          lines.push(line);
          try {
            var x2 = getX2(term.termElement,term.h1Element);
            var y2 = getY(term.termElement,term.h1Element);
            line.animate(200, '<', 0).plot([[x1,y1],[x2,y2]]);
          } catch(error) {
            console.error(error);
            console.error('id: '+id);
          }
        });
      }
    }

    function removeLines(){
      _.each(lines,function(line){
        var x1 = getX(termElement,h1Element);
        var y1 = getY(termElement,h1Element);
        line.animate(200, '<', 0).plot([[x1,y1],[x1,y1]]).after(function(){
          this.remove();
        });
      })
    }

    function updateLines(){
      _.each(lines,function(line){
        var x1 = getX(termElement,h1Element);
        var y1 = getY(termElement,h1Element);
        var term = line.toTerm;
        try {
          var x2 = getX2(term.termElement,term.h1Element);
          var y2 = getY(term.termElement,term.h1Element);
          line.plot([[x1,y1],[x2,y2]]);
        } catch(error) {
          console.error(error);
          console.error('id: '+id);
        }
      });
    }

    function handleClick(e){
      moveIsAllowed = true;
      _.each(terms,function(term){
        term.moveElement(e);
      });
      if (!termElement.classList.contains('open')) {
        open();
      } else {
        close();
        unsetOthersInactive();
      }
    }

    function setOthersInactive(){
      _.each(terms,function(term){
        if (term !== self) {
          term.setInactive();
        }
      });
    }

    function unsetOthersInactive(){
      _.each(terms,function(term){
        if (term !== self) {
          term.unsetInactive();
        }
      });
    }

    function closeOthers(){
      _.each(terms,function(term){
        if (term !== self) {
          term.close();
        }
      });
    }

    function open(){
      document.body.classList.remove('startanimation');
      closeOthers();
      setOthersInactive();
      unsetInactive();
      textElement.hidden = false;
      if (window.innerWidth < 768) {
        var height = textElement.offsetHeight;
        textElement.style.height = '0';
        textElement.style.paddingTop = '0';
        textElement.style.paddingBottom = '0';
        textElement.offsetWidth;
        textElement.style.height = height + 'px';
        textElement.style.padding = null;
      }
      termElement.classList.add('open');
      drawLines();
      openTerm = self;
      moveIsAllowed = false;
    }

    function close(){
      if (termElement.classList.contains('open')) {
        termElement.classList.remove('open');
        removeLines();
        moveIsAllowed = true;
        if (window.innerWidth < 768) {
          textElement.style.height = '0';
        }
        setTimeout(function(){
          textElement.hidden = true;
          textElement.style.height = null;
        },200);
      }
    }

    function setInactive(){
      termElement.classList.add('inactive');
    }
    function unsetInactive(){
      termElement.classList.remove('inactive');
    }

    function moveElement(e){
      if (moveIsAllowed && window.innerWidth >= 768) {
        var width = window.innerWidth;
        var height = window.innerHeight;
        moveX = (width/2 - e.clientX) / randomMove;
        moveY = (height/2 - e.clientY) / randomMove;
        requestAnimationFrame(function(){
          termElement.style.transform = 'translate3d('+moveX+'px,'+moveY+'px,0)';
        });
        // updateLines()
      }
    }

    aElement.addEventListener('click',handleClick);
    window.addEventListener('mousemove',moveElement);

    this.open = open;
    this.close = close;
    this.setInactive = setInactive;
    this.unsetInactive = unsetInactive;
    this.id = id;
    this.termElement = termElement;
    this.h1Element = h1Element;
    this.updateLines = updateLines;
    this.moveElement = moveElement;

    init();

  }

  function closeAllterms(){
    _.each(terms,function(term){
      term.close();
      term.unsetInactive();
    });
  }

  function show(){
    startNavElement.classList.add('active');
    scrollContainerElement.style.transform = 'translate3d(0,0%,0)';
    startElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide(){
    startNavElement.classList.remove('active');
    closeAllterms();
    startElement.hidden = true;
  }

  function showHide(){
    var hash = location.hash.substr(2);
    if (hash === '') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  window.addEventListener('hashchange',showHide);
  window.addEventListener('resize',function(){
    if (openTerm) {
      openTerm.updateLines();
    }
  })


  startElement.addEventListener('click',function(e){
    if (e.target === this
      || e.target.parentElement === this
      || e.target.classList.contains('start--term')) {
      closeAllterms();
    }
    _.each(terms,function(term){
      term.moveElement(e);
    });
  });

  init();

})();


(function(){

  var id = 'vita';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var vitaElement = document.getElementById(id);
  var vitaImageElement = vitaElement.querySelector('.vita--image');
  var vitaNavElement = document.getElementById('nav').querySelector('a[href="#!vita"]');
  var bodyElement = document.body;
  var selfObject;

  function init(){
    selfObject = {
      id: id,
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
  }


  function show(){
    vitaNavElement.classList.add('active');
    if (window.innerWidth >= 768) {
      scrollContainerElement.style.transform = 'translate3d(0,-25%,0)';
    } else {
      scrollContainerElement.style.transform = 'translate3d(-25%,0,0)';
    }
    vitaElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide(){
    vitaNavElement.classList.remove('active');
    vitaElement.hidden = true;
  }

  function showHide(){
    var hash = location.hash.substr(2);
    if (hash === 'vita') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  window.addEventListener('hashchange',showHide);

  init();

})();


(function(){

  var id = 'arbeitsweise';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var arbeitsweiseElement = document.getElementById(id);
  var arbeitsweiseNavElement = document.getElementById('nav').querySelector('a[href="#!arbeitsweise"]');
  var selfObject;

  function init(){
    selfObject = {
      id: id,
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
  }

  (function Gallery(){

    var galleryElement = arbeitsweiseElement.querySelector('.arbeitsweise--gallery');
    var imagesElement = arbeitsweiseElement.querySelector('.arbeitsweise--gallery--images');
    var imagesContainerElement = imagesElement.querySelector('.arbeitsweise--gallery--images--container');
    var alternativePreviousElement = imagesElement.querySelector('.arbeitsweise--gallery--images--alternative-nav--previous');
    var alternativeNextElement = imagesElement.querySelector('.arbeitsweise--gallery--images--alternative-nav--next');
    var previousElement = galleryElement.querySelector('.arbeitsweise--gallery--nav--previous');
    var nextElement = galleryElement.querySelector('.arbeitsweise--gallery--nav--next');
    var captionsElement = galleryElement.querySelector('.arbeitsweise--gallery--captions');
    var captionsContainerElement = galleryElement.querySelector('.arbeitsweise--gallery--captions--container');

    var images = imagesContainerElement.children;
    var imageIndex = 0;

    function moveContainerElements(){
      var x = imageIndex*100;
      imagesContainerElement.style.transform = 'translate3d(-'+x+'%,0,0)';
      captionsContainerElement.style.transform = 'translate3d(-'+x+'%,0,0)';
    }

    function handleNavAppearance() {
      if (imageIndex === 0) {
        previousElement.classList.add('inactive');
      } else {
        previousElement.classList.remove('inactive');
      }
      if(imageIndex === images.length - 1) {
        nextElement.classList.add('inactive');
      } else {
        nextElement.classList.remove('inactive');
      }
    }

    function showPreviousImage(){
      imageIndex--;
      if (imageIndex >= 0) {
        moveContainerElements();
      } else {
        imageIndex = images.length-1;
        var duration = (images.length-1)*100;
        imagesContainerElement.style.transitionDuration = duration+'ms';
        captionsContainerElement.style.transitionDuration = duration+'ms';
        moveContainerElements();
        setTimeout(function(){
          imagesContainerElement.style.transitionDuration = null;
          captionsContainerElement.style.transitionDuration = null;
        },duration);
      }
      handleNavAppearance();
    }

    function showNextImage(){
      imageIndex++;
      if (imageIndex < images.length) {
        moveContainerElements();
      } else {
        imageIndex = 0;
        var duration = (images.length-1)*100;
        imagesContainerElement.style.transitionDuration = duration+'ms';
        captionsContainerElement.style.transitionDuration = duration+'ms';
        moveContainerElements();
        setTimeout(function(){
          imagesContainerElement.style.transitionDuration = null;
          captionsContainerElement.style.transitionDuration = null;
        },duration);
      }
      handleNavAppearance();
    }

    previousElement.addEventListener('click',showPreviousImage);
    nextElement.addEventListener('click',showNextImage);
    alternativePreviousElement.addEventListener('click',showPreviousImage);
    alternativeNextElement.addEventListener('click',showNextImage);
    document.addEventListener('keydown',function(e){
      if (location.hash.substr(2) === 'arbeitsweise') {
        if (e.keyCode === 39 || e.keyCode === 74) { // key left
          showNextImage();
        } else if (e.keyCode === 37) { // key left
          showPreviousImage();
        }
      }
    });

    handleNavAppearance();

  })();

  function show(){
    arbeitsweiseNavElement.classList.add('active');
    if (window.innerWidth >= 768) {
      scrollContainerElement.style.transform = 'translate3d(0,-50%,0)';
    } else {
      scrollContainerElement.style.transform = 'translate3d(-50%,0,0)';
    }
    arbeitsweiseElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide(){
    arbeitsweiseNavElement.classList.remove('active');
    arbeitsweiseElement.hidden = true;
  }

  function showHide(){
    var hash = location.hash.substr(2);
    if (hash === 'arbeitsweise') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  window.addEventListener('hashchange',showHide);

  init();

})();


(function(){

  var id = 'kontakt';
  var scrollContainerElement = document.querySelector('.scroll-container');
  var kontaktElement = document.getElementById(id);
  var squareElement = kontaktElement.querySelector('.kontakt--square');
  var kontaktNavElement = document.getElementById('nav').querySelector('a[href="#!kontakt"]');
  var selfObject;

  function init(){
    selfObject = {
      id: id,
      page: true,
      showHide: showHide
    };
    PAGES.push(selfObject);
  }

  function show(){
    kontaktNavElement.classList.add('active');
    if (window.innerWidth >= 768) {
      scrollContainerElement.style.transform = 'translate3d(0,-75%,0)';
    } else {
      scrollContainerElement.style.transform = 'translate3d(-75%,0,0)';
    }
    kontaktElement.hidden = false;
    ACTIVE_PAGE = selfObject;
  }

  function hide(){
    kontaktNavElement.classList.remove('active');
    kontaktElement.hidden = true;
  }

  function showHide(){
    var hash = location.hash.substr(2);
    if (hash === 'kontakt') {
      requestAnimationFrame(show);
    } else {
      requestAnimationFrame(hide);
    }
  }

  function moveSquare(e){
    if (!kontaktElement.hidden) {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var moveX = (width/2 - e.clientX) / 800;
      var moveY = -(height/2 - e.clientY) / 30000 + 1;
      requestAnimationFrame(function(){
        squareElement.style.transform = 'scale('+moveY+') rotate('+moveX+'deg)';
      });
    }
  }

  window.addEventListener('hashchange',showHide);
  window.addEventListener('mousemove',moveSquare);

  init();

})();


(function(){

  function showHideAllPages() {
    _.each(PAGES,function(page){
      page.showHide();
    });
  }

  if (location.hash.length <= 2) {
    document.body.classList.add('startanimation');
  }
  showHideAllPages();

  window.addEventListener('resize',showHideAllPages)

})();


