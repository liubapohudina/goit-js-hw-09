!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");document.querySelector("body");e.disabled=!0;var o=null;t.addEventListener("click",(function(){t.disabled=!0,e.disabled=!1,t.style.backgroundColor="grey",t.style.color="grey",o=setInterval((function(){document.body.style.background="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,"0"))}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1,e.disabled=!0,e.style.backgroundColor="grey",e.style.color="grey"}))}();
//# sourceMappingURL=01-color-switcher.82863c7a.js.map
