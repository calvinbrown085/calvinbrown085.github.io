(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const I=globalThis,G=I.ShadowRoot&&(I.ShadyCSS===void 0||I.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,j=Symbol(),F=new WeakMap;let se=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==j)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(G&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=F.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&F.set(t,e))}return e}toString(){return this.cssText}};const he=o=>new se(typeof o=="string"?o:o+"",void 0,j),ie=(o,...e)=>{const t=o.length===1?o[0]:e.reduce((r,s,i)=>r+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[i+1],o[0]);return new se(t,o,j)},pe=(o,e)=>{if(G)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const r=document.createElement("style"),s=I.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=t.cssText,o.appendChild(r)}},q=G?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(const r of e.cssRules)t+=r.cssText;return he(t)})(o):o;const{is:ge,defineProperty:ue,getOwnPropertyDescriptor:me,getOwnPropertyNames:fe,getOwnPropertySymbols:be,getPrototypeOf:ve}=Object,z=globalThis,K=z.trustedTypes,ye=K?K.emptyScript:"",$e=z.reactiveElementPolyfillSupport,P=(o,e)=>o,M={toAttribute(o,e){switch(e){case Boolean:o=o?ye:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},B=(o,e)=>!ge(o,e),J={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:B};Symbol.metadata??=Symbol("metadata"),z.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=J){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&ue(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:i}=me(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const l=s?.call(this);i?.call(this,a),this.requestUpdate(e,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??J}static _$Ei(){if(this.hasOwnProperty(P("elementProperties")))return;const e=ve(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(P("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(P("properties"))){const t=this.properties,r=[...fe(t),...be(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(q(s))}else e!==void 0&&t.push(q(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pe(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){const r=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,r);if(s!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:M).toAttribute(t,r.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){const r=this.constructor,s=r._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const i=r.getPropertyOptions(s),a=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:M;this._$Em=s;const l=a.fromAttribute(t,i.type);this[s]=l??this._$Ej?.get(s)??l,this._$Em=null}}requestUpdate(e,t,r,s=!1,i){if(e!==void 0){const a=this.constructor;if(s===!1&&(i=this[e]),r??=a.getPropertyOptions(e),!((r.hasChanged??B)(i,t)||r.useDefault&&r.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:i},a){r&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),i!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,i]of r){const{wrapped:a}=i,l=this[s];a!==!0||this._$AL.has(s)||l===void 0||this.C(s,void 0,i,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[P("elementProperties")]=new Map,w[P("finalized")]=new Map,$e?.({ReactiveElement:w}),(z.reactiveElementVersions??=[]).push("2.1.2");const V=globalThis,Y=o=>o,U=V.trustedTypes,X=U?U.createPolicy("lit-html",{createHTML:o=>o}):void 0,ae="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,ne="?"+b,_e=`<${ne}>`,_=document,C=()=>_.createComment(""),D=o=>o===null||typeof o!="object"&&typeof o!="function",W=Array.isArray,xe=o=>W(o)||typeof o?.[Symbol.iterator]=="function",N=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Q=/-->/g,ee=/>/g,y=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),te=/'/g,oe=/"/g,le=/^(?:script|style|textarea|title)$/i,we=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),g=we(1),S=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),re=new WeakMap,$=_.createTreeWalker(_,129);function ce(o,e){if(!W(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return X!==void 0?X.createHTML(e):e}const ke=(o,e)=>{const t=o.length-1,r=[];let s,i=e===2?"<svg>":e===3?"<math>":"",a=E;for(let l=0;l<t;l++){const n=o[l];let d,p,c=-1,m=0;for(;m<n.length&&(a.lastIndex=m,p=a.exec(n),p!==null);)m=a.lastIndex,a===E?p[1]==="!--"?a=Q:p[1]!==void 0?a=ee:p[2]!==void 0?(le.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=y):p[3]!==void 0&&(a=y):a===y?p[0]===">"?(a=s??E,c=-1):p[1]===void 0?c=-2:(c=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?y:p[3]==='"'?oe:te):a===oe||a===te?a=y:a===Q||a===ee?a=E:(a=y,s=void 0);const f=a===y&&o[l+1].startsWith("/>")?" ":"";i+=a===E?n+_e:c>=0?(r.push(d),n.slice(0,c)+ae+n.slice(c)+b+f):n+b+(c===-2?l:f)}return[ce(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class L{constructor({strings:e,_$litType$:t},r){let s;this.parts=[];let i=0,a=0;const l=e.length-1,n=this.parts,[d,p]=ke(e,t);if(this.el=L.createElement(d,r),$.currentNode=this.el.content,t===2||t===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=$.nextNode())!==null&&n.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(ae)){const m=p[a++],f=s.getAttribute(c).split(b),O=/([.?@])?(.*)/.exec(m);n.push({type:1,index:i,name:O[2],strings:f,ctor:O[1]==="."?Ae:O[1]==="?"?Ee:O[1]==="@"?Pe:R}),s.removeAttribute(c)}else c.startsWith(b)&&(n.push({type:6,index:i}),s.removeAttribute(c));if(le.test(s.tagName)){const c=s.textContent.split(b),m=c.length-1;if(m>0){s.textContent=U?U.emptyScript:"";for(let f=0;f<m;f++)s.append(c[f],C()),$.nextNode(),n.push({type:2,index:++i});s.append(c[m],C())}}}else if(s.nodeType===8)if(s.data===ne)n.push({type:2,index:i});else{let c=-1;for(;(c=s.data.indexOf(b,c+1))!==-1;)n.push({type:7,index:i}),c+=b.length-1}i++}}static createElement(e,t){const r=_.createElement("template");return r.innerHTML=e,r}}function A(o,e,t=o,r){if(e===S)return e;let s=r!==void 0?t._$Co?.[r]:t._$Cl;const i=D(e)?void 0:e._$litDirective$;return s?.constructor!==i&&(s?._$AO?.(!1),i===void 0?s=void 0:(s=new i(o),s._$AT(o,t,r)),r!==void 0?(t._$Co??=[])[r]=s:t._$Cl=s),s!==void 0&&(e=A(o,s._$AS(o,e.values),s,r)),e}class Se{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=(e?.creationScope??_).importNode(t,!0);$.currentNode=s;let i=$.nextNode(),a=0,l=0,n=r[0];for(;n!==void 0;){if(a===n.index){let d;n.type===2?d=new H(i,i.nextSibling,this,e):n.type===1?d=new n.ctor(i,n.name,n.strings,this,e):n.type===6&&(d=new Ce(i,this,e)),this._$AV.push(d),n=r[++l]}a!==n?.index&&(i=$.nextNode(),a++)}return $.currentNode=_,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=A(this,e,t),D(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==S&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(_.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=L.createElement(ce(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(t);else{const i=new Se(s,this),a=i.u(this.options);i.p(t),this.T(a),this._$AH=i}}_$AC(e){let t=re.get(e.strings);return t===void 0&&re.set(e.strings,t=new L(e)),t}k(e){W(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let r,s=0;for(const i of e)s===t.length?t.push(r=new H(this.O(C()),this.O(C()),this,this.options)):r=t[s],r._$AI(i),s++;s<t.length&&(this._$AR(r&&r._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const r=Y(e).nextSibling;Y(e).remove(),e=r}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,i){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=h}_$AI(e,t=this,r,s){const i=this.strings;let a=!1;if(i===void 0)e=A(this,e,t,0),a=!D(e)||e!==this._$AH&&e!==S,a&&(this._$AH=e);else{const l=e;let n,d;for(e=i[0],n=0;n<i.length-1;n++)d=A(this,l[r+n],t,n),d===S&&(d=this._$AH[n]),a||=!D(d)||d!==this._$AH[n],d===h?e=h:e!==h&&(e+=(d??"")+i[n+1]),this._$AH[n]=d}a&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ae extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Ee extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Pe extends R{constructor(e,t,r,s,i){super(e,t,r,s,i),this.type=5}_$AI(e,t=this){if((e=A(this,e,t,0)??h)===S)return;const r=this._$AH,s=e===h&&r!==h||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==h&&(r===h||s);s&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Ce{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){A(this,e)}}const De=V.litHtmlPolyfillSupport;De?.(L,H),(V.litHtmlVersions??=[]).push("3.3.2");const Le=(o,e,t)=>{const r=t?.renderBefore??e;let s=r._$litPart$;if(s===void 0){const i=t?.renderBefore??null;r._$litPart$=s=new H(e.insertBefore(C(),i),i,void 0,t??{})}return s._$AI(o),s};const Z=globalThis;class k extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Le(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}}k._$litElement$=!0,k.finalized=!0,Z.litElementHydrateSupport?.({LitElement:k});const He=Z.litElementPolyfillSupport;He?.({LitElement:k});(Z.litElementVersions??=[]).push("4.2.2");const de=o=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};const Oe={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:B},Ie=(o=Oe,e,t)=>{const{kind:r,metadata:s}=t;let i=globalThis.litPropertyMetadata.get(s);if(i===void 0&&globalThis.litPropertyMetadata.set(s,i=new Map),r==="setter"&&((o=Object.create(o)).wrapped=!0),i.set(t.name,o),r==="accessor"){const{name:a}=t;return{set(l){const n=e.get.call(this);e.set.call(this,l),this.requestUpdate(a,n,o,!0,l)},init(l){return l!==void 0&&this.C(a,void 0,o,l),l}}}if(r==="setter"){const{name:a}=t;return function(l){const n=this[a];e.call(this,l),this.requestUpdate(a,n,o,!0,l)}}throw Error("Unsupported decorator location: "+r)};function Me(o){return(e,t)=>typeof t=="object"?Ie(o,e,t):((r,s,i)=>{const a=s.hasOwnProperty(i);return s.constructor.createProperty(i,r),a?Object.getOwnPropertyDescriptor(s,i):void 0})(o,e,t)}function x(o){return Me({...o,state:!0,attribute:!1})}const Ue="/assets/calvin-headshot-DvgFd22I.jpg",ze=[{id:"structured-logging-in-go",title:"Structured Logging in Go",summary:"How to use structured logging in Go to make your logs more readable and searchable.",date:"2026-01-30",tags:["Go","Logging","Structured Logging"],content:`
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
    `}];var Re=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,v=(o,e,t,r)=>{for(var s=r>1?void 0:r?Ne(e,t):e,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=(r?a(e,t,s):a(s))||s);return r&&s&&Re(e,t,s),s};let u=class extends k{constructor(){super(...arguments),this.GRID_SIZE=20,this.CELL_SIZE=20,this.GAME_SPEED=100,this.snake=[],this.food={x:0,y:0},this.direction="right",this.nextDirection="right",this.score=0,this.highScore=0,this.gameState="idle",this.gameLoop=null}connectedCallback(){super.connectedCallback();const o=localStorage.getItem("snake-high-score");o&&(this.highScore=parseInt(o,10)),this._handleKeydown=this._handleKeydown.bind(this),window.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeydown),this._stopGame()}_initGame(){const o=Math.floor(this.GRID_SIZE/2);this.snake=[{x:o,y:o},{x:o-1,y:o},{x:o-2,y:o}],this.direction="right",this.nextDirection="right",this.score=0,this._spawnFood()}_spawnFood(){let o;do o={x:Math.floor(Math.random()*this.GRID_SIZE),y:Math.floor(Math.random()*this.GRID_SIZE)};while(this.snake.some(e=>e.x===o.x&&e.y===o.y));this.food=o}_startGame(){(this.gameState==="idle"||this.gameState==="gameover")&&this._initGame(),this.gameState="playing",this.gameLoop=window.setInterval(()=>this._tick(),this.GAME_SPEED)}_pauseGame(){this.gameState="paused",this._stopGame()}_stopGame(){this.gameLoop&&(clearInterval(this.gameLoop),this.gameLoop=null)}_tick(){this.direction=this.nextDirection;const o=this.snake[0];let e;switch(this.direction){case"up":e={x:o.x,y:o.y-1};break;case"down":e={x:o.x,y:o.y+1};break;case"left":e={x:o.x-1,y:o.y};break;case"right":e={x:o.x+1,y:o.y};break}if(e.x<0||e.x>=this.GRID_SIZE||e.y<0||e.y>=this.GRID_SIZE){this._gameOver();return}if(this.snake.some(r=>r.x===e.x&&r.y===e.y)){this._gameOver();return}const t=[e,...this.snake];e.x===this.food.x&&e.y===this.food.y?(this.score+=10,this._spawnFood()):t.pop(),this.snake=t}_gameOver(){this._stopGame(),this.gameState="gameover",this.score>this.highScore&&(this.highScore=this.score,localStorage.setItem("snake-high-score",this.highScore.toString()))}_handleKeydown(o){if(this.gameState!=="playing"&&this.gameState!=="paused"){(o.key===" "||o.key==="Enter")&&(o.preventDefault(),this._startGame());return}switch(o.key){case"ArrowUp":case"w":case"W":o.preventDefault(),this.direction!=="down"&&(this.nextDirection="up");break;case"ArrowDown":case"s":case"S":o.preventDefault(),this.direction!=="up"&&(this.nextDirection="down");break;case"ArrowLeft":case"a":case"A":o.preventDefault(),this.direction!=="right"&&(this.nextDirection="left");break;case"ArrowRight":case"d":case"D":o.preventDefault(),this.direction!=="left"&&(this.nextDirection="right");break;case" ":o.preventDefault(),this.gameState==="playing"?this._pauseGame():this.gameState==="paused"&&this._startGame();break;case"Escape":o.preventDefault(),this.gameState==="playing"&&this._pauseGame();break}}render(){const o=this.GRID_SIZE*this.CELL_SIZE;return g`
      <div class="game-container">
        <div class="header">
          <div class="score">Score: ${this.score}</div>
          <div class="high-score">High Score: ${this.highScore}</div>
        </div>

        <div class="game-area" style="width: ${o}px; height: ${o}px;">
          <!-- Grid -->
          <div class="grid">
            ${this.snake.map((e,t)=>g`
              <div 
                class="snake-segment ${t===0?"head":""}"
                style="left: ${e.x*this.CELL_SIZE}px; top: ${e.y*this.CELL_SIZE}px; width: ${this.CELL_SIZE-2}px; height: ${this.CELL_SIZE-2}px;"
              ></div>
            `)}
            <div 
              class="food"
              style="left: ${this.food.x*this.CELL_SIZE}px; top: ${this.food.y*this.CELL_SIZE}px; width: ${this.CELL_SIZE-2}px; height: ${this.CELL_SIZE-2}px;"
            ></div>
          </div>

          <!-- Overlays -->
          ${this.gameState==="idle"?g`
            <div class="overlay">
              <h3>Snake Game</h3>
              <p>Use arrow keys or WASD to move</p>
              <button @click=${this._startGame}>Start Game</button>
              <p class="hint">or press Space/Enter</p>
            </div>
          `:""}

          ${this.gameState==="paused"?g`
            <div class="overlay">
              <h3>Paused</h3>
              <button @click=${this._startGame}>Resume</button>
              <p class="hint">or press Space</p>
            </div>
          `:""}

          ${this.gameState==="gameover"?g`
            <div class="overlay">
              <h3>Game Over!</h3>
              <p>Final Score: ${this.score}</p>
              ${this.score===this.highScore&&this.score>0?g`<p class="new-record">New High Score!</p>`:""}
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
    `}};u.styles=ie`
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
  `;v([x()],u.prototype,"snake",2);v([x()],u.prototype,"food",2);v([x()],u.prototype,"direction",2);v([x()],u.prototype,"nextDirection",2);v([x()],u.prototype,"score",2);v([x()],u.prototype,"highScore",2);v([x()],u.prototype,"gameState",2);u=v([de("snake-game")],u);var Te=Object.getOwnPropertyDescriptor,Ge=(o,e,t,r)=>{for(var s=r>1?void 0:r?Te(e,t):e,i=o.length-1,a;i>=0;i--)(a=o[i])&&(s=a(s)||s);return s};let T=class extends k{constructor(){super(...arguments),this.selectedPost=null,this.blogPosts=ze,this.currentView="home",this._handleHashChange=()=>{this._checkUrlHash()},this.repos=[{name:"warp-prometheus",url:"https://github.com/calvinbrown085/warp-prometheus",description:"Prometheus metrics extension for Rust's Warp library",language:"Rust",languageColor:"#dea584"},{name:"us-state-info-rs",url:"https://github.com/calvinbrown085/us-state-info-rs",description:"Rust library for getting information about the states of the United States",language:"Rust",languageColor:"#dea584"}]}connectedCallback(){super.connectedCallback(),this._checkUrlHash(),window.addEventListener("hashchange",this._handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._handleHashChange)}_checkUrlHash(){const o=window.location.hash.slice(1);if(o==="games"){this.currentView="games",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(o){const e=this.blogPosts.find(t=>t.id===o);if(e){this.currentView="home",this.selectedPost=e,this.requestUpdate(),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".blog")?.scrollIntoView({behavior:"smooth"})});return}}this.currentView="home",this.selectedPost=null,this.requestUpdate()}_navigateTo(o){o==="home"?window.history.pushState(null,"",window.location.pathname):window.history.pushState(null,"",`#${o}`),this.currentView=o,this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"})}render(){return this.currentView==="games"?this._renderGamesPage():this._renderHomePage()}_renderGamesPage(){return g`
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

        <section class="game-section">
          <h2>Snake</h2>
          <p>Classic snake game. Eat the food, grow longer, don't hit the walls or yourself!</p>
          <snake-game></snake-game>
        </section>

        <section class="more-games">
          <p>More games coming soon...</p>
        </section>
      </div>
    `}_renderHomePage(){return g`
      <div class="container">
        <!-- Hero Section -->
        <section class="hero">
          <div class="profile-picture">
            <img src=${Ue} alt="Calvin Brown" class="avatar-image" />
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
            ${this.repos.map(o=>g`
              <a href=${o.url} target="_blank" rel="noopener noreferrer" class="repo-card">
                <div class="repo-header">
                  <svg viewBox="0 0 16 16" fill="currentColor" class="repo-icon">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                  </svg>
                  <span class="repo-name">${o.name}</span>
                </div>
                <p class="repo-description">${o.description}</p>
                <div class="repo-footer">
                  <span class="language">
                    <span class="language-dot" style="background-color: ${o.languageColor}"></span>
                    ${o.language}
                  </span>
                </div>
              </a>
            `)}
            
            <!-- Add more repo placeholder -->
            <div class="repo-card add-more">
              <p>More projects coming soon...</p>
            </div>
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
            <a href="https://github.com/calvinbrown085" target="_blank" rel="noopener noreferrer">GitHub</a>
            <p><a href="https://www.linkedin.com/in/calvin-brown-6ab208aa" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
            <p><a href="mailto:calvin.brown@jackhenry.com">me@calvinbrown.dev</a></p> 
            
          </p>
          <p>&copy; ${new Date().getFullYear()} Calvin Brown. Built with Lit + Vite.</p>
        </footer>
      </div>
    `}_renderPostList(){return g`
      <div class="blog-grid">
        ${this.blogPosts.map(o=>g`
          <article class="blog-card" @click=${()=>this._openPost(o)}>
            <div class="blog-header">
              <span class="blog-date">${this._formatDate(o.date)}</span>
              <div class="blog-tags">
                ${o.tags.map(e=>g`<span class="tag">${e}</span>`)}
              </div>
            </div>
            <h3 class="blog-title">${o.title}</h3>
            <p class="blog-summary">${o.summary}</p>
            <span class="read-more">Read more →</span>
          </article>
        `)}
        
        <article class="blog-card add-more">
          <p>More posts coming soon...</p>
        </article>
      </div>
    `}_renderFullPost(){const o=this.selectedPost;return g`
      <div class="full-post">
        <button class="back-button" @click=${this._closePost}>
          ← Back to all posts
        </button>
        <article class="post-content">
          <div class="post-meta">
            <span class="blog-date">${this._formatDate(o.date)}</span>
            <div class="blog-tags">
              ${o.tags.map(e=>g`<span class="tag">${e}</span>`)}
            </div>
          </div>
          <div .innerHTML=${o.content}></div>
        </article>
      </div>
    `}_openPost(o){this.selectedPost=o,window.history.pushState(null,"",`#${o.id}`),this.requestUpdate(),this.shadowRoot?.querySelector(".blog")?.scrollIntoView({behavior:"smooth"})}_closePost(){this.selectedPost=null,window.history.pushState(null,"",window.location.pathname),this.requestUpdate()}_formatDate(o){return new Date(o).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}};T.styles=ie`
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

    .game-section {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 2rem;
      margin-bottom: 2rem;
    }

    .game-section h2 {
      margin: 0 0 0.5rem 0;
      font-size: 1.5rem;
      text-align: center;
    }

    .game-section > p {
      color: #888;
      text-align: center;
      margin-bottom: 1.5rem;
    }

    .more-games {
      text-align: center;
      padding: 2rem;
      border: 1px dashed rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      color: #666;
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

      .game-section {
        background: rgba(0, 0, 0, 0.03);
        border-color: rgba(0, 0, 0, 0.1);
      }

      .more-games {
        border-color: rgba(0, 0, 0, 0.2);
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
  `;T=Ge([de("my-element")],T);
