"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[21649],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),c=a,f=u["".concat(i,".").concat(c)]||u[c]||d[c]||o;return r?n.createElement(f,l(l({ref:t},m),{},{components:r})):n.createElement(f,l({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},52562:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={id:"params",title:"Parameters",sidebar_label:"Parameters",slug:"params"},l="Parameters",s={unversionedId:"developers/modules/fees/params",id:"developers/modules/fees/params",title:"Parameters",description:"The fees module contains the following parameters:",source:"@site/docs/02-developers/02-modules/fees/05-params.md",sourceDirName:"02-developers/02-modules/fees",slug:"/developers/modules/fees/params",permalink:"/next/developers/modules/fees/params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/fees/05-params.md",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:5,frontMatter:{id:"params",title:"Parameters",sidebar_label:"Parameters",slug:"params"},sidebar:"docs",previous:{title:"Ante Handlers",permalink:"/next/developers/modules/fees/ante-handlers"},next:{title:"Client",permalink:"/next/developers/modules/fees/client"}},i={},p=[{value:"MinFees",id:"minfees",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,"The fees module contains the following parameters:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MinFees"),(0,a.kt)("td",{parentName:"tr",align:null},"[]MinFee"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'[{ "message_type": "/desmos.profiles.v2.SaveProfile", "amount": [ { "amount": "100", "denom": "tokenA" } ] }]'))))),(0,a.kt)("h2",{id:"minfees"},"MinFees"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"MinFees")," is an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"MinFee")," object, each one made of two different fields: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MessageType")," (string), representing the type url of the message which the min fees refer to "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Amount")," (",(0,a.kt)("inlineCode",{parentName:"li"},"[]Coin"),"), representing the amount of min fees associated with the message")),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"MinFees"),", there can only be a single entry for each ",(0,a.kt)("inlineCode",{parentName:"p"},"MessageType"),"."))}d.isMDXComponent=!0}}]);