"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1402],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),c=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(b,i(i({ref:t},l),{},{components:n})):a.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8031:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],p={id:"edit-subspace",title:"Edit subspace",sidebar_label:"Edit subspace",slug:"edit-subspace"},o="MsgEditSubspace",c={unversionedId:"developers/transactions/subspaces/edit-subspace",id:"developers/transactions/subspaces/edit-subspace",title:"Edit subspace",description:"This message allows to edit an existent subspace.",source:"@site/docs/02-developers/03-transactions/subspaces/edit-subspace.md",sourceDirName:"02-developers/03-transactions/subspaces",slug:"/developers/transactions/subspaces/edit-subspace",permalink:"/next/developers/transactions/subspaces/edit-subspace",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-transactions/subspaces/edit-subspace.md",tags:[],version:"current",lastUpdatedAt:1655125428,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"edit-subspace",title:"Edit subspace",sidebar_label:"Edit subspace",slug:"edit-subspace"},sidebar:"docs",previous:{title:"Create subspace",permalink:"/next/developers/transactions/subspaces/create-subspace"},next:{title:"Delete subspace",permalink:"/next/developers/transactions/subspaces/delete-subspace"}},l={},d=[{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"msgeditsubspace"},(0,s.kt)("inlineCode",{parentName:"h1"},"MsgEditSubspace")),(0,s.kt)("p",null,"This message allows to edit an existent subspace."),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"subspace_id")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Uint64"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Unique id that identifies the subspace"),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"name")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Human-readable name of the subspace"),(0,s.kt)("td",{parentName:"tr",align:"left"},"no")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"description")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Brief summary of what the subspace is about"),(0,s.kt)("td",{parentName:"tr",align:"left"},"no")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"treasury")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Address associated with the subspace used to connect it to external apps"),(0,s.kt)("td",{parentName:"tr",align:"left"},"no")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"owner")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Address of the owner of the subspace"),(0,s.kt)("td",{parentName:"tr",align:"left"},"no")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"signer")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Address of the signer of the message"),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1.MsgEditSubspace",\n  "subpspace_id": 1,\n  "name": "test",\n  "description": "This is a test subspace",\n  "treasury": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n  "owner": "desmos1rfv0f7mx7w9d3jv3h803u38vqym9ygg344asm3",\n  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"\n}\n')),(0,s.kt)("h2",{id:"message-action"},"Message action"),(0,s.kt)("p",null,"The action associated to this message is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"edit_subspace\n")))}m.isMDXComponent=!0}}]);