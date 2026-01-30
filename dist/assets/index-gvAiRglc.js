(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=s(o);fetch(o.href,i)}})();const H=globalThis,F=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),J=new WeakMap;let ce=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(F&&e===void 0){const r=s!==void 0&&s.length===1;r&&(e=J.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&J.set(s,e))}return e}toString(){return this.cssText}};const ue=t=>new ce(typeof t=="string"?t:t+"",void 0,W),V=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((r,o,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+t[i+1],t[0]);return new ce(s,t,W)},me=(t,e)=>{if(F)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const r=document.createElement("style"),o=H.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=s.cssText,t.appendChild(r)}},X=F?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const r of e.cssRules)s+=r.cssText;return ue(s)})(t):t;const{is:fe,defineProperty:be,getOwnPropertyDescriptor:ve,getOwnPropertyNames:ye,getOwnPropertySymbols:we,getPrototypeOf:xe}=Object,G=globalThis,Q=G.trustedTypes,_e=Q?Q.emptyScript:"",$e=G.reactiveElementPolyfillSupport,D=(t,e)=>t,I={toAttribute(t,e){switch(e){case Boolean:t=t?_e:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},B=(t,e)=>!fe(t,e),ee={attribute:!0,type:String,converter:I,reflect:!1,useDefault:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),G.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=ee){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,s);o!==void 0&&be(this.prototype,e,o)}}static getPropertyDescriptor(e,s,r){const{get:o,set:i}=ve(this.prototype,e)??{get(){return this[s]},set(a){this[s]=a}};return{get:o,set(a){const c=o?.call(this);i?.call(this,a),this.requestUpdate(e,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ee}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const s=this.properties,r=[...ye(s),...we(s)];for(const o of r)this.createProperty(o,s[o])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[r,o]of s)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const o=this._$Eu(s,r);o!==void 0&&this._$Eh.set(o,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)s.unshift(X(o))}else e!==void 0&&s.push(X(e));return s}static _$Eu(e,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){const r=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:I).toAttribute(s,r.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,s){const r=this.constructor,o=r._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:I;this._$Em=o;const c=a.fromAttribute(s,i.type);this[o]=c??this._$Ej?.get(o)??c,this._$Em=null}}requestUpdate(e,s,r,o=!1,i){if(e!==void 0){const a=this.constructor;if(o===!1&&(i=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??B)(i,s)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:o,wrapped:i},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??s??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r){const{wrapped:a}=i,c=this[o];a!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,i,c)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(s)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(s)}willUpdate(e){}_$AE(e){this._$EO?.forEach(s=>s.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(s=>this._$ET(s,this[s])),this._$EM()}updated(e){}firstUpdated(e){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[D("elementProperties")]=new Map,A[D("finalized")]=new Map,$e?.({ReactiveElement:A}),(G.reactiveElementVersions??=[]).push("2.1.2");const q=globalThis,te=t=>t,T=q.trustedTypes,se=T?T.createPolicy("lit-html",{createHTML:t=>t}):void 0,de="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,he="?"+w,ke=`<${he}>`,S=document,M=()=>S.createComment(""),U=t=>t===null||typeof t!="object"&&typeof t!="function",Z=Array.isArray,Se=t=>Z(t)||typeof t?.[Symbol.iterator]=="function",N=`[ 	
\f\r]`,C=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,re=/-->/g,oe=/>/g,_=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ie=/'/g,ae=/"/g,pe=/^(?:script|style|textarea|title)$/i,Ae=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),l=Ae(1),E=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ne=new WeakMap,$=S.createTreeWalker(S,129);function ge(t,e){if(!Z(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return se!==void 0?se.createHTML(e):e}const Ee=(t,e)=>{const s=t.length-1,r=[];let o,i=e===2?"<svg>":e===3?"<math>":"",a=C;for(let c=0;c<s;c++){const n=t[c];let h,g,d=-1,b=0;for(;b<n.length&&(a.lastIndex=b,g=a.exec(n),g!==null);)b=a.lastIndex,a===C?g[1]==="!--"?a=re:g[1]!==void 0?a=oe:g[2]!==void 0?(pe.test(g[2])&&(o=RegExp("</"+g[2],"g")),a=_):g[3]!==void 0&&(a=_):a===_?g[0]===">"?(a=o??C,d=-1):g[1]===void 0?d=-2:(d=a.lastIndex-g[2].length,h=g[1],a=g[3]===void 0?_:g[3]==='"'?ae:ie):a===ae||a===ie?a=_:a===re||a===oe?a=C:(a=_,o=void 0);const y=a===_&&t[c+1].startsWith("/>")?" ":"";i+=a===C?n+ke:d>=0?(r.push(h),n.slice(0,d)+de+n.slice(d)+w+y):n+w+(d===-2?c:y)}return[ge(t,i+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class O{constructor({strings:e,_$litType$:s},r){let o;this.parts=[];let i=0,a=0;const c=e.length-1,n=this.parts,[h,g]=Ee(e,s);if(this.el=O.createElement(h,r),$.currentNode=this.el.content,s===2||s===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=$.nextNode())!==null&&n.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(de)){const b=g[a++],y=o.getAttribute(d).split(w),L=/([.?@])?(.*)/.exec(b);n.push({type:1,index:i,name:L[2],strings:y,ctor:L[1]==="."?Ce:L[1]==="?"?De:L[1]==="@"?Me:R}),o.removeAttribute(d)}else d.startsWith(w)&&(n.push({type:6,index:i}),o.removeAttribute(d));if(pe.test(o.tagName)){const d=o.textContent.split(w),b=d.length-1;if(b>0){o.textContent=T?T.emptyScript:"";for(let y=0;y<b;y++)o.append(d[y],M()),$.nextNode(),n.push({type:2,index:++i});o.append(d[b],M())}}}else if(o.nodeType===8)if(o.data===he)n.push({type:2,index:i});else{let d=-1;for(;(d=o.data.indexOf(w,d+1))!==-1;)n.push({type:7,index:i}),d+=w.length-1}i++}}static createElement(e,s){const r=S.createElement("template");return r.innerHTML=e,r}}function P(t,e,s=t,r){if(e===E)return e;let o=r!==void 0?s._$Co?.[r]:s._$Cl;const i=U(e)?void 0:e._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(t),o._$AT(t,s,r)),r!==void 0?(s._$Co??=[])[r]=o:s._$Cl=o),o!==void 0&&(e=P(t,o._$AS(t,e.values),o,r)),e}class Pe{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:r}=this._$AD,o=(e?.creationScope??S).importNode(s,!0);$.currentNode=o;let i=$.nextNode(),a=0,c=0,n=r[0];for(;n!==void 0;){if(a===n.index){let h;n.type===2?h=new z(i,i.nextSibling,this,e):n.type===1?h=new n.ctor(i,n.name,n.strings,this,e):n.type===6&&(h=new Ue(i,this,e)),this._$AV.push(h),n=r[++c]}a!==n?.index&&(i=$.nextNode(),a++)}return $.currentNode=S,o}p(e){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,s),s+=r.strings.length-2):r._$AI(e[s])),s++}}class z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,s,r,o){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&e?.nodeType===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=P(this,e,s),U(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==E&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Se(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(S.createTextNode(e)),this._$AH=e}$(e){const{values:s,_$litType$:r}=e,o=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=O.createElement(ge(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(s);else{const i=new Pe(o,this),a=i.u(this.options);i.p(s),this.T(a),this._$AH=i}}_$AC(e){let s=ne.get(e.strings);return s===void 0&&ne.set(e.strings,s=new O(e)),s}k(e){Z(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,o=0;for(const i of e)o===s.length?s.push(r=new z(this.O(M()),this.O(M()),this,this.options)):r=s[o],r._$AI(i),o++;o<s.length&&(this._$AR(r&&r._$AB.nextSibling,o),s.length=o)}_$AR(e=this._$AA.nextSibling,s){for(this._$AP?.(!1,!0,s);e!==this._$AB;){const r=te(e).nextSibling;te(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,o,i){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=s,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(e,s=this,r,o){const i=this.strings;let a=!1;if(i===void 0)e=P(this,e,s,0),a=!U(e)||e!==this._$AH&&e!==E,a&&(this._$AH=e);else{const c=e;let n,h;for(e=i[0],n=0;n<i.length-1;n++)h=P(this,c[r+n],s,n),h===E&&(h=this._$AH[n]),a||=!U(h)||h!==this._$AH[n],h===p?e=p:e!==p&&(e+=(h??"")+i[n+1]),this._$AH[n]=h}a&&!o&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ce extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class De extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Me extends R{constructor(e,s,r,o,i){super(e,s,r,o,i),this.type=5}_$AI(e,s=this){if((e=P(this,e,s,0)??p)===E)return;const r=this._$AH,o=e===p&&r!==p||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==p&&(r===p||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ue{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const Oe=q.litHtmlPolyfillSupport;Oe?.(O,z),(q.litHtmlVersions??=[]).push("3.3.2");const ze=(t,e,s)=>{const r=s?.renderBefore??e;let o=r._$litPart$;if(o===void 0){const i=s?.renderBefore??null;r._$litPart$=o=new z(e.insertBefore(M(),i),i,void 0,s??{})}return o._$AI(t),o};const Y=globalThis;class k extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(s,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}}k._$litElement$=!0,k.finalized=!0,Y.litElementHydrateSupport?.({LitElement:k});const Le=Y.litElementPolyfillSupport;Le?.({LitElement:k});(Y.litElementVersions??=[]).push("4.2.2");const K=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};const He={attribute:!0,type:String,converter:I,reflect:!1,hasChanged:B},Ie=(t=He,e,s)=>{const{kind:r,metadata:o}=s;let i=globalThis.litPropertyMetadata.get(o);if(i===void 0&&globalThis.litPropertyMetadata.set(o,i=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(s.name,t),r==="accessor"){const{name:a}=s;return{set(c){const n=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,n,t,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,t,c),c}}}if(r==="setter"){const{name:a}=s;return function(c){const n=this[a];e.call(this,c),this.requestUpdate(a,n,t,!0,c)}}throw Error("Unsupported decorator location: "+r)};function Te(t){return(e,s)=>typeof s=="object"?Ie(t,e,s):((r,o,i)=>{const a=o.hasOwnProperty(i);return o.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(o,i):void 0})(t,e,s)}function u(t){return Te({...t,state:!0,attribute:!1})}const Ge="/assets/calvin-headshot-DvgFd22I.jpg",Re=[{id:"structured-logging-in-go",title:"Structured Logging in Go",summary:"How to use structured logging in Go to make your logs more readable and searchable.",date:"2026-01-30",tags:["Go","Logging","Structured Logging"],content:`
      <h3>Structured Logging in Go</h3>
      <p>Structured logging is a way to format your logs so they can be easily parsed and searched. Instead of free-form text, you log key-value pairs that tools can index and query.</p>
    
      <h4>1. Using the log package</h4>
      <p>The standard log package in Go provides a simple way to log messages to the console:</p>
      <pre><code>log.Println("Hello, World!")</code></pre>
      <p>Let's try it! <a href="https://go.dev/play/p/VvndytwieVX" target="_blank" rel="noopener noreferrer">Run in Go Playground</a></p>
      
      <p>You should see the following output:</p>
      <pre><code>2026/01/30 12:00:00 Hello, World!</code></pre>

      <p>This doesn't give us much information about the log message. We can do better!</p>

      <h4>2. Using the slog package</h4>
      <p>The slog package (short for "structured logging"), introduced in Go 1.21, provides a more powerful logging API:</p>
      <pre><code>slog.Info("hello, world")</code></pre>
      <p>Let's try it! <a href="https://go.dev/play/p/2dxy_54OSXi" target="_blank" rel="noopener noreferrer">Run in Go Playground</a></p>
      
      <p>You should see output like:</p>
      <pre><code>2009/11/10 23:00:00 INFO hello, world</code></pre>

      <p>This doesn't look very different from above. Let's try a more interesting example!</p>

      <h4>3. Adding Context with Attributes</h4>
      <p>Let's say we have a userId that we want to include in each log message. We can create a logger with a userId attribute:</p>

      <pre><code>logger := slog.New(slog.NewTextHandler(os.Stdout, &slog.HandlerOptions{
    AddSource: true,
    Level:     slog.LevelInfo,
})).With("userId", "fb8edcbf-8527-4151-8f06-1538f8fb13c3")

logger.Info("hello, world")</code></pre>
      <p>Let's try it! <a href="https://go.dev/play/p/Zx7W8OR2QVK" target="_blank" rel="noopener noreferrer">Run in Go Playground</a></p>
      
      <p>You should see output like:</p>
      <pre><code>time=2009-11-10T23:00:00.000Z level=INFO source=/tmp/sandbox/prog.go:20 msg="hello, world" userId=fb8edcbf-8527-4151-8f06-1538f8fb13c3</code></pre>

      <p>Now we have the userId in each message without having to add it manually each time!</p>

      <h4>4. JSON Output for Log Ingestion</h4>
      <p>Many log ingestion tools expect JSON formatted logs. We can switch to the JSONHandler to output structured JSON:</p>

      <pre><code>logger := slog.New(slog.NewJSONHandler(os.Stdout, &slog.HandlerOptions{
    AddSource: true,
    Level:     slog.LevelInfo,
})).With("userId", "fb8edcbf-8527-4151-8f06-1538f8fb13c3")

logger.Info("hello, world")</code></pre>
      <p>Let's try it! <a href="https://go.dev/play/p/fFpA-5PnqhM" target="_blank" rel="noopener noreferrer">Run in Go Playground</a></p>
      
      <p>You should see output like:</p>
      <pre><code>{"time":"2009-11-10T23:00:00Z","level":"INFO","source":{"function":"main.main","file":"/tmp/sandbox/prog.go","line":20},"msg":"hello, world","userId":"fb8edcbf-8527-4151-8f06-1538f8fb13c3"}</code></pre>

      <p>With JSON logs, you can search by the <code>userId</code> key in your log ingestion tool and index it for quick lookups!</p>

      <h4>Key Takeaways</h4>
      <ul>
        <li>Use <code>slog</code> instead of <code>log</code> for structured logging</li>
        <li>Add context with <code>.With()</code> to include common fields</li>
        <li>Use <code>TextHandler</code> for human-readable output during development</li>
        <li>Use <code>JSONHandler</code> for production log ingestion systems</li>
      </ul>
    `}];var Ne=Object.defineProperty,je=Object.getOwnPropertyDescriptor,x=(t,e,s,r)=>{for(var o=r>1?void 0:r?je(e,s):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(o=(r?a(e,s,o):a(o))||o);return r&&o&&Ne(e,s,o),o};let f=class extends k{constructor(){super(...arguments),this.GRID_SIZE=20,this.CELL_SIZE=20,this.GAME_SPEED=100,this.snake=[],this.food={x:0,y:0},this.direction="right",this.nextDirection="right",this.score=0,this.highScore=0,this.gameState="idle",this.gameLoop=null}connectedCallback(){super.connectedCallback();const t=localStorage.getItem("snake-high-score");t&&(this.highScore=parseInt(t,10)),this._handleKeydown=this._handleKeydown.bind(this),window.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeydown),this._stopGame()}_initGame(){const t=Math.floor(this.GRID_SIZE/2);this.snake=[{x:t,y:t},{x:t-1,y:t},{x:t-2,y:t}],this.direction="right",this.nextDirection="right",this.score=0,this._spawnFood()}_spawnFood(){let t;do t={x:Math.floor(Math.random()*this.GRID_SIZE),y:Math.floor(Math.random()*this.GRID_SIZE)};while(this.snake.some(e=>e.x===t.x&&e.y===t.y));this.food=t}_startGame(){(this.gameState==="idle"||this.gameState==="gameover")&&this._initGame(),this.gameState="playing",this.gameLoop=window.setInterval(()=>this._tick(),this.GAME_SPEED)}_pauseGame(){this.gameState="paused",this._stopGame()}_stopGame(){this.gameLoop&&(clearInterval(this.gameLoop),this.gameLoop=null)}_tick(){this.direction=this.nextDirection;const t=this.snake[0];let e;switch(this.direction){case"up":e={x:t.x,y:t.y-1};break;case"down":e={x:t.x,y:t.y+1};break;case"left":e={x:t.x-1,y:t.y};break;case"right":e={x:t.x+1,y:t.y};break}if(e.x<0||e.x>=this.GRID_SIZE||e.y<0||e.y>=this.GRID_SIZE){this._gameOver();return}if(this.snake.some(r=>r.x===e.x&&r.y===e.y)){this._gameOver();return}const s=[e,...this.snake];e.x===this.food.x&&e.y===this.food.y?(this.score+=10,this._spawnFood()):s.pop(),this.snake=s}_gameOver(){this._stopGame(),this.gameState="gameover",this.score>this.highScore&&(this.highScore=this.score,localStorage.setItem("snake-high-score",this.highScore.toString()))}_handleKeydown(t){if(this.gameState!=="playing"&&this.gameState!=="paused"){(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this._startGame());return}switch(t.key){case"ArrowUp":case"w":case"W":t.preventDefault(),this.direction!=="down"&&(this.nextDirection="up");break;case"ArrowDown":case"s":case"S":t.preventDefault(),this.direction!=="up"&&(this.nextDirection="down");break;case"ArrowLeft":case"a":case"A":t.preventDefault(),this.direction!=="right"&&(this.nextDirection="left");break;case"ArrowRight":case"d":case"D":t.preventDefault(),this.direction!=="left"&&(this.nextDirection="right");break;case" ":t.preventDefault(),this.gameState==="playing"?this._pauseGame():this.gameState==="paused"&&this._startGame();break;case"Escape":t.preventDefault(),this.gameState==="playing"&&this._pauseGame();break}}render(){const t=this.GRID_SIZE*this.CELL_SIZE;return l`
      <div class="game-container">
        <div class="header">
          <div class="score">Score: ${this.score}</div>
          <div class="high-score">High Score: ${this.highScore}</div>
        </div>

        <div class="game-area" style="width: ${t}px; height: ${t}px;">
          <!-- Grid -->
          <div class="grid">
            ${this.snake.map((e,s)=>l`
              <div 
                class="snake-segment ${s===0?"head":""}"
                style="left: ${e.x*this.CELL_SIZE}px; top: ${e.y*this.CELL_SIZE}px; width: ${this.CELL_SIZE-2}px; height: ${this.CELL_SIZE-2}px;"
              ></div>
            `)}
            <div 
              class="food"
              style="left: ${this.food.x*this.CELL_SIZE}px; top: ${this.food.y*this.CELL_SIZE}px; width: ${this.CELL_SIZE-2}px; height: ${this.CELL_SIZE-2}px;"
            ></div>
          </div>

          <!-- Overlays -->
          ${this.gameState==="idle"?l`
            <div class="overlay">
              <h3>Snake Game</h3>
              <p>Use arrow keys or WASD to move</p>
              <button @click=${this._startGame}>Start Game</button>
              <p class="hint">or press Space/Enter</p>
            </div>
          `:""}

          ${this.gameState==="paused"?l`
            <div class="overlay">
              <h3>Paused</h3>
              <button @click=${this._startGame}>Resume</button>
              <p class="hint">or press Space</p>
            </div>
          `:""}

          ${this.gameState==="gameover"?l`
            <div class="overlay">
              <h3>Game Over!</h3>
              <p>Final Score: ${this.score}</p>
              ${this.score===this.highScore&&this.score>0?l`<p class="new-record">New High Score!</p>`:""}
              <button @click=${this._startGame}>Play Again</button>
              <p class="hint">or press Space/Enter</p>
            </div>
          `:""}
        </div>

        <div class="controls-hint">
          <span>Move: Arrow Keys / WASD</span>
          <span>Pause: Space / Esc</span>
        </div>
      </div>
    `}};f.styles=V`
    :host {
      display: block;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .header {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 400px;
      font-size: 1.1rem;
      font-weight: 600;
    }

    .score {
      color: #00ADD8;
    }

    .high-score {
      color: #888;
    }

    .game-area {
      position: relative;
      background: #1a1a1a;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      overflow: hidden;
    }

    .grid {
      position: relative;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .snake-segment {
      position: absolute;
      background: #00ADD8;
      border-radius: 4px;
      transition: left 0.05s linear, top 0.05s linear;
    }

    .snake-segment.head {
      background: #00d4ff;
      box-shadow: 0 0 10px rgba(0, 173, 216, 0.5);
    }

    .food {
      position: absolute;
      background: #ff6b6b;
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(255, 107, 107, 0.5);
      animation: pulse 0.5s ease-in-out infinite alternate;
    }

    @keyframes pulse {
      from { transform: scale(0.8); }
      to { transform: scale(1); }
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.85);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      text-align: center;
      padding: 1rem;
    }

    .overlay h3 {
      margin: 0;
      font-size: 1.5rem;
      color: #00ADD8;
    }

    .overlay p {
      margin: 0;
      color: #aaa;
    }

    .overlay .new-record {
      color: #ffd700;
      font-weight: 600;
      animation: glow 0.5s ease-in-out infinite alternate;
    }

    @keyframes glow {
      from { text-shadow: 0 0 5px #ffd700; }
      to { text-shadow: 0 0 15px #ffd700; }
    }

    .overlay button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      background: #00ADD8;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .overlay button:hover {
      background: #00c4f5;
      transform: scale(1.05);
    }

    .overlay .hint {
      font-size: 0.85rem;
      color: #666;
    }

    .controls-hint {
      display: flex;
      gap: 2rem;
      font-size: 0.85rem;
      color: #666;
    }

    @media (prefers-color-scheme: light) {
      .game-area {
        background: #f0f0f0;
        border-color: rgba(0, 0, 0, 0.2);
      }

      .grid {
        background-image: 
          linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px);
      }

      .overlay {
        background: rgba(255, 255, 255, 0.9);
      }

      .overlay p {
        color: #555;
      }
    }

    @media (max-width: 500px) {
      .controls-hint {
        flex-direction: column;
        gap: 0.25rem;
        text-align: center;
      }
    }
  `;x([u()],f.prototype,"snake",2);x([u()],f.prototype,"food",2);x([u()],f.prototype,"direction",2);x([u()],f.prototype,"nextDirection",2);x([u()],f.prototype,"score",2);x([u()],f.prototype,"highScore",2);x([u()],f.prototype,"gameState",2);f=x([K("snake-game")],f);var Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,v=(t,e,s,r)=>{for(var o=r>1?void 0:r?We(e,s):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(o=(r?a(e,s,o):a(o))||o);return r&&o&&Fe(e,s,o),o};const le=["hearts","diamonds","clubs","spades"],Ve={1:"A",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K"};let m=class extends k{constructor(){super(...arguments),this.stock=[],this.waste=[],this.foundations=[[],[],[],[]],this.tableau=[[],[],[],[],[],[],[]],this.dragState=null,this.mousePos={x:0,y:0},this.moves=0,this.gameWon=!1,this.boundMouseMove=this._handleMouseMove.bind(this),this.boundMouseUp=this._handleMouseUp.bind(this)}connectedCallback(){super.connectedCallback(),this._newGame()}_handleMouseMove(t){this.dragState&&(this.mousePos={x:t.clientX,y:t.clientY},this.requestUpdate())}_handleMouseUp(t){this.dragState&&(this._handleDrop(t),document.removeEventListener("mousemove",this.boundMouseMove),document.removeEventListener("mouseup",this.boundMouseUp))}_createDeck(){const t=[];for(const e of le)for(let s=1;s<=13;s++)t.push({suit:e,rank:s,faceUp:!1});return t}_shuffle(t){const e=[...t];for(let s=e.length-1;s>0;s--){const r=Math.floor(Math.random()*(s+1));[e[s],e[r]]=[e[r],e[s]]}return e}_newGame(){const t=this._shuffle(this._createDeck());this.tableau=[[],[],[],[],[],[],[]];let e=0;for(let s=0;s<7;s++)for(let r=0;r<=s;r++){const o=t[e++];o.faceUp=r===s,this.tableau[s].push(o)}this.stock=t.slice(e).map(s=>({...s,faceUp:!1})),this.waste=[],this.foundations=[[],[],[],[]],this.moves=0,this.gameWon=!1,this.requestUpdate()}_getColor(t){return t==="hearts"||t==="diamonds"?"red":"black"}_getSuitSymbol(t){switch(t){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠"}}_drawFromStock(){if(this.stock.length===0)this.stock=this.waste.map(t=>({...t,faceUp:!1})).reverse(),this.waste=[];else{const t=this.stock.pop();t.faceUp=!0,this.waste.push(t),this.moves++}this.requestUpdate()}_canPlaceOnTableau(t,e){if(e.length===0)return t.rank===13;const s=e[e.length-1];return s.faceUp?this._getColor(t.suit)!==this._getColor(s.suit)&&t.rank===s.rank-1:!1}_canPlaceOnFoundation(t,e){if(e.length===0)return t.rank===1;const s=e[e.length-1];return t.suit===s.suit&&t.rank===s.rank+1}_startDrag(t,e,s,r,o){t.preventDefault();const i=t.target.getBoundingClientRect();this.dragState={cards:e,sourceType:s,sourceIndex:r,offsetX:t.clientX-i.left,offsetY:t.clientY-i.top,startCardIndex:o},this.mousePos={x:t.clientX,y:t.clientY},document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp),this.requestUpdate()}_handleTableauCardMouseDown(t,e,s){const r=this.tableau[e],o=r[s];if(!o.faceUp){s===r.length-1&&(o.faceUp=!0,this.requestUpdate());return}const i=r.slice(s);i.every(a=>a.faceUp)&&this._startDrag(t,i,"tableau",e,s)}_handleWasteMouseDown(t){if(this.waste.length===0)return;const e=this.waste[this.waste.length-1];this._startDrag(t,[e],"waste",0)}_handleFoundationMouseDown(t,e){const s=this.foundations[e];if(s.length>0){const r=s[s.length-1];this._startDrag(t,[r],"foundation",e)}}_handleDrop(t){if(!this.dragState)return;const e=document.elementsFromPoint(t.clientX,t.clientY);for(const s of e){const r=s.closest(".tableau-pile");if(r){const i=parseInt(r.getAttribute("data-col")||"-1");if(i>=0){this._tryDropOnTableau(i);break}}const o=s.closest(".foundation");if(o){const i=parseInt(o.getAttribute("data-index")||"-1");if(i>=0){this._tryDropOnFoundation(i);break}}}this.dragState=null,this.requestUpdate()}_tryDropOnTableau(t){if(!this.dragState)return!1;const{cards:e,sourceType:s,sourceIndex:r}=this.dragState,o=e[0],i=this.tableau[t];return this._canPlaceOnTableau(o,i)?(this._removeFromSource(s,r,e.length),this.tableau[t]=[...i,...e],this.moves++,this._checkWin(),!0):!1}_tryDropOnFoundation(t){if(!this.dragState||this.dragState.cards.length!==1)return!1;const{cards:e,sourceType:s,sourceIndex:r}=this.dragState,o=e[0],i=this.foundations[t];return this._canPlaceOnFoundation(o,i)?(this._removeFromSource(s,r,1),this.foundations[t]=[...i,o],this.moves++,this._checkWin(),!0):!1}_removeFromSource(t,e,s){if(t==="tableau"){this.tableau[e]=this.tableau[e].slice(0,-s);const r=this.tableau[e];r.length>0&&!r[r.length-1].faceUp&&(r[r.length-1].faceUp=!0)}else t==="waste"?this.waste=this.waste.slice(0,-1):t==="foundation"&&(this.foundations[e]=this.foundations[e].slice(0,-1))}_tryAutoMove(t,e,s){for(let r=0;r<4;r++)if(this._canPlaceOnFoundation(t,this.foundations[r]))return this._removeFromSource(e,s,1),this.foundations[r]=[...this.foundations[r],t],this.moves++,this._checkWin(),this.requestUpdate(),!0;return!1}_handleDoubleClick(t,e,s){this._tryAutoMove(t,e,s)}_checkWin(){this.foundations.reduce((e,s)=>e+s.length,0)===52&&(this.gameWon=!0)}render(){return l`
      <div class="solitaire">
        <div class="header">
          <div class="stats">
            <span>Moves: ${this.moves}</span>
          </div>
          <button class="new-game-btn" @click=${this._newGame}>New Game</button>
        </div>

        <div class="game-board">
          <!-- Stock and Waste -->
          <div class="top-row">
            <div class="stock-waste">
              <div class="stock pile" @click=${this._drawFromStock}>
                ${this.stock.length>0?l`<div class="card back"></div>`:l`<div class="card empty refresh">↻</div>`}
              </div>
              <div class="waste pile" @mousedown=${t=>this._handleWasteMouseDown(t)}>
                ${this.waste.length>0?this._renderCard(this.waste[this.waste.length-1],this.dragState?.sourceType==="waste"):l`<div class="card empty"></div>`}
              </div>
            </div>

            <!-- Foundations -->
            <div class="foundations">
              ${this.foundations.map((t,e)=>l`
                <div 
                  class="foundation pile" 
                  data-index="${e}"
                  @mousedown=${s=>t.length>0?this._handleFoundationMouseDown(s,e):null}
                >
                  ${t.length>0?this._renderCard(t[t.length-1],this.dragState?.sourceType==="foundation"&&this.dragState?.sourceIndex===e):l`<div class="card empty">${this._getSuitSymbol(le[e])}</div>`}
                </div>
              `)}
            </div>
          </div>

          <!-- Tableau -->
          <div class="tableau">
            ${this.tableau.map((t,e)=>l`
              <div class="tableau-pile" data-col="${e}">
                ${t.length===0?l`<div class="card empty"></div>`:t.map((s,r)=>{const o=this.dragState?.sourceType==="tableau"&&this.dragState?.sourceIndex===e&&this.dragState?.startCardIndex!==void 0&&r>=this.dragState.startCardIndex;return l`
                        <div 
                          class="card-wrapper ${o?"dragging":""}"
                          style="top: ${r*25}px"
                          @mousedown=${i=>this._handleTableauCardMouseDown(i,e,r)}
                          @dblclick=${()=>s.faceUp&&r===t.length-1?this._handleDoubleClick(s,"tableau",e):null}
                        >
                          ${this._renderCard(s,o)}
                        </div>
                      `})}
              </div>
            `)}
          </div>
        </div>

        <!-- Dragging cards overlay -->
        ${this.dragState?l`
          <div 
            class="drag-overlay"
            style="left: ${this.mousePos.x-this.dragState.offsetX}px; top: ${this.mousePos.y-this.dragState.offsetY}px;"
          >
            ${this.dragState.cards.map((t,e)=>l`
              <div class="drag-card" style="top: ${e*25}px">
                ${this._renderCard(t,!1)}
              </div>
            `)}
          </div>
        `:""}

        ${this.gameWon?l`
          <div class="win-overlay">
            <div class="win-content">
              <h2>🎉 You Win! 🎉</h2>
              <p>Completed in ${this.moves} moves</p>
              <button @click=${this._newGame}>Play Again</button>
            </div>
          </div>
        `:""}
      </div>
    `}_renderCard(t,e=!1){if(!t.faceUp)return l`<div class="card back"></div>`;const s=this._getColor(t.suit),r=this._getSuitSymbol(t.suit),o=Ve[t.rank];return l`
      <div class="card face ${s} ${e?"selected":""}">
        <div class="card-corner top-left">
          <span class="rank">${o}</span>
          <span class="suit">${r}</span>
        </div>
        <div class="card-center">
          <span class="suit large">${r}</span>
        </div>
        <div class="card-corner bottom-right">
          <span class="rank">${o}</span>
          <span class="suit">${r}</span>
        </div>
      </div>
    `}};m.styles=V`
    :host {
      display: block;
    }

    .solitaire {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background: #0d5c2e;
      border-radius: 12px;
      min-height: 600px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
    }

    .stats {
      font-size: 1rem;
    }

    .new-game-btn {
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 6px;
      color: white;
      cursor: pointer;
      font-size: 0.9rem;
      transition: all 0.2s ease;
    }

    .new-game-btn:hover {
      background: rgba(255, 255, 255, 0.3);
    }

    .game-board {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .top-row {
      display: flex;
      justify-content: space-between;
    }

    .stock-waste {
      display: flex;
      gap: 0.75rem;
    }

    .foundations {
      display: flex;
      gap: 0.75rem;
    }

    .pile {
      cursor: pointer;
    }

    .card {
      width: 70px;
      height: 100px;
      border-radius: 6px;
      position: relative;
      user-select: none;
    }

    .card.empty {
      background: rgba(255, 255, 255, 0.1);
      border: 2px dashed rgba(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      color: rgba(255, 255, 255, 0.4);
    }

    .card.empty.refresh {
      font-size: 2rem;
      cursor: pointer;
    }

    .card.empty.refresh:hover {
      background: rgba(255, 255, 255, 0.15);
    }

    .card.back {
      background: linear-gradient(135deg, #1a4c7c 0%, #2d6aa3 100%);
      border: 2px solid #0d3a5c;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .card.back::after {
      content: '';
      position: absolute;
      inset: 6px;
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 4px;
    }

    .card.face {
      background: white;
      border: 1px solid #ccc;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
    }

    .card.face.selected {
      box-shadow: 0 0 0 3px #ffeb3b, 0 4px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }

    .card.face.red {
      color: #d32f2f;
    }

    .card.face.black {
      color: #212121;
    }

    .card-corner {
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 0.75rem;
      line-height: 1;
    }

    .card-corner.top-left {
      top: 4px;
      left: 4px;
    }

    .card-corner.bottom-right {
      bottom: 4px;
      right: 4px;
      transform: rotate(180deg);
    }

    .card-corner .rank {
      font-weight: bold;
      font-size: 0.9rem;
    }

    .card-corner .suit {
      font-size: 0.8rem;
    }

    .card-center {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .card-center .suit.large {
      font-size: 2rem;
    }

    .tableau {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }

    .tableau-pile {
      position: relative;
      width: 70px;
      min-height: 100px;
    }

    .card-wrapper {
      position: absolute;
      left: 0;
      cursor: pointer;
    }

    .card-wrapper:hover .card.face {
      box-shadow: 0 0 0 2px rgba(255, 235, 59, 0.5);
    }

    /* Dragging */
    .card-wrapper.dragging {
      opacity: 0.4;
    }

    .drag-overlay {
      position: fixed;
      pointer-events: none;
      z-index: 1000;
    }

    .drag-card {
      position: absolute;
      left: 0;
      filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.4));
    }

    /* Win Overlay */
    .win-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .win-content {
      background: linear-gradient(135deg, #1a4c7c 0%, #2d6aa3 100%);
      padding: 3rem;
      border-radius: 16px;
      text-align: center;
      color: white;
      animation: bounce 0.5s ease;
    }

    @keyframes bounce {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    .win-content h2 {
      margin: 0 0 1rem 0;
      font-size: 2rem;
    }

    .win-content p {
      margin: 0 0 1.5rem 0;
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .win-content button {
      padding: 0.75rem 2rem;
      font-size: 1rem;
      font-weight: 600;
      background: #ffeb3b;
      color: #1a4c7c;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .win-content button:hover {
      background: #fff;
      transform: scale(1.05);
    }

    /* Responsive */
    @media (max-width: 600px) {
      .card {
        width: 45px;
        height: 65px;
      }

      .card-corner .rank {
        font-size: 0.7rem;
      }

      .card-corner .suit {
        font-size: 0.6rem;
      }

      .card-center .suit.large {
        font-size: 1.25rem;
      }

      .tableau-pile {
        width: 45px;
        min-height: 65px;
      }

      .card-wrapper {
        top: calc(var(--index, 0) * 18px) !important;
      }

      .solitaire {
        padding: 0.5rem;
      }

      .stock-waste, .foundations {
        gap: 0.35rem;
      }

      .tableau {
        gap: 0.35rem;
      }
    }
  `;v([u()],m.prototype,"stock",2);v([u()],m.prototype,"waste",2);v([u()],m.prototype,"foundations",2);v([u()],m.prototype,"tableau",2);v([u()],m.prototype,"dragState",2);v([u()],m.prototype,"mousePos",2);v([u()],m.prototype,"moves",2);v([u()],m.prototype,"gameWon",2);m=v([K("solitaire-game")],m);var Be=Object.getOwnPropertyDescriptor,qe=(t,e,s,r)=>{for(var o=r>1?void 0:r?Be(e,s):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(o=a(o)||o);return o};let j=class extends k{constructor(){super(...arguments),this.selectedPost=null,this.blogPosts=Re,this.currentView="home",this.games=[{id:"snake",name:"Snake",description:"Classic snake game. Eat food, grow longer, avoid walls!",icon:"🐍",color:"#00ADD8"},{id:"solitaire",name:"Solitaire",description:"Classic Klondike solitaire card game.",icon:"🃏",color:"#e74c3c"}],this._handleHashChange=()=>{this._checkUrlHash()},this.repos=[{name:"warp-prometheus",url:"https://github.com/calvinbrown085/warp-prometheus",description:"Prometheus metrics extension for Rust's Warp library",language:"Rust",languageColor:"#dea584"},{name:"us-state-info-rs",url:"https://github.com/calvinbrown085/us-state-info-rs",description:"Rust library for getting information about the states of the United States",language:"Rust",languageColor:"#dea584"}]}connectedCallback(){super.connectedCallback(),this._checkUrlHash(),window.addEventListener("hashchange",this._handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._handleHashChange)}_checkUrlHash(){const t=window.location.hash.slice(1);if(t==="games/snake"){this.currentView="game-snake",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games/solitaire"){this.currentView="game-solitaire",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games"){this.currentView="games",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t){const e=this.blogPosts.find(s=>s.id===t);if(e){this.currentView="home",this.selectedPost=e,this.requestUpdate(),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".blog")?.scrollIntoView({behavior:"smooth"})});return}}this.currentView="home",this.selectedPost=null,this.requestUpdate()}_navigateTo(t){if(t==="home")window.history.pushState(null,"",window.location.pathname),this.currentView="home";else if(t==="games")window.history.pushState(null,"","#games"),this.currentView="games";else if(t.startsWith("game-")){const e=t.replace("game-","");window.history.pushState(null,"",`#games/${e}`),this.currentView=t}this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"})}render(){switch(this.currentView){case"games":return this._renderGamesHub();case"game-snake":return this._renderGamePage("snake");case"game-solitaire":return this._renderGamePage("solitaire");default:return this._renderHomePage()}}_renderGamesHub(){return l`
      <div class="container games-page">
        <header class="page-header">
          <button class="back-link" @click=${()=>this._navigateTo("home")}>
            ← Back to Home
          </button>
          <h1>
            <svg viewBox="0 0 24 24" fill="currentColor" class="header-icon">
              <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
            </svg>
            Break from Coding
          </h1>
          <p class="page-subtitle">Take a break and play some games!</p>
        </header>

        <section class="games-grid">
          ${this.games.map(t=>l`
            <div class="game-card" @click=${()=>this._navigateTo(`game-${t.id}`)}>
              <div class="game-card-icon" style="background: ${t.color}">
                <span>${t.icon}</span>
              </div>
              <div class="game-card-content">
                <h3>${t.name}</h3>
                <p>${t.description}</p>
              </div>
              <div class="game-card-arrow">→</div>
            </div>
          `)}
        </section>
      </div>
    `}_renderGamePage(t){const e=this.games.find(s=>s.id===t);return e?l`
      <div class="container game-page">
        <header class="page-header">
          <button class="back-link" @click=${()=>this._navigateTo("games")}>
            ← Back to Games
          </button>
          <h1>
            <span class="game-emoji">${e.icon}</span>
            ${e.name}
          </h1>
        </header>

        <section class="game-container">
          ${t==="snake"?l`<snake-game></snake-game>`:""}
          ${t==="solitaire"?l`<solitaire-game></solitaire-game>`:""}
        </section>
      </div>
    `:l`<p>Game not found</p>`}_renderHomePage(){return l`
      <div class="container">
        <!-- Hero Section -->
        <section class="hero">
          <div class="profile-picture">
            <img src=${Ge} alt="Calvin Brown" class="avatar-image" />
          </div>
          
          <h1>Calvin Brown</h1>
          <p class="tagline">Software Engineer</p>
          
          <div class="social-links">
            <a href="https://github.com/calvinbrown085" target="_blank" rel="noopener noreferrer" class="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/calvin-brown-6ab208aa" target="_blank" rel="noopener noreferrer" class="social-link linkedin">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </section>

        <!-- About Section -->
        <section class="about">
          <h2>About Me</h2>
          <p>
            Welcome to my personal site! I'm a software engineer passionate about building 
            robust and scalable systems. I enjoy working with technologies like Rust, Go, 
            and TypeScript to create tools that make developers' lives easier.
          </p>
          <p>
            <!-- Add more about yourself here -->
            Feel free to explore my projects below and reach out if you'd like to collaborate!
          </p>
        </section>

        <!-- Projects Section -->
        <section class="projects">
          <h2>Featured Projects</h2>
          <div class="repo-grid">
            ${this.repos.map(t=>l`
              <a href=${t.url} target="_blank" rel="noopener noreferrer" class="repo-card">
                <div class="repo-header">
                  <svg viewBox="0 0 16 16" fill="currentColor" class="repo-icon">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                  </svg>
                  <span class="repo-name">${t.name}</span>
                </div>
                <p class="repo-description">${t.description}</p>
                <div class="repo-footer">
                  <span class="language">
                    <span class="language-dot" style="background-color: ${t.languageColor}"></span>
                    ${t.language}
                  </span>
                </div>
              </a>
            `)}
            
          
          </div>
        </section>

        <!-- Blog Section -->
        <section class="blog">
          <h2>
            <svg viewBox="0 0 24 24" fill="currentColor" class="section-icon">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            Blog Posts
          </h2>
          
          ${this.selectedPost?this._renderFullPost():this._renderPostList()}
        </section>

        <!-- Games Link -->
        <section class="games-link-section">
          <div class="games-link-card" @click=${()=>this._navigateTo("games")}>
            <div class="games-link-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S18.67 9 19.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <div class="games-link-content">
              <h3>Break from Coding</h3>
              <p>Need a break? Play some games!</p>
            </div>
            <div class="games-link-arrow">→</div>
          </div>
        </section>

        <!-- Footer -->
        <footer>
          
          <p>
            <p><a href="mailto:calvin.brown@jackhenry.com">me@calvinbrown.dev</a></p> 
            
          </p>
          <p>&copy; ${new Date().getFullYear()} Calvin Brown. Built with Lit + Vite.</p>
        </footer>
      </div>
    `}_renderPostList(){return l`
      <div class="blog-grid">
        ${this.blogPosts.map(t=>l`
          <article class="blog-card" @click=${()=>this._openPost(t)}>
            <div class="blog-header">
              <span class="blog-date">${this._formatDate(t.date)}</span>
              <div class="blog-tags">
                ${t.tags.map(e=>l`<span class="tag">${e}</span>`)}
              </div>
            </div>
            <h3 class="blog-title">${t.title}</h3>
            <p class="blog-summary">${t.summary}</p>
            <span class="read-more">Read more →</span>
          </article>
        `)}
        
        <article class="blog-card add-more">
          <p>More posts coming soon...</p>
        </article>
      </div>
    `}_renderFullPost(){const t=this.selectedPost;return l`
      <div class="full-post">
        <button class="back-button" @click=${this._closePost}>
          ← Back to all posts
        </button>
        <article class="post-content">
          <div class="post-meta">
            <span class="blog-date">${this._formatDate(t.date)}</span>
            <div class="blog-tags">
              ${t.tags.map(e=>l`<span class="tag">${e}</span>`)}
            </div>
          </div>
          <div .innerHTML=${t.content}></div>
        </article>
      </div>
    `}_openPost(t){this.selectedPost=t,window.history.pushState(null,"",`#${t.id}`),this.requestUpdate(),this.shadowRoot?.querySelector(".blog")?.scrollIntoView({behavior:"smooth"})}_closePost(){this.selectedPost=null,window.history.pushState(null,"",window.location.pathname),this.requestUpdate()}_formatDate(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}};j.styles=V`
    :host {
      display: block;
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    /* Hero Section */
    .hero {
      text-align: center;
      padding: 2rem 0;
    }

    .profile-picture {
      margin-bottom: 1.5rem;
    }

    .placeholder-avatar {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
    }

    .placeholder-avatar svg {
      width: 80px;
      height: 80px;
      color: white;
      opacity: 0.9;
    }

    .avatar-image {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    }

    h1 {
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .tagline {
      font-size: 1.25rem;
      color: #888;
      margin: 0 0 1.5rem 0;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      justify-content: center;
    }

    .social-link {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      background: #1a1a1a;
      color: white;
      text-decoration: none;
      transition: all 0.2s ease;
    }

    .social-link:hover {
      background: #333;
      transform: translateY(-2px);
    }

    .social-link.linkedin:hover {
      background: #0077b5;
    }

    .social-link svg {
      width: 20px;
      height: 20px;
    }

    /* About Section */
    .about {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 16px;
      padding: 2rem;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .about h2 {
      margin-top: 0;
      font-size: 1.5rem;
    }

    .about p {
      color: #aaa;
      line-height: 1.8;
      margin-bottom: 1rem;
    }

    .about p:last-child {
      margin-bottom: 0;
    }

    /* Projects Section */
    .projects h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .repo-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .repo-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .repo-card:hover {
      border-color: #667eea;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    }

    .repo-card.add-more {
      border-style: dashed;
      justify-content: center;
      align-items: center;
      color: #666;
    }

    .repo-card.add-more:hover {
      transform: none;
      box-shadow: none;
    }

    .repo-header {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.75rem;
    }

    .repo-icon {
      width: 16px;
      height: 16px;
      color: #888;
    }

    .repo-name {
      font-weight: 600;
      color: #667eea;
    }

    .repo-description {
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.5;
      flex-grow: 1;
      margin: 0 0 1rem 0;
    }

    .repo-footer {
      display: flex;
      gap: 1rem;
    }

    .language {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.85rem;
      color: #888;
    }

    .language-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }

    /* Blog Section */
    .blog h2 {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .section-icon {
      width: 24px;
      height: 24px;
      color: #00ADD8;
    }

    .blog-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .blog-card {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .blog-card:hover {
      border-color: #00ADD8;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 173, 216, 0.2);
    }

    .blog-card.add-more {
      border-style: dashed;
      justify-content: center;
      align-items: center;
      color: #666;
      cursor: default;
    }

    .blog-card.add-more:hover {
      transform: none;
      box-shadow: none;
      border-color: rgba(255, 255, 255, 0.1);
    }

    .blog-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 0.75rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .blog-date {
      font-size: 0.85rem;
      color: #888;
    }

    .blog-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .tag {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      background: rgba(0, 173, 216, 0.2);
      color: #00ADD8;
      border-radius: 4px;
    }

    .blog-title {
      font-size: 1.25rem;
      margin: 0 0 0.75rem 0;
      color: #fff;
    }

    .blog-summary {
      color: #aaa;
      font-size: 0.9rem;
      line-height: 1.6;
      flex-grow: 1;
      margin: 0 0 1rem 0;
    }

    .read-more {
      color: #00ADD8;
      font-size: 0.9rem;
      font-weight: 500;
    }

    /* Full Post View */
    .full-post {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 2rem;
    }

    .back-button {
      background: none;
      border: none;
      color: #00ADD8;
      cursor: pointer;
      font-size: 0.9rem;
      padding: 0;
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .back-button:hover {
      text-decoration: underline;
    }

    .post-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .post-content {
      line-height: 1.8;
    }

    .post-content h3 {
      font-size: 1.75rem;
      margin: 0 0 1rem 0;
    }

    .post-content h4 {
      font-size: 1.25rem;
      margin: 1.5rem 0 0.75rem 0;
      color: #00ADD8;
    }

    .post-content p {
      color: #bbb;
      margin-bottom: 1rem;
    }

    .post-content pre {
      background: #1a1a1a;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
      margin: 1rem 0;
    }

    .post-content code {
      font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', monospace;
      font-size: 0.9rem;
      color: #e0e0e0;
    }

    /* Games Link Section */
    .games-link-section {
      margin: 1rem 0;
    }

    .games-link-card {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem;
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 142, 83, 0.1) 100%);
      border: 1px solid rgba(255, 107, 107, 0.3);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .games-link-card:hover {
      border-color: #ff6b6b;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(255, 107, 107, 0.2);
    }

    .games-link-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .games-link-icon svg {
      width: 32px;
      height: 32px;
      color: white;
    }

    .games-link-content {
      flex-grow: 1;
    }

    .games-link-content h3 {
      margin: 0 0 0.25rem 0;
      font-size: 1.25rem;
      color: #ff6b6b;
    }

    .games-link-content p {
      margin: 0;
      color: #888;
    }

    .games-link-arrow {
      font-size: 1.5rem;
      color: #ff6b6b;
      transition: transform 0.2s ease;
    }

    .games-link-card:hover .games-link-arrow {
      transform: translateX(4px);
    }

    /* Games Page */
    .games-page {
      min-height: 100vh;
    }

    .page-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .back-link {
      background: none;
      border: none;
      color: #667eea;
      cursor: pointer;
      font-size: 1rem;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
    }

    .back-link:hover {
      text-decoration: underline;
    }

    .page-header h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      font-size: 2rem;
      margin: 0 0 0.5rem 0;
      background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .header-icon {
      width: 32px;
      height: 32px;
      color: #ff6b6b;
      /* Reset the gradient text for the icon */
      -webkit-text-fill-color: initial;
    }

    .page-subtitle {
      color: #888;
      margin: 0;
    }

    /* Games Grid */
    .games-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .game-card {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1.5rem;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .game-card:hover {
      border-color: rgba(255, 255, 255, 0.3);
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    }

    .game-card-icon {
      width: 64px;
      height: 64px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: 2rem;
    }

    .game-card-content {
      flex-grow: 1;
    }

    .game-card-content h3 {
      margin: 0 0 0.25rem 0;
      font-size: 1.25rem;
    }

    .game-card-content p {
      margin: 0;
      color: #888;
      font-size: 0.9rem;
    }

    .game-card-arrow {
      font-size: 1.5rem;
      color: #888;
      transition: transform 0.2s ease;
    }

    .game-card:hover .game-card-arrow {
      transform: translateX(4px);
      color: #fff;
    }

    /* Individual Game Page */
    .game-page .page-header h1 {
      background: none;
      -webkit-text-fill-color: initial;
      color: #fff;
    }

    .game-emoji {
      font-size: 2rem;
      margin-right: 0.25rem;
    }

    .game-container {
      display: flex;
      justify-content: center;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 2rem 0;
      color: #666;
      font-size: 0.9rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    /* Light mode adjustments */
    @media (prefers-color-scheme: light) {
      .social-link {
        background: #f0f0f0;
        color: #333;
      }

      .social-link:hover {
        background: #e0e0e0;
      }

      .social-link.linkedin:hover {
        background: #0077b5;
        color: white;
      }

      .about {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .about p {
        color: #555;
      }

      .repo-card {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .repo-description {
        color: #555;
      }

      .blog-card {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .blog-card:hover {
        border-color: #00ADD8;
      }

      .blog-card.add-more:hover {
        border-color: rgba(0, 0, 0, 0.1);
      }

      .blog-title {
        color: #213547;
      }

      .blog-summary {
        color: #555;
      }

      .full-post {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .post-content p {
        color: #555;
      }

      .post-content pre {
        background: #f5f5f5;
        border-color: rgba(0, 0, 0, 0.1);
      }

      .post-content code {
        color: #333;
      }

      footer {
        border-color: rgba(0, 0, 0, 0.1);
        color: #888;
      }

      .games-link-card {
        background: linear-gradient(135deg, rgba(255, 107, 107, 0.08) 0%, rgba(255, 142, 83, 0.08) 100%);
      }

      .games-link-content h3 {
        color: #e55555;
      }

      .games-link-content p {
        color: #666;
      }

      .game-card {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .game-card:hover {
        border-color: rgba(0, 0, 0, 0.3);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .game-card-content p {
        color: #666;
      }

      .game-card-arrow {
        color: #999;
      }

      .game-card:hover .game-card-arrow {
        color: #333;
      }

      .game-page .page-header h1 {
        color: #213547;
      }
    }

    /* Responsive */
    @media (max-width: 600px) {
      :host {
        padding: 1rem;
      }

      h1 {
        font-size: 2rem;
      }

      .placeholder-avatar,
      .avatar-image {
        width: 120px;
        height: 120px;
      }

      .placeholder-avatar svg {
        width: 60px;
        height: 60px;
      }
    }
  `;j=qe([K("my-element")],j);
