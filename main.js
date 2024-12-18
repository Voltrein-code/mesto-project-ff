(()=>{"use strict";var t=function(t){if("Escape"===t.key){var n=document.querySelector(".popup_is-opened");e(n)}},e=function(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keyup",t)},n=function(e){e.classList.add("popup_is-opened"),document.addEventListener("keyup",t)},r=function(t){t.querySelector(".popup__close").addEventListener("click",(function(){e(t)})),t.addEventListener("mousedown",(function(n){n.target.classList.contains("popup")&&e(t)}))},o=document.querySelector(".profile__title"),i=document.querySelector(".profile__description"),a=document.querySelector(".profile__image"),c=(document.querySelector("#card-template").content,document.querySelector(".places__list")),u=document.querySelector(".profile__add-button"),s=document.querySelector(".profile__edit-button"),l=document.querySelector(".profile__avatar-edit"),f=document.querySelector(".popup_type_new-card"),p=document.querySelector(".popup_type_edit"),d=document.querySelector(".popup_type_image"),y=document.querySelector(".popup_type_delete"),h=document.querySelector(".popup_type_avatar"),v=d.querySelector(".popup__image"),m=d.querySelector(".popup__caption"),b=document.forms["new-place"],g=document.forms["edit-profile"],w=document.forms["delete-card"],S=document.forms["update-avatar"],_=b.elements["place-name"],k=b.elements.link,j=g.elements.name,E=g.elements.description,O=S.elements.link,L=function(t,e,r,o){var i=t.name,a=t.link,c=t.likes,u=t._id,s=t.owner,l=e.handlerDelete,f=e.handlerLike,p=e.handlerImageClick,d=e.loadingTool,h=document.querySelector("#card-template").content.querySelector(".card").cloneNode(!0),v=h.querySelector(".card__image"),m=h.querySelector(".card__title"),b=h.querySelector(".card__like-count"),g=h.querySelector(".card__delete-button"),S=h.querySelector(".card__like-button");return v.src=a,v.alt=i,m.textContent=i,b.textContent=c.length,o&&(c.some((function(t){return t._id===o}))&&S.classList.add("card__like-button_is-active"),s._id!==o&&g.classList.add("card__delete-button_hidden")),g.addEventListener("click",(function(t){n(y);var e=t.target.closest(".card");w.addEventListener("submit",(function t(n){n.preventDefault(),l(u,e,r,d),w.removeEventListener("submit",t)}))})),S.addEventListener("click",(function(t){f({id:u,likeButton:t.target,likeCount:b},r)})),v.addEventListener("click",(function(){p(t)})),h};function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function P(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,q(r.key),r)}}function q(t){var e=function(t){if("object"!=C(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==C(e)?e:e+""}function T(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function A(t,e){return t.get(D(t,e))}function D(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var M=new WeakMap,I=new WeakSet,x=function(){return t=function t(e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,n=I),n.add(this),function(t,e){T(t,e),e.set(t,void 0)}(this,M),function(t,e,n){t.set(D(t,e),n)}(M,this,e)},(e=[{key:"disableButton",value:function(t){t.disabled=!0,t.classList.add(A(M,this).inactiveButtonClass)}},{key:"clearValidation",value:function(t){var e=this,n=Array.from(t.querySelectorAll(A(M,this).inputSelector)),r=t.querySelector(A(M,this).submitButtonSelector);n.forEach((function(n){var r=t.querySelector("#".concat(n.id,"-error"));D(I,e,U).call(e,r,n)})),this.disableButton(r)}},{key:"enableValidation",value:function(t){var e=this;Array.from(t).forEach((function(t){D(I,e,J).call(e,t)}))}}])&&P(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function W(t,e){var n=e.validity.patternMismatch?e.dataset.errorMessage:"",r=t.querySelector("#".concat(e.id,"-error"));e.setCustomValidity(n),e.validity.valid?D(I,this,U).call(this,r,e):D(I,this,B).call(this,r,e)}function B(t,e){e.classList.add(A(M,this).inputErrorClass),t.textContent=e.validationMessage,t.classList.add(A(M,this).errorClass)}function U(t,e){e.classList.remove(A(M,this).inputErrorClass),t.textContent="",t.classList.remove(A(M,this).errorClass)}function z(t){return t.some((function(t){return!t.validity.valid}))}function V(t){t.disabled=!1,t.classList.remove(A(M,this).inactiveButtonClass)}function N(t,e){D(I,this,z).call(this,t)?this.disableButton(e):D(I,this,V).call(this,e)}function J(t){var e=this,n=Array.from(t.querySelectorAll(A(M,this).inputSelector)),r=t.querySelector(A(M,this).submitButtonSelector);D(I,this,N).call(this,n,r),n.forEach((function(o){o.addEventListener("input",(function(){D(I,e,W).call(e,t,o),D(I,e,N).call(e,n,r)}))}))}function H(t){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},H(t)}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){F(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function F(t,e,n){return(e=K(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function G(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,K(r.key),r)}}function K(t){var e=function(t){if("object"!=H(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=H(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==H(e)?e:e+""}function Q(t,e,n){X(t,e),e.set(t,n)}function X(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Y(t,e){return t.get(tt(t,e))}function Z(t,e,n){return t.set(tt(t,e),n),n}function tt(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var et=new WeakMap,nt=new WeakMap,rt=new WeakSet,ot=function(){return t=function t(e){var n;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),X(this,n=rt),n.add(this),Q(this,et,void 0),Q(this,nt,void 0),Z(et,this,e.headers),Z(nt,this,e.baseURL)},(e=[{key:"getUserInfo",value:function(){return fetch("".concat(Y(nt,this),"/users/me"),{headers:Y(et,this)}).then(tt(rt,this,it))}},{key:"getCards",value:function(){return fetch("".concat(Y(nt,this),"/cards"),{headers:Y(et,this)}).then(tt(rt,this,it))}},{key:"addCard",value:function(t){return fetch("".concat(Y(nt,this),"/cards"),{headers:$($({},Y(et,this)),{},{"Content-Type":"application/json"}),method:"POST",body:JSON.stringify($({},t))}).then(tt(rt,this,it))}},{key:"updateUser",value:function(t){return fetch("".concat(Y(nt,this),"/users/me"),{headers:$($({},Y(et,this)),{},{"Content-Type":"application/json"}),method:"PATCH",body:JSON.stringify($({},t))}).then(tt(rt,this,it))}},{key:"setLikeStatus",value:function(t,e){return fetch("".concat(Y(nt,this),"/cards/likes/").concat(t),{headers:Y(et,this),method:e?"DELETE":"PUT"}).then(tt(rt,this,it))}},{key:"deleteCard",value:function(t){return fetch("".concat(Y(nt,this),"/cards/").concat(t),{headers:Y(et,this),method:"DELETE"}).then(tt(rt,this,it))}},{key:"updateAvatar",value:function(t){return fetch("".concat(Y(nt,this),"/users/me/avatar"),{headers:$($({},Y(et,this)),{},{"Content-Type":"application/json"}),method:"PATCH",body:JSON.stringify({avatar:t})}).then(tt(rt,this,it))}}])&&G(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function it(t){return t.ok?t.json():Promise.reject("Не удалось получить ответ от сервера. Произошла ошибка: ".concat(t.status))}function at(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function ct(t,e,n){return(e=lt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ut(t){return ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ut(t)}function st(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,lt(r.key),r)}}function lt(t){var e=function(t){if("object"!=ut(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=ut(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==ut(e)?e:e+""}function ft(t,e,n){(function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")})(t,e),e.set(t,n)}function pt(t,e){return t.get(yt(t,e))}function dt(t,e,n){return t.set(yt(t,e),n),n}function yt(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var ht=new WeakMap,vt=new WeakMap,mt=new WeakMap,bt=new WeakMap,gt=function(){return t=function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),ft(this,ht,void 0),ft(this,vt,void 0),ft(this,mt,void 0),ft(this,bt,void 0),dt(ht,this,e),dt(vt,this,n),dt(mt,this,r)},e=[{key:"userInfo",get:function(){return pt(bt,this)},set:function(t){if("object"!==ut(t))throw new Error("Ошибка получения данных пользователя. Данные о пользователе должны быть в виде объекта.");dt(bt,this,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?at(Object(n),!0).forEach((function(e){ct(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):at(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t))}},{key:"id",get:function(){return pt(bt,this)._id}},{key:"setAvatar",value:function(t){pt(bt,this).avatar=t}},{key:"renderUserInfo",value:function(){var t=pt(bt,this),e=t.name,n=t.about;pt(ht,this).textContent=e,pt(vt,this).textContent=n,this.renderAvatar()}},{key:"renderAvatar",value:function(){var t=pt(bt,this),e=t.name,n=t.avatar;pt(mt,this).src=n,pt(mt,this).alt="Аватар пользователя: ".concat(e)}}],e&&st(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function wt(t){return wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},wt(t)}function St(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,_t(r.key),r)}}function _t(t){var e=function(t){if("object"!=wt(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=wt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==wt(e)?e:e+""}function kt(t,e,n){(function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")})(t,e),e.set(t,n)}function jt(t,e){return t.get(Ot(t,e))}function Et(t,e,n){return t.set(Ot(t,e),n),n}function Ot(t,e,n){if("function"==typeof t?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}var Lt=new WeakMap,Ct=new WeakMap,Pt=new WeakMap,qt=new WeakMap,Tt=function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),kt(this,Lt,void 0),kt(this,Ct,void 0),kt(this,Pt,void 0),kt(this,qt,void 0),Et(Ct,this,e)},(e=[{key:"popup",set:function(t){var e=t.querySelector(jt(Ct,this));e?(Et(Lt,this,t),Et(Pt,this,e),Et(qt,this,e.textContent)):console.log("Данный попап не содержит кнопки с заданными селектором")}},{key:"toggleLoading",value:function(t){var e=jt(Lt,this).classList.contains("popup_type_delete")?"Удаление...":"Сохранение...";jt(Pt,this).textContent=t?e:jt(qt,this)}}])&&St(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}();function At(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var Dt=new x({formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"}),Mt=new ot({headers:{authorization:"692a357d-afe9-4b35-8cd7-75d259739a6d"},baseURL:"https://nomoreparties.co/v1/cohort-mag-3/"}),It=new gt(o,i,a),xt=new Tt(".button"),Wt={handlerDelete:function(t,n,r,o){o.popup=y,o.toggleLoading(!0),r.deleteCard(t).then((function(t){n.remove()})).catch((function(t){console.log(t)})).finally((function(){o.toggleLoading(!1),e(y)}))},handlerLike:function(t,e){var n=t.id,r=t.likeButton,o=t.likeCount,i=r.classList.contains("card__like-button_is-active");e.setLikeStatus(n,i).then((function(t){r.classList.toggle("card__like-button_is-active"),o.textContent=t.likes.length})).catch((function(t){console.log(t)}))},handlerImageClick:function(t){var e=t.name,r=t.link;v.src=r,v.alt=e,m.textContent=e,n(d)},loadingTool:xt};Promise.all([Mt.getUserInfo(),Mt.getCards()]).then((function(t){var e,n,r=(n=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,n)||function(t,e){if(t){if("string"==typeof t)return At(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?At(t,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];It.userInfo=o,It.renderUserInfo(),i.forEach((function(t){c.append(L(t,Wt,Mt,It.id))}))})).catch((function(t){console.log(t)})),u.addEventListener("click",(function(){n(f)})),s.addEventListener("click",(function(){j.value=o.textContent,E.value=i.textContent,n(p),Dt.clearValidation(g)})),l.addEventListener("click",(function(){n(h)})),g.addEventListener("submit",(function(t){t.preventDefault(),xt.popup=p,xt.toggleLoading(!0),Mt.updateUser({name:j.value,about:E.value}).then((function(t){It.userInfo=t})).catch((function(t){console.log(t)})).finally((function(){It.renderUserInfo(),e(p),xt.toggleLoading(!1)}))})),S.addEventListener("submit",(function(t){t.preventDefault(),xt.popup=h,xt.toggleLoading(!0),Mt.updateAvatar(O.value).then((function(t){It.setAvatar(t.avatar)})).catch((function(t){console.log(t)})).finally((function(){It.renderUserInfo(),e(h),xt.toggleLoading(!1)}))})),b.addEventListener("submit",(function(t){t.preventDefault(),xt.popup=f,xt.toggleLoading(!0),Mt.addCard({name:_.value,link:k.value}).then((function(t){c.prepend(L(t,Wt,Mt))})).catch((function(t){console.log(t)})).finally((function(){e(f),b.reset(),xt.toggleLoading(!1)}))})),b.addEventListener("reset",(function(){var t=b.querySelector(".popup__button");Dt.disableButton(t)})),r(f),r(p),r(d),r(y),r(h),Dt.enableValidation(document.forms)})();