import"./react-dom-2d279051.js";import{r as P}from"./react-b9a76881.js";import{s as Ce}from"./use-sync-external-store-bc8ad6b0.js";class D{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){const t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const I=typeof window>"u"||"Deno"in window;function w(){}function Oe(s,e){return typeof s=="function"?s(e):s}function H(s){return typeof s=="number"&&s>=0&&s!==1/0}function ue(s,e){return Math.max(s+(e||0)-Date.now(),0)}function A(s,e,t){return U(s)?typeof e=="function"?{...t,queryKey:s,queryFn:e}:{...e,queryKey:s}:s}function Se(s,e,t){return U(s)?typeof e=="function"?{...t,mutationKey:s,mutationFn:e}:{...e,mutationKey:s}:typeof s=="function"?{...e,mutationFn:s}:{...s}}function q(s,e,t){return U(s)?[{...e,queryKey:s},t]:[s||{},e]}function Y(s,e){const{type:t="all",exact:r,fetchStatus:n,predicate:i,queryKey:u,stale:a}=s;if(U(u)){if(r){if(e.queryHash!==W(u,e.options))return!1}else if(!K(e.queryKey,u))return!1}if(t!=="all"){const o=e.isActive();if(t==="active"&&!o||t==="inactive"&&o)return!1}return!(typeof a=="boolean"&&e.isStale()!==a||typeof n<"u"&&n!==e.state.fetchStatus||i&&!i(e))}function Z(s,e){const{exact:t,fetching:r,predicate:n,mutationKey:i}=s;if(U(i)){if(!e.options.mutationKey)return!1;if(t){if(M(e.options.mutationKey)!==M(i))return!1}else if(!K(e.options.mutationKey,i))return!1}return!(typeof r=="boolean"&&e.state.status==="loading"!==r||n&&!n(e))}function W(s,e){return((e==null?void 0:e.queryKeyHashFn)||M)(s)}function M(s){return JSON.stringify(s,(e,t)=>G(t)?Object.keys(t).sort().reduce((r,n)=>(r[n]=t[n],r),{}):t)}function K(s,e){return ae(s,e)}function ae(s,e){return s===e?!0:typeof s!=typeof e?!1:s&&e&&typeof s=="object"&&typeof e=="object"?!Object.keys(e).some(t=>!ae(s[t],e[t])):!1}function oe(s,e){if(s===e)return s;const t=_(s)&&_(e);if(t||G(s)&&G(e)){const r=t?s.length:Object.keys(s).length,n=t?e:Object.keys(e),i=n.length,u=t?[]:{};let a=0;for(let o=0;o<i;o++){const c=t?o:n[o];u[c]=oe(s[c],e[c]),u[c]===s[c]&&a++}return r===i&&a===r?s:u}return e}function L(s,e){if(s&&!e||e&&!s)return!1;for(const t in s)if(s[t]!==e[t])return!1;return!0}function _(s){return Array.isArray(s)&&s.length===Object.keys(s).length}function G(s){if(!$(s))return!1;const e=s.constructor;if(typeof e>"u")return!0;const t=e.prototype;return!(!$(t)||!t.hasOwnProperty("isPrototypeOf"))}function $(s){return Object.prototype.toString.call(s)==="[object Object]"}function U(s){return Array.isArray(s)}function le(s){return new Promise(e=>{setTimeout(e,s)})}function ee(s){le(0).then(s)}function Pe(){if(typeof AbortController=="function")return new AbortController}function z(s,e,t){return t.isDataEqual!=null&&t.isDataEqual(s,e)?s:typeof t.structuralSharing=="function"?t.structuralSharing(s,e):t.structuralSharing!==!1?oe(s,e):e}class Fe extends D{constructor(){super(),this.setup=e=>{if(!I&&window.addEventListener){const t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,(t=this.cleanup)==null||t.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(e){this.focused!==e&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const k=new Fe,te=["online","offline"];class Qe extends D{constructor(){super(),this.setup=e=>{if(!I&&window.addEventListener){const t=()=>e();return te.forEach(r=>{window.addEventListener(r,t,!1)}),()=>{te.forEach(r=>{window.removeEventListener(r,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.cleanup)==null||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,(t=this.cleanup)==null||t.call(this),this.cleanup=e(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(e){this.online!==e&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const j=new Qe;function we(s){return Math.min(1e3*2**s,3e4)}function N(s){return(s??"online")==="online"?j.isOnline():!0}class ce{constructor(e){this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}}function T(s){return s instanceof ce}function he(s){let e=!1,t=0,r=!1,n,i,u;const a=new Promise((h,b)=>{i=h,u=b}),o=h=>{r||(y(new ce(h)),s.abort==null||s.abort())},c=()=>{e=!0},l=()=>{e=!1},f=()=>!k.isFocused()||s.networkMode!=="always"&&!j.isOnline(),m=h=>{r||(r=!0,s.onSuccess==null||s.onSuccess(h),n==null||n(),i(h))},y=h=>{r||(r=!0,s.onError==null||s.onError(h),n==null||n(),u(h))},g=()=>new Promise(h=>{n=b=>{const F=r||!f();return F&&h(b),F},s.onPause==null||s.onPause()}).then(()=>{n=void 0,r||s.onContinue==null||s.onContinue()}),C=()=>{if(r)return;let h;try{h=s.fn()}catch(b){h=Promise.reject(b)}Promise.resolve(h).then(m).catch(b=>{var F,R;if(r)return;const S=(F=s.retry)!=null?F:3,E=(R=s.retryDelay)!=null?R:we,v=typeof E=="function"?E(t,b):E,p=S===!0||typeof S=="number"&&t<S||typeof S=="function"&&S(t,b);if(e||!p){y(b);return}t++,s.onFail==null||s.onFail(t,b),le(v).then(()=>{if(f())return g()}).then(()=>{e?y(b):C()})})};return N(s.networkMode)?C():g().then(C),{promise:a,cancel:o,continue:()=>(n==null?void 0:n())?a:Promise.resolve(),cancelRetry:c,continueRetry:l}}const J=console;function Ee(){let s=[],e=0,t=l=>{l()},r=l=>{l()};const n=l=>{let f;e++;try{f=l()}finally{e--,e||a()}return f},i=l=>{e?s.push(l):ee(()=>{t(l)})},u=l=>(...f)=>{i(()=>{l(...f)})},a=()=>{const l=s;s=[],l.length&&ee(()=>{r(()=>{l.forEach(f=>{t(f)})})})};return{batch:n,batchCalls:u,schedule:i,setNotifyFunction:l=>{t=l},setBatchNotifyFunction:l=>{r=l}}}const O=Ee();class de{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),H(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,e??(I?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class qe extends de{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||J,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||Me(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(e,t){const r=z(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:t==null?void 0:t.updatedAt,manual:t==null?void 0:t.manual}),r}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;const r=this.promise;return(t=this.retryer)==null||t.cancel(e),r?r.then(w).catch(w):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>e.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!ue(this.state.dataUpdatedAt,e)}onFocus(){var e;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}onOnline(){var e;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),(e=this.retryer)==null||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,n;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&t!=null&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var i;return(i=this.retryer)==null||i.continueRetry(),this.promise}}if(e&&this.setOptions(e),!this.options.queryFn){const y=this.observers.find(g=>g.options.queryFn);y&&this.setOptions(y.options)}Array.isArray(this.options.queryKey);const u=Pe(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},o=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>{if(u)return this.abortSignalConsumed=!0,u.signal}})};o(a);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),l={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(o(l),(r=this.options.behavior)==null||r.onFetch(l),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((n=l.fetchOptions)==null?void 0:n.meta)){var f;this.dispatch({type:"fetch",meta:(f=l.fetchOptions)==null?void 0:f.meta})}const m=y=>{if(T(y)&&y.silent||this.dispatch({type:"error",error:y}),!T(y)){var g,C,h,b;(g=(C=this.cache.config).onError)==null||g.call(C,y,this),(h=(b=this.cache.config).onSettled)==null||h.call(b,this.state.data,y,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=he({fn:l.fetchFn,abort:u==null?void 0:u.abort.bind(u),onSuccess:y=>{var g,C,h,b;if(typeof y>"u"){m(new Error(this.queryHash+" data is undefined"));return}this.setData(y),(g=(C=this.cache.config).onSuccess)==null||g.call(C,y,this),(h=(b=this.cache.config).onSettled)==null||h.call(b,y,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:m,onFail:(y,g)=>{this.dispatch({type:"failed",failureCount:y,error:g})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){const t=r=>{var n,i;switch(e.type){case"failed":return{...r,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(n=e.meta)!=null?n:null,fetchStatus:N(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:e.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(i=e.dataUpdatedAt)!=null?i:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const u=e.error;return T(u)&&u.revert&&this.revertState?{...this.revertState}:{...r,error:u,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:u,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...e.state}}};this.state=t(this.state),O.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}function Me(s){const e=typeof s.initialData=="function"?s.initialData():s.initialData,t=typeof e<"u",r=t?typeof s.initialDataUpdatedAt=="function"?s.initialDataUpdatedAt():s.initialDataUpdatedAt:0;return{data:e,dataUpdateCount:0,dataUpdatedAt:t?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:t?"success":"loading",fetchStatus:"idle"}}class De extends D{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var n;const i=t.queryKey,u=(n=t.queryHash)!=null?n:W(i,t);let a=this.get(u);return a||(a=new qe({cache:this,logger:e.getLogger(),queryKey:i,queryHash:u,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(a)),a}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){const t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(r=>r!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){O.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){const[r]=q(e,t);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(n=>Y(r,n))}findAll(e,t){const[r]=q(e,t);return Object.keys(r).length>0?this.queries.filter(n=>Y(r,n)):this.queries}notify(e){O.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){O.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){O.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class xe extends de{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||J,this.observers=[],this.state=e.state||fe(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return(e=(t=this.retryer)==null?void 0:t.continue())!=null?e:this.execute()}async execute(){const e=()=>{var p;return this.retryer=he({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(d,Q)=>{this.dispatch({type:"failed",failureCount:d,error:Q})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(p=this.options.retry)!=null?p:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},t=this.state.status==="loading";try{var r,n,i,u,a,o,c,l;if(!t){var f,m,y,g;this.dispatch({type:"loading",variables:this.options.variables}),await((f=(m=this.mutationCache.config).onMutate)==null?void 0:f.call(m,this.state.variables,this));const d=await((y=(g=this.options).onMutate)==null?void 0:y.call(g,this.state.variables));d!==this.state.context&&this.dispatch({type:"loading",context:d,variables:this.state.variables})}const p=await e();return await((r=(n=this.mutationCache.config).onSuccess)==null?void 0:r.call(n,p,this.state.variables,this.state.context,this)),await((i=(u=this.options).onSuccess)==null?void 0:i.call(u,p,this.state.variables,this.state.context)),await((a=(o=this.mutationCache.config).onSettled)==null?void 0:a.call(o,p,null,this.state.variables,this.state.context,this)),await((c=(l=this.options).onSettled)==null?void 0:c.call(l,p,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:p}),p}catch(p){try{var C,h,b,F,R,S,E,v;throw await((C=(h=this.mutationCache.config).onError)==null?void 0:C.call(h,p,this.state.variables,this.state.context,this)),await((b=(F=this.options).onError)==null?void 0:b.call(F,p,this.state.variables,this.state.context)),await((R=(S=this.mutationCache.config).onSettled)==null?void 0:R.call(S,void 0,p,this.state.variables,this.state.context,this)),await((E=(v=this.options).onSettled)==null?void 0:E.call(v,void 0,p,this.state.variables,this.state.context)),p}finally{this.dispatch({type:"error",error:p})}}}dispatch(e){const t=r=>{switch(e.type){case"failed":return{...r,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!N(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...r,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:e.error,failureCount:r.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...r,...e.state}}};this.state=t(this.state),O.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function fe(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class Ae extends D{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){const n=new xe({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(n),n}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){O.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return typeof e.exact>"u"&&(e.exact=!0),this.mutations.find(t=>Z(e,t))}findAll(e){return this.mutations.filter(t=>Z(e,t))}notify(e){O.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=((e=this.resuming)!=null?e:Promise.resolve()).then(()=>{const t=this.mutations.filter(r=>r.state.isPaused);return O.batch(()=>t.reduce((r,n)=>r.then(()=>n.continue().catch(w)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function Ie(){return{onFetch:s=>{s.fetchFn=()=>{var e,t,r,n,i,u;const a=(e=s.fetchOptions)==null||(t=e.meta)==null?void 0:t.refetchPage,o=(r=s.fetchOptions)==null||(n=r.meta)==null?void 0:n.fetchMore,c=o==null?void 0:o.pageParam,l=(o==null?void 0:o.direction)==="forward",f=(o==null?void 0:o.direction)==="backward",m=((i=s.state.data)==null?void 0:i.pages)||[],y=((u=s.state.data)==null?void 0:u.pageParams)||[];let g=y,C=!1;const h=v=>{Object.defineProperty(v,"signal",{enumerable:!0,get:()=>{var p;if((p=s.signal)!=null&&p.aborted)C=!0;else{var d;(d=s.signal)==null||d.addEventListener("abort",()=>{C=!0})}return s.signal}})},b=s.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+s.options.queryHash+"'")),F=(v,p,d,Q)=>(g=Q?[p,...g]:[...g,p],Q?[d,...v]:[...v,d]),R=(v,p,d,Q)=>{if(C)return Promise.reject("Cancelled");if(typeof d>"u"&&!p&&v.length)return Promise.resolve(v);const x={queryKey:s.queryKey,pageParam:d,meta:s.options.meta};h(x);const B=b(x);return Promise.resolve(B).then(Re=>F(v,d,Re,Q))};let S;if(!m.length)S=R([]);else if(l){const v=typeof c<"u",p=v?c:se(s.options,m);S=R(m,v,p)}else if(f){const v=typeof c<"u",p=v?c:Ue(s.options,m);S=R(m,v,p,!0)}else{g=[];const v=typeof s.options.getNextPageParam>"u";S=(a&&m[0]?a(m[0],0,m):!0)?R([],v,y[0]):Promise.resolve(F([],y[0],m[0]));for(let d=1;d<m.length;d++)S=S.then(Q=>{if(a&&m[d]?a(m[d],d,m):!0){const B=v?y[d]:se(s.options,Q);return R(Q,v,B)}return Promise.resolve(F(Q,y[d],m[d]))})}return S.then(v=>({pages:v,pageParams:g}))}}}}function se(s,e){return s.getNextPageParam==null?void 0:s.getNextPageParam(e[e.length-1],e)}function Ue(s,e){return s.getPreviousPageParam==null?void 0:s.getPreviousPageParam(e[0],e)}class rt{constructor(e={}){this.queryCache=e.queryCache||new De,this.mutationCache=e.mutationCache||new Ae,this.logger=e.logger||J,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=k.subscribe(()=>{k.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=j.subscribe(()=>{j.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,this.mountCount===0&&((e=this.unsubscribeFocus)==null||e.call(this),this.unsubscribeFocus=void 0,(t=this.unsubscribeOnline)==null||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){const[r]=q(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return(r=this.queryCache.find(e,t))==null?void 0:r.state.data}ensureQueryData(e,t,r){const n=A(e,t,r),i=this.getQueryData(n.queryKey);return i?Promise.resolve(i):this.fetchQuery(n)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:t,state:r})=>{const n=r.data;return[t,n]})}setQueryData(e,t,r){const n=this.queryCache.find(e),i=n==null?void 0:n.state.data,u=Oe(t,i);if(typeof u>"u")return;const a=A(e),o=this.defaultQueryOptions(a);return this.queryCache.build(this,o).setData(u,{...r,manual:!0})}setQueriesData(e,t,r){return O.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:n})=>[n,this.setQueryData(n,t,r)]))}getQueryState(e,t){var r;return(r=this.queryCache.find(e,t))==null?void 0:r.state}removeQueries(e,t){const[r]=q(e,t),n=this.queryCache;O.batch(()=>{n.findAll(r).forEach(i=>{n.remove(i)})})}resetQueries(e,t,r){const[n,i]=q(e,t,r),u=this.queryCache,a={type:"active",...n};return O.batch(()=>(u.findAll(n).forEach(o=>{o.reset()}),this.refetchQueries(a,i)))}cancelQueries(e,t,r){const[n,i={}]=q(e,t,r);typeof i.revert>"u"&&(i.revert=!0);const u=O.batch(()=>this.queryCache.findAll(n).map(a=>a.cancel(i)));return Promise.all(u).then(w).catch(w)}invalidateQueries(e,t,r){const[n,i]=q(e,t,r);return O.batch(()=>{var u,a;if(this.queryCache.findAll(n).forEach(c=>{c.invalidate()}),n.refetchType==="none")return Promise.resolve();const o={...n,type:(u=(a=n.refetchType)!=null?a:n.type)!=null?u:"active"};return this.refetchQueries(o,i)})}refetchQueries(e,t,r){const[n,i]=q(e,t,r),u=O.batch(()=>this.queryCache.findAll(n).filter(o=>!o.isDisabled()).map(o=>{var c;return o.fetch(void 0,{...i,cancelRefetch:(c=i==null?void 0:i.cancelRefetch)!=null?c:!0,meta:{refetchPage:n.refetchPage}})}));let a=Promise.all(u).then(w);return i!=null&&i.throwOnError||(a=a.catch(w)),a}fetchQuery(e,t,r){const n=A(e,t,r),i=this.defaultQueryOptions(n);typeof i.retry>"u"&&(i.retry=!1);const u=this.queryCache.build(this,i);return u.isStaleByTime(i.staleTime)?u.fetch(i):Promise.resolve(u.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(w).catch(w)}fetchInfiniteQuery(e,t,r){const n=A(e,t,r);return n.behavior=Ie(),this.fetchQuery(n)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(w).catch(w)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){const r=this.queryDefaults.find(n=>M(e)===M(n.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;const t=this.queryDefaults.find(r=>K(e,r.queryKey));return t==null?void 0:t.defaultOptions}setMutationDefaults(e,t){const r=this.mutationDefaults.find(n=>M(e)===M(n.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;const t=this.mutationDefaults.find(r=>K(e,r.mutationKey));return t==null?void 0:t.defaultOptions}defaultQueryOptions(e){if(e!=null&&e._defaulted)return e;const t={...this.defaultOptions.queries,...this.getQueryDefaults(e==null?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=W(t.queryKey,t)),typeof t.refetchOnReconnect>"u"&&(t.refetchOnReconnect=t.networkMode!=="always"),typeof t.useErrorBoundary>"u"&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(e==null?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class Te extends D{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),re(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return V(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return V(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),L(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const i=this.hasListeners();i&&ie(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),i&&(this.currentQuery!==n||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();i&&(this.currentQuery!==n||this.options.enabled!==r.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return Le(this,r,e)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(w)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),I||this.currentResult.isStale||!H(this.options.staleTime))return;const t=ue(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(I||this.options.enabled===!1||!H(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||k.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const r=this.currentQuery,n=this.options,i=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,o=e!==r,c=o?e.state:this.currentQueryInitialState,l=o?this.currentResult:this.previousQueryResult,{state:f}=e;let{dataUpdatedAt:m,error:y,errorUpdatedAt:g,fetchStatus:C,status:h}=f,b=!1,F=!1,R;if(t._optimisticResults){const d=this.hasListeners(),Q=!d&&re(e,t),x=d&&ie(e,r,t,n);(Q||x)&&(C=N(e.options.networkMode)?"fetching":"paused",m||(h="loading")),t._optimisticResults==="isRestoring"&&(C="idle")}if(t.keepPreviousData&&!f.dataUpdatedAt&&l!=null&&l.isSuccess&&h!=="error")R=l.data,m=l.dataUpdatedAt,h=l.status,b=!0;else if(t.select&&typeof f.data<"u")if(i&&f.data===(u==null?void 0:u.data)&&t.select===this.selectFn)R=this.selectResult;else try{this.selectFn=t.select,R=t.select(f.data),R=z(i==null?void 0:i.data,R,t),this.selectResult=R,this.selectError=null}catch(d){this.selectError=d}else R=f.data;if(typeof t.placeholderData<"u"&&typeof R>"u"&&h==="loading"){let d;if(i!=null&&i.isPlaceholderData&&t.placeholderData===(a==null?void 0:a.placeholderData))d=i.data;else if(d=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof d<"u")try{d=t.select(d),this.selectError=null}catch(Q){this.selectError=Q}typeof d<"u"&&(h="success",R=z(i==null?void 0:i.data,d,t),F=!0)}this.selectError&&(y=this.selectError,R=this.selectResult,g=Date.now(),h="error");const S=C==="fetching",E=h==="loading",v=h==="error";return{status:h,fetchStatus:C,isLoading:E,isSuccess:h==="success",isError:v,isInitialLoading:E&&S,data:R,dataUpdatedAt:m,error:y,errorUpdatedAt:g,failureCount:f.fetchFailureCount,failureReason:f.fetchFailureReason,errorUpdateCount:f.errorUpdateCount,isFetched:f.dataUpdateCount>0||f.errorUpdateCount>0,isFetchedAfterMount:f.dataUpdateCount>c.dataUpdateCount||f.errorUpdateCount>c.errorUpdateCount,isFetching:S,isRefetching:S&&!E,isLoadingError:v&&f.dataUpdatedAt===0,isPaused:C==="paused",isPlaceholderData:F,isPreviousData:b,isRefetchError:v&&f.dataUpdatedAt!==0,isStale:X(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,L(r,t))return;this.currentResult=r;const n={cache:!0},i=()=>{if(!t)return!0;const{notifyOnChangeProps:u}=this.options,a=typeof u=="function"?u():u;if(a==="all"||!a&&!this.trackedProps.size)return!0;const o=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&o.add("error"),Object.keys(this.currentResult).some(c=>{const l=c;return this.currentResult[l]!==t[l]&&o.has(l)})};(e==null?void 0:e.listeners)!==!1&&i()&&(n.listeners=!0),this.notify({...n,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!T(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){O.batch(()=>{if(e.onSuccess){var t,r,n,i;(t=(r=this.options).onSuccess)==null||t.call(r,this.currentResult.data),(n=(i=this.options).onSettled)==null||n.call(i,this.currentResult.data,null)}else if(e.onError){var u,a,o,c;(u=(a=this.options).onError)==null||u.call(a,this.currentResult.error),(o=(c=this.options).onSettled)==null||o.call(c,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(({listener:l})=>{l(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function Ke(s,e){return e.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&e.retryOnMount===!1)}function re(s,e){return Ke(s,e)||s.state.dataUpdatedAt>0&&V(s,e,e.refetchOnMount)}function V(s,e,t){if(e.enabled!==!1){const r=typeof t=="function"?t(s):t;return r==="always"||r!==!1&&X(s,e)}return!1}function ie(s,e,t,r){return t.enabled!==!1&&(s!==e||r.enabled===!1)&&(!t.suspense||s.state.status!=="error")&&X(s,t)}function X(s,e){return s.isStaleByTime(e.staleTime)}function Le(s,e,t){return t.keepPreviousData?!1:t.placeholderData!==void 0?e.isPlaceholderData:!L(s.getCurrentResult(),e)}class ke extends D{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;const r=this.options;this.options=this.client.defaultMutationOptions(e),L(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(t=this.currentMutation)==null||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;(e=this.currentMutation)==null||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();const t={listeners:!0};e.type==="success"?t.onSuccess=!0:e.type==="error"&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof e<"u"?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const e=this.currentMutation?this.currentMutation.state:fe(),t={...e,isLoading:e.status==="loading",isSuccess:e.status==="success",isError:e.status==="error",isIdle:e.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){O.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(e.onSuccess){var t,r,n,i;(t=(r=this.mutateOptions).onSuccess)==null||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(n=(i=this.mutateOptions).onSettled)==null||n.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(e.onError){var u,a,o,c;(u=(a=this.mutateOptions).onError)==null||u.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(o=(c=this.mutateOptions).onSettled)==null||o.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}e.listeners&&this.listeners.forEach(({listener:l})=>{l(this.currentResult)})})}}const ye=Ce.useSyncExternalStore,ne=P.createContext(void 0),pe=P.createContext(!1);function ve(s,e){return s||(e&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=ne),window.ReactQueryClientContext):ne)}const me=({context:s}={})=>{const e=P.useContext(ve(s,P.useContext(pe)));if(!e)throw new Error("No QueryClient set, use QueryClientProvider to set one");return e},it=({client:s,children:e,context:t,contextSharing:r=!1})=>{P.useEffect(()=>(s.mount(),()=>{s.unmount()}),[s]);const n=ve(t,r);return P.createElement(pe.Provider,{value:!t&&r},P.createElement(n.Provider,{value:s},e))},be=P.createContext(!1),je=()=>P.useContext(be);be.Provider;function Ne(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}const Be=P.createContext(Ne()),He=()=>P.useContext(Be);function ge(s,e){return typeof s=="function"?s(...e):!!s}const Ge=(s,e)=>{(s.suspense||s.useErrorBoundary)&&(e.isReset()||(s.retryOnMount=!1))},ze=s=>{P.useEffect(()=>{s.clearReset()},[s])},Ve=({result:s,errorResetBoundary:e,useErrorBoundary:t,query:r})=>s.isError&&!e.isReset()&&!s.isFetching&&ge(t,[s.error,r]),We=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},Je=(s,e)=>s.isLoading&&s.isFetching&&!e,Xe=(s,e,t)=>(s==null?void 0:s.suspense)&&Je(e,t),Ye=(s,e,t)=>e.fetchOptimistic(s).then(({data:r})=>{s.onSuccess==null||s.onSuccess(r),s.onSettled==null||s.onSettled(r,null)}).catch(r=>{t.clearReset(),s.onError==null||s.onError(r),s.onSettled==null||s.onSettled(void 0,r)});function Ze(s,e){const t=me({context:s.context}),r=je(),n=He(),i=t.defaultQueryOptions(s);i._optimisticResults=r?"isRestoring":"optimistic",i.onError&&(i.onError=O.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=O.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=O.batchCalls(i.onSettled)),We(i),Ge(i,n),ze(n);const[u]=P.useState(()=>new e(t,i)),a=u.getOptimisticResult(i);if(ye(P.useCallback(o=>{const c=r?()=>{}:u.subscribe(O.batchCalls(o));return u.updateResult(),c},[u,r]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),P.useEffect(()=>{u.setOptions(i,{listeners:!1})},[i,u]),Xe(i,a,r))throw Ye(i,u,n);if(Ve({result:a,errorResetBoundary:n,useErrorBoundary:i.useErrorBoundary,query:u.getCurrentQuery()}))throw a.error;return i.notifyOnChangeProps?a:u.trackResult(a)}function nt(s,e,t){const r=A(s,e,t);return Ze(r,Te)}function ut(s,e,t){const r=Se(s,e,t),n=me({context:r.context}),[i]=P.useState(()=>new ke(n,r));P.useEffect(()=>{i.setOptions(r)},[i,r]);const u=ye(P.useCallback(o=>i.subscribe(O.batchCalls(o)),[i]),()=>i.getCurrentResult(),()=>i.getCurrentResult()),a=P.useCallback((o,c)=>{i.mutate(o,c).catch(_e)},[i]);if(u.error&&ge(i.options.useErrorBoundary,[u.error]))throw u.error;return{...u,mutate:a,mutateAsync:u.mutate}}function _e(){}export{rt as Q,nt as a,it as b,ut as u};