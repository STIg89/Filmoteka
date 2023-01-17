function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=t.parcelRequire51f8;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},t.parcelRequire51f8=r),r.register("jdXd5",(function(e,t){var i=r("2mCIo");if(localStorage.getItem("uid")&&localStorage.getItem("username")){if(!i.refs.headerUserLogedinContainer.classList.contains("visually-hidden"))return;i.refs.headerUserLogedinContainer.classList.remove("visually-hidden"),i.refs.headerUserEmailDiv.innerHTML=`Hello, </br> ${localStorage.getItem("username")}`}else{if(!i.refs.headerUserNoLoginContainer.classList.contains("visually-hidden"))return;i.refs.headerUserNoLoginContainer.classList.remove("visually-hidden")}})),r("1iWqc"),r("2mCIo"),r("jdXd5"),r("7nHSx");var s,a,o=r("1iWqc"),l=r("1HsQi"),c=r("2mCIo"),d={};function u(e,t){try{"string"==typeof t?localStorage.setItem(e,t):localStorage.setItem(e,JSON.stringify(t))}catch(e){console.error(e)}}s=void 0===t?"undefined"==typeof window?d:window:t,a=function(e){if(void 0===e&&void 0===e.document)return!1;var t,i,n,r,s,a="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",o='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",d="Warning",u="Info",p={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},h="Success",f="Failure",m="Warning",g="Info",v={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},b="Show",y="Ask",x="Prompt",w={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",I="Circle",T="Arrows",S="Dots",_="Pulse",N="Custom",C="Notiflix",L={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},A="Standard",O="Hourglass",M="Circle",R="Arrows",D="Dots",P="Pulse",z={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},B=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+a)},W=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+a)},U=function(t){return t||(t="head"),null!==e.document[t]||(B('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},F=function(t,i){if(!U("head"))return!1;if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}},j=function(){var e={},t=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=t&&"[object Object]"===Object.prototype.toString.call(i[n])?j(e[n],i[n]):i[n])};i<arguments.length;i++)n(arguments[i]);return e},H=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},$=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},q=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Y=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Q=function(i,n,r,s){if(!U("body"))return!1;t||le.Notify.init({});var a=j(!0,t,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof s&&!Array.isArray(s)){var h={};"object"==typeof r?h=r:"object"==typeof s&&(h=s),t=j(!0,t,h)}var f=t[i.toLocaleLowerCase("en")];J++,"string"!=typeof n&&(n="Notiflix "+i),t.plainText&&(n=H(n)),!t.plainText&&n.length>t.messageMaxLength&&(t=j(!0,t,{closeButton:!0,messageMaxLength:150}),n='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),n.length>t.messageMaxLength&&(n=n.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(f.fontAwesomeIconColor=f.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(p.wrapID)||e.document.createElement("div");if(m.id=p.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(p.overlayID)||e.document.createElement("div");g.id=p.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=f.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(p.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(p.wrapID)||e.document.body.appendChild(m);var v=e.document.createElement("div");v.id=t.ID+"-"+J,v.className=t.className+" "+f.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof r?"nx-with-close-button":"")+" "+("function"==typeof r?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=t.fontSize,v.style.color=f.textColor,v.style.background=f.background,v.style.borderRadius=t.borderRadius,v.style.pointerEvents="all",t.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+t.fontFamily+'", '+o,t.cssAnimation&&(v.style.animationDuration=t.cssAnimationDuration+"ms");var b="";if(t.closeButton&&"function"!=typeof r&&(b='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+f.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)v.innerHTML='<i style="color:'+f.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+f.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?b:"");else{var y="";i===l?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===c?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===d?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===u&&(y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=y+'<span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?b:"")}else v.innerHTML='<span class="nx-message">'+n+"</span>"+(t.closeButton?b:"");if("left-bottom"===t.position||"right-bottom"===t.position){var x=e.document.getElementById(p.wrapID);x.insertBefore(v,x.firstChild)}else e.document.getElementById(p.wrapID).appendChild(v);var w=e.document.getElementById(v.id);if(w){var k,E,I=function(){w.classList.add("nx-remove");var t=e.document.getElementById(p.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(k)},T=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(p.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(E)};if(t.closeButton&&"function"!=typeof r&&e.document.getElementById(v.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof r||t.clickToClose)&&w.addEventListener("click",(function(){"function"==typeof r&&r(),I();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof r){var S=function(){k=setTimeout((function(){I()}),t.timeout),E=setTimeout((function(){T()}),t.timeout+t.cssAnimationDuration)};S(),t.pauseOnHover&&(w.addEventListener("mouseenter",(function(){w.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),w.addEventListener("mouseleave",(function(){w.classList.remove("nx-paused"),S()})))}}if(t.showOnlyTheLastOne&&0<J)for(var _,N=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+J+"])"),C=0;C<N.length;C++)null!==(_=N[C]).parentNode&&_.parentNode.removeChild(_);t=j(!0,t,a)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,n,r,s,a,l){if(!U("body"))return!1;i||le.Report.init({});var c={};if("object"==typeof a&&!Array.isArray(a)||"object"==typeof l&&!Array.isArray(l)){var d={};"object"==typeof a?d=a:"object"==typeof l&&(d=l),c=j(!0,i,{}),i=j(!0,i,d)}var u=i[t.toLocaleLowerCase("en")];"string"!=typeof n&&(n="Notiflix "+t),"string"!=typeof r&&(t===h?r='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===f?r='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?r='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(r='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof s&&(s="Okay"),i.plainText&&(n=H(n),r=H(r),s=H(s)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',s="Okay"),r.length>i.messageMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',s="Okay"),s.length>i.buttonMaxLength&&(n="Possible HTML Tags Error",r='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',s="Okay")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),r.length>i.messageMaxLength&&(r=r.substring(0,i.messageMaxLength)+"..."),s.length>i.buttonMaxLength&&(s=s.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var p=e.document.createElement("div");p.id=v.ID,p.className=i.className,p.style.zIndex=i.zindex,p.style.borderRadius=i.borderRadius,p.style.fontFamily='"'+i.fontFamily+'", '+o,i.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on")),p.style.display="flex",p.style.flexWrap="wrap",p.style.flexDirection="column",p.style.alignItems="center",p.style.justifyContent="center";var b="",y=!0===i.backOverlayClickToClose;i.backOverlay&&(b='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(y?" nx-report-click-to-close":"")+'" style="background:'+(u.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var x,w,k="";if(t===h?(x=i.svgSize,w=u.svgColor,x||(x="110px"),w||(w="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+x+'" height="'+x+'" fill="'+w+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===f?k=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor):t===m?k=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor):t===g&&(k=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor)),p.innerHTML=b+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+k+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+u.titleColor+';">'+n+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+u.messageColor+';">'+r+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+u.buttonBackground+"; color:"+u.buttonColor+';">'+s+"</a></div>",!e.document.getElementById(p.id)){e.document.body.appendChild(p);var E=function(){var t=e.document.getElementById(p.id);t.classList.add("nx-remove");var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(n)}),i.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof a&&a(),E()})),b&&y&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}i=j(!0,i,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ie=function(t,i,r,s,a,l,c,d,u){if(!U("body"))return!1;n||le.Confirm.init({});var p=j(!0,n,{});"object"!=typeof u||Array.isArray(u)||(n=j(!0,n,u)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof r&&(r="Do you agree with me?"),"string"!=typeof a&&(a="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof d&&(d=void 0),n.plainText&&(i=H(i),r=H(r),a=H(a),l=H(l)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',a="Okay",l="..."),r.length>n.messageMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',a="Okay",l="..."),(a.length||l.length)>n.buttonsMaxLength&&(i="Possible HTML Tags Error",r='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',a="Okay",l="...")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),r.length>n.messageMaxLength&&(r=r.substring(0,n.messageMaxLength)+"..."),a.length>n.buttonsMaxLength&&(a=a.substring(0,n.buttonsMaxLength)+"..."),l.length>n.buttonsMaxLength&&(l=l.substring(0,n.buttonsMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var h=e.document.createElement("div");h.id=w.ID,h.className=n.className+(n.cssAnimation?" nx-with-animation nx-"+n.cssAnimationStyle:""),h.style.zIndex=n.zindex,h.style.padding=n.distance,n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on"));var f="string"==typeof n.position?n.position.trim():"center";h.classList.add("nx-position-"+f),h.style.fontFamily='"'+n.fontFamily+'", '+o;var m="";n.backOverlay&&(m='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+'" style="background:'+n.backOverlayColor+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+n.cancelButtonColor+";background:"+n.cancelButtonBackground+";font-size:"+n.buttonsFontSize+';">'+l+"</a>");var v="",b=null,k=void 0;if(t===y||t===x){b=s||"";var E=t===y||200<b.length?Math.ceil(1.5*b.length):250;v='<div><input id="NXConfirmValidationInput" type="text" '+(t===x?'value="'+b+'"':"")+' maxlength="'+E+'" style="font-size:'+n.messageFontSize+";border-radius: "+n.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(h.innerHTML=m+'<div class="'+n.className+'-content" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+"ms; border-radius: "+n.borderRadius+';"><div class="'+n.className+'-head"><h5 style="color:'+n.titleColor+";font-size:"+n.titleFontSize+';">'+i+'</h5><div style="color:'+n.messageColor+";font-size:"+n.messageFontSize+';">'+r+v+'</div></div><div class="'+n.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+n.okButtonColor+";background:"+n.okButtonBackground+";font-size:"+n.buttonsFontSize+';">'+a+"</a>"+g+"</div></div>",!e.document.getElementById(h.id)){e.document.body.appendChild(h);var I=e.document.getElementById(h.id),T=e.document.getElementById("NXConfirmButtonOk"),S=e.document.getElementById("NXConfirmValidationInput");S&&(S.focus(),S.setSelectionRange(0,(S.value||"").length),S.addEventListener("keyup",(function(e){var i=e.target.value;t===y&&i!==b?(e.preventDefault(),S.classList.add("nx-validation-failure"),S.classList.remove("nx-validation-success")):(t===y&&(S.classList.remove("nx-validation-failure"),S.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&T.dispatchEvent(new Event("click")))}))),T.addEventListener("click",(function(e){if(t===y&&b&&S){if((S.value||"").toString()!==b)return S.focus(),S.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;S.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===x&&S&&(k=S.value||""),c(k)),I.classList.add("nx-remove");var i=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(i))}),n.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof d&&(t===x&&S&&(k=S.value||""),d(k)),I.classList.add("nx-remove");var e=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(e))}),n.cssAnimationDuration)}))}n=j(!0,n,p)},ne=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},re=function(t,i,n,s,a){if(!U("body"))return!1;r||le.Loading.init({});var l=j(!0,r,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof n&&!Array.isArray(n)){var c={};"object"==typeof i?c=i:"object"==typeof n&&(c=n),r=j(!0,r,c)}var d="";if("string"==typeof i&&0<i.length&&(d=i),s){var u="";0<(d=d.length>r.messageMaxLength?H(d).toString().substring(0,r.messageMaxLength)+"...":H(d).toString()).length&&(u='<p id="'+r.messageID+'" class="nx-loading-message" style="color:'+r.messageColor+";font-size:"+r.messageFontSize+';">'+d+"</p>"),r.cssAnimation||(r.cssAnimationDuration=0);var p="";if(t===k)p=$(r.svgSize,r.svgColor);else if(t===E)p=V(r.svgSize,r.svgColor);else if(t===I)p=G(r.svgSize,r.svgColor);else if(t===T)p=X(r.svgSize,r.svgColor);else if(t===S)p=q(r.svgSize,r.svgColor);else if(t===_)p=K(r.svgSize,r.svgColor);else if(t===N&&null!==r.customSvgCode&&null===r.customSvgUrl)p=r.customSvgCode||"";else if(t===N&&null!==r.customSvgUrl&&null===r.customSvgCode)p='<img class="nx-custom-loading-icon" width="'+r.svgSize+'" height="'+r.svgSize+'" src="'+r.customSvgUrl+'" alt="Notiflix">';else{if(t===N&&(null===r.customSvgUrl||null===r.customSvgCode))return B('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;p=function(e,t,i){return e||(e="60px"),t||(t="#f8f8f8"),i||(i="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+i+'" stroke="'+i+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(r.svgSize,"#f8f8f8","#32c682")}var h=parseInt((r.svgSize||"").replace(/[^0-9]/g,"")),f=e.innerWidth,m=h>=f?f-40+"px":h+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+r.className+"-icon"+(0<d.length?" nx-with-message":"")+'">'+p+"</div>",v=e.document.createElement("div");v.id=L.ID,v.className=r.className+(r.cssAnimation?" nx-with-animation":"")+(r.clickToClose?" nx-loading-click-to-close":""),v.style.zIndex=r.zindex,v.style.background=r.backgroundColor,v.style.animationDuration=r.cssAnimationDuration+"ms",v.style.fontFamily='"'+r.fontFamily+'", '+o,v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.alignItems="center",v.style.justifyContent="center",r.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.innerHTML=g+u,!e.document.getElementById(v.id)&&(e.document.body.appendChild(v),r.clickToClose)&&e.document.getElementById(v.id).addEventListener("click",(function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),r.cssAnimationDuration)}))}else if(e.document.getElementById(L.ID))var b=e.document.getElementById(L.ID),y=setTimeout((function(){b.classList.add("nx-remove");var e=setTimeout((function(){null!==b.parentNode&&(b.parentNode.removeChild(b),clearTimeout(e))}),r.cssAnimationDuration);clearTimeout(y)}),a);r=j(!0,r,l)},se=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},ae=0,oe=function(t,i,n,r,a,l){var c;if(Array.isArray(n)){if(1>n.length)return B("Array of HTMLElements should contains at least one HTMLElement."),!1;c=n}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,n)){if(1>n.length)return B("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(n)}else{if("string"!=typeof n||1>(n||"").length||1===(n||"").length&&("#"===(n||"")[0]||"."===(n||"")[0]))return B("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var d=e.document.querySelectorAll(n);if(1>d.length)return B('You called the "Notiflix.Block..." function with "'+n+'" selector, but there is no such element(s) in the document.'),!1;c=d}s||le.Block.init({});var u=j(!0,s,{});if("object"==typeof r&&!Array.isArray(r)||"object"==typeof a&&!Array.isArray(a)){var p={};"object"==typeof r?p=r:"object"==typeof a&&(p=a),s=j(!0,s,p)}var h="";"string"==typeof r&&0<r.length&&(h=r),s.cssAnimation||(s.cssAnimationDuration=0);var f=z.className;"string"==typeof s.className&&(f=s.className.trim());var m="number"==typeof s.querySelectorLimit?s.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,v="nx-block-temporary-position";if(t){for(var b,y=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],x=0;x<g;x++)if(b=c[x]){if(-1<y.indexOf(b.tagName.toLocaleLowerCase("en")))break;var w=b.querySelectorAll("[id^="+z.ID+"]");if(1>w.length){var k="";i&&(k=i===O?V(s.svgSize,s.svgColor):i===M?G(s.svgSize,s.svgColor):i===R?X(s.svgSize,s.svgColor):i===D?q(s.svgSize,s.svgColor):i===P?K(s.svgSize,s.svgColor):$(s.svgSize,s.svgColor));var E='<span class="'+f+'-icon" style="width:'+s.svgSize+";height:"+s.svgSize+';">'+k+"</span>",I="";0<h.length&&(h=h.length>s.messageMaxLength?H(h).substring(0,s.messageMaxLength)+"...":H(h),I='<span style="font-size:'+s.messageFontSize+";color:"+s.messageColor+';" class="'+f+'-message">'+h+"</span>"),ae++;var T=e.document.createElement("div");T.id=z.ID+"-"+ae,T.className=f+(s.cssAnimation?" nx-with-animation":""),T.style.position=s.position,T.style.zIndex=s.zindex,T.style.background=s.backgroundColor,T.style.animationDuration=s.cssAnimationDuration+"ms",T.style.fontFamily='"'+s.fontFamily+'", '+o,T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",s.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=E+I;var S,_=e.getComputedStyle(b).getPropertyValue("position"),N="string"==typeof _?_.toLocaleLowerCase("en"):"relative",C=Math.round(1.25*parseInt(s.svgSize))+40,L="";C>(b.offsetHeight||0)&&(L="min-height:"+C+"px;"),S=b.getAttribute("id")?"#"+b.getAttribute("id"):b.classList[0]?"."+b.classList[0]:(b.tagName||"").toLocaleLowerCase("en");var A="",F=-1>=["absolute","relative","fixed","sticky"].indexOf(N);if(F||0<L.length){if(!U("head"))return!1;F&&(A="position:relative!important;");var Y='<style id="Style-'+z.ID+"-"+ae+'">'+S+"."+v+"{"+A+L+"}</style>",J=e.document.createRange();J.selectNode(e.document.head);var Q=J.createContextualFragment(Y);e.document.head.appendChild(Q),b.classList.add(v)}b.appendChild(T)}}}else var Z=function(t){var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var n=t.getAttribute("id"),r=e.document.getElementById("Style-"+n);r&&null!==r.parentNode&&r.parentNode.removeChild(r),clearTimeout(i)}),s.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,i=0;i<e.length;i++)(t=e[i])&&(t.classList.add("nx-remove"),Z(t));else W("string"==typeof n?'"Notiflix.Block.remove();" function called with "'+n+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+n+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(v),clearTimeout(t)}),s.cssAnimationDuration+300)},ie=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),w=e.querySelectorAll("[id^="+z.ID+"]"),ee(w));clearTimeout(ie)}),l);s=j(!0,s,u)},le={Notify:{init:function(e){t=j(!0,p,e),F(Y,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=j(!0,t,e)):(B("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,i){Q(l,e,t,i)},failure:function(e,t,i){Q(c,e,t,i)},warning:function(e,t,i){Q(d,e,t,i)},info:function(e,t,i){Q(u,e,t,i)}},Report:{init:function(e){i=j(!0,v,e),F(Z,"NotiflixReportInternalCSS")},merge:function(e){return i?void(i=j(!0,i,e)):(B("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,i,n,r){ee(h,e,t,i,n,r)},failure:function(e,t,i,n,r){ee(f,e,t,i,n,r)},warning:function(e,t,i,n,r){ee(m,e,t,i,n,r)},info:function(e,t,i,n,r){ee(g,e,t,i,n,r)}},Confirm:{init:function(e){n=j(!0,w,e),F(te,"NotiflixConfirmInternalCSS")},merge:function(e){return n?void(n=j(!0,n,e)):(B("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,i,n,r,s,a){ie(b,e,t,null,i,n,r,s,a)},ask:function(e,t,i,n,r,s,a,o){ie(y,e,t,i,n,r,s,a,o)},prompt:function(e,t,i,n,r,s,a,o){ie(x,e,t,i,n,r,s,a,o)}},Loading:{init:function(e){r=j(!0,L,e),F(ne,"NotiflixLoadingInternalCSS")},merge:function(e){return r?void(r=j(!0,r,e)):(B("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){re(k,e,t,!0,0)},hourglass:function(e,t){re(E,e,t,!0,0)},circle:function(e,t){re(I,e,t,!0,0)},arrows:function(e,t){re(T,e,t,!0,0)},dots:function(e,t){re(S,e,t,!0,0)},pulse:function(e,t){re(_,e,t,!0,0)},custom:function(e,t){re(N,e,t,!0,0)},notiflix:function(e,t){re(C,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),re(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var i=e.document.getElementById(L.ID);if(i)if(0<t.length){t=t.length>r.messageMaxLength?H(t).substring(0,r.messageMaxLength)+"...":H(t);var n=i.getElementsByTagName("p")[0];if(n)n.innerHTML=t;else{var s=e.document.createElement("p");s.id=r.messageID,s.className="nx-loading-message nx-loading-message-new",s.style.color=r.messageColor,s.style.fontSize=r.messageFontSize,s.innerHTML=t,i.appendChild(s)}}else B("Where is the new message?")}(t)}},Block:{init:function(e){s=j(!0,z,e),F(se,"NotiflixBlockInternalCSS")},merge:function(e){return s?void(s=j(!0,s,e)):(B('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,i){oe(!0,A,e,t,i)},hourglass:function(e,t,i){oe(!0,O,e,t,i)},circle:function(e,t,i){oe(!0,M,e,t,i)},arrows:function(e,t,i){oe(!0,R,e,t,i)},dots:function(e,t,i){oe(!0,D,e,t,i)},pulse:function(e,t,i){oe(!0,P,e,t,i)},remove:function(e,t){"number"!=typeof t&&(t=0),oe(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?j(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return a(s)})):"object"==typeof d?d=a(s):s.Notiflix=a(s);var p=r("JcIhZ");const{moviesOnInputList:h,inputEl:f}=c.refs;console.log(h),f.addEventListener("submit",(async function(t){t.preventDefault();const i=t.currentTarget.elements.searchQuery.value;if(" "===i||""===i)return void e(d).Notify.failure("Please type search and try again.");u("searchedValue",i);const n=await(0,o.getMoviesSearch)(i);if(h.innerHTML="",0===n.total_results)return void e(d).Notify.failure("There is no such film");await(0,o.getGenres)().then((({genres:e})=>{n.results&&n.results.forEach((t=>{const{genre_ids:i,release_date:n}=t;e.forEach((({name:e,id:r})=>{i.includes(r)&&(i.length>2&&i.splice(2,i.length-1,"Other"),i.splice(i.indexOf(r),1,e)),t.genre_names=i.join(", "),t.release_date&&(t.release_date=n.slice(0,4))}))}))}));(0,l.renderGallery)(n.results),(0,p.updateLastPaginationPage)(n),p.pagination.reset(n.total_pages),(0,p.updateLastPaginationPage)(n)})),r("36a0Y");var m=r("4TNnu");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);r<128?t[i++]=r:r<2048?(t[i++]=r>>6|192,t[i++]=63&r|128):55296==(64512&r)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++n)),t[i++]=r>>18|240,t[i++]=r>>12&63|128,t[i++]=r>>6&63|128,t[i++]=63&r|128):(t[i++]=r>>12|224,t[i++]=r>>6&63|128,t[i++]=63&r|128)}return t},v={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=r>>2,d=(3&r)<<4|a>>4;let u=(15&a)<<2|l>>6,p=63&l;o||(p=64,s||(u=64)),n.push(i[c],i[d],i[u],i[p])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(g(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const r=e[i++];if(r<128)t[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[i++];t[n++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(s>>10)),t[n++]=String.fromCharCode(56320+(1023&s))}else{const s=e[i++],a=e[i++];t[n++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const r=i[e.charAt(t++)],s=t<e.length?i[e.charAt(t)]:0;++t;const a=t<e.length?i[e.charAt(t)]:64;++t;const o=t<e.length?i[e.charAt(t)]:64;if(++t,null==r||null==s||null==a||null==o)throw Error();const l=r<<2|s>>4;if(n.push(l),64!==a){const e=s<<4&240|a>>2;if(n.push(e),64!==o){const e=a<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},b=function(e){return function(e){const t=g(e);return v.encodeByteArray(t,!0)}(e).replace(/\./g,"")},y=function(e){try{return v.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function w(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function k(){const e=x();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function E(){try{return"object"==typeof indexedDB}catch(e){return!1}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const I=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,T=()=>{try{return I()||(()=>{if(void 0===m||void 0===m.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&y(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},S=e=>{var t,i;return null===(i=null===(t=T())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},_=e=>{var t;return null===(t=T())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,C.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,L.prototype.create)}}class L{create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(A,((e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`}))}(r,i):"Error",a=`${this.serviceName}: ${s} (${n}).`;return new C(n,a,i)}constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}}const A=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function M(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const r of i){if(!n.includes(r))return!1;const i=e[r],s=t[r];if(R(i)&&R(s)){if(!M(i,s))return!1}else if(i!==s)return!1}for(const e of n)if(!i.includes(e))return!1;return!0}function R(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function P(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}})),t}function z(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){const i=new W(e,t);return i.subscribe.bind(i)}class W{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===n.next&&(n.next=U),void 0===n.error&&(n.error=U),void 0===n.complete&&(n.complete=U);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function U(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e){return e&&e._delegate?e._delegate:e}class j{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new N;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[e,t]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),r=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,"[DEFAULT]"===n?void 0:n),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}var n;return i||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class ${addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new H(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V=[];var G,X;(X=G||(G={}))[X.DEBUG=0]="DEBUG",X[X.VERBOSE=1]="VERBOSE",X[X.INFO=2]="INFO",X[X.WARN=3]="WARN",X[X.ERROR=4]="ERROR",X[X.SILENT=5]="SILENT";const q={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},K=G.INFO,Y={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},J=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),r=Y[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${n}]  ${e.name}:`,...i)};class Q{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?q[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}constructor(e){this.name=e,this._logLevel=K,this._logHandler=J,this._userLogHandler=null,V.push(this)}}let Z,ee;const te=new WeakMap,ie=new WeakMap,ne=new WeakMap,re=new WeakMap,se=new WeakMap;let ae={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return ie.get(e);if("objectStoreNames"===t)return e.objectStoreNames||ne.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return ce(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function oe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(ee||(ee=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(de(this),t),ce(te.get(this))}:function(...t){return ce(e.apply(de(this),t))}:function(t,...i){const n=e.call(de(this),t,...i);return ne.set(n,t.sort?t.sort():[t]),ce(n)}}function le(e){return"function"==typeof e?oe(e):(e instanceof IDBTransaction&&function(e){if(ie.has(e))return;const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),n()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));ie.set(e,t)}(e),t=e,(Z||(Z=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ae):e);var t}function ce(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ce(e.result)),n()},s=()=>{i(e.error),n()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&te.set(t,e)})).catch((()=>{})),se.set(t,e),t}(e);if(re.has(e))return re.get(e);const t=le(e);return t!==e&&(re.set(e,t),se.set(t,e)),t}const de=e=>se.get(e);function ue(e,t,{blocked:i,upgrade:n,blocking:r,terminated:s}={}){const a=indexedDB.open(e,t),o=ce(a);return n&&a.addEventListener("upgradeneeded",(e=>{n(ce(a.result),e.oldVersion,e.newVersion,ce(a.transaction))})),i&&a.addEventListener("blocked",(()=>i())),o.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),o}const pe=["get","getKey","getAll","getAllKeys","count"],he=["put","add","delete","clear"],fe=new Map;function me(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(fe.get(t))return fe.get(t);const i=t.replace(/FromIndex$/,""),n=t!==i,r=he.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!r&&!pe.includes(i))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let a=s.store;return n&&(a=a.index(t.shift())),(await Promise.all([a[i](...t),r&&s.done]))[0]};return fe.set(t,s),s}ae=(e=>({...e,get:(t,i,n)=>me(t,i)||e.get(t,i,n),has:(t,i)=>!!me(t,i)||e.has(t,i)}))(ae);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const ve=new Q("@firebase/app"),be={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ye=new Map,xe=new Map;function we(e,t){try{e.container.addComponent(t)}catch(i){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function ke(e){const t=e.name;if(xe.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;xe.set(t,e);for(const t of ye.values())we(t,e);return!0}function Ee(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ie=new L("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Te{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new j("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t={}){let i=e;if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Ie.create("bad-app-name",{appName:String(r)});var s;if(i||(i=null===(s=T())||void 0===s?void 0:s.config),!i)throw Ie.create("no-options");const a=ye.get(r);if(a){if(M(i,a.options)&&M(n,a.config))return a;throw Ie.create("duplicate-app",{appName:r})}const o=new $(r);for(const e of xe.values())o.addComponent(e);const l=new Te(i,n,o);return ye.set(r,l),l}function _e(e="[DEFAULT]"){const t=ye.get(e);if(!t&&"[DEFAULT]"===e)return Se();if(!t)throw Ie.create("no-app",{appName:e});return t}function Ne(e,t,i){var n;let r=null!==(n=be[e])&&void 0!==n?n:e;i&&(r+=`-${i}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void ve.warn(e.join(" "))}ke(new j(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}let Ce=null;function Le(){return Ce||(Ce=ue("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw Ie.create("idb-open",{originalErrorMessage:e.message})}))),Ce}async function Ae(e,t){try{const i=(await Le()).transaction("firebase-heartbeat-store","readwrite"),n=i.objectStore("firebase-heartbeat-store");return await n.put(t,Oe(e)),i.done}catch(e){if(e instanceof C)ve.warn(e.message);else{const t=Ie.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});ve.warn(t.message)}}}function Oe(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Re();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Re(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){const i=[];let n=e.slice();for(const r of e){const e=i.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Pe(i)>t){e.dates.pop();break}}else if(i.push({agent:r.agent,dates:[r.date]}),Pe(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=b(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new De(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Re(){return(new Date).toISOString().substring(0,10)}class De{async runIndexedDBEnvironmentCheck(){return!!E()&&new Promise(((e,t)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},r.onupgradeneeded=()=>{i=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await Le()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Oe(e))}catch(e){if(e instanceof C)ve.warn(e.message);else{const t=Ie.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});ve.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ae(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Pe(e){return b(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze;ze="",ke(new j("platform-logger",(e=>new ge(e)),"PRIVATE")),ke(new j("heartbeat",(e=>new Me(e)),"PRIVATE")),Ne("@firebase/app","0.9.0",ze),Ne("@firebase/app","0.9.0","esm2017"),Ne("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ne("firebase","9.15.0","app");const Be={apiKey:"AIzaSyDv5dHMjgq_6GWD35Of-cTXskRk1rXncws",authDomain:"filmoteka-command-project-js.firebaseapp.com",projectId:"filmoteka-command-project-js",storageBucket:"filmoteka-command-project-js.appspot.com",messagingSenderId:"1084933608284",appId:"1:1084933608284:web:16097211c819e6fa8d6799",measurementId:"G-BHYJP9WVT4"};function We(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(i[n[r]]=e[n[r]])}return i}Object.create;Object.create;function Ue(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fe=Ue,je=new L("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),He={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},$e=new Q("@firebase/auth");function Ve(e,...t){$e.logLevel<=G.ERROR&&$e.error(`Auth (9.15.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(e,...t){throw Ke(e,...t)}function Xe(e,...t){return Ke(e,...t)}function qe(e,t,i){const n=Object.assign(Object.assign({},Fe()),{[t]:i});return new L("auth","Firebase",n).create(t,{appName:e.name})}function Ke(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return je.create(e,...t)}function Ye(e,t,...i){if(!e)throw Ke(t,...i)}function Je(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ve(t),new Error(t)}function Qe(e,t){e||Je(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new Map;function et(e){Qe(e instanceof Function,"Expected a class definition");let t=Ze.get(e);return t?(Qe(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ze.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function it(){return"http:"===nt()||"https:"===nt()}function nt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(it()||w()||"connection"in navigator))||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{get(){return rt()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Qe(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(x())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,t){Qe(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ct=new st(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ut(e,t,i,n,r={}){return pt(e,r,(async()=>{let r={},s={};n&&("GET"===t?s=n:r={body:JSON.stringify(n)});const a=D(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),ot.fetch()(ft(e,e.config.apiHost,i,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function pt(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},lt),t);try{const t=new mt(e),r=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw gt(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[i,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw gt(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===i)throw gt(e,"email-already-in-use",s);if("USER_DISABLED"===i)throw gt(e,"user-disabled",s);const o=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw qe(e,o,a);Ge(e,o)}}catch(t){if(t instanceof C)throw t;Ge(e,"network-request-failed")}}async function ht(e,t,i,n,r={}){const s=await ut(e,t,i,n,r);return"mfaPendingCredential"in s&&Ge(e,"multi-factor-auth-required",{_serverResponse:s}),s}function ft(e,t,i,n){const r=`${t}${i}?${n}`;return e.config.emulator?at(e.config,r):`${e.config.apiScheme}://${r}`}class mt{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Xe(this.auth,"network-request-failed"))),ct.get())}))}}function gt(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const r=Xe(e,t,n);return r.customData._tokenResponse=i,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(e){return 1e3*Number(e)}function yt(e){const[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return Ve("JWT malformed, contained fewer than 3 sections"),null;try{const e=y(i);return e?JSON.parse(e):(Ve("Failed to decode base64 JWT payload"),null)}catch(e){return Ve("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function xt(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof C&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class wt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{_initializeTime(){this.lastSignInTime=vt(this.lastLoginAt),this.creationTime=vt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(e){var t;const i=e.auth,n=await e.getIdToken(),r=await xt(e,async function(e,t){return ut(e,"POST","/v1/accounts:lookup",t)}(i,{idToken:n}));Ye(null==r?void 0:r.users.length,i,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,i=We(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const o=(l=e.providerData,c=a,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const d=e.isAnonymous,u=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),p=!!d&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new kt(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(e,h)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ye(e.idToken,"internal-error"),Ye(void 0!==e.idToken,"internal-error"),Ye(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=yt(e);return Ye(t,"internal-error"),Ye(void 0!==t.exp,"internal-error"),Ye(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ye(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const i=await pt(e,{},(async()=>{const i=D({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:r}=e.config,s=ft(e,n,"/v1/token",`key=${r}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ot.fetch()(s,{method:"POST",headers:a,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:r}=t,s=new It;return i&&(Ye("string"==typeof i,"internal-error",{appName:e}),s.refreshToken=i),n&&(Ye("string"==typeof n,"internal-error",{appName:e}),s.accessToken=n),r&&(Ye("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new It,this.toJSON())}_performRefresh(){return Je("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(e,t){Ye("string"==typeof e||void 0===e,"internal-error",{appName:t})}class St{async getIdToken(e){const t=await xt(this,this.stsTokenManager.getToken(this.auth,e));return Ye(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=F(e),n=await i.getIdToken(t),r=yt(n);Ye(r&&r.exp&&r.auth_time&&r.iat,i.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:vt(bt(r.auth_time)),issuedAtTime:vt(bt(r.iat)),expirationTime:vt(bt(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=F(e);await Et(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ye(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new St(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ye(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Et(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xt(this,async function(e,t){return ut(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,r,s,a,o,l,c;const d=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,p=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,h=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:y,isAnonymous:x,providerData:w,stsTokenManager:k}=t;Ye(b&&k,e,"internal-error");const E=It.fromJSON(this.name,k);Ye("string"==typeof b,e,"internal-error"),Tt(d,e.name),Tt(u,e.name),Ye("boolean"==typeof y,e,"internal-error"),Ye("boolean"==typeof x,e,"internal-error"),Tt(p,e.name),Tt(h,e.name),Tt(f,e.name),Tt(m,e.name),Tt(g,e.name),Tt(v,e.name);const I=new St({uid:b,auth:e,email:u,emailVerified:y,displayName:d,isAnonymous:x,photoURL:h,phoneNumber:p,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,i=!1){const n=new It;n.updateFromServerResponse(t);const r=new St({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await Et(r),r}constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,r=We(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new kt(r.createdAt||void 0,r.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}_t.type="NONE";const Nt=_t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e,t,i){return`firebase:${e}:${t}:${i}`}class Lt{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?St._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Lt(et(Nt),e,i);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=n[0]||et(Nt);const s=Ct(i,e.config.apiKey,e.name);let a=null;for(const i of t)try{const t=await i._get(s);if(t){const n=St._fromJSON(e,t);i!==r&&(a=n),r=i;break}}catch(e){}const o=n.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Lt(r,e,i)):new Lt(r,e,i)}constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:r}=this.auth;this.fullUserKey=Ct(this.userKey,n.apiKey,r),this.fullPersistenceKey=Ct("persistence",n.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Dt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ot(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(zt(t))return"Blackberry";if(Bt(t))return"Webos";if(Mt(t))return"Safari";if((t.includes("chrome/")||Rt(t))&&!t.includes("edge/"))return"Chrome";if(Pt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function Ot(e=x()){return/firefox\//i.test(e)}function Mt(e=x()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Rt(e=x()){return/crios\//i.test(e)}function Dt(e=x()){return/iemobile/i.test(e)}function Pt(e=x()){return/android/i.test(e)}function zt(e=x()){return/blackberry/i.test(e)}function Bt(e=x()){return/webos/i.test(e)}function Wt(e=x()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ut(){return k()&&10===document.documentMode}function Ft(e=x()){return Wt(e)||Pt(e)||Bt(e)||zt(e)||/windows phone/i.test(e)||Dt(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jt(e,t=[]){let i;switch(e){case"Browser":i=At(x());break;case"Worker":i=`${At(x())}-${e}`;break;default:i=e}return`${i}/JsCore/9.15.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{pushCallback(e,t){const i=t=>new Promise(((i,n)=>{try{i(e(t))}catch(e){n(e)}}));i.onAbort=t,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=et(t)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await Lt.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let n=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);i&&i!==s||!(null==a?void 0:a.user)||(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return Ye(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Et(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?F(e):null;return t&&Ye(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ye(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(et(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new L("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&et(e)||this._popupRedirectResolver;Ye(t,this,"argument-error"),this.redirectPersistenceManager=await Lt.create(this,[et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ye(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ye(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jt(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gt(this),this.idTokenSubscription=new Gt(this),this.beforeStateQueue=new Ht(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=je,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function Vt(e){return F(e)}class Gt{get next(){return Ye(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=B((e=>this.observer=e))}}function Xt(e,t,i){const n=Vt(e);Ye(n._canInitEmulator,n,"emulator-config-failed"),Ye(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const r=!!(null==i?void 0:i.disableWarnings),s=qt(t),{host:a,port:o}=function(e){const t=qt(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const e=r[1];return{host:e,port:Kt(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Kt(t)}}}(t),l=null===o?"":`:${o}`;n.config.emulator={url:`${s}//${a}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function qt(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Kt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Yt{toJSON(){return Je("not implemented")}_getIdTokenResponse(e){return Je("not implemented")}_linkToIdToken(e,t){return Je("not implemented")}_getReauthenticationResolver(e){return Je("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jt(e,t){return ut(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt extends Yt{static _fromEmailAndPassword(e,t){return new Qt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Qt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ht(e,"POST","/v1/accounts:signInWithPassword",dt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ht(e,"POST","/v1/accounts:signInWithEmailLink",dt(e,t))}(e,{email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Jt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ht(e,"POST","/v1/accounts:signInWithEmailLink",dt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ge(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zt(e,t){return ht(e,"POST","/v1/accounts:signInWithIdp",dt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Yt{static _fromParams(e){const t=new ei(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ge("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,r=We(t,["providerId","signInMethod"]);if(!i||!n)return null;const s=new ei(i,n);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Zt(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Zt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=D(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ii extends Yt{static _fromVerification(e,t){return new ii({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ii({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ht(e,"POST","/v1/accounts:signInWithPhoneNumber",dt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const i=await ht(e,"POST","/v1/accounts:signInWithPhoneNumber",dt(e,t));if(i.temporaryProof)throw gt(e,"account-exists-with-different-credential",i);return i}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ht(e,"POST","/v1/accounts:signInWithPhoneNumber",dt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ti)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}=e;return i||t||n||r?new ii({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:r}):null}constructor(e){super("phone","phone"),this.params=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{static parseLink(e){const t=function(e){const t=P(z(e)).link,i=t?P(z(t)).deep_link_id:null,n=P(z(e)).deep_link_id;return(n?P(z(n)).link:null)||n||i||t||e}(e);try{return new ni(t)}catch(e){return null}}constructor(e){var t,i,n,r,s,a;const o=P(z(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(i=o.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=o.mode)&&void 0!==n?n:null);Ye(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ri{static credential(e,t){return Qt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ni.parseLink(t);return Ye(i,"argument-error"),Qt._fromEmailAndCode(e,i.code,i.tenantId)}constructor(){this.providerId=ri.PROVIDER_ID}}ri.PROVIDER_ID="password",ri.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ri.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class si{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends si{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oi extends ai{static credential(e){return ei._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}oi.FACEBOOK_SIGN_IN_METHOD="facebook.com",oi.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li extends ai{static credential(e,t){return ei._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return li.credential(t,i)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}li.GOOGLE_SIGN_IN_METHOD="google.com",li.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ci extends ai{static credential(e){return ei._fromParams({providerId:ci.PROVIDER_ID,signInMethod:ci.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ci.credentialFromTaggedObject(e)}static credentialFromError(e){return ci.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ci.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}ci.GITHUB_SIGN_IN_METHOD="github.com",ci.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class di extends ai{static credential(e,t){return ei._fromParams({providerId:di.PROVIDER_ID,signInMethod:di.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return di.credentialFromTaggedObject(e)}static credentialFromError(e){return di.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return di.credential(t,i)}catch(e){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ui(e,t){return ht(e,"POST","/v1/accounts:signUp",dt(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */di.TWITTER_SIGN_IN_METHOD="twitter.com",di.PROVIDER_ID="twitter.com";class pi{static async _fromIdTokenResponse(e,t,i,n=!1){const r=await St._fromIdTokenResponse(e,i,n),s=hi(i);return new pi({user:r,providerId:s,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=hi(i);return new pi({user:e,providerId:n,_tokenResponse:i,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function hi(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fi extends C{static _fromErrorAndOperation(e,t,i,n){return new fi(e,t,i,n)}constructor(e,t,i,n){var r;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,fi.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}}function mi(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw fi._fromErrorAndOperation(e,i,t,n);throw i}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(e,t,i=!1){const n=await xt(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return pi._forOperation(e,"link",n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function vi(e,t,i=!1){const{auth:n}=e,r="reauthenticate";try{const s=await xt(e,mi(n,r,t,e),i);Ye(s.idToken,n,"internal-error");const a=yt(s.idToken);Ye(a,n,"internal-error");const{sub:o}=a;return Ye(e.uid===o,n,"user-mismatch"),pi._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ge(n,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(e,t,i=!1){const n="signIn",r=await mi(e,n,t),s=await pi._fromIdTokenResponse(e,n,r);return i||await e._updateCurrentUser(s.user),s}async function yi(e,t){return bi(Vt(e),t)}async function xi(e,t,i){const n=Vt(e),r=await ui(n,{returnSecureToken:!0,email:t,password:i}),s=await pi._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(s.user),s}function wi(e,t,i){return yi(F(e),ri.credential(t,i))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ki{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends ki{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},r=this.storage.getItem(i);Ut()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=x();return Mt(e)||Wt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Ft(),this._shouldAllowMigration=!0}}Ei.type="LOCAL";const Ii=Ei;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends ki{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ti.type="SESSION";const Si=Ti;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _i{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new _i(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:r}=t.data,s=this.handlersMap[n];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ni(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_i.receivers=[];class Ci{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const l=Ni("",20);n.port1.start();const c=setTimeout((()=>{o(new Error("unsupported_event"))}),i);s={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(c),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(s),n.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(e){this.target=e,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ai(){return void 0!==Li().WorkerGlobalScope&&"function"==typeof Li().importScripts}class Oi{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Mi(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Ri(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){i(e)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains("firebaseLocalStorage")?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Oi(e).toPromise()}(),t(await Ri()))}))}))}async function Di(e,t,i){const n=Mi(e,!0).put({fbase_key:t,value:i});return new Oi(n).toPromise()}function Pi(e,t){const i=Mi(e,!0).delete(t);return new Oi(i).toPromise()}class zi{async _openDb(){return this.db||(this.db=await Ri()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ai()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_i._getInstance(Ai()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Ci(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ri();return await Di(e,"__sak","1"),await Pi(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>Di(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const i=Mi(e,!1).get(t),n=await new Oi(i).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Pi(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Mi(e,!1).getAll();return new Oi(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;for(const{fbase_key:n,value:r}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(r)&&(this.notifyListeners(n,r),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}zi.type="LOCAL";const Bi=zi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wi(e){return new Promise(((t,i)=>{const n=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=Xe("internal-error");t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(n)}))}function Ui(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Ui("rcb"),new st(3e4,6e4);async function Fi(e,t,i){var n;const r=await i.verify();try{let s;if(Ye("string"==typeof r,e,"argument-error"),Ye("recaptcha"===i.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ye("enroll"===t.type,e,"internal-error");const i=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return ut(e,"POST","/v2/accounts/mfaEnrollment:start",dt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return i.phoneSessionInfo.sessionInfo}{Ye("signin"===t.type,e,"internal-error");const i=(null===(n=s.multiFactorHint)||void 0===n?void 0:n.uid)||s.multiFactorUid;Ye(i,e,"missing-multi-factor-info");const a=await function(e,t){return ut(e,"POST","/v2/accounts/mfaSignIn:start",dt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ut(e,"POST","/v1/accounts:sendVerificationCode",dt(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{i._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ji{verifyPhoneNumber(e,t){return Fi(this.auth,e,F(t))}static credential(e,t){return ii._fromVerification(e,t)}static credentialFromResult(e){const t=e;return ji.credentialFromTaggedObject(t)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?ii._fromTokenResponse(t,i):null}constructor(e){this.providerId=ji.PROVIDER_ID,this.auth=Vt(e)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hi(e,t){return t?et(t):(Ye(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ji.PROVIDER_ID="phone",ji.PHONE_SIGN_IN_METHOD="phone";class $i extends Yt{_getIdTokenResponse(e){return Zt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Vi(e){return bi(e.auth,new $i(e),e.bypassAuthState)}function Gi(e){const{auth:t,user:i}=e;return Ye(i,t,"internal-error"),vi(i,new $i(e),e.bypassAuthState)}async function Xi(e){const{auth:t,user:i}=e;return Ye(i,t,"internal-error"),gi(i,new $i(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Vi;case"linkViaPopup":case"linkViaRedirect":return Xi;case"reauthViaPopup":case"reauthViaRedirect":return Gi;default:Ge(this.auth,"internal-error")}}resolve(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,i,n,r=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki=new st(2e3,1e4);class Yi extends qi{async executeNotNull(){const e=await this.execute();return Ye(e,this.auth,"internal-error"),e}async onExecution(){Qe(1===this.filter.length,"Popup operations only handle one event");const e=Ni();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Xe(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ki.get())};e()}constructor(e,t,i,n,r){super(e,t,n,r),this.provider=i,this.authWindow=null,this.pollId=null,Yi.currentPopupAction&&Yi.currentPopupAction.cancel(),Yi.currentPopupAction=this}}Yi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ji=new Map;class Qi extends qi{async execute(){let e=Ji.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=tn(t),n=en(e);if(!await n._isAvailable())return!1;const r="true"===await n._get(i);return await n._remove(i),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ji.set(this.auth._key(),e)}return this.bypassAuthState||Ji.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}}function Zi(e,t){Ji.set(e._key(),t)}function en(e){return et(e._redirectPersistence)}function tn(e){return Ct("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nn(e,t,i=!1){const n=Vt(e),r=Hi(n,t),s=new Qi(n,r,i),a=await s.execute();return a&&!i&&(delete a.user._redirectEventId,await n._persistUserIfCurrent(a.user),await n._setRedirectUser(null,t)),a}class rn{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return an(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!an(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(Xe(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(sn(e))}saveEventToCache(e){this.cachedEventUids.add(sn(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function sn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function an({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const on=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ln=/^https?/;async function cn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ut(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(dn(e))return}catch(e){}Ge(e,"unauthorized-domain")}function dn(e){const t=tt(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&r.hostname===n}if(!ln.test(i))return!1;if(on.test(e))return n===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new st(3e4,6e4);function pn(){const e=Li().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let hn=null;function fn(e){return hn=hn||function(e){return new Promise(((t,i)=>{var n,r,s;function a(){pn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pn(),i(Xe(e,"network-request-failed"))},timeout:un.get()})}if(null===(r=null===(n=Li().gapi)||void 0===n?void 0:n.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Li().gapi)||void 0===s?void 0:s.load)){const t=Ui("iframefcb");return Li()[t]=()=>{gapi.load?a():i(Xe(e,"network-request-failed"))},Wi(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>i(e)))}a()}})).catch((e=>{throw hn=null,e}))}(e),hn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn=new st(5e3,15e3),gn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},vn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bn(e){const t=e.config;Ye(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?at(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:"9.15.0"},r=vn.get(e.config.apiHost);r&&(n.eid=r);const s=e._getFrameworks();return s.length&&(n.fw=s.join(",")),`${i}?${D(n).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class xn{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function wn(e,t,i,n=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l=Object.assign(Object.assign({},yn),{width:n.toString(),height:r.toString(),top:s,left:a}),c=x().toLowerCase();i&&(o=Rt(c)?"_blank":i),Ot(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(function(e=x()){var t;return Wt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new xn(null);const u=window.open(t||"",o,d);Ye(u,e,"popup-blocked");try{u.focus()}catch(e){}return new xn(u)}function kn(e,t,i,n,r,s){Ye(e.config.authDomain,e,"auth-domain-config-required"),Ye(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:"9.15.0",eventId:r};if(t instanceof si){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",O(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof ai){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?at(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${D(o).slice(1)}`}const En=class{async _openPopup(e,t,i,n){var r;Qe(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return wn(e,kn(e,t,i,tt(),n),Ni())}async _openRedirect(e,t,i,n){var r;return await this._originValidation(e),r=kn(e,t,i,tt(),n),Li().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(Qe(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch((()=>{delete this.eventManagers[t]})),i}async initAndGetManager(e){const t=await async function(e){const t=await fn(e),i=Li().gapi;return Ye(i,e,"internal-error"),t.open({where:document.body,url:bn(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gn,dontclear:!0},(t=>new Promise((async(i,n)=>{await t.restyle({setHideOnLeave:!1});const r=Xe(e,"network-request-failed"),s=Li().setTimeout((()=>{n(r)}),mn.get());function a(){Li().clearTimeout(s),i(t)}t.ping(a).then(a,(()=>{n(r)}))}))))}(e),i=new rn(e);return t.register("authEvent",(t=>{Ye(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var n;const r=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.webStorageSupport;void 0!==r&&t(!!r),Ge(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=cn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ft()||Mt()||Wt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Si,this._completeRedirectFn=nn,this._overrideRedirectResult=Zi}};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class In{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ye(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Tn=_("authIdTokenMaxAge")||300;let Sn=null;function _n(e=_e()){const t=Ee(e,"auth");if(t.isInitialized())return t.getImmediate();const i=function(e,t){const i=Ee(e,"auth");if(i.isInitialized()){const e=i.getImmediate();if(M(i.getOptions(),null!=t?t:{}))return e;Ge(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:En,persistence:[Bi,Ii,Si]}),n=_("authTokenSyncURL");if(n){const e=(r=n,async e=>{const t=e&&await e.getIdTokenResult(),i=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Tn)return;const n=null==t?void 0:t.token;Sn!==n&&(Sn=n,await fetch(r,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,i){F(e).beforeAuthStateChanged(t,i)}(i,e,(()=>e(i.currentUser))),function(e,t,i,n){F(e).onIdTokenChanged(t,i,n)}(i,(t=>e(t)))}var r;const s=S("auth");return s&&Xt(i,`http://${s}`),i}var Nn;Nn="Browser",ke(new j("auth",((e,{options:t})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),{apiKey:r,authDomain:s}=i.options;return((e,i)=>{Ye(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Ye(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:s,clientPlatform:Nn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jt(Nn)},a=new $t(e,i,n);return function(e,t){const i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(et);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(i,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{e.getProvider("auth-internal").initialize()}))),ke(new j("auth-internal",(e=>{const t=Vt(e.getProvider("auth").getImmediate());return new In(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ne("@firebase/auth","0.21.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Nn)),Ne("@firebase/auth","0.21.0","esm2017");const Cn=(c=r("2mCIo")).refs.loginForm.querySelector('[name="useremail"]'),Ln=c.refs.loginForm.querySelector('[name="userpassword"]');function An(){c.refs.divLoginEmailError.innerHTML="",c.refs.divLoginPassError.innerHTML="",Ln.removeEventListener("focus",An),Cn.removeEventListener("focus",An)}const On=e=>{e.code===He.INVALID_PASSWORD?(c.refs.divLoginPassError.style.display="block",c.refs.divLoginPassError.innerHTML="❌ Wrong passowrd. Try again",Ln.addEventListener("focus",An)):e.code===He.USER_DELETED?(c.refs.divLoginEmailError.style.display="block",c.refs.divLoginEmailError.innerHTML="❌ No such email in our database",Cn.addEventListener("focus",An)):(console.log(e),c.refs.divLoginPassError.style.display="block",c.refs.divLoginPassError.innerHTML=`❌ Error: ${e.message}`,Ln.addEventListener("focus",An))},Mn=e=>{if(c.refs.divSignUpError.style.display="block",e.code===He.EMAIL_EXISTS){c.refs.divSignUpError.innerHTML=' ❌ You\'ve already been registered. Please <a class="checkbox-link link" login-data-modal-open>log in</a>';const e=c.refs.divSignUpError.querySelector(".checkbox-link");e.style.pointerEvents="all",e.style.textDecoration="underline",e.style.cursor="pointer",e.addEventListener("click",(()=>{Cn.value="",Ln.value="",c.refs.signupModal.classList.toggle("is-hidden"),c.refs.loginModal.classList.toggle("is-hidden")}))}else c.refs.divSignUpError.innerHTML=`Error: ${e.message}`};c=r("2mCIo");function Rn(){c.refs.modalSuccess.classList.toggle("is-hidden"),c.refs.modalSuccessCloseBtn.removeEventListener("click",Rn),c.refs.modalSuccess.removeEventListener("click",Pn),window.removeEventListener("keydown",zn)}function Dn(e){c.refs.modalSuccess.classList.remove("is-hidden"),c.refs.modalSuccessCloseBtn.addEventListener("click",Rn),c.refs.modalSuccess.addEventListener("click",Pn),window.addEventListener("keydown",zn),c.refs.successModalText.innerHTML=`Success! </br> Hello ${e}`}function Pn(e){e.currentTarget===e.target&&Rn()}function zn(e){"Escape"===e.code&&Rn()}(c=r("2mCIo")).refs.headerSignoutBtn.addEventListener("click",(()=>{Wn()}));const Bn=_n(Se(Be)),Wn=e=>{Bn.onAuthStateChanged((e=>{if(console.log(e),!localStorage.getItem("uid")){c.refs.headerSignoutBtn.addEventListener("click",Wn);const t=e.uid;return localStorage.setItem("uid",t),localStorage.setItem("username",e.email),c.refs.headerUserEmailDiv.innerHTML=`Hello, </br> ${localStorage.getItem("username")}`,c.refs.loginModal.classList.toggle("is-hidden"),void Dn(e.email)}c.refs.headerSignoutBtn.removeEventListener("click",Wn),localStorage.removeItem("uid"),localStorage.removeItem("username"),c.refs.signoutModal.classList.toggle("is-hidden"),c.refs.closeModalBtnSignOut.addEventListener("click",Un),c.refs.signoutModal.addEventListener("click",Fn),window.addEventListener("keydown",jn),c.refs.headerUserLogedinContainer.classList.add("visually-hidden"),c.refs.headerUserNoLoginContainer.classList.remove("visually-hidden")}))};function Un(){c.refs.signoutModal.classList.toggle("is-hidden"),window.removeEventListener("keydown",jn),c.refs.body.classList.remove("no-scroll")}function Fn(e){e.currentTarget===e.target&&Un()}function jn(e){"Escape"===e.code&&Un()}(c=r("2mCIo")).refs.headerLoginBtn.addEventListener("click",(()=>{c.refs.loginModal.classList.toggle("is-hidden"),c.refs.loginModalCloseBtn.addEventListener("click",Vn),c.refs.loginModal.addEventListener("click",Gn),window.addEventListener("keydown",Xn),c.refs.body.classList.add("no-scroll")}));const Hn=c.refs.signupForm.querySelector('[name="useremail"]'),$n=c.refs.signupForm.querySelector('[name="userpassword"]');function Vn(){c.refs.loginModal.classList.toggle("is-hidden"),c.refs.body.classList.remove("no-scroll"),window.removeEventListener("keydown",Xn)}function Gn(e){e.currentTarget===e.target&&Vn()}function Xn(e){"Escape"===e.code&&Vn()}async function qn(e){e.preventDefault();const t=e.currentTarget.elements.useremail.value,i=e.currentTarget.elements.userpassword.value,n=_n(Se(Be));try{const e=(await xi(n,t,i)).user;c.refs.signupModal.classList.toggle("is-hidden"),Dn(e.email),c.refs.signupForm.removeEventListener("submit",qn),c.refs.policyCheckbox.removeEventListener("click",Kn),c.refs.signupBtnClose.removeEventListener("click",Yn),c.refs.signupModal.removeEventListener("click",Jn),window.removeEventListener("keydown",onEscKeyPressSignUp)}catch(e){Mn(e)}}function Kn(e){e.target.checked?c.refs.signupBtn.disabled=!1:c.refs.signupBtn.disabled=!0}function Yn(){c.refs.signupModal.classList.toggle("is-hidden"),c.refs.body.classList.remove("no-scroll"),window.removeEventListener("keydown",Qn)}function Jn(e){e.currentTarget===e.target&&Yn()}function Qn(e){"Escape"===e.code&&Yn()}c.refs.loginForm.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements.useremail.value,i=e.currentTarget.elements.userpassword.value,n=_n(Se(Be));try{const e=(await wi(n,t,i)).user;c.refs.headerUserNoLoginContainer.classList.add("visually-hidden"),c.refs.headerUserLogedinContainer.classList.remove("visually-hidden"),Wn(e),c.refs.loginModalCloseBtn.removeEventListener("click",Vn),c.refs.loginModal.removeEventListener("click",Gn),window.removeEventListener("keydown",Xn)}catch(e){On(e)}})),c.refs.signupBtnOnLoginModal.addEventListener("click",(()=>{Hn.value="",$n.value="",c.refs.divSignUpError.innerHTML="",c.refs.policyCheckbox.checked=!1,c.refs.signupBtn.disabled=!0,c.refs.loginModal.classList.toggle("is-hidden"),c.refs.signupModal.classList.toggle("is-hidden")})),(c=r("2mCIo")).refs.headerSignupBtn.addEventListener("click",(()=>{c.refs.signupModal.classList.toggle("is-hidden"),c.refs.signupForm.addEventListener("submit",qn),c.refs.policyCheckbox.addEventListener("click",Kn),c.refs.signupBtnClose.addEventListener("click",Yn),c.refs.signupModal.addEventListener("click",Jn),window.addEventListener("keydown",Qn),c.refs.body.classList.add("no-scroll")})),r("cYVN0"),r("1HsQi");o=r("1iWqc"),l=r("1HsQi"),p=r("JcIhZ");function Zn(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function er(e={},t={}){Object.keys(t).forEach((i=>{void 0===e[i]?e[i]=t[i]:Zn(t[i])&&Zn(e[i])&&Object.keys(t[i]).length>0&&er(e[i],t[i])}))}!async function(){const e=await(0,o.getTrendingFilms)(1);localStorage.setItem("searchedValue",""),p.pagination.reset(e.total_pages),(0,p.updateLastPaginationPage)(e);await(0,o.getGenres)().then((({genres:t})=>{e.results&&e.results.forEach((e=>{const{genre_ids:i,release_date:n}=e;t.forEach((({name:t,id:r})=>{i.includes(r)&&(i.length>2&&i.splice(2,i.length-1,"Other"),i.splice(i.indexOf(r),1,t)),e.genre_names=i.join(", "),e.release_date&&(e.release_date=n.slice(0,4))}))}))}));(0,l.renderGallery)(e.results)}(),r("9HhlW"),r("kLSqi"),r("9QIBC");const tr={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ir(){const e="undefined"!=typeof document?document:{};return er(e,tr),e}const nr={document:tr,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function rr(){const e="undefined"!=typeof window?window:{};return er(e,nr),e}class sr extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function ar(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...ar(e)):t.push(e)})),t}function or(e,t){return Array.prototype.filter.call(e,t)}function lr(e,t){const i=rr(),n=ir();let r=[];if(!t&&e instanceof sr)return e;if(!e)return new sr(r);if("string"==typeof e){const i=e.trim();if(i.indexOf("<")>=0&&i.indexOf(">")>=0){let e="div";0===i.indexOf("<li")&&(e="ul"),0===i.indexOf("<tr")&&(e="tbody"),0!==i.indexOf("<td")&&0!==i.indexOf("<th")||(e="tr"),0===i.indexOf("<tbody")&&(e="table"),0===i.indexOf("<option")&&(e="select");const t=n.createElement(e);t.innerHTML=i;for(let e=0;e<t.childNodes.length;e+=1)r.push(t.childNodes[e])}else r=function(e,t){if("string"!=typeof e)return[e];const i=[],n=t.querySelectorAll(e);for(let e=0;e<n.length;e+=1)i.push(n[e]);return i}(e.trim(),t||n)}else if(e.nodeType||e===i||e===n)r.push(e);else if(Array.isArray(e)){if(e instanceof sr)return e;r=e}return new sr(function(e){const t=[];for(let i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}(r))}lr.fn=sr.prototype;const cr="resize scroll".split(" ");function dr(e){return function(...t){if(void 0===t[0]){for(let t=0;t<this.length;t+=1)cr.indexOf(e)<0&&(e in this[t]?this[t][e]():lr(this[t]).trigger(e));return this}return this.on(e,...t)}}dr("click"),dr("blur"),dr("focus"),dr("focusin"),dr("focusout"),dr("keyup"),dr("keydown"),dr("keypress"),dr("submit"),dr("change"),dr("mousedown"),dr("mousemove"),dr("mouseup"),dr("mouseenter"),dr("mouseleave"),dr("mouseout"),dr("mouseover"),dr("touchstart"),dr("touchend"),dr("touchmove"),dr("resize"),dr("scroll");const ur={addClass:function(...e){const t=ar(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this},removeClass:function(...e){const t=ar(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this},hasClass:function(...e){const t=ar(e.map((e=>e.split(" "))));return or(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(...e){const t=ar(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let i=0;i<this.length;i+=1)if(2===arguments.length)this[i].setAttribute(e,t);else for(const t in e)this[i][t]=e[t],this[i].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(...e){let[t,i,n,r]=e;function s(e){const t=e.target;if(!t)return;const r=e.target.dom7EventData||[];if(r.indexOf(e)<0&&r.unshift(e),lr(t).is(i))n.apply(t,r);else{const e=lr(t).parents();for(let t=0;t<e.length;t+=1)lr(e[t]).is(i)&&n.apply(e[t],r)}}function a(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof e[1]&&([t,n,r]=e,i=void 0),r||(r=!1);const o=t.split(" ");let l;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(l=0;l<o.length;l+=1){const e=o[l];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:n,proxyListener:s}),t.addEventListener(e,s,r)}else for(l=0;l<o.length;l+=1){const e=o[l];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:n,proxyListener:a}),t.addEventListener(e,a,r)}}return this},off:function(...e){let[t,i,n,r]=e;"function"==typeof e[1]&&([t,n,r]=e,i=void 0),r||(r=!1);const s=t.split(" ");for(let e=0;e<s.length;e+=1){const t=s[e];for(let e=0;e<this.length;e+=1){const s=this[e];let a;if(!i&&s.dom7Listeners?a=s.dom7Listeners[t]:i&&s.dom7LiveListeners&&(a=s.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const i=a[e];n&&i.listener===n||n&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===n?(s.removeEventListener(t,i.proxyListener,r),a.splice(e,1)):n||(s.removeEventListener(t,i.proxyListener,r),a.splice(e,1))}}}return this},trigger:function(...e){const t=rr(),i=e[0].split(" "),n=e[1];for(let r=0;r<i.length;r+=1){const s=i[r];for(let i=0;i<this.length;i+=1){const r=this[i];if(t.CustomEvent){const i=new t.CustomEvent(s,{detail:n,bubbles:!0,cancelable:!0});r.dom7EventData=e.filter(((e,t)=>t>0)),r.dispatchEvent(i),r.dom7EventData=[],delete r.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function i(n){n.target===this&&(e.call(this,n),t.off("transitionend",i))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=rr();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=rr(),t=ir(),i=this[0],n=i.getBoundingClientRect(),r=t.body,s=i.clientTop||r.clientTop||0,a=i.clientLeft||r.clientLeft||0,o=i===e?e.scrollY:i.scrollTop,l=i===e?e.scrollX:i.scrollLeft;return{top:n.top+o-s,left:n.left+l-a}}return null},css:function(e,t){const i=rr();let n;if(1===arguments.length){if("string"!=typeof e){for(n=0;n<this.length;n+=1)for(const t in e)this[n].style[t]=e[t];return this}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(n=0;n<this.length;n+=1)this[n].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,i)=>{e.apply(t,[t,i])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=rr(),i=ir(),n=this[0];let r,s;if(!n||void 0===e)return!1;if("string"==typeof e){if(n.matches)return n.matches(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);for(r=lr(e),s=0;s<r.length;s+=1)if(r[s]===n)return!0;return!1}if(e===i)return n===i;if(e===t)return n===t;if(e.nodeType||e instanceof sr){for(r=e.nodeType?[e]:e,s=0;s<r.length;s+=1)if(r[s]===n)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return lr([]);if(e<0){const i=t+e;return lr(i<0?[]:[this[i]])}return lr([this[e]])},append:function(...e){let t;const i=ir();for(let n=0;n<e.length;n+=1){t=e[n];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const n=i.createElement("div");for(n.innerHTML=t;n.firstChild;)this[e].appendChild(n.firstChild)}else if(t instanceof sr)for(let i=0;i<t.length;i+=1)this[e].appendChild(t[i]);else this[e].appendChild(t)}return this},prepend:function(e){const t=ir();let i,n;for(i=0;i<this.length;i+=1)if("string"==typeof e){const r=t.createElement("div");for(r.innerHTML=e,n=r.childNodes.length-1;n>=0;n-=1)this[i].insertBefore(r.childNodes[n],this[i].childNodes[0])}else if(e instanceof sr)for(n=0;n<e.length;n+=1)this[i].insertBefore(e[n],this[i].childNodes[0]);else this[i].insertBefore(e,this[i].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&lr(this[0].nextElementSibling).is(e)?lr([this[0].nextElementSibling]):lr([]):this[0].nextElementSibling?lr([this[0].nextElementSibling]):lr([]):lr([])},nextAll:function(e){const t=[];let i=this[0];if(!i)return lr([]);for(;i.nextElementSibling;){const n=i.nextElementSibling;e?lr(n).is(e)&&t.push(n):t.push(n),i=n}return lr(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&lr(t.previousElementSibling).is(e)?lr([t.previousElementSibling]):lr([]):t.previousElementSibling?lr([t.previousElementSibling]):lr([])}return lr([])},prevAll:function(e){const t=[];let i=this[0];if(!i)return lr([]);for(;i.previousElementSibling;){const n=i.previousElementSibling;e?lr(n).is(e)&&t.push(n):t.push(n),i=n}return lr(t)},parent:function(e){const t=[];for(let i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?lr(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return lr(t)},parents:function(e){const t=[];for(let i=0;i<this.length;i+=1){let n=this[i].parentNode;for(;n;)e?lr(n).is(e)&&t.push(n):t.push(n),n=n.parentNode}return lr(t)},closest:function(e){let t=this;return void 0===e?lr([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let i=0;i<this.length;i+=1){const n=this[i].querySelectorAll(e);for(let e=0;e<n.length;e+=1)t.push(n[e])}return lr(t)},children:function(e){const t=[];for(let i=0;i<this.length;i+=1){const n=this[i].children;for(let i=0;i<n.length;i+=1)e&&!lr(n[i]).is(e)||t.push(n[i])}return lr(t)},filter:function(e){return lr(or(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};Object.keys(ur).forEach((e=>{Object.defineProperty(lr.fn,e,{value:ur[e],writable:!0})}));var pr=lr;function hr(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function fr(e,t=0){return setTimeout(e,t)}function mr(){return Date.now()}function gr(e,t="x"){const i=rr();let n,r,s;const a=function(e){const t=rr();let i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i||(i=e.style),i}(e);return i.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map((e=>e.replace(",","."))).join(", ")),s=new i.WebKitCSSMatrix("none"===r?"":r)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),"x"===t&&(r=i.WebKitCSSMatrix?s.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(r=i.WebKitCSSMatrix?s.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),r||0}function vr(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function br(...e){const t=Object(e[0]),i=["__proto__","constructor","prototype"];for(let r=1;r<e.length;r+=1){const s=e[r];if(null!=s&&(n=s,!("undefined"!=typeof window&&void 0!==window.HTMLElement?n instanceof HTMLElement:n&&(1===n.nodeType||11===n.nodeType)))){const e=Object.keys(Object(s)).filter((e=>i.indexOf(e)<0));for(let i=0,n=e.length;i<n;i+=1){const n=e[i],r=Object.getOwnPropertyDescriptor(s,n);void 0!==r&&r.enumerable&&(vr(t[n])&&vr(s[n])?s[n].__swiper__?t[n]=s[n]:br(t[n],s[n]):!vr(t[n])&&vr(s[n])?(t[n]={},s[n].__swiper__?t[n]=s[n]:br(t[n],s[n])):t[n]=s[n])}}}var n;return t}function yr(e,t,i){e.style.setProperty(t,i)}function xr({swiper:e,targetPosition:t,side:i}){const n=rr(),r=-e.translate;let s,a=null;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);const l=t>r?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,d=()=>{s=(new Date).getTime(),null===a&&(a=s);const l=Math.max(Math.min((s-a)/o,1),0),u=.5-Math.cos(l*Math.PI)/2;let p=r+u*(t-r);if(c(p,t)&&(p=t),e.wrapperEl.scrollTo({[i]:p}),c(p,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:p})})),void n.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=n.requestAnimationFrame(d)};d()}let wr,kr,Er;function Ir(){return wr||(wr=function(){const e=rr(),t=ir();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const i=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,i)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),wr}function Tr(e={}){return kr||(kr=function({userAgent:e}={}){const t=Ir(),i=rr(),n=i.navigator.platform,r=e||i.navigator.userAgent,s={ios:!1,android:!1},a=i.screen.width,o=i.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad).*OS\s([\d_]+)/);const d=r.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===n;let h="MacIntel"===n;return!c&&h&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${a}x${o}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),l&&!p&&(s.os="android",s.android=!0),(c||u||d)&&(s.os="ios",s.ios=!0),s}(e)),kr}function Sr(){return Er||(Er=function(){const e=rr();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),Er}var _r={updateSize:function(){const e=this;let t,i;const n=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:n[0].clientWidth,i=void 0!==e.params.height&&null!==e.params.height?e.params.height:n[0].clientHeight,0===t&&e.isHorizontal()||0===i&&e.isVertical()||(t=t-parseInt(n.css("padding-left")||0,10)-parseInt(n.css("padding-right")||0,10),i=i-parseInt(n.css("padding-top")||0,10)-parseInt(n.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function i(e,i){return parseFloat(e.getPropertyValue(t(i))||0)}const n=e.params,{$wrapperEl:r,size:s,rtlTranslate:a,wrongRTL:o}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=r.children(`.${e.params.slideClass}`),u=l?e.virtual.slides.length:d.length;let p=[];const h=[],f=[];let m=n.slidesOffsetBefore;"function"==typeof m&&(m=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;"function"==typeof g&&(g=n.slidesOffsetAfter.call(e));const v=e.snapGrid.length,b=e.slidesGrid.length;let y=n.spaceBetween,x=-m,w=0,k=0;if(void 0===s)return;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*s),e.virtualSize=-y,a?d.css({marginLeft:"",marginBottom:"",marginTop:""}):d.css({marginRight:"",marginBottom:"",marginTop:""}),n.centeredSlides&&n.cssMode&&(yr(e.wrapperEl,"--swiper-centered-offset-before",""),yr(e.wrapperEl,"--swiper-centered-offset-after",""));const E=n.grid&&n.grid.rows>1&&e.grid;let I;E&&e.grid.initSlides(u);const T="auto"===n.slidesPerView&&n.breakpoints&&Object.keys(n.breakpoints).filter((e=>void 0!==n.breakpoints[e].slidesPerView)).length>0;for(let r=0;r<u;r+=1){I=0;const a=d.eq(r);if(E&&e.grid.updateSlide(r,a,u,t),"none"!==a.css("display")){if("auto"===n.slidesPerView){T&&(d[r].style[t("width")]="");const s=getComputedStyle(a[0]),o=a[0].style.transform,l=a[0].style.webkitTransform;if(o&&(a[0].style.transform="none"),l&&(a[0].style.webkitTransform="none"),n.roundLengths)I=e.isHorizontal()?a.outerWidth(!0):a.outerHeight(!0);else{const e=i(s,"width"),t=i(s,"padding-left"),n=i(s,"padding-right"),r=i(s,"margin-left"),o=i(s,"margin-right"),l=s.getPropertyValue("box-sizing");if(l&&"border-box"===l)I=e+r+o;else{const{clientWidth:i,offsetWidth:s}=a[0];I=e+t+n+r+o+(s-i)}}o&&(a[0].style.transform=o),l&&(a[0].style.webkitTransform=l),n.roundLengths&&(I=Math.floor(I))}else I=(s-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(I=Math.floor(I)),d[r]&&(d[r].style[t("width")]=`${I}px`);d[r]&&(d[r].swiperSlideSize=I),f.push(I),n.centeredSlides?(x=x+I/2+w/2+y,0===w&&0!==r&&(x=x-s/2-y),0===r&&(x=x-s/2-y),Math.abs(x)<.001&&(x=0),n.roundLengths&&(x=Math.floor(x)),k%n.slidesPerGroup==0&&p.push(x),h.push(x)):(n.roundLengths&&(x=Math.floor(x)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup==0&&p.push(x),h.push(x),x=x+I+y),e.virtualSize+=I+y,w=I,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,s)+g,a&&o&&("slide"===n.effect||"coverflow"===n.effect)&&r.css({width:`${e.virtualSize+n.spaceBetween}px`}),n.setWrapperSize&&r.css({[t("width")]:`${e.virtualSize+n.spaceBetween}px`}),E&&e.grid.updateWrapperSize(I,p,t),!n.centeredSlides){const t=[];for(let i=0;i<p.length;i+=1){let r=p[i];n.roundLengths&&(r=Math.floor(r)),p[i]<=e.virtualSize-s&&t.push(r)}p=t,Math.floor(e.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-s)}if(0===p.length&&(p=[0]),0!==n.spaceBetween){const i=e.isHorizontal()&&a?"marginLeft":t("marginRight");d.filter(((e,t)=>!n.cssMode||t!==d.length-1)).css({[i]:`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;f.forEach((t=>{e+=t+(n.spaceBetween?n.spaceBetween:0)})),e-=n.spaceBetween;const t=e-s;p=p.map((e=>e<0?-m:e>t?t+g:e))}if(n.centerInsufficientSlides){let e=0;if(f.forEach((t=>{e+=t+(n.spaceBetween?n.spaceBetween:0)})),e-=n.spaceBetween,e<s){const t=(s-e)/2;p.forEach(((e,i)=>{p[i]=e-t})),h.forEach(((e,i)=>{h[i]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:h,slidesSizesGrid:f}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){yr(e.wrapperEl,"--swiper-centered-offset-before",-p[0]+"px"),yr(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-f[f.length-1]/2+"px");const t=-e.snapGrid[0],i=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+i))}if(u!==c&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),!(l||n.cssMode||"slide"!==n.effect&&"fade"!==n.effect)){const t=`${n.containerModifierClass}backface-hidden`,i=e.$el.hasClass(t);u<=n.maxBackfaceHiddenSlides?i||e.$el.addClass(t):i&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,i=[],n=t.virtual&&t.params.virtual.enabled;let r,s=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const a=e=>n?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||pr([])).each((e=>{i.push(e)}));else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const e=t.activeIndex+r;if(e>t.slides.length&&!n)break;i.push(a(e))}else i.push(a(t.activeIndex));for(r=0;r<i.length;r+=1)if(void 0!==i[r]){const e=i[r].offsetHeight;s=e>s?e:s}(s||0===s)&&t.$wrapperEl.css("height",`${s}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,i=t.params,{slides:n,rtlTranslate:r,snapGrid:s}=t;if(0===n.length)return;void 0===n[0].swiperSlideOffset&&t.updateSlidesOffset();let a=-e;r&&(a=e),n.removeClass(i.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<n.length;e+=1){const o=n[e];let l=o.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(l-=n[0].swiperSlideOffset);const c=(a+(i.centeredSlides?t.minTranslate():0)-l)/(o.swiperSlideSize+i.spaceBetween),d=(a-s[0]+(i.centeredSlides?t.minTranslate():0)-l)/(o.swiperSlideSize+i.spaceBetween),u=-(a-l),p=u+t.slidesSizesGrid[e];(u>=0&&u<t.size-1||p>1&&p<=t.size||u<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(e),n.eq(e).addClass(i.slideVisibleClass)),o.progress=r?-c:c,o.originalProgress=r?-d:d}t.visibleSlides=pr(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const i=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*i||0}const i=t.params,n=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:s,isEnd:a}=t;const o=s,l=a;0===n?(r=0,s=!0,a=!0):(r=(e-t.minTranslate())/n,s=r<=0,a=r>=1),Object.assign(t,{progress:r,isBeginning:s,isEnd:a}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),s&&!o&&t.emit("reachBeginning toEdge"),a&&!l&&t.emit("reachEnd toEdge"),(o&&!s||l&&!a)&&t.emit("fromEdge"),t.emit("progress",r)},updateSlidesClasses:function(){const e=this,{slides:t,params:i,$wrapperEl:n,activeIndex:r,realIndex:s}=e,a=e.virtual&&i.virtual.enabled;let o;t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`),o=a?e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${r}"]`):t.eq(r),o.addClass(i.slideActiveClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(i.slideDuplicateActiveClass):n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(i.slideDuplicateActiveClass));let l=o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=t.eq(0),l.addClass(i.slideNextClass));let c=o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);i.loop&&0===c.length&&(c=t.eq(-1),c.addClass(i.slidePrevClass)),i.loop&&(l.hasClass(i.slideDuplicateClass)?n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass):n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass),c.hasClass(i.slideDuplicateClass)?n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass):n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,i=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:n,snapGrid:r,params:s,activeIndex:a,realIndex:o,snapIndex:l}=t;let c,d=e;if(void 0===d){for(let e=0;e<n.length;e+=1)void 0!==n[e+1]?i>=n[e]&&i<n[e+1]-(n[e+1]-n[e])/2?d=e:i>=n[e]&&i<n[e+1]&&(d=e+1):i>=n[e]&&(d=e);s.normalizeSlideIndex&&(d<0||void 0===d)&&(d=0)}if(r.indexOf(i)>=0)c=r.indexOf(i);else{const e=Math.min(s.slidesPerGroupSkip,d);c=e+Math.floor((d-e)/s.slidesPerGroup)}if(c>=r.length&&(c=r.length-1),d===a)return void(c!==l&&(t.snapIndex=c,t.emit("snapIndexChange")));const u=parseInt(t.slides.eq(d).attr("data-swiper-slide-index")||d,10);Object.assign(t,{snapIndex:c,realIndex:u,previousIndex:a,activeIndex:d}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==u&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,i=t.params,n=pr(e).closest(`.${i.slideClass}`)[0];let r,s=!1;if(n)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===n){s=!0,r=e;break}if(!n||!s)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(pr(n).attr("data-swiper-slide-index"),10):t.clickedIndex=r,i.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var Nr={getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:i,translate:n,$wrapperEl:r}=this;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let s=gr(r[0],e);return i&&(s=-s),s||0},setTranslate:function(e,t){const i=this,{rtlTranslate:n,params:r,$wrapperEl:s,wrapperEl:a,progress:o}=i;let l,c=0,d=0;i.isHorizontal()?c=n?-e:e:d=e,r.roundLengths&&(c=Math.floor(c),d=Math.floor(d)),r.cssMode?a[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-c:-d:r.virtualTranslate||s.transform(`translate3d(${c}px, ${d}px, 0px)`),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?c:d;const u=i.maxTranslate()-i.minTranslate();l=0===u?0:(e-i.minTranslate())/u,l!==o&&i.updateProgress(e),i.emit("setTranslate",i.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,i=!0,n=!0,r){const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let d;if(d=n&&e>l?l:n&&e<c?c:e,s.updateProgress(d),a.cssMode){const e=s.isHorizontal();if(0===t)o[e?"scrollLeft":"scrollTop"]=-d;else{if(!s.support.smoothScroll)return xr({swiper:s,targetPosition:-d,side:e?"left":"top"}),!0;o.scrollTo({[e?"left":"top"]:-d,behavior:"smooth"})}return!0}return 0===t?(s.setTransition(0),s.setTranslate(d),i&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionEnd"))):(s.setTransition(t),s.setTranslate(d),i&&(s.emit("beforeTransitionStart",t,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,i&&s.emit("transitionEnd"))}),s.$wrapperEl[0].addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onTranslateToWrapperTransitionEnd))),!0}};function Cr({swiper:e,runCallbacks:t,direction:i,step:n}){const{activeIndex:r,previousIndex:s}=e;let a=i;if(a||(a=r>s?"next":r<s?"prev":"reset"),e.emit(`transition${n}`),t&&r!==s){if("reset"===a)return void e.emit(`slideResetTransition${n}`);e.emit(`slideChangeTransition${n}`),"next"===a?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`)}}var Lr={slideTo:function(e=0,t=this.params.speed,i=!0,n,r){if("number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const s=this;let a=e;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:h,enabled:f}=s;if(s.animating&&o.preventInteractionOnTransition||!f&&!n&&!r)return!1;const m=Math.min(s.params.slidesPerGroupSkip,a);let g=m+Math.floor((a-m)/s.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const v=-l[g];if(o.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),i=Math.floor(100*c[e]),n=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=i&&t<n-(n-i)/2?a=e:t>=i&&t<n&&(a=e+1):t>=i&&(a=e)}if(s.initialized&&a!==u){if(!s.allowSlideNext&&v<s.translate&&v<s.minTranslate())return!1;if(!s.allowSlidePrev&&v>s.translate&&v>s.maxTranslate()&&(u||0)!==a)return!1}let b;if(a!==(d||0)&&i&&s.emit("beforeSlideChangeStart"),s.updateProgress(v),b=a>u?"next":a<u?"prev":"reset",p&&-v===s.translate||!p&&v===s.translate)return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),"slide"!==o.effect&&s.setTranslate(v),"reset"!==b&&(s.transitionStart(i,b),s.transitionEnd(i,b)),!1;if(o.cssMode){const e=s.isHorizontal(),i=p?v:-v;if(0===t){const t=s.virtual&&s.params.virtual.enabled;t&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=i,t&&requestAnimationFrame((()=>{s.wrapperEl.style.scrollSnapType="",s._swiperImmediateVirtual=!1}))}else{if(!s.support.smoothScroll)return xr({swiper:s,targetPosition:i,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:i,behavior:"smooth"})}return!0}return s.setTransition(t),s.setTranslate(v),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",t,n),s.transitionStart(i,b),0===t?s.transitionEnd(i,b):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(e){s&&!s.destroyed&&e.target===this&&(s.$wrapperEl[0].removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].removeEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(i,b))}),s.$wrapperEl[0].addEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.$wrapperEl[0].addEventListener("webkitTransitionEnd",s.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,i=!0,n){if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let s=e;return r.params.loop&&(s+=r.loopedSlides),r.slideTo(s,t,i,n)},slideNext:function(e=this.params.speed,t=!0,i){const n=this,{animating:r,enabled:s,params:a}=n;if(!s)return n;let o=a.slidesPerGroup;"auto"===a.slidesPerView&&1===a.slidesPerGroup&&a.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<a.slidesPerGroupSkip?1:o;if(a.loop){if(r&&a.loopPreventsSlide)return!1;n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft}return a.rewind&&n.isEnd?n.slideTo(0,e,t,i):n.slideTo(n.activeIndex+l,e,t,i)},slidePrev:function(e=this.params.speed,t=!0,i){const n=this,{params:r,animating:s,snapGrid:a,slidesGrid:o,rtlTranslate:l,enabled:c}=n;if(!c)return n;if(r.loop){if(s&&r.loopPreventsSlide)return!1;n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=d(l?n.translate:-n.translate),p=a.map((e=>d(e)));let h=a[p.indexOf(u)-1];if(void 0===h&&r.cssMode){let e;a.forEach(((t,i)=>{u>=t&&(e=i)})),void 0!==e&&(h=a[e>0?e-1:e])}let f=0;if(void 0!==h&&(f=o.indexOf(h),f<0&&(f=n.activeIndex-1),"auto"===r.slidesPerView&&1===r.slidesPerGroup&&r.slidesPerGroupAuto&&(f=f-n.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),r.rewind&&n.isBeginning){const r=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(r,e,t,i)}return n.slideTo(f,e,t,i)},slideReset:function(e=this.params.speed,t=!0,i){return this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e=this.params.speed,t=!0,i,n=.5){const r=this;let s=r.activeIndex;const a=Math.min(r.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[o]){const e=r.snapGrid[o];l-e>(r.snapGrid[o+1]-e)*n&&(s+=r.params.slidesPerGroup)}else{const e=r.snapGrid[o-1];l-e<=(r.snapGrid[o]-e)*n&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,e,t,i)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:i}=e,n="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let r,s=e.clickedIndex;if(t.loop){if(e.animating)return;r=parseInt(pr(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?s<e.loopedSlides-n/2||s>e.slides.length-e.loopedSlides+n/2?(e.loopFix(),s=i.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),fr((()=>{e.slideTo(s)}))):e.slideTo(s):s>e.slides.length-n?(e.loopFix(),s=i.children(`.${t.slideClass}[data-swiper-slide-index="${r}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),fr((()=>{e.slideTo(s)}))):e.slideTo(s)}else e.slideTo(s)}};function Ar(e){const t=this,i=ir(),n=rr(),r=t.touchEventsData,{params:s,touches:a,enabled:o}=t;if(!o)return;if(t.animating&&s.preventInteractionOnTransition)return;!t.animating&&s.cssMode&&s.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=pr(l.target);if("wrapper"===s.touchEventsTarget&&!c.closest(t.wrapperEl).length)return;if(r.isTouchEvent="touchstart"===l.type,!r.isTouchEvent&&"which"in l&&3===l.which)return;if(!r.isTouchEvent&&"button"in l&&l.button>0)return;if(r.isTouched&&r.isMoved)return;const d=!!s.noSwipingClass&&""!==s.noSwipingClass,u=e.composedPath?e.composedPath():e.path;d&&l.target&&l.target.shadowRoot&&u&&(c=pr(u[0]));const p=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,h=!(!l.target||!l.target.shadowRoot);if(s.noSwiping&&(h?function(e,t=this){return function t(i){if(!i||i===ir()||i===rr())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(e);return n||i.getRootNode?n||t(i.getRootNode().host):null}(t)}(p,c[0]):c.closest(p)[0]))return void(t.allowClick=!0);if(s.swipeHandler&&!c.closest(s.swipeHandler)[0])return;a.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,a.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;const f=a.currentX,m=a.currentY,g=s.edgeSwipeDetection||s.iOSEdgeSwipeDetection,v=s.edgeSwipeThreshold||s.iOSEdgeSwipeThreshold;if(g&&(f<=v||f>=n.innerWidth-v)){if("prevent"!==g)return;e.preventDefault()}if(Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=f,a.startY=m,r.touchStartTime=mr(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1),"touchstart"!==l.type){let e=!0;c.is(r.focusableElements)&&(e=!1,"SELECT"===c[0].nodeName&&(r.isTouched=!1)),i.activeElement&&pr(i.activeElement).is(r.focusableElements)&&i.activeElement!==c[0]&&i.activeElement.blur();const n=e&&t.allowTouchMove&&s.touchStartPreventDefault;!s.touchStartForcePreventDefault&&!n||c[0].isContentEditable||l.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!s.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function Or(e){const t=ir(),i=this,n=i.touchEventsData,{params:r,touches:s,rtlTranslate:a,enabled:o}=i;if(!o)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!n.isTouched)return void(n.startMoving&&n.isScrolling&&i.emit("touchMoveOpposite",l));if(n.isTouchEvent&&"touchmove"!==l.type)return;const c="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),d="touchmove"===l.type?c.pageX:l.pageX,u="touchmove"===l.type?c.pageY:l.pageY;if(l.preventedByNestedSwiper)return s.startX=d,void(s.startY=u);if(!i.allowTouchMove)return pr(l.target).is(n.focusableElements)||(i.allowClick=!1),void(n.isTouched&&(Object.assign(s,{startX:d,startY:u,currentX:d,currentY:u}),n.touchStartTime=mr()));if(n.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop)if(i.isVertical()){if(u<s.startY&&i.translate<=i.maxTranslate()||u>s.startY&&i.translate>=i.minTranslate())return n.isTouched=!1,void(n.isMoved=!1)}else if(d<s.startX&&i.translate<=i.maxTranslate()||d>s.startX&&i.translate>=i.minTranslate())return;if(n.isTouchEvent&&t.activeElement&&l.target===t.activeElement&&pr(l.target).is(n.focusableElements))return n.isMoved=!0,void(i.allowClick=!1);if(n.allowTouchCallbacks&&i.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;s.currentX=d,s.currentY=u;const p=s.currentX-s.startX,h=s.currentY-s.startY;if(i.params.threshold&&Math.sqrt(p**2+h**2)<i.params.threshold)return;if(void 0===n.isScrolling){let e;i.isHorizontal()&&s.currentY===s.startY||i.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:p*p+h*h>=25&&(e=180*Math.atan2(Math.abs(h),Math.abs(p))/Math.PI,n.isScrolling=i.isHorizontal()?e>r.touchAngle:90-e>r.touchAngle)}if(n.isScrolling&&i.emit("touchMoveOpposite",l),void 0===n.startMoving&&(s.currentX===s.startX&&s.currentY===s.startY||(n.startMoving=!0)),n.isScrolling)return void(n.isTouched=!1);if(!n.startMoving)return;i.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation(),n.isMoved||(r.loop&&!r.cssMode&&i.loopFix(),n.startTranslate=i.getTranslate(),i.setTransition(0),i.animating&&i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),n.allowMomentumBounce=!1,!r.grabCursor||!0!==i.allowSlideNext&&!0!==i.allowSlidePrev||i.setGrabCursor(!0),i.emit("sliderFirstMove",l)),i.emit("sliderMove",l),n.isMoved=!0;let f=i.isHorizontal()?p:h;s.diff=f,f*=r.touchRatio,a&&(f=-f),i.swipeDirection=f>0?"prev":"next",n.currentTranslate=f+n.startTranslate;let m=!0,g=r.resistanceRatio;if(r.touchReleaseOnEdges&&(g=0),f>0&&n.currentTranslate>i.minTranslate()?(m=!1,r.resistance&&(n.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+n.startTranslate+f)**g)):f<0&&n.currentTranslate<i.maxTranslate()&&(m=!1,r.resistance&&(n.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-n.startTranslate-f)**g)),m&&(l.preventedByNestedSwiper=!0),!i.allowSlideNext&&"next"===i.swipeDirection&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!i.allowSlidePrev&&"prev"===i.swipeDirection&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),i.allowSlidePrev||i.allowSlideNext||(n.currentTranslate=n.startTranslate),r.threshold>0){if(!(Math.abs(f)>r.threshold||n.allowThresholdMove))return void(n.currentTranslate=n.startTranslate);if(!n.allowThresholdMove)return n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,void(s.diff=i.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY)}r.followFinger&&!r.cssMode&&((r.freeMode&&r.freeMode.enabled&&i.freeMode||r.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),i.params.freeMode&&r.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(n.currentTranslate),i.setTranslate(n.currentTranslate))}function Mr(e){const t=this,i=t.touchEventsData,{params:n,touches:r,rtlTranslate:s,slidesGrid:a,enabled:o}=t;if(!o)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",l),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&n.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);n.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const c=mr(),d=c-i.touchStartTime;if(t.allowClick){const e=l.path||l.composedPath&&l.composedPath();t.updateClickedSlide(e&&e[0]||l.target),t.emit("tap click",l),d<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",l)}if(i.lastClickTime=mr(),fr((()=>{t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===r.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);let u;if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,u=n.followFinger?s?t.translate:-t.translate:-i.currentTranslate,n.cssMode)return;if(t.params.freeMode&&n.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:u});let p=0,h=t.slidesSizesGrid[0];for(let e=0;e<a.length;e+=e<n.slidesPerGroupSkip?1:n.slidesPerGroup){const t=e<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;void 0!==a[e+t]?u>=a[e]&&u<a[e+t]&&(p=e,h=a[e+t]-a[e]):u>=a[e]&&(p=e,h=a[a.length-1]-a[a.length-2])}let f=null,m=null;n.rewind&&(t.isBeginning?m=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const g=(u-a[p])/h,v=p<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;if(d>n.longSwipesMs){if(!n.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(g>=n.longSwipesRatio?t.slideTo(n.rewind&&t.isEnd?f:p+v):t.slideTo(p)),"prev"===t.swipeDirection&&(g>1-n.longSwipesRatio?t.slideTo(p+v):null!==m&&g<0&&Math.abs(g)>n.longSwipesRatio?t.slideTo(m):t.slideTo(p))}else{if(!n.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(l.target===t.navigation.nextEl||l.target===t.navigation.prevEl)?l.target===t.navigation.nextEl?t.slideTo(p+v):t.slideTo(p):("next"===t.swipeDirection&&t.slideTo(null!==f?f:p+v),"prev"===t.swipeDirection&&t.slideTo(null!==m?m:p))}}function Rr(){const e=this,{params:t,el:i}=e;if(i&&0===i.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:r,snapGrid:s}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=r,e.allowSlideNext=n,e.params.watchOverflow&&s!==e.snapGrid&&e.checkOverflow()}function Dr(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Pr(){const e=this,{wrapperEl:t,rtlTranslate:i,enabled:n}=e;if(!n)return;let r;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const s=e.maxTranslate()-e.minTranslate();r=0===s?0:(e.translate-e.minTranslate())/s,r!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let zr=!1;function Br(){}const Wr=(e,t)=>{const i=ir(),{params:n,touchEvents:r,el:s,wrapperEl:a,device:o,support:l}=e,c=!!n.nested,d="on"===t?"addEventListener":"removeEventListener",u=t;if(l.touch){const t=!("touchstart"!==r.start||!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};s[d](r.start,e.onTouchStart,t),s[d](r.move,e.onTouchMove,l.passiveListener?{passive:!1,capture:c}:c),s[d](r.end,e.onTouchEnd,t),r.cancel&&s[d](r.cancel,e.onTouchEnd,t)}else s[d](r.start,e.onTouchStart,!1),i[d](r.move,e.onTouchMove,c),i[d](r.end,e.onTouchEnd,!1);(n.preventClicks||n.preventClicksPropagation)&&s[d]("click",e.onClick,!0),n.cssMode&&a[d]("scroll",e.onScroll),n.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Rr,!0):e[u]("observerUpdate",Rr,!0)};const Ur=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var Fr={loadImage:function(e,t,i,n,r,s){const a=rr();let o;function l(){s&&s()}pr(e).parent("picture")[0]||e.complete&&r?l():t?(o=new a.Image,o.onload=l,o.onerror=l,n&&(o.sizes=n),i&&(o.srcset=i),t&&(o.src=t)):l()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let i=0;i<e.imagesToLoad.length;i+=1){const n=e.imagesToLoad[i];e.loadImage(n,n.currentSrc||n.getAttribute("src"),n.srcset||n.getAttribute("srcset"),n.sizes||n.getAttribute("sizes"),!0,t)}}};var jr={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Hr(e,t){return function(i={}){const n=Object.keys(i)[0],r=i[n];"object"==typeof r&&null!==r?(["navigation","pagination","scrollbar"].indexOf(n)>=0&&!0===e[n]&&(e[n]={auto:!0}),n in e&&"enabled"in r?(!0===e[n]&&(e[n]={enabled:!0}),"object"!=typeof e[n]||"enabled"in e[n]||(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),br(t,i)):br(t,i)):br(t,i)}}const $r={eventsEmitter:{on(e,t,i){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof t)return n;const r=i?"unshift":"push";return e.split(" ").forEach((e=>{n.eventsListeners[e]||(n.eventsListeners[e]=[]),n.eventsListeners[e][r](t)})),n},once(e,t,i){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof t)return n;function r(...i){n.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(n,i)}return r.__emitterProxy=t,n.on(e,r,i)},onAny(e,t){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof e)return i;const n=t?"unshift":"push";return i.eventsAnyListeners.indexOf(e)<0&&i.eventsAnyListeners[n](e),i},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const i=t.eventsAnyListeners.indexOf(e);return i>=0&&t.eventsAnyListeners.splice(i,1),t},off(e,t){const i=this;return!i.eventsListeners||i.destroyed?i:i.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].forEach(((n,r)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&i.eventsListeners[e].splice(r,1)}))})),i):i},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let i,n,r;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],n=e.slice(1,e.length),r=t):(i=e[0].events,n=e[0].data,r=e[0].context||t),n.unshift(r);return(Array.isArray(i)?i:i.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(r,[e,...n])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(r,n)}))})),t}},update:_r,translate:Nr,transition:{setTransition:function(e,t){const i=this;i.params.cssMode||i.$wrapperEl.transition(e),i.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const i=this,{params:n}=i;n.cssMode||(n.autoHeight&&i.updateAutoHeight(),Cr({swiper:i,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const i=this,{params:n}=i;i.animating=!1,n.cssMode||(i.setTransition(0),Cr({swiper:i,runCallbacks:e,direction:t,step:"End"}))}},slide:Lr,loop:{loopCreate:function(){const e=this,t=ir(),{params:i,$wrapperEl:n}=e,r=n.children().length>0?pr(n.children()[0].parentNode):n;r.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();let s=r.children(`.${i.slideClass}`);if(i.loopFillGroupWithBlank){const e=i.slidesPerGroup-s.length%i.slidesPerGroup;if(e!==i.slidesPerGroup){for(let n=0;n<e;n+=1){const e=pr(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);r.append(e)}s=r.children(`.${i.slideClass}`)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=s.length),e.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),e.loopedSlides+=i.loopAdditionalSlides,e.loopedSlides>s.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=s.length);const a=[],o=[];s.each(((e,t)=>{pr(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/s.length)*s.length;o.push(s.eq(e)[0]),a.unshift(s.eq(s.length-e-1)[0])}for(let e=0;e<o.length;e+=1)r.append(pr(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));for(let e=a.length-1;e>=0;e-=1)r.prepend(pr(a[e].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:i,loopedSlides:n,allowSlidePrev:r,allowSlideNext:s,snapGrid:a,rtlTranslate:o}=e;let l;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-a[t]-e.getTranslate();if(t<n){l=i.length-3*n+t,l+=n;e.slideTo(l,0,!1,!0)&&0!==c&&e.setTranslate((o?-e.translate:e.translate)-c)}else if(t>=i.length-n){l=-i.length+t+n,l+=n;e.slideTo(l,0,!1,!0)&&0!==c&&e.setTranslate((o?-e.translate:e.translate)-c)}e.allowSlidePrev=r,e.allowSlideNext=s,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:i}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const i="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;i.style.cursor="move",i.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function(){const e=this,t=ir(),{params:i,support:n}=e;e.onTouchStart=Ar.bind(e),e.onTouchMove=Or.bind(e),e.onTouchEnd=Mr.bind(e),i.cssMode&&(e.onScroll=Pr.bind(e)),e.onClick=Dr.bind(e),n.touch&&!zr&&(t.addEventListener("touchstart",Br),zr=!0),Wr(e,"on")},detachEvents:function(){Wr(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:i,loopedSlides:n=0,params:r,$el:s}=e,a=r.breakpoints;if(!a||a&&0===Object.keys(a).length)return;const o=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in a?a[o]:void 0)||e.originalParams,c=Ur(e,r),d=Ur(e,l),u=r.enabled;c&&!d?(s.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(s.addClass(`${r.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===r.grid.fill)&&s.addClass(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const i=r[t]&&r[t].enabled,n=l[t]&&l[t].enabled;i&&!n&&e[t].disable(),!i&&n&&e[t].enable()}));const p=l.direction&&l.direction!==r.direction,h=r.loop&&(l.slidesPerView!==r.slidesPerView||p);p&&i&&e.changeDirection(),br(e.params,l);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),h&&i&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-n+e.loopedSlides,0,!1)),e.emit("breakpoint",l)},getBreakpoint:function(e,t="window",i){if(!e||"container"===t&&!i)return;let n=!1;const r=rr(),s="window"===t?r.innerHeight:i.clientHeight,a=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:s*t,point:e}}return{value:e,point:e}}));a.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<a.length;e+=1){const{point:s,value:o}=a[e];"window"===t?r.matchMedia(`(min-width: ${o}px)`).matches&&(n=s):o<=i.clientWidth&&(n=s)}return n||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:i}=e,{slidesOffsetBefore:n}=i;if(n){const t=e.slides.length-1,i=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*n;e.isLocked=e.size>i}else e.isLocked=1===e.snapGrid.length;!0===i.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===i.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:i,rtl:n,$el:r,device:s,support:a}=e,o=function(e,t){const i=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((n=>{e[n]&&i.push(t+n)})):"string"==typeof e&&i.push(t+e)})),i}(["initialized",i.direction,{"pointer-events":!a.touch},{"free-mode":e.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:n},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&"column"===i.grid.fill},{android:s.android},{ios:s.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);t.push(...o),r.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:Fr},Vr={};class Gr{enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const n=i.minTranslate(),r=(i.maxTranslate()-n)*e+n;i.translateTo(r,void 0===t?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((i=>{const n=e.getSlideClasses(i);t.push({slideEl:i,classNames:n}),e.emit("_slideClass",i,n)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:i,slides:n,slidesGrid:r,slidesSizesGrid:s,size:a,activeIndex:o}=this;let l=1;if(i.centeredSlides){let e,t=n[o].swiperSlideSize;for(let i=o+1;i<n.length;i+=1)n[i]&&!e&&(t+=n[i].swiperSlideSize,l+=1,t>a&&(e=!0));for(let i=o-1;i>=0;i-=1)n[i]&&!e&&(t+=n[i].swiperSlideSize,l+=1,t>a&&(e=!0))}else if("current"===e)for(let e=o+1;e<n.length;e+=1){(t?r[e]+s[e]-r[o]<a:r[e]-r[o]<a)&&(l+=1)}else for(let e=o-1;e>=0;e-=1){r[o]-r[e]<a&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;function n(){const t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}let r;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(n(),e.params.autoHeight&&e.updateAutoHeight()):(r=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),r||n()),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,n=i.params.direction;return e||(e="horizontal"===n?"vertical":"horizontal"),e===n||"horizontal"!==e&&"vertical"!==e||(i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const i=pr(e||t.params.el);if(!(e=i[0]))return!1;e.swiper=t;const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=pr(e.shadowRoot.querySelector(n()));return t.children=e=>i.children(e),t}return i.children?i.children(n()):pr(i).children(n())})();if(0===r.length&&t.params.createElements){const e=ir().createElement("div");r=pr(e),e.className=t.params.wrapperClass,i.append(e),i.children(`.${t.params.slideClass}`).each((e=>{r.append(e)}))}return Object.assign(t,{$el:i,el:e,$wrapperEl:r,wrapperEl:r[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction")),wrongRTL:"-webkit-box"===r.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const i=this,{params:n,$el:r,$wrapperEl:s,slides:a}=i;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),r.removeAttr("style"),s.removeAttr("style"),a&&a.length&&a.removeClass([n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((e=>{i.off(e)})),!1!==e&&(i.$el[0].swiper=null,hr(i)),i.destroyed=!0),null}static extendDefaults(e){br(Vr,e)}static get extendedDefaults(){return Vr}static get defaults(){return jr}static installModule(e){Gr.prototype.__modules__||(Gr.prototype.__modules__=[]);const t=Gr.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>Gr.installModule(e))),Gr):(Gr.installModule(e),Gr)}constructor(...e){let t,i;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?i=e[0]:[t,i]=e,i||(i={}),i=br({},i),t&&!i.el&&(i.el=t),i.el&&pr(i.el).length>1){const e=[];return pr(i.el).each((t=>{const n=br({},i,{el:t});e.push(new Gr(n))})),e}const n=this;n.__swiper__=!0,n.support=Ir(),n.device=Tr({userAgent:i.userAgent}),n.browser=Sr(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],i.modules&&Array.isArray(i.modules)&&n.modules.push(...i.modules);const r={};n.modules.forEach((e=>{e({swiper:n,extendParams:Hr(i,r),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})}));const s=br({},jr,r);return n.params=br({},s,Vr,i),n.originalParams=br({},n.params),n.passedParams=br({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach((e=>{n.on(e,n.params.on[e])})),n.params&&n.params.onAny&&n.onAny(n.params.onAny),n.$=pr,Object.assign(n,{enabled:n.params.enabled,el:t,classNames:[],slides:pr(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===n.params.direction,isVertical:()=>"vertical"===n.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return n.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},n.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},n.support.touch||!n.params.simulateTouch?n.touchEventsTouch:n.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:mr(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}}Object.keys($r).forEach((e=>{Object.keys($r[e]).forEach((t=>{Gr.prototype[t]=$r[e][t]}))})),Gr.use([function({swiper:e,on:t,emit:i}){const n=rr();let r=null,s=null;const a=()=>{e&&!e.destroyed&&e.initialized&&(i("beforeResize"),i("resize"))},o=()=>{e&&!e.destroyed&&e.initialized&&i("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==n.ResizeObserver?e&&!e.destroyed&&e.initialized&&(r=new ResizeObserver((t=>{s=n.requestAnimationFrame((()=>{const{width:i,height:n}=e;let r=i,s=n;t.forEach((({contentBoxSize:t,contentRect:i,target:n})=>{n&&n!==e.el||(r=i?i.width:(t[0]||t).inlineSize,s=i?i.height:(t[0]||t).blockSize)})),r===i&&s===n||a()}))})),r.observe(e.el)):(n.addEventListener("resize",a),n.addEventListener("orientationchange",o))})),t("destroy",(()=>{s&&n.cancelAnimationFrame(s),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null),n.removeEventListener("resize",a),n.removeEventListener("orientationchange",o)}))},function({swiper:e,extendParams:t,on:i,emit:n}){const r=[],s=rr(),a=(e,t={})=>{const i=new(s.MutationObserver||s.WebkitMutationObserver)((e=>{if(1===e.length)return void n("observerUpdate",e[0]);const t=function(){n("observerUpdate",e[0])};s.requestAnimationFrame?s.requestAnimationFrame(t):s.setTimeout(t,0)}));i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),r.push(i)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)a(t[e])}a(e.$el[0],{childList:e.params.observeSlideChildren}),a(e.$wrapperEl[0],{attributes:!1})}})),i("destroy",(()=>{r.forEach((e=>{e.disconnect()})),r.splice(0,r.length)}))}]);var Xr=Gr;function qr({swiper:e,extendParams:t,on:i,emit:n}){let r;function s(){if(!e.size)return e.autoplay.running=!1,void(e.autoplay.paused=!1);const t=e.slides.eq(e.activeIndex);let i=e.params.autoplay.delay;t.attr("data-swiper-autoplay")&&(i=t.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=fr((()=>{let t;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),t=e.slidePrev(e.params.speed,!0,!0),n("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),n("autoplay")):(t=e.slidePrev(e.params.speed,!0,!0),n("autoplay")):e.params.loop?(e.loopFix(),t=e.slideNext(e.params.speed,!0,!0),n("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?o():(t=e.slideTo(0,e.params.speed,!0,!0),n("autoplay")):(t=e.slideNext(e.params.speed,!0,!0),n("autoplay")),(e.params.cssMode&&e.autoplay.running||!1===t)&&s()}),i)}function a(){return void 0===r&&(!e.autoplay.running&&(e.autoplay.running=!0,n("autoplayStart"),s(),!0))}function o(){return!!e.autoplay.running&&(void 0!==r&&(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,n("autoplayStop"),!0))}function l(t){e.autoplay.running&&(e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,0!==t&&e.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].addEventListener(t,d)})):(e.autoplay.paused=!1,s())))}function c(){const t=ir();"hidden"===t.visibilityState&&e.autoplay.running&&l(),"visible"===t.visibilityState&&e.autoplay.paused&&(s(),e.autoplay.paused=!1)}function d(t){e&&!e.destroyed&&e.$wrapperEl&&t.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,d)})),e.autoplay.paused=!1,e.autoplay.running?s():o())}function u(){e.params.autoplay.disableOnInteraction?o():(n("autoplayPause"),l()),["transitionend","webkitTransitionEnd"].forEach((t=>{e.$wrapperEl[0].removeEventListener(t,d)}))}function p(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,n("autoplayResume"),s())}e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),i("init",(()=>{if(e.params.autoplay.enabled){a();ir().addEventListener("visibilitychange",c),e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",u),e.$el.on("mouseleave",p))}})),i("beforeTransitionStart",((t,i,n)=>{e.autoplay.running&&(n||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(i):o())})),i("sliderFirstMove",(()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?o():l())})),i("touchEnd",(()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&s()})),i("destroy",(()=>{e.$el.off("mouseenter",u),e.$el.off("mouseleave",p),e.autoplay.running&&o();ir().removeEventListener("visibilitychange",c)})),Object.assign(e.autoplay,{pause:l,run:s,start:a,stop:o})}o=r("1iWqc"),c=r("2mCIo");const{topMovieEll:Kr}=c.refs;!async function(){!function(e){const t=e.map((({id:e,poster_path:t,original_title:i})=>`<div  class="topMovieGallery_slide swiper-slide"><div class="movie__item topMovie_container" data-id="${e}">\n      <img class="topMovie_img"  src= "https://image.tmdb.org/t/p/w500/${t}"\n      alt="${i}" loading="lazy"></div></div>`)).join("");Kr.insertAdjacentHTML("beforeend",t)}((await(0,o.getTopFilms)()).results);new Xr(".swiper",{slidesPerView:3,spaceBetween:2,breakpoints:{480:{slidesPerView:3,spaceBetween:2},768:{slidesPerView:4,spaceBetween:4},1280:{slidesPerView:5,spaceBetween:8}},direction:"horizontal",effect:"fade",loop:!0,speed:1e4,autoplay:{delay:0,disableOnInteraction:!1},modules:[qr],on:{init(){this.el.addEventListener("mouseenter",(()=>{this.autoplay.stop()})),this.el.addEventListener("mouseleave",(()=>{this.autoplay.start()}))}}})}(),r("JcIhZ"),r("2N0rV"),r("2cGct"),r("f9EVk");l=r("1HsQi");const Yr="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=e57746b2e4fe98cb5cc839cb405a15f1",Jr=document.querySelector("#tags-genre"),Qr=document.querySelector(".movie__gallery"),Zr=document.querySelector(".filter");Zr.addEventListener("click",(function(e){Zr.classList.toggle("visually-hidden"),Jr.classList.toggle("visually-hidden"),Jr.innerHTML="",es.forEach((e=>{const t=document.createElement("div");t.classList.add("tag"),t.id=e.id,t.innerText=e.name,t.addEventListener("click",(()=>{0===ts.length?ts.push(e.id):ts.includes(e.id)?ts.forEach(((t,i)=>{t===e.id&&ts.splice(i,1)})):ts.push(e.id),console.log(ts),Qr.innerHTML="",is(Yr+"&with_genres="+encodeURI(ts.join(",")))})),Jr.append(t)}))}));const es=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];let ts=[];function is(e){fetch(e).then((e=>e.json())).then((e=>{console.log(e.results),(0,l.renderGallery)(e.results)}))}is(Yr);
//# sourceMappingURL=index.e04bc76a.js.map
