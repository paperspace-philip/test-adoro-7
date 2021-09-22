(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[845],{8482:function(e,r,n){"use strict";n.d(r,{E:function(){return d}});var t=n(63),a=n(3105),i=n(5505),o=n(3808),u=n(7294),l=n(8327);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function s(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var f=u.forwardRef(((e,r)=>{var{htmlWidth:n,htmlHeight:t,alt:a}=e,i=s(e,["htmlWidth","htmlHeight","alt"]);return u.createElement("img",c({width:n,height:t,ref:r,alt:a},i))})),d=(0,t.G)(((e,r)=>{var{fallbackSrc:n,fallback:t,src:o,align:d,fit:v,loading:m,ignoreFallback:h,crossOrigin:b}=e,g=s(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),p=null!=m||h,y=function(e){var{src:r,srcSet:n,onLoad:t,onError:a,crossOrigin:i,sizes:o,ignoreFallback:c}=e,[s,f]=(0,u.useState)("pending");(0,u.useEffect)((()=>{f(r?"loading":"pending")}),[r]);var d=(0,u.useRef)(),v=(0,u.useCallback)((()=>{if(r){m();var e=new Image;e.src=r,i&&(e.crossOrigin=i),n&&(e.srcset=n),o&&(e.sizes=o),e.onload=e=>{m(),f("loaded"),null==t||t(e)},e.onerror=e=>{m(),f("failed"),null==a||a(e)},d.current=e}}),[r,i,n,o,t,a]),m=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return(0,l.G)((()=>{if(!c)return"loading"===s&&v(),()=>{m()}}),[s,v,c]),c?"loaded":s}(c({},e,{ignoreFallback:p})),x=c({ref:r,objectFit:v,objectPosition:d},p?g:(0,i.CE)(g,["onError","onLoad"]));return"loaded"!==y?t||u.createElement(a.m$.img,c({as:f,className:"chakra-image__placeholder",src:n},x)):u.createElement(a.m$.img,c({as:f,src:o,crossOrigin:b,loading:m,className:"chakra-image"},x))}));o.Ts&&(d.displayName="Image")},3096:function(e,r,n){var t="Expected a function",a=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,s="object"==typeof self&&self&&self.Object===Object&&self,f=c||s||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,h=function(){return f.Date.now()};function b(e,r,n){var a,i,o,u,l,c,s=0,f=!1,d=!1,b=!0;if("function"!=typeof e)throw new TypeError(t);function y(r){var n=a,t=i;return a=i=void 0,s=r,u=e.apply(t,n)}function x(e){return s=e,l=setTimeout(w,r),f?y(e):u}function k(e){var n=e-c;return void 0===c||n>=r||n<0||d&&e-s>=o}function w(){var e=h();if(k(e))return E(e);l=setTimeout(w,function(e){var n=r-(e-c);return d?m(n,o-(e-s)):n}(e))}function E(e){return l=void 0,b&&a?y(e):(a=i=void 0,u)}function j(){var e=h(),n=k(e);if(a=arguments,i=this,c=e,n){if(void 0===l)return x(c);if(d)return l=setTimeout(w,r),y(c)}return void 0===l&&(l=setTimeout(w,r)),u}return r=p(r)||0,g(n)&&(f=!!n.leading,o=(d="maxWait"in n)?v(p(n.maxWait)||0,r):o,b="trailing"in n?!!n.trailing:b),j.cancel=function(){void 0!==l&&clearTimeout(l),s=0,a=c=i=l=void 0},j.flush=function(){return void 0===l?u:E(h())},j}function g(e){var r=typeof e;return!!e&&("object"==r||"function"==r)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(g(e)){var r="function"==typeof e.valueOf?e.valueOf():e;e=g(r)?r+"":r}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var n=o.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,r,n){var a=!0,i=!0;if("function"!=typeof e)throw new TypeError(t);return g(n)&&(a="leading"in n?!!n.leading:a,i="trailing"in n?!!n.trailing:i),b(e,r,{leading:a,maxWait:r,trailing:i})}},4298:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return V}});var t=n(5893),a=n(7294),i=n(8327);function o(e,r){void 0===r&&(r=[]);var n=a.useRef(e);return(0,i.G)((()=>{n.current=e})),a.useCallback((function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return null==n.current?void 0:n.current(...r)}),r)}var u=n(3808),l=n(658),c=Number.MIN_SAFE_INTEGER||-9007199254740991,s=Number.MAX_SAFE_INTEGER||9007199254740991;function f(e,r){var n=function(e){var r=parseFloat(e);return(0,u.iy)(r)?0:r}(e),t=10**(null!=r?r:10);return n=Math.round(n*t)/t,r?n.toFixed(r):n.toString()}function d(e){if(!Number.isFinite(e))return 0;for(var r=1,n=0;Math.round(e*r)/r!==e;)r*=10,n+=1;return n}function v(e){void 0===e&&(e={});var{onChange:r,precision:n,defaultValue:t,value:i,step:u=1,min:d=c,max:v=s,keepWithinRange:g=!0}=e,p=o(r),[y,x]=(0,a.useState)((()=>{var e;return null==t?"":null!=(e=b(t,u,n))?e:""})),[k,w]=function(e,r){var n=void 0!==e;return[n,n&&"undefined"!==typeof e?e:r]}(i,y),E=h(m(w),u),j=null!=n?n:E,O=(0,a.useCallback)((e=>{e!==w&&(k||x(e.toString()),null==p||p(e.toString(),m(e)))}),[p,k,w]),N=(0,a.useCallback)((e=>{var r=e;return g&&(r=function(e,r,n){return null==e?e:((0,l.ZK)({condition:n<r,message:"clamp: max cannot be less than min"}),Math.min(Math.max(e,r),n))}(r,d,v)),f(r,j)}),[j,g,v,d]),S=(0,a.useCallback)((function(e){var r;void 0===e&&(e=u),r=""===w?m(e):m(w)+e,r=N(r),O(r)}),[N,u,O,w]),_=(0,a.useCallback)((function(e){var r;void 0===e&&(e=u),r=""===w?m(-e):m(w)-e,r=N(r),O(r)}),[N,u,O,w]),R=(0,a.useCallback)((()=>{var e,r;null==t?e="":e=null!=(r=b(t,u,n))?r:d;O(e)}),[t,n,u,O,d]),T=(0,a.useCallback)((e=>{var r,n=null!=(r=b(e,u,j))?r:d;O(n)}),[j,u,O,d]),C=m(w);return{isOutOfRange:C>v||C<d,isAtMax:C===v,isAtMin:C===d,precision:j,value:w,valueAsNumber:C,update:O,reset:R,increment:S,decrement:_,clamp:N,cast:T,setValue:x}}function m(e){return parseFloat(e.toString().replace(/[^\w.-]+/g,""))}function h(e,r){return Math.max(d(r),d(e))}function b(e,r,n){var t=m(e);if(!Number.isNaN(t)){var a=h(t,r);return f(t,null!=n?n:a)}}var g=n(9676),p=n(3105),y=n(5284),x=n(2326),k=n(917),w=((0,k.F4)({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),(0,k.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),(0,k.F4)({"0%":{left:"-40%"},"100%":{left:"100%"}})),E=(0,k.F4)({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function j(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}function O(){return(O=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}u.Ts;var N=e=>{var{min:r,max:n,value:t,isIndeterminate:i}=e,o=j(e,["min","max","value","isIndeterminate"]),l=function(e){var{value:r=0,min:n,max:t,valueText:a,getValueText:i,isIndeterminate:o}=e,l=function(e,r,n){return 100*(e-r)/(n-r)}(r,n,t);return{bind:{"data-indeterminate":o?"":void 0,"aria-valuemax":t,"aria-valuemin":n,"aria-valuenow":o?void 0:r,"aria-valuetext":(()=>{if(null!=r)return(0,u.mf)(i)?i(r,l):a})(),role:"progressbar"},percent:l,value:r}}({value:t,min:r,max:n,isIndeterminate:i}),c=O({height:"100%"},(0,g.yK)().filledTrack);return a.createElement(p.m$.div,O({style:O({width:l.percent+"%"},o.style)},l.bind,o,{__css:c}))},S=e=>{var r,n=(0,y.Lr)(e),{value:t,min:i=0,max:o=100,hasStripe:u,isAnimated:l,children:c,borderRadius:s,isIndeterminate:f,"aria-label":d,"aria-labelledby":v}=n,m=j(n,["value","min","max","hasStripe","isAnimated","children","borderRadius","isIndeterminate","aria-label","aria-labelledby"]),h=(0,x.j)("Progress",e),b=null!=s?s:null==(r=h.track)?void 0:r.borderRadius,k=O({},!f&&u&&l&&{animation:E+" 1s linear infinite"},f&&{position:"absolute",willChange:"left",minWidth:"50%",animation:w+" 1s ease infinite normal none running"}),S=O({overflow:"hidden",position:"relative"},h.track);return a.createElement(p.m$.div,O({borderRadius:b,__css:S},m),a.createElement(g.Fo,{value:h},a.createElement(N,{"aria-label":d,"aria-labelledby":v,min:i,max:o,value:t,isIndeterminate:f,css:k,borderRadius:b}),c))};u.Ts&&(S.displayName="Progress");var _=n(51),R=n(8017),T=n(8482),C=n(3096),F=n.n(C);var I=function(e){var r=(0,a.useRef)(e);r.current=e;var n=(0,a.useRef)();return n.current||(n.current=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return r.current.apply(this,e)}),n.current};var A=function(e){var r=I(e);(0,a.useEffect)((function(){return function(){"function"===typeof r&&r()}}),[])},M=function(e,r){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,a,i=n.call(e),o=[];try{for(;(void 0===r||r-- >0)&&!(t=i.next()).done;)o.push(t.value)}catch(u){a={error:u}}finally{try{t&&!t.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o},P=function(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(M(arguments[r]));return e};var $=function(e,r){var n,t=(0,a.useRef)(e);t.current=e;var i=null!==(n=null===r||void 0===r?void 0:r.wait)&&void 0!==n?n:1e3,o=function(e,r){var n=(0,a.useRef)({deps:r,obj:void 0,initialized:!1}).current;return!1!==n.initialized&&function(e,r){if(e===r)return!0;for(var n=0;n<e.length;n++)if(e[n]!==r[n])return!1;return!0}(n.deps,r)||(n.deps=r,n.obj=e(),n.initialized=!0),n.obj}((function(){return F()((function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return t.current.apply(t,P(e))}),i,r)}),[]);return A((function(){o.cancel()})),{run:o,cancel:o.cancel,flush:o.flush}},z=function(e,r){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var t,a,i=n.call(e),o=[];try{for(;(void 0===r||r-- >0)&&!(t=i.next()).done;)o.push(t.value)}catch(u){a={error:u}}finally{try{t&&!t.done&&(n=i.return)&&n.call(i)}finally{if(a)throw a.error}}return o};var D=function(e,r){var n=z((0,a.useState)(e),2),t=n[0],i=n[1],o=$((function(){i(e)}),r).run;return(0,a.useEffect)((function(){o()}),[e]),t},W=n(1163);var G=n(6483),L=function(e){var r=e.basePath,n=e.framesCount,i=v({defaultValue:0,min:0,max:n-1}),u=i.valueAsNumber,l=i.increment,c=i.decrement,s=i.isAtMax,f=D(u,{wait:10}),d="".concat(G.v,"/").concat(r,"/").concat(f,".jpg"),m=function(e){var r=(0,a.useRef)();return(0,a.useEffect)((function(){r.current=e})),r.current}(d),h=(0,a.useCallback)((function(){l(2)}),[l]),b=(0,a.useCallback)((function(){if(0===u)return l(1);c(3)}),[u,l,c]),g=(0,W.useRouter)();return function(e,r){var n=o(e);a.useEffect((()=>{var e;if(null!=r)return e=window.setTimeout((()=>{n()}),r),()=>{e&&window.clearTimeout(e)}}),[r,n])}((function(){return g.push({pathname:"/share-meme",query:{path:r}})}),s?3e3:null),(0,t.jsxs)(_.gC,{alignItems:"stretch",spacing:3,p:3,bg:"white",rounded:"md",boxShadow:"md",children:[(0,t.jsxs)(R.xu,{position:"relative",width:256,height:256,children:[(0,t.jsx)(T.E,{zIndex:2,position:"absolute",top:0,right:0,bottom:0,left:0,id:"active-frame",alt:"",src:d,onLoad:h,onError:b}),(0,t.jsx)(T.E,{id:"previous-frame",src:m,alt:"",position:"absolute",top:0,right:0,bottom:0,left:0})]}),(0,t.jsx)(S,{isAnimated:!0,hasStripe:s,size:"lg",value:f,max:n,colorScheme:"yellow",rounded:"sm"})]})};function V(){var e=(0,W.useRouter)().query,r=e.path,n=e.frames;return(0,t.jsx)(_.Ug,{children:(0,t.jsx)(L,{basePath:r,framesCount:parseInt(n)})})}},6483:function(e,r,n){"use strict";n.d(r,{v:function(){return a},b:function(){return i}});var t=n(9669),a="http://localhost:8000",i=n.n(t)().create({baseURL:a})},8571:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/time-machine",function(){return n(4298)}])}},function(e){e.O(0,[9,774,888,179],(function(){return r=8571,e(e.s=r);var r}));var r=e.O();_N_E=r}]);