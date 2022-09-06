"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[57189],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=l.createContext({}),u=function(e){var t=l.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||r;return n?l.createElement(k,p(p({ref:t},s),{},{components:n})):l.createElement(k,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var u=2;u<r;u++)p[u]=n[u];return l.createElement.apply(null,p)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const r={id:"client",title:"Client",sidebar_label:"Client",slug:"client"},p="Client",o={unversionedId:"developers/modules/supply/client",id:"developers/modules/supply/client",title:"Client",description:"CLI",source:"@site/docs/02-developers/02-modules/supply/03-client.md",sourceDirName:"02-developers/02-modules/supply",slug:"/developers/modules/supply/client",permalink:"/next/developers/modules/supply/client",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/supply/03-client.md",tags:[],version:"current",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:3,frontMatter:{id:"client",title:"Client",sidebar_label:"Client",slug:"client"},sidebar:"docs",previous:{title:"Concepts",permalink:"/next/developers/modules/supply/concepts"},next:{title:"Tools to build DApps",permalink:"/next/developers/tools-to-build"}},i={},u=[{value:"CLI",id:"cli",level:2},{value:"Query",id:"query",level:3},{value:"About the divider exponent",id:"about-the-divider-exponent",level:5},{value:"total",id:"total",level:4},{value:"circulating",id:"circulating",level:4},{value:"gRPC",id:"grpc",level:2},{value:"Total",id:"total-1",level:3},{value:"Circulating",id:"circulating-1",level:3},{value:"REST",id:"rest",level:2},{value:"Total",id:"total-2",level:3},{value:"Circulating",id:"circulating-2",level:3}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"client"},"Client"),(0,a.kt)("h2",{id:"cli"},"CLI"),(0,a.kt)("p",null,"A user can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"supply")," module using the CLI. "),(0,a.kt)("h3",{id:"query"},"Query"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," commands allow users to query the ",(0,a.kt)("inlineCode",{parentName:"p"},"supply")," state. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"desmos query supply --help\n")),(0,a.kt)("h5",{id:"about-the-divider-exponent"},"About the divider exponent"),(0,a.kt)("p",null,"Both the ",(0,a.kt)("inlineCode",{parentName:"p"},"total")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"circulating")," queries allow to specify an optional ",(0,a.kt)("inlineCode",{parentName:"p"},"divider exponent"),".\nIf provided, such exponent will be used to divide the resulting amount by ",(0,a.kt)("inlineCode",{parentName:"p"},"10^(divider exponent)"),".  "),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"supply = 1.000.000\ndivider_exponent = 3\nresult = 1.000.000 / 10^3 = 1.000\n")),(0,a.kt)("h4",{id:"total"},"total"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"total")," command allows users to query the total supply of a token given a denomination and an optional divider exponent.\nIf a divider exponent is provided, the resulting supply amount will be divided by ",(0,a.kt)("inlineCode",{parentName:"p"},"10^(divider_exponent)"),".  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query supply total [denom] [[divider_exponent]] [flags]\n")),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query supply total udsm 2\n")),(0,a.kt)("p",null,"Example Output: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'total_supply: "100003895600953035670"\n')),(0,a.kt)("h4",{id:"circulating"},"circulating"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"circulating")," command allows users to query the circulating supply of a token given a denomination. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query supply circulating [denom] [[divider_exponent]] [flags]\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query supply circulating udsm 2\n")),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'circulating_supply: "100003882303991703831"\n')),(0,a.kt)("h2",{id:"grpc"},"gRPC"),(0,a.kt)("p",null,"A user can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"supply")," module gRPC endpoints. "),(0,a.kt)("h3",{id:"total-1"},"Total"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Total")," endpoint allows users to query for the total supply of a token given a denomination. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.supply.v1.Query/Total\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"denom": "stake", "divider_exponent": "2"}\' localhost:9090 desmos.supply.v1.Query/Total\n')),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "totalSupply": "1000040727987145688"\n}\n')),(0,a.kt)("h3",{id:"circulating-1"},"Circulating"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Circulating")," endpoint allows users to query for the circulating supply of a token given a denomination."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"desmos.supply.v1.Query/Circulating\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'grpcurl -plaintext \\\n  -d \'{"denom": "stake", "divider_exponent": "2"}\' localhost:9090 desmos.supply.v1.Query/Circulating\n')),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "circulatingSupply": "1000040236507203206"\n}\n')),(0,a.kt)("h2",{id:"rest"},"REST"),(0,a.kt)("p",null,"A user can query the ",(0,a.kt)("inlineCode",{parentName:"p"},"supply")," module using REST endpoints. "),(0,a.kt)("h3",{id:"total-2"},"Total"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/total")," endpoint allows users to query for the total supply of a token given a denomination. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/supply/total/{denom}\n")),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1317/supply/total/stake?divider-exponent=2\n")),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"1000040727987145688\n")),(0,a.kt)("h3",{id:"circulating-2"},"Circulating"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"/circulating")," endpoint allows users to query for the circulating supply of a token given a denomination."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"/supply/circulating/{denom}\n")),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1317/supply/circulating/stake?divider-exponent=2\n")),(0,a.kt)("p",null,"Example Output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"1000040236507203206\n")))}d.isMDXComponent=!0}}]);