(self.webpackChunkolto_dev=self.webpackChunkolto_dev||[]).push([[366],{7752:function(e,n,t){"use strict";t.d(n,{Z:function(){return K}});var r=t(2122),o=t(9756),a=t(5655),u=t(7294);var c=function(e,n){var t=(0,u.useRef)(!0);(0,u.useEffect)((function(){if(!t.current)return e();t.current=!1}),n)},i=t(9424),l=t(6400),s=t(9129),f=Math.pow(2,31)-1;function d(e,n,t){var r=t-Date.now();e.current=r<=f?setTimeout(n,r):setTimeout((function(){return d(e,n,t)}),f)}function v(){var e=(0,l.Z)(),n=(0,u.useRef)();return(0,s.Z)((function(){return clearTimeout(n.current)})),(0,u.useMemo)((function(){var t=function(){return clearTimeout(n.current)};return{set:function(r,o){void 0===o&&(o=0),e()&&(t(),o<=f?n.current=setTimeout(r,o):d(n,r,Date.now()+o))},clear:t}}),[])}var p=t(5900),m=t.n(p),b=t(5160),h=t(5697),y=t.n(h);t(1143);function x(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function E(e){var n=function(e,n){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,n||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==typeof n?n:String(n)}function w(e,n){return Object.keys(n).reduce((function(t,a){var c,i=t,l=i[x(a)],s=i[a],f=(0,o.Z)(i,[x(a),a].map(E)),d=n[a],v=function(e,n,t){var r=(0,u.useRef)(void 0!==e),o=(0,u.useState)(n),a=o[0],c=o[1],i=void 0!==e,l=r.current;return r.current=i,!i&&l&&a!==n&&c(n),[i?e:a,(0,u.useCallback)((function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.apply(void 0,[e].concat(r)),c(e)}),[t])]}(s,l,e[d]),p=v[0],m=v[1];return(0,r.Z)({},f,((c={})[a]=p,c[d]=m,c))}),e)}t(3639);var N=(0,t(8870).Z)("carousel-caption"),g=t(9541),k=u.forwardRef((function(e,n){var t=e.as,a=void 0===t?"div":t,c=e.bsPrefix,i=e.children,l=e.className,s=(0,o.Z)(e,["as","bsPrefix","children","className"]),f=m()(l,(0,g.vE)(c,"carousel-item"));return u.createElement(a,(0,r.Z)({ref:n},s,{className:f}),i)}));k.displayName="CarouselItem";var C=k;function S(e,n){var t=0;return u.Children.map(e,(function(e){return u.isValidElement(e)?n(e,t++):e}))}var Z=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter((function(e){return null!=e})).reduce((function(e,n){if("function"!=typeof n)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?n:function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];e.apply(this,r),n.apply(this,r)}}),null)};function I(e){return!e||"#"===e.trim()}var T=u.forwardRef((function(e,n){var t=e.as,a=void 0===t?"a":t,c=e.disabled,i=e.onKeyDown,l=(0,o.Z)(e,["as","disabled","onKeyDown"]),s=function(e){var n=l.href,t=l.onClick;(c||I(n))&&e.preventDefault(),c?e.stopPropagation():t&&t(e)};return I(l.href)&&(l.role=l.role||"button",l.href=l.href||"#"),c&&(l.tabIndex=-1,l["aria-disabled"]=!0),u.createElement(a,(0,r.Z)({ref:n},l,{onClick:s,onKeyDown:Z((function(e){" "===e.key&&(e.preventDefault(),s(e))}),i)}))}));T.displayName="SafeAnchor";var P=T,R=t(949),M=t(9059),D={bsPrefix:y().string,as:y().elementType,slide:y().bool,fade:y().bool,controls:y().bool,indicators:y().bool,activeIndex:y().number,onSelect:y().func,onSlide:y().func,onSlid:y().func,interval:y().number,keyboard:y().bool,pause:y().oneOf(["hover",!1]),wrap:y().bool,touch:y().bool,prevIcon:y().node,prevLabel:y().string,nextIcon:y().node,nextLabel:y().string},A={slide:!0,fade:!1,controls:!0,indicators:!0,defaultActiveIndex:0,interval:5e3,keyboard:!0,pause:"hover",wrap:!0,touch:!0,prevIcon:u.createElement("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:"Previous",nextIcon:u.createElement("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:"Next"};function L(e,n){var t=w(e,{activeIndex:"onSelect"}),l=t.as,s=void 0===l?"div":l,f=t.bsPrefix,d=t.slide,p=t.fade,h=t.controls,y=t.indicators,x=t.activeIndex,E=t.onSelect,N=t.onSlide,k=t.onSlid,C=t.interval,Z=t.keyboard,I=t.onKeyDown,T=t.pause,D=t.onMouseOver,A=t.onMouseOut,L=t.wrap,O=t.touch,K=t.onTouchStart,j=t.onTouchMove,G=t.onTouchEnd,V=t.prevIcon,X=t.prevLabel,_=t.nextIcon,F=t.nextLabel,H=t.className,U=t.children,q=(0,o.Z)(t,["as","bsPrefix","slide","fade","controls","indicators","activeIndex","onSelect","onSlide","onSlid","interval","keyboard","onKeyDown","pause","onMouseOver","onMouseOut","wrap","touch","onTouchStart","onTouchMove","onTouchEnd","prevIcon","prevLabel","nextIcon","nextLabel","className","children"]),z=(0,g.vE)(f,"carousel"),B=(0,u.useRef)(null),J=(0,u.useState)("next"),Q=J[0],W=J[1],Y=(0,u.useState)(!1),$=Y[0],ee=Y[1],ne=(0,u.useState)(!1),te=ne[0],re=ne[1],oe=(0,u.useState)(x||0),ae=oe[0],ue=oe[1];te||x===ae||(B.current?W(B.current):W((x||0)>ae?"next":"prev"),d&&re(!0),ue(x||0)),(0,u.useEffect)((function(){B.current&&(B.current=null)}));var ce,ie=0;!function(e,n){var t=0;u.Children.forEach(e,(function(e){u.isValidElement(e)&&n(e,t++)}))}(U,(function(e,n){++ie,n===x&&(ce=e.props.interval)}));var le=(0,i.Z)(ce),se=(0,u.useCallback)((function(e){if(!te){var n=ae-1;if(n<0){if(!L)return;n=ie-1}B.current="prev",E&&E(n,e)}}),[te,ae,E,L,ie]),fe=(0,a.Z)((function(e){if(!te){var n=ae+1;if(n>=ie){if(!L)return;n=0}B.current="next",E&&E(n,e)}})),de=(0,u.useRef)();(0,u.useImperativeHandle)(n,(function(){return{element:de.current,prev:se,next:fe}}));var ve=(0,a.Z)((function(){!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;var n=getComputedStyle(e);return"none"!==n.display&&"hidden"!==n.visibility&&"none"!==getComputedStyle(e.parentNode).display}(de.current)&&fe()})),pe="next"===Q?"left":"right";c((function(){d||(N&&N(ae,pe),k&&k(ae,pe))}),[ae]);var me=z+"-item-"+Q,be=z+"-item-"+pe,he=(0,u.useCallback)((function(e){(0,M.Z)(e),N&&N(ae,pe)}),[N,ae,pe]),ye=(0,u.useCallback)((function(){re(!1),k&&k(ae,pe)}),[k,ae,pe]),xe=(0,u.useCallback)((function(e){if(Z&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void se(e);case"ArrowRight":return e.preventDefault(),void fe(e)}I&&I(e)}),[Z,I,se,fe]),Ee=(0,u.useCallback)((function(e){"hover"===T&&ee(!0),D&&D(e)}),[T,D]),we=(0,u.useCallback)((function(e){ee(!1),A&&A(e)}),[A]),Ne=(0,u.useRef)(0),ge=(0,u.useRef)(0),ke=v(),Ce=(0,u.useCallback)((function(e){Ne.current=e.touches[0].clientX,ge.current=0,"hover"===T&&ee(!0),K&&K(e)}),[T,K]),Se=(0,u.useCallback)((function(e){e.touches&&e.touches.length>1?ge.current=0:ge.current=e.touches[0].clientX-Ne.current,j&&j(e)}),[j]),Ze=(0,u.useCallback)((function(e){if(O){var n=ge.current;Math.abs(n)>40&&(n>0?se(e):fe(e))}"hover"===T&&ke.set((function(){ee(!1)}),C||void 0),G&&G(e)}),[O,T,se,fe,ke,C,G]),Ie=null!=C&&!$&&!te,Te=(0,u.useRef)();(0,u.useEffect)((function(){var e,n;if(Ie)return Te.current=window.setInterval(document.visibilityState?ve:fe,null!=(e=null!=(n=le.current)?n:C)?e:void 0),function(){null!==Te.current&&clearInterval(Te.current)}}),[Ie,fe,le,C,ve]);var Pe=(0,u.useMemo)((function(){return y&&Array.from({length:ie},(function(e,n){return function(e){E&&E(n,e)}}))}),[y,ie,E]);return u.createElement(s,(0,r.Z)({ref:de},q,{onKeyDown:xe,onMouseOver:Ee,onMouseOut:we,onTouchStart:Ce,onTouchMove:Se,onTouchEnd:Ze,className:m()(H,z,d&&"slide",p&&z+"-fade")}),y&&u.createElement("ol",{className:z+"-indicators"},S(U,(function(e,n){return u.createElement("li",{key:n,className:n===ae?"active":void 0,onClick:Pe?Pe[n]:void 0})}))),u.createElement("div",{className:z+"-inner"},S(U,(function(e,n){var t=n===ae;return d?u.createElement(b.ZP,{in:t,onEnter:t?he:void 0,onEntered:t?ye:void 0,addEndListener:R.Z},(function(n){return u.cloneElement(e,{className:m()(e.props.className,t&&"entered"!==n&&me,("entered"===n||"exiting"===n)&&"active",("entering"===n||"exiting"===n)&&be)})})):u.cloneElement(e,{className:m()(e.props.className,t&&"active")})}))),h&&u.createElement(u.Fragment,null,(L||0!==x)&&u.createElement(P,{className:z+"-control-prev",onClick:se},V,X&&u.createElement("span",{className:"sr-only"},X)),(L||x!==ie-1)&&u.createElement(P,{className:z+"-control-next",onClick:fe},_,F&&u.createElement("span",{className:"sr-only"},F))))}var O=u.forwardRef(L);O.displayName="Carousel",O.propTypes=D,O.defaultProps=A,O.Caption=N,O.Item=C;var K=O},994:function(e,n,t){"use strict";var r=t(2122),o=t(9756),a=t(5900),u=t.n(a),c=t(7294),i=t(9541),l=["xl","lg","md","sm","xs"],s=c.forwardRef((function(e,n){var t=e.bsPrefix,a=e.className,s=e.noGutters,f=e.as,d=void 0===f?"div":f,v=(0,o.Z)(e,["bsPrefix","className","noGutters","as"]),p=(0,i.vE)(t,"row"),m=p+"-cols",b=[];return l.forEach((function(e){var n,t=v[e];delete v[e];var r="xs"!==e?"-"+e:"";null!=(n=null!=t&&"object"==typeof t?t.cols:t)&&b.push(""+m+r+"-"+n)})),c.createElement(d,(0,r.Z)({ref:n},v,{className:u().apply(void 0,[a,p,s&&"no-gutters"].concat(b))}))}));s.displayName="Row",s.defaultProps={noGutters:!1},n.Z=s},4557:function(e,n,t){"use strict";n.Z=t.p+"static/1-8fdcfb1a506a447ccf9d2657e1af1ba7.png"},8816:function(e,n,t){"use strict";n.Z=t.p+"static/2-d99488686ef1ebb97197c129d8f2e410.png"},3958:function(e,n,t){"use strict";n.Z=t.p+"static/3-e6733f51d06aa743b1ab275bc7e6284e.jpg"}}]);
//# sourceMappingURL=f651cd236536b0861ca655e6586c162b9e32d15e-4c6986b432d2826ea3f1.js.map