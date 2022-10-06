"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[14681],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>f});var t=n(67294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=t.createContext({}),c=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||s;return n?t.createElement(m,o(o({ref:r},p),{},{components:n})):t.createElement(m,o({ref:r},p))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=n.length,o=new Array(s);o[0]=d;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=n[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4344:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(87462),i=(n(67294),n(3905));const s={id:"chain-links",title:"Query chain links",sidebar_label:"Chain links",slug:"chain-links"},o=void 0,l={unversionedId:"developers/queries/profiles/chain-links",id:"version-2.3/developers/queries/profiles/chain-links",title:"Query chain links",description:"Query chain links",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/chain-links.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/chain-links",permalink:"/2.3/developers/queries/profiles/chain-links",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/04-queries/profiles/chain-links.md",tags:[],version:"2.3",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"chain-links",title:"Query chain links",sidebar_label:"Chain links",slug:"chain-links"},sidebar:"version-2.3/docs",previous:{title:"Blocked users",permalink:"/2.3/developers/queries/profiles/blocked-users"},next:{title:"Application links",permalink:"/2.3/developers/queries/profiles/application-link"}},a={},c=[{value:"Query chain links",id:"query-chain-links",level:2}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"query-chain-links"},"Query chain links"),(0,i.kt)("p",null,"This query allows you to retrieve the chain links with the optional user ",(0,i.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CLI")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles chain-links [[address]]\n\n# Example\n# desmos query chain-links\n# desmos query chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}u.isMDXComponent=!0}}]);