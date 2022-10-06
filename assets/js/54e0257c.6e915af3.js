"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[11663],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>_});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},i=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),l=c(t),_=s,b=l["".concat(p,".").concat(_)]||l[_]||m[_]||o;return t?n.createElement(b,u(u({ref:r},i),{},{components:t})):n.createElement(b,u({ref:r},i))}));function _(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,u=new Array(o);u[0]=l;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,u[1]=a;for(var c=2;c<o;c++)u[c]=t[c];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},94090:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=t(87462),s=(t(67294),t(3905));const o={id:"insert-subspace-user-group-member",title:"insert_subspace_user_group_member",hide_table_of_contents:!1},u=void 0,a={unversionedId:"graphql/mutations/insert-subspace-user-group-member",id:"graphql/mutations/insert-subspace-user-group-member",title:"insert_subspace_user_group_member",description:'insert data into the table: "subspaceusergroup_member"',source:"@site/docs/07-graphql/mutations/insert-subspace-user-group-member.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-subspace-user-group-member",permalink:"/next/graphql/mutations/insert-subspace-user-group-member",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-subspace-user-group-member.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"insert-subspace-user-group-member",title:"insert_subspace_user_group_member",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_subspace_user_group_member_one",permalink:"/next/graphql/mutations/insert-subspace-user-group-member-one"},next:{title:"insert_subspace_user_group_one",permalink:"/next/graphql/mutations/insert-subspace-user-group-one"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[subspace_user_group_member_insert_input!]!</code>)",id:"objects-subspace_user_group_member_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_user_group_member_on_conflict</code>)",id:"on_conflict-subspace_user_group_member_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group_member_mutation_response</code>",id:"subspace_user_group_member_mutation_response",level:4}],i={toc:c};function m(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'insert data into the table: "subspace_user_group_member"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_subspace_user_group_member(\n  objects: [subspace_user_group_member_insert_input!]!\n  on_conflict: subspace_user_group_member_on_conflict\n): subspace_user_group_member_mutation_response\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"objects-subspace_user_group_member_insert_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-insert-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_insert_input!]!")),")"),(0,s.kt)("p",null,"the rows to be inserted"),(0,s.kt)("h4",{id:"on_conflict-subspace_user_group_member_on_conflict"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-on-conflict"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_on_conflict")),")"),(0,s.kt)("p",null,"on conflict condition"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_user_group_member_mutation_response"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-mutation-response"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_mutation_response"))),(0,s.kt)("p",null,'response of any mutation on the table "subspace_user_group_member"'))}m.isMDXComponent=!0}}]);