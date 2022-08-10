"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15197],{3905:(e,s,t)=>{t.d(s,{Zo:()=>u,kt:()=>d});var r=t(67294);function n(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function o(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);s&&(r=r.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?o(Object(t),!0).forEach((function(s){n(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function i(e,s){if(null==e)return{};var t,r,n=function(e,s){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],s.indexOf(t)>=0||(n[t]=e[t]);return n}(e,s);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),p=function(e){var s=r.useContext(l),t=s;return e&&(t="function"==typeof e?e(s):a(a({},s),e)),t},u=function(e){var s=p(e.components);return r.createElement(l.Provider,{value:s},e.children)},m={inlineCode:"code",wrapper:function(e){var s=e.children;return r.createElement(r.Fragment,{},s)}},c=r.forwardRef((function(e,s){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),d=n,g=c["".concat(l,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(g,a(a({ref:s},u),{},{components:t})):r.createElement(g,a({ref:s},u))}));function d(e,s){var t=arguments,n=s&&s.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=c;var i={};for(var l in s)hasOwnProperty.call(s,l)&&(i[l]=s[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},36305:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const o={id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},a="Msg Service",i={unversionedId:"developers/modules/subspaces/messages",id:"version-4.2.0/developers/modules/subspaces/messages",title:"Messages",description:"Msg/CreateSubspace",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/subspaces/04-messages.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/messages",permalink:"/developers/modules/subspaces/messages",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/subspaces/04-messages.md",tags:[],version:"4.2.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:4,frontMatter:{id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},sidebar:"docs",previous:{title:"State",permalink:"/developers/modules/subspaces/state"},next:{title:"Events",permalink:"/developers/modules/subspaces/events"}},l={},p=[{value:"Msg/CreateSubspace",id:"msgcreatesubspace",level:2},{value:"Msg/EditSubspace",id:"msgeditsubspace",level:2},{value:"Msg/DeleteSubspace",id:"msgdeletesubspace",level:2},{value:"Msg/CreateSection",id:"msgcreatesection",level:2},{value:"Msg/EditSection",id:"msgeditsection",level:2},{value:"Msg/MoveSection",id:"msgmovesection",level:2},{value:"Msg/DeleteSection",id:"msgdeletesection",level:2},{value:"Msg/CreateUserGroup",id:"msgcreateusergroup",level:2},{value:"Msg/EditUserGroup",id:"msgeditusergroup",level:2},{value:"Msg/MoveUserGroup",id:"msgmoveusergroup",level:2},{value:"Msg/SetUserGroupPermissions",id:"msgsetusergrouppermissions",level:2},{value:"Msg/DeleteUserGroup",id:"msgdeleteusergroup",level:2},{value:"Msg/AddUserToUserGroup",id:"msgaddusertousergroup",level:2},{value:"Msg/RemoveUserFromUserGroup",id:"msgremoveuserfromusergroup",level:2},{value:"Msg/SetUserPermissions",id:"msgsetuserpermissions",level:2}],u={toc:p};function m(e){let{components:s,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,t,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"msg-service"},"Msg Service"),(0,n.kt)("h2",{id:"msgcreatesubspace"},"Msg/CreateSubspace"),(0,n.kt)("p",null,"A subspace can be created with the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgCreateSubspace"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L65-L75 \n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the provided name is either empty or blank;"),(0,n.kt)("li",{parentName:"ul"},"the specified treasury address (if any) is invalid;"),(0,n.kt)("li",{parentName:"ul"},"the specified owner address (if any) is invalid.")),(0,n.kt)("h2",{id:"msgeditsubspace"},"Msg/EditSubspace"),(0,n.kt)("p",null,"A subspace can be edited with the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgEditSubspace"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L85-L100 \n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the updated subspace is invalid;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to edit the subspace.")),(0,n.kt)("h2",{id:"msgdeletesubspace"},"Msg/DeleteSubspace"),(0,n.kt)("p",null,"A subspace can be deleted using ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgDeleteSubspace"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L105-L115 \n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to delete the subspace.")),(0,n.kt)("h2",{id:"msgcreatesection"},"Msg/CreateSection"),(0,n.kt)("p",null,"A section can be created using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgCreateSection"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L122-L145 \n")),(0,n.kt)("p",null,"The message is expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the parent section (if specified) does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the creator has no permission to manage sections within the subspace;"),(0,n.kt)("li",{parentName:"ul"},"the provided section name is either empty or blank.")),(0,n.kt)("h2",{id:"msgeditsection"},"Msg/EditSection"),(0,n.kt)("p",null,"A section can be edited using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgEditSection"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L156-L179 \n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the section does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the editor has no permission to manage sections within the subspace.")),(0,n.kt)("h2",{id:"msgmovesection"},"Msg/MoveSection"),(0,n.kt)("p",null,"A section can be moved to under another section using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgMoveSection"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L184-L207 \n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the section does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the destination section does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to manage sections within the subspace;"),(0,n.kt)("li",{parentName:"ul"},"the new section path is invalid (this means that is not possible to reach the moved section starting from the root section, or that a circular path is detected).")),(0,n.kt)("h2",{id:"msgdeletesection"},"Msg/DeleteSection"),(0,n.kt)("p",null,"A section can be deleted using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgDeleteSection"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L212-L228 \n")),(0,n.kt)("p",null,"It's is expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the section does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to manage sections within the subspace.")),(0,n.kt)("h2",{id:"msgcreateusergroup"},"Msg/CreateUserGroup"),(0,n.kt)("p",null,"A user group can be created using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgCreateUserGroup"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L235-L265 \n")),(0,n.kt)("p",null,"The message is expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the section does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permissions to create a user group or set permissions within the section;"),(0,n.kt)("li",{parentName:"ul"},"the permissions values are not valid;"),(0,n.kt)("li",{parentName:"ul"},"the provided user group name is either blank or empty.")),(0,n.kt)("h2",{id:"msgeditusergroup"},"Msg/EditUserGroup"),(0,n.kt)("p",null,"A user group can be edited using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgEditUserGroup"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L271-L293\n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the user group does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to manage user groups within the subspace;"),(0,n.kt)("li",{parentName:"ul"},"the updated group is invalid.")),(0,n.kt)("h2",{id:"msgmoveusergroup"},"Msg/MoveUserGroup"),(0,n.kt)("p",null,"A user group can be moved to another section group using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgMoveUserGroup"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L298-L321\n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the user group does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the destination section does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to manage user groups inside the current group's section;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permissions to manage user groups or set permissions inside the destination section.")),(0,n.kt)("h2",{id:"msgsetusergrouppermissions"},"Msg/SetUserGroupPermissions"),(0,n.kt)("p",null,"A user group permissions can be set using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgSetUserGroupPermissions"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L326-L347\n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the user group does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to set permissions within the group's section;"),(0,n.kt)("li",{parentName:"ul"},"the permissions values are not valid;"),(0,n.kt)("li",{parentName:"ul"},"the signer is inside the user group and it is not the subspace owner.")),(0,n.kt)("h2",{id:"msgdeleteusergroup"},"Msg/DeleteUserGroup"),(0,n.kt)("p",null,"A user group permissions can be deleted using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgDeleteUserGroup"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L353-L369\n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the user group does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to manage sections inside the group's section.")),(0,n.kt)("h2",{id:"msgaddusertousergroup"},"Msg/AddUserToUserGroup"),(0,n.kt)("p",null,"A user can be added to a user group using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgAddUserToUserGroup"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L376-L396\n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the user group does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to set permissions inside the subspace and section where user group is;"),(0,n.kt)("li",{parentName:"ul"},"the user already is a member of the user group.")),(0,n.kt)("h2",{id:"msgremoveuserfromusergroup"},"Msg/RemoveUserFromUserGroup"),(0,n.kt)("p",null,"A user can be removed from a user group using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgRemoveUserFromUserGroup"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L402-L422\n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the user group does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the sender has no permission to set permissions inside the subspace and section where user group is;"),(0,n.kt)("li",{parentName:"ul"},"the user is not the member of the user group.")),(0,n.kt)("h2",{id:"msgsetuserpermissions"},"Msg/SetUserPermissions"),(0,n.kt)("p",null,"A user permissions can be set using the ",(0,n.kt)("inlineCode",{parentName:"p"},"MsgSetUserPermissions"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.2.0/proto/desmos/subspaces/v3/msgs.proto#L430-L454\n")),(0,n.kt)("p",null,"It's expected to fail if:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the section does not exist;"),(0,n.kt)("li",{parentName:"ul"},"the signer has no permission to set permissions inside the destination section;"),(0,n.kt)("li",{parentName:"ul"},"the permissions values are not valid.")))}m.isMDXComponent=!0}}]);