import{d as g,f as i,h as E,i as e,_ as h,r as p,o as c,c as M,w as _,a as u,b as t,j as m,k as A,F as C,g as I,l as V}from"./index-BvAfaizc.js";const j=g({setup(){const s=i([]),o=i(!1),a=i(null);return E(async()=>{const l=Object.assign({"/src/stores/photos/artwork/Hummingbird_2022.jpg":()=>e(()=>import("./Hummingbird_2022-C1v-srgY.js"),[]),"/src/stores/photos/artwork/Lake.jpg":()=>e(()=>import("./Lake-DVPzzp5R.js"),[]),"/src/stores/photos/artwork/flower.jpg":()=>e(()=>import("./flower-C8ec1iBR.js"),[]),"/src/stores/photos/artwork/guash.jpg":()=>e(()=>import("./guash-Br3AbicB.js"),[]),"/src/stores/photos/artwork/purp_flower.jpg":()=>e(()=>import("./purp_flower-DSVuRbt5.js"),[]),"/src/stores/photos/artwork/red_flower.jpg":()=>e(()=>import("./red_flower-De_a-OYz.js"),[]),"/src/stores/photos/artwork/swan.jpg":()=>e(()=>import("./swan-Cz7JOCDM.js"),[])});for(const d in l){const n=await l[d]();s.value.push(n.default)}}),{artwork:s,showModal:o,modalImage:a,openModal:l=>{a.value=l,o.value=!0},closeModal:()=>{o.value=!1,a.value=null}}}}),L={class:"collage"},O=["onClick"],P=["src"],D=["src"];function R(s,o,a,v,k,l){const d=p("v-col"),n=p("v-row"),w=p("v-container");return c(),M(w,null,{default:_(()=>[u(n,null,{default:_(()=>[u(d,{cols:"12"},{default:_(()=>o[3]||(o[3]=[t("h1",null,"Artwork",-1),t("p",null,"Welcome to the artwork gallery. Click a pic for a fullscreen view!",-1)])),_:1}),u(n,null,{default:_(()=>[t("div",L,[(c(!0),m(C,null,A(s.artwork,(r,f)=>(c(),m("div",{key:f,class:"collage-item",onClick:T=>s.openModal(r)},[t("img",{src:r,alt:"Artwork"},null,8,P)],8,O))),128))])]),_:1})]),_:1}),s.showModal?(c(),m("div",{key:0,class:"modal-overlay",onClick:o[2]||(o[2]=(...r)=>s.closeModal&&s.closeModal(...r))},[t("div",{class:"modal-content",onClick:o[1]||(o[1]=I(()=>{},["stop"]))},[t("img",{src:s.modalImage,alt:"Fullscreen Artwork"},null,8,D),t("button",{class:"close-btn",onClick:o[0]||(o[0]=(...r)=>s.closeModal&&s.closeModal(...r))},"Close")])])):V("",!0)]),_:1})}const y=h(j,[["render",R],["__scopeId","data-v-f83912f0"]]);export{y as default};