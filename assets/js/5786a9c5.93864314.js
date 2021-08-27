"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3990],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,b=u["".concat(p,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(b,i(i({ref:t},l),{},{components:n})):a.createElement(b,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8591:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),i=["components"],o={},p="MSgEditSubspace",c={unversionedId:"developers/transactions/staging/subspaces/edit-subspace",id:"version-mainnet/developers/transactions/staging/subspaces/edit-subspace",isDocsHomePage:!1,title:"MSgEditSubspace",description:"This message allows you to edit an existent subspace.",source:"@site/versioned_docs/version-mainnet/02-developers/03-transactions/staging/subspaces/edit-subspace.md",sourceDirName:"02-developers/03-transactions/staging/subspaces",slug:"/developers/transactions/staging/subspaces/edit-subspace",permalink:"/developers/transactions/staging/subspaces/edit-subspace",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/02-developers/03-transactions/staging/subspaces/edit-subspace.md",version:"mainnet",lastUpdatedAt:1630057329,formattedLastUpdatedAt:"8/27/2021",frontMatter:{}},l=[{value:"Structure",id:"structure",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Example",id:"example",children:[]}],d={toc:l};function u(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"msgeditsubspace"},(0,s.kt)("inlineCode",{parentName:"h1"},"MSgEditSubspace")),(0,s.kt)("p",null,"This message allows you to edit an existent subspace."),(0,s.kt)("h2",{id:"structure"},"Structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1beta1.MsgEditSubspace",\n  "id": "<ID of the subspace to edit>",\n  "owner": "<Desmos address of the new owner of the subspace>",\n  "name": "<New subspace name>",\n  "description": "<Description of the subspace>",\n  "logo": "<URI of the picture that identifies the subspace>",\n  "subspace_type": "<Type of the subspace>",\n  "editor": "<Desmos address of the subspace editor>"\n}\n')),(0,s.kt)("h2",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"subspace_id")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"ID of the subspace to edit")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"owner")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the new owner of the subspace")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"name")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"New name of the subspace")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"description")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Description of the subspace")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"logo")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"URI of the picture that identifies the subspace")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"subspace_type")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Enum"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Tells if users can post in it without being registered")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"editor")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the subspace editor")))),(0,s.kt)("p",null,"Please note that the ",(0,s.kt)("inlineCode",{parentName:"p"},"subspace_type")," field will only accept the following values:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SubspaceTypeOpen")," ( ",(0,s.kt)("inlineCode",{parentName:"li"},"1"),") to signal an open subspace that does not require any registration to be allowed to post inside it"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"SubspaceTypeClosed")," (",(0,s.kt)("inlineCode",{parentName:"li"},"2"),") to signal a closed subspace that does require a registration in order to be allowed to post inside it")),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1beta1.MsgEditSubspace",\n  "id": "19de02e105c68a60e45c289bff19fde745bca9c63c38f2095b59e8e8090ae1af",\n  "owner": "desmos1tqzrfy9ujrk883e2wezsumyvq64gcm65vhdyr7",\n  "name": "mooncake",\n  "description": "a good cake with secret messages in it",\n  "logo": "https://mooncake-logo-png.com",\n  "subspace_type": 2,\n  "editor": "desmos14dz9drkw0dyagnht5fnj6s63cwpxxkw8zsx7x9"\n}\n')),(0,s.kt)("h1",{id:"message-action"},"Message action"),(0,s.kt)("p",null,"The action associated to this message is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"edit_subspace\n")))}u.isMDXComponent=!0}}]);