var Ze=Object.defineProperty;var Ge=(t,e,n)=>e in t?Ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var re=(t,e,n)=>(Ge(t,typeof e!="symbol"?e+"":e,n),n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))l(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function k(){}function Qe(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function Ve(t){return t()}function we(){return Object.create(null)}function Q(t){t.forEach(Ve)}function me(t){return typeof t=="function"}function te(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Ye(t){return Object.keys(t).length===0}function p(t,e){t.appendChild(e)}function z(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode&&t.parentNode.removeChild(t)}function J(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function b(t){return document.createElement(t)}function W(t){return document.createTextNode(t)}function O(){return W(" ")}function Y(){return W("")}function I(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function P(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $e(t){return Array.from(t.childNodes)}function ne(t,e){e=""+e,t.data!==e&&(t.data=e)}function Se(t,e){t.value=e??""}function R(t,e,n){t.classList.toggle(e,!!n)}let x;function j(t){x=t}function xe(){if(!x)throw new Error("Function called outside component initialization");return x}const K=[],X=[];let V=[];const ue=[],et=Promise.resolve();let se=!1;function tt(){se||(se=!0,et.then(pe))}function fe(t){V.push(t)}function ae(t){ue.push(t)}const oe=new Set;let q=0;function pe(){if(q!==0)return;const t=x;do{try{for(;q<K.length;){const e=K[q];q++,j(e),nt(e.$$)}}catch(e){throw K.length=0,q=0,e}for(j(null),K.length=0,q=0;X.length;)X.pop()();for(let e=0;e<V.length;e+=1){const n=V[e];oe.has(n)||(oe.add(n),n())}V.length=0}while(K.length);for(;ue.length;)ue.pop()();se=!1,oe.clear(),j(t)}function nt(t){if(t.fragment!==null){t.update(),Q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}function lt(t){const e=[],n=[];V.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),V=e}const ce=new Set;let D;function be(){D={r:0,c:[],p:D}}function ke(){D.r||Q(D.c),D=D.p}function F(t,e){t&&t.i&&(ce.delete(t),t.i(e))}function H(t,e,n,l){if(t&&t.o){if(ce.has(t))return;ce.add(t),D.c.push(()=>{ce.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function U(t,e){const n=e.token={};function l(i,r,c,o){if(e.token!==n)return;e.resolved=o;let u=e.ctx;c!==void 0&&(u=u.slice(),u[c]=o);const s=i&&(e.current=i)(u);let d=!1;e.block&&(e.blocks?e.blocks.forEach((f,h)=>{h!==r&&f&&(be(),H(f,1,1,()=>{e.blocks[h]===f&&(e.blocks[h]=null)}),ke())}):e.block.d(1),s.c(),F(s,1),s.m(e.mount(),e.anchor),d=!0),e.block=s,e.blocks&&(e.blocks[r]=s),d&&pe()}if(Qe(t)){const i=xe();if(t.then(r=>{j(i),l(e.then,1,e.value,r),j(null)},r=>{if(j(i),l(e.catch,2,e.error,r),j(null),!e.hasCatch)throw r}),e.current!==e.pending)return l(e.pending,0),!0}else{if(e.current!==e.then)return l(e.then,1,e.value,t),!0;e.resolved=t}}function de(t,e,n){const l=e.slice(),{resolved:i}=t;t.current===t.then&&(l[t.value]=i),t.current===t.catch&&(l[t.error]=i),t.block.p(l,n)}function T(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function _e(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function ee(t){t&&t.c()}function Z(t,e,n){const{fragment:l,after_update:i}=t.$$;l&&l.m(e,n),fe(()=>{const r=t.$$.on_mount.map(Ve).filter(me);t.$$.on_destroy?t.$$.on_destroy.push(...r):Q(r),t.$$.on_mount=[]}),i.forEach(fe)}function G(t,e){const n=t.$$;n.fragment!==null&&(lt(n.after_update),Q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){t.$$.dirty[0]===-1&&(K.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function le(t,e,n,l,i,r,c=null,o=[-1]){const u=x;j(t);const s=t.$$={fragment:null,ctx:[],props:r,update:k,not_equal:i,bound:we(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:we(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};c&&c(s.root);let d=!1;if(s.ctx=n?n(t,e.props||{},(f,h,..._)=>{const g=_.length?_[0]:h;return s.ctx&&i(s.ctx[f],s.ctx[f]=g)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](g),d&&it(t,f)),h}):[],s.update(),d=!0,Q(s.before_update),s.fragment=l?l(s.ctx):!1,e.target){if(e.hydrate){const f=$e(e.target);s.fragment&&s.fragment.l(f),f.forEach(y)}else s.fragment&&s.fragment.c();e.intro&&F(t.$$.fragment),Z(t,e.target,e.anchor),pe()}j(u)}class ie{constructor(){re(this,"$$");re(this,"$$set")}$destroy(){G(this,1),this.$destroy=k}$on(e,n){if(!me(n))return k;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const i=l.indexOf(n);i!==-1&&l.splice(i,1)}}$set(e){this.$$set&&!Ye(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ct="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ct);function rt(t){let e,n,l,i;return{c(){e=b("button"),n=W(t[1]),P(e,"class","svelte-zwutd7")},m(r,c){z(r,e,c),p(e,n),l||(i=I(e,"click",t[3]),l=!0)},p(r,[c]){c&2&&ne(n,r[1])},i:k,o:k,d(r){r&&y(e),l=!1,i()}}}function ot(t,e,n){let l;const i="ws://"+location.host+"/ws/connect_devices";let r=new WebSocket(i),c=!1;r.onopen=()=>{console.log("ws opened")},r.onmessage=u=>{console.log(u);let s=JSON.parse(u.data);n(2,c=s.connecting)};const o=()=>{r.send(JSON.stringify({connect:!0}))};return t.$$.update=()=>{t.$$.dirty&4&&n(1,l=c?"Scanning for devices":"Start device scan")},[r,l,c,o]}class ut extends ie{constructor(e){super(),le(this,e,ot,rt,te,{})}}function he(t,e="header"){return e=="trackLength"?t+" km":e=="header"?t=="dateTime"?"date":t instanceof String?t.replace(/([a-z])([A-Z])/g,"$1 $2"):t:typeof t=="string"&&/<\/?[a-z][\s\S]*>/i.test(t)?t:t instanceof Date?t.toLocaleDateString(navigator.language,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"numeric"}):t}var ge=(t=>(t[t.ASC=0]="ASC",t[t.DESC=1]="DESC",t))(ge||{});function st(t,e){return e.sort((n,l)=>{let i=0,r=n[t.column],c=l[t.column];if(r instanceof Date&&(r=r.valueOf(),c=c.valueOf()),typeof r=="string"&&(r=r.replace(/<\/?[^>]+(>|$)/g,""),c=c.replace(/<\/?[^>]+(>|$)/g,"")),r>c)i=-1;else if(r<c)i=1;else return 0;return i*(t.direction==0?-1:1)})}function ye(t,e,n){const l=t.slice();return l[13]=e[n],l}function ze(t){let e;return{c(){e=b("span"),e.textContent="..."},m(n,l){z(n,e,l)},d(n){n&&y(e)}}}function Pe(t){let e,n=t[13]+1+"",l,i,r;function c(){return t[9](t[13])}return{c(){e=b("button"),l=W(n),P(e,"class","svelte-kdzyf1"),R(e,"selected",t[0]==t[13])},m(o,u){z(o,e,u),p(e,l),i||(r=I(e,"click",c),i=!0)},p(o,u){t=o,u&16&&n!==(n=t[13]+1+"")&&ne(l,n),u&17&&R(e,"selected",t[0]==t[13])},d(o){o&&y(e),i=!1,r()}}}function Ce(t){let e,n=t[13]>0&&Pe(t);return{c(){n&&n.c(),e=Y()},m(l,i){n&&n.m(l,i),z(l,e,i)},p(l,i){l[13]>0?n?n.p(l,i):(n=Pe(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(l){l&&y(e),n&&n.d(l)}}}function Me(t){let e;return{c(){e=b("span"),e.textContent="..."},m(n,l){z(n,e,l)},d(n){n&&y(e)}}}function ft(t){let e,n,l,i,r,c,o,u,s=t[0]+4<Math.floor(t[1]/t[2]),d,f,h,_,g,B,w=t[0]>5&&ze(),E=T(t[4]),M=[];for(let m=0;m<E.length;m+=1)M[m]=Ce(ye(t,E,m));let S=s&&Me();return{c(){e=b("div"),n=b("button"),n.textContent="previous page",l=O(),i=b("div"),r=b("button"),r.textContent="1",c=O(),w&&w.c(),o=O();for(let m=0;m<M.length;m+=1)M[m].c();u=O(),S&&S.c(),d=O(),f=b("button"),f.textContent=`${t[5]}`,h=O(),_=b("button"),_.textContent="next page",P(n,"class","svelte-kdzyf1"),P(r,"class","svelte-kdzyf1"),R(r,"selected",t[0]==0),P(f,"class","svelte-kdzyf1"),R(f,"selected",t[5]-1==t[0]),P(i,"class","absolutePages svelte-kdzyf1"),P(_,"class","svelte-kdzyf1"),P(e,"class","paginationControlls svelte-kdzyf1")},m(m,N){z(m,e,N),p(e,n),p(e,l),p(e,i),p(i,r),p(i,c),w&&w.m(i,null),p(i,o);for(let v=0;v<M.length;v+=1)M[v]&&M[v].m(i,null);p(i,u),S&&S.m(i,null),p(i,d),p(i,f),p(e,h),p(e,_),g||(B=[I(n,"click",t[7]),I(r,"click",t[8]),I(f,"click",t[10]),I(_,"click",t[11])],g=!0)},p(m,[N]){if(N&1&&R(r,"selected",m[0]==0),m[0]>5?w||(w=ze(),w.c(),w.m(i,o)):w&&(w.d(1),w=null),N&25){E=T(m[4]);let v;for(v=0;v<E.length;v+=1){const C=ye(m,E,v);M[v]?M[v].p(C,N):(M[v]=Ce(C),M[v].c(),M[v].m(i,u))}for(;v<M.length;v+=1)M[v].d(1);M.length=E.length}N&7&&(s=m[0]+4<Math.floor(m[1]/m[2])),s?S||(S=Me(),S.c(),S.m(i,d)):S&&(S.d(1),S=null),N&33&&R(f,"selected",m[5]-1==m[0])},i:k,o:k,d(m){m&&y(e),w&&w.d(),J(M,m),S&&S.d(),g=!1,Q(B)}}}let $=7;function at(t,e,n){let{changePage:l}=e,{currentPage:i}=e,{rowCount:r}=e,{pageSize:c}=e,o=Math.ceil(r/c);function u(w,E){l(w,E),n(4,d=s())}function s(){return i>=o-3?Array.from({length:$-2},(w,E)=>o-($-1-E)):Array.from({length:$-2},(w,E)=>i+E-Math.floor(($-2)/2)-1+1+Math.max(0,Math.floor(($-2)/2)-i+1)).filter(Boolean)}let d=s();const f=()=>u(-1),h=()=>u(0,!0),_=w=>u(w,!0),g=()=>u(o-1,!0),B=()=>u(1);return t.$$set=w=>{"changePage"in w&&n(6,l=w.changePage),"currentPage"in w&&n(0,i=w.currentPage),"rowCount"in w&&n(1,r=w.rowCount),"pageSize"in w&&n(2,c=w.pageSize)},[i,r,c,u,d,o,l,f,h,_,g,B]}class dt extends ie{constructor(e){super(),le(this,e,at,ft,te,{changePage:6,currentPage:0,rowCount:1,pageSize:2,pageChange:3})}get pageChange(){return this.$$.ctx[3]}}function Ne(t,e,n){const l=t.slice();return l[4]=e[n],l}function Ae(t){let e,n=t[4]+"",l,i,r;return{c(){e=b("option"),l=W(n),e.__value=i=t[4],Se(e,e.__value),e.selected=r=t[4]==t[3]},m(c,o){z(c,e,o),p(e,l)},p(c,o){o&4&&n!==(n=c[4]+"")&&ne(l,n),o&4&&i!==(i=c[4])&&(e.__value=i,Se(e,e.__value)),o&12&&r!==(r=c[4]==c[3])&&(e.selected=r)},d(c){c&&y(e)}}}function _t(t){let e,n,l,i,r,c,o=T(t[2]),u=[];for(let s=0;s<o.length;s+=1)u[s]=Ae(Ne(t,o,s));return{c(){e=b("div"),n=W(t[0]),l=O(),i=b("select");for(let s=0;s<u.length;s+=1)u[s].c()},m(s,d){z(s,e,d),p(e,n),p(e,l),p(e,i);for(let f=0;f<u.length;f+=1)u[f]&&u[f].m(i,null);r||(c=I(i,"change",function(){me(t[1])&&t[1].apply(this,arguments)}),r=!0)},p(s,[d]){if(t=s,d&1&&ne(n,t[0]),d&12){o=T(t[2]);let f;for(f=0;f<o.length;f+=1){const h=Ne(t,o,f);u[f]?u[f].p(h,d):(u[f]=Ae(h),u[f].c(),u[f].m(i,null))}for(;f<u.length;f+=1)u[f].d(1);u.length=o.length}},i:k,o:k,d(s){s&&y(e),J(u,s),r=!1,c()}}}function ht(t,e,n){let{label:l}=e,{changePageSize:i}=e,{pageSizes:r}=e,{pageSize:c=r[0]}=e;return t.$$set=o=>{"label"in o&&n(0,l=o.label),"changePageSize"in o&&n(1,i=o.changePageSize),"pageSizes"in o&&n(2,r=o.pageSizes),"pageSize"in o&&n(3,c=o.pageSize)},[l,i,r,c]}class gt extends ie{constructor(e){super(),le(this,e,ht,_t,te,{label:0,changePageSize:1,pageSizes:2,pageSize:3})}}function Ee(t,e,n){const l=t.slice();return l[22]=e[n],l[24]=n,l}function Oe(t,e,n){const l=t.slice();return l[28]=e[n],l}function Le(t,e,n){const l=t.slice();return l[22]=e[n],l[24]=n,l}function Fe(t,e,n){const l=t.slice();return l[22]=e[n],l}function Te(t,e,n){const l=t.slice();return l[31]=e[n],l}function Be(t){let e,n,l=t[6](t[31])+"",i,r,c,o,u;function s(){return t[17](t[31])}return{c(){e=b("th"),n=b("div"),i=W(l),r=O(),c=b("span"),P(c,"class","emptyIcon svelte-1tk4vwe"),P(n,"class","tableHeaderContent svelte-1tk4vwe"),P(e,"class","svelte-1tk4vwe")},m(d,f){z(d,e,f),p(e,n),p(n,i),p(n,r),p(n,c),o||(u=I(e,"click",s),o=!0)},p(d,f){t=d,f[0]&68&&l!==(l=t[6](t[31])+"")&&ne(i,l)},d(d){d&&y(e),o=!1,u()}}}function He(t){let e;return{c(){e=b("th"),P(e,"class","svelte-1tk4vwe")},m(n,l){z(n,e,l)},d(n){n&&y(e)}}}function mt(t){return{c:k,m:k,p:k,d:k}}function pt(t){let e,n=T({length:t[0]}),l=[];for(let i=0;i<n.length;i+=1)l[i]=Je(Ee(t,n,i));return{c(){for(let i=0;i<l.length;i+=1)l[i].c();e=Y()},m(i,r){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(i,r);z(i,e,r)},p(i,r){if(r[0]&335){n=T({length:i[0]});let c;for(c=0;c<n.length;c+=1){const o=Ee(i,n,c);l[c]?l[c].p(o,r):(l[c]=Je(o),l[c].c(),l[c].m(e.parentNode,e))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(i){i&&y(e),J(l,i)}}}function Ie(t){let e,n,l,i=T(t[2]),r=[];for(let o=0;o<i.length;o+=1)r[o]=je(Oe(t,i,o));let c=t[3]!==void 0&&De(t);return{c(){e=b("tr");for(let o=0;o<r.length;o+=1)r[o].c();n=O(),c&&c.c(),l=O(),P(e,"class","svelte-1tk4vwe")},m(o,u){z(o,e,u);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null);p(e,n),c&&c.m(e,null),p(e,l)},p(o,u){if(u[0]&327){i=T(o[2]);let s;for(s=0;s<i.length;s+=1){const d=Oe(o,i,s);r[s]?r[s].p(d,u):(r[s]=je(d),r[s].c(),r[s].m(e,n))}for(;s<r.length;s+=1)r[s].d(1);r.length=i.length}o[3]!==void 0?c?c.p(o,u):(c=De(o),c.c(),c.m(e,l)):c&&(c.d(1),c=null)},d(o){o&&y(e),J(r,o),c&&c.d()}}}function je(t){let e,n=t[6](t[8][t[0]*t[1]+t[24]][t[28]],t[28])+"";return{c(){e=b("td"),P(e,"class","svelte-1tk4vwe")},m(l,i){z(l,e,i),e.innerHTML=n},p(l,i){i[0]&327&&n!==(n=l[6](l[8][l[0]*l[1]+l[24]][l[28]],l[28])+"")&&(e.innerHTML=n)},d(l){l&&y(e)}}}function De(t){let e,n,l,i;function r(){return t[18](t[8],t[24])}return{c(){e=b("td"),n=b("button"),n.textContent=`show all\r
                                        measurements`,P(e,"class","svelte-1tk4vwe")},m(c,o){z(c,e,o),p(e,n),l||(i=I(n,"click",r),l=!0)},p(c,o){t=c},d(c){c&&y(e),l=!1,i()}}}function Je(t){let e,n=t[8][t[0]*t[1]+t[24]]&&Ie(t);return{c(){n&&n.c(),e=Y()},m(l,i){n&&n.m(l,i),z(l,e,i)},p(l,i){l[8][l[0]*l[1]+l[24]]?n?n.p(l,i):(n=Ie(l),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(l){l&&y(e),n&&n.d(l)}}}function bt(t){let e,n,l=T({length:t[0]}),i=[];for(let c=0;c<l.length;c+=1)i[c]=qe(Le(t,l,c));let r=t[3]!==void 0&&Ke();return{c(){for(let c=0;c<i.length;c+=1)i[c].c();e=O(),r&&r.c(),n=Y()},m(c,o){for(let u=0;u<i.length;u+=1)i[u]&&i[u].m(c,o);z(c,e,o),r&&r.m(c,o),z(c,n,o)},p(c,o){if(o[0]&5){l=T({length:c[0]});let u;for(u=0;u<l.length;u+=1){const s=Le(c,l,u);i[u]?i[u].p(s,o):(i[u]=qe(s),i[u].c(),i[u].m(e.parentNode,e))}for(;u<i.length;u+=1)i[u].d(1);i.length=l.length}c[3]!==void 0?r||(r=Ke(),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(c){c&&(y(e),y(n)),J(i,c),r&&r.d(c)}}}function We(t){let e;return{c(){e=b("td"),e.innerHTML="<wbr/>",P(e,"class","svelte-1tk4vwe")},m(n,l){z(n,e,l)},p:k,d(n){n&&y(e)}}}function qe(t){let e,n=T(t[2]),l=[];for(let i=0;i<n.length;i+=1)l[i]=We(Fe(t,n,i));return{c(){e=b("tr");for(let i=0;i<l.length;i+=1)l[i].c();P(e,"class","placeHolder svelte-1tk4vwe")},m(i,r){z(i,e,r);for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(e,null)},p(i,r){if(r[0]&4){n=T(i[2]);let c;for(c=0;c<n.length;c+=1){const o=Fe(i,n,c);l[c]?l[c].p(o,r):(l[c]=We(),l[c].c(),l[c].m(e,null))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(i){i&&y(e),J(l,i)}}}function Ke(t){let e;return{c(){e=b("td"),e.innerHTML="<wbr/>",P(e,"class","svelte-1tk4vwe")},m(n,l){z(n,e,l)},d(n){n&&y(e)}}}function kt(t){return{c:k,m:k,p:k,i:k,o:k,d:k}}function vt(t){let e,n,l,i={ctx:t,current:null,token:null,hasCatch:!1,pending:yt,then:St,catch:wt,value:9,blocks:[,,,]};return U(n=t[9],i),{c(){e=Y(),i.block.c()},m(r,c){z(r,e,c),i.block.m(r,i.anchor=c),i.mount=()=>e.parentNode,i.anchor=e,l=!0},p(r,c){t=r,i.ctx=t,c[0]&512&&n!==(n=t[9])&&U(n,i)||de(i,t,c)},i(r){l||(F(i.block),l=!0)},o(r){for(let c=0;c<3;c+=1){const o=i.blocks[c];H(o)}l=!1},d(r){r&&y(e),i.block.d(r),i.token=null,i=null}}}function wt(t){return{c:k,m:k,p:k,i:k,o:k,d:k}}function St(t){let e,n,l=t[9]>1&&Re(t);return{c(){l&&l.c(),e=Y()},m(i,r){l&&l.m(i,r),z(i,e,r),n=!0},p(i,r){i[9]>1?l?(l.p(i,r),r[0]&512&&F(l,1)):(l=Re(i),l.c(),F(l,1),l.m(e.parentNode,e)):l&&(be(),H(l,1,1,()=>{l=null}),ke())},i(i){n||(F(l),n=!0)},o(i){H(l),n=!1},d(i){i&&y(e),l&&l.d(i)}}}function Re(t){let e,n,l,i;function r(u){t[20](u)}function c(u){t[21](u)}let o={rowCount:t[8].length,changePage:t[11]};return t[0]!==void 0&&(o.pageSize=t[0]),t[1]!==void 0&&(o.currentPage=t[1]),e=new dt({props:o}),t[19](e),X.push(()=>_e(e,"pageSize",r)),X.push(()=>_e(e,"currentPage",c)),{c(){ee(e.$$.fragment)},m(u,s){Z(e,u,s),i=!0},p(u,s){const d={};s[0]&256&&(d.rowCount=u[8].length),!n&&s[0]&1&&(n=!0,d.pageSize=u[0],ae(()=>n=!1)),!l&&s[0]&2&&(l=!0,d.currentPage=u[1],ae(()=>l=!1)),e.$set(d)},i(u){i||(F(e.$$.fragment,u),i=!0)},o(u){H(e.$$.fragment,u),i=!1},d(u){t[19](null),G(e,u)}}}function yt(t){return{c:k,m:k,p:k,i:k,o:k,d:k}}function zt(t){let e;return{c(){e=b("div"),e.innerHTML='<button class="svelte-1tk4vwe">previous page</button> <button class="svelte-1tk4vwe">next page</button>',P(e,"class","placeholderPagination svelte-1tk4vwe")},m(n,l){z(n,e,l)},p:k,i:k,o:k,d(n){n&&y(e)}}}function Pt(t){let e,n,l,i,r,c,o,u,s,d,f,h,_,g,B;function w(C){t[16](C)}let E={label:"shown "+t[4],changePageSize:t[12],pageSizes:t[5]};t[0]!==void 0&&(E.pageSize=t[0]),n=new gt({props:E}),X.push(()=>_e(n,"pageSize",w));let M=T(t[2]),S=[];for(let C=0;C<M.length;C+=1)S[C]=Be(Te(t,M,C));let m=t[3]!==void 0&&He(),N={ctx:t,current:null,token:null,hasCatch:!1,pending:bt,then:pt,catch:mt,value:8};U(h=t[8],N);let v={ctx:t,current:null,token:null,hasCatch:!1,pending:zt,then:vt,catch:kt,value:8,blocks:[,,,]};return U(g=t[8],v),{c(){e=b("div"),ee(n.$$.fragment),i=O(),r=b("div"),c=b("table"),o=b("thead"),u=b("tr");for(let C=0;C<S.length;C+=1)S[C].c();s=O(),m&&m.c(),d=O(),f=b("tbody"),N.block.c(),_=O(),v.block.c(),P(u,"class","svelte-1tk4vwe"),P(c,"class","svelte-1tk4vwe"),P(r,"class","tbl svelte-1tk4vwe"),P(e,"class","wrapper svelte-1tk4vwe")},m(C,L){z(C,e,L),Z(n,e,null),p(e,i),p(e,r),p(r,c),p(c,o),p(o,u);for(let a=0;a<S.length;a+=1)S[a]&&S[a].m(u,null);p(u,s),m&&m.m(u,null),p(c,d),p(c,f),N.block.m(f,N.anchor=null),N.mount=()=>f,N.anchor=null,p(e,_),v.block.m(e,v.anchor=null),v.mount=()=>e,v.anchor=null,B=!0},p(C,L){t=C;const a={};if(L[0]&16&&(a.label="shown "+t[4]),L[0]&32&&(a.pageSizes=t[5]),!l&&L[0]&1&&(l=!0,a.pageSize=t[0],ae(()=>l=!1)),n.$set(a),L[0]&1092){M=T(t[2]);let A;for(A=0;A<M.length;A+=1){const ve=Te(t,M,A);S[A]?S[A].p(ve,L):(S[A]=Be(ve),S[A].c(),S[A].m(u,s))}for(;A<S.length;A+=1)S[A].d(1);S.length=M.length}t[3]!==void 0?m||(m=He(),m.c(),m.m(u,null)):m&&(m.d(1),m=null),N.ctx=t,L[0]&256&&h!==(h=t[8])&&U(h,N)||de(N,t,L),v.ctx=t,L[0]&256&&g!==(g=t[8])&&U(g,v)||de(v,t,L)},i(C){B||(F(n.$$.fragment,C),F(v.block),B=!0)},o(C){H(n.$$.fragment,C);for(let L=0;L<3;L+=1){const a=v.blocks[L];H(a)}B=!1},d(C){C&&y(e),G(n),J(S,C),m&&m.d(),N.block.d(),N.token=null,N=null,v.block.d(),v.token=null,v=null}}}function Ct(t,e,n){let l,i,{data:r}=e,{keys:c}=e,{action:o=void 0}=e,{label:u}=e,{pageSizes:s=[5,10,20,50,100]}=e,{pageSize:d=s[0]}=e,{formatFunc:f=he}=e,{sortFunc:h=st}=e,{currentPage:_=0}=e,g={column:c.includes("dateTime")?"dateTime":c[0],direction:ge.DESC};function B(a){g.column==a?n(15,g.direction=+!g.direction,g):n(15,g={column:a,direction:ge.ASC})}async function w(a,A=!1){A&&a<0||!A&&_+a<0||A&&Math.ceil((await i).length/d)<=a||!A&&Math.ceil((await i).length/d)<=_+a||(A?n(1,_=a):n(1,_+=a))}let E;function M(a){n(0,d=parseInt(a.target.value)),n(1,_=0),E&&E.pageChange(0,!0)}function S(a){d=a,n(0,d)}const m=a=>B(a),N=(a,A)=>{o(a[d*_+A])};function v(a){X[a?"unshift":"push"](()=>{E=a,n(7,E)})}function C(a){d=a,n(0,d)}function L(a){_=a,n(1,_)}return t.$$set=a=>{"data"in a&&n(13,r=a.data),"keys"in a&&n(2,c=a.keys),"action"in a&&n(3,o=a.action),"label"in a&&n(4,u=a.label),"pageSizes"in a&&n(5,s=a.pageSizes),"pageSize"in a&&n(0,d=a.pageSize),"formatFunc"in a&&n(6,f=a.formatFunc),"sortFunc"in a&&n(14,h=a.sortFunc),"currentPage"in a&&n(1,_=a.currentPage)},t.$$.update=()=>{t.$$.dirty[0]&8193&&n(9,l=(async()=>Math.ceil((await r).length/d))()),t.$$.dirty[0]&57344&&n(8,i=(async()=>h(g,(await r).map((a,A)=>({hashId:A,...a}))))())},[d,_,c,o,u,s,f,E,i,l,B,w,M,r,h,g,S,m,N,v,C,L]}class Xe extends ie{constructor(e){super(),le(this,e,Ct,Pt,te,{data:13,keys:2,action:3,label:4,pageSizes:5,pageSize:0,formatFunc:6,sortFunc:14,currentPage:1},null,[-1,-1])}}function Ue(t){let e,n,l,i,r;return i=new Xe({props:{label:"measurements",formatFunc:t[8],keys:["dateTime","name","temperature","humidity","pressure","soil"],data:t[1]}}),{c(){e=b("h2"),e.textContent="All measurements of selected device",n=O(),l=b("div"),ee(i.$$.fragment),P(e,"class","svelte-1tigyfu"),P(l,"class","table svelte-1tigyfu")},m(c,o){z(c,e,o),z(c,n,o),z(c,l,o),Z(i,l,null),r=!0},p(c,o){const u={};o&2&&(u.data=c[1]),i.$set(u)},i(c){r||(F(i.$$.fragment,c),r=!0)},o(c){H(i.$$.fragment,c),r=!1},d(c){c&&(y(e),y(n),y(l)),G(i)}}}function Mt(t){let e,n,l,i,r,c,o,u,s,d;r=new ut({}),u=new Xe({props:{label:"sensors",keys:t[3],formatFunc:t[6],action:t[7],data:t[2]}});let f=t[0]&&Ue(t);return{c(){e=b("main"),n=b("div"),l=b("h1"),l.textContent="XBee Sensor Managament",i=O(),ee(r.$$.fragment),c=O(),o=b("div"),ee(u.$$.fragment),s=O(),f&&f.c(),P(n,"class","inline svelte-1tigyfu"),P(o,"class","table svelte-1tigyfu")},m(h,_){z(h,e,_),p(e,n),p(n,l),p(n,i),Z(r,n,null),p(e,c),p(e,o),Z(u,o,null),p(e,s),f&&f.m(e,null),d=!0},p(h,[_]){const g={};_&1&&(g.action=h[7]),_&4&&(g.data=h[2]),u.$set(g),h[0]?f?(f.p(h,_),_&1&&F(f,1)):(f=Ue(h),f.c(),F(f,1),f.m(e,null)):f&&(be(),H(f,1,1,()=>{f=null}),ke())},i(h){d||(F(r.$$.fragment,h),F(u.$$.fragment,h),F(f),d=!0)},o(h){H(r.$$.fragment,h),H(u.$$.fragment,h),H(f),d=!1},d(h){h&&y(e),G(r),G(u),f&&f.d()}}}function Nt(t,e,n){let l,i,r=new WebSocket("ws://localhost:8000/ws/data"),c={};r.onopen=()=>{console.log("ws opened")},r.onmessage=_=>{console.log("helo",_);let g=JSON.parse(_.data);g.dateTime=new Date,n(5,o[g.mac]=g,o),c[g.mac]==null&&n(4,c[g.mac]=[],c),n(4,c[g.mac]=[...c[g.mac],g],c)};let o={},u=["name","temperature","humidity","pressure","soil"],s;const d=(_,g)=>{switch(g){case"temperature":return _+"°C";case"humidity":return _+"%";case"pressure":return _+"hPa";case"soil":return _+"%";default:return he(_,g)}},f=_=>{n(0,s=_.mac)},h=(_,g)=>{switch(g){case"temperature":return _+"°C";case"humidity":return _+"%";case"pressure":return _+"hPa";case"soil":return _+"%";default:return he(_,g)}};return t.$$.update=()=>{t.$$.dirty&32&&n(2,l=Object.values(o)),t.$$.dirty&17&&n(1,i=c[s])},[s,i,l,u,c,o,d,f,h]}class At extends ie{constructor(e){super(),le(this,e,Nt,Mt,te,{})}}new At({target:document.getElementById("app")});