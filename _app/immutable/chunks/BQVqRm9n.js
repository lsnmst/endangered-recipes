var Pn=Array.isArray,Zt=Array.prototype.indexOf,bn=Array.from,Cn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,qn=Array.prototype,zt=Object.getPrototypeOf;const Ln=()=>{};function Yn(t){return t()}function Jt(t){for(var n=0;n<t.length;n++)t[n]()}const w=2,yt=4,U=8,at=16,A=32,H=64,G=128,O=256,K=512,h=1024,x=2048,C=4096,b=8192,F=16384,Qt=32768,wt=65536,Mn=1<<17,Xt=1<<19,Et=1<<20,vt=Symbol("$state"),jn=Symbol("legacy props");function mt(t){return t===this.v}function tn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!tn(t,this.v)}function nn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function en(t){throw new Error("https://svelte.dev/e/effect_orphan")}function ln(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Un(){throw new Error("https://svelte.dev/e/hydration_failed")}function Hn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function sn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Q=!1;function $n(){Q=!0}const Gn=1,Kn=2,Zn=4,Wn=8,zn=16,Jn=1,Qn=2,un="[",on="[!",fn="]",gt={},Xn=Symbol();function ut(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function tr(t){return _n(ut(t))}function nr(t,n=!1){var e;const r=ut(t);return n||(r.equals=Tt),Q&&_!==null&&_.l!==null&&((e=_.l).s??(e.s=[])).push(r),r}function _n(t){return u!==null&&u.f&w&&(T===null?xn([t]):T.push(t)),t}function rr(t,n){return u!==null&&X()&&u.f&(w|at)&&(T===null||!T.includes(t))&&an(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),At(t,x),X()&&f!==null&&f.f&h&&!(f.f&(A|H))&&(g===null?Rn([t]):g.push(t))),n}function At(t,n){var r=t.reactions;if(r!==null)for(var e=X(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&x||!e&&a===f||(m(a,n),o&(h|O)&&(o&w?At(a,C):nt(a)))}}function xt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function er(t){S=t}let E;function L(t){if(t===null)throw xt(),gt;return E=t}function lr(){return L(I(E))}function sr(t){if(S){if(I(E)!==null)throw xt(),gt;E=t}}function ar(t=1){if(S){for(var n=t,r=E;n--;)r=I(r);E=r}}function ur(){for(var t=0,n=E;;){if(n.nodeType===8){var r=n.data;if(r===fn){if(t===0)return n;t-=1}else(r===un||r===on)&&(t+=1)}var e=I(n);n.remove(),n=e}}var pt,vn,Rt,Dt;function or(){if(pt===void 0){pt=window,vn=document;var t=Element.prototype,n=Node.prototype;Rt=ct(n,"firstChild").get,Dt=ct(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Rt.call(t)}function I(t){return Dt.call(t)}function ir(t,n){if(!S)return et(t);var r=et(E);if(r===null)r=E.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),L(e),e}return L(r),r}function fr(t,n){if(!S){var r=et(t);return r instanceof Comment&&r.data===""?I(r):r}return E}function _r(t,n=1,r=!1){let e=S?E:t;for(var l;n--;)l=e,e=I(e);if(!S)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=rt();return e===null?l==null||l.after(a):e.before(a),L(a),a}return L(e),e}function cr(t){t.textContent=""}function pn(t){var n=w|x;f===null?n|=O:f.f|=Et;var r=u!==null&&u.f&w?u:null;const e={children:null,ctx:_,deps:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function vr(t){const n=pn(t);return n.equals=Tt,n}function St(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&w?ot(e):k(e)}}}function hn(t){for(var n=t.parent;n!==null;){if(!(n.f&w))return n;n=n.parent}return null}function kt(t){var n,r=f;z(hn(t));try{St(t),n=Bt(t)}finally{z(r)}return n}function Ot(t){var n=kt(t),r=(D||t.f&O)&&t.deps!==null?C:h;m(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function ot(t){St(t),j(t,0),m(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function It(t){f===null&&u===null&&en(),u!==null&&u.f&O&&rn(),it&&nn()}function dn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var l=(t&H)!==0,s=f,a={ctx:_,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|x,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=N;try{ht(!0),ft(a),a.f|=Qt}catch(v){throw k(a),v}finally{ht(o)}}else n!==null&&nt(a);var c=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Et|G))===0;if(!c&&!l&&e&&(s!==null&&dn(a,s),u!==null&&u.f&w)){var p=u;(p.children??(p.children=[])).push(a)}return a}function pr(t){const n=q(U,null,!1);return m(n,h),n.teardown=t,n}function hr(t){It();var n=f!==null&&(f.f&A)!==0&&_!==null&&!_.m;if(n){var r=_;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Nt(t);return e}}function dr(t){return It(),yn(t)}function yr(t){const n=q(H,t,!0);return(r={})=>new Promise(e=>{r.outro?mn(n,()=>{k(n),e(void 0)}):(k(n),e(void 0))})}function Nt(t){return q(yt,t,!1)}function yn(t){return q(U,t,!0)}function wr(t){return wn(t)}function wn(t,n=0){return q(U|at|n,t,!0)}function Er(t,n=!0){return q(U|A,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=it,e=u;dt(!0),W(null);try{n.call(null)}finally{dt(r),W(e)}}}function bt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;k(r,n),r=e}}function En(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||k(n),n=r}}function k(t,n=!0){var r=!1;if((n||t.f&Xt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:I(e);e.remove(),e=s}r=!0}Ct(t,n&&!r),bt(t),j(t,0),m(t,F);var a=t.transitions;if(a!==null)for(const c of a)c.stop();Pt(t);var o=t.parent;o!==null&&o.first!==null&&Ft(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ft(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function mn(t,n){var r=[];qt(t,r,!0),Tn(r,()=>{k(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&wt)!==0||(e.f&A)!==0;qt(e,n,s?r:!1),e=l}}}function mr(t){Lt(t,!0)}function Lt(t,n){if(t.f&b){t.f^=b,t.f&h||(t.f^=h),B(t)&&(m(t,x),nt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&wt)!==0||(r.f&A)!==0;Lt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let Z=!1,lt=[];function Yt(){Z=!1;const t=lt.slice();lt=[],Jt(t)}function Tr(t){Z||(Z=!0,queueMicrotask(Yt)),lt.push(t)}function gn(){Z&&Yt()}const Mt=0,An=1;let V=!1,$=Mt,Y=!1,M=null,N=!1,it=!1;function ht(t){N=t}function dt(t){it=t}let R=[],P=0;let u=null;function W(t){u=t}let f=null;function z(t){f=t}let T=null;function xn(t){T=t}let d=null,y=0,g=null;function Rn(t){g=t}let jt=1,J=0,D=!1,_=null;function Ut(){return++jt}function X(){return!Q||_!==null&&_.l===null}function B(t){var p;var n=t.f;if(n&x)return!0;if(n&C){var r=t.deps,e=(n&O)!==0;if(r!==null){var l,s,a=(n&K)!==0,o=e&&f!==null&&!D,c=r.length;if(a||o){for(l=0;l<c;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=K)}for(l=0;l<c;l++)if(s=r[l],B(s)&&Ot(s),s.wv>t.wv)return!0}(!e||f!==null&&!D)&&m(t,h)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&G)try{r.fn(t);return}catch{r.f^=G}r=r.parent}throw V=!1,t}function Sn(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&G)===0)}function tt(t,n,r,e){if(V){if(r===null&&(V=!1),Sn(n))throw t;return}r!==null&&(V=!0);{Dn(t,n);return}}function Ht(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&w?Ht(s,n,r+1):n===s&&(r===0?m(s,x):s.f&h&&m(s,C),nt(s))}}function Bt(t){var _t;var n=d,r=y,e=g,l=u,s=D,a=T,o=_,c=t.f;d=null,y=0,g=null,u=c&(A|H)?null:t,D=!N&&(c&O)!==0,T=null,_=t.ctx,J++;try{var p=(0,t.fn)(),v=t.deps;if(d!==null){var i;if(j(t,y),v!==null&&y>0)for(v.length=y+d.length,i=0;i<d.length;i++)v[y+i]=d[i];else t.deps=v=d;if(!D)for(i=y;i<v.length;i++)((_t=v[i]).reactions??(_t.reactions=[])).push(t)}else v!==null&&y<v.length&&(j(t,y),v.length=y);if(X()&&g!==null&&!(t.f&(w|C|x)))for(i=0;i<g.length;i++)Ht(g[i],t);return l!==null&&J++,p}finally{d=n,y=r,g=e,u=l,D=s,T=a,_=o}}function kn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&w&&(d===null||!d.includes(n))&&(m(n,C),n.f&(O|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)kn(t,r[e])}function ft(t){var n=t.f;if(!(n&F)){m(t,h);var r=f,e=_;f=t;try{n&at?En(t):Ct(t),bt(t),Pt(t);var l=Bt(t);t.teardown=typeof l=="function"?l:null,t.wv=jt;var s=t.deps,a}catch(o){tt(o,t,r,e||t.ctx)}finally{f=r}}}function Vt(){if(P>1e3){P=0;try{ln()}catch(t){if(M!==null)tt(t,M,null);else throw t}}P++}function $t(t){var n=t.length;if(n!==0){Vt();var r=N;N=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&h||(l.f^=h);var s=[];Gt(l,s),On(s)}}finally{N=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|b)))try{B(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ft(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function In(){if(Y=!1,P>1001)return;const t=R;R=[],$t(t),Y||(P=0,M=null)}function nt(t){$===Mt&&(Y||(Y=!0,queueMicrotask(In))),M=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(H|A)){if(!(r&h))return;n.f^=h}}R.push(n)}function Gt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&A)!==0,a=s&&(l&h)!==0,o=r.next;if(!a&&!(l&b))if(l&U){if(s)r.f^=h;else try{B(r)&&ft(r)}catch(i){tt(i,r,null,r.ctx)}var c=r.first;if(c!==null){r=c;continue}}else l&yt&&e.push(r);if(o===null){let i=r.parent;for(;i!==null;){if(t===i)break t;var p=i.next;if(p!==null){r=p;continue t}i=i.parent}}r=o}for(var v=0;v<e.length;v++)c=e[v],n.push(c),Gt(c,n)}function Kt(t){var n=$,r=R;try{Vt();const l=[];$=An,R=l,Y=!1,$t(r);var e=t==null?void 0:t();return gn(),(R.length>0||l.length>0)&&Kt(),P=0,M=null,e}finally{$=n,R=r}}async function gr(){await Promise.resolve(),Kt()}function Ar(t){var v;var n=t.f,r=(n&w)!==0;if(r&&n&F){var e=kt(t);return ot(t),e}if(u!==null){T!==null&&T.includes(t)&&sn();var l=u.deps;t.rv<J&&(t.rv=J,d===null&&l!==null&&l[y]===t?y++:d===null?d=[t]:d.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&w){var c=a;o=c,a=c.parent}else{var p=a;(v=p.deriveds)!=null&&v.includes(o)||(p.deriveds??(p.deriveds=[])).push(o);break}return r&&(s=t,B(s)&&Ot(s)),t.v}function xr(t){const n=u;try{return u=null,t()}finally{u=n}}const Nn=-7169;function m(t,n){t.f=t.f&Nn|n}function Rr(t,n=!1,r){_={p:_,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(_.l={s:null,u:null,r1:[],r2:ut(!1)})}function Dr(t){const n=_;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),W(s.reaction),Nt(s.fn)}}finally{z(r),W(e)}}_=n.p,n.m=!0}return{}}function Sr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{Wt as $,fr as A,wr as B,Dr as C,ir as D,sr as E,_r as F,W as G,Xt as H,z as I,Pn as J,u as K,f as L,or as M,gt as N,lr as O,fn as P,xt as Q,Un as R,cr as S,bn as T,yr as U,Er as V,tn as W,Q as X,Jn as Y,Qn as Z,zt as _,hr as a,vn as a0,vt as a1,Fn as a2,qn as a3,ut as a4,Bn as a5,ct as a6,Xn as a7,Vn as a8,wt as a9,on as aa,ur as ab,mr as ac,mn as ad,Nt as ae,yn as af,Tr as ag,Hn as ah,Mn as ai,Zn as aj,Tt as ak,A as al,H as am,Gn as an,Kn as ao,Wn as ap,jn as aq,vr as ar,zn as as,Kt as at,gr as au,tr as av,xr as b,_ as c,Cn as d,Yn as e,Sr as f,Ar as g,pn as h,rt as i,wn as j,S as k,un as l,nr as m,Ln as n,I as o,er as p,L as q,Jt as r,rr as s,pr as t,dr as u,E as v,et as w,$n as x,ar as y,Rr as z};
