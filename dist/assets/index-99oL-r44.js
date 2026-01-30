(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const On=globalThis,Pi=On.ShadowRoot&&(On.ShadyCSS===void 0||On.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ci=Symbol(),ba=new WeakMap;let Hc=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Ci)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Pi&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=ba.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ba.set(t,e))}return e}toString(){return this.cssText}};const _h=r=>new Hc(typeof r=="string"?r:r+"",void 0,Ci),bt=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((n,s,o)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Hc(t,r,Ci)},yh=(r,e)=>{if(Pi)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const n=document.createElement("style"),s=On.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)}},wa=Pi?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return _h(t)})(r):r;const{is:vh,defineProperty:bh,getOwnPropertyDescriptor:wh,getOwnPropertyNames:Eh,getOwnPropertySymbols:Th,getPrototypeOf:Ah}=Object,ls=globalThis,Ea=ls.trustedTypes,Ih=Ea?Ea.emptyScript:"",Sh=ls.reactiveElementPolyfillSupport,zr=(r,e)=>r,Gn={toAttribute(r,e){switch(e){case Boolean:r=r?Ih:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Ri=(r,e)=>!vh(r,e),Ta={attribute:!0,type:String,converter:Gn,reflect:!1,useDefault:!1,hasChanged:Ri};Symbol.metadata??=Symbol("metadata"),ls.litPropertyMetadata??=new WeakMap;let Jt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ta){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&bh(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){const{get:s,set:o}=wh(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const u=s?.call(this);o?.call(this,a),this.requestUpdate(e,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ta}static _$Ei(){if(this.hasOwnProperty(zr("elementProperties")))return;const e=Ah(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(zr("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zr("properties"))){const t=this.properties,n=[...Eh(t),...Th(t)];for(const s of n)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(const[t,n]of this.elementProperties){const s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(wa(s))}else e!==void 0&&t.push(wa(e));return t}static _$Eu(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yh(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){const n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:Gn).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){const n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=n.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Gn;this._$Em=s;const u=a.fromAttribute(t,o.type);this[s]=u??this._$Ej?.get(s)??u,this._$Em=null}}requestUpdate(e,t,n,s=!1,o){if(e!==void 0){const a=this.constructor;if(s===!1&&(o=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Ri)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:s,wrapped:o},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[s,o]of n){const{wrapped:a}=o,u=this[s];a!==!0||this._$AL.has(s)||u===void 0||this.C(s,void 0,o,u)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};Jt.elementStyles=[],Jt.shadowRootOptions={mode:"open"},Jt[zr("elementProperties")]=new Map,Jt[zr("finalized")]=new Map,Sh?.({ReactiveElement:Jt}),(ls.reactiveElementVersions??=[]).push("2.1.2");const ki=globalThis,Aa=r=>r,Hn=ki.trustedTypes,Ia=Hn?Hn.createPolicy("lit-html",{createHTML:r=>r}):void 0,Wc="$lit$",ct=`lit$${Math.random().toFixed(9).slice(2)}$`,Kc="?"+ct,xh=`<${Kc}>`,Ft=document,Yr=()=>Ft.createComment(""),Jr=r=>r===null||typeof r!="object"&&typeof r!="function",Vi=Array.isArray,Ph=r=>Vi(r)||typeof r?.[Symbol.iterator]=="function",Qs=`[ 	
\f\r]`,$r=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Sa=/-->/g,xa=/>/g,Vt=RegExp(`>|${Qs}(?:([^\\s"'>=/]+)(${Qs}*=${Qs}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pa=/'/g,Ca=/"/g,Qc=/^(?:script|style|textarea|title)$/i,Ch=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),R=Ch(1),ar=Symbol.for("lit-noChange"),he=Symbol.for("lit-nothing"),Ra=new WeakMap,Nt=Ft.createTreeWalker(Ft,129);function Yc(r,e){if(!Vi(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ia!==void 0?Ia.createHTML(e):e}const Rh=(r,e)=>{const t=r.length-1,n=[];let s,o=e===2?"<svg>":e===3?"<math>":"",a=$r;for(let u=0;u<t;u++){const h=r[u];let d,p,y=-1,A=0;for(;A<h.length&&(a.lastIndex=A,p=a.exec(h),p!==null);)A=a.lastIndex,a===$r?p[1]==="!--"?a=Sa:p[1]!==void 0?a=xa:p[2]!==void 0?(Qc.test(p[2])&&(s=RegExp("</"+p[2],"g")),a=Vt):p[3]!==void 0&&(a=Vt):a===Vt?p[0]===">"?(a=s??$r,y=-1):p[1]===void 0?y=-2:(y=a.lastIndex-p[2].length,d=p[1],a=p[3]===void 0?Vt:p[3]==='"'?Ca:Pa):a===Ca||a===Pa?a=Vt:a===Sa||a===xa?a=$r:(a=Vt,s=void 0);const P=a===Vt&&r[u+1].startsWith("/>")?" ":"";o+=a===$r?h+xh:y>=0?(n.push(d),h.slice(0,y)+Wc+h.slice(y)+ct+P):h+ct+(y===-2?u:P)}return[Yc(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]};let ii=class Jc{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,a=0;const u=e.length-1,h=this.parts,[d,p]=Rh(e,t);if(this.el=Jc.createElement(d,n),Nt.currentNode=this.el.content,t===2||t===3){const y=this.el.content.firstChild;y.replaceWith(...y.childNodes)}for(;(s=Nt.nextNode())!==null&&h.length<u;){if(s.nodeType===1){if(s.hasAttributes())for(const y of s.getAttributeNames())if(y.endsWith(Wc)){const A=p[a++],P=s.getAttribute(y).split(ct),D=/([.?@])?(.*)/.exec(A);h.push({type:1,index:o,name:D[2],strings:P,ctor:D[1]==="."?Vh:D[1]==="?"?Dh:D[1]==="@"?Nh:us}),s.removeAttribute(y)}else y.startsWith(ct)&&(h.push({type:6,index:o}),s.removeAttribute(y));if(Qc.test(s.tagName)){const y=s.textContent.split(ct),A=y.length-1;if(A>0){s.textContent=Hn?Hn.emptyScript:"";for(let P=0;P<A;P++)s.append(y[P],Yr()),Nt.nextNode(),h.push({type:2,index:++o});s.append(y[A],Yr())}}}else if(s.nodeType===8)if(s.data===Kc)h.push({type:2,index:o});else{let y=-1;for(;(y=s.data.indexOf(ct,y+1))!==-1;)h.push({type:7,index:o}),y+=ct.length-1}o++}}static createElement(e,t){const n=Ft.createElement("template");return n.innerHTML=e,n}};function cr(r,e,t=r,n){if(e===ar)return e;let s=n!==void 0?t._$Co?.[n]:t._$Cl;const o=Jr(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=s:t._$Cl=s),s!==void 0&&(e=cr(r,s._$AS(r,e.values),s,n)),e}class kh{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:n}=this._$AD,s=(e?.creationScope??Ft).importNode(t,!0);Nt.currentNode=s;let o=Nt.nextNode(),a=0,u=0,h=n[0];for(;h!==void 0;){if(a===h.index){let d;h.type===2?d=new ln(o,o.nextSibling,this,e):h.type===1?d=new h.ctor(o,h.name,h.strings,this,e):h.type===6&&(d=new Mh(o,this,e)),this._$AV.push(d),h=n[++u]}a!==h?.index&&(o=Nt.nextNode(),a++)}return Nt.currentNode=Ft,s}p(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ln{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=he,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=cr(this,e,t),Jr(e)?e===he||e==null||e===""?(this._$AH!==he&&this._$AR(),this._$AH=he):e!==this._$AH&&e!==ar&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Ph(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==he&&Jr(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ft.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ii.createElement(Yc(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(t);else{const o=new kh(s,this),a=o.u(this.options);o.p(t),this.T(a),this._$AH=o}}_$AC(e){let t=Ra.get(e.strings);return t===void 0&&Ra.set(e.strings,t=new ii(e)),t}k(e){Vi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const o of e)s===t.length?t.push(n=new ln(this.O(Yr()),this.O(Yr()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const n=Aa(e).nextSibling;Aa(e).remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class us{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,o){this.type=1,this._$AH=he,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=he}_$AI(e,t=this,n,s){const o=this.strings;let a=!1;if(o===void 0)e=cr(this,e,t,0),a=!Jr(e)||e!==this._$AH&&e!==ar,a&&(this._$AH=e);else{const u=e;let h,d;for(e=o[0],h=0;h<o.length-1;h++)d=cr(this,u[n+h],t,h),d===ar&&(d=this._$AH[h]),a||=!Jr(d)||d!==this._$AH[h],d===he?e=he:e!==he&&(e+=(d??"")+o[h+1]),this._$AH[h]=d}a&&!s&&this.j(e)}j(e){e===he?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Vh extends us{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===he?void 0:e}}let Dh=class extends us{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==he)}};class Nh extends us{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){if((e=cr(this,e,t,0)??he)===ar)return;const n=this._$AH,s=e===he&&n!==he||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==he&&(n===he||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class Mh{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){cr(this,e)}}const Oh=ki.litHtmlPolyfillSupport;Oh?.(ii,ln),(ki.litHtmlVersions??=[]).push("3.3.2");const $h=(r,e,t)=>{const n=t?.renderBefore??e;let s=n._$litPart$;if(s===void 0){const o=t?.renderBefore??null;n._$litPart$=s=new ln(e.insertBefore(Yr(),o),o,void 0,t??{})}return s._$AI(r),s};const Di=globalThis;class Pe extends Jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=$h(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ar}}Pe._$litElement$=!0,Pe.finalized=!0,Di.litElementHydrateSupport?.({LitElement:Pe});const Lh=Di.litElementPolyfillSupport;Lh?.({LitElement:Pe});(Di.litElementVersions??=[]).push("4.2.2");const wt=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};const Fh={attribute:!0,type:String,converter:Gn,reflect:!1,hasChanged:Ri},Uh=(r=Fh,e,t)=>{const{kind:n,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),n==="accessor"){const{name:a}=t;return{set(u){const h=e.get.call(this);e.set.call(this,u),this.requestUpdate(a,h,r,!0,u)},init(u){return u!==void 0&&this.C(a,void 0,r,u),u}}}if(n==="setter"){const{name:a}=t;return function(u){const h=this[a];e.call(this,u),this.requestUpdate(a,h,r,!0,u)}}throw Error("Unsupported decorator location: "+n)};function Xc(r){return(e,t)=>typeof t=="object"?Uh(r,e,t):((n,s,o)=>{const a=s.hasOwnProperty(o);return s.constructor.createProperty(o,n),a?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}function $(r){return Xc({...r,state:!0,attribute:!1})}const Bh="/assets/calvin-headshot-DvgFd22I.jpg",jh=[{id:"structured-logging-in-go",title:"Structured Logging in Go",summary:"How to use structured logging in Go to make your logs more readable and searchable.",date:"2026-01-30",tags:["Go","Logging","Structured Logging"],content:`
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
    `}];var zh=Object.defineProperty,qh=Object.getOwnPropertyDescriptor,Et=(r,e,t,n)=>{for(var s=n>1?void 0:n?qh(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&zh(e,t,s),s};let ze=class extends Pe{constructor(){super(...arguments),this.GRID_SIZE=20,this.CELL_SIZE=20,this.GAME_SPEED=100,this.snake=[],this.food={x:0,y:0},this.direction="right",this.nextDirection="right",this.score=0,this.highScore=0,this.gameState="idle",this.gameLoop=null}connectedCallback(){super.connectedCallback();const r=localStorage.getItem("snake-high-score");r&&(this.highScore=parseInt(r,10)),this._handleKeydown=this._handleKeydown.bind(this),window.addEventListener("keydown",this._handleKeydown)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("keydown",this._handleKeydown),this._stopGame()}_initGame(){const r=Math.floor(this.GRID_SIZE/2);this.snake=[{x:r,y:r},{x:r-1,y:r},{x:r-2,y:r}],this.direction="right",this.nextDirection="right",this.score=0,this._spawnFood()}_spawnFood(){let r;do r={x:Math.floor(Math.random()*this.GRID_SIZE),y:Math.floor(Math.random()*this.GRID_SIZE)};while(this.snake.some(e=>e.x===r.x&&e.y===r.y));this.food=r}_startGame(){(this.gameState==="idle"||this.gameState==="gameover")&&this._initGame(),this.gameState="playing",this.gameLoop=window.setInterval(()=>this._tick(),this.GAME_SPEED)}_pauseGame(){this.gameState="paused",this._stopGame()}_stopGame(){this.gameLoop&&(clearInterval(this.gameLoop),this.gameLoop=null)}_tick(){this.direction=this.nextDirection;const r=this.snake[0];let e;switch(this.direction){case"up":e={x:r.x,y:r.y-1};break;case"down":e={x:r.x,y:r.y+1};break;case"left":e={x:r.x-1,y:r.y};break;case"right":e={x:r.x+1,y:r.y};break}if(e.x<0||e.x>=this.GRID_SIZE||e.y<0||e.y>=this.GRID_SIZE){this._gameOver();return}if(this.snake.some(n=>n.x===e.x&&n.y===e.y)){this._gameOver();return}const t=[e,...this.snake];e.x===this.food.x&&e.y===this.food.y?(this.score+=10,this._spawnFood()):t.pop(),this.snake=t}_gameOver(){this._stopGame(),this.gameState="gameover",this.score>this.highScore&&(this.highScore=this.score,localStorage.setItem("snake-high-score",this.highScore.toString()))}_handleKeydown(r){if(this.gameState!=="playing"&&this.gameState!=="paused"){(r.key===" "||r.key==="Enter")&&(r.preventDefault(),this._startGame());return}switch(r.key){case"ArrowUp":case"w":case"W":r.preventDefault(),this.direction!=="down"&&(this.nextDirection="up");break;case"ArrowDown":case"s":case"S":r.preventDefault(),this.direction!=="up"&&(this.nextDirection="down");break;case"ArrowLeft":case"a":case"A":r.preventDefault(),this.direction!=="right"&&(this.nextDirection="left");break;case"ArrowRight":case"d":case"D":r.preventDefault(),this.direction!=="left"&&(this.nextDirection="right");break;case" ":r.preventDefault(),this.gameState==="playing"?this._pauseGame():this.gameState==="paused"&&this._startGame();break;case"Escape":r.preventDefault(),this.gameState==="playing"&&this._pauseGame();break}}render(){const r=this.GRID_SIZE*this.CELL_SIZE;return R`
      <div class="game-container">
        <div class="header">
          <div class="score">Score: ${this.score}</div>
          <div class="high-score">High Score: ${this.highScore}</div>
        </div>

        <div class="game-area" style="width: ${r}px; height: ${r}px;">
          <!-- Grid -->
          <div class="grid">
            ${this.snake.map((e,t)=>R`
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
          ${this.gameState==="idle"?R`
            <div class="overlay">
              <h3>Snake Game</h3>
              <p>Use arrow keys or WASD to move</p>
              <button @click=${this._startGame}>Start Game</button>
              <p class="hint">or press Space/Enter</p>
            </div>
          `:""}

          ${this.gameState==="paused"?R`
            <div class="overlay">
              <h3>Paused</h3>
              <button @click=${this._startGame}>Resume</button>
              <p class="hint">or press Space</p>
            </div>
          `:""}

          ${this.gameState==="gameover"?R`
            <div class="overlay">
              <h3>Game Over!</h3>
              <p>Final Score: ${this.score}</p>
              ${this.score===this.highScore&&this.score>0?R`<p class="new-record">New High Score!</p>`:""}
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
    `}};ze.styles=bt`
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
  `;Et([$()],ze.prototype,"snake",2);Et([$()],ze.prototype,"food",2);Et([$()],ze.prototype,"direction",2);Et([$()],ze.prototype,"nextDirection",2);Et([$()],ze.prototype,"score",2);Et([$()],ze.prototype,"highScore",2);Et([$()],ze.prototype,"gameState",2);ze=Et([wt("snake-game")],ze);var Gh=Object.defineProperty,Hh=Object.getOwnPropertyDescriptor,Ze=(r,e,t,n)=>{for(var s=n>1?void 0:n?Hh(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Gh(e,t,s),s};const ka=["hearts","diamonds","clubs","spades"],Wh={1:"A",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K"};let Ve=class extends Pe{constructor(){super(...arguments),this.stock=[],this.waste=[],this.foundations=[[],[],[],[]],this.tableau=[[],[],[],[],[],[],[]],this.dragState=null,this.mousePos={x:0,y:0},this.moves=0,this.gameWon=!1,this.boundMouseMove=this._handleMouseMove.bind(this),this.boundMouseUp=this._handleMouseUp.bind(this)}connectedCallback(){super.connectedCallback(),this._newGame()}_handleMouseMove(r){this.dragState&&(this.mousePos={x:r.clientX,y:r.clientY},this.requestUpdate())}_handleMouseUp(r){this.dragState&&(this._handleDrop(r),document.removeEventListener("mousemove",this.boundMouseMove),document.removeEventListener("mouseup",this.boundMouseUp))}_createDeck(){const r=[];for(const e of ka)for(let t=1;t<=13;t++)r.push({suit:e,rank:t,faceUp:!1});return r}_shuffle(r){const e=[...r];for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}_newGame(){const r=this._shuffle(this._createDeck());this.tableau=[[],[],[],[],[],[],[]];let e=0;for(let t=0;t<7;t++)for(let n=0;n<=t;n++){const s=r[e++];s.faceUp=n===t,this.tableau[t].push(s)}this.stock=r.slice(e).map(t=>({...t,faceUp:!1})),this.waste=[],this.foundations=[[],[],[],[]],this.moves=0,this.gameWon=!1,this.requestUpdate()}_getColor(r){return r==="hearts"||r==="diamonds"?"red":"black"}_getSuitSymbol(r){switch(r){case"hearts":return"♥";case"diamonds":return"♦";case"clubs":return"♣";case"spades":return"♠"}}_drawFromStock(){if(this.stock.length===0)this.stock=this.waste.map(r=>({...r,faceUp:!1})).reverse(),this.waste=[];else{const r=this.stock.pop();r.faceUp=!0,this.waste.push(r),this.moves++}this.requestUpdate()}_canPlaceOnTableau(r,e){if(e.length===0)return r.rank===13;const t=e[e.length-1];return t.faceUp?this._getColor(r.suit)!==this._getColor(t.suit)&&r.rank===t.rank-1:!1}_canPlaceOnFoundation(r,e){if(e.length===0)return r.rank===1;const t=e[e.length-1];return r.suit===t.suit&&r.rank===t.rank+1}_startDrag(r,e,t,n,s){r.preventDefault();const o=r.target.getBoundingClientRect();this.dragState={cards:e,sourceType:t,sourceIndex:n,offsetX:r.clientX-o.left,offsetY:r.clientY-o.top,startCardIndex:s},this.mousePos={x:r.clientX,y:r.clientY},document.addEventListener("mousemove",this.boundMouseMove),document.addEventListener("mouseup",this.boundMouseUp),this.requestUpdate()}_handleTableauCardMouseDown(r,e,t){const n=this.tableau[e],s=n[t];if(!s.faceUp){t===n.length-1&&(s.faceUp=!0,this.requestUpdate());return}const o=n.slice(t);o.every(a=>a.faceUp)&&this._startDrag(r,o,"tableau",e,t)}_handleWasteMouseDown(r){if(this.waste.length===0)return;const e=this.waste[this.waste.length-1];this._startDrag(r,[e],"waste",0)}_handleFoundationMouseDown(r,e){const t=this.foundations[e];if(t.length>0){const n=t[t.length-1];this._startDrag(r,[n],"foundation",e)}}_handleDrop(r){if(!this.dragState)return;const e=this.shadowRoot?.elementsFromPoint(r.clientX,r.clientY)||[];for(const t of e){const n=t.closest(".tableau-pile");if(n){const o=parseInt(n.getAttribute("data-col")||"-1");if(o>=0){this._tryDropOnTableau(o);break}}const s=t.closest(".foundation");if(s){const o=parseInt(s.getAttribute("data-index")||"-1");if(o>=0){this._tryDropOnFoundation(o);break}}}this.dragState=null,this.requestUpdate()}_tryDropOnTableau(r){if(!this.dragState)return!1;const{cards:e,sourceType:t,sourceIndex:n}=this.dragState,s=e[0],o=this.tableau[r];return this._canPlaceOnTableau(s,o)?(this._removeFromSource(t,n,e.length),this.tableau[r]=[...o,...e],this.moves++,this._checkWin(),!0):!1}_tryDropOnFoundation(r){if(!this.dragState||this.dragState.cards.length!==1)return!1;const{cards:e,sourceType:t,sourceIndex:n}=this.dragState,s=e[0],o=this.foundations[r];return this._canPlaceOnFoundation(s,o)?(this._removeFromSource(t,n,1),this.foundations[r]=[...o,s],this.moves++,this._checkWin(),!0):!1}_removeFromSource(r,e,t){if(r==="tableau"){this.tableau[e]=this.tableau[e].slice(0,-t);const n=this.tableau[e];n.length>0&&!n[n.length-1].faceUp&&(n[n.length-1].faceUp=!0)}else r==="waste"?this.waste=this.waste.slice(0,-1):r==="foundation"&&(this.foundations[e]=this.foundations[e].slice(0,-1))}_tryAutoMove(r,e,t){for(let n=0;n<4;n++)if(this._canPlaceOnFoundation(r,this.foundations[n]))return this._removeFromSource(e,t,1),this.foundations[n]=[...this.foundations[n],r],this.moves++,this._checkWin(),this.requestUpdate(),!0;return!1}_handleDoubleClick(r,e,t){this._tryAutoMove(r,e,t)}_checkWin(){this.foundations.reduce((e,t)=>e+t.length,0)===52&&(this.gameWon=!0)}render(){return R`
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
                ${this.stock.length>0?R`<div class="card back"></div>`:R`<div class="card empty refresh">↻</div>`}
              </div>
              <div class="waste pile" @mousedown=${r=>this._handleWasteMouseDown(r)}>
                ${this.waste.length>0?this._renderCard(this.waste[this.waste.length-1],this.dragState?.sourceType==="waste"):R`<div class="card empty"></div>`}
              </div>
            </div>

            <!-- Foundations -->
            <div class="foundations">
              ${this.foundations.map((r,e)=>R`
                <div 
                  class="foundation pile" 
                  data-index="${e}"
                  @mousedown=${t=>r.length>0?this._handleFoundationMouseDown(t,e):null}
                >
                  ${r.length>0?this._renderCard(r[r.length-1],this.dragState?.sourceType==="foundation"&&this.dragState?.sourceIndex===e):R`<div class="card empty">${this._getSuitSymbol(ka[e])}</div>`}
                </div>
              `)}
            </div>
          </div>

          <!-- Tableau -->
          <div class="tableau">
            ${this.tableau.map((r,e)=>R`
              <div class="tableau-pile" data-col="${e}">
                ${r.length===0?R`<div class="card empty"></div>`:r.map((t,n)=>{const s=this.dragState?.sourceType==="tableau"&&this.dragState?.sourceIndex===e&&this.dragState?.startCardIndex!==void 0&&n>=this.dragState.startCardIndex;return R`
                        <div 
                          class="card-wrapper ${s?"dragging":""}"
                          style="top: ${n*25}px"
                          @mousedown=${o=>this._handleTableauCardMouseDown(o,e,n)}
                          @dblclick=${()=>t.faceUp&&n===r.length-1?this._handleDoubleClick(t,"tableau",e):null}
                        >
                          ${this._renderCard(t,s)}
                        </div>
                      `})}
              </div>
            `)}
          </div>
        </div>

        <!-- Dragging cards overlay -->
        ${this.dragState?R`
          <div 
            class="drag-overlay"
            style="left: ${this.mousePos.x-this.dragState.offsetX}px; top: ${this.mousePos.y-this.dragState.offsetY}px;"
          >
            ${this.dragState.cards.map((r,e)=>R`
              <div class="drag-card" style="top: ${e*25}px">
                ${this._renderCard(r,!1)}
              </div>
            `)}
          </div>
        `:""}

        ${this.gameWon?R`
          <div class="win-overlay">
            <div class="win-content">
              <h2>🎉 You Win! 🎉</h2>
              <p>Completed in ${this.moves} moves</p>
              <button @click=${this._newGame}>Play Again</button>
            </div>
          </div>
        `:""}
      </div>
    `}_renderCard(r,e=!1){if(!r.faceUp)return R`<div class="card back"></div>`;const t=this._getColor(r.suit),n=this._getSuitSymbol(r.suit),s=Wh[r.rank];return R`
      <div class="card face ${t} ${e?"selected":""}">
        <div class="card-corner top-left">
          <span class="rank">${s}</span>
          <span class="suit">${n}</span>
        </div>
        <div class="card-center">
          <span class="suit large">${n}</span>
        </div>
        <div class="card-corner bottom-right">
          <span class="rank">${s}</span>
          <span class="suit">${n}</span>
        </div>
      </div>
    `}};Ve.styles=bt`
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
  `;Ze([$()],Ve.prototype,"stock",2);Ze([$()],Ve.prototype,"waste",2);Ze([$()],Ve.prototype,"foundations",2);Ze([$()],Ve.prototype,"tableau",2);Ze([$()],Ve.prototype,"dragState",2);Ze([$()],Ve.prototype,"mousePos",2);Ze([$()],Ve.prototype,"moves",2);Ze([$()],Ve.prototype,"gameWon",2);Ve=Ze([wt("solitaire-game")],Ve);var Kh=Object.defineProperty,Qh=Object.getOwnPropertyDescriptor,Tt=(r,e,t,n)=>{for(var s=n>1?void 0:n?Qh(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Kh(e,t,s),s};let qe=class extends Pe{constructor(){super(...arguments),this.board=Array(9).fill(null),this.gameState="idle",this.playerScore=0,this.aiScore=0,this.draws=0,this.isPlayerTurn=!0,this.winningLine=[],this.PLAYER="X",this.AI="O"}connectedCallback(){super.connectedCallback(),this._loadScores()}_loadScores(){const r=localStorage.getItem("tictactoe-scores");if(r){const e=JSON.parse(r);this.playerScore=e.player||0,this.aiScore=e.ai||0,this.draws=e.draws||0}}_saveScores(){localStorage.setItem("tictactoe-scores",JSON.stringify({player:this.playerScore,ai:this.aiScore,draws:this.draws}))}_startGame(){this.board=Array(9).fill(null),this.gameState="playing",this.isPlayerTurn=!0,this.winningLine=[]}_handleCellClick(r){this.gameState!=="playing"||!this.isPlayerTurn||this.board[r]||(this._makeMove(r,this.PLAYER),this.gameState==="playing"&&(this.isPlayerTurn=!1,setTimeout(()=>this._aiMove(),400)))}_makeMove(r,e){this.board=[...this.board],this.board[r]=e;const t=this._checkWinner(this.board);t?(this.winningLine=this._getWinningLine(this.board),t===this.PLAYER?(this.gameState="won",this.playerScore++):(this.gameState="lost",this.aiScore++),this._saveScores()):this._isBoardFull(this.board)&&(this.gameState="draw",this.draws++,this._saveScores())}_aiMove(){if(this.gameState!=="playing")return;const r=this._minimax(this.board,this.AI,0,-1/0,1/0);this._makeMove(r.index,this.AI),this.isPlayerTurn=!0}_minimax(r,e,t,n,s){const o=this._checkWinner(r);if(o===this.AI)return{score:10-t};if(o===this.PLAYER)return{score:t-10};if(this._isBoardFull(r))return{score:0};const a=[],u=this._getAvailableMoves(r);for(const h of u){const d=[...r];d[h]=e;const p=this._minimax(d,e===this.AI?this.PLAYER:this.AI,t+1,n,s);if(a.push({score:p.score,index:h}),e===this.AI?n=Math.max(n,p.score):s=Math.min(s,p.score),s<=n)break}return e===this.AI?a.reduce((d,p)=>d.score>p.score?d:p):a.reduce((d,p)=>d.score<p.score?d:p)}_getAvailableMoves(r){return r.map((e,t)=>e===null?t:-1).filter(e=>e!==-1)}_checkWinner(r){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const[t,n,s]of e)if(r[t]&&r[t]===r[n]&&r[t]===r[s])return r[t];return null}_getWinningLine(r){const e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(const t of e){const[n,s,o]=t;if(r[n]&&r[n]===r[s]&&r[n]===r[o])return t}return[]}_isBoardFull(r){return r.every(e=>e!==null)}_resetScores(){this.playerScore=0,this.aiScore=0,this.draws=0,this._saveScores()}render(){return R`
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
          ${this.board.map((r,e)=>R`
            <button
              class="cell ${r?"filled":""} ${r==="X"?"x":""} ${r==="O"?"o":""} ${this.winningLine.includes(e)?"winning":""}"
              @click=${()=>this._handleCellClick(e)}
              ?disabled=${this.gameState!=="playing"||!this.isPlayerTurn||r!==null}
            >
              ${r||""}
            </button>
          `)}
        </div>

        ${this.gameState==="playing"?R`
          <div class="status">
            ${this.isPlayerTurn?"Your turn":"AI is thinking..."}
          </div>
        `:""}

        ${this.gameState==="idle"?R`
          <div class="overlay">
            <h2>Tic Tac Toe</h2>
            <p>Play against an unbeatable AI!</p>
            <button class="start-btn" @click=${this._startGame}>Start Game</button>
          </div>
        `:""}

        ${this.gameState==="won"?R`
          <div class="overlay win">
            <h2>You Won!</h2>
            <p>Impressive! You beat the AI!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        ${this.gameState==="lost"?R`
          <div class="overlay lose">
            <h2>AI Wins!</h2>
            <p>Better luck next time!</p>
            <button class="start-btn" @click=${this._startGame}>Try Again</button>
          </div>
        `:""}

        ${this.gameState==="draw"?R`
          <div class="overlay draw">
            <h2>It's a Draw!</h2>
            <p>Well played!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        <button class="reset-scores" @click=${this._resetScores}>Reset Scores</button>
      </div>
    `}};qe.styles=bt`
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
  `;Tt([$()],qe.prototype,"board",2);Tt([$()],qe.prototype,"gameState",2);Tt([$()],qe.prototype,"playerScore",2);Tt([$()],qe.prototype,"aiScore",2);Tt([$()],qe.prototype,"draws",2);Tt([$()],qe.prototype,"isPlayerTurn",2);Tt([$()],qe.prototype,"winningLine",2);qe=Tt([wt("tic-tac-toe-game")],qe);var Yh=Object.defineProperty,Jh=Object.getOwnPropertyDescriptor,et=(r,e,t,n)=>{for(var s=n>1?void 0:n?Jh(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Yh(e,t,s),s};let De=class extends Pe{constructor(){super(...arguments),this.board=[],this.gameState="idle",this.selectedPiece=null,this.validMoves=[],this.isPlayerTurn=!0,this.playerScore=0,this.aiScore=0,this.mustJump=null,this.AI_DEPTH=4}connectedCallback(){super.connectedCallback(),this._loadScores()}_loadScores(){const r=localStorage.getItem("checkers-scores");if(r){const e=JSON.parse(r);this.playerScore=e.player||0,this.aiScore=e.ai||0}}_saveScores(){localStorage.setItem("checkers-scores",JSON.stringify({player:this.playerScore,ai:this.aiScore}))}_initBoard(){const r=Array(8).fill(null).map(()=>Array(8).fill(null));for(let e=0;e<3;e++)for(let t=0;t<8;t++)(e+t)%2===1&&(r[e][t]="black");for(let e=5;e<8;e++)for(let t=0;t<8;t++)(e+t)%2===1&&(r[e][t]="red");return r}_startGame(){this.board=this._initBoard(),this.gameState="playing",this.isPlayerTurn=!0,this.selectedPiece=null,this.validMoves=[],this.mustJump=null}_isPlayerPiece(r){return r==="red"||r==="red-king"}_isAIPiece(r){return r==="black"||r==="black-king"}_isKing(r){return r==="red-king"||r==="black-king"}_getValidMoves(r,e,t,n){const s=r[e][t];if(!s)return[];const o=[],a=this._isKing(s),u=[];(n||a)&&u.push(-1),(!n||a)&&u.push(1);for(const h of u)for(const d of[-1,1]){const p=e+h*2,y=t+d*2,A=e+h,P=t+d;if(this._isValidPosition(p,y)&&r[p][y]===null&&r[A][P]!==null){const D=r[A][P];(n?this._isAIPiece(D):this._isPlayerPiece(D))&&o.push({from:{row:e,col:t},to:{row:p,col:y},captures:[{row:A,col:P}]})}}if(o.length>0)return o;for(const h of u)for(const d of[-1,1]){const p=e+h,y=t+d;this._isValidPosition(p,y)&&r[p][y]===null&&o.push({from:{row:e,col:t},to:{row:p,col:y},captures:[]})}return o}_getAllMoves(r,e){const t=[],n=[];for(let s=0;s<8;s++)for(let o=0;o<8;o++){const a=r[s][o];if(a&&(e?this._isPlayerPiece(a):this._isAIPiece(a))){const u=this._getValidMoves(r,s,o,e);for(const h of u)h.captures.length>0?n.push(h):t.push(h)}}return n.length>0?n:t}_isValidPosition(r,e){return r>=0&&r<8&&e>=0&&e<8}_handleCellClick(r,e){if(this.gameState!=="playing"||!this.isPlayerTurn)return;const t=this.board[r][e];if(this.mustJump){if(r===this.mustJump.row&&e===this.mustJump.col)return;const n=this.validMoves.find(s=>s.to.row===r&&s.to.col===e);n&&this._executeMove(n);return}if(this._isPlayerPiece(t)){const s=this._getAllMoves(this.board,!0).some(a=>a.captures.length>0),o=this._getValidMoves(this.board,r,e,!0);if(s&&!o.some(a=>a.captures.length>0))return;this.selectedPiece={row:r,col:e},this.validMoves=s?o.filter(a=>a.captures.length>0):o;return}if(this.selectedPiece&&t===null){const n=this.validMoves.find(s=>s.to.row===r&&s.to.col===e);n&&this._executeMove(n)}}_executeMove(r){const e=this.board.map(n=>[...n]),t=e[r.from.row][r.from.col];e[r.from.row][r.from.col]=null,e[r.to.row][r.to.col]=t;for(const n of r.captures)e[n.row][n.col]=null;if(t==="red"&&r.to.row===0?e[r.to.row][r.to.col]="red-king":t==="black"&&r.to.row===7&&(e[r.to.row][r.to.col]="black-king"),this.board=e,r.captures.length>0){const n=this._getValidMoves(this.board,r.to.row,r.to.col,this.isPlayerTurn).filter(s=>s.captures.length>0);if(n.length>0){this.mustJump=r.to,this.selectedPiece=r.to,this.validMoves=n;return}}this.selectedPiece=null,this.validMoves=[],this.mustJump=null,!this._checkGameEnd()&&(this.isPlayerTurn=!this.isPlayerTurn,this.isPlayerTurn||setTimeout(()=>this._aiMove(),500))}_aiMove(){if(this.gameState!=="playing")return;const r=this._minimax(this.board,this.AI_DEPTH,-1/0,1/0,!0);r.move?this._executeAIMove(r.move):(this.gameState="won",this.playerScore++,this._saveScores())}_executeAIMove(r){const e=this.board.map(n=>[...n]),t=e[r.from.row][r.from.col];e[r.from.row][r.from.col]=null,e[r.to.row][r.to.col]=t;for(const n of r.captures)e[n.row][n.col]=null;if(t==="black"&&r.to.row===7&&(e[r.to.row][r.to.col]="black-king"),this.board=e,r.captures.length>0){const n=this._getValidMoves(this.board,r.to.row,r.to.col,!1).filter(s=>s.captures.length>0);if(n.length>0){setTimeout(()=>{const s=this._selectBestJump(n);this._executeAIMove(s)},300);return}}this._checkGameEnd()||(this.isPlayerTurn=!0)}_selectBestJump(r){return r[0]}_minimax(r,e,t,n,s){if(e===0)return{score:this._evaluateBoard(r),move:null};const o=this._getAllMoves(r,!s);if(o.length===0)return{score:s?-1e3:1e3,move:null};let a=null;if(s){let u=-1/0;for(const h of o){const d=this._applyMove(r,h),p=this._minimax(d,e-1,t,n,!1);if(p.score>u&&(u=p.score,a=h),t=Math.max(t,p.score),n<=t)break}return{score:u,move:a}}else{let u=1/0;for(const h of o){const d=this._applyMove(r,h),p=this._minimax(d,e-1,t,n,!0);if(p.score<u&&(u=p.score,a=h),n=Math.min(n,p.score),n<=t)break}return{score:u,move:a}}}_applyMove(r,e){const t=r.map(s=>[...s]),n=t[e.from.row][e.from.col];t[e.from.row][e.from.col]=null,t[e.to.row][e.to.col]=n;for(const s of e.captures)t[s.row][s.col]=null;return n==="red"&&e.to.row===0?t[e.to.row][e.to.col]="red-king":n==="black"&&e.to.row===7&&(t[e.to.row][e.to.col]="black-king"),t}_evaluateBoard(r){let e=0;for(let t=0;t<8;t++)for(let n=0;n<8;n++){const s=r[t][n];s==="black"?e+=10:s==="black-king"?e+=15:s==="red"?e-=10:s==="red-king"&&(e-=15),s==="black"?e+=t:s==="red"&&(e-=7-t)}return e}_checkGameEnd(){const r=this._countPieces(!0),e=this._countPieces(!1);if(r===0)return this.gameState="lost",this.aiScore++,this._saveScores(),!0;if(e===0)return this.gameState="won",this.playerScore++,this._saveScores(),!0;const t=this._getAllMoves(this.board,!0),n=this._getAllMoves(this.board,!1);return this.isPlayerTurn&&t.length===0?(this.gameState="lost",this.aiScore++,this._saveScores(),!0):!this.isPlayerTurn&&n.length===0?(this.gameState="won",this.playerScore++,this._saveScores(),!0):!1}_countPieces(r){let e=0;for(let t=0;t<8;t++)for(let n=0;n<8;n++){const s=this.board[t][n];(r?this._isPlayerPiece(s):this._isAIPiece(s))&&e++}return e}_resetScores(){this.playerScore=0,this.aiScore=0,this._saveScores()}_isValidMoveTarget(r,e){return this.validMoves.some(t=>t.to.row===r&&t.to.col===e)}render(){return R`
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
          ${this.gameState!=="idle"?this.board.map((r,e)=>r.map((t,n)=>{const s=(e+n)%2===1,o=this.selectedPiece?.row===e&&this.selectedPiece?.col===n,a=this._isValidMoveTarget(e,n);return R`
                <div
                  class="cell ${s?"dark":"light"} ${o?"selected":""} ${a?"valid-move":""}"
                  @click=${()=>this._handleCellClick(e,n)}
                >
                  ${t?R`
                    <div class="piece ${t} ${o?"selected":""}">
                      ${this._isKing(t)?R`<span class="crown">♔</span>`:""}
                    </div>
                  `:""}
                </div>
              `})):""}
        </div>

        ${this.gameState==="playing"?R`
          <div class="status">
            ${this.isPlayerTurn?this.mustJump?"Continue jumping!":"Your turn - select a piece":"AI is thinking..."}
          </div>
        `:""}

        ${this.gameState==="idle"?R`
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

        ${this.gameState==="won"?R`
          <div class="overlay win">
            <h2>You Won!</h2>
            <p>Congratulations!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        ${this.gameState==="lost"?R`
          <div class="overlay lose">
            <h2>AI Wins!</h2>
            <p>Better luck next time!</p>
            <button class="start-btn" @click=${this._startGame}>Try Again</button>
          </div>
        `:""}

        <button class="reset-scores" @click=${this._resetScores}>Reset Scores</button>
      </div>
    `}};De.styles=bt`
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
  `;et([$()],De.prototype,"board",2);et([$()],De.prototype,"gameState",2);et([$()],De.prototype,"selectedPiece",2);et([$()],De.prototype,"validMoves",2);et([$()],De.prototype,"isPlayerTurn",2);et([$()],De.prototype,"playerScore",2);et([$()],De.prototype,"aiScore",2);et([$()],De.prototype,"mustJump",2);De=et([wt("checkers-game")],De);var Xh=Object.defineProperty,Zh=Object.getOwnPropertyDescriptor,At=(r,e,t,n)=>{for(var s=n>1?void 0:n?Zh(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&Xh(e,t,s),s};const Le=6,We=7;let Ge=class extends Pe{constructor(){super(...arguments),this.board=[],this.gameState="idle",this.isPlayerTurn=!0,this.playerScore=0,this.aiScore=0,this.winningCells=[],this.hoverColumn=-1,this.AI_DEPTH=5}connectedCallback(){super.connectedCallback(),this._loadScores()}_loadScores(){const r=localStorage.getItem("connect-four-scores");if(r){const e=JSON.parse(r);this.playerScore=e.player||0,this.aiScore=e.ai||0}}_saveScores(){localStorage.setItem("connect-four-scores",JSON.stringify({player:this.playerScore,ai:this.aiScore}))}_initBoard(){return Array(Le).fill(null).map(()=>Array(We).fill(null))}_startGame(){this.board=this._initBoard(),this.gameState="playing",this.isPlayerTurn=!0,this.winningCells=[],this.hoverColumn=-1}_getLowestEmptyRow(r,e){for(let t=Le-1;t>=0;t--)if(r[t][e]===null)return t;return-1}_handleColumnClick(r){this.gameState!=="playing"||!this.isPlayerTurn||this._getLowestEmptyRow(this.board,r)===-1||(this._makeMove(r,"red"),this.gameState==="playing"&&(this.isPlayerTurn=!1,setTimeout(()=>this._aiMove(),500)))}_makeMove(r,e){const t=this._getLowestEmptyRow(this.board,r);if(t===-1)return;const n=this.board.map(o=>[...o]);n[t][r]=e,this.board=n;const s=this._checkWinner(this.board,t,r);s?(this.winningCells=s,e==="red"?(this.gameState="won",this.playerScore++):(this.gameState="lost",this.aiScore++),this._saveScores()):this._isBoardFull(this.board)&&(this.gameState="draw")}_aiMove(){if(this.gameState!=="playing")return;const r=this._minimax(this.board,this.AI_DEPTH,-1/0,1/0,!0);r.col!==-1&&this._makeMove(r.col,"yellow"),this.isPlayerTurn=!0}_minimax(r,e,t,n,s){const o=this._findWinner(r);if(o==="yellow")return{score:1e3+e,col:-1};if(o==="red")return{score:-1e3-e,col:-1};if(this._isBoardFull(r))return{score:0,col:-1};if(e===0)return{score:this._evaluateBoard(r),col:-1};const a=this._getValidColumns(r);a.sort((h,d)=>Math.abs(3-h)-Math.abs(3-d));let u=a[0];if(s){let h=-1/0;for(const d of a){const p=this._simulateMove(r,d,"yellow"),y=this._minimax(p,e-1,t,n,!1);if(y.score>h&&(h=y.score,u=d),t=Math.max(t,y.score),n<=t)break}return{score:h,col:u}}else{let h=1/0;for(const d of a){const p=this._simulateMove(r,d,"red"),y=this._minimax(p,e-1,t,n,!0);if(y.score<h&&(h=y.score,u=d),n=Math.min(n,y.score),n<=t)break}return{score:h,col:u}}}_simulateMove(r,e,t){const n=r.map(o=>[...o]),s=this._getLowestEmptyRow(n,e);return s!==-1&&(n[s][e]=t),n}_getValidColumns(r){const e=[];for(let t=0;t<We;t++)r[0][t]===null&&e.push(t);return e}_evaluateBoard(r){let e=0;for(let t=0;t<Le;t++)r[t][3]==="yellow"?e+=3:r[t][3]==="red"&&(e-=3);for(let t=0;t<Le;t++)for(let n=0;n<We-3;n++)e+=this._evaluateWindow([r[t][n],r[t][n+1],r[t][n+2],r[t][n+3]]);for(let t=0;t<Le-3;t++)for(let n=0;n<We;n++)e+=this._evaluateWindow([r[t][n],r[t+1][n],r[t+2][n],r[t+3][n]]);for(let t=3;t<Le;t++)for(let n=0;n<We-3;n++)e+=this._evaluateWindow([r[t][n],r[t-1][n+1],r[t-2][n+2],r[t-3][n+3]]);for(let t=0;t<Le-3;t++)for(let n=0;n<We-3;n++)e+=this._evaluateWindow([r[t][n],r[t+1][n+1],r[t+2][n+2],r[t+3][n+3]]);return e}_evaluateWindow(r){const e=r.filter(s=>s==="yellow").length,t=r.filter(s=>s==="red").length,n=r.filter(s=>s===null).length;return e===4?100:e===3&&n===1?5:e===2&&n===2?2:t===4?-100:t===3&&n===1?-5:t===2&&n===2?-2:0}_checkWinner(r,e,t){const n=r[e][t];if(!n)return null;const s=[[[0,1],[0,-1]],[[1,0],[-1,0]],[[1,1],[-1,-1]],[[1,-1],[-1,1]]];for(const[o,a]of s){const u=[[e,t]];let h=e+o[0],d=t+o[1];for(;h>=0&&h<Le&&d>=0&&d<We&&r[h][d]===n;)u.push([h,d]),h+=o[0],d+=o[1];for(h=e+a[0],d=t+a[1];h>=0&&h<Le&&d>=0&&d<We&&r[h][d]===n;)u.push([h,d]),h+=a[0],d+=a[1];if(u.length>=4)return u}return null}_findWinner(r){for(let e=0;e<Le;e++)for(let t=0;t<We;t++)if(r[e][t]&&this._checkWinner(r,e,t))return r[e][t];return null}_isBoardFull(r){return r[0].every(e=>e!==null)}_isWinningCell(r,e){return this.winningCells.some(([t,n])=>t===r&&n===e)}_resetScores(){this.playerScore=0,this.aiScore=0,this._saveScores()}render(){return R`
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
            ${this.gameState!=="idle"?this.board.map((r,e)=>r.map((t,n)=>R`
                <div
                  class="cell ${this._isWinningCell(e,n)?"winning":""}"
                  @click=${()=>this._handleColumnClick(n)}
                  @mouseenter=${()=>this.hoverColumn=n}
                  @mouseleave=${()=>this.hoverColumn=-1}
                >
                  <div class="piece ${t||""} ${!t&&this.hoverColumn===n&&this.isPlayerTurn&&this.gameState==="playing"?"preview":""}"></div>
                </div>
              `)):""}
          </div>
        </div>

        ${this.gameState==="playing"?R`
          <div class="status">
            ${this.isPlayerTurn?"Your turn - click a column":"AI is thinking..."}
          </div>
        `:""}

        ${this.gameState==="idle"?R`
          <div class="overlay">
            <h2>Connect Four</h2>
            <p>Get 4 in a row to win!</p>
            <button class="start-btn" @click=${this._startGame}>Start Game</button>
          </div>
        `:""}

        ${this.gameState==="won"?R`
          <div class="overlay win">
            <h2>You Won!</h2>
            <p>Congratulations!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        ${this.gameState==="lost"?R`
          <div class="overlay lose">
            <h2>AI Wins!</h2>
            <p>Better luck next time!</p>
            <button class="start-btn" @click=${this._startGame}>Try Again</button>
          </div>
        `:""}

        ${this.gameState==="draw"?R`
          <div class="overlay draw">
            <h2>It's a Draw!</h2>
            <p>The board is full!</p>
            <button class="start-btn" @click=${this._startGame}>Play Again</button>
          </div>
        `:""}

        <button class="reset-scores" @click=${this._resetScores}>Reset Scores</button>
      </div>
    `}};Ge.styles=bt`
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
  `;At([$()],Ge.prototype,"board",2);At([$()],Ge.prototype,"gameState",2);At([$()],Ge.prototype,"isPlayerTurn",2);At([$()],Ge.prototype,"playerScore",2);At([$()],Ge.prototype,"aiScore",2);At([$()],Ge.prototype,"winningCells",2);At([$()],Ge.prototype,"hoverColumn",2);Ge=At([wt("connect-four-game")],Ge);var ed=Object.defineProperty,td=Object.getOwnPropertyDescriptor,zt=(r,e,t,n)=>{for(var s=n>1?void 0:n?td(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&ed(e,t,s),s};const $n=400,Xt=500,Mt=30,Ln=60,Rn=140,rd=.5,nd=-8,sd=3,id=1800;let Qe=class extends Pe{constructor(){super(...arguments),this.gameState="idle",this.birdY=Xt/2,this.birdVelocity=0,this.pipes=[],this.score=0,this.highScore=0,this.gameLoop=null,this.pipeSpawner=null,this.lastTime=0,this._handleKeyDown=r=>{(r.code==="Space"||r.key===" ")&&(r.preventDefault(),this._handleInput())},this._handleClick=()=>{this._handleInput()},this._update=r=>{if(this.gameState!=="playing")return;const e=Math.min((r-this.lastTime)/16.67,2);this.lastTime=r,this.birdVelocity+=rd*e,this.birdY+=this.birdVelocity*e,this.pipes=this.pipes.map(t=>({...t,x:t.x-sd*e})).filter(t=>t.x>-Ln);for(const t of this.pipes)!t.passed&&t.x+Ln<$n/2-Mt/2&&(t.passed=!0,this.score++);if(this._checkCollision()){this._gameOver();return}this.requestUpdate(),this.gameLoop=requestAnimationFrame(this._update)}}connectedCallback(){super.connectedCallback(),this._loadHighScore(),window.addEventListener("keydown",this._handleKeyDown)}disconnectedCallback(){super.disconnectedCallback(),this._stopGame(),window.removeEventListener("keydown",this._handleKeyDown)}_loadHighScore(){const r=localStorage.getItem("flappy-bird-highscore");r&&(this.highScore=parseInt(r,10))}_saveHighScore(){this.score>this.highScore&&(this.highScore=this.score,localStorage.setItem("flappy-bird-highscore",this.highScore.toString()))}_handleInput(){this.gameState==="idle"?this._startGame():this.gameState==="playing"?this._flap():this.gameState==="gameover"&&this._startGame()}_startGame(){this.birdY=Xt/2,this.birdVelocity=0,this.pipes=[],this.score=0,this.gameState="playing",this.lastTime=performance.now(),this._spawnPipe(),this.gameLoop=requestAnimationFrame(this._update),this.pipeSpawner=window.setInterval(()=>this._spawnPipe(),id)}_stopGame(){this.gameLoop&&(cancelAnimationFrame(this.gameLoop),this.gameLoop=null),this.pipeSpawner&&(clearInterval(this.pipeSpawner),this.pipeSpawner=null)}_flap(){this.birdVelocity=nd}_spawnPipe(){const e=Xt-Rn-80,t=Math.random()*(e-80)+80;this.pipes=[...this.pipes,{x:$n,gapY:t,passed:!1}]}_checkCollision(){const r=$n/2-Mt/2,e=r+Mt,t=this.birdY,n=this.birdY+Mt;if(t<0||n>Xt)return!0;for(const s of this.pipes){const o=s.x,a=s.x+Ln;if(e>o&&r<a&&(t<s.gapY||n>s.gapY+Rn))return!0}return!1}_gameOver(){this.gameState="gameover",this._stopGame(),this._saveHighScore()}_getBirdRotation(){return Math.min(Math.max(this.birdVelocity*3,-30),90)}render(){return R`
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
          ${this.pipes.map(r=>R`
            <div class="pipe pipe-top" style="left: ${r.x}px; height: ${r.gapY}px;"></div>
            <div class="pipe pipe-bottom" style="left: ${r.x}px; top: ${r.gapY+Rn}px; height: ${Xt-r.gapY-Rn}px;"></div>
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
          ${this.gameState==="idle"?R`
            <div class="overlay">
              <h2>Flappy Bird</h2>
              <p>Click or press Space to flap!</p>
              <div class="start-hint">Tap to Start</div>
            </div>
          `:""}

          ${this.gameState==="gameover"?R`
            <div class="overlay gameover">
              <h2>Game Over!</h2>
              <div class="final-score">
                <p>Score: ${this.score}</p>
                ${this.score>=this.highScore&&this.score>0?R`<p class="new-best">New Best!</p>`:""}
              </div>
              <div class="start-hint">Tap to Retry</div>
            </div>
          `:""}
        </div>

        <div class="instructions">
          Click or press Space to flap
        </div>
      </div>
    `}};Qe.styles=bt`
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
      width: ${$n}px;
      height: ${Xt}px;
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
      width: ${Ln}px;
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
      left: calc(50% - ${Mt/2}px);
      width: ${Mt}px;
      height: ${Mt}px;
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
  `;zt([$()],Qe.prototype,"gameState",2);zt([$()],Qe.prototype,"birdY",2);zt([$()],Qe.prototype,"birdVelocity",2);zt([$()],Qe.prototype,"pipes",2);zt([$()],Qe.prototype,"score",2);zt([$()],Qe.prototype,"highScore",2);Qe=zt([wt("flappy-bird-game")],Qe);const od=()=>{};var Va={};const Zc=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},ad=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const o=r[t++];e[n++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=r[t++],a=r[t++],u=r[t++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(h>>10)),e[n++]=String.fromCharCode(56320+(h&1023))}else{const o=r[t++],a=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return e.join("")},el={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const o=r[s],a=s+1<r.length,u=a?r[s+1]:0,h=s+2<r.length,d=h?r[s+2]:0,p=o>>2,y=(o&3)<<4|u>>4;let A=(u&15)<<2|d>>6,P=d&63;h||(P=64,a||(A=64)),n.push(t[p],t[y],t[A],t[P])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(Zc(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):ad(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const o=t[r.charAt(s++)],u=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const y=s<r.length?t[r.charAt(s)]:64;if(++s,o==null||u==null||d==null||y==null)throw new cd;const A=o<<2|u>>4;if(n.push(A),d!==64){const P=u<<4&240|d>>2;if(n.push(P),y!==64){const D=d<<6&192|y;n.push(D)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class cd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ld=function(r){const e=Zc(r);return el.encodeByteArray(e,!0)},Wn=function(r){return ld(r).replace(/\./g,"")},ud=function(r){try{return el.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function hd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}const dd=()=>hd().__FIREBASE_DEFAULTS__,fd=()=>{if(typeof process>"u"||typeof Va>"u")return;const r=Va.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},pd=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&ud(r[1]);return e&&JSON.parse(e)},Ni=()=>{try{return od()||dd()||fd()||pd()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},gd=r=>Ni()?.emulatorHosts?.[r],md=r=>{const e=gd(r);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},tl=()=>Ni()?.config;class _d{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}function Mi(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yd(r){return(await fetch(r,{credentials:"include"})).ok}function vd(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",s=r.iat||0,o=r.sub||r.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${n}`,aud:n,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Wn(JSON.stringify(t)),Wn(JSON.stringify(a)),""].join(".")}const qr={};function bd(){const r={prod:[],emulator:[]};for(const e of Object.keys(qr))qr[e]?r.emulator.push(e):r.prod.push(e);return r}function wd(r){let e=document.getElementById(r),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),t=!0),{created:t,element:e}}let Da=!1;function Ed(r,e){if(typeof window>"u"||typeof document>"u"||!Mi(window.location.host)||qr[r]===e||qr[r]||Da)return;qr[r]=e;function t(A){return`__firebase__banner__${A}`}const n="__firebase__banner",o=bd().prod.length>0;function a(){const A=document.getElementById(n);A&&A.remove()}function u(A){A.style.display="flex",A.style.background="#7faaf0",A.style.position="fixed",A.style.bottom="5px",A.style.left="5px",A.style.padding=".5em",A.style.borderRadius="5px",A.style.alignItems="center"}function h(A,P){A.setAttribute("width","24"),A.setAttribute("id",P),A.setAttribute("height","24"),A.setAttribute("viewBox","0 0 24 24"),A.setAttribute("fill","none"),A.style.marginLeft="-6px"}function d(){const A=document.createElement("span");return A.style.cursor="pointer",A.style.marginLeft="16px",A.style.fontSize="24px",A.innerHTML=" &times;",A.onclick=()=>{Da=!0,a()},A}function p(A,P){A.setAttribute("id",P),A.innerText="Learn more",A.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",A.setAttribute("target","__blank"),A.style.paddingLeft="5px",A.style.textDecoration="underline"}function y(){const A=wd(n),P=t("text"),D=document.getElementById(P)||document.createElement("span"),O=t("learnmore"),N=document.getElementById(O)||document.createElement("a"),H=t("preprendIcon"),K=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(A.created){const Y=A.element;u(Y),p(N,O);const Ae=d();h(K,H),Y.append(K,D,N,Ae),document.body.appendChild(Y)}o?(D.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,D.innerText="Preview backend running in this workspace."),D.setAttribute("id",P)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}function Td(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ad(){const r=Ni()?.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Id(){return!Ad()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sd(){try{return typeof indexedDB=="object"}catch{return!1}}function xd(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{e(s.error?.message||"")}}catch(t){e(t)}})}const Pd="FirebaseError";class gr extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Pd,Object.setPrototypeOf(this,gr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,rl.prototype.create)}}class rl{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,o=this.errors[e],a=o?Cd(o,n):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new gr(s,u,n)}}function Cd(r,e){return r.replace(Rd,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Rd=/\{\$([^}]+)}/g;function Kn(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const o=r[s],a=e[s];if(Na(o)&&Na(a)){if(!Kn(o,a))return!1}else if(o!==a)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function Na(r){return r!==null&&typeof r=="object"}function Ut(r){return r&&r._delegate?r._delegate:r}class Xr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}const Dt="[DEFAULT]";class kd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new _d;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Dd(e))try{this.getOrInitializeService({instanceIdentifier:Dt})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:s});n.resolve(o)}catch{}}}}clearInstance(e=Dt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dt){return this.instances.has(e)}getOptions(e=Dt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);n===u&&a.resolve(s)}return s}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(n)??new Set;s.add(e),this.onInitCallbacks.set(n,s);const o=this.instances.get(n);return o&&e(o,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Vd(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Dt){return this.component?this.component.multipleInstances?e:Dt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vd(r){return r===Dt?void 0:r}function Dd(r){return r.instantiationMode==="EAGER"}class Nd{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}var G;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(G||(G={}));const Md={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Od=G.INFO,$d={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Ld=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=$d[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nl{constructor(e){this.name=e,this._logLevel=Od,this._logHandler=Ld,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Md[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const Fd=(r,e)=>e.some(t=>r instanceof t);let Ma,Oa;function Ud(){return Ma||(Ma=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bd(){return Oa||(Oa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sl=new WeakMap,oi=new WeakMap,il=new WeakMap,Ys=new WeakMap,Oi=new WeakMap;function jd(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",o),r.removeEventListener("error",a)},o=()=>{t(ut(r.result)),s()},a=()=>{n(r.error),s()};r.addEventListener("success",o),r.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sl.set(t,r)}).catch(()=>{}),Oi.set(e,r),e}function zd(r){if(oi.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",o),r.removeEventListener("error",a),r.removeEventListener("abort",a)},o=()=>{t(),s()},a=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",o),r.addEventListener("error",a),r.addEventListener("abort",a)});oi.set(r,e)}let ai={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return oi.get(r);if(e==="objectStoreNames")return r.objectStoreNames||il.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ut(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function qd(r){ai=r(ai)}function Gd(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Js(this),e,...t);return il.set(n,e.sort?e.sort():[e]),ut(n)}:Bd().includes(r)?function(...e){return r.apply(Js(this),e),ut(sl.get(this))}:function(...e){return ut(r.apply(Js(this),e))}}function Hd(r){return typeof r=="function"?Gd(r):(r instanceof IDBTransaction&&zd(r),Fd(r,Ud())?new Proxy(r,ai):r)}function ut(r){if(r instanceof IDBRequest)return jd(r);if(Ys.has(r))return Ys.get(r);const e=Hd(r);return e!==r&&(Ys.set(r,e),Oi.set(e,r)),e}const Js=r=>Oi.get(r);function Wd(r,e,{blocked:t,upgrade:n,blocking:s,terminated:o}={}){const a=indexedDB.open(r,e),u=ut(a);return n&&a.addEventListener("upgradeneeded",h=>{n(ut(a.result),h.oldVersion,h.newVersion,ut(a.transaction),h)}),t&&a.addEventListener("blocked",h=>t(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const Kd=["get","getKey","getAll","getAllKeys","count"],Qd=["put","add","delete","clear"],Xs=new Map;function $a(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Xs.get(e))return Xs.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=Qd.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||Kd.includes(t)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return n&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&h.done]))[0]};return Xs.set(e,o),o}qd(r=>({...r,get:(e,t,n)=>$a(e,t)||r.get(e,t,n),has:(e,t)=>!!$a(e,t)||r.has(e,t)}));class Yd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Jd(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function Jd(r){return r.getComponent()?.type==="VERSION"}const ci="@firebase/app",La="0.14.7";const Ye=new nl("@firebase/app"),Xd="@firebase/app-compat",Zd="@firebase/analytics-compat",ef="@firebase/analytics",tf="@firebase/app-check-compat",rf="@firebase/app-check",nf="@firebase/auth",sf="@firebase/auth-compat",of="@firebase/database",af="@firebase/data-connect",cf="@firebase/database-compat",lf="@firebase/functions",uf="@firebase/functions-compat",hf="@firebase/installations",df="@firebase/installations-compat",ff="@firebase/messaging",pf="@firebase/messaging-compat",gf="@firebase/performance",mf="@firebase/performance-compat",_f="@firebase/remote-config",yf="@firebase/remote-config-compat",vf="@firebase/storage",bf="@firebase/storage-compat",wf="@firebase/firestore",Ef="@firebase/ai",Tf="@firebase/firestore-compat",Af="firebase",If="12.8.0";const li="[DEFAULT]",Sf={[ci]:"fire-core",[Xd]:"fire-core-compat",[ef]:"fire-analytics",[Zd]:"fire-analytics-compat",[rf]:"fire-app-check",[tf]:"fire-app-check-compat",[nf]:"fire-auth",[sf]:"fire-auth-compat",[of]:"fire-rtdb",[af]:"fire-data-connect",[cf]:"fire-rtdb-compat",[lf]:"fire-fn",[uf]:"fire-fn-compat",[hf]:"fire-iid",[df]:"fire-iid-compat",[ff]:"fire-fcm",[pf]:"fire-fcm-compat",[gf]:"fire-perf",[mf]:"fire-perf-compat",[_f]:"fire-rc",[yf]:"fire-rc-compat",[vf]:"fire-gcs",[bf]:"fire-gcs-compat",[wf]:"fire-fst",[Tf]:"fire-fst-compat",[Ef]:"fire-vertex","fire-js":"fire-js",[Af]:"fire-js-all"};const Qn=new Map,xf=new Map,ui=new Map;function Fa(r,e){try{r.container.addComponent(e)}catch(t){Ye.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Yn(r){const e=r.name;if(ui.has(e))return Ye.debug(`There were multiple attempts to register component ${e}.`),!1;ui.set(e,r);for(const t of Qn.values())Fa(t,r);for(const t of xf.values())Fa(t,r);return!0}function Pf(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Cf(r){return r==null?!1:r.settings!==void 0}const Rf={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ht=new rl("app","Firebase",Rf);class kf{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ht.create("app-deleted",{appName:this._name})}}const Vf=If;function ol(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n={name:li,automaticDataCollectionEnabled:!0,...e},s=n.name;if(typeof s!="string"||!s)throw ht.create("bad-app-name",{appName:String(s)});if(t||(t=tl()),!t)throw ht.create("no-options");const o=Qn.get(s);if(o){if(Kn(t,o.options)&&Kn(n,o.config))return o;throw ht.create("duplicate-app",{appName:s})}const a=new Nd(s);for(const h of ui.values())a.addComponent(h);const u=new kf(t,n,a);return Qn.set(s,u),u}function Df(r=li){const e=Qn.get(r);if(!e&&r===li&&tl())return ol();if(!e)throw ht.create("no-app",{appName:r});return e}function nr(r,e,t){let n=Sf[r]??r;t&&(n+=`-${t}`);const s=n.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ye.warn(a.join(" "));return}Yn(new Xr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}const Nf="firebase-heartbeat-database",Mf=1,Zr="firebase-heartbeat-store";let Zs=null;function al(){return Zs||(Zs=Wd(Nf,Mf,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Zr)}catch(t){console.warn(t)}}}}).catch(r=>{throw ht.create("idb-open",{originalErrorMessage:r.message})})),Zs}async function Of(r){try{const t=(await al()).transaction(Zr),n=await t.objectStore(Zr).get(cl(r));return await t.done,n}catch(e){if(e instanceof gr)Ye.warn(e.message);else{const t=ht.create("idb-get",{originalErrorMessage:e?.message});Ye.warn(t.message)}}}async function Ua(r,e){try{const n=(await al()).transaction(Zr,"readwrite");await n.objectStore(Zr).put(e,cl(r)),await n.done}catch(t){if(t instanceof gr)Ye.warn(t.message);else{const n=ht.create("idb-set",{originalErrorMessage:t?.message});Ye.warn(n.message)}}}function cl(r){return`${r.name}!${r.options.appId}`}const $f=1024,Lf=30;class Ff{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Bf(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Ba();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(s=>s.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>Lf){const s=jf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(s,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){Ye.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ba(),{heartbeatsToSend:t,unsentEntries:n}=Uf(this._heartbeatsCache.heartbeats),s=Wn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(e){return Ye.warn(e),""}}}function Ba(){return new Date().toISOString().substring(0,10)}function Uf(r,e=$f){const t=[];let n=r.slice();for(const s of r){const o=t.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),ja(t)>e){o.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),ja(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class Bf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sd()?xd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Of(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ua(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return Ua(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function ja(r){return Wn(JSON.stringify({version:2,heartbeats:r})).length}function jf(r){if(r.length===0)return-1;let e=0,t=r[0].date;for(let n=1;n<r.length;n++)r[n].date<t&&(t=r[n].date,e=n);return e}function zf(r){Yn(new Xr("platform-logger",e=>new Yd(e),"PRIVATE")),Yn(new Xr("heartbeat",e=>new Ff(e),"PRIVATE")),nr(ci,La,r),nr(ci,La,"esm2020"),nr("fire-js","")}zf("");var qf="firebase",Gf="12.8.0";nr(qf,Gf,"app");var za=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var dt,ll;(function(){var r;function e(b,g){function _(){}_.prototype=g.prototype,b.F=g.prototype,b.prototype=new _,b.prototype.constructor=b,b.D=function(w,v,T){for(var m=Array(arguments.length-2),Ee=2;Ee<arguments.length;Ee++)m[Ee-2]=arguments[Ee];return g.prototype[v].apply(w,m)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,g,_){_||(_=0);const w=Array(16);if(typeof g=="string")for(var v=0;v<16;++v)w[v]=g.charCodeAt(_++)|g.charCodeAt(_++)<<8|g.charCodeAt(_++)<<16|g.charCodeAt(_++)<<24;else for(v=0;v<16;++v)w[v]=g[_++]|g[_++]<<8|g[_++]<<16|g[_++]<<24;g=b.g[0],_=b.g[1],v=b.g[2];let T=b.g[3],m;m=g+(T^_&(v^T))+w[0]+3614090360&4294967295,g=_+(m<<7&4294967295|m>>>25),m=T+(v^g&(_^v))+w[1]+3905402710&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(_^T&(g^_))+w[2]+606105819&4294967295,v=T+(m<<17&4294967295|m>>>15),m=_+(g^v&(T^g))+w[3]+3250441966&4294967295,_=v+(m<<22&4294967295|m>>>10),m=g+(T^_&(v^T))+w[4]+4118548399&4294967295,g=_+(m<<7&4294967295|m>>>25),m=T+(v^g&(_^v))+w[5]+1200080426&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(_^T&(g^_))+w[6]+2821735955&4294967295,v=T+(m<<17&4294967295|m>>>15),m=_+(g^v&(T^g))+w[7]+4249261313&4294967295,_=v+(m<<22&4294967295|m>>>10),m=g+(T^_&(v^T))+w[8]+1770035416&4294967295,g=_+(m<<7&4294967295|m>>>25),m=T+(v^g&(_^v))+w[9]+2336552879&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(_^T&(g^_))+w[10]+4294925233&4294967295,v=T+(m<<17&4294967295|m>>>15),m=_+(g^v&(T^g))+w[11]+2304563134&4294967295,_=v+(m<<22&4294967295|m>>>10),m=g+(T^_&(v^T))+w[12]+1804603682&4294967295,g=_+(m<<7&4294967295|m>>>25),m=T+(v^g&(_^v))+w[13]+4254626195&4294967295,T=g+(m<<12&4294967295|m>>>20),m=v+(_^T&(g^_))+w[14]+2792965006&4294967295,v=T+(m<<17&4294967295|m>>>15),m=_+(g^v&(T^g))+w[15]+1236535329&4294967295,_=v+(m<<22&4294967295|m>>>10),m=g+(v^T&(_^v))+w[1]+4129170786&4294967295,g=_+(m<<5&4294967295|m>>>27),m=T+(_^v&(g^_))+w[6]+3225465664&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^_&(T^g))+w[11]+643717713&4294967295,v=T+(m<<14&4294967295|m>>>18),m=_+(T^g&(v^T))+w[0]+3921069994&4294967295,_=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(_^v))+w[5]+3593408605&4294967295,g=_+(m<<5&4294967295|m>>>27),m=T+(_^v&(g^_))+w[10]+38016083&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^_&(T^g))+w[15]+3634488961&4294967295,v=T+(m<<14&4294967295|m>>>18),m=_+(T^g&(v^T))+w[4]+3889429448&4294967295,_=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(_^v))+w[9]+568446438&4294967295,g=_+(m<<5&4294967295|m>>>27),m=T+(_^v&(g^_))+w[14]+3275163606&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^_&(T^g))+w[3]+4107603335&4294967295,v=T+(m<<14&4294967295|m>>>18),m=_+(T^g&(v^T))+w[8]+1163531501&4294967295,_=v+(m<<20&4294967295|m>>>12),m=g+(v^T&(_^v))+w[13]+2850285829&4294967295,g=_+(m<<5&4294967295|m>>>27),m=T+(_^v&(g^_))+w[2]+4243563512&4294967295,T=g+(m<<9&4294967295|m>>>23),m=v+(g^_&(T^g))+w[7]+1735328473&4294967295,v=T+(m<<14&4294967295|m>>>18),m=_+(T^g&(v^T))+w[12]+2368359562&4294967295,_=v+(m<<20&4294967295|m>>>12),m=g+(_^v^T)+w[5]+4294588738&4294967295,g=_+(m<<4&4294967295|m>>>28),m=T+(g^_^v)+w[8]+2272392833&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^_)+w[11]+1839030562&4294967295,v=T+(m<<16&4294967295|m>>>16),m=_+(v^T^g)+w[14]+4259657740&4294967295,_=v+(m<<23&4294967295|m>>>9),m=g+(_^v^T)+w[1]+2763975236&4294967295,g=_+(m<<4&4294967295|m>>>28),m=T+(g^_^v)+w[4]+1272893353&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^_)+w[7]+4139469664&4294967295,v=T+(m<<16&4294967295|m>>>16),m=_+(v^T^g)+w[10]+3200236656&4294967295,_=v+(m<<23&4294967295|m>>>9),m=g+(_^v^T)+w[13]+681279174&4294967295,g=_+(m<<4&4294967295|m>>>28),m=T+(g^_^v)+w[0]+3936430074&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^_)+w[3]+3572445317&4294967295,v=T+(m<<16&4294967295|m>>>16),m=_+(v^T^g)+w[6]+76029189&4294967295,_=v+(m<<23&4294967295|m>>>9),m=g+(_^v^T)+w[9]+3654602809&4294967295,g=_+(m<<4&4294967295|m>>>28),m=T+(g^_^v)+w[12]+3873151461&4294967295,T=g+(m<<11&4294967295|m>>>21),m=v+(T^g^_)+w[15]+530742520&4294967295,v=T+(m<<16&4294967295|m>>>16),m=_+(v^T^g)+w[2]+3299628645&4294967295,_=v+(m<<23&4294967295|m>>>9),m=g+(v^(_|~T))+w[0]+4096336452&4294967295,g=_+(m<<6&4294967295|m>>>26),m=T+(_^(g|~v))+w[7]+1126891415&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~_))+w[14]+2878612391&4294967295,v=T+(m<<15&4294967295|m>>>17),m=_+(T^(v|~g))+w[5]+4237533241&4294967295,_=v+(m<<21&4294967295|m>>>11),m=g+(v^(_|~T))+w[12]+1700485571&4294967295,g=_+(m<<6&4294967295|m>>>26),m=T+(_^(g|~v))+w[3]+2399980690&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~_))+w[10]+4293915773&4294967295,v=T+(m<<15&4294967295|m>>>17),m=_+(T^(v|~g))+w[1]+2240044497&4294967295,_=v+(m<<21&4294967295|m>>>11),m=g+(v^(_|~T))+w[8]+1873313359&4294967295,g=_+(m<<6&4294967295|m>>>26),m=T+(_^(g|~v))+w[15]+4264355552&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~_))+w[6]+2734768916&4294967295,v=T+(m<<15&4294967295|m>>>17),m=_+(T^(v|~g))+w[13]+1309151649&4294967295,_=v+(m<<21&4294967295|m>>>11),m=g+(v^(_|~T))+w[4]+4149444226&4294967295,g=_+(m<<6&4294967295|m>>>26),m=T+(_^(g|~v))+w[11]+3174756917&4294967295,T=g+(m<<10&4294967295|m>>>22),m=v+(g^(T|~_))+w[2]+718787259&4294967295,v=T+(m<<15&4294967295|m>>>17),m=_+(T^(v|~g))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+g&4294967295,b.g[1]=b.g[1]+(v+(m<<21&4294967295|m>>>11))&4294967295,b.g[2]=b.g[2]+v&4294967295,b.g[3]=b.g[3]+T&4294967295}n.prototype.v=function(b,g){g===void 0&&(g=b.length);const _=g-this.blockSize,w=this.C;let v=this.h,T=0;for(;T<g;){if(v==0)for(;T<=_;)s(this,b,T),T+=this.blockSize;if(typeof b=="string"){for(;T<g;)if(w[v++]=b.charCodeAt(T++),v==this.blockSize){s(this,w),v=0;break}}else for(;T<g;)if(w[v++]=b[T++],v==this.blockSize){s(this,w),v=0;break}}this.h=v,this.o+=g},n.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var g=1;g<b.length-8;++g)b[g]=0;g=this.o*8;for(var _=b.length-8;_<b.length;++_)b[_]=g&255,g/=256;for(this.v(b),b=Array(16),g=0,_=0;_<4;++_)for(let w=0;w<32;w+=8)b[g++]=this.g[_]>>>w&255;return b};function o(b,g){var _=u;return Object.prototype.hasOwnProperty.call(_,b)?_[b]:_[b]=g(b)}function a(b,g){this.h=g;const _=[];let w=!0;for(let v=b.length-1;v>=0;v--){const T=b[v]|0;w&&T==g||(_[v]=T,w=!1)}this.g=_}var u={};function h(b){return-128<=b&&b<128?o(b,function(g){return new a([g|0],g<0?-1:0)}):new a([b|0],b<0?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return y;if(b<0)return N(d(-b));const g=[];let _=1;for(let w=0;b>=_;w++)g[w]=b/_|0,_*=4294967296;return new a(g,0)}function p(b,g){if(b.length==0)throw Error("number format error: empty string");if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(b.charAt(0)=="-")return N(p(b.substring(1),g));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const _=d(Math.pow(g,8));let w=y;for(let T=0;T<b.length;T+=8){var v=Math.min(8,b.length-T);const m=parseInt(b.substring(T,T+v),g);v<8?(v=d(Math.pow(g,v)),w=w.j(v).add(d(m))):(w=w.j(_),w=w.add(d(m)))}return w}var y=h(0),A=h(1),P=h(16777216);r=a.prototype,r.m=function(){if(O(this))return-N(this).m();let b=0,g=1;for(let _=0;_<this.g.length;_++){const w=this.i(_);b+=(w>=0?w:4294967296+w)*g,g*=4294967296}return b},r.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(O(this))return"-"+N(this).toString(b);const g=d(Math.pow(b,6));var _=this;let w="";for(;;){const v=Ae(_,g).g;_=H(_,v.j(g));let T=((_.g.length>0?_.g[0]:_.h)>>>0).toString(b);if(_=v,D(_))return T+w;for(;T.length<6;)T="0"+T;w=T+w}},r.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(let g=0;g<b.g.length;g++)if(b.g[g]!=0)return!1;return!0}function O(b){return b.h==-1}r.l=function(b){return b=H(this,b),O(b)?-1:D(b)?0:1};function N(b){const g=b.g.length,_=[];for(let w=0;w<g;w++)_[w]=~b.g[w];return new a(_,~b.h).add(A)}r.abs=function(){return O(this)?N(this):this},r.add=function(b){const g=Math.max(this.g.length,b.g.length),_=[];let w=0;for(let v=0;v<=g;v++){let T=w+(this.i(v)&65535)+(b.i(v)&65535),m=(T>>>16)+(this.i(v)>>>16)+(b.i(v)>>>16);w=m>>>16,T&=65535,m&=65535,_[v]=m<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(b,g){return b.add(N(g))}r.j=function(b){if(D(this)||D(b))return y;if(O(this))return O(b)?N(this).j(N(b)):N(N(this).j(b));if(O(b))return N(this.j(N(b)));if(this.l(P)<0&&b.l(P)<0)return d(this.m()*b.m());const g=this.g.length+b.g.length,_=[];for(var w=0;w<2*g;w++)_[w]=0;for(w=0;w<this.g.length;w++)for(let v=0;v<b.g.length;v++){const T=this.i(w)>>>16,m=this.i(w)&65535,Ee=b.i(v)>>>16,St=b.i(v)&65535;_[2*w+2*v]+=m*St,K(_,2*w+2*v),_[2*w+2*v+1]+=T*St,K(_,2*w+2*v+1),_[2*w+2*v+1]+=m*Ee,K(_,2*w+2*v+1),_[2*w+2*v+2]+=T*Ee,K(_,2*w+2*v+2)}for(b=0;b<g;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=g;b<2*g;b++)_[b]=0;return new a(_,0)};function K(b,g){for(;(b[g]&65535)!=b[g];)b[g+1]+=b[g]>>>16,b[g]&=65535,g++}function Y(b,g){this.g=b,this.h=g}function Ae(b,g){if(D(g))throw Error("division by zero");if(D(b))return new Y(y,y);if(O(b))return g=Ae(N(b),g),new Y(N(g.g),N(g.h));if(O(g))return g=Ae(b,N(g)),new Y(N(g.g),g.h);if(b.g.length>30){if(O(b)||O(g))throw Error("slowDivide_ only works with positive integers.");for(var _=A,w=g;w.l(b)<=0;)_=Ce(_),w=Ce(w);var v=de(_,1),T=de(w,1);for(w=de(w,2),_=de(_,2);!D(w);){var m=T.add(w);m.l(b)<=0&&(v=v.add(_),T=m),w=de(w,1),_=de(_,1)}return g=H(b,v.j(g)),new Y(v,g)}for(v=y;b.l(g)>=0;){for(_=Math.max(1,Math.floor(b.m()/g.m())),w=Math.ceil(Math.log(_)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),T=d(_),m=T.j(g);O(m)||m.l(b)>0;)_-=w,T=d(_),m=T.j(g);D(T)&&(T=A),v=v.add(T),b=H(b,m)}return new Y(v,b)}r.B=function(b){return Ae(this,b).h},r.and=function(b){const g=Math.max(this.g.length,b.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)&b.i(w);return new a(_,this.h&b.h)},r.or=function(b){const g=Math.max(this.g.length,b.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)|b.i(w);return new a(_,this.h|b.h)},r.xor=function(b){const g=Math.max(this.g.length,b.g.length),_=[];for(let w=0;w<g;w++)_[w]=this.i(w)^b.i(w);return new a(_,this.h^b.h)};function Ce(b){const g=b.g.length+1,_=[];for(let w=0;w<g;w++)_[w]=b.i(w)<<1|b.i(w-1)>>>31;return new a(_,b.h)}function de(b,g){const _=g>>5;g%=32;const w=b.g.length-_,v=[];for(let T=0;T<w;T++)v[T]=g>0?b.i(T+_)>>>g|b.i(T+_+1)<<32-g:b.i(T+_);return new a(v,b.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,ll=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,dt=a}).apply(typeof za<"u"?za:typeof self<"u"?self:typeof window<"u"?window:{});var kn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};var ul,Fr,hl,Fn,hi,dl,fl,pl;(function(){var r,e=Object.defineProperty;function t(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof kn=="object"&&kn];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=t(this);function s(i,c){if(c)e:{var l=n;i=i.split(".");for(var f=0;f<i.length-1;f++){var E=i[f];if(!(E in l))break e;l=l[E]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&e(l,i,{configurable:!0,writable:!0,value:c})}}s("Symbol.dispose",function(i){return i||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(i){return i||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(i){return i||function(c){var l=[],f;for(f in c)Object.prototype.hasOwnProperty.call(c,f)&&l.push([f,c[f]]);return l}});var o=o||{},a=this||self;function u(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function h(i,c,l){return i.call.apply(i.bind,arguments)}function d(i,c,l){return d=h,d.apply(null,arguments)}function p(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function y(i,c){function l(){}l.prototype=c.prototype,i.Z=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Ob=function(f,E,I){for(var C=Array(arguments.length-2),B=2;B<arguments.length;B++)C[B-2]=arguments[B];return c.prototype[E].apply(f,C)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?i=>i&&AsyncContext.Snapshot.wrap(i):i=>i;function P(i){const c=i.length;if(c>0){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function D(i,c){for(let f=1;f<arguments.length;f++){const E=arguments[f];var l=typeof E;if(l=l!="object"?l:E?Array.isArray(E)?"array":l:"null",l=="array"||l=="object"&&typeof E.length=="number"){l=i.length||0;const I=E.length||0;i.length=l+I;for(let C=0;C<I;C++)i[l+C]=E[C]}else i.push(E)}}class O{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function N(i){a.setTimeout(()=>{throw i},0)}function H(){var i=b;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class K{constructor(){this.h=this.g=null}add(c,l){const f=Y.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var Y=new O(()=>new Ae,i=>i.reset());class Ae{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,de=!1,b=new K,g=()=>{const i=Promise.resolve(void 0);Ce=()=>{i.then(_)}};function _(){for(var i;i=H();){try{i.h.call(i.g)}catch(l){N(l)}var c=Y;c.j(i),c.h<100&&(c.h++,i.next=c.g,c.g=i)}de=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var T=(function(){if(!a.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};a.addEventListener("test",l,c),a.removeEventListener("test",l,c)}catch{}return i})();function m(i){return/^[\s\xa0]*$/.test(i)}function Ee(i,c){v.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i&&this.init(i,c)}y(Ee,v),Ee.prototype.init=function(i,c){const l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget,c||(l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement)),this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=i.pointerType,this.state=i.state,this.i=i,i.defaultPrevented&&Ee.Z.h.call(this)},Ee.prototype.h=function(){Ee.Z.h.call(this);const i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var St="closure_listenable_"+(Math.random()*1e6|0),Fu=0;function Uu(i,c,l,f,E){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=E,this.key=++Fu,this.da=this.fa=!1}function gn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function mn(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function Bu(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function vo(i){const c={};for(const l in i)c[l]=i[l];return c}const bo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wo(i,c){let l,f;for(let E=1;E<arguments.length;E++){f=arguments[E];for(l in f)i[l]=f[l];for(let I=0;I<bo.length;I++)l=bo[I],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function _n(i){this.src=i,this.g={},this.h=0}_n.prototype.add=function(i,c,l,f,E){const I=i.toString();i=this.g[I],i||(i=this.g[I]=[],this.h++);const C=Ss(i,c,f,E);return C>-1?(c=i[C],l||(c.fa=!1)):(c=new Uu(c,this.src,I,!!f,E),c.fa=l,i.push(c)),c};function Is(i,c){const l=c.type;if(l in i.g){var f=i.g[l],E=Array.prototype.indexOf.call(f,c,void 0),I;(I=E>=0)&&Array.prototype.splice.call(f,E,1),I&&(gn(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function Ss(i,c,l,f){for(let E=0;E<i.length;++E){const I=i[E];if(!I.da&&I.listener==c&&I.capture==!!l&&I.ha==f)return E}return-1}var xs="closure_lm_"+(Math.random()*1e6|0),Ps={};function Eo(i,c,l,f,E){if(Array.isArray(c)){for(let I=0;I<c.length;I++)Eo(i,c[I],l,f,E);return null}return l=Io(l),i&&i[St]?i.J(c,l,u(f)?!!f.capture:!1,E):ju(i,c,l,!1,f,E)}function ju(i,c,l,f,E,I){if(!c)throw Error("Invalid event type");const C=u(E)?!!E.capture:!!E;let B=Rs(i);if(B||(i[xs]=B=new _n(i)),l=B.add(c,l,f,C,I),l.proxy)return l;if(f=zu(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)T||(E=C),E===void 0&&(E=!1),i.addEventListener(c.toString(),f,E);else if(i.attachEvent)i.attachEvent(Ao(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function zu(){function i(l){return c.call(i.src,i.listener,l)}const c=qu;return i}function To(i,c,l,f,E){if(Array.isArray(c))for(var I=0;I<c.length;I++)To(i,c[I],l,f,E);else f=u(f)?!!f.capture:!!f,l=Io(l),i&&i[St]?(i=i.i,I=String(c).toString(),I in i.g&&(c=i.g[I],l=Ss(c,l,f,E),l>-1&&(gn(c[l]),Array.prototype.splice.call(c,l,1),c.length==0&&(delete i.g[I],i.h--)))):i&&(i=Rs(i))&&(c=i.g[c.toString()],i=-1,c&&(i=Ss(c,l,f,E)),(l=i>-1?c[i]:null)&&Cs(l))}function Cs(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[St])Is(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(Ao(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=Rs(c))?(Is(l,i),l.h==0&&(l.src=null,c[xs]=null)):gn(i)}}}function Ao(i){return i in Ps?Ps[i]:Ps[i]="on"+i}function qu(i,c){if(i.da)i=!0;else{c=new Ee(c,this);const l=i.listener,f=i.ha||i.src;i.fa&&Cs(i),i=l.call(f,c)}return i}function Rs(i){return i=i[xs],i instanceof _n?i:null}var ks="__closure_events_fn_"+(Math.random()*1e9>>>0);function Io(i){return typeof i=="function"?i:(i[ks]||(i[ks]=function(c){return i.handleEvent(c)}),i[ks])}function me(){w.call(this),this.i=new _n(this),this.M=this,this.G=null}y(me,w),me.prototype[St]=!0,me.prototype.removeEventListener=function(i,c,l,f){To(this,i,c,l,f)};function be(i,c){var l,f=i.G;if(f)for(l=[];f;f=f.G)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new v(c,i);else if(c instanceof v)c.target=c.target||i;else{var E=c;c=new v(f,i),wo(c,E)}E=!0;let I,C;if(l)for(C=l.length-1;C>=0;C--)I=c.g=l[C],E=yn(I,f,!0,c)&&E;if(I=c.g=i,E=yn(I,f,!0,c)&&E,E=yn(I,f,!1,c)&&E,l)for(C=0;C<l.length;C++)I=c.g=l[C],E=yn(I,f,!1,c)&&E}me.prototype.N=function(){if(me.Z.N.call(this),this.i){var i=this.i;for(const c in i.g){const l=i.g[c];for(let f=0;f<l.length;f++)gn(l[f]);delete i.g[c],i.h--}}this.G=null},me.prototype.J=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},me.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function yn(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();let E=!0;for(let I=0;I<c.length;++I){const C=c[I];if(C&&!C.da&&C.capture==l){const B=C.listener,oe=C.ha||C.src;C.fa&&Is(i.i,C),E=B.call(oe,f)!==!1&&E}}return E&&!f.defaultPrevented}function Gu(i,c){if(typeof i!="function")if(i&&typeof i.handleEvent=="function")i=d(i.handleEvent,i);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:a.setTimeout(i,c||0)}function So(i){i.g=Gu(()=>{i.g=null,i.i&&(i.i=!1,So(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Hu extends w{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:So(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wr(i){w.call(this),this.h=i,this.g={}}y(wr,w);var xo=[];function Po(i){mn(i.g,function(c,l){this.g.hasOwnProperty(l)&&Cs(c)},i),i.g={}}wr.prototype.N=function(){wr.Z.N.call(this),Po(this)},wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vs=a.JSON.stringify,Wu=a.JSON.parse,Ku=class{stringify(i){return a.JSON.stringify(i,void 0)}parse(i){return a.JSON.parse(i,void 0)}};function Co(){}function Ro(){}var Er={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ds(){v.call(this,"d")}y(Ds,v);function Ns(){v.call(this,"c")}y(Ns,v);var xt={},ko=null;function vn(){return ko=ko||new me}xt.Ia="serverreachability";function Vo(i){v.call(this,xt.Ia,i)}y(Vo,v);function Tr(i){const c=vn();be(c,new Vo(c))}xt.STAT_EVENT="statevent";function Do(i,c){v.call(this,xt.STAT_EVENT,i),this.stat=c}y(Do,v);function we(i){const c=vn();be(c,new Do(c,i))}xt.Ja="timingevent";function No(i,c){v.call(this,xt.Ja,i),this.size=c}y(No,v);function Ar(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){i()},c)}function Ir(){this.g=!0}Ir.prototype.ua=function(){this.g=!1};function Qu(i,c,l,f,E,I){i.info(function(){if(i.g)if(I){var C="",B=I.split("&");for(let Q=0;Q<B.length;Q++){var oe=B[Q].split("=");if(oe.length>1){const le=oe[0];oe=oe[1];const $e=le.split("_");C=$e.length>=2&&$e[1]=="type"?C+(le+"="+oe+"&"):C+(le+"=redacted&")}}}else C=null;else C=I;return"XMLHTTP REQ ("+f+") [attempt "+E+"]: "+c+`
`+l+`
`+C})}function Yu(i,c,l,f,E,I,C){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+E+"]: "+c+`
`+l+`
`+I+" "+C})}function Kt(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+Xu(i,l)+(f?" "+f:"")})}function Ju(i,c){i.info(function(){return"TIMEOUT: "+c})}Ir.prototype.info=function(){};function Xu(i,c){if(!i.g)return c;if(!c)return null;try{const I=JSON.parse(c);if(I){for(i=0;i<I.length;i++)if(Array.isArray(I[i])){var l=I[i];if(!(l.length<2)){var f=l[1];if(Array.isArray(f)&&!(f.length<1)){var E=f[0];if(E!="noop"&&E!="stop"&&E!="close")for(let C=1;C<f.length;C++)f[C]=""}}}}return Vs(I)}catch{return c}}var bn={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Mo={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Oo;function Ms(){}y(Ms,Co),Ms.prototype.g=function(){return new XMLHttpRequest},Oo=new Ms;function Sr(i){return encodeURIComponent(String(i))}function Zu(i){var c=1;i=i.split(":");const l=[];for(;c>0&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function rt(i,c,l,f){this.j=i,this.i=c,this.l=l,this.S=f||1,this.V=new wr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new $o}function $o(){this.i=null,this.g="",this.h=!1}var Lo={},Os={};function $s(i,c,l){i.M=1,i.A=En(Oe(c)),i.u=l,i.R=!0,Fo(i,null)}function Fo(i,c){i.F=Date.now(),wn(i),i.B=Oe(i.A);var l=i.B,f=i.S;Array.isArray(f)||(f=[String(f)]),Xo(l.i,"t",f),i.C=0,l=i.j.L,i.h=new $o,i.g=ma(i.j,l?c:null,!i.u),i.P>0&&(i.O=new Hu(d(i.Y,i,i.g),i.P)),c=i.V,l=i.g,f=i.ba;var E="readystatechange";Array.isArray(E)||(E&&(xo[0]=E.toString()),E=xo);for(let I=0;I<E.length;I++){const C=Eo(l,E[I],f||c.handleEvent,!1,c.h||c);if(!C)break;c.g[C.key]=C}c=i.J?vo(i.J):{},i.u?(i.v||(i.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.B,i.v,i.u,c)):(i.v="GET",i.g.ea(i.B,i.v,null,c)),Tr(),Qu(i.i,i.v,i.B,i.l,i.S,i.u)}rt.prototype.ba=function(i){i=i.target;const c=this.O;c&&it(i)==3?c.j():this.Y(i)},rt.prototype.Y=function(i){try{if(i==this.g)e:{const B=it(this.g),oe=this.g.ya(),Q=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||ia(this.g)))){this.K||B!=4||oe==7||(oe==8||Q<=0?Tr(3):Tr(2)),Ls(this);var c=this.g.ca();this.X=c;var l=eh(this);if(this.o=c==200,Yu(this.i,this.v,this.B,this.l,this.S,B,c),this.o){if(this.U&&!this.L){t:{if(this.g){var f,E=this.g;if((f=E.g?E.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(f)){var I=f;break t}}I=null}if(i=I)Kt(this.i,this.l,i,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Fs(this,i);else{this.o=!1,this.m=3,we(12),Pt(this),xr(this);break e}}if(this.R){i=!0;let le;for(;!this.K&&this.C<l.length;)if(le=th(this,l),le==Os){B==4&&(this.m=4,we(14),i=!1),Kt(this.i,this.l,null,"[Incomplete Response]");break}else if(le==Lo){this.m=4,we(15),Kt(this.i,this.l,l,"[Invalid Chunk]"),i=!1;break}else Kt(this.i,this.l,le,null),Fs(this,le);if(Uo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||l.length!=0||this.h.h||(this.m=1,we(16),i=!1),this.o=this.o&&i,!i)Kt(this.i,this.l,l,"[Invalid Chunked Response]"),Pt(this),xr(this);else if(l.length>0&&!this.W){this.W=!0;var C=this.j;C.g==this&&C.aa&&!C.P&&(C.j.info("Great, no buffering proxy detected. Bytes received: "+l.length),Ws(C),C.P=!0,we(11))}}else Kt(this.i,this.l,l,null),Fs(this,l);B==4&&Pt(this),this.o&&!this.K&&(B==4?da(this.j,this):(this.o=!1,wn(this)))}else gh(this.g),c==400&&l.indexOf("Unknown SID")>0?(this.m=3,we(12)):(this.m=0,we(13)),Pt(this),xr(this)}}}catch{}};function eh(i){if(!Uo(i))return i.g.la();const c=ia(i.g);if(c==="")return"";let l="";const f=c.length,E=it(i.g)==4;if(!i.h.i){if(typeof TextDecoder>"u")return Pt(i),xr(i),"";i.h.i=new a.TextDecoder}for(let I=0;I<f;I++)i.h.h=!0,l+=i.h.i.decode(c[I],{stream:!(E&&I==f-1)});return c.length=0,i.h.g+=l,i.C=0,i.h.g}function Uo(i){return i.g?i.v=="GET"&&i.M!=2&&i.j.Aa:!1}function th(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?Os:(l=Number(c.substring(l,f)),isNaN(l)?Lo:(f+=1,f+l>c.length?Os:(c=c.slice(f,f+l),i.C=f+l,c)))}rt.prototype.cancel=function(){this.K=!0,Pt(this)};function wn(i){i.T=Date.now()+i.H,Bo(i,i.H)}function Bo(i,c){if(i.D!=null)throw Error("WatchDog timer not null");i.D=Ar(d(i.aa,i),c)}function Ls(i){i.D&&(a.clearTimeout(i.D),i.D=null)}rt.prototype.aa=function(){this.D=null;const i=Date.now();i-this.T>=0?(Ju(this.i,this.B),this.M!=2&&(Tr(),we(17)),Pt(this),this.m=2,xr(this)):Bo(this,this.T-i)};function xr(i){i.j.I==0||i.K||da(i.j,i)}function Pt(i){Ls(i);var c=i.O;c&&typeof c.dispose=="function"&&c.dispose(),i.O=null,Po(i.V),i.g&&(c=i.g,i.g=null,c.abort(),c.dispose())}function Fs(i,c){try{var l=i.j;if(l.I!=0&&(l.g==i||Us(l.h,i))){if(!i.L&&Us(l.h,i)&&l.I==3){try{var f=l.Ba.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var E=f;if(E[0]==0){e:if(!l.v){if(l.g)if(l.g.F+3e3<i.F)xn(l),In(l);else break e;Hs(l),we(18)}}else l.xa=E[1],0<l.xa-l.K&&E[2]<37500&&l.F&&l.A==0&&!l.C&&(l.C=Ar(d(l.Va,l),6e3));qo(l.h)<=1&&l.ta&&(l.ta=void 0)}else Rt(l,11)}else if((i.L||l.g==i)&&xn(l),!m(c))for(E=l.Ba.g.parse(c),c=0;c<E.length;c++){let Q=E[c];const le=Q[0];if(!(le<=l.K))if(l.K=le,Q=Q[1],l.I==2)if(Q[0]=="c"){l.M=Q[1],l.ba=Q[2];const $e=Q[3];$e!=null&&(l.ka=$e,l.j.info("VER="+l.ka));const kt=Q[4];kt!=null&&(l.za=kt,l.j.info("SVER="+l.za));const ot=Q[5];ot!=null&&typeof ot=="number"&&ot>0&&(f=1.5*ot,l.O=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const at=i.g;if(at){const Cn=at.g?at.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Cn){var I=f.h;I.g||Cn.indexOf("spdy")==-1&&Cn.indexOf("quic")==-1&&Cn.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Bs(I,I.h),I.h=null))}if(f.G){const Ks=at.g?at.g.getResponseHeader("X-HTTP-Session-Id"):null;Ks&&(f.wa=Ks,X(f.J,f.G,Ks))}}l.I=3,l.l&&l.l.ra(),l.aa&&(l.T=Date.now()-i.F,l.j.info("Handshake RTT: "+l.T+"ms")),f=l;var C=i;if(f.na=ga(f,f.L?f.ba:null,f.W),C.L){Go(f.h,C);var B=C,oe=f.O;oe&&(B.H=oe),B.D&&(Ls(B),wn(B)),f.g=C}else ua(f);l.i.length>0&&Sn(l)}else Q[0]!="stop"&&Q[0]!="close"||Rt(l,7);else l.I==3&&(Q[0]=="stop"||Q[0]=="close"?Q[0]=="stop"?Rt(l,7):Gs(l):Q[0]!="noop"&&l.l&&l.l.qa(Q),l.A=0)}}Tr(4)}catch{}}var rh=class{constructor(i,c){this.g=i,this.map=c}};function jo(i){this.l=i||10,a.PerformanceNavigationTiming?(i=a.performance.getEntriesByType("navigation"),i=i.length>0&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function zo(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function qo(i){return i.h?1:i.g?i.g.size:0}function Us(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Bs(i,c){i.g?i.g.add(c):i.h=c}function Go(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}jo.prototype.cancel=function(){if(this.i=Ho(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function Ho(i){if(i.h!=null)return i.i.concat(i.h.G);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.G);return c}return P(i.i)}var Wo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nh(i,c){if(i){i=i.split("&");for(let l=0;l<i.length;l++){const f=i[l].indexOf("=");let E,I=null;f>=0?(E=i[l].substring(0,f),I=i[l].substring(f+1)):E=i[l],c(E,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function nt(i){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;i instanceof nt?(this.l=i.l,Pr(this,i.j),this.o=i.o,this.g=i.g,Cr(this,i.u),this.h=i.h,js(this,Zo(i.i)),this.m=i.m):i&&(c=String(i).match(Wo))?(this.l=!1,Pr(this,c[1]||"",!0),this.o=Rr(c[2]||""),this.g=Rr(c[3]||"",!0),Cr(this,c[4]),this.h=Rr(c[5]||"",!0),js(this,c[6]||"",!0),this.m=Rr(c[7]||"")):(this.l=!1,this.i=new Vr(null,this.l))}nt.prototype.toString=function(){const i=[];var c=this.j;c&&i.push(kr(c,Ko,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(kr(c,Ko,!0),"@"),i.push(Sr(l).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.u,l!=null&&i.push(":",String(l))),(l=this.h)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(kr(l,l.charAt(0)=="/"?oh:ih,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",kr(l,ch)),i.join("")},nt.prototype.resolve=function(i){const c=Oe(this);let l=!!i.j;l?Pr(c,i.j):l=!!i.o,l?c.o=i.o:l=!!i.g,l?c.g=i.g:l=i.u!=null;var f=i.h;if(l)Cr(c,i.u);else if(l=!!i.h){if(f.charAt(0)!="/")if(this.g&&!this.h)f="/"+f;else{var E=c.h.lastIndexOf("/");E!=-1&&(f=c.h.slice(0,E+1)+f)}if(E=f,E==".."||E==".")f="";else if(E.indexOf("./")!=-1||E.indexOf("/.")!=-1){f=E.lastIndexOf("/",0)==0,E=E.split("/");const I=[];for(let C=0;C<E.length;){const B=E[C++];B=="."?f&&C==E.length&&I.push(""):B==".."?((I.length>1||I.length==1&&I[0]!="")&&I.pop(),f&&C==E.length&&I.push("")):(I.push(B),f=!0)}f=I.join("/")}else f=E}return l?c.h=f:l=i.i.toString()!=="",l?js(c,Zo(i.i)):l=!!i.m,l&&(c.m=i.m),c};function Oe(i){return new nt(i)}function Pr(i,c,l){i.j=l?Rr(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function Cr(i,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);i.u=c}else i.u=null}function js(i,c,l){c instanceof Vr?(i.i=c,lh(i.i,i.l)):(l||(c=kr(c,ah)),i.i=new Vr(c,i.l))}function X(i,c,l){i.i.set(c,l)}function En(i){return X(i,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),i}function Rr(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function kr(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,sh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function sh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Ko=/[#\/\?@]/g,ih=/[#\?:]/g,oh=/[#\?]/g,ah=/[#\?@]/g,ch=/#/g;function Vr(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function Ct(i){i.g||(i.g=new Map,i.h=0,i.i&&nh(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}r=Vr.prototype,r.add=function(i,c){Ct(this),this.i=null,i=Qt(this,i);let l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function Qo(i,c){Ct(i),c=Qt(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Yo(i,c){return Ct(i),c=Qt(i,c),i.g.has(c)}r.forEach=function(i,c){Ct(this),this.g.forEach(function(l,f){l.forEach(function(E){i.call(c,E,f,this)},this)},this)};function Jo(i,c){Ct(i);let l=[];if(typeof c=="string")Yo(i,c)&&(l=l.concat(i.g.get(Qt(i,c))));else for(i=Array.from(i.g.values()),c=0;c<i.length;c++)l=l.concat(i[c]);return l}r.set=function(i,c){return Ct(this),this.i=null,i=Qt(this,i),Yo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},r.get=function(i,c){return i?(i=Jo(this,i),i.length>0?String(i[0]):c):c};function Xo(i,c,l){Qo(i,c),l.length>0&&(i.i=null,i.g.set(Qt(i,c),P(l)),i.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(let f=0;f<c.length;f++){var l=c[f];const E=Sr(l);l=Jo(this,l);for(let I=0;I<l.length;I++){let C=E;l[I]!==""&&(C+="="+Sr(l[I])),i.push(C)}}return this.i=i.join("&")};function Zo(i){const c=new Vr;return c.i=i.i,i.g&&(c.g=new Map(i.g),c.h=i.h),c}function Qt(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function lh(i,c){c&&!i.j&&(Ct(i),i.i=null,i.g.forEach(function(l,f){const E=f.toLowerCase();f!=E&&(Qo(this,f),Xo(this,E,l))},i)),i.j=c}function uh(i,c){const l=new Ir;if(a.Image){const f=new Image;f.onload=p(st,l,"TestLoadImage: loaded",!0,c,f),f.onerror=p(st,l,"TestLoadImage: error",!1,c,f),f.onabort=p(st,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=p(st,l,"TestLoadImage: timeout",!1,c,f),a.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function hh(i,c){const l=new Ir,f=new AbortController,E=setTimeout(()=>{f.abort(),st(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(I=>{clearTimeout(E),I.ok?st(l,"TestPingServer: ok",!0,c):st(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(E),st(l,"TestPingServer: error",!1,c)})}function st(i,c,l,f,E){try{E&&(E.onload=null,E.onerror=null,E.onabort=null,E.ontimeout=null),f(l)}catch{}}function dh(){this.g=new Ku}function zs(i){this.i=i.Sb||null,this.h=i.ab||!1}y(zs,Co),zs.prototype.g=function(){return new Tn(this.i,this.h)};function Tn(i,c){me.call(this),this.H=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}y(Tn,me),r=Tn.prototype,r.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=i,this.D=c,this.readyState=1,Nr(this)},r.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};i&&(c.body=i),(this.H||a).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Dr(this)),this.readyState=0},r.Pa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,Nr(this)),this.g&&(this.readyState=3,Nr(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ea(this)}else i.text().then(this.Oa.bind(this),this.ga.bind(this))};function ea(i){i.j.read().then(i.Ma.bind(i)).catch(i.ga.bind(i))}r.Ma=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?Dr(this):Nr(this),this.readyState==3&&ea(this)}},r.Oa=function(i){this.g&&(this.response=this.responseText=i,Dr(this))},r.Na=function(i){this.g&&(this.response=i,Dr(this))},r.ga=function(){this.g&&Dr(this)};function Dr(i){i.readyState=4,i.l=null,i.j=null,i.B=null,Nr(i)}r.setRequestHeader=function(i,c){this.A.append(i,c)},r.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function Nr(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(Tn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function ta(i){let c="";return mn(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function qs(i,c,l){e:{for(f in l){var f=!1;break e}f=!0}f||(l=ta(l),typeof i=="string"?l!=null&&Sr(l):X(i,c,l))}function te(i){me.call(this),this.headers=new Map,this.L=i||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}y(te,me);var fh=/^https?$/i,ph=["POST","PUT"];r=te.prototype,r.Fa=function(i){this.H=i},r.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Oo.g(),this.g.onreadystatechange=A(d(this.Ca,this));try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(I){ra(this,I);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var E in f)l.set(E,f[E]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const I of f.keys())l.set(I,f.get(I));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(I=>I.toLowerCase()=="content-type"),E=a.FormData&&i instanceof a.FormData,!(Array.prototype.indexOf.call(ph,c,void 0)>=0)||f||E||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,C]of l)this.g.setRequestHeader(I,C);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(i),this.v=!1}catch(I){ra(this,I)}};function ra(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.o=5,na(i),An(i)}function na(i){i.A||(i.A=!0,be(i,"complete"),be(i,"error"))}r.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=i||7,be(this,"complete"),be(this,"abort"),An(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),An(this,!0)),te.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?sa(this):this.Xa())},r.Xa=function(){sa(this)};function sa(i){if(i.h&&typeof o<"u"){if(i.v&&it(i)==4)setTimeout(i.Ca.bind(i),0);else if(be(i,"readystatechange"),it(i)==4){i.h=!1;try{const I=i.ca();e:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var l;if(!(l=c)){var f;if(f=I===0){let C=String(i.D).match(Wo)[1]||null;!C&&a.self&&a.self.location&&(C=a.self.location.protocol.slice(0,-1)),f=!fh.test(C?C.toLowerCase():"")}l=f}if(l)be(i,"complete"),be(i,"success");else{i.o=6;try{var E=it(i)>2?i.g.statusText:""}catch{E=""}i.l=E+" ["+i.ca()+"]",na(i)}}finally{An(i)}}}}function An(i,c){if(i.g){i.m&&(clearTimeout(i.m),i.m=null);const l=i.g;i.g=null,c||be(i,"ready");try{l.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function it(i){return i.g?i.g.readyState:0}r.ca=function(){try{return it(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Wu(c)}};function ia(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.F){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function gh(i){const c={};i=(i.g&&it(i)>=2&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(m(i[f]))continue;var l=Zu(i[f]);const E=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const I=c[E]||[];c[E]=I,I.push(l)}Bu(c,function(f){return f.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Mr(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function oa(i){this.za=0,this.i=[],this.j=new Ir,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Mr("failFast",!1,i),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Mr("baseRetryDelayMs",5e3,i),this.Za=Mr("retryDelaySeedMs",1e4,i),this.Ta=Mr("forwardChannelMaxRetries",2,i),this.va=Mr("forwardChannelRequestTimeoutMs",2e4,i),this.ma=i&&i.xmlHttpFactory||void 0,this.Ua=i&&i.Rb||void 0,this.Aa=i&&i.useFetchStreams||!1,this.O=void 0,this.L=i&&i.supportsCrossDomainXhr||!1,this.M="",this.h=new jo(i&&i.concurrentRequestLimit),this.Ba=new dh,this.S=i&&i.fastHandshake||!1,this.R=i&&i.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=i&&i.Pb||!1,i&&i.ua&&this.j.ua(),i&&i.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&i&&i.detectBufferingProxy||!1,this.ia=void 0,i&&i.longPollingTimeout&&i.longPollingTimeout>0&&(this.ia=i.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=oa.prototype,r.ka=8,r.I=1,r.connect=function(i,c,l,f){we(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.J=ga(this,null,this.W),Sn(this)};function Gs(i){if(aa(i),i.I==3){var c=i.V++,l=Oe(i.J);if(X(l,"SID",i.M),X(l,"RID",c),X(l,"TYPE","terminate"),Or(i,l),c=new rt(i,i.j,c),c.M=2,c.A=En(Oe(l)),l=!1,a.navigator&&a.navigator.sendBeacon)try{l=a.navigator.sendBeacon(c.A.toString(),"")}catch{}!l&&a.Image&&(new Image().src=c.A,l=!0),l||(c.g=ma(c.j,null),c.g.ea(c.A)),c.F=Date.now(),wn(c)}pa(i)}function In(i){i.g&&(Ws(i),i.g.cancel(),i.g=null)}function aa(i){In(i),i.v&&(a.clearTimeout(i.v),i.v=null),xn(i),i.h.cancel(),i.m&&(typeof i.m=="number"&&a.clearTimeout(i.m),i.m=null)}function Sn(i){if(!zo(i.h)&&!i.m){i.m=!0;var c=i.Ea;Ce||g(),de||(Ce(),de=!0),b.add(c,i),i.D=0}}function mh(i,c){return qo(i.h)>=i.h.j-(i.m?1:0)?!1:i.m?(i.i=c.G.concat(i.i),!0):i.I==1||i.I==2||i.D>=(i.Sa?0:i.Ta)?!1:(i.m=Ar(d(i.Ea,i,c),fa(i,i.D)),i.D++,!0)}r.Ea=function(i){if(this.m)if(this.m=null,this.I==1){if(!i){this.V=Math.floor(Math.random()*1e5),i=this.V++;const E=new rt(this,this.j,i);let I=this.o;if(this.U&&(I?(I=vo(I),wo(I,this.U)):I=this.U),this.u!==null||this.R||(E.J=I,I=null),this.S)e:{for(var c=0,l=0;l<this.i.length;l++){t:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,c>4096){c=l;break e}if(c===4096||l===this.i.length-1){c=l+1;break e}}c=1e3}else c=1e3;c=la(this,E,c),l=Oe(this.J),X(l,"RID",i),X(l,"CVER",22),this.G&&X(l,"X-HTTP-Session-Id",this.G),Or(this,l),I&&(this.R?c="headers="+Sr(ta(I))+"&"+c:this.u&&qs(l,this.u,I)),Bs(this.h,E),this.Ra&&X(l,"TYPE","init"),this.S?(X(l,"$req",c),X(l,"SID","null"),E.U=!0,$s(E,l,null)):$s(E,l,c),this.I=2}}else this.I==3&&(i?ca(this,i):this.i.length==0||zo(this.h)||ca(this))};function ca(i,c){var l;c?l=c.l:l=i.V++;const f=Oe(i.J);X(f,"SID",i.M),X(f,"RID",l),X(f,"AID",i.K),Or(i,f),i.u&&i.o&&qs(f,i.u,i.o),l=new rt(i,i.j,l,i.D+1),i.u===null&&(l.J=i.o),c&&(i.i=c.G.concat(i.i)),c=la(i,l,1e3),l.H=Math.round(i.va*.5)+Math.round(i.va*.5*Math.random()),Bs(i.h,l),$s(l,f,c)}function Or(i,c){i.H&&mn(i.H,function(l,f){X(c,f,l)}),i.l&&mn({},function(l,f){X(c,f,l)})}function la(i,c,l){l=Math.min(i.i.length,l);const f=i.l?d(i.l.Ka,i.l,i):null;e:{var E=i.i;let B=-1;for(;;){const oe=["count="+l];B==-1?l>0?(B=E[0].g,oe.push("ofs="+B)):B=0:oe.push("ofs="+B);let Q=!0;for(let le=0;le<l;le++){var I=E[le].g;const $e=E[le].map;if(I-=B,I<0)B=Math.max(0,E[le].g-100),Q=!1;else try{I="req"+I+"_"||"";try{var C=$e instanceof Map?$e:Object.entries($e);for(const[kt,ot]of C){let at=ot;u(ot)&&(at=Vs(ot)),oe.push(I+kt+"="+encodeURIComponent(at))}}catch(kt){throw oe.push(I+"type="+encodeURIComponent("_badmap")),kt}}catch{f&&f($e)}}if(Q){C=oe.join("&");break e}}C=void 0}return i=i.i.splice(0,l),c.G=i,C}function ua(i){if(!i.g&&!i.v){i.Y=1;var c=i.Da;Ce||g(),de||(Ce(),de=!0),b.add(c,i),i.A=0}}function Hs(i){return i.g||i.v||i.A>=3?!1:(i.Y++,i.v=Ar(d(i.Da,i),fa(i,i.A)),i.A++,!0)}r.Da=function(){if(this.v=null,ha(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var i=4*this.T;this.j.info("BP detection timer enabled: "+i),this.B=Ar(d(this.Wa,this),i)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,we(10),In(this),ha(this))};function Ws(i){i.B!=null&&(a.clearTimeout(i.B),i.B=null)}function ha(i){i.g=new rt(i,i.j,"rpc",i.Y),i.u===null&&(i.g.J=i.o),i.g.P=0;var c=Oe(i.na);X(c,"RID","rpc"),X(c,"SID",i.M),X(c,"AID",i.K),X(c,"CI",i.F?"0":"1"),!i.F&&i.ia&&X(c,"TO",i.ia),X(c,"TYPE","xmlhttp"),Or(i,c),i.u&&i.o&&qs(c,i.u,i.o),i.O&&(i.g.H=i.O);var l=i.g;i=i.ba,l.M=1,l.A=En(Oe(c)),l.u=null,l.R=!0,Fo(l,i)}r.Va=function(){this.C!=null&&(this.C=null,In(this),Hs(this),we(19))};function xn(i){i.C!=null&&(a.clearTimeout(i.C),i.C=null)}function da(i,c){var l=null;if(i.g==c){xn(i),Ws(i),i.g=null;var f=2}else if(Us(i.h,c))l=c.G,Go(i.h,c),f=1;else return;if(i.I!=0){if(c.o)if(f==1){l=c.u?c.u.length:0,c=Date.now()-c.F;var E=i.D;f=vn(),be(f,new No(f,l)),Sn(i)}else ua(i);else if(E=c.m,E==3||E==0&&c.X>0||!(f==1&&mh(i,c)||f==2&&Hs(i)))switch(l&&l.length>0&&(c=i.h,c.i=c.i.concat(l)),E){case 1:Rt(i,5);break;case 4:Rt(i,10);break;case 3:Rt(i,6);break;default:Rt(i,2)}}}function fa(i,c){let l=i.Qa+Math.floor(Math.random()*i.Za);return i.isActive()||(l*=2),l*c}function Rt(i,c){if(i.j.info("Error code "+c),c==2){var l=d(i.bb,i),f=i.Ua;const E=!f;f=new nt(f||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Pr(f,"https"),En(f),E?uh(f.toString(),l):hh(f.toString(),l)}else we(2);i.I=0,i.l&&i.l.pa(c),pa(i),aa(i)}r.bb=function(i){i?(this.j.info("Successfully pinged google.com"),we(2)):(this.j.info("Failed to ping google.com"),we(1))};function pa(i){if(i.I=0,i.ja=[],i.l){const c=Ho(i.h);(c.length!=0||i.i.length!=0)&&(D(i.ja,c),D(i.ja,i.i),i.h.i.length=0,P(i.i),i.i.length=0),i.l.oa()}}function ga(i,c,l){var f=l instanceof nt?Oe(l):new nt(l);if(f.g!="")c&&(f.g=c+"."+f.g),Cr(f,f.u);else{var E=a.location;f=E.protocol,c=c?c+"."+E.hostname:E.hostname,E=+E.port;const I=new nt(null);f&&Pr(I,f),c&&(I.g=c),E&&Cr(I,E),l&&(I.h=l),f=I}return l=i.G,c=i.wa,l&&c&&X(f,l,c),X(f,"VER",i.ka),Or(i,f),f}function ma(i,c,l){if(c&&!i.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Aa&&!i.ma?new te(new zs({ab:l})):new te(i.ma),c.Fa(i.L),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function _a(){}r=_a.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Pn(){}Pn.prototype.g=function(i,c){return new Ie(i,c)};function Ie(i,c){me.call(this),this.g=new oa(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(i?i["X-WebChannel-Client-Profile"]=c.sa:i={"X-WebChannel-Client-Profile":c.sa}),this.g.U=i,(i=c&&c.Qb)&&!m(i)&&(this.g.u=i),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!m(c)&&(this.g.G=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Yt(this)}y(Ie,me),Ie.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Ie.prototype.close=function(){Gs(this.g)},Ie.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.v&&(l={},l.__data__=Vs(i),i=l);c.i.push(new rh(c.Ya++,i)),c.I==3&&Sn(c)},Ie.prototype.N=function(){this.g.l=null,delete this.j,Gs(this.g),delete this.g,Ie.Z.N.call(this)};function ya(i){Ds.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){e:{for(const l in c){i=l;break e}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}y(ya,Ds);function va(){Ns.call(this),this.status=1}y(va,Ns);function Yt(i){this.g=i}y(Yt,_a),Yt.prototype.ra=function(){be(this.g,"a")},Yt.prototype.qa=function(i){be(this.g,new ya(i))},Yt.prototype.pa=function(i){be(this.g,new va)},Yt.prototype.oa=function(){be(this.g,"b")},Pn.prototype.createWebChannel=Pn.prototype.g,Ie.prototype.send=Ie.prototype.o,Ie.prototype.open=Ie.prototype.m,Ie.prototype.close=Ie.prototype.close,pl=function(){return new Pn},fl=function(){return vn()},dl=xt,hi={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},bn.NO_ERROR=0,bn.TIMEOUT=8,bn.HTTP_ERROR=6,Fn=bn,Mo.COMPLETE="complete",hl=Mo,Ro.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",me.prototype.listen=me.prototype.J,Fr=Ro,te.prototype.listenOnce=te.prototype.K,te.prototype.getLastError=te.prototype.Ha,te.prototype.getLastErrorCode=te.prototype.ya,te.prototype.getStatus=te.prototype.ca,te.prototype.getResponseJson=te.prototype.La,te.prototype.getResponseText=te.prototype.la,te.prototype.send=te.prototype.ea,te.prototype.setWithCredentials=te.prototype.Fa,ul=te}).apply(typeof kn<"u"?kn:typeof self<"u"?self:typeof window<"u"?window:{});class ye{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ye.UNAUTHENTICATED=new ye(null),ye.GOOGLE_CREDENTIALS=new ye("google-credentials-uid"),ye.FIRST_PARTY=new ye("first-party-uid"),ye.MOCK_USER=new ye("mock-user");let mr="12.8.0";function Hf(r){mr=r}const Bt=new nl("@firebase/firestore");function Zt(){return Bt.logLevel}function V(r,...e){if(Bt.logLevel<=G.DEBUG){const t=e.map($i);Bt.debug(`Firestore (${mr}): ${r}`,...t)}}function Je(r,...e){if(Bt.logLevel<=G.ERROR){const t=e.map($i);Bt.error(`Firestore (${mr}): ${r}`,...t)}}function lr(r,...e){if(Bt.logLevel<=G.WARN){const t=e.map($i);Bt.warn(`Firestore (${mr}): ${r}`,...t)}}function $i(r){if(typeof r=="string")return r;try{return(function(t){return JSON.stringify(t)})(r)}catch{return r}}function L(r,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,gl(r,n,t)}function gl(r,e,t){let n=`FIRESTORE (${mr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Je(n),new Error(n)}function W(r,e,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,r||gl(e,s,n)}function U(r,e){return r}const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends gr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}class $t{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}class ml{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wf{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ye.UNAUTHENTICATED)))}shutdown(){}}class Kf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Qf{constructor(e){this.t=e,this.currentUser=ye.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){W(this.o===void 0,42304);let n=this.i;const s=h=>this.i!==n?(n=this.i,t(h)):Promise.resolve();let o=new $t;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new $t,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const h=o;e.enqueueRetryable((async()=>{await h.promise,await s(this.currentUser)}))},u=h=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((h=>u(h))),setTimeout((()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new $t)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(W(typeof n.accessToken=="string",31837,{l:n}),new ml(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return W(e===null||typeof e=="string",2055,{h:e}),new ye(e)}}class Yf{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=ye.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Jf{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Yf(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ye.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qa{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xf{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Cf(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){W(this.o===void 0,3512);const n=o=>{o.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.m;return this.m=o.token,V("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable((()=>n(o)))};const s=o=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>s(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?s(o):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qa(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(W(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qa(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}function Zf(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}class Li{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const s=Zf(40);for(let o=0;o<s.length;++o)n.length<20&&s[o]<t&&(n+=e.charAt(s[o]%62))}return n}}function j(r,e){return r<e?-1:r>e?1:0}function di(r,e){const t=Math.min(r.length,e.length);for(let n=0;n<t;n++){const s=r.charAt(n),o=e.charAt(n);if(s!==o)return ei(s)===ei(o)?j(s,o):ei(s)?1:-1}return j(r.length,e.length)}const ep=55296,tp=57343;function ei(r){const e=r.charCodeAt(0);return e>=ep&&e<=tp}function ur(r,e,t){return r.length===e.length&&r.every(((n,s)=>t(n,e[s])))}const Ga="__name__";class Fe{constructor(e,t,n){t===void 0?t=0:t>e.length&&L(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&L(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Fe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fe?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const o=Fe.compareSegments(e.get(s),t.get(s));if(o!==0)return o}return j(e.length,t.length)}static compareSegments(e,t){const n=Fe.isNumericId(e),s=Fe.isNumericId(t);return n&&!s?-1:!n&&s?1:n&&s?Fe.extractNumericId(e).compare(Fe.extractNumericId(t)):di(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dt.fromString(e.substring(4,e.length-2))}}class J extends Fe{construct(e,t,n){return new J(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((s=>s.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const rp=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pe extends Fe{construct(e,t,n){return new pe(e,t,n)}static isValidIdentifier(e){return rp.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ga}static keyField(){return new pe([Ga])}static fromServerFormat(e){const t=[];let n="",s=0;const o=()=>{if(n.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const h=e[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(o(),s++)}if(o(),a)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pe(t)}static emptyPath(){return new pe([])}}class M{constructor(e){this.path=e}static fromPath(e){return new M(J.fromString(e))}static fromName(e){return new M(J.fromString(e).popFirst(5))}static empty(){return new M(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new J(e.slice()))}}function _l(r,e,t){if(!t)throw new k(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function np(r,e,t,n){if(e===!0&&n===!0)throw new k(S.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function Ha(r){if(!M.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Wa(r){if(M.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function yl(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function hs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":L(12329,{type:typeof r})}function Gr(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=hs(r);throw new k(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function ie(r,e){const t={typeString:r};return e&&(t.value=e),t}function un(r,e){if(!yl(r))throw new k(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const s=e[n].typeString,o="value"in e[n]?{value:e[n].value}:void 0;if(!(n in r)){t=`JSON missing required field: '${n}'`;break}const a=r[n];if(s&&typeof a!==s){t=`JSON field '${n}' must be a ${s}.`;break}if(o!==void 0&&a!==o.value){t=`Expected '${n}' field to equal '${o.value}'`;break}}if(t)throw new k(S.INVALID_ARGUMENT,t);return!0}const Ka=-62135596800,Qa=1e6;class Z{static now(){return Z.fromMillis(Date.now())}static fromDate(e){return Z.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Qa);return new Z(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ka)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qa}_compareTo(e){return this.seconds===e.seconds?j(this.nanoseconds,e.nanoseconds):j(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Z._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(un(e,Z._jsonSchema))return new Z(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ka;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:ie("string",Z._jsonSchemaVersion),seconds:ie("number"),nanoseconds:ie("number")};class F{static fromTimestamp(e){return new F(e)}static min(){return new F(new Z(0,0))}static max(){return new F(new Z(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}const en=-1;function sp(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=F.fromTimestamp(n===1e9?new Z(t+1,0):new Z(t,n));return new pt(s,M.empty(),e)}function ip(r){return new pt(r.readTime,r.key,en)}class pt{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new pt(F.min(),M.empty(),en)}static max(){return new pt(F.max(),M.empty(),en)}}function op(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=M.comparator(r.documentKey,e.documentKey),t!==0?t:j(r.largestBatchId,e.largestBatchId))}const ap="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}async function _r(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==ap)throw r;V("LocalStore","Unexpectedly lost primary lease")}class x{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&L(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new x(((n,s)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(n,s)},this.catchCallback=o=>{this.wrapFailure(t,o).next(n,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof x?t:x.resolve(t)}catch(t){return x.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):x.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):x.reject(t)}static resolve(e){return new x(((t,n)=>{t(e)}))}static reject(e){return new x(((t,n)=>{n(e)}))}static waitFor(e){return new x(((t,n)=>{let s=0,o=0,a=!1;e.forEach((u=>{++s,u.next((()=>{++o,a&&o===s&&t()}),(h=>n(h)))})),a=!0,o===s&&t()}))}static or(e){let t=x.resolve(!1);for(const n of e)t=t.next((s=>s?x.resolve(s):n()));return t}static forEach(e,t){const n=[];return e.forEach(((s,o)=>{n.push(t.call(this,s,o))})),this.waitFor(n)}static mapArray(e,t){return new x(((n,s)=>{const o=e.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;t(e[d]).next((p=>{a[d]=p,++u,u===o&&n(a)}),(p=>s(p)))}}))}static doWhile(e,t){return new x(((n,s)=>{const o=()=>{e()===!0?t().next((()=>{o()}),s):n()};o()}))}}function lp(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function yr(r){return r.name==="IndexedDbTransactionError"}class ds{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}ds.ce=-1;const Fi=-1;function fs(r){return r==null}function Jn(r){return r===0&&1/r==-1/0}function up(r){return typeof r=="number"&&Number.isInteger(r)&&!Jn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}const vl="";function hp(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=Ya(e)),e=dp(r.get(t),e);return Ya(e)}function dp(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const o=r.charAt(s);switch(o){case"\0":t+="";break;case vl:t+="";break;default:t+=o}}return t}function Ya(r){return r+vl+""}function Ja(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function qt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function bl(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}class ee{constructor(e,t){this.comparator=e,this.root=t||fe.EMPTY}insert(e,t){return new ee(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,fe.BLACK,null,null))}remove(e){return new ee(this.comparator,this.root.remove(e,this.comparator).copy(null,null,fe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vn(this.root,e,this.comparator,!0)}}class Vn{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=t?n(e.key,t):1,t&&s&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class fe{constructor(e,t,n,s,o){this.key=e,this.value=t,this.color=n??fe.RED,this.left=s??fe.EMPTY,this.right=o??fe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,o){return new fe(e??this.key,t??this.value,n??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const o=n(e,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(e,t,n),null):o===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return fe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return fe.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw L(43730,{key:this.key,value:this.value});if(this.right.isRed())throw L(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw L(27949);return e+(this.isRed()?0:1)}}fe.EMPTY=null,fe.RED=!0,fe.BLACK=!1;fe.EMPTY=new class{constructor(){this.size=0}get key(){throw L(57766)}get value(){throw L(16141)}get color(){throw L(16727)}get left(){throw L(29726)}get right(){throw L(36894)}copy(e,t,n,s,o){return this}insert(e,t,n){return new fe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};class ce{constructor(e){this.comparator=e,this.data=new ee(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Xa(this.data.getIterator())}getIteratorFrom(e){return new Xa(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof ce)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=n.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ce(this.comparator);return t.data=e,t}}class Xa{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}class Re{constructor(e){this.fields=e,e.sort(pe.comparator)}static empty(){return new Re([])}unionWith(e){let t=new ce(pe.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Re(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ur(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}class wl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}class ge{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new wl("Invalid base64 string: "+o):o}})(e);return new ge(t)}static fromUint8Array(e){const t=(function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o})(e);return new ge(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return j(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ge.EMPTY_BYTE_STRING=new ge("");const fp=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(r){if(W(!!r,39018),typeof r=="string"){let e=0;const t=fp.exec(r);if(W(!!t,46558,{timestamp:r}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:re(r.seconds),nanos:re(r.nanos)}}function re(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function mt(r){return typeof r=="string"?ge.fromBase64String(r):ge.fromUint8Array(r)}const El="server_timestamp",Tl="__type__",Al="__previous_value__",Il="__local_write_time__";function Ui(r){return(r?.mapValue?.fields||{})[Tl]?.stringValue===El}function ps(r){const e=r.mapValue.fields[Al];return Ui(e)?ps(e):e}function tn(r){const e=gt(r.mapValue.fields[Il].timestampValue);return new Z(e.seconds,e.nanos)}class pp{constructor(e,t,n,s,o,a,u,h,d,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d,this.isUsingEmulator=p,this.apiKey=y}}const Xn="(default)";class rn{constructor(e,t){this.projectId=e,this.database=t||Xn}static empty(){return new rn("","")}get isDefaultDatabase(){return this.database===Xn}isEqual(e){return e instanceof rn&&e.projectId===this.projectId&&e.database===this.database}}function gp(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new rn(r.options.projectId,e)}const Sl="__type__",mp="__max__",Dn={mapValue:{}},xl="__vector__",Zn="value";function _t(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Ui(r)?4:yp(r)?9007199254740991:_p(r)?10:11:L(28295,{value:r})}function He(r,e){if(r===e)return!0;const t=_t(r);if(t!==_t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return tn(r).isEqual(tn(e));case 3:return(function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=gt(s.timestampValue),u=gt(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(s,o){return mt(s.bytesValue).isEqual(mt(o.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(s,o){return re(s.geoPointValue.latitude)===re(o.geoPointValue.latitude)&&re(s.geoPointValue.longitude)===re(o.geoPointValue.longitude)})(r,e);case 2:return(function(s,o){if("integerValue"in s&&"integerValue"in o)return re(s.integerValue)===re(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=re(s.doubleValue),u=re(o.doubleValue);return a===u?Jn(a)===Jn(u):isNaN(a)&&isNaN(u)}return!1})(r,e);case 9:return ur(r.arrayValue.values||[],e.arrayValue.values||[],He);case 10:case 11:return(function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Ja(a)!==Ja(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!He(a[h],u[h])))return!1;return!0})(r,e);default:return L(52216,{left:r})}}function nn(r,e){return(r.values||[]).find((t=>He(t,e)))!==void 0}function hr(r,e){if(r===e)return 0;const t=_t(r),n=_t(e);if(t!==n)return j(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return j(r.booleanValue,e.booleanValue);case 2:return(function(o,a){const u=re(o.integerValue||o.doubleValue),h=re(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1})(r,e);case 3:return Za(r.timestampValue,e.timestampValue);case 4:return Za(tn(r),tn(e));case 5:return di(r.stringValue,e.stringValue);case 6:return(function(o,a){const u=mt(o),h=mt(a);return u.compareTo(h)})(r.bytesValue,e.bytesValue);case 7:return(function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=j(u[d],h[d]);if(p!==0)return p}return j(u.length,h.length)})(r.referenceValue,e.referenceValue);case 8:return(function(o,a){const u=j(re(o.latitude),re(a.latitude));return u!==0?u:j(re(o.longitude),re(a.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return ec(r.arrayValue,e.arrayValue);case 10:return(function(o,a){const u=o.fields||{},h=a.fields||{},d=u[Zn]?.arrayValue,p=h[Zn]?.arrayValue,y=j(d?.values?.length||0,p?.values?.length||0);return y!==0?y:ec(d,p)})(r.mapValue,e.mapValue);case 11:return(function(o,a){if(o===Dn.mapValue&&a===Dn.mapValue)return 0;if(o===Dn.mapValue)return 1;if(a===Dn.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let y=0;y<h.length&&y<p.length;++y){const A=di(h[y],p[y]);if(A!==0)return A;const P=hr(u[h[y]],d[p[y]]);if(P!==0)return P}return j(h.length,p.length)})(r.mapValue,e.mapValue);default:throw L(23264,{he:t})}}function Za(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return j(r,e);const t=gt(r),n=gt(e),s=j(t.seconds,n.seconds);return s!==0?s:j(t.nanos,n.nanos)}function ec(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const o=hr(t[s],n[s]);if(o)return o}return j(t.length,n.length)}function dr(r){return fi(r)}function fi(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const n=gt(t);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return mt(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return M.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let n="[",s=!0;for(const o of t.values||[])s?s=!1:n+=",",n+=fi(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(t){const n=Object.keys(t.fields||{}).sort();let s="{",o=!0;for(const a of n)o?o=!1:s+=",",s+=`${a}:${fi(t.fields[a])}`;return s+"}"})(r.mapValue):L(61005,{value:r})}function Un(r){switch(_t(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ps(r);return e?16+Un(e):16;case 5:return 2*r.stringValue.length;case 6:return mt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((s,o)=>s+Un(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let s=0;return qt(n.fields,((o,a)=>{s+=o.length+Un(a)})),s})(r.mapValue);default:throw L(13486,{value:r})}}function tc(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function pi(r){return!!r&&"integerValue"in r}function Bi(r){return!!r&&"arrayValue"in r}function rc(r){return!!r&&"nullValue"in r}function nc(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Bn(r){return!!r&&"mapValue"in r}function _p(r){return(r?.mapValue?.fields||{})[Sl]?.stringValue===xl}function Hr(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return qt(r.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Hr(n))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Hr(r.arrayValue.values[t]);return e}return{...r}}function yp(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===mp}class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Bn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Hr(t)}setAll(e){let t=pe.emptyPath(),n={},s=[];e.forEach(((a,u)=>{if(!t.isImmediateParentOf(u)){const h=this.getFieldsMap(t);this.applyChanges(h,n,s),n={},s=[],t=u.popLast()}a?n[u.lastSegment()]=Hr(a):s.push(u.lastSegment())}));const o=this.getFieldsMap(t);this.applyChanges(o,n,s)}delete(e){const t=this.field(e.popLast());Bn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return He(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];Bn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){qt(t,((s,o)=>e[s]=o));for(const s of n)delete e[s]}clone(){return new Se(Hr(this.value))}}function Pl(r){const e=[];return qt(r.fields,((t,n)=>{const s=new pe([t]);if(Bn(n)){const o=Pl(n.mapValue).fields;if(o.length===0)e.push(s);else for(const a of o)e.push(s.child(a))}else e.push(s)})),new Re(e)}class ve{constructor(e,t,n,s,o,a,u){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(e){return new ve(e,0,F.min(),F.min(),F.min(),Se.empty(),0)}static newFoundDocument(e,t,n,s){return new ve(e,1,t,F.min(),n,s,0)}static newNoDocument(e,t){return new ve(e,2,t,F.min(),F.min(),Se.empty(),0)}static newUnknownDocument(e,t){return new ve(e,3,t,F.min(),F.min(),Se.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class es{constructor(e,t){this.position=e,this.inclusive=t}}function sc(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const o=e[s],a=r.position[s];if(o.field.isKeyField()?n=M.comparator(M.fromName(a.referenceValue),t.key):n=hr(a,t.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function ic(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!He(r.position[t],e.position[t]))return!1;return!0}class sn{constructor(e,t="asc"){this.field=e,this.dir=t}}function vp(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}class Cl{}class se extends Cl{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new wp(e,t,n):t==="array-contains"?new Ap(e,n):t==="in"?new Ip(e,n):t==="not-in"?new Sp(e,n):t==="array-contains-any"?new xp(e,n):new se(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Ep(e,n):new Tp(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hr(t,this.value)):t!==null&&_t(this.value)===_t(t)&&this.matchesComparison(hr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return L(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ne extends Cl{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ne(e,t)}matches(e){return Rl(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Rl(r){return r.op==="and"}function kl(r){return bp(r)&&Rl(r)}function bp(r){for(const e of r.filters)if(e instanceof Ne)return!1;return!0}function gi(r){if(r instanceof se)return r.field.canonicalString()+r.op.toString()+dr(r.value);if(kl(r))return r.filters.map((e=>gi(e))).join(",");{const e=r.filters.map((t=>gi(t))).join(",");return`${r.op}(${e})`}}function Vl(r,e){return r instanceof se?(function(n,s){return s instanceof se&&n.op===s.op&&n.field.isEqual(s.field)&&He(n.value,s.value)})(r,e):r instanceof Ne?(function(n,s){return s instanceof Ne&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce(((o,a,u)=>o&&Vl(a,s.filters[u])),!0):!1})(r,e):void L(19439)}function Dl(r){return r instanceof se?(function(t){return`${t.field.canonicalString()} ${t.op} ${dr(t.value)}`})(r):r instanceof Ne?(function(t){return t.op.toString()+" {"+t.getFilters().map(Dl).join(" ,")+"}"})(r):"Filter"}class wp extends se{constructor(e,t,n){super(e,t,n),this.key=M.fromName(n.referenceValue)}matches(e){const t=M.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ep extends se{constructor(e,t){super(e,"in",t),this.keys=Nl("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Tp extends se{constructor(e,t){super(e,"not-in",t),this.keys=Nl("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Nl(r,e){return(e.arrayValue?.values||[]).map((t=>M.fromName(t.referenceValue)))}class Ap extends se{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bi(t)&&nn(t.arrayValue,this.value)}}class Ip extends se{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&nn(this.value.arrayValue,t)}}class Sp extends se{constructor(e,t){super(e,"not-in",t)}matches(e){if(nn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!nn(this.value.arrayValue,t)}}class xp extends se{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>nn(this.value.arrayValue,n)))}}class Pp{constructor(e,t=null,n=[],s=[],o=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.Te=null}}function oc(r,e=null,t=[],n=[],s=null,o=null,a=null){return new Pp(r,e,t,n,s,o,a)}function ji(r){const e=U(r);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>gi(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),fs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>dr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>dr(n))).join(",")),e.Te=t}return e.Te}function zi(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!vp(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Vl(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!ic(r.startAt,e.startAt)&&ic(r.endAt,e.endAt)}function mi(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}class vr{constructor(e,t=null,n=[],s=[],o=null,a="F",u=null,h=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function Cp(r,e,t,n,s,o,a,u){return new vr(r,e,t,n,s,o,a,u)}function qi(r){return new vr(r)}function ac(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Rp(r){return M.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ml(r){return r.collectionGroup!==null}function Wr(r){const e=U(r);if(e.Ie===null){e.Ie=[];const t=new Set;for(const o of e.explicitOrderBy)e.Ie.push(o),t.add(o.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ce(pe.comparator);return a.filters.forEach((h=>{h.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(e).forEach((o=>{t.has(o.canonicalString())||o.isKeyField()||e.Ie.push(new sn(o,n))})),t.has(pe.keyField().canonicalString())||e.Ie.push(new sn(pe.keyField(),n))}return e.Ie}function Ue(r){const e=U(r);return e.Ee||(e.Ee=kp(e,Wr(r))),e.Ee}function kp(r,e){if(r.limitType==="F")return oc(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((s=>{const o=s.dir==="desc"?"asc":"desc";return new sn(s.field,o)}));const t=r.endAt?new es(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new es(r.startAt.position,r.startAt.inclusive):null;return oc(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function _i(r,e){const t=r.filters.concat([e]);return new vr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Vp(r,e){const t=r.explicitOrderBy.concat([e]);return new vr(r.path,r.collectionGroup,t,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function ts(r,e,t){return new vr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function gs(r,e){return zi(Ue(r),Ue(e))&&r.limitType===e.limitType}function Ol(r){return`${ji(Ue(r))}|lt:${r.limitType}`}function er(r){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((s=>Dl(s))).join(", ")}]`),fs(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>dr(s))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>dr(s))).join(",")),`Target(${n})`})(Ue(r))}; limitType=${r.limitType})`}function ms(r,e){return e.isFoundDocument()&&(function(n,s){const o=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):M.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,e)&&(function(n,s){for(const o of Wr(n))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0})(r,e)&&(function(n,s){for(const o of n.filters)if(!o.matches(s))return!1;return!0})(r,e)&&(function(n,s){return!(n.startAt&&!(function(a,u,h){const d=sc(a,u,h);return a.inclusive?d<=0:d<0})(n.startAt,Wr(n),s)||n.endAt&&!(function(a,u,h){const d=sc(a,u,h);return a.inclusive?d>=0:d>0})(n.endAt,Wr(n),s))})(r,e)}function Dp(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function $l(r){return(e,t)=>{let n=!1;for(const s of Wr(r)){const o=Np(s,e,t);if(o!==0)return o;n=n||s.field.isKeyField()}return 0}}function Np(r,e,t){const n=r.field.isKeyField()?M.comparator(e.key,t.key):(function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?hr(h,d):L(42886)})(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return L(19790,{direction:r.dir})}}class Gt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,o]of n)if(this.equalsFn(s,e))return o}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],e))return void(s[o]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){qt(this.inner,((t,n)=>{for(const[s,o]of n)e(s,o)}))}isEmpty(){return bl(this.inner)}size(){return this.innerSize}}const Mp=new ee(M.comparator);function Xe(){return Mp}const Ll=new ee(M.comparator);function Ur(...r){let e=Ll;for(const t of r)e=e.insert(t.key,t);return e}function Fl(r){let e=Ll;return r.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Ot(){return Kr()}function Ul(){return Kr()}function Kr(){return new Gt((r=>r.toString()),((r,e)=>r.isEqual(e)))}const Op=new ee(M.comparator),$p=new ce(M.comparator);function z(...r){let e=$p;for(const t of r)e=e.add(t);return e}const Lp=new ce(j);function Fp(){return Lp}function Gi(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(e)?"-0":e}}function Bl(r){return{integerValue:""+r}}function Up(r,e){return up(e)?Bl(e):Gi(r,e)}class _s{constructor(){this._=void 0}}function Bp(r,e,t){return r instanceof on?(function(s,o){const a={fields:{[Tl]:{stringValue:El},[Il]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Ui(o)&&(o=ps(o)),o&&(a.fields[Al]=o),{mapValue:a}})(t,e):r instanceof an?zl(r,e):r instanceof cn?ql(r,e):(function(s,o){const a=jl(s,o),u=cc(a)+cc(s.Ae);return pi(a)&&pi(s.Ae)?Bl(u):Gi(s.serializer,u)})(r,e)}function jp(r,e,t){return r instanceof an?zl(r,e):r instanceof cn?ql(r,e):t}function jl(r,e){return r instanceof rs?(function(n){return pi(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(e)?e:{integerValue:0}:null}class on extends _s{}class an extends _s{constructor(e){super(),this.elements=e}}function zl(r,e){const t=Gl(e);for(const n of r.elements)t.some((s=>He(s,n)))||t.push(n);return{arrayValue:{values:t}}}class cn extends _s{constructor(e){super(),this.elements=e}}function ql(r,e){let t=Gl(e);for(const n of r.elements)t=t.filter((s=>!He(s,n)));return{arrayValue:{values:t}}}class rs extends _s{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function cc(r){return re(r.integerValue||r.doubleValue)}function Gl(r){return Bi(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}class zp{constructor(e,t){this.field=e,this.transform=t}}function qp(r,e){return r.field.isEqual(e.field)&&(function(n,s){return n instanceof an&&s instanceof an||n instanceof cn&&s instanceof cn?ur(n.elements,s.elements,He):n instanceof rs&&s instanceof rs?He(n.Ae,s.Ae):n instanceof on&&s instanceof on})(r.transform,e.transform)}class Gp{constructor(e,t){this.version=e,this.transformResults=t}}class Ke{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ke}static exists(e){return new Ke(void 0,e)}static updateTime(e){return new Ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function jn(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class ys{}function Hl(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Kl(r.key,Ke.none()):new hn(r.key,r.data,Ke.none());{const t=r.data,n=Se.empty();let s=new ce(pe.comparator);for(let o of e.fields)if(!s.has(o)){let a=t.field(o);a===null&&o.length>1&&(o=o.popLast(),a=t.field(o)),a===null?n.delete(o):n.set(o,a),s=s.add(o)}return new Ht(r.key,n,new Re(s.toArray()),Ke.none())}}function Hp(r,e,t){r instanceof hn?(function(s,o,a){const u=s.value.clone(),h=uc(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(r,e,t):r instanceof Ht?(function(s,o,a){if(!jn(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=uc(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Wl(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()})(r,e,t):(function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Qr(r,e,t,n){return r instanceof hn?(function(o,a,u,h){if(!jn(o.precondition,a))return u;const d=o.value.clone(),p=hc(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(r,e,t,n):r instanceof Ht?(function(o,a,u,h){if(!jn(o.precondition,a))return u;const d=hc(o.fieldTransforms,h,a),p=a.data;return p.setAll(Wl(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((y=>y.field)))})(r,e,t,n):(function(o,a,u){return jn(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(r,e,t)}function Wp(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),o=jl(n.transform,s||null);o!=null&&(t===null&&(t=Se.empty()),t.set(n.field,o))}return t||null}function lc(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ur(n,s,((o,a)=>qp(o,a)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class hn extends ys{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ht extends ys{constructor(e,t,n,s,o=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wl(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}})),e}function uc(r,e,t){const n=new Map;W(r.length===t.length,32656,{Ve:t.length,de:r.length});for(let s=0;s<t.length;s++){const o=r[s],a=o.transform,u=e.data.field(o.field);n.set(o.field,jp(a,u,t[s]))}return n}function hc(r,e,t){const n=new Map;for(const s of r){const o=s.transform,a=t.data.field(s.field);n.set(s.field,Bp(o,a,e))}return n}class Kl extends ys{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kp extends ys{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}class Qp{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(e.key)&&Hp(o,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Qr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Qr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Ul();return this.mutations.forEach((s=>{const o=e.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=t.has(s.key)?null:u;const h=Hl(a,u);h!==null&&n.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),z())}isEqual(e){return this.batchId===e.batchId&&ur(this.mutations,e.mutations,((t,n)=>lc(t,n)))&&ur(this.baseMutations,e.baseMutations,((t,n)=>lc(t,n)))}}class Hi{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){W(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let s=(function(){return Op})();const o=e.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,n[a].version);return new Hi(e,t,n,s)}}class Yp{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}class Jp{constructor(e,t){this.count=e,this.unchangedNames=t}}var ne,q;function Xp(r){switch(r){case S.OK:return L(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return L(15467,{code:r})}}function Ql(r){if(r===void 0)return Je("GRPC error has no .code"),S.UNKNOWN;switch(r){case ne.OK:return S.OK;case ne.CANCELLED:return S.CANCELLED;case ne.UNKNOWN:return S.UNKNOWN;case ne.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ne.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ne.INTERNAL:return S.INTERNAL;case ne.UNAVAILABLE:return S.UNAVAILABLE;case ne.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ne.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ne.NOT_FOUND:return S.NOT_FOUND;case ne.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ne.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ne.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ne.ABORTED:return S.ABORTED;case ne.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ne.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ne.DATA_LOSS:return S.DATA_LOSS;default:return L(39323,{code:r})}}(q=ne||(ne={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";function Zp(){return new TextEncoder}const eg=new dt([4294967295,4294967295],0);function dc(r){const e=Zp().encode(r),t=new ll;return t.update(e),new Uint8Array(t.digest())}function fc(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),o=e.getUint32(12,!0);return[new dt([t,n],0),new dt([s,o],0)]}class Wi{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Br(`Invalid padding: ${t}`);if(n<0)throw new Br(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Br(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Br(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=dt.fromNumber(this.ge)}ye(e,t,n){let s=e.add(t.multiply(dt.fromNumber(n)));return s.compare(eg)===1&&(s=new dt([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=dc(e),[n,s]=fc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);if(!this.we(a))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,o=new Uint8Array(Math.ceil(e/8)),a=new Wi(o,s,t);return n.forEach((u=>a.insert(u))),a}insert(e){if(this.ge===0)return;const t=dc(e),[n,s]=fc(t);for(let o=0;o<this.hashCount;o++){const a=this.ye(n,s,o);this.be(a)}}be(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Br extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}class vs{constructor(e,t,n,s,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,dn.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new vs(F.min(),s,new ee(j),Xe(),z())}}class dn{constructor(e,t,n,s,o){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new dn(n,t,z(),z(),z())}}class zn{constructor(e,t,n,s){this.Se=e,this.removedTargetIds=t,this.key=n,this.De=s}}class Yl{constructor(e,t){this.targetId=e,this.Ce=t}}class Jl{constructor(e,t,n=ge.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class pc{constructor(){this.ve=0,this.Fe=gc(),this.Me=ge.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=z(),t=z(),n=z();return this.Fe.forEach(((s,o)=>{switch(o){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:L(38017,{changeType:o})}})),new dn(this.Me,this.xe,e,t,n)}Ke(){this.Oe=!1,this.Fe=gc()}qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,W(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class tg{constructor(e){this.Ge=e,this.ze=new Map,this.je=Xe(),this.He=Nn(),this.Je=Nn(),this.Ze=new ee(j)}Xe(e){for(const t of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.Ke(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:L(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,s)=>{this.rt(s)&&t(s)}))}st(e){const t=e.targetId,n=e.Ce.count,s=this.ot(t);if(s){const o=s.target;if(mi(o))if(n===0){const a=new M(o.path);this.et(t,a,ve.newNoDocument(a,F.min()))}else W(n===1,20013,{expectedCount:n});else{const a=this._t(t);if(a!==n){const u=this.ut(e),h=u?this.ct(u,e,a):1;if(h!==0){this.it(t);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,d)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:o=0}=t;let a,u;try{a=mt(n).toUint8Array()}catch(h){if(h instanceof wl)return lr("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Wi(a,s,o)}catch(h){return lr(h instanceof Br?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.ge===0?null:u}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let s=0;return n.forEach((o=>{const a=this.Ge.ht(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;e.mightContain(u)||(this.et(t,o,null),s++)})),s}Tt(e){const t=new Map;this.ze.forEach(((o,a)=>{const u=this.ot(a);if(u){if(o.current&&mi(u.target)){const h=new M(u.target.path);this.It(h).has(a)||this.Et(a,h)||this.et(a,h,ve.newNoDocument(h,e))}o.Be&&(t.set(a,o.ke()),o.Ke())}}));let n=z();this.Je.forEach(((o,a)=>{let u=!0;a.forEachWhile((h=>{const d=this.ot(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(n=n.add(o))})),this.je.forEach(((o,a)=>a.setReadTime(e)));const s=new vs(e,t,this.Ze,this.je,n);return this.je=Xe(),this.He=Nn(),this.Je=Nn(),this.Ze=new ee(j),s}Ye(e,t){if(!this.rt(e))return;const n=this.Et(e,t.key)?2:0;this.nt(e).qe(t.key,n),this.je=this.je.insert(t.key,t),this.He=this.He.insert(t.key,this.It(t.key).add(e)),this.Je=this.Je.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.qe(t,1):s.Ue(t),this.Je=this.Je.insert(t,this.Rt(t).delete(e)),this.Je=this.Je.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new pc,this.ze.set(e,t)),t}Rt(e){let t=this.Je.get(e);return t||(t=new ce(j),this.Je=this.Je.insert(e,t)),t}It(e){let t=this.He.get(e);return t||(t=new ce(j),this.He=this.He.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||V("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new pc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Nn(){return new ee(M.comparator)}function gc(){return new ee(M.comparator)}const rg={asc:"ASCENDING",desc:"DESCENDING"},ng={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sg={and:"AND",or:"OR"};class ig{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yi(r,e){return r.useProto3Json||fs(e)?e:{value:e}}function ns(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xl(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function og(r,e){return ns(r,e.toTimestamp())}function Be(r){return W(!!r,49232),F.fromTimestamp((function(t){const n=gt(t);return new Z(n.seconds,n.nanos)})(r))}function Ki(r,e){return vi(r,e).canonicalString()}function vi(r,e){const t=(function(s){return new J(["projects",s.projectId,"databases",s.database])})(r).child("documents");return e===void 0?t:t.child(e)}function Zl(r){const e=J.fromString(r);return W(su(e),10190,{key:e.toString()}),e}function bi(r,e){return Ki(r.databaseId,e.path)}function ti(r,e){const t=Zl(e);if(t.get(1)!==r.databaseId.projectId)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new M(tu(t))}function eu(r,e){return Ki(r.databaseId,e)}function ag(r){const e=Zl(r);return e.length===4?J.emptyPath():tu(e)}function wi(r){return new J(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function tu(r){return W(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function mc(r,e,t){return{name:bi(r,e),fields:t.value.mapValue.fields}}function cg(r,e){let t;if("targetChange"in e){e.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:L(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],o=(function(d,p){return d.useProto3Json?(W(p===void 0||typeof p=="string",58123),ge.fromBase64String(p||"")):(W(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),ge.fromUint8Array(p||new Uint8Array))})(r,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&(function(d){const p=d.code===void 0?S.UNKNOWN:Ql(d.code);return new k(p,d.message||"")})(a);t=new Jl(n,s,o,u||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=ti(r,n.document.name),o=Be(n.document.updateTime),a=n.document.createTime?Be(n.document.createTime):F.min(),u=new Se({mapValue:{fields:n.document.fields}}),h=ve.newFoundDocument(s,o,a,u),d=n.targetIds||[],p=n.removedTargetIds||[];t=new zn(d,p,h.key,h)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=ti(r,n.document),o=n.readTime?Be(n.readTime):F.min(),a=ve.newNoDocument(s,o),u=n.removedTargetIds||[];t=new zn([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=ti(r,n.document),o=n.removedTargetIds||[];t=new zn([],o,s,null)}else{if(!("filter"in e))return L(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:o}=n,a=new Jp(s,o),u=n.targetId;t=new Yl(u,a)}}return t}function lg(r,e){let t;if(e instanceof hn)t={update:mc(r,e.key,e.value)};else if(e instanceof Kl)t={delete:bi(r,e.key)};else if(e instanceof Ht)t={update:mc(r,e.key,e.data),updateMask:yg(e.fieldMask)};else{if(!(e instanceof Kp))return L(16599,{dt:e.type});t={verify:bi(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(o,a){const u=a.transform;if(u instanceof on)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof an)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof cn)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof rs)return{fieldPath:a.field.canonicalString(),increment:u.Ae};throw L(20930,{transform:a.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(s,o){return o.updateTime!==void 0?{updateTime:og(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:L(27497)})(r,e.precondition)),t}function ug(r,e){return r&&r.length>0?(W(e!==void 0,14353),r.map((t=>(function(s,o){let a=s.updateTime?Be(s.updateTime):Be(o);return a.isEqual(F.min())&&(a=Be(o)),new Gp(a,s.transformResults||[])})(t,e)))):[]}function hg(r,e){return{documents:[eu(r,e.path)]}}function dg(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=eu(r,s);const o=(function(d){if(d.length!==0)return nu(Ne.create(d,"and"))})(e.filters);o&&(t.structuredQuery.where=o);const a=(function(d){if(d.length!==0)return d.map((p=>(function(A){return{field:tr(A.field),direction:gg(A.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=yi(r,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{ft:t,parent:s}}function fg(r){let e=ag(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){W(n===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let o=[];t.where&&(o=(function(y){const A=ru(y);return A instanceof Ne&&kl(A)?A.getFilters():[A]})(t.where));let a=[];t.orderBy&&(a=(function(y){return y.map((A=>(function(D){return new sn(rr(D.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(A)))})(t.orderBy));let u=null;t.limit&&(u=(function(y){let A;return A=typeof y=="object"?y.value:y,fs(A)?null:A})(t.limit));let h=null;t.startAt&&(h=(function(y){const A=!!y.before,P=y.values||[];return new es(P,A)})(t.startAt));let d=null;return t.endAt&&(d=(function(y){const A=!y.before,P=y.values||[];return new es(P,A)})(t.endAt)),Cp(e,s,a,o,u,"F",h,d)}function pg(r,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return L(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ru(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=rr(t.unaryFilter.field);return se.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=rr(t.unaryFilter.field);return se.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=rr(t.unaryFilter.field);return se.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=rr(t.unaryFilter.field);return se.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return L(61313);default:return L(60726)}})(r):r.fieldFilter!==void 0?(function(t){return se.create(rr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return L(58110);default:return L(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Ne.create(t.compositeFilter.filters.map((n=>ru(n))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return L(1026)}})(t.compositeFilter.op))})(r):L(30097,{filter:r})}function gg(r){return rg[r]}function mg(r){return ng[r]}function _g(r){return sg[r]}function tr(r){return{fieldPath:r.canonicalString()}}function rr(r){return pe.fromServerFormat(r.fieldPath)}function nu(r){return r instanceof se?(function(t){if(t.op==="=="){if(nc(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NAN"}};if(rc(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(nc(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NAN"}};if(rc(t.value))return{unaryFilter:{field:tr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:tr(t.field),op:mg(t.op),value:t.value}}})(r):r instanceof Ne?(function(t){const n=t.getFilters().map((s=>nu(s)));return n.length===1?n[0]:{compositeFilter:{op:_g(t.op),filters:n}}})(r):L(54877,{filter:r})}function yg(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function su(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function iu(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}class lt{constructor(e,t,n,s,o=F.min(),a=F.min(),u=ge.EMPTY_BYTE_STRING,h=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(e){return new lt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}class vg{constructor(e){this.yt=e}}function bg(r){const e=fg({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ts(e,e.limit,"L"):e}class wg{constructor(){this.Sn=new Eg}addToCollectionParentIndex(e,t){return this.Sn.add(t),x.resolve()}getCollectionParents(e,t){return x.resolve(this.Sn.getEntries(t))}addFieldIndex(e,t){return x.resolve()}deleteFieldIndex(e,t){return x.resolve()}deleteAllFieldIndexes(e){return x.resolve()}createTargetIndexes(e,t){return x.resolve()}getDocumentsMatchingTarget(e,t){return x.resolve(null)}getIndexType(e,t){return x.resolve(0)}getFieldIndexes(e,t){return x.resolve([])}getNextCollectionGroupToUpdate(e){return x.resolve(null)}getMinOffset(e,t){return x.resolve(pt.min())}getMinOffsetFromCollectionGroup(e,t){return x.resolve(pt.min())}updateCollectionGroup(e,t,n){return x.resolve()}updateIndexEntries(e,t){return x.resolve()}}class Eg{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new ce(J.comparator),o=!s.has(n);return this.index[t]=s.add(n),o}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new ce(J.comparator)).toArray()}}const _c={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ou=41943040;class Te{static withCacheSize(e){return new Te(e,Te.DEFAULT_COLLECTION_PERCENTILE,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}Te.DEFAULT_COLLECTION_PERCENTILE=10,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Te.DEFAULT=new Te(ou,Te.DEFAULT_COLLECTION_PERCENTILE,Te.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Te.DISABLED=new Te(-1,0,0);class fr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new fr(0)}static ar(){return new fr(-1)}}const yc="LruGarbageCollector",Tg=1048576;function vc([r,e],[t,n]){const s=j(r,t);return s===0?j(e,n):s}class Ag{constructor(e){this.Pr=e,this.buffer=new ce(vc),this.Tr=0}Ir(){return++this.Tr}Er(e){const t=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();vc(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ig{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){V(yc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){yr(t)?V(yc,"Ignoring IndexedDB error during garbage collection: ",t):await _r(t)}await this.Ar(3e5)}))}}class Sg{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return x.resolve(ds.ce);const n=new Ag(t);return this.Vr.forEachTarget(e,(s=>n.Er(s.sequenceNumber))).next((()=>this.Vr.mr(e,(s=>n.Er(s))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(V("LruGarbageCollector","Garbage collection skipped; disabled"),x.resolve(_c)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(V("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),_c):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,s,o,a,u,h,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((y=>(y>this.params.maximumSequenceNumbersToCollect?(V("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${y}`),s=this.params.maximumSequenceNumbersToCollect):s=y,a=Date.now(),this.nthSequenceNumber(e,s)))).next((y=>(n=y,u=Date.now(),this.removeTargets(e,n,t)))).next((y=>(o=y,h=Date.now(),this.removeOrphanedDocuments(e,n)))).next((y=>(d=Date.now(),Zt()<=G.DEBUG&&V("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${o} targets in `+(h-u)+`ms
	Removed ${y} documents in `+(d-h)+`ms
Total Duration: ${d-p}ms`),x.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:o,documentsRemoved:y}))))}}function xg(r,e){return new Sg(r,e)}class Pg{constructor(){this.changes=new Gt((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?x.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}class Cg{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}class Rg{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(n=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(n!==null&&Qr(n.mutation,s,Re.empty(),Z.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,z()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=z()){const s=Ot();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,n).next((o=>{let a=Ur();return o.forEach(((u,h)=>{a=a.insert(u,h.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const n=Ot();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,z())))}populateOverlays(e,t,n){const s=[];return n.forEach((o=>{t.has(o)||s.push(o)})),this.documentOverlayCache.getOverlays(e,s).next((o=>{o.forEach(((a,u)=>{t.set(a,u)}))}))}computeViews(e,t,n,s){let o=Xe();const a=Kr(),u=(function(){return Kr()})();return t.forEach(((h,d)=>{const p=n.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Ht)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),Qr(p.mutation,d,p.mutation.getFieldMask(),Z.now())):a.set(d.key,Re.empty())})),this.recalculateAndSaveOverlays(e,o).next((h=>(h.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>u.set(d,new Cg(p,a.get(d)??null)))),u)))}recalculateAndSaveOverlays(e,t){const n=Kr();let s=new ee(((a,u)=>a-u)),o=z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const u of a)u.keys().forEach((h=>{const d=t.get(h);if(d===null)return;let p=n.get(h)||Re.empty();p=u.applyToLocalView(d,p),n.set(h,p);const y=(s.get(u.batchId)||z()).add(h);s=s.insert(u.batchId,y)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,y=Ul();p.forEach((A=>{if(!o.has(A)){const P=Hl(t.get(A),n.get(A));P!==null&&y.set(A,P),o=o.add(A)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return x.waitFor(a)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,s){return Rp(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ml(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next((o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-o.size):x.resolve(Ot());let u=en,h=o;return a.next((d=>x.forEach(d,((p,y)=>(u<y.largestBatchId&&(u=y.largestBatchId),o.get(p)?x.resolve():this.remoteDocumentCache.getEntry(e,p).next((A=>{h=h.insert(p,A)}))))).next((()=>this.populateOverlays(e,d,o))).next((()=>this.computeViews(e,h,d,z()))).next((p=>({batchId:u,changes:Fl(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new M(t)).next((n=>{let s=Ur();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const o=t.collectionGroup;let a=Ur();return this.indexManager.getCollectionParents(e,o).next((u=>x.forEach(u,(h=>{const d=(function(y,A){return new vr(A,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)})(t,h.child(o));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next((p=>{p.forEach(((y,A)=>{a=a.insert(y,A)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,n,s){let o;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,o,s)))).next((a=>{o.forEach(((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,ve.newInvalidDocument(p)))}));let u=Ur();return a.forEach(((h,d)=>{const p=o.get(h);p!==void 0&&Qr(p.mutation,d,Re.empty(),Z.now()),ms(t,d)&&(u=u.insert(h,d))})),u}))}}class kg{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return x.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Be(s.createTime)}})(t)),x.resolve()}getNamedQuery(e,t){return x.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(s){return{name:s.name,query:bg(s.bundledQuery),readTime:Be(s.readTime)}})(t)),x.resolve()}}class Vg{constructor(){this.overlays=new ee(M.comparator),this.Lr=new Map}getOverlay(e,t){return x.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Ot();return x.forEach(t,(s=>this.getOverlay(e,s).next((o=>{o!==null&&n.set(s,o)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((s,o)=>{this.bt(e,t,o)})),x.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Lr.get(n);return s!==void 0&&(s.forEach((o=>this.overlays=this.overlays.remove(o))),this.Lr.delete(n)),x.resolve()}getOverlaysForCollection(e,t,n){const s=Ot(),o=t.length+1,a=new M(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>n&&s.set(h.getKey(),h)}return x.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let o=new ee(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let p=o.get(d.largestBatchId);p===null&&(p=Ot(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=Ot(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach(((d,p)=>u.set(d,p))),!(u.size()>=s)););return x.resolve(u)}bt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.Lr.get(s.largestBatchId).delete(n.key);this.Lr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new Yp(t,n));let o=this.Lr.get(t);o===void 0&&(o=z(),this.Lr.set(t,o)),this.Lr.set(t,o.add(n.key))}}class Dg{constructor(){this.sessionToken=ge.EMPTY_BYTE_STRING}getSessionToken(e){return x.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,x.resolve()}}class Qi{constructor(){this.kr=new ce(ue.Kr),this.qr=new ce(ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new ue(e,t);this.kr=this.kr.add(n),this.qr=this.qr.add(n)}$r(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new ue(e,t))}Qr(e,t){e.forEach((n=>this.removeReference(n,t)))}Gr(e){const t=new M(new J([])),n=new ue(t,e),s=new ue(t,e+1),o=[];return this.qr.forEachInRange([n,s],(a=>{this.Wr(a),o.push(a.key)})),o}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const t=new M(new J([])),n=new ue(t,e),s=new ue(t,e+1);let o=z();return this.qr.forEachInRange([n,s],(a=>{o=o.add(a.key)})),o}containsKey(e){const t=new ue(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class ue{constructor(e,t){this.key=e,this.Hr=t}static Kr(e,t){return M.comparator(e.key,t.key)||j(e.Hr,t.Hr)}static Ur(e,t){return j(e.Hr,t.Hr)||M.comparator(e.key,t.key)}}class Ng{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Jr=new ce(ue.Kr)}checkEmpty(e){return x.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const o=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Qp(o,t,n,s);this.mutationQueue.push(a);for(const u of s)this.Jr=this.Jr.add(new ue(u.key,o)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return x.resolve(a)}lookupMutationBatch(e,t){return x.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Xr(n),o=s<0?0:s;return x.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return x.resolve(this.mutationQueue.length===0?Fi:this.Yn-1)}getAllMutationBatches(e){return x.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new ue(t,0),s=new ue(t,Number.POSITIVE_INFINITY),o=[];return this.Jr.forEachInRange([n,s],(a=>{const u=this.Zr(a.Hr);o.push(u)})),x.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ce(j);return t.forEach((s=>{const o=new ue(s,0),a=new ue(s,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([o,a],(u=>{n=n.add(u.Hr)}))})),x.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let o=n;M.isDocumentKey(o)||(o=o.child(""));const a=new ue(new M(o),0);let u=new ce(j);return this.Jr.forEachWhile((h=>{const d=h.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.Hr)),!0)}),a),x.resolve(this.Yr(u))}Yr(e){const t=[];return e.forEach((n=>{const s=this.Zr(n);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){W(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Jr;return x.forEach(t.mutations,(s=>{const o=new ue(s.key,t.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Jr=n}))}nr(e){}containsKey(e,t){const n=new ue(t,0),s=this.Jr.firstAfterOrEqual(n);return x.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,x.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}class Mg{constructor(e){this.ti=e,this.docs=(function(){return new ee(M.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),o=s?s.size:0,a=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return x.resolve(n?n.document.mutableCopy():ve.newInvalidDocument(t))}getEntries(e,t){let n=Xe();return t.forEach((s=>{const o=this.docs.get(s);n=n.insert(s,o?o.document.mutableCopy():ve.newInvalidDocument(s))})),x.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let o=Xe();const a=t.path,u=new M(a.child("__id-9223372036854775808__")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||op(ip(p),n)<=0||(s.has(p.key)||ms(t,p))&&(o=o.insert(p.key,p.mutableCopy()))}return x.resolve(o)}getAllFromCollectionGroup(e,t,n,s){L(9500)}ni(e,t){return x.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Og(this)}getSize(e){return x.resolve(this.size)}}class Og extends Pg{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,s)=>{s.isValidDocument()?t.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(n)})),x.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}class $g{constructor(e){this.persistence=e,this.ri=new Gt((t=>ji(t)),zi),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.ii=0,this.si=new Qi,this.targetCount=0,this.oi=fr._r()}forEachTarget(e,t){return this.ri.forEach(((n,s)=>t(s))),x.resolve()}getLastRemoteSnapshotVersion(e){return x.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return x.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),x.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),x.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new fr(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,x.resolve()}updateTargetData(e,t){return this.lr(t),x.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,x.resolve()}removeTargets(e,t,n){let s=0;const o=[];return this.ri.forEach(((a,u)=>{u.sequenceNumber<=t&&n.get(u.targetId)===null&&(this.ri.delete(a),o.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)})),x.waitFor(o).next((()=>s))}getTargetCount(e){return x.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return x.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),x.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const s=this.persistence.referenceDelegate,o=[];return s&&t.forEach((a=>{o.push(s.markPotentiallyOrphaned(e,a))})),x.waitFor(o)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),x.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return x.resolve(n)}containsKey(e,t){return x.resolve(this.si.containsKey(t))}}class au{constructor(e,t){this._i={},this.overlays={},this.ai=new ds(0),this.ui=!1,this.ui=!0,this.ci=new Dg,this.referenceDelegate=e(this),this.li=new $g(this),this.indexManager=new wg,this.remoteDocumentCache=(function(s){return new Mg(s)})((n=>this.referenceDelegate.hi(n))),this.serializer=new vg(t),this.Pi=new kg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Vg,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new Ng(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){V("MemoryPersistence","Starting transaction:",e);const s=new Lg(this.ai.next());return this.referenceDelegate.Ti(),n(s).next((o=>this.referenceDelegate.Ii(s).next((()=>o)))).toPromise().then((o=>(s.raiseOnCommittedEvent(),o)))}Ei(e,t){return x.or(Object.values(this._i).map((n=>()=>n.containsKey(e,t))))}}class Lg extends cp{constructor(e){super(),this.currentSequenceNumber=e}}class Yi{constructor(e){this.persistence=e,this.Ri=new Qi,this.Ai=null}static Vi(e){return new Yi(e)}get di(){if(this.Ai)return this.Ai;throw L(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),x.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),x.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),x.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((s=>this.di.add(s.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((o=>this.di.add(o.toString())))})).next((()=>n.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ii(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return x.forEach(this.di,(n=>{const s=M.fromPath(n);return this.mi(e,s).next((o=>{o||t.removeEntry(s,F.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return x.or([()=>x.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ss{constructor(e,t){this.persistence=e,this.fi=new Gt((n=>hp(n.path)),((n,s)=>n.isEqual(s))),this.garbageCollector=xg(this,t)}static Vi(e,t){return new ss(e,t)}Ti(){}Ii(e){return x.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((s=>n+s))))}pr(e){let t=0;return this.mr(e,(n=>{t++})).next((()=>t))}mr(e,t){return x.forEach(this.fi,((n,s)=>this.wr(e,n,s).next((o=>o?x.resolve():t(s)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),o=s.newChangeBuffer();return s.ni(e,(a=>this.wr(e,a,t).next((u=>{u||(n++,o.removeEntry(a,F.min()))})))).next((()=>o.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),x.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),x.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),x.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Un(e.data.value)),t}wr(e,t,n){return x.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.fi.get(t);return x.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}class Ji{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Ts=n,this.Is=s}static Es(e,t){let n=z(),s=z();for(const o of t.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new Ji(e,t.fromCache,n,s)}}class Fg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}class Ug{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return Id()?8:lp(Td())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,s){const o={result:null};return this.gs(e,t).next((a=>{o.result=a})).next((()=>{if(!o.result)return this.ps(e,t,s,n).next((a=>{o.result=a}))})).next((()=>{if(o.result)return;const a=new Fg;return this.ys(e,t,a).next((u=>{if(o.result=u,this.As)return this.ws(e,t,a,u.size)}))})).next((()=>o.result))}ws(e,t,n,s){return n.documentReadCount<this.Vs?(Zt()<=G.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",er(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),x.resolve()):(Zt()<=G.DEBUG&&V("QueryEngine","Query:",er(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.ds*s?(Zt()<=G.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",er(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ue(t))):x.resolve())}gs(e,t){if(ac(t))return x.resolve(null);let n=Ue(t);return this.indexManager.getIndexType(e,n).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=ts(t,null,"F"),n=Ue(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((o=>{const a=z(...o);return this.fs.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,n).next((h=>{const d=this.bs(t,u);return this.Ss(t,d,a,h.readTime)?this.gs(e,ts(t,null,"F")):this.Ds(e,d,t,h)}))))})))))}ps(e,t,n,s){return ac(t)||s.isEqual(F.min())?x.resolve(null):this.fs.getDocuments(e,n).next((o=>{const a=this.bs(t,o);return this.Ss(t,a,n,s)?x.resolve(null):(Zt()<=G.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),er(t)),this.Ds(e,a,t,sp(s,en)).next((u=>u)))}))}bs(e,t){let n=new ce($l(e));return t.forEach(((s,o)=>{ms(e,o)&&(n=n.add(o))})),n}Ss(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const o=e.limitType==="F"?t.last():t.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}ys(e,t,n){return Zt()<=G.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",er(t)),this.fs.getDocumentsMatchingQuery(e,t,pt.min(),n)}Ds(e,t,n,s){return this.fs.getDocumentsMatchingQuery(e,n,s).next((o=>(t.forEach((a=>{o=o.insert(a.key,a)})),o)))}}const Xi="LocalStore",Bg=3e8;class jg{constructor(e,t,n,s){this.persistence=e,this.Cs=t,this.serializer=s,this.vs=new ee(j),this.Fs=new Gt((o=>ji(o)),zi),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Rg(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function zg(r,e,t,n){return new jg(r,e,t,n)}async function cu(r,e){const t=U(r);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next((o=>(s=o,t.Os(e),t.mutationQueue.getAllMutationBatches(n)))).next((o=>{const a=[],u=[];let h=z();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return t.localDocuments.getDocuments(n,h).next((d=>({Ns:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function qg(r,e){const t=U(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const s=e.batch.keys(),o=t.xs.newChangeBuffer({trackRemovals:!0});return(function(u,h,d,p){const y=d.batch,A=y.keys();let P=x.resolve();return A.forEach((D=>{P=P.next((()=>p.getEntry(h,D))).next((O=>{const N=d.docVersions.get(D);W(N!==null,48541),O.version.compareTo(N)<0&&(y.applyToRemoteDocument(O,d),O.isValidDocument()&&(O.setReadTime(d.commitVersion),p.addEntry(O)))}))})),P.next((()=>u.mutationQueue.removeMutationBatch(h,y)))})(t,n,e,o).next((()=>o.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(u){let h=z();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h})(e)))).next((()=>t.localDocuments.getDocuments(n,s)))}))}function lu(r){const e=U(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function Gg(r,e){const t=U(r),n=e.snapshotVersion;let s=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const a=t.xs.newChangeBuffer({trackRemovals:!0});s=t.vs;const u=[];e.targetChanges.forEach(((p,y)=>{const A=s.get(y);if(!A)return;u.push(t.li.removeMatchingKeys(o,p.removedDocuments,y).next((()=>t.li.addMatchingKeys(o,p.addedDocuments,y))));let P=A.withSequenceNumber(o.currentSequenceNumber);e.targetMismatches.get(y)!==null?P=P.withResumeToken(ge.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):p.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(p.resumeToken,n)),s=s.insert(y,P),(function(O,N,H){return O.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Bg?!0:H.addedDocuments.size+H.modifiedDocuments.size+H.removedDocuments.size>0})(A,P,p)&&u.push(t.li.updateTargetData(o,P))}));let h=Xe(),d=z();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(o,p))})),u.push(Hg(o,a,e.documentUpdates).next((p=>{h=p.Bs,d=p.Ls}))),!n.isEqual(F.min())){const p=t.li.getLastRemoteSnapshotVersion(o).next((y=>t.li.setTargetsMetadata(o,o.currentSequenceNumber,n)));u.push(p)}return x.waitFor(u).next((()=>a.apply(o))).next((()=>t.localDocuments.getLocalViewOfDocuments(o,h,d))).next((()=>h))})).then((o=>(t.vs=s,o)))}function Hg(r,e,t){let n=z(),s=z();return t.forEach((o=>n=n.add(o))),e.getEntries(r,n).next((o=>{let a=Xe();return t.forEach(((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(F.min())?(e.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(h),a=a.insert(u,h)):V(Xi,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)})),{Bs:a,Ls:s}}))}function Wg(r,e){const t=U(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Fi),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Kg(r,e){const t=U(r);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let s;return t.li.getTargetData(n,e).next((o=>o?(s=o,x.resolve(s)):t.li.allocateTargetId(n).next((a=>(s=new lt(e,a,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,s).next((()=>s)))))))})).then((n=>{const s=t.vs.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n}))}async function Ei(r,e,t){const n=U(r),s=n.vs.get(e),o=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",o,(a=>n.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!yr(a))throw a;V(Xi,`Failed to update sequence numbers for target ${e}: ${a}`)}n.vs=n.vs.remove(e),n.Fs.delete(s.target)}function bc(r,e,t){const n=U(r);let s=F.min(),o=z();return n.persistence.runTransaction("Execute query","readwrite",(a=>(function(h,d,p){const y=U(h),A=y.Fs.get(p);return A!==void 0?x.resolve(y.vs.get(A)):y.li.getTargetData(d,p)})(n,a,Ue(e)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(a,u.targetId).next((h=>{o=h}))})).next((()=>n.Cs.getDocumentsMatchingQuery(a,e,t?s:F.min(),t?o:z()))).next((u=>(Qg(n,Dp(e),u),{documents:u,ks:o})))))}function Qg(r,e,t){let n=r.Ms.get(e)||F.min();t.forEach(((s,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.Ms.set(e,n)}class wc{constructor(){this.activeTargetIds=Fp()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yg{constructor(){this.vo=new wc,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new wc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}class Jg{Mo(e){}shutdown(){}}const Ec="ConnectivityMonitor";class Tc{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){V(Ec,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){V(Ec,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}let Mn=null;function Ti(){return Mn===null?Mn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mn++,"0x"+Mn.toString(16)}const ri="RestConnection",Xg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class Zg{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.qo=t+"://"+e.host,this.Uo=`projects/${n}/databases/${s}`,this.$o=this.databaseId.database===Xn?`project_id=${n}`:`project_id=${n}&database_id=${s}`}Wo(e,t,n,s,o){const a=Ti(),u=this.Qo(e,t.toUriEncodedString());V(ri,`Sending RPC '${e}' ${a}:`,u,n);const h={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(h,s,o);const{host:d}=new URL(u),p=Mi(d);return this.zo(e,u,h,n,p).then((y=>(V(ri,`Received RPC '${e}' ${a}: `,y),y)),(y=>{throw lr(ri,`RPC '${e}' ${a} failed with error: `,y,"url: ",u,"request:",n),y}))}jo(e,t,n,s,o,a){return this.Wo(e,t,n,s,o)}Go(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+mr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,o)=>e[o]=s)),n&&n.headers.forEach(((s,o)=>e[o]=s))}Qo(e,t){const n=Xg[e];let s=`${this.qo}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}class em{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}const _e="WebChannelConnection",Lr=(r,e,t)=>{r.listen(e,(n=>{try{t(n)}catch(s){setTimeout((()=>{throw s}),0)}}))};class sr extends Zg{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!sr.c_){const e=fl();Lr(e,dl.STAT_EVENT,(t=>{t.stat===hi.PROXY?V(_e,"STAT_EVENT: detected buffering proxy"):t.stat===hi.NOPROXY&&V(_e,"STAT_EVENT: detected no buffering proxy")})),sr.c_=!0}}zo(e,t,n,s,o){const a=Ti();return new Promise(((u,h)=>{const d=new ul;d.setWithCredentials(!0),d.listenOnce(hl.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Fn.NO_ERROR:const y=d.getResponseJson();V(_e,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(y)),u(y);break;case Fn.TIMEOUT:V(_e,`RPC '${e}' ${a} timed out`),h(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case Fn.HTTP_ERROR:const A=d.getStatus();if(V(_e,`RPC '${e}' ${a} failed with status:`,A,"response text:",d.getResponseText()),A>0){let P=d.getResponseJson();Array.isArray(P)&&(P=P[0]);const D=P?.error;if(D&&D.status&&D.message){const O=(function(H){const K=H.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(K)>=0?K:S.UNKNOWN})(D.status);h(new k(O,D.message))}else h(new k(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else h(new k(S.UNAVAILABLE,"Connection failed."));break;default:L(9055,{l_:e,streamId:a,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{V(_e,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(s);V(_e,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,n,15)}))}T_(e,t,n){const s=Ti(),o=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=this.createWebChannelTransport(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Go(u.initMessageHeaders,t,n),u.encodeInitMessageHeaders=!0;const d=o.join("");V(_e,`Creating RPC '${e}' stream ${s}: ${d}`,u);const p=a.createWebChannel(d,u);this.I_(p);let y=!1,A=!1;const P=new em({Ho:D=>{A?V(_e,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(y||(V(_e,`Opening RPC '${e}' stream ${s} transport.`),p.open(),y=!0),V(_e,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Jo:()=>p.close()});return Lr(p,Fr.EventType.OPEN,(()=>{A||(V(_e,`RPC '${e}' stream ${s} transport opened.`),P.i_())})),Lr(p,Fr.EventType.CLOSE,(()=>{A||(A=!0,V(_e,`RPC '${e}' stream ${s} transport closed`),P.o_(),this.E_(p))})),Lr(p,Fr.EventType.ERROR,(D=>{A||(A=!0,lr(_e,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),P.o_(new k(S.UNAVAILABLE,"The operation could not be completed")))})),Lr(p,Fr.EventType.MESSAGE,(D=>{if(!A){const O=D.data[0];W(!!O,16349);const N=O,H=N?.error||N[0]?.error;if(H){V(_e,`RPC '${e}' stream ${s} received error:`,H);const K=H.status;let Y=(function(de){const b=ne[de];if(b!==void 0)return Ql(b)})(K),Ae=H.message;Y===void 0&&(Y=S.INTERNAL,Ae="Unknown error status: "+K+" with message "+H.message),A=!0,P.o_(new k(Y,Ae)),p.close()}else V(_e,`RPC '${e}' stream ${s} received:`,O),P.__(O)}})),sr.u_(),setTimeout((()=>{P.s_()}),0),P}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return pl()}}function tm(r){return new sr(r)}function ni(){return typeof document<"u"?document:null}function bs(r){return new ig(r,!0)}sr.c_=!1;class uu{constructor(e,t,n=1e3,s=1.5,o=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=s,this.V_=o,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-n);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}const Ac="PersistentStream";class hu{constructor(e,t,n,s,o,a,u,h){this.Ci=e,this.b_=n,this.S_=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new uu(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(Je(t.toString()),Je("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,s])=>{this.D_===t&&this.G_(n,s)}),(n=>{e((()=>{const s=new k(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(s)}))}))}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((s=>{n((()=>this.z_(s)))})),this.stream.onMessage((s=>{n((()=>++this.F_==1?this.H_(s):this.onNext(s)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return V(Ac,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(V(Ac,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rm extends hu{constructor(e,t,n,s,o,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,a),this.serializer=o}j_(e,t){return this.connection.T_("Listen",e,t)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=cg(this.serializer,e),n=(function(o){if(!("targetChange"in o))return F.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?F.min():a.readTime?Be(a.readTime):F.min()})(e);return this.listener.J_(t,n)}Z_(e){const t={};t.database=wi(this.serializer),t.addTarget=(function(o,a){let u;const h=a.target;if(u=mi(h)?{documents:hg(o,h)}:{query:dg(o,h).ft},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Xl(o,a.resumeToken);const d=yi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(F.min())>0){u.readTime=ns(o,a.snapshotVersion.toTimestamp());const d=yi(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,e);const n=pg(this.serializer,e);n&&(t.labels=n),this.K_(t)}X_(e){const t={};t.database=wi(this.serializer),t.removeTarget=e,this.K_(t)}}class nm extends hu{constructor(e,t,n,s,o,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,a),this.serializer=o}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}H_(e){return W(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,W(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){W(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=ug(e.writeResults,e.commitTime),n=Be(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=wi(this.serializer),this.K_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>lg(this.serializer,n)))};this.K_(t)}}class sm{}class im extends sm{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.Wo(e,vi(t,n),s,o,a))).catch((o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())}))}jo(e,t,n,s,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.jo(e,vi(t,n),s,a,u,o))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(S.UNKNOWN,a.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function om(r,e,t,n){return new im(r,e,t,n)}class am{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Je(t),this.aa=!1):V("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}const jt="RemoteStore";class cm{constructor(e,t,n,s,o){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=o,this.Aa.Mo((a=>{n.enqueueAndForget((async()=>{Wt(this)&&(V(jt,"Restarting streams for network reachability change."),await(async function(h){const d=U(h);d.Ea.add(4),await fn(d),d.Va.set("Unknown"),d.Ea.delete(4),await ws(d)})(this))}))})),this.Va=new am(n,s)}}async function ws(r){if(Wt(r))for(const e of r.Ra)await e(!0)}async function fn(r){for(const e of r.Ra)await e(!1)}function du(r,e){const t=U(r);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),ro(t)?to(t):br(t).O_()&&eo(t,e))}function Zi(r,e){const t=U(r),n=br(t);t.Ia.delete(e),n.O_()&&fu(t,e),t.Ia.size===0&&(n.O_()?n.L_():Wt(t)&&t.Va.set("Unknown"))}function eo(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(F.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}br(r).Z_(e)}function fu(r,e){r.da.$e(e),br(r).X_(e)}function to(r){r.da=new tg({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),br(r).start(),r.Va.ua()}function ro(r){return Wt(r)&&!br(r).x_()&&r.Ia.size>0}function Wt(r){return U(r).Ea.size===0}function pu(r){r.da=void 0}async function lm(r){r.Va.set("Online")}async function um(r){r.Ia.forEach(((e,t)=>{eo(r,e)}))}async function hm(r,e){pu(r),ro(r)?(r.Va.ha(e),to(r)):r.Va.set("Unknown")}async function dm(r,e,t){if(r.Va.set("Online"),e instanceof Jl&&e.state===2&&e.cause)try{await(async function(s,o){const a=o.cause;for(const u of o.targetIds)s.Ia.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ia.delete(u),s.da.removeTarget(u))})(r,e)}catch(n){V(jt,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await is(r,n)}else if(e instanceof zn?r.da.Xe(e):e instanceof Yl?r.da.st(e):r.da.tt(e),!t.isEqual(F.min()))try{const n=await lu(r.localStore);t.compareTo(n)>=0&&await(function(o,a){const u=o.da.Tt(a);return u.targetChanges.forEach(((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.Ia.get(d);p&&o.Ia.set(d,p.withResumeToken(h.resumeToken,a))}})),u.targetMismatches.forEach(((h,d)=>{const p=o.Ia.get(h);if(!p)return;o.Ia.set(h,p.withResumeToken(ge.EMPTY_BYTE_STRING,p.snapshotVersion)),fu(o,h);const y=new lt(p.target,h,d,p.sequenceNumber);eo(o,y)})),o.remoteSyncer.applyRemoteEvent(u)})(r,t)}catch(n){V(jt,"Failed to raise snapshot:",n),await is(r,n)}}async function is(r,e,t){if(!yr(e))throw e;r.Ea.add(1),await fn(r),r.Va.set("Offline"),t||(t=()=>lu(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{V(jt,"Retrying IndexedDB access"),await t(),r.Ea.delete(1),await ws(r)}))}function gu(r,e){return e().catch((t=>is(r,t,e)))}async function Es(r){const e=U(r),t=yt(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Fi;for(;fm(e);)try{const s=await Wg(e.localStore,n);if(s===null){e.Ta.length===0&&t.L_();break}n=s.batchId,pm(e,s)}catch(s){await is(e,s)}mu(e)&&_u(e)}function fm(r){return Wt(r)&&r.Ta.length<10}function pm(r,e){r.Ta.push(e);const t=yt(r);t.O_()&&t.Y_&&t.ea(e.mutations)}function mu(r){return Wt(r)&&!yt(r).x_()&&r.Ta.length>0}function _u(r){yt(r).start()}async function gm(r){yt(r).ra()}async function mm(r){const e=yt(r);for(const t of r.Ta)e.ea(t.mutations)}async function _m(r,e,t){const n=r.Ta.shift(),s=Hi.from(n,e,t);await gu(r,(()=>r.remoteSyncer.applySuccessfulWrite(s))),await Es(r)}async function ym(r,e){e&&yt(r).Y_&&await(async function(n,s){if((function(a){return Xp(a)&&a!==S.ABORTED})(s.code)){const o=n.Ta.shift();yt(n).B_(),await gu(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,s))),await Es(n)}})(r,e),mu(r)&&_u(r)}async function Ic(r,e){const t=U(r);t.asyncQueue.verifyOperationInProgress(),V(jt,"RemoteStore received new credentials");const n=Wt(t);t.Ea.add(3),await fn(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await ws(t)}async function vm(r,e){const t=U(r);e?(t.Ea.delete(2),await ws(t)):e||(t.Ea.add(2),await fn(t),t.Va.set("Unknown"))}function br(r){return r.ma||(r.ma=(function(t,n,s){const o=U(t);return o.sa(),new rm(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(r.datastore,r.asyncQueue,{Zo:lm.bind(null,r),Yo:um.bind(null,r),t_:hm.bind(null,r),J_:dm.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),ro(r)?to(r):r.Va.set("Unknown")):(await r.ma.stop(),pu(r))}))),r.ma}function yt(r){return r.fa||(r.fa=(function(t,n,s){const o=U(t);return o.sa(),new nm(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:gm.bind(null,r),t_:ym.bind(null,r),ta:mm.bind(null,r),na:_m.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Es(r)):(await r.fa.stop(),r.Ta.length>0&&(V(jt,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}class no{constructor(e,t,n,s,o){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=o,this.deferred=new $t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,o){const a=Date.now()+n,u=new no(e,t,a,s,o);return u.start(n),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function so(r,e){if(Je("AsyncQueue",`${e}: ${r}`),yr(r))return new k(S.UNAVAILABLE,`${e}: ${r}`);throw r}class ir{static emptySet(e){return new ir(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||M.comparator(t.key,n.key):(t,n)=>M.comparator(t.key,n.key),this.keyedMap=Ur(),this.sortedSet=new ee(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ir)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,o=n.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new ir;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}class Sc{constructor(){this.ga=new ee(M.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):L(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class pr{constructor(e,t,n,s,o,a,u,h,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,o){const a=[];return t.forEach((u=>{a.push({type:0,doc:u})})),new pr(e,t,ir.emptySet(t),a,n,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}class bm{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class wm{constructor(){this.queries=xc(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const s=U(t),o=s.queries;s.queries=xc(),o.forEach(((a,u)=>{for(const h of u.ba)h.onError(n)}))})(this,new k(S.ABORTED,"Firestore shutting down"))}}function xc(){return new Gt((r=>Ol(r)),gs)}async function Em(r,e){const t=U(r);let n=3;const s=e.query;let o=t.queries.get(s);o?!o.Sa()&&e.Da()&&(n=2):(o=new bm,n=e.Da()?0:1);try{switch(n){case 0:o.wa=await t.onListen(s,!0);break;case 1:o.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=so(a,`Initialization of query '${er(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,o),o.ba.push(e),e.va(t.onlineState),o.wa&&e.Fa(o.wa)&&io(t)}async function Tm(r,e){const t=U(r),n=e.query;let s=3;const o=t.queries.get(n);if(o){const a=o.ba.indexOf(e);a>=0&&(o.ba.splice(a,1),o.ba.length===0?s=e.Da()?0:1:!o.Sa()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Am(r,e){const t=U(r);let n=!1;for(const s of e){const o=s.query,a=t.queries.get(o);if(a){for(const u of a.ba)u.Fa(s)&&(n=!0);a.wa=s}}n&&io(t)}function Im(r,e,t){const n=U(r),s=n.queries.get(e);if(s)for(const o of s.ba)o.onError(t);n.queries.delete(e)}function io(r){r.Ca.forEach((e=>{e.next()}))}var Ai,Pc;(Pc=Ai||(Ai={})).Ma="default",Pc.Cache="cache";class Sm{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new pr(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.Ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=pr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ai.Cache}}class yu{constructor(e){this.key=e}}class vu{constructor(e){this.key=e}}class xm{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=z(),this.mutatedKeys=z(),this.eu=$l(e),this.tu=new ir(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new Sc,s=t?t.tu:this.tu;let o=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,y)=>{const A=s.get(p),P=ms(this.query,y)?y:null,D=!!A&&this.mutatedKeys.has(A.key),O=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let N=!1;A&&P?A.data.isEqual(P.data)?D!==O&&(n.track({type:3,doc:P}),N=!0):this.su(A,P)||(n.track({type:2,doc:P}),N=!0,(h&&this.eu(P,h)>0||d&&this.eu(P,d)<0)&&(u=!0)):!A&&P?(n.track({type:0,doc:P}),N=!0):A&&!P&&(n.track({type:1,doc:A}),N=!0,(h||d)&&(u=!0)),N&&(P?(a=a.add(P),o=O?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),n.track({type:1,doc:p})}return{tu:a,iu:n,Ss:u,mutatedKeys:o}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const o=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort(((p,y)=>(function(P,D){const O=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return L(20277,{Vt:N})}};return O(P)-O(D)})(p.type,y.type)||this.eu(p.doc,y.doc))),this.ou(n),s=s??!1;const u=t&&!s?this._u():[],h=this.Ya.size===0&&this.current&&!s?1:0,d=h!==this.Xa;return this.Xa=h,a.length!==0||d?{snapshot:new pr(this.query,e.tu,o,a,e.mutatedKeys,h===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:u}:{au:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Sc,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=z(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))}));const t=[];return e.forEach((n=>{this.Ya.has(n)||t.push(new vu(n))})),this.Ya.forEach((n=>{e.has(n)||t.push(new yu(n))})),t}cu(e){this.Za=e.ks,this.Ya=z();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return pr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const oo="SyncEngine";class Pm{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cm{constructor(e){this.key=e,this.hu=!1}}class Rm{constructor(e,t,n,s,o,a){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new Gt((u=>Ol(u)),gs),this.Iu=new Map,this.Eu=new Set,this.Ru=new ee(M.comparator),this.Au=new Map,this.Vu=new Qi,this.du={},this.mu=new Map,this.fu=fr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function km(r,e,t=!0){const n=Iu(r);let s;const o=n.Tu.get(e);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.lu()):s=await bu(n,e,t,!0),s}async function Vm(r,e){const t=Iu(r);await bu(t,e,!0,!1)}async function bu(r,e,t,n){const s=await Kg(r.localStore,Ue(e)),o=s.targetId,a=r.sharedClientState.addLocalQueryTarget(o,t);let u;return n&&(u=await Dm(r,e,o,a==="current",s.resumeToken)),r.isPrimaryClient&&t&&du(r.remoteStore,s),u}async function Dm(r,e,t,n,s){r.pu=(y,A,P)=>(async function(O,N,H,K){let Y=N.view.ru(H);Y.Ss&&(Y=await bc(O.localStore,N.query,!1).then((({documents:b})=>N.view.ru(b,Y))));const Ae=K&&K.targetChanges.get(N.targetId),Ce=K&&K.targetMismatches.get(N.targetId)!=null,de=N.view.applyChanges(Y,O.isPrimaryClient,Ae,Ce);return Rc(O,N.targetId,de.au),de.snapshot})(r,y,A,P);const o=await bc(r.localStore,e,!0),a=new xm(e,o.ks),u=a.ru(o.documents),h=dn.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,h);Rc(r,t,d.au);const p=new Pm(e,t,a);return r.Tu.set(e,p),r.Iu.has(t)?r.Iu.get(t).push(e):r.Iu.set(t,[e]),d.snapshot}async function Nm(r,e,t){const n=U(r),s=n.Tu.get(e),o=n.Iu.get(s.targetId);if(o.length>1)return n.Iu.set(s.targetId,o.filter((a=>!gs(a,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Ei(n.localStore,s.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(s.targetId),t&&Zi(n.remoteStore,s.targetId),Ii(n,s.targetId)})).catch(_r)):(Ii(n,s.targetId),await Ei(n.localStore,s.targetId,!0))}async function Mm(r,e){const t=U(r),n=t.Tu.get(e),s=t.Iu.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Zi(t.remoteStore,n.targetId))}async function Om(r,e,t){const n=zm(r);try{const s=await(function(a,u){const h=U(a),d=Z.now(),p=u.reduce(((P,D)=>P.add(D.key)),z());let y,A;return h.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let D=Xe(),O=z();return h.xs.getEntries(P,p).next((N=>{D=N,D.forEach(((H,K)=>{K.isValidDocument()||(O=O.add(H))}))})).next((()=>h.localDocuments.getOverlayedDocuments(P,D))).next((N=>{y=N;const H=[];for(const K of u){const Y=Wp(K,y.get(K.key).overlayedDocument);Y!=null&&H.push(new Ht(K.key,Y,Pl(Y.value.mapValue),Ke.exists(!0)))}return h.mutationQueue.addMutationBatch(P,d,H,u)})).next((N=>{A=N;const H=N.applyToLocalDocumentSet(y,O);return h.documentOverlayCache.saveOverlays(P,N.batchId,H)}))})).then((()=>({batchId:A.batchId,changes:Fl(y)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),(function(a,u,h){let d=a.du[a.currentUser.toKey()];d||(d=new ee(j)),d=d.insert(u,h),a.du[a.currentUser.toKey()]=d})(n,s.batchId,t),await pn(n,s.changes),await Es(n.remoteStore)}catch(s){const o=so(s,"Failed to persist write");t.reject(o)}}async function wu(r,e){const t=U(r);try{const n=await Gg(t.localStore,e);e.targetChanges.forEach(((s,o)=>{const a=t.Au.get(o);a&&(W(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?W(a.hu,14607):s.removedDocuments.size>0&&(W(a.hu,42227),a.hu=!1))})),await pn(t,n,e)}catch(n){await _r(n)}}function Cc(r,e,t){const n=U(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.Tu.forEach(((o,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const h=U(a);h.onlineState=u;let d=!1;h.queries.forEach(((p,y)=>{for(const A of y.ba)A.va(u)&&(d=!0)})),d&&io(h)})(n.eventManager,e),s.length&&n.Pu.J_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function $m(r,e,t){const n=U(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Au.get(e),o=s&&s.key;if(o){let a=new ee(M.comparator);a=a.insert(o,ve.newNoDocument(o,F.min()));const u=z().add(o),h=new vs(F.min(),new Map,new ee(j),a,u);await wu(n,h),n.Ru=n.Ru.remove(o),n.Au.delete(e),ao(n)}else await Ei(n.localStore,e,!1).then((()=>Ii(n,e,t))).catch(_r)}async function Lm(r,e){const t=U(r),n=e.batch.batchId;try{const s=await qg(t.localStore,e);Tu(t,n,null),Eu(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await pn(t,s)}catch(s){await _r(s)}}async function Fm(r,e,t){const n=U(r);try{const s=await(function(a,u){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next((y=>(W(y!==null,37113),p=y.keys(),h.mutationQueue.removeMutationBatch(d,y)))).next((()=>h.mutationQueue.performConsistencyCheck(d))).next((()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u))).next((()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>h.localDocuments.getDocuments(d,p)))}))})(n.localStore,e);Tu(n,e,t),Eu(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await pn(n,s)}catch(s){await _r(s)}}function Eu(r,e){(r.mu.get(e)||[]).forEach((t=>{t.resolve()})),r.mu.delete(e)}function Tu(r,e,t){const n=U(r);let s=n.du[n.currentUser.toKey()];if(s){const o=s.get(e);o&&(t?o.reject(t):o.resolve(),s=s.remove(e)),n.du[n.currentUser.toKey()]=s}}function Ii(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Iu.get(e))r.Tu.delete(n),t&&r.Pu.yu(n,t);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((n=>{r.Vu.containsKey(n)||Au(r,n)}))}function Au(r,e){r.Eu.delete(e.path.canonicalString());const t=r.Ru.get(e);t!==null&&(Zi(r.remoteStore,t),r.Ru=r.Ru.remove(e),r.Au.delete(t),ao(r))}function Rc(r,e,t){for(const n of t)n instanceof yu?(r.Vu.addReference(n.key,e),Um(r,n)):n instanceof vu?(V(oo,"Document no longer in limbo: "+n.key),r.Vu.removeReference(n.key,e),r.Vu.containsKey(n.key)||Au(r,n.key)):L(19791,{wu:n})}function Um(r,e){const t=e.key,n=t.path.canonicalString();r.Ru.get(t)||r.Eu.has(n)||(V(oo,"New document in limbo: "+t),r.Eu.add(n),ao(r))}function ao(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const t=new M(J.fromString(e)),n=r.fu.next();r.Au.set(n,new Cm(t)),r.Ru=r.Ru.insert(t,n),du(r.remoteStore,new lt(Ue(qi(t.path)),n,"TargetPurposeLimboResolution",ds.ce))}}async function pn(r,e,t){const n=U(r),s=[],o=[],a=[];n.Tu.isEmpty()||(n.Tu.forEach(((u,h)=>{a.push(n.pu(h,e,t).then((d=>{if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:t?.targetChanges.get(h.targetId)?.current;n.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(d){s.push(d);const p=Ji.Es(h.targetId,d);o.push(p)}})))})),await Promise.all(a),n.Pu.J_(s),await(async function(h,d){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(y=>x.forEach(d,(A=>x.forEach(A.Ts,(P=>p.persistence.referenceDelegate.addReference(y,A.targetId,P))).next((()=>x.forEach(A.Is,(P=>p.persistence.referenceDelegate.removeReference(y,A.targetId,P)))))))))}catch(y){if(!yr(y))throw y;V(Xi,"Failed to update sequence numbers: "+y)}for(const y of d){const A=y.targetId;if(!y.fromCache){const P=p.vs.get(A),D=P.snapshotVersion,O=P.withLastLimboFreeSnapshotVersion(D);p.vs=p.vs.insert(A,O)}}})(n.localStore,o))}async function Bm(r,e){const t=U(r);if(!t.currentUser.isEqual(e)){V(oo,"User change. New user:",e.toKey());const n=await cu(t.localStore,e);t.currentUser=e,(function(o,a){o.mu.forEach((u=>{u.forEach((h=>{h.reject(new k(S.CANCELLED,a))}))})),o.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await pn(t,n.Ns)}}function jm(r,e){const t=U(r),n=t.Au.get(e);if(n&&n.hu)return z().add(n.key);{let s=z();const o=t.Iu.get(e);if(!o)return s;for(const a of o){const u=t.Tu.get(a);s=s.unionWith(u.view.nu)}return s}}function Iu(r){const e=U(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=wu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jm.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$m.bind(null,e),e.Pu.J_=Am.bind(null,e.eventManager),e.Pu.yu=Im.bind(null,e.eventManager),e}function zm(r){const e=U(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Lm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Fm.bind(null,e),e}class os{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return zg(this.persistence,new Ug,e.initialUser,this.serializer)}Cu(e){return new au(Yi.Vi,this.serializer)}Du(e){return new Yg}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}os.provider={build:()=>new os};class qm extends os{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){W(this.persistence.referenceDelegate instanceof ss,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ig(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?Te.withCacheSize(this.cacheSizeBytes):Te.DEFAULT;return new au((n=>ss.Vi(n,t)),this.serializer)}}class Si{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>Cc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=Bm.bind(null,this.syncEngine),await vm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new wm})()}createDatastore(e){const t=bs(e.databaseInfo.databaseId),n=tm(e.databaseInfo);return om(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,s,o,a,u){return new cm(n,s,o,a,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>Cc(this.syncEngine,t,0)),(function(){return Tc.v()?new Tc:new Jg})())}createSyncEngine(e,t){return(function(s,o,a,u,h,d,p){const y=new Rm(s,o,a,u,h,d);return p&&(y.gu=!0),y})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=U(t);V(jt,"RemoteStore shutting down."),n.Ea.add(5),await fn(n),n.Aa.shutdown(),n.Va.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Si.provider={build:()=>new Si};class Gm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Je("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}const vt="FirestoreClient";class Hm{constructor(e,t,n,s,o){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=s,this.user=ye.UNAUTHENTICATED,this.clientId=Li.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async a=>{V(vt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(n,(a=>(V(vt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new $t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=so(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function si(r,e){r.asyncQueue.verifyOperationInProgress(),V(vt,"Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener((async s=>{n.isEqual(s)||(await cu(e.localStore,s),n=s)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function kc(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Wm(r);V(vt,"Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((n=>Ic(e.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,s)=>Ic(e.remoteStore,s))),r._onlineComponents=e}async function Wm(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){V(vt,"Using user provided OfflineComponentProvider");try{await si(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;lr("Error using user provided cache. Falling back to memory cache: "+t),await si(r,new os)}}else V(vt,"Using default OfflineComponentProvider"),await si(r,new qm(void 0));return r._offlineComponents}async function Su(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(V(vt,"Using user provided OnlineComponentProvider"),await kc(r,r._uninitializedComponentsProvider._online)):(V(vt,"Using default OnlineComponentProvider"),await kc(r,new Si))),r._onlineComponents}function Km(r){return Su(r).then((e=>e.syncEngine))}async function Vc(r){const e=await Su(r),t=e.eventManager;return t.onListen=km.bind(null,e.syncEngine),t.onUnlisten=Nm.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Vm.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Mm.bind(null,e.syncEngine),t}function Qm(r,e,t,n){const s=new Gm(n),o=new Sm(e,s,t);return r.asyncQueue.enqueueAndForget((async()=>Em(await Vc(r),o))),()=>{s.Nu(),r.asyncQueue.enqueueAndForget((async()=>Tm(await Vc(r),o)))}}function Ym(r,e){const t=new $t;return r.asyncQueue.enqueueAndForget((async()=>Om(await Km(r),e,t))),t.promise}function xu(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}const Jm="ComponentProvider",Dc=new Map;function Xm(r,e,t,n,s){return new pp(r,e,t,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,xu(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,n)}const Pu="firestore.googleapis.com",Nc=!0;class Mc{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Pu,this.ssl=Nc}else this.host=e.host,this.ssl=e.ssl??Nc;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ou;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Tg)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}np("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xu(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,s){return n.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ts{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mc({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mc(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new Wf;switch(n.type){case"firstParty":return new Jf(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=Dc.get(t);n&&(V(Jm,"Removing Datastore"),Dc.delete(t),n.terminate())})(this),Promise.resolve()}}function Zm(r,e,t,n={}){r=Gr(r,Ts);const s=Mi(e),o=r._getSettings(),a={...o,emulatorOptions:r._getEmulatorOptions()},u=`${e}:${t}`;s&&(yd(`https://${u}`),Ed("Firestore",!0)),o.host!==Pu&&o.host!==u&&lr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h={...o,host:u,ssl:s,emulatorOptions:n};if(!Kn(h,a)&&(r._setSettings(h),n.mockUserToken)){let d,p;if(typeof n.mockUserToken=="string")d=n.mockUserToken,p=ye.MOCK_USER;else{d=vd(n.mockUserToken,r._app?.options.projectId);const y=n.mockUserToken.sub||n.mockUserToken.user_id;if(!y)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ye(y)}r._authCredentials=new Kf(new ml(d,p))}}class It{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new It(this.firestore,e,this._query)}}class ae{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ft(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ae(this.firestore,e,this._key)}toJSON(){return{type:ae._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(un(t,ae._jsonSchema))return new ae(e,n||null,new M(J.fromString(t.referencePath)))}}ae._jsonSchemaVersion="firestore/documentReference/1.0",ae._jsonSchema={type:ie("string",ae._jsonSchemaVersion),referencePath:ie("string")};class ft extends It{constructor(e,t,n){super(e,t,qi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ae(this.firestore,null,new M(e))}withConverter(e){return new ft(this.firestore,e,this._path)}}function Oc(r,e,...t){if(r=Ut(r),_l("collection","path",e),r instanceof Ts){const n=J.fromString(e,...t);return Wa(n),new ft(r,null,n)}{if(!(r instanceof ae||r instanceof ft))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return Wa(n),new ft(r.firestore,null,n)}}function e_(r,e,...t){if(r=Ut(r),arguments.length===1&&(e=Li.newId()),_l("doc","path",e),r instanceof Ts){const n=J.fromString(e,...t);return Ha(n),new ae(r,null,new M(n))}{if(!(r instanceof ae||r instanceof ft))throw new k(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(J.fromString(e,...t));return Ha(n),new ae(r.firestore,r instanceof ft?r.converter:null,new M(n))}}const $c="AsyncQueue";class Lc{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new uu(this,"async_queue_retry"),this._c=()=>{const n=ni();n&&V($c,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=ni();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ni();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new $t;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!yr(e))throw e;V($c,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Je("INTERNAL UNHANDLED ERROR: ",Fc(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=no.createAndSchedule(this,e,t,n,(o=>this.hc(o)));return this.tc.push(s),s}uc(){this.nc&&L(47125,{Pc:Fc(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Fc(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class as extends Ts{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Lc,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Lc(e),this._firestoreClient=void 0,await e}}}function t_(r,e){const t=typeof r=="object"?r:Df(),n=typeof r=="string"?r:Xn,s=Pf(t,"firestore").getImmediate({identifier:n});if(!s._initialized){const o=md("firestore");o&&Zm(s,...o)}return s}function Cu(r){if(r._terminated)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||r_(r),r._firestoreClient}function r_(r){const e=r._freezeSettings(),t=Xm(r._databaseId,r._app?.options.appId||"",r._persistenceKey,r._app?.options.apiKey,e);r._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new Hm(r._authCredentials,r._appCheckCredentials,r._queue,t,r._componentsProvider&&(function(s){const o=s?._online.build();return{_offline:s?._offline.build(o),_online:o}})(r._componentsProvider))}class xe{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xe(ge.fromBase64String(e))}catch(t){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xe(ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xe._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(un(e,xe._jsonSchema))return xe.fromBase64String(e.bytes)}}xe._jsonSchemaVersion="firestore/bytes/1.0",xe._jsonSchema={type:ie("string",xe._jsonSchemaVersion),bytes:ie("string")};class Ru{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}class co{constructor(e){this._methodName=e}}class je{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return j(this._lat,e._lat)||j(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:je._jsonSchemaVersion}}static fromJSON(e){if(un(e,je._jsonSchema))return new je(e.latitude,e.longitude)}}je._jsonSchemaVersion="firestore/geoPoint/1.0",je._jsonSchema={type:ie("string",je._jsonSchemaVersion),latitude:ie("number"),longitude:ie("number")};class ke{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,s){if(n.length!==s.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==s[o])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ke._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(un(e,ke._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new ke(e.vectorValues);throw new k(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ke._jsonSchemaVersion="firestore/vectorValue/1.0",ke._jsonSchema={type:ie("string",ke._jsonSchemaVersion),vectorValues:ie("object")};const n_=/^__.*__$/;class s_{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ht(e,this.data,this.fieldMask,t,this.fieldTransforms):new hn(e,this.data,t,this.fieldTransforms)}}function ku(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw L(40011,{dataSource:r})}}class lo{constructor(e,t,n,s,o,a){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,o===void 0&&this.validatePath(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new lo({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return cs(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(ku(this.dataSource)&&n_.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class i_{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||bs(e)}createContext(e,t,n,s=!1){return new lo({dataSource:e,methodName:t,targetDoc:n,path:pe.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vu(r){const e=r._freezeSettings(),t=bs(r._databaseId);return new i_(r._databaseId,!!e.ignoreUndefinedProperties,t)}function o_(r,e,t,n,s,o={}){const a=r.createContext(o.merge||o.mergeFields?2:0,e,t,s);Mu("Data must be an object, but it was:",a,n);const u=Du(n,a);let h,d;if(o.merge)h=new Re(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const y of o.mergeFields){const A=As(e,y,t);if(!a.contains(A))throw new k(S.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);u_(p,A)||p.push(A)}h=new Re(p),d=a.fieldTransforms.filter((y=>h.covers(y.field)))}else h=null,d=a.fieldTransforms;return new s_(new Se(u),h,d)}class uo extends co{_toFieldTransform(e){return new zp(e.path,new on)}isEqual(e){return e instanceof uo}}function a_(r,e,t,n=!1){return ho(t,r.createContext(n?4:3,e))}function ho(r,e){if(Nu(r=Ut(r)))return Mu("Unsupported field value:",e,r),Du(r,e);if(r instanceof co)return(function(n,s){if(!ku(s.dataSource))throw s.createError(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.createError(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(s);o&&s.fieldTransforms.push(o)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(n,s){const o=[];let a=0;for(const u of n){let h=ho(u,s.childContextForArray(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}})(r,e)}return(function(n,s){if((n=Ut(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Up(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=Z.fromDate(n);return{timestampValue:ns(s.serializer,o)}}if(n instanceof Z){const o=new Z(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:ns(s.serializer,o)}}if(n instanceof je)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof xe)return{bytesValue:Xl(s.serializer,n._byteString)};if(n instanceof ae){const o=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(o))throw s.createError(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ki(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof ke)return(function(a,u){const h=a instanceof ke?a.toArray():a;return{mapValue:{fields:{[Sl]:{stringValue:xl},[Zn]:{arrayValue:{values:h.map((p=>{if(typeof p!="number")throw u.createError("VectorValues must only contain numeric values.");return Gi(u.serializer,p)}))}}}}}})(n,s);if(iu(n))return n._toProto(s.serializer);throw s.createError(`Unsupported field value: ${hs(n)}`)})(r,e)}function Du(r,e){const t={};return bl(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):qt(r,((n,s)=>{const o=ho(s,e.childContextForField(n));o!=null&&(t[n]=o)})),{mapValue:{fields:t}}}function Nu(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof Z||r instanceof je||r instanceof xe||r instanceof ae||r instanceof co||r instanceof ke||iu(r))}function Mu(r,e,t){if(!Nu(t)||!yl(t)){const n=hs(t);throw n==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+n)}}function As(r,e,t){if((e=Ut(e))instanceof Ru)return e._internalPath;if(typeof e=="string")return l_(r,e);throw cs("Field path arguments must be of type string or ",r,!1,void 0,t)}const c_=new RegExp("[~\\*/\\[\\]]");function l_(r,e,t){if(e.search(c_)>=0)throw cs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Ru(...e.split("."))._internalPath}catch{throw cs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function cs(r,e,t,n,s){const o=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${n}`),a&&(h+=` in document ${s}`),h+=")"),new k(S.INVALID_ARGUMENT,u+r+h)}function u_(r,e){return r.some((t=>t.isEqual(e)))}class h_{convertValue(e,t="none"){switch(_t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return re(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw L(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return qt(e,((s,o)=>{n[s]=this.convertValue(o,t)})),n}convertVectorValue(e){const t=e.fields?.[Zn].arrayValue?.values?.map((n=>re(n.doubleValue)));return new ke(t)}convertGeoPoint(e){return new je(re(e.latitude),re(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ps(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(tn(e));default:return null}}convertTimestamp(e){const t=gt(e);return new Z(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=J.fromString(e);W(su(n),9688,{name:e});const s=new rn(n.get(1),n.get(3)),o=new M(n.popFirst(5));return s.isEqual(t)||Je(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),o}}class Ou extends h_{constructor(e){super(),this.firestore=e}convertBytes(e){return new xe(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ae(this.firestore,null,t)}}function d_(){return new uo("serverTimestamp")}const Uc="@firebase/firestore",Bc="4.10.0";function jc(r){return(function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const o of n)if(o in s&&typeof s[o]=="function")return!0;return!1})(r,["next","error","complete"])}class $u{constructor(e,t,n,s,o){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new ae(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new f_(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(As("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class f_ extends $u{data(){return super.data()}}function p_(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new k(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fo{}class po extends fo{}function g_(r,e,...t){let n=[];e instanceof fo&&n.push(e),n=n.concat(t),(function(o){const a=o.filter((h=>h instanceof mo)).length,u=o.filter((h=>h instanceof go)).length;if(a>1||a>0&&u>0)throw new k(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const s of n)r=s._apply(r);return r}class go extends po{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new go(e,t,n)}_apply(e){const t=this._parse(e);return Lu(e._query,t),new It(e.firestore,e.converter,_i(e._query,t))}_parse(e){const t=Vu(e.firestore);return(function(o,a,u,h,d,p,y){let A;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new k(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){qc(y,p);const D=[];for(const O of y)D.push(zc(h,o,O));A={arrayValue:{values:D}}}else A=zc(h,o,y)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||qc(y,p),A=a_(u,a,y,p==="in"||p==="not-in");return se.create(d,p,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class mo extends fo{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mo(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Ne.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Lu(a,h),a=_i(a,h)})(e._query,t),new It(e.firestore,e.converter,_i(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class _o extends po{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new _o(e,t)}_apply(e){const t=(function(s,o,a){if(s.startAt!==null)throw new k(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new k(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new sn(o,a)})(e._query,this._field,this._direction);return new It(e.firestore,e.converter,Vp(e._query,t))}}function m_(r,e="asc"){const t=e,n=As("orderBy",r);return _o._create(n,t)}class yo extends po{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new yo(e,t,n)}_apply(e){return new It(e.firestore,e.converter,ts(e._query,this._limit,this._limitType))}}function __(r){return yo._create("limit",r,"F")}function zc(r,e,t){if(typeof(t=Ut(t))=="string"){if(t==="")throw new k(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ml(e)&&t.indexOf("/")!==-1)throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(J.fromString(t));if(!M.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return tc(r,new M(n))}if(t instanceof ae)return tc(r,t._key);throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${hs(t)}.`)}function qc(r,e){if(!Array.isArray(r)||r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Lu(r,e){const t=(function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null})(r.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function y_(r,e,t){let n;return n=r?r.toFirestore(e):e,n}class jr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lt extends $u{constructor(e,t,n,s,o,a){super(e,t,n,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=o}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new qn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(As("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Lt._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Lt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Lt._jsonSchema={type:ie("string",Lt._jsonSchemaVersion),bundleSource:ie("string","DocumentSnapshot"),bundleName:ie("string"),bundle:ie("string")};class qn extends Lt{data(e={}){return super.data(e)}}class or{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new jr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new qn(this._firestore,this._userDataWriter,n.key,n,new jr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const h=new qn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new jr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>o||u.type!==3)).map((u=>{const h=new qn(s._firestore,s._userDataWriter,u.doc.key,u.doc,new jr(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:v_(u.type),doc:h,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=or._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Li.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],s=[];return this.docs.forEach((o=>{o._document!==null&&(t.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),s.push(o.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function v_(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return L(61501,{type:r})}}or._jsonSchemaVersion="firestore/querySnapshot/1.0",or._jsonSchema={type:ie("string",or._jsonSchemaVersion),bundleSource:ie("string","QuerySnapshot"),bundleName:ie("string"),bundle:ie("string")};function b_(r,e){const t=Gr(r.firestore,as),n=e_(r),s=y_(r.converter,e),o=Vu(r.firestore);return E_(t,[o_(o,"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,Ke.exists(!1))]).then((()=>n))}function w_(r,...e){r=Ut(r);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||jc(e[n])||(t=e[n++]);const s={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(jc(e[n])){const d=e[n];e[n]=d.next?.bind(d),e[n+1]=d.error?.bind(d),e[n+2]=d.complete?.bind(d)}let o,a,u;if(r instanceof ae)a=Gr(r.firestore,as),u=qi(r._key.path),o={next:d=>{e[n]&&e[n](T_(a,r,d))},error:e[n+1],complete:e[n+2]};else{const d=Gr(r,It);a=Gr(d.firestore,as),u=d._query;const p=new Ou(a);o={next:y=>{e[n]&&e[n](new or(a,p,d,y))},error:e[n+1],complete:e[n+2]},p_(r._query)}const h=Cu(a);return Qm(h,u,s,o)}function E_(r,e){const t=Cu(r);return Ym(t,e)}function T_(r,e,t){const n=t.docs.get(e._key),s=new Ou(r);return new Lt(r,s,e._key,n,new jr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){Hf(Vf),Yn(new Xr("firestore",((n,{instanceIdentifier:s,options:o})=>{const a=n.getProvider("app").getImmediate(),u=new as(new Qf(n.getProvider("auth-internal")),new Xf(a,n.getProvider("app-check-internal")),gp(a,s),a);return o={useFetchStreams:t,...o},u._setSettings(o),u}),"PUBLIC").setMultipleInstances(!0)),nr(Uc,Bc,e),nr(Uc,Bc,"esm2020")})();const A_={apiKey:"AIzaSyC-IvLmJRR56ymxnf2-KfVC3IVtF9BbpcU",authDomain:"calvinbrowngithub-site.firebaseapp.com",projectId:"calvinbrowngithub-site",storageBucket:"calvinbrowngithub-site.firebasestorage.app",messagingSenderId:"334598369108",appId:"1:334598369108:web:0866011b106087e21b62c1",measurementId:"G-L0GS4TQS0N"},I_=ol(A_),Gc=t_(I_);var S_=Object.defineProperty,x_=Object.getOwnPropertyDescriptor,tt=(r,e,t,n)=>{for(var s=n>1?void 0:n?x_(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=(n?a(e,t,s):a(s))||s);return n&&s&&S_(e,t,s),s};let Me=class extends Pe{constructor(){super(...arguments),this.postId="",this.comments=[],this.name="",this.message="",this.isSubmitting=!1,this.error="",this.success="",this.honeypot="",this.unsubscribe=null}connectedCallback(){super.connectedCallback(),console.log("BlogComments connected, postId:",this.postId),this.postId&&this._loadComments()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe&&this.unsubscribe()}updated(r){r.has("postId")&&this.postId&&(this.unsubscribe&&this.unsubscribe(),this._loadComments())}_loadComments(){const r=g_(Oc(Gc,"posts",this.postId,"comments"),m_("timestamp","desc"),__(50));this.unsubscribe=w_(r,e=>{this.comments=e.docs.map(t=>({id:t.id,...t.data()}))},e=>{console.error("Error loading comments:",e),this.error="Failed to load comments. Please try again later."})}async _handleSubmit(r){if(r.preventDefault(),this.honeypot){this.success="Thanks for your comment!";return}if(!this.postId){this.error="Invalid post";return}const e=this.name.trim(),t=this.message.trim();if(!e||!t){this.error="Please fill in both fields";return}if(e.length>50){this.error="Name is too long (max 50 characters)";return}if(t.length>500){this.error="Message is too long (max 500 characters)";return}this.isSubmitting=!0,this.error="",this.success="",console.log("Attempting to post comment:",{postId:this.postId,name:e,message:t});try{console.log("Writing to path:",`posts/${this.postId}/comments`);const n=await b_(Oc(Gc,"posts",this.postId,"comments"),{name:e,message:t,timestamp:d_()});console.log("Comment posted with ID:",n.id),this.name="",this.message="",this.success="Comment posted!",setTimeout(()=>{this.success=""},3e3)}catch(n){console.error("Error adding comment:",n),n instanceof Error?this.error=`Failed to submit: ${n.message}`:this.error="Failed to submit. Please try again."}finally{this.isSubmitting=!1}}_formatDate(r){if(!r)return"Just now";const e=r.toDate(),t=new Date,n=t.getTime()-e.getTime(),s=Math.floor(n/6e4),o=Math.floor(n/36e5),a=Math.floor(n/864e5);return s<1?"Just now":s<60?`${s}m ago`:o<24?`${o}h ago`:a<7?`${a}d ago`:e.toLocaleDateString("en-US",{month:"short",day:"numeric",year:e.getFullYear()!==t.getFullYear()?"numeric":void 0})}render(){return R`
      <div class="comments-section">
        <div class="header">
          <h3>
            <span class="icon">💬</span>
            Comments (${this.comments.length})
          </h3>
        </div>

        <form class="form" @submit=${this._handleSubmit}>
          <!-- Honeypot field - hidden from real users -->
          <input
            type="text"
            name="website"
            class="honeypot"
            tabindex="-1"
            autocomplete="off"
            .value=${this.honeypot}
            @input=${r=>this.honeypot=r.target.value}
          />

          <div class="form-row">
            <input
              type="text"
              placeholder="Your name"
              .value=${this.name}
              @input=${r=>this.name=r.target.value}
              ?disabled=${this.isSubmitting}
              maxlength="50"
              class="input name-input"
            />
          </div>

          <div class="form-row">
            <textarea
              placeholder="Write a comment..."
              .value=${this.message}
              @input=${r=>this.message=r.target.value}
              ?disabled=${this.isSubmitting}
              maxlength="500"
              rows="3"
              class="input message-input"
            ></textarea>
          </div>

          <div class="form-footer">
            <span class="char-count">${this.message.length}/500</span>
            <button type="submit" ?disabled=${this.isSubmitting} class="submit-btn">
              ${this.isSubmitting?"Posting...":"Post Comment"}
            </button>
          </div>

          ${this.error?R`<div class="error">${this.error}</div>`:""}
          ${this.success?R`<div class="success">${this.success}</div>`:""}
        </form>

        <div class="comments-list">
          ${this.comments.length===0?R`
            <div class="empty">
              <p>No comments yet. Be the first to comment!</p>
            </div>
          `:this.comments.map(r=>R`
            <div class="comment">
              <div class="comment-header">
                <span class="comment-name">${r.name}</span>
                <span class="comment-date">${this._formatDate(r.timestamp)}</span>
              </div>
              <p class="comment-message">${r.message}</p>
            </div>
          `)}
        </div>
      </div>
    `}};Me.styles=bt`
    :host {
      display: block;
    }

    .comments-section {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .header {
      margin-bottom: 1.5rem;
    }

    .header h3 {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 0;
      font-size: 1.25rem;
    }

    .icon {
      font-size: 1.1rem;
    }

    .form {
      margin-bottom: 2rem;
    }

    .honeypot {
      position: absolute;
      left: -9999px;
      opacity: 0;
      pointer-events: none;
    }

    .form-row {
      margin-bottom: 1rem;
    }

    .input {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      font-family: inherit;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 8px;
      color: inherit;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }

    .input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    }

    .input::placeholder {
      color: #666;
    }

    .message-input {
      resize: vertical;
      min-height: 80px;
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .char-count {
      font-size: 0.85rem;
      color: #666;
    }

    .submit-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight: 600;
      color: white;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .submit-btn:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .error {
      margin-top: 1rem;
      padding: 0.75rem 1rem;
      background: rgba(231, 76, 60, 0.1);
      border: 1px solid rgba(231, 76, 60, 0.3);
      border-radius: 8px;
      color: #e74c3c;
      font-size: 0.9rem;
    }

    .success {
      margin-top: 1rem;
      padding: 0.75rem 1rem;
      background: rgba(46, 204, 113, 0.1);
      border: 1px solid rgba(46, 204, 113, 0.3);
      border-radius: 8px;
      color: #2ecc71;
      font-size: 0.9rem;
    }

    .comments-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .empty {
      text-align: center;
      padding: 2rem;
      color: #666;
    }

    .comment {
      padding: 1rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 10px;
      transition: all 0.2s ease;
    }

    .comment:hover {
      background: rgba(255, 255, 255, 0.05);
    }

    .comment-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .comment-name {
      font-weight: 600;
      color: #667eea;
    }

    .comment-date {
      font-size: 0.85rem;
      color: #666;
    }

    .comment-message {
      margin: 0;
      color: #aaa;
      line-height: 1.6;
      white-space: pre-wrap;
      word-break: break-word;
    }

    @media (prefers-color-scheme: light) {
      .comments-section {
        border-color: rgba(0, 0, 0, 0.1);
      }

      .input {
        background: white;
        border-color: rgba(0, 0, 0, 0.15);
        color: #333;
      }

      .input::placeholder {
        color: #999;
      }

      .char-count {
        color: #888;
      }

      .comment {
        background: rgba(0, 0, 0, 0.02);
        border-color: rgba(0, 0, 0, 0.08);
      }

      .comment:hover {
        background: rgba(0, 0, 0, 0.04);
      }

      .comment-name {
        color: #5a67d8;
      }

      .comment-date {
        color: #888;
      }

      .comment-message {
        color: #555;
      }

      .empty {
        color: #888;
      }
    }

    @media (max-width: 600px) {
      .guestbook {
        padding: 1.5rem;
      }

      .form-footer {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
      }

      .char-count {
        text-align: right;
      }

      .submit-btn {
        width: 100%;
      }
    }
  `;tt([Xc({type:String})],Me.prototype,"postId",2);tt([$()],Me.prototype,"comments",2);tt([$()],Me.prototype,"name",2);tt([$()],Me.prototype,"message",2);tt([$()],Me.prototype,"isSubmitting",2);tt([$()],Me.prototype,"error",2);tt([$()],Me.prototype,"success",2);tt([$()],Me.prototype,"honeypot",2);Me=tt([wt("blog-comments")],Me);var P_=Object.getOwnPropertyDescriptor,C_=(r,e,t,n)=>{for(var s=n>1?void 0:n?P_(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(s=a(s)||s);return s};let xi=class extends Pe{constructor(){super(...arguments),this.selectedPost=null,this.blogPosts=jh,this.currentView="home",this.games=[{id:"snake",name:"Snake",description:"Classic snake game. Eat food, grow longer, avoid walls!",icon:"🐍",color:"#00ADD8"},{id:"solitaire",name:"Solitaire",description:"Classic Klondike solitaire card game.",icon:"🃏",color:"#e74c3c"},{id:"tictactoe",name:"Tic Tac Toe",description:"Challenge an AI opponent!",icon:"⭕",color:"#9b59b6"},{id:"checkers",name:"Checkers",description:"Classic checkers against an AI opponent!",icon:"🔴",color:"#e67e22"},{id:"connectfour",name:"Connect Four",description:"Drop pieces and connect 4 to win!",icon:"🔵",color:"#3498db"},{id:"flappybird",name:"Flappy Bird",description:"Tap to flap and dodge the pipes!",icon:"🐤",color:"#f1c40f"}],this._handleHashChange=()=>{this._checkUrlHash()},this.repos=[{name:"warp-prometheus",url:"https://github.com/calvinbrown085/warp-prometheus",description:"Prometheus metrics extension for Rust's Warp library",language:"Rust",languageColor:"#dea584"},{name:"us-state-info-rs",url:"https://github.com/calvinbrown085/us-state-info-rs",description:"Rust library for getting information about the states of the United States",language:"Rust",languageColor:"#dea584"}]}connectedCallback(){super.connectedCallback(),this._checkUrlHash(),window.addEventListener("hashchange",this._handleHashChange)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("hashchange",this._handleHashChange)}_checkUrlHash(){const r=window.location.hash.slice(1);if(r==="games/snake"){this.currentView="game-snake",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(r==="games/solitaire"){this.currentView="game-solitaire",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(r==="games/tictactoe"){this.currentView="game-tictactoe",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(r==="games/checkers"){this.currentView="game-checkers",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(r==="games/connectfour"){this.currentView="game-connectfour",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(r==="games/flappybird"){this.currentView="game-flappybird",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(r==="games"){this.currentView="games",this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"});return}if(r){const e=this.blogPosts.find(t=>t.id===r);if(e){this.currentView="home",this.selectedPost=e,this.requestUpdate(),this.updateComplete.then(()=>{this.shadowRoot?.querySelector(".blog")?.scrollIntoView({behavior:"smooth"})});return}}this.currentView="home",this.selectedPost=null,this.requestUpdate()}_navigateTo(r){if(r==="home")window.history.pushState(null,"",window.location.pathname),this.currentView="home";else if(r==="games")window.history.pushState(null,"","#games"),this.currentView="games";else if(r.startsWith("game-")){const e=r.replace("game-","");window.history.pushState(null,"",`#games/${e}`),this.currentView=r}this.selectedPost=null,this.requestUpdate(),window.scrollTo({top:0,behavior:"smooth"})}render(){switch(this.currentView){case"games":return this._renderGamesHub();case"game-snake":return this._renderGamePage("snake");case"game-solitaire":return this._renderGamePage("solitaire");case"game-tictactoe":return this._renderGamePage("tictactoe");case"game-checkers":return this._renderGamePage("checkers");case"game-connectfour":return this._renderGamePage("connectfour");case"game-flappybird":return this._renderGamePage("flappybird");default:return this._renderHomePage()}}_renderGamesHub(){return R`
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
          ${this.games.map(r=>R`
            <div class="game-card" @click=${()=>this._navigateTo(`game-${r.id}`)}>
              <div class="game-card-icon" style="background: ${r.color}">
                <span>${r.icon}</span>
              </div>
              <div class="game-card-content">
                <h3>${r.name}</h3>
                <p>${r.description}</p>
              </div>
              <div class="game-card-arrow">→</div>
            </div>
          `)}
        </section>
      </div>
    `}_renderGamePage(r){const e=this.games.find(t=>t.id===r);return e?R`
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
          ${r==="snake"?R`<snake-game></snake-game>`:""}
          ${r==="solitaire"?R`<solitaire-game></solitaire-game>`:""}
          ${r==="tictactoe"?R`<tic-tac-toe-game></tic-tac-toe-game>`:""}
          ${r==="checkers"?R`<checkers-game></checkers-game>`:""}
          ${r==="connectfour"?R`<connect-four-game></connect-four-game>`:""}
          ${r==="flappybird"?R`<flappy-bird-game></flappy-bird-game>`:""}
        </section>
      </div>
    `:R`<p>Game not found</p>`}_renderHomePage(){return R`
      <div class="container">
        <!-- Hero Section -->
        <section class="hero">
          <div class="profile-picture">
            <img src=${Bh} alt="Calvin Brown" class="avatar-image" />
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
            ${this.repos.map(r=>R`
              <a href=${r.url} target="_blank" rel="noopener noreferrer" class="repo-card">
                <div class="repo-header">
                  <svg viewBox="0 0 16 16" fill="currentColor" class="repo-icon">
                    <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"/>
                  </svg>
                  <span class="repo-name">${r.name}</span>
                </div>
                <p class="repo-description">${r.description}</p>
                <div class="repo-footer">
                  <span class="language">
                    <span class="language-dot" style="background-color: ${r.languageColor}"></span>
                    ${r.language}
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
    `}_renderPostList(){return R`
      <div class="blog-grid">
        ${this.blogPosts.map(r=>R`
          <article class="blog-card" @click=${()=>this._openPost(r)}>
            <div class="blog-header">
              <span class="blog-date">${this._formatDate(r.date)}</span>
              <div class="blog-tags">
                ${r.tags.map(e=>R`<span class="tag">${e}</span>`)}
              </div>
            </div>
            <h3 class="blog-title">${r.title}</h3>
            <p class="blog-summary">${r.summary}</p>
            <span class="read-more">Read more →</span>
          </article>
        `)}
        
        <article class="blog-card add-more">
          <p>More posts coming soon...</p>
        </article>
      </div>
    `}_renderFullPost(){const r=this.selectedPost;return R`
      <div class="full-post">
        <button class="back-button" @click=${this._closePost}>
          ← Back to all posts
        </button>
        <article class="post-content">
          <div class="post-meta">
            <span class="blog-date">${this._formatDate(r.date)}</span>
            <div class="blog-tags">
              ${r.tags.map(e=>R`<span class="tag">${e}</span>`)}
            </div>
          </div>
          <div .innerHTML=${r.content}></div>
        </article>
        <blog-comments postId=${r.id}></blog-comments>
      </div>
    `}_openPost(r){this.selectedPost=r,window.history.pushState(null,"",`#${r.id}`),this.requestUpdate(),this.shadowRoot?.querySelector(".blog")?.scrollIntoView({behavior:"smooth"})}_closePost(){this.selectedPost=null,window.history.pushState(null,"",window.location.pathname),this.requestUpdate()}_formatDate(r){return new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}};xi.styles=bt`
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
  `;xi=C_([wt("my-element")],xi);
