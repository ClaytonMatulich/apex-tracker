(function(t){function e(e){for(var r,o,n=e[0],i=e[1],c=e[2],f=0,u=[];f<n.length;f++)o=n[f],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&u.push(s[o][0]),s[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);p&&p(e);while(u.length)u.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var t,e=0;e<l.length;e++){for(var a=l[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==s[i]&&(r=!1)}r&&(l.splice(e--,1),t=n(n.s=a[0]))}return t}var r={},s={app:0},l=[];function o(t){return n.p+"js/"+({about:"about"}[t]||t)+"."+{about:"67c066b2"}[t]+".js"}function n(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.e=function(t){var e=[],a=s[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,r){a=s[t]=[e,r]});e.push(a[2]=r);var l,i=document.createElement("script");i.charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.src=o(t);var c=new Error;l=function(e){i.onerror=i.onload=null,clearTimeout(f);var a=s[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),l=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",c.name="ChunkLoadError",c.type=r,c.request=l,a[1](c)}s[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:i})},12e4);i.onerror=i.onload=l,document.head.appendChild(i)}return Promise.all(e)},n.m=t,n.c=r,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(a,r,function(e){return t[e]}.bind(null,r));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var p=c;l.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("1356"),s=a.n(r);s.a},1356:function(t,e,a){},"4c1f":function(t,e,a){t.exports=a.p+"img/apex-logo.badc059d.png"},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("app-navbar"),a("v-content",{staticClass:"apex"},[a("v-container",{attrs:{"fill-height":""}},[a("router-view")],1)],1),a("app-footer",{})],1)},l=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{"align-center":"","justify-center":"",row:"","fill-height":""}},[a("v-btn",{staticClass:"mx-5",attrs:{fab:"",text:"",href:"https://github.com/ClaytonMatulich/apex-tracker",target:"_blank"}},[a("v-icon",{attrs:{large:"",color:"#953036"}},[t._v("mdi-github-circle")])],1),a("v-btn",{staticClass:"mx-5",attrs:{fab:"",text:"",href:"https://www.linkedin.com/in/claytonmatulich/",target:"_blank"}},[a("v-icon",{attrs:{color:"#953036",large:""}},[t._v("mdi-linkedin")])],1),a("v-btn",{staticClass:"mx-5",attrs:{fab:"",text:"",href:"mailto:clayton@matulich.dev",target:"_blank"}},[a("v-icon",{attrs:{color:"#953036",large:""}},[t._v("mdi-at")])],1)],1)],1)},n=[],i={},c=i,f=a("2877"),p=a("6544"),u=a.n(p),m=a("8336"),d=a("a523"),v=a("132d"),h=a("a722"),g=Object(f["a"])(c,o,n,!1,null,"1e4a39ec",null),b=g.exports;u()(g,{VBtn:m["a"],VContainer:d["a"],VIcon:v["a"],VLayout:h["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app-bar",{attrs:{flat:"",app:"",color:"white"}},[a("v-toolbar-title",{staticClass:"headline text-uppercase apex-text"},[a("router-link",{attrs:{to:"/"},on:{click:t.reset}},[a("span",{staticClass:"apex-text",on:{click:t.reset}},[t._v("Apex")]),a("span",{staticClass:"font-weight-light apex-text",on:{click:t.reset}},[t._v("Tracker")])])],1),a("v-spacer"),a("router-link",{attrs:{to:"/"}},[a("v-btn",{attrs:{text:"",color:"#953036"},on:{click:t.reset}},[a("span",{staticClass:"subheading apex-text"},[t._v("Search")])])],1),a("router-link",{attrs:{to:"/about"}},[a("v-btn",{attrs:{text:"",color:"#953036"}},[a("span",{staticClass:"subheading apex-text"},[t._v("About")])])],1)],1)},_=[],C={methods:{reset(){vt.showProfile=!1}}},w=C,y=a("40dc"),k=a("2fa4"),V=a("2a7f"),D=Object(f["a"])(w,x,_,!1,null,null,null),P=D.exports;u()(D,{VAppBar:y["a"],VBtn:m["a"],VSpacer:k["a"],VToolbarTitle:V["a"]});var j={name:"App",components:{"app-footer":b,"app-navbar":P},data:()=>({showProfile:!1})},O=j,S=(a("034f"),a("7496")),I=a("a75b"),T=Object(f["a"])(O,s,l,!1,null,null,null),$=T.exports;u()(T,{VApp:S["a"],VContainer:d["a"],VContent:I["a"]});var E=a("8c4f"),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("v-row",{attrs:{justify:"center"}},[r("v-img",{staticClass:"mx-4",attrs:{src:a("4c1f"),contain:"","max-width":"500","max-height":"300"}})],1)],1),t.showProfile?t._e():r("v-col",{attrs:{cols:"12"}},[r("v-row",{staticClass:"text-center",attrs:{align:"center",justify:"center"}},[r("v-card",{staticClass:"mx-4",attrs:{outlined:"",elevation:"10",width:"500","min-width":"300","min-height":"325"}},[r("v-form",{ref:"form",staticClass:"mx-10 mt-10",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-text-field",{attrs:{rules:[function(t){return!!t||"Name/id/gamertag is required"}],required:"",label:"Name/Gamertag/Handle",color:"#953036"},model:{value:t.gamertag,callback:function(e){t.gamertag=e},expression:"gamertag"}}),r("v-select",{attrs:{items:t.platforms,rules:[function(t){return!!t||"Platform is required"}],label:"Platform",required:"",color:"#953036"},model:{value:t.platform,callback:function(e){t.platform=e},expression:"platform"}}),r("v-btn",{staticClass:"mr-4 mt-10 white--text",attrs:{disabled:!t.valid,type:"submit",color:"#953036",loading:t.loading}},[t._v("submit")])],1)],1)],1)],1),t.showProfile?r("app-profile-card",{attrs:{profileData:t.profileData,platformIcon:t.platformIcon},on:{reset:function(e){return t.reset()}}}):t._e()],1),r("v-snackbar",{model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(t._s(t.snackMessage))])],1)},A=[],L=a("bc3a"),B=a.n(L),q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-simple-table",{staticClass:"mx-2"},[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("Stat")]),a("th",{staticClass:"text-left"},[t._v("Value")])])]),a("tbody",[a("tr",[a("td",{staticClass:"text-left subtitle-2"},[t._v("Selected Legend")]),a("td",{staticClass:"text-left"},[t._v(t._s(t.profileData.metadata.activeLegendName))])]),t.profileData.segments[0].stats.level?a("tr",[a("td",{staticClass:"text-left subtitle-2"},[t._v("Level")]),a("td",{staticClass:"text-left"},[t._v(t._s(t.profileData.segments[0].stats.level.displayValue))])]):t._e(),t.profileData.segments[0].stats.kills?a("tr",[a("td",{staticClass:"text-left subtitle-2"},[t._v("Lifetime Kills")]),a("td",{staticClass:"text-left"},[t._v(t._s(t.profileData.segments[0].stats.kills.displayValue))])]):t._e(),t.profileData.segments[0].stats.kills?a("tr",[a("td",{staticClass:"text-left subtitle-2"},[t._v("Kills Percentile")]),a("td",{staticClass:"text-left"},[t._v(t._s(t.profileData.segments[0].stats.kills.percentile)+"%")])]):t._e(),t.profileData.segments[0].stats.damage?a("tr",[a("td",{staticClass:"text-left subtitle-2"},[t._v("Damage Done")]),a("td",{staticClass:"text-left"},[t._v(t._s(t.profileData.segments[0].stats.damage.displayValue))])]):t._e(),t.profileData.segments[0].stats.damage?a("tr",[a("td",{staticClass:"text-left subtitle-2"},[t._v("Damage Percentile")]),a("td",{staticClass:"text-left"},[t._v(t._s(t.profileData.segments[0].stats.damage.percentile)+"%")])]):t._e()])])},U=[],N={props:["profileData"]},R=N,F=a("1f4f"),H=Object(f["a"])(R,q,U,!1,null,null,null),J=H.exports;u()(H,{VSimpleTable:F["a"]});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-col",{attrs:{cols:"12"}},[a("v-row",{staticClass:"text-center",attrs:{align:"center",justify:"center"}},[a("v-card",{attrs:{outlined:"",elevation:"10",width:"900","min-width":"300","min-height":"325"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-img",{staticClass:"text-center ma-5",attrs:{"max-width":"500",src:t.profileData.segments[1].metadata.imageUrl}})],1)],1),a("v-col",{attrs:{xs:"12",sm:"12",md:"6",lg:"6",xl:"6"}},[a("div",{staticClass:"text-center ma-5"},[t.profileData.platformInfo.avatarUrl?a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:t.profileData.platformInfo.avatarUrl,alt:"avatar"}})]):t._e(),a("div",{staticClass:"headline my-2"},[t._v(t._s(t.profileData.platformInfo.platformUserHandle.toUpperCase()))]),a("v-chip",{style:t.getChipColor()},[a("v-icon",{staticClass:"white--text"},[t._v(t._s(t.platformIcon))])],1),a("app-stats-table",{attrs:{profileData:t.profileData}}),a("v-btn",{staticClass:"ma-5 white--text",attrs:{color:"#953036"},on:{click:function(e){return t.$emit("reset")}}},[t._v("Return")])],1)])],1)],1)],1)],1)},z=[],G={props:["profileData","platformIcon"],components:{"app-stats-table":J},methods:{getChipColor(){return"xbl"===this.profileData.platformInfo.platformSlug?{backgroundColor:"#0e7a0d"}:"psn"===this.profileData.platformInfo.platformSlug?{backgroundColor:"#003791"}:"origin"===this.profileData.platformInfo.platformSlug?{backgroundColor:"#f05523"}:void 0}}},Q=G,W=a("8212"),X=a("b0af"),Y=a("cc20"),Z=a("62ad"),tt=a("adda"),et=a("0fd9"),at=Object(f["a"])(Q,K,z,!1,null,null,null),rt=at.exports;u()(at,{VAvatar:W["a"],VBtn:m["a"],VCard:X["a"],VChip:Y["a"],VCol:Z["a"],VIcon:v["a"],VImg:tt["a"],VRow:et["a"]});var st={components:{"app-stats-table":J,"app-profile-card":rt},data(){return{snackbar:!1,snackMessage:"Could not find player. Make sure spelling and platform are correct",gamertag:"",platform:"",platforms:["xbl","psn","origin"],valid:!0,profileData:null,loading:!1}},methods:{onSubmit(){this.getProfile()},async getProfile(){this.loading=!0;try{const e=await B.a.get(`/api/v1/profile/${this.platform}/${this.gamertag}`);this.profileData=e.data.data,console.log(this.profileData)}catch(t){console.log(t),this.snackbar=!0,this.reset()}this.loading=!1,this.profileData&&(vt.showProfile=!0)},reset(){console.log("reset"),this.gamertag="",this.platform="",this.profileData=null,vt.showProfile=!1,this.loading=!1}},computed:{showProfile(){return vt.showProfile},platformIcon(){return"xbl"===this.platform?"mdi-xbox":"psn"===this.platform?"mdi-playstation":"origin"===this.platform?"mdi-origin":""}},mounted(){this.reset()}},lt=st,ot=a("4bd4"),nt=a("b974"),it=a("2db4"),ct=a("8654"),ft=Object(f["a"])(lt,M,A,!1,null,null,null),pt=ft.exports;u()(ft,{VBtn:m["a"],VCard:X["a"],VCol:Z["a"],VContainer:d["a"],VForm:ot["a"],VImg:tt["a"],VRow:et["a"],VSelect:nt["a"],VSnackbar:it["a"],VTextField:ct["a"]}),r["a"].use(E["a"]);var ut=new E["a"]({mode:"history",base:"/",routes:[{path:"/",name:"search",component:pt},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"f820"))}]}),mt=a("f309");r["a"].use(mt["a"]);var dt=new mt["a"]({icons:{iconfont:"mdi"}});a.d(e,"eventBus",function(){return vt}),r["a"].config.productionTip=!1;const vt=new r["a"]({data:{showProfile:!1}});new r["a"]({router:ut,vuetify:dt,render:t=>t($)}).$mount("#app")}});
//# sourceMappingURL=app.5525121f.js.map