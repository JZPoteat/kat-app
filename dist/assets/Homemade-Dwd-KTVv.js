import{d as M,f as m,h as k,i as r,_ as C,r as u,o as d,c as w,w as c,a as _,b as s,j as p,k as y,F as E,g as j,l as I}from"./index-BvAfaizc.js";const V=M({setup(){const e=m([]),o=m(!1),a=m(null);return k(async()=>{const l=Object.assign({"/src/stores/photos/homemade/crochet.jpg":()=>r(()=>import("./crochet-BMLY3N5s.js"),[]),"/src/stores/photos/homemade/quilt.jpg":()=>r(()=>import("./quilt-CuUG5Wi-.js"),[]),"/src/stores/photos/homemade/quilt2.jpg":()=>r(()=>import("./quilt2-D7bLMze8.js"),[]),"/src/stores/photos/homemade/quilt3.jpg":()=>r(()=>import("./quilt3-CYaYxAT8.js"),[])});for(const i in l){const n=await l[i]();e.value.push(n.default)}}),{homemade:e,showModal:o,modalImage:a,openModal:l=>{a.value=l,o.value=!0},closeModal:()=>{o.value=!1,a.value=null}}}}),b={class:"collage"},L=["onClick"],O=["src"],P=["src"];function $(e,o,a,v,f,l){const i=u("v-col"),n=u("v-row"),h=u("v-container");return d(),w(h,{style:{"justify-content":"center"}},{default:c(()=>[_(n,null,{default:c(()=>[_(i,{cols:"12"},{default:c(()=>o[3]||(o[3]=[s("h1",null,"Homemade Goods",-1),s("p",null,"Welcome to the gallery of homemade goods! Click a pic for a fullscreen view!",-1)])),_:1}),_(n,{style:{"justify-content":"center"}},{default:c(()=>[s("div",b,[(d(!0),p(E,null,y(e.homemade,(t,g)=>(d(),p("div",{key:g,class:"collage-item",onClick:A=>e.openModal(t)},[s("img",{src:t,alt:"homemade"},null,8,O)],8,L))),128))])]),_:1})]),_:1}),e.showModal?(d(),p("div",{key:0,class:"modal-overlay",onClick:o[2]||(o[2]=(...t)=>e.closeModal&&e.closeModal(...t))},[s("div",{class:"modal-content",onClick:o[1]||(o[1]=j(()=>{},["stop"]))},[s("img",{src:e.modalImage,alt:"Fullscreen homemade"},null,8,P),s("button",{class:"close-btn",onClick:o[0]||(o[0]=(...t)=>e.closeModal&&e.closeModal(...t))},"Close")])])):I("",!0)]),_:1})}const D=C(V,[["render",$],["__scopeId","data-v-289204b6"]]);export{D as default};