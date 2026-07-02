(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38064,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return l},formatWithValidation:function(){return s},urlObjectKeys:function(){return i}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let u=e.r(49470)._(e.r(81171)),a=/https?|ftp|gopher|file/;function l(e){let{auth:t,hostname:r}=e,o=e.protocol||"",n=e.pathname||"",l=e.hash||"",i=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(s+=":"+e.port)),i&&"object"==typeof i&&(i=String(u.urlQueryToSearchParams(i)));let c=e.search||i&&`?${i}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||a.test(o))&&!1!==s?(s="//"+(s||""),n&&"/"!==n[0]&&(n="/"+n)):s||(s=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${o}${s}${n}${c}${l}`}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function s(e){return l(e)}},11184,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let o=e.r(25042);function n(e,t){let r=(0,o.useRef)(null),n=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=u(e,o)),t&&(n.current=u(t,o))},[e,t])}function u(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},22983,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return u}});let o=e.r(85253),n=e.r(75235);function u(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},85814,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},68346,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return y},useLinkStatus:function(){return b}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let u=e.r(49470),a=e.r(28446),l=u._(e.r(25042)),i=e.r(38064),s=e.r(5799),c=e.r(11184),f=e.r(85253),v=e.r(88442);e.r(57579);let p=e.r(1076),d=e.r(44389),h=e.r(22983),m=e.r(13277);function y(t){var r,o;let n,u,y,[b,R]=(0,l.useOptimistic)(d.IDLE_LINK_STATUS),x=(0,l.useRef)(null),{href:S,as:w,children:_,prefetch:A=null,passHref:C,replace:T,shallow:O,scroll:L,onClick:P,onMouseEnter:M,onTouchStart:E,legacyBehavior:U=!1,onNavigate:F,transitionTypes:j,ref:I,unstable_dynamicOnHover:k,...N}=t;n=_,U&&("string"==typeof n||"number"==typeof n)&&(n=(0,a.jsx)("a",{children:n}));let D=l.default.useContext(s.AppRouterContext),z=!1!==A,K=!1!==A?null===(o=A)||"auto"===o?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,H="string"==typeof(r=w||S)?r:(0,i.formatUrl)(r);if(U){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});u=l.default.Children.only(n)}let $=U?u&&"object"==typeof u&&u.ref:I,B=l.default.useCallback(e=>(null!==D&&(x.current=(0,d.mountLinkInstance)(e,H,D,K,z,R)),()=>{x.current&&((0,d.unmountLinkForCurrentNavigation)(x.current),x.current=null),(0,d.unmountPrefetchableInstance)(e)}),[z,H,D,K,R]),V={ref:(0,c.useMergedRef)(B,$),onClick(t){U||"function"!=typeof P||P(t),U&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(t),!D||t.defaultPrevented||function(t,r,o,n,u,a,i){if("u">typeof window){let s,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((s=t.currentTarget.getAttribute("target"))&&"_self"!==s||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:f}=e.r(89420);l.default.startTransition(()=>{f(r,n?"replace":"push",!1===u?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,o.current,i)})}}(t,H,x,T,L,F,j)},onMouseEnter(e){U||"function"!=typeof M||M(e),U&&u.props&&"function"==typeof u.props.onMouseEnter&&u.props.onMouseEnter(e),D&&z&&(0,d.onNavigationIntent)(e.currentTarget,!0===k)},onTouchStart:function(e){U||"function"!=typeof E||E(e),U&&u.props&&"function"==typeof u.props.onTouchStart&&u.props.onTouchStart(e),D&&z&&(0,d.onNavigationIntent)(e.currentTarget,!0===k)}};return(0,f.isAbsoluteUrl)(H)?V.href=H:U&&!C&&("a"!==u.type||"href"in u.props)||(V.href=(0,v.addBasePath)(H)),y=U?l.default.cloneElement(u,V):(0,a.jsx)("a",{...N,...V,children:n}),(0,a.jsx)(g.Provider,{value:b,children:y})}e.r(85814);let g=(0,l.createContext)(d.IDLE_LINK_STATUS),b=()=>(0,l.useContext)(g);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},44651,e=>{"use strict";var t=e.i(28446),r=e.i(25042);e.s(["ReadingProgress",0,function(){let[e,o]=(0,r.useState)(0);return(0,r.useEffect)(()=>{function e(){let e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight;o(t>0?Math.min(e/t*100,100):0)}return window.addEventListener("scroll",e,{passive:!0}),e(),()=>window.removeEventListener("scroll",e)},[]),(0,t.jsx)("div",{className:"fixed top-0 left-0 right-0 z-[60] h-[3px]",children:(0,t.jsx)("div",{className:"h-full bg-gradient-to-r from-[#d946ef] via-[#67e8f9] to-[#c084fc] transition-[width] duration-150",style:{width:`${e}%`}})})}])},55351,e=>{"use strict";var t=e.i(28446),r=e.i(31042),o=e.i(41315),n=e.i(80383);let u={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function a(e){4===e.length&&(e=e[0]+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]);let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t||console.warn(`Unable to convert hex string ${e} to rgb values`),[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}function l(e){if(void 0===e)return[0,0,0];if(3==arguments.length)return arguments;if(!isNaN(e)){var t;return[((t=parseInt(t=e))>>16&255)/255,(t>>8&255)/255,(255&t)/255]}return"#"===e[0]?a(e):u[e.toLowerCase()]?a(u[e.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0])}class i extends Array{constructor(e){if(Array.isArray(e))return super(...e);return super(...l(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(e){this[0]=e}set g(e){this[1]=e}set b(e){this[2]=e}set(e){return Array.isArray(e)?this.copy(e):this.copy(l(...arguments))}copy(e){return this[0]=e[0],this[1]=e[1],this[2]=e[2],this}}var s=e.i(21764),c=e.i(25042);let f=`
attribute vec2 uv;
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`,v=`
precision highp float;
uniform float uTime;
uniform vec3 uResolution;
uniform vec2 uFocal;
uniform vec2 uRotation;
uniform float uStarSpeed;
uniform float uDensity;
uniform float uHueShift;
uniform float uSpeed;
uniform vec2 uMouse;
uniform float uGlowIntensity;
uniform float uSaturation;
uniform bool uMouseRepulsion;
uniform float uTwinkleIntensity;
uniform float uRotationSpeed;
uniform float uRepulsionStrength;
uniform float uMouseActiveFactor;
uniform float uAutoCenterRepulsion;
uniform bool uTransparent;
varying vec2 vUv;

#define NUM_LAYER 4.0
#define STAR_COLOR_CUTOFF 0.2
#define MAT45 mat2(0.7071, -0.7071, 0.7071, 0.7071)
#define PERIOD 3.0

float Hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float tri(float x) { return abs(fract(x) * 2.0 - 1.0); }
float tris(float x) { float t = fract(x); return 1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0)); }
float trisn(float x) { float t = fract(x); return 2.0 * (1.0 - smoothstep(0.0, 1.0, abs(2.0 * t - 1.0))) - 1.0; }
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float Star(vec2 uv, float flare) {
  float d = length(uv);
  float m = (0.05 * uGlowIntensity) / d;
  float rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * flare * uGlowIntensity;
  uv *= MAT45;
  rays = smoothstep(0.0, 1.0, 1.0 - abs(uv.x * uv.y * 1000.0));
  m += rays * 0.3 * flare * uGlowIntensity;
  m *= smoothstep(1.0, 0.2, d);
  return m;
}
vec3 StarLayer(vec2 uv) {
  vec3 col = vec3(0.0);
  vec2 gv = fract(uv) - 0.5;
  vec2 id = floor(uv);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 offset = vec2(float(x), float(y));
      vec2 si = id + vec2(float(x), float(y));
      float seed = Hash21(si);
      float size = fract(seed * 345.32);
      float glossLocal = tri(uStarSpeed / (PERIOD * seed + 1.0));
      float flareSize = smoothstep(0.9, 1.0, size) * glossLocal;
      float red = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 1.0)) + STAR_COLOR_CUTOFF;
      float blu = smoothstep(STAR_COLOR_CUTOFF, 1.0, Hash21(si + 3.0)) + STAR_COLOR_CUTOFF;
      float grn = min(red, blu) * seed;
      vec3 base = vec3(red, grn, blu);
      float hue = atan(base.g - base.r, base.b - base.r) / (2.0 * 3.14159) + 0.5;
      hue = fract(hue + uHueShift / 360.0);
      float sat = length(base - vec3(dot(base, vec3(0.299, 0.587, 0.114)))) * uSaturation;
      float val = max(max(base.r, base.g), base.b);
      base = hsv2rgb(vec3(hue, sat, val));
      vec2 pad = vec2(tris(seed * 34.0 + uTime * uSpeed / 10.0), tris(seed * 38.0 + uTime * uSpeed / 30.0)) - 0.5;
      float star = Star(gv - offset - pad, flareSize);
      vec3 color = base;
      float twinkle = trisn(uTime * uSpeed + seed * 6.2831) * 0.5 + 1.0;
      twinkle = mix(1.0, twinkle, uTwinkleIntensity);
      star *= twinkle;
      col += star * size * color;
    }
  }
  return col;
}
void main() {
  vec2 focalPx = uFocal * uResolution.xy;
  vec2 uv = (vUv * uResolution.xy - focalPx) / uResolution.y;
  vec2 mouseNorm = uMouse - vec2(0.5);
  if (uAutoCenterRepulsion > 0.0) {
    vec2 centerUV = vec2(0.0, 0.0);
    float centerDist = length(uv - centerUV);
    vec2 repulsion = normalize(uv - centerUV) * (uAutoCenterRepulsion / (centerDist + 0.1));
    uv += repulsion * 0.05;
  } else if (uMouseRepulsion) {
    vec2 mousePosUV = (uMouse * uResolution.xy - focalPx) / uResolution.y;
    float mouseDist = length(uv - mousePosUV);
    vec2 repulsion = normalize(uv - mousePosUV) * (uRepulsionStrength / (mouseDist + 0.1));
    uv += repulsion * 0.05 * uMouseActiveFactor;
  } else {
    vec2 mouseOffset = mouseNorm * 0.1 * uMouseActiveFactor;
    uv += mouseOffset;
  }
  float autoRotAngle = uTime * uRotationSpeed;
  mat2 autoRot = mat2(cos(autoRotAngle), -sin(autoRotAngle), sin(autoRotAngle), cos(autoRotAngle));
  uv = autoRot * uv;
  uv = mat2(uRotation.x, -uRotation.y, uRotation.y, uRotation.x) * uv;
  vec3 col = vec3(0.0);
  for (float i = 0.0; i < 1.0; i += 1.0 / NUM_LAYER) {
    float depth = fract(i + uStarSpeed * uSpeed);
    float scale = mix(20.0 * uDensity, 0.5 * uDensity, depth);
    float fade = depth * smoothstep(1.0, 0.9, depth);
    col += StarLayer(uv * scale + i * 453.32) * fade;
  }
  if (uTransparent) {
    float alpha = length(col);
    alpha = smoothstep(0.0, 0.3, alpha);
    alpha = min(alpha, 1.0);
    gl_FragColor = vec4(col, alpha);
  } else {
    gl_FragColor = vec4(col, 1.0);
  }
}
`;e.s(["default",0,function({focal:e=[.5,.5],rotation:u=[1,0],starSpeed:a=.5,density:l=1,hueShift:p=240,disableAnimation:d=!1,speed:h=1,mouseInteraction:m=!0,glowIntensity:y=.5,saturation:g=.8,mouseRepulsion:b=!0,repulsionStrength:R=2,twinkleIntensity:x=.3,rotationSpeed:S=.1,autoCenterRepulsion:w=0,transparent:_=!0}){let A=(0,c.useRef)(null),C=(0,c.useRef)({x:.5,y:.5}),T=(0,c.useRef)({x:.5,y:.5}),O=(0,c.useRef)(0),L=(0,c.useRef)(0);return(0,c.useEffect)(()=>{if(!A.current)return;let t=A.current,c=new r.Renderer({alpha:_,premultipliedAlpha:!1}),P=c.gl;_?(P.enable(P.BLEND),P.blendFunc(P.SRC_ALPHA,P.ONE_MINUS_SRC_ALPHA),P.clearColor(0,0,0,0)):P.clearColor(0,0,0,1);let M=null,E=0;function U(){c.setSize(t.offsetWidth,t.offsetHeight),M&&(M.uniforms.uResolution.value=new i(P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height))}window.addEventListener("resize",U,!1),U();let F=new s.Triangle(P);M=new o.Program(P,{vertex:f,fragment:v,uniforms:{uTime:{value:0},uResolution:{value:new i(P.canvas.width,P.canvas.height,P.canvas.width/P.canvas.height)},uFocal:{value:new Float32Array(e)},uRotation:{value:new Float32Array(u)},uStarSpeed:{value:a},uDensity:{value:l},uHueShift:{value:p},uSpeed:{value:h},uMouse:{value:new Float32Array([T.current.x,T.current.y])},uGlowIntensity:{value:y},uSaturation:{value:g},uMouseRepulsion:{value:b},uTwinkleIntensity:{value:x},uRotationSpeed:{value:S},uRepulsionStrength:{value:R},uMouseActiveFactor:{value:0},uAutoCenterRepulsion:{value:w},uTransparent:{value:_}}});let j=new n.Mesh(P,{geometry:F,program:M});function I(e){let r=t.getBoundingClientRect();C.current={x:(e.clientX-r.left)/r.width,y:1-(e.clientY-r.top)/r.height},O.current=1}function k(){O.current=0}return E=requestAnimationFrame(function e(t){E=requestAnimationFrame(e),!d&&M&&(M.uniforms.uTime.value=.001*t,M.uniforms.uStarSpeed.value=.001*t*a/10),T.current.x+=(C.current.x-T.current.x)*.05,T.current.y+=(C.current.y-T.current.y)*.05,L.current+=(O.current-L.current)*.05,M&&(M.uniforms.uMouse.value[0]=T.current.x,M.uniforms.uMouse.value[1]=T.current.y,M.uniforms.uMouseActiveFactor.value=L.current),c.render({scene:j})}),t.appendChild(P.canvas),m&&(t.addEventListener("mousemove",I),t.addEventListener("mouseleave",k)),()=>{cancelAnimationFrame(E),window.removeEventListener("resize",U),m&&(t.removeEventListener("mousemove",I),t.removeEventListener("mouseleave",k)),t.removeChild(P.canvas),P.getExtension("WEBGL_lose_context")?.loseContext()}},[e,u,a,l,p,d,h,m,y,g,b,x,S,R,w,_]),(0,t.jsx)("div",{ref:A,className:"galaxy-container"})}],55351)}]);