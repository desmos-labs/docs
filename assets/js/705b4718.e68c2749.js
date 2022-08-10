"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[41093],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=t.createContext({}),a=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=a(e.components);return t.createElement(o.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=a(n),m=i,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||l;return n?t.createElement(f,s(s({ref:r},c),{},{components:n})):t.createElement(f,s({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var l=n.length,s=new Array(l);s[0]=d;var p={};for(var o in r)hasOwnProperty.call(r,o)&&(p[o]=r[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var a=2;a<l;a++)s[a]=n[a];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},34010:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>a});var t=n(87462),i=(n(67294),n(3905));const l={id:"application-links",title:"Query application links",sidebar_label:"Application links",slug:"application-link"},s=void 0,p={unversionedId:"developers/queries/profiles/application-links",id:"version-3/developers/queries/profiles/application-links",title:"Query application links",description:"Query application links",source:"@site/versioned_docs/version-3/02-developers/04-queries/profiles/application-links.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/application-link",permalink:"/3/developers/queries/profiles/application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/profiles/application-links.md",tags:[],version:"3",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"application-links",title:"Query application links",sidebar_label:"Application links",slug:"application-link"},sidebar:"version-3/docs",previous:{title:"Chain links",permalink:"/3/developers/queries/profiles/chain-links"},next:{title:"Relationships",permalink:"/3/developers/queries/relationships/relationships"}},o={},a=[{value:"Query application links",id:"query-application-links",level:2}],c={toc:a};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"query-application-links"},"Query application links"),(0,i.kt)("p",null,"This query allows you to retrieve the application links with the optional user ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'desmos query profiles app-links [[user]] [[application]] [[username]] [flags]\n\n# Examples\n# desmos query profiles app-links \n# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "twitter"\n# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "twitter" "twitter_user"\n# desmos query profiles app-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100\n')))}u.isMDXComponent=!0}}]);