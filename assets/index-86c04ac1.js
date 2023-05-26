import{g as U,D as ae,_ as ye,L as Te,t as Ve,a as j}from"./Colors-9e4cd12d.js";import{o as l,c as _,a as e,d as R,n as F,j as h,m as he,q as Y,s as ve,r as g,e as ie,g as G,b as ce,v as I,x as m,z as n,F as J,y as X,A as pe,T as fe,u as C,J as ze,K as Ee,B as Be}from"./index-b08b9c61.js";import{_ as Le,a as ne,b as Ae,S as Re,c as We,M as me,g as Pe,T as je,B as He,u as Ie,d as Ne,p as Oe,C as Ue,W as Ge,V as de,e as ge,f as xe,h as we,i as be,j as Ze,k as oe,l as re,P as qe,m as ue,F as K,n as _e,o as Ke,q as De,r as Je,s as Xe,t as Ye}from"./parcelData-c8ae6cb8.js";import{_ as Fe}from"./BfButton-1bae55ad.js";import{r as Qe}from"./BellIcon-6ce3850c.js";import"./use-outside-click-bbe60562.js";function et(k,c){return l(),_("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"})])}function tt(k,c){return l(),_("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[e("path",{d:"M3 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM8.5 10a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM15.5 8.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"})])}const at={class:"flex flex-grow"},it={class:"flex space-x-2"},se=R({__name:"WidgetTile",props:{title:{},isMap:{type:Boolean,default:!1},isWeather:{type:Boolean,default:!1},noHeader:{type:Boolean,default:!1}},setup(k){return(c,v)=>(l(),_("div",{class:F(["relative flex h-full flex-col overflow-hidden rounded-xl",{"bg-bg-100":!c.isMap&&!c.isWeather}])},[c.noHeader?Y("",!0):(l(),_("div",{key:0,class:F(["text-info-700 flex h-16 w-full flex-shrink-0 items-center px-6 font-semibold",{"absolute z-10 bg-green-25/70 backdrop-blur-md":c.isMap,"absolute z-10 text-text-opposite":c.isWeather}])},[e("span",at,h(c.title),1),e("div",it,[he(c.$slots,"actions")])],2)),he(c.$slots,"default")],2))}}),st={key:0,class:"relative h-full w-full"},lt={key:1,class:"relative h-full w-full px-6 overflow-auto thin-scrollbar"},ot=e("div",{class:"border-t sticky top-0"},null,-1),rt=e("th",null,"Pioggia",-1),nt=e("th",null,"Giorno",-1),ct=!1,$e=R({__name:"rainWidget",setup(k){const c=ve(),v=g(!0),o=g(null);let s=null;const T=["Anno","Bimestre","Settimana"],x=g("Bimestre"),b=g("chart"),w=g(0);ie(()=>{s=[];const y=new Date,a=365;y.setDate(new Date().getDate()-a);for(let t=0;t<a;t++){const i=new Date(y);i.setDate(i.getDate()+t);const p={irrigation:Math.floor(Math.random()*(4-20+1)+20),rain:Math.floor(Math.random()*(2-10+1)+10),evotraspiration:Math.floor(Math.random()*(4-20+1)+20),date:i};s.push(p)}L(),v.value=!1});let u=[],f=[],z="mm",E="",W="Pioggia";G(()=>c.darkMode,async()=>{L(!0)}),G(()=>x.value,async()=>{L()});const $=ce(()=>{if(!s)return[];const y=[];let a=new Date;s.length>0&&(a=new Date(s[s.length-1].date));let t=0;return x.value==="Anno"?t=365:x.value==="Bimestre"?t=50:x.value==="Settimana"&&(t=7),a.setDate(new Date().getDate()-t),a.setHours(0,0,0,0),s.forEach(i=>{const p=new Date(i.date);p.setHours(0,0,0,0),p.getTime()>a.getTime()&&y.push(i)}),y});function L(y=!1){if($.value.length===0)return;const a=U("blue-400"),t=U("blue-600");f=[],u=[];const i={id:"rain"+c.darkMode.toString(),name:W,itemStyle:{color:a,borderRadius:[8,8,8,8]},emphasis:{itemStyle:{color:t}},type:"bar",data:[]};$.value.forEach(p=>{const D=new Date(p.date);f.push(new ae(D).format("dd/MM")),i.data.push(Math.round(p.irrigation*100)/100)}),u.push(i),P(),y&&w.value++}function P(){o.value={toolbox:{feature:{dataView:{show:!1},saveAsImage:{show:!1}}},grid:{top:12,right:24,left:24,bottom:20,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"none"}},legend:{show:!1},xAxis:{type:"category",data:f},yAxis:[{type:"value",name:E,position:"left",min:0,max:20,interval:5,axisLabel:{formatter:"{value} "+z}}],series:u,textStyle:{fontFamily:"Work Sans"}}}function N(y,a){return new ae(y).format(a)}return(y,a)=>(l(),I(se,{title:"Pioggia"},{actions:m(()=>[n(Le,{values:T,onUpdate:a[0]||(a[0]=t=>x.value=t),"cur-value":x.value},null,8,["cur-value"]),n(ne,{onUpdate:a[1]||(a[1]=t=>b.value=t),"cur-value":b.value},null,8,["cur-value"])]),default:m(()=>[b.value==="chart"?(l(),_("div",st,[v.value?Y("",!0):(l(),I(ye,{key:0,options:o.value,loading:v.value,"no-data":ct,"disable-theme-refresh":!0,rebuild:w.value},null,8,["options","loading","rebuild"]))])):(l(),_("div",lt,[ot,n(Ae,{items:$.value,"is-compact":"","full-width":""},{header:m(()=>[rt,nt]),rows:m(({item:t})=>[e("td",null,h(t.rain)+"mm",1),e("td",null,h(N(t.date,"dd/MM")),1)]),_:1},8,["items"])]))]),_:1}))}}),dt={key:0,class:"relative h-full w-full"},ut={key:1,class:"relative h-full w-full px-6 overflow-auto thin-scrollbar"},_t=e("div",{class:"border-t sticky top-0"},null,-1),ft=e("th",null,"Umidità",-1),yt=e("th",null,"Giorno",-1),vt=!1,ke=R({__name:"humidityWidget",setup(k){const c=ve(),v=g(!0),o=g(null);let s=null;const T=["Anno","Bimestre","Settimana"],x=g("Bimestre"),b=g("chart"),w=g(0);ie(()=>{s=[];const y=new Date,a=365;y.setDate(new Date().getDate()-a);for(let t=0;t<a;t++){const i=new Date(y);i.setDate(i.getDate()+t);const p={humidity:Math.floor(Math.random()*(4-80+1)+80),date:i};s.push(p)}L(),v.value=!1});let u=[],f=[],z="%",E="",W="Umidità";G(()=>c.darkMode,async()=>{L(!0)}),G(()=>x.value,async()=>{L()});const $=ce(()=>{if(!s)return[];const y=[];let a=new Date;s.length>0&&(a=new Date(s[s.length-1].date));let t=0;return x.value==="Anno"?t=365:x.value==="Bimestre"?t=50:x.value==="Settimana"&&(t=7),a.setDate(new Date().getDate()-t),a.setHours(0,0,0,0),s.forEach(i=>{const p=new Date(i.date);p.setHours(0,0,0,0),p.getTime()>a.getTime()&&y.push(i)}),y});function L(y=!1){if($.value.length===0)return;const a=U(c.darkMode?"green-500":"teal-400"),t=U(c.darkMode?"green-400":"teal-300"),i=U(c.darkMode?"green-300":"teal-200"),p=U(c.darkMode?"green-50":"teal-50");f=[],u=[];const D={id:"rain",name:W,smooth:!0,lineStyle:{color:a,width:2},itemStyle:{color:t},symbolSize:6,areaStyle:{opacity:.8,color:new Te(0,0,0,1,[{offset:0,color:i},{offset:1,color:p}])},type:"line",data:[]};$.value.forEach(Z=>{const M=new Date(Z.date);f.push(new ae(M).format("dd/MM")),D.data.push(Math.round(Z.humidity*100)/100)}),u.push(D),P(),y&&w.value++}function P(){o.value={grid:{top:12,right:24,left:24,bottom:20,containLabel:!0},tooltip:{trigger:"axis"},legend:{show:!1},xAxis:{type:"category",data:f},yAxis:[{type:"value",name:E,position:"left",min:0,max:100,interval:25,axisLabel:{formatter:"{value}"+z}}],series:u,textStyle:{fontFamily:"Work Sans"}}}function N(y,a){return new ae(y).format(a)}return(y,a)=>(l(),I(se,{title:"Umidità"},{actions:m(()=>[n(Le,{values:T,onUpdate:a[0]||(a[0]=t=>x.value=t),"cur-value":x.value},null,8,["cur-value"]),n(ne,{onUpdate:a[1]||(a[1]=t=>b.value=t),"cur-value":b.value},null,8,["cur-value"])]),default:m(()=>[b.value==="chart"?(l(),_("div",dt,[v.value?Y("",!0):(l(),I(ye,{key:0,options:o.value,loading:v.value,"no-data":vt,"disable-theme-refresh":!0,rebuild:w.value},null,8,["options","loading","rebuild"]))])):(l(),_("div",ut,[_t,n(Ae,{items:$.value,"is-compact":"","full-width":""},{header:m(()=>[ft,yt]),rows:m(({item:t})=>[e("td",null,h(t.humidity)+"%",1),e("td",null,h(N(t.date,"dd/MM")),1)]),_:1},8,["items"])]))]),_:1}))}}),pt={class:"thin-scrollbar relative h-full w-full overflow-auto px-6"},ht=e("div",{class:"text-info-700 flex h-16 w-full flex-shrink-0 items-center font-semibold"},[e("span",{class:"flex flex-grow"}," Allarmi ")],-1),mt=e("div",{class:"font-serif text-2xl"}," Hai avuto 25% allarmi in più questa settimana rispetto al solito ",-1),gt={class:"-mx-2 flex flex-wrap justify-end pb-3 pt-3"},xt={class:"flex w-full flex-col justify-between px-4 py-2"},wt={class:"text-3xl font-light"},bt={class:"pl-1 text-2xl"},Dt={class:"text-sm font-light"},Se=R({__name:"alarmsWidget",setup(k){const c=[{id:"strong_rain",type:"warning",text:"pioggia intensa",value:54,measure:"mm",date:"Dom 9"},{id:"rain",type:"info",text:"pioggia debole",value:28,measure:"mm",date:"Sab 8"},{id:"stron_wind",type:"warning",text:"vento forte",value:72,measure:"km/h",date:"Mer 5"},{id:"wind",type:"info",text:"vento debole",value:45,measure:"km/h",date:"Lun 3"}];return(v,o)=>(l(),I(se,{"no-header":""},{default:m(()=>[e("div",pt,[ht,mt,e("div",gt,[(l(),_(J,null,X(c,(s,T)=>e("div",{key:T,class:"flex w-full md:w-6/12 px-2 py-2"},[e("div",{class:F(["flex h-full w-full items-stretch rounded rounded-r-md",{"bg-red-50":s.type==="danger","bg-orange-50":s.type==="warning","bg-blue-50":s.type==="info"}])},[e("div",{class:F(["w-1 rounded-md",{"bg-red-500":s.type==="danger","bg-orange-500":s.type==="warning","bg-blue-500":s.type==="info"}])},null,2),e("div",xt,[e("p",{class:F(["pb-1 text-sm font-light uppercase tracking-wider",{"text-red-700":s.type==="danger","text-orange-800":s.type==="warning","text-blue-700":s.type==="info"}])},h(s.text),3),e("div",{class:F(["flex w-full items-baseline justify-between",{"text-red-800":s.type==="danger","text-orange-900":s.type==="warning","text-blue-800":s.type==="info"}])},[e("p",wt,[pe(h(s.value),1),e("span",bt,h(s.measure),1)]),e("p",Dt,h(s.date),1)],2)])],2)])),64))])])]),_:1}))}}),$t=[{id:"plow",activity_type_description:"Aratura",activity_type_color:"red",activity_type_icon:"fa-tractor"},{id:"seed",activity_type_description:"Semina",activity_type_color:"green",activity_type_icon:"fa-seedling"},{id:"irrigation",activity_type_description:"Irrigazione",activity_type_color:"blue",activity_type_icon:"fa-tint"},{id:"fertilizer",activity_type_description:"Fertilizzazione",activity_type_color:"yellow",activity_type_icon:"fa-flask"},{id:"agrochemical",activity_type_description:"Tratt. agrofarmaci",activity_type_color:"purple",activity_type_icon:"fa-bug"},{id:"harvest",activity_type_description:"Raccolta",activity_type_color:"orange",activity_type_icon:"fa-leaf"},{id:"other",activity_type_description:"Altro",activity_type_color:"gray",activity_type_icon:"fa-question"}],kt=[{id:1,activity_type_id:"plow",activity_date:new Date("2023-03-12"),activity_executed:!0},{id:2,activity_type_id:"plow",activity_date:new Date("2023-03-15"),activity_executed:!0},{id:3,activity_type_id:"plow",activity_date:new Date("2023-03-18"),activity_executed:!0},{id:4,activity_type_id:"seed",activity_date:new Date("2023-03-22"),activity_executed:!0},{id:5,activity_type_id:"fertilizer",activity_date:new Date("2023-03-28"),activity_executed:!0}],St=[{id:1,activity_type_id:"plow",activity_date:new Date("2021-01-01"),activity_executed:!0},{id:1.1,activity_type_id:"plow",activity_date:new Date("2023-01-01"),activity_executed:!0},{id:1.2,activity_type_id:"plow",activity_date:new Date("2023-01-01"),activity_executed:!0},{id:2,activity_type_id:"seed",activity_date:new Date("2023-04-18"),activity_executed:!0},{id:3,activity_type_id:"fertilizer",activity_date:new Date("2023-04-16"),activity_executed:!0},{id:3.1,activity_type_id:"fertilizer",activity_date:new Date("2023-03-16"),activity_executed:!0},{id:3.2,activity_type_id:"fertilizer",activity_date:new Date("2023-02-16"),activity_executed:!0},{id:4,activity_type_id:"irrigation",activity_date:new Date("2023-02-12"),activity_executed:!0},{id:5,activity_type_id:"irrigation",activity_date:new Date("2023-03-20"),activity_executed:!0},{id:5,activity_type_id:"irrigation",activity_date:new Date("2023-04-02"),activity_executed:!0},{id:19,activity_type_id:"harvest",activity_date:new Date("2023-04-8"),activity_executed:!0},{id:20,activity_type_id:"harvest",activity_date:new Date("2023-04-10"),activity_executed:!0},{id:21,activity_type_id:"plow",activity_date:new Date("2023-03-10"),activity_executed:!0},{id:22,activity_type_id:"plow",activity_date:new Date("2023-02-22"),activity_executed:!0},{id:23,activity_type_id:"plow",activity_date:new Date("2023-02-27"),activity_executed:!0}],Mt=[{id:0,activity_type_id:"plow",activity_date:new Date("2023-01-01"),activity_executed:!0},{id:.1,activity_type_id:"plow",activity_date:new Date("2023-01-01"),activity_executed:!0},{id:1,activity_type_id:"plow",activity_date:new Date("2023-01-01"),activity_executed:!0},{id:2,activity_type_id:"seed",activity_date:new Date("2023-01-02"),activity_executed:!0},{id:3,activity_type_id:"irrigation",activity_date:new Date("2023-01-03"),activity_executed:!0},{id:3.1,activity_type_id:"irrigation",activity_date:new Date("2023-01-03"),activity_executed:!0},{id:3.2,activity_type_id:"irrigation",activity_date:new Date("2023-01-03"),activity_executed:!0},{id:3.3,activity_type_id:"irrigation",activity_date:new Date("2023-01-03"),activity_executed:!0},{id:3.4,activity_type_id:"irrigation",activity_date:new Date("2023-01-03"),activity_executed:!0},{id:4,activity_type_id:"fertilizer",activity_date:new Date("2023-01-04"),activity_executed:!0},{id:4.1,activity_type_id:"fertilizer",activity_date:new Date("2023-01-04"),activity_executed:!0},{id:4.2,activity_type_id:"fertilizer",activity_date:new Date("2023-01-04"),activity_executed:!0},{id:5,activity_type_id:"agrochemical",activity_date:new Date("2023-01-05"),activity_executed:!0},{id:5.1,activity_type_id:"agrochemical",activity_date:new Date("2023-01-05"),activity_executed:!0},{id:5.2,activity_type_id:"agrochemical",activity_date:new Date("2023-01-05"),activity_executed:!0},{id:5.3,activity_type_id:"agrochemical",activity_date:new Date("2023-01-05"),activity_executed:!0},{id:5.4,activity_type_id:"agrochemical",activity_date:new Date("2023-01-05"),activity_executed:!0},{id:5.5,activity_type_id:"agrochemical",activity_date:new Date("2023-01-05"),activity_executed:!0},{id:6,activity_type_id:"harvest",activity_date:new Date("2023-01-06"),activity_executed:!0}],Lt=[{id:0,parcel_id:1,parcel_code:1,activities:kt},{id:1,parcel_id:2,parcel_code:2,activities:St},{id:2,parcel_id:3,parcel_code:3,activities:Mt}],At={class:"absolute bottom-0 left-0 right-6 z-20 h-3/5 rounded-tr-md bg-bg-100"},Ft=e("span",{class:"sr-only"},"Chiudi pannello",-1),Ct=e("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Tt=[Ft,Ct],Vt={class:"flex w-full divide-x divide-border border-b",style:{height:"92px"}},zt={class:"flex-grow px-6 py-4 overflow-hidden"},Et={class:"text-sm font-medium leading-6 text-label"},Bt={class:"text-3xl font-medium tracking-tight text-text"},Rt={key:0,class:"text-sm text-label"},Wt={class:"flex w-full flex-col",style:{height:"calc(100% - 92px)"}},Pt={class:"flex h-full w-full"},jt={key:0,class:"flex h-full w-full"},Ht={class:"relative flex h-full w-full pb-4 pl-3 pr-3 pt-4"},It={class:"absolute z-10 flex h-16 w-12 flex-col items-center justify-center",style:{left:"calc(50% - 1.5rem)",top:"calc(50% - 2rem)"}},Nt=e("span",{class:"text-sm font-medium text-label"},"Totali",-1),Ot={class:"text-3xl font-medium tracking-tight text-text"},Ut={class:"thin-scrollbar relative flex h-full w-full flex-col space-y-3 overflow-auto pb-4 pl-8 pr-6"},Gt={class:"sticky top-0 z-10 flex w-full justify-end border-b bg-bg-100 pb-3 pt-3"},Zt={class:"flex w-full flex-col"},qt={class:"flex w-full items-center"},Kt={class:"text-sm font-medium text-label"},Jt={class:"text-3xl font-medium tracking-tight text-text"},Xt={key:1,class:"thin-scrollbar h-full w-full overflow-auto px-6 pb-6"},Yt={class:"sticky top-0 z-10 flex w-full justify-end border-b bg-bg-100 py-3"},Qt={role:"list",class:"flex w-full flex-col pt-6"},ea={class:"flex items-center gap-x-4 px-4 py-4"},ta={class:"flex h-12 w-12 items-center justify-center rounded-md bg-green-400/5 text-green-400"},aa={class:"flex flex-col"},ia={class:"text-sm font-medium leading-6 text-gray-900"},sa={class:"text-sm font-medium leading-6 text-label"},la=e("span",{class:"sr-only"},"Apri opzioni",-1),oa=R({__name:"activityResumePanel",props:{activityParcel:{},activityResume:{}},emits:["close"],setup(k,{emit:c}){const v=ve(),o=g(!0);let s=!1;const T=g(null),x=g("Settimana"),b=g("chart"),w=g(0),u=$t,f=g([]),z=Ve.color;let E=[],W=[],$=[];ie(()=>{k.activityResume&&k.activityResume.activities.length>0?(P(),L()):s=!0,o.value=!1}),G(()=>v.darkMode,async()=>{P(!0)}),G(()=>x.value,async()=>{P()}),G(()=>k.activityResume,async()=>{P(),L()});function L(){const a=Math.floor(Math.random()*45)+5,t=Math.floor(Math.random()*55)+25,i=(Math.floor(Math.random()*18)+2)/10;f.value=[{name:"Ore totali",value:a.toString()},{name:"Media",value:t.toString(),unit:"min"},{name:"Irrigazioni",value:i.toString(),unit:"hl"}]}function P(a=!1){k.activityResume.activities.sort((M,H)=>new Date(H.activity_date).getTime()-new Date(M.activity_date).getTime());const t=k.activityResume.activities,i=U("color-bg-100");W=[],E=[],$=[];const p={id:"activities",name:"Attività",radius:["92%","100%"],avoidLabelOverlap:!1,itemStyle:{borderRadius:10,borderColor:i,borderWidth:4},label:{show:!1,position:"center"},emphasis:{label:{show:!1,fontSize:40,fontWeight:"bold"}},labelLine:{show:!1},type:"pie",data:[]};let D=new Date;t.length>0&&(D=new Date(t[t.length-1].activity_date));let Z=365;D.setDate(new Date().getDate()-Z),D.setHours(0,0,0,0),t.forEach(M=>{$.findIndex(H=>H.type_id===M.activity_type_id)===-1&&$.push({type_id:M.activity_type_id,type_description:u.find(H=>H.id===M.activity_type_id)?.activity_type_description||"",colorIndex:0,count:0})}),$.forEach((M,H)=>{let Q=0;t.forEach(ee=>{const le=new Date(ee.activity_date);le.setHours(0,0,0,0),ee.activity_type_id===M.type_id&&le.getTime()>D.getTime()&&Q++}),M.count=Q,M.colorIndex=H,W.push(M.type_description),p.data.push({value:M.count,name:M.type_description})}),E.push(p),N(),a&&w.value++}function N(){T.value={grid:{top:12,right:24,left:24,bottom:20,containLabel:!0},tooltip:{trigger:"none"},legend:{show:!1,selectedMode:!1},series:E,textStyle:{fontFamily:"Work Sans"}}}function y(a,t){return new ae(a).format(t)}return(a,t)=>(l(),_("div",At,[e("button",{type:"button",onClick:t[0]||(t[0]=i=>c("close")),class:"transition-colors-default absolute right-0 top-0 rounded-bl-md rounded-tr-md p-2 text-gray-500 hover:bg-gray-100 focus:outline-none"},Tt),e("div",Vt,[(l(!0),_(J,null,X(f.value,i=>(l(),_("div",zt,[e("p",Et,h(i.name),1),n(fe,{"enter-active-class":"transition duration-150 ease-out","enter-from-class":"translate-y-0 opacity-0","enter-to-class":"translate-y-0 opacity-100"},{default:m(()=>[(l(),_("p",{class:"flex items-baseline gap-x-2",key:i.value},[e("span",Bt,h(i.value),1),i.unit?(l(),_("span",Rt,h(i.unit),1)):Y("",!0)]))]),_:2},1024)]))),256))]),e("div",Wt,[e("div",Pt,[b.value==="chart"?(l(),_("div",jt,[e("div",Ht,[e("div",It,[Nt,e("span",Ot,h(a.activityResume.activities.length),1)]),o.value?Y("",!0):(l(),I(ye,{key:0,options:T.value,loading:o.value,"no-data":C(s),"disable-theme-refresh":!0,rebuild:w.value},null,8,["options","loading","no-data","rebuild"]))]),e("div",Ut,[e("div",Gt,[n(ne,{onUpdate:t[1]||(t[1]=i=>b.value=i),"cur-value":b.value},null,8,["cur-value"])]),(l(!0),_(J,null,X(C($).sort((i,p)=>p.count-i.count),i=>(l(),_("div",Zt,[e("div",qt,[e("div",{class:"mr-2 h-3 w-3 rounded-sm",style:ze("background: "+C(z)[i.colorIndex])},null,4),e("span",Kt,h(i.type_description),1)]),e("div",null,[e("span",Jt,h(i.count),1)])]))),256))])])):(l(),_("div",Xt,[e("div",Yt,[n(ne,{onUpdate:t[2]||(t[2]=i=>b.value=i),"cur-value":b.value},null,8,["cur-value"])]),e("ul",Qt,[(l(!0),_(J,null,X(a.activityResume.activities,(i,p)=>(l(),_("li",{key:i.id,class:F(["border-x border-t",{"rounded-t-xl":p===0,"rounded-b-xl border-b":p===a.activityResume.activities.length-1}])},[e("div",ea,[e("div",ta,[e("i",{class:F(["fas",C(u).find(D=>D.id===i.activity_type_id).activity_type_icon])},null,2)]),e("div",aa,[e("div",ia,h(C(u).find(D=>D.id===i.activity_type_id).activity_type_description),1),e("div",sa,h(y(i.activity_date,"dd/MM")),1)]),n(C(Pe),{as:"div",class:"relative ml-auto"},{default:m(()=>[n(C(Re),{class:"-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500"},{default:m(()=>[la,n(C(tt),{class:"h-5 w-5","aria-hidden":"true"})]),_:1}),n(fe,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:m(()=>[n(C(We),{class:"absolute right-0 z-10 mt-0.5 w-40 origin-top-right overflow-hidden rounded-md bg-bg-100 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"},{default:m(()=>[n(C(me),null,{default:m(({active:D})=>[e("a",{href:"#",class:F([D?"bg-gray-50":"","block px-3 py-2 text-sm leading-6 text-gray-900"])},"Visualizza",2)]),_:1}),n(C(me),null,{default:m(({active:D})=>[e("a",{href:"#",class:F([D?"bg-gray-50":"","block px-3 py-2 text-sm leading-6 text-gray-900"])},"Modifica",2)]),_:1})]),_:1})]),_:1})]),_:1})])],2))),128))])]))])])]))}}),ra="Aerial",na="Ak2gN0iZ3d02J-xwYSYgRp8oHFZCOneWeg_Hj7C2ZntIKTXCGc0HXVQ8GHkuxp17",ca=R({__name:"ActivityMapViewer",setup(k){const c=new je({visible:!0,preload:1/0,source:new He({key:na,imagerySet:ra})}),v=Ie(),{map:o,mapRef:s,padding:T}=Ne(),x=g(Oe),b=g(Lt);let w=null,u=null;const f=new Ue;let z=null;const E=new Ge,W=g(!1),$=g(null),L=g(null);ie(async()=>{s.value&&(o.setTarget(s.value),s.value.addEventListener("mouseleave",N),await new Promise(d=>setTimeout(d,500))),t(),o.getLayers().clear(),await P(),i(),p()});async function P(){o.addLayer(c)}Ee(()=>{t()});function N(){v.emit("hover:map",[])}function y(d){if(d.type==="pointermove"){const r=o.getFeaturesAtPixel(d.pixel);if(r&&r.length>=1){const A=r[0]?.values_?.features[0]?.values_?.type;if(A&&A==="activity"){const S=r[0].get("features");if(Array.isArray(S)&&S.length>0){const O=S.map(V=>V.get("ref"));v.emit("hover:map",O)}else v.emit("hover:map",[r[0].get("ref")]);o.getTargetElement().style.cursor="pointer"}}else v.emit("hover:map",[]),o.getTargetElement().style.cursor="default";return!0}return!1}function a(d){const r=Ye();return d.forEach(A=>{const S=A.getGeometry();S&&Xe(r,S.getExtent())}),r}function t(){o.getLayers().getArray().filter(r=>r instanceof de).forEach(r=>{o.removeLayer(r)}),f.getLength()&&f.clear(),w&&(o.removeInteraction(w),w.dispose(),w=null),u&&(o.removeInteraction(u),u.dispose(),u=null)}function i(){const d=[];x.value.forEach(S=>{const O=E.readFeature(S.world_geom);O.setProperties({ref:S.parcel_id,type:"parcel",parcel_id:S.parcel_id}),f.push(O),d.push(O)}),z=new ge({features:d});const r=new xe({distance:0,source:z,geometryFunction:ee}),A=new de({source:r,style:D,properties:{name:"parcelLayer",ref:we.VECTOR,id:"parcel"},renderBuffer:500});o.addLayer(A),A.setZIndex(900)}function p(){const d=[];x.value.forEach(V=>{const B=b.value.find(te=>te.parcel_id===V.parcel_id),q=B?B.activities.length:0;if(B&&q>0){const te=E.readFeature(V.world_geom);te.setProperties({ref:"activity_"+V.parcel_id,type:"activity",parcel_activity_id:B.id,parcel_id:B.parcel_id,activity_count:q}),f.push(te),d.push(te)}});const r=new ge({features:d}),A=new xe({distance:0,source:r,geometryFunction:ee}),S=new de({source:A,style:Z,properties:{name:"interactionLayer",ref:we.VECTOR,id:"activity"},renderBuffer:500});w=new be({style:H,condition(V){return Ze(V)},layers:function(V){return V.get("name")==="interactionLayer"}}),o.addInteraction(w),w.on("select",V=>{const B=V.target.getFeatures().getArray()[0].getProperties().features;if(B.length>1){const q=a(B);Q(q)}else{const q=B[0].get("parcel_id");le(q)}}),u=new be({style:M,condition:y,layers:function(V){return V.get("name")==="interactionLayer"}}),o.addInteraction(u),o.addLayer(S),S.setZIndex(910);const O=a(f.getArray());Q(O)}const D=d=>{if(d.get("features")!==void 0){const S=d.get("features")[0].getGeometry().getCoordinates();return new oe({stroke:new re({color:j("lime-200",1),width:2}),geometry:new qe(S)})}},Z=d=>{const r=d.get("features");if(r!==void 0)return new oe({image:new ue({radius:16,fill:new K({color:j("green-300",1)}),stroke:new re({color:j("green-300",.4),width:14})}),text:new _e({text:r[0].values_.activity_count.toString(),fill:new K({color:j("green-800",1)}),font:"bold 13px Work Sans"})})},M=d=>{const r=d.get("features");if(r!==void 0)return new oe({image:new ue({radius:16,fill:new K({color:j("green-200",1)}),stroke:new re({color:j("green-200",.4),width:14})}),text:new _e({text:r[0].values_.activity_count.toString(),fill:new K({color:j("green-800",1)}),font:"bold 13px Work Sans"})})},H=d=>{const r=d.get("features");if(r!==void 0)return new oe({image:new ue({radius:16,fill:new K({color:j("green-600",1)}),stroke:new re({color:j("green-600",.4),width:14})}),text:new _e({text:r[0].values_.activity_count.toString(),fill:new K({color:j("green-50",1)}),font:"bold 13px Work Sans"})})};function Q(d){o.getView().fit(d,{padding:[50,50,50,50],easing:Ke,duration:1e3})}function ee(d){const r=d.getGeometry();return r?new De(Je(r.getExtent())):new De([0])}function le(d){const r=b.value.find(A=>A.parcel_id===d);if(r){const A=x.value.find(S=>S.parcel_id===d);A&&($.value=r,L.value=A,W.value=!0)}}function Ce(){W.value=!1,$.value=null,L.value=null,w&&w.getFeatures().clear()}return(d,r)=>(l(),_("div",{ref_key:"mapRef",ref:s,class:"relative h-full w-full"},[n(fe,{"enter-active-class":"transition duration-200 ease-out","enter-from-class":"translate-y-1 opacity-0","enter-to-class":"translate-y-0 opacity-100","leave-active-class":"transition duration-150 ease-in","leave-from-class":"translate-y-0 opacity-100","leave-to-class":"translate-y-1 opacity-0"},{default:m(()=>[W.value&&$.value&&L.value?(l(),I(oa,{key:0,activityResume:$.value,activityParcel:L.value,onClose:Ce},null,8,["activityResume","activityParcel"])):Y("",!0)]),_:1})],512))}}),da={class:"relative h-full w-full"},ua=R({__name:"activityMapWidget",setup(k){return(c,v)=>(l(),I(se,{title:"Resoconto attività","is-map":""},{default:m(()=>[e("div",da,[n(ca)])]),_:1}))}});const _a=e("div",{class:"text-info-700 flex pt-5 pb-3 w-full flex-shrink-0 items-center font-semibold"},[e("span",{class:"flex flex-grow text-text-opposite"}," Meteo ")],-1),fa={class:"flex w-full flex-col items-center justify-center pt-2"},ya={class:"flex pb-6"},va={class:"mr-5 border-r-2 border-bg-100 border-opacity-10 pr-4 text-text-opposite"},pa={class:"text-7xl font-extralight"},ha={class:"mb-3 flex flex-col md:flex-row w-full rounded-lg bg-bg-100/10 md:py-2 text-sm text-text-opposite backdrop-blur-lg"},ma={class:"font-light uppercase tracking-wider"},ga={class:"text-2xl font-light"},xa={class:"flex w-full rounded-lg bg-bg-100/10 py-2 text-sm text-text-opposite backdrop-blur-lg"},wa={class:"w-full pb-2 text-center text-xs font-light uppercase tracking-wider"},ba={class:"w-full pb-1 text-center"},Da={class:"w-full pl-1 text-center"},Me=R({__name:"weatherWidget",setup(k){const c={id:"sunny",temp:"27°",icon:"fa-sun-bright",theme:"weather-widget-sun"},v={id:"rainy",temp:"14°",icon:"fa-cloud-showers",theme:"weather-widget-rain"},o=g(v),s=[{title:"Precipitazioni",value:"38 mm"},{title:"Vento",value:"12 km/h"},{title:"Temperature",value:"5° - 16°"}],T=g([]);ie(()=>{const b=new Date,w=["Dom","Lun","Mar","Mer","Gio","Ven","Sab"],u=["fa-cloud-showers","fa-cloud-bolt","fa-cloud-fog","fa-sun-bright","fa-sun-bright"];for(let f=1;f<=5;f++){const z=new Date(b);z.setDate(z.getDate()+f);const E=Math.floor(Math.random()*15)+10;T.value.push({day:w[z.getDay()],icon:u[f-1],temp:E+"°"})}});function x(){o.value.id===v.id?o.value=c:o.value=v}return(b,w)=>(l(),I(se,{"is-weather":"","no-header":""},{default:m(()=>[e("div",{class:F(["via-teal-500a via-20%a thin-scrollbar-alpha relative h-full w-full overflow-auto bg-gradient-to-br from-green-500 from-0% to-blue-500 to-30% px-6 pb-4",o.value.theme])},[_a,e("div",fa,[e("div",ya,[e("div",va,[e("span",pa,h(o.value.temp),1)]),e("div",{class:"transition-colors-default relative inline-flex cursor-pointer text-bg-100/30 hover:text-bg-100/40",onClick:x},[e("i",{class:F(["fa-solid relative z-10 text-7xl",o.value.icon])},null,2)])]),e("div",ha,[(l(),_(J,null,X(s,(u,f)=>e("div",{class:F(["flex flex-grow md:flex-col border-bg-100 border-opacity-10 px-4 py-2 md:py-0 justify-between md:justify-normal items-center md:items-start",f<s.length-1?"border-b md:border-b-0 md:border-r":""])},[e("span",ma,h(u.title),1),e("span",ga,h(u.value),1)],2)),64))]),e("div",xa,[(l(!0),_(J,null,X(T.value,(u,f)=>(l(),_("div",{class:F(["flex flex-grow flex-col border-bg-100 border-opacity-10 px-4",f<T.value.length-1?"border-r":""])},[e("span",wa,h(u.day),1),e("span",ba,[e("i",{class:F(["fa-solid relative z-10 text-xl text-bg-100/30",u.icon])},null,2)]),e("span",Da,h(u.temp),1)],2))),256))])])],2)]),_:1}))}}),$a={class:"relative h-full w-full flex justify-between px-4 items-center bg-gradient-to-br from-lime-500/20 dark:from-blue-500/20 from-0% to-green-500/10 dark:to-green-500/20 to-50%"},ka={class:"flex items-center"},Sa={class:"text-green-400 mr-3"},Ma=e("span",{class:"font-medium text-sm text-green-800"},"5 nuovi messaggi",-1),La={class:"flex flex-col items-center justify-end"},Aa=e("i",{class:"fal fa-arrow-right"},null,-1),Fa=10,Ca=7,Ta=R({__name:"notificationActionPanel",setup(k){return ce(()=>Ca/Fa*100),(c,v)=>(l(),_("div",$a,[e("div",ka,[e("span",Sa,[n(C(et),{class:"w-6 h-6"})]),Ma]),e("div",La,[n(Fe,{"is-success":""},{icon:m(()=>[Aa]),default:m(()=>[pe("Leggi")]),_:1})])]))}}),Va={class:"relative h-full w-full flex justify-between px-4 items-center bg-gradient-to-br from-yellow-500/10 dark:from-yellow-500/20 from-0% to-red-500/10 dark:to-red-500/20 to-50%"},za={class:"flex items-center"},Ea={class:"text-red-400 mr-3"},Ba=e("span",{class:"font-medium text-sm text-red-800"},"3 nuovi allarmi",-1),Ra={class:"flex flex-col items-center justify-end"},Wa=e("i",{class:"fal fa-arrow-right"},null,-1),Pa=10,ja=7,Ha=R({__name:"alarmActionPanel",setup(k){return ce(()=>ja/Pa*100),(c,v)=>(l(),_("div",Va,[e("div",za,[e("span",Ea,[n(C(Qe),{class:"w-6 h-6"})]),Ba]),e("div",Ra,[n(Fe,{"is-danger":""},{icon:m(()=>[Wa]),default:m(()=>[pe("Verifica")]),_:1})])]))}}),Ia={class:"flex h-full w-full flex-col items-start overflow-x-hidden px-2 sm:px-4 md:pt-6 lg:px-8 lg:pt-10"},Na={class:"hidden w-full justify-between md:flex",style:{height:"72px"}},Oa={class:"flex flex-grow flex-col border-l-4 border-green-500 pl-4"},Ua={class:"font-serif text-4xl text-green-800"},Ga=e("span",{class:"pt-2 text-base text-green-800"},"Hai 5 messaggi da leggere e 3 allarmi da verificare",-1),Za={class:"flex items-center space-x-3 h-full"},qa={class:"w-96 h-full"},Ka={class:"rounded-xl w-full h-full overflow-hidden"},Ja={class:"w-96 h-full"},Xa={class:"rounded-xl w-full h-full overflow-hidden"},Ya={class:"-mx-3 flex flex-wrap pb-4 pt-3 lg:flex-grow",style:{height:"calc(100% - 72px)"}},Qa={class:"flex h-96 w-full flex-wrap md:h-full md:w-6/12 2xl:w-4/12"},ei={class:"hidden h-96 w-full px-3 py-3 md:block md:h-full"},ti={class:"block w-full px-3 py-3 md:hidden"},ai={class:"block w-full px-3 py-3 md:hidden"},ii={class:"block h-96 w-full px-3 py-3 md:h-1/2 2xl:hidden"},si={class:"block h-96 w-full px-3 py-3 md:hidden"},li={class:"hidden h-full w-6/12 flex-wrap md:flex 2xl:w-8/12"},oi={class:"w-full px-3 py-3 lg:h-1/2 2xl:w-6/12"},ri={class:"w-full px-3 py-3 lg:h-1/2 2xl:w-6/12"},ni={class:"hidden w-full px-3 py-3 md:h-96 lg:h-1/2 2xl:block 2xl:w-6/12"},ci={class:"w-full px-3 py-3 md:h-96 lg:h-1/2 2xl:w-6/12"},pi=R({__name:"index",setup(k){const c=Be();return(v,o)=>(l(),_("div",Ia,[e("div",Na,[e("div",Oa,[e("span",Ua,"Buongiorno "+h(C(c).name),1),Ga]),e("div",Za,[e("div",qa,[e("div",Ka,[n(Ha)])]),e("div",Ja,[e("div",Xa,[n(Ta)])])])]),e("div",Ya,[e("div",Qa,[e("div",ei,[n(ua)]),e("div",ti,[n(Me)]),e("div",ai,[n(Se)]),e("div",ii,[n($e)]),e("div",si,[n(ke)])]),e("div",li,[e("div",oi,[n(Me)]),e("div",ri,[n(Se)]),e("div",ni,[n($e)]),e("div",ci,[n(ke)])])])]))}});export{pi as default};
