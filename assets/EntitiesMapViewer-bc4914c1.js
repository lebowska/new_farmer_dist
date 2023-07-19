import{T as le,B as fe,u as Ae,a as de,C as ge,W as pe,V as w,b as I,c as U,S,k as B,n as M,d as j,e as l,f as J,P as L,I as g,j as Y,i as me,l as ye,m as he}from"./parcelData-63db60fa.js";import{S as Q}from"./Select-bf356678.js";import{a as Z}from"./Colors-74604422.js";import{c as Ee,a as we}from"./cicciotto-25d2cff1.js";import{d as Fe,s as Ce,N as ve,L as h,o as Ie,b as Ue}from"./index-fa2db9d6.js";const Se="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAA8klEQVQYlXWQsUrDUBRAz325NoFgitjBoXUp4hKh4ObU2dVPKM5+UD7BxcGlnQRHlw5ZFAQVUREtEk1raGocntUY7ZkevMPh3isHDQVg/2RY8EXU7QgVTFVahMRx/C35rZDsAy4TGGzrr6qZP2ZrIZ4DroEVFxr9vPgjes0QAMfAqge+wrQyjAH7oQJXr3A3hjSHjWW4iH6qJup2xF+C+zEcXcPxDdy+QVCDnfVKMZ3C2ROkuyrDEYwyW20HsHVqqzK/Y5nnw7zYDKzoOpDNSluXeUngPLGCit3hX7HdU1EDDxM7QtNfIALU91Qe3221XoNPcCBLMI6LQyMAAAAASUVORK5CYII=",Be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAYAAABPhbxiAAABeElEQVQokW3SO2tUURTF8d+9nntnxjiJQpABUQz4wEY/gSIIYi1ptbIX7Cxt7GwEsbARBCtBOz+ApcRCUFQIQQIS8pyZZN535lqc0RHMqc5ZsNbe+392cn8xgI9PijLP2dig02FwQDHgzquQOOQE+PGiKK+fYrPPeEy1xrBOeoQPj4uy22H9K/fezkLSny+L8tpZTlYJaRQnE0JGnjNfp9Fg6QrvHhTlX+OtJS4scCxjPmOhTppSjOh2WFtjdZXhIHbw/mE0h3PzDCYcDdQDi8fZbcaq/R69Nr09DirkdfJarJh821N+2mZ3EIVfXb7vsLZOq0W3Tb8VQUHtBI0zpM/Ph2QusDdgfxTnzLMZvTSLlUKFcREDdranVK822OrzpRnNzX2yjCzQG0/xV2dhy09DEuDR6ZAsfy7KrX4MqEwhjUa0m4y6lGPuvp59R/hzeXM5JDdXinKzHwkXk6gPh9x49v8ShH8fFxdoDWkP46xzt0Ny6bC1wW8e44quL8wQiQAAAABJRU5ErkJggg==",Qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAmElEQVQImS3MMWoCUQAA0ffX75J1NZUE0gQhrZdIn1K8huAB0od0uYBX8FARBIkKZl2V1bX4qQZmYMJsGC2mTfvwSKdLXpB1uJyZfMcQF9OmHY3pl8D1lljXieH1Szt64fmJ+sShSuGvYrUie/+MYfOb4qDH4P+U5xQFGVQVP2sOR44ntnu2O2KXMBtGsJw3bVkmCW8fMcAdpnwsOXDzZHAAAAAASUVORK5CYII=",Ve="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAYAAAAvg9c4AAADGElEQVQ4jY2Vu28cVRSHv5l7x7Mzs+ud9a6XXeJAgmUhBYeHeCRSihRINAiJAiSIxB9ARRmK0FHQICFqCkQXCkSBKKBCAoFEeIkiFBESmOBX/Fjvzu7Mzt25FGftGOKxudLojnTv+e5vzj3nN84bLU3Z+PAVY/0qeCHkQ3j1A+2Ubj40nKOgH10x1lGgPPAC8HzwfUgSeOn9k8H/In7/rrHrG+CuQZEDngDrMQQBtFr/R+cU2vnSWM+F3i6Mc0hHYDKwE8gz2VgNQSn45h1jL715vFr3hZ+MfaIJ8Qzs9mGYgOvKs5+CagSTQgKMga/eNvZYaOiBr2AhggunoN2GWg0cF0wKwx1YXYNBIgHd+wR8LLQbgHZgYuFcDM88BGEkCpUnue2tweYG3NkWeKsJn10tV+u+t6idUEOoYc6H8zF05mXRUVJOjguDLQH39mA8hiiCj18/GnxQUs/9YGySg7HwWw8++Q621qHYz2UKroJqE/wZyfnOHej95VCJLY4Lp5fg8jXtHJRUw4ckh6GBByJ4eBF+zSCb3n6uwRaQDiBzpdQqVXDPWup10B7c/l1q/AB6fVk7L/5ibGIgMfBUB7Ix/Hlb1oMA+nuwuy1wV0kKGg1ozUFYkeZIR/8p/k8f086Fb43tjaHmwaNdGAxhlEJ3HiYTCSwKqZBOG5oxLMUQKMhyyfk9PXo6gj8G8PcA2j6cfxBurctaNQLVFfhcDBfPwP0BdEPYTCGuwep6Se8//rWxP25DYwZmPbjVh+0EzsRQ09A3Mi/OSsVMLGyM4GYPsucPXdTh0Q5Ewc5Y5uUYfi4gL+BcAyoK0sndLlsZwMAIEMA9CvrFk9rpTJvCWIg0XJyHdgVWh+C7UJ924uZIgCvP3vWDUjNtB5BNJNBX0wMKuLElwIUqzM7IIYeBpUr31T49L4GRBuXKe6Dh8xVR6Cu4eflexyq3fWCpLs1gLOyNYXMsipWSr7i+fLQFlioFeOuUdrqhAIyVi+vnsnbjUrmnHgsFscTVIQxz2EhhJ4HmyyeY9EnQq13tPNKArUxULrx28j/qH3hsHP+6HLkeAAAAAElFTkSuQmCC",qe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAWCAYAAADNX8xBAAAB5ElEQVQ4jZ3UTWsTURTG8f+9cyevTYO1RDoqFUQt6iIYXIkSdJmNIEpBBDcuXNWtX8DPIGTRb9CF4AuCK5euxHahoNWWCFralCbTJNM7GReHtNa0zYwHBubexY/nHM6Mmps05F/ZaCOArAOdENK3jSJhqedLRDaCogu+hbUuNDrJMf15C1o7kHZgPAUFF6bz0H9ho0SQq+FrC353oReC0dLi2TEovomP6V7NKKMllW8h48CYK08ziJ9Mg8xjaRO6oVw6CmwfLhVheS1mosFLEEh7ti9no2Vm1TPw/tnoVLvQ1H2jVlvwrQ1hJOC2BS8H1y7D66dHY/rvQ2nWqE8/4WMT2hbaO7AVQCkNnhcz0aDOPzLqVwsa22AjGXgnhNJEQmjQ5vI6bPT27k6Ow8KTw9s7EAKYfmjUii87VXBhIgWVMszfOxg7FAI4fteoH75ABRcqU3DlOtRr4RBmjoIAVjbB1eBlBbtxDtp+BC8TJAI49UA+3k4oW+9lYfYqfKnvb3EkBNCrGdUMZPONhhMZuDMD/sIeFgsCKGUklaMg58LFY/B4Bm5+EEzNTY4c026dfmcjLwcXirLx698Xk7U2qNVbRhVTkHf3I4khgLcVo2xjceg+MQRQr5aHfsP/Bf2L1atl9QeqsqHj3YkKIgAAAABJRU5ErkJggg==",Le="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAABCElEQVQYlW2RvUoDQRRGz0yuG+KSTTZkQfEPGy20CNhELKzEws4XER/AR1IhhY1Yia2FICmsxB8ChpVEF1yc3bEYJW7YW92Bw5nv3quO2sLo1NjQg/UA+ruiKCmd94zthLAdQVSDpStjy0B1/YoFSDNIDMQp9EeQHhTNeqe5wkboIGNhfhbWgpKvj5dflGgHNGZAFCz6kPeKETTAyYKoVhWqFWfOLNQFkrMJrP+a2yGMv38j5LDVhs3mlBHgpivqLoaGB764GKt18C+cVfOvBntu0sCDinZROi2YuzS2AAKcP7pVZbkbLKpB6E0ZAfxDUffvk/fzJ7x9lYDgzhin8JTAwwcM90X9AG7EUPqOil3VAAAAAElFTkSuQmCC",Ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAABVElEQVQokX2SO0sDQRSFv5kd3DyMmKABQSGxEdRCxEYESSOCIFj6L/xFVmJl46O3E3yAlYgQLAyBSBINajbuspNdi2sUjXGqO3C/uefcOWpnzACwdGbjlxDKJaP452iA1UsbA9gIiqdSDwRWzm2cT8BsFvJJuHuF4HAwpF0HJtNy6UbQDiHpgD75G9I2hucArhrwFMBCTgAbQ3WvH9K1DhxVoOKJpPksTGfg3UImBfe7PyFdLhlV96WpkIGRIRhPgN+FmREoFf7YkrtllKOgFUAnFDlzozA7KhOj4+8puldUPbhuip+EI81GQ9CFxRzU9gX6AprrRt224DWElIGcK/9iY5hKw2bh1wSA/LZRDR9qHXk5LSHAszCRgqcDG/8AAN5CeGhDEIHriLygC3VffPUB3oZRNgLnM1FZV2TdtOBxzag+oOen6omU4jBcLBvlbUgoPwDYj4IfJzeDcwAAAABJRU5ErkJggg==",Pe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAHCAYAAAArkDztAAAAj0lEQVQImT3LIQ7CQBRF0fvLz1AMpRWsANFAAt0AEk9SyxbYAptAo9gAHl+FIehaQkARxJB0YBDT8JKrTp5sTnj3haqG2VqFdlGvA0UGywmct87/4WrBecgHsCqg3gXUVwN3C8MYphl0czjsnY+SUsV+4NmE5ziFcgQKcFuocHReBfoGEtMCQGrg8Q5d5io/VTwqesL437MAAAAASUVORK5CYII=",be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAOCAYAAAAbvf3sAAABa0lEQVQokXXQMWtTURiH8d+9ObmpJEohttg2qFhEnFwVHNXBXRDByQ/g5GcQV0eHfoZSHUV0sRQK6iAoOKhBi2mjialp09ybOByhNtYXXs45vO/zf+Akd48HDzby8conVpqcrHJ1geULIXFIJfdfGb//GR+dXuy5Ga41eH35Xyhd+8LXTQZDsjJFwZu3LK1z9nk+ngRCrRpTi4Iso1Si26Xd4uk0pyYN9RshaZyg16fVptNlNKS/xeoqg+WDlhSuN9jb43OT9lYcZDW2Wzxb4/yLfSiFtUshma0zzAlljk5TqzN1jB/fePJhwgCzN0MyP0clI6tEsFJjVPCxSfo4WlJ/1WydNI1LkJQIU2xu8PLdhAEat+O/7+ySDxkXMWBc0GoxWsnHBwA4czqeef4nsUypHAOa3ycMsHgnJNttdrsUOflgf9b7dQgAt5ZCstNh2Cc7Ei3zCzy88h8AZhYJlXivVrl4LySPzoXkN4PofZ5v1q44AAAAAElFTkSuQmCC",Re="/new_farmer_dist/assets/trap_green_default-4e22ed9b.svg",He="/new_farmer_dist/assets/trap_green_selected-50db3ff5.svg",xe="/new_farmer_dist/assets/trap_green_hover-94fb773d.svg",Ne="/new_farmer_dist/assets/trap_red_default-8a46b256.svg",Oe="/new_farmer_dist/assets/trap_red_selected-87af6be1.svg",Ge="/new_farmer_dist/assets/trap_red_hover-33543daa.svg",Xe="/new_farmer_dist/assets/trap_orange_default-fbd0de4d.svg",Te="/new_farmer_dist/assets/trap_orange_selected-15335778.svg",ke="/new_farmer_dist/assets/trap_orange_hover-ecdc61c5.svg",P="/new_farmer_dist/assets/tractor_pin_icon_small-5c7e5772.svg",De="Aerial",Ke="Ak2gN0iZ3d02J-xwYSYgRp8oHFZCOneWeg_Hj7C2ZntIKTXCGc0HXVQ8GHkuxp17",_e=Fe({__name:"EntitiesMapViewer",props:{showNdvi:{type:Boolean},parcels:{},curParcel:{},traps:{},curTrap:{},equipments:{},curEquipment:{},zoomOnTrap:{},zoomOnPlot:{},zoomOnEquipment:{}},emits:["select-trap","select-parcel","select-equipment"],setup(o,{emit:b}){const W=new le({visible:!0,preload:1/0,source:new fe({key:Ke,imagerySet:De})}),R=[{parcelId:12,image:Se,coordX:.4,coordY:.5,scale:14},{parcelId:10,image:Be,coordX:.5,coordY:.5,scale:14},{parcelId:2,image:Ee,coordX:.53,coordY:.48,scale:14},{parcelId:3,image:we,coordX:.55,coordY:.51,scale:14},{parcelId:11,image:Qe,coordX:.55,coordY:.51,scale:14},{parcelId:9,image:Ve,coordX:.74,coordY:.51,scale:14},{parcelId:8,image:qe,coordX:.47,coordY:.48,scale:14},{parcelId:6,image:Le,coordX:.47,coordY:.48,scale:14},{parcelId:7,image:Ye,coordX:.46,coordY:.52,scale:14},{parcelId:13,image:Pe,coordX:.51,coordY:.53,scale:13},{parcelId:1,image:be,coordX:.51,coordY:.53,scale:14}],f=Ae(),{map:c,mapRef:F,padding:ze}=de();let A=null,p=null,d=null,m=null;const u=new ge;let H=null;const C=new pe;Ce(async()=>{F.value&&(c.setTarget(F.value),F.value.addEventListener("mouseleave",$),await new Promise(r=>setTimeout(r,500))),G(),c.getLayers().clear(),await _(),re(),o.showNdvi&&ae(),ne(),se()});async function _(){c.addLayer(W)}ve(()=>{G()});function $(){f.emit("hover:map",[])}function ee(r){if(r.type==="pointermove"){const e=c.getFeaturesAtPixel(r.pixel);if(e&&e.length>=1){const t=e[0]?.values_?.features[0]?.values_?.type;if(t&&t==="trap"){const n=e[0].get("features");if(Array.isArray(n)&&n.length>0){const a=n.map(s=>s.get("ref"));f.emit("hover:map",a)}else f.emit("hover:map",[e[0].get("ref")]);c.getTargetElement().style.cursor="pointer"}}else f.emit("hover:map",[]),c.getTargetElement().style.cursor="default";return!0}return!1}function te(r){if(r.type==="pointermove"){const e=c.getFeaturesAtPixel(r.pixel);if(e&&e.length>=1){const t=e[0]?.values_?.features[0]?.values_?.type;if(t&&t==="equipment"){const n=e[0].get("features");if(Array.isArray(n)&&n.length>0){const a=n.map(s=>s.get("ref"));f.emit("hover:map",a)}else f.emit("hover:map",[e[0].get("ref")]);c.getTargetElement().style.cursor="pointer"}}else f.emit("hover:map",[]),c.getTargetElement().style.cursor="default";return!0}return!1}function x(r){const e=c.getAllLayers().find(t=>t.get("name")==="parcelInteractionLayer");if(e){const t=e.getSource();if(t){const n=t.getFeatures();for(const a of n){const s=a.get("features");if(Array.isArray(s)){for(const i of s)if(i.getProperties().ref===r)return a}else if(a.getProperties().ref===r)return a}}}return null}function N(r){const e=c.getAllLayers().find(t=>t.get("name")==="trapInteractionLayer");if(e){const t=e.getSource();if(t){const n=t.getFeatures();for(const a of n){const s=a.get("features");if(Array.isArray(s)){for(const i of s)if(i.getProperties().ref===r)return a}else if(a.getProperties().ref===r)return a}}}return null}function O(r){const e=c.getAllLayers().find(t=>t.get("name")==="equipmentInteractionLayer");if(e){const t=e.getSource();if(t){const n=t.getFeatures();for(const a of n){const s=a.get("features");if(Array.isArray(s)){for(const i of s)if(i.getProperties().ref===r)return a}else if(a.getProperties().ref===r)return a}}}return null}function y(r){const e=he();return r.forEach(t=>{const n=t.getGeometry();n&&ye(e,n.getExtent())}),e}function G(){c.getLayers().getArray().filter(e=>e instanceof w).forEach(e=>{c.removeLayer(e)}),u.getLength()&&u.clear(),A&&(c.removeInteraction(A),A.dispose(),A=null),p&&(c.removeInteraction(p),p.dispose(),p=null),d&&(c.removeInteraction(d),d.dispose(),d=null),m&&(c.removeInteraction(m),m.dispose(),m=null)}function re(){const r=[];o.parcels.forEach(a=>{const s=C.readFeature(a.world_geom);s.setProperties({ref:"parcel_"+a.parcel_id,type:"parcel",parcel_id:a.parcel_id}),u.push(s),r.push(s)}),H=new I({features:r});const e=new U({distance:0,source:H,geometryFunction:v}),t=new w({source:e,style:X,properties:{name:"parcelInteractionLayer",ref:S.VECTOR,id:"parcel"},renderBuffer:500});c.addLayer(t),t.setZIndex(900);const n=y(u.getArray());V(n)}h(()=>o.curParcel,()=>{if(u.getArray().filter(e=>e.getProperties().type==="parcel").forEach(e=>{e.setStyle(X)}),o.curParcel){const e=o.parcels.find(t=>t.parcel_id===o.curParcel.parcel_id);if(e){const t=x("parcel_"+e.parcel_id);t&&t.setStyle(oe)}}}),h(()=>o.zoomOnPlot,()=>{if(o.curParcel){const r=o.parcels.find(e=>e.parcel_id===o.curParcel.parcel_id);if(r){const e=x("parcel_"+r.parcel_id);if(e){const t=y([e]),n=B(t),a=[n[0],n[1]-100];c.getView().animate({center:a,duration:500})}}}});function ae(){const r=[];o.parcels.forEach(a=>{if(R.find(s=>s.parcelId===a.parcel_id)){const s=C.readFeature(a.world_geom);s.setProperties({ref:"ndvi_"+a.parcel_id,type:"ndvi",parcel_id:a.parcel_id}),u.push(s),r.push(s)}});const e=new I({features:r}),t=new U({distance:0,source:e,geometryFunction:v}),n=new w({source:t,style:ue,properties:{name:"ndviLayer",ref:S.VECTOR,id:"ndvi"},renderBuffer:500});n.on("prerender",a=>{const s=a.context;s.imageSmoothingEnabled=!1;const i=s;i.webkitImageSmoothingEnabled=!1,i.mozImageSmoothingEnabled=!1,i.msImageSmoothingEnabled=!1}),c.addLayer(n),n.setZIndex(700)}function ne(){if(o.traps.length===0)return;const r=[];o.traps.forEach(a=>{const s=C.readFeature(z(M([a.coordinates.lon,a.coordinates.lat])));s.setProperties({ref:"trap_"+a.id,type:"trap",trap_id:a.id}),u.push(s),r.push(s)});const e=new I({features:r}),t=new U({distance:0,source:e,geometryFunction:v}),n=new w({source:t,style:T,properties:{name:"trapInteractionLayer",ref:S.VECTOR,id:"trap"},renderBuffer:500});A=new Q({style:k,condition(a){return j(a)},layers:function(a){return a.get("name")==="trapInteractionLayer"}}),c.addInteraction(A),A.on("select",a=>{const s=a.target.getFeatures().getArray()[0].getProperties().features;if(s.length>1){const i=y(s);V(i)}else{const i=s[0].get("trap_id"),E=o.traps.find(q=>q.id===i);b("select-trap",E)}}),p=new Q({style:ce,condition:ee,layers:function(a){return a.get("name")==="trapInteractionLayer"}}),c.addInteraction(p),c.addLayer(n),n.setZIndex(910)}h(()=>o.curTrap,()=>{if(u.getArray().filter(e=>e.getProperties().type==="trap").forEach(e=>{e.setStyle(T)}),o.curTrap){const e=o.traps.find(t=>t.id===o.curTrap.id);if(e){const t=N("trap_"+e.id);t&&t.setStyle(k)}}}),h(()=>o.zoomOnTrap,()=>{if(o.curTrap){const r=o.traps.find(e=>e.id===o.curTrap.id);if(r){const e=N("trap_"+r.id);if(e){const t=y([e]);c.getView().animate({center:B(t),duration:500})}}}});function se(){if(o.equipments.length===0)return;const r=[];o.equipments.forEach(a=>{const s=C.readFeature(z(M([a.coordinates.lon,a.coordinates.lat])));s.setProperties({ref:"equipment_"+a.id,type:"equipment",equipment_id:a.id}),u.push(s),r.push(s)});const e=new I({features:r}),t=new U({distance:0,source:e,geometryFunction:v}),n=new w({source:t,style:D,properties:{name:"equipmentInteractionLayer",ref:S.VECTOR,id:"equipment"},renderBuffer:500});d=new Q({style:K,condition(a){return j(a)},layers:function(a){return a.get("name")==="equipmentInteractionLayer"}}),c.addInteraction(d),d.on("select",a=>{const s=a.target.getFeatures().getArray()[0].getProperties().features;if(s.length>1){const i=y(s);V(i)}else{const i=s[0].get("equipment_id"),E=o.equipments.find(q=>q.id===i);b("select-equipment",E)}}),m=new Q({style:ie,condition:te,layers:function(a){return a.get("name")==="equipmentInteractionLayer"}}),c.addInteraction(m),c.addLayer(n),n.setZIndex(910)}h(()=>o.curEquipment,()=>{if(u.getArray().filter(e=>e.getProperties().type==="equipment").forEach(e=>{e.setStyle(D)}),o.curEquipment){const e=o.equipments.find(t=>t.id===o.curEquipment.id);if(e){const t=O("equipment_"+e.id);t&&t.setStyle(K)}}}),h(()=>o.zoomOnEquipment,()=>{if(o.curEquipment){const r=o.equipments.find(e=>e.id===o.curEquipment.id);if(r){const e=O("equipment_"+r.id);if(e){const t=y([e]);c.getView().animate({center:B(t),duration:500})}}}});const X=r=>{if(r.get("features")!==void 0){const n=r.get("features")[0].getGeometry().getCoordinates();return new l({stroke:new J({color:Z("lime-200",1),width:2}),geometry:new L(n)})}},oe=r=>{if(r.get("features")!==void 0){const n=r.get("features")[0].getGeometry().getCoordinates();return new l({stroke:new J({color:Z("lime-50",1),width:4}),geometry:new L(n)})}},T=r=>{const e=r.get("features");if(e!==void 0){const t=o.traps.find(s=>s.id===e[0].values_.trap_id);let n=0;t.insects.forEach(s=>{n+=s.count});let a=Re;return n>t.danger_treshold?a=Ne:n>t.warning_treshold&&(a=Xe),new l({image:new g({scale:1,anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:a})})}},ce=r=>{const e=r.get("features");if(e!==void 0){const t=o.traps.find(n=>n.id===e[0].values_.trap_id);if(t){let n=0;t.insects.forEach(s=>{n+=s.count});let a=xe;return n>t.danger_treshold?a=Ge:n>t.warning_treshold&&(a=ke),new l({image:new g({scale:1,anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:a})})}}},k=r=>{const e=r.get("features");if(e!==void 0){const t=o.traps.find(s=>s.id===e[0].values_.trap_id);let n=0;t.insects.forEach(s=>{n+=s.count});let a=He;return n>t.danger_treshold?a=Oe:n>t.warning_treshold&&(a=Te),new l({image:new g({scale:1,anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:a})})}},D=r=>{const e=r.get("features");if(e!==void 0){o.equipments.find(n=>n.id===e[0].values_.equipment_id);const t=P;return new l({image:new g({scale:1,anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:t})})}},ie=r=>{const e=r.get("features");if(e!==void 0&&o.equipments.find(n=>n.id===e[0].values_.equipment_id)){const n=P;return new l({image:new g({scale:1,anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:n})})}},K=r=>{const e=r.get("features");if(e!==void 0){o.equipments.find(n=>n.id===e[0].values_.equipment_id);const t=P;return new l({image:new g({scale:1,anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",src:t})})}},ue=r=>{const e=r.get("features");if(e!==void 0){const n=r.get("features")[0].getGeometry().getCoordinates(),s=new L(n).getInteriorPoint().getCoordinates(),i=R.find(E=>E.parcelId===e[0].values_.parcel_id);if(i)return new l({image:new g({scale:i.scale,anchor:[i.coordX,i.coordY],anchorXUnits:"fraction",anchorYUnits:"fraction",src:i.image}),geometry:new Y(s)})}};function V(r){c.getView().fit(r,{padding:[50,50,50,50],easing:me,duration:1e3})}function v(r){const e=r.getGeometry();return e?new Y(B(e.getExtent())):new Y([0])}function z(r){return"POINT("+r[0]+" "+r[1]+")"}return(r,e)=>(Ie(),Ue("div",{ref_key:"mapRef",ref:F,class:"relative h-full w-full"},null,512))}});export{_e as _};
