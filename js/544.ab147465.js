"use strict";(self["webpackChunkaccounta_buddy_app_vue"]=self["webpackChunkaccounta_buddy_app_vue"]||[]).push([[544],{8544:function(e,t,o){o.r(t),o.d(t,{startFocusVisible:function(){return r}});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const s="ion-focused",n="ion-focusable",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=e=>{let t=[],o=!0;const r=e?e.shadowRoot:document,a=e||document.body,d=e=>{t.forEach((e=>e.classList.remove(s))),e.forEach((e=>e.classList.add(s))),t=e},u=()=>{o=!1,d([])},i=e=>{o=c.includes(e.key),o||d([])},v=e=>{if(o&&e.composedPath){const t=e.composedPath().filter((e=>!!e.classList&&e.classList.contains(n)));d(t)}},f=()=>{r.activeElement===a&&d([])};r.addEventListener("keydown",i),r.addEventListener("focusin",v),r.addEventListener("focusout",f),r.addEventListener("touchstart",u),r.addEventListener("mousedown",u);const E=()=>{r.removeEventListener("keydown",i),r.removeEventListener("focusin",v),r.removeEventListener("focusout",f),r.removeEventListener("touchstart",u),r.removeEventListener("mousedown",u)};return{destroy:E,setFocus:d}}}}]);
//# sourceMappingURL=544.ab147465.js.map