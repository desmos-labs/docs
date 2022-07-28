"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29966],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return f}});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)r=s[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=t.createContext({}),c=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||s;return r?t.createElement(m,o(o({ref:n},p),{},{components:r})):t.createElement(m,o({ref:n},p))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<s;c++)o[c]=r[c];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27593:function(e,n,r){r.r(n),r.d(n,{assets:function(){return p},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=r(87462),i=r(63366),s=(r(67294),r(3905)),o=["components"],l={id:"chain-links",title:"Query chain links",sidebar_label:"Chain links",slug:"chain-links"},a=void 0,c={unversionedId:"developers/queries/profiles/chain-links",id:"version-3/developers/queries/profiles/chain-links",title:"Query chain links",description:"Query chain links",source:"@site/versioned_docs/version-3/02-developers/04-queries/profiles/chain-links.md",sourceDirName:"02-developers/04-queries/profiles",slug:"/developers/queries/profiles/chain-links",permalink:"/3/developers/queries/profiles/chain-links",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/profiles/chain-links.md",tags:[],version:"3",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"chain-links",title:"Query chain links",sidebar_label:"Chain links",slug:"chain-links"},sidebar:"version-3/docs",previous:{title:"Incoming DTag requests",permalink:"/3/developers/queries/profiles/incoming-dtag-requests"},next:{title:"Application links",permalink:"/3/developers/queries/profiles/application-link"}},p={},u=[{value:"Query chain links",id:"query-chain-links",level:2}],d={toc:u};function f(e){var n=e.components,r=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"query-chain-links"},"Query chain links"),(0,s.kt)("p",null,"This query allows you to retrieve all the chain links with optional user ",(0,s.kt)("inlineCode",{parentName:"p"},"address"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"chain_name")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"target"),"."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CLI")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'desmos query profiles chain-links [[user]] [[chain_name]] [[target]] [flags]\n\n# Examples\n# desmos query profiles chain-links\n# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud\n# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud --page=2 --limit=100\n# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "cosmos"\n# desmos query profiles chain-links desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud "cosmos" cosmos19s242dxhxgzlsdmfjjg38jgfwhxca7569g84sw\n')))}f.isMDXComponent=!0}}]);