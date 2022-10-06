"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[33007],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=n.createContext({}),p=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(a.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(t),f=s,m=d["".concat(a,".").concat(f)]||d[f]||c[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9572:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),s=(t(67294),t(3905));const o={id:"relationships",title:"Query relationships",sidebar_label:"Relationships",slug:"relationships"},i=void 0,l={unversionedId:"developers/queries/profiles/relationships",id:"version-2.3/developers/queries/profiles/relationships",title:"Query relationships",description:"Query relationships",source:"@site/versioned_docs/version-2.3/02-developers/04-queries/profiles/relationships.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/relationships",permalink:"/2.3/developers/queries/profiles/relationships",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/04-queries/profiles/relationships.md",tags:[],version:"2.3",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"relationships",title:"Query relationships",sidebar_label:"Relationships",slug:"relationships"},sidebar:"version-2.3/docs",previous:{title:"Incoming DTag requests",permalink:"/2.3/developers/queries/profiles/incoming-dtag-requests"},next:{title:"Blocked users",permalink:"/2.3/developers/queries/profiles/blocked-users"}},a={},p=[{value:"Query relationships",id:"query-relationships",level:2}],u={toc:p};function c(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"query-relationships"},"Query relationships"),(0,s.kt)("p",null,"This query allows you to retrieve the relationships with the optional creator ",(0,s.kt)("inlineCode",{parentName:"p"},"address"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CLI")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query profiles relationships [[address]]\n\n# Example\n# desmos query relationships\n# desmos query relationships desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n")))}c.isMDXComponent=!0}}]);