"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[78812],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},36902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},i="Testnets Overview",s={unversionedId:"testnet/overview",id:"version-4.2.0/testnet/overview",title:"Overview",description:"Testnets (from the words test- and nets-, networks) are the way we at Desmos use to test all the features our blockchain before launching them publicly.",source:"@site/versioned_docs/version-4.2.0/05-testnet/01-overview.md",sourceDirName:"05-testnet",slug:"/testnet/overview",permalink:"/testnet/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/05-testnet/01-overview.md",tags:[],version:"4.2.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Validator FAQ",permalink:"/validators/validator-faq"},next:{title:"create-local",permalink:"/testnet/create-local"}},l={},c=[{value:"Public testnet",id:"public-testnet",level:2},{value:"Local testnet",id:"local-testnet",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testnets-overview"},"Testnets Overview"),(0,o.kt)("p",null,"Testnets (from the words ",(0,o.kt)("em",{parentName:"p"},"test-")," and ",(0,o.kt)("em",{parentName:"p"},"nets-"),", networks) are the way we at Desmos use to test all the features our blockchain before launching them publicly. "),(0,o.kt)("p",null,"In other words, a testnet is the playground that you can use to start learning about Desmos, its features and how you can use them to create your own decentralized social networks or social enabled app. "),(0,o.kt)("p",null,"There are two different types of testnets: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Public testnets"),(0,o.kt)("li",{parentName:"ul"},"Local testnets")),(0,o.kt)("h2",{id:"public-testnet"},"Public testnet"),(0,o.kt)("p",null,"A Public testnet is a preview of what the Desmos mainnet will actually be. "),(0,o.kt)("p",null,"Testnet's ",(0,o.kt)("a",{parentName:"p",href:"/validators/overview"},"validators")," are publicly known and every developer can write and read transactions from them. "),(0,o.kt)("p",null,"Public testnets are the battlefields on which you can test the integration of your app (or your validator's setup) without worrying too much about security, but being sure to always be up-to-date with the latest stable changes."),(0,o.kt)("admonition",{title:"Joining the public testnet  ",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to know more about how to join the currently running public testnet, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/testnet/join-public/setup"},(0,o.kt)("em",{parentName:"a"},"Join the public testnet"))," page.  ")),(0,o.kt)("h2",{id:"local-testnet"},"Local testnet"),(0,o.kt)("p",null,"A Local testnet exist only on the machine that is used to running it. This means that none, except you, can actually access the data you store. "),(0,o.kt)("p",null,"Local testnets are perfect if you want to quickly setup a Desmos blockchain instance without worrying too much about setting up a public full-node machine. "),(0,o.kt)("p",null,"They also might be particularly useful to developers that do not want to write on the public net but want first to try out their app's integration locally to make sure everything works properly. "),(0,o.kt)("admonition",{title:"Creating a local testnet  ",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you want to know more about how creating a local testnet, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/testnet/create-local"},(0,o.kt)("em",{parentName:"a"},"Create a local testnet"))," page.  ")))}p.isMDXComponent=!0}}]);