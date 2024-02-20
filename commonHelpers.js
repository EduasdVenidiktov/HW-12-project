import{a as b,S as E,i as m}from"./assets/vendor-527658dd.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();async function f(o,t){const e="https://pixabay.com/api/",r={key:"42263617-81d7156b9f7b88cd7b1016c2a",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15,page:t};return(await b.get(e,{params:r})).data}function w(o){const{largeImageURL:t,webformatURL:a,tags:i,likes:e,views:r,comments:n,downloads:L}=o;return`<li class="gallery-item" >
    <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${a}"
        alt="${i}"
      />
    </a>
    <div class="item-text">
    <p><strong>Likes:</strong> ${e}</p>
    <p><strong>Views:</strong> ${r}</p>
    <p><strong>Comments:</strong> ${n}</p>
    <p><strong>Downloads:</strong> ${L}</p>
    </div>
  </li>`}function S(o){return o.map(w).join("")}const s={formEl:document.querySelector(".form"),loadEl:document.querySelector(".loader"),GalleryEl:document.querySelector(".gallery"),loadMore:document.querySelector(".js-btn-load")};let c,l,u;s.formEl.addEventListener("submit",M);s.loadMore.addEventListener("click",q);async function M(o){if(o.preventDefault(),y(),c=o.target.elements.query.value.trim(),!c){g(),d();return}l=1;try{const t=await f(c,l);if(u=Math.ceil(t.totalHits/15),t.hits.length===0){o.target.reset(),v(),d();return}else s.GalleryEl.innerHTML="",h(t.hits)}catch{g(),u=0,s.GalleryEl.innerHTML=""}d(),p(),o.target.reset()}async function q(){l+=1,y();const o=await f(c,l);h(o.hits),d(),p();const t=s.GalleryEl.firstElementChild.getBoundingClientRect().height;scrollBy({behavior:"smooth",top:t*2})}function h(o){const t=S(o);s.GalleryEl.insertAdjacentHTML("beforeend",t),new E(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",animation:250,widthRatio:.8,scaleImageToRatio:!0}).refresh()}function p(){l>=u?($(),P()):R()}function g(){m.error({message:"Please enter a search query.",position:"topRight"})}function v(){m.error({backgroundColor:"#ff0000",position:"topRight",maxWidth:500,message:"Sorry, there are no images matching your search query. Please try again!"})}function P(){m.error({backgroundColor:"#dc143c",message:"We're sorry, but you've reached the end of search results",position:"bottomCenter"})}const y=()=>{s.loadEl.classList.remove("hidden")},d=()=>{s.loadEl.classList.add("hidden")};function R(){s.loadMore.classList.remove("hidden")}function $(){s.loadMore.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
