(self["webpackChunkaccounta_buddy_app_vue"]=self["webpackChunkaccounta_buddy_app_vue"]||[]).push([[822],{822:function(A,e,n){"use strict";n.r(e),n.d(e,{default:function(){return R}});var t=n(6252);const o=(0,t.Uk)("Tab 2");function a(A,e,n,a,l,r){const u=(0,t.up)("ion-title"),i=(0,t.up)("ion-toolbar"),g=(0,t.up)("ion-header"),s=(0,t.up)("TheSettingsCard"),c=(0,t.up)("ion-content"),h=(0,t.up)("ion-page");return(0,t.wg)(),(0,t.j4)(h,null,{default:(0,t.w5)((()=>[(0,t.Wm)(c,{fullscreen:!0},{default:(0,t.w5)((()=>[(0,t.Wm)(g,{collapse:"condense"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,{size:"large"},{default:(0,t.w5)((()=>[o])),_:1})])),_:1})])),_:1}),(0,t.Wm)(s)])),_:1})])),_:1})}var l=n(943);function r(A,e,n,o,a,l){const r=(0,t.up)("TheLocaleChanger"),u=(0,t.up)("ion-item"),i=(0,t.up)("ion-card"),g=(0,t.up)("ThemeChangeButton");return(0,t.wg)(),(0,t.j4)(i,{class:"main-card-wrapper"},{default:(0,t.w5)((()=>[(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(r)])),_:1})])),_:1}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Wm)(g)])),_:1})])),_:1})])),_:1})}const u=["src"];function i(A,e,o,a,l,r){const i=(0,t.up)("ion-button");return(0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(A.$i18n.availableLocales,(A=>((0,t.wg)(),(0,t.j4)(i,{key:A,onClick:e=>r.changeLocale(A),type:"button",class:"btn btn-lg"},{default:(0,t.w5)((()=>[(0,t._)("img",{src:n(3546)(`./${A}.png`),width:"30"},null,8,u)])),_:2},1032,["onClick"])))),128)}var g={name:"TheLocaleChanger",components:{IonButton:l["default"]},data(){return{langs:[{id:"et",name:"Eesti"},{id:"en",name:"English"},{id:"ru",name:"Vene"}]}},methods:{changeLocale(A){this.$i18n.locale=A,localStorage.setItem("locale",A)}},created:function(){null!==localStorage.getItem("locale")&&(this.$i18n.locale=localStorage.getItem("locale"))}},s=n(3744);const c=(0,s.Z)(g,[["render",i]]);var h=c,C=n(3577);function m(A,e,n,o,a,l){const r=(0,t.up)("ion-icon"),u=(0,t.up)("ion-label"),i=(0,t.up)("ion-toggle");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(r,{slot:"start",icon:l.getIcon},null,8,["icon"]),(0,t.Wm)(u,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,C.zw)(A.$t("toggle_dark_theme")),1)])),_:1}),(0,t.Wm)(i,{id:"themeToggle",slot:"end",onIonChange:l.toggleDarkTheme,checked:l.isDarkMode},null,8,["onIonChange","checked"])],64)}var d=n(8903),w=n(387),p={name:"ThemeChangeButton",components:{IonIcon:l.gu,IonLabel:l.Q$,IonToggle:l.ho},setup(){const A=(0,w.o)();return{moon:d.Z1O,sunny:d.BBf,store:A}},methods:{toggleDarkTheme(){document.body.classList.toggle("dark"),this.store.isDarkMode=!this.store.isDarkMode}},computed:{getIcon(){return this.store.isDarkMode?this.moon:this.sunny},isDarkMode(){return this.store.isDarkMode}}};const B=(0,s.Z)(p,[["render",m]]);var I=B,f=(0,t.aZ)({name:"TheSettingsCard",components:{IonCard:l.PM,IonItem:l.Ie,TheLocaleChanger:h,ThemeChangeButton:I}});const W=(0,s.Z)(f,[["render",r],["__scopeId","data-v-1b7fbea0"]]);var U=W,G=(0,t.aZ)({name:"SettingsPage",components:{IonPage:l._i,IonContent:l.W2,IonHeader:l.Gu,IonToolbar:l.sr,IonTitle:l.wd,TheSettingsCard:U}});const T=(0,s.Z)(G,[["render",a]]);var R=T},3546:function(A,e,n){var t={"./en.png":3024,"./et.png":9051,"./ru.png":4355};function o(A){var e=a(A);return n(e)}function a(A){if(!n.o(t,A)){var e=new Error("Cannot find module '"+A+"'");throw e.code="MODULE_NOT_FOUND",e}return t[A]}o.keys=function(){return Object.keys(t)},o.resolve=a,A.exports=o,o.id=3546},3024:function(A){"use strict";A.exports="data:image/png;base64,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"},9051:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAYCAYAAABwZEQ3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAA0UlEQVRIx+3SPWoCYRRG4XNvBi2EgH9byCZmFVmGKcTCJWhnM01cg9VsIBAIZBPTCkpEMUUsxOLafIzgAvJOIGcFT3EMIC+rKfACDPj99sDr5/PTwvKyGgOFAHHfxPKy2gFDtQTYOdBTK1JdB85qReriQKgVqcjwBzWirlmY9mqhNtwwvq7UhhsmOo9qQ52rAf+YP4fJNtsvtaHO3t4/foCOGgKcLCIag2nUMw6YGpEyB1pqRarlwFGtSH07MFcrUrPMzIqIaAMjoC9AHIClmRVXwf4qRuTCZbMAAAAASUVORK5CYII="},4355:function(A){"use strict";A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAYCAYAAABwZEQ3AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAA4UlEQVRIx+3VMWoCYRCG4XfGPwuiKaLxHB5G7G0sDCGkCDlBbEKaNFpYWXsYTyDYCaJowGXJJsE0P66kSpVvi7wneGBmGANIs/wBuAGu+fs2wKhWTV4szfI74FWA+Nm9pVm+BlpqCbB2oKFWxK4ceFcrYh8OHNWK2DFU3NSIU+GioiacYW6nK7WhwMyXmdpQYBr18szJ1YB/zG8Ku+RSbSgw7beF2nDKDp3eAaipIUAaPq08px2+rDw77EBZPqU5kKgVscSBnVoR2zswVCtiTwaw7fYfgQHQFCC2wLg5mzx/A0sbKdDGsYAxAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=822.737228d7.js.map