(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const ne=globalThis,we=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),Ee=new WeakMap;let Ve=class{constructor(e,r,o){if(this._$cssResult$=!0,o!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(we&&e===void 0){const o=r!==void 0&&r.length===1;o&&(e=Ee.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ee.set(r,e))}return e}toString(){return this.cssText}};const Xe=t=>new Ve(typeof t=="string"?t:t+"",void 0,ye),E=(t,...e)=>{const r=t.length===1?t[0]:e.reduce((o,s,i)=>o+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[i+1],t[0]);return new Ve(r,t,ye)},Qe=(t,e)=>{if(we)t.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const o=document.createElement("style"),s=ne.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,t.appendChild(o)}},Te=we?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let r="";for(const o of e.cssRules)r+=o.cssText;return Xe(r)})(t):t;const{is:et,defineProperty:tt,getOwnPropertyDescriptor:rt,getOwnPropertyNames:ot,getOwnPropertySymbols:st,getPrototypeOf:it}=Object,pe=globalThis,De=pe.trustedTypes,at=De?De.emptyScript:"",nt=pe.reactiveElementPolyfillSupport,te=(t,e)=>t,de={toAttribute(t,e){switch(e){case Boolean:t=t?at:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let r=t;switch(e){case Boolean:r=t!==null;break;case Number:r=t===null?null:Number(t);break;case Object:case Array:try{r=JSON.parse(t)}catch{r=null}}return r}},ke=(t,e)=>!et(t,e),Me={attribute:!0,type:String,converter:de,reflect:!1,useDefault:!1,hasChanged:ke};Symbol.metadata??=Symbol("metadata"),pe.litPropertyMetadata??=new WeakMap;let F=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=Me){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const o=Symbol(),s=this.getPropertyDescriptor(e,o,r);s!==void 0&&tt(this.prototype,e,s)}}static getPropertyDescriptor(e,r,o){const{get:s,set:i}=rt(this.prototype,e)??{get(){return this[r]},set(a){this[r]=a}};return{get:s,set(a){const c=s?.call(this);i?.call(this,a),this.requestUpdate(e,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Me}static _$Ei(){if(this.hasOwnProperty(te("elementProperties")))return;const e=it(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(te("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(te("properties"))){const r=this.properties,o=[...ot(r),...st(r)];for(const s of o)this.createProperty(s,r[s])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[o,s]of r)this.elementProperties.set(o,s)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const s=this._$Eu(r,o);s!==void 0&&this._$Eh.set(s,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const s of o)r.unshift(Te(s))}else e!==void 0&&r.push(Te(e));return r}static _$Eu(e,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(e.set(o,this[o]),delete this[o]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Qe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,r,o){this._$AK(e,o)}_$ET(e,r){const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const i=(o.converter?.toAttribute!==void 0?o.converter:de).toAttribute(r,o.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,r){const o=this.constructor,s=o._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const i=o.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:de;this._$Em=s;const c=a.fromAttribute(r,i.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(e,r,o,s=!1,i){if(e!==void 0){const a=this.constructor;if(s===!1&&(i=this[e]),o??=a.getPropertyOptions(e),!((o.hasChanged??ke)(i,r)||o.useDefault&&o.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,o))))return;this.C(e,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:o,reflect:s,wrapped:i},a){o&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??r??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||o||(r=void 0),this._$AL.set(e,r)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,i]of o){const{wrapped:a}=i,c=this[s];a!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,i,c)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(r)}willUpdate(e){}_$AE(e){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(e){}firstUpdated(e){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[te("elementProperties")]=new Map,F[te("finalized")]=new Map,nt?.({ReactiveElement:F}),(pe.reactiveElementVersions??=[]).push("2.1.2");const Se=globalThis,ze=t=>t,he=Se.trustedTypes,Ie=he?he.createPolicy("lit-html",{createHTML:t=>t}):void 0,je="$lit$",I=`lit$${Math.random().toFixed(9).slice(2)}$`,Ne="?"+I,lt=`<${Ne}>`,N=document,re=()=>N.createComment(""),oe=t=>t===null||typeof t!="object"&&typeof t!="function",$e=Array.isArray,ct=t=>$e(t)||typeof t?.[Symbol.iterator]=="function",ve=`[ 	
\f\r]`,Q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Re=/-->/g,Oe=/>/g,B=RegExp(`>|${ve}(?:([^\\s"'>=/]+)(${ve}*=${ve}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Le=/'/g,Ge=/"/g,We=/^(?:script|style|textarea|title)$/i,dt=t=>(e,...r)=>({_$litType$:t,strings:e,values:r}),l=dt(1),J=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),Be=new WeakMap,V=N.createTreeWalker(N,129);function qe(t,e){if(!$e(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ie!==void 0?Ie.createHTML(e):e}const ht=(t,e)=>{const r=t.length-1,o=[];let s,i=e===2?"<svg>":e===3?"<math>":"",a=Q;for(let c=0;c<r;c++){const n=t[c];let d,p,g=-1,b=0;for(;b<n.length&&(a.lastIndex=b,p=a.exec(n),p!==null);)b=a.lastIndex,a===Q?p[1]==="!--"?a=Re:p[1]!==void 0?a=Oe:p[2]!==void 0?(We.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=B):p[3]!==void 0&&(a=B):a===B?p[0]===">"?(a=s??Q,g=-1):p[1]===void 0?g=-2:(g=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?B:p[3]==='"'?Ge:Le):a===Ge||a===Le?a=B:a===Re||a===Oe?a=Q:(a=B,s=void 0);const m=a===B&&t[c+1].startsWith("/>")?" ":"";i+=a===Q?n+lt:g>=0?(o.push(d),n.slice(0,g)+je+n.slice(g)+I+m):n+I+(g===-2?c:m)}return[qe(t,i+(t[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),o]};class se{constructor({strings:e,_$litType$:r},o){let s;this.parts=[];let i=0,a=0;const c=e.length-1,n=this.parts,[d,p]=ht(e,r);if(this.el=se.createElement(d,o),V.currentNode=this.el.content,r===2||r===3){const g=this.el.content.firstChild;g.replaceWith(...g.childNodes)}for(;(s=V.nextNode())!==null&&n.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const g of s.getAttributeNames())if(g.endsWith(je)){const b=p[a++],m=s.getAttribute(g).split(I),$=/([.?@])?(.*)/.exec(b);n.push({type:1,index:i,name:$[2],strings:m,ctor:$[1]==="."?gt:$[1]==="?"?ut:$[1]==="@"?ft:ge}),s.removeAttribute(g)}else g.startsWith(I)&&(n.push({type:6,index:i}),s.removeAttribute(g));if(We.test(s.tagName)){const g=s.textContent.split(I),b=g.length-1;if(b>0){s.textContent=he?he.emptyScript:"";for(let m=0;m<b;m++)s.append(g[m],re()),V.nextNode(),n.push({type:2,index:++i});s.append(g[b],re())}}}else if(s.nodeType===8)if(s.data===Ne)n.push({type:2,index:i});else{let g=-1;for(;(g=s.data.indexOf(I,g+1))!==-1;)n.push({type:7,index:i}),g+=I.length-1}i++}}static createElement(e,r){const o=N.createElement("template");return o.innerHTML=e,o}}function Z(t,e,r=t,o){if(e===J)return e;let s=o!==void 0?r._$Co?.[o]:r._$Cl;const i=oe(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(t),s._$AT(t,r,o)),o!==void 0?(r._$Co??=[])[o]=s:r._$Cl=s),s!==void 0&&(e=Z(t,s._$AS(t,e.values),s,o)),e}class pt{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:o}=this._$AD,s=(e?.creationScope??N).importNode(r,!0);V.currentNode=s;let i=V.nextNode(),a=0,c=0,n=o[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new ie(i,i.nextSibling,this,e):n.type===1?d=new n.ctor(i,n.name,n.strings,this,e):n.type===6&&(d=new bt(i,this,e)),this._$AV.push(d),n=o[++c]}a!==n?.index&&(i=V.nextNode(),a++)}return V.currentNode=N,s}p(e){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,r),r+=o.strings.length-2):o._$AI(e[r])),r++}}class ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,r,o,s){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=o,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&e?.nodeType===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=Z(this,e,r),oe(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==J&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ct(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&oe(this._$AH)?this._$AA.nextSibling.data=e:this.T(N.createTextNode(e)),this._$AH=e}$(e){const{values:r,_$litType$:o}=e,s=typeof o=="number"?this._$AC(e):(o.el===void 0&&(o.el=se.createElement(qe(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===s)this._$AH.p(r);else{const i=new pt(s,this),a=i.u(this.options);i.p(r),this.T(a),this._$AH=i}}_$AC(e){let r=Be.get(e.strings);return r===void 0&&Be.set(e.strings,r=new se(e)),r}k(e){$e(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const i of e)s===r.length?r.push(o=new ie(this.O(re()),this.O(re()),this,this.options)):o=r[s],o._$AI(i),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(e=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);e!==this._$AB;){const o=ze(e).nextSibling;ze(e).remove(),e=o}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class ge{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,o,s,i){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=r,this._$AM=s,this.options=i,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=f}_$AI(e,r=this,o,s){const i=this.strings;let a=!1;if(i===void 0)e=Z(this,e,r,0),a=!oe(e)||e!==this._$AH&&e!==J,a&&(this._$AH=e);else{const c=e;let n,d;for(e=i[0],n=0;n<i.length-1;n++)d=Z(this,c[o+n],r,n),d===J&&(d=this._$AH[n]),a||=!oe(d)||d!==this._$AH[n],d===f?e=f:e!==f&&(e+=(d??"")+i[n+1]),this._$AH[n]=d}a&&!s&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class gt extends ge{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class ut extends ge{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class ft extends ge{constructor(e,r,o,s,i){super(e,r,o,s,i),this.type=5}_$AI(e,r=this){if((e=Z(this,e,r,0)??f)===J)return;const o=this._$AH,s=e===f&&o!==f||e.capture!==o.capture||e.once!==o.once||e.passive!==o.passive,i=e!==f&&(o===f||s);s&&this.element.removeEventListener(this.name,this,o),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class bt{constructor(e,r,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){Z(this,e)}}const mt=Se.litHtmlPolyfillSupport;mt?.(se,ie),(Se.litHtmlVersions??=[]).push("3.3.2");const vt=(t,e,r)=>{const o=r?.renderBefore??e;let s=o._$litPart$;if(s===void 0){const i=r?.renderBefore??null;o._$litPart$=s=new ie(e.insertBefore(re(),i),i,void 0,r??{})}return s._$AI(t),s};const Pe=globalThis;class v extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vt(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}v._$litElement$=!0,v.finalized=!0,Pe.litElementHydrateSupport?.({LitElement:v});const xt=Pe.litElementPolyfillSupport;xt?.({LitElement:v});(Pe.litElementVersions??=[]).push("4.2.2");const T=t=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};const _t={attribute:!0,type:String,converter:de,reflect:!1,hasChanged:ke},wt=(t=_t,e,r)=>{const{kind:o,metadata:s}=r;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),o==="setter"&&((t=Object.create(t)).wrapped=!0),i.set(r.name,t),o==="accessor"){const{name:a}=r;return{set(c){const n=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,n,t,!0,c)},init(c){return c!==void 0&&this.C(a,void 0,t,c),c}}}if(o==="setter"){const{name:a}=r;return function(c){const n=this[a];e.call(this,c),this.requestUpdate(a,n,t,!0,c)}}throw Error("Unsupported decorator location: "+o)};function ue(t){return(e,r)=>typeof r=="object"?wt(t,e,r):((o,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,o),a?Object.getOwnPropertyDescriptor(s,i):void 0})(t,e,r)}function h(t){return ue({...t,state:!0,attribute:!1})}const yt="/assets/calvin-headshot-DvgFd22I.jpg",kt=[{id:"structured-logging-in-go",title:"Structured Logging in Go",summary:"How to use structured logging in Go to make your logs more readable and searchable.",date:"2026-01-30",tags:["Go","Logging","Structured Logging"],content:`
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
    `}];var St=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,O=(t,e,r,o)=>{for(var s=o>1?void 0:o?$t(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&St(e,r,s),s};let y=class extends v{constructor(){super(...arguments),this.GRID_SIZE=20,this.CELL_SIZE=20,this.GAME_SPEED=100,this.snake=[],this.food={x:0,y:0},this.direction="right",this.nextDirection="right",this.score=0,this.highScore=0,this.gameState="idle",this.gameLoop=null}connectedCallback(){super.connectedCallback();const t=localStorage.getItem("snake-high-score");t&&(this.highScore=parseInt(t,10)),this._handleKeydown=this._handleKeydown.bind(this),window.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeydown),this._stopGame()}_initGame(){const t=Math.floor(this.GRID_SIZE/2);this.snake=[{x:t,y:t},{x:t-1,y:t},{x:t-2,y:t}],this.direction="right",this.nextDirection="right",this.score=0,this._spawnFood()}_spawnFood(){let t;do t={x:Math.floor(Math.random()*this.GRID_SIZE),y:Math.floor(Math.random()*this.GRID_SIZE)};while(this.snake.some(e=>e.x===t.x&&e.y===t.y));this.food=t}_startGame(){(this.gameState==="idle"||this.gameState==="gameover")&&this._initGame(),this.gameState="playing",this.gameLoop=window.setInterval(()=>this._tick(),this.GAME_SPEED)}_pauseGame(){this.gameState="paused",this._stopGame()}_stopGame(){this.gameLoop&&(clearInterval(this.gameLoop),this.gameLoop=null)}_tick(){this.direction=this.nextDirection;const t=this.snake[0];let e;switch(this.direction){case"up":e={x:t.x,y:t.y-1};break;case"down":e={x:t.x,y:t.y+1};break;case"left":e={x:t.x-1,y:t.y};break;case"right":e={x:t.x+1,y:t.y};break}if(e.x<0||e.x>=this.GRID_SIZE||e.y<0||e.y>=this.GRID_SIZE){this._gameOver();return}if(this.snake.some(o=>o.x===e.x&&o.y===e.y)){this._gameOver();return}const r=[e,...this.snake];e.x===this.food.x&&e.y===this.food.y?(this.score+=10,this._spawnFood()):r.pop(),this.snake=r}_gameOver(){this._stopGame(),this.gameState="gameover",this.score>this.highScore&&(this.highScore=this.score,localStorage.setItem("snake-high-score",this.highScore.toString()))}_handleKeydown(t){if(this.gameState!=="playing"&&this.gameState!=="paused"){(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this._startGame());return}switch(t.key){case"ArrowUp":case"w":case"W":t.preventDefault(),this.direction!=="down"&&(this.nextDirection="up");break;case"ArrowDown":case"s":case"S":t.preventDefault(),this.direction!=="up"&&(this.nextDirection="down");break;case"ArrowLeft":case"a":case"A":t.preventDefault(),this.direction!=="right"&&(this.nextDirection="left");break;case"ArrowRight":case"d":case"D":t.preventDefault(),this.direction!=="left"&&(this.nextDirection="right");break;case" ":t.preventDefault(),this.gameState==="playing"?this._pauseGame():this.gameState==="paused"&&this._startGame();break;case"Escape":t.preventDefault(),this.gameState==="playing"&&this._pauseGame();break}}render(){const t=this.GRID_SIZE*this.CELL_SIZE;return l`
      <div class="game-container">
        <div class="header">
          <div class="score">Score: ${this.score}</div>
          <div class="high-score">High Score: ${this.highScore}</div>
        </div>

        <div class="game-area" style="width: ${t}px; height: ${t}px;">
          <!-- Grid -->
          <div class="grid">
            ${this.snake.map((e,r)=>l`
              <div 
                class="snake-segment ${r===0?"head":""}"
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
    `}};y.styles=E`
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
  `;O([h()],y.prototype,"snake",2);O([h()],y.prototype,"food",2);O([h()],y.prototype,"direction",2);O([h()],y.prototype,"nextDirection",2);O([h()],y.prototype,"score",2);O([h()],y.prototype,"highScore",2);O([h()],y.prototype,"gameState",2);y=O([T("snake-game")],y);var Pt=Object.defineProperty,At=Object.getOwnPropertyDescriptor,D=(t,e,r,o)=>{for(var s=o>1?void 0:o?At(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Pt(e,r,s),s};const He=["hearts","diamonds","clubs","spades"],Ct={1:"A",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K"};let x=class extends v{constructor(){super(...arguments),this.stock=[],this.waste=[],this.foundations=[[],[],[],[]],this.tableau=[[],[],[],[],[],[],[]],this.dragState=null,this.mousePos={x:0,y:0},this.moves=0,this.gameWon=!1,this.boundMouseMove=this._handleMouseMove.bind(this),this.boundMouseUp=this._handleMouseUp.bind(this)}connectedCallback(){super.connectedCallback(),this._newGame()}_handleMouseMove(t){this.dragState&&(this.mousePos={x:t.clientX,y:t.clientY},this.requestUpdate())}_handleMouseUp(t){this.dragState&&(this._handleDrop(t),document.removeEventListener("mousemove",this.boundMouseMove),document.removeEventListener("mouseup",this.boundMouseUp))}_createDeck(){const t=[];for(const e of He)for(let r=1;r<=13;r++)t.push({suit:e,rank:r,faceUp:!1});return t}_shuffle(t){const e=[...t];for(let r=e.length-1;r>0;r--){const o=Math.floor(Math.random()*(r+1));[e[r],e[o]]=[e[o],e[r]]}return e}_newGame(){const t=this._shuffle(this._createDeck());this.tableau=[[],[],[],[],[],[],[]];let e=0;for(let r=0;r<7;r++)for(let o=0;o<=r;o++){const s=t[e++];s.faceUp=o===r,this.tableau[r].push(s)}this.stock=t.slice(e).map(r=>({...r,faceUp:!1})),this.waste=[],this.foundations=[[],[],[],[]],this.moves=0,this.gameWon=!1,this.requestUpdate()}_getColor(t){return t==="hearts"||t==="diamonds"?"red":"black"}_getSuitSymbol(t){switch(t){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠"}}_drawFromStock(){if(this.stock.length===0)this.stock=this.waste.map(t=>({...t,faceUp:!1})).reverse(),this.waste=[];else{const t=this.stock.pop();t.faceUp=!0,this.waste.push(t),this.moves++}this.requestUpdate()}_canPlaceOnTableau(t,e){if(e.length===0)return t.rank===13;const r=e[e.length-1];return r.faceUp?this._getColor(t.suit)!==this._getColor(r.suit)&&t.rank===r.rank-1:!1}_canPlaceOnFoundation(t,e){if(e.length===0)return t.rank===1;const r=e[e.length-1];return t.suit===r.suit&&t.rank===r.rank+1}_startDrag(t,e,r,o,s){t.preventDefault();const i=t.target.getBoundingClientRect();this.dragState={cards:e,sourceType:r,sourceIndex:o,offsetX:t.clientX-i.left,offsetY:t.clientY-i.top,startCardIndex:s},this.mousePos={x:t.clientX,y:t.clientY},document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp),this.requestUpdate()}_handleTableauCardMouseDown(t,e,r){const o=this.tableau[e],s=o[r];if(!s.faceUp){r===o.length-1&&(s.faceUp=!0,this.requestUpdate());return}const i=o.slice(r);i.every(a=>a.faceUp)&&this._startDrag(t,i,"tableau",e,r)}_handleWasteMouseDown(t){if(this.waste.length===0)return;const e=this.waste[this.waste.length-1];this._startDrag(t,[e],"waste",0)}_handleFoundationMouseDown(t,e){const r=this.foundations[e];if(r.length>0){const o=r[r.length-1];this._startDrag(t,[o],"foundation",e)}}_handleDrop(t){if(!this.dragState)return;const e=this.shadowRoot?.elementsFromPoint(t.clientX,t.clientY)||[];for(const r of e){const o=r.closest(".tableau-pile");if(o){const i=parseInt(o.getAttribute("data-col")||"-1");if(i>=0){this._tryDropOnTableau(i);break}}const s=r.closest(".foundation");if(s){const i=parseInt(s.getAttribute("data-index")||"-1");if(i>=0){this._tryDropOnFoundation(i);break}}}this.dragState=null,this.requestUpdate()}_tryDropOnTableau(t){if(!this.dragState)return!1;const{cards:e,sourceType:r,sourceIndex:o}=this.dragState,s=e[0],i=this.tableau[t];return this._canPlaceOnTableau(s,i)?(this._removeFromSource(r,o,e.length),this.tableau[t]=[...i,...e],this.moves++,this._checkWin(),!0):!1}_tryDropOnFoundation(t){if(!this.dragState||this.dragState.cards.length!==1)return!1;const{cards:e,sourceType:r,sourceIndex:o}=this.dragState,s=e[0],i=this.foundations[t];return this._canPlaceOnFoundation(s,i)?(this._removeFromSource(r,o,1),this.foundations[t]=[...i,s],this.moves++,this._checkWin(),!0):!1}_removeFromSource(t,e,r){if(t==="tableau"){this.tableau[e]=this.tableau[e].slice(0,-r);const o=this.tableau[e];o.length>0&&!o[o.length-1].faceUp&&(o[o.length-1].faceUp=!0)}else t==="waste"?this.waste=this.waste.slice(0,-1):t==="foundation"&&(this.foundations[e]=this.foundations[e].slice(0,-1))}_tryAutoMove(t,e,r){for(let o=0;o<4;o++)if(this._canPlaceOnFoundation(t,this.foundations[o]))return this._removeFromSource(e,r,1),this.foundations[o]=[...this.foundations[o],t],this.moves++,this._checkWin(),this.requestUpdate(),!0;return!1}_handleDoubleClick(t,e,r){this._tryAutoMove(t,e,r)}_checkWin(){this.foundations.reduce((e,r)=>e+r.length,0)===52&&(this.gameWon=!0)}render(){return l`
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
                  @mousedown=${r=>t.length>0?this._handleFoundationMouseDown(r,e):null}
                >
                  ${t.length>0?this._renderCard(t[t.length-1],this.dragState?.sourceType==="foundation"&&this.dragState?.sourceIndex===e):l`<div class="card empty">${this._getSuitSymbol(He[e])}</div>`}
                </div>
              `)}
            </div>
          </div>

          <!-- Tableau -->
          <div class="tableau">
            ${this.tableau.map((t,e)=>l`
              <div class="tableau-pile" data-col="${e}">
                ${t.length===0?l`<div class="card empty"></div>`:t.map((r,o)=>{const s=this.dragState?.sourceType==="tableau"&&this.dragState?.sourceIndex===e&&this.dragState?.startCardIndex!==void 0&&o>=this.dragState.startCardIndex;return l`
                        <div 
                          class="card-wrapper ${s?"dragging":""}"
                          style="top: ${o*25}px"
                          @mousedown=${i=>this._handleTableauCardMouseDown(i,e,o)}
                          @dblclick=${()=>r.faceUp&&o===t.length-1?this._handleDoubleClick(r,"tableau",e):null}
                        >
                          ${this._renderCard(r,s)}
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
    `}_renderCard(t,e=!1){if(!t.faceUp)return l`<div class="card back"></div>`;const r=this._getColor(t.suit),o=this._getSuitSymbol(t.suit),s=Ct[t.rank];return l`
      <div class="card face ${r} ${e?"selected":""}">
        <div class="card-corner top-left">
          <span class="rank">${s}</span>
          <span class="suit">${o}</span>
        </div>
        <div class="card-center">
          <span class="suit large">${o}</span>
        </div>
        <div class="card-corner bottom-right">
          <span class="rank">${s}</span>
          <span class="suit">${o}</span>
        </div>
      </div>
    `}};x.styles=E`
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
  `;D([h()],x.prototype,"stock",2);D([h()],x.prototype,"waste",2);D([h()],x.prototype,"foundations",2);D([h()],x.prototype,"tableau",2);D([h()],x.prototype,"dragState",2);D([h()],x.prototype,"mousePos",2);D([h()],x.prototype,"moves",2);D([h()],x.prototype,"gameWon",2);x=D([T("solitaire-game")],x);var Et=Object.defineProperty,Tt=Object.getOwnPropertyDescriptor,L=(t,e,r,o)=>{for(var s=o>1?void 0:o?Tt(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Et(e,r,s),s};let k=class extends v{constructor(){super(...arguments),this.board=Array(9).fill(null),this.gameState="idle",this.playerScore=0,this.aiScore=0,this.draws=0,this.isPlayerTurn=!0,this.winningLine=[],this.PLAYER="X",this.AI="O"}connectedCallback(){super.connectedCallback(),this._loadScores()}_loadScores(){const t=localStorage.getItem("tictactoe-scores");if(t){const e=JSON.parse(t);this.playerScore=e.player||0,this.aiScore=e.ai||0,this.draws=e.draws||0}}_saveScores(){localStorage.setItem("tictactoe-scores",JSON.stringify({player:this.playerScore,ai:this.aiScore,draws:this.draws}))}_startGame(){this.board=Array(9).fill(null),this.gameState="playing",this.isPlayerTurn=!0,this.winningLine=[]}_handleCellClick(t){this.gameState!=="playing"||!this.isPlayerTurn||this.board[t]||(this._makeMove(t,this.PLAYER),this.gameState==="playing"&&(this.isPlayerTurn=!1,setTimeout(()=>this._aiMove(),400)))}_makeMove(t,e){this.board=[...this.board],this.board[t]=e;const r=this._checkWinner(this.board);r?(this.winningLine=this._getWinningLine(this.board),r===this.PLAYER?(this.gameState="won",this.playerScore++):(this.gameState="lost",this.aiScore++),this._saveScores()):this._isBoardFull(this.board)&&(this.gameState="draw",this.draws++,this._saveScores())}_aiMove(){if(this.gameState!=="playing")return;const t=this._minimax(this.board,this.AI,0,-1/0,1/0);this._makeMove(t.index,this.AI),this.isPlayerTurn=!0}_minimax(t,e,r,o,s){const i=this._checkWinner(t);if(i===this.AI)return{score:10-r};if(i===this.PLAYER)return{score:r-10};if(this._isBoardFull(t))return{score:0};const a=[],c=this._getAvailableMoves(t);for(const n of c){const d=[...t];d[n]=e;const p=this._minimax(d,e===this.AI?this.PLAYER:this.AI,r+1,o,s);if(a.push({score:p.score,index:n}),e===this.AI?o=Math.max(o,p.score):s=Math.min(s,p.score),s<=o)break}return e===this.AI?a.reduce((d,p)=>d.score>p.score?d:p):a.reduce((d,p)=>d.score<p.score?d:p)}_getAvailableMoves(t){return t.map((e,r)=>e===null?r:-1).filter(e=>e!==-1)}_checkWinner(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[r,o,s]of e)if(t[r]&&t[r]===t[o]&&t[r]===t[s])return t[r];return null}_getWinningLine(t){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const r of e){const[o,s,i]=r;if(t[o]&&t[o]===t[s]&&t[o]===t[i])return r}return[]}_isBoardFull(t){return t.every(e=>e!==null)}_resetScores(){this.playerScore=0,this.aiScore=0,this.draws=0,this._saveScores()}render(){return l`
      <div class="game-container">
        <div class="scoreboard">
          <div class="score player-score">
            <span class="label">You (X)</span>
            <span class="value">${this.playerScore}</span>
          </div>
          <div class="score draws-score">
            <span class="label">Draws</span>
            <span class="value">${this.draws}</span>
          </div>
          <div class="score ai-score">
            <span class="label">AI (O)</span>
            <span class="value">${this.aiScore}</span>
          </div>
        </div>

        <div class="board">
          ${this.board.map((t,e)=>l`
            <button
              class="cell ${t?"filled":""} ${t==="X"?"x":""} ${t==="O"?"o":""} ${this.winningLine.includes(e)?"winning":""}"
              @click=${()=>this._handleCellClick(e)}
              ?disabled=${this.gameState!=="playing"||!this.isPlayerTurn||t!==null}
            >
              ${t||""}
            </button>
          `)}
        </div>

        ${this.gameState==="playing"?l`
          <div class="status">
            ${this.isPlayerTurn?"Your turn":"AI is thinking..."}
          </div>
        `:""}

        ${this.gameState==="idle"?l`
          <div class="overlay">
            <h2>Tic Tac Toe</h2>
            <p>Play against an unbeatable AI!</p>
            <button class="start-btn" @click=${this._startGame}>Start Game</button>
          </div>
        `:""}

        ${this.gameState==="won"?l`
          <div class="overlay win">
            <h2>You Won!</h2>
            <p>Impressive! You beat the AI!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        ${this.gameState==="lost"?l`
          <div class="overlay lose">
            <h2>AI Wins!</h2>
            <p>Better luck next time!</p>
            <button class="start-btn" @click=${this._startGame}>Try Again</button>
          </div>
        `:""}

        ${this.gameState==="draw"?l`
          <div class="overlay draw">
            <h2>It's a Draw!</h2>
            <p>Well played!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        <button class="reset-scores" @click=${this._resetScores}>Reset Scores</button>
      </div>
    `}};k.styles=E`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #1a1a2e;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
      position: relative;
    }

    .scoreboard {
      display: flex;
      gap: 30px;
      margin-bottom: 10px;
    }

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    .score .label {
      font-size: 14px;
      color: #888;
      margin-bottom: 5px;
    }

    .score .value {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    .player-score .value {
      color: #3498db;
    }

    .ai-score .value {
      color: #e74c3c;
    }

    .draws-score .value {
      color: #f39c12;
    }

    .board {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      background: rgba(255, 255, 255, 0.1);
      padding: 15px;
      border-radius: 15px;
    }

    .cell {
      width: 100px;
      height: 100px;
      border: none;
      border-radius: 10px;
      background: #16213e;
      color: #fff;
      font-size: 48px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s ease;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cell:hover:not(:disabled) {
      background: #1f3460;
      transform: scale(1.05);
    }

    .cell:disabled {
      cursor: not-allowed;
    }

    .cell.x {
      color: #3498db;
    }

    .cell.o {
      color: #e74c3c;
    }

    .cell.winning {
      animation: pulse 0.5s ease infinite alternate;
      background: rgba(46, 204, 113, 0.3);
    }

    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.05); }
    }

    .status {
      font-size: 18px;
      color: #fff;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }

    .overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(26, 26, 46, 0.95);
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 2px solid #9b59b6;
      box-shadow: 0 0 30px rgba(155, 89, 182, 0.3);
    }

    .overlay h2 {
      margin: 0 0 10px 0;
      color: #fff;
      font-size: 28px;
    }

    .overlay p {
      margin: 0 0 20px 0;
      color: #888;
      font-size: 16px;
    }

    .overlay.win {
      border-color: #2ecc71;
      box-shadow: 0 0 30px rgba(46, 204, 113, 0.3);
    }

    .overlay.win h2 {
      color: #2ecc71;
    }

    .overlay.lose {
      border-color: #e74c3c;
      box-shadow: 0 0 30px rgba(231, 76, 60, 0.3);
    }

    .overlay.lose h2 {
      color: #e74c3c;
    }

    .overlay.draw {
      border-color: #f39c12;
      box-shadow: 0 0 30px rgba(243, 156, 18, 0.3);
    }

    .overlay.draw h2 {
      color: #f39c12;
    }

    .start-btn {
      padding: 12px 30px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background: #9b59b6;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .start-btn:hover {
      background: #8e44ad;
      transform: scale(1.05);
    }

    .reset-scores {
      margin-top: 10px;
      padding: 8px 16px;
      font-size: 12px;
      color: #666;
      background: transparent;
      border: 1px solid #444;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .reset-scores:hover {
      color: #fff;
      border-color: #666;
    }

    @media (max-width: 500px) {
      .cell {
        width: 80px;
        height: 80px;
        font-size: 36px;
      }

      .scoreboard {
        gap: 15px;
      }

      .score {
        padding: 8px 15px;
      }

      .score .value {
        font-size: 20px;
      }

      .overlay {
        padding: 30px;
        width: 80%;
      }
    }

    @media (prefers-color-scheme: light) {
      :host {
        background: #f5f5f5;
      }

      .game-container {
        background: transparent;
      }

      .score {
        background: rgba(0, 0, 0, 0.05);
      }

      .score .label {
        color: #666;
      }

      .score .value {
        color: #333;
      }

      .player-score .value {
        color: #2980b9;
      }

      .ai-score .value {
        color: #c0392b;
      }

      .board {
        background: rgba(0, 0, 0, 0.05);
      }

      .cell {
        background: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }

      .cell:hover:not(:disabled) {
        background: #f0f0f0;
      }

      .cell.x {
        color: #2980b9;
      }

      .cell.o {
        color: #c0392b;
      }

      .status {
        color: #333;
        background: rgba(0, 0, 0, 0.05);
      }

      .overlay {
        background: rgba(255, 255, 255, 0.98);
      }

      .overlay h2 {
        color: #333;
      }

      .overlay p {
        color: #666;
      }

      .reset-scores {
        color: #888;
        border-color: #ccc;
      }

      .reset-scores:hover {
        color: #333;
        border-color: #999;
      }
    }
  `;L([h()],k.prototype,"board",2);L([h()],k.prototype,"gameState",2);L([h()],k.prototype,"playerScore",2);L([h()],k.prototype,"aiScore",2);L([h()],k.prototype,"draws",2);L([h()],k.prototype,"isPlayerTurn",2);L([h()],k.prototype,"winningLine",2);k=L([T("tic-tac-toe-game")],k);var Dt=Object.defineProperty,Mt=Object.getOwnPropertyDescriptor,M=(t,e,r,o)=>{for(var s=o>1?void 0:o?Mt(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Dt(e,r,s),s};let _=class extends v{constructor(){super(...arguments),this.board=[],this.gameState="idle",this.selectedPiece=null,this.validMoves=[],this.isPlayerTurn=!0,this.playerScore=0,this.aiScore=0,this.mustJump=null,this.AI_DEPTH=4}connectedCallback(){super.connectedCallback(),this._loadScores()}_loadScores(){const t=localStorage.getItem("checkers-scores");if(t){const e=JSON.parse(t);this.playerScore=e.player||0,this.aiScore=e.ai||0}}_saveScores(){localStorage.setItem("checkers-scores",JSON.stringify({player:this.playerScore,ai:this.aiScore}))}_initBoard(){const t=Array(8).fill(null).map(()=>Array(8).fill(null));for(let e=0;e<3;e++)for(let r=0;r<8;r++)(e+r)%2===1&&(t[e][r]="black");for(let e=5;e<8;e++)for(let r=0;r<8;r++)(e+r)%2===1&&(t[e][r]="red");return t}_startGame(){this.board=this._initBoard(),this.gameState="playing",this.isPlayerTurn=!0,this.selectedPiece=null,this.validMoves=[],this.mustJump=null}_isPlayerPiece(t){return t==="red"||t==="red-king"}_isAIPiece(t){return t==="black"||t==="black-king"}_isKing(t){return t==="red-king"||t==="black-king"}_getValidMoves(t,e,r,o){const s=t[e][r];if(!s)return[];const i=[],a=this._isKing(s),c=[];(o||a)&&c.push(-1),(!o||a)&&c.push(1);for(const n of c)for(const d of[-1,1]){const p=e+n*2,g=r+d*2,b=e+n,m=r+d;if(this._isValidPosition(p,g)&&t[p][g]===null&&t[b][m]!==null){const $=t[b][m];(o?this._isAIPiece($):this._isPlayerPiece($))&&i.push({from:{row:e,col:r},to:{row:p,col:g},captures:[{row:b,col:m}]})}}if(i.length>0)return i;for(const n of c)for(const d of[-1,1]){const p=e+n,g=r+d;this._isValidPosition(p,g)&&t[p][g]===null&&i.push({from:{row:e,col:r},to:{row:p,col:g},captures:[]})}return i}_getAllMoves(t,e){const r=[],o=[];for(let s=0;s<8;s++)for(let i=0;i<8;i++){const a=t[s][i];if(a&&(e?this._isPlayerPiece(a):this._isAIPiece(a))){const c=this._getValidMoves(t,s,i,e);for(const n of c)n.captures.length>0?o.push(n):r.push(n)}}return o.length>0?o:r}_isValidPosition(t,e){return t>=0&&t<8&&e>=0&&e<8}_handleCellClick(t,e){if(this.gameState!=="playing"||!this.isPlayerTurn)return;const r=this.board[t][e];if(this.mustJump){if(t===this.mustJump.row&&e===this.mustJump.col)return;const o=this.validMoves.find(s=>s.to.row===t&&s.to.col===e);o&&this._executeMove(o);return}if(this._isPlayerPiece(r)){const s=this._getAllMoves(this.board,!0).some(a=>a.captures.length>0),i=this._getValidMoves(this.board,t,e,!0);if(s&&!i.some(a=>a.captures.length>0))return;this.selectedPiece={row:t,col:e},this.validMoves=s?i.filter(a=>a.captures.length>0):i;return}if(this.selectedPiece&&r===null){const o=this.validMoves.find(s=>s.to.row===t&&s.to.col===e);o&&this._executeMove(o)}}_executeMove(t){const e=this.board.map(o=>[...o]),r=e[t.from.row][t.from.col];e[t.from.row][t.from.col]=null,e[t.to.row][t.to.col]=r;for(const o of t.captures)e[o.row][o.col]=null;if(r==="red"&&t.to.row===0?e[t.to.row][t.to.col]="red-king":r==="black"&&t.to.row===7&&(e[t.to.row][t.to.col]="black-king"),this.board=e,t.captures.length>0){const o=this._getValidMoves(this.board,t.to.row,t.to.col,this.isPlayerTurn).filter(s=>s.captures.length>0);if(o.length>0){this.mustJump=t.to,this.selectedPiece=t.to,this.validMoves=o;return}}this.selectedPiece=null,this.validMoves=[],this.mustJump=null,!this._checkGameEnd()&&(this.isPlayerTurn=!this.isPlayerTurn,this.isPlayerTurn||setTimeout(()=>this._aiMove(),500))}_aiMove(){if(this.gameState!=="playing")return;const t=this._minimax(this.board,this.AI_DEPTH,-1/0,1/0,!0);t.move?this._executeAIMove(t.move):(this.gameState="won",this.playerScore++,this._saveScores())}_executeAIMove(t){const e=this.board.map(o=>[...o]),r=e[t.from.row][t.from.col];e[t.from.row][t.from.col]=null,e[t.to.row][t.to.col]=r;for(const o of t.captures)e[o.row][o.col]=null;if(r==="black"&&t.to.row===7&&(e[t.to.row][t.to.col]="black-king"),this.board=e,t.captures.length>0){const o=this._getValidMoves(this.board,t.to.row,t.to.col,!1).filter(s=>s.captures.length>0);if(o.length>0){setTimeout(()=>{const s=this._selectBestJump(o);this._executeAIMove(s)},300);return}}this._checkGameEnd()||(this.isPlayerTurn=!0)}_selectBestJump(t){return t[0]}_minimax(t,e,r,o,s){if(e===0)return{score:this._evaluateBoard(t),move:null};const i=this._getAllMoves(t,!s);if(i.length===0)return{score:s?-1e3:1e3,move:null};let a=null;if(s){let c=-1/0;for(const n of i){const d=this._applyMove(t,n),p=this._minimax(d,e-1,r,o,!1);if(p.score>c&&(c=p.score,a=n),r=Math.max(r,p.score),o<=r)break}return{score:c,move:a}}else{let c=1/0;for(const n of i){const d=this._applyMove(t,n),p=this._minimax(d,e-1,r,o,!0);if(p.score<c&&(c=p.score,a=n),o=Math.min(o,p.score),o<=r)break}return{score:c,move:a}}}_applyMove(t,e){const r=t.map(s=>[...s]),o=r[e.from.row][e.from.col];r[e.from.row][e.from.col]=null,r[e.to.row][e.to.col]=o;for(const s of e.captures)r[s.row][s.col]=null;return o==="red"&&e.to.row===0?r[e.to.row][e.to.col]="red-king":o==="black"&&e.to.row===7&&(r[e.to.row][e.to.col]="black-king"),r}_evaluateBoard(t){let e=0;for(let r=0;r<8;r++)for(let o=0;o<8;o++){const s=t[r][o];s==="black"?e+=10:s==="black-king"?e+=15:s==="red"?e-=10:s==="red-king"&&(e-=15),s==="black"?e+=r:s==="red"&&(e-=7-r)}return e}_checkGameEnd(){const t=this._countPieces(!0),e=this._countPieces(!1);if(t===0)return this.gameState="lost",this.aiScore++,this._saveScores(),!0;if(e===0)return this.gameState="won",this.playerScore++,this._saveScores(),!0;const r=this._getAllMoves(this.board,!0),o=this._getAllMoves(this.board,!1);return this.isPlayerTurn&&r.length===0?(this.gameState="lost",this.aiScore++,this._saveScores(),!0):!this.isPlayerTurn&&o.length===0?(this.gameState="won",this.playerScore++,this._saveScores(),!0):!1}_countPieces(t){let e=0;for(let r=0;r<8;r++)for(let o=0;o<8;o++){const s=this.board[r][o];(t?this._isPlayerPiece(s):this._isAIPiece(s))&&e++}return e}_resetScores(){this.playerScore=0,this.aiScore=0,this._saveScores()}_isValidMoveTarget(t,e){return this.validMoves.some(r=>r.to.row===t&&r.to.col===e)}render(){return l`
      <div class="game-container">
        <div class="scoreboard">
          <div class="score player-score">
            <span class="label">You (Red)</span>
            <span class="value">${this.playerScore}</span>
          </div>
          <div class="score ai-score">
            <span class="label">AI (Black)</span>
            <span class="value">${this.aiScore}</span>
          </div>
        </div>

        <div class="board">
          ${this.gameState!=="idle"?this.board.map((t,e)=>t.map((r,o)=>{const s=(e+o)%2===1,i=this.selectedPiece?.row===e&&this.selectedPiece?.col===o,a=this._isValidMoveTarget(e,o);return l`
                <div
                  class="cell ${s?"dark":"light"} ${i?"selected":""} ${a?"valid-move":""}"
                  @click=${()=>this._handleCellClick(e,o)}
                >
                  ${r?l`
                    <div class="piece ${r} ${i?"selected":""}">
                      ${this._isKing(r)?l`<span class="crown">♔</span>`:""}
                    </div>
                  `:""}
                </div>
              `})):""}
        </div>

        ${this.gameState==="playing"?l`
          <div class="status">
            ${this.isPlayerTurn?this.mustJump?"Continue jumping!":"Your turn - select a piece":"AI is thinking..."}
          </div>
        `:""}

        ${this.gameState==="idle"?l`
          <div class="overlay">
            <h2>Checkers</h2>
            <p>Play against an AI opponent!</p>
            <div class="rules">
              <p>• You are Red, AI is Black</p>
              <p>• Click a piece to select, then click where to move</p>
              <p>• Jumps are mandatory</p>
              <p>• Reach the opposite end to become a King</p>
            </div>
            <button class="start-btn" @click=${this._startGame}>Start Game</button>
          </div>
        `:""}

        ${this.gameState==="won"?l`
          <div class="overlay win">
            <h2>You Won!</h2>
            <p>Congratulations!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        ${this.gameState==="lost"?l`
          <div class="overlay lose">
            <h2>AI Wins!</h2>
            <p>Better luck next time!</p>
            <button class="start-btn" @click=${this._startGame}>Try Again</button>
          </div>
        `:""}

        <button class="reset-scores" @click=${this._resetScores}>Reset Scores</button>
      </div>
    `}};_.styles=E`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #1a1a2e;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
      position: relative;
    }

    .scoreboard {
      display: flex;
      gap: 30px;
      margin-bottom: 10px;
    }

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    .score .label {
      font-size: 14px;
      color: #888;
      margin-bottom: 5px;
    }

    .score .value {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    .player-score .value {
      color: #e74c3c;
    }

    .ai-score .value {
      color: #2c3e50;
    }

    .board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 0;
      background: #5c4033;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .cell {
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
    }

    .cell.light {
      background: #f0d9b5;
    }

    .cell.dark {
      background: #b58863;
    }

    .cell.selected {
      box-shadow: inset 0 0 0 3px #ffeb3b;
    }

    .cell.valid-move::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      background: rgba(76, 175, 80, 0.6);
      border-radius: 50%;
    }

    .piece {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s ease;
      position: relative;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
    }

    .piece.red, .piece.red-king {
      background: linear-gradient(145deg, #e74c3c, #c0392b);
      border: 2px solid #922b21;
    }

    .piece.black, .piece.black-king {
      background: linear-gradient(145deg, #34495e, #2c3e50);
      border: 2px solid #1a252f;
    }

    .piece.selected {
      transform: scale(1.1);
      box-shadow: 0 0 15px rgba(255, 235, 59, 0.8);
    }

    .piece .crown {
      font-size: 20px;
      color: #ffd700;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .status {
      font-size: 18px;
      color: #fff;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }

    .overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(26, 26, 46, 0.98);
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 2px solid #e67e22;
      box-shadow: 0 0 30px rgba(230, 126, 34, 0.3);
      z-index: 10;
    }

    .overlay h2 {
      margin: 0 0 10px 0;
      color: #fff;
      font-size: 28px;
    }

    .overlay p {
      margin: 0 0 15px 0;
      color: #888;
      font-size: 16px;
    }

    .overlay .rules {
      text-align: left;
      margin-bottom: 20px;
      padding: 15px;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 8px;
    }

    .overlay .rules p {
      margin: 5px 0;
      font-size: 14px;
      color: #aaa;
    }

    .overlay.win {
      border-color: #2ecc71;
      box-shadow: 0 0 30px rgba(46, 204, 113, 0.3);
    }

    .overlay.win h2 {
      color: #2ecc71;
    }

    .overlay.lose {
      border-color: #e74c3c;
      box-shadow: 0 0 30px rgba(231, 76, 60, 0.3);
    }

    .overlay.lose h2 {
      color: #e74c3c;
    }

    .start-btn {
      padding: 12px 30px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background: #e67e22;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .start-btn:hover {
      background: #d35400;
      transform: scale(1.05);
    }

    .reset-scores {
      margin-top: 10px;
      padding: 8px 16px;
      font-size: 12px;
      color: #666;
      background: transparent;
      border: 1px solid #444;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .reset-scores:hover {
      color: #fff;
      border-color: #666;
    }

    @media (max-width: 500px) {
      .cell {
        width: 38px;
        height: 38px;
      }

      .piece {
        width: 30px;
        height: 30px;
      }

      .piece .crown {
        font-size: 14px;
      }

      .board {
        padding: 6px;
      }

      .scoreboard {
        gap: 15px;
      }

      .score {
        padding: 8px 15px;
      }

      .score .value {
        font-size: 20px;
      }

      .overlay {
        padding: 25px;
        width: 85%;
      }
    }

    @media (prefers-color-scheme: light) {
      :host {
        background: #f5f5f5;
      }

      .score {
        background: rgba(0, 0, 0, 0.05);
      }

      .score .label {
        color: #666;
      }

      .score .value {
        color: #333;
      }

      .player-score .value {
        color: #c0392b;
      }

      .ai-score .value {
        color: #2c3e50;
      }

      .status {
        color: #333;
        background: rgba(0, 0, 0, 0.05);
      }

      .overlay {
        background: rgba(255, 255, 255, 0.98);
      }

      .overlay h2 {
        color: #333;
      }

      .overlay p {
        color: #666;
      }

      .overlay .rules {
        background: rgba(0, 0, 0, 0.03);
      }

      .overlay .rules p {
        color: #555;
      }

      .reset-scores {
        color: #888;
        border-color: #ccc;
      }

      .reset-scores:hover {
        color: #333;
        border-color: #999;
      }
    }
  `;M([h()],_.prototype,"board",2);M([h()],_.prototype,"gameState",2);M([h()],_.prototype,"selectedPiece",2);M([h()],_.prototype,"validMoves",2);M([h()],_.prototype,"isPlayerTurn",2);M([h()],_.prototype,"playerScore",2);M([h()],_.prototype,"aiScore",2);M([h()],_.prototype,"mustJump",2);_=M([T("checkers-game")],_);var zt=Object.defineProperty,It=Object.getOwnPropertyDescriptor,G=(t,e,r,o)=>{for(var s=o>1?void 0:o?It(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&zt(e,r,s),s};const w=6,P=7;let S=class extends v{constructor(){super(...arguments),this.board=[],this.gameState="idle",this.isPlayerTurn=!0,this.playerScore=0,this.aiScore=0,this.winningCells=[],this.hoverColumn=-1,this.AI_DEPTH=5}connectedCallback(){super.connectedCallback(),this._loadScores()}_loadScores(){const t=localStorage.getItem("connect-four-scores");if(t){const e=JSON.parse(t);this.playerScore=e.player||0,this.aiScore=e.ai||0}}_saveScores(){localStorage.setItem("connect-four-scores",JSON.stringify({player:this.playerScore,ai:this.aiScore}))}_initBoard(){return Array(w).fill(null).map(()=>Array(P).fill(null))}_startGame(){this.board=this._initBoard(),this.gameState="playing",this.isPlayerTurn=!0,this.winningCells=[],this.hoverColumn=-1}_getLowestEmptyRow(t,e){for(let r=w-1;r>=0;r--)if(t[r][e]===null)return r;return-1}_handleColumnClick(t){this.gameState!=="playing"||!this.isPlayerTurn||this._getLowestEmptyRow(this.board,t)===-1||(this._makeMove(t,"red"),this.gameState==="playing"&&(this.isPlayerTurn=!1,setTimeout(()=>this._aiMove(),500)))}_makeMove(t,e){const r=this._getLowestEmptyRow(this.board,t);if(r===-1)return;const o=this.board.map(i=>[...i]);o[r][t]=e,this.board=o;const s=this._checkWinner(this.board,r,t);s?(this.winningCells=s,e==="red"?(this.gameState="won",this.playerScore++):(this.gameState="lost",this.aiScore++),this._saveScores()):this._isBoardFull(this.board)&&(this.gameState="draw")}_aiMove(){if(this.gameState!=="playing")return;const t=this._minimax(this.board,this.AI_DEPTH,-1/0,1/0,!0);t.col!==-1&&this._makeMove(t.col,"yellow"),this.isPlayerTurn=!0}_minimax(t,e,r,o,s){const i=this._findWinner(t);if(i==="yellow")return{score:1e3+e,col:-1};if(i==="red")return{score:-1e3-e,col:-1};if(this._isBoardFull(t))return{score:0,col:-1};if(e===0)return{score:this._evaluateBoard(t),col:-1};const a=this._getValidColumns(t);a.sort((n,d)=>Math.abs(3-n)-Math.abs(3-d));let c=a[0];if(s){let n=-1/0;for(const d of a){const p=this._simulateMove(t,d,"yellow"),g=this._minimax(p,e-1,r,o,!1);if(g.score>n&&(n=g.score,c=d),r=Math.max(r,g.score),o<=r)break}return{score:n,col:c}}else{let n=1/0;for(const d of a){const p=this._simulateMove(t,d,"red"),g=this._minimax(p,e-1,r,o,!0);if(g.score<n&&(n=g.score,c=d),o=Math.min(o,g.score),o<=r)break}return{score:n,col:c}}}_simulateMove(t,e,r){const o=t.map(i=>[...i]),s=this._getLowestEmptyRow(o,e);return s!==-1&&(o[s][e]=r),o}_getValidColumns(t){const e=[];for(let r=0;r<P;r++)t[0][r]===null&&e.push(r);return e}_evaluateBoard(t){let e=0;for(let r=0;r<w;r++)t[r][3]==="yellow"?e+=3:t[r][3]==="red"&&(e-=3);for(let r=0;r<w;r++)for(let o=0;o<P-3;o++)e+=this._evaluateWindow([t[r][o],t[r][o+1],t[r][o+2],t[r][o+3]]);for(let r=0;r<w-3;r++)for(let o=0;o<P;o++)e+=this._evaluateWindow([t[r][o],t[r+1][o],t[r+2][o],t[r+3][o]]);for(let r=3;r<w;r++)for(let o=0;o<P-3;o++)e+=this._evaluateWindow([t[r][o],t[r-1][o+1],t[r-2][o+2],t[r-3][o+3]]);for(let r=0;r<w-3;r++)for(let o=0;o<P-3;o++)e+=this._evaluateWindow([t[r][o],t[r+1][o+1],t[r+2][o+2],t[r+3][o+3]]);return e}_evaluateWindow(t){const e=t.filter(s=>s==="yellow").length,r=t.filter(s=>s==="red").length,o=t.filter(s=>s===null).length;return e===4?100:e===3&&o===1?5:e===2&&o===2?2:r===4?-100:r===3&&o===1?-5:r===2&&o===2?-2:0}_checkWinner(t,e,r){const o=t[e][r];if(!o)return null;const s=[[[0,1],[0,-1]],[[1,0],[-1,0]],[[1,1],[-1,-1]],[[1,-1],[-1,1]]];for(const[i,a]of s){const c=[[e,r]];let n=e+i[0],d=r+i[1];for(;n>=0&&n<w&&d>=0&&d<P&&t[n][d]===o;)c.push([n,d]),n+=i[0],d+=i[1];for(n=e+a[0],d=r+a[1];n>=0&&n<w&&d>=0&&d<P&&t[n][d]===o;)c.push([n,d]),n+=a[0],d+=a[1];if(c.length>=4)return c}return null}_findWinner(t){for(let e=0;e<w;e++)for(let r=0;r<P;r++)if(t[e][r]&&this._checkWinner(t,e,r))return t[e][r];return null}_isBoardFull(t){return t[0].every(e=>e!==null)}_isWinningCell(t,e){return this.winningCells.some(([r,o])=>r===t&&o===e)}_resetScores(){this.playerScore=0,this.aiScore=0,this._saveScores()}render(){return l`
      <div class="game-container">
        <div class="scoreboard">
          <div class="score player-score">
            <span class="label">You (Red)</span>
            <span class="value">${this.playerScore}</span>
          </div>
          <div class="score ai-score">
            <span class="label">AI (Yellow)</span>
            <span class="value">${this.aiScore}</span>
          </div>
        </div>

        <div class="board-wrapper">
          <div class="board">
            ${this.gameState!=="idle"?this.board.map((t,e)=>t.map((r,o)=>l`
                <div
                  class="cell ${this._isWinningCell(e,o)?"winning":""}"
                  @click=${()=>this._handleColumnClick(o)}
                  @mouseenter=${()=>this.hoverColumn=o}
                  @mouseleave=${()=>this.hoverColumn=-1}
                >
                  <div class="piece ${r||""} ${!r&&this.hoverColumn===o&&this.isPlayerTurn&&this.gameState==="playing"?"preview":""}"></div>
                </div>
              `)):""}
          </div>
        </div>

        ${this.gameState==="playing"?l`
          <div class="status">
            ${this.isPlayerTurn?"Your turn - click a column":"AI is thinking..."}
          </div>
        `:""}

        ${this.gameState==="idle"?l`
          <div class="overlay">
            <h2>Connect Four</h2>
            <p>Get 4 in a row to win!</p>
            <button class="start-btn" @click=${this._startGame}>Start Game</button>
          </div>
        `:""}

        ${this.gameState==="won"?l`
          <div class="overlay win">
            <h2>You Won!</h2>
            <p>Congratulations!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        ${this.gameState==="lost"?l`
          <div class="overlay lose">
            <h2>AI Wins!</h2>
            <p>Better luck next time!</p>
            <button class="start-btn" @click=${this._startGame}>Try Again</button>
          </div>
        `:""}

        ${this.gameState==="draw"?l`
          <div class="overlay draw">
            <h2>It's a Draw!</h2>
            <p>The board is full!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        <button class="reset-scores" @click=${this._resetScores}>Reset Scores</button>
      </div>
    `}};S.styles=E`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #1a1a2e;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 20px;
      position: relative;
    }

    .scoreboard {
      display: flex;
      gap: 30px;
      margin-bottom: 10px;
    }

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    .score .label {
      font-size: 14px;
      color: #888;
      margin-bottom: 5px;
    }

    .score .value {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    .player-score .value {
      color: #e74c3c;
    }

    .ai-score .value {
      color: #f1c40f;
    }

    .board-wrapper {
      background: #2980b9;
      padding: 15px;
      border-radius: 15px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .board {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(6, 1fr);
      gap: 8px;
    }

    .cell {
      width: 50px;
      height: 50px;
      background: #1a5276;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background 0.2s ease;
    }

    .cell:hover {
      background: #1f618d;
    }

    .cell.winning {
      animation: pulse 0.5s ease infinite alternate;
    }

    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }

    .piece {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      transition: all 0.2s ease;
    }

    .piece.red {
      background: radial-gradient(circle at 30% 30%, #e74c3c, #c0392b);
      box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .piece.yellow {
      background: radial-gradient(circle at 30% 30%, #f1c40f, #d4ac0d);
      box-shadow: inset 0 -3px 6px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .piece.preview {
      background: radial-gradient(circle at 30% 30%, rgba(231, 76, 60, 0.4), rgba(192, 57, 43, 0.4));
    }

    .status {
      font-size: 18px;
      color: #fff;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
    }

    .overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(26, 26, 46, 0.98);
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 2px solid #3498db;
      box-shadow: 0 0 30px rgba(52, 152, 219, 0.3);
      z-index: 10;
    }

    .overlay h2 {
      margin: 0 0 10px 0;
      color: #fff;
      font-size: 28px;
    }

    .overlay p {
      margin: 0 0 20px 0;
      color: #888;
      font-size: 16px;
    }

    .overlay.win {
      border-color: #2ecc71;
      box-shadow: 0 0 30px rgba(46, 204, 113, 0.3);
    }

    .overlay.win h2 {
      color: #2ecc71;
    }

    .overlay.lose {
      border-color: #e74c3c;
      box-shadow: 0 0 30px rgba(231, 76, 60, 0.3);
    }

    .overlay.lose h2 {
      color: #e74c3c;
    }

    .overlay.draw {
      border-color: #f39c12;
      box-shadow: 0 0 30px rgba(243, 156, 18, 0.3);
    }

    .overlay.draw h2 {
      color: #f39c12;
    }

    .start-btn {
      padding: 12px 30px;
      font-size: 18px;
      font-weight: bold;
      color: #fff;
      background: #3498db;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .start-btn:hover {
      background: #2980b9;
      transform: scale(1.05);
    }

    .reset-scores {
      margin-top: 10px;
      padding: 8px 16px;
      font-size: 12px;
      color: #666;
      background: transparent;
      border: 1px solid #444;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .reset-scores:hover {
      color: #fff;
      border-color: #666;
    }

    @media (max-width: 500px) {
      .cell {
        width: 38px;
        height: 38px;
      }

      .piece {
        width: 32px;
        height: 32px;
      }

      .board-wrapper {
        padding: 10px;
      }

      .board {
        gap: 5px;
      }

      .scoreboard {
        gap: 15px;
      }

      .score {
        padding: 8px 15px;
      }

      .score .value {
        font-size: 20px;
      }

      .overlay {
        padding: 25px;
        width: 85%;
      }
    }

    @media (prefers-color-scheme: light) {
      :host {
        background: #f5f5f5;
      }

      .score {
        background: rgba(0, 0, 0, 0.05);
      }

      .score .label {
        color: #666;
      }

      .score .value {
        color: #333;
      }

      .player-score .value {
        color: #c0392b;
      }

      .ai-score .value {
        color: #d4ac0d;
      }

      .status {
        color: #333;
        background: rgba(0, 0, 0, 0.05);
      }

      .overlay {
        background: rgba(255, 255, 255, 0.98);
      }

      .overlay h2 {
        color: #333;
      }

      .overlay p {
        color: #666;
      }

      .reset-scores {
        color: #888;
        border-color: #ccc;
      }

      .reset-scores:hover {
        color: #333;
        border-color: #999;
      }
    }
  `;G([h()],S.prototype,"board",2);G([h()],S.prototype,"gameState",2);G([h()],S.prototype,"isPlayerTurn",2);G([h()],S.prototype,"playerScore",2);G([h()],S.prototype,"aiScore",2);G([h()],S.prototype,"winningCells",2);G([h()],S.prototype,"hoverColumn",2);S=G([T("connect-four-game")],S);var Rt=Object.defineProperty,Ot=Object.getOwnPropertyDescriptor,W=(t,e,r,o)=>{for(var s=o>1?void 0:o?Ot(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Rt(e,r,s),s};const le=400,Y=500,j=30,ce=60,ae=140,Lt=.5,Gt=-8,Bt=3,Ht=1800;let A=class extends v{constructor(){super(...arguments),this.gameState="idle",this.birdY=Y/2,this.birdVelocity=0,this.pipes=[],this.score=0,this.highScore=0,this.gameLoop=null,this.pipeSpawner=null,this.lastTime=0,this._handleKeyDown=t=>{(t.code==="Space"||t.key===" ")&&(t.preventDefault(),this._handleInput())},this._handleClick=()=>{this._handleInput()},this._update=t=>{if(this.gameState!=="playing")return;const e=Math.min((t-this.lastTime)/16.67,2);this.lastTime=t,this.birdVelocity+=Lt*e,this.birdY+=this.birdVelocity*e,this.pipes=this.pipes.map(r=>({...r,x:r.x-Bt*e})).filter(r=>r.x>-ce);for(const r of this.pipes)!r.passed&&r.x+ce<le/2-j/2&&(r.passed=!0,this.score++);if(this._checkCollision()){this._gameOver();return}this.requestUpdate(),this.gameLoop=requestAnimationFrame(this._update)}}connectedCallback(){super.connectedCallback(),this._loadHighScore(),window.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._stopGame(),window.removeEventListener("keydown",this._handleKeyDown)}_loadHighScore(){const t=localStorage.getItem("flappy-bird-highscore");t&&(this.highScore=parseInt(t,10))}_saveHighScore(){this.score>this.highScore&&(this.highScore=this.score,localStorage.setItem("flappy-bird-highscore",this.highScore.toString()))}_handleInput(){this.gameState==="idle"?this._startGame():this.gameState==="playing"?this._flap():this.gameState==="gameover"&&this._startGame()}_startGame(){this.birdY=Y/2,this.birdVelocity=0,this.pipes=[],this.score=0,this.gameState="playing",this.lastTime=performance.now(),this._spawnPipe(),this.gameLoop=requestAnimationFrame(this._update),this.pipeSpawner=window.setInterval(()=>this._spawnPipe(),Ht)}_stopGame(){this.gameLoop&&(cancelAnimationFrame(this.gameLoop),this.gameLoop=null),this.pipeSpawner&&(clearInterval(this.pipeSpawner),this.pipeSpawner=null)}_flap(){this.birdVelocity=Gt}_spawnPipe(){const e=Y-ae-80,r=Math.random()*(e-80)+80;this.pipes=[...this.pipes,{x:le,gapY:r,passed:!1}]}_checkCollision(){const t=le/2-j/2,e=t+j,r=this.birdY,o=this.birdY+j;if(r<0||o>Y)return!0;for(const s of this.pipes){const i=s.x,a=s.x+ce;if(e>i&&t<a&&(r<s.gapY||o>s.gapY+ae))return!0}return!1}_gameOver(){this.gameState="gameover",this._stopGame(),this._saveHighScore()}_getBirdRotation(){return Math.min(Math.max(this.birdVelocity*3,-30),90)}render(){return l`
      <div class="game-container">
        <div class="scoreboard">
          <div class="score current-score">
            <span class="label">Score</span>
            <span class="value">${this.score}</span>
          </div>
          <div class="score high-score">
            <span class="label">Best</span>
            <span class="value">${this.highScore}</span>
          </div>
        </div>

        <div
          class="game-area"
          @click=${this._handleClick}
        >
          <!-- Sky background -->
          <div class="sky"></div>

          <!-- Pipes -->
          ${this.pipes.map(t=>l`
            <div class="pipe pipe-top" style="left: ${t.x}px; height: ${t.gapY}px;"></div>
            <div class="pipe pipe-bottom" style="left: ${t.x}px; top: ${t.gapY+ae}px; height: ${Y-t.gapY-ae}px;"></div>
          `)}

          <!-- Bird -->
          <div
            class="bird ${this.gameState==="playing"?"flapping":""}"
            style="top: ${this.birdY}px; transform: rotate(${this._getBirdRotation()}deg);"
          >
            <div class="bird-body">
              <div class="bird-eye"></div>
              <div class="bird-beak"></div>
              <div class="bird-wing"></div>
            </div>
          </div>

          <!-- Ground -->
          <div class="ground ${this.gameState==="playing"?"moving":""}"></div>

          <!-- Overlays -->
          ${this.gameState==="idle"?l`
            <div class="overlay">
              <h2>Flappy Bird</h2>
              <p>Click or press Space to flap!</p>
              <div class="start-hint">Tap to Start</div>
            </div>
          `:""}

          ${this.gameState==="gameover"?l`
            <div class="overlay gameover">
              <h2>Game Over!</h2>
              <div class="final-score">
                <p>Score: ${this.score}</p>
                ${this.score>=this.highScore&&this.score>0?l`<p class="new-best">New Best!</p>`:""}
              </div>
              <div class="start-hint">Tap to Retry</div>
            </div>
          `:""}
        </div>

        <div class="instructions">
          Click or press Space to flap
        </div>
      </div>
    `}};A.styles=E`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background: #1a1a2e;
      font-family: 'Segoe UI', system-ui, sans-serif;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 15px;
      padding: 20px;
    }

    .scoreboard {
      display: flex;
      gap: 30px;
    }

    .score {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 10px 20px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
    }

    .score .label {
      font-size: 14px;
      color: #888;
      margin-bottom: 5px;
    }

    .score .value {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }

    .current-score .value {
      color: #2ecc71;
    }

    .high-score .value {
      color: #f1c40f;
    }

    .game-area {
      width: ${le}px;
      height: ${Y}px;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      cursor: pointer;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    }

    .sky {
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, #4dc9e6 0%, #87ceeb 50%, #b0e0e6 100%);
    }

    .ground {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 80px;
      background: linear-gradient(180deg, #8B4513 0%, #654321 20%, #5D4E37 100%);
      border-top: 4px solid #228B22;
    }

    .ground::before {
      content: '';
      position: absolute;
      top: -20px;
      left: 0;
      right: 0;
      height: 24px;
      background: linear-gradient(180deg, #90EE90 0%, #228B22 100%);
    }

    .ground.moving {
      animation: groundScroll 0.5s linear infinite;
    }

    @keyframes groundScroll {
      from { background-position-x: 0; }
      to { background-position-x: -48px; }
    }

    .pipe {
      position: absolute;
      width: ${ce}px;
      background: linear-gradient(90deg, #228B22 0%, #32CD32 20%, #228B22 80%, #006400 100%);
      border: 3px solid #006400;
      box-sizing: border-box;
    }

    .pipe-top {
      top: 0;
      border-top: none;
      border-radius: 0 0 6px 6px;
    }

    .pipe-top::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: -6px;
      right: -6px;
      height: 30px;
      background: linear-gradient(90deg, #228B22 0%, #32CD32 20%, #228B22 80%, #006400 100%);
      border: 3px solid #006400;
      border-radius: 4px;
    }

    .pipe-bottom {
      border-bottom: none;
      border-radius: 6px 6px 0 0;
    }

    .pipe-bottom::before {
      content: '';
      position: absolute;
      top: -4px;
      left: -6px;
      right: -6px;
      height: 30px;
      background: linear-gradient(90deg, #228B22 0%, #32CD32 20%, #228B22 80%, #006400 100%);
      border: 3px solid #006400;
      border-radius: 4px;
    }

    .bird {
      position: absolute;
      left: calc(50% - ${j/2}px);
      width: ${j}px;
      height: ${j}px;
      transition: transform 0.1s ease-out;
      z-index: 10;
    }

    .bird-body {
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
      border-radius: 50%;
      position: relative;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .bird-eye {
      position: absolute;
      top: 6px;
      right: 4px;
      width: 10px;
      height: 10px;
      background: white;
      border-radius: 50%;
    }

    .bird-eye::after {
      content: '';
      position: absolute;
      top: 2px;
      right: 2px;
      width: 5px;
      height: 5px;
      background: black;
      border-radius: 50%;
    }

    .bird-beak {
      position: absolute;
      top: 12px;
      right: -8px;
      width: 0;
      height: 0;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 12px solid #FF6347;
    }

    .bird-wing {
      position: absolute;
      top: 12px;
      left: 2px;
      width: 12px;
      height: 8px;
      background: #DAA520;
      border-radius: 50%;
    }

    .bird.flapping .bird-wing {
      animation: flap 0.15s ease-in-out infinite;
    }

    @keyframes flap {
      0%, 100% { transform: rotate(-20deg); top: 12px; }
      50% { transform: rotate(20deg); top: 8px; }
    }

    .overlay {
      position: absolute;
      inset: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: rgba(0, 0, 0, 0.5);
      z-index: 20;
    }

    .overlay h2 {
      margin: 0 0 10px 0;
      font-size: 36px;
      color: #fff;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .overlay p {
      margin: 0 0 20px 0;
      font-size: 18px;
      color: #fff;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .overlay.gameover h2 {
      color: #e74c3c;
    }

    .final-score {
      text-align: center;
      margin-bottom: 20px;
    }

    .final-score p {
      margin: 5px 0;
      font-size: 24px;
    }

    .new-best {
      color: #f1c40f !important;
      font-weight: bold;
      animation: pulse 0.5s ease infinite alternate;
    }

    @keyframes pulse {
      from { transform: scale(1); }
      to { transform: scale(1.1); }
    }

    .start-hint {
      padding: 15px 40px;
      background: #2ecc71;
      color: white;
      font-size: 20px;
      font-weight: bold;
      border-radius: 30px;
      box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
      animation: bounce 1s ease infinite;
    }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }

    .instructions {
      font-size: 14px;
      color: #666;
    }

    @media (max-width: 500px) {
      .game-area {
        width: 320px;
        height: 400px;
      }

      .scoreboard {
        gap: 15px;
      }

      .score {
        padding: 8px 15px;
      }

      .score .value {
        font-size: 20px;
      }

      .overlay h2 {
        font-size: 28px;
      }

      .start-hint {
        padding: 12px 30px;
        font-size: 16px;
      }
    }

    @media (prefers-color-scheme: light) {
      :host {
        background: #f5f5f5;
      }

      .score {
        background: rgba(0, 0, 0, 0.05);
      }

      .score .label {
        color: #666;
      }

      .score .value {
        color: #333;
      }

      .current-score .value {
        color: #27ae60;
      }

      .high-score .value {
        color: #d4ac0d;
      }

      .instructions {
        color: #888;
      }
    }
  `;W([h()],A.prototype,"gameState",2);W([h()],A.prototype,"birdY",2);W([h()],A.prototype,"birdVelocity",2);W([h()],A.prototype,"pipes",2);W([h()],A.prototype,"score",2);W([h()],A.prototype,"highScore",2);A=W([T("flappy-bird-game")],A);var Ut=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,K=(t,e,r,o)=>{for(var s=o>1?void 0:o?Vt(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&Ut(e,r,s),s};const H=10,U=20,u=28,Ue={I:[[[1,0],[1,1],[1,2],[1,3]],[[0,2],[1,2],[2,2],[3,2]],[[2,0],[2,1],[2,2],[2,3]],[[0,1],[1,1],[2,1],[3,1]]],O:[[[0,1],[0,2],[1,1],[1,2]],[[0,1],[0,2],[1,1],[1,2]],[[0,1],[0,2],[1,1],[1,2]],[[0,1],[0,2],[1,1],[1,2]]],T:[[[0,1],[1,0],[1,1],[1,2]],[[0,1],[1,1],[1,2],[2,1]],[[1,0],[1,1],[1,2],[2,1]],[[0,1],[1,0],[1,1],[2,1]]],S:[[[0,1],[0,2],[1,0],[1,1]],[[0,1],[1,1],[1,2],[2,2]],[[1,1],[1,2],[2,0],[2,1]],[[0,0],[1,0],[1,1],[2,1]]],Z:[[[0,0],[0,1],[1,1],[1,2]],[[0,2],[1,1],[1,2],[2,1]],[[1,0],[1,1],[2,1],[2,2]],[[0,1],[1,0],[1,1],[2,0]]],J:[[[0,0],[1,0],[1,1],[1,2]],[[0,1],[0,2],[1,1],[2,1]],[[1,0],[1,1],[1,2],[2,2]],[[0,1],[1,1],[2,0],[2,1]]],L:[[[0,2],[1,0],[1,1],[1,2]],[[0,1],[1,1],[2,1],[2,2]],[[1,0],[1,1],[1,2],[2,0]],[[0,0],[0,1],[1,1],[2,1]]]},ee={I:"#00f5ff",O:"#ffe600",T:"#bf5fff",S:"#00ff6e",Z:"#ff4d6d",J:"#4d79ff",L:"#ff9500"},xe={I:"rgba(0,245,255,0.7)",O:"rgba(255,230,0,0.7)",T:"rgba(191,95,255,0.7)",S:"rgba(0,255,110,0.7)",Z:"rgba(255,77,109,0.7)",J:"rgba(77,121,255,0.7)",L:"rgba(255,149,0,0.7)"},jt=["I","O","T","S","Z","J","L"],Nt=[0,100,300,500,800];function Wt(t){return Math.max(80,800-(t-1)*65)}let R=class extends v{constructor(){super(...arguments),this._score=0,this._highScore=0,this._level=1,this._lines=0,this._gameState="idle",this._board=[],this._activePiece=null,this._nextPiece=null,this._holdPiece=null,this._canHold=!0,this._bag=[],this._clearingRows=new Set,this._clearAnimStart=0,this._dropTimer=null,this._rafId=null,this._rafRunning=!1,this._boardCanvas=null,this._nextCanvas=null,this._holdCanvas=null}connectedCallback(){super.connectedCallback();const t=localStorage.getItem("tetris-high-score");t&&(this._highScore=parseInt(t,10)),this._handleKeydown=this._handleKeydown.bind(this),window.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeydown),this._stopGame(),this._stopRenderLoop()}_initBoard(){return Array.from({length:U},()=>Array(H).fill(null))}_getCells(t){return Ue[t.name][t.rot].map(([e,r])=>[t.row+e,t.col+r])}_isValid(t,e){for(const[r,o]of this._getCells(t))if(o<0||o>=H||r>=U||r>=0&&e[r][o]!==null)return!1;return!0}_getGhost(){if(!this._activePiece)return null;let t={...this._activePiece};for(;this._isValid({...t,row:t.row+1},this._board);)t={...t,row:t.row+1};return t}_refillBag(){const t=[...jt];for(let e=t.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[t[e],t[r]]=[t[r],t[e]]}this._bag.push(...t)}_nextFromBag(){return this._bag.length<=1&&this._refillBag(),this._bag.shift()}_makePiece(t){return{name:t,rot:0,row:0,col:3}}_startGame(){this._board=this._initBoard(),this._score=0,this._level=1,this._lines=0,this._holdPiece=null,this._canHold=!0,this._bag=[],this._clearingRows=new Set,this._refillBag(),this._nextPiece=this._nextFromBag(),this._spawnNext(),this._gameState="playing",this._scheduleDropTimer(),this._startRenderLoop()}_spawnNext(){const t=this._nextPiece;this._nextPiece=this._nextFromBag();const e=this._makePiece(t);if(!this._isValid(e,this._board)){this._activePiece=null,this._gameOver();return}this._activePiece=e,this._canHold=!0}_scheduleDropTimer(){this._dropTimer!==null&&clearInterval(this._dropTimer),this._dropTimer=window.setInterval(()=>this._drop(),Wt(this._level))}_stopGame(){this._dropTimer!==null&&(clearInterval(this._dropTimer),this._dropTimer=null)}_drop(){if(this._gameState!=="playing"||!this._activePiece)return;const t={...this._activePiece,row:this._activePiece.row+1};this._isValid(t,this._board)?this._activePiece=t:this._lockPiece()}_lockPiece(){if(!this._activePiece)return;const t=this._getCells(this._activePiece),e=ee[this._activePiece.name];if(t.some(([s])=>s<0)){this._gameOver();return}const r=this._board.map(s=>[...s]);for(const[s,i]of t)s>=0&&(r[s][i]=e);const o=r.reduce((s,i,a)=>(i.every(c=>c!==null)&&s.push(a),s),[]);this._board=r,this._activePiece=null,o.length>0?(this._clearingRows=new Set(o),this._clearAnimStart=performance.now(),setTimeout(()=>this._clearRows(o),250)):this._spawnNext()}_clearRows(t){const e=this._board.filter((s,i)=>!t.includes(i));for(;e.length<U;)e.unshift(Array(H).fill(null));this._board=e,this._clearingRows=new Set;const r=t.length;this._lines+=r,this._score+=Nt[r]*this._level;const o=Math.floor(this._lines/10)+1;o!==this._level&&(this._level=o,this._scheduleDropTimer()),this._spawnNext()}_gameOver(){this._gameState="gameover",this._stopGame(),this._score>this._highScore&&(this._highScore=this._score,localStorage.setItem("tetris-high-score",this._highScore.toString()))}_movePiece(t){if(!this._activePiece||this._gameState!=="playing")return;const e={...this._activePiece,col:this._activePiece.col+t};this._isValid(e,this._board)&&(this._activePiece=e)}_rotatePiece(t){if(!this._activePiece||this._gameState!=="playing")return;const e=(this._activePiece.rot+t+4)%4,r={...this._activePiece,rot:e};for(const o of[0,-1,1,-2,2]){const s={...r,col:r.col+o};if(this._isValid(s,this._board)){this._activePiece=s;return}}}_hardDrop(){if(!this._activePiece||this._gameState!=="playing")return;let t=0,e=this._activePiece;for(;;){const r={...e,row:e.row+1};if(this._isValid(r,this._board))e=r,t++;else break}this._activePiece=e,this._score+=t*2,this._lockPiece()}_softDrop(){if(!this._activePiece||this._gameState!=="playing")return;const t={...this._activePiece,row:this._activePiece.row+1};this._isValid(t,this._board)&&(this._activePiece=t,this._score+=1)}_holdAction(){if(!this._activePiece||!this._canHold||this._gameState!=="playing")return;const t=this._activePiece.name;if(this._canHold=!1,this._holdPiece){const e=this._holdPiece;this._holdPiece=t;const r=this._makePiece(e);if(!this._isValid(r,this._board)){this._gameOver();return}this._activePiece=r}else this._holdPiece=t,this._activePiece=null,this._spawnNext()}_handleKeydown(t){if(this._gameState==="idle"||this._gameState==="gameover"){(t.key===" "||t.key==="Enter")&&(t.preventDefault(),this._startGame());return}if(t.key==="p"||t.key==="P"||t.key==="Escape"){t.preventDefault(),this._gameState==="playing"?(this._gameState="paused",this._stopGame()):this._gameState==="paused"&&(this._gameState="playing",this._scheduleDropTimer());return}if(this._gameState==="playing")switch(t.key){case"ArrowLeft":case"a":case"A":t.preventDefault(),this._movePiece(-1);break;case"ArrowRight":case"d":case"D":t.preventDefault(),this._movePiece(1);break;case"ArrowDown":case"s":case"S":t.preventDefault(),this._softDrop();break;case"ArrowUp":case"x":case"X":t.preventDefault(),this._rotatePiece(1);break;case"z":case"Z":t.preventDefault(),this._rotatePiece(-1);break;case" ":t.preventDefault(),this._hardDrop();break;case"c":case"C":case"Shift":t.preventDefault(),this._holdAction();break}}_startRenderLoop(){if(this._rafRunning)return;this._rafRunning=!0;const t=()=>{this._rafRunning&&(this._drawAll(),this._rafId=requestAnimationFrame(t))};this._rafId=requestAnimationFrame(t)}_stopRenderLoop(){this._rafRunning=!1,this._rafId!==null&&(cancelAnimationFrame(this._rafId),this._rafId=null)}_resolveCanvases(){this._boardCanvas||(this._boardCanvas=this.renderRoot.querySelector("#board-canvas")),this._nextCanvas||(this._nextCanvas=this.renderRoot.querySelector("#next-canvas")),this._holdCanvas||(this._holdCanvas=this.renderRoot.querySelector("#hold-canvas"))}_drawAll(){this._resolveCanvases(),this._boardCanvas&&this._drawBoard(),this._nextCanvas&&this._drawPreview(this._nextCanvas,this._nextPiece),this._holdCanvas&&this._drawPreview(this._holdCanvas,this._holdPiece,!this._canHold)}_drawCell(t,e,r,o,s,i=u,a=1){const c=r*i,n=e*i,d=i-1;t.globalAlpha=a,t.shadowColor=s,t.shadowBlur=14,t.fillStyle=o,t.fillRect(c+1,n+1,d-1,d-1),t.shadowBlur=0,t.fillStyle="rgba(255,255,255,0.25)",t.fillRect(c+1,n+1,d-1,3),t.fillRect(c+1,n+1,3,d-1),t.fillStyle="rgba(0,0,0,0.25)",t.fillRect(c+1,n+d-2,d-1,2),t.fillRect(c+d-2,n+1,2,d-1),t.globalAlpha=1,t.shadowBlur=0}_nameFromColor(t){return Object.entries(ee).find(([,e])=>e===t)?.[0]??null}_drawBoard(){const t=this._boardCanvas,e=t.getContext("2d");e.fillStyle="#0a0a12",e.fillRect(0,0,t.width,t.height),e.strokeStyle="rgba(255,255,255,0.03)",e.lineWidth=1;for(let s=0;s<=U;s++)e.beginPath(),e.moveTo(0,s*u),e.lineTo(H*u,s*u),e.stroke();for(let s=0;s<=H;s++)e.beginPath(),e.moveTo(s*u,0),e.lineTo(s*u,U*u),e.stroke();const r=performance.now();for(let s=0;s<U;s++)for(let i=0;i<H;i++){const a=this._board[s][i];if(!a)continue;const c=this._nameFromColor(a),n=c?xe[c]:"rgba(255,255,255,0.4)";if(this._clearingRows.has(s)){const d=r-this._clearAnimStart,g=.4+(Math.sin(d/250*Math.PI*6)*.5+.5)*.6;this._drawCell(e,s,i,"#ffffff","rgba(255,255,255,0.9)",u,g)}else this._drawCell(e,s,i,a,n)}const o=this._getGhost();if(o&&this._activePiece&&o.row!==this._activePiece.row){const s=ee[o.name];e.strokeStyle=s,e.lineWidth=1;for(const[i,a]of this._getCells(o))i>=0&&(e.globalAlpha=.3,e.fillStyle=s,e.fillRect(a*u+1,i*u+1,u-2,u-2),e.globalAlpha=.6,e.strokeRect(a*u+.5,i*u+.5,u-1,u-1),e.globalAlpha=1)}if(this._activePiece){const s=ee[this._activePiece.name],i=xe[this._activePiece.name];for(const[a,c]of this._getCells(this._activePiece))a>=0&&this._drawCell(e,a,c,s,i)}}_drawPreview(t,e,r=!1){const o=t.getContext("2d"),s=t.width,i=t.height;if(o.fillStyle="#0a0a12",o.fillRect(0,0,s,i),!e)return;const a=Ue[e][0],c=ee[e],n=xe[e],d=a.map(([X])=>X),p=a.map(([,X])=>X),g=Math.min(...d),b=Math.max(...d),m=Math.min(...p),$=Math.max(...p),fe=b-g+1,Ae=$-m+1,Ce=8,z=Math.floor(Math.min((s-Ce*2)/Ae,(i-Ce*2)/fe)),Fe=Math.floor((s-Ae*z)/2),Ye=Math.floor((i-fe*z)/2);o.globalAlpha=r?.35:1,o.shadowColor=n,o.shadowBlur=10,o.fillStyle=c;for(const[X,Je]of a){const Ze=X-g,Ke=Je-m,be=Fe+Ke*z,me=Ye+Ze*z;o.fillRect(be+1,me+1,z-2,z-2),o.shadowBlur=0,o.fillStyle="rgba(255,255,255,0.22)",o.fillRect(be+1,me+1,z-2,3),o.fillRect(be+1,me+1,3,z-2),o.fillStyle=c,o.shadowColor=n,o.shadowBlur=10}o.shadowBlur=0,o.globalAlpha=1}updated(){this._boardCanvas=null,this._nextCanvas=null,this._holdCanvas=null,this._resolveCanvases(),this._gameState==="playing"&&!this._rafRunning&&this._startRenderLoop(),this._nextCanvas&&this._drawPreview(this._nextCanvas,this._nextPiece),this._holdCanvas&&this._drawPreview(this._holdCanvas,this._holdPiece,!this._canHold),this._boardCanvas&&this._drawBoard()}render(){const t=H*u,e=U*u;return l`
      <div class="game-container">
        <div class="game-layout">

          <!-- Left panel: Hold + score -->
          <div class="side-panel left-panel">
            <div class="panel-box">
              <div class="panel-label">HOLD</div>
              <canvas id="hold-canvas" width="104" height="80"></canvas>
            </div>
            <div class="panel-box">
              <div class="panel-label">SCORE</div>
              <div class="panel-value score-val">${this._score.toLocaleString()}</div>
            </div>
            <div class="panel-box">
              <div class="panel-label">BEST</div>
              <div class="panel-value">${this._highScore.toLocaleString()}</div>
            </div>
          </div>

          <!-- Main board -->
          <div class="board-wrapper">
            <canvas id="board-canvas" width="${t}" height="${e}"></canvas>

            ${this._gameState==="idle"?l`
              <div class="overlay">
                <h2 class="title-glow">TETRIS</h2>
                <div class="key-grid">
                  <span class="key">←→</span><span>Move</span>
                  <span class="key">↑ / X</span><span>Rotate CW</span>
                  <span class="key">Z</span><span>Rotate CCW</span>
                  <span class="key">↓</span><span>Soft Drop</span>
                  <span class="key">Space</span><span>Hard Drop</span>
                  <span class="key">C / Shift</span><span>Hold</span>
                </div>
                <button class="start-btn" @click=${this._startGame}>Start Game</button>
                <p class="hint">or press Space / Enter</p>
              </div>
            `:""}

            ${this._gameState==="paused"?l`
              <div class="overlay">
                <h2 class="title-glow">PAUSED</h2>
                <button class="start-btn" @click=${()=>{this._gameState="playing",this._scheduleDropTimer()}}>Resume</button>
                <p class="hint">P or Esc to toggle</p>
              </div>
            `:""}

            ${this._gameState==="gameover"?l`
              <div class="overlay">
                <h2 class="title-glow red-glow">GAME OVER</h2>
                <p class="final-score">Score: ${this._score.toLocaleString()}</p>
                ${this._score>0&&this._score===this._highScore?l`<p class="new-record">✦ New High Score! ✦</p>`:""}
                <button class="start-btn" @click=${this._startGame}>Play Again</button>
                <p class="hint">or press Space / Enter</p>
              </div>
            `:""}
          </div>

          <!-- Right panel: Next + level + lines -->
          <div class="side-panel right-panel">
            <div class="panel-box">
              <div class="panel-label">NEXT</div>
              <canvas id="next-canvas" width="104" height="80"></canvas>
            </div>
            <div class="panel-box">
              <div class="panel-label">LEVEL</div>
              <div class="panel-value">${this._level}</div>
            </div>
            <div class="panel-box">
              <div class="panel-label">LINES</div>
              <div class="panel-value">${this._lines}</div>
            </div>
          </div>

        </div>

        <div class="controls-hint">
          <span>Move: ←→ / AD</span>
          <span>Rotate: ↑/X · Z</span>
          <span>Hard Drop: Space</span>
          <span>Hold: C</span>
          <span>Pause: P / Esc</span>
        </div>
      </div>
    `}};R.styles=E`
    :host {
      display: block;
    }

    .game-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .game-layout {
      display: flex;
      gap: 12px;
      align-items: flex-start;
    }

    /* ── Side panels ── */

    .side-panel {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 116px;
    }

    .panel-box {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 6px;
      padding: 8px 10px;
    }

    .panel-label {
      font-size: 0.6rem;
      letter-spacing: 0.12em;
      color: #555;
      margin-bottom: 4px;
      font-weight: 600;
    }

    .panel-value {
      font-size: 1.3rem;
      font-weight: 700;
      color: #00f5ff;
      text-shadow: 0 0 10px rgba(0,245,255,0.4);
      line-height: 1;
    }

    .score-val {
      font-size: 1.1rem;
    }

    canvas#hold-canvas,
    canvas#next-canvas {
      display: block;
      width: 100%;
      border-radius: 4px;
    }

    /* ── Board ── */

    .board-wrapper {
      position: relative;
      flex-shrink: 0;
    }

    canvas#board-canvas {
      display: block;
      border: 2px solid rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    /* ── Overlays ── */

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(5, 5, 15, 0.92);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      text-align: center;
      padding: 1.5rem 1rem;
      border-radius: 2px;
    }

    .title-glow {
      margin: 0 0 0.4rem;
      font-size: 2.4rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      color: #00f5ff;
      text-shadow: 0 0 20px rgba(0,245,255,0.7), 0 0 40px rgba(0,245,255,0.3);
    }

    .red-glow {
      color: #ff4d6d;
      text-shadow: 0 0 20px rgba(255,77,109,0.7), 0 0 40px rgba(255,77,109,0.3);
    }

    .key-grid {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 4px 12px;
      font-size: 0.8rem;
      text-align: left;
      margin-bottom: 0.4rem;
    }

    .key {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 4px;
      padding: 1px 6px;
      font-family: monospace;
      font-size: 0.75rem;
      color: #00f5ff;
      white-space: nowrap;
      text-align: center;
    }

    .key-grid span:not(.key) {
      color: #888;
      line-height: 1.6;
    }

    .start-btn {
      padding: 0.7rem 2.2rem;
      font-size: 1rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      background: #00f5ff;
      color: #05050f;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.18s ease;
      margin-top: 0.2rem;
    }

    .start-btn:hover {
      background: #33f7ff;
      transform: scale(1.04);
      box-shadow: 0 0 20px rgba(0,245,255,0.5);
    }

    .hint {
      margin: 0;
      font-size: 0.75rem;
      color: #444;
    }

    .final-score {
      margin: 0;
      font-size: 1.1rem;
      color: #ccc;
    }

    .new-record {
      margin: 0;
      color: #ffe600;
      font-weight: 700;
      font-size: 0.95rem;
      text-shadow: 0 0 10px rgba(255,230,0,0.6);
      animation: record-pulse 0.7s ease-in-out infinite alternate;
    }

    @keyframes record-pulse {
      from { text-shadow: 0 0 6px rgba(255,230,0,0.4); }
      to   { text-shadow: 0 0 18px rgba(255,230,0,0.9); }
    }

    /* ── Controls hint ── */

    .controls-hint {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.3rem 1.5rem;
      font-size: 0.78rem;
      color: #444;
    }

    /* ── Responsive ── */

    @media (max-width: 560px) {
      .game-layout {
        flex-direction: column;
        align-items: center;
      }

      .side-panel {
        flex-direction: row;
        width: auto;
        flex-wrap: wrap;
        justify-content: center;
      }

      .left-panel {
        order: 2;
      }

      .right-panel {
        order: 3;
      }

      .board-wrapper {
        order: 1;
      }

      .panel-box {
        min-width: 80px;
      }
    }

    @media (prefers-color-scheme: light) {
      canvas#board-canvas {
        border-color: rgba(0,0,0,0.15);
      }

      .panel-box {
        background: rgba(0,0,0,0.03);
        border-color: rgba(0,0,0,0.1);
      }

      .overlay {
        background: rgba(250,250,255,0.94);
      }

      .key {
        background: rgba(0,0,0,0.06);
        border-color: rgba(0,0,0,0.15);
      }

      .key-grid span:not(.key) {
        color: #555;
      }
    }
  `;K([h()],R.prototype,"_score",2);K([h()],R.prototype,"_highScore",2);K([h()],R.prototype,"_level",2);K([h()],R.prototype,"_lines",2);K([h()],R.prototype,"_gameState",2);R=K([T("tetris-game")],R);var qt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,q=(t,e,r,o)=>{for(var s=o>1?void 0:o?Ft(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=(o?a(e,r,s):a(s))||s);return o&&s&&qt(e,r,s),s};let C=class extends v{constructor(){super(...arguments),this.userId="172768160",this.shelf="currently-reading",this.limit=10,this.books=[],this.loading=!0,this.error=""}connectedCallback(){super.connectedCallback(),this._fetchBooks()}async _fetchBooks(){this.loading=!0,this.error="";try{const t=`https://www.goodreads.com/review/list_rss/${this.userId}?shelf=${this.shelf}`,e=`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(t)}`,o=await(await fetch(e)).json();if(o.status!=="ok")throw new Error("Failed to fetch Goodreads data");this.books=o.items.slice(0,this.limit).map(s=>{const i=s.description?.match(/author:\s*([^<]+)/i),a=i?i[1].trim():"Unknown Author",c=s.description?.match(/<img[^>]+src="([^"]+)"/);let n=c?c[1]:"";return n&&(n=n.replace(/_S[XY]\d+_/g,"_SX300_")),{title:s.title||"Unknown Title",author:a,cover:n,link:s.link||"#"}})}catch(t){console.error("Error fetching Goodreads:",t),this.error="Could not load books"}finally{this.loading=!1}}render(){return this.loading?l`<div class="loading">Loading books...</div>`:this.error?l`<div class="error">${this.error}</div>`:this.books.length===0?l`<div class="empty">No books found</div>`:l`
      <div class="books-grid">
        ${this.books.map(t=>l`
          <a href=${t.link} target="_blank" rel="noopener noreferrer" class="book">
            ${t.cover?l`
              <img src=${t.cover} alt=${t.title} class="book-cover" loading="lazy" />
            `:l`
              <div class="book-cover placeholder">
                <span>📖</span>
              </div>
            `}
            <div class="book-info">
              <span class="book-title">${t.title}</span>
              <span class="book-author">${t.author}</span>
            </div>
          </a>
        `)}
      </div>
      <a href="https://www.goodreads.com/user/show/${this.userId}" target="_blank" rel="noopener noreferrer" class="goodreads-link">
        View on Goodreads →
      </a>
    `}};C.styles=E`
    :host {
      display: block;
    }

    .loading, .error, .empty {
      padding: 1rem;
      text-align: center;
      color: #888;
    }

    .error {
      color: #e74c3c;
    }

    .books-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
      gap: 1rem;
    }

    .book {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: inherit;
      transition: transform 0.2s ease;
    }

    .book:hover {
      transform: translateY(-4px);
    }

    .book-cover {
      width: 100%;
      aspect-ratio: 2/3;
      object-fit: cover;
      border-radius: 6px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    .book-cover.placeholder {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2rem;
    }

    .book-info {
      margin-top: 0.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .book-title {
      font-size: 0.85rem;
      font-weight: 600;
      color: #fff;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .book-author {
      font-size: 0.75rem;
      color: #888;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .goodreads-link {
      display: inline-block;
      margin-top: 1rem;
      color: #667eea;
      text-decoration: none;
      font-size: 0.9rem;
    }

    .goodreads-link:hover {
      text-decoration: underline;
    }

    @media (prefers-color-scheme: light) {
      .book-title {
        color: #333;
      }

      .book-author {
        color: #666;
      }

      .book-cover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
    }

    @media (max-width: 500px) {
      .books-grid {
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: 0.75rem;
      }

      .book-title {
        font-size: 0.75rem;
      }

      .book-author {
        font-size: 0.7rem;
      }
    }
  `;q([ue({type:String})],C.prototype,"userId",2);q([ue({type:String})],C.prototype,"shelf",2);q([ue({type:Number})],C.prototype,"limit",2);q([h()],C.prototype,"books",2);q([h()],C.prototype,"loading",2);q([h()],C.prototype,"error",2);C=q([T("goodreads-shelf")],C);var Yt=Object.getOwnPropertyDescriptor,Jt=(t,e,r,o)=>{for(var s=o>1?void 0:o?Yt(e,r):e,i=t.length-1,a;i>=0;i--)(a=t[i])&&(s=a(s)||s);return s};let _e=class extends v{constructor(){super(...arguments),this.selectedPost=null,this.blogPosts=kt,this.currentView="home",this._activeTag=null,this._revealObserver=null,this.games=[{id:"snake",name:"Snake",description:"Classic snake game. Eat food, grow longer, avoid walls!",icon:"🐍",color:"#00ADD8"},{id:"solitaire",name:"Solitaire",description:"Classic Klondike solitaire card game.",icon:"🃏",color:"#e74c3c"},{id:"tictactoe",name:"Tic Tac Toe",description:"Challenge an AI opponent!",icon:"⭕",color:"#9b59b6"},{id:"checkers",name:"Checkers",description:"Classic checkers against an AI opponent!",icon:"🔴",color:"#e67e22"},{id:"connectfour",name:"Connect Four",description:"Drop pieces and connect 4 to win!",icon:"🔵",color:"#3498db"},{id:"flappybird",name:"Flappy Bird",description:"Tap to flap and dodge the pipes!",icon:"🐤",color:"#f1c40f"},{id:"tetris",name:"Tetris",description:"Stack tetrominoes, clear lines, beat your high score!",icon:"🟦",color:"#00f5ff"}],this._handleHashChange=()=>{this._checkUrlHash()},this.repos=[{name:"warp-prometheus",url:"https://github.com/calvinbrown085/warp-prometheus",description:"Prometheus metrics extension for Rust's Warp library",language:"Rust",languageColor:"#dea584"},{name:"us-state-info-rs",url:"https://github.com/calvinbrown085/us-state-info-rs",description:"Rust library for getting information about the states of the United States",language:"Rust",languageColor:"#dea584"}]}connectedCallback(){super.connectedCallback(),this._checkUrlHash(),window.addEventListener("hashchange",this._handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._handleHashChange)}_checkUrlHash(){const t=window.location.hash.slice(1);if(t==="games/snake"){this.currentView="game-snake",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games/solitaire"){this.currentView="game-solitaire",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games/tictactoe"){this.currentView="game-tictactoe",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games/checkers"){this.currentView="game-checkers",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games/connectfour"){this.currentView="game-connectfour",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games/flappybird"){this.currentView="game-flappybird",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games/tetris"){this.currentView="game-tetris",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="now"){this.currentView="now",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="games"){this.currentView="games",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t==="blog"){this.currentView="blog",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(t.startsWith("blog/")){const e=t.slice(5),r=this.blogPosts.find(o=>o.id===e);if(r){this.currentView="blog-post",this.selectedPost=r,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}}if(t){const e=this.blogPosts.find(r=>r.id===t);if(e){window.history.replaceState(null,"",`#blog/${e.id}`),this.currentView="blog-post",this.selectedPost=e,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}}this.currentView="home",this.selectedPost=null,this.requestUpdate()}_navigateTo(t){if(t==="home")window.history.pushState(null,"",window.location.pathname),this.currentView="home";else if(t==="games")window.history.pushState(null,"","#games"),this.currentView="games";else if(t==="now")window.history.pushState(null,"","#now"),this.currentView="now";else if(t==="blog")window.history.pushState(null,"","#blog"),this.currentView="blog";else if(t.startsWith("game-")){const e=t.replace("game-","");window.history.pushState(null,"",`#games/${e}`),this.currentView=t}this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"})}render(){return l`
      ${this._renderNav()}
      ${this._renderCurrentView()}
    `}_renderCurrentView(){switch(this.currentView){case"blog":return this._renderBlogPage();case"blog-post":return this._renderBlogPostPage();case"games":return this._renderGamesHub();case"now":return this._renderNowPage();case"game-snake":return this._renderGamePage("snake");case"game-solitaire":return this._renderGamePage("solitaire");case"game-tictactoe":return this._renderGamePage("tictactoe");case"game-checkers":return this._renderGamePage("checkers");case"game-connectfour":return this._renderGamePage("connectfour");case"game-flappybird":return this._renderGamePage("flappybird");case"game-tetris":return this._renderGamePage("tetris");default:return this._renderHomePage()}}_renderNav(){const t=this.currentView==="home",e=this.currentView==="games"||this.currentView.startsWith("game-"),r=this.currentView==="now",o=this.currentView==="blog"||this.currentView==="blog-post";return l`
      <nav class="site-nav">
        <button class="nav-brand" @click=${()=>this._navigateTo("home")}>Calvin Brown</button>
        <div class="nav-links">
          <button class="nav-link ${t?"active":""}" @click=${()=>this._navigateTo("home")}>Home</button>
          <button class="nav-link ${o?"active":""}" @click=${()=>this._navigateTo("blog")}>Blog</button>
          <button class="nav-link ${e?"active":""}" @click=${()=>this._navigateTo("games")}>Games</button>
          <button class="nav-link ${r?"active":""}" @click=${()=>this._navigateTo("now")}>Reading</button>
        </div>
      </nav>
    `}_renderBlogPage(){const t=[...new Set(this.blogPosts.flatMap(r=>r.tags))],e=this._activeTag?this.blogPosts.filter(r=>r.tags.includes(this._activeTag)):this.blogPosts;return l`
      <div class="container blog-page">
        <header class="page-header">
          <button class="back-link" @click=${()=>this._navigateTo("home")}>
            ← Back to Home
          </button>
          <h1 class="blog-page-title">
            <svg viewBox="0 0 24 24" fill="currentColor" class="header-icon blog-header-icon">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
            </svg>
            Blog
          </h1>
          <p class="page-subtitle">Thoughts on software engineering</p>
        </header>

        <div class="blog-filter-bar">
          <button
            class="tag-filter-btn ${this._activeTag?"":"active"}"
            @click=${()=>{this._activeTag=null,this.requestUpdate()}}>
            All
          </button>
          ${t.map(r=>l`
            <button
              class="tag-filter-btn ${this._activeTag===r?"active":""}"
              @click=${o=>{o.stopPropagation(),this._activeTag=r,this.requestUpdate()}}>
              ${r}
            </button>
          `)}
        </div>

        <div class="blog-grid">
          ${e.map(r=>l`
            <article class="blog-card" @click=${()=>this._openPost(r)}>
              <div class="blog-header">
                <span class="blog-date">${this._formatDate(r.date)}</span>
                <div class="blog-tags">
                  ${r.tags.map(o=>l`<span class="tag">${o}</span>`)}
                </div>
              </div>
              <h3 class="blog-title">${r.title}</h3>
              <p class="blog-summary">${r.summary}</p>
              <div class="blog-card-footer">
                <span class="read-more">Read more →</span>
                <span class="reading-time">${this._readingTime(r.content)} min read</span>
              </div>
            </article>
          `)}
          ${e.length===0?l`
            <article class="blog-card add-more">
              <p>No posts with this tag yet.</p>
            </article>
          `:""}
        </div>
      </div>
    `}_renderBlogPostPage(){const t=this.selectedPost,e=`${window.location.origin}${window.location.pathname}#blog/${t.id}`;return l`
      <div class="container blog-post-page">
        <header class="blog-post-page-header">
          <button class="back-link" @click=${()=>this._navigateTo("blog")}>
            ← Back to Blog
          </button>
          <button class="share-btn" @click=${()=>this._copyPostLink(e)} title="Copy link to share">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy Link
          </button>
        </header>

        <article class="post-content standalone-post">
          <div class="post-meta">
            <span class="blog-date">${this._formatDate(t.date)}</span>
            <div class="blog-tags">
              ${t.tags.map(r=>l`<span class="tag">${r}</span>`)}
            </div>
          </div>
          <div class="reading-time-banner">${this._readingTime(t.content)} min read</div>
          <div .innerHTML=${t.content}></div>
        </article>

        <div class="post-footer-nav">
          <button class="back-button" @click=${()=>this._navigateTo("blog")}>
            ← Back to all posts
          </button>
          <button class="share-btn" @click=${()=>this._copyPostLink(e)} title="Copy link to share">
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
            </svg>
            Copy Link
          </button>
        </div>
      </div>
    `}_copyPostLink(t){navigator.clipboard.writeText(t).then(()=>{const e=this.shadowRoot?.querySelector(".share-btn");if(e){const r=e.textContent;e.textContent="✓ Copied!",setTimeout(()=>{e.textContent=r},2e3)}})}_renderGamesHub(){return l`
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
    `}_renderNowPage(){return l`
      <div class="container now-page">
        <header class="page-header">
          <button class="back-link" @click=${()=>this._navigateTo("home")}>
            ← Back to Home
          </button>
          <h1>
            <span class="now-icon">📚</span>
            Reading
          </h1>
          <p class="page-subtitle">What I'm currently reading</p>
        </header>

        <div class="now-content">
          <section class="now-section">
            <h2>📚 Currently Reading</h2>
            <goodreads-shelf shelf="currently-reading" limit="6"></goodreads-shelf>
          </section>

          <section class="now-section">
            <h2>✅ Recently Read</h2>
            <goodreads-shelf shelf="read" limit="6"></goodreads-shelf>
          </section>
        </div>

      </div>
    `}_renderGamePage(t){const e=this.games.find(r=>r.id===t);return e?l`
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
          ${t==="tictactoe"?l`<tic-tac-toe-game></tic-tac-toe-game>`:""}
          ${t==="checkers"?l`<checkers-game></checkers-game>`:""}
          ${t==="connectfour"?l`<connect-four-game></connect-four-game>`:""}
          ${t==="flappybird"?l`<flappy-bird-game></flappy-bird-game>`:""}
          ${t==="tetris"?l`<tetris-game></tetris-game>`:""}
        </section>
      </div>
    `:l`<p>Game not found</p>`}_renderHomePage(){return l`
      <div class="container">
        <!-- Hero Section -->
        <section class="hero">
          <div class="hero-bg" aria-hidden="true">
            <span class="bubble b1"></span>
            <span class="bubble b2"></span>
            <span class="bubble b3"></span>
            <span class="bubble b4"></span>
            <span class="bubble b5"></span>
            <span class="bubble b6"></span>
            <span class="bubble b7"></span>
            <span class="bubble b8"></span>
            <span class="bubble b9"></span>
            <span class="bubble b10"></span>
          </div>
          <div class="avatar-wrapper">
            <div class="avatar-ring"></div>
            <div class="profile-picture">
              <img src=${yt} alt="Calvin Brown" class="avatar-image" />
            </div>
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
        <section class="about reveal-section">
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

        <!-- Skills Section -->
        <section class="skills reveal-section">
          <h2>Technologies</h2>
          <div class="skills-cloud">
            <span class="skill-badge rust">Rust</span>
            <span class="skill-badge go">Go</span>
            <span class="skill-badge ts">TypeScript</span>
            <span class="skill-badge">Scala</span>
            <span class="skill-badge">Kafka</span>
            <span class="skill-badge">PostgreSQL</span>
            <span class="skill-badge">Docker</span>
            <span class="skill-badge">Kubernetes</span>
            <span class="skill-badge">AWS</span>
            <span class="skill-badge">Lit</span>
            <span class="skill-badge">gRPC</span>
            <span class="skill-badge">GraphQL</span>
          </div>
        </section>

        <!-- Projects Section -->
        <section class="projects reveal-section">
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
        <section class="blog reveal-section">
          <div class="blog-section-header">
            <h2>
              <svg viewBox="0 0 24 24" fill="currentColor" class="section-icon">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              Recent Posts
            </h2>
            <button class="view-all-btn" @click=${()=>this._navigateTo("blog")}>View all posts →</button>
          </div>
          ${this._renderRecentPosts()}
        </section>

        <!-- Quick Links -->
        <section class="quick-links-section">
          <div class="quick-links-grid">
            <div class="quick-link-card now-link" @click=${()=>this._navigateTo("now")}>
              <div class="quick-link-icon">
                <span>📚</span>
              </div>
              <div class="quick-link-content">
                <h3>Reading</h3>
                <p>What I'm currently reading</p>
              </div>
              <div class="quick-link-arrow">→</div>
            </div>

            <div class="quick-link-card games-link" @click=${()=>this._navigateTo("games")}>
              <div class="quick-link-icon">
                <span>🎮</span>
              </div>
              <div class="quick-link-content">
                <h3>Games</h3>
                <p>Take a break and play!</p>
              </div>
              <div class="quick-link-arrow">→</div>
            </div>
          </div>
        </section>

        <!-- Footer -->
        <footer>
          <p><a href="mailto:me@calvinbrown.dev">me@calvinbrown.dev</a></p>
          <p>&copy; ${new Date().getFullYear()} Calvin Brown. Built with Lit + Vite.</p>
        </footer>
      </div>
    `}_renderRecentPosts(){const t=this.blogPosts.slice(0,3);return l`
      <div class="blog-grid">
        ${t.map(e=>l`
          <article class="blog-card" @click=${()=>this._openPost(e)}>
            <div class="blog-header">
              <span class="blog-date">${this._formatDate(e.date)}</span>
              <div class="blog-tags">
                ${e.tags.map(r=>l`<span class="tag">${r}</span>`)}
              </div>
            </div>
            <h3 class="blog-title">${e.title}</h3>
            <p class="blog-summary">${e.summary}</p>
            <div class="blog-card-footer">
              <span class="read-more">Read more →</span>
              <span class="reading-time">${this._readingTime(e.content)} min read</span>
            </div>
          </article>
        `)}
      </div>
    `}_openPost(t){this.selectedPost=t,window.history.pushState(null,"",`#blog/${t.id}`),this.currentView="blog-post",this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"})}_readingTime(t){const r=t.replace(/<[^>]*>/g," ").trim().split(/\s+/).filter(o=>o.length>0).length;return Math.max(1,Math.ceil(r/200))}_formatDate(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}firstUpdated(){this._revealObserver=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("revealed"),this._revealObserver?.unobserve(e.target))})},{threshold:.1}),this._observeRevealSections()}updated(){this._observeRevealSections()}_observeRevealSections(){this.shadowRoot?.querySelectorAll(".reveal-section:not(.revealed)").forEach(t=>{this._revealObserver?.observe(t)})}};_e.styles=E`
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
      margin: 0;
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

    /* Quick Links Section */
    .quick-links-section {
      margin: 1rem 0;
    }

    .quick-links-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .quick-link-card {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .quick-link-card.now-link {
      background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
      border: 1px solid rgba(102, 126, 234, 0.3);
    }

    .quick-link-card.now-link:hover {
      border-color: #667eea;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
    }

    .quick-link-card.games-link {
      background: linear-gradient(135deg, rgba(255, 107, 107, 0.1) 0%, rgba(255, 142, 83, 0.1) 100%);
      border: 1px solid rgba(255, 107, 107, 0.3);
    }

    .quick-link-card.games-link:hover {
      border-color: #ff6b6b;
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(255, 107, 107, 0.2);
    }

    .quick-link-icon {
      width: 50px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      flex-shrink: 0;
    }

    .now-link .quick-link-icon {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }

    .games-link .quick-link-icon {
      background: linear-gradient(135deg, #ff6b6b 0%, #ff8e53 100%);
    }

    .quick-link-content {
      flex-grow: 1;
    }

    .quick-link-content h3 {
      margin: 0 0 0.25rem 0;
      font-size: 1.1rem;
    }

    .now-link .quick-link-content h3 {
      color: #667eea;
    }

    .games-link .quick-link-content h3 {
      color: #ff6b6b;
    }

    .quick-link-content p {
      margin: 0;
      color: #888;
      font-size: 0.9rem;
    }

    .quick-link-arrow {
      font-size: 1.25rem;
      color: #888;
      transition: transform 0.2s ease;
    }

    .quick-link-card:hover .quick-link-arrow {
      transform: translateX(4px);
      color: #fff;
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

    /* Now Page */
    .now-page .page-header h1 {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .now-icon {
      font-size: 2rem;
      margin-right: 0.25rem;
      -webkit-text-fill-color: initial;
    }

    .now-updated {
      font-size: 0.85rem;
      color: #666;
      margin-top: 0.5rem;
    }

    .now-content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 2rem;
    }

    .now-section {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 1.5rem;
    }

    .now-section h2 {
      margin: 0 0 1rem 0;
      font-size: 1.25rem;
      color: #667eea;
    }

    .now-section ul {
      margin: 0;
      padding-left: 1.5rem;
    }

    .now-section li {
      margin-bottom: 0.5rem;
      color: #aaa;
      line-height: 1.6;
    }

    .now-section li:last-child {
      margin-bottom: 0;
    }

    .now-section em {
      color: #bbb;
    }

    .now-footer {
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
    }

    .now-footer p {
      color: #666;
      font-size: 0.9rem;
    }

    .now-footer a {
      color: #667eea;
      text-decoration: none;
    }

    .now-footer a:hover {
      text-decoration: underline;
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

    /* ── Floating bubbles ── */
    .hero {
      position: relative;
      overflow: hidden;
      padding: 3rem 0 2rem;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
    }

    .hero > *:not(.hero-bg) {
      position: relative;
      z-index: 1;
    }

    .bubble {
      position: absolute;
      bottom: -120px;
      border-radius: 50%;
      opacity: 0;
      animation: bubble-rise linear infinite;
    }

    @keyframes bubble-rise {
      0%   { transform: translateY(0) scale(1);   opacity: 0;   }
      10%  { opacity: 1; }
      90%  { opacity: 0.5; }
      100% { transform: translateY(-420px) scale(0.7); opacity: 0; }
    }

    .b1  { width: 60px;  height: 60px;  left: 8%;   animation-duration: 9s;  animation-delay: 0s;    background: radial-gradient(circle at 35% 35%, rgba(102,126,234,0.55), rgba(102,126,234,0.05)); }
    .b2  { width: 90px;  height: 90px;  left: 18%;  animation-duration: 13s; animation-delay: 1.5s;  background: radial-gradient(circle at 35% 35%, rgba(118,75,162,0.45), rgba(118,75,162,0.05)); }
    .b3  { width: 40px;  height: 40px;  left: 30%;  animation-duration: 8s;  animation-delay: 3s;    background: radial-gradient(circle at 35% 35%, rgba(0,173,216,0.5),  rgba(0,173,216,0.05));  }
    .b4  { width: 110px; height: 110px; left: 45%;  animation-duration: 15s; animation-delay: 0.5s;  background: radial-gradient(circle at 35% 35%, rgba(102,126,234,0.35), rgba(102,126,234,0.02)); }
    .b5  { width: 55px;  height: 55px;  left: 58%;  animation-duration: 10s; animation-delay: 2s;    background: radial-gradient(circle at 35% 35%, rgba(0,173,216,0.4),  rgba(0,173,216,0.05));  }
    .b6  { width: 75px;  height: 75px;  left: 70%;  animation-duration: 12s; animation-delay: 4s;    background: radial-gradient(circle at 35% 35%, rgba(118,75,162,0.5),  rgba(118,75,162,0.05)); }
    .b7  { width: 45px;  height: 45px;  left: 80%;  animation-duration: 7s;  animation-delay: 1s;    background: radial-gradient(circle at 35% 35%, rgba(102,126,234,0.6), rgba(102,126,234,0.05)); }
    .b8  { width: 85px;  height: 85px;  left: 90%;  animation-duration: 11s; animation-delay: 3.5s;  background: radial-gradient(circle at 35% 35%, rgba(0,173,216,0.35), rgba(0,173,216,0.02));  }
    .b9  { width: 50px;  height: 50px;  left: 25%;  animation-duration: 14s; animation-delay: 5s;    background: radial-gradient(circle at 35% 35%, rgba(118,75,162,0.4),  rgba(118,75,162,0.05)); }
    .b10 { width: 70px;  height: 70px;  left: 55%;  animation-duration: 16s; animation-delay: 6s;    background: radial-gradient(circle at 35% 35%, rgba(102,126,234,0.45), rgba(102,126,234,0.05)); }

    /* ── Animated avatar ring ── */
    .avatar-wrapper {
      position: relative;
      width: 158px;
      height: 158px;
      margin: 0 auto 1.5rem;
    }

    .avatar-ring {
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      background: conic-gradient(from 0deg, #667eea, #764ba2, #00ADD8, #667eea);
      animation: spin-ring 4s linear infinite;
      z-index: 0;
    }

    @keyframes spin-ring {
      to { transform: rotate(360deg); }
    }

    .avatar-wrapper .profile-picture {
      position: relative;
      z-index: 1;
      margin: 0;
      padding: 3px;
      background: #1a1a1a;
      border-radius: 50%;
      width: 150px;
      height: 150px;
      box-sizing: border-box;
    }

    .avatar-wrapper .avatar-image {
      width: 144px;
      height: 144px;
      border-radius: 50%;
      object-fit: cover;
      display: block;
    }

    /* ── Skills section ── */
    .skills h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }

    .skills-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }

    .skill-badge {
      display: inline-block;
      padding: 0.45rem 1rem;
      border-radius: 999px;
      font-size: 0.85rem;
      font-weight: 500;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: #ccc;
      transition: all 0.2s ease;
      cursor: default;
      backdrop-filter: blur(4px);
    }

    .skill-badge:hover {
      transform: translateY(-3px);
      border-color: rgba(102, 126, 234, 0.5);
      background: rgba(102, 126, 234, 0.12);
      color: #fff;
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.25);
    }

    .skill-badge.rust {
      border-color: rgba(222, 165, 132, 0.4);
      color: #dea584;
    }

    .skill-badge.rust:hover {
      background: rgba(222, 165, 132, 0.12);
      box-shadow: 0 6px 20px rgba(222, 165, 132, 0.2);
    }

    .skill-badge.go {
      border-color: rgba(0, 173, 216, 0.4);
      color: #00ADD8;
    }

    .skill-badge.go:hover {
      background: rgba(0, 173, 216, 0.12);
      box-shadow: 0 6px 20px rgba(0, 173, 216, 0.2);
    }

    .skill-badge.ts {
      border-color: rgba(49, 120, 198, 0.4);
      color: #4d9de0;
    }

    .skill-badge.ts:hover {
      background: rgba(49, 120, 198, 0.12);
      box-shadow: 0 6px 20px rgba(49, 120, 198, 0.2);
    }

    /* ── Enhanced glassmorphism cards ── */
    .about {
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }

    .repo-card {
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .blog-card {
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    /* ── Site navigation ── */
    .site-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 0;
      margin-bottom: 0.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .nav-brand {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      color: #667eea;
      padding: 0;
      letter-spacing: -0.02em;
      transition: color 0.15s ease;
    }

    .nav-brand:hover {
      color: #764ba2;
    }

    .nav-links {
      display: flex;
      gap: 0.25rem;
    }

    .nav-link {
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.875rem;
      color: #888;
      padding: 0.4rem 0.75rem;
      border-radius: 6px;
      transition: all 0.15s ease;
    }

    .nav-link:hover {
      background: rgba(255, 255, 255, 0.06);
      color: #ddd;
    }

    .nav-link.active {
      color: #fff;
      background: rgba(102, 126, 234, 0.18);
    }

    /* ── Blog tag filter ── */
    .blog-filter-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .tag-filter-btn {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 999px;
      color: #aaa;
      cursor: pointer;
      font-size: 0.8rem;
      padding: 0.3rem 0.75rem;
      transition: all 0.15s ease;
    }

    .tag-filter-btn:hover {
      border-color: #00ADD8;
      color: #00ADD8;
    }

    .tag-filter-btn.active {
      background: rgba(0, 173, 216, 0.15);
      border-color: #00ADD8;
      color: #00ADD8;
    }

    /* ── Blog card footer (read more + reading time) ── */
    .blog-card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .reading-time {
      font-size: 0.8rem;
      color: #666;
    }

    /* ── Scroll reveal animations ── */
    .reveal-section {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .reveal-section.revealed {
      opacity: 1;
      transform: translateY(0);
    }

    /* Blog section header (home page) */
    .blog-section-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1.5rem;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .blog-section-header h2 {
      margin: 0;
    }

    .view-all-btn {
      background: none;
      border: 1px solid rgba(0, 173, 216, 0.4);
      border-radius: 999px;
      color: #00ADD8;
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0.4rem 1rem;
      transition: all 0.15s ease;
    }

    .view-all-btn:hover {
      background: rgba(0, 173, 216, 0.1);
      border-color: #00ADD8;
    }

    /* Blog list page */
    .blog-page {
      min-height: 100vh;
    }

    .blog-page-title {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #00ADD8 0%, #667eea 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .blog-header-icon {
      -webkit-text-fill-color: initial;
      color: #00ADD8;
    }

    /* Blog post page */
    .blog-post-page {
      min-height: 100vh;
    }

    .blog-post-page-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .standalone-post {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      padding: 2.5rem;
      line-height: 1.8;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .reading-time-banner {
      font-size: 0.85rem;
      color: #666;
      margin-bottom: 2rem;
      padding-bottom: 1.5rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .post-footer-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }

    /* Share button */
    .share-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      background: none;
      border: 1px solid rgba(102, 126, 234, 0.4);
      border-radius: 8px;
      color: #667eea;
      cursor: pointer;
      font-size: 0.85rem;
      padding: 0.5rem 1rem;
      transition: all 0.15s ease;
    }

    .share-btn:hover {
      background: rgba(102, 126, 234, 0.1);
      border-color: #667eea;
    }

    /* Light mode adjustments */
    @media (prefers-color-scheme: light) {
      .site-nav {
        border-bottom-color: rgba(0, 0, 0, 0.1);
      }

      .nav-link:hover {
        background: rgba(0, 0, 0, 0.05);
        color: #213547;
      }

      .nav-link.active {
        color: #213547;
        background: rgba(102, 126, 234, 0.1);
      }

      .tagline {
        color: #555;
      }

      .tag-filter-btn {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.12);
        color: #555;
      }

      .tag-filter-btn:hover {
        color: #00ADD8;
        border-color: #00ADD8;
      }

      .tag-filter-btn.active {
        background: rgba(0, 173, 216, 0.08);
        color: #00ADD8;
        border-color: #00ADD8;
      }

      .reading-time {
        color: #999;
      }

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

      .now-section {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .now-section li {
        color: #555;
      }

      .now-section em {
        color: #444;
      }

      .now-footer {
        border-color: rgba(0, 0, 0, 0.1);
      }

      .now-footer p {
        color: #888;
      }

      .quick-link-content p {
        color: #666;
      }

      .blog-post-page-header {
        border-bottom-color: rgba(0, 0, 0, 0.1);
      }

      .standalone-post {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .reading-time-banner {
        border-bottom-color: rgba(0, 0, 0, 0.1);
      }

      .post-footer-nav {
        border-top-color: rgba(0, 0, 0, 0.1);
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

      .nav-brand {
        font-size: 0.9rem;
      }

      .nav-link {
        font-size: 0.8rem;
        padding: 0.35rem 0.5rem;
      }

      .blog-filter-bar {
        gap: 0.4rem;
      }

      .tag-filter-btn {
        font-size: 0.75rem;
        padding: 0.25rem 0.6rem;
      }
    }
  `;_e=Jt([T("my-element")],_e);
