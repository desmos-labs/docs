"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[66171],{3905:(e,r,s)=>{s.d(r,{Zo:()=>m,kt:()=>b});var t=s(67294);function o(e,r,s){return r in e?Object.defineProperty(e,r,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[r]=s,e}function u(e,r){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),s.push.apply(s,t)}return s}function n(e){for(var r=1;r<arguments.length;r++){var s=null!=arguments[r]?arguments[r]:{};r%2?u(Object(s),!0).forEach((function(r){o(e,r,s[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}function p(e,r){if(null==e)return{};var s,t,o=function(e,r){if(null==e)return{};var s,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)s=u[t],r.indexOf(s)>=0||(o[s]=e[s]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)s=u[t],r.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var a=t.createContext({}),i=function(e){var r=t.useContext(a),s=r;return e&&(s="function"==typeof e?e(r):n(n({},r),e)),s},m=function(e){var r=i(e.components);return t.createElement(a.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var s=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=i(s),b=o,d=c["".concat(a,".").concat(b)]||c[b]||l[b]||u;return s?t.createElement(d,n(n({ref:r},m),{},{components:s})):t.createElement(d,n({ref:r},m))}));function b(e,r){var s=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=s.length,n=new Array(u);n[0]=c;var p={};for(var a in r)hasOwnProperty.call(r,a)&&(p[a]=r[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,n[1]=p;for(var i=2;i<u;i++)n[i]=s[i];return t.createElement.apply(null,n)}return t.createElement.apply(null,s)}c.displayName="MDXCreateElement"},38489:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>n,default:()=>l,frontMatter:()=>u,metadata:()=>p,toc:()=>i});var t=s(87462),o=(s(67294),s(3905));const u={id:"user-group-members",title:"Query user group members",sidebar_label:"Query user group members",slug:"user-group-members"},n=void 0,p={unversionedId:"developers/queries/subspaces/user-group-members",id:"version-3/developers/queries/subspaces/user-group-members",title:"Query user group members",description:"Query user group members",source:"@site/versioned_docs/version-3/02-developers/04-queries/subspaces/user-group-members.md",sourceDirName:"02-developers/04-queries/subspaces",slug:"/developers/queries/subspaces/user-group-members",permalink:"/3/developers/queries/subspaces/user-group-members",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/04-queries/subspaces/user-group-members.md",tags:[],version:"3",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"user-group-members",title:"Query user group members",sidebar_label:"Query user group members",slug:"user-group-members"},sidebar:"version-3/docs",previous:{title:"Query user group",permalink:"/3/developers/queries/subspaces/user-group"},next:{title:"Query user permissions",permalink:"/3/developers/queries/subspaces/user-permissions"}},a={},i=[{value:"Query user group members",id:"query-user-group-members",level:2}],m={toc:i};function l(e){let{components:r,...s}=e;return(0,o.kt)("wrapper",(0,t.Z)({},m,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"query-user-group-members"},"Query user group members"),(0,o.kt)("p",null,"This query allows to get all the members of a given user group"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLI")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"desmos query subspaces groups members [subspace-id] [group-id] [flags]\n\n# Examples\n# desmos query subspaces groups members 1 1 --page=2 --limit=100\n")))}l.isMDXComponent=!0}}]);