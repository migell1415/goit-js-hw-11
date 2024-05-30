import{a as d,S as u,i as f}from"./assets/vendor-b11e2a50.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const h="23963114-6d0d5d874ae460d9125bacd21",y="https://pixabay.com/api/";class m{constructor(){this.query="",this.page=1}async fetchPhoto(){return(await d.get(`${y}?key=${h}&q=${this.query}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=12`)).data}reset(){this.page=1}}let i;function g(e,s){const a=e.map(n=>b(n)).join("");s.insertAdjacentHTML("beforeend",a),i?i.refresh():i=new u(".gallery a")}function b(e){return`
    <a href="${e.largeImageURL}" class="image-card">
      <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      <div class="info">
        <p class="info_p">
          <span class="label">Likes:</span>
          <span class="value">${e.likes}</span>
        </p>
        <p class="info_p">
          <span class="label">Views:</span>
          <span class="value">${e.views}</span>
        </p>
        <p class="info_p">
          <span class="label">Comments:</span>
          <span class="value">${e.comments}</span>
        </p>
        <p class="info_p">
          <span class="label">Downloads:</span>
          <span class="value">${e.downloads}</span>
        </p>
      </div>
    </a>
  `}const o={searchform:document.querySelector(".form"),galleryContainer:document.querySelector(".gallery"),loader:document.createElement("div")};o.loader.className="loader";document.body.appendChild(o.loader);const c=new m;o.searchform.addEventListener("submit",L);function L(e){e.preventDefault();const s=e.currentTarget.elements.query.value.trim();if(!s)return p("red","Please, fill the main field");w(),o.galleryContainer.innerHTML="",c.query=s,c.fetchPhoto().then(a=>{a.hits.length===0?p("red","Sorry, there are no images matching your search query. Please try again!"):g(a.hits,o.galleryContainer)}).catch(a=>{console.error("Error:",a),p("red","An error occurred while fetching images. Please try again later.")}).finally(()=>{v(),o.searchform.reset()}),c.reset()}function p(e,s){f.show({color:e,message:s,position:"topRight"})}function w(){o.loader.style.display="block"}function v(){o.loader.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
