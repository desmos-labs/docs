"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[20119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var s=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=s.createContext({}),p=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=o,v=u["".concat(l,".").concat(h)]||u[h]||c[h]||n;return r?s.createElement(v,a(a({ref:t},d),{},{components:r})):s.createElement(v,a({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<n;p++)a[p]=r[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84073:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var s=r(87462),o=(r(67294),r(3905));const n={id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},a="Concepts",i={unversionedId:"developers/modules/reports/concepts",id:"version-4.2.0/developers/modules/reports/concepts",title:"Concepts",description:"Report",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/reports/02-concepts.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/concepts",permalink:"/developers/modules/reports/concepts",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/reports/02-concepts.md",tags:[],version:"4.2.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:2,frontMatter:{id:"concepts",title:"Concepts",sidebar_label:"Concepts",slug:"concepts"},sidebar:"docs",previous:{title:"Overview",permalink:"/developers/modules/reports/overview"},next:{title:"State",permalink:"/developers/modules/reports/state"}},l={},p=[{value:"Report",id:"report",level:2},{value:"Subspace ID",id:"subspace-id",level:3},{value:"ID",id:"id",level:3},{value:"Reasons IDs",id:"reasons-ids",level:3},{value:"Message (Optional)",id:"message-optional",level:3},{value:"Reporter",id:"reporter",level:3},{value:"Target",id:"target",level:3},{value:"Creation Date",id:"creation-date",level:3},{value:"User Target",id:"user-target",level:2},{value:"User",id:"user",level:3},{value:"Post Target",id:"post-target",level:2},{value:"Post ID",id:"post-id",level:3},{value:"Reason",id:"reason",level:2},{value:"Subspace ID",id:"subspace-id-1",level:3},{value:"ID",id:"id-1",level:3},{value:"Title",id:"title",level:3},{value:"Description (Optional)",id:"description-optional",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"concepts"},"Concepts"),(0,o.kt)("h2",{id:"report"},"Report"),(0,o.kt)("p",null,"A report represents the way that users have to report misbehaving users or bad contents inside Desmos.\nEach report contains the necessary information to identify the target and reason that lead to its creation."),(0,o.kt)("h3",{id:"subspace-id"},"Subspace ID"),(0,o.kt)("p",null,"The subspace id represents the id of the subspace where the report has been created."),(0,o.kt)("h3",{id:"id"},"ID"),(0,o.kt)("p",null,"The most important thing about a report is its id. This is a unique identifier across the subspace that is used to uniquely reference the report itself along with the subspace id. Report ids are assigned automatically during the handling of a ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgCreateReport"),". "),(0,o.kt)("h3",{id:"reasons-ids"},"Reasons IDs"),(0,o.kt)("p",null,"The reasons ids represent the array of the reasons that this report has been created for. Each id references a specific reason registered within the subspace of this report."),(0,o.kt)("h3",{id:"message-optional"},"Message (Optional)"),(0,o.kt)("p",null,"A report message can be optionally used to further describe why a user or content has been reported. This can be useful if the reporter wants to leave a message to other users or administrators that will deal with the report itself."),(0,o.kt)("h3",{id:"reporter"},"Reporter"),(0,o.kt)("p",null,"The address of the user that has created the report."),(0,o.kt)("h3",{id:"target"},"Target"),(0,o.kt)("p",null,"A report target represents the content that has been reported. This can be either a ",(0,o.kt)("a",{parentName:"p",href:"#UserTarget"},"UserTarget")," or a ",(0,o.kt)("a",{parentName:"p",href:"#PostTarget"},"PostTarget"),"."),(0,o.kt)("h3",{id:"creation-date"},"Creation Date"),(0,o.kt)("p",null,"The creation date of a report represents the block time at which the report has been stored on the chain. This cannot be specified externally and is assigned automatically when handling a ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgCreateReport"),"."),(0,o.kt)("h2",{id:"user-target"},"User Target"),(0,o.kt)("p",null,"A user target object should be used when reporting a specific user."),(0,o.kt)("h3",{id:"user"},"User"),(0,o.kt)("p",null,"The address of the reported user."),(0,o.kt)("h2",{id:"post-target"},"Post Target"),(0,o.kt)("p",null,"A post target should be used when reporting a specific post within the same subspace where the report has been created."),(0,o.kt)("h3",{id:"post-id"},"Post ID"),(0,o.kt)("p",null,"The ID of the reported post."),(0,o.kt)("h2",{id:"reason"},"Reason"),(0,o.kt)("p",null,"A reason is the structure representing the motivation behind a report."),(0,o.kt)("h3",{id:"subspace-id-1"},"Subspace ID"),(0,o.kt)("p",null,"The subspace id of a reason represents the subspace inside which this reason is valid. Since subspaces can have very different Term of Services from one another, each of them should register their reasons independently so that users are limited in why a report can be created. "),(0,o.kt)("h3",{id:"id-1"},"ID"),(0,o.kt)("p",null,"A reason id represents the unique id within the subspace that can be used to uniquely reference the registered reason. This is assigned automatically when handling either a ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSupportStandardReason")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MsgAddReason")," message."),(0,o.kt)("h3",{id:"title"},"Title"),(0,o.kt)("p",null,"The title of a reason should be used to give users a quick idea about why they might want to select this reason during the report creation process. Good titles should be short and easy to understand (e.g. ",(0,o.kt)("strong",{parentName:"p"},"Spam"),", ",(0,o.kt)("strong",{parentName:"p"},"Explicit content"),", etc). "),(0,o.kt)("h3",{id:"description-optional"},"Description (Optional)"),(0,o.kt)("p",null,"A reason description can be optionally used to allow the users to further understand when they should select this reason during the report creation process."))}c.isMDXComponent=!0}}]);