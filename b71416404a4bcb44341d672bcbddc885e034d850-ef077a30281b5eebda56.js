(self.webpackChunkolto_dev=self.webpackChunkolto_dev||[]).push([[541],{5262:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(7294),a=n(2122),o=n(9756),c=n(5655);var l=function(e,t){var n=(0,r.useRef)(!0);(0,r.useEffect)((function(){if(!n.current)return e();n.current=!1}),t)},u=n(9424),i=n(6400),s=n(9129),m=Math.pow(2,31)-1;function f(e,t,n){var r=n-Date.now();e.current=r<=m?setTimeout(t,r):setTimeout((function(){return f(e,t,n)}),m)}function d(){var e=(0,i.Z)(),t=(0,r.useRef)();return(0,s.Z)((function(){return clearTimeout(t.current)})),(0,r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=m?t.current=setTimeout(r,a):f(t,r,Date.now()+a))},clear:n}}),[])}var v=n(5900),p=n.n(v),b=n(5160),y=n(5697),E=n.n(y);n(1143);function h(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function N(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function x(e,t){return Object.keys(t).reduce((function(n,c){var l,u=n,i=u[h(c)],s=u[c],m=(0,o.Z)(u,[h(c),c].map(N)),f=t[c],d=function(e,t,n){var a=(0,r.useRef)(void 0!==e),o=(0,r.useState)(t),c=o[0],l=o[1],u=void 0!==e,i=a.current;return a.current=u,!u&&i&&c!==t&&l(t),[u?e:c,(0,r.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),l(e)}),[n])]}(s,i,e[f]),v=d[0],p=d[1];return(0,a.Z)({},m,((l={})[c]=v,l[f]=p,l))}),e)}n(3639);var g=(0,n(8870).Z)("carousel-caption"),w=n(9541),Z=r.forwardRef((function(e,t){var n=e.as,c=void 0===n?"div":n,l=e.bsPrefix,u=e.children,i=e.className,s=(0,o.Z)(e,["as","bsPrefix","children","className"]),m=p()(i,(0,w.vE)(l,"carousel-item"));return r.createElement(c,(0,a.Z)({ref:t},s,{className:m}),u)}));Z.displayName="CarouselItem";var k=Z;function S(e,t){var n=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?t(e,n++):e}))}var C=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};function I(e){return!e||"#"===e.trim()}var T=r.forwardRef((function(e,t){var n=e.as,c=void 0===n?"a":n,l=e.disabled,u=e.onKeyDown,i=(0,o.Z)(e,["as","disabled","onKeyDown"]),s=function(e){var t=i.href,n=i.onClick;(l||I(t))&&e.preventDefault(),l?e.stopPropagation():n&&n(e)};return I(i.href)&&(i.role=i.role||"button",i.href=i.href||"#"),l&&(i.tabIndex=-1,i["aria-disabled"]=!0),r.createElement(c,(0,a.Z)({ref:t},i,{onClick:s,onKeyDown:C((function(e){" "===e.key&&(e.preventDefault(),s(e))}),u)}))}));T.displayName="SafeAnchor";var M=T,D=n(949),P=n(9059),R={bsPrefix:E().string,as:E().elementType,slide:E().bool,fade:E().bool,controls:E().bool,indicators:E().bool,activeIndex:E().number,onSelect:E().func,onSlide:E().func,onSlid:E().func,interval:E().number,keyboard:E().bool,pause:E().oneOf(["hover",!1]),wrap:E().bool,touch:E().bool,prevIcon:E().node,prevLabel:E().string,nextIcon:E().node,nextLabel:E().string},A={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function L(e,t){var n=x(e,{activeIndex:"onSelect"}),i=n.as,s=void 0===i?"div":i,m=n.bsPrefix,f=n.slide,v=n.fade,y=n.controls,E=n.indicators,h=n.activeIndex,N=n.onSelect,g=n.onSlide,Z=n.onSlid,k=n.interval,C=n.keyboard,I=n.onKeyDown,T=n.pause,R=n.onMouseOver,A=n.onMouseOut,L=n.wrap,O=n.touch,K=n.onTouchStart,j=n.onTouchMove,W=n.onTouchEnd,F=n.prevIcon,H=n.prevLabel,V=n.nextIcon,X=n.nextLabel,_=n.className,z=n.children,G=(0,o.Z)(n,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),U=(0,w.vE)(m,"carousel"),q=(0,r.useRef)(null),B=(0,r.useState)("next"),J=B[0],Q=B[1],Y=(0,r.useState)(!1),$=Y[0],ee=Y[1],te=(0,r.useState)(!1),ne=te[0],re=te[1],ae=(0,r.useState)(h||0),oe=ae[0],ce=ae[1];ne||h===oe||(q.current?Q(q.current):Q((h||0)>oe?"next":"prev"),f&&re(!0),ce(h||0)),(0,r.useEffect)((function(){q.current&&(q.current=null)}));var le,ue=0;!function(e,t){var n=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&t(e,n++)}))}(z,(function(e,t){++ue,t===h&&(le=e.props.interval)}));var ie=(0,u.Z)(le),se=(0,r.useCallback)((function(e){if(!ne){var t=oe-1;if(t<0){if(!L)return;t=ue-1}q.current="prev",N&&N(t,e)}}),[ne,oe,N,L,ue]),me=(0,c.Z)((function(e){if(!ne){var t=oe+1;if(t>=ue){if(!L)return;t=0}q.current="next",N&&N(t,e)}})),fe=(0,r.useRef)();(0,r.useImperativeHandle)(t,(function(){return{element:fe.current,prev:se,next:me}}));var de=(0,c.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(fe.current)&&me()})),ve="next"===J?"left":"right";l((function(){f||(g&&g(oe,ve),Z&&Z(oe,ve))}),[oe]);var pe=U+"-item-"+J,be=U+"-item-"+ve,ye=(0,r.useCallback)((function(e){(0,P.Z)(e),g&&g(oe,ve)}),[g,oe,ve]),Ee=(0,r.useCallback)((function(){re(!1),Z&&Z(oe,ve)}),[Z,oe,ve]),he=(0,r.useCallback)((function(e){if(C&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void se(e);case"ArrowRight":return e.preventDefault(),void me(e)}I&&I(e)}),[C,I,se,me]),Ne=(0,r.useCallback)((function(e){"hover"===T&&ee(!0),R&&R(e)}),[T,R]),xe=(0,r.useCallback)((function(e){ee(!1),A&&A(e)}),[A]),ge=(0,r.useRef)(0),we=(0,r.useRef)(0),Ze=d(),ke=(0,r.useCallback)((function(e){ge.current=e.touches[0].clientX,we.current=0,"hover"===T&&ee(!0),K&&K(e)}),[T,K]),Se=(0,r.useCallback)((function(e){e.touches&&e.touches.length>1?we.current=0:we.current=e.touches[0].clientX-ge.current,j&&j(e)}),[j]),Ce=(0,r.useCallback)((function(e){if(O){var t=we.current;Math.abs(t)>40&&(t>0?se(e):me(e))}"hover"===T&&Ze.set((function(){ee(!1)}),k||void 0),W&&W(e)}),[O,T,se,me,Ze,k,W]),Ie=null!=k&&!$&&!ne,Te=(0,r.useRef)();(0,r.useEffect)((function(){var e,t;if(Ie)return Te.current=window.setInterval(document.visibilityState?de:me,null!=(e=null!=(t=ie.current)?t:k)?e:void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[Ie,me,ie,k,de]);var Me=(0,r.useMemo)((function(){return E&&Array.from({length:ue},(function(e,t){return function(e){N&&N(t,e)}}))}),[E,ue,N]);return r.createElement(s,(0,a.Z)({ref:fe},G,{onKeyDown:he,onMouseOver:Ne,onMouseOut:xe,onTouchStart:ke,onTouchMove:Se,onTouchEnd:Ce,className:p()(_,U,f&&"slide",v&&U+"-fade")}),E&&r.createElement("ol",{className:U+"-indicators"},S(z,(function(e,t){return r.createElement("li",{key:t,className:t===oe?"active":void 0,onClick:Me?Me[t]:void 0})}))),r.createElement("div",{className:U+"-inner"},S(z,(function(e,t){var n=t===oe;return f?r.createElement(b.ZP,{in:n,onEnter:n?ye:void 0,onEntered:n?Ee:void 0,addEndListener:D.Z},(function(t){return r.cloneElement(e,{className:p()(e.props.className,n&&"entered"!==t&&pe,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&be)})})):r.cloneElement(e,{className:p()(e.props.className,n&&"active")})}))),y&&r.createElement(r.Fragment,null,(L||0!==h)&&r.createElement(M,{className:U+"-control-prev",onClick:se},F,H&&r.createElement("span",{className:"sr-only"},H)),(L||h!==ue-1)&&r.createElement(M,{className:U+"-control-next",onClick:me},V,X&&r.createElement("span",{className:"sr-only"},X))))}var O=r.forwardRef(L);O.displayName="Carousel",O.propTypes=R,O.defaultProps=A,O.Caption=g,O.Item=k;var K=O,j=n(6187),W=n(994),F=n(7408),H=n.p+"static/annie-291c2b3f96ec7f291e09631f2375b4c1.png",V=n.p+"static/happy-7d0119999476a7f8c720ac61311b7319.png",X=n.p+"static/make-5f63061c4612d846a872c8681dc54d6e.png";var _=function(e){return r.createElement("div",null,r.createElement(K,{fade:!0,indicators:!1,className:"w-100"},r.createElement(K.Item,null,r.createElement(j.Z,{className:"carousel my-auto mx-auto"},r.createElement(W.Z,null,r.createElement(F.Z,{id:"car-display",className:"px-0"},r.createElement("img",{className:"w-100 car-border",src:H,alt:"First slide"}))),r.createElement(W.Z,{className:"portfolio-panel my-2 text-center"},r.createElement(F.Z,{lg:6,className:"my-auto"},r.createElement("h3",{className:"mb-0 py-2  portfolio-title"},"Annie's Tomorrow Project")),r.createElement(F.Z,{lg:6,className:"my-auto"},r.createElement("p",{className:"mb-0"},"Website creation, brand identity."))))),r.createElement(K.Item,null,r.createElement(j.Z,{className:"carousel my-auto mx-auto"},r.createElement(W.Z,null,r.createElement(F.Z,{id:"car-display",className:"px-0"},r.createElement("img",{className:"w-100 car-border",src:V,alt:"Second slide"}))),r.createElement(W.Z,{className:"portfolio-panel my-2 text-center"},r.createElement(F.Z,{lg:6,className:"my-auto"},r.createElement("h3",{className:"mb-0 py-2  portfolio-title"},"Happyendings917")),r.createElement(F.Z,{lg:6,className:"my-auto"},r.createElement("p",{className:"mb-0"},"Website creation, ecommerce setup, SEO"))))),r.createElement(K.Item,null,r.createElement(j.Z,{className:"carousel my-auto mx-auto"},r.createElement(W.Z,null,r.createElement(F.Z,{id:"car-display",className:"px-0"},r.createElement("img",{className:"w-100 car-border",src:X,alt:"Third slide"}))),r.createElement(W.Z,{className:"portfolio-panel my-2 text-center "},r.createElement(F.Z,{lg:6,className:"my-auto"},r.createElement("h3",{className:"mb-0 py-2 portfolio-title"},"The Make Group")),r.createElement(F.Z,{lg:6,className:"my-auto"},r.createElement("p",{className:"mb-0"},"Wordpress style cleanup, web optimization")))))))}}}]);
//# sourceMappingURL=b71416404a4bcb44341d672bcbddc885e034d850-ef077a30281b5eebda56.js.map