import{c as M,an as O,b0 as U,g as B,t as j,d as $,aB as q,r as F,b as W,f as u,aT as L,aS as X,a$ as G,ay as H,j as Q,M as J,O as Y,w as Z,k as _,l as f,y as i,F as N,v as l,z as v,q as A,P as R,H as ee,Q as oe,R as ne,p as te,S as se,aX as S,G as P,C as ae,E as D,a3 as ce,a4 as le,a5 as re,T as de,W as ie,X as ue,_ as pe}from"./index-1f7c36f7.js";import{A as ke}from"./index-b8105b6e.js";import{I as _e,E as fe}from"./index-590f676d.js";const[he,m,be]=M("search"),ve=O({},U,{label:String,shape:B("square"),leftIcon:B("search"),clearable:j,actionText:String,background:String,showAction:Boolean});var ye=$({name:he,props:ve,emits:["blur","focus","clear","search","cancel","clickInput","clickLeftIcon","clickRightIcon","update:modelValue"],setup(a,{emit:d,slots:t,attrs:h}){const g=q(),r=F(),k=()=>{t.action||(d("update:modelValue",""),d("cancel"))},y=e=>{e.keyCode===13&&(H(e),d("search",a.modelValue))},w=()=>a.id||`${g}-input`,I=()=>{if(t.label||a.label)return u("label",{class:m("label"),for:w()},[t.label?t.label():a.label])},n=()=>{if(a.showAction){const e=a.actionText||be("cancel");return u("div",{class:m("action"),role:"button",tabindex:0,onClick:k},[t.action?t.action():e])}},c=()=>{var e;return(e=r.value)==null?void 0:e.blur()},s=()=>{var e;return(e=r.value)==null?void 0:e.focus()},p=e=>d("blur",e),b=e=>d("focus",e),T=e=>d("clear",e),E=e=>d("clickInput",e),x=e=>d("clickLeftIcon",e),C=e=>d("clickRightIcon",e),o=Object.keys(U),V=()=>{const e=O({},h,L(a,o),{id:w()}),z=K=>d("update:modelValue",K);return u(G,X({ref:r,type:"search",class:m("field"),border:!1,onBlur:p,onFocus:b,onClear:T,onKeypress:y,onClickInput:E,onClickLeftIcon:x,onClickRightIcon:C,"onUpdate:modelValue":z},e),L(t,["left-icon","right-icon"]))};return W({focus:s,blur:c}),()=>{var e;return u("div",{class:m({"show-action":a.showAction}),style:{background:a.background}},[(e=t.left)==null?void 0:e.call(t),u("div",{class:m("content",a.shape)},[I(),V()]),n()])}}});const me=Q(ye);const ge=a=>(ie("data-v-fcd4a68b"),a=a(),ue(),a),we=["disabled"],Ie={class:"ml-[5px] color-#333 text-size-[14px]"},xe={key:1,class:"ml-[5px] color-#333 text-size-[14px]"},Ce={class:"rules-content"},Se={class:"search-bar",action:"/"},Te={style:{background:"#fff"},class:"pb-50px"},Ee=["onClick"],Ve={class:"main"},Ne={key:0,class:"color-#999 text-10px"},Re={key:0,class:"minor"},Fe=ge(()=>i("span",{style:{flex:"1"}},null,-1)),ze={class:"right-label"},Be=$({__name:"selectToken",props:{tokens:{},token:{},disabled:{type:Boolean}},emits:["update:token"],setup(a,{emit:d}){const t=a,{t:h}=J(),g=new URL("/assets/icon-unknown-4090888e.svg",self.location).href;let r=F(!1),k=F(""),y=Y(()=>{var n;if(k.value){let c=new RegExp(k.value,"i");return((n=t.tokens)==null?void 0:n.filter(s=>c.test((s==null?void 0:s.token)||"")||c.test((s==null?void 0:s.symbol)||"")||c.test((s==null?void 0:s.name)||"")))||[]}else return t.tokens});Z(r,n=>{n&&k.value});function w(n){n!=null&&n.token&&(n==null?void 0:n.token)!==S&&(d("update:token",n),r.value=!1)}function I(n){var p,b;let c=ce().chain,{chainInfo:s}=le(c||"eth");return re(`${((b=(p=n==null?void 0:n.token)==null?void 0:p.toLowerCase)==null?void 0:b.call(p))||(s==null?void 0:s.wmain_wrapper)}-${c}`)}return(n,c)=>{var x,C;const s=_e,p=de,b=me,T=fe,E=ke;return _(),f(N,null,[i("button",{class:"flex items-center active-opacity-50 disabled-opacity-50",type:"button",disabled:t.disabled,onClick:c[0]||(c[0]=A(o=>R(r)?r.value=!0:r=!0,["stop"]))},[(x=t==null?void 0:t.token)!=null&&x.token?(_(),f(N,{key:0},[u(s,{class:"w-[20px] h-[20px]",round:"","lazy-load":"",src:I(t.token),"error-icon":l(g)},null,8,["src","error-icon"]),i("span",Ie,v(((C=t.token)==null?void 0:C.symbol)||""),1)],64)):(_(),f("span",xe,v(l(h)("plsSelectToken")),1)),u(p,{class:"ml-[5px] color-#999",name:"arrow-down"})],8,we),u(E,{show:l(r),"onUpdate:show":c[2]||(c[2]=o=>R(r)?r.value=o:r=o),title:l(h)("selectToken"),style:{height:"80%"}},{default:ee(()=>[i("div",Ce,[i("form",Se,[u(b,{modelValue:l(k),"onUpdate:modelValue":c[1]||(c[1]=o=>R(k)?k.value=o:k=o),modelModifiers:{trim:!0},clearable:"",background:"#fff",shape:"round",placeholder:l(h)("searchTokenContractName")},null,8,["modelValue","placeholder"])]),i("ul",Te,[oe(u(T,{description:l(h)("emptyData"),class:"empty"},null,8,["description"]),[[ne,l(y)&&l(y).length===0]]),(_(!0),f(N,null,te(l(y),(o,V)=>(_(),f("li",{class:se(["token-item",{disabled:o.token===l(S)}]),key:V,onClick:A(e=>w(o),["stop"])},[u(s,{class:"icon-token",round:"",width:"0.6rem",height:"0.6rem","icon-size":"0.6rem","lazy-load":"","show-loading":"",src:I(o),"error-icon":l(g)},null,8,["src","error-icon"]),i("div",null,[i("div",Ve,[i("span",null,v(o.symbol),1),o.token===l(S)?(_(),f("span",Ne," ("+v(n.$t("notSupport"))+")",1)):P("",!0)]),o.token&&o.token!==l(S)?(_(),f("div",Re,v(o.token.slice(0,6)+"..."+o.token.slice(-6)),1)):P("",!0)]),Fe,i("div",ze,[i("span",null,v(o.balance?l(ae)(o.balance||0):""),1)]),o.token===t.token.token?(_(),D(p,{key:0,size:"0.48rem",color:"#3F80F7",name:"success"})):(_(),D(p,{key:1,style:{opacity:"0"},size:"0.48rem",color:"#3F80F7",name:"success"}))],10,Ee))),128))])])]),_:1},8,["show","title"])],64)}}});const De=pe(Be,[["__scopeId","data-v-fcd4a68b"]]);export{De as S};
