"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5709],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(p,".").concat(m)]||c[m]||l[m]||s;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1913:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return l}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={id:"edit-user-group",title:"Edit user group",sidebar_label:"Edit user group",slug:"edit-user-group"},p="MsgEditUserGroup",u={unversionedId:"developers/transactions/subspaces/edit-user-group",id:"developers/transactions/subspaces/edit-user-group",title:"Edit user group",description:"This message allows to edit an existent user group.",source:"@site/docs/02-developers/03-transactions/subspaces/edit-user-group.md",sourceDirName:"02-developers/03-transactions/subspaces",slug:"/developers/transactions/subspaces/edit-user-group",permalink:"/next/developers/transactions/subspaces/edit-user-group",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-transactions/subspaces/edit-user-group.md",tags:[],version:"current",lastUpdatedAt:1655125428,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"edit-user-group",title:"Edit user group",sidebar_label:"Edit user group",slug:"edit-user-group"},sidebar:"docs",previous:{title:"Create user group",permalink:"/next/developers/transactions/subspaces/create-user-group"},next:{title:"Add user to group",permalink:"/next/developers/transactions/subspaces/add-user-to-group"}},d={},l=[{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],c={toc:l};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"msgeditusergroup"},(0,s.kt)("inlineCode",{parentName:"h1"},"MsgEditUserGroup")),(0,s.kt)("p",null,"This message allows to edit an existent user group."),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"subspace_id")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Uint64"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Id of the subspace where the group has been created"),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"group_id")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Uint32"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Id of the group to edit"),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"name")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Human-readable name to edit"),(0,s.kt)("td",{parentName:"tr",align:"left"},"no")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"description")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Description of the group to edit"),(0,s.kt)("td",{parentName:"tr",align:"left"},"no")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"signer")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Address of the editor of the group"),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1.MsgEditUserGroup",\n  "subspace_id": "1",\n  "group_id": 1,\n  "name": "Edited name",\n  "description": "Edited description",\n  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"\n}\n')),(0,s.kt)("h2",{id:"message-action"},"Message action"),(0,s.kt)("p",null,"The action associated to this message is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"edit_user_group\n")))}m.isMDXComponent=!0}}]);