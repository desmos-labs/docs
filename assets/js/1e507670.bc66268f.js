"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[26574],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},u=Object.keys(e);for(s=0;s<u.length;s++)t=u[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(s=0;s<u.length;s++)t=u[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var a=s.createContext({}),i=function(e){var r=s.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=i(e.components);return s.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=i(t),f=n,g=d["".concat(a,".").concat(f)]||d[f]||l[f]||u;return t?s.createElement(g,o(o({ref:r},c),{},{components:t})):s.createElement(g,o({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,o=new Array(u);o[0]=d;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<u;i++)o[i]=t[i];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},24985:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return p},metadata:function(){return i},toc:function(){return l}});var s=t(87462),n=t(63366),u=(t(67294),t(3905)),o=["components"],p={id:"user-groups",title:"Query user groups",sidebar_label:"Query user groups",slug:"user-groups"},a=void 0,i={unversionedId:"developers/queries/subspaces/user-groups",id:"version-3/developers/queries/subspaces/user-groups",title:"Query user groups",description:"Query user groups",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/user-groups.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/user-groups",permalink:"/developers/queries/subspaces/user-groups",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/user-groups.md",tags:[],version:"3",lastUpdatedAt:1657531086,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"user-groups",title:"Query user groups",sidebar_label:"Query user groups",slug:"user-groups"},sidebar:"version-3/docs",previous:{title:"Query subspace",permalink:"/developers/queries/subspaces/subspace"},next:{title:"Query user group",permalink:"/developers/queries/subspaces/user-group"}},c={},l=[{value:"Query user groups",id:"query-user-groups",level:2}],d={toc:l};function f(e){var r=e.components,t=(0,n.Z)(e,o);return(0,u.kt)("wrapper",(0,s.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("h2",{id:"query-user-groups"},"Query user groups"),(0,u.kt)("p",null,"This query allows to get all the groups that are present inside the subspace with the given id"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},"CLI")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups list [subspace-id] [flags]\n\n# Examples\n# desmos query subspaces groups list 1 --page=2 --limit=100\n")))}f.isMDXComponent=!0}}]);