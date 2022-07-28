"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[41814],{3905:function(t,e,a){a.d(e,{Zo:function(){return i},kt:function(){return o}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),d=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},i=function(t){var e=d(t.components);return r.createElement(m.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,i=p(t,["components","mdxType","originalType","parentName"]),k=d(a),o=n,N=k["".concat(m,".").concat(o)]||k[o]||g[o]||l;return a?r.createElement(N,s(s({ref:e},i),{},{components:a})):r.createElement(N,s({ref:e},i))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,s=new Array(l);s[0]=k;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,s[1]=p;for(var d=2;d<l;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},27021:function(t,e,a){a.r(e),a.d(e,{assets:function(){return i},contentTitle:function(){return m},default:function(){return o},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return g}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),s=["components"],p={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},m="Events",d={unversionedId:"developers/modules/subspaces/events",id:"version-4.1.0/developers/modules/subspaces/events",title:"Events",description:"The subspaces module emits the following events:",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/subspaces/05-events.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/events",permalink:"/developers/modules/subspaces/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/subspaces/05-events.md",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/developers/modules/subspaces/messages"},next:{title:"Permissions",permalink:"/developers/modules/subspaces/permissions"}},i={},g=[{value:"Handlers",id:"handlers",level:2},{value:"MsgCreateSubspace",id:"msgcreatesubspace",level:3},{value:"MsgEditSubspace",id:"msgeditsubspace",level:3},{value:"MsgDeleteSubspace",id:"msgdeletesubspace",level:3},{value:"MsgCreateSection",id:"msgcreatesection",level:3},{value:"MsgEditSection",id:"msgeditsection",level:3},{value:"MsgMoveSection",id:"msgmovesection",level:3},{value:"MsgDeleteSection",id:"msgdeletesection",level:3},{value:"MsgCreateUserGroup",id:"msgcreateusergroup",level:3},{value:"MsgEditUserGroup",id:"msgeditusergroup",level:3},{value:"MsgMoveUserGroup",id:"msgmoveusergroup",level:3},{value:"MsgSetUserGroupPermissions",id:"msgsetusergrouppermissions",level:3},{value:"MsgDeleteUserGroup",id:"msgdeleteusergroup",level:3},{value:"MsgAddUserToUserGroup",id:"msgaddusertousergroup",level:3},{value:"MsgRemoveUserFromUserGroup",id:"msgremoveuserfromusergroup",level:3},{value:"MsgSetUserPermissions",id:"msgsetuserpermissions",level:3}],k={toc:g};function o(t){var e=t.components,a=(0,n.Z)(t,s);return(0,l.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"The subspaces module emits the following events:"),(0,l.kt)("h2",{id:"handlers"},"Handlers"),(0,l.kt)("h3",{id:"msgcreatesubspace"},"MsgCreateSubspace"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceName}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_creator"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceCreator}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"creation_date"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceCreationTime}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgCreateSubspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgeditsubspace"},"MsgEditSubspace"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"edit_subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgEditSubspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgdeletesubspace"},"MsgDeleteSubspace"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_subspace"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgDeleteSubspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgcreatesection"},"MsgCreateSection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_section"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_section"),(0,l.kt)("td",{parentName:"tr",align:"left"},"section_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{sectionID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgCreateSection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgeditsection"},"MsgEditSection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"edit_section"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"edit_section"),(0,l.kt)("td",{parentName:"tr",align:"left"},"section_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{sectionID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgEditSection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgmovesection"},"MsgMoveSection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"move_section"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"move_section"),(0,l.kt)("td",{parentName:"tr",align:"left"},"section_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{sectionID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgMoveSection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgdeletesection"},"MsgDeleteSection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_section"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_section"),(0,l.kt)("td",{parentName:"tr",align:"left"},"section_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{sectionID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgDeleteSection")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgcreateusergroup"},"MsgCreateUserGroup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_user_group"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_user_group"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user_group_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userGroupID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgCreateUserGroup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgeditusergroup"},"MsgEditUserGroup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"edit_user_group"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"edit_user_group"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user_group_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userGroupID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgEditUserGroup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgmoveusergroup"},"MsgMoveUserGroup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"move_user_group"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"move_user_group"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user_group_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userGroupID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgMoveUserGroup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgsetusergrouppermissions"},"MsgSetUserGroupPermissions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_user_group_permissions"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_user_group_permissions"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user_group_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userGroupID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgSetUserGroupPermissions")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgdeleteusergroup"},"MsgDeleteUserGroup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_user_group"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_user_group"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user_group_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userGroupID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgDeleteUserGroup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgaddusertousergroup"},"MsgAddUserToUserGroup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"add_group_member"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"add_group_member"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user_group_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userGroupID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"add_group_member"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgAddUserToUserGroup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgremoveuserfromusergroup"},"MsgRemoveUserFromUserGroup"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"remove_group_member"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"remove_group_member"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user_group_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userGroupID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"remove_group_member"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgRemoveUserFromUserGroup")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h3",{id:"msgsetuserpermissions"},"MsgSetUserPermissions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_user_permissions"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"set_user_permissions"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"subspaces")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.subspaces.v2.MsgEditSubspace")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))))}o.isMDXComponent=!0}}]);