"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[78423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,g=u["".concat(d,".").concat(f)]||u[f]||c[f]||s;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},93457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={id:"dtag-transfer-request",title:"DTag transfer request",sidebar_label:"DTag transfer request",slug:"dtag-transfer-request"},o="DTag transfer request",i={unversionedId:"developers/types/profiles/dtag-transfer-request",id:"version-2.3/developers/types/profiles/dtag-transfer-request",title:"DTag transfer request",description:"A DTag transfer request represents the request made from a user to get the DTag of another one.",source:"@site/versioned_docs/version-2.3/02-developers/02-types/profiles/dtag-transfer-request.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/dtag-transfer-request",permalink:"/2.3/developers/types/profiles/dtag-transfer-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/02-types/profiles/dtag-transfer-request.md",tags:[],version:"2.3",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"dtag-transfer-request",title:"DTag transfer request",sidebar_label:"DTag transfer request",slug:"dtag-transfer-request"},sidebar:"version-2.3/docs",previous:{title:"Profile pictures",permalink:"/2.3/developers/types/profiles/profile-pictures"},next:{title:"Relationship",permalink:"/2.3/developers/types/profiles/relationship"}},d={},l=[{value:"Contained data",id:"contained-data",level:2},{value:"<code>DTagToTrade</code> (<code>string</code>)",id:"dtagtotrade-string",level:3},{value:"<code>Sender</code> (<code>string</code>)",id:"sender-string",level:3},{value:"<code>Receiver</code> (<code>string</code>)",id:"receiver-string",level:3}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dtag-transfer-request"},"DTag transfer request"),(0,a.kt)("p",null,"A DTag transfer request represents the request made from a user to get the DTag of another one."),(0,a.kt)("h2",{id:"contained-data"},"Contained data"),(0,a.kt)("p",null,"Here follows the data of a DTag transfer request. "),(0,a.kt)("h3",{id:"dtagtotrade-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"DTagToTrade")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"DTag")," contains the value of the ",(0,a.kt)("inlineCode",{parentName:"p"},"DTag")," that should be transferred from the receiver of the request to the sender."),(0,a.kt)("h3",{id:"sender-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"Sender")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,a.kt)("p",null,"Sender represents the address of the account that sent the ",(0,a.kt)("inlineCode",{parentName:"p"},"DTag transfer request"),"."),(0,a.kt)("h3",{id:"receiver-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"Receiver")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,a.kt)("p",null,"Receiver represents the receiver of the request that, if accepted, will\ngive to the sender their ",(0,a.kt)("inlineCode",{parentName:"p"},"DTag"),"."))}c.isMDXComponent=!0}}]);