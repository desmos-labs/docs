"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95029],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),f=c(t),u=r,m=f["".concat(l,".").concat(u)]||f[u]||p[u]||i;return t?o.createElement(m,s(s({ref:n},d),{},{components:t})):o.createElement(m,s({ref:n},d))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var c=2;c<i;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},90908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const i={id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},s="Genesis file",a={unversionedId:"mainnet/genesis-file",id:"version-4.1.0/mainnet/genesis-file",title:"Genesis File",description:"To configure a full node for the mainnet you need to use the following seed nodes. If you are looking for testnet seed nodes, please refer to this instead.",source:"@site/versioned_docs/version-4.1.0/06-mainnet/01-genesis-file.md",sourceDirName:"06-mainnet",slug:"/mainnet/genesis-file",permalink:"/4.1.0/mainnet/genesis-file",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/06-mainnet/01-genesis-file.md",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:1,frontMatter:{id:"genesis-file",title:"Genesis File",sidebar_label:"Genesis File",slug:"genesis-file"},sidebar:"docs",previous:{title:"Endpoints",permalink:"/4.1.0/testnet/endpoints"},next:{title:"Seeds",permalink:"/4.1.0/mainnet/seeds"}},l={},c=[{value:"1. Download",id:"1-download",level:2},{value:"2. Check",id:"2-check",level:2}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"genesis-file"},"Genesis file"),(0,r.kt)("admonition",{title:"Mainnet only   ",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To configure a full node for the ",(0,r.kt)("strong",{parentName:"p"},"mainnet")," you need to use the following seed nodes. If you are looking for testnet seed nodes, please refer to ",(0,r.kt)("a",{parentName:"p",href:"/4.1.0/testnet/join-public/genesis-file"},"this")," instead.  ")),(0,r.kt)("p",null,"To connect to the ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos-mainnet"),", you will need the corresponding genesis file."),(0,r.kt)("h2",{id:"1-download"},"1. Download"),(0,r.kt)("p",null,"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/mainnet"},"mainnet repo")," and\ndownload the correct genesis file by running the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the existing genesis file for the mainnet\n# Replace <chain-id> with the id of the testnet you would like to join\ncurl https://raw.githubusercontent.com/desmos-labs/mainnet/main/genesis.json > ~/.desmos/config/genesis.json\n")),(0,r.kt)("h2",{id:"2-check"},"2. Check"),(0,r.kt)("p",null,"After the download, ensure it's the correct one by checking that it has the same hashsum below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"jq -S -c -M '' /root/.desmos/config/genesis.json | shasum -a 256\n619c9462ccd9045522300c5ce9e7f4662cac096eed02ef0535cca2a6826074c4  -\n")))}p.isMDXComponent=!0}}]);