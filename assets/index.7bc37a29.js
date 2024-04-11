(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Fl(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}const fp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dp=Fl(fp);function nf(i){return!!i||i===""}function Ol(i){if(Ne(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=At(n)?gp(n):Ol(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(At(i))return i;if(ft(i))return i}}const pp=/;(?![^(]*\))/g,mp=/:(.+)/;function gp(i){const e={};return i.split(pp).forEach(t=>{if(t){const n=t.split(mp);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function zl(i){let e="";if(At(i))e=i;else if(Ne(i))for(let t=0;t<i.length;t++){const n=zl(i[t]);n&&(e+=n+" ")}else if(ft(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const nt={},_r=[],gn=()=>{},_p=()=>!1,vp=/^on[^a-z]/,Uo=i=>vp.test(i),Nl=i=>i.startsWith("onUpdate:"),Et=Object.assign,Ul=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},xp=Object.prototype.hasOwnProperty,Xe=(i,e)=>xp.call(i,e),Ne=Array.isArray,ss=i=>Bo(i)==="[object Map]",yp=i=>Bo(i)==="[object Set]",Ve=i=>typeof i=="function",At=i=>typeof i=="string",Bl=i=>typeof i=="symbol",ft=i=>i!==null&&typeof i=="object",rf=i=>ft(i)&&Ve(i.then)&&Ve(i.catch),Mp=Object.prototype.toString,Bo=i=>Mp.call(i),bp=i=>Bo(i).slice(8,-1),wp=i=>Bo(i)==="[object Object]",kl=i=>At(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,ho=Fl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ko=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Sp=/-(\w)/g,wr=ko(i=>i.replace(Sp,(e,t)=>t?t.toUpperCase():"")),Tp=/\B([A-Z])/g,Rr=ko(i=>i.replace(Tp,"-$1").toLowerCase()),sf=ko(i=>i.charAt(0).toUpperCase()+i.slice(1)),sa=ko(i=>i?`on${sf(i)}`:""),Mo=(i,e)=>!Object.is(i,e),oa=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},bo=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Ep=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let Nc;const Ap=()=>Nc||(Nc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xn;class Cp{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=xn,!e&&xn&&(this.index=(xn.scopes||(xn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=xn;try{return xn=this,e()}finally{xn=t}}}on(){xn=this}off(){xn=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function Lp(i,e=xn){e&&e.active&&e.effects.push(i)}const Vl=i=>{const e=new Set(i);return e.w=0,e.n=0,e},of=i=>(i.w&hi)>0,af=i=>(i.n&hi)>0,Pp=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=hi},Dp=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];of(r)&&!af(r)?r.delete(i):e[t++]=r,r.w&=~hi,r.n&=~hi}e.length=t}},rl=new WeakMap;let Qr=0,hi=1;const sl=30;let dn;const Fi=Symbol(""),ol=Symbol("");class Gl{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Lp(this,n)}run(){if(!this.active)return this.fn();let e=dn,t=ai;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=dn,dn=this,ai=!0,hi=1<<++Qr,Qr<=sl?Pp(this):Uc(this),this.fn()}finally{Qr<=sl&&Dp(this),hi=1<<--Qr,dn=this.parent,ai=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){dn===this?this.deferStop=!0:this.active&&(Uc(this),this.onStop&&this.onStop(),this.active=!1)}}function Uc(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let ai=!0;const lf=[];function Ir(){lf.push(ai),ai=!1}function Fr(){const i=lf.pop();ai=i===void 0?!0:i}function Yt(i,e,t){if(ai&&dn){let n=rl.get(i);n||rl.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Vl()),cf(r)}}function cf(i,e){let t=!1;Qr<=sl?af(i)||(i.n|=hi,t=!of(i)):t=!i.has(dn),t&&(i.add(dn),dn.deps.push(i))}function Wn(i,e,t,n,r,s){const o=rl.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Ne(i))o.forEach((l,c)=>{(c==="length"||c>=n)&&a.push(l)});else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Ne(i)?kl(t)&&a.push(o.get("length")):(a.push(o.get(Fi)),ss(i)&&a.push(o.get(ol)));break;case"delete":Ne(i)||(a.push(o.get(Fi)),ss(i)&&a.push(o.get(ol)));break;case"set":ss(i)&&a.push(o.get(Fi));break}if(a.length===1)a[0]&&al(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);al(Vl(l))}}function al(i,e){const t=Ne(i)?i:[...i];for(const n of t)n.computed&&Bc(n);for(const n of t)n.computed||Bc(n)}function Bc(i,e){(i!==dn||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Rp=Fl("__proto__,__v_isRef,__isVue"),uf=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Bl)),Ip=Hl(),Fp=Hl(!1,!0),Op=Hl(!0),kc=zp();function zp(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=Qe(this);for(let s=0,o=this.length;s<o;s++)Yt(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(Qe)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ir();const n=Qe(this)[e].apply(this,t);return Fr(),n}}),i}function Hl(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Jp:mf:e?pf:df).get(n))return n;const o=Ne(n);if(!i&&o&&Xe(kc,r))return Reflect.get(kc,r,s);const a=Reflect.get(n,r,s);return(Bl(r)?uf.has(r):Rp(r))||(i||Yt(n,"get",r),e)?a:It(a)?o&&kl(r)?a:a.value:ft(a)?i?gf(a):jl(a):a}}const Np=hf(),Up=hf(!0);function hf(i=!1){return function(t,n,r,s){let o=t[n];if(cs(o)&&It(o)&&!It(r))return!1;if(!i&&(!ll(r)&&!cs(r)&&(o=Qe(o),r=Qe(r)),!Ne(t)&&It(o)&&!It(r)))return o.value=r,!0;const a=Ne(t)&&kl(n)?Number(n)<t.length:Xe(t,n),l=Reflect.set(t,n,r,s);return t===Qe(s)&&(a?Mo(r,o)&&Wn(t,"set",n,r):Wn(t,"add",n,r)),l}}function Bp(i,e){const t=Xe(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&Wn(i,"delete",e,void 0),n}function kp(i,e){const t=Reflect.has(i,e);return(!Bl(e)||!uf.has(e))&&Yt(i,"has",e),t}function Vp(i){return Yt(i,"iterate",Ne(i)?"length":Fi),Reflect.ownKeys(i)}const ff={get:Ip,set:Np,deleteProperty:Bp,has:kp,ownKeys:Vp},Gp={get:Op,set(i,e){return!0},deleteProperty(i,e){return!0}},Hp=Et({},ff,{get:Fp,set:Up}),Wl=i=>i,Vo=i=>Reflect.getPrototypeOf(i);function Ds(i,e,t=!1,n=!1){i=i.__v_raw;const r=Qe(i),s=Qe(e);t||(e!==s&&Yt(r,"get",e),Yt(r,"get",s));const{has:o}=Vo(r),a=n?Wl:t?$l:Yl;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Rs(i,e=!1){const t=this.__v_raw,n=Qe(t),r=Qe(i);return e||(i!==r&&Yt(n,"has",i),Yt(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Is(i,e=!1){return i=i.__v_raw,!e&&Yt(Qe(i),"iterate",Fi),Reflect.get(i,"size",i)}function Vc(i){i=Qe(i);const e=Qe(this);return Vo(e).has.call(e,i)||(e.add(i),Wn(e,"add",i,i)),this}function Gc(i,e){e=Qe(e);const t=Qe(this),{has:n,get:r}=Vo(t);let s=n.call(t,i);s||(i=Qe(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Mo(e,o)&&Wn(t,"set",i,e):Wn(t,"add",i,e),this}function Hc(i){const e=Qe(this),{has:t,get:n}=Vo(e);let r=t.call(e,i);r||(i=Qe(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&Wn(e,"delete",i,void 0),s}function Wc(){const i=Qe(this),e=i.size!==0,t=i.clear();return e&&Wn(i,"clear",void 0,void 0),t}function Fs(i,e){return function(n,r){const s=this,o=s.__v_raw,a=Qe(o),l=e?Wl:i?$l:Yl;return!i&&Yt(a,"iterate",Fi),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function Os(i,e,t){return function(...n){const r=this.__v_raw,s=Qe(r),o=ss(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Wl:e?$l:Yl;return!e&&Yt(s,"iterate",l?ol:Fi),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function $n(i){return function(...e){return i==="delete"?!1:this}}function Wp(){const i={get(s){return Ds(this,s)},get size(){return Is(this)},has:Rs,add:Vc,set:Gc,delete:Hc,clear:Wc,forEach:Fs(!1,!1)},e={get(s){return Ds(this,s,!1,!0)},get size(){return Is(this)},has:Rs,add:Vc,set:Gc,delete:Hc,clear:Wc,forEach:Fs(!1,!0)},t={get(s){return Ds(this,s,!0)},get size(){return Is(this,!0)},has(s){return Rs.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Fs(!0,!1)},n={get(s){return Ds(this,s,!0,!0)},get size(){return Is(this,!0)},has(s){return Rs.call(this,s,!0)},add:$n("add"),set:$n("set"),delete:$n("delete"),clear:$n("clear"),forEach:Fs(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=Os(s,!1,!1),t[s]=Os(s,!0,!1),e[s]=Os(s,!1,!0),n[s]=Os(s,!0,!0)}),[i,t,e,n]}const[Xp,jp,qp,Yp]=Wp();function Xl(i,e){const t=e?i?Yp:qp:i?jp:Xp;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(Xe(t,r)&&r in n?t:n,r,s)}const $p={get:Xl(!1,!1)},Zp={get:Xl(!1,!0)},Kp={get:Xl(!0,!1)},df=new WeakMap,pf=new WeakMap,mf=new WeakMap,Jp=new WeakMap;function Qp(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function em(i){return i.__v_skip||!Object.isExtensible(i)?0:Qp(bp(i))}function jl(i){return cs(i)?i:ql(i,!1,ff,$p,df)}function tm(i){return ql(i,!1,Hp,Zp,pf)}function gf(i){return ql(i,!0,Gp,Kp,mf)}function ql(i,e,t,n,r){if(!ft(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=em(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function vr(i){return cs(i)?vr(i.__v_raw):!!(i&&i.__v_isReactive)}function cs(i){return!!(i&&i.__v_isReadonly)}function ll(i){return!!(i&&i.__v_isShallow)}function _f(i){return vr(i)||cs(i)}function Qe(i){const e=i&&i.__v_raw;return e?Qe(e):i}function vf(i){return bo(i,"__v_skip",!0),i}const Yl=i=>ft(i)?jl(i):i,$l=i=>ft(i)?gf(i):i;function nm(i){ai&&dn&&(i=Qe(i),cf(i.dep||(i.dep=Vl())))}function im(i,e){i=Qe(i),i.dep&&al(i.dep)}function It(i){return!!(i&&i.__v_isRef===!0)}function rm(i){return It(i)?i.value:i}const sm={get:(i,e,t)=>rm(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return It(r)&&!It(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function xf(i){return vr(i)?i:new Proxy(i,sm)}var yf;class om{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[yf]=!1,this._dirty=!0,this.effect=new Gl(e,()=>{this._dirty||(this._dirty=!0,im(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=Qe(this);return nm(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}yf="__v_isReadonly";function am(i,e,t=!1){let n,r;const s=Ve(i);return s?(n=i,r=gn):(n=i.get,r=i.set),new om(n,r,s||!r,t)}function li(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Go(s,e,t)}return r}function rn(i,e,t,n){if(Ve(i)){const s=li(i,e,t,n);return s&&rf(s)&&s.catch(o=>{Go(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(rn(i[s],e,t,n));return r}function Go(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){li(l,null,10,[i,o,a]);return}}lm(i,t,r,n)}function lm(i,e,t,n=!0){console.error(i)}let us=!1,cl=!1;const Tt=[];let Sn=0;const xr=[];let Bn=null,Ci=0;const Mf=Promise.resolve();let Zl=null;function cm(i){const e=Zl||Mf;return i?e.then(this?i.bind(this):i):e}function um(i){let e=Sn+1,t=Tt.length;for(;e<t;){const n=e+t>>>1;hs(Tt[n])<i?e=n+1:t=n}return e}function Kl(i){(!Tt.length||!Tt.includes(i,us&&i.allowRecurse?Sn+1:Sn))&&(i.id==null?Tt.push(i):Tt.splice(um(i.id),0,i),bf())}function bf(){!us&&!cl&&(cl=!0,Zl=Mf.then(Sf))}function hm(i){const e=Tt.indexOf(i);e>Sn&&Tt.splice(e,1)}function fm(i){Ne(i)?xr.push(...i):(!Bn||!Bn.includes(i,i.allowRecurse?Ci+1:Ci))&&xr.push(i),bf()}function Xc(i,e=us?Sn+1:0){for(;e<Tt.length;e++){const t=Tt[e];t&&t.pre&&(Tt.splice(e,1),e--,t())}}function wf(i){if(xr.length){const e=[...new Set(xr)];if(xr.length=0,Bn){Bn.push(...e);return}for(Bn=e,Bn.sort((t,n)=>hs(t)-hs(n)),Ci=0;Ci<Bn.length;Ci++)Bn[Ci]();Bn=null,Ci=0}}const hs=i=>i.id==null?1/0:i.id,dm=(i,e)=>{const t=hs(i)-hs(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Sf(i){cl=!1,us=!0,Tt.sort(dm);const e=gn;try{for(Sn=0;Sn<Tt.length;Sn++){const t=Tt[Sn];t&&t.active!==!1&&li(t,null,14)}}finally{Sn=0,Tt.length=0,wf(),us=!1,Zl=null,(Tt.length||xr.length)&&Sf()}}function pm(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||nt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||nt;f&&(r=t.map(d=>d.trim())),h&&(r=t.map(Ep))}let a,l=n[a=sa(e)]||n[a=sa(wr(e))];!l&&s&&(l=n[a=sa(Rr(e))]),l&&rn(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,rn(c,i,6,r)}}function Tf(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!Ve(i)){const l=c=>{const u=Tf(c,e,!0);u&&(a=!0,Et(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(ft(i)&&n.set(i,null),null):(Ne(s)?s.forEach(l=>o[l]=null):Et(o,s),ft(i)&&n.set(i,o),o)}function Ho(i,e){return!i||!Uo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Xe(i,e[0].toLowerCase()+e.slice(1))||Xe(i,Rr(e))||Xe(i,e))}let Cn=null,Ef=null;function wo(i){const e=Cn;return Cn=i,Ef=i&&i.type.__scopeId||null,e}function mm(i,e=Cn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&tu(-1);const s=wo(e);let o;try{o=i(...r)}finally{wo(s),n._d&&tu(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function aa(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:g,inheritAttrs:m}=i;let p,_;const w=wo(i);try{if(t.shapeFlag&4){const b=r||n;p=bn(u.call(b,b,h,s,d,f,g)),_=l}else{const b=e;p=bn(b.length>1?b(s,{attrs:l,slots:a,emit:c}):b(s,null)),_=e.props?l:gm(l)}}catch(b){os.length=0,Go(b,i,1),p=Oi(Gn)}let x=p;if(_&&m!==!1){const b=Object.keys(_),{shapeFlag:M}=x;b.length&&M&7&&(o&&b.some(Nl)&&(_=_m(_,o)),x=fi(x,_))}return t.dirs&&(x=fi(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),p=x,wo(w),p}const gm=i=>{let e;for(const t in i)(t==="class"||t==="style"||Uo(t))&&((e||(e={}))[t]=i[t]);return e},_m=(i,e)=>{const t={};for(const n in i)(!Nl(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function vm(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?jc(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Ho(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?jc(n,o,c):!0:!!o;return!1}function jc(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Ho(t,s))return!0}return!1}function xm({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const ym=i=>i.__isSuspense;function Mm(i,e){e&&e.pendingBranch?Ne(i)?e.effects.push(...i):e.effects.push(i):fm(i)}function bm(i,e){if(Mt){let t=Mt.provides;const n=Mt.parent&&Mt.parent.provides;n===t&&(t=Mt.provides=Object.create(n)),t[i]=e}}function la(i,e,t=!1){const n=Mt||Cn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&Ve(e)?e.call(n.proxy):e}}const qc={};function ca(i,e,t){return Af(i,e,t)}function Af(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=nt){const a=Mt;let l,c=!1,u=!1;if(It(i)?(l=()=>i.value,c=ll(i)):vr(i)?(l=()=>i,n=!0):Ne(i)?(u=!0,c=i.some(_=>vr(_)||ll(_)),l=()=>i.map(_=>{if(It(_))return _.value;if(vr(_))return pr(_);if(Ve(_))return li(_,a,2)})):Ve(i)?e?l=()=>li(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),rn(i,a,3,[f])}:l=gn,e&&n){const _=l;l=()=>pr(_())}let h,f=_=>{h=p.onStop=()=>{li(_,a,4)}};if(ds)return f=gn,e?t&&rn(e,a,3,[l(),u?[]:void 0,f]):l(),gn;let d=u?[]:qc;const g=()=>{if(!!p.active)if(e){const _=p.run();(n||c||(u?_.some((w,x)=>Mo(w,d[x])):Mo(_,d)))&&(h&&h(),rn(e,a,3,[_,d===qc?void 0:d,f]),d=_)}else p.run()};g.allowRecurse=!!e;let m;r==="sync"?m=g:r==="post"?m=()=>Nt(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>Kl(g));const p=new Gl(l,m);return e?t?g():d=p.run():r==="post"?Nt(p.run.bind(p),a&&a.suspense):p.run(),()=>{p.stop(),a&&a.scope&&Ul(a.scope.effects,p)}}function wm(i,e,t){const n=this.proxy,r=At(i)?i.includes(".")?Cf(n,i):()=>n[i]:i.bind(n,n);let s;Ve(e)?s=e:(s=e.handler,t=e);const o=Mt;Sr(this);const a=Af(r,s.bind(n),t);return o?Sr(o):zi(),a}function Cf(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function pr(i,e){if(!ft(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),It(i))pr(i.value,e);else if(Ne(i))for(let t=0;t<i.length;t++)pr(i[t],e);else if(yp(i)||ss(i))i.forEach(t=>{pr(t,e)});else if(wp(i))for(const t in i)pr(i[t],e);return i}function Sm(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Jl(()=>{i.isMounted=!0}),Rf(()=>{i.isUnmounting=!0}),i}const Kt=[Function,Array],Tm={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Kt,onEnter:Kt,onAfterEnter:Kt,onEnterCancelled:Kt,onBeforeLeave:Kt,onLeave:Kt,onAfterLeave:Kt,onLeaveCancelled:Kt,onBeforeAppear:Kt,onAppear:Kt,onAfterAppear:Kt,onAppearCancelled:Kt},setup(i,{slots:e}){const t=dg(),n=Sm();let r;return()=>{const s=e.default&&Pf(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const m of s)if(m.type!==Gn){o=m;break}}const a=Qe(i),{mode:l}=a;if(n.isLeaving)return ua(o);const c=Yc(o);if(!c)return ua(o);const u=ul(c,a,n,t);hl(c,u);const h=t.subTree,f=h&&Yc(h);let d=!1;const{getTransitionKey:g}=c.type;if(g){const m=g();r===void 0?r=m:m!==r&&(r=m,d=!0)}if(f&&f.type!==Gn&&(!Li(c,f)||d)){const m=ul(f,a,n,t);if(hl(f,m),l==="out-in")return n.isLeaving=!0,m.afterLeave=()=>{n.isLeaving=!1,t.update()},ua(o);l==="in-out"&&c.type!==Gn&&(m.delayLeave=(p,_,w)=>{const x=Lf(n,f);x[String(f.key)]=f,p._leaveCb=()=>{_(),p._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=w})}return o}}},Em=Tm;function Lf(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function ul(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:d,onLeaveCancelled:g,onBeforeAppear:m,onAppear:p,onAfterAppear:_,onAppearCancelled:w}=e,x=String(i.key),b=Lf(t,i),M=(v,A)=>{v&&rn(v,n,9,A)},E=(v,A)=>{const D=A[1];M(v,A),Ne(v)?v.every(Y=>Y.length<=1)&&D():v.length<=1&&D()},I={mode:s,persisted:o,beforeEnter(v){let A=a;if(!t.isMounted)if(r)A=m||a;else return;v._leaveCb&&v._leaveCb(!0);const D=b[x];D&&Li(i,D)&&D.el._leaveCb&&D.el._leaveCb(),M(A,[v])},enter(v){let A=l,D=c,Y=u;if(!t.isMounted)if(r)A=p||l,D=_||c,Y=w||u;else return;let K=!1;const z=v._enterCb=F=>{K||(K=!0,F?M(Y,[v]):M(D,[v]),I.delayedLeave&&I.delayedLeave(),v._enterCb=void 0)};A?E(A,[v,z]):z()},leave(v,A){const D=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return A();M(h,[v]);let Y=!1;const K=v._leaveCb=z=>{Y||(Y=!0,A(),z?M(g,[v]):M(d,[v]),v._leaveCb=void 0,b[D]===i&&delete b[D])};b[D]=i,f?E(f,[v,K]):K()},clone(v){return ul(v,e,t,n)}};return I}function ua(i){if(Wo(i))return i=fi(i),i.children=null,i}function Yc(i){return Wo(i)?i.children?i.children[0]:void 0:i}function hl(i,e){i.shapeFlag&6&&i.component?hl(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Pf(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Mn?(o.patchFlag&128&&r++,n=n.concat(Pf(o.children,e,a))):(e||o.type!==Gn)&&n.push(a!=null?fi(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}const fo=i=>!!i.type.__asyncLoader,Wo=i=>i.type.__isKeepAlive;function Am(i,e){Df(i,"a",e)}function Cm(i,e){Df(i,"da",e)}function Df(i,e,t=Mt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Xo(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Wo(r.parent.vnode)&&Lm(n,e,t,r),r=r.parent}}function Lm(i,e,t,n){const r=Xo(e,i,n,!0);If(()=>{Ul(n[e],r)},t)}function Xo(i,e,t=Mt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ir(),Sr(t);const a=rn(e,t,i,o);return zi(),Fr(),a});return n?r.unshift(s):r.push(s),s}}const qn=i=>(e,t=Mt)=>(!ds||i==="sp")&&Xo(i,(...n)=>e(...n),t),Pm=qn("bm"),Jl=qn("m"),Dm=qn("bu"),Rm=qn("u"),Rf=qn("bum"),If=qn("um"),Im=qn("sp"),Fm=qn("rtg"),Om=qn("rtc");function zm(i,e=Mt){Xo("ec",i,e)}function yi(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ir(),rn(l,t,8,[i.el,a,i,e]),Fr())}}const Nm=Symbol(),fl=i=>i?Wf(i)?ic(i)||i.proxy:fl(i.parent):null,So=Et(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>fl(i.parent),$root:i=>fl(i.root),$emit:i=>i.emit,$options:i=>Ql(i),$forceUpdate:i=>i.f||(i.f=()=>Kl(i.update)),$nextTick:i=>i.n||(i.n=cm.bind(i.proxy)),$watch:i=>wm.bind(i)}),Um={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(n!==nt&&Xe(n,e))return o[e]=1,n[e];if(r!==nt&&Xe(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&Xe(c,e))return o[e]=3,s[e];if(t!==nt&&Xe(t,e))return o[e]=4,t[e];dl&&(o[e]=0)}}const u=So[e];let h,f;if(u)return e==="$attrs"&&Yt(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==nt&&Xe(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,Xe(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return r!==nt&&Xe(r,e)?(r[e]=t,!0):n!==nt&&Xe(n,e)?(n[e]=t,!0):Xe(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==nt&&Xe(i,o)||e!==nt&&Xe(e,o)||(a=s[0])&&Xe(a,o)||Xe(n,o)||Xe(So,o)||Xe(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:Xe(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let dl=!0;function Bm(i){const e=Ql(i),t=i.proxy,n=i.ctx;dl=!1,e.beforeCreate&&$c(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:g,activated:m,deactivated:p,beforeDestroy:_,beforeUnmount:w,destroyed:x,unmounted:b,render:M,renderTracked:E,renderTriggered:I,errorCaptured:v,serverPrefetch:A,expose:D,inheritAttrs:Y,components:K,directives:z,filters:F}=e;if(c&&km(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const q in o){const V=o[q];Ve(V)&&(n[q]=V.bind(t))}if(r){const q=r.call(t,t);ft(q)&&(i.data=jl(q))}if(dl=!0,s)for(const q in s){const V=s[q],U=Ve(V)?V.bind(t,t):Ve(V.get)?V.get.bind(t,t):gn,G=!Ve(V)&&Ve(V.set)?V.set.bind(t):gn,oe=xg({get:U,set:G});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>oe.value,set:se=>oe.value=se})}if(a)for(const q in a)Ff(a[q],n,t,q);if(l){const q=Ve(l)?l.call(t):l;Reflect.ownKeys(q).forEach(V=>{bm(V,q[V])})}u&&$c(u,i,"c");function X(q,V){Ne(V)?V.forEach(U=>q(U.bind(t))):V&&q(V.bind(t))}if(X(Pm,h),X(Jl,f),X(Dm,d),X(Rm,g),X(Am,m),X(Cm,p),X(zm,v),X(Om,E),X(Fm,I),X(Rf,w),X(If,b),X(Im,A),Ne(D))if(D.length){const q=i.exposed||(i.exposed={});D.forEach(V=>{Object.defineProperty(q,V,{get:()=>t[V],set:U=>t[V]=U})})}else i.exposed||(i.exposed={});M&&i.render===gn&&(i.render=M),Y!=null&&(i.inheritAttrs=Y),K&&(i.components=K),z&&(i.directives=z)}function km(i,e,t=gn,n=!1){Ne(i)&&(i=pl(i));for(const r in i){const s=i[r];let o;ft(s)?"default"in s?o=la(s.from||r,s.default,!0):o=la(s.from||r):o=la(s),It(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function $c(i,e,t){rn(Ne(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Ff(i,e,t,n){const r=n.includes(".")?Cf(t,n):()=>t[n];if(At(i)){const s=e[i];Ve(s)&&ca(r,s)}else if(Ve(i))ca(r,i.bind(t));else if(ft(i))if(Ne(i))i.forEach(s=>Ff(s,e,t,n));else{const s=Ve(i.handler)?i.handler.bind(t):e[i.handler];Ve(s)&&ca(r,s,i)}}function Ql(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>To(l,c,o,!0)),To(l,e,o)),ft(e)&&s.set(e,l),l}function To(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&To(i,s,t,!0),r&&r.forEach(o=>To(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Vm[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Vm={data:Zc,props:Ti,emits:Ti,methods:Ti,computed:Ti,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:Ti,directives:Ti,watch:Hm,provide:Zc,inject:Gm};function Zc(i,e){return e?i?function(){return Et(Ve(i)?i.call(this,this):i,Ve(e)?e.call(this,this):e)}:e:i}function Gm(i,e){return Ti(pl(i),pl(e))}function pl(i){if(Ne(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function Lt(i,e){return i?[...new Set([].concat(i,e))]:e}function Ti(i,e){return i?Et(Et(Object.create(null),i),e):e}function Hm(i,e){if(!i)return e;if(!e)return i;const t=Et(Object.create(null),i);for(const n in e)t[n]=Lt(i[n],e[n]);return t}function Wm(i,e,t,n=!1){const r={},s={};bo(s,jo,1),i.propsDefaults=Object.create(null),Of(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:tm(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Xm(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=Qe(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Ho(i.emitsOptions,f))continue;const d=e[f];if(l)if(Xe(s,f))d!==s[f]&&(s[f]=d,c=!0);else{const g=wr(f);r[g]=ml(l,a,g,d,i,!1)}else d!==s[f]&&(s[f]=d,c=!0)}}}else{Of(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!Xe(e,h)&&((u=Rr(h))===h||!Xe(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=ml(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!Xe(e,h)&&!0)&&(delete s[h],c=!0)}c&&Wn(i,"set","$attrs")}function Of(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(ho(l))continue;const c=e[l];let u;r&&Xe(r,u=wr(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Ho(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=Qe(t),c=a||nt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=ml(r,l,h,c[h],i,!Xe(c,h))}}return o}function ml(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=Xe(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&Ve(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(Sr(r),n=c[t]=l.call(null,e),zi())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Rr(t))&&(n=!0))}return n}function zf(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!Ve(i)){const u=h=>{l=!0;const[f,d]=zf(h,e,!0);Et(o,f),d&&a.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return ft(i)&&n.set(i,_r),_r;if(Ne(s))for(let u=0;u<s.length;u++){const h=wr(s[u]);Kc(h)&&(o[h]=nt)}else if(s)for(const u in s){const h=wr(u);if(Kc(h)){const f=s[u],d=o[h]=Ne(f)||Ve(f)?{type:f}:f;if(d){const g=eu(Boolean,d.type),m=eu(String,d.type);d[0]=g>-1,d[1]=m<0||g<m,(g>-1||Xe(d,"default"))&&a.push(h)}}}const c=[o,a];return ft(i)&&n.set(i,c),c}function Kc(i){return i[0]!=="$"}function Jc(i){const e=i&&i.toString().match(/^\s*function (\w+)/);return e?e[1]:i===null?"null":""}function Qc(i,e){return Jc(i)===Jc(e)}function eu(i,e){return Ne(e)?e.findIndex(t=>Qc(t,i)):Ve(e)&&Qc(e,i)?0:-1}const Nf=i=>i[0]==="_"||i==="$stable",ec=i=>Ne(i)?i.map(bn):[bn(i)],jm=(i,e,t)=>{if(e._n)return e;const n=mm((...r)=>ec(e(...r)),t);return n._c=!1,n},Uf=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Nf(r))continue;const s=i[r];if(Ve(s))e[r]=jm(r,s,n);else if(s!=null){const o=ec(s);e[r]=()=>o}}},Bf=(i,e)=>{const t=ec(e);i.slots.default=()=>t},qm=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=Qe(e),bo(e,"_",t)):Uf(e,i.slots={})}else i.slots={},e&&Bf(i,e);bo(i.slots,jo,1)},Ym=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=nt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Et(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Uf(e,r)),o=e}else e&&(Bf(i,e),o={default:1});if(s)for(const a in r)!Nf(a)&&!(a in o)&&delete r[a]};function kf(){return{app:null,config:{isNativeTag:_p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $m=0;function Zm(i,e){return function(n,r=null){Ve(n)||(n=Object.assign({},n)),r!=null&&!ft(r)&&(r=null);const s=kf(),o=new Set;let a=!1;const l=s.app={_uid:$m++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:yg,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ve(c.install)?(o.add(c),c.install(l,...u)):Ve(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=Oi(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,ic(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function gl(i,e,t,n,r=!1){if(Ne(i)){i.forEach((f,d)=>gl(f,e&&(Ne(e)?e[d]:e),t,n,r));return}if(fo(n)&&!r)return;const s=n.shapeFlag&4?ic(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===nt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(At(c)?(u[c]=null,Xe(h,c)&&(h[c]=null)):It(c)&&(c.value=null)),Ve(l))li(l,a,12,[o,u]);else{const f=At(l),d=It(l);if(f||d){const g=()=>{if(i.f){const m=f?Xe(h,l)?h[l]:u[l]:l.value;r?Ne(m)&&Ul(m,s):Ne(m)?m.includes(s)||m.push(s):f?(u[l]=[s],Xe(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,Xe(h,l)&&(h[l]=o)):d&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,Nt(g,t)):g()}}}const Nt=Mm;function Km(i){return Jm(i)}function Jm(i,e){const t=Ap();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=gn,insertStaticContent:g}=i,m=(C,P,W,ee=null,J=null,ue=null,he=!1,re=null,fe=!!P.dynamicChildren)=>{if(C===P)return;C&&!Li(C,P)&&(ee=Fe(C),se(C,J,ue,!0),C=null),P.patchFlag===-2&&(fe=!1,P.dynamicChildren=null);const{type:ae,ref:S,shapeFlag:y}=P;switch(ae){case tc:p(C,P,W,ee);break;case Gn:_(C,P,W,ee);break;case ha:C==null&&w(P,W,ee,he);break;case Mn:K(C,P,W,ee,J,ue,he,re,fe);break;default:y&1?M(C,P,W,ee,J,ue,he,re,fe):y&6?z(C,P,W,ee,J,ue,he,re,fe):(y&64||y&128)&&ae.process(C,P,W,ee,J,ue,he,re,fe,Ae)}S!=null&&J&&gl(S,C&&C.ref,ue,P||C,!P)},p=(C,P,W,ee)=>{if(C==null)n(P.el=a(P.children),W,ee);else{const J=P.el=C.el;P.children!==C.children&&c(J,P.children)}},_=(C,P,W,ee)=>{C==null?n(P.el=l(P.children||""),W,ee):P.el=C.el},w=(C,P,W,ee)=>{[C.el,C.anchor]=g(C.children,P,W,ee,C.el,C.anchor)},x=({el:C,anchor:P},W,ee)=>{let J;for(;C&&C!==P;)J=f(C),n(C,W,ee),C=J;n(P,W,ee)},b=({el:C,anchor:P})=>{let W;for(;C&&C!==P;)W=f(C),r(C),C=W;r(P)},M=(C,P,W,ee,J,ue,he,re,fe)=>{he=he||P.type==="svg",C==null?E(P,W,ee,J,ue,he,re,fe):A(C,P,J,ue,he,re,fe)},E=(C,P,W,ee,J,ue,he,re)=>{let fe,ae;const{type:S,props:y,shapeFlag:N,transition:$,dirs:te}=C;if(fe=C.el=o(C.type,ue,y&&y.is,y),N&8?u(fe,C.children):N&16&&v(C.children,fe,null,ee,J,ue&&S!=="foreignObject",he,re),te&&yi(C,null,ee,"created"),y){for(const ge in y)ge!=="value"&&!ho(ge)&&s(fe,ge,null,y[ge],ue,C.children,ee,J,Z);"value"in y&&s(fe,"value",null,y.value),(ae=y.onVnodeBeforeMount)&&vn(ae,ee,C)}I(fe,C,C.scopeId,he,ee),te&&yi(C,null,ee,"beforeMount");const ce=(!J||J&&!J.pendingBranch)&&$&&!$.persisted;ce&&$.beforeEnter(fe),n(fe,P,W),((ae=y&&y.onVnodeMounted)||ce||te)&&Nt(()=>{ae&&vn(ae,ee,C),ce&&$.enter(fe),te&&yi(C,null,ee,"mounted")},J)},I=(C,P,W,ee,J)=>{if(W&&d(C,W),ee)for(let ue=0;ue<ee.length;ue++)d(C,ee[ue]);if(J){let ue=J.subTree;if(P===ue){const he=J.vnode;I(C,he,he.scopeId,he.slotScopeIds,J.parent)}}},v=(C,P,W,ee,J,ue,he,re,fe=0)=>{for(let ae=fe;ae<C.length;ae++){const S=C[ae]=re?si(C[ae]):bn(C[ae]);m(null,S,P,W,ee,J,ue,he,re)}},A=(C,P,W,ee,J,ue,he)=>{const re=P.el=C.el;let{patchFlag:fe,dynamicChildren:ae,dirs:S}=P;fe|=C.patchFlag&16;const y=C.props||nt,N=P.props||nt;let $;W&&Mi(W,!1),($=N.onVnodeBeforeUpdate)&&vn($,W,P,C),S&&yi(P,C,W,"beforeUpdate"),W&&Mi(W,!0);const te=J&&P.type!=="foreignObject";if(ae?D(C.dynamicChildren,ae,re,W,ee,te,ue):he||V(C,P,re,null,W,ee,te,ue,!1),fe>0){if(fe&16)Y(re,P,y,N,W,ee,J);else if(fe&2&&y.class!==N.class&&s(re,"class",null,N.class,J),fe&4&&s(re,"style",y.style,N.style,J),fe&8){const ce=P.dynamicProps;for(let ge=0;ge<ce.length;ge++){const L=ce[ge],B=y[L],_e=N[L];(_e!==B||L==="value")&&s(re,L,B,_e,J,C.children,W,ee,Z)}}fe&1&&C.children!==P.children&&u(re,P.children)}else!he&&ae==null&&Y(re,P,y,N,W,ee,J);(($=N.onVnodeUpdated)||S)&&Nt(()=>{$&&vn($,W,P,C),S&&yi(P,C,W,"updated")},ee)},D=(C,P,W,ee,J,ue,he)=>{for(let re=0;re<P.length;re++){const fe=C[re],ae=P[re],S=fe.el&&(fe.type===Mn||!Li(fe,ae)||fe.shapeFlag&70)?h(fe.el):W;m(fe,ae,S,null,ee,J,ue,he,!0)}},Y=(C,P,W,ee,J,ue,he)=>{if(W!==ee){if(W!==nt)for(const re in W)!ho(re)&&!(re in ee)&&s(C,re,W[re],null,he,P.children,J,ue,Z);for(const re in ee){if(ho(re))continue;const fe=ee[re],ae=W[re];fe!==ae&&re!=="value"&&s(C,re,ae,fe,he,P.children,J,ue,Z)}"value"in ee&&s(C,"value",W.value,ee.value)}},K=(C,P,W,ee,J,ue,he,re,fe)=>{const ae=P.el=C?C.el:a(""),S=P.anchor=C?C.anchor:a("");let{patchFlag:y,dynamicChildren:N,slotScopeIds:$}=P;$&&(re=re?re.concat($):$),C==null?(n(ae,W,ee),n(S,W,ee),v(P.children,W,S,J,ue,he,re,fe)):y>0&&y&64&&N&&C.dynamicChildren?(D(C.dynamicChildren,N,W,J,ue,he,re),(P.key!=null||J&&P===J.subTree)&&Vf(C,P,!0)):V(C,P,W,S,J,ue,he,re,fe)},z=(C,P,W,ee,J,ue,he,re,fe)=>{P.slotScopeIds=re,C==null?P.shapeFlag&512?J.ctx.activate(P,W,ee,he,fe):F(P,W,ee,J,ue,he,fe):j(C,P,fe)},F=(C,P,W,ee,J,ue,he)=>{const re=C.component=fg(C,ee,J);if(Wo(C)&&(re.ctx.renderer=Ae),pg(re),re.asyncDep){if(J&&J.registerDep(re,X),!C.el){const fe=re.subTree=Oi(Gn);_(null,fe,P,W)}return}X(re,C,P,W,J,ue,he)},j=(C,P,W)=>{const ee=P.component=C.component;if(vm(C,P,W))if(ee.asyncDep&&!ee.asyncResolved){q(ee,P,W);return}else ee.next=P,hm(ee.update),ee.update();else P.el=C.el,ee.vnode=P},X=(C,P,W,ee,J,ue,he)=>{const re=()=>{if(C.isMounted){let{next:S,bu:y,u:N,parent:$,vnode:te}=C,ce=S,ge;Mi(C,!1),S?(S.el=te.el,q(C,S,he)):S=te,y&&oa(y),(ge=S.props&&S.props.onVnodeBeforeUpdate)&&vn(ge,$,S,te),Mi(C,!0);const L=aa(C),B=C.subTree;C.subTree=L,m(B,L,h(B.el),Fe(B),C,J,ue),S.el=L.el,ce===null&&xm(C,L.el),N&&Nt(N,J),(ge=S.props&&S.props.onVnodeUpdated)&&Nt(()=>vn(ge,$,S,te),J)}else{let S;const{el:y,props:N}=P,{bm:$,m:te,parent:ce}=C,ge=fo(P);if(Mi(C,!1),$&&oa($),!ge&&(S=N&&N.onVnodeBeforeMount)&&vn(S,ce,P),Mi(C,!0),y&&Ge){const L=()=>{C.subTree=aa(C),Ge(y,C.subTree,C,J,null)};ge?P.type.__asyncLoader().then(()=>!C.isUnmounted&&L()):L()}else{const L=C.subTree=aa(C);m(null,L,W,ee,C,J,ue),P.el=L.el}if(te&&Nt(te,J),!ge&&(S=N&&N.onVnodeMounted)){const L=P;Nt(()=>vn(S,ce,L),J)}(P.shapeFlag&256||ce&&fo(ce.vnode)&&ce.vnode.shapeFlag&256)&&C.a&&Nt(C.a,J),C.isMounted=!0,P=W=ee=null}},fe=C.effect=new Gl(re,()=>Kl(ae),C.scope),ae=C.update=()=>fe.run();ae.id=C.uid,Mi(C,!0),ae()},q=(C,P,W)=>{P.component=C;const ee=C.vnode.props;C.vnode=P,C.next=null,Xm(C,P.props,ee,W),Ym(C,P.children,W),Ir(),Xc(),Fr()},V=(C,P,W,ee,J,ue,he,re,fe=!1)=>{const ae=C&&C.children,S=C?C.shapeFlag:0,y=P.children,{patchFlag:N,shapeFlag:$}=P;if(N>0){if(N&128){G(ae,y,W,ee,J,ue,he,re,fe);return}else if(N&256){U(ae,y,W,ee,J,ue,he,re,fe);return}}$&8?(S&16&&Z(ae,J,ue),y!==ae&&u(W,y)):S&16?$&16?G(ae,y,W,ee,J,ue,he,re,fe):Z(ae,J,ue,!0):(S&8&&u(W,""),$&16&&v(y,W,ee,J,ue,he,re,fe))},U=(C,P,W,ee,J,ue,he,re,fe)=>{C=C||_r,P=P||_r;const ae=C.length,S=P.length,y=Math.min(ae,S);let N;for(N=0;N<y;N++){const $=P[N]=fe?si(P[N]):bn(P[N]);m(C[N],$,W,null,J,ue,he,re,fe)}ae>S?Z(C,J,ue,!0,!1,y):v(P,W,ee,J,ue,he,re,fe,y)},G=(C,P,W,ee,J,ue,he,re,fe)=>{let ae=0;const S=P.length;let y=C.length-1,N=S-1;for(;ae<=y&&ae<=N;){const $=C[ae],te=P[ae]=fe?si(P[ae]):bn(P[ae]);if(Li($,te))m($,te,W,null,J,ue,he,re,fe);else break;ae++}for(;ae<=y&&ae<=N;){const $=C[y],te=P[N]=fe?si(P[N]):bn(P[N]);if(Li($,te))m($,te,W,null,J,ue,he,re,fe);else break;y--,N--}if(ae>y){if(ae<=N){const $=N+1,te=$<S?P[$].el:ee;for(;ae<=N;)m(null,P[ae]=fe?si(P[ae]):bn(P[ae]),W,te,J,ue,he,re,fe),ae++}}else if(ae>N)for(;ae<=y;)se(C[ae],J,ue,!0),ae++;else{const $=ae,te=ae,ce=new Map;for(ae=te;ae<=N;ae++){const ye=P[ae]=fe?si(P[ae]):bn(P[ae]);ye.key!=null&&ce.set(ye.key,ae)}let ge,L=0;const B=N-te+1;let _e=!1,Me=0;const ve=new Array(B);for(ae=0;ae<B;ae++)ve[ae]=0;for(ae=$;ae<=y;ae++){const ye=C[ae];if(L>=B){se(ye,J,ue,!0);continue}let De;if(ye.key!=null)De=ce.get(ye.key);else for(ge=te;ge<=N;ge++)if(ve[ge-te]===0&&Li(ye,P[ge])){De=ge;break}De===void 0?se(ye,J,ue,!0):(ve[De-te]=ae+1,De>=Me?Me=De:_e=!0,m(ye,P[De],W,null,J,ue,he,re,fe),L++)}const Se=_e?Qm(ve):_r;for(ge=Se.length-1,ae=B-1;ae>=0;ae--){const ye=te+ae,De=P[ye],Be=ye+1<S?P[ye+1].el:ee;ve[ae]===0?m(null,De,W,Be,J,ue,he,re,fe):_e&&(ge<0||ae!==Se[ge]?oe(De,W,Be,2):ge--)}}},oe=(C,P,W,ee,J=null)=>{const{el:ue,type:he,transition:re,children:fe,shapeFlag:ae}=C;if(ae&6){oe(C.component.subTree,P,W,ee);return}if(ae&128){C.suspense.move(P,W,ee);return}if(ae&64){he.move(C,P,W,Ae);return}if(he===Mn){n(ue,P,W);for(let y=0;y<fe.length;y++)oe(fe[y],P,W,ee);n(C.anchor,P,W);return}if(he===ha){x(C,P,W);return}if(ee!==2&&ae&1&&re)if(ee===0)re.beforeEnter(ue),n(ue,P,W),Nt(()=>re.enter(ue),J);else{const{leave:y,delayLeave:N,afterLeave:$}=re,te=()=>n(ue,P,W),ce=()=>{y(ue,()=>{te(),$&&$()})};N?N(ue,te,ce):ce()}else n(ue,P,W)},se=(C,P,W,ee=!1,J=!1)=>{const{type:ue,props:he,ref:re,children:fe,dynamicChildren:ae,shapeFlag:S,patchFlag:y,dirs:N}=C;if(re!=null&&gl(re,null,W,C,!0),S&256){P.ctx.deactivate(C);return}const $=S&1&&N,te=!fo(C);let ce;if(te&&(ce=he&&he.onVnodeBeforeUnmount)&&vn(ce,P,C),S&6)we(C.component,W,ee);else{if(S&128){C.suspense.unmount(W,ee);return}$&&yi(C,null,P,"beforeUnmount"),S&64?C.type.remove(C,P,W,J,Ae,ee):ae&&(ue!==Mn||y>0&&y&64)?Z(ae,P,W,!1,!0):(ue===Mn&&y&384||!J&&S&16)&&Z(fe,P,W),ee&&le(C)}(te&&(ce=he&&he.onVnodeUnmounted)||$)&&Nt(()=>{ce&&vn(ce,P,C),$&&yi(C,null,P,"unmounted")},W)},le=C=>{const{type:P,el:W,anchor:ee,transition:J}=C;if(P===Mn){pe(W,ee);return}if(P===ha){b(C);return}const ue=()=>{r(W),J&&!J.persisted&&J.afterLeave&&J.afterLeave()};if(C.shapeFlag&1&&J&&!J.persisted){const{leave:he,delayLeave:re}=J,fe=()=>he(W,ue);re?re(C.el,ue,fe):fe()}else ue()},pe=(C,P)=>{let W;for(;C!==P;)W=f(C),r(C),C=W;r(P)},we=(C,P,W)=>{const{bum:ee,scope:J,update:ue,subTree:he,um:re}=C;ee&&oa(ee),J.stop(),ue&&(ue.active=!1,se(he,C,P,W)),re&&Nt(re,P),Nt(()=>{C.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},Z=(C,P,W,ee=!1,J=!1,ue=0)=>{for(let he=ue;he<C.length;he++)se(C[he],P,W,ee,J)},Fe=C=>C.shapeFlag&6?Fe(C.component.subTree):C.shapeFlag&128?C.suspense.next():f(C.anchor||C.el),Te=(C,P,W)=>{C==null?P._vnode&&se(P._vnode,null,null,!0):m(P._vnode||null,C,P,null,null,null,W),Xc(),wf(),P._vnode=C},Ae={p:m,um:se,m:oe,r:le,mt:F,mc:v,pc:V,pbc:D,n:Fe,o:i};let xe,Ge;return e&&([xe,Ge]=e(Ae)),{render:Te,hydrate:xe,createApp:Zm(Te,xe)}}function Mi({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Vf(i,e,t=!1){const n=i.children,r=e.children;if(Ne(n)&&Ne(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=si(r[s]),a.el=o.el),t||Vf(o,a))}}function Qm(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const eg=i=>i.__isTeleport,Mn=Symbol(void 0),tc=Symbol(void 0),Gn=Symbol(void 0),ha=Symbol(void 0),os=[];let pn=null;function tg(i=!1){os.push(pn=i?null:[])}function ng(){os.pop(),pn=os[os.length-1]||null}let fs=1;function tu(i){fs+=i}function ig(i){return i.dynamicChildren=fs>0?pn||_r:null,ng(),fs>0&&pn&&pn.push(i),i}function rg(i,e,t,n,r,s){return ig(Hf(i,e,t,n,r,s,!0))}function sg(i){return i?i.__v_isVNode===!0:!1}function Li(i,e){return i.type===e.type&&i.key===e.key}const jo="__vInternal",Gf=({key:i})=>i!=null?i:null,po=({ref:i,ref_key:e,ref_for:t})=>i!=null?At(i)||It(i)||Ve(i)?{i:Cn,r:i,k:e,f:!!t}:i:null;function Hf(i,e=null,t=null,n=0,r=null,s=i===Mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Gf(e),ref:e&&po(e),scopeId:Ef,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(nc(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=At(t)?8:16),fs>0&&!o&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const Oi=og;function og(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Nm)&&(i=Gn),sg(i)){const a=fi(i,e,!0);return t&&nc(a,t),fs>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(i)]=a:pn.push(a)),a.patchFlag|=-2,a}if(vg(i)&&(i=i.__vccOpts),e){e=ag(e);let{class:a,style:l}=e;a&&!At(a)&&(e.class=zl(a)),ft(l)&&(_f(l)&&!Ne(l)&&(l=Et({},l)),e.style=Ol(l))}const o=At(i)?1:ym(i)?128:eg(i)?64:ft(i)?4:Ve(i)?2:0;return Hf(i,e,t,n,r,o,s,!0)}function ag(i){return i?_f(i)||jo in i?Et({},i):i:null}function fi(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?cg(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Gf(a),ref:e&&e.ref?t&&r?Ne(r)?r.concat(po(e)):[r,po(e)]:po(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Mn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&fi(i.ssContent),ssFallback:i.ssFallback&&fi(i.ssFallback),el:i.el,anchor:i.anchor}}function lg(i=" ",e=0){return Oi(tc,null,i,e)}function bn(i){return i==null||typeof i=="boolean"?Oi(Gn):Ne(i)?Oi(Mn,null,i.slice()):typeof i=="object"?si(i):Oi(tc,null,String(i))}function si(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:fi(i)}function nc(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(Ne(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),nc(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(jo in e)?e._ctx=Cn:r===3&&Cn&&(Cn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else Ve(e)?(e={default:e,_ctx:Cn},t=32):(e=String(e),n&64?(t=16,e=[lg(e)]):t=8);i.children=e,i.shapeFlag|=t}function cg(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=zl([e.class,n.class]));else if(r==="style")e.style=Ol([e.style,n.style]);else if(Uo(r)){const s=e[r],o=n[r];o&&s!==o&&!(Ne(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function vn(i,e,t,n=null){rn(i,e,7,[t,n])}const ug=kf();let hg=0;function fg(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||ug,s={uid:hg++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zf(n,r),emitsOptions:Tf(n,r),emit:null,emitted:null,propsDefaults:nt,inheritAttrs:n.inheritAttrs,ctx:nt,data:nt,props:nt,attrs:nt,slots:nt,refs:nt,setupState:nt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=pm.bind(null,s),i.ce&&i.ce(s),s}let Mt=null;const dg=()=>Mt||Cn,Sr=i=>{Mt=i,i.scope.on()},zi=()=>{Mt&&Mt.scope.off(),Mt=null};function Wf(i){return i.vnode.shapeFlag&4}let ds=!1;function pg(i,e=!1){ds=e;const{props:t,children:n}=i.vnode,r=Wf(i);Wm(i,t,r,e),qm(i,n);const s=r?mg(i,e):void 0;return ds=!1,s}function mg(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=vf(new Proxy(i.ctx,Um));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?_g(i):null;Sr(i),Ir();const s=li(n,i,0,[i.props,r]);if(Fr(),zi(),rf(s)){if(s.then(zi,zi),e)return s.then(o=>{nu(i,o,e)}).catch(o=>{Go(o,i,0)});i.asyncDep=s}else nu(i,s,e)}else Xf(i,e)}function nu(i,e,t){Ve(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:ft(e)&&(i.setupState=xf(e)),Xf(i,t)}let iu;function Xf(i,e,t){const n=i.type;if(!i.render){if(!e&&iu&&!n.render){const r=n.template||Ql(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Et(Et({isCustomElement:s,delimiters:a},o),l);n.render=iu(r,c)}}i.render=n.render||gn}Sr(i),Ir(),Bm(i),Fr(),zi()}function gg(i){return new Proxy(i.attrs,{get(e,t){return Yt(i,"get","$attrs"),e[t]}})}function _g(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=gg(i))},slots:i.slots,emit:i.emit,expose:e}}function ic(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(xf(vf(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in So)return So[t](i)}}))}function vg(i){return Ve(i)&&"__vccOpts"in i}const xg=(i,e)=>am(i,e,ds),yg="3.2.41",Mg="http://www.w3.org/2000/svg",Pi=typeof document<"u"?document:null,ru=Pi&&Pi.createElement("template"),bg={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?Pi.createElementNS(Mg,i):Pi.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>Pi.createTextNode(i),createComment:i=>Pi.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>Pi.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ru.innerHTML=n?`<svg>${i}</svg>`:i;const a=ru.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function wg(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Sg(i,e,t){const n=i.style,r=At(t);if(t&&!r){for(const s in t)_l(n,s,t[s]);if(e&&!At(e))for(const s in e)t[s]==null&&_l(n,s,"")}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const su=/\s*!important$/;function _l(i,e,t){if(Ne(t))t.forEach(n=>_l(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Tg(i,e);su.test(t)?i.setProperty(Rr(n),t.replace(su,""),"important"):i[n]=t}}const ou=["Webkit","Moz","ms"],fa={};function Tg(i,e){const t=fa[e];if(t)return t;let n=wr(e);if(n!=="filter"&&n in i)return fa[e]=n;n=sf(n);for(let r=0;r<ou.length;r++){const s=ou[r]+n;if(s in i)return fa[e]=s}return e}const au="http://www.w3.org/1999/xlink";function Eg(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(au,e.slice(6,e.length)):i.setAttributeNS(au,e,t);else{const s=dp(e);t==null||s&&!nf(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function Ag(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t==null?"":t;return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t==null?"":t;(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=nf(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function Cg(i,e,t,n){i.addEventListener(e,t,n)}function Lg(i,e,t,n){i.removeEventListener(e,t,n)}function Pg(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Dg(e);if(n){const c=s[e]=Fg(n,r);Cg(i,a,c,l)}else o&&(Lg(i,a,o,l),s[e]=void 0)}}const lu=/(?:Once|Passive|Capture)$/;function Dg(i){let e;if(lu.test(i)){e={};let n;for(;n=i.match(lu);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Rr(i.slice(2)),e]}let da=0;const Rg=Promise.resolve(),Ig=()=>da||(Rg.then(()=>da=0),da=Date.now());function Fg(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;rn(Og(n,t.value),e,5,[n])};return t.value=i,t.attached=Ig(),t}function Og(i,e){if(Ne(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const cu=/^on[a-z]/,zg=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?wg(i,n,r):e==="style"?Sg(i,t,n):Uo(e)?Nl(e)||Pg(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ng(i,e,n,r))?Ag(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Eg(i,e,n,r))};function Ng(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&cu.test(e)&&Ve(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||cu.test(e)&&At(t)?!1:e in i}const Ug={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Em.props;const Bg=Et({patchProp:zg},bg);let uu;function kg(){return uu||(uu=Km(Bg))}const Vg=(...i)=>{const e=kg().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Gg(n);if(!r)return;const s=e._component;!Ve(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Gg(i){return At(i)?document.querySelector(i):i}/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rc="146",qi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hg=0,hu=1,Wg=2,jf=1,Xg=2,es=3,Tr=0,sn=1,mn=2,ci=0,yr=1,fu=2,du=3,pu=4,jg=5,ur=100,qg=101,Yg=102,mu=103,gu=104,$g=200,Zg=201,Kg=202,Jg=203,qf=204,Yf=205,Qg=206,e0=207,t0=208,n0=209,i0=210,r0=0,s0=1,o0=2,vl=3,a0=4,l0=5,c0=6,u0=7,qo=0,h0=1,f0=2,Hn=0,d0=1,p0=2,m0=3,g0=4,_0=5,$f=300,Er=301,Ar=302,Eo=303,xl=304,Yo=306,ps=1e3,Xt=1001,yl=1002,St=1003,_u=1004,vu=1005,en=1006,v0=1007,$o=1008,Bi=1009,x0=1010,y0=1011,Zf=1012,M0=1013,Ri=1014,oi=1015,ms=1016,b0=1017,w0=1018,Mr=1020,S0=1021,T0=1022,tn=1023,E0=1024,A0=1025,Ni=1026,Cr=1027,C0=1028,L0=1029,P0=1030,D0=1031,R0=1033,pa=33776,ma=33777,ga=33778,_a=33779,xu=35840,yu=35841,Mu=35842,bu=35843,I0=36196,wu=37492,Su=37496,Tu=37808,Eu=37809,Au=37810,Cu=37811,Lu=37812,Pu=37813,Du=37814,Ru=37815,Iu=37816,Fu=37817,Ou=37818,zu=37819,Nu=37820,Uu=37821,Bu=36492,Ao=2300,Co=2301,va=2302,ku=2400,Vu=2401,Gu=2402,F0=2500,ki=3e3,tt=3001,O0=3200,z0=3201,sc=0,N0=1,kn="srgb",Ii="srgb-linear",xa=7680,U0=519,Hu=35044,Wu="300 es",Ml=1035;class Gi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xu=1234567;const br=Math.PI/180,gs=180/Math.PI;function pi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]).toLowerCase()}function yt(i,e,t){return Math.max(e,Math.min(t,i))}function oc(i,e){return(i%e+e)%e}function B0(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function k0(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function V0(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function G0(i,e=1){return e-Math.abs(oc(i,e*2)-e)}function H0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function W0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function X0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function j0(i,e){return i+Math.random()*(e-i)}function q0(i){return i*(.5-Math.random())}function Y0(i){i!==void 0&&(Xu=i);let e=Xu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $0(i){return i*br}function Z0(i){return i*gs}function bl(i){return(i&i-1)===0&&i!==0}function Kf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Lo(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function K0(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),u=o((e+n)/2),h=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*u,l*h,l*f,a*c);break;case"YZY":i.set(l*f,a*u,l*h,a*c);break;case"ZXZ":i.set(l*h,l*f,a*u,a*c);break;case"XZX":i.set(a*u,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*u,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ts(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Tn=Object.freeze({__proto__:null,DEG2RAD:br,RAD2DEG:gs,generateUUID:pi,clamp:yt,euclideanModulo:oc,mapLinear:B0,inverseLerp:k0,lerp:as,damp:V0,pingpong:G0,smoothstep:H0,smootherstep:W0,randInt:X0,randFloat:j0,randFloatSpread:q0,seededRandom:Y0,degToRad:$0,radToDeg:Z0,isPowerOfTwo:bl,ceilPowerOfTwo:Kf,floorPowerOfTwo:Lo,setQuaternionFromProperEuler:K0,normalize:Ot,denormalize:ts});class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],m=r[0],p=r[3],_=r[6],w=r[1],x=r[4],b=r[7],M=r[2],E=r[5],I=r[8];return s[0]=o*m+a*w+l*M,s[3]=o*p+a*x+l*E,s[6]=o*_+a*b+l*I,s[1]=c*m+u*w+h*M,s[4]=c*p+u*x+h*E,s[7]=c*_+u*b+h*I,s[2]=f*m+d*w+g*M,s[5]=f*p+d*x+g*E,s[8]=f*_+d*b+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,g=t*h+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=h*m,e[1]=(r*c-u*n)*m,e[2]=(a*n-r*o)*m,e[3]=f*m,e[4]=(u*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],l=r[1],c=r[4],u=r[7];return r[0]=t*s+n*l,r[3]=t*o+n*c,r[6]=t*a+n*u,r[1]=-n*s+t*l,r[4]=-n*o+t*c,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function Jf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mo(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ya={[kn]:{[Ii]:Ui},[Ii]:{[kn]:mo}},cn={legacyMode:!0,get workingColorSpace(){return Ii},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(ya[e]&&ya[e][t]!==void 0){const n=ya[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},Qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},un={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Ma(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Ns(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,cn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ii){return this.r=e,this.g=t,this.b=n,cn.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ii){if(e=oc(e,1),t=yt(t,0,1),n=yt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ma(o,s,e+1/3),this.g=Ma(o,s,e),this.b=Ma(o,s,e-1/3)}return cn.toWorkingColorSpace(this,r),this}setStyle(e,t=kn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,cn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,cn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,cn.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,cn.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=kn){const n=Qf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ui(e.r),this.g=Ui(e.g),this.b=Ui(e.b),this}copyLinearToSRGB(e){return this.r=mo(e.r),this.g=mo(e.g),this.b=mo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kn){return cn.fromWorkingColorSpace(Ns(this,dt),e),yt(dt.r*255,0,255)<<16^yt(dt.g*255,0,255)<<8^yt(dt.b*255,0,255)<<0}getHexString(e=kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ii){cn.fromWorkingColorSpace(Ns(this,dt),t);const n=dt.r,r=dt.g,s=dt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ii){return cn.fromWorkingColorSpace(Ns(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=kn){return cn.fromWorkingColorSpace(Ns(this,dt),e),e!==kn?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(un),un.h+=e,un.s+=t,un.l+=n,this.setHSL(un.h,un.s,un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(un),e.getHSL(zs);const n=as(un.h,zs.h,t),r=as(un.s,zs.s,t),s=as(un.l,zs.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Pe.NAMES=Qf;let $i;class ed{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{$i===void 0&&($i=_s("canvas")),$i.width=e.width,$i.height=e.height;const n=$i.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=$i}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_s("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ui(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ui(t[n]/255)*255):t[n]=Ui(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class td{constructor(e=null){this.isSource=!0,this.uuid=pi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ba(r[o].image)):s.push(ba(r[o]))}else s=ba(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ba(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ed.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let J0=0;class Ft extends Gi{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Xt,r=Xt,s=en,o=$o,a=tn,l=Bi,c=1,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=pi(),this.name="",this.source=new td(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$f)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ps:e.x=e.x-Math.floor(e.x);break;case Xt:e.x=e.x<0?0:1;break;case yl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ps:e.y=e.y-Math.floor(e.y);break;case Xt:e.y=e.y<0?0:1;break;case yl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=$f;class Ye{constructor(e=0,t=0,n=0,r=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(d+1)/2,M=(_+1)/2,E=(u+f)/4,I=(h+m)/4,v=(g+p)/4;return x>b&&x>M?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=E/n,s=I/n):b>M?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=E/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=I/s,r=v/s),this.set(n,r,s,t),this}let w=Math.sqrt((p-g)*(p-g)+(h-m)*(h-m)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(h-m)/w,this.z=(f-u)/w,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vi extends Gi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ft(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:en,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new td(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nd extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Q0 extends Ft{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(h!==m||l!==f||c!==d||u!==g){let p=1-a;const _=l*f+c*d+u*g+h*m,w=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const M=Math.sqrt(x),E=Math.atan2(M,_*w);p=Math.sin(p*E)/M,a=Math.sin(a*E)/M}const b=a*w;if(l=l*p+f*b,c=c*p+d*b,u=u*p+g*b,h=h*p+m*b,p===1-a){const M=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=M,c*=M,u*=M,h*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*d-c*f,e[t+1]=l*g+u*f+c*h-a*d,e[t+2]=c*g+u*d+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){const d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){const d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ju.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ju.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wa.copy(this).projectOnVector(e),this.sub(wa)}reflect(e){return this.sub(wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(yt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wa=new R,ju=new nn;class Ss{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)bi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(bi)}else n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox),Sa.applyMatrix4(e.matrixWorld),this.union(Sa);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Yr),Us.subVectors(this.max,Yr),Zi.subVectors(e.a,Yr),Ki.subVectors(e.b,Yr),Ji.subVectors(e.c,Yr),Zn.subVectors(Ki,Zi),Kn.subVectors(Ji,Ki),wi.subVectors(Zi,Ji);let t=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-wi.z,wi.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,wi.z,0,-wi.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-wi.y,wi.x,0];return!Ta(t,Zi,Ki,Ji,Us)||(t=[1,0,0,0,1,0,0,0,1],!Ta(t,Zi,Ki,Ji,Us))?!1:(Bs.crossVectors(Zn,Kn),t=[Bs.x,Bs.y,Bs.z],Ta(t,Zi,Ki,Ji,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return bi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new R,new R,new R,new R,new R,new R,new R,new R],bi=new R,Sa=new Ss,Zi=new R,Ki=new R,Ji=new R,Zn=new R,Kn=new R,wi=new R,Yr=new R,Us=new R,Bs=new R,Si=new R;function Ta(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Si.fromArray(i,s);const a=r.x*Math.abs(Si.x)+r.y*Math.abs(Si.y)+r.z*Math.abs(Si.z),l=e.dot(Si),c=t.dot(Si),u=n.dot(Si);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const e_=new Ss,$r=new R,Ea=new R;class Ts{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):e_.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$r.subVectors(e,this.center);const t=$r.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector($r,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ea.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($r.copy(e.center).add(Ea)),this.expandByPoint($r.copy(e.center).sub(Ea))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fn=new R,Aa=new R,ks=new R,Jn=new R,Ca=new R,Vs=new R,La=new R;class Zo{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.direction).multiplyScalar(t).add(this.origin),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Aa.copy(e).add(t).multiplyScalar(.5),ks.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(Aa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ks),a=Jn.dot(this.direction),l=-Jn.dot(ks),c=Jn.lengthSq(),u=Math.abs(1-o*o);let h,f,d,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const m=1/u;h*=m,f*=m,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(h).add(this.origin),r&&r.copy(ks).multiplyScalar(f).add(Aa),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);const n=Fn.dot(this.direction),r=Fn.dot(Fn)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,n,r,s){Ca.subVectors(t,e),Vs.subVectors(n,e),La.crossVectors(Ca,Vs);let o=this.direction.dot(La),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Jn.subVectors(this.origin,e);const l=a*this.direction.dot(Vs.crossVectors(Jn,Vs));if(l<0)return null;const c=a*this.direction.dot(Ca.cross(Jn));if(c<0||l+c>o)return null;const u=-a*Jn.dot(La);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ce{constructor(){Ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ce().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),o=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=d+g*c,t[5]=f-m*c,t[9]=-a*l,t[2]=m-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=m+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,d=l*h,g=c*u,m=c*h;t[0]=f-m*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=m-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,d=o*h,g=a*u,m=a*h;t[0]=l*u,t[4]=g*c-d,t[8]=f*c+m,t[1]=l*h,t[5]=m*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=m-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*h+g,t[10]=f-m*h}else if(e.order==="XZY"){const f=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+m,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=m*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t_,e,n_)}lookAt(e,t,n){const r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Qn.crossVectors(n,Ht),Qn.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Qn.crossVectors(n,Ht)),Qn.normalize(),Gs.crossVectors(Ht,Qn),r[0]=Qn.x,r[4]=Gs.x,r[8]=Ht.x,r[1]=Qn.y,r[5]=Gs.y,r[9]=Ht.y,r[2]=Qn.z,r[6]=Gs.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],w=n[3],x=n[7],b=n[11],M=n[15],E=r[0],I=r[4],v=r[8],A=r[12],D=r[1],Y=r[5],K=r[9],z=r[13],F=r[2],j=r[6],X=r[10],q=r[14],V=r[3],U=r[7],G=r[11],oe=r[15];return s[0]=o*E+a*D+l*F+c*V,s[4]=o*I+a*Y+l*j+c*U,s[8]=o*v+a*K+l*X+c*G,s[12]=o*A+a*z+l*q+c*oe,s[1]=u*E+h*D+f*F+d*V,s[5]=u*I+h*Y+f*j+d*U,s[9]=u*v+h*K+f*X+d*G,s[13]=u*A+h*z+f*q+d*oe,s[2]=g*E+m*D+p*F+_*V,s[6]=g*I+m*Y+p*j+_*U,s[10]=g*v+m*K+p*X+_*G,s[14]=g*A+m*z+p*q+_*oe,s[3]=w*E+x*D+b*F+M*V,s[7]=w*I+x*Y+b*j+M*U,s[11]=w*v+x*K+b*X+M*G,s[15]=w*A+x*z+b*q+M*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*d-n*l*d)+m*(+t*l*d-t*c*f+s*o*f-r*o*d+r*c*u-s*l*u)+p*(+t*c*h-t*a*d-s*o*h+n*o*d+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],w=h*p*c-m*f*c+m*l*d-a*p*d-h*l*_+a*f*_,x=g*f*c-u*p*c-g*l*d+o*p*d+u*l*_-o*f*_,b=u*m*c-g*h*c+g*a*d-o*m*d-u*a*_+o*h*_,M=g*h*l-u*m*l-g*a*f+o*m*f+u*a*p-o*h*p,E=t*w+n*x+r*b+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/E;return e[0]=w*I,e[1]=(m*f*s-h*p*s-m*r*d+n*p*d+h*r*_-n*f*_)*I,e[2]=(a*p*s-m*l*s+m*r*c-n*p*c-a*r*_+n*l*_)*I,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*d-n*l*d)*I,e[4]=x*I,e[5]=(u*p*s-g*f*s+g*r*d-t*p*d-u*r*_+t*f*_)*I,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*_-t*l*_)*I,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*d+t*l*d)*I,e[8]=b*I,e[9]=(g*h*s-u*m*s-g*n*d+t*m*d+u*n*_-t*h*_)*I,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*_+t*a*_)*I,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*d-t*a*d)*I,e[12]=M*I,e[13]=(u*m*r-g*h*r+g*n*f-t*m*f-u*n*p+t*h*p)*I,e[14]=(g*a*r-o*m*r-g*n*l+t*m*l+o*n*p-t*a*p)*I,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*I,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,g=s*h,m=o*u,p=o*h,_=a*h,w=l*c,x=l*u,b=l*h,M=n.x,E=n.y,I=n.z;return r[0]=(1-(m+_))*M,r[1]=(d+b)*M,r[2]=(g-x)*M,r[3]=0,r[4]=(d-b)*E,r[5]=(1-(f+_))*E,r[6]=(p+w)*E,r[7]=0,r[8]=(g+x)*I,r[9]=(p-w)*I,r[10]=(1-(f+m))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Qi.set(r[0],r[1],r[2]).length();const o=Qi.set(r[4],r[5],r[6]).length(),a=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const c=1/s,u=1/o,h=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=h,hn.elements[9]*=h,hn.elements[10]*=h,t.setFromRotationMatrix(hn),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,d=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new R,hn=new Ce,t_=new R(0,0,0),n_=new R(1,1,1),Qn=new R,Gs=new R,Ht=new R,qu=new Ce,Yu=new nn;class qt{constructor(e=0,t=0,n=0,r=qt.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(yt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yu.setFromEuler(this),this.setFromQuaternion(Yu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}qt.DefaultOrder="XYZ";qt.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class ac{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let i_=0;const $u=new R,er=new nn,On=new Ce,Hs=new R,Zr=new R,r_=new R,s_=new nn,Zu=new R(1,0,0),Ku=new R(0,1,0),Ju=new R(0,0,1),o_={type:"added"},Qu={type:"removed"};class ot extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DefaultUp.clone();const e=new R,t=new qt,n=new nn,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ce},normalMatrix:{value:new jt}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=ot.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DefaultMatrixWorldAutoUpdate,this.layers=new ac,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(Zu,e)}rotateY(e){return this.rotateOnAxis(Ku,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return $u.copy(e).applyQuaternion(this.quaternion),this.position.add($u.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zu,e)}translateY(e){return this.translateOnAxis(Ku,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Hs.copy(e):Hs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Zr,Hs,this.up):On.lookAt(Hs,Zr,this.up),this.quaternion.setFromRotationMatrix(On),r&&(On.extractRotation(r.matrixWorld),er.setFromRotationMatrix(On),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(o_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Qu)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,r_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,s_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ot.DefaultUp=new R(0,1,0);ot.DefaultMatrixAutoUpdate=!0;ot.DefaultMatrixWorldAutoUpdate=!0;const fn=new R,zn=new R,Pa=new R,Nn=new R,tr=new R,nr=new R,eh=new R,Da=new R,Ra=new R,Ia=new R;class En{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){fn.subVectors(r,t),zn.subVectors(n,t),Pa.subVectors(e,t);const o=fn.dot(fn),a=fn.dot(zn),l=fn.dot(Pa),c=zn.dot(zn),u=zn.dot(Pa),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,d=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Nn),Nn.x>=0&&Nn.y>=0&&Nn.x+Nn.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Nn),l.set(0,0),l.addScaledVector(s,Nn.x),l.addScaledVector(o,Nn.y),l.addScaledVector(a,Nn.z),l}static isFrontFacing(e,t,n,r){return fn.subVectors(n,t),zn.subVectors(e,t),fn.cross(zn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),fn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return En.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;tr.subVectors(r,n),nr.subVectors(s,n),Da.subVectors(e,n);const l=tr.dot(Da),c=nr.dot(Da);if(l<=0&&c<=0)return t.copy(n);Ra.subVectors(e,r);const u=tr.dot(Ra),h=nr.dot(Ra);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(tr,o);Ia.subVectors(e,s);const d=tr.dot(Ia),g=nr.dot(Ia);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(nr,a);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return eh.subVectors(s,r),a=(h-u)/(h-u+(d-g)),t.copy(r).addScaledVector(eh,a);const _=1/(p+m+f);return o=m*_,a=f*_,t.copy(n).addScaledVector(tr,o).addScaledVector(nr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let a_=0;class mi extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=yr,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=qf,this.blendDst=Yf,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yr&&(n.blending=this.blending),this.side!==Tr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class id extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new R,Ws=new Ie;class Ut{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=Hu,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hu&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lc extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class rd extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let l_=0;const Jt=new Ce,Fa=new ot,ir=new R,Wt=new Ss,Kr=new Ss,vt=new R;class pt extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jf(e)?rd:lc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new jt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return Fa.lookAt(e),Fa.updateMatrix(),this.applyMatrix4(Fa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ir).negate(),this.translate(ir.x,ir.y,ir.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(vt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(vt),vt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(vt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ts);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Kr.setFromBufferAttribute(a),this.morphTargetsRelative?(vt.addVectors(Wt.min,Kr.min),Wt.expandByPoint(vt),vt.addVectors(Wt.max,Kr.max),Wt.expandByPoint(vt)):(Wt.expandByPoint(Kr.min),Wt.expandByPoint(Kr.max))}Wt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)vt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(vt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)vt.fromBufferAttribute(a,c),l&&(ir.fromBufferAttribute(e,c),vt.add(ir)),r=Math.max(r,n.distanceToSquared(vt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<a;D++)c[D]=new R,u[D]=new R;const h=new R,f=new R,d=new R,g=new Ie,m=new Ie,p=new Ie,_=new R,w=new R;function x(D,Y,K){h.fromArray(r,D*3),f.fromArray(r,Y*3),d.fromArray(r,K*3),g.fromArray(o,D*2),m.fromArray(o,Y*2),p.fromArray(o,K*2),f.sub(h),d.sub(h),m.sub(g),p.sub(g);const z=1/(m.x*p.y-p.x*m.y);!isFinite(z)||(_.copy(f).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(z),w.copy(d).multiplyScalar(m.x).addScaledVector(f,-p.x).multiplyScalar(z),c[D].add(_),c[Y].add(_),c[K].add(_),u[D].add(w),u[Y].add(w),u[K].add(w))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let D=0,Y=b.length;D<Y;++D){const K=b[D],z=K.start,F=K.count;for(let j=z,X=z+F;j<X;j+=3)x(n[j+0],n[j+1],n[j+2])}const M=new R,E=new R,I=new R,v=new R;function A(D){I.fromArray(s,D*3),v.copy(I);const Y=c[D];M.copy(Y),M.sub(I.multiplyScalar(I.dot(Y))).normalize(),E.crossVectors(v,Y);const z=E.dot(u[D])<0?-1:1;l[D*4]=M.x,l[D*4+1]=M.y,l[D*4+2]=M.z,l[D*4+3]=z}for(let D=0,Y=b.length;D<Y;++D){const K=b[D],z=K.start,F=K.count;for(let j=z,X=z+F;j<X;j+=3)A(n[j+0]),A(n[j+1]),A(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,l=new R,c=new R,u=new R,h=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),m=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)vt.fromBufferAttribute(e,t),vt.normalize(),e.setXYZ(t,vt.x,vt.y,vt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*u;for(let _=0;_<u;_++)f[g++]=c[d++]}return new Ut(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pt,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new Ce,rr=new Zo,Oa=new Ts,ei=new R,ti=new R,ni=new R,za=new R,Na=new R,Ua=new R,Xs=new R,js=new R,qs=new R,Ys=new Ie,$s=new Ie,Zs=new Ie,Ba=new R,Ks=new R;class Bt extends ot{constructor(e=new pt,t=new id){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere),Oa.applyMatrix4(s),e.ray.intersectsSphere(Oa)===!1)||(th.copy(s).invert(),rr.copy(e.ray).applyMatrix4(th),n.boundingBox!==null&&rr.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,u=n.morphTargetsRelative,h=n.attributes.uv,f=n.attributes.uv2,d=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const _=d[m],w=r[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(a.count,Math.min(_.start+_.count,g.start+g.count));for(let M=x,E=b;M<E;M+=3){const I=a.getX(M),v=a.getX(M+1),A=a.getX(M+2);o=Js(this,w,e,rr,l,c,u,h,f,I,v,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let _=m,w=p;_<w;_+=3){const x=a.getX(_),b=a.getX(_+1),M=a.getX(_+2);o=Js(this,r,e,rr,l,c,u,h,f,x,b,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,p=d.length;m<p;m++){const _=d[m],w=r[_.materialIndex],x=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let M=x,E=b;M<E;M+=3){const I=M,v=M+1,A=M+2;o=Js(this,w,e,rr,l,c,u,h,f,I,v,A),o&&(o.faceIndex=Math.floor(M/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let _=m,w=p;_<w;_+=3){const x=_,b=_+1,M=_+2;o=Js(this,r,e,rr,l,c,u,h,f,x,b,M),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function c_(i,e,t,n,r,s,o,a){let l;if(e.side===sn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side!==mn,a),l===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ks);return c<t.near||c>t.far?null:{distance:c,point:Ks.clone(),object:i}}function Js(i,e,t,n,r,s,o,a,l,c,u,h){ei.fromBufferAttribute(r,c),ti.fromBufferAttribute(r,u),ni.fromBufferAttribute(r,h);const f=i.morphTargetInfluences;if(s&&f){Xs.set(0,0,0),js.set(0,0,0),qs.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=f[g],_=s[g];p!==0&&(za.fromBufferAttribute(_,c),Na.fromBufferAttribute(_,u),Ua.fromBufferAttribute(_,h),o?(Xs.addScaledVector(za,p),js.addScaledVector(Na,p),qs.addScaledVector(Ua,p)):(Xs.addScaledVector(za.sub(ei),p),js.addScaledVector(Na.sub(ti),p),qs.addScaledVector(Ua.sub(ni),p)))}ei.add(Xs),ti.add(js),ni.add(qs)}i.isSkinnedMesh&&(i.boneTransform(c,ei),i.boneTransform(u,ti),i.boneTransform(h,ni));const d=c_(i,e,t,n,ei,ti,ni,Ba);if(d){a&&(Ys.fromBufferAttribute(a,c),$s.fromBufferAttribute(a,u),Zs.fromBufferAttribute(a,h),d.uv=En.getUV(Ba,ei,ti,ni,Ys,$s,Zs,new Ie)),l&&(Ys.fromBufferAttribute(l,c),$s.fromBufferAttribute(l,u),Zs.fromBufferAttribute(l,h),d.uv2=En.getUV(Ba,ei,ti,ni,Ys,$s,Zs,new Ie));const g={a:c,b:u,c:h,normal:new R,materialIndex:0};En.getNormal(ei,ti,ni,g.normal),d.face=g}return d}class Es extends pt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new it(c,3)),this.setAttribute("normal",new it(u,3)),this.setAttribute("uv",new it(h,2));function g(m,p,_,w,x,b,M,E,I,v,A){const D=b/I,Y=M/v,K=b/2,z=M/2,F=E/2,j=I+1,X=v+1;let q=0,V=0;const U=new R;for(let G=0;G<X;G++){const oe=G*Y-z;for(let se=0;se<j;se++){const le=se*D-K;U[m]=le*w,U[p]=oe*x,U[_]=F,c.push(U.x,U.y,U.z),U[m]=0,U[p]=0,U[_]=E>0?1:-1,u.push(U.x,U.y,U.z),h.push(se/I),h.push(1-G/v),q+=1}}for(let G=0;G<v;G++)for(let oe=0;oe<I;oe++){const se=f+oe+j*G,le=f+oe+j*(G+1),pe=f+(oe+1)+j*(G+1),we=f+(oe+1)+j*G;l.push(se,le,we),l.push(le,pe,we),V+=6}a.addGroup(d,V,A),d+=V,f+=q}}static fromJSON(e){return new Es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Pt(i){const e={};for(let t=0;t<i.length;t++){const n=Lr(i[t]);for(const r in n)e[r]=n[r]}return e}function u_(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const h_={clone:Lr,merge:Pt};var f_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,d_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vt extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=f_,this.fragmentShader=d_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lr(e.uniforms),this.uniformsGroups=u_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sd extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends sd{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=90,or=1;class p_ extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Dt(sr,or,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new R(1,0,0)),this.add(r);const s=new Dt(sr,or,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new R(-1,0,0)),this.add(s);const o=new Dt(sr,or,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new R(0,1,0)),this.add(o);const a=new Dt(sr,or,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new R(0,-1,0)),this.add(a);const l=new Dt(sr,or,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new R(0,0,1)),this.add(l);const c=new Dt(sr,or,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new R(0,0,-1)),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Hn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class od extends Ft{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Er,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class m_ extends Vi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new od(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Es(5,5,5),s=new Vt({name:"CubemapFromEquirect",uniforms:Lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ci});s.uniforms.tEquirect.value=t;const o=new Bt(r,s),a=t.minFilter;return t.minFilter===$o&&(t.minFilter=en),new p_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const ka=new R,g_=new R,__=new jt;class Ei{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ka.subVectors(n,t).cross(g_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(ka),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||__.getNormalMatrix(e),r=this.coplanarPoint(ka).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Ts,Qs=new R;class cc{constructor(e=new Ei,t=new Ei,n=new Ei,r=new Ei,s=new Ei,o=new Ei){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],w=n[14],x=n[15];return t[0].setComponents(a-r,h-l,m-f,x-p).normalize(),t[1].setComponents(a+r,h+l,m+f,x+p).normalize(),t[2].setComponents(a+s,h+c,m+d,x+_).normalize(),t[3].setComponents(a-s,h-c,m-d,x-_).normalize(),t[4].setComponents(a-o,h-u,m-g,x-w).normalize(),t[5].setComponents(a+o,h+u,m+g,x+w).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Qs.x=r.normal.x>0?e.max.x:e.min.x,Qs.y=r.normal.y>0?e.max.y:e.min.y,Qs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ad(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function v_(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,d=u.updateRange;i.bindBuffer(h,c),d.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Ko extends pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,d=[],g=[],m=[],p=[];for(let _=0;_<u;_++){const w=_*f-o;for(let x=0;x<c;x++){const b=x*h-s;g.push(b,-w,0),m.push(0,0,1),p.push(x/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let w=0;w<a;w++){const x=w+c*_,b=w+c*(_+1),M=w+1+c*(_+1),E=w+1+c*_;d.push(x,b,E),d.push(b,M,E)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(m,3)),this.setAttribute("uv",new it(p,2))}static fromJSON(e){return new Ko(e.width,e.height,e.widthSegments,e.heightSegments)}}var x_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,b_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,S_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T_="vec3 transformed = vec3( position );",E_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,A_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,C_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,L_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,N_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,U_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,B_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,k_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,V_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,H_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,X_="gl_FragColor = linearToOutputTexel( gl_FragColor );",j_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,q_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,J_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Q_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,av=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,cv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,dv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,pv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,bv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Av=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Dv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Rv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Iv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Uv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,kv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$v=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zv=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Kv=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Jv=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Qv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,cx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ux=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,hx=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,fx=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,px=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,mx=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,wx=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Tx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ex=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Px=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Dx=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ix=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Gx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,$x=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ze={alphamap_fragment:x_,alphamap_pars_fragment:y_,alphatest_fragment:M_,alphatest_pars_fragment:b_,aomap_fragment:w_,aomap_pars_fragment:S_,begin_vertex:T_,beginnormal_vertex:E_,bsdfs:A_,iridescence_fragment:C_,bumpmap_pars_fragment:L_,clipping_planes_fragment:P_,clipping_planes_pars_fragment:D_,clipping_planes_pars_vertex:R_,clipping_planes_vertex:I_,color_fragment:F_,color_pars_fragment:O_,color_pars_vertex:z_,color_vertex:N_,common:U_,cube_uv_reflection_fragment:B_,defaultnormal_vertex:k_,displacementmap_pars_vertex:V_,displacementmap_vertex:G_,emissivemap_fragment:H_,emissivemap_pars_fragment:W_,encodings_fragment:X_,encodings_pars_fragment:j_,envmap_fragment:q_,envmap_common_pars_fragment:Y_,envmap_pars_fragment:$_,envmap_pars_vertex:Z_,envmap_physical_pars_fragment:lv,envmap_vertex:K_,fog_vertex:J_,fog_pars_vertex:Q_,fog_fragment:ev,fog_pars_fragment:tv,gradientmap_pars_fragment:nv,lightmap_fragment:iv,lightmap_pars_fragment:rv,lights_lambert_fragment:sv,lights_lambert_pars_fragment:ov,lights_pars_begin:av,lights_toon_fragment:cv,lights_toon_pars_fragment:uv,lights_phong_fragment:hv,lights_phong_pars_fragment:fv,lights_physical_fragment:dv,lights_physical_pars_fragment:pv,lights_fragment_begin:mv,lights_fragment_maps:gv,lights_fragment_end:_v,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:xv,logdepthbuf_pars_vertex:yv,logdepthbuf_vertex:Mv,map_fragment:bv,map_pars_fragment:wv,map_particle_fragment:Sv,map_particle_pars_fragment:Tv,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:Av,morphcolor_vertex:Cv,morphnormal_vertex:Lv,morphtarget_pars_vertex:Pv,morphtarget_vertex:Dv,normal_fragment_begin:Rv,normal_fragment_maps:Iv,normal_pars_fragment:Fv,normal_pars_vertex:Ov,normal_vertex:zv,normalmap_pars_fragment:Nv,clearcoat_normal_fragment_begin:Uv,clearcoat_normal_fragment_maps:Bv,clearcoat_pars_fragment:kv,iridescence_pars_fragment:Vv,output_fragment:Gv,packing:Hv,premultiplied_alpha_fragment:Wv,project_vertex:Xv,dithering_fragment:jv,dithering_pars_fragment:qv,roughnessmap_fragment:Yv,roughnessmap_pars_fragment:$v,shadowmap_pars_fragment:Zv,shadowmap_pars_vertex:Kv,shadowmap_vertex:Jv,shadowmask_pars_fragment:Qv,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:rx,specularmap_pars_fragment:sx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:lx,transmission_pars_fragment:cx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:fx,uv2_pars_fragment:dx,uv2_pars_vertex:px,uv2_vertex:mx,worldpos_vertex:gx,background_vert:_x,background_frag:vx,backgroundCube_vert:xx,backgroundCube_frag:yx,cube_vert:Mx,cube_frag:bx,depth_vert:wx,depth_frag:Sx,distanceRGBA_vert:Tx,distanceRGBA_frag:Ex,equirect_vert:Ax,equirect_frag:Cx,linedashed_vert:Lx,linedashed_frag:Px,meshbasic_vert:Dx,meshbasic_frag:Rx,meshlambert_vert:Ix,meshlambert_frag:Fx,meshmatcap_vert:Ox,meshmatcap_frag:zx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Bx,meshphong_frag:kx,meshphysical_vert:Vx,meshphysical_frag:Gx,meshtoon_vert:Hx,meshtoon_frag:Wx,points_vert:Xx,points_frag:jx,shadow_vert:qx,shadow_frag:Yx,sprite_vert:$x,sprite_frag:Zx},me={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new jt},uv2Transform:{value:new jt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new jt}}},wn={basic:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Pt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Pt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Pe(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Pt([me.points,me.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Pt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Pt([me.common,me.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Pt([me.sprite,me.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Pt([me.common,me.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Pt([me.lights,me.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};wn.physical={uniforms:Pt([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};function Kx(i,e,t,n,r,s,o){const a=new Pe(0);let l=s===!0?0:1,c,u,h=null,f=0,d=null;function g(p,_){let w=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const b=i.xr,M=b.getSession&&b.getSession();M&&M.environmentBlendMode==="additive"&&(x=null),x===null?m(a,l):x&&x.isColor&&(m(x,1),w=!0),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Yo)?(u===void 0&&(u=new Bt(new Es(1,1,1),new Vt({name:"BackgroundCubeMaterial",uniforms:Lr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,I,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(h!==x||f!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Bt(new Ko(2,2),new Vt({name:"BackgroundMaterial",uniforms:Lr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){n.buffers.color.setClear(p.r,p.g,p.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:g}}function Jx(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function h(F,j,X,q,V){let U=!1;if(o){const G=m(q,X,j);c!==G&&(c=G,d(c.object)),U=_(F,q,X,V),U&&w(F,q,X,V)}else{const G=j.wireframe===!0;(c.geometry!==q.id||c.program!==X.id||c.wireframe!==G)&&(c.geometry=q.id,c.program=X.id,c.wireframe=G,U=!0)}V!==null&&t.update(V,34963),(U||u)&&(u=!1,v(F,j,X,q),V!==null&&i.bindBuffer(34963,t.get(V).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function g(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function m(F,j,X){const q=X.wireframe===!0;let V=a[F.id];V===void 0&&(V={},a[F.id]=V);let U=V[j.id];U===void 0&&(U={},V[j.id]=U);let G=U[q];return G===void 0&&(G=p(f()),U[q]=G),G}function p(F){const j=[],X=[],q=[];for(let V=0;V<r;V++)j[V]=0,X[V]=0,q[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:X,attributeDivisors:q,object:F,attributes:{},index:null}}function _(F,j,X,q){const V=c.attributes,U=j.attributes;let G=0;const oe=X.getAttributes();for(const se in oe)if(oe[se].location>=0){const pe=V[se];let we=U[se];if(we===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(we=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(we=F.instanceColor)),pe===void 0||pe.attribute!==we||we&&pe.data!==we.data)return!0;G++}return c.attributesNum!==G||c.index!==q}function w(F,j,X,q){const V={},U=j.attributes;let G=0;const oe=X.getAttributes();for(const se in oe)if(oe[se].location>=0){let pe=U[se];pe===void 0&&(se==="instanceMatrix"&&F.instanceMatrix&&(pe=F.instanceMatrix),se==="instanceColor"&&F.instanceColor&&(pe=F.instanceColor));const we={};we.attribute=pe,pe&&pe.data&&(we.data=pe.data),V[se]=we,G++}c.attributes=V,c.attributesNum=G,c.index=q}function x(){const F=c.newAttributes;for(let j=0,X=F.length;j<X;j++)F[j]=0}function b(F){M(F,0)}function M(F,j){const X=c.newAttributes,q=c.enabledAttributes,V=c.attributeDivisors;X[F]=1,q[F]===0&&(i.enableVertexAttribArray(F),q[F]=1),V[F]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,j),V[F]=j)}function E(){const F=c.newAttributes,j=c.enabledAttributes;for(let X=0,q=j.length;X<q;X++)j[X]!==F[X]&&(i.disableVertexAttribArray(X),j[X]=0)}function I(F,j,X,q,V,U){n.isWebGL2===!0&&(X===5124||X===5125)?i.vertexAttribIPointer(F,j,X,V,U):i.vertexAttribPointer(F,j,X,q,V,U)}function v(F,j,X,q){if(n.isWebGL2===!1&&(F.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const V=q.attributes,U=X.getAttributes(),G=j.defaultAttributeValues;for(const oe in U){const se=U[oe];if(se.location>=0){let le=V[oe];if(le===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),le!==void 0){const pe=le.normalized,we=le.itemSize,Z=t.get(le);if(Z===void 0)continue;const Fe=Z.buffer,Te=Z.type,Ae=Z.bytesPerElement;if(le.isInterleavedBufferAttribute){const xe=le.data,Ge=xe.stride,C=le.offset;if(xe.isInstancedInterleavedBuffer){for(let P=0;P<se.locationSize;P++)M(se.location+P,xe.meshPerAttribute);F.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let P=0;P<se.locationSize;P++)b(se.location+P);i.bindBuffer(34962,Fe);for(let P=0;P<se.locationSize;P++)I(se.location+P,we/se.locationSize,Te,pe,Ge*Ae,(C+we/se.locationSize*P)*Ae)}else{if(le.isInstancedBufferAttribute){for(let xe=0;xe<se.locationSize;xe++)M(se.location+xe,le.meshPerAttribute);F.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let xe=0;xe<se.locationSize;xe++)b(se.location+xe);i.bindBuffer(34962,Fe);for(let xe=0;xe<se.locationSize;xe++)I(se.location+xe,we/se.locationSize,Te,pe,we*Ae,we/se.locationSize*xe*Ae)}}else if(G!==void 0){const pe=G[oe];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(se.location,pe);break;case 3:i.vertexAttrib3fv(se.location,pe);break;case 4:i.vertexAttrib4fv(se.location,pe);break;default:i.vertexAttrib1fv(se.location,pe)}}}}E()}function A(){K();for(const F in a){const j=a[F];for(const X in j){const q=j[X];for(const V in q)g(q[V].object),delete q[V];delete j[X]}delete a[F]}}function D(F){if(a[F.id]===void 0)return;const j=a[F.id];for(const X in j){const q=j[X];for(const V in q)g(q[V].object),delete q[V];delete j[X]}delete a[F.id]}function Y(F){for(const j in a){const X=a[j];if(X[F.id]===void 0)continue;const q=X[F.id];for(const V in q)g(q[V].object),delete q[V];delete X[F.id]}}function K(){z(),u=!0,c!==l&&(c=l,d(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:z,dispose:A,releaseStatesOfGeometry:D,releaseStatesOfProgram:Y,initAttributes:x,enableAttribute:b,disableUnusedAttributes:E}}function Qx(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,d;if(r)f=i,d="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function ey(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),d=i.getParameter(3379),g=i.getParameter(34076),m=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),w=i.getParameter(36349),x=f>0,b=o||e.has("OES_texture_float"),M=x&&b,E=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:w,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:M,maxSamples:E}}function ty(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Ei,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f,d){const g=h.length!==0||f||n!==0||r;return r=f,t=u(h,d,0),n=h.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,c()},this.setState=function(h,f,d){const g=h.clippingPlanes,m=h.clipIntersection,p=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const w=s?0:n,x=w*4;let b=_.clippingState||null;l.value=b,b=u(g,f,x,d);for(let M=0;M!==x;++M)b[M]=t[M];_.clippingState=b,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){const m=h!==null?h.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=d+m*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,b=d;x!==m;++x,b+=4)o.copy(h[x]).applyMatrix4(w,a),o.normal.toArray(p,b),p[b+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function ny(i){let e=new WeakMap;function t(o,a){return a===Eo?o.mapping=Er:a===xl&&(o.mapping=Ar),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Eo||a===xl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new m_(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class uc extends sd{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const mr=4,nh=[.125,.215,.35,.446,.526,.582],Di=20,Va=new uc,ih=new Pe;let Ga=null;const Ai=(1+Math.sqrt(5))/2,lr=1/Ai,rh=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Ai,lr),new R(0,Ai,-lr),new R(lr,0,Ai),new R(-lr,0,Ai),new R(Ai,lr,0),new R(-Ai,lr,0)];class sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ga=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ga),e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Er||e.mapping===Ar?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ga=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ms,format:tn,encoding:ki,depthBuffer:!1},r=oh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iy(s)),this._blurMaterial=ry(s,e,t)}return r}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,n,r){const a=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(ih),u.toneMapping=Hn,u.autoClear=!1;const d=new id({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Bt(new Es,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(ih),m=!0);for(let _=0;_<6;_++){const w=_%3;w===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):w===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;eo(r,w*x,_>2?x:0,x,x),u.setRenderTarget(r),m&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Er||e.mapping===Ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ah());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;eo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Va)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=rh[(r-1)%rh.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(this._lodPlanes[r],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Di-1),m=s/g,p=isFinite(s)?1+Math.floor(u*m):Di;p>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const _=[];let w=0;for(let I=0;I<Di;++I){const v=I/m,A=Math.exp(-v*v/2);_.push(A),I===0?w+=A:I<p&&(w+=2*A)}for(let I=0;I<_.length;I++)_[I]=_[I]/w;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const b=this._sizeLods[r],M=3*b*(r>x-mr?r-x+mr:0),E=4*(this._cubeSize-b);eo(t,M,E,3*b,2*b),l.setRenderTarget(t),l.render(h,Va)}}function iy(i){const e=[],t=[],n=[];let r=i;const s=i-mr+1+nh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-mr?l=nh[o-i+mr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,m=3,p=2,_=1,w=new Float32Array(m*g*d),x=new Float32Array(p*g*d),b=new Float32Array(_*g*d);for(let E=0;E<d;E++){const I=E%3*2/3-1,v=E>2?0:-1,A=[I,v,0,I+2/3,v,0,I+2/3,v+1,0,I,v,0,I+2/3,v+1,0,I,v+1,0];w.set(A,m*g*E),x.set(f,p*g*E);const D=[E,E,E,E,E,E];b.set(D,_*g*E)}const M=new pt;M.setAttribute("position",new Ut(w,m)),M.setAttribute("uv",new Ut(x,p)),M.setAttribute("faceIndex",new Ut(b,_)),e.push(M),r>mr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function oh(i,e,t){const n=new Vi(i,e,t);return n.texture.mapping=Yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function ry(i,e,t){const n=new Float32Array(Di),r=new R(0,1,0);return new Vt({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ah(){return new Vt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function lh(){return new Vt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sy(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Eo||l===xl,u=l===Er||l===Ar;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new sh(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new sh(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function oy(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function ay(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const d=h.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let m=0;if(d!==null){const w=d.array;m=d.version;for(let x=0,b=w.length;x<b;x+=3){const M=w[x+0],E=w[x+1],I=w[x+2];f.push(M,E,E,I,I,M)}}else{const w=g.array;m=g.version;for(let x=0,b=w.length/3-1;x<b;x+=3){const M=x+0,E=x+1,I=x+2;f.push(M,E,E,I,I,M)}}const p=new(Jf(f)?rd:lc)(f,1);p.version=m;const _=s.get(h);_&&e.remove(_),s.set(h,p)}function u(h){const f=s.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function ly(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,d){i.drawElements(s,d,a,f*l),t.update(d,s,1)}function h(f,d,g){if(g===0)return;let m,p;if(r)m=i,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,f*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function cy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function uy(i,e){return i[0]-e[0]}function hy(i,e){return Math.abs(e[1])-Math.abs(i[1])}function fy(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Ye,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let _=s.get(u);if(_===void 0||_.count!==p){let X=function(){F.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var g=X;_!==void 0&&_.texture.dispose();const b=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let D=0;b===!0&&(D=1),M===!0&&(D=2),E===!0&&(D=3);let Y=u.attributes.position.count*D,K=1;Y>e.maxTextureSize&&(K=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const z=new Float32Array(Y*K*4*p),F=new nd(z,Y,K,p);F.type=oi,F.needsUpdate=!0;const j=D*4;for(let q=0;q<p;q++){const V=I[q],U=v[q],G=A[q],oe=Y*K*4*q;for(let se=0;se<V.count;se++){const le=se*j;b===!0&&(o.fromBufferAttribute(V,se),z[oe+le+0]=o.x,z[oe+le+1]=o.y,z[oe+le+2]=o.z,z[oe+le+3]=0),M===!0&&(o.fromBufferAttribute(U,se),z[oe+le+4]=o.x,z[oe+le+5]=o.y,z[oe+le+6]=o.z,z[oe+le+7]=0),E===!0&&(o.fromBufferAttribute(G,se),z[oe+le+8]=o.x,z[oe+le+9]=o.y,z[oe+le+10]=o.z,z[oe+le+11]=G.itemSize===4?o.w:1)}}_={count:p,texture:F,size:new Ie(Y,K)},s.set(u,_),u.addEventListener("dispose",X)}let w=0;for(let b=0;b<d.length;b++)w+=d[b];const x=u.morphTargetsRelative?1:1-w;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",d),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let M=0;M<m;M++)p[M]=[M,0];n[u.id]=p}for(let M=0;M<m;M++){const E=p[M];E[0]=M,E[1]=d[M]}p.sort(hy);for(let M=0;M<8;M++)M<m&&p[M][1]?(a[M][0]=p[M][0],a[M][1]=p[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(uy);const _=u.morphAttributes.position,w=u.morphAttributes.normal;let x=0;for(let M=0;M<8;M++){const E=a[M],I=E[0],v=E[1];I!==Number.MAX_SAFE_INTEGER&&v?(_&&u.getAttribute("morphTarget"+M)!==_[I]&&u.setAttribute("morphTarget"+M,_[I]),w&&u.getAttribute("morphNormal"+M)!==w[I]&&u.setAttribute("morphNormal"+M,w[I]),r[M]=v,x+=v):(_&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),w&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const b=u.morphTargetsRelative?1:1-x;f.getUniforms().setValue(i,"morphTargetBaseInfluence",b),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function dy(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const ld=new Ft,cd=new nd,ud=new Q0,hd=new od,ch=[],uh=[],hh=new Float32Array(16),fh=new Float32Array(9),dh=new Float32Array(4);function Or(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ch[r];if(s===void 0&&(s=new Float32Array(r),ch[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jo(i,e){let t=uh[e];t===void 0&&(t=new Int32Array(e),uh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function py(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function my(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),gt(t,e)}}function gy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),gt(t,e)}}function _y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),gt(t,e)}}function vy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;dh.set(n),i.uniformMatrix2fv(this.addr,!1,dh),gt(t,n)}}function xy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;fh.set(n),i.uniformMatrix3fv(this.addr,!1,fh),gt(t,n)}}function yy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gt(t,e)}else{if(mt(t,n))return;hh.set(n),i.uniformMatrix4fv(this.addr,!1,hh),gt(t,n)}}function My(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function by(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),gt(t,e)}}function wy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),gt(t,e)}}function Sy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),gt(t,e)}}function Ty(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ey(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),gt(t,e)}}function Ay(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),gt(t,e)}}function Cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),gt(t,e)}}function Ly(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||ld,r)}function Py(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ud,r)}function Dy(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||hd,r)}function Ry(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||cd,r)}function Iy(i){switch(i){case 5126:return py;case 35664:return my;case 35665:return gy;case 35666:return _y;case 35674:return vy;case 35675:return xy;case 35676:return yy;case 5124:case 35670:return My;case 35667:case 35671:return by;case 35668:case 35672:return wy;case 35669:case 35673:return Sy;case 5125:return Ty;case 36294:return Ey;case 36295:return Ay;case 36296:return Cy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Py;case 35680:case 36300:case 36308:case 36293:return Dy;case 36289:case 36303:case 36311:case 36292:return Ry}}function Fy(i,e){i.uniform1fv(this.addr,e)}function Oy(i,e){const t=Or(e,this.size,2);i.uniform2fv(this.addr,t)}function zy(i,e){const t=Or(e,this.size,3);i.uniform3fv(this.addr,t)}function Ny(i,e){const t=Or(e,this.size,4);i.uniform4fv(this.addr,t)}function Uy(i,e){const t=Or(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function By(i,e){const t=Or(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ky(i,e){const t=Or(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Vy(i,e){i.uniform1iv(this.addr,e)}function Gy(i,e){i.uniform2iv(this.addr,e)}function Hy(i,e){i.uniform3iv(this.addr,e)}function Wy(i,e){i.uniform4iv(this.addr,e)}function Xy(i,e){i.uniform1uiv(this.addr,e)}function jy(i,e){i.uniform2uiv(this.addr,e)}function qy(i,e){i.uniform3uiv(this.addr,e)}function Yy(i,e){i.uniform4uiv(this.addr,e)}function $y(i,e,t){const n=this.cache,r=e.length,s=Jo(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ld,s[o])}function Zy(i,e,t){const n=this.cache,r=e.length,s=Jo(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ud,s[o])}function Ky(i,e,t){const n=this.cache,r=e.length,s=Jo(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||hd,s[o])}function Jy(i,e,t){const n=this.cache,r=e.length,s=Jo(t,r);mt(n,s)||(i.uniform1iv(this.addr,s),gt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||cd,s[o])}function Qy(i){switch(i){case 5126:return Fy;case 35664:return Oy;case 35665:return zy;case 35666:return Ny;case 35674:return Uy;case 35675:return By;case 35676:return ky;case 5124:case 35670:return Vy;case 35667:case 35671:return Gy;case 35668:case 35672:return Hy;case 35669:case 35673:return Wy;case 5125:return Xy;case 36294:return jy;case 36295:return qy;case 36296:return Yy;case 35678:case 36198:case 36298:case 36306:case 35682:return $y;case 35679:case 36299:case 36307:return Zy;case 35680:case 36300:case 36308:case 36293:return Ky;case 36289:case 36303:case 36311:case 36292:return Jy}}class eM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Iy(t.type)}}class tM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Qy(t.type)}}class nM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function ph(i,e){i.seq.push(e),i.map[e.id]=e}function iM(i,e,t){const n=i.name,r=n.length;for(Ha.lastIndex=0;;){const s=Ha.exec(n),o=Ha.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ph(t,c===void 0?new eM(a,i,e):new tM(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new nM(a),ph(t,h)),t=h}}}class go{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);iM(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function mh(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let rM=0;function sM(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function oM(i){switch(i){case ki:return["Linear","( value )"];case tt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function gh(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+sM(i.getShaderSource(e),o)}else return r}function aM(i,e){const t=oM(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function lM(i,e){let t;switch(e){case d0:t="Linear";break;case p0:t="Reinhard";break;case m0:t="OptimizedCineon";break;case g0:t="ACESFilmic";break;case _0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function cM(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function uM(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hM(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ns(i){return i!==""}function _h(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fM=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(i){return i.replace(fM,dM)}function dM(i,e){const t=ze[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wl(t)}const pM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xh(i){return i.replace(pM,mM)}function mM(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yh(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function gM(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===es&&(e="SHADOWMAP_TYPE_VSM"),e}function _M(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Er:case Ar:e="ENVMAP_TYPE_CUBE";break;case Yo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vM(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ar:e="ENVMAP_MODE_REFRACTION";break}return e}function xM(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case qo:e="ENVMAP_BLENDING_MULTIPLY";break;case h0:e="ENVMAP_BLENDING_MIX";break;case f0:e="ENVMAP_BLENDING_ADD";break}return e}function yM(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function MM(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=gM(t),c=_M(t),u=vM(t),h=xM(t),f=yM(t),d=t.isWebGL2?"":cM(t),g=uM(s),m=r.createProgram();let p,_,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(ns).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(ns).join(`
`),_.length>0&&(_+=`
`)):(p=[yh(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),_=[d,yh(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hn?"#define TONE_MAPPING":"",t.toneMapping!==Hn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Hn?lM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.encodings_pars_fragment,aM("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=wl(o),o=_h(o,t),o=vh(o,t),a=wl(a),a=_h(a,t),a=vh(a,t),o=xh(o),a=xh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=w+p+o,b=w+_+a,M=mh(r,35633,x),E=mh(r,35632,b);if(r.attachShader(m,M),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),i.debug.checkShaderErrors){const A=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(M).trim(),Y=r.getShaderInfoLog(E).trim();let K=!0,z=!0;if(r.getProgramParameter(m,35714)===!1){K=!1;const F=gh(r,M,"vertex"),j=gh(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,35715)+`

Program Info Log: `+A+`
`+F+`
`+j)}else A!==""?console.warn("THREE.WebGLProgram: Program Info Log:",A):(D===""||Y==="")&&(z=!1);z&&(this.diagnostics={runnable:K,programLog:A,vertexShader:{log:D,prefix:p},fragmentShader:{log:Y,prefix:_}})}r.deleteShader(M),r.deleteShader(E);let I;this.getUniforms=function(){return I===void 0&&(I=new go(r,m)),I};let v;return this.getAttributes=function(){return v===void 0&&(v=hM(r,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=rM++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=E,this}let bM=0;class wM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new SM(e),t.set(e,n)),n}}class SM{constructor(e){this.id=bM++,this.code=e,this.usedTimes=0}}function TM(i,e,t,n,r,s,o){const a=new ac,l=new wM,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,A,D,Y,K){const z=Y.fog,F=K.geometry,j=v.isMeshStandardMaterial?Y.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||j),q=!!X&&X.mapping===Yo?X.image.height:null,V=g[v.type];v.precision!==null&&(d=r.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const U=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,G=U!==void 0?U.length:0;let oe=0;F.morphAttributes.position!==void 0&&(oe=1),F.morphAttributes.normal!==void 0&&(oe=2),F.morphAttributes.color!==void 0&&(oe=3);let se,le,pe,we;if(V){const Ge=wn[V];se=Ge.vertexShader,le=Ge.fragmentShader}else se=v.vertexShader,le=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),we=l.getFragmentShaderID(v);const Z=i.getRenderTarget(),Fe=v.alphaTest>0,Te=v.clearcoat>0,Ae=v.iridescence>0;return{isWebGL2:u,shaderID:V,shaderName:v.type,vertexShader:se,fragmentShader:le,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:we,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Z===null?i.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:ki,map:!!v.map,matcap:!!v.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===N0,tangentSpaceNormalMap:v.normalMapType===sc,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===tt,clearcoat:Te,clearcoatMap:Te&&!!v.clearcoatMap,clearcoatRoughnessMap:Te&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!v.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!v.iridescenceMap,iridescenceThicknessMap:Ae&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===yr,alphaMap:!!v.alphaMap,alphaTest:Fe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!F.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||v.transmission>0||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||v.sheen>0||!!v.sheenColorMap||!!v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!z,useFog:v.fog===!0,fogExp2:z&&z.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:K.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Hn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mn,flipSided:v.side===sn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)A.push(D),A.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(A,v),w(A,v),A.push(i.outputEncoding)),A.push(v.customProgramCacheKey),A.join()}function _(v,A){v.push(A.precision),v.push(A.outputEncoding),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.combine),v.push(A.vertexUvs),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function w(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.map&&a.enable(4),A.matcap&&a.enable(5),A.envMap&&a.enable(6),A.lightMap&&a.enable(7),A.aoMap&&a.enable(8),A.emissiveMap&&a.enable(9),A.bumpMap&&a.enable(10),A.normalMap&&a.enable(11),A.objectSpaceNormalMap&&a.enable(12),A.tangentSpaceNormalMap&&a.enable(13),A.clearcoat&&a.enable(14),A.clearcoatMap&&a.enable(15),A.clearcoatRoughnessMap&&a.enable(16),A.clearcoatNormalMap&&a.enable(17),A.iridescence&&a.enable(18),A.iridescenceMap&&a.enable(19),A.iridescenceThicknessMap&&a.enable(20),A.displacementMap&&a.enable(21),A.specularMap&&a.enable(22),A.roughnessMap&&a.enable(23),A.metalnessMap&&a.enable(24),A.gradientMap&&a.enable(25),A.alphaMap&&a.enable(26),A.alphaTest&&a.enable(27),A.vertexColors&&a.enable(28),A.vertexAlphas&&a.enable(29),A.vertexUvs&&a.enable(30),A.vertexTangents&&a.enable(31),A.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.physicallyCorrectLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.specularIntensityMap&&a.enable(15),A.specularColorMap&&a.enable(16),A.transmission&&a.enable(17),A.transmissionMap&&a.enable(18),A.thicknessMap&&a.enable(19),A.sheen&&a.enable(20),A.sheenColorMap&&a.enable(21),A.sheenRoughnessMap&&a.enable(22),A.decodeVideoTexture&&a.enable(23),A.opaque&&a.enable(24),v.push(a.mask)}function x(v){const A=g[v.type];let D;if(A){const Y=wn[A];D=h_.clone(Y.uniforms)}else D=v.uniforms;return D}function b(v,A){let D;for(let Y=0,K=c.length;Y<K;Y++){const z=c[Y];if(z.cacheKey===A){D=z,++D.usedTimes;break}}return D===void 0&&(D=new MM(i,A,v,s),c.push(D)),D}function M(v){if(--v.usedTimes===0){const A=c.indexOf(v);c[A]=c[c.length-1],c.pop(),v.destroy()}}function E(v){l.remove(v)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:b,releaseProgram:M,releaseShaderCache:E,programs:c,dispose:I}}function EM(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function AM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bh(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,d,g,m,p){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:m,group:p},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=d,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=m,_.group=p),e++,_}function a(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?r.push(_):t.push(_)}function l(h,f,d,g,m,p){const _=o(h,f,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||AM),n.length>1&&n.sort(f||Mh),r.length>1&&r.sort(f||Mh)}function u(){for(let h=e,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function CM(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new bh,i.set(n,[o])):r>=s.length?(o=new bh,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function LM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Pe};break;case"SpotLight":t={position:new R,direction:new R,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function PM(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let DM=0;function RM(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function IM(i,e){const t=new LM,n=PM(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new R);const s=new R,o=new Ce,a=new Ce;function l(u,h){let f=0,d=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let m=0,p=0,_=0,w=0,x=0,b=0,M=0,E=0,I=0,v=0;u.sort(RM);const A=h!==!0?Math.PI:1;for(let Y=0,K=u.length;Y<K;Y++){const z=u[Y],F=z.color,j=z.intensity,X=z.distance,q=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)f+=F.r*j*A,d+=F.g*j*A,g+=F.b*j*A;else if(z.isLightProbe)for(let V=0;V<9;V++)r.probe[V].addScaledVector(z.sh.coefficients[V],j);else if(z.isDirectionalLight){const V=t.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*A),z.castShadow){const U=z.shadow,G=n.get(z);G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,r.directionalShadow[m]=G,r.directionalShadowMap[m]=q,r.directionalShadowMatrix[m]=z.shadow.matrix,b++}r.directional[m]=V,m++}else if(z.isSpotLight){const V=t.get(z);V.position.setFromMatrixPosition(z.matrixWorld),V.color.copy(F).multiplyScalar(j*A),V.distance=X,V.coneCos=Math.cos(z.angle),V.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),V.decay=z.decay,r.spot[_]=V;const U=z.shadow;if(z.map&&(r.spotLightMap[I]=z.map,I++,U.updateMatrices(z),z.castShadow&&v++),r.spotLightMatrix[_]=U.matrix,z.castShadow){const G=n.get(z);G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,r.spotShadow[_]=G,r.spotShadowMap[_]=q,E++}_++}else if(z.isRectAreaLight){const V=t.get(z);V.color.copy(F).multiplyScalar(j),V.halfWidth.set(z.width*.5,0,0),V.halfHeight.set(0,z.height*.5,0),r.rectArea[w]=V,w++}else if(z.isPointLight){const V=t.get(z);if(V.color.copy(z.color).multiplyScalar(z.intensity*A),V.distance=z.distance,V.decay=z.decay,z.castShadow){const U=z.shadow,G=n.get(z);G.shadowBias=U.bias,G.shadowNormalBias=U.normalBias,G.shadowRadius=U.radius,G.shadowMapSize=U.mapSize,G.shadowCameraNear=U.camera.near,G.shadowCameraFar=U.camera.far,r.pointShadow[p]=G,r.pointShadowMap[p]=q,r.pointShadowMatrix[p]=z.shadow.matrix,M++}r.point[p]=V,p++}else if(z.isHemisphereLight){const V=t.get(z);V.skyColor.copy(z.color).multiplyScalar(j*A),V.groundColor.copy(z.groundColor).multiplyScalar(j*A),r.hemi[x]=V,x++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const D=r.hash;(D.directionalLength!==m||D.pointLength!==p||D.spotLength!==_||D.rectAreaLength!==w||D.hemiLength!==x||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==E||D.numSpotMaps!==I)&&(r.directional.length=m,r.spot.length=_,r.rectArea.length=w,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=E+I-v,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=v,D.directionalLength=m,D.pointLength=p,D.spotLength=_,D.rectAreaLength=w,D.hemiLength=x,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=E,D.numSpotMaps=I,r.version=DM++)}function c(u,h){let f=0,d=0,g=0,m=0,p=0;const _=h.matrixWorldInverse;for(let w=0,x=u.length;w<x;w++){const b=u[w];if(b.isDirectionalLight){const M=r.directional[f];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),f++}else if(b.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const M=r.rectArea[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),a.identity(),o.copy(b.matrixWorld),o.premultiply(_),a.extractRotation(o),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),m++}else if(b.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),d++}else if(b.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:r}}function wh(i,e){const t=new IM(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function FM(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new wh(i,e),t.set(s,[l])):o>=a.length?(l=new wh(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class OM extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zM extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new R,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function BM(i,e,t){let n=new cc;const r=new Ie,s=new Ie,o=new Ye,a=new OM({depthPacking:z0}),l=new zM,c={},u=t.maxTextureSize,h={0:sn,1:Tr,2:mn},f=new Vt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:NM,fragmentShader:UM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new pt;g.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Bt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jf,this.render=function(b,M,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const I=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),D=i.state;D.setBlending(ci),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let Y=0,K=b.length;Y<K;Y++){const z=b[Y],F=z.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();if(r.multiply(j),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,F.mapSize.y=s.y)),F.map===null){const q=this.type!==es?{minFilter:St,magFilter:St}:{};F.map=new Vi(r.x,r.y,q),F.map.texture.name=z.name+".shadowMap",F.camera.updateProjectionMatrix()}i.setRenderTarget(F.map),i.clear();const X=F.getViewportCount();for(let q=0;q<X;q++){const V=F.getViewport(q);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),D.viewport(o),F.updateMatrices(z,q),n=F.getFrustum(),x(M,E,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===es&&_(F,E),F.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(I,v,A)};function _(b,M){const E=e.update(m);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Vi(r.x,r.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(M,null,E,f,m,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(M,null,E,d,m,null)}function w(b,M,E,I,v,A){let D=null;const Y=E.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(Y!==void 0?D=Y:D=E.isPointLight===!0?l:a,i.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){const K=D.uuid,z=M.uuid;let F=c[K];F===void 0&&(F={},c[K]=F);let j=F[z];j===void 0&&(j=D.clone(),F[z]=j),D=j}return D.visible=M.visible,D.wireframe=M.wireframe,A===es?D.side=M.shadowSide!==null?M.shadowSide:M.side:D.side=M.shadowSide!==null?M.shadowSide:h[M.side],D.alphaMap=M.alphaMap,D.alphaTest=M.alphaTest,D.clipShadows=M.clipShadows,D.clippingPlanes=M.clippingPlanes,D.clipIntersection=M.clipIntersection,D.displacementMap=M.displacementMap,D.displacementScale=M.displacementScale,D.displacementBias=M.displacementBias,D.wireframeLinewidth=M.wireframeLinewidth,D.linewidth=M.linewidth,E.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(E.matrixWorld),D.nearDistance=I,D.farDistance=v),D}function x(b,M,E,I,v){if(b.visible===!1)return;if(b.layers.test(M.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===es)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),K=b.material;if(Array.isArray(K)){const z=Y.groups;for(let F=0,j=z.length;F<j;F++){const X=z[F],q=K[X.materialIndex];if(q&&q.visible){const V=w(b,q,I,E.near,E.far,v);i.renderBufferDirect(E,null,Y,V,b,X)}}}else if(K.visible){const z=w(b,K,I,E.near,E.far,v);i.renderBufferDirect(E,null,Y,z,b,null)}}const D=b.children;for(let Y=0,K=D.length;Y<K;Y++)x(D[Y],M,E,I,v)}}function kM(i,e,t){const n=t.isWebGL2;function r(){let O=!1;const ne=new Ye;let de=null;const be=new Ye(0,0,0,0);return{setMask:function(Ee){de!==Ee&&!O&&(i.colorMask(Ee,Ee,Ee,Ee),de=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,$e,_t,bt,_i){_i===!0&&(Ee*=bt,$e*=bt,_t*=bt),ne.set(Ee,$e,_t,bt),be.equals(ne)===!1&&(i.clearColor(Ee,$e,_t,bt),be.copy(ne))},reset:function(){O=!1,de=null,be.set(-1,0,0,0)}}}function s(){let O=!1,ne=null,de=null,be=null;return{setTest:function(Ee){Ee?Fe(2929):Te(2929)},setMask:function(Ee){ne!==Ee&&!O&&(i.depthMask(Ee),ne=Ee)},setFunc:function(Ee){if(de!==Ee){switch(Ee){case r0:i.depthFunc(512);break;case s0:i.depthFunc(519);break;case o0:i.depthFunc(513);break;case vl:i.depthFunc(515);break;case a0:i.depthFunc(514);break;case l0:i.depthFunc(518);break;case c0:i.depthFunc(516);break;case u0:i.depthFunc(517);break;default:i.depthFunc(515)}de=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){be!==Ee&&(i.clearDepth(Ee),be=Ee)},reset:function(){O=!1,ne=null,de=null,be=null}}}function o(){let O=!1,ne=null,de=null,be=null,Ee=null,$e=null,_t=null,bt=null,_i=null;return{setTest:function(st){O||(st?Fe(2960):Te(2960))},setMask:function(st){ne!==st&&!O&&(i.stencilMask(st),ne=st)},setFunc:function(st,Rn,$t){(de!==st||be!==Rn||Ee!==$t)&&(i.stencilFunc(st,Rn,$t),de=st,be=Rn,Ee=$t)},setOp:function(st,Rn,$t){($e!==st||_t!==Rn||bt!==$t)&&(i.stencilOp(st,Rn,$t),$e=st,_t=Rn,bt=$t)},setLocked:function(st){O=st},setClear:function(st){_i!==st&&(i.clearStencil(st),_i=st)},reset:function(){O=!1,ne=null,de=null,be=null,Ee=null,$e=null,_t=null,bt=null,_i=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},d={},g=new WeakMap,m=[],p=null,_=!1,w=null,x=null,b=null,M=null,E=null,I=null,v=null,A=!1,D=null,Y=null,K=null,z=null,F=null;const j=i.getParameter(35661);let X=!1,q=0;const V=i.getParameter(7938);V.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=q>=1):V.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=q>=2);let U=null,G={};const oe=i.getParameter(3088),se=i.getParameter(2978),le=new Ye().fromArray(oe),pe=new Ye().fromArray(se);function we(O,ne,de){const be=new Uint8Array(4),Ee=i.createTexture();i.bindTexture(O,Ee),i.texParameteri(O,10241,9728),i.texParameteri(O,10240,9728);for(let $e=0;$e<de;$e++)i.texImage2D(ne+$e,0,6408,1,1,0,6408,5121,be);return Ee}const Z={};Z[3553]=we(3553,3553,1),Z[34067]=we(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(2929),l.setFunc(vl),J(!1),ue(hu),Fe(2884),W(ci);function Fe(O){f[O]!==!0&&(i.enable(O),f[O]=!0)}function Te(O){f[O]!==!1&&(i.disable(O),f[O]=!1)}function Ae(O,ne){return d[O]!==ne?(i.bindFramebuffer(O,ne),d[O]=ne,n&&(O===36009&&(d[36160]=ne),O===36160&&(d[36009]=ne)),!0):!1}function xe(O,ne){let de=m,be=!1;if(O)if(de=g.get(ne),de===void 0&&(de=[],g.set(ne,de)),O.isWebGLMultipleRenderTargets){const Ee=O.texture;if(de.length!==Ee.length||de[0]!==36064){for(let $e=0,_t=Ee.length;$e<_t;$e++)de[$e]=36064+$e;de.length=Ee.length,be=!0}}else de[0]!==36064&&(de[0]=36064,be=!0);else de[0]!==1029&&(de[0]=1029,be=!0);be&&(t.isWebGL2?i.drawBuffers(de):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(de))}function Ge(O){return p!==O?(i.useProgram(O),p=O,!0):!1}const C={[ur]:32774,[qg]:32778,[Yg]:32779};if(n)C[mu]=32775,C[gu]=32776;else{const O=e.get("EXT_blend_minmax");O!==null&&(C[mu]=O.MIN_EXT,C[gu]=O.MAX_EXT)}const P={[$g]:0,[Zg]:1,[Kg]:768,[qf]:770,[i0]:776,[t0]:774,[Qg]:772,[Jg]:769,[Yf]:771,[n0]:775,[e0]:773};function W(O,ne,de,be,Ee,$e,_t,bt){if(O===ci){_===!0&&(Te(3042),_=!1);return}if(_===!1&&(Fe(3042),_=!0),O!==jg){if(O!==w||bt!==A){if((x!==ur||E!==ur)&&(i.blendEquation(32774),x=ur,E=ur),bt)switch(O){case yr:i.blendFuncSeparate(1,771,1,771);break;case fu:i.blendFunc(1,1);break;case du:i.blendFuncSeparate(0,769,0,1);break;case pu:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case yr:i.blendFuncSeparate(770,771,1,771);break;case fu:i.blendFunc(770,1);break;case du:i.blendFuncSeparate(0,769,0,1);break;case pu:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}b=null,M=null,I=null,v=null,w=O,A=bt}return}Ee=Ee||ne,$e=$e||de,_t=_t||be,(ne!==x||Ee!==E)&&(i.blendEquationSeparate(C[ne],C[Ee]),x=ne,E=Ee),(de!==b||be!==M||$e!==I||_t!==v)&&(i.blendFuncSeparate(P[de],P[be],P[$e],P[_t]),b=de,M=be,I=$e,v=_t),w=O,A=null}function ee(O,ne){O.side===mn?Te(2884):Fe(2884);let de=O.side===sn;ne&&(de=!de),J(de),O.blending===yr&&O.transparent===!1?W(ci):W(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.premultipliedAlpha),l.setFunc(O.depthFunc),l.setTest(O.depthTest),l.setMask(O.depthWrite),a.setMask(O.colorWrite);const be=O.stencilWrite;c.setTest(be),be&&(c.setMask(O.stencilWriteMask),c.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),c.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Fe(32926):Te(32926)}function J(O){D!==O&&(O?i.frontFace(2304):i.frontFace(2305),D=O)}function ue(O){O!==Hg?(Fe(2884),O!==Y&&(O===hu?i.cullFace(1029):O===Wg?i.cullFace(1028):i.cullFace(1032))):Te(2884),Y=O}function he(O){O!==K&&(X&&i.lineWidth(O),K=O)}function re(O,ne,de){O?(Fe(32823),(z!==ne||F!==de)&&(i.polygonOffset(ne,de),z=ne,F=de)):Te(32823)}function fe(O){O?Fe(3089):Te(3089)}function ae(O){O===void 0&&(O=33984+j-1),U!==O&&(i.activeTexture(O),U=O)}function S(O,ne,de){de===void 0&&(U===null?de=33984+j-1:de=U);let be=G[de];be===void 0&&(be={type:void 0,texture:void 0},G[de]=be),(be.type!==O||be.texture!==ne)&&(U!==de&&(i.activeTexture(de),U=de),i.bindTexture(O,ne||Z[O]),be.type=O,be.texture=ne)}function y(){const O=G[U];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function N(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ge(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function L(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function B(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _e(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(O){le.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function ye(O){pe.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),pe.copy(O))}function De(O,ne){let de=h.get(ne);de===void 0&&(de=new WeakMap,h.set(ne,de));let be=de.get(O);be===void 0&&(be=i.getUniformBlockIndex(ne,O.name),de.set(O,be))}function Be(O,ne){const be=h.get(ne).get(O);u.get(O)!==be&&(i.uniformBlockBinding(ne,be,O.__bindingPointIndex),u.set(O,be))}function et(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},U=null,G={},d={},g=new WeakMap,m=[],p=null,_=!1,w=null,x=null,b=null,M=null,E=null,I=null,v=null,A=!1,D=null,Y=null,K=null,z=null,F=null,le.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Fe,disable:Te,bindFramebuffer:Ae,drawBuffers:xe,useProgram:Ge,setBlending:W,setMaterial:ee,setFlipSided:J,setCullFace:ue,setLineWidth:he,setPolygonOffset:re,setScissorTest:fe,activeTexture:ae,bindTexture:S,unbindTexture:y,compressedTexImage2D:N,compressedTexImage3D:$,texImage2D:Me,texImage3D:ve,updateUBOMapping:De,uniformBlockBinding:Be,texStorage2D:B,texStorage3D:_e,texSubImage2D:te,texSubImage3D:ce,compressedTexSubImage2D:ge,compressedTexSubImage3D:L,scissor:Se,viewport:ye,reset:et}}function VM(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(S,y){return _?new OffscreenCanvas(S,y):_s("canvas")}function x(S,y,N,$){let te=1;if((S.width>$||S.height>$)&&(te=$/Math.max(S.width,S.height)),te<1||y===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const ce=y?Lo:Math.floor,ge=ce(te*S.width),L=ce(te*S.height);m===void 0&&(m=w(ge,L));const B=N?w(ge,L):m;return B.width=ge,B.height=L,B.getContext("2d").drawImage(S,0,0,ge,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ge+"x"+L+")."),B}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function b(S){return bl(S.width)&&bl(S.height)}function M(S){return a?!1:S.wrapS!==Xt||S.wrapT!==Xt||S.minFilter!==St&&S.minFilter!==en}function E(S,y){return S.generateMipmaps&&y&&S.minFilter!==St&&S.minFilter!==en}function I(S){i.generateMipmap(S)}function v(S,y,N,$,te=!1){if(a===!1)return y;if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let ce=y;return y===6403&&(N===5126&&(ce=33326),N===5131&&(ce=33325),N===5121&&(ce=33321)),y===33319&&(N===5126&&(ce=33328),N===5131&&(ce=33327),N===5121&&(ce=33323)),y===6408&&(N===5126&&(ce=34836),N===5131&&(ce=34842),N===5121&&(ce=$===tt&&te===!1?35907:32856),N===32819&&(ce=32854),N===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function A(S,y,N){return E(S,N)===!0||S.isFramebufferTexture&&S.minFilter!==St&&S.minFilter!==en?Math.log2(Math.max(y.width,y.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?y.mipmaps.length:1}function D(S){return S===St||S===_u||S===vu?9728:9729}function Y(S){const y=S.target;y.removeEventListener("dispose",Y),z(y),y.isVideoTexture&&g.delete(y)}function K(S){const y=S.target;y.removeEventListener("dispose",K),j(y)}function z(S){const y=n.get(S);if(y.__webglInit===void 0)return;const N=S.source,$=p.get(N);if($){const te=$[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&F(S),Object.keys($).length===0&&p.delete(N)}n.remove(S)}function F(S){const y=n.get(S);i.deleteTexture(y.__webglTexture);const N=S.source,$=p.get(N);delete $[y.__cacheKey],o.memory.textures--}function j(S){const y=S.texture,N=n.get(S),$=n.get(y);if($.__webglTexture!==void 0&&(i.deleteTexture($.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let te=0;te<6;te++)i.deleteFramebuffer(N.__webglFramebuffer[te]),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer[te]);else{if(i.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&i.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&i.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let te=0;te<N.__webglColorRenderbuffer.length;te++)N.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(N.__webglColorRenderbuffer[te]);N.__webglDepthRenderbuffer&&i.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let te=0,ce=y.length;te<ce;te++){const ge=n.get(y[te]);ge.__webglTexture&&(i.deleteTexture(ge.__webglTexture),o.memory.textures--),n.remove(y[te])}n.remove(y),n.remove(S)}let X=0;function q(){X=0}function V(){const S=X;return S>=l&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+l),X+=1,S}function U(S){const y=[];return y.push(S.wrapS),y.push(S.wrapT),y.push(S.wrapR||0),y.push(S.magFilter),y.push(S.minFilter),y.push(S.anisotropy),y.push(S.internalFormat),y.push(S.format),y.push(S.type),y.push(S.generateMipmaps),y.push(S.premultiplyAlpha),y.push(S.flipY),y.push(S.unpackAlignment),y.push(S.encoding),y.join()}function G(S,y){const N=n.get(S);if(S.isVideoTexture&&fe(S),S.isRenderTargetTexture===!1&&S.version>0&&N.__version!==S.version){const $=S.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(N,S,y);return}}t.bindTexture(3553,N.__webglTexture,33984+y)}function oe(S,y){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Te(N,S,y);return}t.bindTexture(35866,N.__webglTexture,33984+y)}function se(S,y){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Te(N,S,y);return}t.bindTexture(32879,N.__webglTexture,33984+y)}function le(S,y){const N=n.get(S);if(S.version>0&&N.__version!==S.version){Ae(N,S,y);return}t.bindTexture(34067,N.__webglTexture,33984+y)}const pe={[ps]:10497,[Xt]:33071,[yl]:33648},we={[St]:9728,[_u]:9984,[vu]:9986,[en]:9729,[v0]:9985,[$o]:9987};function Z(S,y,N){if(N?(i.texParameteri(S,10242,pe[y.wrapS]),i.texParameteri(S,10243,pe[y.wrapT]),(S===32879||S===35866)&&i.texParameteri(S,32882,pe[y.wrapR]),i.texParameteri(S,10240,we[y.magFilter]),i.texParameteri(S,10241,we[y.minFilter])):(i.texParameteri(S,10242,33071),i.texParameteri(S,10243,33071),(S===32879||S===35866)&&i.texParameteri(S,32882,33071),(y.wrapS!==Xt||y.wrapT!==Xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(S,10240,D(y.magFilter)),i.texParameteri(S,10241,D(y.minFilter)),y.minFilter!==St&&y.minFilter!==en&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const $=e.get("EXT_texture_filter_anisotropic");if(y.type===oi&&e.has("OES_texture_float_linear")===!1||a===!1&&y.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(S,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Fe(S,y){let N=!1;S.__webglInit===void 0&&(S.__webglInit=!0,y.addEventListener("dispose",Y));const $=y.source;let te=p.get($);te===void 0&&(te={},p.set($,te));const ce=U(y);if(ce!==S.__cacheKey){te[ce]===void 0&&(te[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,N=!0),te[ce].usedTimes++;const ge=te[S.__cacheKey];ge!==void 0&&(te[S.__cacheKey].usedTimes--,ge.usedTimes===0&&F(y)),S.__cacheKey=ce,S.__webglTexture=te[ce].texture}return N}function Te(S,y,N){let $=3553;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=35866),y.isData3DTexture&&($=32879);const te=Fe(S,y),ce=y.source;t.bindTexture($,S.__webglTexture,33984+N);const ge=n.get(ce);if(ce.version!==ge.__version||te===!0){t.activeTexture(33984+N),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const L=M(y)&&b(y.image)===!1;let B=x(y.image,L,!1,u);B=ae(y,B);const _e=b(B)||a,Me=s.convert(y.format,y.encoding);let ve=s.convert(y.type),Se=v(y.internalFormat,Me,ve,y.encoding,y.isVideoTexture);Z($,y,_e);let ye;const De=y.mipmaps,Be=a&&y.isVideoTexture!==!0,et=ge.__version===void 0||te===!0,O=A(y,B,_e);if(y.isDepthTexture)Se=6402,a?y.type===oi?Se=36012:y.type===Ri?Se=33190:y.type===Mr?Se=35056:Se=33189:y.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Ni&&Se===6402&&y.type!==Zf&&y.type!==Ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Ri,ve=s.convert(y.type)),y.format===Cr&&Se===6402&&(Se=34041,y.type!==Mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Mr,ve=s.convert(y.type))),et&&(Be?t.texStorage2D(3553,1,Se,B.width,B.height):t.texImage2D(3553,0,Se,B.width,B.height,0,Me,ve,null));else if(y.isDataTexture)if(De.length>0&&_e){Be&&et&&t.texStorage2D(3553,O,Se,De[0].width,De[0].height);for(let ne=0,de=De.length;ne<de;ne++)ye=De[ne],Be?t.texSubImage2D(3553,ne,0,0,ye.width,ye.height,Me,ve,ye.data):t.texImage2D(3553,ne,Se,ye.width,ye.height,0,Me,ve,ye.data);y.generateMipmaps=!1}else Be?(et&&t.texStorage2D(3553,O,Se,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,Me,ve,B.data)):t.texImage2D(3553,0,Se,B.width,B.height,0,Me,ve,B.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&et&&t.texStorage3D(35866,O,Se,De[0].width,De[0].height,B.depth);for(let ne=0,de=De.length;ne<de;ne++)ye=De[ne],y.format!==tn?Me!==null?Be?t.compressedTexSubImage3D(35866,ne,0,0,0,ye.width,ye.height,B.depth,Me,ye.data,0,0):t.compressedTexImage3D(35866,ne,Se,ye.width,ye.height,B.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,ne,0,0,0,ye.width,ye.height,B.depth,Me,ve,ye.data):t.texImage3D(35866,ne,Se,ye.width,ye.height,B.depth,0,Me,ve,ye.data)}else{Be&&et&&t.texStorage2D(3553,O,Se,De[0].width,De[0].height);for(let ne=0,de=De.length;ne<de;ne++)ye=De[ne],y.format!==tn?Me!==null?Be?t.compressedTexSubImage2D(3553,ne,0,0,ye.width,ye.height,Me,ye.data):t.compressedTexImage2D(3553,ne,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,ne,0,0,ye.width,ye.height,Me,ve,ye.data):t.texImage2D(3553,ne,Se,ye.width,ye.height,0,Me,ve,ye.data)}else if(y.isDataArrayTexture)Be?(et&&t.texStorage3D(35866,O,Se,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,Me,ve,B.data)):t.texImage3D(35866,0,Se,B.width,B.height,B.depth,0,Me,ve,B.data);else if(y.isData3DTexture)Be?(et&&t.texStorage3D(32879,O,Se,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,Me,ve,B.data)):t.texImage3D(32879,0,Se,B.width,B.height,B.depth,0,Me,ve,B.data);else if(y.isFramebufferTexture){if(et)if(Be)t.texStorage2D(3553,O,Se,B.width,B.height);else{let ne=B.width,de=B.height;for(let be=0;be<O;be++)t.texImage2D(3553,be,Se,ne,de,0,Me,ve,null),ne>>=1,de>>=1}}else if(De.length>0&&_e){Be&&et&&t.texStorage2D(3553,O,Se,De[0].width,De[0].height);for(let ne=0,de=De.length;ne<de;ne++)ye=De[ne],Be?t.texSubImage2D(3553,ne,0,0,Me,ve,ye):t.texImage2D(3553,ne,Se,Me,ve,ye);y.generateMipmaps=!1}else Be?(et&&t.texStorage2D(3553,O,Se,B.width,B.height),t.texSubImage2D(3553,0,0,0,Me,ve,B)):t.texImage2D(3553,0,Se,Me,ve,B);E(y,_e)&&I($),ge.__version=ce.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function Ae(S,y,N){if(y.image.length!==6)return;const $=Fe(S,y),te=y.source;t.bindTexture(34067,S.__webglTexture,33984+N);const ce=n.get(te);if(te.version!==ce.__version||$===!0){t.activeTexture(33984+N),i.pixelStorei(37440,y.flipY),i.pixelStorei(37441,y.premultiplyAlpha),i.pixelStorei(3317,y.unpackAlignment),i.pixelStorei(37443,0);const ge=y.isCompressedTexture||y.image[0].isCompressedTexture,L=y.image[0]&&y.image[0].isDataTexture,B=[];for(let ne=0;ne<6;ne++)!ge&&!L?B[ne]=x(y.image[ne],!1,!0,c):B[ne]=L?y.image[ne].image:y.image[ne],B[ne]=ae(y,B[ne]);const _e=B[0],Me=b(_e)||a,ve=s.convert(y.format,y.encoding),Se=s.convert(y.type),ye=v(y.internalFormat,ve,Se,y.encoding),De=a&&y.isVideoTexture!==!0,Be=ce.__version===void 0||$===!0;let et=A(y,_e,Me);Z(34067,y,Me);let O;if(ge){De&&Be&&t.texStorage2D(34067,et,ye,_e.width,_e.height);for(let ne=0;ne<6;ne++){O=B[ne].mipmaps;for(let de=0;de<O.length;de++){const be=O[de];y.format!==tn?ve!==null?De?t.compressedTexSubImage2D(34069+ne,de,0,0,be.width,be.height,ve,be.data):t.compressedTexImage2D(34069+ne,de,ye,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?t.texSubImage2D(34069+ne,de,0,0,be.width,be.height,ve,Se,be.data):t.texImage2D(34069+ne,de,ye,be.width,be.height,0,ve,Se,be.data)}}}else{O=y.mipmaps,De&&Be&&(O.length>0&&et++,t.texStorage2D(34067,et,ye,B[0].width,B[0].height));for(let ne=0;ne<6;ne++)if(L){De?t.texSubImage2D(34069+ne,0,0,0,B[ne].width,B[ne].height,ve,Se,B[ne].data):t.texImage2D(34069+ne,0,ye,B[ne].width,B[ne].height,0,ve,Se,B[ne].data);for(let de=0;de<O.length;de++){const Ee=O[de].image[ne].image;De?t.texSubImage2D(34069+ne,de+1,0,0,Ee.width,Ee.height,ve,Se,Ee.data):t.texImage2D(34069+ne,de+1,ye,Ee.width,Ee.height,0,ve,Se,Ee.data)}}else{De?t.texSubImage2D(34069+ne,0,0,0,ve,Se,B[ne]):t.texImage2D(34069+ne,0,ye,ve,Se,B[ne]);for(let de=0;de<O.length;de++){const be=O[de];De?t.texSubImage2D(34069+ne,de+1,0,0,ve,Se,be.image[ne]):t.texImage2D(34069+ne,de+1,ye,ve,Se,be.image[ne])}}}E(y,Me)&&I(34067),ce.__version=te.version,y.onUpdate&&y.onUpdate(y)}S.__version=y.version}function xe(S,y,N,$,te){const ce=s.convert(N.format,N.encoding),ge=s.convert(N.type),L=v(N.internalFormat,ce,ge,N.encoding);n.get(y).__hasExternalTextures||(te===32879||te===35866?t.texImage3D(te,0,L,y.width,y.height,y.depth,0,ce,ge,null):t.texImage2D(te,0,L,y.width,y.height,0,ce,ge,null)),t.bindFramebuffer(36160,S),re(y)?f.framebufferTexture2DMultisampleEXT(36160,$,te,n.get(N).__webglTexture,0,he(y)):(te===3553||te>=34069&&te<=34074)&&i.framebufferTexture2D(36160,$,te,n.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(S,y,N){if(i.bindRenderbuffer(36161,S),y.depthBuffer&&!y.stencilBuffer){let $=33189;if(N||re(y)){const te=y.depthTexture;te&&te.isDepthTexture&&(te.type===oi?$=36012:te.type===Ri&&($=33190));const ce=he(y);re(y)?f.renderbufferStorageMultisampleEXT(36161,ce,$,y.width,y.height):i.renderbufferStorageMultisample(36161,ce,$,y.width,y.height)}else i.renderbufferStorage(36161,$,y.width,y.height);i.framebufferRenderbuffer(36160,36096,36161,S)}else if(y.depthBuffer&&y.stencilBuffer){const $=he(y);N&&re(y)===!1?i.renderbufferStorageMultisample(36161,$,35056,y.width,y.height):re(y)?f.renderbufferStorageMultisampleEXT(36161,$,35056,y.width,y.height):i.renderbufferStorage(36161,34041,y.width,y.height),i.framebufferRenderbuffer(36160,33306,36161,S)}else{const $=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let te=0;te<$.length;te++){const ce=$[te],ge=s.convert(ce.format,ce.encoding),L=s.convert(ce.type),B=v(ce.internalFormat,ge,L,ce.encoding),_e=he(y);N&&re(y)===!1?i.renderbufferStorageMultisample(36161,_e,B,y.width,y.height):re(y)?f.renderbufferStorageMultisampleEXT(36161,_e,B,y.width,y.height):i.renderbufferStorage(36161,B,y.width,y.height)}}i.bindRenderbuffer(36161,null)}function C(S,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);const $=n.get(y.depthTexture).__webglTexture,te=he(y);if(y.depthTexture.format===Ni)re(y)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,te):i.framebufferTexture2D(36160,36096,3553,$,0);else if(y.depthTexture.format===Cr)re(y)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,te):i.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function P(S){const y=n.get(S),N=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");C(y.__webglFramebuffer,S)}else if(N){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(36160,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=i.createRenderbuffer(),Ge(y.__webglDepthbuffer[$],S,!1)}else t.bindFramebuffer(36160,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Ge(y.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function W(S,y,N){const $=n.get(S);y!==void 0&&xe($.__webglFramebuffer,S,S.texture,36064,3553),N!==void 0&&P(S)}function ee(S){const y=S.texture,N=n.get(S),$=n.get(y);S.addEventListener("dispose",K),S.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=y.version,o.memory.textures++);const te=S.isWebGLCubeRenderTarget===!0,ce=S.isWebGLMultipleRenderTargets===!0,ge=b(S)||a;if(te){N.__webglFramebuffer=[];for(let L=0;L<6;L++)N.__webglFramebuffer[L]=i.createFramebuffer()}else{if(N.__webglFramebuffer=i.createFramebuffer(),ce)if(r.drawBuffers){const L=S.texture;for(let B=0,_e=L.length;B<_e;B++){const Me=n.get(L[B]);Me.__webglTexture===void 0&&(Me.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&re(S)===!1){const L=ce?y:[y];N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let B=0;B<L.length;B++){const _e=L[B];N.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(36161,N.__webglColorRenderbuffer[B]);const Me=s.convert(_e.format,_e.encoding),ve=s.convert(_e.type),Se=v(_e.internalFormat,Me,ve,_e.encoding,S.isXRRenderTarget===!0),ye=he(S);i.renderbufferStorageMultisample(36161,ye,Se,S.width,S.height),i.framebufferRenderbuffer(36160,36064+B,36161,N.__webglColorRenderbuffer[B])}i.bindRenderbuffer(36161,null),S.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Ge(N.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(te){t.bindTexture(34067,$.__webglTexture),Z(34067,y,ge);for(let L=0;L<6;L++)xe(N.__webglFramebuffer[L],S,y,36064,34069+L);E(y,ge)&&I(34067),t.unbindTexture()}else if(ce){const L=S.texture;for(let B=0,_e=L.length;B<_e;B++){const Me=L[B],ve=n.get(Me);t.bindTexture(3553,ve.__webglTexture),Z(3553,Me,ge),xe(N.__webglFramebuffer,S,Me,36064+B,3553),E(Me,ge)&&I(3553)}t.unbindTexture()}else{let L=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?L=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,$.__webglTexture),Z(L,y,ge),xe(N.__webglFramebuffer,S,y,36064,L),E(y,ge)&&I(L),t.unbindTexture()}S.depthBuffer&&P(S)}function J(S){const y=b(S)||a,N=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let $=0,te=N.length;$<te;$++){const ce=N[$];if(E(ce,y)){const ge=S.isWebGLCubeRenderTarget?34067:3553,L=n.get(ce).__webglTexture;t.bindTexture(ge,L),I(ge),t.unbindTexture()}}}function ue(S){if(a&&S.samples>0&&re(S)===!1){const y=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],N=S.width,$=S.height;let te=16384;const ce=[],ge=S.stencilBuffer?33306:36096,L=n.get(S),B=S.isWebGLMultipleRenderTargets===!0;if(B)for(let _e=0;_e<y.length;_e++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+_e,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+_e,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){ce.push(36064+_e),S.depthBuffer&&ce.push(ge);const Me=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(Me===!1&&(S.depthBuffer&&(te|=256),S.stencilBuffer&&(te|=1024)),B&&i.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[_e]),Me===!0&&(i.invalidateFramebuffer(36008,[ge]),i.invalidateFramebuffer(36009,[ge])),B){const ve=n.get(y[_e]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,ve,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,te,9728),d&&i.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let _e=0;_e<y.length;_e++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+_e,36161,L.__webglColorRenderbuffer[_e]);const Me=n.get(y[_e]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+_e,3553,Me,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function he(S){return Math.min(h,S.samples)}function re(S){const y=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(S){const y=o.render.frame;g.get(S)!==y&&(g.set(S,y),S.update())}function ae(S,y){const N=S.encoding,$=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===Ml||N!==ki&&(N===tt?a===!1?e.has("EXT_sRGB")===!0&&$===tn?(S.format=Ml,S.minFilter=en,S.generateMipmaps=!1):y=ed.sRGBToLinear(y):($!==tn||te!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),y}this.allocateTextureUnit=V,this.resetTextureUnits=q,this.setTexture2D=G,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=le,this.rebindTextures=W,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=J,this.updateMultisampleRenderTarget=ue,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=re}function GM(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Bi)return 5121;if(s===b0)return 32819;if(s===w0)return 32820;if(s===x0)return 5120;if(s===y0)return 5122;if(s===Zf)return 5123;if(s===M0)return 5124;if(s===Ri)return 5125;if(s===oi)return 5126;if(s===ms)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===S0)return 6406;if(s===tn)return 6408;if(s===E0)return 6409;if(s===A0)return 6410;if(s===Ni)return 6402;if(s===Cr)return 34041;if(s===C0)return 6403;if(s===T0)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Ml)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===L0)return 36244;if(s===P0)return 33319;if(s===D0)return 33320;if(s===R0)return 36249;if(s===pa||s===ma||s===ga||s===_a)if(o===tt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===pa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ma)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ga)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===pa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ma)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ga)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xu||s===yu||s===Mu||s===bu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===xu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===yu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Mu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===bu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===I0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===wu||s===Su)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===wu)return o===tt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Su)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Tu||s===Eu||s===Au||s===Cu||s===Lu||s===Pu||s===Du||s===Ru||s===Iu||s===Fu||s===Ou||s===zu||s===Nu||s===Uu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Tu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Eu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Au)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Lu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Du)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ru)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Iu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Ou)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Nu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uu)return o===tt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Bu)return o===tt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Mr?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class HM extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gr extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WM={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const w=new gr;w.matrixAutoUpdate=!1,w.visible=!1,c.joints[m.jointName]=w,c.add(w)}const _=c.joints[m.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(WM)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class XM extends Ft{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:Ni,u!==Ni&&u!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ni&&(n=Ri),n===void 0&&u===Cr&&(n=Mr),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class jM extends Gi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=null,c=null,u=null,h=null,f=null,d=null;const g=t.getContextAttributes();let m=null,p=null;const _=[],w=[],x=new Dt;x.layers.enable(1),x.viewport=new Ye;const b=new Dt;b.layers.enable(2),b.viewport=new Ye;const M=[x,b],E=new HM;E.layers.enable(1),E.layers.enable(2);let I=null,v=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let G=_[U];return G===void 0&&(G=new Wa,_[U]=G),G.getTargetRaySpace()},this.getControllerGrip=function(U){let G=_[U];return G===void 0&&(G=new Wa,_[U]=G),G.getGripSpace()},this.getHand=function(U){let G=_[U];return G===void 0&&(G=new Wa,_[U]=G),G.getHandSpace()};function A(U){const G=w.indexOf(U.inputSource);if(G===-1)return;const oe=_[G];oe!==void 0&&oe.dispatchEvent({type:U.type,data:U.inputSource})}function D(){r.removeEventListener("select",A),r.removeEventListener("selectstart",A),r.removeEventListener("selectend",A),r.removeEventListener("squeeze",A),r.removeEventListener("squeezestart",A),r.removeEventListener("squeezeend",A),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",Y);for(let U=0;U<_.length;U++){const G=w[U];G!==null&&(w[U]=null,_[U].disconnect(G))}I=null,v=null,e.setRenderTarget(m),f=null,h=null,u=null,r=null,p=null,V.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){s=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(U){if(r=U,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",A),r.addEventListener("selectstart",A),r.addEventListener("selectend",A),r.addEventListener("squeeze",A),r.addEventListener("squeezestart",A),r.addEventListener("squeezeend",A),r.addEventListener("end",D),r.addEventListener("inputsourceschange",Y),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const G={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,G),r.updateRenderState({baseLayer:f}),p=new Vi(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Bi,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let G=null,oe=null,se=null;g.depth&&(se=g.stencil?35056:33190,G=g.stencil?Cr:Ni,oe=g.stencil?Mr:Ri);const le={colorFormat:32856,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(r,t),h=u.createProjectionLayer(le),r.updateRenderState({layers:[h]}),p=new Vi(h.textureWidth,h.textureHeight,{format:tn,type:Bi,depthTexture:new XM(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const pe=e.properties.get(p);pe.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),l=null,o=await r.requestReferenceSpace(a),V.setContext(r),V.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function Y(U){for(let G=0;G<U.removed.length;G++){const oe=U.removed[G],se=w.indexOf(oe);se>=0&&(w[se]=null,_[se].dispatchEvent({type:"disconnected",data:oe}))}for(let G=0;G<U.added.length;G++){const oe=U.added[G];let se=w.indexOf(oe);if(se===-1){for(let pe=0;pe<_.length;pe++)if(pe>=w.length){w.push(oe),se=pe;break}else if(w[pe]===null){w[pe]=oe,se=pe;break}if(se===-1)break}const le=_[se];le&&le.dispatchEvent({type:"connected",data:oe})}}const K=new R,z=new R;function F(U,G,oe){K.setFromMatrixPosition(G.matrixWorld),z.setFromMatrixPosition(oe.matrixWorld);const se=K.distanceTo(z),le=G.projectionMatrix.elements,pe=oe.projectionMatrix.elements,we=le[14]/(le[10]-1),Z=le[14]/(le[10]+1),Fe=(le[9]+1)/le[5],Te=(le[9]-1)/le[5],Ae=(le[8]-1)/le[0],xe=(pe[8]+1)/pe[0],Ge=we*Ae,C=we*xe,P=se/(-Ae+xe),W=P*-Ae;G.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(W),U.translateZ(P),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const ee=we+P,J=Z+P,ue=Ge-W,he=C+(se-W),re=Fe*Z/J*ee,fe=Te*Z/J*ee;U.projectionMatrix.makePerspective(ue,he,re,fe,ee,J)}function j(U,G){G===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(G.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(r===null)return;E.near=b.near=x.near=U.near,E.far=b.far=x.far=U.far,(I!==E.near||v!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,v=E.far);const G=U.parent,oe=E.cameras;j(E,G);for(let le=0;le<oe.length;le++)j(oe[le],G);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),U.matrix.copy(E.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const se=U.children;for(let le=0,pe=se.length;le<pe;le++)se[le].updateMatrixWorld(!0);oe.length===2?F(E,x,b):E.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(f!==null)return f.fixedFoveation},this.setFoveation=function(U){h!==null&&(h.fixedFoveation=U),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=U)};let X=null;function q(U,G){if(c=G.getViewerPose(l||o),d=G,c!==null){const oe=c.views;f!==null&&(e.setRenderTargetFramebuffer(p,f.framebuffer),e.setRenderTarget(p));let se=!1;oe.length!==E.cameras.length&&(E.cameras.length=0,se=!0);for(let le=0;le<oe.length;le++){const pe=oe[le];let we=null;if(f!==null)we=f.getViewport(pe);else{const Fe=u.getViewSubImage(h,pe);we=Fe.viewport,le===0&&(e.setRenderTargetTextures(p,Fe.colorTexture,h.ignoreDepthValues?void 0:Fe.depthStencilTexture),e.setRenderTarget(p))}let Z=M[le];Z===void 0&&(Z=new Dt,Z.layers.enable(le),Z.viewport=new Ye,M[le]=Z),Z.matrix.fromArray(pe.transform.matrix),Z.projectionMatrix.fromArray(pe.projectionMatrix),Z.viewport.set(we.x,we.y,we.width,we.height),le===0&&E.matrix.copy(Z.matrix),se===!0&&E.cameras.push(Z)}}for(let oe=0;oe<_.length;oe++){const se=w[oe],le=_[oe];se!==null&&le!==void 0&&le.update(se,G,l||o)}X&&X(U,G),d=null}const V=new ad;V.setAnimationLoop(q),this.setAnimationLoop=function(U){X=U},this.dispose=function(){}}}function qM(i,e){function t(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),c(m,p)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),d(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const b=i.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*b}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let w;p.map?w=p.map:p.specularMap?w=p.specularMap:p.displacementMap?w=p.displacementMap:p.normalMap?w=p.normalMap:p.bumpMap?w=p.bumpMap:p.roughnessMap?w=p.roughnessMap:p.metalnessMap?w=p.metalnessMap:p.alphaMap?w=p.alphaMap:p.emissiveMap?w=p.emissiveMap:p.clearcoatMap?w=p.clearcoatMap:p.clearcoatNormalMap?w=p.clearcoatNormalMap:p.clearcoatRoughnessMap?w=p.clearcoatRoughnessMap:p.iridescenceMap?w=p.iridescenceMap:p.iridescenceThicknessMap?w=p.iridescenceThicknessMap:p.specularIntensityMap?w=p.specularIntensityMap:p.specularColorMap?w=p.specularColorMap:p.transmissionMap?w=p.transmissionMap:p.thicknessMap?w=p.thicknessMap:p.sheenColorMap?w=p.sheenColorMap:p.sheenRoughnessMap&&(w=p.sheenRoughnessMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uv2Transform.value.copy(x.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=w*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function YM(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(w,x){const b=x.program;n.uniformBlockBinding(w,b)}function c(w,x){let b=r[w.id];b===void 0&&(g(w),b=u(w),r[w.id]=b,w.addEventListener("dispose",p));const M=x.program;n.updateUBOMapping(w,M);const E=e.render.frame;s[w.id]!==E&&(f(w),s[w.id]=E)}function u(w){const x=h();w.__bindingPointIndex=x;const b=i.createBuffer(),M=w.__size,E=w.usage;return i.bindBuffer(35345,b),i.bufferData(35345,M,E),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,b),b}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const x=r[w.id],b=w.uniforms,M=w.__cache;i.bindBuffer(35345,x);for(let E=0,I=b.length;E<I;E++){const v=b[E];if(d(v,E,M)===!0){const A=v.value,D=v.__offset;typeof A=="number"?(v.__data[0]=A,i.bufferSubData(35345,D,v.__data)):(v.value.isMatrix3?(v.__data[0]=v.value.elements[0],v.__data[1]=v.value.elements[1],v.__data[2]=v.value.elements[2],v.__data[3]=v.value.elements[0],v.__data[4]=v.value.elements[3],v.__data[5]=v.value.elements[4],v.__data[6]=v.value.elements[5],v.__data[7]=v.value.elements[0],v.__data[8]=v.value.elements[6],v.__data[9]=v.value.elements[7],v.__data[10]=v.value.elements[8],v.__data[11]=v.value.elements[0]):A.toArray(v.__data),i.bufferSubData(35345,D,v.__data))}}i.bindBuffer(35345,null)}function d(w,x,b){const M=w.value;if(b[x]===void 0)return typeof M=="number"?b[x]=M:b[x]=M.clone(),!0;if(typeof M=="number"){if(b[x]!==M)return b[x]=M,!0}else{const E=b[x];if(E.equals(M)===!1)return E.copy(M),!0}return!1}function g(w){const x=w.uniforms;let b=0;const M=16;let E=0;for(let I=0,v=x.length;I<v;I++){const A=x[I],D=m(A);if(A.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,I>0){E=b%M;const Y=M-E;E!==0&&Y-D.boundary<0&&(b+=M-E,A.__offset=b)}b+=D.storage}return E=b%M,E>0&&(b+=M-E),w.__size=b,w.__cache={},this}function m(w){const x=w.value,b={boundary:0,storage:0};return typeof x=="number"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),b}function p(w){const x=w.target;x.removeEventListener("dispose",p);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const w in r)i.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function $M(){const i=_s("canvas");return i.style.display="block",i}function fd(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:$M(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ki,this.physicallyCorrectLights=!1,this.toneMapping=Hn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const m=this;let p=!1,_=0,w=0,x=null,b=-1,M=null;const E=new Ye,I=new Ye;let v=null,A=e.width,D=e.height,Y=1,K=null,z=null;const F=new Ye(0,0,A,D),j=new Ye(0,0,A,D);let X=!1;const q=new cc;let V=!1,U=!1,G=null;const oe=new Ce,se=new Ie,le=new R,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return x===null?Y:1}let Z=t;function Fe(T,H){for(let Q=0;Q<T.length;Q++){const k=T[Q],ie=e.getContext(k,H);if(ie!==null)return ie}return null}try{const T={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rc}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",De,!1),Z===null){const H=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&H.shift(),Z=Fe(H,T),Z===null)throw Fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,Ae,xe,Ge,C,P,W,ee,J,ue,he,re,fe,ae,S,y,N,$,te,ce,ge,L,B,_e;function Me(){Te=new oy(Z),Ae=new ey(Z,Te,i),Te.init(Ae),L=new GM(Z,Te,Ae),xe=new kM(Z,Te,Ae),Ge=new cy,C=new EM,P=new VM(Z,Te,xe,C,Ae,L,Ge),W=new ny(m),ee=new sy(m),J=new v_(Z,Ae),B=new Jx(Z,Te,J,Ae),ue=new ay(Z,J,Ge,B),he=new dy(Z,ue,J,Ge),te=new fy(Z,Ae,P),y=new ty(C),re=new TM(m,W,ee,Te,Ae,B,y),fe=new qM(m,C),ae=new CM,S=new FM(Te,Ae),$=new Kx(m,W,ee,xe,he,u,o),N=new BM(m,he,Ae),_e=new YM(Z,Ge,Ae,xe),ce=new Qx(Z,Te,Ge,Ae),ge=new ly(Z,Te,Ge,Ae),Ge.programs=re.programs,m.capabilities=Ae,m.extensions=Te,m.properties=C,m.renderLists=ae,m.shadowMap=N,m.state=xe,m.info=Ge}Me();const ve=new jM(m,Z);this.xr=ve,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(A,D,!1))},this.getSize=function(T){return T.set(A,D)},this.setSize=function(T,H,Q){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}A=T,D=H,e.width=Math.floor(T*Y),e.height=Math.floor(H*Y),Q!==!1&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(A*Y,D*Y).floor()},this.setDrawingBufferSize=function(T,H,Q){A=T,D=H,Y=Q,e.width=Math.floor(T*Q),e.height=Math.floor(H*Q),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(E)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,H,Q,k){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,H,Q,k),xe.viewport(E.copy(F).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(j)},this.setScissor=function(T,H,Q,k){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,H,Q,k),xe.scissor(I.copy(j).multiplyScalar(Y).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(T){xe.setScissorTest(X=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){z=T},this.getClearColor=function(T){return T.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(T=!0,H=!0,Q=!0){let k=0;T&&(k|=16384),H&&(k|=256),Q&&(k|=1024),Z.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",De,!1),ae.dispose(),S.dispose(),C.dispose(),W.dispose(),ee.dispose(),he.dispose(),B.dispose(),_e.dispose(),re.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",be),ve.removeEventListener("sessionend",Ee),G&&(G.dispose(),G=null),$e.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ge.autoReset,H=N.enabled,Q=N.autoUpdate,k=N.needsUpdate,ie=N.type;Me(),Ge.autoReset=T,N.enabled=H,N.autoUpdate=Q,N.needsUpdate=k,N.type=ie}function De(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Be(T){const H=T.target;H.removeEventListener("dispose",Be),et(H)}function et(T){O(T),C.remove(T)}function O(T){const H=C.get(T).programs;H!==void 0&&(H.forEach(function(Q){re.releaseProgram(Q)}),T.isShaderMaterial&&re.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,Q,k,ie,Le){H===null&&(H=pe);const Re=ie.isMesh&&ie.matrixWorld.determinant()<0,Ue=lp(T,H,Q,k,ie);xe.setMaterial(k,Re);let Oe=Q.index;const Ze=Q.attributes.position;if(Oe===null){if(Ze===void 0||Ze.count===0)return}else if(Oe.count===0)return;let He=1;k.wireframe===!0&&(Oe=ue.getWireframeAttribute(Q),He=2),B.setup(ie,k,Ue,Q,Oe);let je,at=ce;Oe!==null&&(je=J.get(Oe),at=ge,at.setIndex(je));const vi=Oe!==null?Oe.count:Ze.count,Wi=Q.drawRange.start*He,Xi=Q.drawRange.count*He,_n=Le!==null?Le.start*He:0,Ke=Le!==null?Le.count*He:1/0,ji=Math.max(Wi,_n),ut=Math.min(vi,Wi+Xi,_n+Ke)-1,Zt=Math.max(0,ut-ji+1);if(Zt!==0){if(ie.isMesh)k.wireframe===!0?(xe.setLineWidth(k.wireframeLinewidth*we()),at.setMode(1)):at.setMode(4);else if(ie.isLine){let Yn=k.linewidth;Yn===void 0&&(Yn=1),xe.setLineWidth(Yn*we()),ie.isLineSegments?at.setMode(1):ie.isLineLoop?at.setMode(2):at.setMode(3)}else ie.isPoints?at.setMode(0):ie.isSprite&&at.setMode(4);if(ie.isInstancedMesh)at.renderInstances(ji,Zt,ie.count);else if(Q.isInstancedBufferGeometry){const Yn=Math.min(Q.instanceCount,Q._maxInstanceCount);at.renderInstances(ji,Zt,Yn)}else at.render(ji,Zt)}},this.compile=function(T,H){function Q(k,ie,Le){k.transparent===!0&&k.side===mn?(k.side=sn,k.needsUpdate=!0,$t(k,ie,Le),k.side=Tr,k.needsUpdate=!0,$t(k,ie,Le),k.side=mn):$t(k,ie,Le)}f=S.get(T),f.init(),g.push(f),T.traverseVisible(function(k){k.isLight&&k.layers.test(H.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights(m.physicallyCorrectLights),T.traverse(function(k){const ie=k.material;if(ie)if(Array.isArray(ie))for(let Le=0;Le<ie.length;Le++){const Re=ie[Le];Q(Re,T,k)}else Q(ie,T,k)}),g.pop(),f=null};let ne=null;function de(T){ne&&ne(T)}function be(){$e.stop()}function Ee(){$e.start()}const $e=new ad;$e.setAnimationLoop(de),typeof self<"u"&&$e.setContext(self),this.setAnimationLoop=function(T){ne=T,ve.setAnimationLoop(T),T===null?$e.stop():$e.start()},ve.addEventListener("sessionstart",be),ve.addEventListener("sessionend",Ee),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(H),H=ve.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,H,x),f=S.get(T,g.length),f.init(),g.push(f),oe.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q.setFromProjectionMatrix(oe),U=this.localClippingEnabled,V=y.init(this.clippingPlanes,U,H),h=ae.get(T,d.length),h.init(),d.push(h),_t(T,H,0,m.sortObjects),h.finish(),m.sortObjects===!0&&h.sort(K,z),V===!0&&y.beginShadows();const Q=f.state.shadowsArray;if(N.render(Q,T,H),V===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(h,T),f.setupLights(m.physicallyCorrectLights),H.isArrayCamera){const k=H.cameras;for(let ie=0,Le=k.length;ie<Le;ie++){const Re=k[ie];bt(h,T,Re,Re.viewport)}}else bt(h,T,H);x!==null&&(P.updateMultisampleRenderTarget(x),P.updateRenderTargetMipmap(x)),T.isScene===!0&&T.onAfterRender(m,T,H),B.resetDefaultState(),b=-1,M=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,d.pop(),d.length>0?h=d[d.length-1]:h=null};function _t(T,H,Q,k){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||q.intersectsSprite(T)){k&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const Re=he.update(T),Ue=T.material;Ue.visible&&h.push(T,Re,Ue,Q,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ge.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ge.render.frame),!T.frustumCulled||q.intersectsObject(T))){k&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(oe);const Re=he.update(T),Ue=T.material;if(Array.isArray(Ue)){const Oe=Re.groups;for(let Ze=0,He=Oe.length;Ze<He;Ze++){const je=Oe[Ze],at=Ue[je.materialIndex];at&&at.visible&&h.push(T,Re,at,Q,le.z,je)}}else Ue.visible&&h.push(T,Re,Ue,Q,le.z,null)}}const Le=T.children;for(let Re=0,Ue=Le.length;Re<Ue;Re++)_t(Le[Re],H,Q,k)}function bt(T,H,Q,k){const ie=T.opaque,Le=T.transmissive,Re=T.transparent;f.setupLightsView(Q),Le.length>0&&_i(ie,H,Q),k&&xe.viewport(E.copy(k)),ie.length>0&&st(ie,H,Q),Le.length>0&&st(Le,H,Q),Re.length>0&&st(Re,H,Q),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function _i(T,H,Q){const k=Ae.isWebGL2;G===null&&(G=new Vi(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?ms:Bi,minFilter:$o,samples:k&&s===!0?4:0})),m.getDrawingBufferSize(se),k?G.setSize(se.x,se.y):G.setSize(Lo(se.x),Lo(se.y));const ie=m.getRenderTarget();m.setRenderTarget(G),m.clear();const Le=m.toneMapping;m.toneMapping=Hn,st(T,H,Q),m.toneMapping=Le,P.updateMultisampleRenderTarget(G),P.updateRenderTargetMipmap(G),m.setRenderTarget(ie)}function st(T,H,Q){const k=H.isScene===!0?H.overrideMaterial:null;for(let ie=0,Le=T.length;ie<Le;ie++){const Re=T[ie],Ue=Re.object,Oe=Re.geometry,Ze=k===null?Re.material:k,He=Re.group;Ue.layers.test(Q.layers)&&Rn(Ue,H,Q,Oe,Ze,He)}}function Rn(T,H,Q,k,ie,Le){T.onBeforeRender(m,H,Q,k,ie,Le),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ie.onBeforeRender(m,H,Q,k,T,Le),ie.transparent===!0&&ie.side===mn?(ie.side=sn,ie.needsUpdate=!0,m.renderBufferDirect(Q,H,k,ie,T,Le),ie.side=Tr,ie.needsUpdate=!0,m.renderBufferDirect(Q,H,k,ie,T,Le),ie.side=mn):m.renderBufferDirect(Q,H,k,ie,T,Le),T.onAfterRender(m,H,Q,k,ie,Le)}function $t(T,H,Q){H.isScene!==!0&&(H=pe);const k=C.get(T),ie=f.state.lights,Le=f.state.shadowsArray,Re=ie.state.version,Ue=re.getParameters(T,ie.state,Le,H,Q),Oe=re.getProgramCacheKey(Ue);let Ze=k.programs;k.environment=T.isMeshStandardMaterial?H.environment:null,k.fog=H.fog,k.envMap=(T.isMeshStandardMaterial?ee:W).get(T.envMap||k.environment),Ze===void 0&&(T.addEventListener("dispose",Be),Ze=new Map,k.programs=Ze);let He=Ze.get(Oe);if(He!==void 0){if(k.currentProgram===He&&k.lightsStateVersion===Re)return Oc(T,Ue),He}else Ue.uniforms=re.getUniforms(T),T.onBuild(Q,Ue,m),T.onBeforeCompile(Ue,m),He=re.acquireProgram(Ue,Oe),Ze.set(Oe,He),k.uniforms=Ue.uniforms;const je=k.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=y.uniform),Oc(T,Ue),k.needsLights=up(T),k.lightsStateVersion=Re,k.needsLights&&(je.ambientLightColor.value=ie.state.ambient,je.lightProbe.value=ie.state.probe,je.directionalLights.value=ie.state.directional,je.directionalLightShadows.value=ie.state.directionalShadow,je.spotLights.value=ie.state.spot,je.spotLightShadows.value=ie.state.spotShadow,je.rectAreaLights.value=ie.state.rectArea,je.ltc_1.value=ie.state.rectAreaLTC1,je.ltc_2.value=ie.state.rectAreaLTC2,je.pointLights.value=ie.state.point,je.pointLightShadows.value=ie.state.pointShadow,je.hemisphereLights.value=ie.state.hemi,je.directionalShadowMap.value=ie.state.directionalShadowMap,je.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,je.spotShadowMap.value=ie.state.spotShadowMap,je.spotLightMatrix.value=ie.state.spotLightMatrix,je.spotLightMap.value=ie.state.spotLightMap,je.pointShadowMap.value=ie.state.pointShadowMap,je.pointShadowMatrix.value=ie.state.pointShadowMatrix);const at=He.getUniforms(),vi=go.seqWithValue(at.seq,je);return k.currentProgram=He,k.uniformsList=vi,He}function Oc(T,H){const Q=C.get(T);Q.outputEncoding=H.outputEncoding,Q.instancing=H.instancing,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function lp(T,H,Q,k,ie){H.isScene!==!0&&(H=pe),P.resetTextureUnits();const Le=H.fog,Re=k.isMeshStandardMaterial?H.environment:null,Ue=x===null?m.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ki,Oe=(k.isMeshStandardMaterial?ee:W).get(k.envMap||Re),Ze=k.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,He=!!k.normalMap&&!!Q.attributes.tangent,je=!!Q.morphAttributes.position,at=!!Q.morphAttributes.normal,vi=!!Q.morphAttributes.color,Wi=k.toneMapped?m.toneMapping:Hn,Xi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,_n=Xi!==void 0?Xi.length:0,Ke=C.get(k),ji=f.state.lights;if(V===!0&&(U===!0||T!==M)){const Gt=T===M&&k.id===b;y.setState(k,T,Gt)}let ut=!1;k.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==ji.state.version||Ke.outputEncoding!==Ue||ie.isInstancedMesh&&Ke.instancing===!1||!ie.isInstancedMesh&&Ke.instancing===!0||ie.isSkinnedMesh&&Ke.skinning===!1||!ie.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Oe||k.fog===!0&&Ke.fog!==Le||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==y.numPlanes||Ke.numIntersection!==y.numIntersection)||Ke.vertexAlphas!==Ze||Ke.vertexTangents!==He||Ke.morphTargets!==je||Ke.morphNormals!==at||Ke.morphColors!==vi||Ke.toneMapping!==Wi||Ae.isWebGL2===!0&&Ke.morphTargetsCount!==_n)&&(ut=!0):(ut=!0,Ke.__version=k.version);let Zt=Ke.currentProgram;ut===!0&&(Zt=$t(k,H,ie));let Yn=!1,qr=!1,na=!1;const Ct=Zt.getUniforms(),xi=Ke.uniforms;if(xe.useProgram(Zt.program)&&(Yn=!0,qr=!0,na=!0),k.id!==b&&(b=k.id,qr=!0),Yn||M!==T){if(Ct.setValue(Z,"projectionMatrix",T.projectionMatrix),Ae.logarithmicDepthBuffer&&Ct.setValue(Z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,qr=!0,na=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Gt=Ct.map.cameraPosition;Gt!==void 0&&Gt.setValue(Z,le.setFromMatrixPosition(T.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ct.setValue(Z,"isOrthographic",T.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||ie.isSkinnedMesh)&&Ct.setValue(Z,"viewMatrix",T.matrixWorldInverse)}if(ie.isSkinnedMesh){Ct.setOptional(Z,ie,"bindMatrix"),Ct.setOptional(Z,ie,"bindMatrixInverse");const Gt=ie.skeleton;Gt&&(Ae.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ct.setValue(Z,"boneTexture",Gt.boneTexture,P),Ct.setValue(Z,"boneTextureSize",Gt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ia=Q.morphAttributes;if((ia.position!==void 0||ia.normal!==void 0||ia.color!==void 0&&Ae.isWebGL2===!0)&&te.update(ie,Q,k,Zt),(qr||Ke.receiveShadow!==ie.receiveShadow)&&(Ke.receiveShadow=ie.receiveShadow,Ct.setValue(Z,"receiveShadow",ie.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(xi.envMap.value=Oe,xi.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),qr&&(Ct.setValue(Z,"toneMappingExposure",m.toneMappingExposure),Ke.needsLights&&cp(xi,na),Le&&k.fog===!0&&fe.refreshFogUniforms(xi,Le),fe.refreshMaterialUniforms(xi,k,Y,D,G),go.upload(Z,Ke.uniformsList,xi,P)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(go.upload(Z,Ke.uniformsList,xi,P),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ct.setValue(Z,"center",ie.center),Ct.setValue(Z,"modelViewMatrix",ie.modelViewMatrix),Ct.setValue(Z,"normalMatrix",ie.normalMatrix),Ct.setValue(Z,"modelMatrix",ie.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Gt=k.uniformsGroups;for(let ra=0,hp=Gt.length;ra<hp;ra++)if(Ae.isWebGL2){const zc=Gt[ra];_e.update(zc,Zt),_e.bind(zc,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function cp(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function up(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(T,H,Q){C.get(T.texture).__webglTexture=H,C.get(T.depthTexture).__webglTexture=Q;const k=C.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=Q===void 0,k.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const Q=C.get(T);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,Q=0){x=T,_=H,w=Q;let k=!0,ie=null,Le=!1,Re=!1;if(T){const Oe=C.get(T);Oe.__useDefaultFramebuffer!==void 0?(xe.bindFramebuffer(36160,null),k=!1):Oe.__webglFramebuffer===void 0?P.setupRenderTarget(T):Oe.__hasExternalTextures&&P.rebindTextures(T,C.get(T.texture).__webglTexture,C.get(T.depthTexture).__webglTexture);const Ze=T.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Re=!0);const He=C.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ie=He[H],Le=!0):Ae.isWebGL2&&T.samples>0&&P.useMultisampledRTT(T)===!1?ie=C.get(T).__webglMultisampledFramebuffer:ie=He,E.copy(T.viewport),I.copy(T.scissor),v=T.scissorTest}else E.copy(F).multiplyScalar(Y).floor(),I.copy(j).multiplyScalar(Y).floor(),v=X;if(xe.bindFramebuffer(36160,ie)&&Ae.drawBuffers&&k&&xe.drawBuffers(T,ie),xe.viewport(E),xe.scissor(I),xe.setScissorTest(v),Le){const Oe=C.get(T.texture);Z.framebufferTexture2D(36160,36064,34069+H,Oe.__webglTexture,Q)}else if(Re){const Oe=C.get(T.texture),Ze=H||0;Z.framebufferTextureLayer(36160,36064,Oe.__webglTexture,Q||0,Ze)}b=-1},this.readRenderTargetPixels=function(T,H,Q,k,ie,Le,Re){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=C.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Ue=Ue[Re]),Ue){xe.bindFramebuffer(36160,Ue);try{const Oe=T.texture,Ze=Oe.format,He=Oe.type;if(Ze!==tn&&L.convert(Ze)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=He===ms&&(Te.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Te.has("EXT_color_buffer_float"));if(He!==Bi&&L.convert(He)!==Z.getParameter(35738)&&!(He===oi&&(Ae.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-k&&Q>=0&&Q<=T.height-ie&&Z.readPixels(H,Q,k,ie,L.convert(Ze),L.convert(He),Le)}finally{const Oe=x!==null?C.get(x).__webglFramebuffer:null;xe.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(T,H,Q=0){const k=Math.pow(2,-Q),ie=Math.floor(H.image.width*k),Le=Math.floor(H.image.height*k);P.setTexture2D(H,0),Z.copyTexSubImage2D(3553,Q,0,0,T.x,T.y,ie,Le),xe.unbindTexture()},this.copyTextureToTexture=function(T,H,Q,k=0){const ie=H.image.width,Le=H.image.height,Re=L.convert(Q.format),Ue=L.convert(Q.type);P.setTexture2D(Q,0),Z.pixelStorei(37440,Q.flipY),Z.pixelStorei(37441,Q.premultiplyAlpha),Z.pixelStorei(3317,Q.unpackAlignment),H.isDataTexture?Z.texSubImage2D(3553,k,T.x,T.y,ie,Le,Re,Ue,H.image.data):H.isCompressedTexture?Z.compressedTexSubImage2D(3553,k,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Re,H.mipmaps[0].data):Z.texSubImage2D(3553,k,T.x,T.y,Re,Ue,H.image),k===0&&Q.generateMipmaps&&Z.generateMipmap(3553),xe.unbindTexture()},this.copyTextureToTexture3D=function(T,H,Q,k,ie=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,Re=T.max.y-T.min.y+1,Ue=T.max.z-T.min.z+1,Oe=L.convert(k.format),Ze=L.convert(k.type);let He;if(k.isData3DTexture)P.setTexture3D(k,0),He=32879;else if(k.isDataArrayTexture)P.setTexture2DArray(k,0),He=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,k.flipY),Z.pixelStorei(37441,k.premultiplyAlpha),Z.pixelStorei(3317,k.unpackAlignment);const je=Z.getParameter(3314),at=Z.getParameter(32878),vi=Z.getParameter(3316),Wi=Z.getParameter(3315),Xi=Z.getParameter(32877),_n=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;Z.pixelStorei(3314,_n.width),Z.pixelStorei(32878,_n.height),Z.pixelStorei(3316,T.min.x),Z.pixelStorei(3315,T.min.y),Z.pixelStorei(32877,T.min.z),Q.isDataTexture||Q.isData3DTexture?Z.texSubImage3D(He,ie,H.x,H.y,H.z,Le,Re,Ue,Oe,Ze,_n.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(He,ie,H.x,H.y,H.z,Le,Re,Ue,Oe,_n.data)):Z.texSubImage3D(He,ie,H.x,H.y,H.z,Le,Re,Ue,Oe,Ze,_n),Z.pixelStorei(3314,je),Z.pixelStorei(32878,at),Z.pixelStorei(3316,vi),Z.pixelStorei(3315,Wi),Z.pixelStorei(32877,Xi),ie===0&&k.generateMipmaps&&Z.generateMipmap(He),xe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?P.setTextureCube(T,0):T.isData3DTexture?P.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?P.setTexture2DArray(T,0):P.setTexture2D(T,0),xe.unbindTexture()},this.resetState=function(){_=0,w=0,x=null,xe.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ZM extends fd{}ZM.prototype.isWebGL1Renderer=!0;class KM extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}const Sh=new R,Th=new Ye,Eh=new Ye,JM=new R,Ah=new Ce;class QM extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ce,this.bindMatrixInverse=new Ce}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ye,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;Th.fromBufferAttribute(r.attributes.skinIndex,e),Eh.fromBufferAttribute(r.attributes.skinWeight,e),Sh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Eh.getComponent(s);if(o!==0){const a=Th.getComponent(s);Ah.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(JM.copy(Sh).applyMatrix4(Ah),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Sl extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eb extends Ft{constructor(e=null,t=1,n=1,r,s,o,a,l,c=St,u=St,h,f){super(null,o,a,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ch=new Ce,tb=new Ce;class fc{constructor(e=[],t=[]){this.uuid=pi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Ce)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ce;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:tb;Ch.multiplyMatrices(a,t[s]),Ch.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new fc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Kf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new eb(t,e,e,tn,oi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Sl),this.bones.push(o),this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class dd extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lh=new R,Ph=new R,Dh=new Ce,Xa=new Zo,to=new Ts;class pd extends ot{constructor(e=new pt,t=new dd){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Lh.fromBufferAttribute(t,r-1),Ph.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Lh.distanceTo(Ph);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),to.copy(n.boundingSphere),to.applyMatrix4(r),to.radius+=s,e.ray.intersectsSphere(to)===!1)return;Dh.copy(r).invert(),Xa.copy(e.ray).applyMatrix4(Dh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new R,u=new R,h=new R,f=new R,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),w=Math.min(g.count,o.start+o.count);for(let x=_,b=w-1;x<b;x+=d){const M=g.getX(x),E=g.getX(x+1);if(c.fromBufferAttribute(p,M),u.fromBufferAttribute(p,E),Xa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),w=Math.min(p.count,o.start+o.count);for(let x=_,b=w-1;x<b;x+=d){if(c.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Xa.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(f);E<e.near||E>e.far||t.push({distance:E,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Rh=new R,Ih=new R;class nb extends pd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Rh.fromBufferAttribute(t,r),Ih.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Rh.distanceTo(Ih);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class md extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fh=new Ce,Tl=new Zo,no=new Ts,io=new R;class dc extends ot{constructor(e=new pt,t=new md){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Fh.copy(r).invert(),Tl.copy(e.ray).applyMatrix4(Fh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){const p=c.getX(g);io.fromBufferAttribute(h,p),Oh(io,p,l,r,e,t,this)}}else{const f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,m=d;g<m;g++)io.fromBufferAttribute(h,g),Oh(io,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Oh(i,e,t,n,r,s,o){const a=Tl.distanceSqToPoint(i);if(a<t){const l=new R;Tl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class pc{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=n[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===o)return r/(s-1);const u=n[r],f=n[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Ie:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,r=[],s=[],o=[],a=new R,l=new Ce;for(let d=0;d<=e;d++){const g=d/e;r[d]=this.getTangentAt(g,new R)}s[0]=new R,o[0]=new R;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(yt(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(yt(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function mc(){let i=0,e=0,t=0,n=0;function r(s,o,a,l){i=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const ro=new R,ja=new mc,qa=new mc,Ya=new mc;class ib extends pc{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(ro.subVectors(r[0],r[1]).add(r[0]),c=ro);const h=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(ro.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=ro),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),ja.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,m,p),qa.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,m,p),Ya.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,m,p)}else this.curveType==="catmullrom"&&(ja.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),qa.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ya.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(ja.calc(l),qa.calc(l),Ya.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function rb(i,e){const t=1-i;return t*t*e}function sb(i,e){return 2*(1-i)*i*e}function ob(i,e){return i*i*e}function $a(i,e,t,n){return rb(i,e)+sb(i,t)+ob(i,n)}class ab extends pc{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set($a(e,r.x,s.x,o.x),$a(e,r.y,s.y,o.y),$a(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gc extends pt{constructor(e=1,t=1,n=1,r=8,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const m=[],p=n/2;let _=0;w(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new it(h,3)),this.setAttribute("normal",new it(f,3)),this.setAttribute("uv",new it(d,2));function w(){const b=new R,M=new R;let E=0;const I=(t-e)/n;for(let v=0;v<=s;v++){const A=[],D=v/s,Y=D*(t-e)+e;for(let K=0;K<=r;K++){const z=K/r,F=z*l+a,j=Math.sin(F),X=Math.cos(F);M.x=Y*j,M.y=-D*n+p,M.z=Y*X,h.push(M.x,M.y,M.z),b.set(j,I,X).normalize(),f.push(b.x,b.y,b.z),d.push(z,1-D),A.push(g++)}m.push(A)}for(let v=0;v<r;v++)for(let A=0;A<s;A++){const D=m[A][v],Y=m[A+1][v],K=m[A+1][v+1],z=m[A][v+1];u.push(D,Y,z),u.push(Y,K,z),E+=6}c.addGroup(_,E,0),_+=E}function x(b){const M=g,E=new Ie,I=new R;let v=0;const A=b===!0?e:t,D=b===!0?1:-1;for(let K=1;K<=r;K++)h.push(0,p*D,0),f.push(0,D,0),d.push(.5,.5),g++;const Y=g;for(let K=0;K<=r;K++){const F=K/r*l+a,j=Math.cos(F),X=Math.sin(F);I.x=A*X,I.y=p*D,I.z=A*j,h.push(I.x,I.y,I.z),f.push(0,D,0),E.x=j*.5+.5,E.y=X*.5*D+.5,d.push(E.x,E.y),g++}for(let K=0;K<r;K++){const z=M+K,F=Y+K;b===!0?u.push(F,F+1,z):u.push(F+1,F,z),v+=3}c.addGroup(_,v,b===!0?1:2),_+=v}}static fromJSON(e){return new gc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const so=new R,oo=new R,Za=new R,ao=new En;class lb extends pt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(br*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:m,b:p,c:_}=ao;if(m.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),ao.getNormal(Za),h[0]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[1]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,h[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const x=(w+1)%3,b=h[w],M=h[x],E=ao[u[w]],I=ao[u[x]],v=`${b}_${M}`,A=`${M}_${b}`;A in f&&f[A]?(Za.dot(f[A].normal)<=s&&(d.push(E.x,E.y,E.z),d.push(I.x,I.y,I.z)),f[A]=null):v in f||(f[v]={index0:c[w],index1:c[x],normal:Za.clone()})}}for(const g in f)if(f[g]){const{index0:m,index1:p}=f[g];so.fromBufferAttribute(a,m),oo.fromBufferAttribute(a,p),d.push(so.x,so.y,so.z),d.push(oo.x,oo.y,oo.z)}this.setAttribute("position",new it(d,3))}}}class _c extends pt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new R,f=new R,d=[],g=[],m=[],p=[];for(let _=0;_<=n;_++){const w=[],x=_/n;let b=0;_==0&&o==0?b=.5/t:_==n&&l==Math.PI&&(b=-.5/t);for(let M=0;M<=t;M++){const E=M/t;h.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),m.push(f.x,f.y,f.z),p.push(E+b,1-x),w.push(c++)}u.push(w)}for(let _=0;_<n;_++)for(let w=0;w<t;w++){const x=u[_][w+1],b=u[_][w],M=u[_+1][w],E=u[_+1][w+1];(_!==0||o>0)&&d.push(x,b,E),(_!==n-1||l<Math.PI)&&d.push(b,M,E)}this.setIndex(d),this.setAttribute("position",new it(g,3)),this.setAttribute("normal",new it(m,3)),this.setAttribute("uv",new it(p,2))}static fromJSON(e){return new _c(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ka extends mi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Pe(16777215),this.specular=new Pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cb extends mi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sc,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function ii(i,e,t){return gd(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function lo(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ub(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function zh(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=i[a+l]}return r}function _d(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class Qo{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hb extends Qo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ku,endingEnd:ku}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Vu:s=e,a=2*t-n;break;case Gu:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vu:o=e,l=2*n-t;break;case Gu:o=1,l=n+r[1]-r[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),m=g*g,p=m*g,_=-f*p+2*f*m-f*g,w=(1+f)*p+(-1.5-2*f)*m+(-.5+f)*g+1,x=(-1-d)*p+(1.5+d)*m+.5*g,b=d*p-d*m;for(let M=0;M!==a;++M)s[M]=_*o[u+M]+w*o[c+M]+x*o[l+M]+b*o[h+M];return s}}class fb extends Qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}}class db extends Qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Dn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=lo(t,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:lo(e.times,Array),values:lo(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new db(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ao:t=this.InterpolantFactoryMethodDiscrete;break;case Co:t=this.InterpolantFactoryMethodLinear;break;case va:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ao;case this.InterpolantFactoryMethodLinear:return Co;case this.InterpolantFactoryMethodSmooth:return va}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ii(n,s,o),this.values=ii(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&gd(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=ii(this.times),t=ii(this.values),n=this.getValueSize(),r=this.getInterpolation()===va,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){const m=t[h+g];if(m!==t[f+g]||m!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=ii(e,0,o),this.values=ii(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ii(this.times,0),t=ii(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Co;class zr extends Dn{}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=Ao;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class vd extends Dn{}vd.prototype.ValueTypeName="color";class vs extends Dn{}vs.prototype.ValueTypeName="number";class pb extends Qo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)nn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Nr extends Dn{InterpolantFactoryMethodLinear(e){return new pb(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.DefaultInterpolation=Co;Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends Dn{}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=Ao;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class xs extends Dn{}xs.prototype.ValueTypeName="vector";class mb{constructor(e,t=-1,n,r=F0){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=pi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(_b(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Dn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=ub(l);l=zh(l,1,u),c=zh(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new vs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,g,m){if(d.length!==0){const p=[],_=[];_d(d,p,_,g),p.length!==0&&m.push(new h(f,p,_))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let m=0;m<f[g].morphTargets.length;m++)d[f[g].morphTargets[m]]=-1;for(const m in d){const p=[],_=[];for(let w=0;w!==f[g].morphTargets.length;++w){const x=f[g];p.push(x.time),_.push(x.morphTarget===m?1:0)}r.push(new vs(".morphTargetInfluence["+m+"]",p,_))}l=d.length*o}else{const d=".bones["+t[h].name+"]";n(xs,d+".position",f,"pos",r),n(Nr,d+".quaternion",f,"rot",r),n(xs,d+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function gb(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return vs;case"vector":case"vector2":case"vector3":case"vector4":return xs;case"color":return vd;case"quaternion":return Nr;case"bool":case"boolean":return zr;case"string":return Ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function _b(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=gb(i.type);if(i.times===void 0){const t=[],n=[];_d(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Po={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vb{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const d=c[h],g=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const xb=new vb;class ea{constructor(e){this.manager=e!==void 0?e:xb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Un={};class yb extends Error{constructor(e,t){super(e),this.response=t}}class Mb extends ea{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Po.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Un[e]!==void 0){Un[e].push({onLoad:t,onProgress:n,onError:r});return}Un[e]=[],Un[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Un[e],h=c.body.getReader(),f=c.headers.get("Content-Length"),d=f?parseInt(f):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){w();function w(){h.read().then(({done:x,value:b})=>{if(x)_.close();else{m+=b.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let E=0,I=u.length;E<I;E++){const v=u[E];v.onProgress&&v.onProgress(M)}_.enqueue(b),w()}})}}});return new Response(p)}else throw new yb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Po.add(e,c);const u=Un[e];delete Un[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=Un[e];if(u===void 0)throw this.manager.itemError(e),c;delete Un[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class bb extends ea{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Po.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_s("img");function l(){u(),Po.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class xd extends ea{constructor(e){super(e)}load(e,t,n,r){const s=new Ft,o=new bb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ta extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ja=new Ce,Nh=new R,Uh=new R;class vc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cc,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wb extends vc{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=gs*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sb extends ta{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new wb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bh=new Ce,Jr=new R,Qa=new R;class Tb extends vc{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new Ye(2,1,1,1),new Ye(0,1,1,1),new Ye(3,1,1,1),new Ye(1,1,1,1),new Ye(3,0,1,1),new Ye(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),Qa.copy(n.position),Qa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Qa),n.updateMatrixWorld(),r.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh)}}class kh extends ta{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Tb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Eb extends vc{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yd extends ta{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DefaultUp),this.updateMatrix(),this.target=new ot,this.shadow=new Eb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Md extends ta{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xc{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ab{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Vh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Vh(){return(typeof performance>"u"?Date:performance).now()}const yc="\\[\\]\\.:\\/",Cb=new RegExp("["+yc+"]","g"),Mc="[^"+yc+"]",Lb="[^"+yc.replace("\\.","")+"]",Pb=/((?:WC+[\/:])*)/.source.replace("WC",Mc),Db=/(WCOD+)?/.source.replace("WCOD",Lb),Rb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mc),Ib=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mc),Fb=new RegExp("^"+Pb+Db+Rb+Ib+"$"),Ob=["material","materials","bones","map"];class zb{constructor(e,t,n){const r=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cb,"")}static parseTrackName(e){const t=Fb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Ob.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=zb;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Nb{constructor(e,t,n=0,r=1/0){this.ray=new Zo(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new ac,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return El(e,this,n,t),n.sort(Gh),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)El(e[r],this,n,t);return n.sort(Gh),n}}function Gh(i,e){return i.distance-e.distance}function El(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)El(r[s],e,t,!0)}}class Hh{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(yt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rc);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.6.9
*/var Wh={},Al=function(i){return URL.createObjectURL(new Blob([i],{type:"text/javascript"}))},bd=function(i){return new Worker(i)};try{URL.revokeObjectURL(Al(""))}catch{Al=function(e){return"data:application/javascript;charset=UTF-8,"+encodeURI(e)},bd=function(e){return new Worker(e,{type:"module"})}}var Ub=function(i,e,t,n,r){var s=bd(Wh[e]||(Wh[e]=Al(i)));return s.onerror=function(o){return r(o.error,null)},s.onmessage=function(o){return r(null,o.data)},s.postMessage(t,n),s},We=Uint8Array,xt=Uint16Array,Xn=Uint32Array,Br=new We([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),kr=new We([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ys=new We([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wd=function(i,e){for(var t=new xt(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var r=new Xn(t[30]),n=1;n<30;++n)for(var s=t[n];s<t[n+1];++s)r[s]=s-t[n]<<5|n;return[t,r]},Sd=wd(Br,2),bc=Sd[0],Do=Sd[1];bc[28]=258,Do[258]=28;var Td=wd(kr,0),Ed=Td[0],Cl=Td[1],Ms=new xt(32768);for(var rt=0;rt<32768;++rt){var ri=(rt&43690)>>>1|(rt&21845)<<1;ri=(ri&52428)>>>2|(ri&13107)<<2,ri=(ri&61680)>>>4|(ri&3855)<<4,Ms[rt]=((ri&65280)>>>8|(ri&255)<<8)>>>1}var on=function(i,e,t){for(var n=i.length,r=0,s=new xt(e);r<n;++r)++s[i[r]-1];var o=new xt(e);for(r=0;r<e;++r)o[r]=o[r-1]+s[r-1]<<1;var a;if(t){a=new xt(1<<e);var l=15-e;for(r=0;r<n;++r)if(i[r])for(var c=r<<4|i[r],u=e-i[r],h=o[i[r]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)a[Ms[h]>>>l]=c}else for(a=new xt(n),r=0;r<n;++r)i[r]&&(a[r]=Ms[o[i[r]-1]++]>>>15-i[r]);return a},jn=new We(288);for(var rt=0;rt<144;++rt)jn[rt]=8;for(var rt=144;rt<256;++rt)jn[rt]=9;for(var rt=256;rt<280;++rt)jn[rt]=7;for(var rt=280;rt<288;++rt)jn[rt]=8;var Pr=new We(32);for(var rt=0;rt<32;++rt)Pr[rt]=5;var Ad=on(jn,9,0),Cd=on(jn,9,1),Ld=on(Pr,5,0),Pd=on(Pr,5,1),_o=function(i){for(var e=i[0],t=1;t<i.length;++t)i[t]>e&&(e=i[t]);return e},Qt=function(i,e,t){var n=e/8|0;return(i[n]|i[n+1]<<8)>>(e&7)&t},vo=function(i,e){var t=e/8|0;return(i[t]|i[t+1]<<8|i[t+2]<<16)>>(e&7)},As=function(i){return(i/8|0)+(i&7&&1)},an=function(i,e,t){(e==null||e<0)&&(e=0),(t==null||t>i.length)&&(t=i.length);var n=new(i instanceof xt?xt:i instanceof Xn?Xn:We)(t-e);return n.set(i.subarray(e,t)),n},Cs=function(i,e,t){var n=i.length;if(!n||t&&!t.l&&n<5)return e||new We(0);var r=!e||t,s=!t||t.i;t||(t={}),e||(e=new We(n*3));var o=function(Z){var Fe=e.length;if(Z>Fe){var Te=new We(Math.max(Fe*2,Z));Te.set(e),e=Te}},a=t.f||0,l=t.p||0,c=t.b||0,u=t.l,h=t.d,f=t.m,d=t.n,g=n*8;do{if(!u){t.f=a=Qt(i,l,1);var m=Qt(i,l+1,3);if(l+=3,m)if(m==1)u=Cd,h=Pd,f=9,d=5;else if(m==2){var x=Qt(i,l,31)+257,b=Qt(i,l+10,15)+4,M=x+Qt(i,l+5,31)+1;l+=14;for(var E=new We(M),I=new We(19),v=0;v<b;++v)I[ys[v]]=Qt(i,l+v*3,7);l+=b*3;for(var A=_o(I),D=(1<<A)-1,Y=on(I,A,1),v=0;v<M;){var K=Y[Qt(i,l,D)];l+=K&15;var p=K>>>4;if(p<16)E[v++]=p;else{var z=0,F=0;for(p==16?(F=3+Qt(i,l,3),l+=2,z=E[v-1]):p==17?(F=3+Qt(i,l,7),l+=3):p==18&&(F=11+Qt(i,l,127),l+=7);F--;)E[v++]=z}}var j=E.subarray(0,x),X=E.subarray(x);f=_o(j),d=_o(X),u=on(j,f,1),h=on(X,d,1)}else throw"invalid block type";else{var p=As(l)+4,_=i[p-4]|i[p-3]<<8,w=p+_;if(w>n){if(s)throw"unexpected EOF";break}r&&o(c+_),e.set(i.subarray(p,w),c),t.b=c+=_,t.p=l=w*8;continue}if(l>g){if(s)throw"unexpected EOF";break}}r&&o(c+131072);for(var q=(1<<f)-1,V=(1<<d)-1,U=l;;U=l){var z=u[vo(i,l)&q],G=z>>>4;if(l+=z&15,l>g){if(s)throw"unexpected EOF";break}if(!z)throw"invalid length/literal";if(G<256)e[c++]=G;else if(G==256){U=l,u=null;break}else{var oe=G-254;if(G>264){var v=G-257,se=Br[v];oe=Qt(i,l,(1<<se)-1)+bc[v],l+=se}var le=h[vo(i,l)&V],pe=le>>>4;if(!le)throw"invalid distance";l+=le&15;var X=Ed[pe];if(pe>3){var se=kr[pe];X+=vo(i,l)&(1<<se)-1,l+=se}if(l>g){if(s)throw"unexpected EOF";break}r&&o(c+131072);for(var we=c+oe;c<we;c+=4)e[c]=e[c-X],e[c+1]=e[c+1-X],e[c+2]=e[c+2-X],e[c+3]=e[c+3-X];c=we}}t.l=u,t.p=U,t.b=c,u&&(a=1,t.m=f,t.d=h,t.n=d)}while(!a);return c==e.length?e:an(e,0,c)},yn=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8},hr=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>>8,i[n+2]|=t>>>16},xo=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var r=t.length,s=t.slice();if(!r)return[Vn,0];if(r==1){var o=new We(t[0].s+1);return o[t[0].s]=1,[o,1]}t.sort(function(M,E){return M.f-E.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,u=1,h=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};u!=r-1;)a=t[t[c].f<t[h].f?c++:h++],l=t[c!=u&&t[c].f<t[h].f?c++:h++],t[u++]={s:-1,f:a.f+l.f,l:a,r:l};for(var f=s[0].s,n=1;n<r;++n)s[n].s>f&&(f=s[n].s);var d=new xt(f+1),g=Ro(t[u-1],d,0);if(g>e){var n=0,m=0,p=g-e,_=1<<p;for(s.sort(function(E,I){return d[I.s]-d[E.s]||E.f-I.f});n<r;++n){var w=s[n].s;if(d[w]>e)m+=_-(1<<g-d[w]),d[w]=e;else break}for(m>>>=p;m>0;){var x=s[n].s;d[x]<e?m-=1<<e-d[x]++-1:++n}for(;n>=0&&m;--n){var b=s[n].s;d[b]==e&&(--d[b],++m)}g=e}return[new We(d),g]},Ro=function(i,e,t){return i.s==-1?Math.max(Ro(i.l,e,t+1),Ro(i.r,e,t+1)):e[i.s]=t},Ll=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new xt(++e),n=0,r=i[0],s=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==r&&a!=e)++s;else{if(!r&&s>2){for(;s>138;s-=138)o(32754);s>2&&(o(s>10?s-11<<5|28690:s-3<<5|12305),s=0)}else if(s>3){for(o(r),--s;s>6;s-=6)o(8304);s>2&&(o(s-3<<5|8208),s=0)}for(;s--;)o(r);s=1,r=i[a]}return[t.subarray(0,n),e]},fr=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},ls=function(i,e,t){var n=t.length,r=As(e+2);i[r]=n&255,i[r+1]=n>>>8,i[r+2]=i[r]^255,i[r+3]=i[r+1]^255;for(var s=0;s<n;++s)i[r+s+4]=t[s];return(r+4+n)*8},Pl=function(i,e,t,n,r,s,o,a,l,c,u){yn(e,u++,t),++r[256];for(var h=xo(r,15),f=h[0],d=h[1],g=xo(s,15),m=g[0],p=g[1],_=Ll(f),w=_[0],x=_[1],b=Ll(m),M=b[0],E=b[1],I=new xt(19),v=0;v<w.length;++v)I[w[v]&31]++;for(var v=0;v<M.length;++v)I[M[v]&31]++;for(var A=xo(I,7),D=A[0],Y=A[1],K=19;K>4&&!D[ys[K-1]];--K);var z=c+5<<3,F=fr(r,jn)+fr(s,Pr)+o,j=fr(r,f)+fr(s,m)+o+14+3*K+fr(I,D)+(2*I[16]+3*I[17]+7*I[18]);if(z<=F&&z<=j)return ls(e,u,i.subarray(l,l+c));var X,q,V,U;if(yn(e,u,1+(j<F)),u+=2,j<F){X=on(f,d,0),q=f,V=on(m,p,0),U=m;var G=on(D,Y,0);yn(e,u,x-257),yn(e,u+5,E-1),yn(e,u+10,K-4),u+=14;for(var v=0;v<K;++v)yn(e,u+3*v,D[ys[v]]);u+=3*K;for(var oe=[w,M],se=0;se<2;++se)for(var le=oe[se],v=0;v<le.length;++v){var pe=le[v]&31;yn(e,u,G[pe]),u+=D[pe],pe>15&&(yn(e,u,le[v]>>>5&127),u+=le[v]>>>12)}}else X=Ad,q=jn,V=Ld,U=Pr;for(var v=0;v<a;++v)if(n[v]>255){var pe=n[v]>>>18&31;hr(e,u,X[pe+257]),u+=q[pe+257],pe>7&&(yn(e,u,n[v]>>>23&31),u+=Br[pe]);var we=n[v]&31;hr(e,u,V[we]),u+=U[we],we>3&&(hr(e,u,n[v]>>>5&8191),u+=kr[we])}else hr(e,u,X[n[v]]),u+=q[n[v]];return hr(e,u,X[256]),u+q[256]},Dd=new Xn([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Vn=new We(0),Rd=function(i,e,t,n,r,s){var o=i.length,a=new We(n+o+5*(1+Math.ceil(o/7e3))+r),l=a.subarray(n,a.length-r),c=0;if(!e||o<8)for(var u=0;u<=o;u+=65535){var h=u+65535;h<o?c=ls(l,c,i.subarray(u,h)):(l[u]=s,c=ls(l,c,i.subarray(u,o)))}else{for(var f=Dd[e-1],d=f>>>13,g=f&8191,m=(1<<t)-1,p=new xt(32768),_=new xt(m+1),w=Math.ceil(t/3),x=2*w,b=function(W){return(i[W]^i[W+1]<<w^i[W+2]<<x)&m},M=new Xn(25e3),E=new xt(288),I=new xt(32),v=0,A=0,u=0,D=0,Y=0,K=0;u<o;++u){var z=b(u),F=u&32767,j=_[z];if(p[F]=j,_[z]=F,Y<=u){var X=o-u;if((v>7e3||D>24576)&&X>423){c=Pl(i,l,0,M,E,I,A,D,K,u-K,c),D=v=A=0,K=u;for(var q=0;q<286;++q)E[q]=0;for(var q=0;q<30;++q)I[q]=0}var V=2,U=0,G=g,oe=F-j&32767;if(X>2&&z==b(u-oe))for(var se=Math.min(d,X)-1,le=Math.min(32767,u),pe=Math.min(258,X);oe<=le&&--G&&F!=j;){if(i[u+V]==i[u+V-oe]){for(var we=0;we<pe&&i[u+we]==i[u+we-oe];++we);if(we>V){if(V=we,U=oe,we>se)break;for(var Z=Math.min(oe,we-2),Fe=0,q=0;q<Z;++q){var Te=u-oe+q+32768&32767,Ae=p[Te],xe=Te-Ae+32768&32767;xe>Fe&&(Fe=xe,j=Te)}}}F=j,j=p[F],oe+=F-j+32768&32767}if(U){M[D++]=268435456|Do[V]<<18|Cl[U];var Ge=Do[V]&31,C=Cl[U]&31;A+=Br[Ge]+kr[C],++E[257+Ge],++I[C],Y=u+V,++v}else M[D++]=i[u],++E[i[u]]}}c=Pl(i,l,s,M,E,I,A,D,K,u-K,c),!s&&c&7&&(c=ls(l,c+1,Vn))}return an(a,0,n+As(c)+r)},Id=function(){for(var i=new Xn(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&3988292384)^t>>>1;i[e]=t}return i}(),Vr=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=Id[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},wc=function(){var i=1,e=0;return{p:function(t){for(var n=i,r=e,s=t.length,o=0;o!=s;){for(var a=Math.min(o+2655,s);o<a;++o)r+=n+=t[o];n=(n&65535)+15*(n>>16),r=(r&65535)+15*(r>>16)}i=n,e=r},d:function(){return i%=65521,e%=65521,(i&255)<<24|i>>>8<<16|(e&255)<<8|e>>>8}}},Hi=function(i,e,t,n,r){return Rd(i,e.level==null?6:e.level,e.mem==null?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):12+e.mem,t,n,!r)},Ls=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},Xh=function(i,e,t){for(var n=i(),r=i.toString(),s=r.slice(r.indexOf("[")+1,r.lastIndexOf("]")).replace(/ /g,"").split(","),o=0;o<n.length;++o){var a=n[o],l=s[o];if(typeof a=="function"){e+=";"+l+"=";var c=a.toString();if(a.prototype)if(c.indexOf("[native code]")!=-1){var u=c.indexOf(" ",8)+1;e+=c.slice(u,c.indexOf("(",u))}else{e+=c;for(var h in a.prototype)e+=";"+l+".prototype."+h+"="+a.prototype[h].toString()}else e+=c}else t[l]=a}return[e,t]},co=[],Bb=function(i){var e=[];for(var t in i)(i[t]instanceof We||i[t]instanceof xt||i[t]instanceof Xn)&&e.push((i[t]=new i[t].constructor(i[t])).buffer);return e},Fd=function(i,e,t,n){var r;if(!co[t]){for(var s="",o={},a=i.length-1,l=0;l<a;++l)r=Xh(i[l],s,o),s=r[0],o=r[1];co[t]=Xh(i[a],s,o)}var c=Ls({},co[t][1]);return Ub(co[t][0]+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+e.toString()+"}",t,c,Bb(c),n)},Gr=function(){return[We,xt,Xn,Br,kr,ys,bc,Ed,Cd,Pd,Ms,on,_o,Qt,vo,As,an,Cs,jr,gi,Sc]},Hr=function(){return[We,xt,Xn,Br,kr,ys,Do,Cl,Ad,jn,Ld,Pr,Ms,Dd,Vn,on,yn,hr,xo,Ro,Ll,fr,ls,Pl,As,an,Rd,Hi,Ps,gi]},Od=function(){return[Tc,Ac,Je,Vr,Id]},zd=function(){return[Ec,Bd]},Nd=function(){return[Cc,Je,wc]},Ud=function(){return[kd]},gi=function(i){return postMessage(i,[i.buffer])},Sc=function(i){return i&&i.size&&new We(i.size)},Wr=function(i,e,t,n,r,s){var o=Fd(t,n,r,function(a,l){o.terminate(),s(a,l)});return o.postMessage([i,e],e.consume?[i.buffer]:[]),function(){o.terminate()}},ln=function(i){return i.ondata=function(e,t){return postMessage([e,t],[e.buffer])},function(e){return i.push(e.data[0],e.data[1])}},Xr=function(i,e,t,n,r){var s,o=Fd(i,n,r,function(a,l){a?(o.terminate(),e.ondata.call(e,a)):(l[1]&&o.terminate(),e.ondata.call(e,a,l[0],l[1]))});o.postMessage(t),e.push=function(a,l){if(s)throw"stream finished";if(!e.ondata)throw"no stream handler";o.postMessage([a,s=l],[a.buffer])},e.terminate=function(){o.terminate()}},Rt=function(i,e){return i[e]|i[e+1]<<8},ct=function(i,e){return(i[e]|i[e+1]<<8|i[e+2]<<16|i[e+3]<<24)>>>0},el=function(i,e){return ct(i,e)+ct(i,e+4)*4294967296},Je=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8},Tc=function(i,e){var t=e.filename;if(i[0]=31,i[1]=139,i[2]=8,i[8]=e.level<2?4:e.level==9?2:0,i[9]=3,e.mtime!=0&&Je(i,4,Math.floor(new Date(e.mtime||Date.now())/1e3)),t){i[3]=8;for(var n=0;n<=t.length;++n)i[n+10]=t.charCodeAt(n)}},Ec=function(i){if(i[0]!=31||i[1]!=139||i[2]!=8)throw"invalid gzip data";var e=i[3],t=10;e&4&&(t+=i[10]|(i[11]<<8)+2);for(var n=(e>>3&1)+(e>>4&1);n>0;n-=!i[t++]);return t+(e&2)},Bd=function(i){var e=i.length;return(i[e-4]|i[e-3]<<8|i[e-2]<<16|i[e-1]<<24)>>>0},Ac=function(i){return 10+(i.filename&&i.filename.length+1||0)},Cc=function(i,e){var t=e.level,n=t==0?0:t<6?1:t==9?3:2;i[0]=120,i[1]=n<<6|(n?32-2*n:1)},kd=function(i){if((i[0]&15)!=8||i[0]>>>4>7||(i[0]<<8|i[1])%31)throw"invalid zlib data";if(i[1]&32)throw"invalid zlib data: preset dictionaries not supported"};function Lc(i,e){return!e&&typeof i=="function"&&(e=i,i={}),this.ondata=e,i}var Ln=function(){function i(e,t){!t&&typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{}}return i.prototype.p=function(e,t){this.ondata(Hi(e,this.o,0,0,!t),t)},i.prototype.push=function(e,t){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";this.d=t,this.p(e,t||!1)},i}(),Vd=function(){function i(e,t){Xr([Hr,function(){return[ln,Ln]}],this,Lc.call(this,e,t),function(n){var r=new Ln(n.data);onmessage=ln(r)},6)}return i}();function Gd(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Wr(i,e,[Hr],function(n){return gi(Ps(n.data[0],n.data[1]))},0,t)}function Ps(i,e){return Hi(i,e||{},0,0)}var kt=function(){function i(e){this.s={},this.p=new We(0),this.ondata=e}return i.prototype.e=function(e){if(this.d)throw"stream finished";if(!this.ondata)throw"no stream handler";var t=this.p.length,n=new We(t+e.length);n.set(this.p),n.set(e,t),this.p=n},i.prototype.c=function(e){this.d=this.s.i=e||!1;var t=this.s.b,n=Cs(this.p,this.o,this.s);this.ondata(an(n,t,this.s.b),this.d),this.o=an(n,this.s.b-32768),this.s.b=this.o.length,this.p=an(this.p,this.s.p/8|0),this.s.p&=7},i.prototype.push=function(e,t){this.e(e),this.c(t)},i}(),Pc=function(){function i(e){this.ondata=e,Xr([Gr,function(){return[ln,kt]}],this,0,function(){var t=new kt;onmessage=ln(t)},7)}return i}();function Dc(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Wr(i,e,[Gr],function(n){return gi(jr(n.data[0],Sc(n.data[1])))},1,t)}function jr(i,e){return Cs(i,e)}var Io=function(){function i(e,t){this.c=Vr(),this.l=0,this.v=1,Ln.call(this,e,t)}return i.prototype.push=function(e,t){Ln.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){this.c.p(e),this.l+=e.length;var n=Hi(e,this.o,this.v&&Ac(this.o),t&&8,!t);this.v&&(Tc(n,this.o),this.v=0),t&&(Je(n,n.length-8,this.c.d()),Je(n,n.length-4,this.l)),this.ondata(n,t)},i}(),jh=function(){function i(e,t){Xr([Hr,Od,function(){return[ln,Ln,Io]}],this,Lc.call(this,e,t),function(n){var r=new Io(n.data);onmessage=ln(r)},8)}return i}();function qh(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Wr(i,e,[Hr,Od,function(){return[Fo]}],function(n){return gi(Fo(n.data[0],n.data[1]))},2,t)}function Fo(i,e){e||(e={});var t=Vr(),n=i.length;t.p(i);var r=Hi(i,e,Ac(e),8),s=r.length;return Tc(r,e),Je(r,s-8,t.d()),Je(r,s-4,n),r}var Oo=function(){function i(e){this.v=1,kt.call(this,e)}return i.prototype.push=function(e,t){if(kt.prototype.e.call(this,e),this.v){var n=this.p.length>3?Ec(this.p):4;if(n>=this.p.length&&!t)return;this.p=this.p.subarray(n),this.v=0}if(t){if(this.p.length<8)throw"invalid gzip stream";this.p=this.p.subarray(0,-8)}kt.prototype.c.call(this,t)},i}(),Hd=function(){function i(e){this.ondata=e,Xr([Gr,zd,function(){return[ln,kt,Oo]}],this,0,function(){var t=new Oo;onmessage=ln(t)},9)}return i}();function Wd(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Wr(i,e,[Gr,zd,function(){return[zo]}],function(n){return gi(zo(n.data[0]))},3,t)}function zo(i,e){return Cs(i.subarray(Ec(i),-8),e||new We(Bd(i)))}var Dl=function(){function i(e,t){this.c=wc(),this.v=1,Ln.call(this,e,t)}return i.prototype.push=function(e,t){Ln.prototype.push.call(this,e,t)},i.prototype.p=function(e,t){this.c.p(e);var n=Hi(e,this.o,this.v&&2,t&&4,!t);this.v&&(Cc(n,this.o),this.v=0),t&&Je(n,n.length-4,this.c.d()),this.ondata(n,t)},i}(),kb=function(){function i(e,t){Xr([Hr,Nd,function(){return[ln,Ln,Dl]}],this,Lc.call(this,e,t),function(n){var r=new Dl(n.data);onmessage=ln(r)},10)}return i}();function Vb(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Wr(i,e,[Hr,Nd,function(){return[Rl]}],function(n){return gi(Rl(n.data[0],n.data[1]))},4,t)}function Rl(i,e){e||(e={});var t=wc();t.p(i);var n=Hi(i,e,2,4);return Cc(n,e),Je(n,n.length-4,t.d()),n}var No=function(){function i(e){this.v=1,kt.call(this,e)}return i.prototype.push=function(e,t){if(kt.prototype.e.call(this,e),this.v){if(this.p.length<2&&!t)return;this.p=this.p.subarray(2),this.v=0}if(t){if(this.p.length<4)throw"invalid zlib stream";this.p=this.p.subarray(0,-4)}kt.prototype.c.call(this,t)},i}(),Xd=function(){function i(e){this.ondata=e,Xr([Gr,Ud,function(){return[ln,kt,No]}],this,0,function(){var t=new No;onmessage=ln(t)},11)}return i}();function jd(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return Wr(i,e,[Gr,Ud,function(){return[bs]}],function(n){return gi(bs(n.data[0],Sc(n.data[1])))},5,t)}function bs(i,e){return Cs((kd(i),i.subarray(2,-4)),e)}var qd=function(){function i(e){this.G=Oo,this.I=kt,this.Z=No,this.ondata=e}return i.prototype.push=function(e,t){if(!this.ondata)throw"no stream handler";if(this.s)this.s.push(e,t);else{if(this.p&&this.p.length){var n=new We(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length)}else this.p=e;if(this.p.length>2){var r=this,s=function(){r.ondata.apply(r,arguments)};this.s=this.p[0]==31&&this.p[1]==139&&this.p[2]==8?new this.G(s):(this.p[0]&15)!=8||this.p[0]>>4>7||(this.p[0]<<8|this.p[1])%31?new this.I(s):new this.Z(s),this.s.push(this.p,t),this.p=null}}},i}(),Gb=function(){function i(e){this.G=Hd,this.I=Pc,this.Z=Xd,this.ondata=e}return i.prototype.push=function(e,t){qd.prototype.push.call(this,e,t)},i}();function Hb(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";return i[0]==31&&i[1]==139&&i[2]==8?Wd(i,e,t):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?Dc(i,e,t):jd(i,e,t)}function Wb(i,e){return i[0]==31&&i[1]==139&&i[2]==8?zo(i,e):(i[0]&15)!=8||i[0]>>4>7||(i[0]<<8|i[1])%31?jr(i,e):bs(i,e)}var Rc=function(i,e,t,n){for(var r in i){var s=i[r],o=e+r;s instanceof We?t[o]=[s,n]:Array.isArray(s)?t[o]=[s[0],Ls(n,s[1])]:Rc(s,o+"/",t,n)}},Yh=typeof TextEncoder<"u"&&new TextEncoder,Il=typeof TextDecoder<"u"&&new TextDecoder,Yd=0;try{Il.decode(Vn,{stream:!0}),Yd=1}catch{}var $d=function(i){for(var e="",t=0;;){var n=i[t++],r=(n>127)+(n>223)+(n>239);if(t+r>i.length)return[e,an(i,t-1)];r?r==3?(n=((n&15)<<18|(i[t++]&63)<<12|(i[t++]&63)<<6|i[t++]&63)-65536,e+=String.fromCharCode(55296|n>>10,56320|n&1023)):r&1?e+=String.fromCharCode((n&31)<<6|i[t++]&63):e+=String.fromCharCode((n&15)<<12|(i[t++]&63)<<6|i[t++]&63):e+=String.fromCharCode(n)}},Xb=function(){function i(e){this.ondata=e,Yd?this.t=new TextDecoder:this.p=Vn}return i.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(t=!!t,this.t){if(this.ondata(this.t.decode(e,{stream:!0}),t),t){if(this.t.decode().length)throw"invalid utf-8 data";this.t=null}return}if(!this.p)throw"stream finished";var n=new We(this.p.length+e.length);n.set(this.p),n.set(e,this.p.length);var r=$d(n),s=r[0],o=r[1];if(t){if(o.length)throw"invalid utf-8 data";this.p=null}else this.p=o;this.ondata(s,t)},i}(),jb=function(){function i(e){this.ondata=e}return i.prototype.push=function(e,t){if(!this.ondata)throw"no callback";if(this.d)throw"stream finished";this.ondata(di(e),this.d=t||!1)},i}();function di(i,e){if(e){for(var t=new We(i.length),n=0;n<i.length;++n)t[n]=i.charCodeAt(n);return t}if(Yh)return Yh.encode(i);for(var r=i.length,s=new We(i.length+(i.length>>1)),o=0,a=function(u){s[o++]=u},n=0;n<r;++n){if(o+5>s.length){var l=new We(o+8+(r-n<<1));l.set(s),s=l}var c=i.charCodeAt(n);c<128||e?a(c):c<2048?(a(192|c>>6),a(128|c&63)):c>55295&&c<57344?(c=65536+(c&1023<<10)|i.charCodeAt(++n)&1023,a(240|c>>18),a(128|c>>12&63),a(128|c>>6&63),a(128|c&63)):(a(224|c>>12),a(128|c>>6&63),a(128|c&63))}return an(s,0,o)}function Ic(i,e){if(e){for(var t="",n=0;n<i.length;n+=16384)t+=String.fromCharCode.apply(null,i.subarray(n,n+16384));return t}else{if(Il)return Il.decode(i);var r=$d(i),s=r[0],o=r[1];if(o.length)throw"invalid utf-8 data";return s}}var Zd=function(i){return i==1?3:i<6?2:i==9?1:0},Kd=function(i,e){return e+30+Rt(i,e+26)+Rt(i,e+28)},Jd=function(i,e,t){var n=Rt(i,e+28),r=Ic(i.subarray(e+46,e+46+n),!(Rt(i,e+8)&2048)),s=e+46+n,o=ct(i,e+20),a=t&&o==4294967295?Qd(i,s):[o,ct(i,e+24),ct(i,e+42)],l=a[0],c=a[1],u=a[2];return[Rt(i,e+10),l,c,r,s+Rt(i,e+30)+Rt(i,e+32),u]},Qd=function(i,e){for(;Rt(i,e)!=1;e+=4+Rt(i,e+2));return[el(i,e+12),el(i,e+4),el(i,e+20)]},ui=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;if(n>65535)throw"extra field too long";e+=n+4}return e},Dr=function(i,e,t,n,r,s,o,a){var l=n.length,c=t.extra,u=a&&a.length,h=ui(c);Je(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(s==null&&8),i[e++]=r&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var f=new Date(t.mtime==null?Date.now():t.mtime),d=f.getFullYear()-1980;if(d<0||d>119)throw"date not in range 1980-2099";if(Je(i,e,d<<25|f.getMonth()+1<<21|f.getDate()<<16|f.getHours()<<11|f.getMinutes()<<5|f.getSeconds()>>>1),e+=4,s!=null&&(Je(i,e,t.crc),Je(i,e+4,s),Je(i,e+8,t.size)),Je(i,e+12,l),Je(i,e+14,h),e+=16,o!=null&&(Je(i,e,u),Je(i,e+6,t.attrs),Je(i,e+10,o),e+=14),i.set(n,e),e+=l,h)for(var g in c){var m=c[g],p=m.length;Je(i,e,+g),Je(i,e+2,p),i.set(m,e+4),e+=4+p}return u&&(i.set(a,e),e+=u),e},Fc=function(i,e,t,n,r){Je(i,e,101010256),Je(i,e+8,t),Je(i,e+10,t),Je(i,e+12,n),Je(i,e+16,r)},ws=function(){function i(e){this.filename=e,this.c=Vr(),this.size=0,this.compression=0}return i.prototype.process=function(e,t){this.ondata(null,e,t)},i.prototype.push=function(e,t){if(!this.ondata)throw"no callback - add to ZIP archive before pushing";this.c.p(e),this.size+=e.length,t&&(this.crc=this.c.d()),this.process(e,t||!1)},i}(),qb=function(){function i(e,t){var n=this;t||(t={}),ws.call(this,e),this.d=new Ln(t,function(r,s){n.ondata(null,r,s)}),this.compression=8,this.flag=Zd(t.level)}return i.prototype.process=function(e,t){try{this.d.push(e,t)}catch(n){this.ondata(n,null,t)}},i.prototype.push=function(e,t){ws.prototype.push.call(this,e,t)},i}(),Yb=function(){function i(e,t){var n=this;t||(t={}),ws.call(this,e),this.d=new Vd(t,function(r,s,o){n.ondata(r,s,o)}),this.compression=8,this.flag=Zd(t.level),this.terminate=this.d.terminate}return i.prototype.process=function(e,t){this.d.push(e,t)},i.prototype.push=function(e,t){ws.prototype.push.call(this,e,t)},i}(),$b=function(){function i(e){this.ondata=e,this.u=[],this.d=1}return i.prototype.add=function(e){var t=this;if(this.d&2)throw"stream finished";var n=di(e.filename),r=n.length,s=e.comment,o=s&&di(s),a=r!=e.filename.length||o&&s.length!=o.length,l=r+ui(e.extra)+30;if(r>65535)throw"filename too long";var c=new We(l);Dr(c,0,e,n,a);var u=[c],h=function(){for(var p=0,_=u;p<_.length;p++){var w=_[p];t.ondata(null,w,!1)}u=[]},f=this.d;this.d=0;var d=this.u.length,g=Ls(e,{f:n,u:a,o,t:function(){e.terminate&&e.terminate()},r:function(){if(h(),f){var p=t.u[d+1];p?p.r():t.d=1}f=1}}),m=0;e.ondata=function(p,_,w){if(p)t.ondata(p,_,w),t.terminate();else if(m+=_.length,u.push(_),w){var x=new We(16);Je(x,0,134695760),Je(x,4,e.crc),Je(x,8,m),Je(x,12,e.size),u.push(x),g.c=m,g.b=l+m+16,g.crc=e.crc,g.size=e.size,f&&g.r(),f=1}else f&&h()},this.u.push(g)},i.prototype.end=function(){var e=this;if(this.d&2)throw this.d&1?"stream finishing":"stream finished";this.d?this.e():this.u.push({r:function(){!(e.d&1)||(e.u.splice(-1,1),e.e())},t:function(){}}),this.d=3},i.prototype.e=function(){for(var e=0,t=0,n=0,r=0,s=this.u;r<s.length;r++){var o=s[r];n+=46+o.f.length+ui(o.extra)+(o.o?o.o.length:0)}for(var a=new We(n+22),l=0,c=this.u;l<c.length;l++){var o=c[l];Dr(a,e,o,o.f,o.u,o.c,t,o.o),e+=46+o.f.length+ui(o.extra)+(o.o?o.o.length:0),t+=o.b}Fc(a,e,this.u.length,n,t),this.ondata(null,a,!0),this.d=2},i.prototype.terminate=function(){for(var e=0,t=this.u;e<t.length;e++){var n=t[e];n.t()}this.d=2},i}();function Zb(i,e,t){if(t||(t=e,e={}),typeof t!="function")throw"no callback";var n={};Rc(i,"",n,e);var r=Object.keys(n),s=r.length,o=0,a=0,l=s,c=new Array(s),u=[],h=function(){for(var m=0;m<u.length;++m)u[m]()},f=function(){var m=new We(a+22),p=o,_=a-o;a=0;for(var w=0;w<l;++w){var x=c[w];try{var b=x.c.length;Dr(m,a,x,x.f,x.u,b);var M=30+x.f.length+ui(x.extra),E=a+M;m.set(x.c,E),Dr(m,o,x,x.f,x.u,b,a,x.m),o+=16+M+(x.m?x.m.length:0),a=E+b}catch(I){return t(I,null)}}Fc(m,o,c.length,_,p),t(null,m)};s||f();for(var d=function(m){var p=r[m],_=n[p],w=_[0],x=_[1],b=Vr(),M=w.length;b.p(w);var E=di(p),I=E.length,v=x.comment,A=v&&di(v),D=A&&A.length,Y=ui(x.extra),K=x.level==0?0:8,z=function(F,j){if(F)h(),t(F,null);else{var X=j.length;c[m]=Ls(x,{size:M,crc:b.d(),c:j,f:E,m:A,u:I!=p.length||A&&v.length!=D,compression:K}),o+=30+I+Y+X,a+=76+2*(I+Y)+(D||0)+X,--s||f()}};if(I>65535&&z("filename too long",null),!K)z(null,w);else if(M<16e4)try{z(null,Ps(w,x))}catch(F){z(F,null)}else u.push(Gd(w,x,z))},g=0;g<l;++g)d(g);return h}function Kb(i,e){e||(e={});var t={},n=[];Rc(i,"",t,e);var r=0,s=0;for(var o in t){var a=t[o],l=a[0],c=a[1],u=c.level==0?0:8,h=di(o),f=h.length,d=c.comment,g=d&&di(d),m=g&&g.length,p=ui(c.extra);if(f>65535)throw"filename too long";var _=u?Ps(l,c):l,w=_.length,x=Vr();x.p(l),n.push(Ls(c,{size:l.length,crc:x.d(),c:_,f:h,m:g,u:f!=o.length||g&&d.length!=m,o:r,compression:u})),r+=30+f+p+w,s+=76+2*(f+p)+(m||0)+w}for(var b=new We(s+22),M=r,E=s-r,I=0;I<n.length;++I){var h=n[I];Dr(b,h.o,h,h.f,h.u,h.c.length);var v=30+h.f.length+ui(h.extra);b.set(h.c,h.o+v),Dr(b,r,h,h.f,h.u,h.c.length,h.o,h.m),r+=16+v+(h.m?h.m.length:0)}return Fc(b,r,n.length,E,M),b}var ep=function(){function i(){}return i.prototype.push=function(e,t){this.ondata(null,e,t)},i.compression=0,i}(),Jb=function(){function i(){var e=this;this.i=new kt(function(t,n){e.ondata(null,t,n)})}return i.prototype.push=function(e,t){try{this.i.push(e,t)}catch(n){this.ondata(n,e,t)}},i.compression=8,i}(),Qb=function(){function i(e,t){var n=this;t<32e4?this.i=new kt(function(r,s){n.ondata(null,r,s)}):(this.i=new Pc(function(r,s,o){n.ondata(r,s,o)}),this.terminate=this.i.terminate)}return i.prototype.push=function(e,t){this.i.terminate&&(e=an(e,0)),this.i.push(e,t)},i.compression=8,i}(),ew=function(){function i(e){this.onfile=e,this.k=[],this.o={0:ep},this.p=Vn}return i.prototype.push=function(e,t){var n=this;if(!this.onfile)throw"no callback";if(!this.p)throw"stream finished";if(this.c>0){var r=Math.min(this.c,e.length),s=e.subarray(0,r);if(this.c-=r,this.d?this.d.push(s,!this.c):this.k[0].push(s),e=e.subarray(r),e.length)return this.push(e,t)}else{var o=0,a=0,l=void 0,c=void 0;this.p.length?e.length?(c=new We(this.p.length+e.length),c.set(this.p),c.set(e,this.p.length)):c=this.p:c=e;for(var u=c.length,h=this.c,f=h&&this.d,d=function(){var _,w=ct(c,a);if(w==67324752){o=1,l=a,g.d=null,g.c=0;var x=Rt(c,a+6),b=Rt(c,a+8),M=x&2048,E=x&8,I=Rt(c,a+26),v=Rt(c,a+28);if(u>a+30+I+v){var A=[];g.k.unshift(A),o=2;var D=ct(c,a+18),Y=ct(c,a+22),K=Ic(c.subarray(a+30,a+=30+I),!M);D==4294967295?(_=E?[-2]:Qd(c,a),D=_[0],Y=_[1]):E&&(D=-1),a+=v,g.c=D;var z,F={name:K,compression:b,start:function(){if(!F.ondata)throw"no callback";if(!D)F.ondata(null,Vn,!0);else{var j=n.o[b];if(!j)throw"unknown compression type "+b;z=D<0?new j(K):new j(K,D,Y),z.ondata=function(U,G,oe){F.ondata(U,G,oe)};for(var X=0,q=A;X<q.length;X++){var V=q[X];z.push(V,!1)}n.k[0]==A&&n.c?n.d=z:z.push(Vn,!0)}},terminate:function(){z&&z.terminate&&z.terminate()}};D>=0&&(F.size=D,F.originalSize=Y),g.onfile(F)}return"break"}else if(h){if(w==134695760)return l=a+=12+(h==-2&&8),o=3,g.c=0,"break";if(w==33639248)return l=a-=4,o=3,g.c=0,"break"}},g=this;a<u-4;++a){var m=d();if(m==="break")break}if(this.p=Vn,h<0){var p=o?c.subarray(0,l-12-(h==-2&&8)-(ct(c,l-16)==134695760&&4)):c.subarray(0,a);f?f.push(p,!!o):this.k[+(o==2)].push(p)}if(o&2)return this.push(c.subarray(a),t);this.p=c.subarray(a)}if(t){if(this.c)throw"invalid zip file";this.p=null}},i.prototype.register=function(e){this.o[e.compression]=e},i}();function tw(i,e){if(typeof e!="function")throw"no callback";for(var t=[],n=function(){for(var f=0;f<t.length;++f)t[f]()},r={},s=i.length-22;ct(i,s)!=101010256;--s)if(!s||i.length-s>65558){e("invalid zip file",null);return}var o=Rt(i,s+8);o||e(null,{});var a=o,l=ct(i,s+16),c=l==4294967295;if(c){if(s=ct(i,s-12),ct(i,s)!=101075792){e("invalid zip file",null);return}a=o=ct(i,s+32),l=ct(i,s+48)}for(var u=function(f){var d=Jd(i,l,c),g=d[0],m=d[1],p=d[2],_=d[3],w=d[4],x=d[5],b=Kd(i,x);l=w;var M=function(I,v){I?(n(),e(I,null)):(r[_]=v,--o||e(null,r))};if(!g)M(null,an(i,b,b+m));else if(g==8){var E=i.subarray(b,b+m);if(m<32e4)try{M(null,jr(E,new We(p)))}catch(I){M(I,null)}else t.push(Dc(E,{size:p},M))}else M("unknown compression type "+g,null)},h=0;h<a;++h)u();return n}function nw(i){for(var e={},t=i.length-22;ct(i,t)!=101010256;--t)if(!t||i.length-t>65558)throw"invalid zip file";var n=Rt(i,t+8);if(!n)return{};var r=ct(i,t+16),s=r==4294967295;if(s){if(t=ct(i,t-12),ct(i,t)!=101075792)throw"invalid zip file";n=ct(i,t+32),r=ct(i,t+48)}for(var o=0;o<n;++o){var a=Jd(i,r,s),l=a[0],c=a[1],u=a[2],h=a[3],f=a[4],d=a[5],g=Kd(i,d);if(r=f,!l)e[h]=an(i,g,g+c);else if(l==8)e[h]=jr(i.subarray(g,g+c),new We(u));else throw"unknown compression type "+l}return e}const iw=Object.freeze(Object.defineProperty({__proto__:null,Deflate:Ln,AsyncDeflate:Vd,deflate:Gd,deflateSync:Ps,Inflate:kt,AsyncInflate:Pc,inflate:Dc,inflateSync:jr,Gzip:Io,AsyncGzip:jh,gzip:qh,gzipSync:Fo,Gunzip:Oo,AsyncGunzip:Hd,gunzip:Wd,gunzipSync:zo,Zlib:Dl,AsyncZlib:kb,zlib:Vb,zlibSync:Rl,Unzlib:No,AsyncUnzlib:Xd,unzlib:jd,unzlibSync:bs,compress:qh,AsyncCompress:jh,compressSync:Fo,Compress:Io,Decompress:qd,AsyncDecompress:Gb,decompress:Hb,decompressSync:Wb,DecodeUTF8:Xb,EncodeUTF8:jb,strToU8:di,strFromU8:Ic,ZipPassThrough:ws,ZipDeflate:qb,AsyncZipDeflate:Yb,Zip:$b,zip:Zb,zipSync:Kb,UnzipPassThrough:ep,UnzipInflate:Jb,AsyncUnzipInflate:Qb,Unzip:ew,unzip:tw,unzipSync:nw},Symbol.toStringTag,{value:"Module"}));function tp(i,e,t){const n=t.length-i-1;if(e>=t[n])return n-1;if(e<=t[i])return i;let r=i,s=n,o=Math.floor((r+s)/2);for(;e<t[o]||e>=t[o+1];)e<t[o]?s=o:r=o,o=Math.floor((r+s)/2);return o}function rw(i,e,t,n){const r=[],s=[],o=[];r[0]=1;for(let a=1;a<=t;++a){s[a]=e-n[i+1-a],o[a]=n[i+a]-e;let l=0;for(let c=0;c<a;++c){const u=o[c+1],h=s[a-c],f=r[c]/(u+h);r[c]=l+u*f,l=h*f}r[a]=l}return r}function sw(i,e,t,n){const r=tp(i,n,e),s=rw(r,n,i,e),o=new Ye(0,0,0,0);for(let a=0;a<=i;++a){const l=t[r-i+a],c=s[a],u=l.w*c;o.x+=l.x*u,o.y+=l.y*u,o.z+=l.z*u,o.w+=l.w*c}return o}function ow(i,e,t,n,r){const s=[];for(let h=0;h<=t;++h)s[h]=0;const o=[];for(let h=0;h<=n;++h)o[h]=s.slice(0);const a=[];for(let h=0;h<=t;++h)a[h]=s.slice(0);a[0][0]=1;const l=s.slice(0),c=s.slice(0);for(let h=1;h<=t;++h){l[h]=e-r[i+1-h],c[h]=r[i+h]-e;let f=0;for(let d=0;d<h;++d){const g=c[d+1],m=l[h-d];a[h][d]=g+m;const p=a[d][h-1]/a[h][d];a[d][h]=f+g*p,f=m*p}a[h][h]=f}for(let h=0;h<=t;++h)o[0][h]=a[h][t];for(let h=0;h<=t;++h){let f=0,d=1;const g=[];for(let m=0;m<=t;++m)g[m]=s.slice(0);g[0][0]=1;for(let m=1;m<=n;++m){let p=0;const _=h-m,w=t-m;h>=m&&(g[d][0]=g[f][0]/a[w+1][_],p=g[d][0]*a[_][w]);const x=_>=-1?1:-_,b=h-1<=w?m-1:t-h;for(let E=x;E<=b;++E)g[d][E]=(g[f][E]-g[f][E-1])/a[w+1][_+E],p+=g[d][E]*a[_+E][w];h<=w&&(g[d][m]=-g[f][m-1]/a[w+1][h],p+=g[d][m]*a[h][w]),o[m][h]=p;const M=f;f=d,d=M}}let u=t;for(let h=1;h<=n;++h){for(let f=0;f<=t;++f)o[h][f]*=u;u*=t-h}return o}function aw(i,e,t,n,r){const s=r<i?r:i,o=[],a=tp(i,n,e),l=ow(a,n,i,s,e),c=[];for(let u=0;u<t.length;++u){const h=t[u].clone(),f=h.w;h.x*=f,h.y*=f,h.z*=f,c[u]=h}for(let u=0;u<=s;++u){const h=c[a-i].clone().multiplyScalar(l[u][0]);for(let f=1;f<=i;++f)h.add(c[a-i+f].clone().multiplyScalar(l[u][f]));o[u]=h}for(let u=s+1;u<=r+1;++u)o[u]=new Ye(0,0,0);return o}function lw(i,e){let t=1;for(let r=2;r<=i;++r)t*=r;let n=1;for(let r=2;r<=e;++r)n*=r;for(let r=2;r<=i-e;++r)n*=r;return t/n}function cw(i){const e=i.length,t=[],n=[];for(let s=0;s<e;++s){const o=i[s];t[s]=new R(o.x,o.y,o.z),n[s]=o.w}const r=[];for(let s=0;s<e;++s){const o=t[s].clone();for(let a=1;a<=s;++a)o.sub(r[s-a].clone().multiplyScalar(lw(s,a)*n[a]));r[s]=o.divideScalar(n[0])}return r}function uw(i,e,t,n,r){const s=aw(i,e,t,n,r);return cw(s)}class $h extends pc{constructor(e,t,n,r,s){super(),this.degree=e,this.knots=t,this.controlPoints=[],this.startKnot=r||0,this.endKnot=s||this.knots.length-1;for(let o=0;o<n.length;++o){const a=n[o];this.controlPoints[o]=new Ye(a.x,a.y,a.z,a.w)}}getPoint(e,t=new R){const n=t,r=this.knots[this.startKnot]+e*(this.knots[this.endKnot]-this.knots[this.startKnot]),s=sw(this.degree,this.knots,this.controlPoints,r);return s.w!==1&&s.divideScalar(s.w),n.set(s.x,s.y,s.z)}getTangent(e,t=new R){const n=t,r=this.knots[0]+e*(this.knots[this.knots.length-1]-this.knots[0]),s=uw(this.degree,this.knots,this.controlPoints,r,1);return n.copy(s[1]).normalize(),n}}let ke,lt,zt;class hw extends ea{constructor(e){super(e)}load(e,t,n,r){const s=this,o=s.path===""?xc.extractUrlBase(e):s.path,a=new Mb(this.manager);a.setPath(s.path),a.setResponseType("arraybuffer"),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(l){try{t(s.parse(l,o))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},n,r)}parse(e,t){if(_w(e))ke=new gw().parse(e);else{const r=sp(e);if(!vw(r))throw new Error("THREE.FBXLoader: Unknown format.");if(Kh(r)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Kh(r));ke=new mw().parse(r)}const n=new xd(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new fw(n,this.manager).parse(ke)}}class fw{constructor(e,t){this.textureLoader=e,this.manager=t}parse(){lt=this.parseConnections();const e=this.parseImages(),t=this.parseTextures(e),n=this.parseMaterials(t),r=this.parseDeformers(),s=new dw().parse(r);return this.parseScene(r,s,n),zt}parseConnections(){const e=new Map;return"Connections"in ke&&ke.Connections.connections.forEach(function(n){const r=n[0],s=n[1],o=n[2];e.has(r)||e.set(r,{parents:[],children:[]});const a={ID:s,relationship:o};e.get(r).parents.push(a),e.has(s)||e.set(s,{parents:[],children:[]});const l={ID:r,relationship:o};e.get(s).children.push(l)}),e}parseImages(){const e={},t={};if("Video"in ke.Objects){const n=ke.Objects.Video;for(const r in n){const s=n[r],o=parseInt(r);if(e[o]=s.RelativeFilename||s.Filename,"Content"in s){const a=s.Content instanceof ArrayBuffer&&s.Content.byteLength>0,l=typeof s.Content=="string"&&s.Content!=="";if(a||l){const c=this.parseImage(n[r]);t[s.RelativeFilename||s.Filename]=c}}}}for(const n in e){const r=e[n];t[r]!==void 0?e[n]=t[r]:e[n]=e[n].split("\\").pop()}return e}parseImage(e){const t=e.Content,n=e.RelativeFilename||e.Filename,r=n.slice(n.lastIndexOf(".")+1).toLowerCase();let s;switch(r){case"bmp":s="image/bmp";break;case"jpg":case"jpeg":s="image/jpeg";break;case"png":s="image/png";break;case"tif":s="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",n),s="image/tga";break;default:console.warn('FBXLoader: Image type "'+r+'" is not supported.');return}if(typeof t=="string")return"data:"+s+";base64,"+t;{const o=new Uint8Array(t);return window.URL.createObjectURL(new Blob([o],{type:s}))}}parseTextures(e){const t=new Map;if("Texture"in ke.Objects){const n=ke.Objects.Texture;for(const r in n){const s=this.parseTexture(n[r],e);t.set(parseInt(r),s)}}return t}parseTexture(e,t){const n=this.loadTexture(e,t);n.ID=e.id,n.name=e.attrName;const r=e.WrapModeU,s=e.WrapModeV,o=r!==void 0?r.value:0,a=s!==void 0?s.value:0;if(n.wrapS=o===0?ps:Xt,n.wrapT=a===0?ps:Xt,"Scaling"in e){const l=e.Scaling.value;n.repeat.x=l[0],n.repeat.y=l[1]}if("Translation"in e){const l=e.Translation.value;n.offset.x=l[0],n.offset.y=l[1]}return n}loadTexture(e,t){let n;const r=this.textureLoader.path,s=lt.get(e.id).children;s!==void 0&&s.length>0&&t[s[0].ID]!==void 0&&(n=t[s[0].ID],(n.indexOf("blob:")===0||n.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let o;const a=e.FileName.slice(-3).toLowerCase();if(a==="tga"){const l=this.manager.getHandler(".tga");l===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",e.RelativeFilename),o=new Ft):(l.setPath(this.textureLoader.path),o=l.load(n))}else a==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",e.RelativeFilename),o=new Ft):o=this.textureLoader.load(n);return this.textureLoader.setPath(r),o}parseMaterials(e){const t=new Map;if("Material"in ke.Objects){const n=ke.Objects.Material;for(const r in n){const s=this.parseMaterial(n[r],e);s!==null&&t.set(parseInt(r),s)}}return t}parseMaterial(e,t){const n=e.id,r=e.attrName;let s=e.ShadingModel;if(typeof s=="object"&&(s=s.value),!lt.has(n))return null;const o=this.parseParameters(e,t,n);let a;switch(s.toLowerCase()){case"phong":a=new Ka;break;case"lambert":a=new cb;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',s),a=new Ka;break}return a.setValues(o),a.name=r,a}parseParameters(e,t,n){const r={};e.BumpFactor&&(r.bumpScale=e.BumpFactor.value),e.Diffuse?r.color=new Pe().fromArray(e.Diffuse.value):e.DiffuseColor&&(e.DiffuseColor.type==="Color"||e.DiffuseColor.type==="ColorRGB")&&(r.color=new Pe().fromArray(e.DiffuseColor.value)),e.DisplacementFactor&&(r.displacementScale=e.DisplacementFactor.value),e.Emissive?r.emissive=new Pe().fromArray(e.Emissive.value):e.EmissiveColor&&(e.EmissiveColor.type==="Color"||e.EmissiveColor.type==="ColorRGB")&&(r.emissive=new Pe().fromArray(e.EmissiveColor.value)),e.EmissiveFactor&&(r.emissiveIntensity=parseFloat(e.EmissiveFactor.value)),e.Opacity&&(r.opacity=parseFloat(e.Opacity.value)),r.opacity<1&&(r.transparent=!0),e.ReflectionFactor&&(r.reflectivity=e.ReflectionFactor.value),e.Shininess&&(r.shininess=e.Shininess.value),e.Specular?r.specular=new Pe().fromArray(e.Specular.value):e.SpecularColor&&e.SpecularColor.type==="Color"&&(r.specular=new Pe().fromArray(e.SpecularColor.value));const s=this;return lt.get(n).children.forEach(function(o){const a=o.relationship;switch(a){case"Bump":r.bumpMap=s.getTexture(t,o.ID);break;case"Maya|TEX_ao_map":r.aoMap=s.getTexture(t,o.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":r.map=s.getTexture(t,o.ID),r.map!==void 0&&(r.map.encoding=tt);break;case"DisplacementColor":r.displacementMap=s.getTexture(t,o.ID);break;case"EmissiveColor":r.emissiveMap=s.getTexture(t,o.ID),r.emissiveMap!==void 0&&(r.emissiveMap.encoding=tt);break;case"NormalMap":case"Maya|TEX_normal_map":r.normalMap=s.getTexture(t,o.ID);break;case"ReflectionColor":r.envMap=s.getTexture(t,o.ID),r.envMap!==void 0&&(r.envMap.mapping=Eo,r.envMap.encoding=tt);break;case"SpecularColor":r.specularMap=s.getTexture(t,o.ID),r.specularMap!==void 0&&(r.specularMap.encoding=tt);break;case"TransparentColor":case"TransparencyFactor":r.alphaMap=s.getTexture(t,o.ID),r.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",a);break}}),r}getTexture(e,t){return"LayeredTexture"in ke.Objects&&t in ke.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=lt.get(t).children[0].ID),e.get(t)}parseDeformers(){const e={},t={};if("Deformer"in ke.Objects){const n=ke.Objects.Deformer;for(const r in n){const s=n[r],o=lt.get(parseInt(r));if(s.attrType==="Skin"){const a=this.parseSkeleton(o,n);a.ID=r,o.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),a.geometryID=o.parents[0].ID,e[r]=a}else if(s.attrType==="BlendShape"){const a={id:r};a.rawTargets=this.parseMorphTargets(o,n),a.id=r,o.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[r]=a}}}return{skeletons:e,morphTargets:t}}parseSkeleton(e,t){const n=[];return e.children.forEach(function(r){const s=t[r.ID];if(s.attrType!=="Cluster")return;const o={ID:r.ID,indices:[],weights:[],transformLink:new Ce().fromArray(s.TransformLink.a)};"Indexes"in s&&(o.indices=s.Indexes.a,o.weights=s.Weights.a),n.push(o)}),{rawBones:n,bones:[]}}parseMorphTargets(e,t){const n=[];for(let r=0;r<e.children.length;r++){const s=e.children[r],o=t[s.ID],a={name:o.attrName,initialWeight:o.DeformPercent,id:o.id,fullWeights:o.FullWeights.a};if(o.attrType!=="BlendShapeChannel")return;a.geoID=lt.get(parseInt(s.ID)).children.filter(function(l){return l.relationship===void 0})[0].ID,n.push(a)}return n}parseScene(e,t,n){zt=new gr;const r=this.parseModels(e.skeletons,t,n),s=ke.Objects.Model,o=this;r.forEach(function(l){const c=s[l.ID];o.setLookAtProperties(l,c),lt.get(l.ID).parents.forEach(function(h){const f=r.get(h.ID);f!==void 0&&f.add(l)}),l.parent===null&&zt.add(l)}),this.bindSkeleton(e.skeletons,t,r),this.createAmbientLight(),zt.traverse(function(l){if(l.userData.transformData){l.parent&&(l.userData.transformData.parentMatrix=l.parent.matrix,l.userData.transformData.parentMatrixWorld=l.parent.matrixWorld);const c=ip(l.userData.transformData);l.applyMatrix4(c),l.updateWorldMatrix()}});const a=new pw().parse();zt.children.length===1&&zt.children[0].isGroup&&(zt.children[0].animations=a,zt=zt.children[0]),zt.animations=a}parseModels(e,t,n){const r=new Map,s=ke.Objects.Model;for(const o in s){const a=parseInt(o),l=s[o],c=lt.get(a);let u=this.buildSkeleton(c,e,a,l.attrName);if(!u){switch(l.attrType){case"Camera":u=this.createCamera(c);break;case"Light":u=this.createLight(c);break;case"Mesh":u=this.createMesh(c,t,n);break;case"NurbsCurve":u=this.createCurve(c,t);break;case"LimbNode":case"Root":u=new Sl;break;case"Null":default:u=new gr;break}u.name=l.attrName?qe.sanitizeNodeName(l.attrName):"",u.ID=a}this.getTransformData(u,l),r.set(a,u)}return r}buildSkeleton(e,t,n,r){let s=null;return e.parents.forEach(function(o){for(const a in t){const l=t[a];l.rawBones.forEach(function(c,u){if(c.ID===o.ID){const h=s;s=new Sl,s.matrixWorld.copy(c.transformLink),s.name=r?qe.sanitizeNodeName(r):"",s.ID=n,l.bones[u]=s,h!==null&&s.add(h)}})}}),s}createCamera(e){let t,n;if(e.children.forEach(function(r){const s=ke.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new ot;else{let r=0;n.CameraProjectionType!==void 0&&n.CameraProjectionType.value===1&&(r=1);let s=1;n.NearPlane!==void 0&&(s=n.NearPlane.value/1e3);let o=1e3;n.FarPlane!==void 0&&(o=n.FarPlane.value/1e3);let a=window.innerWidth,l=window.innerHeight;n.AspectWidth!==void 0&&n.AspectHeight!==void 0&&(a=n.AspectWidth.value,l=n.AspectHeight.value);const c=a/l;let u=45;n.FieldOfView!==void 0&&(u=n.FieldOfView.value);const h=n.FocalLength?n.FocalLength.value:null;switch(r){case 0:t=new Dt(u,c,s,o),h!==null&&t.setFocalLength(h);break;case 1:t=new uc(-a/2,a/2,l/2,-l/2,s,o);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+r+"."),t=new ot;break}}return t}createLight(e){let t,n;if(e.children.forEach(function(r){const s=ke.Objects.NodeAttribute[r.ID];s!==void 0&&(n=s)}),n===void 0)t=new ot;else{let r;n.LightType===void 0?r=0:r=n.LightType.value;let s=16777215;n.Color!==void 0&&(s=new Pe().fromArray(n.Color.value));let o=n.Intensity===void 0?1:n.Intensity.value/100;n.CastLightOnObject!==void 0&&n.CastLightOnObject.value===0&&(o=0);let a=0;n.FarAttenuationEnd!==void 0&&(n.EnableFarAttenuation!==void 0&&n.EnableFarAttenuation.value===0?a=0:a=n.FarAttenuationEnd.value);const l=1;switch(r){case 0:t=new kh(s,o,a,l);break;case 1:t=new yd(s,o);break;case 2:let c=Math.PI/3;n.InnerAngle!==void 0&&(c=Tn.degToRad(n.InnerAngle.value));let u=0;n.OuterAngle!==void 0&&(u=Tn.degToRad(n.OuterAngle.value),u=Math.max(u,1)),t=new Sb(s,o,a,c,u,l);break;default:console.warn("THREE.FBXLoader: Unknown light type "+n.LightType.value+", defaulting to a PointLight."),t=new kh(s,o);break}n.CastShadows!==void 0&&n.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(e,t,n){let r,s=null,o=null;const a=[];return e.children.forEach(function(l){t.has(l.ID)&&(s=t.get(l.ID)),n.has(l.ID)&&a.push(n.get(l.ID))}),a.length>1?o=a:a.length>0?o=a[0]:(o=new Ka({color:13421772}),a.push(o)),"color"in s.attributes&&a.forEach(function(l){l.vertexColors=!0}),s.FBX_Deformer?(r=new QM(s,o),r.normalizeSkinWeights()):r=new Bt(s,o),r}createCurve(e,t){const n=e.children.reduce(function(s,o){return t.has(o.ID)&&(s=t.get(o.ID)),s},null),r=new dd({color:3342591,linewidth:1});return new pd(n,r)}getTransformData(e,t){const n={};"InheritType"in t&&(n.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?n.eulerOrder=rp(t.RotationOrder.value):n.eulerOrder="ZYX","Lcl_Translation"in t&&(n.translation=t.Lcl_Translation.value),"PreRotation"in t&&(n.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(n.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(n.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(n.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(n.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(n.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(n.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(n.rotationPivot=t.RotationPivot.value),e.userData.transformData=n}setLookAtProperties(e,t){"LookAtProperty"in t&&lt.get(e.ID).children.forEach(function(r){if(r.relationship==="LookAtProperty"){const s=ke.Objects.Model[r.ID];if("Lcl_Translation"in s){const o=s.Lcl_Translation.value;e.target!==void 0?(e.target.position.fromArray(o),zt.add(e.target)):e.lookAt(new R().fromArray(o))}}})}bindSkeleton(e,t,n){const r=this.parsePoseNodes();for(const s in e){const o=e[s];lt.get(parseInt(o.ID)).parents.forEach(function(l){if(t.has(l.ID)){const c=l.ID;lt.get(c).parents.forEach(function(h){n.has(h.ID)&&n.get(h.ID).bind(new fc(o.bones),r[h.ID])})}})}}parsePoseNodes(){const e={};if("Pose"in ke.Objects){const t=ke.Objects.Pose;for(const n in t)if(t[n].attrType==="BindPose"&&t[n].NbPoseNodes>0){const r=t[n].PoseNode;Array.isArray(r)?r.forEach(function(s){e[s.Node]=new Ce().fromArray(s.Matrix.a)}):e[r.Node]=new Ce().fromArray(r.Matrix.a)}}return e}createAmbientLight(){if("GlobalSettings"in ke&&"AmbientColor"in ke.GlobalSettings){const e=ke.GlobalSettings.AmbientColor.value,t=e[0],n=e[1],r=e[2];if(t!==0||n!==0||r!==0){const s=new Pe(t,n,r);zt.add(new Md(s,1))}}}}class dw{constructor(){this.negativeMaterialIndices=!1}parse(e){const t=new Map;if("Geometry"in ke.Objects){const n=ke.Objects.Geometry;for(const r in n){const s=lt.get(parseInt(r)),o=this.parseGeometry(s,n[r],e);t.set(parseInt(r),o)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),t}parseGeometry(e,t,n){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(e,t,n);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(e,t,n){const r=n.skeletons,s=[],o=e.parents.map(function(h){return ke.Objects.Model[h.ID]});if(o.length===0)return;const a=e.children.reduce(function(h,f){return r[f.ID]!==void 0&&(h=r[f.ID]),h},null);e.children.forEach(function(h){n.morphTargets[h.ID]!==void 0&&s.push(n.morphTargets[h.ID])});const l=o[0],c={};"RotationOrder"in l&&(c.eulerOrder=rp(l.RotationOrder.value)),"InheritType"in l&&(c.inheritType=parseInt(l.InheritType.value)),"GeometricTranslation"in l&&(c.translation=l.GeometricTranslation.value),"GeometricRotation"in l&&(c.rotation=l.GeometricRotation.value),"GeometricScaling"in l&&(c.scale=l.GeometricScaling.value);const u=ip(c);return this.genGeometry(t,a,s,u)}genGeometry(e,t,n,r){const s=new pt;e.attrName&&(s.name=e.attrName);const o=this.parseGeoNode(e,t),a=this.genBuffers(o),l=new it(a.vertex,3);if(l.applyMatrix4(r),s.setAttribute("position",l),a.colors.length>0&&s.setAttribute("color",new it(a.colors,3)),t&&(s.setAttribute("skinIndex",new lc(a.weightsIndices,4)),s.setAttribute("skinWeight",new it(a.vertexWeights,4)),s.FBX_Deformer=t),a.normal.length>0){const c=new jt().getNormalMatrix(r),u=new it(a.normal,3);u.applyNormalMatrix(c),s.setAttribute("normal",u)}if(a.uvs.forEach(function(c,u){let h="uv"+(u+1).toString();u===0&&(h="uv"),s.setAttribute(h,new it(a.uvs[u],2))}),o.material&&o.material.mappingType!=="AllSame"){let c=a.materialIndex[0],u=0;if(a.materialIndex.forEach(function(h,f){h!==c&&(s.addGroup(u,f-u,c),c=h,u=f)}),s.groups.length>0){const h=s.groups[s.groups.length-1],f=h.start+h.count;f!==a.materialIndex.length&&s.addGroup(f,a.materialIndex.length-f,c)}s.groups.length===0&&s.addGroup(0,a.materialIndex.length,a.materialIndex[0])}return this.addMorphTargets(s,e,n,r),s}parseGeoNode(e,t){const n={};if(n.vertexPositions=e.Vertices!==void 0?e.Vertices.a:[],n.vertexIndices=e.PolygonVertexIndex!==void 0?e.PolygonVertexIndex.a:[],e.LayerElementColor&&(n.color=this.parseVertexColors(e.LayerElementColor[0])),e.LayerElementMaterial&&(n.material=this.parseMaterialIndices(e.LayerElementMaterial[0])),e.LayerElementNormal&&(n.normal=this.parseNormals(e.LayerElementNormal[0])),e.LayerElementUV){n.uv=[];let r=0;for(;e.LayerElementUV[r];)e.LayerElementUV[r].UV&&n.uv.push(this.parseUVs(e.LayerElementUV[r])),r++}return n.weightTable={},t!==null&&(n.skeleton=t,t.rawBones.forEach(function(r,s){r.indices.forEach(function(o,a){n.weightTable[o]===void 0&&(n.weightTable[o]=[]),n.weightTable[o].push({id:s,weight:r.weights[a]})})})),n}genBuffers(e){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let n=0,r=0,s=!1,o=[],a=[],l=[],c=[],u=[],h=[];const f=this;return e.vertexIndices.forEach(function(d,g){let m,p=!1;d<0&&(d=d^-1,p=!0);let _=[],w=[];if(o.push(d*3,d*3+1,d*3+2),e.color){const x=uo(g,n,d,e.color);l.push(x[0],x[1],x[2])}if(e.skeleton){if(e.weightTable[d]!==void 0&&e.weightTable[d].forEach(function(x){w.push(x.weight),_.push(x.id)}),w.length>4){s||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),s=!0);const x=[0,0,0,0],b=[0,0,0,0];w.forEach(function(M,E){let I=M,v=_[E];b.forEach(function(A,D,Y){if(I>A){Y[D]=I,I=A;const K=x[D];x[D]=v,v=K}})}),_=x,w=b}for(;w.length<4;)w.push(0),_.push(0);for(let x=0;x<4;++x)u.push(w[x]),h.push(_[x])}if(e.normal){const x=uo(g,n,d,e.normal);a.push(x[0],x[1],x[2])}e.material&&e.material.mappingType!=="AllSame"&&(m=uo(g,n,d,e.material)[0],m<0&&(f.negativeMaterialIndices=!0,m=0)),e.uv&&e.uv.forEach(function(x,b){const M=uo(g,n,d,x);c[b]===void 0&&(c[b]=[]),c[b].push(M[0]),c[b].push(M[1])}),r++,p&&(f.genFace(t,e,o,m,a,l,c,u,h,r),n++,r=0,o=[],a=[],l=[],c=[],u=[],h=[])}),t}genFace(e,t,n,r,s,o,a,l,c,u){for(let h=2;h<u;h++)e.vertex.push(t.vertexPositions[n[0]]),e.vertex.push(t.vertexPositions[n[1]]),e.vertex.push(t.vertexPositions[n[2]]),e.vertex.push(t.vertexPositions[n[(h-1)*3]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+1]]),e.vertex.push(t.vertexPositions[n[(h-1)*3+2]]),e.vertex.push(t.vertexPositions[n[h*3]]),e.vertex.push(t.vertexPositions[n[h*3+1]]),e.vertex.push(t.vertexPositions[n[h*3+2]]),t.skeleton&&(e.vertexWeights.push(l[0]),e.vertexWeights.push(l[1]),e.vertexWeights.push(l[2]),e.vertexWeights.push(l[3]),e.vertexWeights.push(l[(h-1)*4]),e.vertexWeights.push(l[(h-1)*4+1]),e.vertexWeights.push(l[(h-1)*4+2]),e.vertexWeights.push(l[(h-1)*4+3]),e.vertexWeights.push(l[h*4]),e.vertexWeights.push(l[h*4+1]),e.vertexWeights.push(l[h*4+2]),e.vertexWeights.push(l[h*4+3]),e.weightsIndices.push(c[0]),e.weightsIndices.push(c[1]),e.weightsIndices.push(c[2]),e.weightsIndices.push(c[3]),e.weightsIndices.push(c[(h-1)*4]),e.weightsIndices.push(c[(h-1)*4+1]),e.weightsIndices.push(c[(h-1)*4+2]),e.weightsIndices.push(c[(h-1)*4+3]),e.weightsIndices.push(c[h*4]),e.weightsIndices.push(c[h*4+1]),e.weightsIndices.push(c[h*4+2]),e.weightsIndices.push(c[h*4+3])),t.color&&(e.colors.push(o[0]),e.colors.push(o[1]),e.colors.push(o[2]),e.colors.push(o[(h-1)*3]),e.colors.push(o[(h-1)*3+1]),e.colors.push(o[(h-1)*3+2]),e.colors.push(o[h*3]),e.colors.push(o[h*3+1]),e.colors.push(o[h*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(e.materialIndex.push(r),e.materialIndex.push(r),e.materialIndex.push(r)),t.normal&&(e.normal.push(s[0]),e.normal.push(s[1]),e.normal.push(s[2]),e.normal.push(s[(h-1)*3]),e.normal.push(s[(h-1)*3+1]),e.normal.push(s[(h-1)*3+2]),e.normal.push(s[h*3]),e.normal.push(s[h*3+1]),e.normal.push(s[h*3+2])),t.uv&&t.uv.forEach(function(f,d){e.uvs[d]===void 0&&(e.uvs[d]=[]),e.uvs[d].push(a[d][0]),e.uvs[d].push(a[d][1]),e.uvs[d].push(a[d][(h-1)*2]),e.uvs[d].push(a[d][(h-1)*2+1]),e.uvs[d].push(a[d][h*2]),e.uvs[d].push(a[d][h*2+1])})}addMorphTargets(e,t,n,r){if(n.length===0)return;e.morphTargetsRelative=!0,e.morphAttributes.position=[];const s=this;n.forEach(function(o){o.rawTargets.forEach(function(a){const l=ke.Objects.Geometry[a.geoID];l!==void 0&&s.genMorphGeometry(e,t,l,r,a.name)})})}genMorphGeometry(e,t,n,r,s){const o=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],a=n.Vertices!==void 0?n.Vertices.a:[],l=n.Indexes!==void 0?n.Indexes.a:[],c=e.attributes.position.count*3,u=new Float32Array(c);for(let g=0;g<l.length;g++){const m=l[g]*3;u[m]=a[g*3],u[m+1]=a[g*3+1],u[m+2]=a[g*3+2]}const h={vertexIndices:o,vertexPositions:u},f=this.genBuffers(h),d=new it(f.vertex,3);d.name=s||n.attrName,d.applyMatrix4(r),e.morphAttributes.position.push(d)}parseNormals(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Normals.a;let s=[];return n==="IndexToDirect"&&("NormalIndex"in e?s=e.NormalIndex.a:"NormalsIndex"in e&&(s=e.NormalsIndex.a)),{dataSize:3,buffer:r,indices:s,mappingType:t,referenceType:n}}parseUVs(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.UV.a;let s=[];return n==="IndexToDirect"&&(s=e.UVIndex.a),{dataSize:2,buffer:r,indices:s,mappingType:t,referenceType:n}}parseVertexColors(e){const t=e.MappingInformationType,n=e.ReferenceInformationType,r=e.Colors.a;let s=[];return n==="IndexToDirect"&&(s=e.ColorIndex.a),{dataSize:4,buffer:r,indices:s,mappingType:t,referenceType:n}}parseMaterialIndices(e){const t=e.MappingInformationType,n=e.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:n};const r=e.Materials.a,s=[];for(let o=0;o<r.length;++o)s.push(o);return{dataSize:1,buffer:r,indices:s,mappingType:t,referenceType:n}}parseNurbsGeometry(e){if($h===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new pt;const t=parseInt(e.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",e.Order,e.id),new pt;const n=t-1,r=e.KnotVector.a,s=[],o=e.Points.a;for(let h=0,f=o.length;h<f;h+=4)s.push(new Ye().fromArray(o,h));let a,l;if(e.Form==="Closed")s.push(s[0]);else if(e.Form==="Periodic"){a=n,l=r.length-1-a;for(let h=0;h<n;++h)s.push(s[h])}const u=new $h(n,r,s,a,l).getPoints(s.length*12);return new pt().setFromPoints(u)}}class pw{parse(){const e=[],t=this.parseClips();if(t!==void 0)for(const n in t){const r=t[n],s=this.addClip(r);e.push(s)}return e}parseClips(){if(ke.Objects.AnimationCurve===void 0)return;const e=this.parseAnimationCurveNodes();this.parseAnimationCurves(e);const t=this.parseAnimationLayers(e);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const e=ke.Objects.AnimationCurveNode,t=new Map;for(const n in e){const r=e[n];if(r.attrName.match(/S|R|T|DeformPercent/)!==null){const s={id:r.id,attr:r.attrName,curves:{}};t.set(s.id,s)}}return t}parseAnimationCurves(e){const t=ke.Objects.AnimationCurve;for(const n in t){const r={id:t[n].id,times:t[n].KeyTime.a.map(xw),values:t[n].KeyValueFloat.a},s=lt.get(r.id);if(s!==void 0){const o=s.parents[0].ID,a=s.parents[0].relationship;a.match(/X/)?e.get(o).curves.x=r:a.match(/Y/)?e.get(o).curves.y=r:a.match(/Z/)?e.get(o).curves.z=r:a.match(/d|DeformPercent/)&&e.has(o)&&(e.get(o).curves.morph=r)}}}parseAnimationLayers(e){const t=ke.Objects.AnimationLayer,n=new Map;for(const r in t){const s=[],o=lt.get(parseInt(r));o!==void 0&&(o.children.forEach(function(l,c){if(e.has(l.ID)){const u=e.get(l.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(s[c]===void 0){const h=lt.get(l.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(h!==void 0){const f=ke.Objects.Model[h.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",l);return}const d={modelName:f.attrName?qe.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};zt.traverse(function(g){g.ID===f.id&&(d.transform=g.matrix,g.userData.transformData&&(d.eulerOrder=g.userData.transformData.eulerOrder))}),d.transform||(d.transform=new Ce),"PreRotation"in f&&(d.preRotation=f.PreRotation.value),"PostRotation"in f&&(d.postRotation=f.PostRotation.value),s[c]=d}}s[c]&&(s[c][u.attr]=u)}else if(u.curves.morph!==void 0){if(s[c]===void 0){const h=lt.get(l.ID).parents.filter(function(_){return _.relationship!==void 0})[0].ID,f=lt.get(h).parents[0].ID,d=lt.get(f).parents[0].ID,g=lt.get(d).parents[0].ID,m=ke.Objects.Model[g],p={modelName:m.attrName?qe.sanitizeNodeName(m.attrName):"",morphName:ke.Objects.Deformer[h].attrName};s[c]=p}s[c][u.attr]=u}}}),n.set(parseInt(r),s))}return n}parseAnimStacks(e){const t=ke.Objects.AnimationStack,n={};for(const r in t){const s=lt.get(parseInt(r)).children;s.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const o=e.get(s[0].ID);n[r]={name:t[r].attrName,layer:o}}return n}addClip(e){let t=[];const n=this;return e.layer.forEach(function(r){t=t.concat(n.generateTracks(r))}),new mb(e.name,-1,t)}generateTracks(e){const t=[];let n=new R,r=new nn,s=new R;if(e.transform&&e.transform.decompose(n,r,s),n=n.toArray(),r=new qt().setFromQuaternion(r,e.eulerOrder).toArray(),s=s.toArray(),e.T!==void 0&&Object.keys(e.T.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.T.curves,n,"position");o!==void 0&&t.push(o)}if(e.R!==void 0&&Object.keys(e.R.curves).length>0){const o=this.generateRotationTrack(e.modelName,e.R.curves,r,e.preRotation,e.postRotation,e.eulerOrder);o!==void 0&&t.push(o)}if(e.S!==void 0&&Object.keys(e.S.curves).length>0){const o=this.generateVectorTrack(e.modelName,e.S.curves,s,"scale");o!==void 0&&t.push(o)}if(e.DeformPercent!==void 0){const o=this.generateMorphTrack(e);o!==void 0&&t.push(o)}return t}generateVectorTrack(e,t,n,r){const s=this.getTimesForAllAxes(t),o=this.getKeyframeTrackValues(s,t,n);return new xs(e+"."+r,s,o)}generateRotationTrack(e,t,n,r,s,o){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(Tn.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(Tn.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(Tn.degToRad));const a=this.getTimesForAllAxes(t),l=this.getKeyframeTrackValues(a,t,n);r!==void 0&&(r=r.map(Tn.degToRad),r.push(o),r=new qt().fromArray(r),r=new nn().setFromEuler(r)),s!==void 0&&(s=s.map(Tn.degToRad),s.push(o),s=new qt().fromArray(s),s=new nn().setFromEuler(s).invert());const c=new nn,u=new qt,h=[];for(let f=0;f<l.length;f+=3)u.set(l[f],l[f+1],l[f+2],o),c.setFromEuler(u),r!==void 0&&c.premultiply(r),s!==void 0&&c.multiply(s),c.toArray(h,f/3*4);return new Nr(e+".quaternion",a,h)}generateMorphTrack(e){const t=e.DeformPercent.curves.morph,n=t.values.map(function(s){return s/100}),r=zt.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];return new vs(e.modelName+".morphTargetInfluences["+r+"]",t.times,n)}getTimesForAllAxes(e){let t=[];if(e.x!==void 0&&(t=t.concat(e.x.times)),e.y!==void 0&&(t=t.concat(e.y.times)),e.z!==void 0&&(t=t.concat(e.z.times)),t=t.sort(function(n,r){return n-r}),t.length>1){let n=1,r=t[0];for(let s=1;s<t.length;s++){const o=t[s];o!==r&&(t[n]=o,r=o,n++)}t=t.slice(0,n)}return t}getKeyframeTrackValues(e,t,n){const r=n,s=[];let o=-1,a=-1,l=-1;return e.forEach(function(c){if(t.x&&(o=t.x.times.indexOf(c)),t.y&&(a=t.y.times.indexOf(c)),t.z&&(l=t.z.times.indexOf(c)),o!==-1){const u=t.x.values[o];s.push(u),r[0]=u}else s.push(r[0]);if(a!==-1){const u=t.y.values[a];s.push(u),r[1]=u}else s.push(r[1]);if(l!==-1){const u=t.z.values[l];s.push(u),r[2]=u}else s.push(r[2])}),s}interpolateRotations(e){for(let t=1;t<e.values.length;t++){const n=e.values[t-1],r=e.values[t]-n,s=Math.abs(r);if(s>=180){const o=s/180,a=r/o;let l=n+a;const c=e.times[t-1],h=(e.times[t]-c)/o;let f=c+h;const d=[],g=[];for(;f<e.times[t];)d.push(f),f+=h,g.push(l),l+=a;e.times=Jh(e.times,t,d),e.values=Jh(e.values,t,g)}}}}class mw{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(e){this.nodeStack.push(e),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(e,t){this.currentProp=e,this.currentPropName=t}parse(e){this.currentIndent=0,this.allNodes=new np,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,n=e.split(/[\r\n]+/);return n.forEach(function(r,s){const o=r.match(/^[\s\t]*;/),a=r.match(/^[\s\t]*$/);if(o||a)return;const l=r.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),c=r.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=r.match("^\\t{"+(t.currentIndent-1)+"}}");l?t.parseNodeBegin(r,l):c?t.parseNodeProperty(r,c,n[++s]):u?t.popStack():r.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(r)}),this.allNodes}parseNodeBegin(e,t){const n=t[1].trim().replace(/^"/,"").replace(/"$/,""),r=t[2].split(",").map(function(l){return l.trim().replace(/^"/,"").replace(/"$/,"")}),s={name:n},o=this.parseNodeAttr(r),a=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(n,s):n in a?(n==="PoseNode"?a.PoseNode.push(s):a[n].id!==void 0&&(a[n]={},a[n][a[n].id]=a[n]),o.id!==""&&(a[n][o.id]=s)):typeof o.id=="number"?(a[n]={},a[n][o.id]=s):n!=="Properties70"&&(n==="PoseNode"?a[n]=[s]:a[n]=s),typeof o.id=="number"&&(s.id=o.id),o.name!==""&&(s.attrName=o.name),o.type!==""&&(s.attrType=o.type),this.pushStack(s)}parseNodeAttr(e){let t=e[0];e[0]!==""&&(t=parseInt(e[0]),isNaN(t)&&(t=e[0]));let n="",r="";return e.length>1&&(n=e[1].replace(/^(\w+)::/,""),r=e[2]),{id:t,name:n,type:r}}parseNodeProperty(e,t,n){let r=t[1].replace(/^"/,"").replace(/"$/,"").trim(),s=t[2].replace(/^"/,"").replace(/"$/,"").trim();r==="Content"&&s===","&&(s=n.replace(/"/g,"").replace(/,$/,"").trim());const o=this.getCurrentNode();if(o.name==="Properties70"){this.parseNodeSpecialProperty(e,r,s);return}if(r==="C"){const l=s.split(",").slice(1),c=parseInt(l[0]),u=parseInt(l[1]);let h=s.split(",").slice(3);h=h.map(function(f){return f.trim().replace(/^"/,"")}),r="connections",s=[c,u],Mw(s,h),o[r]===void 0&&(o[r]=[])}r==="Node"&&(o.id=s),r in o&&Array.isArray(o[r])?o[r].push(s):r!=="a"?o[r]=s:o.a=s,this.setCurrentProp(o,r),r==="a"&&s.slice(-1)!==","&&(o.a=nl(s))}parseNodePropertyContinued(e){const t=this.getCurrentNode();t.a+=e,e.slice(-1)!==","&&(t.a=nl(t.a))}parseNodeSpecialProperty(e,t,n){const r=n.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),s=r[0],o=r[1],a=r[2],l=r[3];let c=r[4];switch(o){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":c=parseFloat(c);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":c=nl(c);break}this.getPrevNode()[s]={type:o,type2:a,flag:l,value:c},this.setCurrentProp(this.getPrevNode(),s)}}class gw{parse(e){const t=new Zh(e);t.skip(23);const n=t.getUint32();if(n<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+n);const r=new np;for(;!this.endOfContent(t);){const s=this.parseNode(t,n);s!==null&&r.add(s.name,s)}return r}endOfContent(e){return e.size()%16===0?(e.getOffset()+160+16&-16)>=e.size():e.getOffset()+160+16>=e.size()}parseNode(e,t){const n={},r=t>=7500?e.getUint64():e.getUint32(),s=t>=7500?e.getUint64():e.getUint32();t>=7500?e.getUint64():e.getUint32();const o=e.getUint8(),a=e.getString(o);if(r===0)return null;const l=[];for(let f=0;f<s;f++)l.push(this.parseProperty(e));const c=l.length>0?l[0]:"",u=l.length>1?l[1]:"",h=l.length>2?l[2]:"";for(n.singleProperty=s===1&&e.getOffset()===r;r>e.getOffset();){const f=this.parseNode(e,t);f!==null&&this.parseSubNode(a,n,f)}return n.propertyList=l,typeof c=="number"&&(n.id=c),u!==""&&(n.attrName=u),h!==""&&(n.attrType=h),a!==""&&(n.name=a),n}parseSubNode(e,t,n){if(n.singleProperty===!0){const r=n.propertyList[0];Array.isArray(r)?(t[n.name]=n,n.a=r):t[n.name]=r}else if(e==="Connections"&&n.name==="C"){const r=[];n.propertyList.forEach(function(s,o){o!==0&&r.push(s)}),t.connections===void 0&&(t.connections=[]),t.connections.push(r)}else if(n.name==="Properties70")Object.keys(n).forEach(function(s){t[s]=n[s]});else if(e==="Properties70"&&n.name==="P"){let r=n.propertyList[0],s=n.propertyList[1];const o=n.propertyList[2],a=n.propertyList[3];let l;r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),s.indexOf("Lcl ")===0&&(s=s.replace("Lcl ","Lcl_")),s==="Color"||s==="ColorRGB"||s==="Vector"||s==="Vector3D"||s.indexOf("Lcl_")===0?l=[n.propertyList[4],n.propertyList[5],n.propertyList[6]]:l=n.propertyList[4],t[r]={type:s,type2:o,flag:a,value:l}}else t[n.name]===void 0?typeof n.id=="number"?(t[n.name]={},t[n.name][n.id]=n):t[n.name]=n:n.name==="PoseNode"?(Array.isArray(t[n.name])||(t[n.name]=[t[n.name]]),t[n.name].push(n)):t[n.name][n.id]===void 0&&(t[n.name][n.id]=n)}parseProperty(e){const t=e.getString(1);let n;switch(t){case"C":return e.getBoolean();case"D":return e.getFloat64();case"F":return e.getFloat32();case"I":return e.getInt32();case"L":return e.getInt64();case"R":return n=e.getUint32(),e.getArrayBuffer(n);case"S":return n=e.getUint32(),e.getString(n);case"Y":return e.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const r=e.getUint32(),s=e.getUint32(),o=e.getUint32();if(s===0)switch(t){case"b":case"c":return e.getBooleanArray(r);case"d":return e.getFloat64Array(r);case"f":return e.getFloat32Array(r);case"i":return e.getInt32Array(r);case"l":return e.getInt64Array(r)}typeof iw>"u"&&console.error("THREE.FBXLoader: External library fflate.min.js required.");const a=bs(new Uint8Array(e.getArrayBuffer(o))),l=new Zh(a.buffer);switch(t){case"b":case"c":return l.getBooleanArray(r);case"d":return l.getFloat64Array(r);case"f":return l.getFloat32Array(r);case"i":return l.getInt32Array(r);case"l":return l.getInt64Array(r)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Zh{constructor(e,t){this.dv=new DataView(e),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(e){this.offset+=e}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(e){const t=[];for(let n=0;n<e;n++)t.push(this.getBoolean());return t}getUint8(){const e=this.dv.getUint8(this.offset);return this.offset+=1,e}getInt16(){const e=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,e}getInt32(){const e=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,e}getInt32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt32());return t}getUint32(){const e=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,e}getInt64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t&2147483648?(t=~t&4294967295,e=~e&4294967295,e===4294967295&&(t=t+1&4294967295),e=e+1&4294967295,-(t*4294967296+e)):t*4294967296+e}getInt64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getInt64());return t}getUint64(){let e,t;return this.littleEndian?(e=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),e=this.getUint32()),t*4294967296+e}getFloat32(){const e=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,e}getFloat32Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat32());return t}getFloat64(){const e=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,e}getFloat64Array(e){const t=[];for(let n=0;n<e;n++)t.push(this.getFloat64());return t}getArrayBuffer(e){const t=this.dv.buffer.slice(this.offset,this.offset+e);return this.offset+=e,t}getString(e){let t=[];for(let r=0;r<e;r++)t[r]=this.getUint8();const n=t.indexOf(0);return n>=0&&(t=t.slice(0,n)),xc.decodeText(new Uint8Array(t))}}class np{add(e,t){this[e]=t}}function _w(i){const e="Kaydara FBX Binary  \0";return i.byteLength>=e.length&&e===sp(i,0,e.length)}function vw(i){const e=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function n(r){const s=i[r-1];return i=i.slice(t+r),t++,s}for(let r=0;r<e.length;++r)if(n(1)===e[r])return!1;return!0}function Kh(i){const e=/FBXVersion: (\d+)/,t=i.match(e);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function xw(i){return i/46186158e3}const yw=[];function uo(i,e,t,n){let r;switch(n.mappingType){case"ByPolygonVertex":r=i;break;case"ByPolygon":r=e;break;case"ByVertice":r=t;break;case"AllSame":r=n.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+n.mappingType)}n.referenceType==="IndexToDirect"&&(r=n.indices[r]);const s=r*n.dataSize,o=s+n.dataSize;return bw(yw,n.buffer,s,o)}const tl=new qt,cr=new R;function ip(i){const e=new Ce,t=new Ce,n=new Ce,r=new Ce,s=new Ce,o=new Ce,a=new Ce,l=new Ce,c=new Ce,u=new Ce,h=new Ce,f=new Ce,d=i.inheritType?i.inheritType:0;if(i.translation&&e.setPosition(cr.fromArray(i.translation)),i.preRotation){const D=i.preRotation.map(Tn.degToRad);D.push(i.eulerOrder||qt.DefaultOrder),t.makeRotationFromEuler(tl.fromArray(D))}if(i.rotation){const D=i.rotation.map(Tn.degToRad);D.push(i.eulerOrder||qt.DefaultOrder),n.makeRotationFromEuler(tl.fromArray(D))}if(i.postRotation){const D=i.postRotation.map(Tn.degToRad);D.push(i.eulerOrder||qt.DefaultOrder),r.makeRotationFromEuler(tl.fromArray(D)),r.invert()}i.scale&&s.scale(cr.fromArray(i.scale)),i.scalingOffset&&a.setPosition(cr.fromArray(i.scalingOffset)),i.scalingPivot&&o.setPosition(cr.fromArray(i.scalingPivot)),i.rotationOffset&&l.setPosition(cr.fromArray(i.rotationOffset)),i.rotationPivot&&c.setPosition(cr.fromArray(i.rotationPivot)),i.parentMatrixWorld&&(h.copy(i.parentMatrix),u.copy(i.parentMatrixWorld));const g=t.clone().multiply(n).multiply(r),m=new Ce;m.extractRotation(u);const p=new Ce;p.copyPosition(u);const _=p.clone().invert().multiply(u),w=m.clone().invert().multiply(_),x=s,b=new Ce;if(d===0)b.copy(m).multiply(g).multiply(w).multiply(x);else if(d===1)b.copy(m).multiply(w).multiply(g).multiply(x);else{const Y=new Ce().scale(new R().setFromMatrixScale(h)).clone().invert(),K=w.clone().multiply(Y);b.copy(m).multiply(g).multiply(K).multiply(x)}const M=c.clone().invert(),E=o.clone().invert();let I=e.clone().multiply(l).multiply(c).multiply(t).multiply(n).multiply(r).multiply(M).multiply(a).multiply(o).multiply(s).multiply(E);const v=new Ce().copyPosition(I),A=u.clone().multiply(v);return f.copyPosition(A),I=f.clone().multiply(b),I.premultiply(u.invert()),I}function rp(i){i=i||0;const e=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return i===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),e[0]):e[i]}function nl(i){return i.split(",").map(function(t){return parseFloat(t)})}function sp(i,e,t){return e===void 0&&(e=0),t===void 0&&(t=i.byteLength),xc.decodeText(new Uint8Array(i,e,t))}function Mw(i,e){for(let t=0,n=i.length,r=e.length;t<r;t++,n++)i[n]=e[t]}function bw(i,e,t,n){for(let r=t,s=0;r<n;r++,s++)i[s]=e[r];return i}function Jh(i,e,t){return i.slice(0,e).concat(t).concat(i.slice(e))}const ww=new hw,Sw=i=>new Promise((e,t)=>{ww.load(i,n=>{e(n)},()=>{},n=>{t(n)})});var yo={Linear:{None:function(i){return i}},Quadratic:{In:function(i){return i*i},Out:function(i){return i*(2-i)},InOut:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)}},Cubic:{In:function(i){return i*i*i},Out:function(i){return--i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)}},Quartic:{In:function(i){return i*i*i*i},Out:function(i){return 1- --i*i*i*i},InOut:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)}},Quintic:{In:function(i){return i*i*i*i*i},Out:function(i){return--i*i*i*i*i+1},InOut:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)}},Sinusoidal:{In:function(i){return 1-Math.cos(i*Math.PI/2)},Out:function(i){return Math.sin(i*Math.PI/2)},InOut:function(i){return .5*(1-Math.cos(Math.PI*i))}},Exponential:{In:function(i){return i===0?0:Math.pow(1024,i-1)},Out:function(i){return i===1?1:1-Math.pow(2,-10*i)},InOut:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)}},Circular:{In:function(i){return 1-Math.sqrt(1-i*i)},Out:function(i){return Math.sqrt(1- --i*i)},InOut:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)}},Elastic:{In:function(i){return i===0?0:i===1?1:-Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI)},Out:function(i){return i===0?0:i===1?1:Math.pow(2,-10*i)*Math.sin((i-.1)*5*Math.PI)+1},InOut:function(i){return i===0?0:i===1?1:(i*=2,i<1?-.5*Math.pow(2,10*(i-1))*Math.sin((i-1.1)*5*Math.PI):.5*Math.pow(2,-10*(i-1))*Math.sin((i-1.1)*5*Math.PI)+1)}},Back:{In:function(i){var e=1.70158;return i*i*((e+1)*i-e)},Out:function(i){var e=1.70158;return--i*i*((e+1)*i+e)+1},InOut:function(i){var e=2.5949095;return(i*=2)<1?.5*(i*i*((e+1)*i-e)):.5*((i-=2)*i*((e+1)*i+e)+2)}},Bounce:{In:function(i){return 1-yo.Bounce.Out(1-i)},Out:function(i){return i<1/2.75?7.5625*i*i:i<2/2.75?7.5625*(i-=1.5/2.75)*i+.75:i<2.5/2.75?7.5625*(i-=2.25/2.75)*i+.9375:7.5625*(i-=2.625/2.75)*i+.984375},InOut:function(i){return i<.5?yo.Bounce.In(i*2)*.5:yo.Bounce.Out(i*2-1)*.5+.5}}},is;typeof self>"u"&&typeof process<"u"&&process.hrtime?is=function(){var i=process.hrtime();return i[0]*1e3+i[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?is=self.performance.now.bind(self.performance):Date.now!==void 0?is=Date.now:is=function(){return new Date().getTime()};var dr=is,Tw=function(){function i(){this._tweens={},this._tweensAddedDuringUpdate={}}return i.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},i.prototype.removeAll=function(){this._tweens={}},i.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},i.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},i.prototype.update=function(e,t){e===void 0&&(e=dr()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},i}(),rs={Linear:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=rs.Utils.Linear;return e<0?s(i[0],i[1],n):e>1?s(i[t],i[t-1],t-n):s(i[r],i[r+1>t?t:r+1],n-r)},Bezier:function(i,e){for(var t=0,n=i.length-1,r=Math.pow,s=rs.Utils.Bernstein,o=0;o<=n;o++)t+=r(1-e,n-o)*r(e,o)*i[o]*s(n,o);return t},CatmullRom:function(i,e){var t=i.length-1,n=t*e,r=Math.floor(n),s=rs.Utils.CatmullRom;return i[0]===i[t]?(e<0&&(r=Math.floor(n=t*(1+e))),s(i[(r-1+t)%t],i[r],i[(r+1)%t],i[(r+2)%t],n-r)):e<0?i[0]-(s(i[0],i[0],i[1],i[1],-n)-i[0]):e>1?i[t]-(s(i[t],i[t],i[t-1],i[t-1],n-t)-i[t]):s(i[r?r-1:0],i[r],i[t<r+1?t:r+1],i[t<r+2?t:r+2],n-r)},Utils:{Linear:function(i,e,t){return(e-i)*t+i},Bernstein:function(i,e){var t=rs.Utils.Factorial;return t(i)/t(e)/t(i-e)},Factorial:function(){var i=[1];return function(e){var t=1;if(i[e])return i[e];for(var n=e;n>1;n--)t*=n;return i[e]=t,t}}(),CatmullRom:function(i,e,t,n,r){var s=(t-i)*.5,o=(n-e)*.5,a=r*r,l=r*a;return(2*e-2*t+s+o)*l+(-3*e+3*t-2*s-o)*a+s*r+e}}},op=function(){function i(){}return i.nextId=function(){return i._nextId++},i._nextId=0,i}(),ap=new Tw,Qh=function(){function i(e,t){t===void 0&&(t=ap),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=yo.Linear.None,this._interpolationFunction=rs.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=op.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return i.prototype.getId=function(){return this._id},i.prototype.isPlaying=function(){return this._isPlaying},i.prototype.isPaused=function(){return this._isPaused},i.prototype.to=function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},i.prototype.duration=function(e){return this._duration=e,this},i.prototype.start=function(e){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var t in this._valuesStartRepeat)this._swapEndStartRepeatValues(t),this._valuesStart[t]=this._valuesStartRepeat[t]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e!==void 0?typeof e=="string"?dr()+parseFloat(e):e:dr(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},i.prototype._setupProperties=function(e,t,n,r){for(var s in n){var o=e[s],a=Array.isArray(o),l=a?"array":typeof o,c=!a&&Array.isArray(n[s]);if(!(l==="undefined"||l==="function")){if(c){var u=n[s];if(u.length===0)continue;u=u.map(this._handleRelativeValue.bind(this,o)),n[s]=[o].concat(u)}if((l==="object"||a)&&o&&!c){t[s]=a?[]:{};for(var h in o)t[s][h]=o[h];r[s]=a?[]:{},this._setupProperties(o,t[s],n[s],r[s])}else typeof t[s]>"u"&&(t[s]=o),a||(t[s]*=1),c?r[s]=n[s].slice().reverse():r[s]=t[s]||0}}},i.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},i.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},i.prototype.pause=function(e){return e===void 0&&(e=dr()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},i.prototype.resume=function(e){return e===void 0&&(e=dr()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},i.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},i.prototype.group=function(e){return this._group=e,this},i.prototype.delay=function(e){return this._delayTime=e,this},i.prototype.repeat=function(e){return this._initialRepeat=e,this._repeat=e,this},i.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},i.prototype.yoyo=function(e){return this._yoyo=e,this},i.prototype.easing=function(e){return this._easingFunction=e,this},i.prototype.interpolation=function(e){return this._interpolationFunction=e,this},i.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},i.prototype.onStart=function(e){return this._onStartCallback=e,this},i.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},i.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},i.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},i.prototype.onStop=function(e){return this._onStopCallback=e,this},i.prototype.update=function(e,t){if(e===void 0&&(e=dr()),t===void 0&&(t=!0),this._isPaused)return!0;var n,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(e-this._startTime)/this._duration,r=this._duration===0||r>1?1:r;var o=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),r===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},i.prototype._updateProperties=function(e,t,n,r){for(var s in n)if(t[s]!==void 0){var o=t[s]||0,a=n[s],l=Array.isArray(e[s]),c=Array.isArray(a),u=!l&&c;u?e[s]=this._interpolationFunction(a,r):typeof a=="object"&&a?this._updateProperties(e[s],o,a,r):(a=this._handleRelativeValue(o,a),typeof a=="number"&&(e[s]=o+(a-o)*r))}},i.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},i.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},i}();op.nextId;var Pn=ap;Pn.getAll.bind(Pn);Pn.removeAll.bind(Pn);Pn.add.bind(Pn);Pn.remove.bind(Pn);Pn.update.bind(Pn);const An={mesh:"#1B3045",head:"#ffffff",soundLine:"#4f90bb",risingColor:"#5588AA",liveColor:"#ffffff",radarColor:"#FFA500",wall:"#fab73f",circle:"#00bbff",ball:"#fab73f",cone:"#ffff00",fly:"#00bbff"};class Ew{constructor(e,t,n,r){this.height=n,this.scene=e,this.child=t,this.time=r,this.createMesh(),this.createLine()}computedMesh(){this.child.geometry.computeBoundingBox(),this.child.geometry.computeBoundingSphere()}createMesh(){this.computedMesh();const{max:e,min:t}=this.child.geometry.boundingBox,n=e.z-t.z,r=new Vt({uniforms:{u_height:this.height,u_up_color:{value:new Pe(An.risingColor)},u_city_color:{value:new Pe(An.mesh)},u_head_color:{value:new Pe(An.head)},u_size:{value:n},u_time:this.time},vertexShader:`
        uniform float u_time;
        varying vec3 v_position;
        
        void main() {
          // \u53D8\u5316\u7684\u65F6\u95F4 
          float uMax = 4.0;
        
          v_position = position;
          
          // \u53D8\u5316\u7684\u6BD4\u4F8B
          float rate = u_time / uMax * 2.0;
          
          // \u8FB9\u754C\u6761\u4EF6
          if (rate > 1.0) {
            rate = 1.0;
          }
          
          float z = position.z * rate;
        
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec2(position), z, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_position;
        
        uniform vec3 u_city_color;
        uniform vec3 u_head_color;
        uniform float u_size;
        
        uniform vec3 u_up_color;
        uniform float u_height;
        
        void main() {
          vec3 base_color = u_city_color;
          base_color = mix(base_color, u_head_color, v_position.z / u_size);
        
          // \u4E0A\u5347\u7EBF\u6761\u7684\u9AD8\u5EA6\u662F\u591A\u5C11
          if (u_height > v_position.z && u_height < v_position.z + 6.0) {
            float f_index = (u_height - v_position.z) / 3.0;
            base_color = mix(u_up_color, base_color, abs(f_index - 1.0));
          }
        
          gl_FragColor = vec4(base_color, 1.0);
        }
      `}),s=new Bt(this.child.geometry,r);s.position.copy(this.child.position),s.rotation.copy(this.child.rotation),s.scale.copy(this.child.scale),this.scene.add(s)}createLine(){const e=new lb(this.child.geometry),{max:t,min:n}=this.child.geometry.boundingBox,r=new Vt({uniforms:{line_color:{value:new Pe(An.soundLine)},u_time:this.time,u_max:{value:t},u_min:{value:n},live_color:{value:new Pe(An.liveColor)}},vertexShader:`
        uniform float u_time;
        uniform vec3 live_color;
        uniform vec3 line_color;
        uniform vec3 u_max;
        uniform vec3 u_min;
        
        varying vec3 v_color;
        
        void main() {
          float uMax = 4.0;
          
          float rate = u_time / uMax * 2.0;
          
          if (rate > 1.0) {
            rate = 1.0;
          }
          
          float z = position.z * rate;
        
          float new_time = mod(u_time * 0.1, 1.0);
          // \u626B\u63CF\u7684\u4F4D\u7F6E
          float rangeY = mix(u_min.y, u_max.y, new_time);
          
          // \u5F53\u524D\u5728\u8FD9\u4E2A\u533A\u95F4\u5185\uFF0C\u663E\u793A\u626B\u63CF\u5149\u5E26
          if (rangeY < position.y && rangeY > position.y - 200.0) {
            float f_index = 1.0 - sin((position.y - rangeY) / 200.0 * 3.14);
            float r = mix(live_color.r, line_color.r, f_index);
            float g = mix(live_color.g, line_color.g, f_index);
            float b = mix(live_color.b, line_color.b, f_index);
            
            v_color = vec3(r,g,b);
          } else {
            v_color = line_color;
          }
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(vec2(position), z, 1.0);
        }
      `,fragmentShader:`
        varying vec3 v_color;
      
        void main() {
           gl_FragColor = vec4(v_color, 1.0);
        }
      `}),s=new nb(e,r);s.scale.copy(this.child.scale),s.rotation.copy(this.child.rotation),s.position.copy(this.child.position),this.scene.add(s)}}class Aw{constructor(e,t){this.scene=e,this.time=t,this.init()}init(){const t=new Ko(120,120,1,1),n=new Vt({uniforms:{u_color:{value:new Pe(An.radarColor)},u_time:this.time,u_radius:{value:60}},transparent:!0,side:mn,vertexShader:`
        varying vec2 v_position;
      
        void main() {
          v_position = vec2(position);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision mediump float;
        varying vec2 v_position;
        
        uniform float u_time;
        uniform vec3 u_color;
        uniform float u_radius;
        
        void main() {
          float angle = atan(v_position.x, v_position.y);
          
          float new_angle = mod(angle + u_time, 3.1415926 * 2.0);
          
          // \u8BA1\u7B97\u8DDD\u79BB
          float dis = distance(vec2(0.0,0.0), v_position);
          
          // \u5916\u5C42\u5706\u73AF\u7684\u5BBD\u5EA6
          float borderWidth = 2.0;
          
          float f_opacity = 0.0;
          
          // \u5728\u5706\u73AF\u4E0A
          if (dis > u_radius - borderWidth) {
            f_opacity = 1.0;
          }
          
          // \u96F7\u8FBE\u626B\u63CF\u7684\u663E\u793A
          if (dis < u_radius - borderWidth) {
            f_opacity = 1.0 - new_angle;
          }
          
          // \u5904\u4E8E\u96F7\u8FBE\u4E4B\u5916
          if (dis > u_radius) {
            f_opacity = 0.0;
          }
          
          gl_FragColor = vec4(u_color, f_opacity);
        }
      `}),r=new Bt(t,n);r.rotateX(-Math.PI/2),r.position.set(200,0,0),this.scene.add(r)}}class Cw{constructor(e,t){this.scene=e,this.time=t}createCylinder(e){const t=new gc(e.radius,e.radius,e.height,32,1,e.open);t.translate(0,e.height/2,0);const n=new Vt({uniforms:{u_color:{value:new Pe(e.color)},u_height:{value:e.height},u_opacity:{value:e.opacity},u_speed:{value:e.speed},u_time:this.time},vertexShader:`
        uniform float u_time;
        uniform float u_height;
        uniform float u_speed;
        
        varying float v_opacity;
        
        void main() {
          vec3 v_position = position * mod(u_time / u_speed, 1.0);
          
          v_opacity = mix(1.0, 0.0, position.y / u_height);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        uniform float u_opacity;
        
        varying float v_opacity;
        
        void main() {
          gl_FragColor = vec4(u_color, u_opacity * v_opacity);
        }
      `,transparent:!0,side:mn,depthTest:!1}),r=new Bt(t,n);r.position.copy(e.position),this.scene.add(r)}}class Lw{constructor(e,t){this.config={radius:100,height:50,open:!0,color:An.wall,opacity:.6,position:{x:-300,y:0,z:0},speed:5},new Cw(e,t).createCylinder(this.config)}}class Pw{constructor(e,t){this.scene=e,this.time=t,this.createSphere({color:An.ball,height:60,opacity:.6,speed:4,position:{x:300,y:0,z:-200}})}createSphere(e){const t=new _c(50,32,32,Math.PI/2,Math.PI*2,0,Math.PI/2),n=new Vt({uniforms:{u_color:{value:new Pe(e.color)},u_height:{value:e.height},u_opacity:{value:e.opacity},u_speed:{value:e.speed},u_time:this.time},vertexShader:`
        uniform float u_time;
        uniform float u_height;
        uniform float u_speed;
        
        varying float v_opacity;
        
        void main() {
          vec3 v_position = position * mod(u_time / u_speed, 1.0);
          
          v_opacity = mix(1.0, 0.0, position.y / u_height);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(v_position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        uniform float u_opacity;
        
        varying float v_opacity;
        
        void main() {
          gl_FragColor = vec4(u_color, u_opacity * v_opacity);
        }
      `,transparent:!0,side:mn,depthTest:!1}),r=new Bt(t,n);r.position.copy(e.position),this.scene.add(r)}}class Dw{constructor(e,t){this.scene=e;debugger;this.time=t,this.createFly({source:{x:300,y:0,z:-200},target:{x:-500,y:0,z:-240},range:300,height:300,color:An.fly,size:30})}createFly(e){const t=new R(e.source.x,e.source.y,e.source.z),n=new R(e.target.x,e.target.y,e.target.z),r=n.clone().lerp(t,.5);r.y+=e.height;const s=parseInt(t.distanceTo(n)),a=new ab(t,r,n).getPoints(s),l=[],c=[];a.forEach((d,g)=>{l.push(d.x,d.y,d.z),c.push(g)});const u=new pt;u.setAttribute("position",new it(l,3)),u.setAttribute("a_position",new it(c,1));const h=new Vt({uniforms:{u_color:{value:new Pe(e.color)},u_range:{value:e.range},u_size:{value:e.size},u_total:{value:s},u_time:this.time},vertexShader:`
        attribute float a_position;
        
        uniform float u_time;
        uniform float u_size;
        uniform float u_range;
        uniform float u_total;
      
        varying float v_opacity;
        
        void main() {
           float size = u_size;
           float total_number = u_total * mod(u_time, 1.0);
           
           if (total_number > a_position && total_number < a_position + u_range) {
           
             // \u62D6\u5C3E\u6548\u679C
             float index = (a_position + u_range - total_number) / u_range;
             size *= index;
             
             
             v_opacity = 1.0;
           } else {
             v_opacity = 0.0;
           }
           
           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
           gl_PointSize = size / 10.0;
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        varying float v_opacity;
        
        void main() {
          gl_FragColor = vec4(u_color, v_opacity);
        }
      `,transparent:!0}),f=new dc(u,h);this.scene.add(f)}}class Rw{constructor(e,t){this.scene=e,this.time=t,this.createFly({source:{x:300,y:0,z:-200},target:{x:-500,y:0,z:-240},range:200,height:300,color:An.fly,size:30})}createFly(e){const n=new ib([new R(-320,0,160),new R(-150,0,-40),new R(-10,0,-35),new R(40,0,40),new R(30,0,150),new R(-100,0,310)]).getPoints(400),r=[],s=[];n.forEach((c,u)=>{r.push(c.x,c.y,c.z),s.push(u)});const o=new pt;o.setAttribute("position",new it(r,3)),o.setAttribute("a_position",new it(s,1));const a=new Vt({uniforms:{u_color:{value:new Pe(e.color)},u_range:{value:e.range},u_size:{value:e.size},u_total:{value:400},u_time:this.time},vertexShader:`
        attribute float a_position;
        
        uniform float u_time;
        uniform float u_size;
        uniform float u_range;
        uniform float u_total;
      
        varying float v_opacity;
        
        void main() {
           float size = u_size;
           float total_number = u_total * mod(u_time, 1.0);
           
           if (total_number > a_position && total_number < a_position + u_range) {
           
             // \u62D6\u5C3E\u6548\u679C
             float index = (a_position + u_range - total_number) / u_range;
             size *= index;
             
             
             v_opacity = 1.0;
           } else {
             v_opacity = 0.0;
           }
           
           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
           gl_PointSize = size / 10.0;
        }
      `,fragmentShader:`
        uniform vec3 u_color;
        varying float v_opacity;
        
        void main() {
          gl_FragColor = vec4(u_color, v_opacity);
        }
      `,transparent:!0}),l=new dc(o,a);this.scene.add(l)}}class Iw{constructor(e){this.scene=e,this.smokes=[],this.init()}init(){this.geometry=new pt,this.material=new md({size:50,map:new xd().load("/wk_city/smoke.png"),transparent:!0,depthWrite:!1}),this.material.onBeforeCompile=function(e){const t=`
        attribute float a_opacity;
        attribute float a_size;
        attribute float a_scale;
        varying float v_opacity;
        
        void main() {
          v_opacity = a_opacity;
      `,n=`
        gl_PointSize = a_size * a_scale;
      `;e.vertexShader=e.vertexShader.replace("void main() {",t),e.vertexShader=e.vertexShader.replace("gl_PointSize = size",n);const r=`
        varying float v_opacity;
      
        void main() {
      `,s=`
        gl_FragColor = vec4(outgoingLight, diffuseColor.a * v_opacity);
      `;e.fragmentShader=e.fragmentShader.replace("void main() {",r),e.fragmentShader=e.fragmentShader.replace("gl_FragColor = vec4(outgoingLight, diffuseColor.a);",s)},this.points=new dc(this.geometry,this.material),this.scene.add(this.points)}createParticle(){this.smokes.push({size:50,opacity:1,x:0,y:0,z:0,speed:{x:Math.random(),y:Math.random()+.3,z:Math.random()},scale:1})}setAttribute(e,t,n,r){this.geometry.setAttribute("position",new Ut(new Float32Array(e),3)),this.geometry.setAttribute("a_opacity",new Ut(new Float32Array(t),1)),this.geometry.setAttribute("a_size",new Ut(new Float32Array(n),1)),this.geometry.setAttribute("a_scale",new Ut(new Float32Array(r),1))}update(){const e=[],t=[],n=[],r=[];this.smokes=this.smokes.filter(s=>s.opacity<0?!1:(s.opacity-=.01,s.x=s.x+s.speed.x,s.y=s.y+s.speed.y,s.z=s.z+s.speed.z,s.scale+=.01,e.push(s.x,s.y,s.z),t.push(s.size),n.push(s.scale),r.push(s.opacity),!0)),this.setAttribute(e,r,t,n)}animation(){this.createParticle(),this.update()}}class Fw{constructor(e,t,n){this.scene=e,this.camera=t,this.controls=n,this.tweenPosition=null,this.tweenRotation=null,this.height={value:5},this.top={value:0},this.flag=!1,this.time={value:0},this.effect={},this.loadCity()}loadCity(){Sw("/wk_city/model/beijing.fbx").then(e=>{e.traverse(t=>{t.isMesh&&new Ew(this.scene,t,this.height,this.time)}),this.initEffect()})}initEffect(){new Aw(this.scene,this.time),new Lw(this.scene,this.time),new Pw(this.scene,this.time),new Dw(this.scene,this.time),new Rw(this.scene,this.time),this.effect.smoke=new Iw(this.scene),this.addClick()}addWheel(){const e=document.body;e.onmousewheel=t=>{const r=t.clientX/window.innerWidth*2-1,s=-(t.clientY/window.innerHeight)*2+1,o=new R(r,s,.5);o.unproject(this.camera),o.sub(this.camera.position).normalize(),t.wheelDelta>0?(this.camera.position.x+=o.x*30,this.camera.position.y+=o.y*30,this.camera.position.z+=o.z*30,this.controls.target.x+=o.x*30,this.controls.target.y+=o.y*30,this.controls.target.z+=o.z*30):(this.camera.position.x-=o.x*30,this.camera.position.y-=o.y*30,this.camera.position.z-=o.z*30,this.controls.target.x-=o.x*30,this.controls.target.y-=o.y*30,this.controls.target.z-=o.z*30)}}addClick(){let e=!0;document.onmousedown=()=>{e=!0,document.onmousemove=()=>{e=!1}},document.onmouseup=t=>{e&&this.clickEvent(t),document.onmousemove=null}}clickEvent(e){const t=e.clientX/window.innerWidth*2-1,n=-(e.clientY/window.innerHeight)*2+1,o=new R(t,n,.5).unproject(this.camera).sub(this.camera.position).normalize(),l=new Nb(this.camera.position,o).intersectObjects(this.scene.children,!0);let c=null;l.length&&(c=l[0]),c&&(this.tweenPosition=new Qh(this.camera.position).to({x:c.point.x*3,y:c.point.y*3,z:c.point.z*3},1e3).start(),this.tweenRotation=new Qh(this.camera.rotation).to({x:this.camera.rotation.x,y:this.camera.rotation.y,z:this.camera.rotation.z},1e3).start())}start(e){for(const t in this.effect)this.effect[t]&&this.effect[t].animation();this.tweenPosition&&this.tweenRotation&&(this.tweenPosition.update(),this.tweenRotation.update()),this.time.value+=e,this.height.value+=.4,this.height.value>160&&(this.height.value=5),(this.top.value>15||this.top.value<0)&&(this.flag=!this.flag),this.top.value+=this.flag?-.8:.8}}const ef={type:"change"},il={type:"start"},tf={type:"end"};class Ow extends Gi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Yi.ROTATE,TWO:Yi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",ae),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ef),n.update(),s=r.NONE},this.update=function(){const L=new R,B=new nn().setFromUnitVectors(e.up,new R(0,1,0)),_e=B.clone().invert(),Me=new R,ve=new nn,Se=2*Math.PI;return function(){const De=n.object.position;L.copy(De).sub(n.target),L.applyQuaternion(B),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&A(I()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Be=n.minAzimuthAngle,et=n.maxAzimuthAngle;return isFinite(Be)&&isFinite(et)&&(Be<-Math.PI?Be+=Se:Be>Math.PI&&(Be-=Se),et<-Math.PI?et+=Se:et>Math.PI&&(et-=Se),Be<=et?a.theta=Math.max(Be,Math.min(et,a.theta)):a.theta=a.theta>(Be+et)/2?Math.max(Be,a.theta):Math.min(et,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(_e),De.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,h||Me.distanceToSquared(n.object.position)>o||8*(1-ve.dot(n.object.quaternion))>o?(n.dispatchEvent(ef),Me.copy(n.object.position),ve.copy(n.object.quaternion),h=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",N),n.domElement.removeEventListener("pointerdown",W),n.domElement.removeEventListener("pointercancel",ue),n.domElement.removeEventListener("wheel",fe),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",J),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",ae)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Hh,l=new Hh;let c=1;const u=new R;let h=!1;const f=new Ie,d=new Ie,g=new Ie,m=new Ie,p=new Ie,_=new Ie,w=new Ie,x=new Ie,b=new Ie,M=[],E={};function I(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function A(L){l.theta-=L}function D(L){l.phi-=L}const Y=function(){const L=new R;return function(_e,Me){L.setFromMatrixColumn(Me,0),L.multiplyScalar(-_e),u.add(L)}}(),K=function(){const L=new R;return function(_e,Me){n.screenSpacePanning===!0?L.setFromMatrixColumn(Me,1):(L.setFromMatrixColumn(Me,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(_e),u.add(L)}}(),z=function(){const L=new R;return function(_e,Me){const ve=n.domElement;if(n.object.isPerspectiveCamera){const Se=n.object.position;L.copy(Se).sub(n.target);let ye=L.length();ye*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*_e*ye/ve.clientHeight,n.object.matrix),K(2*Me*ye/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(_e*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),K(Me*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),h=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(L){f.set(L.clientX,L.clientY)}function q(L){w.set(L.clientX,L.clientY)}function V(L){m.set(L.clientX,L.clientY)}function U(L){d.set(L.clientX,L.clientY),g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const B=n.domElement;A(2*Math.PI*g.x/B.clientHeight),D(2*Math.PI*g.y/B.clientHeight),f.copy(d),n.update()}function G(L){x.set(L.clientX,L.clientY),b.subVectors(x,w),b.y>0?F(v()):b.y<0&&j(v()),w.copy(x),n.update()}function oe(L){p.set(L.clientX,L.clientY),_.subVectors(p,m).multiplyScalar(n.panSpeed),z(_.x,_.y),m.copy(p),n.update()}function se(L){L.deltaY<0?j(v()):L.deltaY>0&&F(v()),n.update()}function le(L){let B=!1;switch(L.code){case n.keys.UP:z(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),B=!0;break}B&&(L.preventDefault(),n.update())}function pe(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),B=.5*(M[0].pageY+M[1].pageY);f.set(L,B)}}function we(){if(M.length===1)m.set(M[0].pageX,M[0].pageY);else{const L=.5*(M[0].pageX+M[1].pageX),B=.5*(M[0].pageY+M[1].pageY);m.set(L,B)}}function Z(){const L=M[0].pageX-M[1].pageX,B=M[0].pageY-M[1].pageY,_e=Math.sqrt(L*L+B*B);w.set(0,_e)}function Fe(){n.enableZoom&&Z(),n.enablePan&&we()}function Te(){n.enableZoom&&Z(),n.enableRotate&&pe()}function Ae(L){if(M.length==1)d.set(L.pageX,L.pageY);else{const _e=ge(L),Me=.5*(L.pageX+_e.x),ve=.5*(L.pageY+_e.y);d.set(Me,ve)}g.subVectors(d,f).multiplyScalar(n.rotateSpeed);const B=n.domElement;A(2*Math.PI*g.x/B.clientHeight),D(2*Math.PI*g.y/B.clientHeight),f.copy(d)}function xe(L){if(M.length===1)p.set(L.pageX,L.pageY);else{const B=ge(L),_e=.5*(L.pageX+B.x),Me=.5*(L.pageY+B.y);p.set(_e,Me)}_.subVectors(p,m).multiplyScalar(n.panSpeed),z(_.x,_.y),m.copy(p)}function Ge(L){const B=ge(L),_e=L.pageX-B.x,Me=L.pageY-B.y,ve=Math.sqrt(_e*_e+Me*Me);x.set(0,ve),b.set(0,Math.pow(x.y/w.y,n.zoomSpeed)),F(b.y),w.copy(x)}function C(L){n.enableZoom&&Ge(L),n.enablePan&&xe(L)}function P(L){n.enableZoom&&Ge(L),n.enableRotate&&Ae(L)}function W(L){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",ee),n.domElement.addEventListener("pointerup",J)),$(L),L.pointerType==="touch"?S(L):he(L))}function ee(L){n.enabled!==!1&&(L.pointerType==="touch"?y(L):re(L))}function J(L){te(L),M.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",ee),n.domElement.removeEventListener("pointerup",J)),n.dispatchEvent(tf),s=r.NONE}function ue(L){te(L)}function he(L){let B;switch(L.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case qi.DOLLY:if(n.enableZoom===!1)return;q(L),s=r.DOLLY;break;case qi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;V(L),s=r.PAN}else{if(n.enableRotate===!1)return;X(L),s=r.ROTATE}break;case qi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;X(L),s=r.ROTATE}else{if(n.enablePan===!1)return;V(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(il)}function re(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;U(L);break;case r.DOLLY:if(n.enableZoom===!1)return;G(L);break;case r.PAN:if(n.enablePan===!1)return;oe(L);break}}function fe(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(il),se(L),n.dispatchEvent(tf))}function ae(L){n.enabled===!1||n.enablePan===!1||le(L)}function S(L){switch(ce(L),M.length){case 1:switch(n.touches.ONE){case Yi.ROTATE:if(n.enableRotate===!1)return;pe(),s=r.TOUCH_ROTATE;break;case Yi.PAN:if(n.enablePan===!1)return;we(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Yi.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Fe(),s=r.TOUCH_DOLLY_PAN;break;case Yi.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Te(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(il)}function y(L){switch(ce(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ae(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;xe(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;C(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;P(L),n.update();break;default:s=r.NONE}}function N(L){n.enabled!==!1&&L.preventDefault()}function $(L){M.push(L)}function te(L){delete E[L.pointerId];for(let B=0;B<M.length;B++)if(M[B].pointerId==L.pointerId){M.splice(B,1);return}}function ce(L){let B=E[L.pointerId];B===void 0&&(B=new Ie,E[L.pointerId]=B),B.set(L.pageX,L.pageY)}function ge(L){const B=L.pointerId===M[0].pointerId?M[1]:M[0];return E[B.pointerId]}n.domElement.addEventListener("contextmenu",N),n.domElement.addEventListener("pointerdown",W),n.domElement.addEventListener("pointercancel",ue),n.domElement.addEventListener("wheel",fe,{passive:!1}),this.update()}}const zw=()=>{const i=document.getElementById("webgl"),e=new KM,t=new Dt(45,window.innerWidth/window.innerHeight,1,1e5);t.position.set(1e3,500,100),e.add(t);const n=new Ow(t,i);n.enableDamping=!0,n.enableZoom=!1,n.minDistance=100,n.maxDistance=2e3,n.enablePan=!0,e.add(new Md(11382189));const r=new yd(16777215);r.position.set(0,0,0),e.add(r);const s=new fd({canvas:i});s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.setClearColor(new Pe(0),1);const o=new Fw(e,t,n),a=new Ab,l=()=>{o.start(a.getDelta()),n.update(),s.render(e,t),requestAnimationFrame(l)};l(),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2))})},Nw={id:"webgl"},Uw={__name:"App",setup(i){return Jl(()=>{zw()}),(e,t)=>(tg(),rg("canvas",Nw,"\u6D4F\u89C8\u5668\u4E0D\u652F\u6301canvas\uFF0C\u8BF7\u5207\u6362\u6D4F\u89C8\u5668\u91CD\u8BD5"))}};Vg(Uw).mount("#app");
