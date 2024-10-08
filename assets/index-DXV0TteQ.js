(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const H={context:void 0,registry:void 0,effects:void 0,done:!1,getContextId(){return La(this.context.count)},getNextContextId(){return La(this.context.count++)}};function La(n){const t=String(n),e=t.length-1;return H.context.id+(e?String.fromCharCode(96+e):"")+t}function kn(n){H.context=n}const af=(n,t)=>n===t,Ht=Symbol("solid-proxy"),nl=typeof Proxy=="function",ii=Symbol("solid-track"),Ur={equals:af};let rl=ul;const Qt=1,qn=2,sl={owned:null,cleanups:null,context:null,owner:null},zs={};var K=null;let O=null,cf=null,nt=null,kt=null,Ct=null,rs=0;function We(n,t){const e=nt,r=K,s=n.length===0,i=t===void 0?r:t,a=s?sl:{owned:null,cleanups:null,context:i?i.context:null,owner:i},c=s?n:()=>n(()=>Nt(()=>ye(a)));K=a,nt=null;try{return Ut(c,!0)}finally{nt=e,K=r}}function xt(n,t){t=t?Object.assign({},Ur,t):Ur;const e={value:n,observers:null,observerSlots:null,comparator:t.equals||void 0},r=s=>(typeof s=="function"&&(O&&O.running&&O.sources.has(e)?s=s(e.tValue):s=s(e.value)),ll(e,s));return[cl.bind(e),r]}function Ma(n,t,e){const r=as(n,t,!0,Qt);hn(r)}function fe(n,t,e){const r=as(n,t,!1,Qt);hn(r)}function $i(n,t,e){rl=mf;const r=as(n,t,!1,Qt),s=ke&&un(ke);s&&(r.suspense=s),r.user=!0,Ct?Ct.push(r):hn(r)}function ot(n,t,e){e=e?Object.assign({},Ur,e):Ur;const r=as(n,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=e.equals||void 0,hn(r),cl.bind(r)}function lf(n){return n&&typeof n=="object"&&"then"in n}function Nr(n,t,e){let r,s,i;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,s=n,i=t||{}):(r=n,s=t,i={});let a=null,c=zs,u=null,f=!1,d=!1,p="initialValue"in i,w=typeof r=="function"&&ot(r);const b=new Set,[P,C]=(i.storage||xt)(i.initialValue),[S,N]=xt(void 0),[k,$]=xt(void 0,{equals:!1}),[U,tt]=xt(p?"ready":"unresolved");H.context&&(u=H.getNextContextId(),i.ssrLoadFrom==="initial"?c=i.initialValue:H.load&&H.has(u)&&(c=H.load(u)));function Q(v,E,A,g){return a===v&&(a=null,g!==void 0&&(p=!0),(v===c||E===c)&&i.onHydrated&&queueMicrotask(()=>i.onHydrated(g,{value:E})),c=zs,O&&v&&f?(O.promises.delete(v),f=!1,Ut(()=>{O.running=!0,T(E,A)},!1)):T(E,A)),E}function T(v,E){Ut(()=>{E===void 0&&C(()=>v),tt(E!==void 0?"errored":p?"ready":"unresolved"),N(E);for(const A of b.keys())A.decrement();b.clear()},!1)}function _(){const v=ke&&un(ke),E=P(),A=S();if(A!==void 0&&!a)throw A;return nt&&!nt.user&&v&&Ma(()=>{k(),a&&(v.resolved&&O&&f?O.promises.add(a):b.has(v)||(v.increment(),b.add(v)))}),E}function y(v=!0){if(v!==!1&&d)return;d=!1;const E=w?w():r;if(f=O&&O.running,E==null||E===!1){Q(a,Nt(P));return}O&&a&&O.promises.delete(a);const A=c!==zs?c:Nt(()=>s(E,{value:P(),refetching:v}));return lf(A)?(a=A,"value"in A?(A.status==="success"?Q(a,A.value,void 0,E):Q(a,void 0,ai(A.value),E),A):(d=!0,queueMicrotask(()=>d=!1),Ut(()=>{tt(p?"refreshing":"pending"),$()},!1),A.then(g=>Q(A,g,void 0,E),g=>Q(A,void 0,ai(g),E)))):(Q(a,A,void 0,E),A)}return Object.defineProperties(_,{state:{get:()=>U()},error:{get:()=>S()},loading:{get(){const v=U();return v==="pending"||v==="refreshing"}},latest:{get(){if(!p)return _();const v=S();if(v&&!a)throw v;return P()}}}),w?Ma(()=>y(!1)):y(!1),[_,{refetch:y,mutate:C}]}function il(n){return Ut(n,!1)}function Nt(n){if(nt===null)return n();const t=nt;nt=null;try{return n()}finally{nt=t}}function Ui(n,t,e){const r=Array.isArray(n);let s,i=e&&e.defer;return a=>{let c;if(r){c=Array(n.length);for(let f=0;f<n.length;f++)c[f]=n[f]()}else c=n();if(i)return i=!1,a;const u=Nt(()=>t(c,s,a));return s=c,u}}function ol(n){$i(()=>Nt(n))}function ss(n){return K===null||(K.cleanups===null?K.cleanups=[n]:K.cleanups.push(n)),n}function oi(){return nt}function Bi(){return K}function al(n,t){const e=K,r=nt;K=n,nt=null;try{return Ut(t,!0)}catch(s){ji(s)}finally{K=e,nt=r}}function uf(n){if(O&&O.running)return n(),O.done;const t=nt,e=K;return Promise.resolve().then(()=>{nt=t,K=e;let r;return ke&&(r=O||(O={sources:new Set,effects:[],promises:new Set,disposed:new Set,queue:new Set,running:!0}),r.done||(r.done=new Promise(s=>r.resolve=s)),r.running=!0),Ut(n,!1),nt=K=null,r?r.done:void 0})}const[Ov,Fa]=xt(!1);function hf(n){Ct.push.apply(Ct,n),n.length=0}function is(n,t){const e=Symbol("context");return{id:e,Provider:gf(e),defaultValue:n}}function un(n){let t;return K&&K.context&&(t=K.context[n.id])!==void 0?t:n.defaultValue}function os(n){const t=ot(n),e=ot(()=>ci(t()));return e.toArray=()=>{const r=e();return Array.isArray(r)?r:r!=null?[r]:[]},e}let ke;function ff(){return ke||(ke=is())}function cl(){const n=O&&O.running;if(this.sources&&(n?this.tState:this.state))if((n?this.tState:this.state)===Qt)hn(this);else{const t=kt;kt=null,Ut(()=>jr(this),!1),kt=t}if(nt){const t=this.observers?this.observers.length:0;nt.sources?(nt.sources.push(this),nt.sourceSlots.push(t)):(nt.sources=[this],nt.sourceSlots=[t]),this.observers?(this.observers.push(nt),this.observerSlots.push(nt.sources.length-1)):(this.observers=[nt],this.observerSlots=[nt.sources.length-1])}return n&&O.sources.has(this)?this.tValue:this.value}function ll(n,t,e){let r=O&&O.running&&O.sources.has(n)?n.tValue:n.value;if(!n.comparator||!n.comparator(r,t)){if(O){const s=O.running;(s||!e&&O.sources.has(n))&&(O.sources.add(n),n.tValue=t),s||(n.value=t)}else n.value=t;n.observers&&n.observers.length&&Ut(()=>{for(let s=0;s<n.observers.length;s+=1){const i=n.observers[s],a=O&&O.running;a&&O.disposed.has(i)||((a?!i.tState:!i.state)&&(i.pure?kt.push(i):Ct.push(i),i.observers&&hl(i)),a?i.tState=Qt:i.state=Qt)}if(kt.length>1e6)throw kt=[],new Error},!1)}return t}function hn(n){if(!n.fn)return;ye(n);const t=rs;$a(n,O&&O.running&&O.sources.has(n)?n.tValue:n.value,t),O&&!O.running&&O.sources.has(n)&&queueMicrotask(()=>{Ut(()=>{O&&(O.running=!0),nt=K=n,$a(n,n.tValue,t),nt=K=null},!1)})}function $a(n,t,e){let r;const s=K,i=nt;nt=K=n;try{r=n.fn(t)}catch(a){return n.pure&&(O&&O.running?(n.tState=Qt,n.tOwned&&n.tOwned.forEach(ye),n.tOwned=void 0):(n.state=Qt,n.owned&&n.owned.forEach(ye),n.owned=null)),n.updatedAt=e+1,ji(a)}finally{nt=i,K=s}(!n.updatedAt||n.updatedAt<=e)&&(n.updatedAt!=null&&"observers"in n?ll(n,r,!0):O&&O.running&&n.pure?(O.sources.add(n),n.tValue=r):n.value=r,n.updatedAt=e)}function as(n,t,e,r=Qt,s){const i={fn:n,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:K,context:K?K.context:null,pure:e};return O&&O.running&&(i.state=0,i.tState=r),K===null||K!==sl&&(O&&O.running&&K.pure?K.tOwned?K.tOwned.push(i):K.tOwned=[i]:K.owned?K.owned.push(i):K.owned=[i]),i}function Br(n){const t=O&&O.running;if((t?n.tState:n.state)===0)return;if((t?n.tState:n.state)===qn)return jr(n);if(n.suspense&&Nt(n.suspense.inFallback))return n.suspense.effects.push(n);const e=[n];for(;(n=n.owner)&&(!n.updatedAt||n.updatedAt<rs);){if(t&&O.disposed.has(n))return;(t?n.tState:n.state)&&e.push(n)}for(let r=e.length-1;r>=0;r--){if(n=e[r],t){let s=n,i=e[r+1];for(;(s=s.owner)&&s!==i;)if(O.disposed.has(s))return}if((t?n.tState:n.state)===Qt)hn(n);else if((t?n.tState:n.state)===qn){const s=kt;kt=null,Ut(()=>jr(n,e[0]),!1),kt=s}}}function Ut(n,t){if(kt)return n();let e=!1;t||(kt=[]),Ct?e=!0:Ct=[],rs++;try{const r=n();return df(e),r}catch(r){e||(Ct=null),kt=null,ji(r)}}function df(n){if(kt&&(ul(kt),kt=null),n)return;let t;if(O){if(!O.promises.size&&!O.queue.size){const r=O.sources,s=O.disposed;Ct.push.apply(Ct,O.effects),t=O.resolve;for(const i of Ct)"tState"in i&&(i.state=i.tState),delete i.tState;O=null,Ut(()=>{for(const i of s)ye(i);for(const i of r){if(i.value=i.tValue,i.owned)for(let a=0,c=i.owned.length;a<c;a++)ye(i.owned[a]);i.tOwned&&(i.owned=i.tOwned),delete i.tValue,delete i.tOwned,i.tState=0}Fa(!1)},!1)}else if(O.running){O.running=!1,O.effects.push.apply(O.effects,Ct),Ct=null,Fa(!0);return}}const e=Ct;Ct=null,e.length&&Ut(()=>rl(e),!1),t&&t()}function ul(n){for(let t=0;t<n.length;t++)Br(n[t])}function mf(n){let t,e=0;for(t=0;t<n.length;t++){const r=n[t];r.user?n[e++]=r:Br(r)}if(H.context){if(H.count){H.effects||(H.effects=[]),H.effects.push(...n.slice(0,e));return}kn()}for(H.effects&&(H.done||!H.count)&&(n=[...H.effects,...n],e+=H.effects.length,delete H.effects),t=0;t<e;t++)Br(n[t])}function jr(n,t){const e=O&&O.running;e?n.tState=0:n.state=0;for(let r=0;r<n.sources.length;r+=1){const s=n.sources[r];if(s.sources){const i=e?s.tState:s.state;i===Qt?s!==t&&(!s.updatedAt||s.updatedAt<rs)&&Br(s):i===qn&&jr(s,t)}}}function hl(n){const t=O&&O.running;for(let e=0;e<n.observers.length;e+=1){const r=n.observers[e];(t?!r.tState:!r.state)&&(t?r.tState=qn:r.state=qn,r.pure?kt.push(r):Ct.push(r),r.observers&&hl(r))}}function ye(n){let t;if(n.sources)for(;n.sources.length;){const e=n.sources.pop(),r=n.sourceSlots.pop(),s=e.observers;if(s&&s.length){const i=s.pop(),a=e.observerSlots.pop();r<s.length&&(i.sourceSlots[a]=r,s[r]=i,e.observerSlots[r]=a)}}if(n.tOwned){for(t=n.tOwned.length-1;t>=0;t--)ye(n.tOwned[t]);delete n.tOwned}if(O&&O.running&&n.pure)fl(n,!0);else if(n.owned){for(t=n.owned.length-1;t>=0;t--)ye(n.owned[t]);n.owned=null}if(n.cleanups){for(t=n.cleanups.length-1;t>=0;t--)n.cleanups[t]();n.cleanups=null}O&&O.running?n.tState=0:n.state=0}function fl(n,t){if(t||(n.tState=0,O.disposed.add(n)),n.owned)for(let e=0;e<n.owned.length;e++)fl(n.owned[e])}function ai(n){return n instanceof Error?n:new Error(typeof n=="string"?n:"Unknown error",{cause:n})}function ji(n,t=K){throw ai(n)}function ci(n){if(typeof n=="function"&&!n.length)return ci(n());if(Array.isArray(n)){const t=[];for(let e=0;e<n.length;e++){const r=ci(n[e]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return n}function gf(n,t){return function(r){let s;return fe(()=>s=Nt(()=>(K.context={...K.context,[n]:r.value},os(()=>r.children))),void 0),s}}const pf=Symbol("fallback");function Ua(n){for(let t=0;t<n.length;t++)n[t]()}function _f(n,t,e={}){let r=[],s=[],i=[],a=0,c=t.length>1?[]:null;return ss(()=>Ua(i)),()=>{let u=n()||[],f=u.length,d,p;return u[ii],Nt(()=>{let b,P,C,S,N,k,$,U,tt;if(f===0)a!==0&&(Ua(i),i=[],r=[],s=[],a=0,c&&(c=[])),e.fallback&&(r=[pf],s[0]=We(Q=>(i[0]=Q,e.fallback())),a=1);else if(a===0){for(s=new Array(f),p=0;p<f;p++)r[p]=u[p],s[p]=We(w);a=f}else{for(C=new Array(f),S=new Array(f),c&&(N=new Array(f)),k=0,$=Math.min(a,f);k<$&&r[k]===u[k];k++);for($=a-1,U=f-1;$>=k&&U>=k&&r[$]===u[U];$--,U--)C[U]=s[$],S[U]=i[$],c&&(N[U]=c[$]);for(b=new Map,P=new Array(U+1),p=U;p>=k;p--)tt=u[p],d=b.get(tt),P[p]=d===void 0?-1:d,b.set(tt,p);for(d=k;d<=$;d++)tt=r[d],p=b.get(tt),p!==void 0&&p!==-1?(C[p]=s[d],S[p]=i[d],c&&(N[p]=c[d]),p=P[p],b.set(tt,p)):i[d]();for(p=k;p<f;p++)p in C?(s[p]=C[p],i[p]=S[p],c&&(c[p]=N[p],c[p](p))):s[p]=We(w);s=s.slice(0,a=f),r=u.slice(0)}return s});function w(b){if(i[p]=b,c){const[P,C]=xt(p);return c[p]=C,t(u[p],P)}return t(u[p])}}}function F(n,t){return Nt(()=>n(t||{}))}function Pr(){return!0}const li={get(n,t,e){return t===Ht?e:n.get(t)},has(n,t){return t===Ht?!0:n.has(t)},set:Pr,deleteProperty:Pr,getOwnPropertyDescriptor(n,t){return{configurable:!0,enumerable:!0,get(){return n.get(t)},set:Pr,deleteProperty:Pr}},ownKeys(n){return n.keys()}};function Ks(n){return(n=typeof n=="function"?n():n)?n:{}}function yf(){for(let n=0,t=this.length;n<t;++n){const e=this[n]();if(e!==void 0)return e}}function qr(...n){let t=!1;for(let a=0;a<n.length;a++){const c=n[a];t=t||!!c&&Ht in c,n[a]=typeof c=="function"?(t=!0,ot(c)):c}if(nl&&t)return new Proxy({get(a){for(let c=n.length-1;c>=0;c--){const u=Ks(n[c])[a];if(u!==void 0)return u}},has(a){for(let c=n.length-1;c>=0;c--)if(a in Ks(n[c]))return!0;return!1},keys(){const a=[];for(let c=0;c<n.length;c++)a.push(...Object.keys(Ks(n[c])));return[...new Set(a)]}},li);const e={},r=Object.create(null);for(let a=n.length-1;a>=0;a--){const c=n[a];if(!c)continue;const u=Object.getOwnPropertyNames(c);for(let f=u.length-1;f>=0;f--){const d=u[f];if(d==="__proto__"||d==="constructor")continue;const p=Object.getOwnPropertyDescriptor(c,d);if(!r[d])r[d]=p.get?{enumerable:!0,configurable:!0,get:yf.bind(e[d]=[p.get.bind(c)])}:p.value!==void 0?p:void 0;else{const w=e[d];w&&(p.get?w.push(p.get.bind(c)):p.value!==void 0&&w.push(()=>p.value))}}}const s={},i=Object.keys(r);for(let a=i.length-1;a>=0;a--){const c=i[a],u=r[c];u&&u.get?Object.defineProperty(s,c,u):s[c]=u?u.value:void 0}return s}function vf(n,...t){if(nl&&Ht in n){const s=new Set(t.length>1?t.flat():t[0]),i=t.map(a=>new Proxy({get(c){return a.includes(c)?n[c]:void 0},has(c){return a.includes(c)&&c in n},keys(){return a.filter(c=>c in n)}},li));return i.push(new Proxy({get(a){return s.has(a)?void 0:n[a]},has(a){return s.has(a)?!1:a in n},keys(){return Object.keys(n).filter(a=>!s.has(a))}},li)),i}const e={},r=t.map(()=>({}));for(const s of Object.getOwnPropertyNames(n)){const i=Object.getOwnPropertyDescriptor(n,s),a=!i.get&&!i.set&&i.enumerable&&i.writable&&i.configurable;let c=!1,u=0;for(const f of t)f.includes(s)&&(c=!0,a?r[u][s]=i.value:Object.defineProperty(r[u],s,i)),++u;c||(a?e[s]=i.value:Object.defineProperty(e,s,i))}return[...r,e]}const dl=n=>`Stale read from <${n}>.`;function ui(n){const t="fallback"in n&&{fallback:()=>n.fallback};return ot(_f(()=>n.each,n.children,t||void 0))}function zn(n){const t=n.keyed,e=ot(()=>n.when,void 0,{equals:(r,s)=>t?r===s:!r==!s});return ot(()=>{const r=e();if(r){const s=n.children;return typeof s=="function"&&s.length>0?Nt(()=>s(t?r:()=>{if(!Nt(e))throw dl("Show");return n.when})):s}return n.fallback},void 0,void 0)}function ml(n){let t=!1;const e=(i,a)=>(t?i[1]===a[1]:!i[1]==!a[1])&&i[2]===a[2],r=os(()=>n.children),s=ot(()=>{let i=r();Array.isArray(i)||(i=[i]);for(let a=0;a<i.length;a++){const c=i[a].when;if(c)return t=!!i[a].keyed,[a,c,i[a]]}return[-1]},void 0,{equals:e});return ot(()=>{const[i,a,c]=s();if(i<0)return n.fallback;const u=c.children;return typeof u=="function"&&u.length>0?Nt(()=>u(t?a:()=>{if(Nt(s)[0]!==i)throw dl("Match");return c.when})):u},void 0,void 0)}function zr(n){return n}const Ef=is();function wf(n){let t=0,e,r,s,i,a;const[c,u]=xt(!1),f=ff(),d={increment:()=>{++t===1&&u(!0)},decrement:()=>{--t===0&&u(!1)},inFallback:c,effects:[],resolved:!1},p=Bi();if(H.context&&H.load){const P=H.getContextId();let C=H.load(P);if(C&&(typeof C!="object"||C.status!=="success"?s=C:H.gather(P)),s&&s!=="$$f"){const[S,N]=xt(void 0,{equals:!1});i=S,s.then(()=>{if(H.done)return N();H.gather(P),kn(r),N(),kn()},k=>{a=k,N()})}}const w=un(Ef);w&&(e=w.register(d.inFallback));let b;return ss(()=>b&&b()),F(f.Provider,{value:d,get children(){return ot(()=>{if(a)throw a;if(r=H.context,i)return i(),i=void 0;r&&s==="$$f"&&kn();const P=ot(()=>n.children);return ot(C=>{const S=d.inFallback(),{showContent:N=!0,showFallback:k=!0}=e?e():{};if((!S||s&&s!=="$$f")&&N)return d.resolved=!0,b&&b(),b=r=s=void 0,hf(d.effects),P();if(k)return b?C:We($=>(b=$,r&&(kn({id:r.id+"F",count:0}),r=void 0),n.fallback),p)})})}})}const Af=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Tf=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Af]),If=new Set(["innerHTML","textContent","innerText","children"]),bf=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Rf=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function Sf(n,t){const e=Rf[n];return typeof e=="object"?e[t]?e.$:void 0:e}const Pf=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]);function Cf(n,t,e){let r=e.length,s=t.length,i=r,a=0,c=0,u=t[s-1].nextSibling,f=null;for(;a<s||c<i;){if(t[a]===e[c]){a++,c++;continue}for(;t[s-1]===e[i-1];)s--,i--;if(s===a){const d=i<r?c?e[c-1].nextSibling:e[i-c]:u;for(;c<i;)n.insertBefore(e[c++],d)}else if(i===c)for(;a<s;)(!f||!f.has(t[a]))&&t[a].remove(),a++;else if(t[a]===e[i-1]&&e[c]===t[s-1]){const d=t[--s].nextSibling;n.insertBefore(e[c++],t[a++].nextSibling),n.insertBefore(e[--i],d),t[s]=e[i]}else{if(!f){f=new Map;let p=c;for(;p<i;)f.set(e[p],p++)}const d=f.get(t[a]);if(d!=null)if(c<d&&d<i){let p=a,w=1,b;for(;++p<s&&p<i&&!((b=f.get(t[p]))==null||b!==d+w);)w++;if(w>d-c){const P=t[a];for(;c<d;)n.insertBefore(e[c++],P)}else n.replaceChild(e[c++],t[a++])}else a++;else t[a++].remove()}}}const Ba="_$DX_DELEGATE";function Vf(n,t,e,r={}){let s;return We(i=>{s=i,t===document?n():G(t,n(),t.firstChild?null:void 0,e)},r.owner),()=>{s(),t.textContent=""}}function lt(n,t,e){let r;const s=()=>{const a=document.createElement("template");return a.innerHTML=n,a.content.firstChild},i=()=>(r||(r=s())).cloneNode(!0);return i.cloneNode=i,i}function gl(n,t=window.document){const e=t[Ba]||(t[Ba]=new Set);for(let r=0,s=n.length;r<s;r++){const i=n[r];e.has(i)||(e.add(i),t.addEventListener(i,$f))}}function hi(n,t,e){rr(n)||(e==null?n.removeAttribute(t):n.setAttribute(t,e))}function Df(n,t,e){rr(n)||(e?n.setAttribute(t,""):n.removeAttribute(t))}function xf(n,t){rr(n)||(t==null?n.removeAttribute("class"):n.className=t)}function kf(n,t,e,r){if(r)Array.isArray(e)?(n[`$$${t}`]=e[0],n[`$$${t}Data`]=e[1]):n[`$$${t}`]=e;else if(Array.isArray(e)){const s=e[0];n.addEventListener(t,e[0]=i=>s.call(n,e[1],i))}else n.addEventListener(t,e,typeof e!="function"&&e)}function Nf(n,t,e={}){const r=Object.keys(t||{}),s=Object.keys(e);let i,a;for(i=0,a=s.length;i<a;i++){const c=s[i];!c||c==="undefined"||t[c]||(ja(n,c,!1),delete e[c])}for(i=0,a=r.length;i<a;i++){const c=r[i],u=!!t[c];!c||c==="undefined"||e[c]===u||!u||(ja(n,c,!0),e[c]=u)}return e}function Of(n,t,e){if(!t)return e?hi(n,"style"):t;const r=n.style;if(typeof t=="string")return r.cssText=t;typeof e=="string"&&(r.cssText=e=void 0),e||(e={}),t||(t={});let s,i;for(i in e)t[i]==null&&r.removeProperty(i),delete e[i];for(i in t)s=t[i],s!==e[i]&&(r.setProperty(i,s),e[i]=s);return e}function pl(n,t={},e,r){const s={};return fe(()=>s.children=Kn(n,t.children,s.children)),fe(()=>typeof t.ref=="function"&&Lf(t.ref,n)),fe(()=>Mf(n,t,e,!0,s,!0)),s}function Lf(n,t,e){return Nt(()=>n(t,e))}function G(n,t,e,r){if(e!==void 0&&!r&&(r=[]),typeof t!="function")return Kn(n,t,r,e);fe(s=>Kn(n,t(),s,e),r)}function Mf(n,t,e,r,s={},i=!1){t||(t={});for(const a in s)if(!(a in t)){if(a==="children")continue;s[a]=qa(n,a,null,s[a],e,i,t)}for(const a in t){if(a==="children")continue;const c=t[a];s[a]=qa(n,a,c,s[a],e,i,t)}}function rr(n){return!!H.context&&!H.done&&(!n||n.isConnected)}function Ff(n){return n.toLowerCase().replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}function ja(n,t,e){const r=t.trim().split(/\s+/);for(let s=0,i=r.length;s<i;s++)n.classList.toggle(r[s],e)}function qa(n,t,e,r,s,i,a){let c,u,f,d,p;if(t==="style")return Of(n,e,r);if(t==="classList")return Nf(n,e,r);if(e===r)return r;if(t==="ref")i||e(n);else if(t.slice(0,3)==="on:"){const w=t.slice(3);r&&n.removeEventListener(w,r,typeof r!="function"&&r),e&&n.addEventListener(w,e,typeof e!="function"&&e)}else if(t.slice(0,10)==="oncapture:"){const w=t.slice(10);r&&n.removeEventListener(w,r,!0),e&&n.addEventListener(w,e,!0)}else if(t.slice(0,2)==="on"){const w=t.slice(2).toLowerCase(),b=Pf.has(w);if(!b&&r){const P=Array.isArray(r)?r[0]:r;n.removeEventListener(w,P)}(b||e)&&(kf(n,w,e,b),b&&gl([w]))}else if(t.slice(0,5)==="attr:")hi(n,t.slice(5),e);else if(t.slice(0,5)==="bool:")Df(n,t.slice(5),e);else if((p=t.slice(0,5)==="prop:")||(f=If.has(t))||(d=Sf(t,n.tagName))||(u=Tf.has(t))||(c=n.nodeName.includes("-")||"is"in a)){if(p)t=t.slice(5),u=!0;else if(rr(n))return e;t==="class"||t==="className"?xf(n,e):c&&!u&&!f?n[Ff(t)]=e:n[d||t]=e}else hi(n,bf[t]||t,e);return e}function $f(n){if(H.registry&&H.events&&H.events.find(([u,f])=>f===n))return;let t=n.target;const e=`$$${n.type}`,r=n.target,s=n.currentTarget,i=u=>Object.defineProperty(n,"target",{configurable:!0,value:u}),a=()=>{const u=t[e];if(u&&!t.disabled){const f=t[`${e}Data`];if(f!==void 0?u.call(t,f,n):u.call(t,n),n.cancelBubble)return}return t.host&&typeof t.host!="string"&&!t.host._$host&&t.contains(n.target)&&i(t.host),!0},c=()=>{for(;a()&&(t=t._$host||t.parentNode||t.host););};if(Object.defineProperty(n,"currentTarget",{configurable:!0,get(){return t||document}}),H.registry&&!H.done&&(H.done=_$HY.done=!0),n.composedPath){const u=n.composedPath();i(u[0]);for(let f=0;f<u.length-2&&(t=u[f],!!a());f++){if(t._$host){t=t._$host,c();break}if(t.parentNode===s)break}}else c();i(r)}function Kn(n,t,e,r,s){const i=rr(n);if(i){!e&&(e=[...n.childNodes]);let u=[];for(let f=0;f<e.length;f++){const d=e[f];d.nodeType===8&&d.data.slice(0,2)==="!$"?d.remove():u.push(d)}e=u}for(;typeof e=="function";)e=e();if(t===e)return e;const a=typeof t,c=r!==void 0;if(n=c&&e[0]&&e[0].parentNode||n,a==="string"||a==="number"){if(i||a==="number"&&(t=t.toString(),t===e))return e;if(c){let u=e[0];u&&u.nodeType===3?u.data!==t&&(u.data=t):u=document.createTextNode(t),e=ze(n,e,r,u)}else e!==""&&typeof e=="string"?e=n.firstChild.data=t:e=n.textContent=t}else if(t==null||a==="boolean"){if(i)return e;e=ze(n,e,r)}else{if(a==="function")return fe(()=>{let u=t();for(;typeof u=="function";)u=u();e=Kn(n,u,e,r)}),()=>e;if(Array.isArray(t)){const u=[],f=e&&Array.isArray(e);if(fi(u,t,e,s))return fe(()=>e=Kn(n,u,e,r,!0)),()=>e;if(i){if(!u.length)return e;if(r===void 0)return e=[...n.childNodes];let d=u[0];if(d.parentNode!==n)return e;const p=[d];for(;(d=d.nextSibling)!==r;)p.push(d);return e=p}if(u.length===0){if(e=ze(n,e,r),c)return e}else f?e.length===0?za(n,u,r):Cf(n,e,u):(e&&ze(n),za(n,u));e=u}else if(t.nodeType){if(i&&t.parentNode)return e=c?[t]:t;if(Array.isArray(e)){if(c)return e=ze(n,e,r,t);ze(n,e,null,t)}else e==null||e===""||!n.firstChild?n.appendChild(t):n.replaceChild(t,n.firstChild);e=t}}return e}function fi(n,t,e,r){let s=!1;for(let i=0,a=t.length;i<a;i++){let c=t[i],u=e&&e[n.length],f;if(!(c==null||c===!0||c===!1))if((f=typeof c)=="object"&&c.nodeType)n.push(c);else if(Array.isArray(c))s=fi(n,c,u)||s;else if(f==="function")if(r){for(;typeof c=="function";)c=c();s=fi(n,Array.isArray(c)?c:[c],Array.isArray(u)?u:[u])||s}else n.push(c),s=!0;else{const d=String(c);u&&u.nodeType===3&&u.data===d?n.push(u):n.push(document.createTextNode(d))}}return s}function za(n,t,e=null){for(let r=0,s=t.length;r<s;r++)n.insertBefore(t[r],e)}function ze(n,t,e,r){if(e===void 0)return n.textContent="";const s=r||document.createTextNode("");if(t.length){let i=!1;for(let a=t.length-1;a>=0;a--){const c=t[a];if(s!==c){const u=c.parentNode===n;!i&&!a?u?n.replaceChild(s,c):n.insertBefore(s,e):u&&c.remove()}else i=!0}}else n.insertBefore(s,e);return[s]}const Uf=!1;function _l(){let n=new Set;function t(s){return n.add(s),()=>n.delete(s)}let e=!1;function r(s,i){if(e)return!(e=!1);const a={to:s,options:i,defaultPrevented:!1,preventDefault:()=>a.defaultPrevented=!0};for(const c of n)c.listener({...a,from:c.location,retry:u=>{u&&(e=!0),c.navigate(s,{...i,resolve:!1})}});return!a.defaultPrevented}return{subscribe:t,confirm:r}}let di;function qi(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),di=window.history.state._depth}qi();function Bf(n){return{...n,_depth:window.history.state&&window.history.state._depth}}function jf(n,t){let e=!1;return()=>{const r=di;qi();const s=r==null?null:di-r;if(e){e=!1;return}s&&t(s)?(e=!0,window.history.go(-s)):n()}}const qf=/^(?:[a-z0-9]+:)?\/\//i,zf=/^\/+|(\/)\/+$/g,yl="http://sr";function Ve(n,t=!1){const e=n.replace(zf,"$1");return e?t||/^[?#]/.test(e)?e:"/"+e:""}function Or(n,t,e){if(qf.test(t))return;const r=Ve(n),s=e&&Ve(e);let i="";return!s||t.startsWith("/")?i=r:s.toLowerCase().indexOf(r.toLowerCase())!==0?i=r+s:i=s,(i||"/")+Ve(t,!i)}function Kf(n,t){if(n==null)throw new Error(t);return n}function Hf(n,t){return Ve(n).replace(/\/*(\*.*)?$/g,"")+Ve(t)}function vl(n){const t={};return n.searchParams.forEach((e,r)=>{t[r]=e}),t}function Qf(n,t,e){const[r,s]=n.split("/*",2),i=r.split("/").filter(Boolean),a=i.length;return c=>{const u=c.split("/").filter(Boolean),f=u.length-a;if(f<0||f>0&&s===void 0&&!t)return null;const d={path:a?"":"/",params:{}},p=w=>e===void 0?void 0:e[w];for(let w=0;w<a;w++){const b=i[w],P=b[0]===":",C=P?u[w]:u[w].toLowerCase(),S=P?b.slice(1):b.toLowerCase();if(P&&Hs(C,p(S)))d.params[S]=C;else if(P||!Hs(C,S))return null;d.path+=`/${C}`}if(s){const w=f?u.slice(-f).join("/"):"";if(Hs(w,p(s)))d.params[s]=w;else return null}return d}}function Hs(n,t){const e=r=>r===n;return t===void 0?!0:typeof t=="string"?e(t):typeof t=="function"?t(n):Array.isArray(t)?t.some(e):t instanceof RegExp?t.test(n):!1}function Gf(n){const[t,e]=n.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((s,i)=>s+(i.startsWith(":")?2:3),r.length-(e===void 0?0:1))}function El(n){const t=new Map,e=Bi();return new Proxy({},{get(r,s){return t.has(s)||al(e,()=>t.set(s,ot(()=>n()[s]))),t.get(s)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(n())}})}function wl(n){let t=/(\/?\:[^\/]+)\?/.exec(n);if(!t)return[n];let e=n.slice(0,t.index),r=n.slice(t.index+t[0].length);const s=[e,e+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)s.push(e+=t[1]),r=r.slice(t[0].length);return wl(r).reduce((i,a)=>[...i,...s.map(c=>c+a)],[])}const Wf=100,Al=is(),zi=is(),cs=()=>Kf(un(Al),"<A> and 'use' router primitives can be only used inside a Route."),Jf=()=>un(zi)||cs().base,Xf=n=>{const t=Jf();return ot(()=>t.resolvePath(n()))},Yf=n=>{const t=cs();return ot(()=>{const e=n();return e!==void 0?t.renderPath(e):e})},Zf=()=>cs().location,td=()=>cs().params;function ed(n,t=""){const{component:e,preload:r,load:s,children:i,info:a}=n,c=!i||Array.isArray(i)&&!i.length,u={key:n,component:e,preload:r||s,info:a};return Tl(n.path).reduce((f,d)=>{for(const p of wl(d)){const w=Hf(t,p);let b=c?w:w.split("/*",1)[0];b=b.split("/").map(P=>P.startsWith(":")||P.startsWith("*")?P:encodeURIComponent(P)).join("/"),f.push({...u,originalPath:d,pattern:b,matcher:Qf(b,!c,n.matchFilters)})}return f},[])}function nd(n,t=0){return{routes:n,score:Gf(n[n.length-1])*1e4-t,matcher(e){const r=[];for(let s=n.length-1;s>=0;s--){const i=n[s],a=i.matcher(e);if(!a)return null;r.unshift({...a,route:i})}return r}}}function Tl(n){return Array.isArray(n)?n:[n]}function Il(n,t="",e=[],r=[]){const s=Tl(n);for(let i=0,a=s.length;i<a;i++){const c=s[i];if(c&&typeof c=="object"){c.hasOwnProperty("path")||(c.path="");const u=ed(c,t);for(const f of u){e.push(f);const d=Array.isArray(c.children)&&c.children.length===0;if(c.children&&!d)Il(c.children,f.pattern,e,r);else{const p=nd([...e],r.length);r.push(p)}e.pop()}}}return e.length?r:r.sort((i,a)=>a.score-i.score)}function Qs(n,t){for(let e=0,r=n.length;e<r;e++){const s=n[e].matcher(t);if(s)return s}return[]}function rd(n,t){const e=new URL(yl),r=ot(u=>{const f=n();try{return new URL(f,e)}catch{return console.error(`Invalid path ${f}`),u}},e,{equals:(u,f)=>u.href===f.href}),s=ot(()=>r().pathname),i=ot(()=>r().search,!0),a=ot(()=>r().hash),c=()=>"";return{get pathname(){return s()},get search(){return i()},get hash(){return a()},get state(){return t()},get key(){return c()},query:El(Ui(i,()=>vl(r())))}}let Pe;function sd(){return Pe}function id(n,t,e,r={}){const{signal:[s,i],utils:a={}}=n,c=a.parsePath||(g=>g),u=a.renderPath||(g=>g),f=a.beforeLeave||_l(),d=Or("",r.base||"");if(d===void 0)throw new Error(`${d} is not a valid base path`);d&&!s().value&&i({value:d,replace:!0,scroll:!1});const[p,w]=xt(!1);let b;const P=(g,W)=>{W.value===C()&&W.state===N()||(b===void 0&&w(!0),Pe=g,b=W,uf(()=>{b===W&&(S(b.value),k(b.state),tt[1]([]))}).finally(()=>{b===W&&il(()=>{Pe=void 0,g==="navigate"&&E(b),w(!1),b=void 0})}))},[C,S]=xt(s().value),[N,k]=xt(s().state),$=rd(C,N),U=[],tt=xt([]),Q=ot(()=>typeof r.transformUrl=="function"?Qs(t(),r.transformUrl($.pathname)):Qs(t(),$.pathname)),T=El(()=>{const g=Q(),W={};for(let vt=0;vt<g.length;vt++)Object.assign(W,g[vt].params);return W}),_={pattern:d,path:()=>d,outlet:()=>null,resolvePath(g){return Or(d,g)}};return fe(Ui(s,g=>P("native",g),{defer:!0})),{base:_,location:$,params:T,isRouting:p,renderPath:u,parsePath:c,navigatorFactory:v,matches:Q,beforeLeave:f,preloadRoute:A,singleFlight:r.singleFlight===void 0?!0:r.singleFlight,submissions:tt};function y(g,W,vt){Nt(()=>{if(typeof W=="number"){W&&(a.go?a.go(W):console.warn("Router integration does not support relative routing"));return}const $e=!W||W[0]==="?",{replace:te,resolve:jt,scroll:Ae,state:oe}={replace:!1,resolve:!$e,scroll:!0,...vt};let Lo;const Ft=jt?g.resolvePath(W):Or($e&&$.pathname||"",W);if(Ft===void 0)throw new Error(`Path '${W}' is not a routable path`);if(U.length>=Wf)throw new Error("Too many redirects");const pt=C();(Ft!==pt||oe!==N())&&(Uf||f.confirm(Ft,vt)&&(U.push({value:pt,replace:te,scroll:Ae,state:N()}),P("navigate",{value:Ft,state:oe})))})}function v(g){return g=g||un(zi)||_,(W,vt)=>y(g,W,vt)}function E(g){const W=U[0];W&&(i({...g,replace:W.replace,scroll:W.scroll}),U.length=0)}function A(g,W={}){const vt=Qs(t(),g.pathname),$e=Pe;Pe="preload";for(let te in vt){const{route:jt,params:Ae}=vt[te];jt.component&&jt.component.preload&&jt.component.preload();const{preload:oe}=jt;W.preloadData&&oe&&al(e(),()=>oe({params:Ae,location:{pathname:g.pathname,search:g.search,hash:g.hash,query:vl(g),state:null,key:""},intent:"preload"}))}Pe=$e}}function od(n,t,e,r){const{base:s,location:i,params:a}=n,{pattern:c,component:u,preload:f}=r().route,d=ot(()=>r().path);u&&u.preload&&u.preload();const p=f?f({params:a,location:i,intent:Pe||"initial"}):void 0;return{parent:t,pattern:c,path:d,outlet:()=>u?F(u,{params:a,location:i,data:p,get children(){return e()}}):e(),resolvePath(b){return Or(s.path(),b,d())}}}const ad=n=>t=>{const{base:e}=t,r=os(()=>t.children),s=ot(()=>Il(r(),t.base||""));let i;const a=id(n,s,()=>i,{base:e,singleFlight:t.singleFlight,transformUrl:t.transformUrl});return n.create&&n.create(a),F(Al.Provider,{value:a,get children(){return F(cd,{routerState:a,get root(){return t.root},get preload(){return t.rootPreload||t.rootLoad},get children(){return[ot(()=>(i=Bi())&&null),F(ld,{routerState:a,get branches(){return s()}})]}})}})};function cd(n){const t=n.routerState.location,e=n.routerState.params,r=ot(()=>n.preload&&Nt(()=>{n.preload({params:e,location:t,intent:sd()||"initial"})}));return F(zn,{get when(){return n.root},keyed:!0,get fallback(){return n.children},children:s=>F(s,{params:e,location:t,get data(){return r()},get children(){return n.children}})})}function ld(n){const t=[];let e;const r=ot(Ui(n.routerState.matches,(s,i,a)=>{let c=i&&s.length===i.length;const u=[];for(let f=0,d=s.length;f<d;f++){const p=i&&i[f],w=s[f];a&&p&&w.route.key===p.route.key?u[f]=a[f]:(c=!1,t[f]&&t[f](),We(b=>{t[f]=b,u[f]=od(n.routerState,u[f-1]||n.routerState.base,Ka(()=>r()[f+1]),()=>n.routerState.matches()[f])}))}return t.splice(s.length).forEach(f=>f()),a&&c?a:(e=u[0],u)}));return Ka(()=>r()&&e)()}const Ka=n=>()=>F(zn,{get when(){return n()},keyed:!0,children:t=>F(zi.Provider,{value:t,get children(){return t.outlet()}})}),Ke=n=>{const t=os(()=>n.children);return qr(n,{get children(){return t()}})};function ud([n,t],e,r){return[n,r?s=>t(r(s)):t]}function hd(n){let t=!1;const e=s=>typeof s=="string"?{value:s}:s,r=ud(xt(e(n.get()),{equals:(s,i)=>s.value===i.value&&s.state===i.state}),void 0,s=>(!t&&n.set(s),H.registry&&!H.done&&(H.done=!0),s));return n.init&&ss(n.init((s=n.get())=>{t=!0,r[1](e(s)),t=!1})),ad({signal:r,create:n.create,utils:n.utils})}function fd(n,t,e){return n.addEventListener(t,e),()=>n.removeEventListener(t,e)}function dd(n,t){const e=n&&document.getElementById(n);e?e.scrollIntoView():t&&window.scrollTo(0,0)}const md=new Map;function gd(n=!0,t=!1,e="/_server",r){return s=>{const i=s.base.path(),a=s.navigatorFactory(s.base);let c={};function u(C){return C.namespaceURI==="http://www.w3.org/2000/svg"}function f(C){if(C.defaultPrevented||C.button!==0||C.metaKey||C.altKey||C.ctrlKey||C.shiftKey)return;const S=C.composedPath().find(Q=>Q instanceof Node&&Q.nodeName.toUpperCase()==="A");if(!S||t&&!S.hasAttribute("link"))return;const N=u(S),k=N?S.href.baseVal:S.href;if((N?S.target.baseVal:S.target)||!k&&!S.hasAttribute("state"))return;const U=(S.getAttribute("rel")||"").split(/\s+/);if(S.hasAttribute("download")||U&&U.includes("external"))return;const tt=N?new URL(k,document.baseURI):new URL(k);if(!(tt.origin!==window.location.origin||i&&tt.pathname&&!tt.pathname.toLowerCase().startsWith(i.toLowerCase())))return[S,tt]}function d(C){const S=f(C);if(!S)return;const[N,k]=S,$=s.parsePath(k.pathname+k.search+k.hash),U=N.getAttribute("state");C.preventDefault(),a($,{resolve:!1,replace:N.hasAttribute("replace"),scroll:!N.hasAttribute("noscroll"),state:U?JSON.parse(U):void 0})}function p(C){const S=f(C);if(!S)return;const[N,k]=S;typeof r=="function"&&(k.pathname=r(k.pathname)),c[k.pathname]||s.preloadRoute(k,{preloadData:N.getAttribute("preload")!=="false"})}function w(C){const S=f(C);if(!S)return;const[N,k]=S;typeof r=="function"&&(k.pathname=r(k.pathname)),!c[k.pathname]&&(c[k.pathname]=setTimeout(()=>{s.preloadRoute(k,{preloadData:N.getAttribute("preload")!=="false"}),delete c[k.pathname]},200))}function b(C){const S=f(C);if(!S)return;const[,N]=S;typeof r=="function"&&(N.pathname=r(N.pathname)),c[N.pathname]&&(clearTimeout(c[N.pathname]),delete c[N.pathname])}function P(C){if(C.defaultPrevented)return;let S=C.submitter&&C.submitter.hasAttribute("formaction")?C.submitter.getAttribute("formaction"):C.target.getAttribute("action");if(!S)return;if(!S.startsWith("https://action/")){const k=new URL(S,yl);if(S=s.parsePath(k.pathname+k.search),!S.startsWith(e))return}if(C.target.method.toUpperCase()!=="POST")throw new Error("Only POST forms are supported for Actions");const N=md.get(S);if(N){C.preventDefault();const k=new FormData(C.target,C.submitter);N.call({r:s,f:C.target},C.target.enctype==="multipart/form-data"?k:new URLSearchParams(k))}}gl(["click","submit"]),document.addEventListener("click",d),n&&(document.addEventListener("mouseover",w),document.addEventListener("mouseout",b),document.addEventListener("focusin",p),document.addEventListener("touchstart",p)),document.addEventListener("submit",P),ss(()=>{document.removeEventListener("click",d),n&&(document.removeEventListener("mouseover",w),document.removeEventListener("mouseout",b),document.removeEventListener("focusin",p),document.removeEventListener("touchstart",p)),document.removeEventListener("submit",P)})}}function pd(n){const t=()=>{const r=window.location.pathname.replace(/^\/+/,"/")+window.location.search,s=window.history.state&&window.history.state._depth&&Object.keys(window.history.state).length===1?void 0:window.history.state;return{value:r+window.location.hash,state:s}},e=_l();return hd({get:t,set({value:r,replace:s,scroll:i,state:a}){s?window.history.replaceState(Bf(a),"",r):window.history.pushState(a,"",r),dd(decodeURIComponent(window.location.hash.slice(1)),i),qi()},init:r=>fd(window,"popstate",jf(r,s=>{if(s&&s<0)return!e.confirm(s);{const i=t();return!e.confirm(i.value,{state:i.state})}})),create:gd(n.preload,n.explicitLinks,n.actionBase,n.transformUrl),utils:{go:r=>window.history.go(r),beforeLeave:e}})(n)}var _d=lt("<a>");function Ki(n){n=qr({inactiveClass:"inactive",activeClass:"active"},n);const[,t]=vf(n,["href","state","class","activeClass","inactiveClass","end"]),e=Xf(()=>n.href),r=Yf(e),s=Zf(),i=ot(()=>{const a=e();if(a===void 0)return[!1,!1];const c=Ve(a.split(/[?#]/,1)[0]).toLowerCase(),u=Ve(s.pathname).toLowerCase();return[n.end?c===u:u.startsWith(c+"/")||u===c,c===u]});return(()=>{var a=_d();return pl(a,qr(t,{get href(){return r()||n.href},get state(){return JSON.stringify(n.state)},get classList(){return{...n.class&&{[n.class]:!0},[n.inactiveClass]:!i()[0],[n.activeClass]:i()[0],...t.classList}},link:"",get"aria-current"(){return i()[1]?"page":void 0}}),!1),a})()}const mi=Symbol("store-raw"),Je=Symbol("store-node"),re=Symbol("store-has"),bl=Symbol("store-self");function Rl(n){let t=n[Ht];if(!t&&(Object.defineProperty(n,Ht,{value:t=new Proxy(n,Ed)}),!Array.isArray(n))){const e=Object.keys(n),r=Object.getOwnPropertyDescriptors(n);for(let s=0,i=e.length;s<i;s++){const a=e[s];r[a].get&&Object.defineProperty(n,a,{enumerable:r[a].enumerable,get:r[a].get.bind(t)})}}return t}function Kr(n){let t;return n!=null&&typeof n=="object"&&(n[Ht]||!(t=Object.getPrototypeOf(n))||t===Object.prototype||Array.isArray(n))}function Hn(n,t=new Set){let e,r,s,i;if(e=n!=null&&n[mi])return e;if(!Kr(n)||t.has(n))return n;if(Array.isArray(n)){Object.isFrozen(n)?n=n.slice(0):t.add(n);for(let a=0,c=n.length;a<c;a++)s=n[a],(r=Hn(s,t))!==s&&(n[a]=r)}else{Object.isFrozen(n)?n=Object.assign({},n):t.add(n);const a=Object.keys(n),c=Object.getOwnPropertyDescriptors(n);for(let u=0,f=a.length;u<f;u++)i=a[u],!c[i].get&&(s=n[i],(r=Hn(s,t))!==s&&(n[i]=r))}return n}function Hr(n,t){let e=n[t];return e||Object.defineProperty(n,t,{value:e=Object.create(null)}),e}function Qn(n,t,e){if(n[t])return n[t];const[r,s]=xt(e,{equals:!1,internal:!0});return r.$=s,n[t]=r}function yd(n,t){const e=Reflect.getOwnPropertyDescriptor(n,t);return!e||e.get||!e.configurable||t===Ht||t===Je||(delete e.value,delete e.writable,e.get=()=>n[Ht][t]),e}function Sl(n){oi()&&Qn(Hr(n,Je),bl)()}function vd(n){return Sl(n),Reflect.ownKeys(n)}const Ed={get(n,t,e){if(t===mi)return n;if(t===Ht)return e;if(t===ii)return Sl(n),e;const r=Hr(n,Je),s=r[t];let i=s?s():n[t];if(t===Je||t===re||t==="__proto__")return i;if(!s){const a=Object.getOwnPropertyDescriptor(n,t);oi()&&(typeof i!="function"||n.hasOwnProperty(t))&&!(a&&a.get)&&(i=Qn(r,t,i)())}return Kr(i)?Rl(i):i},has(n,t){return t===mi||t===Ht||t===ii||t===Je||t===re||t==="__proto__"?!0:(oi()&&Qn(Hr(n,re),t)(),t in n)},set(){return!0},deleteProperty(){return!0},ownKeys:vd,getOwnPropertyDescriptor:yd};function Qr(n,t,e,r=!1){if(!r&&n[t]===e)return;const s=n[t],i=n.length;e===void 0?(delete n[t],n[re]&&n[re][t]&&s!==void 0&&n[re][t].$()):(n[t]=e,n[re]&&n[re][t]&&s===void 0&&n[re][t].$());let a=Hr(n,Je),c;if((c=Qn(a,t,s))&&c.$(()=>e),Array.isArray(n)&&n.length!==i){for(let u=n.length;u<i;u++)(c=a[u])&&c.$();(c=Qn(a,"length",i))&&c.$(n.length)}(c=a[bl])&&c.$()}function Pl(n,t){const e=Object.keys(t);for(let r=0;r<e.length;r+=1){const s=e[r];Qr(n,s,t[s])}}function wd(n,t){if(typeof t=="function"&&(t=t(n)),t=Hn(t),Array.isArray(t)){if(n===t)return;let e=0,r=t.length;for(;e<r;e++){const s=t[e];n[e]!==s&&Qr(n,e,s)}Qr(n,"length",r)}else Pl(n,t)}function Nn(n,t,e=[]){let r,s=n;if(t.length>1){r=t.shift();const a=typeof r,c=Array.isArray(n);if(Array.isArray(r)){for(let u=0;u<r.length;u++)Nn(n,[r[u]].concat(t),e);return}else if(c&&a==="function"){for(let u=0;u<n.length;u++)r(n[u],u)&&Nn(n,[u].concat(t),e);return}else if(c&&a==="object"){const{from:u=0,to:f=n.length-1,by:d=1}=r;for(let p=u;p<=f;p+=d)Nn(n,[p].concat(t),e);return}else if(t.length>1){Nn(n[r],t,[r].concat(e));return}s=n[r],e=[r].concat(e)}let i=t[0];typeof i=="function"&&(i=i(s,e),i===s)||r===void 0&&i==null||(i=Hn(i),r===void 0||Kr(s)&&Kr(i)&&!Array.isArray(i)?Pl(s,i):Qr(n,r,i))}function Ha(...[n,t]){const e=Hn(n||{}),r=Array.isArray(e),s=Rl(e);function i(...a){il(()=>{r&&a.length===1?wd(e,a[0]):Nn(e,a)})}return[s,i]}var Qa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cl=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ad=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[e++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[e++],a=n[e++],c=n[e++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(u>>10)),t[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return t.join("")},Vl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let w=(c&15)<<2|f>>6,b=f&63;u||(b=64,a||(w=64)),r.push(e[d],e[p],e[w],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Cl(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ad(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=e[n.charAt(s++)],c=s<n.length?e[n.charAt(s)]:0;++s;const f=s<n.length?e[n.charAt(s)]:64;++s;const p=s<n.length?e[n.charAt(s)]:64;if(++s,i==null||c==null||f==null||p==null)throw new Td;const w=i<<2|c>>4;if(r.push(w),f!==64){const b=c<<4&240|f>>2;if(r.push(b),p!==64){const P=f<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Td extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Id=function(n){const t=Cl(n);return Vl.encodeByteArray(t,!0)},Gr=function(n){return Id(n).replace(/\./g,"")},bd=function(n){try{return Vl.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=()=>Rd().__FIREBASE_DEFAULTS__,Pd=()=>{if(typeof process>"u"||typeof Qa>"u")return;const n=Qa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&bd(n[1]);return t&&JSON.parse(t)},Hi=()=>{try{return Sd()||Pd()||Cd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Vd=n=>{var t,e;return(e=(t=Hi())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},Dl=n=>{const t=Vd(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},xl=()=>{var n;return(n=Hi())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gr(JSON.stringify(e)),Gr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kd(){var n;const t=(n=Hi())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nd(){return!kd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Od(){try{return typeof indexedDB=="object"}catch{return!1}}function Ld(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(e){t(e)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="FirebaseError";class Me extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Md,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Nl.prototype.create)}}class Nl{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,i=this.errors[t],a=i?Fd(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new Me(s,c,r)}}function Fd(n,t){return n.replace($d,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const $d=/\{\$([^}]+)}/g;function gi(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const i=n[s],a=t[s];if(Ga(i)&&Ga(a)){if(!gi(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function Ga(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(n){return n&&n._delegate?n._delegate:n}class en{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Dd;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t?.identifier),s=(e=t?.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jd(t))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Se){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Se){return this.instances.has(t)}getOptions(t=Se){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&t(a,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Bd(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Se){return this.component?this.component.multipleInstances?t:Se:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Bd(n){return n===Se?void 0:n}function jd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Ud(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Y||(Y={}));const zd={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},Kd=Y.INFO,Hd={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},Qd=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Hd[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ol{constructor(t){this.name=t,this._logLevel=Kd,this._logHandler=Qd,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zd[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const Gd=(n,t)=>t.some(e=>n instanceof e);let Wa,Ja;function Wd(){return Wa||(Wa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Jd(){return Ja||(Ja=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ll=new WeakMap,pi=new WeakMap,Ml=new WeakMap,Gs=new WeakMap,Qi=new WeakMap;function Xd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{e(de(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ll.set(e,n)}).catch(()=>{}),Qi.set(t,n),t}function Yd(n){if(pi.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});pi.set(n,t)}let _i={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return pi.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ml.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return de(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function Zd(n){_i=n(_i)}function tm(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Ws(this),t,...e);return Ml.set(r,t.sort?t.sort():[t]),de(r)}:Jd().includes(n)?function(...t){return n.apply(Ws(this),t),de(Ll.get(this))}:function(...t){return de(n.apply(Ws(this),t))}}function em(n){return typeof n=="function"?tm(n):(n instanceof IDBTransaction&&Yd(n),Gd(n,Wd())?new Proxy(n,_i):n)}function de(n){if(n instanceof IDBRequest)return Xd(n);if(Gs.has(n))return Gs.get(n);const t=em(n);return t!==n&&(Gs.set(n,t),Qi.set(t,n)),t}const Ws=n=>Qi.get(n);function nm(n,t,{blocked:e,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,t),c=de(a);return r&&a.addEventListener("upgradeneeded",u=>{r(de(a.result),u.oldVersion,u.newVersion,de(a.transaction),u)}),e&&a.addEventListener("blocked",u=>e(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const rm=["get","getKey","getAll","getAllKeys","count"],sm=["put","add","delete","clear"],Js=new Map;function Xa(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(Js.get(t))return Js.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=sm.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rm.includes(e)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[e](...c),s&&u.done]))[0]};return Js.set(t,i),i}Zd(n=>({...n,get:(t,e,r)=>Xa(t,e)||n.get(t,e,r),has:(t,e)=>!!Xa(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(om(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function om(n){const t=n.getComponent();return t?.type==="VERSION"}const yi="@firebase/app",Ya="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=new Ol("@firebase/app"),am="@firebase/app-compat",cm="@firebase/analytics-compat",lm="@firebase/analytics",um="@firebase/app-check-compat",hm="@firebase/app-check",fm="@firebase/auth",dm="@firebase/auth-compat",mm="@firebase/database",gm="@firebase/data-connect",pm="@firebase/database-compat",_m="@firebase/functions",ym="@firebase/functions-compat",vm="@firebase/installations",Em="@firebase/installations-compat",wm="@firebase/messaging",Am="@firebase/messaging-compat",Tm="@firebase/performance",Im="@firebase/performance-compat",bm="@firebase/remote-config",Rm="@firebase/remote-config-compat",Sm="@firebase/storage",Pm="@firebase/storage-compat",Cm="@firebase/firestore",Vm="@firebase/vertexai-preview",Dm="@firebase/firestore-compat",xm="firebase",km="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]",Nm={[yi]:"fire-core",[am]:"fire-core-compat",[lm]:"fire-analytics",[cm]:"fire-analytics-compat",[hm]:"fire-app-check",[um]:"fire-app-check-compat",[fm]:"fire-auth",[dm]:"fire-auth-compat",[mm]:"fire-rtdb",[gm]:"fire-data-connect",[pm]:"fire-rtdb-compat",[_m]:"fire-fn",[ym]:"fire-fn-compat",[vm]:"fire-iid",[Em]:"fire-iid-compat",[wm]:"fire-fcm",[Am]:"fire-fcm-compat",[Tm]:"fire-perf",[Im]:"fire-perf-compat",[bm]:"fire-rc",[Rm]:"fire-rc-compat",[Sm]:"fire-gcs",[Pm]:"fire-gcs-compat",[Cm]:"fire-fst",[Dm]:"fire-fst-compat",[Vm]:"fire-vertex","fire-js":"fire-js",[xm]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=new Map,Om=new Map,Ei=new Map;function Za(n,t){try{n.container.addComponent(t)}catch(e){se.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Gn(n){const t=n.name;if(Ei.has(t))return se.debug(`There were multiple attempts to register component ${t}.`),!1;Ei.set(t,n);for(const e of Wr.values())Za(e,n);for(const e of Om.values())Za(e,n);return!0}function Fl(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},me=new Nl("app","Firebase",Lm);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=km;function Gi(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:vi,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw me.create("bad-app-name",{appName:String(s)});if(e||(e=xl()),!e)throw me.create("no-options");const i=Wr.get(s);if(i){if(gi(e,i.options)&&gi(r,i.config))return i;throw me.create("duplicate-app",{appName:s})}const a=new qd(s);for(const u of Ei.values())a.addComponent(u);const c=new Mm(e,r,a);return Wr.set(s,c),c}function Ul(n=vi){const t=Wr.get(n);if(!t&&n===vi&&xl())return Gi();if(!t)throw me.create("no-app",{appName:n});return t}function ge(n,t,e){var r;let s=(r=Nm[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const i=s.match(/\s|\//),a=t.match(/\s|\//);if(i||a){const c=[`Unable to register library "${s}" with version "${t}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),se.warn(c.join(" "));return}Gn(new en(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm="firebase-heartbeat-database",$m=1,Wn="firebase-heartbeat-store";let Xs=null;function Bl(){return Xs||(Xs=nm(Fm,$m,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Wn)}catch(e){console.warn(e)}}}}).catch(n=>{throw me.create("idb-open",{originalErrorMessage:n.message})})),Xs}async function Um(n){try{const e=(await Bl()).transaction(Wn),r=await e.objectStore(Wn).get(jl(n));return await e.done,r}catch(t){if(t instanceof Me)se.warn(t.message);else{const e=me.create("idb-get",{originalErrorMessage:t?.message});se.warn(e.message)}}}async function tc(n,t){try{const r=(await Bl()).transaction(Wn,"readwrite");await r.objectStore(Wn).put(t,jl(n)),await r.done}catch(e){if(e instanceof Me)se.warn(e.message);else{const r=me.create("idb-set",{originalErrorMessage:e?.message});se.warn(r.message)}}}function jl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm=1024,jm=30*24*60*60*1e3;class qm{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Km(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ec();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=jm}),this._storage.overwrite(this._heartbeatsCache))}catch(r){se.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ec(),{heartbeatsToSend:r,unsentEntries:s}=zm(this._heartbeatsCache.heartbeats),i=Gr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return se.warn(e),""}}}function ec(){return new Date().toISOString().substring(0,10)}function zm(n,t=Bm){const e=[];let r=n.slice();for(const s of n){const i=e.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),nc(e)>t){i.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),nc(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Km{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Od()?Ld().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Um(this.app);return e?.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return tc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return tc(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function nc(n){return Gr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(n){Gn(new en("platform-logger",t=>new im(t),"PRIVATE")),Gn(new en("heartbeat",t=>new qm(t),"PRIVATE")),ge(yi,Ya,n),ge(yi,Ya,"esm2017"),ge("fire-js","")}Hm("");var Qm="firebase",Gm="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ge(Qm,Gm,"app");var rc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var De,ql;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,_){function y(){}y.prototype=_.prototype,T.D=_.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(v,E,A){for(var g=Array(arguments.length-2),W=2;W<arguments.length;W++)g[W-2]=arguments[W];return _.prototype[E].apply(v,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,_,y){y||(y=0);var v=Array(16);if(typeof _=="string")for(var E=0;16>E;++E)v[E]=_.charCodeAt(y++)|_.charCodeAt(y++)<<8|_.charCodeAt(y++)<<16|_.charCodeAt(y++)<<24;else for(E=0;16>E;++E)v[E]=_[y++]|_[y++]<<8|_[y++]<<16|_[y++]<<24;_=T.g[0],y=T.g[1],E=T.g[2];var A=T.g[3],g=_+(A^y&(E^A))+v[0]+3614090360&4294967295;_=y+(g<<7&4294967295|g>>>25),g=A+(E^_&(y^E))+v[1]+3905402710&4294967295,A=_+(g<<12&4294967295|g>>>20),g=E+(y^A&(_^y))+v[2]+606105819&4294967295,E=A+(g<<17&4294967295|g>>>15),g=y+(_^E&(A^_))+v[3]+3250441966&4294967295,y=E+(g<<22&4294967295|g>>>10),g=_+(A^y&(E^A))+v[4]+4118548399&4294967295,_=y+(g<<7&4294967295|g>>>25),g=A+(E^_&(y^E))+v[5]+1200080426&4294967295,A=_+(g<<12&4294967295|g>>>20),g=E+(y^A&(_^y))+v[6]+2821735955&4294967295,E=A+(g<<17&4294967295|g>>>15),g=y+(_^E&(A^_))+v[7]+4249261313&4294967295,y=E+(g<<22&4294967295|g>>>10),g=_+(A^y&(E^A))+v[8]+1770035416&4294967295,_=y+(g<<7&4294967295|g>>>25),g=A+(E^_&(y^E))+v[9]+2336552879&4294967295,A=_+(g<<12&4294967295|g>>>20),g=E+(y^A&(_^y))+v[10]+4294925233&4294967295,E=A+(g<<17&4294967295|g>>>15),g=y+(_^E&(A^_))+v[11]+2304563134&4294967295,y=E+(g<<22&4294967295|g>>>10),g=_+(A^y&(E^A))+v[12]+1804603682&4294967295,_=y+(g<<7&4294967295|g>>>25),g=A+(E^_&(y^E))+v[13]+4254626195&4294967295,A=_+(g<<12&4294967295|g>>>20),g=E+(y^A&(_^y))+v[14]+2792965006&4294967295,E=A+(g<<17&4294967295|g>>>15),g=y+(_^E&(A^_))+v[15]+1236535329&4294967295,y=E+(g<<22&4294967295|g>>>10),g=_+(E^A&(y^E))+v[1]+4129170786&4294967295,_=y+(g<<5&4294967295|g>>>27),g=A+(y^E&(_^y))+v[6]+3225465664&4294967295,A=_+(g<<9&4294967295|g>>>23),g=E+(_^y&(A^_))+v[11]+643717713&4294967295,E=A+(g<<14&4294967295|g>>>18),g=y+(A^_&(E^A))+v[0]+3921069994&4294967295,y=E+(g<<20&4294967295|g>>>12),g=_+(E^A&(y^E))+v[5]+3593408605&4294967295,_=y+(g<<5&4294967295|g>>>27),g=A+(y^E&(_^y))+v[10]+38016083&4294967295,A=_+(g<<9&4294967295|g>>>23),g=E+(_^y&(A^_))+v[15]+3634488961&4294967295,E=A+(g<<14&4294967295|g>>>18),g=y+(A^_&(E^A))+v[4]+3889429448&4294967295,y=E+(g<<20&4294967295|g>>>12),g=_+(E^A&(y^E))+v[9]+568446438&4294967295,_=y+(g<<5&4294967295|g>>>27),g=A+(y^E&(_^y))+v[14]+3275163606&4294967295,A=_+(g<<9&4294967295|g>>>23),g=E+(_^y&(A^_))+v[3]+4107603335&4294967295,E=A+(g<<14&4294967295|g>>>18),g=y+(A^_&(E^A))+v[8]+1163531501&4294967295,y=E+(g<<20&4294967295|g>>>12),g=_+(E^A&(y^E))+v[13]+2850285829&4294967295,_=y+(g<<5&4294967295|g>>>27),g=A+(y^E&(_^y))+v[2]+4243563512&4294967295,A=_+(g<<9&4294967295|g>>>23),g=E+(_^y&(A^_))+v[7]+1735328473&4294967295,E=A+(g<<14&4294967295|g>>>18),g=y+(A^_&(E^A))+v[12]+2368359562&4294967295,y=E+(g<<20&4294967295|g>>>12),g=_+(y^E^A)+v[5]+4294588738&4294967295,_=y+(g<<4&4294967295|g>>>28),g=A+(_^y^E)+v[8]+2272392833&4294967295,A=_+(g<<11&4294967295|g>>>21),g=E+(A^_^y)+v[11]+1839030562&4294967295,E=A+(g<<16&4294967295|g>>>16),g=y+(E^A^_)+v[14]+4259657740&4294967295,y=E+(g<<23&4294967295|g>>>9),g=_+(y^E^A)+v[1]+2763975236&4294967295,_=y+(g<<4&4294967295|g>>>28),g=A+(_^y^E)+v[4]+1272893353&4294967295,A=_+(g<<11&4294967295|g>>>21),g=E+(A^_^y)+v[7]+4139469664&4294967295,E=A+(g<<16&4294967295|g>>>16),g=y+(E^A^_)+v[10]+3200236656&4294967295,y=E+(g<<23&4294967295|g>>>9),g=_+(y^E^A)+v[13]+681279174&4294967295,_=y+(g<<4&4294967295|g>>>28),g=A+(_^y^E)+v[0]+3936430074&4294967295,A=_+(g<<11&4294967295|g>>>21),g=E+(A^_^y)+v[3]+3572445317&4294967295,E=A+(g<<16&4294967295|g>>>16),g=y+(E^A^_)+v[6]+76029189&4294967295,y=E+(g<<23&4294967295|g>>>9),g=_+(y^E^A)+v[9]+3654602809&4294967295,_=y+(g<<4&4294967295|g>>>28),g=A+(_^y^E)+v[12]+3873151461&4294967295,A=_+(g<<11&4294967295|g>>>21),g=E+(A^_^y)+v[15]+530742520&4294967295,E=A+(g<<16&4294967295|g>>>16),g=y+(E^A^_)+v[2]+3299628645&4294967295,y=E+(g<<23&4294967295|g>>>9),g=_+(E^(y|~A))+v[0]+4096336452&4294967295,_=y+(g<<6&4294967295|g>>>26),g=A+(y^(_|~E))+v[7]+1126891415&4294967295,A=_+(g<<10&4294967295|g>>>22),g=E+(_^(A|~y))+v[14]+2878612391&4294967295,E=A+(g<<15&4294967295|g>>>17),g=y+(A^(E|~_))+v[5]+4237533241&4294967295,y=E+(g<<21&4294967295|g>>>11),g=_+(E^(y|~A))+v[12]+1700485571&4294967295,_=y+(g<<6&4294967295|g>>>26),g=A+(y^(_|~E))+v[3]+2399980690&4294967295,A=_+(g<<10&4294967295|g>>>22),g=E+(_^(A|~y))+v[10]+4293915773&4294967295,E=A+(g<<15&4294967295|g>>>17),g=y+(A^(E|~_))+v[1]+2240044497&4294967295,y=E+(g<<21&4294967295|g>>>11),g=_+(E^(y|~A))+v[8]+1873313359&4294967295,_=y+(g<<6&4294967295|g>>>26),g=A+(y^(_|~E))+v[15]+4264355552&4294967295,A=_+(g<<10&4294967295|g>>>22),g=E+(_^(A|~y))+v[6]+2734768916&4294967295,E=A+(g<<15&4294967295|g>>>17),g=y+(A^(E|~_))+v[13]+1309151649&4294967295,y=E+(g<<21&4294967295|g>>>11),g=_+(E^(y|~A))+v[4]+4149444226&4294967295,_=y+(g<<6&4294967295|g>>>26),g=A+(y^(_|~E))+v[11]+3174756917&4294967295,A=_+(g<<10&4294967295|g>>>22),g=E+(_^(A|~y))+v[2]+718787259&4294967295,E=A+(g<<15&4294967295|g>>>17),g=y+(A^(E|~_))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var y=_-this.blockSize,v=this.B,E=this.h,A=0;A<_;){if(E==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<_;)if(v[E++]=T.charCodeAt(A++),E==this.blockSize){s(this,v),E=0;break}}else for(;A<_;)if(v[E++]=T[A++],E==this.blockSize){s(this,v),E=0;break}}this.h=E,this.o+=_},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var y=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=y&255,y/=256;for(this.u(T),T=Array(16),_=y=0;4>_;++_)for(var v=0;32>v;v+=8)T[y++]=this.g[_]>>>v&255;return T};function i(T,_){var y=c;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=_(T)}function a(T,_){this.h=_;for(var y=[],v=!0,E=T.length-1;0<=E;E--){var A=T[E]|0;v&&A==_||(y[E]=A,v=!1)}this.g=y}var c={};function u(T){return-128<=T&&128>T?i(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function f(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return S(f(-T));for(var _=[],y=1,v=0;T>=y;v++)_[v]=T/y|0,y*=4294967296;return new a(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return S(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=f(Math.pow(_,8)),v=p,E=0;E<T.length;E+=8){var A=Math.min(8,T.length-E),g=parseInt(T.substring(E,E+A),_);8>A?(A=f(Math.pow(_,A)),v=v.j(A).add(f(g))):(v=v.j(y),v=v.add(f(g)))}return v}var p=u(0),w=u(1),b=u(16777216);n=a.prototype,n.m=function(){if(C(this))return-S(this).m();for(var T=0,_=1,y=0;y<this.g.length;y++){var v=this.i(y);T+=(0<=v?v:4294967296+v)*_,_*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(C(this))return"-"+S(this).toString(T);for(var _=f(Math.pow(T,6)),y=this,v="";;){var E=U(y,_).g;y=N(y,E.j(_));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=E,P(y))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function C(T){return T.h==-1}n.l=function(T){return T=N(this,T),C(T)?-1:P(T)?0:1};function S(T){for(var _=T.g.length,y=[],v=0;v<_;v++)y[v]=~T.g[v];return new a(y,~T.h).add(w)}n.abs=function(){return C(this)?S(this):this},n.add=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],v=0,E=0;E<=_;E++){var A=v+(this.i(E)&65535)+(T.i(E)&65535),g=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);v=g>>>16,A&=65535,g&=65535,y[E]=g<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function N(T,_){return T.add(S(_))}n.j=function(T){if(P(this)||P(T))return p;if(C(this))return C(T)?S(this).j(S(T)):S(S(this).j(T));if(C(T))return S(this.j(S(T)));if(0>this.l(b)&&0>T.l(b))return f(this.m()*T.m());for(var _=this.g.length+T.g.length,y=[],v=0;v<2*_;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<T.g.length;E++){var A=this.i(v)>>>16,g=this.i(v)&65535,W=T.i(E)>>>16,vt=T.i(E)&65535;y[2*v+2*E]+=g*vt,k(y,2*v+2*E),y[2*v+2*E+1]+=A*vt,k(y,2*v+2*E+1),y[2*v+2*E+1]+=g*W,k(y,2*v+2*E+1),y[2*v+2*E+2]+=A*W,k(y,2*v+2*E+2)}for(v=0;v<_;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=_;v<2*_;v++)y[v]=0;return new a(y,0)};function k(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function $(T,_){this.g=T,this.h=_}function U(T,_){if(P(_))throw Error("division by zero");if(P(T))return new $(p,p);if(C(T))return _=U(S(T),_),new $(S(_.g),S(_.h));if(C(_))return _=U(T,S(_)),new $(S(_.g),_.h);if(30<T.g.length){if(C(T)||C(_))throw Error("slowDivide_ only works with positive integers.");for(var y=w,v=_;0>=v.l(T);)y=tt(y),v=tt(v);var E=Q(y,1),A=Q(v,1);for(v=Q(v,2),y=Q(y,2);!P(v);){var g=A.add(v);0>=g.l(T)&&(E=E.add(y),A=g),v=Q(v,1),y=Q(y,1)}return _=N(T,E.j(_)),new $(E,_)}for(E=p;0<=T.l(_);){for(y=Math.max(1,Math.floor(T.m()/_.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=f(y),g=A.j(_);C(g)||0<g.l(T);)y-=v,A=f(y),g=A.j(_);P(A)&&(A=w),E=E.add(A),T=N(T,g)}return new $(E,T)}n.A=function(T){return U(this,T).h},n.and=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],v=0;v<_;v++)y[v]=this.i(v)&T.i(v);return new a(y,this.h&T.h)},n.or=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],v=0;v<_;v++)y[v]=this.i(v)|T.i(v);return new a(y,this.h|T.h)},n.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),y=[],v=0;v<_;v++)y[v]=this.i(v)^T.i(v);return new a(y,this.h^T.h)};function tt(T){for(var _=T.g.length+1,y=[],v=0;v<_;v++)y[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(y,T.h)}function Q(T,_){var y=_>>5;_%=32;for(var v=T.g.length-y,E=[],A=0;A<v;A++)E[A]=0<_?T.i(A+y)>>>_|T.i(A+y+1)<<32-_:T.i(A+y);return new a(E,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,ql=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,De=a}).apply(typeof rc<"u"?rc:typeof self<"u"?self:typeof window<"u"?window:{});var Cr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var zl,On,Kl,Lr,wi,Hl,Ql,Gl;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,l,h){return o==Array.prototype||o==Object.prototype||(o[l]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Cr=="object"&&Cr];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=e(this);function s(o,l){if(l)t:{var h=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var I=o[m];if(!(I in h))break t;h=h[I]}o=o[o.length-1],m=h[o],l=l(m),l!=m&&l!=null&&t(h,o,{configurable:!0,writable:!0,value:l})}}function i(o,l){o instanceof String&&(o+="");var h=0,m=!1,I={next:function(){if(!m&&h<o.length){var R=h++;return{value:l(R,o[R]),done:!1}}return m=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}s("Array.prototype.values",function(o){return o||function(){return i(this,function(l,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function u(o){var l=typeof o;return l=l!="object"?l:o?Array.isArray(o)?"array":l:"null",l=="array"||l=="object"&&typeof o.length=="number"}function f(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function d(o,l,h){return o.call.apply(o.bind,arguments)}function p(o,l,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,m),o.apply(l,I)}}return function(){return o.apply(l,arguments)}}function w(o,l,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,w.apply(null,arguments)}function b(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function P(o,l){function h(){}h.prototype=l.prototype,o.aa=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,I,R){for(var x=Array(arguments.length-2),it=2;it<arguments.length;it++)x[it-2]=arguments[it];return l.prototype[I].apply(m,x)}}function C(o){const l=o.length;if(0<l){const h=Array(l);for(let m=0;m<l;m++)h[m]=o[m];return h}return[]}function S(o,l){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(u(m)){const I=o.length||0,R=m.length||0;o.length=I+R;for(let x=0;x<R;x++)o[I+x]=m[x]}else o.push(m)}}class N{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return 0<this.h?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function k(o){return/^[\s\xa0]*$/.test(o)}function $(){var o=c.navigator;return o&&(o=o.userAgent)?o:""}function U(o){return U[" "](o),o}U[" "]=function(){};var tt=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Q(o,l,h){for(const m in o)l.call(h,o[m],m,o)}function T(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function _(o){const l={};for(const h in o)l[h]=o[h];return l}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,l){let h,m;for(let I=1;I<arguments.length;I++){m=arguments[I];for(h in m)o[h]=m[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function E(o){var l=1;o=o.split(":");const h=[];for(;0<l&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function A(o){c.setTimeout(()=>{throw o},0)}function g(){var o=Ae;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class W{constructor(){this.h=this.g=null}add(l,h){const m=vt.get();m.set(l,h),this.h?this.h.next=m:this.g=m,this.h=m}}var vt=new N(()=>new $e,o=>o.reset());class $e{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let te,jt=!1,Ae=new W,oe=()=>{const o=c.Promise.resolve(void 0);te=()=>{o.then(Lo)}};var Lo=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){A(h)}var l=vt;l.j(o),100>l.h&&(l.h++,o.next=l.g,l.g=o)}jt=!1};function Ft(){this.s=this.s,this.C=this.C}Ft.prototype.s=!1,Ft.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ft.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var Sh=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};c.addEventListener("test",h,l),c.removeEventListener("test",h,l)}catch{}return o}();function pn(o,l){if(pt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget){if(tt){t:{try{U(l.nodeName);var I=!0;break t}catch{}I=!1}I||(l=null)}}else h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement);this.relatedTarget=l,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ph[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&pn.aa.h.call(this)}}P(pn,pt);var Ph={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var lr="closure_listenable_"+(1e6*Math.random()|0),Ch=0;function Vh(o,l,h,m,I){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!m,this.ha=I,this.key=++Ch,this.da=this.fa=!1}function ur(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function hr(o){this.src=o,this.g={},this.h=0}hr.prototype.add=function(o,l,h,m,I){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var x=As(o,l,m,I);return-1<x?(l=o[x],h||(l.fa=!1)):(l=new Vh(l,this.src,R,!!m,I),l.fa=h,o.push(l)),l};function ws(o,l){var h=l.type;if(h in o.g){var m=o.g[h],I=Array.prototype.indexOf.call(m,l,void 0),R;(R=0<=I)&&Array.prototype.splice.call(m,I,1),R&&(ur(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function As(o,l,h,m){for(var I=0;I<o.length;++I){var R=o[I];if(!R.da&&R.listener==l&&R.capture==!!h&&R.ha==m)return I}return-1}var Ts="closure_lm_"+(1e6*Math.random()|0),Is={};function Mo(o,l,h,m,I){if(Array.isArray(l)){for(var R=0;R<l.length;R++)Mo(o,l[R],h,m,I);return null}return h=Uo(h),o&&o[lr]?o.K(l,h,f(m)?!!m.capture:!!m,I):Dh(o,l,h,!1,m,I)}function Dh(o,l,h,m,I,R){if(!l)throw Error("Invalid event type");var x=f(I)?!!I.capture:!!I,it=Rs(o);if(it||(o[Ts]=it=new hr(o)),h=it.add(l,h,m,x,R),h.proxy)return h;if(m=xh(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)Sh||(I=x),I===void 0&&(I=!1),o.addEventListener(l.toString(),m,I);else if(o.attachEvent)o.attachEvent($o(l.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function xh(){function o(h){return l.call(o.src,o.listener,h)}const l=kh;return o}function Fo(o,l,h,m,I){if(Array.isArray(l))for(var R=0;R<l.length;R++)Fo(o,l[R],h,m,I);else m=f(m)?!!m.capture:!!m,h=Uo(h),o&&o[lr]?(o=o.i,l=String(l).toString(),l in o.g&&(R=o.g[l],h=As(R,h,m,I),-1<h&&(ur(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[l],o.h--)))):o&&(o=Rs(o))&&(l=o.g[l.toString()],o=-1,l&&(o=As(l,h,m,I)),(h=-1<o?l[o]:null)&&bs(h))}function bs(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[lr])ws(l.i,o);else{var h=o.type,m=o.proxy;l.removeEventListener?l.removeEventListener(h,m,o.capture):l.detachEvent?l.detachEvent($o(h),m):l.addListener&&l.removeListener&&l.removeListener(m),(h=Rs(l))?(ws(h,o),h.h==0&&(h.src=null,l[Ts]=null)):ur(o)}}}function $o(o){return o in Is?Is[o]:Is[o]="on"+o}function kh(o,l){if(o.da)o=!0;else{l=new pn(l,this);var h=o.listener,m=o.ha||o.src;o.fa&&bs(o),o=h.call(m,l)}return o}function Rs(o){return o=o[Ts],o instanceof hr?o:null}var Ss="__closure_events_fn_"+(1e9*Math.random()>>>0);function Uo(o){return typeof o=="function"?o:(o[Ss]||(o[Ss]=function(l){return o.handleEvent(l)}),o[Ss])}function It(){Ft.call(this),this.i=new hr(this),this.M=this,this.F=null}P(It,Ft),It.prototype[lr]=!0,It.prototype.removeEventListener=function(o,l,h,m){Fo(this,o,l,h,m)};function Ot(o,l){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=l.type||l,typeof l=="string")l=new pt(l,o);else if(l instanceof pt)l.target=l.target||o;else{var I=l;l=new pt(m,o),v(l,I)}if(I=!0,h)for(var R=h.length-1;0<=R;R--){var x=l.g=h[R];I=fr(x,m,!0,l)&&I}if(x=l.g=o,I=fr(x,m,!0,l)&&I,I=fr(x,m,!1,l)&&I,h)for(R=0;R<h.length;R++)x=l.g=h[R],I=fr(x,m,!1,l)&&I}It.prototype.N=function(){if(It.aa.N.call(this),this.i){var o=this.i,l;for(l in o.g){for(var h=o.g[l],m=0;m<h.length;m++)ur(h[m]);delete o.g[l],o.h--}}this.F=null},It.prototype.K=function(o,l,h,m){return this.i.add(String(o),l,!1,h,m)},It.prototype.L=function(o,l,h,m){return this.i.add(String(o),l,!0,h,m)};function fr(o,l,h,m){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();for(var I=!0,R=0;R<l.length;++R){var x=l[R];if(x&&!x.da&&x.capture==h){var it=x.listener,Et=x.ha||x.src;x.fa&&ws(o.i,x),I=it.call(Et,m)!==!1&&I}}return I&&!m.defaultPrevented}function Bo(o,l,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(l)?-1:c.setTimeout(o,l||0)}function jo(o){o.g=Bo(()=>{o.g=null,o.i&&(o.i=!1,jo(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class Nh extends Ft{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:jo(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _n(o){Ft.call(this),this.h=o,this.g={}}P(_n,Ft);var qo=[];function zo(o){Q(o.g,function(l,h){this.g.hasOwnProperty(h)&&bs(l)},o),o.g={}}_n.prototype.N=function(){_n.aa.N.call(this),zo(this)},_n.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ps=c.JSON.stringify,Oh=c.JSON.parse,Lh=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Cs(){}Cs.prototype.h=null;function Ko(o){return o.h||(o.h=o.i())}function Ho(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Vs(){pt.call(this,"d")}P(Vs,pt);function Ds(){pt.call(this,"c")}P(Ds,pt);var Te={},Qo=null;function dr(){return Qo=Qo||new It}Te.La="serverreachability";function Go(o){pt.call(this,Te.La,o)}P(Go,pt);function vn(o){const l=dr();Ot(l,new Go(l))}Te.STAT_EVENT="statevent";function Wo(o,l){pt.call(this,Te.STAT_EVENT,o),this.stat=l}P(Wo,pt);function Lt(o){const l=dr();Ot(l,new Wo(l,o))}Te.Ma="timingevent";function Jo(o,l){pt.call(this,Te.Ma,o),this.size=l}P(Jo,pt);function En(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},l)}function wn(){this.g=!0}wn.prototype.xa=function(){this.g=!1};function Mh(o,l,h,m,I,R){o.info(function(){if(o.g)if(R)for(var x="",it=R.split("&"),Et=0;Et<it.length;Et++){var et=it[Et].split("=");if(1<et.length){var bt=et[0];et=et[1];var Rt=bt.split("_");x=2<=Rt.length&&Rt[1]=="type"?x+(bt+"="+et+"&"):x+(bt+"=redacted&")}}else x=null;else x=R;return"XMLHTTP REQ ("+m+") [attempt "+I+"]: "+l+`
`+h+`
`+x})}function Fh(o,l,h,m,I,R,x){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+I+"]: "+l+`
`+h+`
`+R+" "+x})}function Ue(o,l,h,m){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+Uh(o,h)+(m?" "+m:"")})}function $h(o,l){o.info(function(){return"TIMEOUT: "+l})}wn.prototype.info=function(){};function Uh(o,l){if(!o.g)return l;if(!l)return null;try{var h=JSON.parse(l);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var I=m[1];if(Array.isArray(I)&&!(1>I.length)){var R=I[0];if(R!="noop"&&R!="stop"&&R!="close")for(var x=1;x<I.length;x++)I[x]=""}}}}return Ps(h)}catch{return l}}var mr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Xo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xs;function gr(){}P(gr,Cs),gr.prototype.g=function(){return new XMLHttpRequest},gr.prototype.i=function(){return{}},xs=new gr;function ae(o,l,h,m){this.j=o,this.i=l,this.l=h,this.R=m||1,this.U=new _n(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yo}function Yo(){this.i=null,this.g="",this.h=!1}var Zo={},ks={};function Ns(o,l,h){o.L=1,o.v=vr(ee(l)),o.m=h,o.P=!0,ta(o,null)}function ta(o,l){o.F=Date.now(),pr(o),o.A=ee(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),ma(h.i,"t",m),o.C=0,h=o.j.J,o.h=new Yo,o.g=xa(o.j,h?l:null,!o.m),0<o.O&&(o.M=new Nh(w(o.Y,o,o.g),o.O)),l=o.U,h=o.g,m=o.ca;var I="readystatechange";Array.isArray(I)||(I&&(qo[0]=I.toString()),I=qo);for(var R=0;R<I.length;R++){var x=Mo(h,I[R],m||l.handleEvent,!1,l.h||l);if(!x)break;l.g[x.key]=x}l=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,l)):(o.u="GET",o.g.ea(o.A,o.u,null,l)),vn(),Mh(o.i,o.u,o.A,o.l,o.R,o.m)}ae.prototype.ca=function(o){o=o.target;const l=this.M;l&&ne(o)==3?l.j():this.Y(o)},ae.prototype.Y=function(o){try{if(o==this.g)t:{const Rt=ne(this.g);var l=this.g.Ba();const qe=this.g.Z();if(!(3>Rt)&&(Rt!=3||this.g&&(this.h.h||this.g.oa()||wa(this.g)))){this.J||Rt!=4||l==7||(l==8||0>=qe?vn(3):vn(2)),Os(this);var h=this.g.Z();this.X=h;e:if(ea(this)){var m=wa(this.g);o="";var I=m.length,R=ne(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ie(this),An(this);var x="";break e}this.h.i=new c.TextDecoder}for(l=0;l<I;l++)this.h.h=!0,o+=this.h.i.decode(m[l],{stream:!(R&&l==I-1)});m.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=h==200,Fh(this.i,this.u,this.A,this.l,this.R,Rt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var it,Et=this.g;if((it=Et.g?Et.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(it)){var et=it;break e}}et=null}if(h=et)Ue(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ls(this,h);else{this.o=!1,this.s=3,Lt(12),Ie(this),An(this);break t}}if(this.P){h=!0;let qt;for(;!this.J&&this.C<x.length;)if(qt=Bh(this,x),qt==ks){Rt==4&&(this.s=4,Lt(14),h=!1),Ue(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Zo){this.s=4,Lt(15),Ue(this.i,this.l,x,"[Invalid Chunk]"),h=!1;break}else Ue(this.i,this.l,qt,null),Ls(this,qt);if(ea(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Rt!=4||x.length!=0||this.h.h||(this.s=1,Lt(16),h=!1),this.o=this.o&&h,!h)Ue(this.i,this.l,x,"[Invalid Chunked Response]"),Ie(this),An(this);else if(0<x.length&&!this.W){this.W=!0;var bt=this.j;bt.g==this&&bt.ba&&!bt.M&&(bt.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),js(bt),bt.M=!0,Lt(11))}}else Ue(this.i,this.l,x,null),Ls(this,x);Rt==4&&Ie(this),this.o&&!this.J&&(Rt==4?Pa(this.j,this):(this.o=!1,pr(this)))}else sf(this.g),h==400&&0<x.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Ie(this),An(this)}}}catch{}finally{}};function ea(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Bh(o,l){var h=o.C,m=l.indexOf(`
`,h);return m==-1?ks:(h=Number(l.substring(h,m)),isNaN(h)?Zo:(m+=1,m+h>l.length?ks:(l=l.slice(m,m+h),o.C=m+h,l)))}ae.prototype.cancel=function(){this.J=!0,Ie(this)};function pr(o){o.S=Date.now()+o.I,na(o,o.I)}function na(o,l){if(o.B!=null)throw Error("WatchDog timer not null");o.B=En(w(o.ba,o),l)}function Os(o){o.B&&(c.clearTimeout(o.B),o.B=null)}ae.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?($h(this.i,this.A),this.L!=2&&(vn(),Lt(17)),Ie(this),this.s=2,An(this)):na(this,this.S-o)};function An(o){o.j.G==0||o.J||Pa(o.j,o)}function Ie(o){Os(o);var l=o.M;l&&typeof l.ma=="function"&&l.ma(),o.M=null,zo(o.U),o.g&&(l=o.g,o.g=null,l.abort(),l.ma())}function Ls(o,l){try{var h=o.j;if(h.G!=0&&(h.g==o||Ms(h.h,o))){if(!o.K&&Ms(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(l)}catch{m=null}if(Array.isArray(m)&&m.length==3){var I=m;if(I[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)br(h),Tr(h);else break t;Bs(h),Lt(18)}}else h.za=I[1],0<h.za-h.T&&37500>I[2]&&h.F&&h.v==0&&!h.C&&(h.C=En(w(h.Za,h),6e3));if(1>=ia(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Re(h,11)}else if((o.K||h.g==o)&&br(h),!k(l))for(I=h.Da.g.parse(l),l=0;l<I.length;l++){let et=I[l];if(h.T=et[0],et=et[1],h.G==2)if(et[0]=="c"){h.K=et[1],h.ia=et[2];const bt=et[3];bt!=null&&(h.la=bt,h.j.info("VER="+h.la));const Rt=et[4];Rt!=null&&(h.Aa=Rt,h.j.info("SVER="+h.Aa));const qe=et[5];qe!=null&&typeof qe=="number"&&0<qe&&(m=1.5*qe,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const qt=o.g;if(qt){const Sr=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Sr){var R=m.h;R.g||Sr.indexOf("spdy")==-1&&Sr.indexOf("quic")==-1&&Sr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Fs(R,R.h),R.h=null))}if(m.D){const qs=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(m.ya=qs,at(m.I,m.D,qs))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var x=o;if(m.qa=Da(m,m.J?m.ia:null,m.W),x.K){oa(m.h,x);var it=x,Et=m.L;Et&&(it.I=Et),it.B&&(Os(it),pr(it)),m.g=x}else Ra(m);0<h.i.length&&Ir(h)}else et[0]!="stop"&&et[0]!="close"||Re(h,7);else h.G==3&&(et[0]=="stop"||et[0]=="close"?et[0]=="stop"?Re(h,7):Us(h):et[0]!="noop"&&h.l&&h.l.ta(et),h.v=0)}}vn(4)}catch{}}var jh=class{constructor(o,l){this.g=o,this.map=l}};function ra(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function sa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function ia(o){return o.h?1:o.g?o.g.size:0}function Ms(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Fs(o,l){o.g?o.g.add(l):o.h=l}function oa(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}ra.prototype.cancel=function(){if(this.i=aa(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function aa(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.D);return l}return C(o.i)}function qh(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var l=[],h=o.length,m=0;m<h;m++)l.push(o[m]);return l}l=[],h=0;for(m in o)l[h++]=o[m];return l}function zh(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var l=[];o=o.length;for(var h=0;h<o;h++)l.push(h);return l}l=[],h=0;for(const m in o)l[h++]=m;return l}}}function ca(o,l){if(o.forEach&&typeof o.forEach=="function")o.forEach(l,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,l,void 0);else for(var h=zh(o),m=qh(o),I=m.length,R=0;R<I;R++)l.call(void 0,m[R],h&&h[R],o)}var la=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Kh(o,l){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),I=null;if(0<=m){var R=o[h].substring(0,m);I=o[h].substring(m+1)}else R=o[h];l(R,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function be(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof be){this.h=o.h,_r(this,o.j),this.o=o.o,this.g=o.g,yr(this,o.s),this.l=o.l;var l=o.i,h=new bn;h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),ua(this,h),this.m=o.m}else o&&(l=String(o).match(la))?(this.h=!1,_r(this,l[1]||"",!0),this.o=Tn(l[2]||""),this.g=Tn(l[3]||"",!0),yr(this,l[4]),this.l=Tn(l[5]||"",!0),ua(this,l[6]||"",!0),this.m=Tn(l[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}be.prototype.toString=function(){var o=[],l=this.j;l&&o.push(In(l,ha,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(In(l,ha,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(In(h,h.charAt(0)=="/"?Gh:Qh,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",In(h,Jh)),o.join("")};function ee(o){return new be(o)}function _r(o,l,h){o.j=h?Tn(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function yr(o,l){if(l){if(l=Number(l),isNaN(l)||0>l)throw Error("Bad port number "+l);o.s=l}else o.s=null}function ua(o,l,h){l instanceof bn?(o.i=l,Xh(o.i,o.h)):(h||(l=In(l,Wh)),o.i=new bn(l,o.h))}function at(o,l,h){o.i.set(l,h)}function vr(o){return at(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Tn(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function In(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,Hh),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Hh(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var ha=/[#\/\?@]/g,Qh=/[#\?:]/g,Gh=/[#\?]/g,Wh=/[#\?@]/g,Jh=/#/g;function bn(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function ce(o){o.g||(o.g=new Map,o.h=0,o.i&&Kh(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=bn.prototype,n.add=function(o,l){ce(this),this.i=null,o=Be(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function fa(o,l){ce(o),l=Be(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function da(o,l){return ce(o),l=Be(o,l),o.g.has(l)}n.forEach=function(o,l){ce(this),this.g.forEach(function(h,m){h.forEach(function(I){o.call(l,I,m,this)},this)},this)},n.na=function(){ce(this);const o=Array.from(this.g.values()),l=Array.from(this.g.keys()),h=[];for(let m=0;m<l.length;m++){const I=o[m];for(let R=0;R<I.length;R++)h.push(l[m])}return h},n.V=function(o){ce(this);let l=[];if(typeof o=="string")da(this,o)&&(l=l.concat(this.g.get(Be(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)l=l.concat(o[h])}return l},n.set=function(o,l){return ce(this),this.i=null,o=Be(this,o),da(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=this.V(o),0<o.length?String(o[0]):l):l};function ma(o,l,h){fa(o,l),0<h.length&&(o.i=null,o.g.set(Be(o,l),C(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(var h=0;h<l.length;h++){var m=l[h];const R=encodeURIComponent(String(m)),x=this.V(m);for(m=0;m<x.length;m++){var I=R;x[m]!==""&&(I+="="+encodeURIComponent(String(x[m]))),o.push(I)}}return this.i=o.join("&")};function Be(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Xh(o,l){l&&!o.j&&(ce(o),o.i=null,o.g.forEach(function(h,m){var I=m.toLowerCase();m!=I&&(fa(this,m),ma(this,I,h))},o)),o.j=l}function Yh(o,l){const h=new wn;if(c.Image){const m=new Image;m.onload=b(le,h,"TestLoadImage: loaded",!0,l,m),m.onerror=b(le,h,"TestLoadImage: error",!1,l,m),m.onabort=b(le,h,"TestLoadImage: abort",!1,l,m),m.ontimeout=b(le,h,"TestLoadImage: timeout",!1,l,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else l(!1)}function Zh(o,l){const h=new wn,m=new AbortController,I=setTimeout(()=>{m.abort(),le(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:m.signal}).then(R=>{clearTimeout(I),R.ok?le(h,"TestPingServer: ok",!0,l):le(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(I),le(h,"TestPingServer: error",!1,l)})}function le(o,l,h,m,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),m(h)}catch{}}function tf(){this.g=new Lh}function ef(o,l,h){const m=h||"";try{ca(o,function(I,R){let x=I;f(I)&&(x=Ps(I)),l.push(m+R+"="+encodeURIComponent(x))})}catch(I){throw l.push(m+"type="+encodeURIComponent("_badmap")),I}}function Er(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Er,Cs),Er.prototype.g=function(){return new wr(this.l,this.j)},Er.prototype.i=function(o){return function(){return o}}({});function wr(o,l){It.call(this),this.D=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(wr,It),n=wr.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=l,this.readyState=1,Sn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const l={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(l.body=o),(this.D||c).fetch(new Request(this.A,l)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Sn(this)),this.g&&(this.readyState=3,Sn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ga(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ga(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.v.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?Rn(this):Sn(this),this.readyState==3&&ga(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Rn(this))},n.Qa=function(o){this.g&&(this.response=o,Rn(this))},n.ga=function(){this.g&&Rn(this)};function Rn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Sn(o)}n.setRequestHeader=function(o,l){this.u.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Sn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(wr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function pa(o){let l="";return Q(o,function(h,m){l+=m,l+=":",l+=h,l+=`\r
`}),l}function $s(o,l,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=pa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):at(o,l,h))}function ut(o){It.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(ut,It);var nf=/^https?$/i,rf=["POST","PUT"];n=ut.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,l,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xs.g(),this.v=this.o?Ko(this.o):Ko(xs),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(R){_a(this,R);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var I in m)h.set(I,m[I]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const R of m.keys())h.set(R,m.get(R));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),I=c.FormData&&o instanceof c.FormData,!(0<=Array.prototype.indexOf.call(rf,l,void 0))||m||I||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,x]of h)this.g.setRequestHeader(R,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ea(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){_a(this,R)}};function _a(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.m=5,ya(o),Ar(o)}function ya(o){o.A||(o.A=!0,Ot(o,"complete"),Ot(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ot(this,"complete"),Ot(this,"abort"),Ar(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ar(this,!0)),ut.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?va(this):this.bb())},n.bb=function(){va(this)};function va(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ne(o)!=4||o.Z()!=2)){if(o.u&&ne(o)==4)Bo(o.Ea,0,o);else if(Ot(o,"readystatechange"),ne(o)==4){o.h=!1;try{const x=o.Z();t:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break t;default:l=!1}var h;if(!(h=l)){var m;if(m=x===0){var I=String(o.D).match(la)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),m=!nf.test(I?I.toLowerCase():"")}h=m}if(h)Ot(o,"complete"),Ot(o,"success");else{o.m=6;try{var R=2<ne(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",ya(o)}}finally{Ar(o)}}}}function Ar(o,l){if(o.g){Ea(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,l||Ot(o,"ready");try{h.onreadystatechange=m}catch{}}}function Ea(o){o.I&&(c.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ne(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ne(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Oh(l)}};function wa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function sf(o){const l={};o=(o.g&&2<=ne(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(k(o[m]))continue;var h=E(o[m]);const I=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=l[I]||[];l[I]=R,R.push(h)}T(l,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pn(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Aa(o){this.Aa=0,this.i=[],this.j=new wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pn("baseRetryDelayMs",5e3,o),this.cb=Pn("retryDelaySeedMs",1e4,o),this.Wa=Pn("forwardChannelMaxRetries",2,o),this.wa=Pn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ra(o&&o.concurrentRequestLimit),this.Da=new tf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Aa.prototype,n.la=8,n.G=1,n.connect=function(o,l,h,m){Lt(0),this.W=o,this.H=l||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Da(this,null,this.W),Ir(this)};function Us(o){if(Ta(o),o.G==3){var l=o.U++,h=ee(o.I);if(at(h,"SID",o.K),at(h,"RID",l),at(h,"TYPE","terminate"),Cn(o,h),l=new ae(o,o.j,l),l.L=2,l.v=vr(ee(h)),h=!1,c.navigator&&c.navigator.sendBeacon)try{h=c.navigator.sendBeacon(l.v.toString(),"")}catch{}!h&&c.Image&&(new Image().src=l.v,h=!0),h||(l.g=xa(l.j,null),l.g.ea(l.v)),l.F=Date.now(),pr(l)}Va(o)}function Tr(o){o.g&&(js(o),o.g.cancel(),o.g=null)}function Ta(o){Tr(o),o.u&&(c.clearTimeout(o.u),o.u=null),br(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&c.clearTimeout(o.s),o.s=null)}function Ir(o){if(!sa(o.h)&&!o.s){o.s=!0;var l=o.Ga;te||oe(),jt||(te(),jt=!0),Ae.add(l,o),o.B=0}}function of(o,l){return ia(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=l.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=En(w(o.Ga,o,l),Ca(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const I=new ae(this,this.j,o);let R=this.o;if(this.S&&(R?(R=_(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(I.H=R,R=null),this.P)t:{for(var l=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(l+=m,4096<l){l=h;break t}if(l===4096||h===this.i.length-1){l=h+1;break t}}l=1e3}else l=1e3;l=ba(this,I,l),h=ee(this.I),at(h,"RID",o),at(h,"CVER",22),this.D&&at(h,"X-HTTP-Session-Id",this.D),Cn(this,h),R&&(this.O?l="headers="+encodeURIComponent(String(pa(R)))+"&"+l:this.m&&$s(h,this.m,R)),Fs(this.h,I),this.Ua&&at(h,"TYPE","init"),this.P?(at(h,"$req",l),at(h,"SID","null"),I.T=!0,Ns(I,h,null)):Ns(I,h,l),this.G=2}}else this.G==3&&(o?Ia(this,o):this.i.length==0||sa(this.h)||Ia(this))};function Ia(o,l){var h;l?h=l.l:h=o.U++;const m=ee(o.I);at(m,"SID",o.K),at(m,"RID",h),at(m,"AID",o.T),Cn(o,m),o.m&&o.o&&$s(m,o.m,o.o),h=new ae(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),l&&(o.i=l.D.concat(o.i)),l=ba(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Fs(o.h,h),Ns(h,m,l)}function Cn(o,l){o.H&&Q(o.H,function(h,m){at(l,m,h)}),o.l&&ca({},function(h,m){at(l,m,h)})}function ba(o,l,h){h=Math.min(o.i.length,h);var m=o.l?w(o.l.Na,o.l,o):null;t:{var I=o.i;let R=-1;for(;;){const x=["count="+h];R==-1?0<h?(R=I[0].g,x.push("ofs="+R)):R=0:x.push("ofs="+R);let it=!0;for(let Et=0;Et<h;Et++){let et=I[Et].g;const bt=I[Et].map;if(et-=R,0>et)R=Math.max(0,I[Et].g-100),it=!1;else try{ef(bt,x,"req"+et+"_")}catch{m&&m(bt)}}if(it){m=x.join("&");break t}}}return o=o.i.splice(0,h),l.D=o,m}function Ra(o){if(!o.g&&!o.u){o.Y=1;var l=o.Fa;te||oe(),jt||(te(),jt=!0),Ae.add(l,o),o.v=0}}function Bs(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=En(w(o.Fa,o),Ca(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Sa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=En(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Lt(10),Tr(this),Sa(this))};function js(o){o.A!=null&&(c.clearTimeout(o.A),o.A=null)}function Sa(o){o.g=new ae(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var l=ee(o.qa);at(l,"RID","rpc"),at(l,"SID",o.K),at(l,"AID",o.T),at(l,"CI",o.F?"0":"1"),!o.F&&o.ja&&at(l,"TO",o.ja),at(l,"TYPE","xmlhttp"),Cn(o,l),o.m&&o.o&&$s(l,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=vr(ee(l)),h.m=null,h.P=!0,ta(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Tr(this),Bs(this),Lt(19))};function br(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function Pa(o,l){var h=null;if(o.g==l){br(o),js(o),o.g=null;var m=2}else if(Ms(o.h,l))h=l.D,oa(o.h,l),m=1;else return;if(o.G!=0){if(l.o)if(m==1){h=l.m?l.m.length:0,l=Date.now()-l.F;var I=o.B;m=dr(),Ot(m,new Jo(m,h)),Ir(o)}else Ra(o);else if(I=l.s,I==3||I==0&&0<l.X||!(m==1&&of(o,l)||m==2&&Bs(o)))switch(h&&0<h.length&&(l=o.h,l.i=l.i.concat(h)),I){case 1:Re(o,5);break;case 4:Re(o,10);break;case 3:Re(o,6);break;default:Re(o,2)}}}function Ca(o,l){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*l}function Re(o,l){if(o.j.info("Error code "+l),l==2){var h=w(o.fb,o),m=o.Xa;const I=!m;m=new be(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||_r(m,"https"),vr(m),I?Yh(m.toString(),h):Zh(m.toString(),h)}else Lt(2);o.G=0,o.l&&o.l.sa(l),Va(o),Ta(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Lt(2)):(this.j.info("Failed to ping google.com"),Lt(1))};function Va(o){if(o.G=0,o.ka=[],o.l){const l=aa(o.h);(l.length!=0||o.i.length!=0)&&(S(o.ka,l),S(o.ka,o.i),o.h.i.length=0,C(o.i),o.i.length=0),o.l.ra()}}function Da(o,l,h){var m=h instanceof be?ee(h):new be(h);if(m.g!="")l&&(m.g=l+"."+m.g),yr(m,m.s);else{var I=c.location;m=I.protocol,l=l?l+"."+I.hostname:I.hostname,I=+I.port;var R=new be(null);m&&_r(R,m),l&&(R.g=l),I&&yr(R,I),h&&(R.l=h),m=R}return h=o.D,l=o.ya,h&&l&&at(m,h,l),at(m,"VER",o.la),Cn(o,m),m}function xa(o,l,h){if(l&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Ca&&!o.pa?new ut(new Er({eb:h})):new ut(o.pa),l.Ha(o.J),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function ka(){}n=ka.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Rr(){}Rr.prototype.g=function(o,l){return new $t(o,l)};function $t(o,l){It.call(this),this.g=new Aa(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.va&&(o?o["X-WebChannel-Client-Profile"]=l.va:o={"X-WebChannel-Client-Profile":l.va}),this.g.S=o,(o=l&&l.Sb)&&!k(o)&&(this.g.m=o),this.v=l&&l.supportsCrossDomainXhr||!1,this.u=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!k(l)&&(this.g.D=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new je(this)}P($t,It),$t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},$t.prototype.close=function(){Us(this.g)},$t.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ps(o),o=h);l.i.push(new jh(l.Ya++,o)),l.G==3&&Ir(l)},$t.prototype.N=function(){this.g.l=null,delete this.j,Us(this.g),delete this.g,$t.aa.N.call(this)};function Na(o){Vs.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){t:{for(const h in l){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}P(Na,Vs);function Oa(){Ds.call(this),this.status=1}P(Oa,Ds);function je(o){this.g=o}P(je,ka),je.prototype.ua=function(){Ot(this.g,"a")},je.prototype.ta=function(o){Ot(this.g,new Na(o))},je.prototype.sa=function(o){Ot(this.g,new Oa)},je.prototype.ra=function(){Ot(this.g,"b")},Rr.prototype.createWebChannel=Rr.prototype.g,$t.prototype.send=$t.prototype.o,$t.prototype.open=$t.prototype.m,$t.prototype.close=$t.prototype.close,Gl=function(){return new Rr},Ql=function(){return dr()},Hl=Te,wi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},mr.NO_ERROR=0,mr.TIMEOUT=8,mr.HTTP_ERROR=6,Lr=mr,Xo.COMPLETE="complete",Kl=Xo,Ho.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",It.prototype.listen=It.prototype.K,On=Ho,ut.prototype.listenOnce=ut.prototype.L,ut.prototype.getLastError=ut.prototype.Ka,ut.prototype.getLastErrorCode=ut.prototype.Ba,ut.prototype.getStatus=ut.prototype.Z,ut.prototype.getResponseJson=ut.prototype.Oa,ut.prototype.getResponseText=ut.prototype.oa,ut.prototype.send=ut.prototype.ea,ut.prototype.setWithCredentials=ut.prototype.Ha,zl=ut}).apply(typeof Cr<"u"?Cr:typeof self<"u"?self:typeof window<"u"?window:{});const sc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Pt.UNAUTHENTICATED=new Pt(null),Pt.GOOGLE_CREDENTIALS=new Pt("google-credentials-uid"),Pt.FIRST_PARTY=new Pt("first-party-uid"),Pt.MOCK_USER=new Pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fn="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=new Ol("@firebase/firestore");function Vn(){return Ne.logLevel}function M(n,...t){if(Ne.logLevel<=Y.DEBUG){const e=t.map(Wi);Ne.debug(`Firestore (${fn}): ${n}`,...e)}}function ie(n,...t){if(Ne.logLevel<=Y.ERROR){const e=t.map(Wi);Ne.error(`Firestore (${fn}): ${n}`,...e)}}function nn(n,...t){if(Ne.logLevel<=Y.WARN){const e=t.map(Wi);Ne.warn(`Firestore (${fn}): ${n}`,...e)}}function Wi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(n="Unexpected state"){const t=`FIRESTORE (${fn}) INTERNAL ASSERTION FAILED: `+n;throw ie(t),new Error(t)}function ht(n,t){n||z()}function X(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends Me{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Pt.UNAUTHENTICATED))}shutdown(){}}class Jm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Xm{constructor(t){this.t=t,this.currentUser=Pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){ht(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let i=new pe;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pe,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;t.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{M("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(M("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pe)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(M("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ht(typeof r.accessToken=="string"),new Wl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return ht(t===null||typeof t=="string"),new Pt(t)}}class Ym{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Zm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Ym(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tg{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eg{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){ht(this.o===void 0);const r=i=>{i.error!=null&&M("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,M("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{M("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):M("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(ht(typeof e.token=="string"),this.R=e.token,new tg(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ng(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=ng(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<e&&(r+=t.charAt(s[i]%t.length))}return r}}function rt(n,t){return n<t?-1:n>t?1:0}function rn(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new L(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new L(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return yt.fromMillis(Date.now())}static fromDate(t){return yt.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new yt(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t){this.timestamp=t}static fromTimestamp(t){return new q(t)}static min(){return new q(new yt(0,0))}static max(){return new q(new yt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn{constructor(t,e,r){e===void 0?e=0:e>t.length&&z(),r===void 0?r=t.length-e:r>t.length-e&&z(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return Jn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Jn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ct extends Jn{construct(t,e,r){return new ct(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new L(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new ct(e)}static emptyPath(){return new ct([])}}const rg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Dt extends Jn{construct(t,e,r){return new Dt(t,e,r)}static isValidIdentifier(t){return rg.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Dt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Dt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const i=()=>{if(r.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const c=t[s];if(c==="\\"){if(s+1===t.length)throw new L(D.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new L(D.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Dt(e)}static emptyPath(){return new Dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.path=t}static fromPath(t){return new B(ct.fromString(t))}static fromName(t){return new B(ct.fromString(t).popFirst(5))}static empty(){return new B(ct.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ct.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ct.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new B(new ct(t.slice()))}}function sg(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=q.fromTimestamp(r===1e9?new yt(e+1,0):new yt(e,r));return new ve(s,B.empty(),t)}function ig(n){return new ve(n.readTime,n.key,-1)}class ve{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ve(q.min(),B.empty(),-1)}static max(){return new ve(q.max(),B.empty(),-1)}}function og(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=B.comparator(n.documentKey,t.documentKey),e!==0?e:rt(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ji(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==ag)throw n;M("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof V?e:V.resolve(e)}catch(e){return V.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):V.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):V.reject(e)}static resolve(t){return new V((e,r)=>{e(t)})}static reject(t){return new V((e,r)=>{r(t)})}static waitFor(t){return new V((e,r)=>{let s=0,i=0,a=!1;t.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&e()},u=>r(u))}),a=!0,i===s&&e()})}static or(t){let e=V.resolve(!1);for(const r of t)e=e.next(s=>s?V.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,i)=>{r.push(e.call(this,s,i))}),this.waitFor(r)}static mapArray(t,e){return new V((r,s)=>{const i=t.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const f=u;e(t[f]).next(d=>{a[f]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(t,e){return new V((r,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):r()};i()})}}function lg(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function sr(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Xi.oe=-1;function ls(n){return n==null}function Jr(n){return n===0&&1/n==-1/0}function ug(n){return typeof n=="number"&&Number.isInteger(n)&&!Jr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function ir(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Xl(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e){this.comparator=t,this.root=e||wt.EMPTY}insert(t,e){return new dt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,wt.BLACK,null,null))}remove(t){return new dt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,wt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Vr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Vr(this.root,t,this.comparator,!1)}getReverseIterator(){return new Vr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Vr(this.root,t,this.comparator,!0)}}class Vr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?r(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class wt{constructor(t,e,r,s,i){this.key=t,this.value=e,this.color=r??wt.RED,this.left=s??wt.EMPTY,this.right=i??wt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,i){return new wt(t??this.key,e??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,r),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return wt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return wt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,wt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,wt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const t=this.left.check();if(t!==this.right.check())throw z();return t+(this.isRed()?0:1)}}wt.EMPTY=null,wt.RED=!0,wt.BLACK=!1;wt.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,r,s,i){return this}insert(t,e,r){return new wt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.comparator=t,this.data=new dt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new oc(this.data.getIterator())}getIteratorFrom(t){return new oc(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof At)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new At(this.comparator);return e.data=t,e}}class oc{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.fields=t,t.sort(Dt.comparator)}static empty(){return new ue([])}unionWith(t){let e=new At(Dt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ue(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return rn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yl("Invalid base64 string: "+i):i}}(t);return new Tt(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new Tt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Tt.EMPTY_BYTE_STRING=new Tt("");const hg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ee(n){if(ht(!!n),typeof n=="string"){let t=0;const e=hg.exec(n);if(ht(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:ft(n.seconds),nanos:ft(n.nanos)}}function ft(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Oe(n){return typeof n=="string"?Tt.fromBase64String(n):Tt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Zi(n){const t=n.mapValue.fields.__previous_value__;return Yi(t)?Zi(t):t}function Xn(n){const t=Ee(n.mapValue.fields.__local_write_time__.timestampValue);return new yt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(t,e,r,s,i,a,c,u,f){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f}}class Yn{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Yn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Yn&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Le(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Yi(n)?4:mg(n)?9007199254740991:dg(n)?10:11:z()}function Xt(n,t){if(n===t)return!0;const e=Le(n);if(e!==Le(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Xn(n).isEqual(Xn(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Ee(s.timestampValue),c=Ee(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,i){return Oe(s.bytesValue).isEqual(Oe(i.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,i){return ft(s.geoPointValue.latitude)===ft(i.geoPointValue.latitude)&&ft(s.geoPointValue.longitude)===ft(i.geoPointValue.longitude)}(n,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ft(s.integerValue)===ft(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ft(s.doubleValue),c=ft(i.doubleValue);return a===c?Jr(a)===Jr(c):isNaN(a)&&isNaN(c)}return!1}(n,t);case 9:return rn(n.arrayValue.values||[],t.arrayValue.values||[],Xt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ic(a)!==ic(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!Xt(a[u],c[u])))return!1;return!0}(n,t);default:return z()}}function Zn(n,t){return(n.values||[]).find(e=>Xt(e,t))!==void 0}function sn(n,t){if(n===t)return 0;const e=Le(n),r=Le(t);if(e!==r)return rt(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return rt(n.booleanValue,t.booleanValue);case 2:return function(i,a){const c=ft(i.integerValue||i.doubleValue),u=ft(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,t);case 3:return ac(n.timestampValue,t.timestampValue);case 4:return ac(Xn(n),Xn(t));case 5:return rt(n.stringValue,t.stringValue);case 6:return function(i,a){const c=Oe(i),u=Oe(a);return c.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const d=rt(c[f],u[f]);if(d!==0)return d}return rt(c.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(i,a){const c=rt(ft(i.latitude),ft(a.latitude));return c!==0?c:rt(ft(i.longitude),ft(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return cc(n.arrayValue,t.arrayValue);case 10:return function(i,a){var c,u,f,d;const p=i.fields||{},w=a.fields||{},b=(c=p.value)===null||c===void 0?void 0:c.arrayValue,P=(u=w.value)===null||u===void 0?void 0:u.arrayValue,C=rt(((f=b?.values)===null||f===void 0?void 0:f.length)||0,((d=P?.values)===null||d===void 0?void 0:d.length)||0);return C!==0?C:cc(b,P)}(n.mapValue,t.mapValue);case 11:return function(i,a){if(i===Dr.mapValue&&a===Dr.mapValue)return 0;if(i===Dr.mapValue)return 1;if(a===Dr.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const w=rt(u[p],d[p]);if(w!==0)return w;const b=sn(c[u[p]],f[d[p]]);if(b!==0)return b}return rt(u.length,d.length)}(n.mapValue,t.mapValue);default:throw z()}}function ac(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return rt(n,t);const e=Ee(n),r=Ee(t),s=rt(e.seconds,r.seconds);return s!==0?s:rt(e.nanos,r.nanos)}function cc(n,t){const e=n.values||[],r=t.values||[];for(let s=0;s<e.length&&s<r.length;++s){const i=sn(e[s],r[s]);if(i)return i}return rt(e.length,r.length)}function on(n){return Ai(n)}function Ai(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=Ee(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return Oe(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return B.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const i of e.values||[])s?s=!1:r+=",",r+=Ai(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ai(e.fields[a])}`;return s+"}"}(n.mapValue):z()}function lc(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Ti(n){return!!n&&"integerValue"in n}function to(n){return!!n&&"arrayValue"in n}function uc(n){return!!n&&"nullValue"in n}function hc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ys(n){return!!n&&"mapValue"in n}function dg(n){var t,e;return((e=(((t=n?.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="__vector__"}function $n(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return ir(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=$n(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=$n(n.arrayValue.values[e]);return t}return Object.assign({},n)}function mg(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(t){this.value=t}static empty(){return new Wt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Ys(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=$n(e)}setAll(t){let e=Dt.emptyPath(),r={},s=[];t.forEach((a,c)=>{if(!e.isImmediateParentOf(c)){const u=this.getFieldsMap(e);this.applyChanges(u,r,s),r={},s=[],e=c.popLast()}a?r[c.lastSegment()]=$n(a):s.push(c.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,r,s)}delete(t){const e=this.field(t.popLast());Ys(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Ys(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){ir(e,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new Wt($n(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t,e,r,s,i,a,c){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(t){return new Vt(t,0,q.min(),q.min(),q.min(),Wt.empty(),0)}static newFoundDocument(t,e,r,s){return new Vt(t,1,e,q.min(),r,s,0)}static newNoDocument(t,e){return new Vt(t,2,e,q.min(),q.min(),Wt.empty(),0)}static newUnknownDocument(t,e){return new Vt(t,3,e,q.min(),q.min(),Wt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Wt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=q.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,e){this.position=t,this.inclusive=e}}function fc(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const i=t[s],a=n.position[s];if(i.field.isKeyField()?r=B.comparator(B.fromName(a.referenceValue),e.key):r=sn(a,e.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dc(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!Xt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e="asc"){this.field=t,this.dir=e}}function gg(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{}class gt extends Zl{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new _g(t,e,r):e==="array-contains"?new Eg(t,r):e==="in"?new wg(t,r):e==="not-in"?new Ag(t,r):e==="array-contains-any"?new Tg(t,r):new gt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new yg(t,r):new vg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(sn(e,this.value)):e!==null&&Le(this.value)===Le(e)&&this.matchesComparison(sn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gt extends Zl{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Gt(t,e)}matches(t){return tu(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function tu(n){return n.op==="and"}function eu(n){return pg(n)&&tu(n)}function pg(n){for(const t of n.filters)if(t instanceof Gt)return!1;return!0}function Ii(n){if(n instanceof gt)return n.field.canonicalString()+n.op.toString()+on(n.value);if(eu(n))return n.filters.map(t=>Ii(t)).join(",");{const t=n.filters.map(e=>Ii(e)).join(",");return`${n.op}(${t})`}}function nu(n,t){return n instanceof gt?function(r,s){return s instanceof gt&&r.op===s.op&&r.field.isEqual(s.field)&&Xt(r.value,s.value)}(n,t):n instanceof Gt?function(r,s){return s instanceof Gt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&nu(a,s.filters[c]),!0):!1}(n,t):void z()}function ru(n){return n instanceof gt?function(e){return`${e.field.canonicalString()} ${e.op} ${on(e.value)}`}(n):n instanceof Gt?function(e){return e.op.toString()+" {"+e.getFilters().map(ru).join(" ,")+"}"}(n):"Filter"}class _g extends gt{constructor(t,e,r){super(t,e,r),this.key=B.fromName(r.referenceValue)}matches(t){const e=B.comparator(t.key,this.key);return this.matchesComparison(e)}}class yg extends gt{constructor(t,e){super(t,"in",e),this.keys=su("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class vg extends gt{constructor(t,e){super(t,"not-in",e),this.keys=su("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function su(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>B.fromName(r.referenceValue))}class Eg extends gt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return to(e)&&Zn(e.arrayValue,this.value)}}class wg extends gt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Zn(this.value.arrayValue,e)}}class Ag extends gt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Zn(this.value.arrayValue,e)}}class Tg extends gt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!to(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Zn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t,e=null,r=[],s=[],i=null,a=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.ue=null}}function mc(n,t=null,e=[],r=[],s=null,i=null,a=null){return new Ig(n,t,e,r,s,i,a)}function eo(n){const t=X(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>Ii(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ls(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>on(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>on(r)).join(",")),t.ue=e}return t.ue}function no(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!gg(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!nu(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!dc(n.startAt,t.startAt)&&dc(n.endAt,t.endAt)}function bi(n){return B.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function bg(n,t,e,r,s,i,a,c){return new dn(n,t,e,r,s,i,a,c)}function ro(n){return new dn(n)}function gc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function iu(n){return n.collectionGroup!==null}function Un(n){const t=X(n);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new At(Dt.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new tr(i,r))}),e.has(Dt.keyField().canonicalString())||t.ce.push(new tr(Dt.keyField(),r))}return t.ce}function Jt(n){const t=X(n);return t.le||(t.le=Rg(t,Un(n))),t.le}function Rg(n,t){if(n.limitType==="F")return mc(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new tr(s.field,i)});const e=n.endAt?new Xr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xr(n.startAt.position,n.startAt.inclusive):null;return mc(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function Ri(n,t){const e=n.filters.concat([t]);return new dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function Si(n,t,e){return new dn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function us(n,t){return no(Jt(n),Jt(t))&&n.limitType===t.limitType}function ou(n){return`${eo(Jt(n))}|lt:${n.limitType}`}function He(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>ru(s)).join(", ")}]`),ls(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>on(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>on(s)).join(",")),`Target(${r})`}(Jt(n))}; limitType=${n.limitType})`}function hs(n,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):B.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,t)&&function(r,s){for(const i of Un(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,c,u){const f=fc(a,c,u);return a.inclusive?f<=0:f<0}(r.startAt,Un(r),s)||r.endAt&&!function(a,c,u){const f=fc(a,c,u);return a.inclusive?f>=0:f>0}(r.endAt,Un(r),s))}(n,t)}function Sg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function au(n){return(t,e)=>{let r=!1;for(const s of Un(n)){const i=Pg(s,t,e);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Pg(n,t,e){const r=n.field.isKeyField()?B.comparator(t.key,e.key):function(i,a,c){const u=a.data.field(i),f=c.data.field(i);return u!==null&&f!==null?sn(u,f):z()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return z()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ir(this.inner,(e,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Xl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg=new dt(B.comparator);function we(){return Cg}const cu=new dt(B.comparator);function Ln(...n){let t=cu;for(const e of n)t=t.insert(e.key,e);return t}function Vg(n){let t=cu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function Ce(){return Bn()}function lu(){return Bn()}function Bn(){return new mn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Dg=new At(B.comparator);function Z(...n){let t=Dg;for(const e of n)t=t.add(e);return t}const xg=new At(rt);function kg(){return xg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jr(t)?"-0":t}}function uu(n){return{integerValue:""+n}}function Ng(n,t){return ug(t)?uu(t):so(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(){this._=void 0}}function Og(n,t,e){return n instanceof Pi?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yi(i)&&(i=Zi(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):n instanceof Yr?hu(n,t):n instanceof Zr?fu(n,t):function(s,i){const a=Mg(s,i),c=pc(a)+pc(s.Pe);return Ti(a)&&Ti(s.Pe)?uu(c):so(s.serializer,c)}(n,t)}function Lg(n,t,e){return n instanceof Yr?hu(n,t):n instanceof Zr?fu(n,t):e}function Mg(n,t){return n instanceof Ci?function(r){return Ti(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class Pi extends fs{}class Yr extends fs{constructor(t){super(),this.elements=t}}function hu(n,t){const e=du(t);for(const r of n.elements)e.some(s=>Xt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Zr extends fs{constructor(t){super(),this.elements=t}}function fu(n,t){let e=du(t);for(const r of n.elements)e=e.filter(s=>!Xt(s,r));return{arrayValue:{values:e}}}class Ci extends fs{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function pc(n){return ft(n.integerValue||n.doubleValue)}function du(n){return to(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Fg(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof Yr&&s instanceof Yr||r instanceof Zr&&s instanceof Zr?rn(r.elements,s.elements,Xt):r instanceof Ci&&s instanceof Ci?Xt(r.Pe,s.Pe):r instanceof Pi&&s instanceof Pi}(n.transform,t.transform)}class xe{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new xe}static exists(t){return new xe(void 0,t)}static updateTime(t){return new xe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Mr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class io{}function mu(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Ug(n.key,xe.none()):new oo(n.key,n.data,xe.none());{const e=n.data,r=Wt.empty();let s=new At(Dt.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new ds(n.key,r,new ue(s.toArray()),xe.none())}}function $g(n,t,e){n instanceof oo?function(s,i,a){const c=s.value.clone(),u=yc(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,t,e):n instanceof ds?function(s,i,a){if(!Mr(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=yc(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(gu(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function jn(n,t,e,r){return n instanceof oo?function(i,a,c,u){if(!Mr(i.precondition,a))return c;const f=i.value.clone(),d=vc(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,t,e,r):n instanceof ds?function(i,a,c,u){if(!Mr(i.precondition,a))return c;const f=vc(i.fieldTransforms,u,a),d=a.data;return d.setAll(gu(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,t,e,r):function(i,a,c){return Mr(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,t,e)}function _c(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&rn(r,s,(i,a)=>Fg(i,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class oo extends io{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ds extends io{constructor(t,e,r,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function gu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function yc(n,t,e){const r=new Map;ht(n.length===e.length);for(let s=0;s<e.length;s++){const i=n[s],a=i.transform,c=t.data.field(i.field);r.set(i.field,Lg(a,c,e[s]))}return r}function vc(n,t,e){const r=new Map;for(const s of n){const i=s.transform,a=e.data.field(s.field);r.set(s.field,Og(i,a,t))}return r}class Ug extends io{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&$g(i,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=jn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=jn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=lu();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=e.has(s.key)?null:c;const u=mu(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(q.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),Z())}isEqual(t){return this.batchId===t.batchId&&rn(this.mutations,t.mutations,(e,r)=>_c(e,r))&&rn(this.baseMutations,t.baseMutations,(e,r)=>_c(e,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,J;function pu(n){if(n===void 0)return ie("GRPC error has no .code"),D.UNKNOWN;switch(n){case mt.OK:return D.OK;case mt.CANCELLED:return D.CANCELLED;case mt.UNKNOWN:return D.UNKNOWN;case mt.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case mt.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case mt.INTERNAL:return D.INTERNAL;case mt.UNAVAILABLE:return D.UNAVAILABLE;case mt.UNAUTHENTICATED:return D.UNAUTHENTICATED;case mt.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case mt.NOT_FOUND:return D.NOT_FOUND;case mt.ALREADY_EXISTS:return D.ALREADY_EXISTS;case mt.PERMISSION_DENIED:return D.PERMISSION_DENIED;case mt.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case mt.ABORTED:return D.ABORTED;case mt.OUT_OF_RANGE:return D.OUT_OF_RANGE;case mt.UNIMPLEMENTED:return D.UNIMPLEMENTED;case mt.DATA_LOSS:return D.DATA_LOSS;default:return z()}}(J=mt||(mt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg=new De([4294967295,4294967295],0);function Ec(n){const t=zg().encode(n),e=new ql;return e.update(t),new Uint8Array(e.digest())}function wc(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new De([e,r],0),new De([s,i],0)]}class ao{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Mn(`Invalid padding: ${e}`);if(r<0)throw new Mn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Mn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Mn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=De.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(De.fromNumber(r)));return s.compare(Kg)===1&&(s=new De([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ec(t),[r,s]=wc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new ao(i,s,e);return r.forEach(c=>a.insert(c)),a}insert(t){if(this.Ie===0)return;const e=Ec(t),[r,s]=wc(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(r,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(t,e,r,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,or.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ms(q.min(),s,new dt(rt),we(),Z())}}class or{constructor(t,e,r,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new or(r,e,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class _u{constructor(t,e){this.targetId=t,this.me=e}}class yu{constructor(t,e,r=Tt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Ac{constructor(){this.fe=0,this.ge=Ic(),this.pe=Tt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}ve(){let t=Z(),e=Z(),r=Z();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:z()}}),new or(this.pe,this.ye,t,e,r)}Ce(){this.we=!1,this.ge=Ic()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,ht(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Hg{constructor(t){this.Le=t,this.Be=new Map,this.ke=we(),this.qe=Tc(),this.Qe=new dt(rt)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:z()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const i=s.target;if(bi(i))if(r===0){const a=new B(i.path);this.Ue(e,a,Vt.newNoDocument(a,q.min()))}else ht(r===1);else{const a=this.Ye(e);if(a!==r){const c=this.Ze(t),u=c?this.Xe(c,t,a):1;if(u!==0){this.je(e);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,f)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=e;let a,c;try{a=Oe(r).toUint8Array()}catch(u){if(u instanceof Yl)return nn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ao(a,s,i)}catch(u){return nn(u instanceof Mn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(i=>{const a=this.Le.tt(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(c)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,a)=>{const c=this.Je(a);if(c){if(i.current&&bi(c.target)){const u=new B(c.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Vt.newNoDocument(u,t))}i.be&&(e.set(a,i.ve()),i.Ce())}});let r=Z();this.qe.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const f=this.Je(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new ms(t,e,this.Qe,this.ke,r);return this.ke=we(),this.qe=Tc(),this.Qe=new dt(rt),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Ac,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new At(rt),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||M("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Ac),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Tc(){return new dt(B.comparator)}function Ic(){return new dt(B.comparator)}const Qg={asc:"ASCENDING",desc:"DESCENDING"},Gg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Wg={and:"AND",or:"OR"};class Jg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Vi(n,t){return n.useProto3Json||ls(t)?t:{value:t}}function Di(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vu(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Xe(n){return ht(!!n),q.fromTimestamp(function(e){const r=Ee(e);return new yt(r.seconds,r.nanos)}(n))}function Eu(n,t){return xi(n,t).canonicalString()}function xi(n,t){const e=function(s){return new ct(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function wu(n){const t=ct.fromString(n);return ht(Ru(t)),t}function Zs(n,t){const e=wu(t);if(e.get(1)!==n.databaseId.projectId)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new L(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new B(Tu(e))}function Au(n,t){return Eu(n.databaseId,t)}function Xg(n){const t=wu(n);return t.length===4?ct.emptyPath():Tu(t)}function bc(n){return new ct(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Tu(n){return ht(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Yg(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:z()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(ht(d===void 0||typeof d=="string"),Tt.fromBase64String(d||"")):(ht(d===void 0||d instanceof Buffer||d instanceof Uint8Array),Tt.fromUint8Array(d||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,c=a&&function(f){const d=f.code===void 0?D.UNKNOWN:pu(f.code);return new L(d,f.message||"")}(a);e=new yu(r,s,i,c||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Zs(n,r.document.name),i=Xe(r.document.updateTime),a=r.document.createTime?Xe(r.document.createTime):q.min(),c=new Wt({mapValue:{fields:r.document.fields}}),u=Vt.newFoundDocument(s,i,a,c),f=r.targetIds||[],d=r.removedTargetIds||[];e=new Fr(f,d,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Zs(n,r.document),i=r.readTime?Xe(r.readTime):q.min(),a=Vt.newNoDocument(s,i),c=r.removedTargetIds||[];e=new Fr([],c,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Zs(n,r.document),i=r.removedTargetIds||[];e=new Fr([],i,s,null)}else{if(!("filter"in t))return z();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new qg(s,i),c=r.targetId;e=new _u(c,a)}}return e}function Zg(n,t){return{documents:[Au(n,t.path)]}}function tp(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=Au(n,s);const i=function(f){if(f.length!==0)return bu(Gt.create(f,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(w){return{field:Qe(w.field),direction:rp(w.dir)}}(d))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const c=Vi(n,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(t.endAt)),{_t:e,parent:s}}function ep(n){let t=Xg(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){ht(r===1);const d=e.from[0];d.allDescendants?s=d.collectionId:t=t.child(d.collectionId)}let i=[];e.where&&(i=function(p){const w=Iu(p);return w instanceof Gt&&eu(w)?w.getFilters():[w]}(e.where));let a=[];e.orderBy&&(a=function(p){return p.map(w=>function(P){return new tr(Ge(P.field),function(S){switch(S){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(e.orderBy));let c=null;e.limit&&(c=function(p){let w;return w=typeof p=="object"?p.value:p,ls(w)?null:w}(e.limit));let u=null;e.startAt&&(u=function(p){const w=!!p.before,b=p.values||[];return new Xr(b,w)}(e.startAt));let f=null;return e.endAt&&(f=function(p){const w=!p.before,b=p.values||[];return new Xr(b,w)}(e.endAt)),bg(t,s,a,i,c,"F",u,f)}function np(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return z()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Iu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ge(e.unaryFilter.field);return gt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ge(e.unaryFilter.field);return gt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ge(e.unaryFilter.field);return gt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ge(e.unaryFilter.field);return gt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(n):n.fieldFilter!==void 0?function(e){return gt.create(Ge(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Gt.create(e.compositeFilter.filters.map(r=>Iu(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(n):z()}function rp(n){return Qg[n]}function sp(n){return Gg[n]}function ip(n){return Wg[n]}function Qe(n){return{fieldPath:n.canonicalString()}}function Ge(n){return Dt.fromServerFormat(n.fieldPath)}function bu(n){return n instanceof gt?function(e){if(e.op==="=="){if(hc(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NAN"}};if(uc(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(hc(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NAN"}};if(uc(e.value))return{unaryFilter:{field:Qe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qe(e.field),op:sp(e.op),value:e.value}}}(n):n instanceof Gt?function(e){const r=e.getFilters().map(s=>bu(s));return r.length===1?r[0]:{compositeFilter:{op:ip(e.op),filters:r}}}(n):z()}function Ru(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(t,e,r,s,i=q.min(),a=q.min(),c=Tt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(t){return new he(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new he(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new he(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new he(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t){this.ct=t}}function ap(n){const t=ep({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Si(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.un=new lp}addToCollectionParentIndex(t,e){return this.un.add(e),V.resolve()}getCollectionParents(t,e){return V.resolve(this.un.getEntries(e))}addFieldIndex(t,e){return V.resolve()}deleteFieldIndex(t,e){return V.resolve()}deleteAllFieldIndexes(t){return V.resolve()}createTargetIndexes(t,e){return V.resolve()}getDocumentsMatchingTarget(t,e){return V.resolve(null)}getIndexType(t,e){return V.resolve(0)}getFieldIndexes(t,e){return V.resolve([])}getNextCollectionGroupToUpdate(t){return V.resolve(null)}getMinOffset(t,e){return V.resolve(ve.min())}getMinOffsetFromCollectionGroup(t,e){return V.resolve(ve.min())}updateCollectionGroup(t,e,r){return V.resolve()}updateIndexEntries(t,e){return V.resolve()}}class lp{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new At(ct.comparator),i=!s.has(r);return this.index[e]=s.add(r),i}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new At(ct.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this.Ln=t}next(){return this.Ln+=2,this.Ln}static Bn(){return new an(0)}static kn(){return new an(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(){this.changes=new mn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?V.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&jn(r.mutation,s,ue.empty(),yt.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,Z()).next(()=>r))}getLocalViewOfDocuments(t,e,r=Z()){const s=Ce();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(i=>{let a=Ln();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=Ce();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,Z()))}populateOverlays(t,e,r){const s=[];return r.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,c)=>{e.set(a,c)})})}computeViews(t,e,r,s){let i=we();const a=Bn(),c=function(){return Bn()}();return e.forEach((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof ds)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),jn(d.mutation,f,d.mutation.getFieldMask(),yt.now())):a.set(f.key,ue.empty())}),this.recalculateAndSaveOverlays(t,i).next(u=>(u.forEach((f,d)=>a.set(f,d)),e.forEach((f,d)=>{var p;return c.set(f,new hp(d,(p=a.get(f))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(t,e){const r=Bn();let s=new dt((a,c)=>a-c),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const c of a)c.keys().forEach(u=>{const f=e.get(u);if(f===null)return;let d=r.get(u)||ue.empty();d=c.applyToLocalView(f,d),r.set(u,d);const p=(s.get(c.batchId)||Z()).add(u);s=s.insert(c.batchId,p)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,d=u.value,p=lu();d.forEach(w=>{if(!i.has(w)){const b=mu(e.get(w),r.get(w));b!==null&&p.set(w,b),i=i.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(t,f,p))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return B.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):iu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-i.size):V.resolve(Ce());let c=-1,u=i;return a.next(f=>V.forEach(f,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(t,d).next(w=>{u=u.insert(d,w)}))).next(()=>this.populateOverlays(t,f,i)).next(()=>this.computeViews(t,u,f,Z())).next(d=>({batchId:c,changes:Vg(d)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new B(e)).next(r=>{let s=Ln();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const i=e.collectionGroup;let a=Ln();return this.indexManager.getCollectionParents(t,i).next(c=>V.forEach(c,u=>{const f=function(p,w){return new dn(w,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(e,u.child(i));return this.getDocumentsMatchingCollectionQuery(t,f,r,s).next(d=>{d.forEach((p,w)=>{a=a.insert(p,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,i,s))).next(a=>{i.forEach((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,Vt.newInvalidDocument(d)))});let c=Ln();return a.forEach((u,f)=>{const d=i.get(u);d!==void 0&&jn(d.mutation,f,ue.empty(),yt.now()),hs(e,f)&&(c=c.insert(u,f))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){this.serializer=t,this.hr=new Map,this.Pr=new Map}getBundleMetadata(t,e){return V.resolve(this.hr.get(e))}saveBundleMetadata(t,e){return this.hr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Xe(s.createTime)}}(e)),V.resolve()}getNamedQuery(t,e){return V.resolve(this.Pr.get(e))}saveNamedQuery(t,e){return this.Pr.set(e.name,function(s){return{name:s.name,query:ap(s.bundledQuery),readTime:Xe(s.readTime)}}(e)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(){this.overlays=new dt(B.comparator),this.Ir=new Map}getOverlay(t,e){return V.resolve(this.overlays.get(e))}getOverlays(t,e){const r=Ce();return V.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,i)=>{this.ht(t,e,i)}),V.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(t,e,r){const s=Ce(),i=e.length+1,a=new B(e.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!e.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let i=new dt((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===e&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=Ce(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const c=Ce(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,d)=>c.set(f,d)),!(c.size()>=s)););return V.resolve(c)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new jg(e,r));let i=this.Ir.get(e);i===void 0&&(i=Z(),this.Ir.set(e,i)),this.Ir.set(e,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(){this.sessionToken=Tt.EMPTY_BYTE_STRING}getSessionToken(t){return V.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.Tr=new At(_t.Er),this.dr=new At(_t.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(t,e){const r=new _t(t,e);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Vr(new _t(t,e))}mr(t,e){t.forEach(r=>this.removeReference(r,e))}gr(t){const e=new B(new ct([])),r=new _t(e,t),s=new _t(e,t+1),i=[];return this.dr.forEachInRange([r,s],a=>{this.Vr(a),i.push(a.key)}),i}pr(){this.Tr.forEach(t=>this.Vr(t))}Vr(t){this.Tr=this.Tr.delete(t),this.dr=this.dr.delete(t)}yr(t){const e=new B(new ct([])),r=new _t(e,t),s=new _t(e,t+1);let i=Z();return this.dr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new _t(t,0),r=this.Tr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class _t{constructor(t,e){this.key=t,this.wr=e}static Er(t,e){return B.comparator(t.key,e.key)||rt(t.wr,e.wr)}static Ar(t,e){return rt(t.wr,e.wr)||B.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.Sr=1,this.br=new At(_t.Er)}checkEmpty(t){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Bg(i,e,r,s);this.mutationQueue.push(a);for(const c of s)this.br=this.br.add(new _t(c.key,i)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(t,e){return V.resolve(this.Dr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(t){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new _t(e,0),s=new _t(e,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],a=>{const c=this.Dr(a.wr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new At(rt);return e.forEach(s=>{const i=new _t(s,0),a=new _t(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,a],c=>{r=r.add(c.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let i=r;B.isDocumentKey(i)||(i=i.child(""));const a=new _t(new B(i),0);let c=new At(rt);return this.br.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(u.wr)),!0)},a),V.resolve(this.Cr(c))}Cr(t){const e=[];return t.forEach(r=>{const s=this.Dr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){ht(this.Fr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(e.mutations,s=>{const i=new _t(s.key,e.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.br=r})}On(t){}containsKey(t,e){const r=new _t(e,0),s=this.br.firstAfterOrEqual(r);return V.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,V.resolve()}Fr(t,e){return this.vr(t)}vr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Dr(t){const e=this.vr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(t){this.Mr=t,this.docs=function(){return new dt(B.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),i=s?s.size:0,a=this.Mr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return V.resolve(r?r.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let r=we();return e.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Vt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let i=we();const a=e.path,c=new B(a.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||og(ig(d),r)<=0||(s.has(d.key)||hs(e,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(t,e,r,s){z()}Or(t,e){return V.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new yp(this)}getSize(t){return V.resolve(this.size)}}class yp extends up{constructor(t){super(),this.cr=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.cr.addEntry(t,s)):this.cr.removeEntry(r)}),V.waitFor(e)}getFromCache(t,e){return this.cr.getEntry(t,e)}getAllFromCache(t,e){return this.cr.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(t){this.persistence=t,this.Nr=new mn(e=>eo(e),no),this.lastRemoteSnapshotVersion=q.min(),this.highestTargetId=0,this.Lr=0,this.Br=new co,this.targetCount=0,this.kr=an.Bn()}forEachTarget(t,e){return this.Nr.forEach((r,s)=>e(s)),V.resolve()}getLastRemoteSnapshotVersion(t){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return V.resolve(this.Lr)}allocateTargetId(t){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Lr&&(this.Lr=e),V.resolve()}Kn(t){this.Nr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.kr=new an(e),this.highestTargetId=e),t.sequenceNumber>this.Lr&&(this.Lr=t.sequenceNumber)}addTargetData(t,e){return this.Kn(e),this.targetCount+=1,V.resolve()}updateTargetData(t,e){return this.Kn(e),V.resolve()}removeTargetData(t,e){return this.Nr.delete(e.target),this.Br.gr(e.targetId),this.targetCount-=1,V.resolve()}removeTargets(t,e,r){let s=0;const i=[];return this.Nr.forEach((a,c)=>{c.sequenceNumber<=e&&r.get(c.targetId)===null&&(this.Nr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(t){return V.resolve(this.targetCount)}getTargetData(t,e){const r=this.Nr.get(e)||null;return V.resolve(r)}addMatchingKeys(t,e,r){return this.Br.Rr(e,r),V.resolve()}removeMatchingKeys(t,e,r){this.Br.mr(e,r);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Br.gr(e),V.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Br.yr(e);return V.resolve(r)}containsKey(t,e){return V.resolve(this.Br.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,e){this.qr={},this.overlays={},this.Qr=new Xi(0),this.Kr=!1,this.Kr=!0,this.$r=new gp,this.referenceDelegate=t(this),this.Ur=new vp(this),this.indexManager=new cp,this.remoteDocumentCache=function(s){return new _p(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new op(e),this.Gr=new dp(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new mp,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.qr[t.toKey()];return r||(r=new pp(e,this.referenceDelegate),this.qr[t.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(t,e,r){M("MemoryPersistence","Starting transaction:",t);const s=new wp(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(t,e){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(t,e)))}}class wp extends cg{constructor(t){super(),this.currentSequenceNumber=t}}class lo{constructor(t){this.persistence=t,this.Jr=new co,this.Yr=null}static Zr(t){return new lo(t)}get Xr(){if(this.Yr)return this.Yr;throw z()}addReference(t,e,r){return this.Jr.addReference(r,e),this.Xr.delete(r.toString()),V.resolve()}removeReference(t,e,r){return this.Jr.removeReference(r,e),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(t,e){return this.Xr.add(e.toString()),V.resolve()}removeTarget(t,e){this.Jr.gr(e.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(t,e))}zr(){this.Yr=new Set}jr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=B.fromPath(r);return this.ei(t,s).next(i=>{i||e.removeEntry(s,q.min())})}).next(()=>(this.Yr=null,e.apply(t)))}updateLimboDocument(t,e){return this.ei(t,e).next(r=>{r?this.Xr.delete(e.toString()):this.Xr.add(e.toString())})}Wr(t){return 0}ei(t,e){return V.or([()=>V.resolve(this.Jr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Hr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.$i=r,this.Ui=s}static Wi(t,e){let r=Z(),s=Z();for(const i of e.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new uo(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return Nd()?8:lg(xd())>0?6:4}()}initialize(t,e){this.Ji=t,this.indexManager=e,this.Gi=!0}getDocumentsMatchingQuery(t,e,r,s){const i={result:null};return this.Yi(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Zi(t,e,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Ap;return this.Xi(t,e,a).next(c=>{if(i.result=c,this.zi)return this.es(t,e,a,c.size)})}).next(()=>i.result)}es(t,e,r,s){return r.documentReadCount<this.ji?(Vn()<=Y.DEBUG&&M("QueryEngine","SDK will not create cache indexes for query:",He(e),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Vn()<=Y.DEBUG&&M("QueryEngine","Query:",He(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Vn()<=Y.DEBUG&&M("QueryEngine","The SDK decides to create cache indexes for query:",He(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Jt(e))):V.resolve())}Yi(t,e){if(gc(e))return V.resolve(null);let r=Jt(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Si(e,null,"F"),r=Jt(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const a=Z(...i);return this.Ji.getDocuments(t,a).next(c=>this.indexManager.getMinOffset(t,r).next(u=>{const f=this.ts(e,c);return this.ns(e,f,a,u.readTime)?this.Yi(t,Si(e,null,"F")):this.rs(t,f,e,u)}))})))}Zi(t,e,r,s){return gc(e)||s.isEqual(q.min())?V.resolve(null):this.Ji.getDocuments(t,r).next(i=>{const a=this.ts(e,i);return this.ns(e,a,r,s)?V.resolve(null):(Vn()<=Y.DEBUG&&M("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),He(e)),this.rs(t,a,e,sg(s,-1)).next(c=>c))})}ts(t,e){let r=new At(au(t));return e.forEach((s,i)=>{hs(t,i)&&(r=r.add(i))}),r}ns(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(t,e,r){return Vn()<=Y.DEBUG&&M("QueryEngine","Using full collection scan to execute query:",He(e)),this.Ji.getDocumentsMatchingQuery(t,e,ve.min(),r)}rs(t,e,r,s){return this.Ji.getDocumentsMatchingQuery(t,r,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(t,e,r,s){this.persistence=t,this.ss=e,this.serializer=s,this.os=new dt(rt),this._s=new mn(i=>eo(i),no),this.us=new Map,this.cs=t.getRemoteDocumentCache(),this.Ur=t.getTargetCache(),this.Gr=t.getBundleCache(),this.ls(r)}ls(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fp(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.os))}}function bp(n,t,e,r){return new Ip(n,t,e,r)}async function Su(n,t){const e=X(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,e.ls(t),e.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=Z();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){c.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return e.localDocuments.getDocuments(r,u).next(f=>({hs:f,removedBatchIds:a,addedBatchIds:c}))})})}function Pu(n){const t=X(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Ur.getLastRemoteSnapshotVersion(e))}function Rp(n,t){const e=X(n),r=t.snapshotVersion;let s=e.os;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.cs.newChangeBuffer({trackRemovals:!0});s=e.os;const c=[];t.targetChanges.forEach((d,p)=>{const w=s.get(p);if(!w)return;c.push(e.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>e.Ur.addMatchingKeys(i,d.addedDocuments,p)));let b=w.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(p)!==null?b=b.withResumeToken(Tt.EMPTY_BYTE_STRING,q.min()).withLastLimboFreeSnapshotVersion(q.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(p,b),function(C,S,N){return C.resumeToken.approximateByteSize()===0||S.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:N.addedDocuments.size+N.modifiedDocuments.size+N.removedDocuments.size>0}(w,b,d)&&c.push(e.Ur.updateTargetData(i,b))});let u=we(),f=Z();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(Sp(i,a,t.documentUpdates).next(d=>{u=d.Ps,f=d.Is})),!r.isEqual(q.min())){const d=e.Ur.getLastRemoteSnapshotVersion(i).next(p=>e.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(e.os=s,i))}function Sp(n,t,e){let r=Z(),s=Z();return e.forEach(i=>r=r.add(i)),t.getEntries(n,r).next(i=>{let a=we();return e.forEach((c,u)=>{const f=i.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(q.min())?(t.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(t.addEntry(u),a=a.insert(c,u)):M("LocalStore","Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)}),{Ps:a,Is:s}})}function Pp(n,t){const e=X(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Ur.getTargetData(r,t).next(i=>i?(s=i,V.resolve(s)):e.Ur.allocateTargetId(r).next(a=>(s=new he(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.os=e.os.insert(r.targetId,r),e._s.set(t,r.targetId)),r})}async function ki(n,t,e){const r=X(n),s=r.os.get(t),i=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!sr(a))throw a;M("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.os=r.os.remove(t),r._s.delete(s.target)}function Rc(n,t,e){const r=X(n);let s=q.min(),i=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,d){const p=X(u),w=p._s.get(d);return w!==void 0?V.resolve(p.os.get(w)):p.Ur.getTargetData(f,d)}(r,a,Jt(t)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(a,t,e?s:q.min(),e?i:Z())).next(c=>(Cp(r,Sg(t),c),{documents:c,Ts:i})))}function Cp(n,t,e){let r=n.us.get(t)||q.min();e.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.us.set(t,r)}class Sc{constructor(){this.activeTargetIds=kg()}fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Vs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Vp{constructor(){this.so=new Sc,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t,e=!0){return e&&this.so.fs(t),this.oo[t]||"not-current"}updateQueryState(t,e,r){this.oo[t]=e}removeLocalQueryTarget(t){this.so.gs(t)}isLocalQueryTarget(t){return this.so.activeTargetIds.has(t)}clearQueryState(t){delete this.oo[t]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(t){return this.so.activeTargetIds.has(t)}start(){return this.so=new Sc,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{_o(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(t){this.ho.push(t)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){M("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ho)t(0)}lo(){M("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ho)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xr=null;function ti(){return xr===null?xr=function(){return 268435456+Math.round(2147483648*Math.random())}():xr++,"0x"+xr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(t){this.Io=t.Io,this.To=t.To}Eo(t){this.Ao=t}Ro(t){this.Vo=t}mo(t){this.fo=t}onMessage(t){this.po=t}close(){this.To()}send(t){this.Io(t)}yo(){this.Ao()}wo(){this.Vo()}So(t){this.fo(t)}bo(t){this.po(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="WebChannelConnection";class Np extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+e.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(e,r,s,i,a){const c=ti(),u=this.xo(e,r.toUriEncodedString());M("RestConnection",`Sending RPC '${e}' ${c}:`,u,s);const f={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(f,i,a),this.No(e,u,f,s).then(d=>(M("RestConnection",`Received RPC '${e}' ${c}: `,d),d),d=>{throw nn("RestConnection",`RPC '${e}' ${c} failed with error: `,d,"url: ",u,"request:",s),d})}Lo(e,r,s,i,a,c){return this.Mo(e,r,s,i,a)}Oo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+fn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}xo(e,r){const s=xp[e];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}No(t,e,r,s){const i=ti();return new Promise((a,c)=>{const u=new zl;u.setWithCredentials(!0),u.listenOnce(Kl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Lr.NO_ERROR:const d=u.getResponseJson();M(St,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),a(d);break;case Lr.TIMEOUT:M(St,`RPC '${t}' ${i} timed out`),c(new L(D.DEADLINE_EXCEEDED,"Request time out"));break;case Lr.HTTP_ERROR:const p=u.getStatus();if(M(St,`RPC '${t}' ${i} failed with status:`,p,"response text:",u.getResponseText()),p>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const b=w?.error;if(b&&b.status&&b.message){const P=function(S){const N=S.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(N)>=0?N:D.UNKNOWN}(b.status);c(new L(P,b.message))}else c(new L(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new L(D.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{M(St,`RPC '${t}' ${i} completed.`)}});const f=JSON.stringify(s);M(St,`RPC '${t}' ${i} sending request:`,s),u.send(e,"POST",f,r,15)})}Bo(t,e,r){const s=ti(),i=[this.Do,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Gl(),c=Ql(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const d=i.join("");M(St,`Creating RPC '${t}' stream ${s}: ${d}`,u);const p=a.createWebChannel(d,u);let w=!1,b=!1;const P=new kp({Io:S=>{b?M(St,`Not sending because RPC '${t}' stream ${s} is closed:`,S):(w||(M(St,`Opening RPC '${t}' stream ${s} transport.`),p.open(),w=!0),M(St,`RPC '${t}' stream ${s} sending:`,S),p.send(S))},To:()=>p.close()}),C=(S,N,k)=>{S.listen(N,$=>{try{k($)}catch(U){setTimeout(()=>{throw U},0)}})};return C(p,On.EventType.OPEN,()=>{b||(M(St,`RPC '${t}' stream ${s} transport opened.`),P.yo())}),C(p,On.EventType.CLOSE,()=>{b||(b=!0,M(St,`RPC '${t}' stream ${s} transport closed`),P.So())}),C(p,On.EventType.ERROR,S=>{b||(b=!0,nn(St,`RPC '${t}' stream ${s} transport errored:`,S),P.So(new L(D.UNAVAILABLE,"The operation could not be completed")))}),C(p,On.EventType.MESSAGE,S=>{var N;if(!b){const k=S.data[0];ht(!!k);const $=k,U=$.error||((N=$[0])===null||N===void 0?void 0:N.error);if(U){M(St,`RPC '${t}' stream ${s} received error:`,U);const tt=U.status;let Q=function(y){const v=mt[y];if(v!==void 0)return pu(v)}(tt),T=U.message;Q===void 0&&(Q=D.INTERNAL,T="Unknown error status: "+tt+" with message "+U.message),b=!0,P.So(new L(Q,T)),p.close()}else M(St,`RPC '${t}' stream ${s} received:`,k),P.bo(k)}}),C(c,Hl.STAT_EVENT,S=>{S.stat===wi.PROXY?M(St,`RPC '${t}' stream ${s} detected buffering proxy`):S.stat===wi.NOPROXY&&M(St,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.wo()},0),P}}function ei(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n){return new Jg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(t,e,r=1e3,s=1.5,i=6e4){this.ui=t,this.timerId=e,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(t){this.cancel();const e=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,e-r);s>0&&M("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),t())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(t,e,r,s,i,a,c,u){this.ui=t,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Cu(t,e)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(t){this.u_(),this.stream.send(t)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(t,e){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,t!==4?this.t_.reset():e&&e.code===D.RESOURCE_EXHAUSTED?(ie(e.toString()),ie("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):e&&e.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.mo(e)}l_(){}auth(){this.state=1;const t=this.h_(this.Yo),e=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===e&&this.P_(r,s)},r=>{t(()=>{const s=new L(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(t,e){const r=this.h_(this.Yo);this.stream=this.T_(t,e),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(t){return M("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}h_(t){return e=>{this.ui.enqueueAndForget(()=>this.Yo===t?e():(M("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Lp extends Op{constructor(t,e,r,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=i}T_(t,e){return this.connection.Bo("Listen",t,e)}E_(t){return this.onNext(t)}onNext(t){this.t_.reset();const e=Yg(this.serializer,t),r=function(i){if(!("targetChange"in i))return q.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?q.min():a.readTime?Xe(a.readTime):q.min()}(t);return this.listener.d_(e,r)}A_(t){const e={};e.database=bc(this.serializer),e.addTarget=function(i,a){let c;const u=a.target;if(c=bi(u)?{documents:Zg(i,u)}:{query:tp(i,u)._t},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=vu(i,a.resumeToken);const f=Vi(i,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(q.min())>0){c.readTime=Di(i,a.snapshotVersion.toTimestamp());const f=Vi(i,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,t);const r=np(this.serializer,t);r&&(e.labels=r),this.a_(e)}R_(t){const e={};e.database=bc(this.serializer),e.removeTarget=t,this.a_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(t,e,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Mo(t,xi(e,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(D.UNKNOWN,i.toString())})}Lo(t,e,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Lo(t,xi(e,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new L(D.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class Fp{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(t){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.C_("Offline")))}set(t){this.x_(),this.S_=0,t==="Online"&&(this.D_=!1),this.C_(t)}C_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}F_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ie(e),this.D_=!1):M("OnlineStateTracker",e)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(t,e,r,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(a=>{r.enqueueAndForget(async()=>{cr(this)&&(M("RemoteStore","Restarting streams for network reachability change."),await async function(u){const f=X(u);f.L_.add(4),await ar(f),f.q_.set("Unknown"),f.L_.delete(4),await ps(f)}(this))})}),this.q_=new Fp(r,s)}}async function ps(n){if(cr(n))for(const t of n.B_)await t(!0)}async function ar(n){for(const t of n.B_)await t(!1)}function Vu(n,t){const e=X(n);e.N_.has(t.targetId)||(e.N_.set(t.targetId,t),go(e)?mo(e):gn(e).r_()&&fo(e,t))}function ho(n,t){const e=X(n),r=gn(e);e.N_.delete(t),r.r_()&&Du(e,t),e.N_.size===0&&(r.r_()?r.o_():cr(e)&&e.q_.set("Unknown"))}function fo(n,t){if(n.Q_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(q.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}gn(n).A_(t)}function Du(n,t){n.Q_.xe(t),gn(n).R_(t)}function mo(n){n.Q_=new Hg({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.N_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),gn(n).start(),n.q_.v_()}function go(n){return cr(n)&&!gn(n).n_()&&n.N_.size>0}function cr(n){return X(n).L_.size===0}function xu(n){n.Q_=void 0}async function Up(n){n.q_.set("Online")}async function Bp(n){n.N_.forEach((t,e)=>{fo(n,t)})}async function jp(n,t){xu(n),go(n)?(n.q_.M_(t),mo(n)):n.q_.set("Unknown")}async function qp(n,t,e){if(n.q_.set("Online"),t instanceof yu&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.N_.delete(c),s.Q_.removeTarget(c))}(n,t)}catch(r){M("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Cc(n,r)}else if(t instanceof Fr?n.Q_.Ke(t):t instanceof _u?n.Q_.He(t):n.Q_.We(t),!e.isEqual(q.min()))try{const r=await Pu(n.localStore);e.compareTo(r)>=0&&await function(i,a){const c=i.Q_.rt(a);return c.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.N_.get(f);d&&i.N_.set(f,d.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,f)=>{const d=i.N_.get(u);if(!d)return;i.N_.set(u,d.withResumeToken(Tt.EMPTY_BYTE_STRING,d.snapshotVersion)),Du(i,u);const p=new he(d.target,u,f,d.sequenceNumber);fo(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(n,e)}catch(r){M("RemoteStore","Failed to raise snapshot:",r),await Cc(n,r)}}async function Cc(n,t,e){if(!sr(t))throw t;n.L_.add(1),await ar(n),n.q_.set("Offline"),e||(e=()=>Pu(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{M("RemoteStore","Retrying IndexedDB access"),await e(),n.L_.delete(1),await ps(n)})}async function Vc(n,t){const e=X(n);e.asyncQueue.verifyOperationInProgress(),M("RemoteStore","RemoteStore received new credentials");const r=cr(e);e.L_.add(3),await ar(e),r&&e.q_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.L_.delete(3),await ps(e)}async function zp(n,t){const e=X(n);t?(e.L_.delete(2),await ps(e)):t||(e.L_.add(2),await ar(e),e.q_.set("Unknown"))}function gn(n){return n.K_||(n.K_=function(e,r,s){const i=X(e);return i.w_(),new Lp(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Eo:Up.bind(null,n),Ro:Bp.bind(null,n),mo:jp.bind(null,n),d_:qp.bind(null,n)}),n.B_.push(async t=>{t?(n.K_.s_(),go(n)?mo(n):n.q_.set("Unknown")):(await n.K_.stop(),xu(n))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,e,r,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pe,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,i){const a=Date.now()+r,c=new po(t,e,a,s,i);return c.start(r),c}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(D.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ku(n,t){if(ie("AsyncQueue",`${t}: ${n}`),sr(n))return new L(D.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.comparator=t?(e,r)=>t(e,r)||B.comparator(e.key,r.key):(e,r)=>B.comparator(e.key,r.key),this.keyedMap=Ln(),this.sortedSet=new dt(this.comparator)}static emptySet(t){return new Ye(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Ye)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Ye;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.W_=new dt(B.comparator)}track(t){const e=t.doc.key,r=this.W_.get(e);r?t.type!==0&&r.type===3?this.W_=this.W_.insert(e,t):t.type===3&&r.type!==1?this.W_=this.W_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.W_=this.W_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.W_=this.W_.remove(e):t.type===1&&r.type===2?this.W_=this.W_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.W_=this.W_.insert(e,{type:2,doc:t.doc}):z():this.W_=this.W_.insert(e,t)}G_(){const t=[];return this.W_.inorderTraversal((e,r)=>{t.push(r)}),t}}class cn{constructor(t,e,r,s,i,a,c,u,f){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(t,e,r,s,i){const a=[];return e.forEach(c=>{a.push({type:0,doc:c})}),new cn(t,e,Ye.emptySet(e),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&us(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(t=>t.J_())}}class Hp{constructor(){this.queries=xc(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(e,r){const s=X(e),i=s.queries;s.queries=xc(),i.forEach((a,c)=>{for(const u of c.j_)u.onError(r)})})(this,new L(D.ABORTED,"Firestore shutting down"))}}function xc(){return new mn(n=>ou(n),us)}async function Nu(n,t){const e=X(n);let r=3;const s=t.query;let i=e.queries.get(s);i?!i.H_()&&t.J_()&&(r=2):(i=new Kp,r=t.J_()?0:1);try{switch(r){case 0:i.z_=await e.onListen(s,!0);break;case 1:i.z_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const c=ku(a,`Initialization of query '${He(t.query)}' failed`);return void t.onError(c)}e.queries.set(s,i),i.j_.push(t),t.Z_(e.onlineState),i.z_&&t.X_(i.z_)&&_o(e)}async function Ou(n,t){const e=X(n),r=t.query;let s=3;const i=e.queries.get(r);if(i){const a=i.j_.indexOf(t);a>=0&&(i.j_.splice(a,1),i.j_.length===0?s=t.J_()?0:1:!i.H_()&&t.J_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function Qp(n,t){const e=X(n);let r=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const c of a.j_)c.X_(s)&&(r=!0);a.z_=s}}r&&_o(e)}function Gp(n,t,e){const r=X(n),s=r.queries.get(t);if(s)for(const i of s.j_)i.onError(e);r.queries.delete(t)}function _o(n){n.Y_.forEach(t=>{t.next()})}var Ni,kc;(kc=Ni||(Ni={})).ea="default",kc.Cache="cache";class Lu{constructor(t,e,r){this.query=t,this.ta=e,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new cn(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.na?this.ia(t)&&(this.ta.next(t),e=!0):this.sa(t,this.onlineState)&&(this.oa(t),e=!0),this.ra=t,e}onError(t){this.ta.error(t)}Z_(t){this.onlineState=t;let e=!1;return this.ra&&!this.na&&this.sa(this.ra,t)&&(this.oa(this.ra),e=!0),e}sa(t,e){if(!t.fromCache||!this.J_())return!0;const r=e!=="Offline";return(!this.options._a||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ia(t){if(t.docChanges.length>0)return!0;const e=this.ra&&this.ra.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}oa(t){t=cn.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.na=!0,this.ta.next(t)}J_(){return this.options.source!==Ni.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){this.key=t}}class Fu{constructor(t){this.key=t}}class Wp{constructor(t,e){this.query=t,this.Ta=e,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Z(),this.mutatedKeys=Z(),this.Aa=au(t),this.Ra=new Ye(this.Aa)}get Va(){return this.Ta}ma(t,e){const r=e?e.fa:new Dc,s=e?e.Ra:this.Ra;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((d,p)=>{const w=s.get(d),b=hs(this.query,p)?p:null,P=!!w&&this.mutatedKeys.has(w.key),C=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let S=!1;w&&b?w.data.isEqual(b.data)?P!==C&&(r.track({type:3,doc:b}),S=!0):this.ga(w,b)||(r.track({type:2,doc:b}),S=!0,(u&&this.Aa(b,u)>0||f&&this.Aa(b,f)<0)&&(c=!0)):!w&&b?(r.track({type:0,doc:b}),S=!0):w&&!b&&(r.track({type:1,doc:w}),S=!0,(u||f)&&(c=!0)),S&&(b?(a=a.add(b),i=C?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:a,fa:r,ns:c,mutatedKeys:i}}ga(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const i=this.Ra;this.Ra=t.Ra,this.mutatedKeys=t.mutatedKeys;const a=t.fa.G_();a.sort((d,p)=>function(b,P){const C=S=>{switch(S){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return C(b)-C(P)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const c=e&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,f=u!==this.Ea;return this.Ea=u,a.length!==0||f?{snapshot:new cn(this.query,t.Ra,i,a,t.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Dc,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(t){return!this.Ta.has(t)&&!!this.Ra.has(t)&&!this.Ra.get(t).hasLocalMutations}pa(t){t&&(t.addedDocuments.forEach(e=>this.Ta=this.Ta.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.Ta=this.Ta.delete(e)),this.current=t.current)}ya(){if(!this.current)return[];const t=this.da;this.da=Z(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const e=[];return t.forEach(r=>{this.da.has(r)||e.push(new Fu(r))}),this.da.forEach(r=>{t.has(r)||e.push(new Mu(r))}),e}ba(t){this.Ta=t.Ts,this.da=Z();const e=this.ma(t.documents);return this.applyChanges(e,!0)}Da(){return cn.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Jp{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Xp{constructor(t){this.key=t,this.va=!1}}class Yp{constructor(t,e,r,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new mn(c=>ou(c),us),this.Ma=new Map,this.xa=new Set,this.Oa=new dt(B.comparator),this.Na=new Map,this.La=new co,this.Ba={},this.ka=new Map,this.qa=an.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function Zp(n,t,e=!0){const r=qu(n);let s;const i=r.Fa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await $u(r,t,e,!0),s}async function t_(n,t){const e=qu(n);await $u(e,t,!0,!1)}async function $u(n,t,e,r){const s=await Pp(n.localStore,Jt(t)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,e);let c;return r&&(c=await e_(n,t,i,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&Vu(n.remoteStore,s),c}async function e_(n,t,e,r,s){n.Ka=(p,w,b)=>async function(C,S,N,k){let $=S.view.ma(N);$.ns&&($=await Rc(C.localStore,S.query,!1).then(({documents:T})=>S.view.ma(T,$)));const U=k&&k.targetChanges.get(S.targetId),tt=k&&k.targetMismatches.get(S.targetId)!=null,Q=S.view.applyChanges($,C.isPrimaryClient,U,tt);return Oc(C,S.targetId,Q.wa),Q.snapshot}(n,p,w,b);const i=await Rc(n.localStore,t,!0),a=new Wp(t,i.Ts),c=a.ma(i.documents),u=or.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,u);Oc(n,e,f.wa);const d=new Jp(t,e,a);return n.Fa.set(t,d),n.Ma.has(e)?n.Ma.get(e).push(t):n.Ma.set(e,[t]),f.snapshot}async function n_(n,t,e){const r=X(n),s=r.Fa.get(t),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(a=>!us(a,t))),void r.Fa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ki(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&ho(r.remoteStore,s.targetId),Oi(r,s.targetId)}).catch(Ji)):(Oi(r,s.targetId),await ki(r.localStore,s.targetId,!0))}async function r_(n,t){const e=X(n),r=e.Fa.get(t),s=e.Ma.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),ho(e.remoteStore,r.targetId))}async function Uu(n,t){const e=X(n);try{const r=await Rp(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Na.get(i);a&&(ht(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.va=!0:s.modifiedDocuments.size>0?ht(a.va):s.removedDocuments.size>0&&(ht(a.va),a.va=!1))}),await ju(e,r,t)}catch(r){await Ji(r)}}function Nc(n,t,e){const r=X(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.Fa.forEach((i,a)=>{const c=a.view.Z_(t);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=X(a);u.onlineState=c;let f=!1;u.queries.forEach((d,p)=>{for(const w of p.j_)w.Z_(c)&&(f=!0)}),f&&_o(u)}(r.eventManager,t),s.length&&r.Ca.d_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function s_(n,t,e){const r=X(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Na.get(t),i=s&&s.key;if(i){let a=new dt(B.comparator);a=a.insert(i,Vt.newNoDocument(i,q.min()));const c=Z().add(i),u=new ms(q.min(),new Map,new dt(rt),a,c);await Uu(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(t),yo(r)}else await ki(r.localStore,t,!1).then(()=>Oi(r,t,e)).catch(Ji)}function Oi(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Ma.get(t))n.Fa.delete(r),e&&n.Ca.$a(r,e);n.Ma.delete(t),n.isPrimaryClient&&n.La.gr(t).forEach(r=>{n.La.containsKey(r)||Bu(n,r)})}function Bu(n,t){n.xa.delete(t.path.canonicalString());const e=n.Oa.get(t);e!==null&&(ho(n.remoteStore,e),n.Oa=n.Oa.remove(t),n.Na.delete(e),yo(n))}function Oc(n,t,e){for(const r of e)r instanceof Mu?(n.La.addReference(r.key,t),i_(n,r)):r instanceof Fu?(M("SyncEngine","Document no longer in limbo: "+r.key),n.La.removeReference(r.key,t),n.La.containsKey(r.key)||Bu(n,r.key)):z()}function i_(n,t){const e=t.key,r=e.path.canonicalString();n.Oa.get(e)||n.xa.has(r)||(M("SyncEngine","New document in limbo: "+e),n.xa.add(r),yo(n))}function yo(n){for(;n.xa.size>0&&n.Oa.size<n.maxConcurrentLimboResolutions;){const t=n.xa.values().next().value;n.xa.delete(t);const e=new B(ct.fromString(t)),r=n.qa.next();n.Na.set(r,new Xp(e)),n.Oa=n.Oa.insert(e,r),Vu(n.remoteStore,new he(Jt(ro(e.path)),r,"TargetPurposeLimboResolution",Xi.oe))}}async function ju(n,t,e){const r=X(n),s=[],i=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{a.push(r.Ka(u,t,e).then(f=>{var d;if((f||e)&&r.isPrimaryClient){const p=f?!f.fromCache:(d=e?.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(f){s.push(f);const p=uo.Wi(u.targetId,f);i.push(p)}}))}),await Promise.all(a),r.Ca.d_(s),await async function(u,f){const d=X(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>V.forEach(f,w=>V.forEach(w.$i,b=>d.persistence.referenceDelegate.addReference(p,w.targetId,b)).next(()=>V.forEach(w.Ui,b=>d.persistence.referenceDelegate.removeReference(p,w.targetId,b)))))}catch(p){if(!sr(p))throw p;M("LocalStore","Failed to update sequence numbers: "+p)}for(const p of f){const w=p.targetId;if(!p.fromCache){const b=d.os.get(w),P=b.snapshotVersion,C=b.withLastLimboFreeSnapshotVersion(P);d.os=d.os.insert(w,C)}}}(r.localStore,i))}async function o_(n,t){const e=X(n);if(!e.currentUser.isEqual(t)){M("SyncEngine","User change. New user:",t.toKey());const r=await Su(e.localStore,t);e.currentUser=t,function(i,a){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new L(D.CANCELLED,a))})}),i.ka.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await ju(e,r.hs)}}function a_(n,t){const e=X(n),r=e.Na.get(t);if(r&&r.va)return Z().add(r.key);{let s=Z();const i=e.Ma.get(t);if(!i)return s;for(const a of i){const c=e.Fa.get(a);s=s.unionWith(c.view.Va)}return s}}function qu(n){const t=X(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Uu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=a_.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=s_.bind(null,t),t.Ca.d_=Qp.bind(null,t.eventManager),t.Ca.$a=Gp.bind(null,t.eventManager),t}class ts{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=gs(t.databaseInfo.databaseId),this.sharedClientState=this.Wa(t),this.persistence=this.Ga(t),await this.persistence.start(),this.localStore=this.za(t),this.gcScheduler=this.ja(t,this.localStore),this.indexBackfillerScheduler=this.Ha(t,this.localStore)}ja(t,e){return null}Ha(t,e){return null}za(t){return bp(this.persistence,new Tp,t.initialUser,this.serializer)}Ga(t){return new Ep(lo.Zr,this.serializer)}Wa(t){return new Vp}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ts.provider={build:()=>new ts};class Li{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Nc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=o_.bind(null,this.syncEngine),await zp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Hp}()}createDatastore(t){const e=gs(t.databaseInfo.databaseId),r=function(i){return new Np(i)}(t.databaseInfo);return function(i,a,c,u){return new Mp(i,a,c,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,i,a,c){return new $p(r,s,i,a,c)}(this.localStore,this.datastore,t.asyncQueue,e=>Nc(this.syncEngine,e,0),function(){return Pc.D()?new Pc:new Dp}())}createSyncEngine(t,e){return function(s,i,a,c,u,f,d){const p=new Yp(s,i,a,c,u,f);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await async function(s){const i=X(s);M("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ar(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}Li.provider={build:()=>new Li};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ya(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ya(this.observer.error,t):ie("Uncaught Error in snapshot listener:",t.toString()))}Za(){this.muted=!0}Ya(t,e){setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(t,e,r,s,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Pt.UNAUTHENTICATED,this.clientId=Jl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{M("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(M("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pe;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ku(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ni(n,t){n.asyncQueue.verifyOperationInProgress(),M("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Su(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function Lc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await l_(n);M("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>Vc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Vc(t.remoteStore,s)),n._onlineComponents=t}async function l_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){M("FirestoreClient","Using user provided OfflineComponentProvider");try{await ni(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(e))throw e;nn("Error using user provided cache. Falling back to memory cache: "+e),await ni(n,new ts)}}else M("FirestoreClient","Using default OfflineComponentProvider"),await ni(n,new ts);return n._offlineComponents}async function u_(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(M("FirestoreClient","Using user provided OnlineComponentProvider"),await Lc(n,n._uninitializedComponentsProvider._online)):(M("FirestoreClient","Using default OnlineComponentProvider"),await Lc(n,new Li))),n._onlineComponents}async function Ku(n){const t=await u_(n),e=t.eventManager;return e.onListen=Zp.bind(null,t.syncEngine),e.onUnlisten=n_.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=t_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=r_.bind(null,t.syncEngine),e}function h_(n,t,e={}){const r=new pe;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,f){const d=new zu({next:w=>{d.Za(),a.enqueueAndForget(()=>Ou(i,p));const b=w.docs.has(c);!b&&w.fromCache?f.reject(new L(D.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&w.fromCache&&u&&u.source==="server"?f.reject(new L(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(w)},error:w=>f.reject(w)}),p=new Lu(ro(c.path),d,{includeMetadataChanges:!0,_a:!0});return Nu(i,p)}(await Ku(n),n.asyncQueue,t,e,r)),r.promise}function f_(n,t,e={}){const r=new pe;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,f){const d=new zu({next:w=>{d.Za(),a.enqueueAndForget(()=>Ou(i,p)),w.fromCache&&u.source==="server"?f.reject(new L(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):f.resolve(w)},error:w=>f.reject(w)}),p=new Lu(c,d,{includeMetadataChanges:!0,_a:!0});return Nu(i,p)}(await Ku(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(n,t,e){if(!e)throw new L(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function d_(n,t,e,r){if(t===!0&&r===!0)throw new L(D.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function Fc(n){if(!B.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function $c(n){if(B.isDocumentKey(n))throw new L(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function _s(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":z()}function er(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new L(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=_s(n);throw new L(D.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new L(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new L(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}d_("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Hu((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new L(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class ys{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uc({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new L(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new L(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Wm;switch(r.type){case"firstParty":return new Zm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new L(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=Mc.get(e);r&&(M("ComponentProvider","Removing Datastore"),Mc.delete(e),r.terminate())}(this),Promise.resolve()}}function m_(n,t,e,r={}){var s;const i=(n=er(n,ys))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=Pt.MOCK_USER;else{c=kl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new L(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Pt(f)}n._authCredentials=new Jm(new Wl(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Fe(this.firestore,t,this._query)}}class Bt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _e(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Bt(this.firestore,t,this._key)}}class _e extends Fe{constructor(t,e,r){super(t,e,ro(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Bt(this.firestore,null,new B(t))}withConverter(t){return new _e(this.firestore,t,this._path)}}function g_(n,t,...e){if(n=tn(n),Qu("collection","path",t),n instanceof ys){const r=ct.fromString(t,...e);return $c(r),new _e(n,null,r)}{if(!(n instanceof Bt||n instanceof _e))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ct.fromString(t,...e));return $c(r),new _e(n.firestore,null,r)}}function vo(n,t,...e){if(n=tn(n),arguments.length===1&&(t=Jl.newId()),Qu("doc","path",t),n instanceof ys){const r=ct.fromString(t,...e);return Fc(r),new Bt(n,null,new B(r))}{if(!(n instanceof Bt||n instanceof _e))throw new L(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ct.fromString(t,...e));return Fc(r),new Bt(n.firestore,n instanceof _e?n.converter:null,new B(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(t=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Cu(this,"async_queue_retry"),this.Vu=()=>{const r=ei();r&&M("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=t;const e=ei();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.fu(),this.gu(t)}enterRestrictedMode(t){if(!this.Iu){this.Iu=!0,this.Au=t||!1;const e=ei();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.Vu)}}enqueue(t){if(this.fu(),this.Iu)return new Promise(()=>{});const e=new pe;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Pu.push(t),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(t){if(!sr(t))throw t;M("AsyncQueue","Operation failed with retryable error: "+t)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(t){const e=this.mu.then(()=>(this.du=!0,t().catch(r=>{this.Eu=r,this.du=!1;const s=function(a){let c=a.message||"";return a.stack&&(c=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),c}(r);throw ie("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=e,e}enqueueAfterDelay(t,e,r){this.fu(),this.Ru.indexOf(t)>-1&&(e=0);const s=po.createAndSchedule(this,t,e,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&z()}verifyOperationInProgress(){}async wu(){let t;do t=this.mu,await t;while(t!==this.mu)}Su(t){for(const e of this.Tu)if(e.timerId===t)return!0;return!1}bu(t){return this.wu().then(()=>{this.Tu.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Tu)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.wu()})}Du(t){this.Ru.push(t)}yu(t){const e=this.Tu.indexOf(t);this.Tu.splice(e,1)}}class Eo extends ys{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=new Bc,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Bc(t),this._firestoreClient=void 0,await t}}}function Gu(n,t){const e=typeof n=="object"?n:Ul(),r=typeof n=="string"?n:"(default)",s=Fl(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Dl("firestore");i&&m_(s,...i)}return s}function Wu(n){if(n._terminated)throw new L(D.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||p_(n),n._firestoreClient}function p_(n){var t,e,r;const s=n._freezeSettings(),i=function(c,u,f,d){return new fg(c,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Hu(d.experimentalLongPollingOptions),d.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new c_(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(c){const u=c?._online.build();return{_offline:c?._offline.build(u),_online:u}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(t){this._byteString=t}static fromBase64String(t){try{return new ln(Tt.fromBase64String(t))}catch(e){throw new L(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new ln(Tt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new L(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Dt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new L(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new L(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t){this._values=(t||[]).map(e=>e)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,t._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __=/^__.*__$/;function Yu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class To{constructor(t,e,r,s,i,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(t){return new To(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.Ou(t),s}Nu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(t){return this.Fu({path:void 0,xu:!0})}Bu(t){return Mi(t,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}vu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ou(this.path.get(t))}Ou(t){if(t.length===0)throw this.Bu("Document fields must not be empty");if(Yu(this.Cu)&&__.test(t))throw this.Bu('Document fields cannot begin and end with "__"')}}class y_{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||gs(t)}Qu(t,e,r,s=!1){return new To({Cu:t,methodName:e,qu:r,path:Dt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function v_(n){const t=n._freezeSettings(),e=gs(n._databaseId);return new y_(n._databaseId,!!t.ignoreUndefinedProperties,e)}function E_(n,t,e,r=!1){return Io(e,n.Qu(r?4:3,t))}function Io(n,t){if(Zu(n=tn(n)))return A_("Unsupported field value:",t,n),w_(n,t);if(n instanceof Xu)return function(r,s){if(!Yu(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.xu&&t.Cu!==4)throw t.Bu("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Io(c,s.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,t)}return function(r,s){if((r=tn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ng(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=yt.fromDate(r);return{timestampValue:Di(s.serializer,i)}}if(r instanceof yt){const i=new yt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Di(s.serializer,i)}}if(r instanceof wo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ln)return{bytesValue:vu(s.serializer,r._byteString)};if(r instanceof Bt){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Eu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ao)return function(a,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return so(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${_s(r)}`)}(n,t)}function w_(n,t){const e={};return Xl(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ir(n,(r,s)=>{const i=Io(s,t.Mu(r));i!=null&&(e[r]=i)}),{mapValue:{fields:e}}}function Zu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof yt||n instanceof wo||n instanceof ln||n instanceof Bt||n instanceof Xu||n instanceof Ao)}function A_(n,t,e){if(!Zu(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=_s(e);throw r==="an object"?t.Bu(n+" a custom object"):t.Bu(n+" "+r)}}const T_=new RegExp("[~\\*/\\[\\]]");function I_(n,t,e){if(t.search(T_)>=0)throw Mi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Ju(...t.split("."))._internalPath}catch{throw Mi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function Mi(n,t,e,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new L(D.INVALID_ARGUMENT,c+n+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,e,r,s,i){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new b_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(bo("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class b_ extends th{data(){return super.data()}}function bo(n,t){return typeof t=="string"?I_(n,t):t instanceof Ju?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new L(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ro{}class eh extends Ro{}function S_(n,t,...e){let r=[];t instanceof Ro&&r.push(t),r=r.concat(e),function(i){const a=i.filter(u=>u instanceof Po).length,c=i.filter(u=>u instanceof So).length;if(a>1||a>0&&c>0)throw new L(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class So extends eh{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new So(t,e,r)}_apply(t){const e=this._parse(t);return nh(t._query,e),new Fe(t.firestore,t.converter,Ri(t._query,e))}_parse(t){const e=v_(t.firestore);return function(i,a,c,u,f,d,p){let w;if(f.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new L(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){qc(p,d);const b=[];for(const P of p)b.push(jc(u,i,P));w={arrayValue:{values:b}}}else w=jc(u,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||qc(p,d),w=E_(c,a,p,d==="in"||d==="not-in");return gt.create(f,d,w)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Po extends Ro{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Po(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Gt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const c=i.getFlattenedFilters();for(const u of c)nh(a,u),a=Ri(a,u)}(t._query,e),new Fe(t.firestore,t.converter,Ri(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Co extends eh{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new Co(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new L(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new tr(i,a)}(t._query,this._field,this._direction);return new Fe(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new dn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function P_(n,t="asc"){const e=t,r=bo("orderBy",n);return Co._create(r,e)}function jc(n,t,e){if(typeof(e=tn(e))=="string"){if(e==="")throw new L(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!iu(t)&&e.indexOf("/")!==-1)throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ct.fromString(e));if(!B.isDocumentKey(r))throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return lc(n,new B(r))}if(e instanceof Bt)return lc(n,e._key);throw new L(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${_s(e)}.`)}function qc(n,t){if(!Array.isArray(n)||n.length===0)throw new L(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function nh(n,t){const e=function(s,i){for(const a of s)for(const c of a.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new L(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class C_{convertValue(t,e="none"){switch(Le(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ft(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(Oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw z()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return ir(t,(s,i)=>{r[s]=this.convertValue(i,e)}),r}convertVectorValue(t){var e,r,s;const i=(s=(r=(e=t.fields)===null||e===void 0?void 0:e.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>ft(a.doubleValue));return new Ao(i)}convertGeoPoint(t){return new wo(ft(t.latitude),ft(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Zi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Xn(t));default:return null}}convertTimestamp(t){const e=Ee(t);return new yt(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ct.fromString(t);ht(Ru(r));const s=new Yn(r.get(1),r.get(3)),i=new B(r.popFirst(5));return s.isEqual(e)||ie(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class rh extends th{constructor(t,e,r,s,i,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(bo("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class $r extends rh{data(t={}){return super.data(t)}}class V_{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Fn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new $r(this._firestore,this._userDataWriter,r.key,r,new Fn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new L(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new $r(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new $r(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Fn(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:D_(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function D_(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(n){n=er(n,Bt);const t=er(n.firestore,Eo);return h_(Wu(t),n._key).then(e=>k_(t,n,e))}class sh extends C_{constructor(t){super(),this.firestore=t}convertBytes(t){return new ln(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Bt(this.firestore,null,e)}}function x_(n){n=er(n,Fe);const t=er(n.firestore,Eo),e=Wu(t),r=new sh(t);return R_(n._query),f_(e,n._query).then(s=>new V_(t,r,n,s))}function k_(n,t,e){const r=e.docs.get(t._key),s=new sh(n);return new rh(n,s,t._key,r,new Fn(e.hasPendingWrites,e.fromCache),t.converter)}(function(t,e=!0){(function(s){fn=s})($l),Gn(new en("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new Eo(new Xm(r.getProvider("auth-internal")),new eg(r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new L(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yn(f.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),ge(sc,"4.7.3",t),ge(sc,"4.7.3","esm2017")})();const N_={apiKey:"AIzaSyBCJHuyfxU_BHggJEskweu3abbIUaNJeOo",authDomain:"my-portfolio-34f74.firebaseapp.com",projectId:"my-portfolio-34f74",storageBucket:"my-portfolio-34f74.appspot.com",messagingSenderId:"873309696890",appId:"1:873309696890:web:a34ffb1e11eb06b94c1cc3"},O_=Gi(N_);Gu(O_);var L_=lt('<button class="m-4 font-sans text-xl">');function Dn(n){return F(Ki,{get href(){return n.href},class:"text-slate-300 bg-zinc-900 hover:text-slate-400 hover:bg-zinc-800",get children(){var t=L_();return G(t,()=>n.text),t}})}var M_=lt('<div class="bg-zinc-900 flex justify-center items-center min-h-[10vh]">');function F_(n){return(()=>{var t=M_();return G(t,F(Dn,{text:"Home",href:"/"}),null),G(t,F(Dn,{text:"About Me",href:"/about-me"}),null),G(t,F(Dn,{text:"CV",href:"/cv"}),null),G(t,F(Dn,{text:"Projects",href:"/projects"}),null),G(t,F(Dn,{text:"Contacts",href:"/contacts"}),null),t})()}var $_=lt("<header class=min-h-[10vh]>"),U_=lt('<div class="bg-zinc-800 text-slate-300 min-h-[80vh]">'),B_=lt(`<footer class="bg-zinc-950 text-slate-300 min-h-[10vh]"><p class="size-full text-center">Don't lose hope!`);function j_(n){return[(()=>{var t=$_();return G(t,F(F_,{})),t})(),(()=>{var t=U_();return G(t,()=>n.children),t})(),B_()]}const q_={"images.ctfassets.net":"contentful","cdn.builder.io":"builder.io","images.prismic.io":"imgix","www.datocms-assets.com":"imgix","cdn.sanity.io":"imgix","images.unsplash.com":"imgix","cdn.shopify.com":"shopify","s7d1.scene7.com":"scene7","ip.keycdn.com":"keycdn","assets.caisy.io":"bunny","images.contentstack.io":"contentstack","ucarecdn.com":"uploadcare"},z_={"imgix.net":"imgix","files.wordpress.com":"wordpress","b-cdn.net":"bunny","storyblok.com":"storyblok","kc-usercontent.com":"kontent.ai","cloudinary.com":"cloudinary","kxcdn.com":"keycdn","imgeng.in":"imageengine","imagekit.io":"imagekit","cloudimg.io":"cloudimage","ucarecdn.com":"uploadcare","supabase.co":"supabase"},K_={"/cdn-cgi/image/":"cloudflare","/cdn-cgi/imagedelivery/":"cloudflare_images","/_next/image":"nextjs","/_next/static":"nextjs","/_vercel/image":"vercel","/is/image":"scene7","/_ipx/":"ipx","/_image":"astro","/.netlify/images":"netlify","/storage/v1/object/public/":"supabase","/storage/v1/render/image/public/":"supabase"},Ze=n=>{if(!n)return n;const t=Number(n);return isNaN(t)?n:Math.round(t)},j=(n,t,e,r,s)=>{e?(s&&(e=Ze(e)),n.searchParams.set(t,e.toString())):r&&n.searchParams.delete(t)},Mt=(n,t,e)=>{n.searchParams.has(t)||n.searchParams.set(t,e.toString())},nr=(n,t)=>{const e=Number(n.searchParams.get(t));return isNaN(e)?void 0:e},ih=n=>{const{pathname:t,search:e}=n;return`${t}${e}`},Do=n=>n.hostname==="n"?ih(n):n.toString(),st=(n,t)=>typeof n=="string"?new URL(n,t??"http://n/"):n,zc=new Map(Object.entries(q_)),H_=Object.entries(z_);function Q_(n){return oh(n)||G_(n)}function oh(n){if(typeof n=="string"&&!n.startsWith("https://"))return!1;const{hostname:t}=st(n);if(zc.has(t))return zc.get(t);for(const[e,r]of H_)if(t.endsWith(`.${e}`))return r;return!1}function G_(n){const{pathname:t}=st(n);for(const[e,r]of Object.entries(K_))if(t.startsWith(e))return r;return!1}const W_=({url:n,width:t,height:e,format:r})=>{const s=st(n);return t&&t>4e3&&(e&&(e=Math.round(e*4e3/t)),t=4e3),e&&e>4e3&&(t&&(t=Math.round(t*4e3/e)),e=4e3),j(s,"w",t,!0,!0),j(s,"h",e,!0,!0),j(s,"fm",r),Mt(s,"fit","fill"),s},J_=({url:n,width:t,height:e,format:r})=>{const s=st(n);return j(s,"width",t,!0,!0),j(s,"height",e,!0,!0),j(s,"format",r),t&&e&&(Mt(s,"fit","cover"),Mt(s,"sharp","true")),s},X_=({url:n,width:t,height:e,format:r})=>{const s=st(n);if(j(s,"w",t,!0,!0),j(s,"h",e,!0,!0),Mt(s,"fit","min"),r){s.searchParams.set("fm",r);const i=s.searchParams.get("auto");i==="format"?s.searchParams.delete("auto"):i?.includes("format")&&s.searchParams.set("auto",i.split(",").filter(a=>a!=="format").join(","))}else s.searchParams.delete("fm"),s.searchParams.get("auto")?.includes("format")||s.searchParams.append("auto","format");return s},Y_=/(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,Z_=n=>{const t=st(n),e=t.pathname.match(Y_);if(!e)throw new Error("Invalid Shopify URL");const[,r,s,i,a,c,u,f]=e;t.pathname=`${r}${u}`;const d=i||t.searchParams.get("width"),p=a||t.searchParams.get("height");return t.searchParams.delete("width"),t.searchParams.delete("height"),{base:t.toString(),width:Number(d)||void 0,height:Number(p)||void 0,format:f?f.slice(1):void 0,params:{crop:c,size:s},cdn:"shopify"}},ty=({base:n,width:t,height:e,format:r,params:s})=>{const i=st(n);return j(i,"width",t,!0,!0),j(i,"height",e,!0,!0),j(i,"crop",s?.crop),j(i,"format",r),i},ey=({url:n,width:t,height:e})=>{const r=Z_(n);if(!r)return;const s={...r,width:t,height:e};return ty(s)},ny=({url:n,width:t,height:e})=>{const r=st(n);return j(r,"w",t,!0,!0),j(r,"h",e,!0,!0),Mt(r,"crop","1"),r},ry=({url:n,width:t,height:e})=>{const r=st(n);return j(r,"w",t,!0,!0),j(r,"h",e,!0,!0),j(r,"q",nr(r,"q"),!0),r},sy=/https?:\/\/(?<host>[^\/]+)\/(?<cloudName>[^\/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g,iy=n=>n?Object.fromEntries(n.split(",").map(t=>t.split("_"))):{},ah=({host:n,cloudName:t,assetType:e,deliveryType:r,signature:s,transformations:i={},version:a,id:c,format:u})=>{u&&(i.f=u);const f=Object.entries(i).map(([p,w])=>`${p}_${w}`).join(",");return`https://${[n,t,e,r,s,f,a,c].filter(Boolean).join("/")}`},ch=n=>{const e=[...st(n).toString().matchAll(sy)];if(!e.length)throw new Error("Invalid Cloudinary URL");const r=e[0].groups||{},{transformations:s="",idAndFormat:i,...a}=r;delete r.idAndFormat;const c=i.lastIndexOf("."),u=c<0?i:i.slice(0,c),f=c<0?void 0:i.slice(c+1),{w:d,h:p,f:w,...b}=iy(s),P=w&&w!=="auto"?w:f;return{base:ah({...a,id:u,transformations:b}),width:Number(d)||void 0,height:Number(p)||void 0,format:P,cdn:"cloudinary",params:{...r,id:r.deliveryType==="fetch"?i:u,format:P,transformations:b}}},oy=({base:n,width:t,height:e,format:r,params:s})=>{const i=ch(n.toString()),a={transformations:{},...i.params,...s,format:r||"auto"};return t&&(a.transformations.w=Ze(t).toString()),e&&(a.transformations.h=Ze(e).toString()),a.transformations.c||="lfill",ah(a)},ay=({url:n,width:t,height:e,format:r="auto"})=>{const s=ch(n);if(!s)throw new Error("Invalid Cloudinary URL");if(s.params?.assetType!=="image")throw new Error("Cloudinary transformer only supports images");if(s.params?.signature)throw new Error("Cloudinary transformer does not support signed URLs");const i={...s,width:t,height:e,format:r};return oy(i)},cy=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/image\/(?<transformations>[^\/]+)?\/(?<path>.*)$/g,ly=n=>Object.fromEntries(n.split(",").map(t=>t.split("="))),lh=({host:n,transformations:t={},path:e})=>{const r=Object.entries(t).map(([i,a])=>`${i}=${a}`).join(",");return`https://${[n,"cdn-cgi","image",r,e].join("/")}`},uh=n=>{const t=st(n),e=[...t.toString().matchAll(cy)];if(!e.length)throw new Error("Invalid Cloudflare URL");const r=e[0].groups||{},{transformations:s,...i}=r,{width:a,height:c,f:u,...f}=ly(s);return lh({...i,transformations:f}),{base:t.toString(),width:Number(a)||void 0,height:Number(c)||void 0,format:u,cdn:"cloudflare",params:{...r,transformations:f}}},uy=({base:n,width:t,height:e,format:r,params:s})=>{const i=uh(n.toString()),a={transformations:{},...i.params,...s};return t&&(a.transformations.width=t?.toString()),e&&(a.transformations.height=e?.toString()),r&&(a.transformations.f=r==="jpg"?"jpeg":r),a.transformations.fit||="cover",new URL(lh(a))},hy=({url:n,width:t,height:e,format:r="auto"})=>{const s=uh(n);if(!s)throw new Error("Invalid Cloudflare URL");const i={...s,width:t,height:e,format:r};return uy(i)},fy=({url:n,width:t,height:e})=>{const r=st(n);return j(r,"width",t,!0,!0),t&&e&&Mt(r,"aspect_ratio",`${t}:${e}`),r},dy=/(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/g,my=/^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/g,gy=n=>n?Object.fromEntries(n.split(":").map(t=>{if(!t)return[];const[e,r]=t.split("(");return[e,r.replace(")","")]})):{},py=n=>{if(!n)return;const t=Object.entries(n).map(([e,r])=>`${e}(${r??""})`);if(t.length!==0)return`filters:${t.join(":")}`},_y=n=>{const t=st(n),e=t.hostname==="img2.storyblok.com"?my:dy,[r]=t.pathname.matchAll(e);if(!r||!r.groups)throw new Error("Invalid Storyblok URL");const{id:s,crop:i,width:a,height:c,filters:u,flipx:f,flipy:d}=r.groups,{format:p,...w}=gy(u);return t.hostname==="img2.storyblok.com"&&(t.hostname="a.storyblok.com"),{base:t.origin+s,width:Number(a)||void 0,height:Number(c)||void 0,format:p,params:{crop:i,filters:w,flipx:f,flipy:d},cdn:"storyblok"}},yy=({base:n,width:t=0,height:e=0,format:r,params:s={}})=>{const{crop:i,filters:a,flipx:c="",flipy:u=""}=s,f=`${c}${t}x${u}${e}`;return new URL([n,"m",i,f,py(a),r].filter(Boolean).join("/"))},vy=({url:n,width:t,height:e,format:r})=>{const s=_y(n);if(s)return r&&(s.params||(s.params={filters:{}}),s.params.filters||(s.params.filters={}),s.params.filters.format=r),yy({...s,width:t,height:e})},Ey=({url:n,width:t,height:e,format:r})=>{const s=st(n);return j(s,"w",t,!0,!0),j(s,"h",e,!0,!0),j(s,"fm",r,!0),t&&e&&Mt(s,"fit","crop"),s},Kc=n=>{const e=st(n).searchParams.get("url");if(!e||!e.startsWith("http"))return!1;const r=oh(e);return r?{cdn:r,url:e}:!1},wy=({base:n,width:t,params:{quality:e=75,root:r="_vercel"}={}})=>{const s=new URL("http://n");return s.pathname=`/${r}/image`,s.searchParams.set("url",n.toString()),j(s,"w",t,!1,!0),Mt(s,"q",e),ih(s)},hh=({url:n,width:t,cdn:e})=>{const r=st(n),s=r.pathname.startsWith("/_next/image")||r.pathname.startsWith("/_vercel/image"),i=s?r.searchParams.get("url"):n.toString();if(i)return j(r,"w",t,!0,!0),s?Do(r):wy({base:i,width:t,params:{root:e==="nextjs"?"_next":"_vercel"}})},Ay=n=>hh({...n,cdn:"nextjs"}),Ty=({url:n,width:t,height:e,format:r})=>{const s=st(n);return j(s,"wid",t,!0,!0),j(s,"hei",e,!0,!0),j(s,"fmt",r,!0),j(s,"qlt",nr(s,"qlt"),!0),j(s,"scl",nr(s,"scl"),!0),Mt(s,"fit","crop"),!t&&!e&&Mt(s,"scl",1),s},Iy=({url:n,width:t,height:e,format:r})=>{const s=st(n);return j(s,"width",t,!0,!0),j(s,"height",e,!0,!0),j(s,"format",r,!0),j(s,"quality",nr(s,"quality"),!0),Mt(s,"enlarge",0),s},by=({url:n,width:t,height:e,format:r})=>{const s=st(n);return j(s,"width",t,!0,!0),j(s,"height",e,!0,!0),j(s,"format",r),j(s,"quality",nr(s,"quality"),!0),s},Fi={width:"w",height:"h",autoWidthWithFallback:"w_auto",auto_width_fallback:"w_auto",scaleToScreenWidth:"pc",scale_to_screen_width:"pc",crop:"cr",outputFormat:"f",format:"f",fit:"m",fitMethod:"m",compression:"cmpr",sharpness:"s",rotate:"r",inline:"in",keepMeta:"meta",keep_meta:"meta",noOptimization:"pass",no_optimization:"pass",force_download:"dl",max_device_pixel_ratio:"maxdpr",maxDevicePixelRatio:"maxdpr"};function Ry(n){return Object.keys(Fi).find(r=>Fi[r]===n)||""}function Sy(n){let t=n.toString(),e=[];if(t){let r=t.split("imgeng=");r.length>1&&(e=r[1].split("/"))}return e}function Py(n){let t=n.toString(),e="";if(t){let r=t.split("imgeng=");r.length>1?e=r[0].slice(0,-1):e=t}return e}const Cy=({url:n,width:t,height:e,format:r})=>{const s=st(n),i=Py(s);let a={};const c=s.toString()===i?[]:Sy(s);c.length&&(a=ky(c)),t&&(a.width=t),e&&(a.height=e),r&&(a.format=r),a.hasOwnProperty("fit")||(a={...a,fit:"cropbox"});let u=Vy(a),f=Dy(u),d=f===""?"":i.includes("?")?"&":"?";return`${i}${d}${f}`};function Vy(n){return Object.entries(n).reduce((t,[e,r])=>t+xy(e,r),"")}function Dy(n){return n&&n!==""?`imgeng=${n}`:""}function xy(n,t){let e=Fi[n];return e&&(t||t===0)?`/${e}_${t}`:""}function ky(n){let t={};return n.forEach(e=>{let r=e.split("_");if(r.length>1){let s=r[0],i=r[1],a=Ry(s);a&&(t[a]=i)}}),t}const Ny=({url:n,width:t,height:e,format:r})=>{const s=st(n);return j(s,"width",t,!0,!0),j(s,"height",e,!0,!0),j(s,"format",r),s.searchParams.has("format")||Mt(s,"auto","webp"),t&&e&&Mt(s,"fit","crop"),s},Oy=/https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g,Ly=n=>Object.fromEntries(n?.split(",")?.map(t=>t.split("="))??[]),My=({host:n,accountHash:t,transformations:e={},imageId:r})=>{const s=Object.entries(e).map(([a,c])=>`${a}=${c}`).join(",");return`https://${[n,"cdn-cgi","imagedelivery",t,r,s].join("/")}`},fh=n=>{const t=st(n),e=[...t.toString().matchAll(Oy)];if(!e.length)throw new Error("Invalid Cloudflare Images URL");const r=e[0].groups||{},{transformations:s,...i}=r,{w:a,h:c,f:u,...f}=Ly(s);return{base:t.toString(),width:Number(a)||void 0,height:Number(c)||void 0,format:u,cdn:"cloudflare_images",params:{...i,transformations:f}}},Fy=({base:n,width:t,height:e,format:r,params:s})=>{const i=fh(n.toString()),a={transformations:{},...i.params,...s};return t&&(a.transformations.w=t?.toString()),e&&(a.transformations.h=e?.toString()),r&&(a.transformations.f=r),a.transformations.fit||="cover",new URL(My(a))},$y=({url:n,width:t,height:e,format:r="auto"})=>{const s=fh(n);if(!s)throw new Error("Invalid Cloudflare Images URL");const i={...s,width:t,height:e,format:r};return Fy(i)},Uy=n=>{const t=st(n),[e,...r]=t.pathname.split("/").slice(1),s=Object.fromEntries(e.split(",").map(i=>{const[a,c]=i.split("_");return[a,c]}));if(s.s){const[i,a]=s.s.split("x");s.w||=i,s.h||=a}return{base:r.join("/"),width:Number(s.w)||void 0,height:Number(s.h)||void 0,quality:Number(s.q)||void 0,format:s.f||"auto",params:s,cdn:"ipx"}},Hc=({base:n,width:t,height:e,format:r,params:s})=>{const i=s?.modifiers??{};t&&e?i.s=`${t}x${e}`:t?i.w=`${t}`:e&&(i.h=`${e}`),r&&(i.f=r);const a=s?.base.endsWith("/")?s?.base:`${s?.base}/`,c=Object.entries(i).map(([d,p])=>`${d}_${p}`).join(","),u=n.toString(),f=u.startsWith("/")?u.slice(1):u;return`${a}${c}/${f}`},By=n=>{const t=String(n.url),e=st(t),r=e.pathname.startsWith("/_ipx")&&e.hostname!=="n"?`${e.origin}/_ipx`:"/_ipx",s=n.cdnOptions?.ipx?.base??r;if(s&&s!=="/"&&t.startsWith(s)){const a=Uy(t.replace(s,""));return Hc({...a,...n,params:{...n.cdnOptions?.ipx,base:s}})}return Hc({...n,base:t,params:{...n.cdnOptions?.ipx,base:s}})},jy=({url:n,width:t,height:e,format:r})=>{const s=st(n),i=Do(new URL(s.pathname,s.origin)),a={searchParams:new URLSearchParams};return j(a,"href",i,!0,!0),j(a,"w",t,!0,!0),j(a,"h",e,!0,!0),j(a,"f",r),`/_image?${a.searchParams.toString()}`},qy=new Set(["w","h","q","fm","url","width","height","quality"]),zy=n=>{const t=st(n),e=Number(t.searchParams.get("w")??t.searchParams.get("width"))??void 0,r=Number(t.searchParams.get("h")??t.searchParams.get("height"))??void 0,s=Number(t.searchParams.get("q")??t.searchParams.get("quality"))||void 0,i=t.searchParams.get("fm")||void 0,a=t.searchParams.get("url")||"",c={quality:s};return t.searchParams.forEach((u,f)=>{qy.has(f)||(c[f]=u)}),t.search="",{base:a,width:e,height:r,format:i,params:c,cdn:"netlify"}},Qc=({base:n,width:t,height:e,format:r,params:{site:s,quality:i,...a}={}})=>{const c=st("/.netlify/images",s);return Object.entries(a).forEach(([u,f])=>j(c,u,f)),j(c,"q",i,!0,!0),j(c,"w",t,!0,!0),j(c,"h",e,!0,!0),j(c,"fm",r),Mt(c,"fit","cover"),c.searchParams.set("url",n.toString()),Do(c)},Ky=n=>{const t=st(n.url);if(t.pathname.startsWith("/.netlify/images")){const{params:e,base:r,format:s}=zy(t);return Qc({base:r,format:s,...n,params:{...e,site:t.hostname==="n"?void 0:t.origin}})}return Qc({...n,base:n.url,params:{site:n.cdnOptions?.netlify?.site}})},Hy=n=>(n.searchParams.get("tr")||"").split(",").reduce((e,r)=>{const[s,i]=r.split("-");return e[s]=i,e},{}),Qy=({url:n,width:t,height:e,format:r})=>{const s=st(n),i=Hy(s);i.w=t&&Math.round(t),i.h=e&&Math.round(e),i.f||(i.f="auto"),r&&(i.f=r);const a=Object.keys(i).map(c=>{const u=i[c];if(u)return`${c}-${u}`}).filter(c=>c).join(",");return s.searchParams.set("tr",a),s},Gy=/^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)/g;function dh(n){const t=new URL(n),e=t.pathname+t.search+t.hash,r=e.lastIndexOf("http"),s=e.lastIndexOf("/");let i="";return r>=0?i=e.slice(r):s>=0&&(i=e.slice(s+1)),i}function Wy(n){return n.startsWith("http")}function Jy(n){const t=new URL(n);return{pathname:t.origin+t.pathname||"",search:t.search||"",hash:t.hash||""}}function Xy(n){const t=new URL(n),e=dh(n),r=Wy(e)?Jy(e).pathname:e;return t.pathname=t.pathname.replace(r,""),t.search="",t.hash="",t.toString()}const Yy=n=>{if(typeof n!="string"||!n)return"";let t=n.trim();return t.startsWith("-/")?t=t.slice(2):t.startsWith("/")&&(t=t.slice(1)),t.endsWith("/")&&(t=t.slice(0,t.length-1)),t};function Zy(n){const t=Xy(n),e=new URL(t),r=e.pathname.indexOf("/-/");return r===-1?[]:e.pathname.substring(r).split("/-/").filter(Boolean).map(i=>Yy(i))}const t0=n=>n.length?n.reduce((t,e)=>{const[r,s]=e.split("/");return{...t,[r]:s}},{}):{},mh=({host:n,uuid:t,operations:e={},filename:r})=>{const s=Object.entries(e).map(([a,c])=>`${a}/${c}`).join("/-/");return`https://${[n,t,s?`-/${s}`:"",r].join("/")}`},gh=n=>{const t=st(n),e=[...t.toString().matchAll(Gy)];if(!e.length)throw new Error("Invalid Uploadcare URL");const r=e[0].groups||{},{...s}=r,i=dh(t.toString()),{format:a,...c}=t0(Zy(t.toString())),u=a&&a!=="auto"?a:"auto";return{base:mh({...s,filename:i||void 0,operations:{...c,format:u}}),cdn:"uploadcare",params:{...r,filename:i||void 0,operations:{...c,format:u}}}},e0=({base:n,width:t,height:e,params:r})=>{const s=n.toString(),i=gh(s.endsWith("/")?s:`${s}/`),a={operations:{},...i.params,...r};return t&&e?a.operations={...a.operations,resize:`${t}x${e}`}:(t&&(a.operations={...a.operations,resize:`${t}x`}),e&&(a.operations={...a.operations,resize:`x${e}`})),mh(a)},n0=({url:n,width:t,height:e})=>{const r=gh(n);if(!r)throw new Error("Invalid Uploadcare URL");const s={...r,width:t,height:e};return e0(s)},r0=["origin"],ph="/storage/v1/object/public/",xo="/storage/v1/render/image/public/",s0=n=>n.pathname.startsWith(xo),_h=n=>{const t=st(n);if(!s0(t))return{cdn:"supabase",base:t.origin+t.pathname};const r=t.pathname.replace(xo,""),s=t.searchParams.has("quality")?Number(t.searchParams.get("quality")):void 0,i=t.searchParams.has("width")?Number(t.searchParams.get("width")):void 0,a=t.searchParams.has("height")?Number(t.searchParams.get("height")):void 0,c=t.searchParams.has("format")?t.searchParams.get("format"):void 0,u=t.searchParams.has("resize")?t.searchParams.get("resize"):void 0;return{cdn:"supabase",base:t.origin+ph+r,width:i,height:a,format:c,params:{quality:s,resize:u}}},i0=({base:n,width:t,height:e,format:r,params:s})=>{const i=_h(n.toString());n=i.base,t=t||i.width,e=e||i.height,r=r||i.format,s={...i.params,...s};const a=new URLSearchParams;return t&&a.set("width",Ze(t).toString()),e&&a.set("height",Ze(e).toString()),r&&r0.includes(r)&&a.set("format",r),s?.quality&&a.set("quality",Ze(s.quality).toString()),s?.resize&&a.set("resize",s.resize),a.toString()===""?n:i.base.replace(ph,xo)+"?"+a.toString()},o0=({url:n,width:t,height:e,format:r,cdnOptions:s})=>{const i=_h(n);return i0({base:i.base,width:t||i.width,height:e||i.height,format:r||i.format,params:s?.supabase||i.params})},Gc={vercel:Kc,nextjs:Kc};function a0(n,t){if(!(t in Gc))return!1;const e=Gc[t];return e?e(n):!1}function ko(n,t){const e=Q_(n)||t;if(!e)return!1;const r=a0(n,e);return r||{cdn:e,url:n}}const No=n=>({imgix:X_,contentful:W_,"builder.io":J_,shopify:ey,wordpress:ny,cloudimage:ry,cloudinary:ay,bunny:fy,storyblok:vy,cloudflare:hy,vercel:hh,nextjs:Ay,scene7:Ty,"kontent.ai":Ey,keycdn:Iy,directus:by,imageengine:Cy,contentstack:Ny,cloudflare_images:$y,ipx:By,astro:jy,netlify:Ky,imagekit:Qy,uploadcare:n0,supabase:o0})[n];var c0=(n,t)=>{if(!(!n||!t))switch(t){case"constrained":return`(min-width: ${n}px) ${n}px, 100vw`;case"fixed":return`${n}px`;case"fullWidth":return"100vw";default:return}},xn=n=>n||n===0?`${n}px`:void 0,l0=({width:n,height:t,aspectRatio:e,layout:r,objectFit:s="cover",background:i})=>{const a=[["object-fit",s]];return i?.startsWith("https:")||i?.startsWith("http:")||i?.startsWith("data:")?(a.push(["background-image",`url(${i})`]),a.push(["background-size","cover"]),a.push(["background-repeat","no-repeat"])):a.push(["background",i]),r==="fixed"&&(a.push(["width",xn(n)]),a.push(["height",xn(t)])),r==="constrained"&&(a.push(["max-width",xn(n)]),a.push(["max-height",xn(t)]),a.push(["aspect-ratio",e?`${e}`:void 0]),a.push(["width","100%"])),r==="fullWidth"&&(a.push(["width","100%"]),a.push(["aspect-ratio",e?`${e}`:void 0]),a.push(["height",xn(t)])),Object.fromEntries(a.filter(([,c])=>c))},u0=[6016,5120,4480,3840,3200,2560,2048,1920,1668,1280,1080,960,828,750,640],Wc=24,h0=({width:n,layout:t,resolutions:e=u0})=>{if(t==="fullWidth")return e;if(!n)return[];const r=n*2;return t==="fixed"?[n,r]:t==="constrained"?[n,r,...e.filter(s=>s<r)]:[]},f0=({src:n,width:t,layout:e="constrained",height:r,aspectRatio:s,breakpoints:i,cdn:a,transformer:c,format:u})=>{const f=ko(n,a);return f&&!c&&(c=No(f.cdn)),c?(i||=h0({width:t,layout:e}),i.sort((d,p)=>d-p).map(d=>{let p;return r&&s&&(p=Math.round(d/s)),{url:f?f.url:n,width:d,height:p,format:u}})):[]},d0=n=>{let{src:t,cdn:e,transformer:r}=n;const s=ko(t,e);return s&&!r&&(r=No(s.cdn)),r?f0({...n,transformer:r}).map(i=>`${r(i)?.toString()} ${i.width}w`).join(`,
`):""};function m0({width:n,height:t,priority:e,layout:r="constrained",aspectRatio:s,...i}){return n=n&&Number(n)||void 0,t=t&&Number(t)||void 0,e?(i.loading||="eager",i.fetchpriority||="high"):(i.loading||="lazy",i.decoding||="async"),i.alt===""&&(i.role||="presentation"),s?n?t||(t=Math.round(n/s)):t&&(n=Math.round(t*s)):n&&t&&(s=n/t),{width:n,height:t,aspectRatio:s,layout:r,...i}}function g0(n){let{src:t,cdn:e,transformer:r,background:s,layout:i,objectFit:a,breakpoints:c,width:u,height:f,aspectRatio:d,unstyled:p,...w}=m0(n);const b=t?ko(t,e):void 0;let P=t;if(b&&(P=b.url,r||=No(b.cdn)),r&&s==="auto"){const S=d?Math.round(Wc/d):void 0,N=r({url:P,width:Wc,height:S});N&&(s=N.toString())}const C={width:u,height:f,aspectRatio:d,layout:i,objectFit:a,background:s};if(w.sizes||=c0(u,i),p||(w.style={...l0(C),...w.style}),r){w.srcset=d0({src:P,width:u,height:f,aspectRatio:d,layout:i,breakpoints:c,transformer:r,cdn:e});const S=r({url:P,width:u,height:f});S&&(P=S),(i==="fullWidth"||i==="constrained")&&(u=void 0,f=void 0)}return{...w,src:P?.toString(),width:u,height:f}}var p0=lt("<img>");function vs(n){return(()=>{var t=p0();return pl(t,qr(()=>g0(n)),!1),t})()}var _0=lt('<button class="rounded-full outline outline-4 outline-zinc-900 bg-zinc-200 drop-shadow-lg">');function yh(n){return(()=>{var t=_0();return G(t,F(vs,{get src(){return n.img},layout:"constrained",width:200,height:200,class:"rounded-full"})),t})()}var y0=lt('<button class="transition-all ease-in delay-100 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-950">');function zt(n){return F(Ki,{target:"_blank",get href(){return n.href},get children(){var t=y0();return G(t,F(vs,{get src(){return n.img},layout:"constrained",width:48,height:48,class:"transition-all ease-in delay-100 bg-transparent p-0 hover:p-0.5"})),t}})}const vh="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAyAAAAMgAgMAAACmHu77AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAMUExURQCU/wAAAP///wBQi40UDxkAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAK8SURBVHja7dwxLkVhFIXR16hV5qVwIzEE8zEEBfPTSUh4zZbr4TnHPVir3yf5+j//DgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHOyVLjYbU6IkCZChDQRIqSJECFNhAhpIkRIEyFCmggR0kSIkGpZcHV/nJvte4QIaSJESBMhQpoIEdJEiJAmQoQ0ESKkiRAhTYQImVmQ7rboESJEiBAhQoQIESJEiBAhQoQIESJEiBAhb0NWC26Xz7o+0CNEiBAhQoQIESJEiBAhQoQIESJEiBAhQkaEZMH5x/PVHiFHERJzIXWExFxIHSExF1JHSMyF1BEScyF1hMRcSB0hMRdSR0jMhdQREvPhIeefvnK2vE/I1wgJQuoICULqCAlC6ggJQuoICULqCAlC6ggJQuoICULqCAl/JmQAIdMImUbINEKmETKNkGmETCNkGiHTCJlGyDRCphEyjZBphEwjZBoh0wiZRsg0QqYRMo2QaYRMI2QaIdMImUbINN79BiF1hAQhdYQEIXWEBCF1hAQhdYQEIXWEBCF1hAQhdYQEIXX+Rcjycc/v+O9XiJBvEBJzIXWExFxIHSExF1JHSMyF1BEScyF1hMRcSB0hMRdSR0jMhdRZDVntOeR6bS5EiBAhQoQIESJEiBAhQoQIESJEiBAhQrYNWQ70fNld3BQiRIgQIUKECBEiRIgQIUKECBEiRIgQIT8dcvr04qGk5yauXL6efhQiRIgQIUKECBEiRIgQIUKECBEiRIgQIT8ccqjnWJdbFOwJEdJEiJAmQoQ0ESKkiRAhTYQIaSJESBMhQpoIEdJr3/NNWxbsCRHSRIiQJkKENBEipIkQIU2ECGkiREgTIUKaCBECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBft9s9A1t8k3iyUTL7AAAAAElFTkSuQmCC",Oo="data:image/svg+xml,%3csvg%20width='98'%20height='96'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M48.854%200C21.839%200%200%2022%200%2049.217c0%2021.756%2013.993%2040.172%2033.405%2046.69%202.427.49%203.316-1.059%203.316-2.362%200-1.141-.08-5.052-.08-9.127-13.59%202.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015%204.934.326%207.523%205.052%207.523%205.052%204.367%207.496%2011.404%205.378%2014.235%204.074.404-3.178%201.699-5.378%203.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283%200-5.378%201.94-9.778%205.014-13.2-.485-1.222-2.184-6.275.486-13.038%200%200%204.125-1.304%2013.426%205.052a46.97%2046.97%200%200%201%2012.214-1.63c4.125%200%208.33.571%2012.213%201.63%209.302-6.356%2013.427-5.052%2013.427-5.052%202.67%206.763.97%2011.816.485%2013.038%203.155%203.422%205.015%207.822%205.015%2013.2%200%2018.905-11.404%2023.06-22.324%2024.283%201.78%201.548%203.316%204.481%203.316%209.126%200%206.6-.08%2011.897-.08%2013.526%200%201.304.89%202.853%203.316%202.364%2019.412-6.52%2033.405-24.935%2033.405-46.691C97.707%2022%2075.788%200%2048.854%200z'%20fill='%23fff'/%3e%3c/svg%3e";var v0=lt('<div class="p-10 font-sans text-slate-300 flex flex-col justify-center gap-2"><div class="grow-0 flex justify-center"></div><h1 class="self-center text-lg font-semibold">Hello!</h1><p class=self-center>Welcome to my portfolio!</p><div class=self-center>');function E0(n){return(()=>{var t=v0(),e=t.firstChild,r=e.nextSibling,s=r.nextSibling,i=s.nextSibling;return G(e,F(yh,{img:vh})),G(i,F(zt,{href:"https://github.com/CDevv",img:Oo})),t})()}const Eh="/assets/csharp-C4lM2VwR.png",wh="data:image/svg+xml,%3csvg%20height='1024'%20width='1024'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='m0%200s-.325%201.994-.515%201.976l-36.182-3.491c-2.879-.278-5.115-2.574-5.317-5.459l-.994-14.247L-71-23.218l-1.904%2012.912c-.424%202.872-2.932%205.037-5.835%205.037h-38.188c-2.902.0-5.41-2.165-5.834-5.037l-1.905-12.912-27.992%201.997-.994%2014.247c-.202%202.886-2.438%205.182-5.317%205.46l-36.2%203.49c-.187.018-.324-1.978-.511-1.978l-.049-7.83%2030.658-4.944%201.004-14.374c.203-2.91%202.551-5.263%205.463-5.472l38.551-2.75c.146-.01.29-.016.434-.016%202.897.0%205.401%202.166%205.825%205.038l1.959%2013.286h28.005l1.959-13.286c.423-2.871%202.93-5.037%205.831-5.037.142.0.284.005.423.015l38.556%202.75c2.911.209%205.26%202.562%205.463%205.472l1.003%2014.374%2030.645%204.966z'%20fill='%23fff'%20transform='matrix(4.162611%200%200%20-4.162611%20919.24059%20673.152141)'/%3e%3cpath%20d='m0%200v-47.514-6.035-5.492c.108-.001.216-.005.323-.015l36.196-3.49c1.896-.183%203.382-1.709%203.514-3.609l1.116-15.978%2031.574-2.253%202.175%2014.747c.282%201.912%201.922%203.329%203.856%203.329h38.188c1.933.0%203.573-1.417%203.855-3.329l2.175-14.747%2031.575%202.253%201.115%2015.978c.133%201.9%201.618%203.425%203.514%203.609l36.182%203.49c.107.01.214.014.322.015v4.711l.015.005v54.325c5.09692%206.4164715%209.92323%2013.494208%2013.621%2019.449-5.651%209.62-12.575%2018.217-19.976%2026.182-6.864-3.455-13.531-7.369-19.828-11.534-3.151%203.132-6.7%205.694-10.186%208.372-3.425%202.751-7.285%204.768-10.946%207.118%201.09%208.117%201.629%2016.108%201.846%2024.448-9.446%204.754-19.519%207.906-29.708%2010.17-4.068-6.837-7.788-14.241-11.028-21.479-3.842.642-7.702.88-11.567.926v.006c-.027.0-.052-.006-.075-.006-.024.0-.049.006-.073.006v-.006c-3.872-.046-7.729-.284-11.572-.926-3.238%207.238-6.956%2014.642-11.03%2021.479-10.184-2.264-20.258-5.416-29.703-10.17.216-8.34.755-16.331%201.848-24.448-3.668-2.35-7.523-4.367-10.949-7.118-3.481-2.678-7.036-5.24-10.188-8.372-6.297%204.165-12.962%208.079-19.828%2011.534-7.401-7.965-14.321-16.562-19.974-26.182%204.4426579-6.973692%209.2079702-13.9828876%2013.621-19.449z'%20fill='%23478cbf'%20transform='matrix(4.162611%200%200%20-4.162611%20104.69892%20427.387251)'/%3e%3cpath%20d='m0%200-1.121-16.063c-.135-1.936-1.675-3.477-3.611-3.616l-38.555-2.751c-.094-.007-.188-.01-.281-.01-1.916.0-3.569%201.406-3.852%203.33l-2.211%2014.994H-81.09l-2.211-14.994c-.297-2.018-2.101-3.469-4.133-3.32l-38.555%202.751c-1.936.139-3.476%201.68-3.611%203.616L-130.721.0l-32.547%203.138c.015-3.498.06-7.33.06-8.093.0-34.374%2043.605-50.896%2097.781-51.086h.066.067c54.176.19%2097.766%2016.712%2097.766%2051.086.0.777.047%204.593.063%208.093z'%20fill='%23478cbf'%20transform='matrix(4.162611%200%200%20-4.162611%20784.07144%20718.723121)'/%3e%3cpath%20d='m0%200c0-12.052-9.765-21.815-21.813-21.815-12.042.0-21.81%209.763-21.81%2021.815.0%2012.044%209.768%2021.802%2021.81%2021.802C-9.765%2021.802.0%2012.044.0.0'%20fill='%23fff'%20transform='matrix(4.162611%200%200%20-4.162611%20389.21484%20527.151321)'/%3e%3cpath%20d='m0%200c0-7.994-6.479-14.473-14.479-14.473-7.996.0-14.479%206.479-14.479%2014.473s6.483%2014.479%2014.479%2014.479C-6.479%2014.479.0%207.994.0.0'%20fill='%23414042'%20transform='matrix(4.162611%200%200%20-4.162611%20367.36686%20532.537071)'/%3e%3cpath%20d='m0%200c-3.878.0-7.021%202.858-7.021%206.381v20.081c0%203.52%203.143%206.381%207.021%206.381s7.028-2.861%207.028-6.381V6.381c0-3.523-3.15-6.381-7.028-6.381'%20fill='%23fff'%20transform='matrix(4.162611%200%200%20-4.162611%20511.99336%20626.219821)'/%3e%3cpath%20d='m0%200c0-12.052%209.765-21.815%2021.815-21.815%2012.041.0%2021.808%209.763%2021.808%2021.815.0%2012.044-9.767%2021.802-21.808%2021.802-12.05.0-21.815-9.758-21.815-21.802'%20fill='%23fff'%20transform='matrix(4.162611%200%200%20-4.162611%20634.78706%20527.151321)'/%3e%3cpath%20d='m0%200c0-7.994%206.477-14.473%2014.471-14.473C22.473-14.473%2028.95-7.994%2028.95.0s-6.477%2014.479-14.479%2014.479C6.477%2014.479.0%207.994.0.0'%20fill='%23414042'%20transform='matrix(4.162611%200%200%20-4.162611%20656.64056%20532.537071)'/%3e%3c/svg%3e",w0="/assets/JavaScript-logo-B2gqmNKf.png",Ah="/assets/nodejs-BdPFpv2v.png",A0="/assets/python-D6FCXJoO.png",T0="/assets/Lua-Logo_128x128-BjD2K115.png";var I0=lt('<div class="flex flex-row"><div class="p-4 max-w-[30%]"></div><div class="p-4 max-w-[70%]"><p>Hello! My name is CDevv and I am a 17 year old student who likes programming and game development! Currently I am making my first game. :D</p><br><p>I use the following technologies:</p><div class="flex flex-row gap-1"></div><br><p>I mostly work in C# though!');function b0(){return(()=>{var n=I0(),t=n.firstChild,e=t.nextSibling,r=e.firstChild,s=r.nextSibling,i=s.nextSibling,a=i.nextSibling;return G(t,F(yh,{img:vh})),G(a,F(zt,{img:Eh,href:"https://learn.microsoft.com/en-us/dotnet/csharp/"}),null),G(a,F(zt,{img:wh,href:"https://godotengine.org/"}),null),G(a,F(zt,{img:w0,href:"#"}),null),G(a,F(zt,{img:Ah,href:"https://nodejs.org/en"}),null),G(a,F(zt,{img:A0,href:"https://www.python.org/"}),null),G(a,F(zt,{img:T0,href:"https://www.lua.org/"}),null),n})()}var R0=lt('<div class="p-4 text-slate-300 font-sans"><div><h1 class=text-xl>Edutation</h1><p>Vocational school of Electrical Engineering and Electronics “Konstantin Fotinov”</p></div><br><div><h1 class=text-xl>Skills</h1><ol><li>C# .NET</li><li>ASP.NET</li><li>Python and Lua</li></ol></div><br><div><h1 class=text-xl>Foreign languages</h1><ol><li>English (B2)</li><li>German (A2)');function S0(){return R0()}var P0=lt('<button class="p-1 rounded-lg transition ease-in delay-100 bg-zinc-900 hover:bg-zinc-950">Details'),C0=lt('<div class="rounded-lg inline-block bg-zinc-700 max-w-[350px] drop-shadow-lg"><div class=p-2><h1 class="font-bold text-xl">');function V0(n){return(()=>{var t=C0(),e=t.firstChild,r=e.firstChild;return G(t,F(vs,{get src(){return n.img},layout:"fixed",width:350,height:250,class:"rounded-tl-lg rounded-tr-lg"}),e),G(r,()=>n.title),G(e,F(Ki,{get href(){return`./${n.id}`},get children(){return P0()}}),null),t})()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Th="firebasestorage.googleapis.com",D0="storageBucket",x0=2*60*1e3,k0=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt extends Me{constructor(t,e,r=0){super(ri(t),`Firebase Storage: ${e} (${ri(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Zt.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return ri(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Yt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Yt||(Yt={}));function ri(n){return"storage/"+n}function N0(){const n="An unknown error occurred, please check the error payload for server response.";return new Zt(Yt.UNKNOWN,n)}function O0(){return new Zt(Yt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function L0(){return new Zt(Yt.CANCELED,"User canceled the upload/download.")}function M0(n){return new Zt(Yt.INVALID_URL,"Invalid URL '"+n+"'.")}function F0(n){return new Zt(Yt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Jc(n){return new Zt(Yt.INVALID_ARGUMENT,n)}function Ih(){return new Zt(Yt.APP_DELETED,"The Firebase app was deleted.")}function $0(n){return new Zt(Yt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=Kt.makeFromUrl(t,e)}catch{return new Kt(t,"")}if(r.path==="")return r;throw F0(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const a="(/(.*))?$",c=new RegExp("^gs://"+s+a,"i"),u={bucket:1,path:3};function f(U){U.path_=decodeURIComponent(U.path)}const d="v[A-Za-z0-9_]+",p=e.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",b=new RegExp(`^https?://${p}/${d}/b/${s}/o${w}`,"i"),P={bucket:1,path:3},C=e===Th?"(?:storage.googleapis.com|storage.cloud.google.com)":e,S="([^?#]*)",N=new RegExp(`^https?://${C}/${s}/${S}`,"i"),$=[{regex:c,indices:u,postModify:i},{regex:b,indices:P,postModify:f},{regex:N,indices:{bucket:1,path:2},postModify:f}];for(let U=0;U<$.length;U++){const tt=$[U],Q=tt.regex.exec(t);if(Q){const T=Q[tt.indices.bucket];let _=Q[tt.indices.path];_||(_=""),r=new Kt(T,_),tt.postModify(r);break}}if(r==null)throw M0(t);return r}}class U0{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B0(n,t,e){let r=1,s=null,i=null,a=!1,c=0;function u(){return c===2}let f=!1;function d(...S){f||(f=!0,t.apply(null,S))}function p(S){s=setTimeout(()=>{s=null,n(b,u())},S)}function w(){i&&clearTimeout(i)}function b(S,...N){if(f){w();return}if(S){w(),d.call(null,S,...N);return}if(u()||a){w(),d.call(null,S,...N);return}r<64&&(r*=2);let $;c===1?(c=2,$=0):$=(r+Math.random())*1e3,p($)}let P=!1;function C(S){P||(P=!0,w(),!f&&(s!==null?(S||(c=2),clearTimeout(s),p(0)):S||(c=1)))}return p(0),i=setTimeout(()=>{a=!0,C(!0)},e),C}function j0(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(n){return n!==void 0}function Xc(n,t,e,r){if(r<t)throw Jc(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Jc(`Invalid value for '${n}'. Expected ${e} or less.`)}function z0(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}var es;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(es||(es={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K0(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=t.indexOf(n)!==-1;return e||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(t,e,r,s,i,a,c,u,f,d,p,w=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=c,this.errorCallback_=u,this.timeout_=f,this.progressCallback_=d,this.connectionFactory_=p,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,P)=>{this.resolve_=b,this.reject_=P,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new kr(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=c=>{const u=c.loaded,f=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,f)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const c=i.getErrorCode()===es.NO_ERROR,u=i.getStatus();if(!c||K0(u,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===es.ABORT;r(!1,new kr(!1,null,d));return}const f=this.successCodes_.indexOf(u)!==-1;r(!0,new kr(f,i))})},e=(r,s)=>{const i=this.resolve_,a=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());q0(u)?i(u):i()}catch(u){a(u)}else if(c!==null){const u=N0();u.serverResponse=c.getErrorText(),this.errorCallback_?a(this.errorCallback_(c,u)):a(u)}else if(s.canceled){const u=this.appDelete_?Ih():L0();a(u)}else{const u=O0();a(u)}};this.canceled_?e(!1,new kr(!1,null,!0)):this.backoffId_=B0(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&j0(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class kr{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function Q0(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function G0(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function W0(n,t){t&&(n["X-Firebase-GMPID"]=t)}function J0(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function X0(n,t,e,r,s,i,a=!0){const c=z0(n.urlParams),u=n.url+c,f=Object.assign({},n.headers);return W0(f,t),Q0(f,e),G0(f,i),J0(f,r),new H0(u,n.method,f,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y0(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function Z0(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,e){this._service=t,e instanceof Kt?this._location=e:this._location=Kt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new ns(t,e)}get root(){const t=new Kt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Z0(this._location.path)}get storage(){return this._service}get parent(){const t=Y0(this._location.path);if(t===null)return null;const e=new Kt(this._location.bucket,t);return new ns(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw $0(t)}}function Yc(n,t){const e=t?.[D0];return e==null?null:Kt.makeFromBucketSpec(e,n)}function tv(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:kl(s,n.app.options.projectId))}class ev{constructor(t,e,r,s,i){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Th,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=x0,this._maxUploadRetryTime=k0,this._requests=new Set,s!=null?this._bucket=Kt.makeFromBucketSpec(s,this._host):this._bucket=Yc(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,t):this._bucket=Yc(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Xc("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Xc("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new ns(this,t)}_makeRequest(t,e,r,s,i=!0){if(this._deleted)return new U0(Ih());{const a=X0(t,this._appId,r,s,e,this._firebaseVersion,i);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const Zc="@firebase/storage",tl="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bh="storage";function nv(n=Ul(),t){n=tn(n);const r=Fl(n,bh).getImmediate({identifier:t}),s=Dl("storage");return s&&rv(r,...s),r}function rv(n,t,e,r={}){tv(n,t,e,r)}function sv(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new ev(e,r,s,t,$l)}function iv(){Gn(new en(bh,sv,"PUBLIC").setMultipleInstances(!0)),ge(Zc,tl,""),ge(Zc,tl,"esm2017")}iv();const ov={apiKey:"AIzaSyBCJHuyfxU_BHggJEskweu3abbIUaNJeOo",authDomain:"my-portfolio-34f74.firebaseapp.com",projectId:"my-portfolio-34f74",storageBucket:"my-portfolio-34f74.appspot.com",messagingSenderId:"873309696890",appId:"1:873309696890:web:a34ffb1e11eb06b94c1cc3"},Rh=Gi(ov),Es=Gu(Rh);nv(Rh);xt({});async function av(){const n=g_(Es,"projects"),t=S_(n,P_("name")),e=await x_(t);let r=[];return e.forEach(async s=>{let i=s.data();r.push(i)}),console.log(r),r}async function cv(n){const t=vo(Es,"projects",n);return(await Vo(t)).data()}async function lv(n){const t=vo(Es,"projects",n);return(await Vo(t)).data().links}async function uv(n){const t=vo(Es,"projects",n);return(await Vo(t)).data().gallery}var hv=lt("<p>Loading.."),fv=lt("<p>Error: "),dv=lt('<div class="flex justify-center"><div class="flex justify-between grid grid-cols-[max-content_max-content] max-w-fit place-items-center gap-5 p-2">');async function mv(n,{value:t,refetching:e}){return await av()}function gv(){const[n]=Nr({},mv);return ol(()=>{n()}),$i(()=>{console.log(n())}),[F(zn,{get when(){return n.loading},get children(){return hv()}}),F(ml,{get children(){return[F(zr,{get when(){return n.error},get children(){var t=fv();return t.firstChild,G(t,()=>n.error,null),t}}),F(zr,{get when(){return n()},get children(){var t=dv(),e=t.firstChild;return G(e,F(ui,{get each(){return n()},children:(r,s)=>F(V0,{get id(){return s()},get title(){return r.name},get img(){return r.mainImg}})})),t}})]}})]}var pv=lt('<button class="p-2 rounded-lg bg-zinc-900">');function el(n){return(()=>{var t=pv();return G(t,F(vs,{get src(){return n.img},layout:"constrained",get width(){return n.width},get height(){return n.height}})),t})()}const _v="/assets/codemirror-CW99Okdd.svg",yv="/assets/electron-BDv9Nm5G.png";var si=lt("<p>Loading.."),vv=lt("<p>Error: "),Ev=lt('<div class="flex flex-cols"><div class=p-4></div><div class=p-4><h1 class=text-xl></h1><p>'),wv=lt('<div class="flex flex-row gap-4"><div class=p-4><p>Made with:</p><div class="flex flex-rows gap-4"></div></div><div class=p-4><p>GitHub repo:'),Av=lt('<div class=p-4><div class="flex grid grid-cols-2">'),Tv=lt("<div>");const Iv={nodejs:Ah,codemirror:_v,electron:yv,csharp:Eh,godot:wh};async function bv(n){return cv(n)}async function Rv(n){return lv(n)}async function Sv(n){return uv(n)}function Pv(n){const t=td(),[e]=Nr(t.id,bv),[r]=Nr(t.id,Rv),[s]=Nr(t.id,Sv),[i,a]=Ha([]),[c,u]=Ha([]),[f,d]=xt(!1);ol(()=>{e(),r(),s(),console.log(e())}),$i(()=>{console.log(r()),r.state==="ready"&&s.state==="ready"&&!f()&&(r().forEach(b=>{p(b.name,b.link)}),s().forEach(b=>{w(b)}),d(!0))});const p=(b,P)=>{a([...i,{name:b,link:P}])},w=b=>{u([...c,{item:b}])};return(()=>{var b=Tv();return G(b,F(wf,{get fallback(){return si()},get children(){return[F(zn,{get when(){return e.loading},get children(){return si()}}),F(ml,{get children(){return[F(zr,{get when(){return e.error},get children(){var P=vv();return P.firstChild,G(P,()=>e.error,null),P}}),F(zr,{get when(){return e()},get children(){return[(()=>{var P=Ev(),C=P.firstChild,S=C.nextSibling,N=S.firstChild,k=N.nextSibling;return G(C,F(el,{get img(){return e().mainImg},width:350,height:250})),G(N,()=>e().name),G(k,()=>e().desc),P})(),(()=>{var P=wv(),C=P.firstChild,S=C.firstChild,N=S.nextSibling,k=C.nextSibling;return k.firstChild,G(N,F(zn,{when:i,get fallback(){return si()},get children(){return F(ui,{each:i,children:$=>F(zt,{get img(){return Iv[$.name]},get href(){return $.link}})})}})),G(k,F(zt,{img:Oo,get href(){return e().github}}),null),P})(),(()=>{var P=Av(),C=P.firstChild;return G(C,F(ui,{each:c,children:S=>F(el,{get img(){return S.item}})})),P})()]}})]}})]}})),b})()}const Cv="/assets/mail-CXy4oIRO.png";var Vv=lt('<div class="p-4 text-center"><p>You can contact me here!</p><br><div class="flex flex-row gap-2 place-content-center">');function Dv(){return(()=>{var n=Vv(),t=n.firstChild,e=t.nextSibling,r=e.nextSibling;return G(r,F(zt,{href:"https://github.com/CDevv",img:Oo}),null),G(r,F(zt,{href:"mailto:cdevyt@gmail.com",img:Cv}),null),n})()}const xv={id:/^\d+$/};function kv(){return F(pd,{root:j_,get children(){return[F(Ke,{path:"/",component:E0}),F(Ke,{path:"/about-me",component:b0}),F(Ke,{path:"/cv",component:S0}),F(Ke,{path:"/projects",component:gv}),F(Ke,{path:"/projects/:id",component:Pv,matchFilters:xv}),F(Ke,{path:"/contacts",component:Dv})]}})}const Nv=document.getElementById("root");Vf(()=>F(kv,{}),Nv);
