"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[90974],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=i(r),m=o,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(v,p(p({ref:t},u),{},{components:r})):n.createElement(v,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,p=new Array(l);p[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,p[1]=a;for(var i=2;i<l;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},26395:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c}});var n=r(87462),o=r(63366),l=(r(67294),r(3905)),p=["components"],a={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},s="x/supply",i={unversionedId:"developers/modules/supply/overview",id:"version-4.1.0/developers/modules/supply/overview",title:"Overview",description:"Abstract",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/supply/01-overview.md",sourceDirName:"02-developers/02-modules/supply",slug:"/developers/modules/supply/overview",permalink:"/developers/modules/supply/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/supply/01-overview.md",tags:[],version:"4.1.0",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/developers/modules/fees/client"},next:{title:"Concepts",permalink:"/developers/modules/supply/concepts"}},u={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Concepts",id:"concepts",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,o.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"xsupply"},(0,l.kt)("inlineCode",{parentName:"h1"},"x/supply")),(0,l.kt)("h2",{id:"abstract"},"Abstract"),(0,l.kt)("p",null,"This document specifies the supply module of the Cosmos SDK. "),(0,l.kt)("p",null,"The supply module exposes some query endpoints that can be used by price aggregator services such as ",(0,l.kt)("a",{parentName:"p",href:"https://coingecko.com"},"CoinGecko")," and ",(0,l.kt)("a",{parentName:"p",href:"https://coinmarketcap.com"},"CoinMarketCap")," to easily get the total and circulating supply of a token.  "),(0,l.kt)("h2",{id:"concepts"},"Concepts"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/developers/modules/supply/concepts"},"Concepts")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/supply/concepts#total-supply"},"Total Supply")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/supply/concepts#circulating-supply"},"Circulating Supply")))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("a",{parentName:"strong",href:"/developers/modules/supply/client"},"Client")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/supply/client#cli"},"CLI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/supply/client#grpc"},"gRPC")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/developers/modules/supply/client#rest"},"REST"))))))}m.isMDXComponent=!0}}]);