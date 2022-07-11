"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[39637],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(r),b=a,d=m["".concat(p,".").concat(b)]||m[b]||c[b]||s;return r?n.createElement(d,o(o({ref:t},l),{},{components:r})):n.createElement(d,o({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8494:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={id:"subspace-user-group",title:"subspace_user_group",hide_table_of_contents:!1},p=void 0,u={unversionedId:"graphql/objects/subspace-user-group",id:"graphql/objects/subspace-user-group",title:"subspace_user_group",description:'columns and relationships of "subspaceusergroup"',source:"@site/docs/07-graphql/objects/subspace-user-group.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group",permalink:"/next/graphql/objects/subspace-user-group",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-user-group.mdx",tags:[],version:"current",lastUpdatedAt:1657531086,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"subspace-user-group",title:"subspace_user_group",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_variance_fields",permalink:"/next/graphql/objects/subspace-user-group-variance-fields"},next:{title:"subspace_user_permission",permalink:"/next/graphql/objects/subspace-user-permission"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"<code>members</code> (<code>[subspace_user_group_member!]!</code>)",id:"members-subspace_user_group_member",level:4},{value:"<code>members_aggregate</code> (<code>subspace_user_group_member_aggregate!</code>)",id:"members_aggregate-subspace_user_group_member_aggregate",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4},{value:"<code>permissions</code> (<code>_text!</code>)",id:"permissions-_text",level:4},{value:"<code>section</code> (<code>subspace_section!</code>)",id:"section-subspace_section",level:4},{value:"<code>subspace</code> (<code>subspace!</code>)",id:"subspace-subspace",level:4},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4}],m={toc:c};function b(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'columns and relationships of "subspace_user_group"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_group {\n  description: String\n  id: bigint!\n  members(\n  distinct_on: [subspace_user_group_member_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_member_order_by!]\n  where: subspace_user_group_member_bool_exp\n): [subspace_user_group_member!]!\n  members_aggregate(\n  distinct_on: [subspace_user_group_member_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_member_order_by!]\n  where: subspace_user_group_member_bool_exp\n): subspace_user_group_member_aggregate!\n  name: String!\n  permissions: _text!\n  section: subspace_section!\n  subspace: subspace!\n  subspace_id: bigint!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"description-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,s.kt)("h4",{id:"id-bigint"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,s.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,s.kt)("h4",{id:"members-subspace_user_group_member"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"members"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member!]!")),")"),(0,s.kt)("p",null,"An array relationship"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"distinct_on-subspace_user_group_member_select_column"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-member-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_select_column!]")),")"))),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"limit-int"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"offset-int"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"order_by-subspace_user_group_member_order_by"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-member-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_order_by!]")),")"))),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"where-subspace_user_group_member_bool_exp"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-member-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"))),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h4",{id:"members_aggregate-subspace_user_group_member_aggregate"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"members_aggregate"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-aggregate"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_aggregate!")),")"),(0,s.kt)("p",null,"An aggregate relationship"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"distinct_on-subspace_user_group_member_select_column-1"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-member-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_select_column!]")),")"))),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"limit-int-1"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"offset-int-1"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"order_by-subspace_user_group_member_order_by-1"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-member-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_order_by!]")),")"))),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"where-subspace_user_group_member_bool_exp-1"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h5",href:"../inputs/subspace-user-group-member-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"))),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h4",{id:"name-string"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,s.kt)("h4",{id:"permissions-_text"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"permissions"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,s.kt)("inlineCode",{parentName:"a"},"_text!")),")"),(0,s.kt)("h4",{id:"section-subspace_section"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"section"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-section"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_section!")),")"),(0,s.kt)("p",null,"An object relationship"),(0,s.kt)("h4",{id:"subspace-subspace"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace!")),")"),(0,s.kt)("p",null,"An object relationship"),(0,s.kt)("h4",{id:"subspace_id-bigint"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,s.kt)("inlineCode",{parentName:"a"},"bigint!")),")"))}b.isMDXComponent=!0}}]);