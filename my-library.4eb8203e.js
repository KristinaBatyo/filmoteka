!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i);var a=i("1VFfL"),c=i("2XwUb"),r=document.querySelector(".movies__list"),s=document.querySelector(".queue"),l=document.querySelector(".watched");function d(t){var n=JSON.parse(localStorage.getItem(t)).length;if(console.log(n),!(n<=18)){var o=new(e(a))(document.getElementById("pagination"),{totalItems:n,itemsPerPage:18,visiblePages:5,centerAlign:!0});o.on("afterMove",(function(e){!function(e,t){var n=JSON.parse(localStorage.getItem(t)).slice(18*e-18,18*e);r.innerHTML="",r.insertAdjacentHTML("beforeend",function(e){return e.map((function(e){var t=e.id,n=e.poster_path,o=e.title,i=e.genres,a=e.release_date,c=e.vote_average;return"<div class='movie-card js-item' data-id='".concat(t,"'>\n    <img\n      class='movie-poster'\n      src='https://image.tmdb.org/t/p/w500").concat(n,"'\n      alt='").concat(o,"'\n      onerror=\"this.onerror=null;this.src='https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg';\"\n      loading='lazy'\n    />\n    <div class='info'>\n      <h2 class='movie-title'>\n      ").concat(o,"\n      </h2>\n      <p class='movie-info'>\n      ").concat(i.length>3?i.slice(0,2).concat([{name:"Other"}]).map((function(e){return e.name})).join(", "):i.map((function(e){return e.name})).join(", "),"\n        | ").concat(a.slice(0,4),"\n        <span class='vote'> ").concat(c.toFixed(1)," </span>\n      </p>\n    </div>\n  </div>")})).join("")}(n))}(e.page,t),(0,c.toggleLightTheme)(),localStorage.setItem("current_page",o.getCurrentPage())}))}}s.addEventListener("click",(function(){d("Queue")})),l.addEventListener("click",(function(){d("Watched")})),i("73ES2"),i("2XwUb");var u=document.querySelector(".queue"),f=document.querySelector(".watched");u.classList.add("btn-is-active"),f.addEventListener("click",(function(){f.classList.add("btn-is-active"),u.classList.remove("btn-is-active")})),u.addEventListener("click",(function(){u.classList.add("btn-is-active"),f.classList.remove("btn-is-active")})),d("Queue")}();
//# sourceMappingURL=my-library.4eb8203e.js.map