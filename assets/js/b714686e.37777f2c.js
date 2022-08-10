"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[94011],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=d(t),u=a,g=f["".concat(l,".").concat(u)]||f[u]||c[u]||s;return t?n.createElement(g,o(o({ref:r},p),{},{components:t})):n.createElement(g,o({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},84819:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=t(87462),a=(t(67294),t(3905));const s={id:"dtag-transfer-requests",title:"dtag_transfer_requests",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/objects/dtag-transfer-requests",id:"version-4.1.0/graphql/objects/dtag-transfer-requests",title:"dtag_transfer_requests",description:'columns and relationships of "dtagtransferrequests"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/dtag-transfer-requests.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/dtag-transfer-requests",permalink:"/4.1.0/graphql/objects/dtag-transfer-requests",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/dtag-transfer-requests.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"dtag-transfer-requests",title:"dtag_transfer_requests",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link",permalink:"/4.1.0/graphql/objects/chain-link"},next:{title:"poll_answer_aggregate_fields",permalink:"/4.1.0/graphql/objects/poll-answer-aggregate-fields"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>profile</code> (<code>profile!</code>)",id:"profile-profile",level:4},{value:"<code>profileBySenderAddress</code> (<code>profile!</code>)",id:"profilebysenderaddress-profile",level:4},{value:"<code>receiver_address</code> (<code>String!</code>)",id:"receiver_address-string",level:4},{value:"<code>sender_address</code> (<code>String!</code>)",id:"sender_address-string",level:4}],p={toc:d};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'columns and relationships of "dtag_transfer_requests"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type dtag_transfer_requests {\n  profile: profile!\n  profileBySenderAddress: profile!\n  receiver_address: String!\n  sender_address: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"profile-profile"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,a.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,a.kt)("p",null,"An object relationship"),(0,a.kt)("h4",{id:"profilebysenderaddress-profile"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profileBySenderAddress"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,a.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,a.kt)("p",null,"An object relationship"),(0,a.kt)("h4",{id:"receiver_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"sender_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"))}c.isMDXComponent=!0}}]);