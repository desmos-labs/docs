"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[42942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||s;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const s={id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},i="Seed nodes",a={unversionedId:"testnet/join-public/seeds",id:"testnet/join-public/seeds",title:"Seeds",description:"The following seed nodes are to be used when configuring a full node for the testnet. If you are looking for mainnet seed nodes, please refer to this instead.",source:"@site/docs/05-testnet/03-join-public/03-seeds.md",sourceDirName:"05-testnet/03-join-public",slug:"/testnet/join-public/seeds",permalink:"/next/testnet/join-public/seeds",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/05-testnet/03-join-public/03-seeds.md",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:3,frontMatter:{id:"seeds",title:"Seeds",sidebar_label:"Seeds",slug:"seeds"},sidebar:"docs",previous:{title:"Genesis File",permalink:"/next/testnet/join-public/genesis-file"},next:{title:"State Sync",permalink:"/next/testnet/join-public/state-sync"}},d={},c=[],l={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seed-nodes"},"Seed nodes"),(0,o.kt)("admonition",{title:"Testnet only   ",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The following seed nodes are to be used when configuring a full node for the ",(0,o.kt)("strong",{parentName:"p"},"testnet"),". If you are looking for mainnet seed nodes, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/next/mainnet/seeds"},"this")," instead.")),(0,o.kt)("p",null,"Add these seeds here to the ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.desmos/config/config.toml")," file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'seeds = "be3db0fe5ee7f764902dbcc75126a2e082cbf00c@seed-1.morpheus.desmos.network:26656,4659ab47eef540e99c3ee4009ecbe3fbf4e3eaff@seed-2.morpheus.desmos.network:26656,1d9cc23eedb2d812d30d99ed12d5c5f21ff40c23@seed-3.morpheus.desmos.network:26656"\n')))}p.isMDXComponent=!0}}]);