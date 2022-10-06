"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[38344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},370:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"halting",title:"Halting",sidebar_position:4},i="Halting Your Validator",l={unversionedId:"validators/halting",id:"version-2.3/validators/halting",title:"Halting",description:"When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have",source:"@site/versioned_docs/version-2.3/04-validators/03-halting.md",sourceDirName:"04-validators",slug:"/validators/halting",permalink:"/2.3/validators/halting",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/04-validators/03-halting.md",tags:[],version:"2.3",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",sidebarPosition:4,frontMatter:{id:"halting",title:"Halting",sidebar_position:4},sidebar:"version-2.3/docs",previous:{title:"Setup",permalink:"/2.3/validators/setup"},next:{title:"Migrating",permalink:"/2.3/validators/migrating"}},s={},c=[],p={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"halting-your-validator"},"Halting Your Validator"),(0,a.kt)("p",null,"When attempting to perform routine maintenance or planning for an upcoming coordinated upgrade, it can be useful to have\nyour validator systematically and gracefully halt. You can achieve this by either setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"halt-height")," to the\nheight at which you want your node to shutdown or by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--halt-height")," flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"desmos"),". The node will\nshutdown with a zero exit code at that given height after committing the block."))}d.isMDXComponent=!0}}]);