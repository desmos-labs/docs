"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[51549],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,y=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(y,a(a({ref:t},u),{},{components:n})):r.createElement(y,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},91406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(87462),o=(n(67294),n(3905));const l={id:"full-sync",title:"Full Sync",sidebar_label:"Full Sync",slug:"full-sync"},a="Testnet Full sync",s={unversionedId:"testnet/join-public/full-sync",id:"testnet/join-public/full-sync",title:"Full Sync",description:"Software downgrade",source:"@site/docs/05-testnet/03-join-public/05-full-sync.md",sourceDirName:"05-testnet/03-join-public",slug:"/testnet/join-public/full-sync",permalink:"/next/testnet/join-public/full-sync",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/05-testnet/03-join-public/05-full-sync.md",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:5,frontMatter:{id:"full-sync",title:"Full Sync",sidebar_label:"Full Sync",slug:"full-sync"},sidebar:"docs",previous:{title:"State Sync",permalink:"/next/testnet/join-public/state-sync"},next:{title:"Endpoints",permalink:"/next/testnet/endpoints"}},c={},i=[{value:"Software downgrade",id:"software-downgrade",level:2}],u={toc:i};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testnet-full-sync"},"Testnet Full sync"),(0,o.kt)("h2",{id:"software-downgrade"},"Software downgrade"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"You will need to build the first version of the Desmos testnet in order to be able to sync the chain from scratch.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Make sure we are inside the home directory\ncd $HOME\n\n# Clone the Desmos software\ngit clone https://github.com/desmos-labs/desmos.git && cd desmos\n\n# Checkout the correct tag\ngit checkout tags/v0.17.0\n\n# Build the software\n# If you want to use the default database backend run\nmake install\n")))}d.isMDXComponent=!0}}]);