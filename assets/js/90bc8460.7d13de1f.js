"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[25565],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(n),d=i,b=l["".concat(o,".").concat(d)]||l[d]||_[d]||a;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=l;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:i,s[1]=p;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},98504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>_,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={id:"subspace-section-insert-input",title:"subspace_section_insert_input",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/subspace-section-insert-input",id:"graphql/inputs/subspace-section-insert-input",title:"subspace_section_insert_input",description:'input type for inserting data into table "subspace_section"',source:"@site/docs/07-graphql/inputs/subspace-section-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-section-insert-input",permalink:"/next/graphql/inputs/subspace-section-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-section-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-section-insert-input",title:"subspace_section_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_section_inc_input",permalink:"/next/graphql/inputs/subspace-section-inc-input"},next:{title:"subspace_section_max_order_by",permalink:"/next/graphql/inputs/subspace-section-max-order-by"}},o={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>children</code> (<code>subspace_section_arr_rel_insert_input</code>)",id:"children-subspace_section_arr_rel_insert_input",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>parent</code> (<code>subspace_section_obj_rel_insert_input</code>)",id:"parent-subspace_section_obj_rel_insert_input",level:4},{value:"<code>parent_row_id</code> (<code>bigint</code>)",id:"parent_row_id-bigint",level:4},{value:"<code>posts</code> (<code>post_arr_rel_insert_input</code>)",id:"posts-post_arr_rel_insert_input",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4},{value:"<code>subspace</code> (<code>subspace_obj_rel_insert_input</code>)",id:"subspace-subspace_obj_rel_insert_input",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4},{value:"<code>user_groups</code> (<code>subspace_user_group_arr_rel_insert_input</code>)",id:"user_groups-subspace_user_group_arr_rel_insert_input",level:4},{value:"<code>user_permissions</code> (<code>subspace_user_permission_arr_rel_insert_input</code>)",id:"user_permissions-subspace_user_permission_arr_rel_insert_input",level:4}],u={toc:c};function _(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'input type for inserting data into table "subspace_section"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_section_insert_input {\n  children: subspace_section_arr_rel_insert_input\n  description: String\n  height: bigint\n  id: bigint\n  name: String\n  parent: subspace_section_obj_rel_insert_input\n  parent_row_id: bigint\n  posts: post_arr_rel_insert_input\n  row_id: Int\n  subspace: subspace_obj_rel_insert_input\n  subspace_id: bigint\n  user_groups: subspace_user_group_arr_rel_insert_input\n  user_permissions: subspace_user_permission_arr_rel_insert_input\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"children-subspace_section_arr_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"children"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-arr-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_section_arr_rel_insert_input")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"height-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"parent-subspace_section_obj_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"parent"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/subspace-section-obj-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_section_obj_rel_insert_input")),")"),(0,i.kt)("h4",{id:"parent_row_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"parent_row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"posts-post_arr_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"posts"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/post-arr-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"post_arr_rel_insert_input")),")"),(0,i.kt)("h4",{id:"row_id-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"subspace-subspace_obj_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/subspace-obj-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_obj_rel_insert_input")),")"),(0,i.kt)("h4",{id:"subspace_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"user_groups-subspace_user_group_arr_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user_groups"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-arr-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_group_arr_rel_insert_input")),")"),(0,i.kt)("h4",{id:"user_permissions-subspace_user_permission_arr_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user_permissions"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-arr-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_arr_rel_insert_input")),")"))}_.isMDXComponent=!0}}]);