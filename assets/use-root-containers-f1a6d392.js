import{i as S,g as x,H as m,m as v,o as E}from"./use-outside-click-a915c15b.js";import{r as i,w as b,d as f,p as h,i as p,b as H,e as O,f as y,h as w,O as $,P as j}from"./index-e786ad72.js";import{a as B,f as F}from"./description-fbf3446e.js";var L=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(L||{});function U(){let e=i(0);return S("keydown",r=>{r.key==="Tab"&&(e.value=r.shiftKey?1:0)}),e}function A(e,r,n,l){x.isServer||b(u=>{e=e??window,e.addEventListener(r,n,l),u(()=>e.removeEventListener(r,n,l))})}let T=Symbol("ForcePortalRootContext");function M(){return p(T,!1)}let N=f({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:r,attrs:n}){return h(T,e.force),()=>{let{force:l,...u}=e;return m({theirProps:u,ourProps:{},slot:{},slots:r,attrs:n,name:"ForcePortalRoot"})}}});function k(e){let r=v(e);if(!r){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=r.getElementById("headlessui-portal-root");if(n)return n;let l=r.createElement("div");return l.setAttribute("id","headlessui-portal-root"),r.body.appendChild(l)}let q=f({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:r,attrs:n}){let l=i(null),u=H(()=>v(l)),a=M(),o=p(C,null),t=i(a===!0||o==null?k(l.value):o.resolveTarget());b(()=>{a||o!=null&&(t.value=o.resolveTarget())});let d=p(c,null);return O(()=>{let s=E(l);s&&d&&y(d.register(s))}),y(()=>{var s,P;let g=(s=u.value)==null?void 0:s.getElementById("headlessui-portal-root");g&&t.value===g&&t.value.children.length<=0&&((P=t.value.parentElement)==null||P.removeChild(t.value))}),()=>{if(t.value===null)return null;let s={ref:l,"data-headlessui-portal":""};return w($,{to:t.value},m({ourProps:s,theirProps:e,slot:{},attrs:n,slots:r,name:"Portal"}))}}}),c=Symbol("PortalParentContext");function D(){let e=p(c,null),r=i([]);function n(a){return r.value.push(a),e&&e.register(a),()=>l(a)}function l(a){let o=r.value.indexOf(a);o!==-1&&r.value.splice(o,1),e&&e.unregister(a)}let u={register:n,unregister:l,portals:r};return[r,f({name:"PortalWrapper",setup(a,{slots:o}){return h(c,u),()=>{var t;return(t=o.default)==null?void 0:t.call(o)}}})]}let C=Symbol("PortalGroupContext"),K=f({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:r,slots:n}){let l=j({resolveTarget(){return e.target}});return h(C,l),()=>{let{target:u,...a}=e;return m({theirProps:a,ourProps:{},slot:{},attrs:r,slots:n,name:"PortalGroup"})}}});function V({defaultContainers:e=[],portals:r}={}){let n=i(null),l=v(n);function u(){var a;let o=[];for(let t of e)t!==null&&(t instanceof HTMLElement?o.push(t):"value"in t&&t.value instanceof HTMLElement&&o.push(t.value));if(r!=null&&r.value)for(let t of r.value)o.push(t);for(let t of(a=l?.querySelectorAll("html > *, body > *"))!=null?a:[])t!==document.body&&t!==document.head&&t instanceof HTMLElement&&t.id!=="headlessui-portal-root"&&(t.contains(E(n))||o.some(d=>t.contains(d))||o.push(t));return o}return{resolveContainers:u,contains(a){return u().some(o=>o.contains(a))},mainTreeNodeRef:n,MainTreeNode(){return w(F,{features:B.Hidden,ref:n})}}}export{A as E,N as P,q as U,D as V,K as _,L as d,U as n,V as p};
