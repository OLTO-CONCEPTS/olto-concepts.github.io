(self.webpackChunkolto_dev=self.webpackChunkolto_dev||[]).push([[541],{5262:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return X}});var r=t(7294),a=t(2122),o=t(9756),c=t(5655);var u=function(e,n){var t=(0,r.useRef)(!0);(0,r.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},i=t(9424),l=t(6400),s=t(9129),f=Math.pow(2,31)-1;function d(e,n,t){var r=t-Date.now();e.current=r<=f?setTimeout(n,r):setTimeout((function(){return d(e,n,t)}),f)}function v(){var e=(0,l.Z)(),n=(0,r.useRef)();return(0,s.Z)((function(){return clearTimeout(n.current)})),(0,r.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(t(),a<=f?n.current=setTimeout(r,a):d(n,r,Date.now()+a))},clear:t}}),[])}var m=t(5900),p=t.n(m),b=t(5160),h=t(5697),y=t.n(h);t(1143);function E(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function w(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}function N(e,n){return Object.keys(n).reduce((function(t,c){var u,i=t,l=i[E(c)],s=i[c],f=(0,o.Z)(i,[E(c),c].map(w)),d=n[c],v=function(e,n,t){var a=(0,r.useRef)(void 0!==e),o=(0,r.useState)(n),c=o[0],u=o[1],i=void 0!==e,l=a.current;return a.current=i,!i&&l&&c!==n&&u(n),[i?e:c,(0,r.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];t&&t.apply(void 0,[e].concat(r)),u(e)}),[t])]}(s,l,e[d]),m=v[0],p=v[1];return(0,a.Z)({},f,((u={})[c]=m,u[d]=p,u))}),e)}t(3639);var k=(0,t(8870).Z)("carousel-caption"),x=t(9541),g=r.forwardRef((function(e,n){var t=e.as,c=void 0===t?"div":t,u=e.bsPrefix,i=e.children,l=e.className,s=(0,o.Z)(e,["as","bsPrefix","children","className"]),f=p()(l,(0,x.vE)(u,"carousel-item"));return r.createElement(c,(0,a.Z)({ref:n},s,{className:f}),i)}));g.displayName="CarouselItem";var S=g;function C(e,n){var t=0;return r.Children.map(e,(function(e){return r.isValidElement(e)?n(e,t++):e}))}var I=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];e.apply(this,r),n.apply(this,r)}}),null)};function T(e){return!e||"#"===e.trim()}var Z=r.forwardRef((function(e,n){var t=e.as,c=void 0===t?"a":t,u=e.disabled,i=e.onKeyDown,l=(0,o.Z)(e,["as","disabled","onKeyDown"]),s=function(e){var n=l.href,t=l.onClick;(u||T(n))&&e.preventDefault(),u?e.stopPropagation():t&&t(e)};return T(l.href)&&(l.role=l.role||"button",l.href=l.href||"#"),u&&(l.tabIndex=-1,l["aria-disabled"]=!0),r.createElement(c,(0,a.Z)({ref:n},l,{onClick:s,onKeyDown:I((function(e){" "===e.key&&(e.preventDefault(),s(e))}),i)}))}));Z.displayName="SafeAnchor";var M=Z,D=t(949),R=t(9059),P={bsPrefix:y().string,as:y().elementType,slide:y().bool,fade:y().bool,controls:y().bool,indicators:y().bool,activeIndex:y().number,onSelect:y().func,onSlide:y().func,onSlid:y().func,interval:y().number,keyboard:y().bool,pause:y().oneOf(["hover",!1]),wrap:y().bool,touch:y().bool,prevIcon:y().node,prevLabel:y().string,nextIcon:y().node,nextLabel:y().string},A={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:r.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:r.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function L(e,n){var t=N(e,{activeIndex:"onSelect"}),l=t.as,s=void 0===l?"div":l,f=t.bsPrefix,d=t.slide,m=t.fade,h=t.controls,y=t.indicators,E=t.activeIndex,w=t.onSelect,k=t.onSlide,g=t.onSlid,S=t.interval,I=t.keyboard,T=t.onKeyDown,Z=t.pause,P=t.onMouseOver,A=t.onMouseOut,L=t.wrap,O=t.touch,K=t.onTouchStart,j=t.onTouchMove,F=t.onTouchEnd,V=t.prevIcon,X=t.prevLabel,_=t.nextIcon,H=t.nextLabel,U=t.className,q=t.children,z=(0,o.Z)(t,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),B=(0,x.vE)(f,"carousel"),G=(0,r.useRef)(null),J=(0,r.useState)("next"),Q=J[0],W=J[1],Y=(0,r.useState)(!1),$=Y[0],ee=Y[1],ne=(0,r.useState)(!1),te=ne[0],re=ne[1],ae=(0,r.useState)(E||0),oe=ae[0],ce=ae[1];te||E===oe||(G.current?W(G.current):W((E||0)>oe?"next":"prev"),d&&re(!0),ce(E||0)),(0,r.useEffect)((function(){G.current&&(G.current=null)}));var ue,ie=0;!function(e,n){var t=0;r.Children.forEach(e,(function(e){r.isValidElement(e)&&n(e,t++)}))}(q,(function(e,n){++ie,n===E&&(ue=e.props.interval)}));var le=(0,i.Z)(ue),se=(0,r.useCallback)((function(e){if(!te){var n=oe-1;if(n<0){if(!L)return;n=ie-1}G.current="prev",w&&w(n,e)}}),[te,oe,w,L,ie]),fe=(0,c.Z)((function(e){if(!te){var n=oe+1;if(n>=ie){if(!L)return;n=0}G.current="next",w&&w(n,e)}})),de=(0,r.useRef)();(0,r.useImperativeHandle)(n,(function(){return{element:de.current,prev:se,next:fe}}));var ve=(0,c.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(de.current)&&fe()})),me="next"===Q?"left":"right";u((function(){d||(k&&k(oe,me),g&&g(oe,me))}),[oe]);var pe=B+"-item-"+Q,be=B+"-item-"+me,he=(0,r.useCallback)((function(e){(0,R.Z)(e),k&&k(oe,me)}),[k,oe,me]),ye=(0,r.useCallback)((function(){re(!1),g&&g(oe,me)}),[g,oe,me]),Ee=(0,r.useCallback)((function(e){if(I&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void se(e);case"ArrowRight":return e.preventDefault(),void fe(e)}T&&T(e)}),[I,T,se,fe]),we=(0,r.useCallback)((function(e){"hover"===Z&&ee(!0),P&&P(e)}),[Z,P]),Ne=(0,r.useCallback)((function(e){ee(!1),A&&A(e)}),[A]),ke=(0,r.useRef)(0),xe=(0,r.useRef)(0),ge=v(),Se=(0,r.useCallback)((function(e){ke.current=e.touches[0].clientX,xe.current=0,"hover"===Z&&ee(!0),K&&K(e)}),[Z,K]),Ce=(0,r.useCallback)((function(e){e.touches&&e.touches.length>1?xe.current=0:xe.current=e.touches[0].clientX-ke.current,j&&j(e)}),[j]),Ie=(0,r.useCallback)((function(e){if(O){var n=xe.current;Math.abs(n)>40&&(n>0?se(e):fe(e))}"hover"===Z&&ge.set((function(){ee(!1)}),S||void 0),F&&F(e)}),[O,Z,se,fe,ge,S,F]),Te=null!=S&&!$&&!te,Ze=(0,r.useRef)();(0,r.useEffect)((function(){var e,n;if(Te)return Ze.current=window.setInterval(document.visibilityState?ve:fe,null!=(e=null!=(n=le.current)?n:S)?e:void 0),function(){null!==Ze.current&&clearInterval(Ze.current)}}),[Te,fe,le,S,ve]);var Me=(0,r.useMemo)((function(){return y&&Array.from({length:ie},(function(e,n){return function(e){w&&w(n,e)}}))}),[y,ie,w]);return r.createElement(s,(0,a.Z)({ref:de},z,{onKeyDown:Ee,onMouseOver:we,onMouseOut:Ne,onTouchStart:Se,onTouchMove:Ce,onTouchEnd:Ie,className:p()(U,B,d&&"slide",m&&B+"-fade")}),y&&r.createElement("ol",{className:B+"-indicators"},C(q,(function(e,n){return r.createElement("li",{key:n,className:n===oe?"active":void 0,onClick:Me?Me[n]:void 0})}))),r.createElement("div",{className:B+"-inner"},C(q,(function(e,n){var t=n===oe;return d?r.createElement(b.ZP,{in:t,onEnter:t?he:void 0,onEntered:t?ye:void 0,addEndListener:D.Z},(function(n){return r.cloneElement(e,{className:p()(e.props.className,t&&"entered"!==n&&pe,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&be)})})):r.cloneElement(e,{className:p()(e.props.className,t&&"active")})}))),h&&r.createElement(r.Fragment,null,(L||0!==E)&&r.createElement(M,{className:B+"-control-prev",onClick:se},V,X&&r.createElement("span",{className:"sr-only"},X)),(L||E!==ie-1)&&r.createElement(M,{className:B+"-control-next",onClick:fe},_,H&&r.createElement("span",{className:"sr-only"},H))))}var O=r.forwardRef(L);O.displayName="Carousel",O.propTypes=P,O.defaultProps=A,O.Caption=k,O.Item=S;var K=O,j=t.p+"static/annie-291c2b3f96ec7f291e09631f2375b4c1.png",F=t.p+"static/happy-7d0119999476a7f8c720ac61311b7319.png",V=t.p+"static/make-5f63061c4612d846a872c8681dc54d6e.png";var X=function(e){return r.createElement(K,{fade:!0,className:"carousel mx-auto",indicators:!1},r.createElement(K.Item,null,r.createElement("img",{className:"d-block w-100 car-border",src:j,alt:"First slide"})),r.createElement(K.Item,null,r.createElement("img",{className:"d-block w-100 car-border",src:F,alt:"Second slide"})),r.createElement(K.Item,null,r.createElement("img",{className:"d-block w-100 car-border",src:V,alt:"Third slide"})))}}}]);
//# sourceMappingURL=b71416404a4bcb44341d672bcbddc885e034d850-44a4861521784ce97b15.js.map