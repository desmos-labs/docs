"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[27799],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),a=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=a(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=a(n),m=o,f=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var a=2;a<i;a++)s[a]=n[a];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=n(87462),o=(n(67294),n(3905));const i={id:"endpoints",title:"Endpoints",sidebar_label:"Endpoints",slug:"endpoints"},s="Endpoints",l={unversionedId:"testnet/endpoints",id:"version-4.2.0/testnet/endpoints",title:"Endpoints",description:"Here below the list of all the useful endpoints you might need to interact with testnet data.",source:"@site/versioned_docs/version-4.2.0/05-testnet/04-endpoints.md",sourceDirName:"05-testnet",slug:"/testnet/endpoints",permalink:"/testnet/endpoints",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/05-testnet/04-endpoints.md",tags:[],version:"4.2.0",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:4,frontMatter:{id:"endpoints",title:"Endpoints",sidebar_label:"Endpoints",slug:"endpoints"},sidebar:"docs",previous:{title:"Full Sync",permalink:"/testnet/join-public/full-sync"},next:{title:"Genesis File",permalink:"/mainnet/genesis-file"}},p={},a=[{value:"RPC",id:"rpc",level:2},{value:"REST &amp; gRPC",id:"rest--grpc",level:2},{value:"GQL",id:"gql",level:2}],d={toc:a};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"endpoints"},"Endpoints"),(0,o.kt)("p",null,"Here below the list of all the useful endpoints you might need to interact with testnet data."),(0,o.kt)("h2",{id:"rpc"},"RPC"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://rpc.morpheus.desmos.network:443")," "),(0,o.kt)("h2",{id:"rest--grpc"},"REST & gRPC"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://lcd.morpheus.desmos.network")),(0,o.kt)("h2",{id:"gql"},"GQL"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://gql.morpheus.desmos.network/v1/graphql")))}c.isMDXComponent=!0}}]);