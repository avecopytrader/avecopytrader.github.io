import{b1 as v,b2 as p,b3 as B,b4 as lt,b5 as J,b6 as ct,b7 as dt,b8 as u,b9 as ut,ba as ft,bb as ht,bc as j,bd as pt,be as $,bf as U,bg as gt,bh as mt,bi as X,bj as vt,bk as wt,bl as N,bm as Et,c as yt,an as _t,bn as bt,t as O,bo as Tt,g as At,bp as Rt,d as St,f as w,aS as xt,aT as Pt,aV as Ot,T as Ct,bq as Lt,L as Ut,n as It,j as Ft,s as A,br as Q,a3 as b,a4 as Nt,bs as kt,aX as k,bt as G}from"./index-1f7c36f7.js";const m=new p(dt),S={},Y=v.from(0),tt=v.from(-1);function et(n,t,e,r){const i={fault:t,operation:e};return r!==void 0&&(i.value=r),m.throwError(n,p.errors.NUMERIC_FAULT,i)}let x="0";for(;x.length<256;)x+=x;function D(n){if(typeof n!="number")try{n=v.from(n).toNumber()}catch(t){}return typeof n=="number"&&n>=0&&n<=256&&!(n%1)?"1"+x.substring(0,n):m.throwArgumentError("invalid decimal size","decimals",n)}function C(n,t){t==null&&(t=0);const e=D(t);n=v.from(n);const r=n.lt(Y);r&&(n=n.mul(tt));let i=n.mod(e).toString();for(;i.length<e.length-1;)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];const a=n.div(e).toString();return e.length===1?n=a:n=a+"."+i,r&&(n="-"+n),n}function _(n,t){t==null&&(t=0);const e=D(t);(typeof n!="string"||!n.match(/^-?[0-9.]+$/))&&m.throwArgumentError("invalid decimal value","value",n);const r=n.substring(0,1)==="-";r&&(n=n.substring(1)),n==="."&&m.throwArgumentError("missing value","value",n);const i=n.split(".");i.length>2&&m.throwArgumentError("too many decimal points","value",n);let a=i[0],s=i[1];for(a||(a="0"),s||(s="0");s[s.length-1]==="0";)s=s.substring(0,s.length-1);for(s.length>e.length-1&&et("fractional component exceeds decimals","underflow","parseFixed"),s===""&&(s="0");s.length<e.length-1;)s+="0";const o=v.from(a),l=v.from(s);let c=o.mul(e).add(l);return r&&(c=c.mul(tt)),c}class R{constructor(t,e,r,i){t!==S&&m.throwError("cannot use FixedFormat constructor; use FixedFormat.from",p.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=e,this.width=r,this.decimals=i,this.name=(e?"":"u")+"fixed"+String(r)+"x"+String(i),this._multiplier=D(i),Object.freeze(this)}static from(t){if(t instanceof R)return t;typeof t=="number"&&(t=`fixed128x${t}`);let e=!0,r=128,i=18;if(typeof t=="string"){if(t!=="fixed")if(t==="ufixed")e=!1;else{const a=t.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);a||m.throwArgumentError("invalid fixed format","format",t),e=a[1]!=="u",r=parseInt(a[2]),i=parseInt(a[3])}}else if(t){const a=(s,o,l)=>t[s]==null?l:(typeof t[s]!==o&&m.throwArgumentError("invalid fixed format ("+s+" not "+o+")","format."+s,t[s]),t[s]);e=a("signed","boolean",e),r=a("width","number",r),i=a("decimals","number",i)}return r%8&&m.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),i>80&&m.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",i),new R(S,e,r,i)}}class g{constructor(t,e,r,i){t!==S&&m.throwError("cannot use FixedNumber constructor; use FixedNumber.from",p.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=i,this._hex=e,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(t){this.format.name!==t.format.name&&m.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",t)}addUnsafe(t){this._checkFormat(t);const e=_(this._value,this.format.decimals),r=_(t._value,t.format.decimals);return g.fromValue(e.add(r),this.format.decimals,this.format)}subUnsafe(t){this._checkFormat(t);const e=_(this._value,this.format.decimals),r=_(t._value,t.format.decimals);return g.fromValue(e.sub(r),this.format.decimals,this.format)}mulUnsafe(t){this._checkFormat(t);const e=_(this._value,this.format.decimals),r=_(t._value,t.format.decimals);return g.fromValue(e.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(t){this._checkFormat(t);const e=_(this._value,this.format.decimals),r=_(t._value,t.format.decimals);return g.fromValue(e.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const t=this.toString().split(".");t.length===1&&t.push("0");let e=g.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return this.isNegative()&&r&&(e=e.subUnsafe(M.toFormat(e.format))),e}ceiling(){const t=this.toString().split(".");t.length===1&&t.push("0");let e=g.from(t[0],this.format);const r=!t[1].match(/^(0*)$/);return!this.isNegative()&&r&&(e=e.addUnsafe(M.toFormat(e.format))),e}round(t){t==null&&(t=0);const e=this.toString().split(".");if(e.length===1&&e.push("0"),(t<0||t>80||t%1)&&m.throwArgumentError("invalid decimal count","decimals",t),e[1].length<=t)return this;const r=g.from("1"+x.substring(0,t),this.format),i=qt.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(i).floor().divUnsafe(r)}isZero(){return this._value==="0.0"||this._value==="0"}isNegative(){return this._value[0]==="-"}toString(){return this._value}toHexString(t){if(t==null)return this._hex;t%8&&m.throwArgumentError("invalid byte width","width",t);const e=v.from(this._hex).fromTwos(this.format.width).toTwos(t).toHexString();return B(e,t/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(t){return g.fromString(this._value,t)}static fromValue(t,e,r){return r==null&&e!=null&&!lt(e)&&(r=e,e=null),e==null&&(e=0),r==null&&(r="fixed"),g.fromString(C(t,e),R.from(r))}static fromString(t,e){e==null&&(e="fixed");const r=R.from(e),i=_(t,r.decimals);!r.signed&&i.lt(Y)&&et("unsigned value cannot be negative","overflow","value",t);let a=null;r.signed?a=i.toTwos(r.width).toHexString():(a=i.toHexString(),a=B(a,r.width/8));const s=C(i,r.decimals);return new g(S,a,s,r)}static fromBytes(t,e){e==null&&(e="fixed");const r=R.from(e);if(J(t).length>r.width/8)throw new Error("overflow");let i=v.from(t);r.signed&&(i=i.fromTwos(r.width));const a=i.toTwos((r.signed?0:1)+r.width).toHexString(),s=C(i,r.decimals);return new g(S,a,s,r)}static from(t,e){if(typeof t=="string")return g.fromString(t,e);if(ct(t))return g.fromBytes(t,e);try{return g.fromValue(t,0,e)}catch(r){if(r.code!==p.errors.INVALID_ARGUMENT)throw r}return m.throwArgumentError("invalid FixedNumber value","value",t)}static isFixedNumber(t){return!!(t&&t._isFixedNumber)}}const M=g.from(1),qt=g.from("0.5"),jt="contracts/5.1.1";var T=globalThis&&globalThis.__awaiter||function(n,t,e,r){function i(a){return a instanceof e?a:new e(function(s){s(a)})}return new(e||(e=Promise))(function(a,s){function o(d){try{c(r.next(d))}catch(f){s(f)}}function l(d){try{c(r.throw(d))}catch(f){s(f)}}function c(d){d.done?a(d.value):i(d.value).then(o,l)}c((r=r.apply(n,t||[])).next())})};const h=new p(jt);function I(n,t){return T(this,void 0,void 0,function*(){const e=yield t;try{return j(e)}catch(i){}n||h.throwError("a provider or signer is needed to resolve ENS names",p.errors.UNSUPPORTED_OPERATION,{operation:"resolveName"});const r=yield n.resolveName(e);return r==null&&h.throwArgumentError("resolver or addr is not configured for ENS name","name",e),r})}function L(n,t,e){return T(this,void 0,void 0,function*(){return Array.isArray(e)?yield Promise.all(e.map((r,i)=>L(n,Array.isArray(t)?t[i]:t[r.name],r))):e.type==="address"?yield I(n,t):e.type==="tuple"?yield L(n,t,e.components):e.baseType==="array"?Array.isArray(t)?yield Promise.all(t.map(r=>L(n,r,e.arrayChildren))):Promise.reject(new Error("invalid value for array")):t})}function F(n,t,e){return T(this,void 0,void 0,function*(){let r={};e.length===t.inputs.length+1&&typeof e[e.length-1]=="object"&&(r=U(e.pop())),h.checkArgumentCount(e.length,t.inputs.length,"passed to contract"),n.signer?r.from?r.from=N({override:I(n.signer,r.from),signer:n.signer.getAddress()}).then(c=>T(this,void 0,void 0,function*(){return j(c.signer)!==c.override&&h.throwError("Contract with a Signer cannot override from",p.errors.UNSUPPORTED_OPERATION,{operation:"overrides.from"}),c.override})):r.from=n.signer.getAddress():r.from&&(r.from=I(n.provider,r.from));const i=yield N({args:L(n.signer||n.provider,e,t.inputs),address:n.resolvedAddress,overrides:N(r)||{}}),a=n.interface.encodeFunctionData(t,i.args),s={data:a,to:i.address},o=i.overrides;if(o.nonce!=null&&(s.nonce=v.from(o.nonce).toNumber()),o.gasLimit!=null&&(s.gasLimit=v.from(o.gasLimit)),o.gasPrice!=null&&(s.gasPrice=v.from(o.gasPrice)),o.from!=null&&(s.from=o.from),o.type!=null&&(s.type=o.type),o.accessList!=null&&(s.accessList=Et(o.accessList)),s.gasLimit==null&&t.gas!=null){let c=21e3;const d=J(a);for(let f=0;f<d.length;f++)c+=4,d[f]&&(c+=64);s.gasLimit=v.from(t.gas).add(c)}if(o.value){const c=v.from(o.value);!c.isZero()&&!t.payable&&h.throwError("non-payable method cannot override value",p.errors.UNSUPPORTED_OPERATION,{operation:"overrides.value",value:r.value}),s.value=c}delete r.nonce,delete r.gasLimit,delete r.gasPrice,delete r.from,delete r.value,delete r.type,delete r.accessList;const l=Object.keys(r).filter(c=>r[c]!=null);return l.length&&h.throwError(`cannot override ${l.map(c=>JSON.stringify(c)).join(",")}`,p.errors.UNSUPPORTED_OPERATION,{operation:"overrides",overrides:l}),s})}function Dt(n,t){return function(...e){return F(n,t,e)}}function Ht(n,t){const e=n.signer||n.provider;return function(...r){return T(this,void 0,void 0,function*(){e||h.throwError("estimate require a provider or signer",p.errors.UNSUPPORTED_OPERATION,{operation:"estimateGas"});const i=yield F(n,t,r);return yield e.estimateGas(i)})}}function rt(n,t,e){const r=n.signer||n.provider;return function(...i){return T(this,void 0,void 0,function*(){let a;if(i.length===t.inputs.length+1&&typeof i[i.length-1]=="object"){const l=U(i.pop());l.blockTag!=null&&(a=yield l.blockTag),delete l.blockTag,i.push(l)}n.deployTransaction!=null&&(yield n._deployed(a));const s=yield F(n,t,i),o=yield r.call(s,a);try{let l=n.interface.decodeFunctionResult(t,o);return e&&t.outputs.length===1&&(l=l[0]),l}catch(l){throw l.code===p.errors.CALL_EXCEPTION&&(l.address=n.address,l.args=i,l.transaction=s),l}})}}function Vt(n,t){return function(...e){return T(this,void 0,void 0,function*(){n.signer||h.throwError("sending a transaction requires a signer",p.errors.UNSUPPORTED_OPERATION,{operation:"sendTransaction"}),n.deployTransaction!=null&&(yield n._deployed());const r=yield F(n,t,e),i=yield n.signer.sendTransaction(r),a=i.wait.bind(i);return i.wait=s=>a(s).then(o=>(o.events=o.logs.map(l=>{let c=X(l),d=null;try{d=n.interface.parseLog(l)}catch(f){}return d&&(c.args=d.args,c.decode=(f,y)=>n.interface.decodeEventLog(d.eventFragment,f,y),c.event=d.name,c.eventSignature=d.signature),c.removeListener=()=>n.provider,c.getBlock=()=>n.provider.getBlock(o.blockHash),c.getTransaction=()=>n.provider.getTransaction(o.transactionHash),c.getTransactionReceipt=()=>Promise.resolve(o),c}),o)),i})}}function K(n,t,e){return t.constant?rt(n,t,e):Vt(n,t)}function nt(n){return n.address&&(n.topics==null||n.topics.length===0)?"*":(n.address||"*")+"@"+(n.topics?n.topics.map(t=>Array.isArray(t)?t.join("|"):t).join(":"):"")}class P{constructor(t,e){u(this,"tag",t),u(this,"filter",e),this._listeners=[]}addListener(t,e){this._listeners.push({listener:t,once:e})}removeListener(t){let e=!1;this._listeners=this._listeners.filter(r=>e||r.listener!==t?!0:(e=!0,!1))}removeAllListeners(){this._listeners=[]}listeners(){return this._listeners.map(t=>t.listener)}listenerCount(){return this._listeners.length}run(t){const e=this.listenerCount();return this._listeners=this._listeners.filter(r=>{const i=t.slice();return setTimeout(()=>{r.listener.apply(this,i)},0),!r.once}),e}prepareEvent(t){}getEmit(t){return[t]}}class zt extends P{constructor(){super("error",null)}}class Z extends P{constructor(t,e,r,i){const a={address:t};let s=e.getEventTopic(r);i?(s!==i[0]&&h.throwArgumentError("topic mismatch","topics",i),a.topics=i.slice()):a.topics=[s],super(nt(a),a),u(this,"address",t),u(this,"interface",e),u(this,"fragment",r)}prepareEvent(t){super.prepareEvent(t),t.event=this.fragment.name,t.eventSignature=this.fragment.format(),t.decode=(e,r)=>this.interface.decodeEventLog(this.fragment,e,r);try{t.args=this.interface.decodeEventLog(this.fragment,t.data,t.topics)}catch(e){t.args=null,t.decodeError=e}}getEmit(t){const e=wt(t.args);if(e.length)throw e[0].error;const r=(t.args||[]).slice();return r.push(t),r}}class W extends P{constructor(t,e){super("*",{address:t}),u(this,"address",t),u(this,"interface",e)}prepareEvent(t){super.prepareEvent(t);try{const e=this.interface.parseLog(t);t.event=e.name,t.eventSignature=e.signature,t.decode=(r,i)=>this.interface.decodeEventLog(e.eventFragment,r,i),t.args=e.args}catch(e){}}}class Bt{constructor(t,e,r){h.checkNew(new.target,it),u(this,"interface",ut(new.target,"getInterface")(e)),r==null?(u(this,"provider",null),u(this,"signer",null)):ft.isSigner(r)?(u(this,"provider",r.provider||null),u(this,"signer",r)):ht.isProvider(r)?(u(this,"provider",r),u(this,"signer",null)):h.throwArgumentError("invalid signer or provider","signerOrProvider",r),u(this,"callStatic",{}),u(this,"estimateGas",{}),u(this,"functions",{}),u(this,"populateTransaction",{}),u(this,"filters",{});{const s={};Object.keys(this.interface.events).forEach(o=>{const l=this.interface.events[o];u(this.filters,o,(...c)=>({address:this.address,topics:this.interface.encodeFilterTopics(l,c)})),s[l.name]||(s[l.name]=[]),s[l.name].push(o)}),Object.keys(s).forEach(o=>{const l=s[o];l.length===1?u(this.filters,o,this.filters[l[0]]):h.warn(`Duplicate definition of ${o} (${l.join(", ")})`)})}if(u(this,"_runningEvents",{}),u(this,"_wrappedEmits",{}),t==null&&h.throwArgumentError("invalid contract address or ENS name","addressOrName",t),u(this,"address",t),this.provider)u(this,"resolvedAddress",I(this.provider,t));else try{u(this,"resolvedAddress",Promise.resolve(j(t)))}catch(s){h.throwError("provider is required to use ENS name as contract address",p.errors.UNSUPPORTED_OPERATION,{operation:"new Contract"})}const i={},a={};Object.keys(this.interface.functions).forEach(s=>{const o=this.interface.functions[s];if(a[s]){h.warn(`Duplicate ABI entry for ${JSON.stringify(name)}`);return}a[s]=!0;{const l=o.name;i[l]||(i[l]=[]),i[l].push(s)}this[s]==null&&u(this,s,K(this,o,!0)),this.functions[s]==null&&u(this.functions,s,K(this,o,!1)),this.callStatic[s]==null&&u(this.callStatic,s,rt(this,o,!0)),this.populateTransaction[s]==null&&u(this.populateTransaction,s,Dt(this,o)),this.estimateGas[s]==null&&u(this.estimateGas,s,Ht(this,o))}),Object.keys(i).forEach(s=>{const o=i[s];if(o.length>1)return;const l=o[0];try{this[s]==null&&u(this,s,this[l])}catch(c){}this.functions[s]==null&&u(this.functions,s,this.functions[l]),this.callStatic[s]==null&&u(this.callStatic,s,this.callStatic[l]),this.populateTransaction[s]==null&&u(this.populateTransaction,s,this.populateTransaction[l]),this.estimateGas[s]==null&&u(this.estimateGas,s,this.estimateGas[l])})}static getContractAddress(t){return pt(t)}static getInterface(t){return $.isInterface(t)?t:new $(t)}deployed(){return this._deployed()}_deployed(t){return this._deployedPromise||(this.deployTransaction?this._deployedPromise=this.deployTransaction.wait().then(()=>this):this._deployedPromise=this.provider.getCode(this.address,t).then(e=>(e==="0x"&&h.throwError("contract not deployed",p.errors.UNSUPPORTED_OPERATION,{contractAddress:this.address,operation:"getDeployed"}),this))),this._deployedPromise}fallback(t){this.signer||h.throwError("sending a transactions require a signer",p.errors.UNSUPPORTED_OPERATION,{operation:"sendTransaction(fallback)"});const e=U(t||{});return["from","to"].forEach(function(r){e[r]!=null&&h.throwError("cannot override "+r,p.errors.UNSUPPORTED_OPERATION,{operation:r})}),e.to=this.resolvedAddress,this.deployed().then(()=>this.signer.sendTransaction(e))}connect(t){typeof t=="string"&&(t=new gt(t,this.provider));const e=new this.constructor(this.address,this.interface,t);return this.deployTransaction&&u(e,"deployTransaction",this.deployTransaction),e}attach(t){return new this.constructor(t,this.interface,this.signer||this.provider)}static isIndexed(t){return mt.isIndexed(t)}_normalizeRunningEvent(t){return this._runningEvents[t.tag]?this._runningEvents[t.tag]:t}_getRunningEvent(t){if(typeof t=="string"){if(t==="error")return this._normalizeRunningEvent(new zt);if(t==="event")return this._normalizeRunningEvent(new P("event",null));if(t==="*")return this._normalizeRunningEvent(new W(this.address,this.interface));const e=this.interface.getEvent(t);return this._normalizeRunningEvent(new Z(this.address,this.interface,e))}if(t.topics&&t.topics.length>0){try{const r=t.topics[0];if(typeof r!="string")throw new Error("invalid topic");const i=this.interface.getEvent(r);return this._normalizeRunningEvent(new Z(this.address,this.interface,i,t.topics))}catch(r){}const e={address:this.address,topics:t.topics};return this._normalizeRunningEvent(new P(nt(e),e))}return this._normalizeRunningEvent(new W(this.address,this.interface))}_checkRunningEvents(t){if(t.listenerCount()===0){delete this._runningEvents[t.tag];const e=this._wrappedEmits[t.tag];e&&t.filter&&(this.provider.off(t.filter,e),delete this._wrappedEmits[t.tag])}}_wrapEvent(t,e,r){const i=X(e);return i.removeListener=()=>{r&&(t.removeListener(r),this._checkRunningEvents(t))},i.getBlock=()=>this.provider.getBlock(e.blockHash),i.getTransaction=()=>this.provider.getTransaction(e.transactionHash),i.getTransactionReceipt=()=>this.provider.getTransactionReceipt(e.transactionHash),t.prepareEvent(i),i}_addEventListener(t,e,r){if(this.provider||h.throwError("events require a provider or a signer with a provider",p.errors.UNSUPPORTED_OPERATION,{operation:"once"}),t.addListener(e,r),this._runningEvents[t.tag]=t,!this._wrappedEmits[t.tag]){const i=a=>{let s=this._wrapEvent(t,a,e);if(s.decodeError==null)try{const o=t.getEmit(s);this.emit(t.filter,...o)}catch(o){s.decodeError=o.error}t.filter!=null&&this.emit("event",s),s.decodeError!=null&&this.emit("error",s.decodeError,s)};this._wrappedEmits[t.tag]=i,t.filter!=null&&this.provider.on(t.filter,i)}}queryFilter(t,e,r){const i=this._getRunningEvent(t),a=U(i.filter);return typeof e=="string"&&vt(e,32)?(r!=null&&h.throwArgumentError("cannot specify toBlock with blockhash","toBlock",r),a.blockHash=e):(a.fromBlock=e!=null?e:0,a.toBlock=r!=null?r:"latest"),this.provider.getLogs(a).then(s=>s.map(o=>this._wrapEvent(i,o,null)))}on(t,e){return this._addEventListener(this._getRunningEvent(t),e,!1),this}once(t,e){return this._addEventListener(this._getRunningEvent(t),e,!0),this}emit(t,...e){if(!this.provider)return!1;const r=this._getRunningEvent(t),i=r.run(e)>0;return this._checkRunningEvents(r),i}listenerCount(t){return this.provider?t==null?Object.keys(this._runningEvents).reduce((e,r)=>e+this._runningEvents[r].listenerCount(),0):this._getRunningEvent(t).listenerCount():0}listeners(t){if(!this.provider)return[];if(t==null){const e=[];for(let r in this._runningEvents)this._runningEvents[r].listeners().forEach(i=>{e.push(i)});return e}return this._getRunningEvent(t).listeners()}removeAllListeners(t){if(!this.provider)return this;if(t==null){for(const r in this._runningEvents){const i=this._runningEvents[r];i.removeAllListeners(),this._checkRunningEvents(i)}return this}const e=this._getRunningEvent(t);return e.removeAllListeners(),this._checkRunningEvents(e),this}off(t,e){if(!this.provider)return this;const r=this._getRunningEvent(t);return r.removeListener(e),this._checkRunningEvents(r),this}removeListener(t,e){return this.off(t,e)}}class it extends Bt{}const $t=["wei","kwei","mwei","gwei","szabo","finney","ether"];function st(n,t){if(typeof t=="string"){const e=$t.indexOf(t);e!==-1&&(t=3*e)}return C(n,t!=null?t:18)}const[Gt,E]=yt("action-sheet"),Mt=_t({},bt,{title:String,round:O,actions:Tt(),closeIcon:At("cross"),closeable:O,cancelText:String,description:String,closeOnPopstate:O,closeOnClickAction:Boolean,safeAreaInsetBottom:O}),Kt=[...Rt,"round","closeOnPopstate","safeAreaInsetBottom"];var Zt=St({name:Gt,props:Mt,emits:["select","cancel","update:show"],setup(n,{slots:t,emit:e}){const r=d=>e("update:show",d),i=()=>{r(!1),e("cancel")},a=()=>{if(n.title)return w("div",{class:E("header")},[n.title,n.closeable&&w(Ct,{name:n.closeIcon,class:[E("close"),Lt],onClick:i},null)])},s=()=>{if(t.cancel||n.cancelText)return[w("div",{class:E("gap")},null),w("button",{type:"button",class:E("cancel"),onClick:i},[t.cancel?t.cancel():n.cancelText])]},o=(d,f)=>d.loading?w(Ut,{class:E("loading-icon")},null):t.action?t.action({action:d,index:f}):[w("span",{class:E("name")},[d.name]),d.subname&&w("div",{class:E("subname")},[d.subname])],l=(d,f)=>{const{color:y,loading:H,callback:V,disabled:z,className:ot}=d,at=()=>{z||H||(V&&V(d),n.closeOnClickAction&&r(!1),It(()=>e("select",d,f)))};return w("button",{type:"button",style:{color:y},class:[E("item",{loading:H,disabled:z}),ot],onClick:at},[o(d,f)])},c=()=>{if(n.description||t.description){const d=t.description?t.description():n.description;return w("div",{class:E("description")},[d])}};return()=>w(Ot,xt({class:E(),position:"bottom","onUpdate:show":r},Pt(n,Kt)),{default:()=>{var d;return[a(),c(),w("div",{class:E("content")},[n.actions.map(l),(d=t.default)==null?void 0:d.call(t)]),s()]}})}});const ee=Ft(Zt),q=["function name() view returns (string)","function approve(address guy, uint256 wad) returns (bool)","function totalSupply() view returns (uint256)","function transferFrom(address src, address dst, uint256 wad) returns (bool)","function withdraw(uint256 wad)","function decimals() view returns (uint8)","function balanceOf(address) view returns (uint256)","function symbol() view returns (string)","function transfer(address dst, uint256 wad) returns (bool)","function deposit() payable","function allowance(address, address) view returns (uint256)","event Approval(address indexed src, address indexed guy, uint256 wad)","event Transfer(address indexed src, address indexed dst, uint256 wad)","event Deposit(address indexed dst, uint256 wad)","event Withdrawal(address indexed src, uint256 wad)"];function Wt(n){return A({method:"post",url:"/new_trade_address",data:{...n,chain_id:b().chainId}}).then(async t=>(t==null?void 0:t.request)||t)}function Jt(n){return A({method:"post",url:"/new_trade_id",data:{...n,chain_id:b().chainId}}).then(async t=>(t==null?void 0:t.request)||t)}function Xt(n){return n!=null&&n.trader_id?Jt(n):Wt(n)}function re(){return A({method:"get",url:"/my_tokens"}).then(async n=>(n==null?void 0:n.request)||n)}function Qt(n){return A({method:"post",url:"/approve_transaction",data:{...n}}).then(async t=>(t==null?void 0:t.request)||t)}async function Yt(n){let t=Q(),e={from:n.from||b().walletAddress,to:n.to,data:n.data,value:n.value||"0x0"};console.log("tx",e),console.log("walletAddress",b().walletAddress);let r=await(t==null?void 0:t.estimateGas(e)),i=r==null?void 0:r.mul("2").toHexString();return console.log("sendTransaction",{...e,gasLimit:i}),t==null?void 0:t.sendTransaction({...e,gasLimit:i})}function ne(n,t=18){let e=Q(),r=b();return!e||!r.walletAddress||!n?Promise.resolve("0"):new it(n,q,e).balanceOf(r.walletAddress).then(a=>st(a,t))}async function ie(n,t=b().chainId,e=b().walletAddress){if(!e||!t)return n==null?void 0:n.map(()=>null);let{_provider:r}=Nt(b().chain);if(!r)return n==null?void 0:n.map(()=>null);const i=new kt(t,r);let a=n.filter(f=>f!==k).map(f=>new G(f,q).balanceOf(e)),s=n.filter(f=>f!==k).map(f=>new G(f,q).decimals()),o=await i.tryAll([...a,...s]),l=o.slice(0,Math.round(o.length/2)),c=o.slice(Math.round(o.length/2)),d=n.findIndex(f=>f===k);if(d>=0){let f=0;try{f=e?await r.getBalance(e):null}catch(y){console.log(y)}l.splice(d,0,f),c.splice(d,0,18)}return l.map((f,y)=>f!==null?st(f,(c==null?void 0:c[y])||18):null)}async function se(n){return Qt({token:n.token,amount:n.total_amount}).then(async t=>(console.log("appprove tx",t),t.transaction?Yt(t.transaction).then(e=>e==null?void 0:e.wait()):t.allowance)).then(t=>{let e={...n};return e.trader_id?(e==null||delete e.trader_address,e==null||delete e.remark):e==null||delete e.trader_id,Xt(n)})}function oe(n){return A({method:"post",url:"/del_trade_by_id",data:{id:n}}).then(async t=>(t==null?void 0:t.request)||t)}function ae(n){return A({method:"post",url:"/has_copy_trader",data:{trader_adress:n}})}function le(n){return A({method:"post",url:"/query_token_list",data:{trader_adress:n}}).then(async t=>(t==null?void 0:t.request)||t)}export{ee as A,re as a,ie as b,ae as c,ne as g,le as q,oe as r,se as s};
