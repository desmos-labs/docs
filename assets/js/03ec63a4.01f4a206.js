"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[27986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var i=2;i<l;i++)a[i]=n[i];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const l={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},a="Concepts",s={unversionedId:"developers/modules/supply/concepts",id:"developers/modules/supply/concepts",title:"Concepts",description:"Total Supply",source:"@site/docs/02-developers/02-modules/supply/02-concepts.md",sourceDirName:"02-developers/02-modules/supply",slug:"/developers/modules/supply/concepts",permalink:"/next/developers/modules/supply/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/supply/02-concepts.md",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/next/developers/modules/supply/overview"},next:{title:"Client",permalink:"/next/developers/modules/supply/client"}},p={},i=[{value:"Total Supply",id:"total-supply",level:2},{value:"Circulating Supply",id:"circulating-supply",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"concepts"},"Concepts"),(0,r.kt)("h2",{id:"total-supply"},"Total Supply"),(0,r.kt)("p",null,"The total supply of a token is defined as ",(0,r.kt)("em",{parentName:"p"},"the overall number of tokens having a given denomination that currently exists inside a chain"),". "),(0,r.kt)("p",null,"The total supply of a token is fetched directly from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bank")," module, which properly tracks such amount each time a new token is created (due to inflation or other) or burned. "),(0,r.kt)("h2",{id:"circulating-supply"},"Circulating Supply"),(0,r.kt)("p",null,"The circulating supply of a token is defined as ",(0,r.kt)("em",{parentName:"p"},"the number of tokens having a given denomination that can be transferred freely from one user to another"),"."),(0,r.kt)("p",null,"Based on this definition, the circulating supply of a token is computed using the following formula: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"circulating_supply = total_supply - community_pool - sum(vested_amount)\n")),(0,r.kt)("p",null,"This is due to the fact that the following amounts are considered as non circulating: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the amount of a token inside the ",(0,r.kt)("em",{parentName:"li"},"community pool"),", since such tokens can be transferred to a user only after a ",(0,r.kt)("inlineCode",{parentName:"li"},"CommunitySpendPropsal")," passes. As soon as some tokens are transferred from the community pool to a user, they become immediately part of the circulating supply;"),(0,r.kt)("li",{parentName:"ul"},"the amount of vested tokens, since those are subject to a lock period. As soon as such period ends, they become immediately part of the circulating supply.")))}u.isMDXComponent=!0}}]);