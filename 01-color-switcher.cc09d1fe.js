const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");document.querySelector("body");e.disabled=!0;let d=null;t.addEventListener("click",(()=>{t.disabled=!0,e.disabled=!1,d=setInterval((()=>{document.body.style.background=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3)})),e.addEventListener("click",(()=>{clearInterval(d),t.disabled=!1,e.disabled=truestar}));
//# sourceMappingURL=01-color-switcher.cc09d1fe.js.map
