System.register(["./index-legacy-a6491750.js","./universalTransition-legacy-1909e3d5.js","./index-legacy-5717ace0.js","./earnRate-legacy-686e1ef2.js"],(function(t,e){"use strict";var a,l,n,r,s,o,i,c,d,p,m,x,u,f,v,y,b,_,g,h,w,$,k,L,C,E,I,j,A,T,D,R,z,O,B,S,U,q,F,P;return{setters:[t=>{a=t.d,l=t.l,n=t.F,r=t.p,s=t.Q,o=t.R,i=t.f,c=t.k,d=t.y,p=t.E,m=t.v,x=t.a6,u=t.G,f=t.z,v=t.I,y=t.C,b=t.A,_=t.q,g=t.x,h=t.T,w=t.B,$=t.H,k=t.D,L=t.J,C=t.M,E=t.U,I=t.N,j=t.r,A=t.a7,T=t.a8,D=t.P,R=t.a9,z=t.aa,O=t.ab,B=t._},t=>{S=t.T,U=t.a},t=>{q=t.E,F=t.I},t=>{P=t.E}],execute:function(){var e=document.createElement("style");e.textContent=".trader-container[data-v-d037c4c7]{padding:.37333rem 0 2.66667rem}.trader-container .tabs-container[data-v-d037c4c7]{--van-tabs-bottom-bar-width: .53333rem;--van-tabs-bottom-bar-height: .05333rem;--van-tabs-line-height: .90667rem;--van-font-bold: 500;--van-padding-xs: .4rem}.trader-container .tabs-container[data-v-d037c4c7] .van-tabs__nav--shrink{padding-left:0}.trader-container .card-container[data-v-d037c4c7]{background-image:linear-gradient(227deg,#345AA1 0%,#345AA1 100%);box-shadow:0 .10667rem .16rem rgba(222,222,222,.4);border-radius:.16rem;padding:.26667rem .37333rem}.trader-container .fix-bottom[data-v-d037c4c7]{padding:.64rem .42667rem;background-color:#fff}.trader-container .fix-bottom .btn-item[data-v-d037c4c7]{max-width:calc(50% - .13333rem)}\n",document.head.appendChild(e);const V={class:"pr-16px pl-16px pt-10px pb-10px"},G={class:"flex justify-between"},H={class:"flex items-center mr-20px min-w-60px"},J={class:"text-14px font-500"},M={class:"flex items-center flex-1"},N={class:"text-12px color-#999 mr-5px"},Q={class:"text-14px font-500"},W={class:"flex items-center flex-1 justify-end"},Y={class:"text-12px color-#999 mr-5px"},K={class:"text-14px font-500"},X={class:"flex justify-between items-center lh-none mt-13px"},Z={class:"color-#999"},tt=["onClick"],et=a({__name:"myRecordList",props:{tableList:{},loading:{type:Boolean}},setup(t){const e=new URL("/assets/icon-unknown-4090888e.svg",self.location).href;return(t,a)=>{const w=F,$=h,k=q;return c(),l("ul",V,[(c(!0),l(n,null,r(t.tableList,((a,n)=>(c(),l("li",{key:n,class:"font-400 color-#333 text-12px van-hairline--bottom pt-10px pb-10px"},[d("div",G,[d("div",H,[(0===a?.trade_type?a?.to_token:a?.from_token)?(c(),p(w,{key:0,class:"h-24px w-24px bg-#DEDEDE border-rd-50% mr-5px",round:"","lazy-load":"",src:m(x)(0===a?.trade_type?a?.to_token:a?.from_token),"error-icon":m(e)},null,8,["src","error-icon"])):u("",!0),d("span",J,f((0===a?.trade_type?a?.to_symbol:a?.from_symbol)||""),1)]),d("div",M,[d("span",N,f(0===a?.trade_type?t.$t("buyAmount"):t.$t("sellAmount")),1),v(),d("span",Q,f(0===a?.trade_type?m(y)(a?.to_amount||0,2):m(y)(a?.from_amount||0,2)),1)]),d("div",W,[d("span",Y,f(0===a?.trade_type?t.$t("buyVolume"):t.$t("sellVolume")),1),v(),d("span",K,"$"+f(0===a?.trade_type?m(y)((a?.to_amount||0)*(a?.to_price||0),2):m(y)((a?.from_amount||0)*(a?.from_price||0),2)),1)])]),d("div",X,[d("div",Z,f(m(b)(a?.time||0)),1),d("div",{class:"flex items-center clickable",onClick:_((t=>m(g)(a.trader_id)),["stop"])},[i(w,{class:"w-24px h-24px mr-6px",round:"",src:a?.headurl||m(e),"error-icon":m(e),"lazy-load":""},null,8,["src","error-icon"]),d("span",null,f(a?.name||a?.remark||""),1),i($,{class:"important-text-18px",color:"#CECECE",name:"arrow"})],8,tt)])])))),128)),s(i(k,{class:"empty",description:t.$t("emptyData")},null,8,["description"]),[[o,t.tableList&&0===t.tableList.length&&!t.loading]])])}}}),at={class:"pr-16px pl-16px pt-10px pb-10px font-400"},lt={class:"flex items-center text-14px color-#333"},nt={class:"mt-10px flex items-center justify-between"},rt={class:"flex text-12px color-#999 mt-5px"},st={class:"mr-10px"},ot={class:"text-14px font-400 color-#333 w-100% mt-14px"},it={class:"text-right"},ct={class:"text-12px color-#999"},dt={class:"pt-3px"},pt={class:"pt-3px"},mt={class:"pt-3px text-right"},xt={class:"flex items-center font-400 mt-12px"},ut={class:"text-size-12px color-#999"},ft=d("div",{class:"flex-1"},null,-1),vt=a({__name:"myTraders",props:{tableList:{},loading:{type:Boolean}},setup(t){const e=new URL("/assets/icon-unknown-4090888e.svg",self.location).href;return(t,a)=>{const x=F,b=L,g=q;return c(),l("ul",at,[(c(!0),l(n,null,r(t.tableList,((a,n)=>{return c(),l("li",{key:n},[d("div",lt,[i(x,{class:"w-24px h-24px mr-5px",round:"","lazy-load":"",src:a?.headurl||m(e),"error-icon":m(e)},null,8,["src","error-icon"]),d("span",null,f(a?.name||a?.remark||(r=a?.address,r?r.slice(0,4)+"..."+r.slice(-4):"")),1)]),d("div",nt,[d("div",null,[d("div",{class:"text-16px font-500",style:w({color:(a?.earn_30_rate||0)>=0?"var(--upColor)":"var(--downColor)"})},"+"+f(a?.earn_30_rate||0)+"%",5),d("div",rt,[d("span",st,f(t.$t("last30DaysYield")),1),d("span",null,f(t.$t("winRate"))+" "+f(a?.win_rate||0)+"%",1)])]),(a?.earn_rate_chart?.length||0)>0?(c(),p(P,{key:0,dataList:a?.earn_rate_chart||[],loading:t.loading},null,8,["dataList","loading"])):u("",!0)]),d("table",ot,[d("tr",null,[d("td",null,"$"+f(m(y)(a?.earn_copy_trade||0)),1),d("td",null,"$"+f(m(y)(a?.amount_copy_trade||0)),1),d("td",it,f(m(y)(a?.token_num||0)),1)]),d("tr",ct,[d("td",dt,f(t.$t("followerBenefits")),1),d("td",pt,f(t.$t("capitalScale")),1),d("td",mt,f(t.$t("amountOfTokenWithOrder")),1)])]),d("div",xt,[d("div",ut,f(m(y)(a?.doc_count||0))+" "+f(t.$t("peopleFollowOrder")),1),ft,i(b,{class:"min-w-70px max-h-26px",type:"primary",onClick:_((t=>m(k)(a?.id||a?.address||a?.genius_adress||"")),["stop"])},{default:$((()=>[v(f(t.$t("followOrder")),1)])),_:2},1032,["onClick"])])]);var r})),128)),s(i(g,{class:"empty",description:t.$t("emptyData")},null,8,["description"]),[[o,t.tableList&&0===t.tableList.length&&!t.loading]])])}}}),yt={class:"trader-container"},bt={class:"pl-16px pr-16px"},_t={class:"card-container text-14px font-400 color-#fff"},gt={class:"flex items-center justify-between"},ht={class:"text-12px opacity-50 mb-8px"},wt={class:"text-24px font-500"},$t={class:"flex items-center"},kt={class:"w-24px h-24px mr-5px",alt:"",srcset:""},Lt={class:"van-ellipsis"},Ct={class:"flex items-center justify-between mt-8px"},Et={class:"text-12px opacity-50 mb-5px"},It={class:"text-12px opacity-50 mb-5px"},jt={class:"text-12px opacity-50 mb-5px"},At={class:"position-fixed bottom-0 left-0 right-0 flex justify-between items-center fix-bottom"},Tt={class:"flex flex-col items-center font-400"},Dt={class:"text-14px color-#333"},Rt={class:"text-10px color-#999"},zt={class:"flex flex-col items-center font-400"},Ot={class:"text-14px color-#fff"},Bt={class:"text-10px color-#fff opacity-50"};t("default",B(a({__name:"myTrader",setup(t){let{t:e}=C();const a=E();let x=I("myTraderTab","record",sessionStorage),u=[{title:e("followRecord"),name:"record"},{title:e("myTrader"),name:"trader"}],v=j([]),b=j(!1),g=j([]),h=j(!1);function w(){R().then((t=>{console.log(t)})),b.value=!0,z().then((t=>{console.log(t),v.value=t.request||[]})).finally((()=>{b.value=!1})),h.value=!0,O().then((t=>{console.log(t),g.value=t?.request||[]})).finally((()=>{h.value=!1}))}return A((()=>{w()})),(t,e)=>{const w=U,k=S,C=L,E=T("lazy");return c(),l("div",yt,[d("div",bt,[d("div",_t,[d("div",gt,[d("div",null,[d("div",ht,f(t.$t("todayIncome")),1),d("div",wt,"$"+f(m(y)(m(a).userInfo?.earn_today||0)),1)]),d("div",$t,[s(d("img",kt,null,512),[[E,m(a).userInfo.headurl]]),d("span",Lt,f(m(a).userInfo.name),1)])]),d("ul",Ct,[d("li",null,[d("div",Et,f(t.$t("currentInvestment")),1),d("div",null,"$"+f(m(y)(m(a).userInfo?.curr_amount||0)),1)]),d("li",null,[d("div",It,f(t.$t("cumulativeInput")),1),d("div",null,"$"+f(m(y)(m(a).userInfo?.accum_amount||0)),1)]),d("li",null,[d("div",jt,f(t.$t("cumulativeProfitAndLoss")),1),d("div",null,"$"+f(m(y)(m(a).userInfo?.earn||0)),1)])])])]),i(k,{active:m(x),"onUpdate:active":e[0]||(e[0]=t=>D(x)?x.value=t:x=t),shrink:"",class:"mt-5px tabs-container van-hairline--bottom"},{default:$((()=>[(c(!0),l(n,null,r(m(u),((t,e)=>(c(),p(w,{key:e,title:t.title,name:t.name},null,8,["title","name"])))),128))])),_:1},8,["active"]),s(i(et,{tableList:m(v),loading:m(b)},null,8,["tableList","loading"]),[[o,"record"===m(x)]]),s(i(vt,{tableList:m(g),loading:m(h)},null,8,["tableList","loading"]),[[o,"trader"===m(x)]]),d("div",At,[i(C,{class:"min-w-48% max-h-40px btn-item",type:"primary",disabled:"",color:"#EBECED"},{default:$((()=>[d("div",Tt,[d("div",Dt,f(t.$t("wantOrderLeader")),1),d("div",Rt,f(t.$t("comingSoon")),1)])])),_:1}),i(C,{class:"min-w-48% max-h-40px btn-item",type:"primary",onClick:e[1]||(e[1]=_((e=>t.$router.push({name:"TraderCustom"})),["stop"]))},{default:$((()=>[d("div",zt,[d("div",Ot,f(t.$t("customCopyOrder")),1),d("div",Bt,f(t.$t("knownAwesomeAddress")),1)])])),_:1})])])}}}),[["__scopeId","data-v-d037c4c7"]]))}}}));
