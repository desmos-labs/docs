"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[4716],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),f=o,d=m["".concat(i,".").concat(f)]||m[f]||l[f]||s;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3178:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),s=(n(7294),n(3905)),a=["components"],c={},i="Query the comments of a post",u={unversionedId:"developers/queries/staging/comments",id:"version-mainnet/developers/queries/staging/comments",isDocsHomePage:!1,title:"Query the comments of a post",description:"This query allows you to get all the comments related to the given post ID.",source:"@site/versioned_docs/version-mainnet/02-developers/04-queries/staging/comments.md",sourceDirName:"02-developers/04-queries/staging",slug:"/developers/queries/staging/comments",permalink:"/developers/queries/staging/comments",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/02-developers/04-queries/staging/comments.md",version:"mainnet",lastUpdatedAt:1630057329,formattedLastUpdatedAt:"8/27/2021",frontMatter:{}},p=[],l={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"query-the-comments-of-a-post"},"Query the comments of a post"),(0,s.kt)("p",null,"This query allows you to get all the comments related to the given post ID. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"CLI")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query posts post-comments [post-id]\n\n# Example\n# desmos query posts post-comments 301921ac3c8e623d8f35aef1886fea20849e49f08ec8ddfdd9b96feaf0c4fd15\n")))}m.isMDXComponent=!0}}]);