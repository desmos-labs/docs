"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90473:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={id:"setup",title:"Setup",sidebar_label:"Setup",slug:"setup"},i="Setup",s={unversionedId:"testnet/join-public/setup",id:"version-4.2.0/testnet/join-public/setup",title:"Setup",description:"See the testnet repo for information on the latest testnet,",source:"@site/versioned_docs/version-4.2.0/05-testnet/03-join-public/01-setup.md",sourceDirName:"05-testnet/03-join-public",slug:"/testnet/join-public/setup",permalink:"/testnet/join-public/setup",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/05-testnet/03-join-public/01-setup.md",tags:[],version:"4.2.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:1,frontMatter:{id:"setup",title:"Setup",sidebar_label:"Setup",slug:"setup"},sidebar:"docs",previous:{title:"create-local",permalink:"/testnet/create-local"},next:{title:"Genesis File",permalink:"/testnet/join-public/genesis-file"}},l={},p=[{value:"Validators",id:"validators",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup"},"Setup"),(0,o.kt)("admonition",{title:"Current Testnet  ",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/morpheus"},"testnet repo")," for information on the latest testnet,\nincluding the correct version of Desmos to use and details about the genesis file.  ")),(0,o.kt)("h2",{id:"validators"},"Validators"),(0,o.kt)("admonition",{title:"Requires Desmos executable  ",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"To join the public testnet you ",(0,o.kt)("strong",{parentName:"p"},"must")," have ",(0,o.kt)("a",{parentName:"p",href:"/fullnode/setup"},(0,o.kt)("inlineCode",{parentName:"a"},"desmos")," installed"),".  ")),(0,o.kt)("p",null,"To become a testnet validator, the mainnet instructions apply:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/fullnode/setup"},"Create a full node"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/validators/setup"},"Become a validator"))),(0,o.kt)("p",null,"The only difference is the Desmos software version and genesis file. See the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/morpheus"},"testnet repo")," for information on testnets, including the correct version of Desmos to use and details about the genesis file."))}c.isMDXComponent=!0}}]);