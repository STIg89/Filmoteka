function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},a=t.parcelRequire51f8;null==a&&((a=function(e){if(e in i)return i[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return i[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequire51f8=a),a.register("jdXd5",(function(e,t){var i=a("2mCIo");if(localStorage.getItem("uid")&&localStorage.getItem("username")){if(!i.refs.headerUserLogedinContainer.classList.contains("visually-hidden"))return;i.refs.headerUserLogedinContainer.classList.remove("visually-hidden"),i.refs.headerUserEmailDiv.innerHTML=`Hello, </br> ${localStorage.getItem("username")}`}else{if(!i.refs.headerUserNoLoginContainer.classList.contains("visually-hidden"))return;i.refs.headerUserNoLoginContainer.classList.remove("visually-hidden")}})),a("1iWqc"),a("2mCIo"),a("jdXd5"),a("7nHSx");var r,s,o=a("1iWqc"),l=a("1HsQi"),c=a("2mCIo"),d={};r=void 0===t?"undefined"==typeof window?d:window:t,s=function(e){if(void 0===e&&void 0===e.document)return!1;var t,i,n,a,r,s="\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation",o='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',l="Success",c="Failure",d="Warning",u="Info",p={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},h="Success",f="Failure",m="Warning",g="Info",v={ID:"NotiflixReportWrap",className:"notiflix-report",width:"320px",backgroundColor:"#f8f8f8",borderRadius:"25px",rtl:!1,zindex:4002,backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",backOverlayClickToClose:!1,fontFamily:"Quicksand",svgSize:"110px",plainText:!0,titleFontSize:"16px",titleMaxLength:34,messageFontSize:"13px",messageMaxLength:400,buttonFontSize:"14px",buttonMaxLength:34,cssAnimation:!0,cssAnimationDuration:360,cssAnimationStyle:"fade",success:{svgColor:"#32c682",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#32c682",buttonColor:"#fff",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{svgColor:"#ff5549",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#ff5549",buttonColor:"#fff",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{svgColor:"#eebf31",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#eebf31",buttonColor:"#fff",backOverlayColor:"rgba(238,191,49,0.2)"},info:{svgColor:"#26c0d3",titleColor:"#1e1e1e",messageColor:"#242424",buttonBackground:"#26c0d3",buttonColor:"#fff",backOverlayColor:"rgba(38,192,211,0.2)"}},b="Show",y="Ask",x="Prompt",w={ID:"NotiflixConfirmWrap",className:"notiflix-confirm",width:"300px",zindex:4003,position:"center",distance:"10px",backgroundColor:"#f8f8f8",borderRadius:"25px",backOverlay:!0,backOverlayColor:"rgba(0,0,0,0.5)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,cssAnimationStyle:"fade",plainText:!0,titleColor:"#32c682",titleFontSize:"16px",titleMaxLength:34,messageColor:"#1e1e1e",messageFontSize:"14px",messageMaxLength:110,buttonsFontSize:"15px",buttonsMaxLength:34,okButtonColor:"#f8f8f8",okButtonBackground:"#32c682",cancelButtonColor:"#f8f8f8",cancelButtonBackground:"#a9a9a9"},k="Standard",E="Hourglass",I="Circle",T="Arrows",C="Dots",S="Pulse",_="Custom",N="Notiflix",L={ID:"NotiflixLoadingWrap",className:"notiflix-loading",zindex:4e3,backgroundColor:"rgba(0,0,0,0.8)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:400,clickToClose:!1,customSvgUrl:null,customSvgCode:null,svgSize:"80px",svgColor:"#32c682",messageID:"NotiflixLoadingMessage",messageFontSize:"15px",messageMaxLength:34,messageColor:"#dcdcdc"},A="Standard",O="Hourglass",M="Circle",R="Arrows",D="Dots",P="Pulse",z={ID:"NotiflixBlockWrap",querySelectorLimit:200,className:"notiflix-block",position:"absolute",zindex:1e3,backgroundColor:"rgba(255,255,255,0.9)",rtl:!1,fontFamily:"Quicksand",cssAnimation:!0,cssAnimationDuration:300,svgSize:"45px",svgColor:"#383838",messageFontSize:"14px",messageMaxLength:34,messageColor:"#383838"},B=function(e){return console.error("%c Notiflix Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549","\n"+e+s)},W=function(e){return console.log("%c Notiflix Info ","padding:2px;border-radius:20px;color:#fff;background:#26c0d3","\n"+e+s)},U=function(t){return t||(t="head"),null!==e.document[t]||(B('\nNotiflix needs to be appended to the "<'+t+'>" element, but you called it before the "<'+t+'>" element has been created.'),!1)},$=function(t,i){if(!U("head"))return!1;if(null!==t()&&!e.document.getElementById(i)){var n=e.document.createElement("style");n.id=i,n.innerHTML=t(),e.document.head.appendChild(n)}},F=function(){var e={},t=!1,i=0;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],i++);for(var n=function(i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=t&&"[object Object]"===Object.prototype.toString.call(i[n])?F(e[n],i[n]):i[n])};i<arguments.length;i++)n(arguments[i]);return e},H=function(t){var i=e.document.createElement("div");return i.innerHTML=t,i.textContent||i.innerText||""},j=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" transform="scale(.8)" viewBox="0 0 38 38"><g fill="none" fill-rule="evenodd" stroke-width="2" transform="translate(1 1)"><circle cx="18" cy="18" r="18" stroke-opacity=".25"/><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" dur="1s" from="0 18 18" repeatCount="indefinite" to="360 18 18" type="rotate"/></path></g></svg>'},V=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingHourglass" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><style>@-webkit-keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@keyframes NXhourglass5-animation{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}16.67%{-webkit-transform:scale(1,.8);transform:scale(1,.8)}33.33%{-webkit-transform:scale(.88,.6);transform:scale(.88,.6)}37.5%{-webkit-transform:scale(.85,.55);transform:scale(.85,.55)}41.67%{-webkit-transform:scale(.8,.5);transform:scale(.8,.5)}45.83%{-webkit-transform:scale(.75,.45);transform:scale(.75,.45)}50%{-webkit-transform:scale(.7,.4);transform:scale(.7,.4)}54.17%{-webkit-transform:scale(.6,.35);transform:scale(.6,.35)}58.33%{-webkit-transform:scale(.5,.3);transform:scale(.5,.3)}83.33%,to{-webkit-transform:scale(.2,0);transform:scale(.2,0)}}@-webkit-keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@keyframes NXhourglass3-animation{0%{-webkit-transform:scale(1,.02);transform:scale(1,.02)}79.17%,to{-webkit-transform:scale(1,1);transform:scale(1,1)}}@-webkit-keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes NXhourglass1-animation{0%,83.33%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}#NXLoadingHourglass *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g data-animator-group="true" data-animator-type="1" style="-webkit-animation-name:NXhourglass1-animation;animation-name:NXhourglass1-animation;-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transform-box:fill-box"><g id="NXhourglass2" fill="inherit"><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass3-animation;animation-name:NXhourglass3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass4" d="M100 100l-34.38 32.08v31.14h68.76v-31.14z"/></g><g data-animator-group="true" data-animator-type="2" style="-webkit-animation-name:NXhourglass5-animation;animation-name:NXhourglass5-animation;-webkit-transform-origin:50% 100%;transform-origin:50% 100%;transform-box:fill-box" opacity=".4"><path id="NXhourglass6" d="M100 100L65.62 67.92V36.78h68.76v31.14z"/></g><path d="M51.14 38.89h8.33v14.93c0 15.1 8.29 28.99 23.34 39.1 1.88 1.25 3.04 3.97 3.04 7.08s-1.16 5.83-3.04 7.09c-15.05 10.1-23.34 23.99-23.34 39.09v14.93h-8.33a4.859 4.859 0 1 0 0 9.72h97.72a4.859 4.859 0 1 0 0-9.72h-8.33v-14.93c0-15.1-8.29-28.99-23.34-39.09-1.88-1.26-3.04-3.98-3.04-7.09s1.16-5.83 3.04-7.08c15.05-10.11 23.34-24 23.34-39.1V38.89h8.33a4.859 4.859 0 1 0 0-9.72H51.14a4.859 4.859 0 1 0 0 9.72zm79.67 14.93c0 15.87-11.93 26.25-19.04 31.03-4.6 3.08-7.34 8.75-7.34 15.15 0 6.41 2.74 12.07 7.34 15.15 7.11 4.78 19.04 15.16 19.04 31.03v14.93H69.19v-14.93c0-15.87 11.93-26.25 19.04-31.02 4.6-3.09 7.34-8.75 7.34-15.16 0-6.4-2.74-12.07-7.34-15.15-7.11-4.78-19.04-15.16-19.04-31.03V38.89h61.62v14.93z"/></g></g></svg>'},G=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+e+'" viewBox="25 25 50 50" style="-webkit-animation:rotate 2s linear infinite;animation:rotate 2s linear infinite;height:'+e+";-webkit-transform-origin:center center;-ms-transform-origin:center center;transform-origin:center center;width:"+e+';position:absolute;top:0;left:0;margin:auto"><style>@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}@keyframes dash{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:89,200;stroke-dashoffset:-35}to{stroke-dasharray:89,200;stroke-dashoffset:-124}}</style><circle cx="50" cy="50" r="20" fill="none" stroke="'+t+'" stroke-width="2" style="-webkit-animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite;animation:dash 1.5s ease-in-out infinite,color 1.5s ease-in-out infinite" stroke-dasharray="150 200" stroke-dashoffset="-10" stroke-linecap="round"/></svg>'},X=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 128 128"><g><path fill="inherit" d="M109.25 55.5h-36l12-12a29.54 29.54 0 0 0-49.53 12H18.75A46.04 46.04 0 0 1 96.9 31.84l12.35-12.34v36zm-90.5 17h36l-12 12a29.54 29.54 0 0 0 49.53-12h16.97A46.04 46.04 0 0 1 31.1 96.16L18.74 108.5v-36z"/><animateTransform attributeName="transform" dur="1.5s" from="0 64 64" repeatCount="indefinite" to="360 64 64" type="rotate"/></g></svg>'},q=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" fill="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 100 100"><g transform="translate(25 50)"><circle r="9" fill="inherit" transform="scale(.239)"><animateTransform attributeName="transform" begin="-0.266s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(50 50)"><circle r="9" fill="inherit" transform="scale(.00152)"><animateTransform attributeName="transform" begin="-0.133s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g><g transform="translate(75 50)"><circle r="9" fill="inherit" transform="scale(.299)"><animateTransform attributeName="transform" begin="0s" calcMode="spline" dur="0.8s" keySplines="0.3 0 0.7 1;0.3 0 0.7 1" keyTimes="0;0.5;1" repeatCount="indefinite" type="scale" values="0;1;0"/></circle></g></svg>'},K=function(e,t){return e||(e="60px"),t||(t="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" stroke="'+t+'" width="'+e+'" height="'+e+'" viewBox="0 0 44 44"><g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="0s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.165, 0.84, 0.44, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 20"/><animate attributeName="stroke-opacity" begin="-0.9s" calcMode="spline" dur="1.8s" keySplines="0.3, 0.61, 0.355, 1" keyTimes="0; 1" repeatCount="indefinite" values="1; 0"/></circle></g></svg>'},Y=function(){return'[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}'},J=0,Q=function(i,n,a,r){if(!U("body"))return!1;t||le.Notify.init({});var s=F(!0,t,{});if("object"==typeof a&&!Array.isArray(a)||"object"==typeof r&&!Array.isArray(r)){var h={};"object"==typeof a?h=a:"object"==typeof r&&(h=r),t=F(!0,t,h)}var f=t[i.toLocaleLowerCase("en")];J++,"string"!=typeof n&&(n="Notiflix "+i),t.plainText&&(n=H(n)),!t.plainText&&n.length>t.messageMaxLength&&(t=F(!0,t,{closeButton:!0,messageMaxLength:150}),n='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),n.length>t.messageMaxLength&&(n=n.substring(0,t.messageMaxLength)+"..."),"shadow"===t.fontAwesomeIconStyle&&(f.fontAwesomeIconColor=f.background),t.cssAnimation||(t.cssAnimationDuration=0);var m=e.document.getElementById(p.wrapID)||e.document.createElement("div");if(m.id=p.wrapID,m.style.width=t.width,m.style.zIndex=t.zindex,m.style.opacity=t.opacity,"center-center"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.margin="auto",m.classList.add("nx-flex-center-center"),m.style.maxHeight="calc((100vh - "+t.distance+") - "+t.distance+")",m.style.display="flex",m.style.flexWrap="wrap",m.style.flexDirection="column",m.style.justifyContent="center",m.style.alignItems="center",m.style.pointerEvents="none"):"center-top"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.top=t.distance,m.style.bottom="auto",m.style.margin="auto"):"center-bottom"===t.position?(m.style.left=t.distance,m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.margin="auto"):"right-bottom"===t.position?(m.style.right=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.left="auto"):"left-top"===t.position?(m.style.left=t.distance,m.style.top=t.distance,m.style.right="auto",m.style.bottom="auto"):"left-bottom"===t.position?(m.style.left=t.distance,m.style.bottom=t.distance,m.style.top="auto",m.style.right="auto"):(m.style.right=t.distance,m.style.top=t.distance,m.style.left="auto",m.style.bottom="auto"),t.backOverlay){var g=e.document.getElementById(p.overlayID)||e.document.createElement("div");g.id=p.overlayID,g.style.width="100%",g.style.height="100%",g.style.position="fixed",g.style.zIndex=t.zindex-1,g.style.left=0,g.style.top=0,g.style.right=0,g.style.bottom=0,g.style.background=f.backOverlayColor||t.backOverlayColor,g.className=t.cssAnimation?"nx-with-animation":"",g.style.animationDuration=t.cssAnimation?t.cssAnimationDuration+"ms":"",e.document.getElementById(p.overlayID)||e.document.body.appendChild(g)}e.document.getElementById(p.wrapID)||e.document.body.appendChild(m);var v=e.document.createElement("div");v.id=t.ID+"-"+J,v.className=t.className+" "+f.childClassName+" "+(t.cssAnimation?"nx-with-animation":"")+" "+(t.useIcon?"nx-with-icon":"")+" nx-"+t.cssAnimationStyle+" "+(t.closeButton&&"function"!=typeof a?"nx-with-close-button":"")+" "+("function"==typeof a?"nx-with-callback":"")+" "+(t.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=t.fontSize,v.style.color=f.textColor,v.style.background=f.background,v.style.borderRadius=t.borderRadius,v.style.pointerEvents="all",t.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+t.fontFamily+'", '+o,t.cssAnimation&&(v.style.animationDuration=t.cssAnimationDuration+"ms");var b="";if(t.closeButton&&"function"!=typeof a&&(b='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+f.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),t.useIcon)if(t.useFontAwesome)v.innerHTML='<i style="color:'+f.fontAwesomeIconColor+"; font-size:"+t.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+f.fontAwesomeClassName+" "+("shadow"===t.fontAwesomeIconStyle?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?b:"");else{var y="";i===l?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':i===c?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':i===d?y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':i===u&&(y='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+f.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=y+'<span class="nx-message nx-with-icon">'+n+"</span>"+(t.closeButton?b:"")}else v.innerHTML='<span class="nx-message">'+n+"</span>"+(t.closeButton?b:"");if("left-bottom"===t.position||"right-bottom"===t.position){var x=e.document.getElementById(p.wrapID);x.insertBefore(v,x.firstChild)}else e.document.getElementById(p.wrapID).appendChild(v);var w=e.document.getElementById(v.id);if(w){var k,E,I=function(){w.classList.add("nx-remove");var t=e.document.getElementById(p.overlayID);t&&0>=m.childElementCount&&t.classList.add("nx-remove"),clearTimeout(k)},T=function(){if(w&&null!==w.parentNode&&w.parentNode.removeChild(w),0>=m.childElementCount&&null!==m.parentNode){m.parentNode.removeChild(m);var t=e.document.getElementById(p.overlayID);t&&null!==t.parentNode&&t.parentNode.removeChild(t)}clearTimeout(E)};if(t.closeButton&&"function"!=typeof a&&e.document.getElementById(v.id).querySelector("span.nx-close-button").addEventListener("click",(function(){I();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),("function"==typeof a||t.clickToClose)&&w.addEventListener("click",(function(){"function"==typeof a&&a(),I();var e=setTimeout((function(){T(),clearTimeout(e)}),t.cssAnimationDuration)})),!t.closeButton&&"function"!=typeof a){var C=function(){k=setTimeout((function(){I()}),t.timeout),E=setTimeout((function(){T()}),t.timeout+t.cssAnimationDuration)};C(),t.pauseOnHover&&(w.addEventListener("mouseenter",(function(){w.classList.add("nx-paused"),clearTimeout(k),clearTimeout(E)})),w.addEventListener("mouseleave",(function(){w.classList.remove("nx-paused"),C()})))}}if(t.showOnlyTheLastOne&&0<J)for(var S,_=e.document.querySelectorAll("[id^="+t.ID+"-]:not([id="+t.ID+"-"+J+"])"),N=0;N<_.length;N++)null!==(S=_[N]).parentNode&&S.parentNode.removeChild(S);t=F(!0,t,s)},Z=function(){return'[id^=NotiflixReportWrap]{position:fixed;z-index:4002;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;left:0;top:0;padding:10px;color:#1e1e1e;border-radius:25px;background:transparent;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixReportWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixReportWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixReportWrap]>div.nx-report-click-to-close{cursor:pointer}[id^=NotiflixReportWrap]>div[class*="-content"]{width:320px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:inherit;padding:10px;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));border:1px solid rgba(0,0,0,.03);background:#f8f8f8;position:relative;z-index:1}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:110px;height:110px;display:block;margin:6px auto 12px}[id^=NotiflixReportWrap]>div[class*="-content"]>div[class$="-icon"] svg{min-width:100%;max-width:100%;height:auto}[id^=NotiflixReportWrap]>*>h5{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:16px;font-weight:500;line-height:1.4;margin:0 0 10px;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);float:left;width:100%;text-align:center}[id^=NotiflixReportWrap]>*>p{word-break:break-all;word-break:break-word;font-family:inherit!important;font-size:13px;line-height:1.4;font-weight:normal;float:left;width:100%;padding:0 10px;margin:0 0 10px}[id^=NotiflixReportWrap] a#NXReportButton{word-break:break-all;word-break:break-word;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;cursor:pointer;float:right;padding:7px 17px;background:#32c682;font-size:14px;line-height:1.4;font-weight:500;border-radius:inherit!important;color:#fff}[id^=NotiflixReportWrap] a#NXReportButton:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixReportWrap].nx-rtl-on a#NXReportButton{float:left}[id^=NotiflixReportWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:report-overlay-animation .3s ease-in-out 0s normal;animation:report-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes report-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-fade{-webkit-animation:report-animation-fade .3s ease-in-out 0s normal;animation:report-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes report-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixReportWrap]>div[class*="-content"].nx-with-animation.nx-zoom{-webkit-animation:report-animation-zoom .3s ease-in-out 0s normal;animation:report-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes report-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixReportWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:report-overlay-animation-remove .3s ease-in-out 0s normal;animation:report-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-fade{opacity:0;-webkit-animation:report-animation-fade-remove .3s ease-in-out 0s normal;animation:report-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes report-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixReportWrap].nx-remove>div[class*="-content"].nx-with-animation.nx-zoom{opacity:0;-webkit-animation:report-animation-zoom-remove .3s ease-in-out 0s normal;animation:report-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes report-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ee=function(t,n,a,r,s,l){if(!U("body"))return!1;i||le.Report.init({});var c={};if("object"==typeof s&&!Array.isArray(s)||"object"==typeof l&&!Array.isArray(l)){var d={};"object"==typeof s?d=s:"object"==typeof l&&(d=l),c=F(!0,i,{}),i=F(!0,i,d)}var u=i[t.toLocaleLowerCase("en")];"string"!=typeof n&&(n="Notiflix "+t),"string"!=typeof a&&(t===h?a='"Do not try to become a person of success but try to become a person of value." <br><br>- Albert Einstein':t===f?a='"Failure is simply the opportunity to begin again, this time more intelligently." <br><br>- Henry Ford':t===m?a='"The peoples who want to live comfortably without producing and fatigue; they are doomed to lose their dignity, then liberty, and then independence and destiny." <br><br>- Mustafa Kemal Ataturk':t===g&&(a='"Knowledge rests not upon truth alone, but upon error also." <br><br>- Carl Gustav Jung')),"string"!=typeof r&&(r="Okay"),i.plainText&&(n=H(n),a=H(a),r=H(r)),i.plainText||(n.length>i.titleMaxLength&&(n="Possible HTML Tags Error",a='The "plainText" option is "false" and the title content length is more than the "titleMaxLength" option.',r="Okay"),a.length>i.messageMaxLength&&(n="Possible HTML Tags Error",a='The "plainText" option is "false" and the message content length is more than the "messageMaxLength" option.',r="Okay"),r.length>i.buttonMaxLength&&(n="Possible HTML Tags Error",a='The "plainText" option is "false" and the button content length is more than the "buttonMaxLength" option.',r="Okay")),n.length>i.titleMaxLength&&(n=n.substring(0,i.titleMaxLength)+"..."),a.length>i.messageMaxLength&&(a=a.substring(0,i.messageMaxLength)+"..."),r.length>i.buttonMaxLength&&(r=r.substring(0,i.buttonMaxLength)+"..."),i.cssAnimation||(i.cssAnimationDuration=0);var p=e.document.createElement("div");p.id=v.ID,p.className=i.className,p.style.zIndex=i.zindex,p.style.borderRadius=i.borderRadius,p.style.fontFamily='"'+i.fontFamily+'", '+o,i.rtl&&(p.setAttribute("dir","rtl"),p.classList.add("nx-rtl-on")),p.style.display="flex",p.style.flexWrap="wrap",p.style.flexDirection="column",p.style.alignItems="center",p.style.justifyContent="center";var b="",y=!0===i.backOverlayClickToClose;i.backOverlay&&(b='<div class="'+i.className+"-overlay"+(i.cssAnimation?" nx-with-animation":"")+(y?" nx-report-click-to-close":"")+'" style="background:'+(u.backOverlayColor||i.backOverlayColor)+";animation-duration:"+i.cssAnimationDuration+'ms;"></div>');var x,w,k="";if(t===h?(x=i.svgSize,w=u.svgColor,x||(x="110px"),w||(w="#32c682"),k='<svg xmlns="http://www.w3.org/2000/svg" id="NXReportSuccess" width="'+x+'" height="'+x+'" fill="'+w+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@keyframes NXReportSuccess1-animation{0%{-webkit-transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.5,.5) translate(-60px,-57.7px)}50%,to{-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px)}60%{-webkit-transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px);transform:translate(60px,57.7px) scale(.95,.95) translate(-60px,-57.7px)}}@-webkit-keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportSuccess4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportSuccess3-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportSuccess2-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportSuccess *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportSuccess2-animation;animation-name:NXReportSuccess2-animation;-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportSuccess3-animation;animation-name:NXReportSuccess3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportSuccess1-animation;animation-name:NXReportSuccess1-animation;-webkit-transform:translate(60px,57.7px) scale(1,1) translate(-60px,-57.7px);-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)"><path d="M88.27 35.39L52.8 75.29 31.43 58.2c-.98-.81-2.44-.63-3.24.36-.79.99-.63 2.44.36 3.24l23.08 18.46c.43.34.93.51 1.44.51.64 0 1.27-.26 1.74-.78l36.91-41.53a2.3 2.3 0 0 0-.19-3.26c-.95-.86-2.41-.77-3.26.19z" style="-webkit-animation-name:NXReportSuccess4-animation;animation-name:NXReportSuccess4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'):t===f?k=function(e,t){return e||(e="110px"),t||(t="#ff5549"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportFailure" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportFailure2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportFailure3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportFailure4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportFailure *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportFailure1-animation;animation-name:NXReportFailure1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M4.35 34.95c0-16.82 13.78-30.6 30.6-30.6h50.1c16.82 0 30.6 13.78 30.6 30.6v50.1c0 16.82-13.78 30.6-30.6 30.6h-50.1c-16.82 0-30.6-13.78-30.6-30.6v-50.1zM34.95 120h50.1c19.22 0 34.95-15.73 34.95-34.95v-50.1C120 15.73 104.27 0 85.05 0h-50.1C15.73 0 0 15.73 0 34.95v50.1C0 104.27 15.73 120 34.95 120z" style="-webkit-animation-name:NXReportFailure2-animation;animation-name:NXReportFailure2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportFailure3-animation;animation-name:NXReportFailure3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M82.4 37.6c-.9-.9-2.37-.9-3.27 0L60 56.73 40.86 37.6a2.306 2.306 0 0 0-3.26 3.26L56.73 60 37.6 79.13c-.9.9-.9 2.37 0 3.27.45.45 1.04.68 1.63.68.59 0 1.18-.23 1.63-.68L60 63.26 79.13 82.4c.45.45 1.05.68 1.64.68.58 0 1.18-.23 1.63-.68.9-.9.9-2.37 0-3.27L63.26 60 82.4 40.86c.9-.91.9-2.36 0-3.26z" style="-webkit-animation-name:NXReportFailure4-animation;animation-name:NXReportFailure4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor):t===m?k=function(e,t){return e||(e="110px"),t||(t="#eebf31"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportWarning" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportWarning2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportWarning1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@keyframes NXReportWarning3-animation{0%{-webkit-transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.5,.5) translate(-60px,-66.6px)}50%,to{-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)}60%{-webkit-transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px);transform:translate(60px,66.6px) scale(.95,.95) translate(-60px,-66.6px)}}@-webkit-keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportWarning4-animation{0%{opacity:0}50%,to{opacity:1}}#NXReportWarning *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportWarning1-animation;animation-name:NXReportWarning1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M115.46 106.15l-54.04-93.8c-.61-1.06-2.23-1.06-2.84 0l-54.04 93.8c-.62 1.07.21 2.29 1.42 2.29h108.08c1.21 0 2.04-1.22 1.42-2.29zM65.17 10.2l54.04 93.8c2.28 3.96-.65 8.78-5.17 8.78H5.96c-4.52 0-7.45-4.82-5.17-8.78l54.04-93.8c2.28-3.95 8.03-4 10.34 0z" style="-webkit-animation-name:NXReportWarning2-animation;animation-name:NXReportWarning2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportWarning3-animation;animation-name:NXReportWarning3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,66.6px) scale(1,1) translate(-60px,-66.6px)"><path d="M57.83 94.01c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17v-3.2c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v3.2zm0-14.15c0 1.2.97 2.17 2.17 2.17s2.17-.97 2.17-2.17V39.21c0-1.2-.97-2.17-2.17-2.17s-2.17.97-2.17 2.17v40.65z" style="-webkit-animation-name:NXReportWarning4-animation;animation-name:NXReportWarning4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor):t===g&&(k=function(e,t){return e||(e="110px"),t||(t="#26c0d3"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXReportInfo" width="'+e+'" height="'+e+'" fill="'+t+'" viewBox="0 0 120 120"><style>@-webkit-keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@keyframes NXReportInfo4-animation{0%{opacity:0}50%,to{opacity:1}}@-webkit-keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo3-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}50%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@-webkit-keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@keyframes NXReportInfo2-animation{0%{opacity:0}40%,to{opacity:1}}@-webkit-keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}@keyframes NXReportInfo1-animation{0%{-webkit-transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px);transform:translate(60px,60px) scale(.5,.5) translate(-60px,-60px)}40%,to{-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px);transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)}60%{-webkit-transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px);transform:translate(60px,60px) scale(.95,.95) translate(-60px,-60px)}}#NXReportInfo *{-webkit-animation-duration:1.2s;animation-duration:1.2s;-webkit-animation-timing-function:cubic-bezier(0,0,1,1);animation-timing-function:cubic-bezier(0,0,1,1)}</style><g style="-webkit-animation-name:NXReportInfo1-animation;animation-name:NXReportInfo1-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M60 115.38C29.46 115.38 4.62 90.54 4.62 60 4.62 29.46 29.46 4.62 60 4.62c30.54 0 55.38 24.84 55.38 55.38 0 30.54-24.84 55.38-55.38 55.38zM60 0C26.92 0 0 26.92 0 60s26.92 60 60 60 60-26.92 60-60S93.08 0 60 0z" style="-webkit-animation-name:NXReportInfo2-animation;animation-name:NXReportInfo2-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g><g style="-webkit-animation-name:NXReportInfo3-animation;animation-name:NXReportInfo3-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1);-webkit-transform:translate(60px,60px) scale(1,1) translate(-60px,-60px)"><path d="M57.75 43.85c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v48.18c0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25V43.85zm0-15.88c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v3.32c0 1.25-1.01 2.25-2.25 2.25s-2.25-1-2.25-2.25v-3.32z" style="-webkit-animation-name:NXReportInfo4-animation;animation-name:NXReportInfo4-animation;-webkit-animation-timing-function:cubic-bezier(.42,0,.58,1);animation-timing-function:cubic-bezier(.42,0,.58,1)" fill="inherit" data-animator-group="true" data-animator-type="2"/></g></svg>'}(i.svgSize,u.svgColor)),p.innerHTML=b+'<div class="'+i.className+"-content"+(i.cssAnimation?" nx-with-animation ":"")+" nx-"+i.cssAnimationStyle+'" style="width:'+i.width+"; background:"+i.backgroundColor+"; animation-duration:"+i.cssAnimationDuration+'ms;"><div style="width:'+i.svgSize+"; height:"+i.svgSize+';" class="'+i.className+'-icon">'+k+'</div><h5 class="'+i.className+'-title" style="font-weight:500; font-size:'+i.titleFontSize+"; color:"+u.titleColor+';">'+n+'</h5><p class="'+i.className+'-message" style="font-size:'+i.messageFontSize+"; color:"+u.messageColor+';">'+a+'</p><a id="NXReportButton" class="'+i.className+'-button" style="font-weight:500; font-size:'+i.buttonFontSize+"; background:"+u.buttonBackground+"; color:"+u.buttonColor+';">'+r+"</a></div>",!e.document.getElementById(p.id)){e.document.body.appendChild(p);var E=function(){var t=e.document.getElementById(p.id);t.classList.add("nx-remove");var n=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t),clearTimeout(n)}),i.cssAnimationDuration)};e.document.getElementById("NXReportButton").addEventListener("click",(function(){"function"==typeof s&&s(),E()})),b&&y&&e.document.querySelector(".nx-report-click-to-close").addEventListener("click",(function(){E()}))}i=F(!0,i,c)},te=function(){return'[id^=NotiflixConfirmWrap]{position:fixed;z-index:4003;width:100%;height:100%;left:0;top:0;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixConfirmWrap].nx-position-center-top{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-center-bottom{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-left-top{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-center{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}[id^=NotiflixConfirmWrap].nx-position-left-bottom{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-top{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}[id^=NotiflixConfirmWrap].nx-position-right-center{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}[id^=NotiflixConfirmWrap].nx-position-right-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}[id^=NotiflixConfirmWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixConfirmWrap]>div[class*="-overlay"]{width:100%;height:100%;left:0;top:0;background:rgba(255,255,255,.5);position:fixed;z-index:0}[id^=NotiflixConfirmWrap]>div[class*="-overlay"].nx-with-animation{-webkit-animation:confirm-overlay-animation .3s ease-in-out 0s normal;animation:confirm-overlay-animation .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}@keyframes confirm-overlay-animation{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-remove>div[class*="-overlay"].nx-with-animation{opacity:0;-webkit-animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal;animation:confirm-overlay-animation-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-overlay-animation-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap]>div[class*="-content"]{width:300px;max-width:100%;max-height:96vh;overflow-x:hidden;overflow-y:auto;border-radius:25px;padding:10px;margin:0;-webkit-filter:drop-shadow(0 0 5px rgba(0,0,0,0.05));filter:drop-shadow(0 0 5px rgba(0, 0, 0, .05));background:#f8f8f8;color:#1e1e1e;position:relative;z-index:1;text-align:center}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]{float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>h5{float:left;width:100%;margin:0;padding:0 0 10px;border-bottom:1px solid rgba(0,0,0,.1);color:#32c682;font-family:inherit!important;font-size:16px;line-height:1.4;font-weight:500;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div{font-family:inherit!important;margin:15px 0 20px;padding:0 10px;float:left;width:100%;font-size:14px;line-height:1.4;font-weight:normal;color:inherit;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div{font-family:inherit!important;float:left;width:100%;margin:15px 0 0;padding:0}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input{font-family:inherit!important;float:left;width:100%;height:40px;margin:0;padding:0 15px;border:1px solid rgba(0,0,0,.1);border-radius:25px;font-size:14px;font-weight:normal;line-height:1;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;text-align:left}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-head"]>div>div>input{text-align:right}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:hover{border-color:rgba(0,0,0,.1)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input:focus{border-color:rgba(0,0,0,.3)}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-failure{border-color:#ff5549}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-head"]>div>div>input.nx-validation-success{border-color:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border-radius:inherit;float:left;width:100%;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a{cursor:pointer;font-family:inherit!important;-webkit-transition:all .25s ease-in-out;-o-transition:all .25s ease-in-out;transition:all .25s ease-in-out;float:left;width:48%;padding:9px 5px;border-radius:inherit!important;font-weight:500;font-size:15px;line-height:1.4;color:#f8f8f8;text-align:inherit}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-ok{margin:0 2% 0 0;background:#32c682}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-confirm-button-cancel{margin:0 0 0 2%;background:#a9a9a9}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a.nx-full{margin:0;width:100%}[id^=NotiflixConfirmWrap]>div[class*="-content"]>div[class*="-buttons"]>a:hover{-webkit-box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25);box-shadow:inset 0 -60px 5px -5px rgba(0,0,0,.25)}[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"],[id^=NotiflixConfirmWrap].nx-rtl-on>div[class*="-content"]>div[class*="-buttons"]>a{-webkit-transform:rotateY(180deg);transform:rotateY(180deg)}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade>div[class*="-content"]{-webkit-animation:confirm-animation-fade .3s ease-in-out 0s normal;animation:confirm-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes confirm-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom>div[class*="-content"]{-webkit-animation:confirm-animation-zoom .3s ease-in-out 0s normal;animation:confirm-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes confirm-animation-zoom{0%{opacity:0;-webkit-transform:scale(.5);transform:scale(.5)}50%{opacity:1;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-fade.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-fade-remove .3s ease-in-out 0s normal;animation:confirm-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes confirm-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixConfirmWrap].nx-with-animation.nx-zoom.nx-remove>div[class*="-content"]{opacity:0;-webkit-animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal;animation:confirm-animation-zoom-remove .3s ease-in-out 0s normal}@-webkit-keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}@keyframes confirm-animation-zoom-remove{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}50%{opacity:.5;-webkit-transform:scale(1.05);transform:scale(1.05)}100%{opacity:0;-webkit-transform:scale(0);transform:scale(0)}}'},ie=function(t,i,a,r,s,l,c,d,u){if(!U("body"))return!1;n||le.Confirm.init({});var p=F(!0,n,{});"object"!=typeof u||Array.isArray(u)||(n=F(!0,n,u)),"string"!=typeof i&&(i="Notiflix Confirm"),"string"!=typeof a&&(a="Do you agree with me?"),"string"!=typeof s&&(s="Yes"),"string"!=typeof l&&(l="No"),"function"!=typeof c&&(c=void 0),"function"!=typeof d&&(d=void 0),n.plainText&&(i=H(i),a=H(a),s=H(s),l=H(l)),n.plainText||(i.length>n.titleMaxLength&&(i="Possible HTML Tags Error",a='The "plainText" option is "false" and the title content length is more than "titleMaxLength" option.',s="Okay",l="..."),a.length>n.messageMaxLength&&(i="Possible HTML Tags Error",a='The "plainText" option is "false" and the message content length is more than "messageMaxLength" option.',s="Okay",l="..."),(s.length||l.length)>n.buttonsMaxLength&&(i="Possible HTML Tags Error",a='The "plainText" option is "false" and the buttons content length is more than "buttonsMaxLength" option.',s="Okay",l="...")),i.length>n.titleMaxLength&&(i=i.substring(0,n.titleMaxLength)+"..."),a.length>n.messageMaxLength&&(a=a.substring(0,n.messageMaxLength)+"..."),s.length>n.buttonsMaxLength&&(s=s.substring(0,n.buttonsMaxLength)+"..."),l.length>n.buttonsMaxLength&&(l=l.substring(0,n.buttonsMaxLength)+"..."),n.cssAnimation||(n.cssAnimationDuration=0);var h=e.document.createElement("div");h.id=w.ID,h.className=n.className+(n.cssAnimation?" nx-with-animation nx-"+n.cssAnimationStyle:""),h.style.zIndex=n.zindex,h.style.padding=n.distance,n.rtl&&(h.setAttribute("dir","rtl"),h.classList.add("nx-rtl-on"));var f="string"==typeof n.position?n.position.trim():"center";h.classList.add("nx-position-"+f),h.style.fontFamily='"'+n.fontFamily+'", '+o;var m="";n.backOverlay&&(m='<div class="'+n.className+"-overlay"+(n.cssAnimation?" nx-with-animation":"")+'" style="background:'+n.backOverlayColor+";animation-duration:"+n.cssAnimationDuration+'ms;"></div>');var g="";"function"==typeof c&&(g='<a id="NXConfirmButtonCancel" class="nx-confirm-button-cancel" style="color:'+n.cancelButtonColor+";background:"+n.cancelButtonBackground+";font-size:"+n.buttonsFontSize+';">'+l+"</a>");var v="",b=null,k=void 0;if(t===y||t===x){b=r||"";var E=t===y||200<b.length?Math.ceil(1.5*b.length):250;v='<div><input id="NXConfirmValidationInput" type="text" '+(t===x?'value="'+b+'"':"")+' maxlength="'+E+'" style="font-size:'+n.messageFontSize+";border-radius: "+n.borderRadius+';" autocomplete="off" spellcheck="false" autocapitalize="none" /></div>'}if(h.innerHTML=m+'<div class="'+n.className+'-content" style="width:'+n.width+"; background:"+n.backgroundColor+"; animation-duration:"+n.cssAnimationDuration+"ms; border-radius: "+n.borderRadius+';"><div class="'+n.className+'-head"><h5 style="color:'+n.titleColor+";font-size:"+n.titleFontSize+';">'+i+'</h5><div style="color:'+n.messageColor+";font-size:"+n.messageFontSize+';">'+a+v+'</div></div><div class="'+n.className+'-buttons"><a id="NXConfirmButtonOk" class="nx-confirm-button-ok'+("function"==typeof c?"":" nx-full")+'" style="color:'+n.okButtonColor+";background:"+n.okButtonBackground+";font-size:"+n.buttonsFontSize+';">'+s+"</a>"+g+"</div></div>",!e.document.getElementById(h.id)){e.document.body.appendChild(h);var I=e.document.getElementById(h.id),T=e.document.getElementById("NXConfirmButtonOk"),C=e.document.getElementById("NXConfirmValidationInput");C&&(C.focus(),C.setSelectionRange(0,(C.value||"").length),C.addEventListener("keyup",(function(e){var i=e.target.value;t===y&&i!==b?(e.preventDefault(),C.classList.add("nx-validation-failure"),C.classList.remove("nx-validation-success")):(t===y&&(C.classList.remove("nx-validation-failure"),C.classList.add("nx-validation-success")),("enter"===(e.key||"").toLocaleLowerCase("en")||13===e.keyCode)&&T.dispatchEvent(new Event("click")))}))),T.addEventListener("click",(function(e){if(t===y&&b&&C){if((C.value||"").toString()!==b)return C.focus(),C.classList.add("nx-validation-failure"),e.stopPropagation(),e.preventDefault(),e.returnValue=!1,e.cancelBubble=!0,!1;C.classList.remove("nx-validation-failure")}"function"==typeof c&&(t===x&&C&&(k=C.value||""),c(k)),I.classList.add("nx-remove");var i=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(i))}),n.cssAnimationDuration)})),"function"==typeof c&&e.document.getElementById("NXConfirmButtonCancel").addEventListener("click",(function(){"function"==typeof d&&(t===x&&C&&(k=C.value||""),d(k)),I.classList.add("nx-remove");var e=setTimeout((function(){null!==I.parentNode&&(I.parentNode.removeChild(I),clearTimeout(e))}),n.cssAnimationDuration)}))}n=F(!0,n,p)},ne=function(){return'[id^=NotiflixLoadingWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:fixed;z-index:4000;width:100%;height:100%;left:0;top:0;right:0;bottom:0;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;background:rgba(0,0,0,.8);font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}[id^=NotiflixLoadingWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixLoadingWrap].nx-loading-click-to-close{cursor:pointer}[id^=NotiflixLoadingWrap]>div[class*="-icon"]{width:60px;height:60px;position:relative;-webkit-transition:top .2s ease-in-out;-o-transition:top .2s ease-in-out;transition:top .2s ease-in-out;margin:0 auto}[id^=NotiflixLoadingWrap]>div[class*="-icon"] img,[id^=NotiflixLoadingWrap]>div[class*="-icon"] svg{max-width:unset;max-height:unset;width:100%;height:auto;position:absolute;left:0;top:0}[id^=NotiflixLoadingWrap]>p{position:relative;margin:10px auto 0;font-family:inherit!important;font-weight:normal;font-size:15px;line-height:1.4;padding:0 10px;width:100%;text-align:center}[id^=NotiflixLoadingWrap].nx-with-animation{-webkit-animation:loading-animation-fade .3s ease-in-out 0s normal;animation:loading-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixLoadingWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:loading-animation-fade-remove .3s ease-in-out 0s normal;animation:loading-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes loading-animation-fade-remove{0%{opacity:1}100%{opacity:0}}[id^=NotiflixLoadingWrap]>p.nx-loading-message-new{-webkit-animation:loading-new-message-fade .3s ease-in-out 0s normal;animation:loading-new-message-fade .3s ease-in-out 0s normal}@-webkit-keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}@keyframes loading-new-message-fade{0%{opacity:0}100%{opacity:1}}'},ae=function(t,i,n,r,s){if(!U("body"))return!1;a||le.Loading.init({});var l=F(!0,a,{});if("object"==typeof i&&!Array.isArray(i)||"object"==typeof n&&!Array.isArray(n)){var c={};"object"==typeof i?c=i:"object"==typeof n&&(c=n),a=F(!0,a,c)}var d="";if("string"==typeof i&&0<i.length&&(d=i),r){var u="";0<(d=d.length>a.messageMaxLength?H(d).toString().substring(0,a.messageMaxLength)+"...":H(d).toString()).length&&(u='<p id="'+a.messageID+'" class="nx-loading-message" style="color:'+a.messageColor+";font-size:"+a.messageFontSize+';">'+d+"</p>"),a.cssAnimation||(a.cssAnimationDuration=0);var p="";if(t===k)p=j(a.svgSize,a.svgColor);else if(t===E)p=V(a.svgSize,a.svgColor);else if(t===I)p=G(a.svgSize,a.svgColor);else if(t===T)p=X(a.svgSize,a.svgColor);else if(t===C)p=q(a.svgSize,a.svgColor);else if(t===S)p=K(a.svgSize,a.svgColor);else if(t===_&&null!==a.customSvgCode&&null===a.customSvgUrl)p=a.customSvgCode||"";else if(t===_&&null!==a.customSvgUrl&&null===a.customSvgCode)p='<img class="nx-custom-loading-icon" width="'+a.svgSize+'" height="'+a.svgSize+'" src="'+a.customSvgUrl+'" alt="Notiflix">';else{if(t===_&&(null===a.customSvgUrl||null===a.customSvgCode))return B('You have to set a static SVG url to "customSvgUrl" option to use Loading Custom.'),!1;p=function(e,t,i){return e||(e="60px"),t||(t="#f8f8f8"),i||(i="#32c682"),'<svg xmlns="http://www.w3.org/2000/svg" id="NXLoadingNotiflixLib" width="'+e+'" height="'+e+'" viewBox="0 0 200 200"><defs><style>@keyframes notiflix-n{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-x{0%{stroke-dashoffset:1000}to{stroke-dashoffset:0}}@keyframes notiflix-dot{0%,to{stroke-width:0}50%{stroke-width:12}}.nx-icon-line{stroke:'+t+';stroke-width:12;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:22;fill:none}</style></defs><path d="M47.97 135.05a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13z" style="animation-name:notiflix-dot;animation-timing-function:ease-in-out;animation-duration:1.25s;animation-iteration-count:infinite;animation-direction:normal" fill="'+i+'" stroke="'+i+'" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="22" stroke-width="12"/><path class="nx-icon-line" d="M10.14 144.76V87.55c0-5.68-4.54-41.36 37.83-41.36 42.36 0 37.82 35.68 37.82 41.36v57.21" style="animation-name:notiflix-n;animation-timing-function:linear;animation-duration:2.5s;animation-delay:0s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/><path class="nx-icon-line" d="M115.06 144.49c24.98-32.68 49.96-65.35 74.94-98.03M114.89 46.6c25.09 32.58 50.19 65.17 75.29 97.75" style="animation-name:notiflix-x;animation-timing-function:linear;animation-duration:2.5s;animation-delay:.2s;animation-iteration-count:infinite;animation-direction:normal" stroke-dasharray="500"/></svg>'}(a.svgSize,"#f8f8f8","#32c682")}var h=parseInt((a.svgSize||"").replace(/[^0-9]/g,"")),f=e.innerWidth,m=h>=f?f-40+"px":h+"px",g='<div style="width:'+m+"; height:"+m+';" class="'+a.className+"-icon"+(0<d.length?" nx-with-message":"")+'">'+p+"</div>",v=e.document.createElement("div");v.id=L.ID,v.className=a.className+(a.cssAnimation?" nx-with-animation":"")+(a.clickToClose?" nx-loading-click-to-close":""),v.style.zIndex=a.zindex,v.style.background=a.backgroundColor,v.style.animationDuration=a.cssAnimationDuration+"ms",v.style.fontFamily='"'+a.fontFamily+'", '+o,v.style.display="flex",v.style.flexWrap="wrap",v.style.flexDirection="column",v.style.alignItems="center",v.style.justifyContent="center",a.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.innerHTML=g+u,!e.document.getElementById(v.id)&&(e.document.body.appendChild(v),a.clickToClose)&&e.document.getElementById(v.id).addEventListener("click",(function(){v.classList.add("nx-remove");var e=setTimeout((function(){null!==v.parentNode&&(v.parentNode.removeChild(v),clearTimeout(e))}),a.cssAnimationDuration)}))}else if(e.document.getElementById(L.ID))var b=e.document.getElementById(L.ID),y=setTimeout((function(){b.classList.add("nx-remove");var e=setTimeout((function(){null!==b.parentNode&&(b.parentNode.removeChild(b),clearTimeout(e))}),a.cssAnimationDuration);clearTimeout(y)}),s);a=F(!0,a,l)},re=function(){return'[id^=NotiflixBlockWrap]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1000;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;background:rgba(255,255,255,.9);text-align:center;animation-duration:.4s;width:100%;height:100%;left:0;top:0;border-radius:inherit;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}[id^=NotiflixBlockWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixBlockWrap]>span[class*="-icon"]{display:block;width:45px;height:45px;position:relative;margin:0 auto}[id^=NotiflixBlockWrap]>span[class*="-icon"] svg{width:inherit;height:inherit}[id^=NotiflixBlockWrap]>span[class*="-message"]{position:relative;display:block;width:100%;margin:10px auto 0;padding:0 10px;font-family:inherit!important;font-weight:normal;font-size:14px;line-height:1.4}[id^=NotiflixBlockWrap].nx-with-animation{-webkit-animation:block-animation-fade .3s ease-in-out 0s normal;animation:block-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes block-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixBlockWrap].nx-with-animation.nx-remove{opacity:0;-webkit-animation:block-animation-fade-remove .3s ease-in-out 0s normal;animation:block-animation-fade-remove .3s ease-in-out 0s normal}@-webkit-keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}@keyframes block-animation-fade-remove{0%{opacity:1}100%{opacity:0}}'},se=0,oe=function(t,i,n,a,s,l){var c;if(Array.isArray(n)){if(1>n.length)return B("Array of HTMLElements should contains at least one HTMLElement."),!1;c=n}else if(Object.prototype.isPrototypeOf.call(NodeList.prototype,n)){if(1>n.length)return B("NodeListOf<HTMLElement> should contains at least one HTMLElement."),!1;c=Array.prototype.slice.call(n)}else{if("string"!=typeof n||1>(n||"").length||1===(n||"").length&&("#"===(n||"")[0]||"."===(n||"")[0]))return B("The selector parameter must be a string and matches a specified CSS selector(s)."),!1;var d=e.document.querySelectorAll(n);if(1>d.length)return B('You called the "Notiflix.Block..." function with "'+n+'" selector, but there is no such element(s) in the document.'),!1;c=d}r||le.Block.init({});var u=F(!0,r,{});if("object"==typeof a&&!Array.isArray(a)||"object"==typeof s&&!Array.isArray(s)){var p={};"object"==typeof a?p=a:"object"==typeof s&&(p=s),r=F(!0,r,p)}var h="";"string"==typeof a&&0<a.length&&(h=a),r.cssAnimation||(r.cssAnimationDuration=0);var f=z.className;"string"==typeof r.className&&(f=r.className.trim());var m="number"==typeof r.querySelectorLimit?r.querySelectorLimit:200,g=(c||[]).length>=m?m:c.length,v="nx-block-temporary-position";if(t){for(var b,y=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr","html","head","title","script","style","iframe"],x=0;x<g;x++)if(b=c[x]){if(-1<y.indexOf(b.tagName.toLocaleLowerCase("en")))break;var w=b.querySelectorAll("[id^="+z.ID+"]");if(1>w.length){var k="";i&&(k=i===O?V(r.svgSize,r.svgColor):i===M?G(r.svgSize,r.svgColor):i===R?X(r.svgSize,r.svgColor):i===D?q(r.svgSize,r.svgColor):i===P?K(r.svgSize,r.svgColor):j(r.svgSize,r.svgColor));var E='<span class="'+f+'-icon" style="width:'+r.svgSize+";height:"+r.svgSize+';">'+k+"</span>",I="";0<h.length&&(h=h.length>r.messageMaxLength?H(h).substring(0,r.messageMaxLength)+"...":H(h),I='<span style="font-size:'+r.messageFontSize+";color:"+r.messageColor+';" class="'+f+'-message">'+h+"</span>"),se++;var T=e.document.createElement("div");T.id=z.ID+"-"+se,T.className=f+(r.cssAnimation?" nx-with-animation":""),T.style.position=r.position,T.style.zIndex=r.zindex,T.style.background=r.backgroundColor,T.style.animationDuration=r.cssAnimationDuration+"ms",T.style.fontFamily='"'+r.fontFamily+'", '+o,T.style.display="flex",T.style.flexWrap="wrap",T.style.flexDirection="column",T.style.alignItems="center",T.style.justifyContent="center",r.rtl&&(T.setAttribute("dir","rtl"),T.classList.add("nx-rtl-on")),T.innerHTML=E+I;var C,S=e.getComputedStyle(b).getPropertyValue("position"),_="string"==typeof S?S.toLocaleLowerCase("en"):"relative",N=Math.round(1.25*parseInt(r.svgSize))+40,L="";N>(b.offsetHeight||0)&&(L="min-height:"+N+"px;"),C=b.getAttribute("id")?"#"+b.getAttribute("id"):b.classList[0]?"."+b.classList[0]:(b.tagName||"").toLocaleLowerCase("en");var A="",$=-1>=["absolute","relative","fixed","sticky"].indexOf(_);if($||0<L.length){if(!U("head"))return!1;$&&(A="position:relative!important;");var Y='<style id="Style-'+z.ID+"-"+se+'">'+C+"."+v+"{"+A+L+"}</style>",J=e.document.createRange();J.selectNode(e.document.head);var Q=J.createContextualFragment(Y);e.document.head.appendChild(Q),b.classList.add(v)}b.appendChild(T)}}}else var Z=function(t){var i=setTimeout((function(){null!==t.parentNode&&t.parentNode.removeChild(t);var n=t.getAttribute("id"),a=e.document.getElementById("Style-"+n);a&&null!==a.parentNode&&a.parentNode.removeChild(a),clearTimeout(i)}),r.cssAnimationDuration)},ee=function(e){if(e&&0<e.length)for(var t,i=0;i<e.length;i++)(t=e[i])&&(t.classList.add("nx-remove"),Z(t));else W("string"==typeof n?'"Notiflix.Block.remove();" function called with "'+n+'" selector, but this selector does not have a "Block" element to remove.':'"Notiflix.Block.remove();" function called with "'+n+'", but this "Array<HTMLElement>" or "NodeListOf<HTMLElement>" does not have a "Block" element to remove.')},te=function(e){var t=setTimeout((function(){e.classList.remove(v),clearTimeout(t)}),r.cssAnimationDuration+300)},ie=setTimeout((function(){for(var e,t=0;t<g;t++)(e=c[t])&&(te(e),w=e.querySelectorAll("[id^="+z.ID+"]"),ee(w));clearTimeout(ie)}),l);r=F(!0,r,u)},le={Notify:{init:function(e){t=F(!0,p,e),$(Y,"NotiflixNotifyInternalCSS")},merge:function(e){return t?void(t=F(!0,t,e)):(B("You have to initialize the Notify module before call Merge function."),!1)},success:function(e,t,i){Q(l,e,t,i)},failure:function(e,t,i){Q(c,e,t,i)},warning:function(e,t,i){Q(d,e,t,i)},info:function(e,t,i){Q(u,e,t,i)}},Report:{init:function(e){i=F(!0,v,e),$(Z,"NotiflixReportInternalCSS")},merge:function(e){return i?void(i=F(!0,i,e)):(B("You have to initialize the Report module before call Merge function."),!1)},success:function(e,t,i,n,a){ee(h,e,t,i,n,a)},failure:function(e,t,i,n,a){ee(f,e,t,i,n,a)},warning:function(e,t,i,n,a){ee(m,e,t,i,n,a)},info:function(e,t,i,n,a){ee(g,e,t,i,n,a)}},Confirm:{init:function(e){n=F(!0,w,e),$(te,"NotiflixConfirmInternalCSS")},merge:function(e){return n?void(n=F(!0,n,e)):(B("You have to initialize the Confirm module before call Merge function."),!1)},show:function(e,t,i,n,a,r,s){ie(b,e,t,null,i,n,a,r,s)},ask:function(e,t,i,n,a,r,s,o){ie(y,e,t,i,n,a,r,s,o)},prompt:function(e,t,i,n,a,r,s,o){ie(x,e,t,i,n,a,r,s,o)}},Loading:{init:function(e){a=F(!0,L,e),$(ne,"NotiflixLoadingInternalCSS")},merge:function(e){return a?void(a=F(!0,a,e)):(B("You have to initialize the Loading module before call Merge function."),!1)},standard:function(e,t){ae(k,e,t,!0,0)},hourglass:function(e,t){ae(E,e,t,!0,0)},circle:function(e,t){ae(I,e,t,!0,0)},arrows:function(e,t){ae(T,e,t,!0,0)},dots:function(e,t){ae(C,e,t,!0,0)},pulse:function(e,t){ae(S,e,t,!0,0)},custom:function(e,t){ae(_,e,t,!0,0)},notiflix:function(e,t){ae(N,e,t,!0,0)},remove:function(e){"number"!=typeof e&&(e=0),ae(null,null,null,!1,e)},change:function(t){!function(t){"string"!=typeof t&&(t="");var i=e.document.getElementById(L.ID);if(i)if(0<t.length){t=t.length>a.messageMaxLength?H(t).substring(0,a.messageMaxLength)+"...":H(t);var n=i.getElementsByTagName("p")[0];if(n)n.innerHTML=t;else{var r=e.document.createElement("p");r.id=a.messageID,r.className="nx-loading-message nx-loading-message-new",r.style.color=a.messageColor,r.style.fontSize=a.messageFontSize,r.innerHTML=t,i.appendChild(r)}}else B("Where is the new message?")}(t)}},Block:{init:function(e){r=F(!0,z,e),$(re,"NotiflixBlockInternalCSS")},merge:function(e){return r?void(r=F(!0,r,e)):(B('You have to initialize the "Notiflix.Block" module before call Merge function.'),!1)},standard:function(e,t,i){oe(!0,A,e,t,i)},hourglass:function(e,t,i){oe(!0,O,e,t,i)},circle:function(e,t,i){oe(!0,M,e,t,i)},arrows:function(e,t,i){oe(!0,R,e,t,i)},dots:function(e,t,i){oe(!0,D,e,t,i)},pulse:function(e,t,i){oe(!0,P,e,t,i)},remove:function(e,t){"number"!=typeof t&&(t=0),oe(!1,null,e,null,null,t)}}};return"object"==typeof e.Notiflix?F(!0,e.Notiflix,{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}):{Notify:le.Notify,Report:le.Report,Confirm:le.Confirm,Loading:le.Loading,Block:le.Block}},"function"==typeof define&&define.amd?define([],(function(){return s(r)})):"object"==typeof d?d=s(r):r.Notiflix=s(r);const{moviesOnInputList:u,inputEl:p}=c.refs;p.addEventListener("submit",(async function(t){t.preventDefault();const i=t.currentTarget.elements.searchQuery.value;if(" "===i||""===i)return void e(d).Notify.failure("Please type search and try again.");const n=await(0,o.getMoviesSearch)(i);if(u.innerHTML="",0===n.total_results)return void e(d).Notify.failure("There is no such film");await(0,o.getGenres)().then((({genres:e})=>{n.results&&n.results.forEach((t=>{const{genre_ids:i,release_date:n}=t;e.forEach((({name:e,id:a})=>{i.includes(a)&&(i.length>2&&i.splice(2,i.length-1,"Other"),i.splice(i.indexOf(a),1,e)),t.genre_names=i.join(", "),t.release_date&&(t.release_date=n.slice(0,4))}))}))}));(0,l.renderGallery)(n.results)})),a("36a0Y");var h=a("4TNnu");
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
 */const f=function(e){const t=[];let i=0;for(let n=0;n<e.length;n++){let a=e.charCodeAt(n);a<128?t[i++]=a:a<2048?(t[i++]=a>>6|192,t[i++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[i++]=a>>18|240,t[i++]=a>>12&63|128,t[i++]=a>>6&63|128,t[i++]=63&a|128):(t[i++]=a>>12|224,t[i++]=a>>6&63|128,t[i++]=63&a|128)}return t},m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const i=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let t=0;t<e.length;t+=3){const a=e[t],r=t+1<e.length,s=r?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=a>>2,d=(3&a)<<4|s>>4;let u=(15&s)<<2|l>>6,p=63&l;o||(p=64,r||(u=64)),n.push(i[c],i[d],i[u],i[p])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(f(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let i=0,n=0;for(;i<e.length;){const a=e[i++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){const r=e[i++];t[n++]=String.fromCharCode((31&a)<<6|63&r)}else if(a>239&&a<365){const r=((7&a)<<18|(63&e[i++])<<12|(63&e[i++])<<6|63&e[i++])-65536;t[n++]=String.fromCharCode(55296+(r>>10)),t[n++]=String.fromCharCode(56320+(1023&r))}else{const r=e[i++],s=e[i++];t[n++]=String.fromCharCode((15&a)<<12|(63&r)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const i=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let t=0;t<e.length;){const a=i[e.charAt(t++)],r=t<e.length?i[e.charAt(t)]:0;++t;const s=t<e.length?i[e.charAt(t)]:64;++t;const o=t<e.length?i[e.charAt(t)]:64;if(++t,null==a||null==r||null==s||null==o)throw Error();const l=a<<2|r>>4;if(n.push(l),64!==s){const e=r<<4&240|s>>2;if(n.push(e),64!==o){const e=s<<6&192|o;n.push(e)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},g=function(e){return function(e){const t=f(e);return m.encodeByteArray(t,!0)}(e).replace(/\./g,"")},v=function(e){try{return m.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
function b(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function y(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function x(){const e=b();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function w(){try{return"object"==typeof indexedDB}catch(e){return!1}}
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
const k=()=>function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,E=()=>{try{return k()||(()=>{if(void 0===h||void 0===h.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&v(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},I=e=>{var t,i;return null===(i=null===(t=E())||void 0===t?void 0:t.emulatorHosts)||void 0===i?void 0:i[e]},T=e=>{var t;return null===(t=E())||void 0===t?void 0:t[`_${e}`]};
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
class C{wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,i))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class S extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name="FirebaseError",Object.setPrototypeOf(this,S.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_.prototype.create)}}class _{create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,a=this.errors[e],r=a?function(e,t){return e.replace(N,((e,i)=>{const n=t[i];return null!=n?String(n):`<${i}?>`}))}(a,i):"Error",s=`${this.serviceName}: ${r} (${n}).`;return new S(n,s,i)}constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}}const N=/\{\$([^}]+)}/g;
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
 */function L(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function A(e,t){if(e===t)return!0;const i=Object.keys(e),n=Object.keys(t);for(const a of i){if(!n.includes(a))return!1;const i=e[a],r=t[a];if(O(i)&&O(r)){if(!A(i,r))return!1}else if(i!==r)return!1}for(const e of n)if(!i.includes(e))return!1;return!0}function O(e){return null!==e&&"object"==typeof e}
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
function M(e){const t=[];for(const[i,n]of Object.entries(e))Array.isArray(n)?n.forEach((e=>{t.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(i)+"="+encodeURIComponent(n));return t.length?"&"+t.join("&"):""}function R(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[i,n]=e.split("=");t[decodeURIComponent(i)]=decodeURIComponent(n)}})),t}function D(e){const t=e.indexOf("?");if(!t)return"";const i=e.indexOf("#",t);return e.substring(t,i>0?i:void 0)}
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
 */function P(e,t){const i=new z(e,t);return i.subscribe.bind(i)}class z{next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,i){let n;if(void 0===e&&void 0===t&&void 0===i)throw new Error("Missing Observer.");n=function(e,t){if("object"!=typeof e||null===e)return!1;for(const i of t)if(i in e&&"function"==typeof e[i])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:i},void 0===n.next&&(n.next=B),void 0===n.error&&(n.error=B),void 0===n.complete&&(n.complete=B);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}}function B(){}
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
function W(e){return e&&e._delegate?e._delegate:e}class U{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
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
class ${get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new C;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&e.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(i)&&!this.shouldAutoInitialize()){if(n)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:i})}catch(e){if(n)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[e,t]of this.instancesDeferred.entries()){i===this.normalizeInstanceIdentifier(e)&&t.resolve(n)}return n}onInit(e,t){var i;const n=this.normalizeInstanceIdentifier(t),a=null!==(i=this.onInitCallbacks.get(n))&&void 0!==i?i:new Set;a.add(e),this.onInitCallbacks.set(n,a);const r=this.instances.get(n);return r&&e(r,n),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(n=e,"[DEFAULT]"===n?void 0:n),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch(e){}var n;return i||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class F{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
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
 */const H=[];var j,V;(V=j||(j={}))[V.DEBUG=0]="DEBUG",V[V.VERBOSE=1]="VERBOSE",V[V.INFO=2]="INFO",V[V.WARN=3]="WARN",V[V.ERROR=4]="ERROR",V[V.SILENT=5]="SILENT";const G={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},X=j.INFO,q={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},K=(e,t,...i)=>{if(t<e.logLevel)return;const n=(new Date).toISOString(),a=q[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${n}]  ${e.name}:`,...i)};class Y{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?G[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}constructor(e){this.name=e,this._logLevel=X,this._logHandler=K,this._userLogHandler=null,H.push(this)}}let J,Q;const Z=new WeakMap,ee=new WeakMap,te=new WeakMap,ie=new WeakMap,ne=new WeakMap;let ae={get(e,t,i){if(e instanceof IDBTransaction){if("done"===t)return ee.get(e);if("objectStoreNames"===t)return e.objectStoreNames||te.get(e);if("store"===t)return i.objectStoreNames[1]?void 0:i.objectStore(i.objectStoreNames[0])}return oe(e[t])},set:(e,t,i)=>(e[t]=i,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function re(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Q||(Q=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(le(this),t),oe(Z.get(this))}:function(...t){return oe(e.apply(le(this),t))}:function(t,...i){const n=e.call(le(this),t,...i);return te.set(n,t.sort?t.sort():[t]),oe(n)}}function se(e){return"function"==typeof e?re(e):(e instanceof IDBTransaction&&function(e){if(ee.has(e))return;const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",r),e.removeEventListener("abort",r)},a=()=>{t(),n()},r=()=>{i(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",r),e.addEventListener("abort",r)}));ee.set(e,t)}(e),t=e,(J||(J=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ae):e);var t}function oe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,i)=>{const n=()=>{e.removeEventListener("success",a),e.removeEventListener("error",r)},a=()=>{t(oe(e.result)),n()},r=()=>{i(e.error),n()};e.addEventListener("success",a),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&Z.set(t,e)})).catch((()=>{})),ne.set(t,e),t}(e);if(ie.has(e))return ie.get(e);const t=se(e);return t!==e&&(ie.set(e,t),ne.set(t,e)),t}const le=e=>ne.get(e);function ce(e,t,{blocked:i,upgrade:n,blocking:a,terminated:r}={}){const s=indexedDB.open(e,t),o=oe(s);return n&&s.addEventListener("upgradeneeded",(e=>{n(oe(s.result),e.oldVersion,e.newVersion,oe(s.transaction))})),i&&s.addEventListener("blocked",(()=>i())),o.then((e=>{r&&e.addEventListener("close",(()=>r())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),o}const de=["get","getKey","getAll","getAllKeys","count"],ue=["put","add","delete","clear"],pe=new Map;function he(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(pe.get(t))return pe.get(t);const i=t.replace(/FromIndex$/,""),n=t!==i,a=ue.includes(i);if(!(i in(n?IDBIndex:IDBObjectStore).prototype)||!a&&!de.includes(i))return;const r=async function(e,...t){const r=this.transaction(e,a?"readwrite":"readonly");let s=r.store;return n&&(s=s.index(t.shift())),(await Promise.all([s[i](...t),a&&r.done]))[0]};return pe.set(t,r),r}ae=(e=>({...e,get:(t,i,n)=>he(t,i)||e.get(t,i,n),has:(t,i)=>!!he(t,i)||e.has(t,i)}))(ae);
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
class fe{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const me=new Y("@firebase/app"),ge={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ve=new Map,be=new Map;function ye(e,t){try{e.container.addComponent(t)}catch(i){me.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,i)}}function xe(e){const t=e.name;if(be.has(t))return me.debug(`There were multiple attempts to register component ${t}.`),!1;be.set(t,e);for(const t of ve.values())ye(t,e);return!0}function we(e,t){const i=e.container.getProvider("heartbeat").getImmediate({optional:!0});return i&&i.triggerHeartbeat(),e.container.getProvider(t)}
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
const ke=new _("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
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
class Ee{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ke.create("app-deleted",{appName:this._name})}constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new U("app",(()=>this),"PUBLIC"))}}
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
 */function Ie(e,t={}){let i=e;if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!=typeof a||!a)throw ke.create("bad-app-name",{appName:String(a)});var r;if(i||(i=null===(r=E())||void 0===r?void 0:r.config),!i)throw ke.create("no-options");const s=ve.get(a);if(s){if(A(i,s.options)&&A(n,s.config))return s;throw ke.create("duplicate-app",{appName:a})}const o=new F(a);for(const e of be.values())o.addComponent(e);const l=new Ee(i,n,o);return ve.set(a,l),l}function Te(e="[DEFAULT]"){const t=ve.get(e);if(!t&&"[DEFAULT]"===e)return Ie();if(!t)throw ke.create("no-app",{appName:e});return t}function Ce(e,t,i){var n;let a=null!==(n=ge[e])&&void 0!==n?n:e;i&&(a+=`-${i}`);const r=a.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const e=[`Unable to register library "${a}" with version "${t}":`];return r&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),r&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void me.warn(e.join(" "))}xe(new U(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}let Se=null;function _e(){return Se||(Se=ce("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw ke.create("idb-open",{originalErrorMessage:e.message})}))),Se}async function Ne(e,t){try{const i=(await _e()).transaction("firebase-heartbeat-store","readwrite"),n=i.objectStore("firebase-heartbeat-store");return await n.put(t,Le(e)),i.done}catch(e){if(e instanceof S)me.warn(e.message);else{const t=ke.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});me.warn(t.message)}}}function Le(e){return`${e.name}!${e.options.appId}`}
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
 */class Ae{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=Oe();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Oe(),{heartbeatsToSend:t,unsentEntries:i}=function(e,t=1024){const i=[];let n=e.slice();for(const a of e){const e=i.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),Re(i)>t){e.dates.pop();break}}else if(i.push({agent:a.agent,dates:[a.date]}),Re(i)>t){i.pop();break}n=n.slice(1)}return{heartbeatsToSend:i,unsentEntries:n}}(this._heartbeatsCache.heartbeats),n=g(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Me(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function Oe(){return(new Date).toISOString().substring(0,10)}class Me{async runIndexedDBEnvironmentCheck(){return!!w()&&new Promise(((e,t)=>{try{let i=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),i||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=()=>{i=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{return(await _e()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(Le(e))}catch(e){if(e instanceof S)me.warn(e.message);else{const t=ke.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});me.warn(t.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ne(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function Re(e){return g(JSON.stringify({version:2,heartbeats:e})).length}
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
 */var De;De="",xe(new U("platform-logger",(e=>new fe(e)),"PRIVATE")),xe(new U("heartbeat",(e=>new Ae(e)),"PRIVATE")),Ce("@firebase/app","0.9.0",De),Ce("@firebase/app","0.9.0","esm2017"),Ce("fire-js","");
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
Ce("firebase","9.15.0","app");const Pe={apiKey:"AIzaSyDv5dHMjgq_6GWD35Of-cTXskRk1rXncws",authDomain:"filmoteka-command-project-js.firebaseapp.com",projectId:"filmoteka-command-project-js",storageBucket:"filmoteka-command-project-js.appspot.com",messagingSenderId:"1084933608284",appId:"1:1084933608284:web:16097211c819e6fa8d6799",measurementId:"G-BHYJP9WVT4"};function ze(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(i[n[a]]=e[n[a]])}return i}Object.create;Object.create;function Be(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const We=Be,Ue=new _("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),$e={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},Fe=new Y("@firebase/auth");function He(e,...t){Fe.logLevel<=j.ERROR&&Fe.error(`Auth (9.15.0): ${e}`,...t)}
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
 */function je(e,...t){throw Xe(e,...t)}function Ve(e,...t){return Xe(e,...t)}function Ge(e,t,i){const n=Object.assign(Object.assign({},We()),{[t]:i});return new _("auth","Firebase",n).create(t,{appName:e.name})}function Xe(e,...t){if("string"!=typeof e){const i=t[0],n=[...t.slice(1)];return n[0]&&(n[0].appName=e.name),e._errorFactory.create(i,...n)}return Ue.create(e,...t)}function qe(e,t,...i){if(!e)throw Xe(t,...i)}function Ke(e){const t="INTERNAL ASSERTION FAILED: "+e;throw He(t),new Error(t)}function Ye(e,t){e||Ke(t)}
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
 */const Je=new Map;function Qe(e){Ye(e instanceof Function,"Expected a class definition");let t=Je.get(e);return t?(Ye(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Je.set(e,t),t)}
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
function Ze(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function et(){return"http:"===tt()||"https:"===tt()}function tt(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function it(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(et()||y()||"connection"in navigator))||navigator.onLine}
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
class nt{get(){return it()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}constructor(e,t){this.shortDelay=e,this.longDelay=t,Ye(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())||"object"==typeof navigator&&"ReactNative"===navigator.product}}
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
 */function at(e,t){Ye(e.emulator,"Emulator should always be set here");const{url:i}=e.emulator;return t?`${i}${t.startsWith("/")?t.slice(1):t}`:i}
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
 */class rt{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const st={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ot=new nt(3e4,6e4);
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
 */function lt(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ct(e,t,i,n,a={}){return dt(e,a,(async()=>{let a={},r={};n&&("GET"===t?r=n:a={body:JSON.stringify(n)});const s=M(Object.assign({key:e.config.apiKey},r)).slice(1),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode),rt.fetch()(pt(e,e.config.apiHost,i,s),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},a))}))}async function dt(e,t,i){e._canInitEmulator=!1;const n=Object.assign(Object.assign({},st),t);try{const t=new ht(e),a=await Promise.race([i(),t.promise]);t.clearNetworkTimeout();const r=await a.json();if("needConfirmation"in r)throw ft(e,"account-exists-with-different-credential",r);if(a.ok&&!("errorMessage"in r))return r;{const t=a.ok?r.errorMessage:r.error.message,[i,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===i)throw ft(e,"credential-already-in-use",r);if("EMAIL_EXISTS"===i)throw ft(e,"email-already-in-use",r);if("USER_DISABLED"===i)throw ft(e,"user-disabled",r);const o=n[i]||i.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Ge(e,o,s);je(e,o)}}catch(t){if(t instanceof S)throw t;je(e,"network-request-failed")}}async function ut(e,t,i,n,a={}){const r=await ct(e,t,i,n,a);return"mfaPendingCredential"in r&&je(e,"multi-factor-auth-required",{_serverResponse:r}),r}function pt(e,t,i,n){const a=`${t}${i}?${n}`;return e.config.emulator?at(e.config,a):`${e.config.apiScheme}://${a}`}class ht{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ve(this.auth,"network-request-failed"))),ot.get())}))}}function ft(e,t,i){const n={appName:e.name};i.email&&(n.email=i.email),i.phoneNumber&&(n.phoneNumber=i.phoneNumber);const a=Ve(e,t,n);return a.customData._tokenResponse=i,a}
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
function mt(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function gt(e){return 1e3*Number(e)}function vt(e){const[t,i,n]=e.split(".");if(void 0===t||void 0===i||void 0===n)return He("JWT malformed, contained fewer than 3 sections"),null;try{const e=v(i);return e?JSON.parse(e):(He("Failed to decode base64 JWT payload"),null)}catch(e){return He("Caught error parsing JWT payload as JSON",null==e?void 0:e.toString()),null}}
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
async function bt(e,t,i=!1){if(i)return t;try{return await t}catch(t){throw t instanceof S&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class yt{_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
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
 */class xt{_initializeTime(){this.lastSignInTime=mt(this.lastLoginAt),this.creationTime=mt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}}
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
 */async function wt(e){var t;const i=e.auth,n=await e.getIdToken(),a=await bt(e,async function(e,t){return ct(e,"POST","/v1/accounts:lookup",t)}(i,{idToken:n}));qe(null==a?void 0:a.users.length,i,"internal-error");const r=a.users[0];e._notifyReloadListener(r);const s=(null===(t=r.providerUserInfo)||void 0===t?void 0:t.length)?r.providerUserInfo.map((e=>{var{providerId:t}=e,i=ze(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})):[];const o=(l=e.providerData,c=s,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const d=e.isAnonymous,u=!(e.email&&r.passwordHash||(null==o?void 0:o.length)),p=!!d&&u,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new xt(r.createdAt,r.lastLoginAt),isAnonymous:p};Object.assign(e,h)}
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
class kt{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){qe(e.idToken,"internal-error"),qe(void 0!==e.idToken,"internal-error"),qe(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=vt(e);return qe(t,"internal-error"),qe(void 0!==t.exp,"internal-error"),qe(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return qe(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:a}=await
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
async function(e,t){const i=await dt(e,{},(async()=>{const i=M({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:n,apiKey:a}=e.config,r=pt(e,n,"/v1/token",`key=${a}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",rt.fetch()(r,{method:"POST",headers:s,body:i})}));return{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token}}(e,t);this.updateTokensAndExpiration(i,n,Number(a))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*i}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:a}=t,r=new kt;return i&&(qe("string"==typeof i,"internal-error",{appName:e}),r.refreshToken=i),n&&(qe("string"==typeof n,"internal-error",{appName:e}),r.accessToken=n),a&&(qe("number"==typeof a,"internal-error",{appName:e}),r.expirationTime=a),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new kt,this.toJSON())}_performRefresh(){return Ke("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
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
 */function Et(e,t){qe("string"==typeof e||void 0===e,"internal-error",{appName:t})}class It{async getIdToken(e){const t=await bt(this,this.stsTokenManager.getToken(this.auth,e));return qe(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const i=W(e),n=await i.getIdToken(t),a=vt(n);qe(a&&a.exp&&a.auth_time&&a.iat,i.auth,"internal-error");const r="object"==typeof a.firebase?a.firebase:void 0,s=null==r?void 0:r.sign_in_provider;return{claims:a,token:n,authTime:mt(gt(a.auth_time)),issuedAtTime:mt(gt(a.iat)),expirationTime:mt(gt(a.exp)),signInProvider:s||null,signInSecondFactor:(null==r?void 0:r.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=W(e);await wt(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(qe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){qe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await wt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await bt(this,async function(e,t){return ct(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,n,a,r,s,o,l,c;const d=null!==(i=t.displayName)&&void 0!==i?i:void 0,u=null!==(n=t.email)&&void 0!==n?n:void 0,p=null!==(a=t.phoneNumber)&&void 0!==a?a:void 0,h=null!==(r=t.photoURL)&&void 0!==r?r:void 0,f=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:b,emailVerified:y,isAnonymous:x,providerData:w,stsTokenManager:k}=t;qe(b&&k,e,"internal-error");const E=kt.fromJSON(this.name,k);qe("string"==typeof b,e,"internal-error"),Et(d,e.name),Et(u,e.name),qe("boolean"==typeof y,e,"internal-error"),qe("boolean"==typeof x,e,"internal-error"),Et(p,e.name),Et(h,e.name),Et(f,e.name),Et(m,e.name),Et(g,e.name),Et(v,e.name);const I=new It({uid:b,auth:e,email:u,emailVerified:y,displayName:d,isAnonymous:x,photoURL:h,phoneNumber:p,tenantId:f,stsTokenManager:E,createdAt:g,lastLoginAt:v});return w&&Array.isArray(w)&&(I.providerData=w.map((e=>Object.assign({},e)))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,i=!1){const n=new kt;n.updateFromServerResponse(t);const a=new It({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await wt(a),a}constructor(e){var{uid:t,auth:i,stsTokenManager:n}=e,a=ze(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new xt(a.createdAt||void 0,a.lastLoginAt||void 0)}}
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
 */class Tt{async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}constructor(){this.type="NONE",this.storage={}}}Tt.type="NONE";const Ct=Tt;
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
 */function St(e,t,i){return`firebase:${e}:${t}:${i}`}class _t{setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?It._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new _t(Qe(Ct),e,i);const n=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let a=n[0]||Qe(Ct);const r=St(i,e.config.apiKey,e.name);let s=null;for(const i of t)try{const t=await i._get(r);if(t){const n=It._fromJSON(e,t);i!==a&&(s=n),a=i;break}}catch(e){}const o=n.filter((e=>e._shouldAllowMigration));return a._shouldAllowMigration&&o.length?(a=o[0],s&&await a._set(r,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==a)try{await e._remove(r)}catch(e){}}))),new _t(a,e,i)):new _t(a,e,i)}constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:a}=this.auth;this.fullUserKey=St(this.userKey,n.apiKey,a),this.fullPersistenceKey=St("persistence",n.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
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
 */function Nt(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mt(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Lt(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Dt(t))return"Blackberry";if(Pt(t))return"Webos";if(At(t))return"Safari";if((t.includes("chrome/")||Ot(t))&&!t.includes("edge/"))return"Chrome";if(Rt(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=e.match(t);if(2===(null==i?void 0:i.length))return i[1]}return"Other"}function Lt(e=b()){return/firefox\//i.test(e)}function At(e=b()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Ot(e=b()){return/crios\//i.test(e)}function Mt(e=b()){return/iemobile/i.test(e)}function Rt(e=b()){return/android/i.test(e)}function Dt(e=b()){return/blackberry/i.test(e)}function Pt(e=b()){return/webos/i.test(e)}function zt(e=b()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Bt(){return x()&&10===document.documentMode}function Wt(e=b()){return zt(e)||Rt(e)||Pt(e)||Dt(e)||/windows phone/i.test(e)||Mt(e)}
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
function Ut(e,t=[]){let i;switch(e){case"Browser":i=Nt(b());break;case"Worker":i=`${Nt(b())}-${e}`;break;default:i=e}return`${i}/JsCore/9.15.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class $t{pushCallback(e,t){const i=t=>new Promise(((i,n)=>{try{i(e(t))}catch(e){n(e)}}));i.onAbort=t,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(e){t.reverse();for(const e of t)try{e()}catch(e){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==e?void 0:e.message})}}constructor(e){this.auth=e,this.queue=[]}}
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
 */class Ft{_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qe(t)),this._initializationPromise=this.queue((async()=>{var i,n;if(!this._deleted&&(this.persistenceManager=await _t.create(this,e),!this._deleted)){if(null===(i=this._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(e){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(n=this.currentUser)||void 0===n?void 0:n.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let n=i,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user,a=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(n)}catch(e){n=i,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(e)))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return qe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await wt(e)}catch(e){if("auth/network-request-failed"!==(null==e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?W(e):null;return t&&qe(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&qe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Qe(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new _("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return null===e?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qe(e)||this._popupRedirectResolver;qe(t,this,"argument-error"),this.redirectPersistenceManager=await _t.create(this,[Qe(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(i=this.redirectUser)||void 0===i?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const a="function"==typeof t?t:t.next.bind(t),r=this._isInitialized?Promise.resolve():this._initializationPromise;return qe(r,this,"internal-error"),r.then((()=>a(this.currentUser))),"function"==typeof t?e.addObserver(t,i,n):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return qe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ut(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return i&&(t["X-Firebase-Client"]=i),t}constructor(e,t,i){this.app=e,this.heartbeatServiceProvider=t,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new jt(this),this.idTokenSubscription=new jt(this),this.beforeStateQueue=new $t(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ue,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}}function Ht(e){return W(e)}class jt{get next(){return qe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(e){this.auth=e,this.observer=null,this.addObserver=P((e=>this.observer=e))}}function Vt(e,t,i){const n=Ht(e);qe(n._canInitEmulator,n,"emulator-config-failed"),qe(/^https?:\/\//.test(t),n,"invalid-emulator-scheme");const a=!!(null==i?void 0:i.disableWarnings),r=Gt(t),{host:s,port:o}=function(e){const t=Gt(e),i=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!i)return{host:"",port:null};const n=i[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const e=a[1];return{host:e,port:Xt(n.substr(e.length+1))}}{const[e,t]=n.split(":");return{host:e,port:Xt(t)}}}(t),l=null===o?"":`:${o}`;n.config.emulator={url:`${r}//${s}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:s,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
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
 */()}function Gt(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Xt(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class qt{toJSON(){return Ke("not implemented")}_getIdTokenResponse(e){return Ke("not implemented")}_linkToIdToken(e,t){return Ke("not implemented")}_getReauthenticationResolver(e){return Ke("not implemented")}constructor(e,t){this.providerId=e,this.signInMethod=t}}
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
 */async function Kt(e,t){return ct(e,"POST","/v1/accounts:update",t)}
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
class Yt extends qt{static _fromEmailAndPassword(e,t){return new Yt(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Yt(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPassword",lt(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithEmailLink",lt(e,t))}(e,{email:this._email,oobCode:this._password});default:je(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Kt(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithEmailLink",lt(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:je(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}}
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
 */async function Jt(e,t){return ut(e,"POST","/v1/accounts:signInWithIdp",lt(e,t))}
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
 */class Qt extends qt{static _fromParams(e){const t=new Qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):je("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:i,signInMethod:n}=t,a=ze(t,["providerId","signInMethod"]);if(!i||!n)return null;const r=new Qt(i,n);return r.idToken=a.idToken||void 0,r.accessToken=a.accessToken||void 0,r.secret=a.secret,r.nonce=a.nonce,r.pendingToken=a.pendingToken||null,r}_getIdTokenResponse(e){return Jt(e,this.buildRequest())}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Jt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Jt(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=M(t)}return e}constructor(){super(...arguments),this.pendingToken=null}}
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
 */const Zt={USER_NOT_FOUND:"user-not-found"};
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
class ei extends qt{static _fromVerification(e,t){return new ei({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ei({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPhoneNumber",lt(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const i=await ut(e,"POST","/v1/accounts:signInWithPhoneNumber",lt(e,t));if(i.temporaryProof)throw ft(e,"account-exists-with-different-credential",i);return i}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ut(e,"POST","/v1/accounts:signInWithPhoneNumber",lt(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Zt)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:n}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:n}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:a}=e;return i||t||n||a?new ei({verificationId:t,verificationCode:i,phoneNumber:n,temporaryProof:a}):null}constructor(e){super("phone","phone"),this.params=e}}
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
 */class ti{static parseLink(e){const t=function(e){const t=R(D(e)).link,i=t?R(D(t)).deep_link_id:null,n=R(D(e)).deep_link_id;return(n?R(D(n)).link:null)||n||i||t||e}(e);try{return new ti(t)}catch(e){return null}}constructor(e){var t,i,n,a,r,s;const o=R(D(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(i=o.oobCode)&&void 0!==i?i:null,d=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(n=o.mode)&&void 0!==n?n:null);qe(l&&c&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=c,this.continueUrl=null!==(a=o.continueUrl)&&void 0!==a?a:null,this.languageCode=null!==(r=o.languageCode)&&void 0!==r?r:null,this.tenantId=null!==(s=o.tenantId)&&void 0!==s?s:null}}
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
class ii{static credential(e,t){return Yt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ti.parseLink(t);return qe(i,"argument-error"),Yt._fromEmailAndCode(e,i.code,i.tenantId)}constructor(){this.providerId=ii.PROVIDER_ID}}ii.PROVIDER_ID="password",ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class ni{setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}}
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
 */class ai extends ni{addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
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
class ri extends ai{static credential(e){return Qt._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ri.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("facebook.com")}}ri.FACEBOOK_SIGN_IN_METHOD="facebook.com",ri.PROVIDER_ID="facebook.com";
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
class si extends ai{static credential(e,t){return Qt._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return si.credential(t,i)}catch(e){return null}}constructor(){super("google.com"),this.addScope("profile")}}si.GOOGLE_SIGN_IN_METHOD="google.com",si.PROVIDER_ID="google.com";
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
class oi extends ai{static credential(e){return Qt._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch(e){return null}}constructor(){super("github.com")}}oi.GITHUB_SIGN_IN_METHOD="github.com",oi.PROVIDER_ID="github.com";
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
class li extends ai{static credential(e,t){return Qt._fromParams({providerId:li.PROVIDER_ID,signInMethod:li.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return li.credentialFromTaggedObject(e)}static credentialFromError(e){return li.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return li.credential(t,i)}catch(e){return null}}constructor(){super("twitter.com")}}
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
async function ci(e,t){return ut(e,"POST","/v1/accounts:signUp",lt(e,t))}
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
 */li.TWITTER_SIGN_IN_METHOD="twitter.com",li.PROVIDER_ID="twitter.com";class di{static async _fromIdTokenResponse(e,t,i,n=!1){const a=await It._fromIdTokenResponse(e,i,n),r=ui(i);return new di({user:a,providerId:r,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=ui(i);return new di({user:e,providerId:n,_tokenResponse:i,operationType:t})}constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}}function ui(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class pi extends S{static _fromErrorAndOperation(e,t,i,n){return new pi(e,t,i,n)}constructor(e,t,i,n){var a;super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,pi.prototype),this.customData={appName:e.name,tenantId:null!==(a=e.tenantId)&&void 0!==a?a:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}}function hi(e,t,i,n){return("reauthenticate"===t?i._getReauthenticationResolver(e):i._getIdTokenResponse(e)).catch((i=>{if("auth/multi-factor-auth-required"===i.code)throw pi._fromErrorAndOperation(e,i,t,n);throw i}))}
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
 */async function fi(e,t,i=!1){const n=await bt(e,t._linkToIdToken(e.auth,await e.getIdToken()),i);return di._forOperation(e,"link",n)}
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
async function mi(e,t,i=!1){const{auth:n}=e,a="reauthenticate";try{const r=await bt(e,hi(n,a,t,e),i);qe(r.idToken,n,"internal-error");const s=vt(r.idToken);qe(s,n,"internal-error");const{sub:o}=s;return qe(e.uid===o,n,"user-mismatch"),di._forOperation(e,a,r)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&je(n,"user-mismatch"),e}}
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
 */async function gi(e,t,i=!1){const n="signIn",a=await hi(e,n,t),r=await di._fromIdTokenResponse(e,n,a);return i||await e._updateCurrentUser(r.user),r}async function vi(e,t){return gi(Ht(e),t)}async function bi(e,t,i){const n=Ht(e),a=await ci(n,{returnSecureToken:!0,email:t,password:i}),r=await di._fromIdTokenResponse(n,"signIn",a);return await n._updateCurrentUser(r.user),r}function yi(e,t,i){return vi(W(e),ii.credential(t,i))}
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
class xi{_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(e,t){this.storageRetriever=e,this.type=t}}
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
 */class wi extends xi{forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,i)=>{this.notifyListeners(e,i)}));const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const n=this.storage.getItem(i);if(e.newValue!==n)null!==e.newValue?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const n=()=>{const e=this.storage.getItem(i);(t||this.localCache[i]!==e)&&this.notifyListeners(i,e)},a=this.storage.getItem(i);Bt()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,10):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=b();return At(e)||zt(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Wt(),this._shouldAllowMigration=!0}}wi.type="LOCAL";const ki=wi;
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
 */class Ei extends xi{_addListener(e,t){}_removeListener(e,t){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ei.type="SESSION";const Ii=Ei;
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
class Ti{static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const i=new Ti(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:a}=t.data,r=this.handlersMap[n];if(!(null==r?void 0:r.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const s=Array.from(r).map((async e=>e(t.origin,a))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
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
function Ci(e="",t=10){let i="";for(let e=0;e<t;e++)i+=Math.floor(10*Math.random());return e+i}
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
 */Ti.receivers=[];class Si{removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let a,r;return new Promise(((s,o)=>{const l=Ci("",20);n.port1.start();const c=setTimeout((()=>{o(new Error("unsupported_event"))}),i);r={messageChannel:n,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),a=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(a),s(t.data.response);break;default:clearTimeout(c),clearTimeout(a),o(new Error("invalid_response"))}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])})).finally((()=>{r&&this.removeMessageHandler(r)}))}constructor(e){this.target=e,this.handlers=new Set}}
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
 */function _i(){return window}
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
function Ni(){return void 0!==_i().WorkerGlobalScope&&"function"==typeof _i().importScripts}class Li{toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}constructor(e){this.request=e}}function Ai(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Oi(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,i)=>{e.addEventListener("error",(()=>{i(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){i(e)}})),e.addEventListener("success",(async()=>{const i=e.result;i.objectStoreNames.contains("firebaseLocalStorage")?t(i):(i.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Li(e).toPromise()}(),t(await Oi()))}))}))}async function Mi(e,t,i){const n=Ai(e,!0).put({fbase_key:t,value:i});return new Li(n).toPromise()}function Ri(e,t){const i=Ai(e,!0).delete(t);return new Li(i).toPromise()}class Di{async _openDb(){return this.db||(this.db=await Oi()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ni()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ti._getInstance(Ni()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Si(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&(null===(e=i[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=i[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Oi();return await Mi(e,"__sak","1"),await Ri(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((i=>Mi(i,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const i=Ai(e,!1).get(t),n=await new Li(i).toPromise();return void 0===n?null:n.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ri(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ai(e,!1).getAll();return new Li(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],i=new Set;for(const{fbase_key:n,value:a}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(a)&&(this.notifyListeners(n,a),t.push(n));for(const e of Object.keys(this.localCache))this.localCache[e]&&!i.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const e of Array.from(i))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}Di.type="LOCAL";const Pi=Di;
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
 */function zi(e){return new Promise(((t,i)=>{const n=document.createElement("script");
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
var a,r;n.setAttribute("src",e),n.onload=t,n.onerror=e=>{const t=Ve("internal-error");t.customData=e,i(t)},n.type="text/javascript",n.charset="UTF-8",(null!==(r=null===(a=document.getElementsByTagName("head"))||void 0===a?void 0:a[0])&&void 0!==r?r:document).appendChild(n)}))}function Bi(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Bi("rcb"),new nt(3e4,6e4);async function Wi(e,t,i){var n;const a=await i.verify();try{let r;if(qe("string"==typeof a,e,"argument-error"),qe("recaptcha"===i.type,e,"argument-error"),r="string"==typeof t?{phoneNumber:t}:t,"session"in r){const t=r.session;if("phoneNumber"in r){qe("enroll"===t.type,e,"internal-error");const i=await
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
function(e,t){return ct(e,"POST","/v2/accounts/mfaEnrollment:start",lt(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,recaptchaToken:a}});return i.phoneSessionInfo.sessionInfo}{qe("signin"===t.type,e,"internal-error");const i=(null===(n=r.multiFactorHint)||void 0===n?void 0:n.uid)||r.multiFactorUid;qe(i,e,"missing-multi-factor-info");const s=await function(e,t){return ct(e,"POST","/v2/accounts/mfaSignIn:start",lt(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:i,phoneSignInInfo:{recaptchaToken:a}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return ct(e,"POST","/v1/accounts:sendVerificationCode",lt(e,t))}(e,{phoneNumber:r.phoneNumber,recaptchaToken:a});return t}}finally{i._reset()}}
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
class Ui{verifyPhoneNumber(e,t){return Wi(this.auth,e,W(t))}static credential(e,t){return ei._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ui.credentialFromTaggedObject(t)}static credentialFromError(e){return Ui.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?ei._fromTokenResponse(t,i):null}constructor(e){this.providerId=Ui.PROVIDER_ID,this.auth=Ht(e)}}
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
function $i(e,t){return t?Qe(t):(qe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ui.PROVIDER_ID="phone",Ui.PHONE_SIGN_IN_METHOD="phone";class Fi extends qt{_getIdTokenResponse(e){return Jt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Jt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Jt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}constructor(e){super("custom","custom"),this.params=e}}function Hi(e){return gi(e.auth,new Fi(e),e.bypassAuthState)}function ji(e){const{auth:t,user:i}=e;return qe(i,t,"internal-error"),mi(i,new Fi(e),e.bypassAuthState)}async function Vi(e){const{auth:t,user:i}=e;return qe(i,t,"internal-error"),fi(i,new Fi(e),e.bypassAuthState)}
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
 */class Gi{execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:a,error:r,type:s}=e;if(r)return void this.reject(r);const o={auth:this.auth,requestUri:t,sessionId:i,tenantId:a||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hi;case"linkViaPopup":case"linkViaRedirect":return Vi;case"reauthViaPopup":case"reauthViaRedirect":return ji;default:je(this.auth,"internal-error")}}resolve(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(e,t,i,n,a=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}}
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
 */const Xi=new nt(2e3,1e4);class qi extends Gi{async executeNotNull(){const e=await this.execute();return qe(e,this.auth,"internal-error"),e}async onExecution(){Ye(1===this.filter.length,"Popup operations only handle one event");const e=Ci();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ve(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ve(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;(null===(i=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===i?void 0:i.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ve(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Xi.get())};e()}constructor(e,t,i,n,a){super(e,t,n,a),this.provider=i,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}}qi.currentPopupAction=null;
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
const Ki=new Map;class Yi extends Gi{async execute(){let e=Ki.get(this.auth._key());if(!e){try{const t=await async function(e,t){const i=Zi(t),n=Qi(e);if(!await n._isAvailable())return!1;const a="true"===await n._get(i);return await n._remove(i),a}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}}function Ji(e,t){Ki.set(e._key(),t)}function Qi(e){return Qe(e._redirectPersistence)}function Zi(e){return St("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function en(e,t,i=!1){const n=Ht(e),a=$i(n,t),r=new Yi(n,a,i),s=await r.execute();return s&&!i&&(delete s.user._redirectEventId,await n._persistUserIfCurrent(s.user),await n._setRedirectUser(null,t)),s}class tn{registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return an(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!an(e)){const n=(null===(i=e.error.code)||void 0===i?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ve(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(nn(e))}saveEventToCache(e){this.cachedEventUids.add(nn(e)),this.lastProcessedEventTime=Date.now()}constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function nn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function an({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const rn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sn=/^https?/;async function on(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return ct(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ln(e))return}catch(e){}je(e,"unauthorized-domain")}function ln(e){const t=Ze(),{protocol:i,hostname:n}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return""===a.hostname&&""===n?"chrome-extension:"===i&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===i&&a.hostname===n}if(!sn.test(i))return!1;if(rn.test(e))return n===e;const a=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}
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
 */const cn=new nt(3e4,6e4);function dn(){const e=_i().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let un=null;function pn(e){return un=un||function(e){return new Promise(((t,i)=>{var n,a,r;function s(){dn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{dn(),i(Ve(e,"network-request-failed"))},timeout:cn.get()})}if(null===(a=null===(n=_i().gapi)||void 0===n?void 0:n.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(r=_i().gapi)||void 0===r?void 0:r.load)){const t=Bi("iframefcb");return _i()[t]=()=>{gapi.load?s():i(Ve(e,"network-request-failed"))},zi(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>i(e)))}s()}})).catch((e=>{throw un=null,e}))}(e),un}
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
 */const hn=new nt(5e3,15e3),fn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gn(e){const t=e.config;qe(t.authDomain,e,"auth-domain-config-required");const i=t.emulator?at(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,n={apiKey:t.apiKey,appName:e.name,v:"9.15.0"},a=mn.get(e.config.apiHost);a&&(n.eid=a);const r=e._getFrameworks();return r.length&&(n.fw=r.join(",")),`${i}?${M(n).slice(1)}`}
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
const vn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class bn{close(){if(this.window)try{this.window.close()}catch(e){}}constructor(e){this.window=e,this.associatedEvent=null}}function yn(e,t,i,n=500,a=600){const r=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-n)/2,0).toString();let o="";const l=Object.assign(Object.assign({},vn),{width:n.toString(),height:a.toString(),top:r,left:s}),c=b().toLowerCase();i&&(o=Ot(c)?"_blank":i),Lt(c)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce(((e,[t,i])=>`${e}${t}=${i},`),"");if(function(e=b()){var t;return zt(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){const i=document.createElement("a");i.href=e,i.target=t;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),i.dispatchEvent(n)}
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
 */(t||"",o),new bn(null);const u=window.open(t||"",o,d);qe(u,e,"popup-blocked");try{u.focus()}catch(e){}return new bn(u)}function xn(e,t,i,n,a,r){qe(e.config.authDomain,e,"auth-domain-config-required"),qe(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:i,redirectUrl:n,v:"9.15.0",eventId:a};if(t instanceof ni){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",L(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(r||{}))s[e]=t}if(t instanceof ai){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?at(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${M(o).slice(1)}`}const wn=class{async _openPopup(e,t,i,n){var a;Ye(null===(a=this.eventManagers[e._key()])||void 0===a?void 0:a.manager,"_initialize() not called before _openPopup()");return yn(e,xn(e,t,i,Ze(),n),Ci())}async _openRedirect(e,t,i,n){var a;return await this._originValidation(e),a=xn(e,t,i,Ze(),n),_i().location.href=a,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:i}=this.eventManagers[t];return e?Promise.resolve(e):(Ye(i,"If manager is not set, promise should be"),i)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch((()=>{delete this.eventManagers[t]})),i}async initAndGetManager(e){const t=await async function(e){const t=await pn(e),i=_i().gapi;return qe(i,e,"internal-error"),t.open({where:document.body,url:gn(e),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fn,dontclear:!0},(t=>new Promise((async(i,n)=>{await t.restyle({setHideOnLeave:!1});const a=Ve(e,"network-request-failed"),r=_i().setTimeout((()=>{n(a)}),hn.get());function s(){_i().clearTimeout(r),i(t)}t.ping(s).then(s,(()=>{n(a)}))}))))}(e),i=new tn(e);return t.register("authEvent",(t=>{qe(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:i.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(i=>{var n;const a=null===(n=null==i?void 0:i[0])||void 0===n?void 0:n.webStorageSupport;void 0!==a&&t(!!a),je(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=on(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Wt()||At()||zt()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ii,this._completeRedirectFn=en,this._overrideRedirectResult=Ji}};
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
class kn{getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){qe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(e){this.auth=e,this.internalListeners=new Map}}
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
const En=T("authIdTokenMaxAge")||300;let In=null;function Tn(e=Te()){const t=we(e,"auth");if(t.isInitialized())return t.getImmediate();const i=function(e,t){const i=we(e,"auth");if(i.isInitialized()){const e=i.getImmediate();if(A(i.getOptions(),null!=t?t:{}))return e;je(e,"already-initialized")}return i.initialize({options:t})}(e,{popupRedirectResolver:wn,persistence:[Pi,ki,Ii]}),n=T("authTokenSyncURL");if(n){const e=(a=n,async e=>{const t=e&&await e.getIdTokenResult(),i=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>En)return;const n=null==t?void 0:t.token;In!==n&&(In=n,await fetch(a,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});!function(e,t,i){W(e).beforeAuthStateChanged(t,i)}(i,e,(()=>e(i.currentUser))),function(e,t,i,n){W(e).onIdTokenChanged(t,i,n)}(i,(t=>e(t)))}var a;const r=I("auth");return r&&Vt(i,`http://${r}`),i}var Cn;Cn="Browser",xe(new U("auth",((e,{options:t})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),{apiKey:a,authDomain:r}=i.options;return((e,i)=>{qe(a&&!a.includes(":"),"invalid-api-key",{appName:e.name}),qe(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:a,authDomain:r,clientPlatform:Cn,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ut(Cn)},s=new Ft(e,i,n);return function(e,t){const i=(null==t?void 0:t.persistence)||[],n=(Array.isArray(i)?i:[i]).map(Qe);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(i,n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,i)=>{e.getProvider("auth-internal").initialize()}))),xe(new U("auth-internal",(e=>{const t=Ht(e.getProvider("auth").getImmediate());return new kn(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ce("@firebase/auth","0.21.0",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Cn)),Ce("@firebase/auth","0.21.0","esm2017");const Sn=(c=a("2mCIo")).refs.loginForm.querySelector('[name="useremail"]'),_n=c.refs.loginForm.querySelector('[name="userpassword"]');function Nn(){c.refs.divLoginEmailError.innerHTML="",c.refs.divLoginPassError.innerHTML="",_n.removeEventListener("focus",Nn),Sn.removeEventListener("focus",Nn)}const Ln=e=>{e.code===$e.INVALID_PASSWORD?(c.refs.divLoginPassError.style.display="block",c.refs.divLoginPassError.innerHTML="❌ Wrong passowrd. Try again",_n.addEventListener("focus",Nn)):e.code===$e.USER_DELETED?(c.refs.divLoginEmailError.style.display="block",c.refs.divLoginEmailError.innerHTML="❌ No such email in our database",Sn.addEventListener("focus",Nn)):(console.log(e),c.refs.divLoginPassError.style.display="block",c.refs.divLoginPassError.innerHTML=`❌ Error: ${e.message}`,_n.addEventListener("focus",Nn))},An=e=>{if(c.refs.divSignUpError.style.display="block",e.code===$e.EMAIL_EXISTS){c.refs.divSignUpError.innerHTML=' ❌ You\'ve already been registered. Please <a class="checkbox-link link" login-data-modal-open>log in</a>';const e=c.refs.divSignUpError.querySelector(".checkbox-link");e.style.pointerEvents="all",e.style.textDecoration="underline",e.style.cursor="pointer",e.addEventListener("click",(()=>{Sn.value="",_n.value="",c.refs.signupModal.classList.toggle("is-hidden"),c.refs.loginModal.classList.toggle("is-hidden")}))}else c.refs.divSignUpError.innerHTML=`Error: ${e.message}`},On=document.querySelector(".success-modal-text"),Mn=document.querySelector("[success-data-modal]"),Rn=document.querySelector("[success-data-modal-close]");function Dn(){Mn.classList.toggle("is-hidden"),Rn.removeEventListener("click",Dn)}function Pn(e){Mn.classList.remove("is-hidden"),Rn.addEventListener("click",Dn),On.innerHTML=`Success! </br> Hello ${e}`}(c=a("2mCIo")).refs.headerSignoutBtn.addEventListener("click",(()=>{Bn()}));const zn=Tn(Ie(Pe)),Bn=e=>{zn.onAuthStateChanged((e=>{if(console.log(e),!localStorage.getItem("uid")){c.refs.headerSignoutBtn.addEventListener("click",Bn);const t=e.uid;return localStorage.setItem("uid",t),localStorage.setItem("username",e.email),c.refs.headerUserEmailDiv.innerHTML=`Hello, </br> ${localStorage.getItem("username")}`,c.refs.loginModal.classList.toggle("is-hidden"),void Pn(e.email)}c.refs.headerSignoutBtn.removeEventListener("click",Bn),localStorage.removeItem("uid"),localStorage.removeItem("username"),c.refs.signoutModal.classList.toggle("is-hidden"),c.refs.headerUserLogedinContainer.classList.add("visually-hidden"),c.refs.headerUserNoLoginContainer.classList.remove("visually-hidden")}))};(c=a("2mCIo")).refs.headerLoginBtn.addEventListener("click",(()=>{c.refs.loginModal.classList.toggle("is-hidden"),c.refs.body.classList.add("no-scroll")}));const Wn=c.refs.signupForm.querySelector('[name="useremail"]'),Un=c.refs.signupForm.querySelector('[name="userpassword"]');function $n(){c.refs.loginModal.classList.toggle("is-hidden"),window.removeEventListener("keydown",Fn)}function Fn(e){"Escape"===e.code&&$n()}async function Hn(e){e.preventDefault();const t=e.currentTarget.elements.useremail.value,i=e.currentTarget.elements.userpassword.value,n=Tn(Ie(Pe));try{const e=(await bi(n,t,i)).user;c.refs.signupModal.classList.toggle("is-hidden"),Pn(e.email),c.refs.signupForm.removeEventListener("submit",Hn),c.refs.policyCheckbox.removeEventListener("click",jn)}catch(e){An(e)}}function jn(e){e.target.checked?c.refs.signupBtn.disabled=!1:c.refs.signupBtn.disabled=!0}function Vn(){c.refs.signupModal.classList.toggle("is-hidden"),c.refs.body.classList.remove("no-scroll"),window.removeEventListener("keydown",Xn)}function Gn(e){e.currentTarget===e.target&&Vn()}function Xn(e){"Escape"===e.code&&Vn()}c.refs.loginForm.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements.useremail.value,i=e.currentTarget.elements.userpassword.value,n=Tn(Ie(Pe));try{const e=await yi(n,t,i);c.refs.loginModalCloseBtn.addEventListener("click",$n);const a=e.user;c.refs.headerUserNoLoginContainer.classList.add("visually-hidden"),c.refs.headerUserLogedinContainer.classList.remove("visually-hidden"),Bn(a)}catch(e){Ln(e)}})),c.refs.signupBtnOnLoginModal.addEventListener("click",(()=>{Wn.value="",Un.value="",c.refs.divSignUpError.innerHTML="",c.refs.policyCheckbox.checked=!1,c.refs.signupBtn.disabled=!0,c.refs.loginModal.classList.toggle("is-hidden"),c.refs.signupModal.classList.toggle("is-hidden")})),c.refs.loginModal.addEventListener("click",(function(e){e.currentTarget===e.target&&$n()})),window.addEventListener("keydown",Fn),(c=a("2mCIo")).refs.headerSignupBtn.addEventListener("click",(()=>{c.refs.signupModal.classList.toggle("is-hidden"),c.refs.signupForm.addEventListener("submit",Hn),c.refs.policyCheckbox.addEventListener("click",jn),c.refs.signupBtnClose.addEventListener("click",Vn),c.refs.signupModal.addEventListener("click",Gn),window.addEventListener("keydown",Xn),c.refs.body.classList.add("no-scroll")})),a("cYVN0"),a("1HsQi");o=a("1iWqc"),l=a("1HsQi");function qn(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function Kn(e={},t={}){Object.keys(t).forEach((i=>{void 0===e[i]?e[i]=t[i]:qn(t[i])&&qn(e[i])&&Object.keys(t[i]).length>0&&Kn(e[i],t[i])}))}!async function(){const e=await(0,o.getTrendingFilms)();await(0,o.getGenres)().then((({genres:t})=>{e.results&&e.results.forEach((e=>{const{genre_ids:i,release_date:n}=e;t.forEach((({name:t,id:a})=>{i.includes(a)&&(i.length>2&&i.splice(2,i.length-1,"Other"),i.splice(i.indexOf(a),1,t)),e.genre_names=i.join(", "),e.release_date&&(e.release_date=n.slice(0,4))}))}))}));(0,l.renderGallery)(e.results)}(),a("9HhlW"),a("kLSqi"),a("9QIBC");const Yn={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Jn(){const e="undefined"!=typeof document?document:{};return Kn(e,Yn),e}const Qn={document:Yn,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}};function Zn(){const e="undefined"!=typeof window?window:{};return Kn(e,Qn),e}class ea extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function(e){const t=e.__proto__;Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function ta(e=[]){const t=[];return e.forEach((e=>{Array.isArray(e)?t.push(...ta(e)):t.push(e)})),t}function ia(e,t){return Array.prototype.filter.call(e,t)}function na(e,t){const i=Zn(),n=Jn();let a=[];if(!t&&e instanceof ea)return e;if(!e)return new ea(a);if("string"==typeof e){const i=e.trim();if(i.indexOf("<")>=0&&i.indexOf(">")>=0){let e="div";0===i.indexOf("<li")&&(e="ul"),0===i.indexOf("<tr")&&(e="tbody"),0!==i.indexOf("<td")&&0!==i.indexOf("<th")||(e="tr"),0===i.indexOf("<tbody")&&(e="table"),0===i.indexOf("<option")&&(e="select");const t=n.createElement(e);t.innerHTML=i;for(let e=0;e<t.childNodes.length;e+=1)a.push(t.childNodes[e])}else a=function(e,t){if("string"!=typeof e)return[e];const i=[],n=t.querySelectorAll(e);for(let e=0;e<n.length;e+=1)i.push(n[e]);return i}(e.trim(),t||n)}else if(e.nodeType||e===i||e===n)a.push(e);else if(Array.isArray(e)){if(e instanceof ea)return e;a=e}return new ea(function(e){const t=[];for(let i=0;i<e.length;i+=1)-1===t.indexOf(e[i])&&t.push(e[i]);return t}(a))}na.fn=ea.prototype;const aa="resize scroll".split(" ");function ra(e){return function(...t){if(void 0===t[0]){for(let t=0;t<this.length;t+=1)aa.indexOf(e)<0&&(e in this[t]?this[t][e]():na(this[t]).trigger(e));return this}return this.on(e,...t)}}ra("click"),ra("blur"),ra("focus"),ra("focusin"),ra("focusout"),ra("keyup"),ra("keydown"),ra("keypress"),ra("submit"),ra("change"),ra("mousedown"),ra("mousemove"),ra("mouseup"),ra("mouseenter"),ra("mouseleave"),ra("mouseout"),ra("mouseover"),ra("touchstart"),ra("touchend"),ra("touchmove"),ra("resize"),ra("scroll");const sa={addClass:function(...e){const t=ta(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.add(...t)})),this},removeClass:function(...e){const t=ta(e.map((e=>e.split(" "))));return this.forEach((e=>{e.classList.remove(...t)})),this},hasClass:function(...e){const t=ta(e.map((e=>e.split(" "))));return ia(this,(e=>t.filter((t=>e.classList.contains(t))).length>0)).length>0},toggleClass:function(...e){const t=ta(e.map((e=>e.split(" "))));this.forEach((e=>{t.forEach((t=>{e.classList.toggle(t)}))}))},attr:function(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(let i=0;i<this.length;i+=1)if(2===arguments.length)this[i].setAttribute(e,t);else for(const t in e)this[i][t]=e[t],this[i].setAttribute(t,e[t]);return this},removeAttr:function(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this},transform:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this},transition:function(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e;return this},on:function(...e){let[t,i,n,a]=e;function r(e){const t=e.target;if(!t)return;const a=e.target.dom7EventData||[];if(a.indexOf(e)<0&&a.unshift(e),na(t).is(i))n.apply(t,a);else{const e=na(t).parents();for(let t=0;t<e.length;t+=1)na(e[t]).is(i)&&n.apply(e[t],a)}}function s(e){const t=e&&e.target&&e.target.dom7EventData||[];t.indexOf(e)<0&&t.unshift(e),n.apply(this,t)}"function"==typeof e[1]&&([t,n,a]=e,i=void 0),a||(a=!1);const o=t.split(" ");let l;for(let e=0;e<this.length;e+=1){const t=this[e];if(i)for(l=0;l<o.length;l+=1){const e=o[l];t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:n,proxyListener:r}),t.addEventListener(e,r,a)}else for(l=0;l<o.length;l+=1){const e=o[l];t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:n,proxyListener:s}),t.addEventListener(e,s,a)}}return this},off:function(...e){let[t,i,n,a]=e;"function"==typeof e[1]&&([t,n,a]=e,i=void 0),a||(a=!1);const r=t.split(" ");for(let e=0;e<r.length;e+=1){const t=r[e];for(let e=0;e<this.length;e+=1){const r=this[e];let s;if(!i&&r.dom7Listeners?s=r.dom7Listeners[t]:i&&r.dom7LiveListeners&&(s=r.dom7LiveListeners[t]),s&&s.length)for(let e=s.length-1;e>=0;e-=1){const i=s[e];n&&i.listener===n||n&&i.listener&&i.listener.dom7proxy&&i.listener.dom7proxy===n?(r.removeEventListener(t,i.proxyListener,a),s.splice(e,1)):n||(r.removeEventListener(t,i.proxyListener,a),s.splice(e,1))}}}return this},trigger:function(...e){const t=Zn(),i=e[0].split(" "),n=e[1];for(let a=0;a<i.length;a+=1){const r=i[a];for(let i=0;i<this.length;i+=1){const a=this[i];if(t.CustomEvent){const i=new t.CustomEvent(r,{detail:n,bubbles:!0,cancelable:!0});a.dom7EventData=e.filter(((e,t)=>t>0)),a.dispatchEvent(i),a.dom7EventData=[],delete a.dom7EventData}}}return this},transitionEnd:function(e){const t=this;return e&&t.on("transitionend",(function i(n){n.target===this&&(e.call(this,n),t.off("transitionend",i))})),this},outerWidth:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function(e){if(this.length>0){if(e){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function(){const e=Zn();return this[0]?e.getComputedStyle(this[0],null):{}},offset:function(){if(this.length>0){const e=Zn(),t=Jn(),i=this[0],n=i.getBoundingClientRect(),a=t.body,r=i.clientTop||a.clientTop||0,s=i.clientLeft||a.clientLeft||0,o=i===e?e.scrollY:i.scrollTop,l=i===e?e.scrollX:i.scrollLeft;return{top:n.top+o-r,left:n.left+l-s}}return null},css:function(e,t){const i=Zn();let n;if(1===arguments.length){if("string"!=typeof e){for(n=0;n<this.length;n+=1)for(const t in e)this[n].style[t]=e[t];return this}if(this[0])return i.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(n=0;n<this.length;n+=1)this[n].style[e]=t;return this}return this},each:function(e){return e?(this.forEach(((t,i)=>{e.apply(t,[t,i])})),this):this},html:function(e){if(void 0===e)return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this},text:function(e){if(void 0===e)return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this},is:function(e){const t=Zn(),i=Jn(),n=this[0];let a,r;if(!n||void 0===e)return!1;if("string"==typeof e){if(n.matches)return n.matches(e);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(e);if(n.msMatchesSelector)return n.msMatchesSelector(e);for(a=na(e),r=0;r<a.length;r+=1)if(a[r]===n)return!0;return!1}if(e===i)return n===i;if(e===t)return n===t;if(e.nodeType||e instanceof ea){for(a=e.nodeType?[e]:e,r=0;r<a.length;r+=1)if(a[r]===n)return!0;return!1}return!1},index:function(){let e,t=this[0];if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;const t=this.length;if(e>t-1)return na([]);if(e<0){const i=t+e;return na(i<0?[]:[this[i]])}return na([this[e]])},append:function(...e){let t;const i=Jn();for(let n=0;n<e.length;n+=1){t=e[n];for(let e=0;e<this.length;e+=1)if("string"==typeof t){const n=i.createElement("div");for(n.innerHTML=t;n.firstChild;)this[e].appendChild(n.firstChild)}else if(t instanceof ea)for(let i=0;i<t.length;i+=1)this[e].appendChild(t[i]);else this[e].appendChild(t)}return this},prepend:function(e){const t=Jn();let i,n;for(i=0;i<this.length;i+=1)if("string"==typeof e){const a=t.createElement("div");for(a.innerHTML=e,n=a.childNodes.length-1;n>=0;n-=1)this[i].insertBefore(a.childNodes[n],this[i].childNodes[0])}else if(e instanceof ea)for(n=0;n<e.length;n+=1)this[i].insertBefore(e[n],this[i].childNodes[0]);else this[i].insertBefore(e,this[i].childNodes[0]);return this},next:function(e){return this.length>0?e?this[0].nextElementSibling&&na(this[0].nextElementSibling).is(e)?na([this[0].nextElementSibling]):na([]):this[0].nextElementSibling?na([this[0].nextElementSibling]):na([]):na([])},nextAll:function(e){const t=[];let i=this[0];if(!i)return na([]);for(;i.nextElementSibling;){const n=i.nextElementSibling;e?na(n).is(e)&&t.push(n):t.push(n),i=n}return na(t)},prev:function(e){if(this.length>0){const t=this[0];return e?t.previousElementSibling&&na(t.previousElementSibling).is(e)?na([t.previousElementSibling]):na([]):t.previousElementSibling?na([t.previousElementSibling]):na([])}return na([])},prevAll:function(e){const t=[];let i=this[0];if(!i)return na([]);for(;i.previousElementSibling;){const n=i.previousElementSibling;e?na(n).is(e)&&t.push(n):t.push(n),i=n}return na(t)},parent:function(e){const t=[];for(let i=0;i<this.length;i+=1)null!==this[i].parentNode&&(e?na(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode));return na(t)},parents:function(e){const t=[];for(let i=0;i<this.length;i+=1){let n=this[i].parentNode;for(;n;)e?na(n).is(e)&&t.push(n):t.push(n),n=n.parentNode}return na(t)},closest:function(e){let t=this;return void 0===e?na([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function(e){const t=[];for(let i=0;i<this.length;i+=1){const n=this[i].querySelectorAll(e);for(let e=0;e<n.length;e+=1)t.push(n[e])}return na(t)},children:function(e){const t=[];for(let i=0;i<this.length;i+=1){const n=this[i].children;for(let i=0;i<n.length;i+=1)e&&!na(n[i]).is(e)||t.push(n[i])}return na(t)},filter:function(e){return na(ia(this,e))},remove:function(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}};Object.keys(sa).forEach((e=>{Object.defineProperty(na.fn,e,{value:sa[e],writable:!0})}));var oa=na;function la(e){const t=e;Object.keys(t).forEach((e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}}))}function ca(e,t=0){return setTimeout(e,t)}function da(){return Date.now()}function ua(e,t="x"){const i=Zn();let n,a,r;const s=function(e){const t=Zn();let i;return t.getComputedStyle&&(i=t.getComputedStyle(e,null)),!i&&e.currentStyle&&(i=e.currentStyle),i||(i=e.style),i}(e);return i.WebKitCSSMatrix?(a=s.transform||s.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map((e=>e.replace(",","."))).join(", ")),r=new i.WebKitCSSMatrix("none"===a?"":a)):(r=s.MozTransform||s.OTransform||s.MsTransform||s.msTransform||s.transform||s.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),"x"===t&&(a=i.WebKitCSSMatrix?r.m41:16===n.length?parseFloat(n[12]):parseFloat(n[4])),"y"===t&&(a=i.WebKitCSSMatrix?r.m42:16===n.length?parseFloat(n[13]):parseFloat(n[5])),a||0}function pa(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function ha(...e){const t=Object(e[0]),i=["__proto__","constructor","prototype"];for(let a=1;a<e.length;a+=1){const r=e[a];if(null!=r&&(n=r,!("undefined"!=typeof window&&void 0!==window.HTMLElement?n instanceof HTMLElement:n&&(1===n.nodeType||11===n.nodeType)))){const e=Object.keys(Object(r)).filter((e=>i.indexOf(e)<0));for(let i=0,n=e.length;i<n;i+=1){const n=e[i],a=Object.getOwnPropertyDescriptor(r,n);void 0!==a&&a.enumerable&&(pa(t[n])&&pa(r[n])?r[n].__swiper__?t[n]=r[n]:ha(t[n],r[n]):!pa(t[n])&&pa(r[n])?(t[n]={},r[n].__swiper__?t[n]=r[n]:ha(t[n],r[n])):t[n]=r[n])}}}var n;return t}function fa(e,t,i){e.style.setProperty(t,i)}function ma({swiper:e,targetPosition:t,side:i}){const n=Zn(),a=-e.translate;let r,s=null;const o=e.params.speed;e.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(e.cssModeFrameID);const l=t>a?"next":"prev",c=(e,t)=>"next"===l&&e>=t||"prev"===l&&e<=t,d=()=>{r=(new Date).getTime(),null===s&&(s=r);const l=Math.max(Math.min((r-s)/o,1),0),u=.5-Math.cos(l*Math.PI)/2;let p=a+u*(t-a);if(c(p,t)&&(p=t),e.wrapperEl.scrollTo({[i]:p}),c(p,t))return e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout((()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[i]:p})})),void n.cancelAnimationFrame(e.cssModeFrameID);e.cssModeFrameID=n.requestAnimationFrame(d)};d()}let ga,va,ba;function ya(){return ga||(ga=function(){const e=Zn(),t=Jn();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let t=!1;try{const i=Object.defineProperty({},"passive",{get(){t=!0}});e.addEventListener("testPassiveListener",null,i)}catch(e){}return t}(),gestures:"ongesturestart"in e}}()),ga}function xa(e={}){return va||(va=function({userAgent:e}={}){const t=ya(),i=Zn(),n=i.navigator.platform,a=e||i.navigator.userAgent,r={ios:!1,android:!1},s=i.screen.width,o=i.screen.height,l=a.match(/(Android);?[\s\/]+([\d.]+)?/);let c=a.match(/(iPad).*OS\s([\d_]+)/);const d=a.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p="Win32"===n;let h="MacIntel"===n;return!c&&h&&t.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${s}x${o}`)>=0&&(c=a.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),h=!1),l&&!p&&(r.os="android",r.android=!0),(c||u||d)&&(r.os="ios",r.ios=!0),r}(e)),va}function wa(){return ba||(ba=function(){const e=Zn();return{isSafari:function(){const t=e.navigator.userAgent.toLowerCase();return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),ba}var ka={updateSize:function(){const e=this;let t,i;const n=e.$el;t=void 0!==e.params.width&&null!==e.params.width?e.params.width:n[0].clientWidth,i=void 0!==e.params.height&&null!==e.params.height?e.params.height:n[0].clientHeight,0===t&&e.isHorizontal()||0===i&&e.isVertical()||(t=t-parseInt(n.css("padding-left")||0,10)-parseInt(n.css("padding-right")||0,10),i=i-parseInt(n.css("padding-top")||0,10)-parseInt(n.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(i)&&(i=0),Object.assign(e,{width:t,height:i,size:e.isHorizontal()?t:i}))},updateSlides:function(){const e=this;function t(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function i(e,i){return parseFloat(e.getPropertyValue(t(i))||0)}const n=e.params,{$wrapperEl:a,size:r,rtlTranslate:s,wrongRTL:o}=e,l=e.virtual&&n.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=a.children(`.${e.params.slideClass}`),u=l?e.virtual.slides.length:d.length;let p=[];const h=[],f=[];let m=n.slidesOffsetBefore;"function"==typeof m&&(m=n.slidesOffsetBefore.call(e));let g=n.slidesOffsetAfter;"function"==typeof g&&(g=n.slidesOffsetAfter.call(e));const v=e.snapGrid.length,b=e.slidesGrid.length;let y=n.spaceBetween,x=-m,w=0,k=0;if(void 0===r)return;"string"==typeof y&&y.indexOf("%")>=0&&(y=parseFloat(y.replace("%",""))/100*r),e.virtualSize=-y,s?d.css({marginLeft:"",marginBottom:"",marginTop:""}):d.css({marginRight:"",marginBottom:"",marginTop:""}),n.centeredSlides&&n.cssMode&&(fa(e.wrapperEl,"--swiper-centered-offset-before",""),fa(e.wrapperEl,"--swiper-centered-offset-after",""));const E=n.grid&&n.grid.rows>1&&e.grid;let I;E&&e.grid.initSlides(u);const T="auto"===n.slidesPerView&&n.breakpoints&&Object.keys(n.breakpoints).filter((e=>void 0!==n.breakpoints[e].slidesPerView)).length>0;for(let a=0;a<u;a+=1){I=0;const s=d.eq(a);if(E&&e.grid.updateSlide(a,s,u,t),"none"!==s.css("display")){if("auto"===n.slidesPerView){T&&(d[a].style[t("width")]="");const r=getComputedStyle(s[0]),o=s[0].style.transform,l=s[0].style.webkitTransform;if(o&&(s[0].style.transform="none"),l&&(s[0].style.webkitTransform="none"),n.roundLengths)I=e.isHorizontal()?s.outerWidth(!0):s.outerHeight(!0);else{const e=i(r,"width"),t=i(r,"padding-left"),n=i(r,"padding-right"),a=i(r,"margin-left"),o=i(r,"margin-right"),l=r.getPropertyValue("box-sizing");if(l&&"border-box"===l)I=e+a+o;else{const{clientWidth:i,offsetWidth:r}=s[0];I=e+t+n+a+o+(r-i)}}o&&(s[0].style.transform=o),l&&(s[0].style.webkitTransform=l),n.roundLengths&&(I=Math.floor(I))}else I=(r-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(I=Math.floor(I)),d[a]&&(d[a].style[t("width")]=`${I}px`);d[a]&&(d[a].swiperSlideSize=I),f.push(I),n.centeredSlides?(x=x+I/2+w/2+y,0===w&&0!==a&&(x=x-r/2-y),0===a&&(x=x-r/2-y),Math.abs(x)<.001&&(x=0),n.roundLengths&&(x=Math.floor(x)),k%n.slidesPerGroup==0&&p.push(x),h.push(x)):(n.roundLengths&&(x=Math.floor(x)),(k-Math.min(e.params.slidesPerGroupSkip,k))%e.params.slidesPerGroup==0&&p.push(x),h.push(x),x=x+I+y),e.virtualSize+=I+y,w=I,k+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,s&&o&&("slide"===n.effect||"coverflow"===n.effect)&&a.css({width:`${e.virtualSize+n.spaceBetween}px`}),n.setWrapperSize&&a.css({[t("width")]:`${e.virtualSize+n.spaceBetween}px`}),E&&e.grid.updateWrapperSize(I,p,t),!n.centeredSlides){const t=[];for(let i=0;i<p.length;i+=1){let a=p[i];n.roundLengths&&(a=Math.floor(a)),p[i]<=e.virtualSize-r&&t.push(a)}p=t,Math.floor(e.virtualSize-r)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-r)}if(0===p.length&&(p=[0]),0!==n.spaceBetween){const i=e.isHorizontal()&&s?"marginLeft":t("marginRight");d.filter(((e,t)=>!n.cssMode||t!==d.length-1)).css({[i]:`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;f.forEach((t=>{e+=t+(n.spaceBetween?n.spaceBetween:0)})),e-=n.spaceBetween;const t=e-r;p=p.map((e=>e<0?-m:e>t?t+g:e))}if(n.centerInsufficientSlides){let e=0;if(f.forEach((t=>{e+=t+(n.spaceBetween?n.spaceBetween:0)})),e-=n.spaceBetween,e<r){const t=(r-e)/2;p.forEach(((e,i)=>{p[i]=e-t})),h.forEach(((e,i)=>{h[i]=e+t}))}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:h,slidesSizesGrid:f}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){fa(e.wrapperEl,"--swiper-centered-offset-before",-p[0]+"px"),fa(e.wrapperEl,"--swiper-centered-offset-after",e.size/2-f[f.length-1]/2+"px");const t=-e.snapGrid[0],i=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map((e=>e+t)),e.slidesGrid=e.slidesGrid.map((e=>e+i))}if(u!==c&&e.emit("slidesLengthChange"),p.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),h.length!==b&&e.emit("slidesGridLengthChange"),n.watchSlidesProgress&&e.updateSlidesOffset(),!(l||n.cssMode||"slide"!==n.effect&&"fade"!==n.effect)){const t=`${n.containerModifierClass}backface-hidden`,i=e.$el.hasClass(t);u<=n.maxBackfaceHiddenSlides?i||e.$el.addClass(t):i&&e.$el.removeClass(t)}},updateAutoHeight:function(e){const t=this,i=[],n=t.virtual&&t.params.virtual.enabled;let a,r=0;"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed);const s=e=>n?t.slides.filter((t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e))[0]:t.slides.eq(e)[0];if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||oa([])).each((e=>{i.push(e)}));else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){const e=t.activeIndex+a;if(e>t.slides.length&&!n)break;i.push(s(e))}else i.push(s(t.activeIndex));for(a=0;a<i.length;a+=1)if(void 0!==i[a]){const e=i[a].offsetHeight;r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function(){const e=this,t=e.slides;for(let i=0;i<t.length;i+=1)t[i].swiperSlideOffset=e.isHorizontal()?t[i].offsetLeft:t[i].offsetTop},updateSlidesProgress:function(e=this&&this.translate||0){const t=this,i=t.params,{slides:n,rtlTranslate:a,snapGrid:r}=t;if(0===n.length)return;void 0===n[0].swiperSlideOffset&&t.updateSlidesOffset();let s=-e;a&&(s=e),n.removeClass(i.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let e=0;e<n.length;e+=1){const o=n[e];let l=o.swiperSlideOffset;i.cssMode&&i.centeredSlides&&(l-=n[0].swiperSlideOffset);const c=(s+(i.centeredSlides?t.minTranslate():0)-l)/(o.swiperSlideSize+i.spaceBetween),d=(s-r[0]+(i.centeredSlides?t.minTranslate():0)-l)/(o.swiperSlideSize+i.spaceBetween),u=-(s-l),p=u+t.slidesSizesGrid[e];(u>=0&&u<t.size-1||p>1&&p<=t.size||u<=0&&p>=t.size)&&(t.visibleSlides.push(o),t.visibleSlidesIndexes.push(e),n.eq(e).addClass(i.slideVisibleClass)),o.progress=a?-c:c,o.originalProgress=a?-d:d}t.visibleSlides=oa(t.visibleSlides)},updateProgress:function(e){const t=this;if(void 0===e){const i=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*i||0}const i=t.params,n=t.maxTranslate()-t.minTranslate();let{progress:a,isBeginning:r,isEnd:s}=t;const o=r,l=s;0===n?(a=0,r=!0,s=!0):(a=(e-t.minTranslate())/n,r=a<=0,s=a>=1),Object.assign(t,{progress:a,isBeginning:r,isEnd:s}),(i.watchSlidesProgress||i.centeredSlides&&i.autoHeight)&&t.updateSlidesProgress(e),r&&!o&&t.emit("reachBeginning toEdge"),s&&!l&&t.emit("reachEnd toEdge"),(o&&!r||l&&!s)&&t.emit("fromEdge"),t.emit("progress",a)},updateSlidesClasses:function(){const e=this,{slides:t,params:i,$wrapperEl:n,activeIndex:a,realIndex:r}=e,s=e.virtual&&i.virtual.enabled;let o;t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`),o=s?e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${a}"]`):t.eq(a),o.addClass(i.slideActiveClass),i.loop&&(o.hasClass(i.slideDuplicateClass)?n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass):n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass));let l=o.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);i.loop&&0===l.length&&(l=t.eq(0),l.addClass(i.slideNextClass));let c=o.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);i.loop&&0===c.length&&(c=t.eq(-1),c.addClass(i.slidePrevClass)),i.loop&&(l.hasClass(i.slideDuplicateClass)?n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass):n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass),c.hasClass(i.slideDuplicateClass)?n.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass):n.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function(e){const t=this,i=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:n,snapGrid:a,params:r,activeIndex:s,realIndex:o,snapIndex:l}=t;let c,d=e;if(void 0===d){for(let e=0;e<n.length;e+=1)void 0!==n[e+1]?i>=n[e]&&i<n[e+1]-(n[e+1]-n[e])/2?d=e:i>=n[e]&&i<n[e+1]&&(d=e+1):i>=n[e]&&(d=e);r.normalizeSlideIndex&&(d<0||void 0===d)&&(d=0)}if(a.indexOf(i)>=0)c=a.indexOf(i);else{const e=Math.min(r.slidesPerGroupSkip,d);c=e+Math.floor((d-e)/r.slidesPerGroup)}if(c>=a.length&&(c=a.length-1),d===s)return void(c!==l&&(t.snapIndex=c,t.emit("snapIndexChange")));const u=parseInt(t.slides.eq(d).attr("data-swiper-slide-index")||d,10);Object.assign(t,{snapIndex:c,realIndex:u,previousIndex:s,activeIndex:d}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),o!==u&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function(e){const t=this,i=t.params,n=oa(e).closest(`.${i.slideClass}`)[0];let a,r=!1;if(n)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===n){r=!0,a=e;break}if(!n||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0);t.clickedSlide=n,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(oa(n).attr("data-swiper-slide-index"),10):t.clickedIndex=a,i.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}};var Ea={getTranslate:function(e=(this.isHorizontal()?"x":"y")){const{params:t,rtlTranslate:i,translate:n,$wrapperEl:a}=this;if(t.virtualTranslate)return i?-n:n;if(t.cssMode)return n;let r=ua(a[0],e);return i&&(r=-r),r||0},setTranslate:function(e,t){const i=this,{rtlTranslate:n,params:a,$wrapperEl:r,wrapperEl:s,progress:o}=i;let l,c=0,d=0;i.isHorizontal()?c=n?-e:e:d=e,a.roundLengths&&(c=Math.floor(c),d=Math.floor(d)),a.cssMode?s[i.isHorizontal()?"scrollLeft":"scrollTop"]=i.isHorizontal()?-c:-d:a.virtualTranslate||r.transform(`translate3d(${c}px, ${d}px, 0px)`),i.previousTranslate=i.translate,i.translate=i.isHorizontal()?c:d;const u=i.maxTranslate()-i.minTranslate();l=0===u?0:(e-i.minTranslate())/u,l!==o&&i.updateProgress(e),i.emit("setTranslate",i.translate,t)},minTranslate:function(){return-this.snapGrid[0]},maxTranslate:function(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function(e=0,t=this.params.speed,i=!0,n=!0,a){const r=this,{params:s,wrapperEl:o}=r;if(r.animating&&s.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(d=n&&e>l?l:n&&e<c?c:e,r.updateProgress(d),s.cssMode){const e=r.isHorizontal();if(0===t)o[e?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return ma({swiper:r,targetPosition:-d,side:e?"left":"top"}),!0;o.scrollTo({[e?"left":"top"]:-d,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(d),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),i&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,i&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}};function Ia({swiper:e,runCallbacks:t,direction:i,step:n}){const{activeIndex:a,previousIndex:r}=e;let s=i;if(s||(s=a>r?"next":a<r?"prev":"reset"),e.emit(`transition${n}`),t&&a!==r){if("reset"===s)return void e.emit(`slideResetTransition${n}`);e.emit(`slideChangeTransition${n}`),"next"===s?e.emit(`slideNextTransition${n}`):e.emit(`slidePrevTransition${n}`)}}var Ta={slideTo:function(e=0,t=this.params.speed,i=!0,n,a){if("number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const r=this;let s=e;s<0&&(s=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:h,enabled:f}=r;if(r.animating&&o.preventInteractionOnTransition||!f&&!n&&!a)return!1;const m=Math.min(r.params.slidesPerGroupSkip,s);let g=m+Math.floor((s-m)/r.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const v=-l[g];if(o.normalizeSlideIndex)for(let e=0;e<c.length;e+=1){const t=-Math.floor(100*v),i=Math.floor(100*c[e]),n=Math.floor(100*c[e+1]);void 0!==c[e+1]?t>=i&&t<n-(n-i)/2?s=e:t>=i&&t<n&&(s=e+1):t>=i&&(s=e)}if(r.initialized&&s!==u){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1;if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(u||0)!==s)return!1}let b;if(s!==(d||0)&&i&&r.emit("beforeSlideChangeStart"),r.updateProgress(v),b=s>u?"next":s<u?"prev":"reset",p&&-v===r.translate||!p&&v===r.translate)return r.updateActiveIndex(s),o.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==o.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(i,b),r.transitionEnd(i,b)),!1;if(o.cssMode){const e=r.isHorizontal(),i=p?v:-v;if(0===t){const t=r.virtual&&r.params.virtual.enabled;t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=i,t&&requestAnimationFrame((()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1}))}else{if(!r.support.smoothScroll)return ma({swiper:r,targetPosition:i,side:e?"left":"top"}),!0;h.scrollTo({[e?"left":"top"]:i,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(s),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,n),r.transitionStart(i,b),0===t?r.transitionEnd(i,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(i,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function(e=0,t=this.params.speed,i=!0,n){if("string"==typeof e){const t=parseInt(e,10);if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=t}const a=this;let r=e;return a.params.loop&&(r+=a.loopedSlides),a.slideTo(r,t,i,n)},slideNext:function(e=this.params.speed,t=!0,i){const n=this,{animating:a,enabled:r,params:s}=n;if(!r)return n;let o=s.slidesPerGroup;"auto"===s.slidesPerView&&1===s.slidesPerGroup&&s.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<s.slidesPerGroupSkip?1:o;if(s.loop){if(a&&s.loopPreventsSlide)return!1;n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft}return s.rewind&&n.isEnd?n.slideTo(0,e,t,i):n.slideTo(n.activeIndex+l,e,t,i)},slidePrev:function(e=this.params.speed,t=!0,i){const n=this,{params:a,animating:r,snapGrid:s,slidesGrid:o,rtlTranslate:l,enabled:c}=n;if(!c)return n;if(a.loop){if(r&&a.loopPreventsSlide)return!1;n.loopFix(),n._clientLeft=n.$wrapperEl[0].clientLeft}function d(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const u=d(l?n.translate:-n.translate),p=s.map((e=>d(e)));let h=s[p.indexOf(u)-1];if(void 0===h&&a.cssMode){let e;s.forEach(((t,i)=>{u>=t&&(e=i)})),void 0!==e&&(h=s[e>0?e-1:e])}let f=0;if(void 0!==h&&(f=o.indexOf(h),f<0&&(f=n.activeIndex-1),"auto"===a.slidesPerView&&1===a.slidesPerGroup&&a.slidesPerGroupAuto&&(f=f-n.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),a.rewind&&n.isBeginning){const a=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(a,e,t,i)}return n.slideTo(f,e,t,i)},slideReset:function(e=this.params.speed,t=!0,i){return this.slideTo(this.activeIndex,e,t,i)},slideToClosest:function(e=this.params.speed,t=!0,i,n=.5){const a=this;let r=a.activeIndex;const s=Math.min(a.params.slidesPerGroupSkip,r),o=s+Math.floor((r-s)/a.params.slidesPerGroup),l=a.rtlTranslate?a.translate:-a.translate;if(l>=a.snapGrid[o]){const e=a.snapGrid[o];l-e>(a.snapGrid[o+1]-e)*n&&(r+=a.params.slidesPerGroup)}else{const e=a.snapGrid[o-1];l-e<=(a.snapGrid[o]-e)*n&&(r-=a.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,a.slidesGrid.length-1),a.slideTo(r,e,t,i)},slideToClickedSlide:function(){const e=this,{params:t,$wrapperEl:i}=e,n="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView;let a,r=e.clickedIndex;if(t.loop){if(e.animating)return;a=parseInt(oa(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-n/2||r>e.slides.length-e.loopedSlides+n/2?(e.loopFix(),r=i.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),ca((()=>{e.slideTo(r)}))):e.slideTo(r):r>e.slides.length-n?(e.loopFix(),r=i.children(`.${t.slideClass}[data-swiper-slide-index="${a}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),ca((()=>{e.slideTo(r)}))):e.slideTo(r)}else e.slideTo(r)}};function Ca(e){const t=this,i=Jn(),n=Zn(),a=t.touchEventsData,{params:r,touches:s,enabled:o}=t;if(!o)return;if(t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=e;l.originalEvent&&(l=l.originalEvent);let c=oa(l.target);if("wrapper"===r.touchEventsTarget&&!c.closest(t.wrapperEl).length)return;if(a.isTouchEvent="touchstart"===l.type,!a.isTouchEvent&&"which"in l&&3===l.which)return;if(!a.isTouchEvent&&"button"in l&&l.button>0)return;if(a.isTouched&&a.isMoved)return;const d=!!r.noSwipingClass&&""!==r.noSwipingClass,u=e.composedPath?e.composedPath():e.path;d&&l.target&&l.target.shadowRoot&&u&&(c=oa(u[0]));const p=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,h=!(!l.target||!l.target.shadowRoot);if(r.noSwiping&&(h?function(e,t=this){return function t(i){if(!i||i===Jn()||i===Zn())return null;i.assignedSlot&&(i=i.assignedSlot);const n=i.closest(e);return n||i.getRootNode?n||t(i.getRootNode().host):null}(t)}(p,c[0]):c.closest(p)[0]))return void(t.allowClick=!0);if(r.swipeHandler&&!c.closest(r.swipeHandler)[0])return;s.currentX="touchstart"===l.type?l.targetTouches[0].pageX:l.pageX,s.currentY="touchstart"===l.type?l.targetTouches[0].pageY:l.pageY;const f=s.currentX,m=s.currentY,g=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,v=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold;if(g&&(f<=v||f>=n.innerWidth-v)){if("prevent"!==g)return;e.preventDefault()}if(Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),s.startX=f,s.startY=m,a.touchStartTime=da(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1),"touchstart"!==l.type){let e=!0;c.is(a.focusableElements)&&(e=!1,"SELECT"===c[0].nodeName&&(a.isTouched=!1)),i.activeElement&&oa(i.activeElement).is(a.focusableElements)&&i.activeElement!==c[0]&&i.activeElement.blur();const n=e&&t.allowTouchMove&&r.touchStartPreventDefault;!r.touchStartForcePreventDefault&&!n||c[0].isContentEditable||l.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",l)}function Sa(e){const t=Jn(),i=this,n=i.touchEventsData,{params:a,touches:r,rtlTranslate:s,enabled:o}=i;if(!o)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),!n.isTouched)return void(n.startMoving&&n.isScrolling&&i.emit("touchMoveOpposite",l));if(n.isTouchEvent&&"touchmove"!==l.type)return;const c="touchmove"===l.type&&l.targetTouches&&(l.targetTouches[0]||l.changedTouches[0]),d="touchmove"===l.type?c.pageX:l.pageX,u="touchmove"===l.type?c.pageY:l.pageY;if(l.preventedByNestedSwiper)return r.startX=d,void(r.startY=u);if(!i.allowTouchMove)return oa(l.target).is(n.focusableElements)||(i.allowClick=!1),void(n.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),n.touchStartTime=da()));if(n.isTouchEvent&&a.touchReleaseOnEdges&&!a.loop)if(i.isVertical()){if(u<r.startY&&i.translate<=i.maxTranslate()||u>r.startY&&i.translate>=i.minTranslate())return n.isTouched=!1,void(n.isMoved=!1)}else if(d<r.startX&&i.translate<=i.maxTranslate()||d>r.startX&&i.translate>=i.minTranslate())return;if(n.isTouchEvent&&t.activeElement&&l.target===t.activeElement&&oa(l.target).is(n.focusableElements))return n.isMoved=!0,void(i.allowClick=!1);if(n.allowTouchCallbacks&&i.emit("touchMove",l),l.targetTouches&&l.targetTouches.length>1)return;r.currentX=d,r.currentY=u;const p=r.currentX-r.startX,h=r.currentY-r.startY;if(i.params.threshold&&Math.sqrt(p**2+h**2)<i.params.threshold)return;if(void 0===n.isScrolling){let e;i.isHorizontal()&&r.currentY===r.startY||i.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:p*p+h*h>=25&&(e=180*Math.atan2(Math.abs(h),Math.abs(p))/Math.PI,n.isScrolling=i.isHorizontal()?e>a.touchAngle:90-e>a.touchAngle)}if(n.isScrolling&&i.emit("touchMoveOpposite",l),void 0===n.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(n.startMoving=!0)),n.isScrolling)return void(n.isTouched=!1);if(!n.startMoving)return;i.allowClick=!1,!a.cssMode&&l.cancelable&&l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation(),n.isMoved||(a.loop&&!a.cssMode&&i.loopFix(),n.startTranslate=i.getTranslate(),i.setTransition(0),i.animating&&i.$wrapperEl.trigger("webkitTransitionEnd transitionend"),n.allowMomentumBounce=!1,!a.grabCursor||!0!==i.allowSlideNext&&!0!==i.allowSlidePrev||i.setGrabCursor(!0),i.emit("sliderFirstMove",l)),i.emit("sliderMove",l),n.isMoved=!0;let f=i.isHorizontal()?p:h;r.diff=f,f*=a.touchRatio,s&&(f=-f),i.swipeDirection=f>0?"prev":"next",n.currentTranslate=f+n.startTranslate;let m=!0,g=a.resistanceRatio;if(a.touchReleaseOnEdges&&(g=0),f>0&&n.currentTranslate>i.minTranslate()?(m=!1,a.resistance&&(n.currentTranslate=i.minTranslate()-1+(-i.minTranslate()+n.startTranslate+f)**g)):f<0&&n.currentTranslate<i.maxTranslate()&&(m=!1,a.resistance&&(n.currentTranslate=i.maxTranslate()+1-(i.maxTranslate()-n.startTranslate-f)**g)),m&&(l.preventedByNestedSwiper=!0),!i.allowSlideNext&&"next"===i.swipeDirection&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!i.allowSlidePrev&&"prev"===i.swipeDirection&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),i.allowSlidePrev||i.allowSlideNext||(n.currentTranslate=n.startTranslate),a.threshold>0){if(!(Math.abs(f)>a.threshold||n.allowThresholdMove))return void(n.currentTranslate=n.startTranslate);if(!n.allowThresholdMove)return n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,void(r.diff=i.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}a.followFinger&&!a.cssMode&&((a.freeMode&&a.freeMode.enabled&&i.freeMode||a.watchSlidesProgress)&&(i.updateActiveIndex(),i.updateSlidesClasses()),i.params.freeMode&&a.freeMode.enabled&&i.freeMode&&i.freeMode.onTouchMove(),i.updateProgress(n.currentTranslate),i.setTranslate(n.currentTranslate))}function _a(e){const t=this,i=t.touchEventsData,{params:n,touches:a,rtlTranslate:r,slidesGrid:s,enabled:o}=t;if(!o)return;let l=e;if(l.originalEvent&&(l=l.originalEvent),i.allowTouchCallbacks&&t.emit("touchEnd",l),i.allowTouchCallbacks=!1,!i.isTouched)return i.isMoved&&n.grabCursor&&t.setGrabCursor(!1),i.isMoved=!1,void(i.startMoving=!1);n.grabCursor&&i.isMoved&&i.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1);const c=da(),d=c-i.touchStartTime;if(t.allowClick){const e=l.path||l.composedPath&&l.composedPath();t.updateClickedSlide(e&&e[0]||l.target),t.emit("tap click",l),d<300&&c-i.lastClickTime<300&&t.emit("doubleTap doubleClick",l)}if(i.lastClickTime=da(),ca((()=>{t.destroyed||(t.allowClick=!0)})),!i.isTouched||!i.isMoved||!t.swipeDirection||0===a.diff||i.currentTranslate===i.startTranslate)return i.isTouched=!1,i.isMoved=!1,void(i.startMoving=!1);let u;if(i.isTouched=!1,i.isMoved=!1,i.startMoving=!1,u=n.followFinger?r?t.translate:-t.translate:-i.currentTranslate,n.cssMode)return;if(t.params.freeMode&&n.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:u});let p=0,h=t.slidesSizesGrid[0];for(let e=0;e<s.length;e+=e<n.slidesPerGroupSkip?1:n.slidesPerGroup){const t=e<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;void 0!==s[e+t]?u>=s[e]&&u<s[e+t]&&(p=e,h=s[e+t]-s[e]):u>=s[e]&&(p=e,h=s[s.length-1]-s[s.length-2])}let f=null,m=null;n.rewind&&(t.isBeginning?m=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const g=(u-s[p])/h,v=p<n.slidesPerGroupSkip-1?1:n.slidesPerGroup;if(d>n.longSwipesMs){if(!n.longSwipes)return void t.slideTo(t.activeIndex);"next"===t.swipeDirection&&(g>=n.longSwipesRatio?t.slideTo(n.rewind&&t.isEnd?f:p+v):t.slideTo(p)),"prev"===t.swipeDirection&&(g>1-n.longSwipesRatio?t.slideTo(p+v):null!==m&&g<0&&Math.abs(g)>n.longSwipesRatio?t.slideTo(m):t.slideTo(p))}else{if(!n.shortSwipes)return void t.slideTo(t.activeIndex);t.navigation&&(l.target===t.navigation.nextEl||l.target===t.navigation.prevEl)?l.target===t.navigation.nextEl?t.slideTo(p+v):t.slideTo(p):("next"===t.swipeDirection&&t.slideTo(null!==f?f:p+v),"prev"===t.swipeDirection&&t.slideTo(null!==m?m:p))}}function Na(){const e=this,{params:t,el:i}=e;if(i&&0===i.offsetWidth)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:a,snapGrid:r}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=a,e.allowSlideNext=n,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function La(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Aa(){const e=this,{wrapperEl:t,rtlTranslate:i,enabled:n}=e;if(!n)return;let a;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();const r=e.maxTranslate()-e.minTranslate();a=0===r?0:(e.translate-e.minTranslate())/r,a!==e.progress&&e.updateProgress(i?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}let Oa=!1;function Ma(){}const Ra=(e,t)=>{const i=Jn(),{params:n,touchEvents:a,el:r,wrapperEl:s,device:o,support:l}=e,c=!!n.nested,d="on"===t?"addEventListener":"removeEventListener",u=t;if(l.touch){const t=!("touchstart"!==a.start||!l.passiveListener||!n.passiveListeners)&&{passive:!0,capture:!1};r[d](a.start,e.onTouchStart,t),r[d](a.move,e.onTouchMove,l.passiveListener?{passive:!1,capture:c}:c),r[d](a.end,e.onTouchEnd,t),a.cancel&&r[d](a.cancel,e.onTouchEnd,t)}else r[d](a.start,e.onTouchStart,!1),i[d](a.move,e.onTouchMove,c),i[d](a.end,e.onTouchEnd,!1);(n.preventClicks||n.preventClicksPropagation)&&r[d]("click",e.onClick,!0),n.cssMode&&s[d]("scroll",e.onScroll),n.updateOnWindowResize?e[u](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Na,!0):e[u]("observerUpdate",Na,!0)};const Da=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;var Pa={loadImage:function(e,t,i,n,a,r){const s=Zn();let o;function l(){r&&r()}oa(e).parent("picture")[0]||e.complete&&a?l():t?(o=new s.Image,o.onload=l,o.onerror=l,n&&(o.sizes=n),i&&(o.srcset=i),t&&(o.src=t)):l()},preloadImages:function(){const e=this;function t(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img");for(let i=0;i<e.imagesToLoad.length;i+=1){const n=e.imagesToLoad[i];e.loadImage(n,n.currentSrc||n.getAttribute("src"),n.srcset||n.getAttribute("srcset"),n.sizes||n.getAttribute("sizes"),!0,t)}}};var za={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1};function Ba(e,t){return function(i={}){const n=Object.keys(i)[0],a=i[n];"object"==typeof a&&null!==a?(["navigation","pagination","scrollbar"].indexOf(n)>=0&&!0===e[n]&&(e[n]={auto:!0}),n in e&&"enabled"in a?(!0===e[n]&&(e[n]={enabled:!0}),"object"!=typeof e[n]||"enabled"in e[n]||(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),ha(t,i)):ha(t,i)):ha(t,i)}}const Wa={eventsEmitter:{on(e,t,i){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof t)return n;const a=i?"unshift":"push";return e.split(" ").forEach((e=>{n.eventsListeners[e]||(n.eventsListeners[e]=[]),n.eventsListeners[e][a](t)})),n},once(e,t,i){const n=this;if(!n.eventsListeners||n.destroyed)return n;if("function"!=typeof t)return n;function a(...i){n.off(e,a),a.__emitterProxy&&delete a.__emitterProxy,t.apply(n,i)}return a.__emitterProxy=t,n.on(e,a,i)},onAny(e,t){const i=this;if(!i.eventsListeners||i.destroyed)return i;if("function"!=typeof e)return i;const n=t?"unshift":"push";return i.eventsAnyListeners.indexOf(e)<0&&i.eventsAnyListeners[n](e),i},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsAnyListeners)return t;const i=t.eventsAnyListeners.indexOf(e);return i>=0&&t.eventsAnyListeners.splice(i,1),t},off(e,t){const i=this;return!i.eventsListeners||i.destroyed?i:i.eventsListeners?(e.split(" ").forEach((e=>{void 0===t?i.eventsListeners[e]=[]:i.eventsListeners[e]&&i.eventsListeners[e].forEach(((n,a)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&i.eventsListeners[e].splice(a,1)}))})),i):i},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed)return t;if(!t.eventsListeners)return t;let i,n,a;"string"==typeof e[0]||Array.isArray(e[0])?(i=e[0],n=e.slice(1,e.length),a=t):(i=e[0].events,n=e[0].data,a=e[0].context||t),n.unshift(a);return(Array.isArray(i)?i:i.split(" ")).forEach((e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach((t=>{t.apply(a,[e,...n])})),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach((e=>{e.apply(a,n)}))})),t}},update:ka,translate:Ea,transition:{setTransition:function(e,t){const i=this;i.params.cssMode||i.$wrapperEl.transition(e),i.emit("setTransition",e,t)},transitionStart:function(e=!0,t){const i=this,{params:n}=i;n.cssMode||(n.autoHeight&&i.updateAutoHeight(),Ia({swiper:i,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function(e=!0,t){const i=this,{params:n}=i;i.animating=!1,n.cssMode||(i.setTransition(0),Ia({swiper:i,runCallbacks:e,direction:t,step:"End"}))}},slide:Ta,loop:{loopCreate:function(){const e=this,t=Jn(),{params:i,$wrapperEl:n}=e,a=n.children().length>0?oa(n.children()[0].parentNode):n;a.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();let r=a.children(`.${i.slideClass}`);if(i.loopFillGroupWithBlank){const e=i.slidesPerGroup-r.length%i.slidesPerGroup;if(e!==i.slidesPerGroup){for(let n=0;n<e;n+=1){const e=oa(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);a.append(e)}r=a.children(`.${i.slideClass}`)}}"auto"!==i.slidesPerView||i.loopedSlides||(i.loopedSlides=r.length),e.loopedSlides=Math.ceil(parseFloat(i.loopedSlides||i.slidesPerView,10)),e.loopedSlides+=i.loopAdditionalSlides,e.loopedSlides>r.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=r.length);const s=[],o=[];r.each(((e,t)=>{oa(e).attr("data-swiper-slide-index",t)}));for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/r.length)*r.length;o.push(r.eq(e)[0]),s.unshift(r.eq(r.length-e-1)[0])}for(let e=0;e<o.length;e+=1)a.append(oa(o[e].cloneNode(!0)).addClass(i.slideDuplicateClass));for(let e=s.length-1;e>=0;e-=1)a.prepend(oa(s[e].cloneNode(!0)).addClass(i.slideDuplicateClass))},loopFix:function(){const e=this;e.emit("beforeLoopFix");const{activeIndex:t,slides:i,loopedSlides:n,allowSlidePrev:a,allowSlideNext:r,snapGrid:s,rtlTranslate:o}=e;let l;e.allowSlidePrev=!0,e.allowSlideNext=!0;const c=-s[t]-e.getTranslate();if(t<n){l=i.length-3*n+t,l+=n;e.slideTo(l,0,!1,!0)&&0!==c&&e.setTranslate((o?-e.translate:e.translate)-c)}else if(t>=i.length-n){l=-i.length+t+n,l+=n;e.slideTo(l,0,!1,!0)&&0!==c&&e.setTranslate((o?-e.translate:e.translate)-c)}e.allowSlidePrev=a,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function(){const{$wrapperEl:e,params:t,slides:i}=this;e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),i.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function(e){const t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const i="container"===t.params.touchEventsTarget?t.el:t.wrapperEl;i.style.cursor="move",i.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function(){const e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e["container"===e.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function(){const e=this,t=Jn(),{params:i,support:n}=e;e.onTouchStart=Ca.bind(e),e.onTouchMove=Sa.bind(e),e.onTouchEnd=_a.bind(e),i.cssMode&&(e.onScroll=Aa.bind(e)),e.onClick=La.bind(e),n.touch&&!Oa&&(t.addEventListener("touchstart",Ma),Oa=!0),Ra(e,"on")},detachEvents:function(){Ra(this,"off")}},breakpoints:{setBreakpoint:function(){const e=this,{activeIndex:t,initialized:i,loopedSlides:n=0,params:a,$el:r}=e,s=a.breakpoints;if(!s||s&&0===Object.keys(s).length)return;const o=e.getBreakpoint(s,e.params.breakpointsBase,e.el);if(!o||e.currentBreakpoint===o)return;const l=(o in s?s[o]:void 0)||e.originalParams,c=Da(e,a),d=Da(e,l),u=a.enabled;c&&!d?(r.removeClass(`${a.containerModifierClass}grid ${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!c&&d&&(r.addClass(`${a.containerModifierClass}grid`),(l.grid.fill&&"column"===l.grid.fill||!l.grid.fill&&"column"===a.grid.fill)&&r.addClass(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach((t=>{const i=a[t]&&a[t].enabled,n=l[t]&&l[t].enabled;i&&!n&&e[t].disable(),!i&&n&&e[t].enable()}));const p=l.direction&&l.direction!==a.direction,h=a.loop&&(l.slidesPerView!==a.slidesPerView||p);p&&i&&e.changeDirection(),ha(e.params,l);const f=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),u&&!f?e.disable():!u&&f&&e.enable(),e.currentBreakpoint=o,e.emit("_beforeBreakpoint",l),h&&i&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-n+e.loopedSlides,0,!1)),e.emit("breakpoint",l)},getBreakpoint:function(e,t="window",i){if(!e||"container"===t&&!i)return;let n=!1;const a=Zn(),r="window"===t?a.innerHeight:i.clientHeight,s=Object.keys(e).map((e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1));return{value:r*t,point:e}}return{value:e,point:e}}));s.sort(((e,t)=>parseInt(e.value,10)-parseInt(t.value,10)));for(let e=0;e<s.length;e+=1){const{point:r,value:o}=s[e];"window"===t?a.matchMedia(`(min-width: ${o}px)`).matches&&(n=r):o<=i.clientWidth&&(n=r)}return n||"max"}},checkOverflow:{checkOverflow:function(){const e=this,{isLocked:t,params:i}=e,{slidesOffsetBefore:n}=i;if(n){const t=e.slides.length-1,i=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*n;e.isLocked=e.size>i}else e.isLocked=1===e.snapGrid.length;!0===i.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===i.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function(){const e=this,{classNames:t,params:i,rtl:n,$el:a,device:r,support:s}=e,o=function(e,t){const i=[];return e.forEach((e=>{"object"==typeof e?Object.keys(e).forEach((n=>{e[n]&&i.push(t+n)})):"string"==typeof e&&i.push(t+e)})),i}(["initialized",i.direction,{"pointer-events":!s.touch},{"free-mode":e.params.freeMode&&i.freeMode.enabled},{autoheight:i.autoHeight},{rtl:n},{grid:i.grid&&i.grid.rows>1},{"grid-column":i.grid&&i.grid.rows>1&&"column"===i.grid.fill},{android:r.android},{ios:r.ios},{"css-mode":i.cssMode},{centered:i.cssMode&&i.centeredSlides},{"watch-progress":i.watchSlidesProgress}],i.containerModifierClass);t.push(...o),a.addClass([...t].join(" ")),e.emitContainerClasses()},removeClasses:function(){const{$el:e,classNames:t}=this;e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:Pa},Ua={};class $a{enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const i=this;e=Math.min(Math.max(e,0),1);const n=i.minTranslate(),a=(i.maxTranslate()-n)*e+n;i.translateTo(a,void 0===t?0:t),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter((t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass)));e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter((e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass))).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.each((i=>{const n=e.getSlideClasses(i);t.push({slideEl:i,classNames:n}),e.emit("_slideClass",i,n)})),e.emit("_slideClasses",t)}slidesPerViewDynamic(e="current",t=!1){const{params:i,slides:n,slidesGrid:a,slidesSizesGrid:r,size:s,activeIndex:o}=this;let l=1;if(i.centeredSlides){let e,t=n[o].swiperSlideSize;for(let i=o+1;i<n.length;i+=1)n[i]&&!e&&(t+=n[i].swiperSlideSize,l+=1,t>s&&(e=!0));for(let i=o-1;i>=0;i-=1)n[i]&&!e&&(t+=n[i].swiperSlideSize,l+=1,t>s&&(e=!0))}else if("current"===e)for(let e=o+1;e<n.length;e+=1){(t?a[e]+r[e]-a[o]<s:a[e]-a[o]<s)&&(l+=1)}else for(let e=o-1;e>=0;e-=1){a[o]-a[e]<s&&(l+=1)}return l}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:i}=e;function n(){const t=e.rtlTranslate?-1*e.translate:e.translate,i=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}let a;i.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(n(),e.params.autoHeight&&e.updateAutoHeight()):(a=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),a||n()),i.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t=!0){const i=this,n=i.params.direction;return e||(e="horizontal"===n?"vertical":"horizontal"),e===n||"horizontal"!==e&&"vertical"!==e||(i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${e}`),i.emitContainerClasses(),i.params.direction=e,i.slides.each((t=>{"vertical"===e?t.style.width="":t.style.height=""})),i.emit("changeDirection"),t&&i.update()),i}changeLanguageDirection(e){const t=this;t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;const i=oa(e||t.params.el);if(!(e=i[0]))return!1;e.swiper=t;const n=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=oa(e.shadowRoot.querySelector(n()));return t.children=e=>i.children(e),t}return i.children?i.children(n()):oa(i).children(n())})();if(0===a.length&&t.params.createElements){const e=Jn().createElement("div");a=oa(e),e.className=t.params.wrapperClass,i.append(e),i.children(`.${t.params.slideClass}`).each((e=>{a.append(e)}))}return Object.assign(t,{$el:i,el:e,$wrapperEl:a,wrapperEl:a[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===i.css("direction")),wrongRTL:"-webkit-box"===a.css("display")}),!0}init(e){const t=this;if(t.initialized)return t;return!1===t.mount(e)||(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit")),t}destroy(e=!0,t=!0){const i=this,{params:n,$el:a,$wrapperEl:r,slides:s}=i;return void 0===i.params||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),n.loop&&i.loopDestroy(),t&&(i.removeClasses(),a.removeAttr("style"),r.removeAttr("style"),s&&s.length&&s.removeClass([n.slideVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach((e=>{i.off(e)})),!1!==e&&(i.$el[0].swiper=null,la(i)),i.destroyed=!0),null}static extendDefaults(e){ha(Ua,e)}static get extendedDefaults(){return Ua}static get defaults(){return za}static installModule(e){$a.prototype.__modules__||($a.prototype.__modules__=[]);const t=$a.prototype.__modules__;"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach((e=>$a.installModule(e))),$a):($a.installModule(e),$a)}constructor(...e){let t,i;if(1===e.length&&e[0].constructor&&"Object"===Object.prototype.toString.call(e[0]).slice(8,-1)?i=e[0]:[t,i]=e,i||(i={}),i=ha({},i),t&&!i.el&&(i.el=t),i.el&&oa(i.el).length>1){const e=[];return oa(i.el).each((t=>{const n=ha({},i,{el:t});e.push(new $a(n))})),e}const n=this;n.__swiper__=!0,n.support=ya(),n.device=xa({userAgent:i.userAgent}),n.browser=wa(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],i.modules&&Array.isArray(i.modules)&&n.modules.push(...i.modules);const a={};n.modules.forEach((e=>{e({swiper:n,extendParams:Ba(i,a),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})}));const r=ha({},za,a);return n.params=ha({},r,Ua,i),n.originalParams=ha({},n.params),n.passedParams=ha({},i),n.params&&n.params.on&&Object.keys(n.params.on).forEach((e=>{n.on(e,n.params.on[e])})),n.params&&n.params.onAny&&n.onAny(n.params.onAny),n.$=oa,Object.assign(n,{enabled:n.params.enabled,el:t,classNames:[],slides:oa(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===n.params.direction,isVertical:()=>"vertical"===n.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEvents:function(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"];return n.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},n.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},n.support.touch||!n.params.simulateTouch?n.touchEventsTouch:n.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:da(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}}Object.keys(Wa).forEach((e=>{Object.keys(Wa[e]).forEach((t=>{$a.prototype[t]=Wa[e][t]}))})),$a.use([function({swiper:e,on:t,emit:i}){const n=Zn();let a=null,r=null;const s=()=>{e&&!e.destroyed&&e.initialized&&(i("beforeResize"),i("resize"))},o=()=>{e&&!e.destroyed&&e.initialized&&i("orientationchange")};t("init",(()=>{e.params.resizeObserver&&void 0!==n.ResizeObserver?e&&!e.destroyed&&e.initialized&&(a=new ResizeObserver((t=>{r=n.requestAnimationFrame((()=>{const{width:i,height:n}=e;let a=i,r=n;t.forEach((({contentBoxSize:t,contentRect:i,target:n})=>{n&&n!==e.el||(a=i?i.width:(t[0]||t).inlineSize,r=i?i.height:(t[0]||t).blockSize)})),a===i&&r===n||s()}))})),a.observe(e.el)):(n.addEventListener("resize",s),n.addEventListener("orientationchange",o))})),t("destroy",(()=>{r&&n.cancelAnimationFrame(r),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null),n.removeEventListener("resize",s),n.removeEventListener("orientationchange",o)}))},function({swiper:e,extendParams:t,on:i,emit:n}){const a=[],r=Zn(),s=(e,t={})=>{const i=new(r.MutationObserver||r.WebkitMutationObserver)((e=>{if(1===e.length)return void n("observerUpdate",e[0]);const t=function(){n("observerUpdate",e[0])};r.requestAnimationFrame?r.requestAnimationFrame(t):r.setTimeout(t,0)}));i.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),a.push(i)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",(()=>{if(e.params.observer){if(e.params.observeParents){const t=e.$el.parents();for(let e=0;e<t.length;e+=1)s(t[e])}s(e.$el[0],{childList:e.params.observeSlideChildren}),s(e.$wrapperEl[0],{attributes:!1})}})),i("destroy",(()=>{a.forEach((e=>{e.disconnect()})),a.splice(0,a.length)}))}]);var Fa=$a;function Ha(e,t,i,n){const a=Jn();return e.params.createElements&&Object.keys(n).forEach((r=>{if(!i[r]&&!0===i.auto){let s=e.$el.children(`.${n[r]}`)[0];s||(s=a.createElement("div"),s.className=n[r],e.$el.append(s)),i[r]=s,t[r]=s}})),i}function ja({swiper:e,extendParams:t,on:i,emit:n}){function a(t){let i;return t&&(i=oa(t),e.params.uniqueNavElements&&"string"==typeof t&&i.length>1&&1===e.$el.find(t).length&&(i=e.$el.find(t))),i}function r(t,i){const n=e.params.navigation;t&&t.length>0&&(t[i?"addClass":"removeClass"](n.disabledClass),t[0]&&"BUTTON"===t[0].tagName&&(t[0].disabled=i),e.params.watchOverflow&&e.enabled&&t[e.isLocked?"addClass":"removeClass"](n.lockClass))}function s(){if(e.params.loop)return;const{$nextEl:t,$prevEl:i}=e.navigation;r(i,e.isBeginning&&!e.params.rewind),r(t,e.isEnd&&!e.params.rewind)}function o(t){t.preventDefault(),(!e.isBeginning||e.params.loop||e.params.rewind)&&(e.slidePrev(),n("navigationPrev"))}function l(t){t.preventDefault(),(!e.isEnd||e.params.loop||e.params.rewind)&&(e.slideNext(),n("navigationNext"))}function c(){const t=e.params.navigation;if(e.params.navigation=Ha(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!t.nextEl&&!t.prevEl)return;const i=a(t.nextEl),n=a(t.prevEl);i&&i.length>0&&i.on("click",l),n&&n.length>0&&n.on("click",o),Object.assign(e.navigation,{$nextEl:i,nextEl:i&&i[0],$prevEl:n,prevEl:n&&n[0]}),e.enabled||(i&&i.addClass(t.lockClass),n&&n.addClass(t.lockClass))}function d(){const{$nextEl:t,$prevEl:i}=e.navigation;t&&t.length&&(t.off("click",l),t.removeClass(e.params.navigation.disabledClass)),i&&i.length&&(i.off("click",o),i.removeClass(e.params.navigation.disabledClass))}t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},i("init",(()=>{!1===e.params.navigation.enabled?u():(c(),s())})),i("toEdge fromEdge lock unlock",(()=>{s()})),i("destroy",(()=>{d()})),i("enable disable",(()=>{const{$nextEl:t,$prevEl:i}=e.navigation;t&&t[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),i&&i[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)})),i("click",((t,i)=>{const{$nextEl:a,$prevEl:r}=e.navigation,s=i.target;if(e.params.navigation.hideOnClick&&!oa(s).is(r)&&!oa(s).is(a)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===s||e.pagination.el.contains(s)))return;let t;a?t=a.hasClass(e.params.navigation.hiddenClass):r&&(t=r.hasClass(e.params.navigation.hiddenClass)),n(!0===t?"navigationShow":"navigationHide"),a&&a.toggleClass(e.params.navigation.hiddenClass),r&&r.toggleClass(e.params.navigation.hiddenClass)}}));const u=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),d()};Object.assign(e.navigation,{enable:()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),c(),s()},disable:u,update:s,init:c,destroy:d})}function Va(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Ga({swiper:e,extendParams:t,on:i,emit:n}){const a="swiper-pagination";let r;t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let s=0;function o(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||0===e.pagination.$el.length}function l(t,i){const{bulletActiveClass:n}=e.params.pagination;t[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`)}function c(){const t=e.rtl,i=e.params.pagination;if(o())return;const a=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,c=e.pagination.$el;let d;const u=e.params.loop?Math.ceil((a-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(d=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),d>a-1-2*e.loopedSlides&&(d-=a-2*e.loopedSlides),d>u-1&&(d-=u),d<0&&"bullets"!==e.params.paginationType&&(d=u+d)):d=void 0!==e.snapIndex?e.snapIndex:e.activeIndex||0,"bullets"===i.type&&e.pagination.bullets&&e.pagination.bullets.length>0){const n=e.pagination.bullets;let a,o,u;if(i.dynamicBullets&&(r=n.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),c.css(e.isHorizontal()?"width":"height",r*(i.dynamicMainBullets+4)+"px"),i.dynamicMainBullets>1&&void 0!==e.previousIndex&&(s+=d-(e.previousIndex-e.loopedSlides||0),s>i.dynamicMainBullets-1?s=i.dynamicMainBullets-1:s<0&&(s=0)),a=Math.max(d-s,0),o=a+(Math.min(n.length,i.dynamicMainBullets)-1),u=(o+a)/2),n.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map((e=>`${i.bulletActiveClass}${e}`)).join(" ")),c.length>1)n.each((e=>{const t=oa(e),n=t.index();n===d&&t.addClass(i.bulletActiveClass),i.dynamicBullets&&(n>=a&&n<=o&&t.addClass(`${i.bulletActiveClass}-main`),n===a&&l(t,"prev"),n===o&&l(t,"next"))}));else{const t=n.eq(d),r=t.index();if(t.addClass(i.bulletActiveClass),i.dynamicBullets){const t=n.eq(a),s=n.eq(o);for(let e=a;e<=o;e+=1)n.eq(e).addClass(`${i.bulletActiveClass}-main`);if(e.params.loop)if(r>=n.length){for(let e=i.dynamicMainBullets;e>=0;e-=1)n.eq(n.length-e).addClass(`${i.bulletActiveClass}-main`);n.eq(n.length-i.dynamicMainBullets-1).addClass(`${i.bulletActiveClass}-prev`)}else l(t,"prev"),l(s,"next");else l(t,"prev"),l(s,"next")}}if(i.dynamicBullets){const a=Math.min(n.length,i.dynamicMainBullets+4),s=(r*a-r)/2-u*r,o=t?"right":"left";n.css(e.isHorizontal()?o:"top",`${s}px`)}}if("fraction"===i.type&&(c.find(Va(i.currentClass)).text(i.formatFractionCurrent(d+1)),c.find(Va(i.totalClass)).text(i.formatFractionTotal(u))),"progressbar"===i.type){let t;t=i.progressbarOpposite?e.isHorizontal()?"vertical":"horizontal":e.isHorizontal()?"horizontal":"vertical";const n=(d+1)/u;let a=1,r=1;"horizontal"===t?a=n:r=n,c.find(Va(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${a}) scaleY(${r})`).transition(e.params.speed)}"custom"===i.type&&i.renderCustom?(c.html(i.renderCustom(e,d+1,u)),n("paginationRender",c[0])):n("paginationUpdate",c[0]),e.params.watchOverflow&&e.enabled&&c[e.isLocked?"addClass":"removeClass"](i.lockClass)}function d(){const t=e.params.pagination;if(o())return;const i=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,a=e.pagination.$el;let r="";if("bullets"===t.type){let n=e.params.loop?Math.ceil((i-2*e.loopedSlides)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&n>i&&(n=i);for(let i=0;i<n;i+=1)t.renderBullet?r+=t.renderBullet.call(e,i,t.bulletClass):r+=`<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;a.html(r),e.pagination.bullets=a.find(Va(t.bulletClass))}"fraction"===t.type&&(r=t.renderFraction?t.renderFraction.call(e,t.currentClass,t.totalClass):`<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`,a.html(r)),"progressbar"===t.type&&(r=t.renderProgressbar?t.renderProgressbar.call(e,t.progressbarFillClass):`<span class="${t.progressbarFillClass}"></span>`,a.html(r)),"custom"!==t.type&&n("paginationRender",e.pagination.$el[0])}function u(){e.params.pagination=Ha(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const t=e.params.pagination;if(!t.el)return;let i=oa(t.el);0!==i.length&&(e.params.uniqueNavElements&&"string"==typeof t.el&&i.length>1&&(i=e.$el.find(t.el),i.length>1&&(i=i.filter((t=>oa(t).parents(".swiper")[0]===e.el)))),"bullets"===t.type&&t.clickable&&i.addClass(t.clickableClass),i.addClass(t.modifierClass+t.type),i.addClass(e.isHorizontal()?t.horizontalClass:t.verticalClass),"bullets"===t.type&&t.dynamicBullets&&(i.addClass(`${t.modifierClass}${t.type}-dynamic`),s=0,t.dynamicMainBullets<1&&(t.dynamicMainBullets=1)),"progressbar"===t.type&&t.progressbarOpposite&&i.addClass(t.progressbarOppositeClass),t.clickable&&i.on("click",Va(t.bulletClass),(function(t){t.preventDefault();let i=oa(this).index()*e.params.slidesPerGroup;e.params.loop&&(i+=e.loopedSlides),e.slideTo(i)})),Object.assign(e.pagination,{$el:i,el:i[0]}),e.enabled||i.addClass(t.lockClass))}function p(){const t=e.params.pagination;if(o())return;const i=e.pagination.$el;i.removeClass(t.hiddenClass),i.removeClass(t.modifierClass+t.type),i.removeClass(e.isHorizontal()?t.horizontalClass:t.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(t.bulletActiveClass),t.clickable&&i.off("click",Va(t.bulletClass))}i("init",(()=>{!1===e.params.pagination.enabled?h():(u(),d(),c())})),i("activeIndexChange",(()=>{(e.params.loop||void 0===e.snapIndex)&&c()})),i("snapIndexChange",(()=>{e.params.loop||c()})),i("slidesLengthChange",(()=>{e.params.loop&&(d(),c())})),i("snapGridLengthChange",(()=>{e.params.loop||(d(),c())})),i("destroy",(()=>{p()})),i("enable disable",(()=>{const{$el:t}=e.pagination;t&&t[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)})),i("lock unlock",(()=>{c()})),i("click",((t,i)=>{const a=i.target,{$el:r}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&r&&r.length>0&&!oa(a).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&a===e.navigation.nextEl||e.navigation.prevEl&&a===e.navigation.prevEl))return;const t=r.hasClass(e.params.pagination.hiddenClass);n(!0===t?"paginationShow":"paginationHide"),r.toggleClass(e.params.pagination.hiddenClass)}}));const h=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),p()};Object.assign(e.pagination,{enable:()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),u(),d(),c()},disable:h,render:d,update:c,init:u,destroy:p})}o=a("1iWqc"),c=a("2mCIo");const{topMovieEll:Xa}=c.refs;!async function(){!function(e){let t="";for(let i=0;i<=15;i+=5){t+='<div  class="topMovieGallery_slide swiper-slide">';for(let n=0+i;n<=i+4;n+=1)t+=`<div class="movie__item topMovie_container" data-id="${e[n].id}">\n                  <img class="topMovie_img"  src= "https://image.tmdb.org/t/p/w500/${e[n].poster_path}" alt="${e[n].original_title}" loading="lazy">\n            \n            <div class="topMovie_description movie__description">\n                <p class="topMovie_title movie__title">${e[n].original_title}</p>\n                 <p class="topMovie_date">${e[n].release_date.slice(0,4)}</p>\n                 <p class="topMovie_vote movie__rate">${e[n].vote_average}</p>\n            </div></div>`;t+="</div>"}Xa.insertAdjacentHTML("beforeend",t)}((await(0,o.getTopFilms)()).results);new Fa(".swiper",{direction:"horizontal",loop:!0,modules:[ja,Ga],pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},scrollbar:{el:".swiper-scrollbar"},autoplay:{delay:2e3}})}(),a("JcIhZ"),a("2N0rV"),a("2cGct"),a("f9EVk");const qa={closeModalBtn:document.querySelector("[signout-data-modal-close]"),modalLogIn:document.querySelector("[signout-data-modal]")};function Ka(){qa.modalLogIn.classList.toggle("is-hidden"),window.removeEventListener("keydown",onEscKeyPress),qa.body.classList.remove("no-scroll")}qa.closeModalBtn.addEventListener("click",Ka),qa.modalLogIn.addEventListener("click",(function(e){e.currentTarget===e.target&&Ka()}));
//# sourceMappingURL=index.35068e90.js.map
