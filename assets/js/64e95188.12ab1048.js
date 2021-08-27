"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5355],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5257:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),s=["components"],o={id:"delete-relationship",title:"Delete relationship",sidebar_label:"Delete relationship",slug:"03-transactions/profiles/delete-relationship"},l="MsgDeleteRelationship",p={unversionedId:"developers/transactions/profiles/delete-relationship",id:"developers/transactions/profiles/delete-relationship",isDocsHomePage:!1,title:"Delete relationship",description:"This message allows you to delete an existing relationship with a specified counterparty.",source:"@site/docs/02-developers/03-transactions/profiles/delete-relationship.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/03-transactions/profiles/delete-relationship",permalink:"/next/developers/transactions/profiles/03-transactions/profiles/delete-relationship",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-transactions/profiles/delete-relationship.md",version:"current",lastUpdatedAt:1630057329,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"delete-relationship",title:"Delete relationship",sidebar_label:"Delete relationship",slug:"03-transactions/profiles/delete-relationship"},sidebar:"docs",previous:{title:"Create Relationship",permalink:"/next/developers/transactions/profiles/03-transactions/profiles/create-relationship"},next:{title:"Block user",permalink:"/next/developers/transactions/profiles/03-transactions/profiles/block-user"}},c=[{value:"Structure",id:"structure",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Message action",id:"message-action",children:[]}],d={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"msgdeleterelationship"},(0,i.kt)("inlineCode",{parentName:"h1"},"MsgDeleteRelationship")),(0,i.kt)("p",null,"This message allows you to delete an existing relationship with a specified counterparty."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgDeleteRelationship",\n  "user": "<Desmos address of the user deleting the relationship>",\n  "counterparty": "<Desmos address with which the sender want to end the relationship>",\n  "subspace": "<Subspace of the relationship>"\n}\n')),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"user")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is deleting the relationship"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"counterparty")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the relationship's counterparty"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"subspace")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identifies the app where the relationship should be valid"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgDeleteRelationship",\n  "user": "desmos1e209r8nc8qdkmqujahwrq4xrlxhk3fs9k7yzmw",\n  "counterparty": "desmos13p5pamrljhza3fp4es5m3llgmnde5fzcpq6nud",\n  "subspace": "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e"\n} \n')),(0,i.kt)("h2",{id:"message-action"},"Message action"),(0,i.kt)("p",null,"The action associated to this message is the following: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"delete_relationship\n")))}u.isMDXComponent=!0}}]);