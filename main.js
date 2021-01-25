(()=>{"use strict";var e={887:(e,t,n)=>{e.exports=n.p+"caef77103139f56eb86c.jpg"},637:(e,t,n)=>{e.exports=n.p+"84b985e5d10b64b5c518.jpg"},331:(e,t,n)=>{e.exports=n.p+"fbc5a292bfb06fde2733.jpg"},175:(e,t,n)=>{e.exports=n.p+"20e491820fe9c42992a1.jpg"},517:(e,t,n)=>{e.exports=n.p+"97c764d293c04f733f2c.jpg"},129:(e,t,n)=>{e.exports=n.p+"c073f3f32c0fa0939386.jpg"}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.p="",(()=>{n(887),n(129),n(175),n(331),n(517),n(637);var e=document.querySelector(".profile__avatar-img"),t=document.querySelector(".profile__name"),r=document.querySelector(".profile__job"),o=document.querySelector(".button_type_edit-profile"),i=document.querySelector(".button_type_add-card"),a="#card-template",s=document.querySelector(".popup_type_edit-profile"),u=s.querySelector(".form__input_el_profile-name"),c=s.querySelector(".form__input_el_profile-job"),l=s.querySelector(".form"),f=document.querySelector(".popup_type_add-card"),d=f.querySelector(".form"),h=document.querySelector(".popup_type_show-card"),p=document.querySelector(".popup_type_delete-card"),_=document.querySelector(".popup_type_update-avatar"),m=_.querySelector(".form"),y=_.querySelector(".form__input_el_avatar-link");function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const b=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t?this._container.prepend(e):this._container.append(e)}}])&&v(t.prototype,n),e}();function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t,n){var r=t.data,o=t.handleCardClick,i=t.handleDeleteCard,a=t.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=r,this._cardId=r._id,this._ownerId=r.owner._id,this._name=r.name,this._alt=r.alt,this._link=r.link,this._likes=r.likes,this._cardSelector=n,this._handleCardClick=o,this._handleDeleteCard=i,this._handleLikeCard=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(!0)}},{key:"createCard",value:function(e){return this._element=this._getTemplate(),this._element.image=this._element.querySelector(".card__image"),this._element.name=this._element.querySelector(".card__name"),this._element.trash=this._element.querySelector(".button_type_remove-card"),this._ownerId!==e&&this._element.trash.remove(),this._element.like=this._element.querySelector(".button_type_add-like"),this._likes.some((function(t){return t._id===e}))&&this._element.like.classList.add("button_type_add-like-active"),this._element.likeCount=this._element.querySelector(".card__like-count"),this._element.image.src=this._link,this._element.image.alt=this._alt||this._name,this._element.name.textContent=this._name||"Лучшее место в мире",this._likes.length&&(this._element.likeCount.textContent=this._likes.length),this._setEventListeners(),this._element}},{key:"_setEventListeners",value:function(){var e=this;this._element.trash.addEventListener("click",(function(){e._handleDeleteCard(e._cardId,e._element)})),this._element.image.addEventListener("click",(function(){e._handleCardClick(e._element)})),this._element.like.addEventListener("click",(function(t){e._handleLikeCard(e._cardId,t.target,e._element.likeCount)}))}},{key:"setCardIds",value:function(e,t){this._cardId=t,this._ownerId=e}}])&&g(t.prototype,n),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=n,this._settings=Object.assign({},t),this._inputList=Array.from(this._element.querySelectorAll(this._settings.inputSelector)),this._buttonElement=this._element.querySelector(this._settings.submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetForm",value:function(){var e=this;this._inputErrorList=Array.from(this._element.querySelectorAll(".".concat(this._settings.inputErrorClass))),this._errorList=Array.from(this._element.querySelectorAll(".".concat(this._settings.errorClass))),this._inputErrorList.forEach((function(t){return t.classList.remove(e._settings.inputErrorClass)})),this._errorList.forEach((function(t){return t.classList.remove(e._settings.errorClass)})),this._element.reset(),this._toggleButtonState()}},{key:"_showInputError",value:function(e,t){var n=this._element.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),n.classList.add(this._settings.errorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._element.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.classList.remove(this._settings.errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_formInputHandler",value:function(e){var t=e.target;this._checkInputValidity(t),this._toggleButtonState()}},{key:"_toggleButtonState",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&this._hasInvalidInput()?(this._buttonElement.setAttribute("disabled",!0),this._buttonElement.classList.add(this._settings.inactiveButtonClass)):(this._buttonElement.removeAttribute("disabled",!0),this._buttonElement.classList.remove(this._settings.inactiveButtonClass))}},{key:"setButtonStateEnable",value:function(){this._toggleButtonState(!1)}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(this._inputList,this._buttonElement),this._element.addEventListener("input",(function(t){e._formInputHandler(t)}))}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&S(t.prototype,n),e}();function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const w=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._element=t,this._clickHandler=this._popupClickHandler.bind(this),this._escCloseHandler=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._element.classList.add("popup_opened")}},{key:"close",value:function(){this._element.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close(this._element)}},{key:"_popupClickHandler",value:function(e){e.stopPropagation(),(e.target.classList.contains("popup")||e.target.classList.contains("button_type_close-popup"))&&this.close(this._element)}},{key:"setEventListeners",value:function(){this._element.addEventListener("mousedown",this._clickHandler),document.addEventListener("keydown",this._escCloseHandler)}},{key:"_removeEventListeners",value:function(){this._element.removeEventListener("mousedown",this._clickHandler),document.removeEventListener("keydown",this._escCloseHandler)}}])&&C(t.prototype,n),e}();function L(e){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t){return!t||"object"!==L(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function q(e){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return P(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._image=t._element.querySelector(".popup__image"),t._imageCaption=t._element.querySelector(".popup__caption"),t}return t=a,(n=[{key:"open",value:function(e){var t=e.querySelector(".card__image"),n=e.querySelector(".card__name");this._image.src=t.src,this._image.alt=t.alt,this._imageCaption.textContent=n.textContent,j(q(a.prototype),"open",this).call(this)}}])&&O(t.prototype,n),a}(w);function D(e){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function B(e,t){return(B=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function A(e,t){return!t||"object"!==D(t)&&"function"!=typeof t?U(e):t}function U(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e){return(H=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const V=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&B(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return A(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._formElement=n._element.querySelector(".form"),n._formSubmitButton=n._formElement.querySelector(".button_type_submit"),n._handleFormSubmit=t,n._submitHandler=n._handleFormElementSubmit.bind(U(n)),n}return t=a,(n=[{key:"_handleFormElementSubmit",value:function(e){e.preventDefault(),this._handleFormSubmit(this._getInputValues())}},{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},Array.from(this._formElement.elements).forEach((function(t){t.classList.contains("form__input")&&(e._inputValues[t.name]=t.value)})),this._inputValues}},{key:"setEventListeners",value:function(){this._formElement.addEventListener("submit",this._submitHandler),T(H(a.prototype),"setEventListeners",this).call(this)}},{key:"_removeEventListeners",value:function(){this._formElement.removeEventListener("submit",this._submitHandler),T(H(a.prototype),"_removeEventListeners",this).call(this)}},{key:"setSubmitButtonText",value:function(e){this._formSubmitButton.textContent=e}}])&&R(t.prototype,n),a}(w);function N(e){return(N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t,n){return(J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=G(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function M(e,t){return(M=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t){return!t||"object"!==N(t)&&"function"!=typeof t?$(e):t}function $(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}const K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&M(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=G(r);if(o){var n=G(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._buttonDelete=n._element.querySelector(".button_type_submit"),n._handleDeleteCard=t,n._deleteHandler=n._deleteCard.bind($(n)),n}return t=a,(n=[{key:"_deleteCard",value:function(){this._handleDeleteCard(this._cardDeleteId,this._cardDeleteElement)}},{key:"setDeleteCard",value:function(e,t){this._cardDeleteId=e,this._cardDeleteElement=t}},{key:"setEventListeners",value:function(){this._buttonDelete.addEventListener("click",this._deleteHandler),J(G(a.prototype),"setEventListeners",this).call(this)}},{key:"_removeEventListeners",value:function(){this._buttonDelete.removeEventListener("click",this._deleteHandler),J(G(a.prototype),"_removeEventListeners",this).call(this)}}])&&F(t.prototype,n),a}(w);function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const W=function(){function e(t){var n=t.userId,r=t.userNameSelector,o=t.userJobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userId=n,this._userName=document.querySelector(r),this._userJob=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo={id:this._userId,name:this._userName.textContent,job:this._userJob.textContent},this._userInfo}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about}}])&&Q(t.prototype,n),e}(),X=function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))};function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var ee=new(function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(X)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards/"),{headers:this.headers}).then(X)}},{key:"editProfile",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.job})}).then(X)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(X)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers})}},{key:"addLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(X)}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(X)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(X)}}])&&Y(t.prototype,n),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-19",headers:{authorization:"c965dbbc-afa4-4385-8eef-dcc49737a825","Content-Type":"application/json"}});function te(e,t){e?t.setSubmitButtonText("Сохранение..."):t.setSubmitButtonText("Сохранить")}function ne(e,t){var n=e.data;return new k({data:n,handleCardClick:function(e){ue.setEventListeners(),ue.open(e)},handleDeleteCard:function(e,t){ce.setEventListeners(),ce.open(),ce.setDeleteCard(e,t)},handleLikeCard:function(e,t,n){return function(e,t,n){t.classList.contains("button_type_add-like-active")?ee.deleteLike(e).then((function(e){t.classList.remove("button_type_add-like-active"),e.likes.length?(n.classList.remove("card__like-count_hidden"),n.textContent=e.likes.length):(n.classList.add("card__like-count_hidden"),n.textContent=e.likes.length)})).catch((function(e){return console.log(e)})):ee.addLike(e).then((function(e){t.classList.add("button_type_add-like-active"),n.classList.remove("card__like-count_hidden"),n.textContent=e.likes.length})).catch((function(e){return console.log(e)}))}(e,t,n)}},t)}var re=new E({formSelector:".form",inputSelector:".form__input",submitButtonSelector:".button_type_submit",inactiveButtonClass:"button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},l);re.enableValidation();var oe=new E({formSelector:".form",inputSelector:".form__input",submitButtonSelector:".button_type_submit",inactiveButtonClass:"button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},d);oe.enableValidation();var ie=new E({formSelector:".form",inputSelector:".form__input",submitButtonSelector:".button_type_submit",inactiveButtonClass:"button_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__input-error_active"},m);ie.enableValidation();var ae=new V(s,(function(e){te(!0,ae),ee.editProfile({name:e["profile-name"],job:e["profile-job"]}).then((function(e){de.setUserInfo(e)})).finally((function(){te(!1,ae),ae.close()}))})),se=new V(f,(function(e){te(!0,se),ee.addCard({name:e["card-name"],link:e["card-link"]}).then((function(t){var n=ne({data:{owner:{_id:de.userId},name:e["card-name"],link:e["card-link"],likes:[]}},a);n.setCardIds(t.owner._id,t._id),fe.addItem(n.createCard(de.userId),!0)})).catch((function(e){return console.log(e)})).finally((function(){te(!1,se),se.close()}))})),ue=new x(h),ce=new K(p,(function(e,t){ee.deleteCard(e).then((function(e){e.ok&&(t.remove(),ce.close())}))})),le=new V(_,(function(){te(!0,le),ee.updateAvatar(y.value).then((function(t){return e.src=t.avatar})).catch((function(e){return console.log(e)})).finally((function(){te(!0,le),le.close()}))})),fe=new b({renderer:function(e){var t=ne({data:e},a);fe.addItem(t.createCard(de.userId))}},".cards"),de=new W({userId:"",userNameSelector:".profile__name",userJobSelector:".profile__job"});o.addEventListener("click",(function(){re.resetForm(),re.setButtonStateEnable();var e=de.getUserInfo(),t=e.name,n=e.job;u.value=t,c.value=n,ae.setEventListeners(),ae.open()})),i.addEventListener("click",(function(){oe.resetForm(),se.setEventListeners(),se.open()})),e.parentElement.addEventListener("click",(function(t){t.stopPropagation(),ie.resetForm(),ie.setButtonStateEnable(),y.value=e.src,le.setEventListeners(),le.open()})),Promise.all([ee.getUserInfo(),ee.getInitialCards()]).then((function(n){var o,i,a=(i=2,function(e){if(Array.isArray(e))return e}(o=n)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}}(o,i)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=a[0],u=a[1];de.userId=s._id,e.src=s.avatar,e.alt=s.name,t.textContent=s.name,r.textContent=s.about,fe.renderItems(u)})).catch((function(e){console.log(e)}))})()})();