import{a5 as k,h as D,F as C,i as H,p as U,r as $,e as R,w as E,K as _,b as K}from"./index-e786ad72.js";function g(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,g),r}var W=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(W||{}),G=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(G||{});function fe({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var u;let i=P(r,n),l=Object.assign(o,{props:i});if(e||t&2&&i.static)return b(l);if(t&1){let m=(u=i.unmount)==null||u?0:1;return g(m,{[0](){return null},[1](){return b({...o,props:{...i,hidden:!0,style:{display:"none"}}})}})}return b(l)}function b({props:e,attrs:t,slots:n,slot:r,name:o}){var u,i;let{as:l,...m}=V(e,["unmount","static"]),a=(u=n.default)==null?void 0:u.call(n,r),s={};if(r){let p=!1,v=[];for(let[f,c]of Object.entries(r))typeof c=="boolean"&&(p=!0),c===!0&&v.push(f);p&&(s["data-headlessui-state"]=v.join(" "))}if(l==="template"){if(a=j(a??[]),Object.keys(m).length>0||Object.keys(t).length>0){let[p,...v]=a??[];if(!B(p)||v.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(m).concat(Object.keys(t)).map(d=>d.trim()).filter((d,w,M)=>M.indexOf(d)===w).sort((d,w)=>d.localeCompare(w)).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let f=P((i=p.props)!=null?i:{},m),c=k(p,f);for(let d in f)d.startsWith("on")&&(c.props||(c.props={}),c.props[d]=f[d]);return c}return Array.isArray(a)&&a.length===1?a[0]:a}return D(l,Object.assign({},m,s),{default:()=>a})}function j(e){return e.flatMap(t=>t.type===C?j(t.children):[t])}function P(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...u){let i=n[r];for(let l of i){if(o instanceof Event&&o.defaultPrevented)return;l(o,...u)}}});return t}function pe(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function V(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function B(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let X=0;function q(){return++X}function me(){return q()}var Y=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Y||{});function h(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let x=Symbol("Context");var z=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(z||{});function ve(){return J()!==null}function J(){return H(x,null)}function he(e){U(x,e)}function N(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function we(e,t){let n=$(N(e.value.type,e.value.as));return R(()=>{n.value=N(e.value.type,e.value.as)}),E(()=>{var r;n.value||h(t)&&h(t)instanceof HTMLButtonElement&&!((r=h(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var Q=Object.defineProperty,Z=(e,t,n)=>t in e?Q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t,n)=>(Z(e,typeof t!="symbol"?t+"":t,n),n);class ee{constructor(){S(this,"current",this.detect()),S(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let O=new ee;function F(e){if(O.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=h(e);if(t)return t.ownerDocument}return document}let y=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var te=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(te||{}),ne=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ne||{}),re=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(re||{});function L(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(y)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var T=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(T||{});function I(e,t=0){var n;return e===((n=F(e))==null?void 0:n.body)?!1:g(t,{[0](){return e.matches(y)},[1](){let r=e;for(;r!==null;){if(r.matches(y))return!0;r=r.parentElement}return!1}})}function be(e){let t=F(e);_(()=>{t&&!I(t.activeElement,0)&&ue(e)})}var oe=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(oe||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function ue(e){e?.focus({preventScroll:!0})}let le=["textarea","input"].join(",");function ie(e){var t,n;return(n=(t=e?.matches)==null?void 0:t.call(e,le))!=null?n:!1}function ae(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),u=t(r);if(o===null||u===null)return 0;let i=o.compareDocumentPosition(u);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ye(e,t){return se(L(),t,{relativeTo:e})}function se(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var u;let i=(u=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e?.ownerDocument)!=null?u:document,l=Array.isArray(e)?n?ae(e):e:L(e);o.length>0&&l.length>1&&(l=l.filter(c=>!o.includes(c))),r=r??i.activeElement;let m=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(r))-1;if(t&4)return Math.max(0,l.indexOf(r))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),s=t&32?{preventScroll:!0}:{},p=0,v=l.length,f;do{if(p>=v||p+v<=0)return 0;let c=a+p;if(t&16)c=(c+v)%v;else{if(c<0)return 3;if(c>=v)return 1}f=l[c],f?.focus(s),p+=m}while(f!==i.activeElement);return t&6&&ie(f)&&f.select(),2}function A(e,t,n){O.isServer||E(r=>{document.addEventListener(e,t,n),r(()=>document.removeEventListener(e,t,n))})}function ce(e,t,n){O.isServer||E(r=>{window.addEventListener(e,t,n),r(()=>window.removeEventListener(e,t,n))})}function Ee(e,t,n=K(()=>!0)){function r(u,i){if(!n.value||u.defaultPrevented)return;let l=i(u);if(l===null||!l.getRootNode().contains(l))return;let m=function a(s){return typeof s=="function"?a(s()):Array.isArray(s)||s instanceof Set?s:[s]}(e);for(let a of m){if(a===null)continue;let s=a instanceof HTMLElement?a:h(a);if(s!=null&&s.contains(l)||u.composed&&u.composedPath().includes(s))return}return!I(l,T.Loose)&&l.tabIndex!==-1&&u.preventDefault(),t(u,l)}let o=$(null);A("mousedown",u=>{var i,l;n.value&&(o.value=((l=(i=u.composedPath)==null?void 0:i.call(u))==null?void 0:l[0])||u.target)},!0),A("click",u=>{o.value&&(r(u,()=>o.value),o.value=null)},!0),ce("blur",u=>r(u,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}export{ve as C,L as E,Ee as F,fe as H,pe as K,W as N,ae as O,se as P,ue as S,ne as T,be as _,Y as a,we as b,he as c,te as d,V as e,G as f,O as g,T as h,ce as i,z as l,F as m,h as o,J as p,me as t,g as u,ye as v,I as w};
