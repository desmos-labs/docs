"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[94330],{3905:(e,r,o)=>{o.d(r,{Zo:()=>_,kt:()=>l});var t=o(67294);function p(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){p(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function s(e,r){if(null==e)return{};var o,t,p=function(e,r){if(null==e)return{};var o,t,p={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(p[o]=e[o]);return p}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(p[o]=e[o])}return p}var i=t.createContext({}),u=function(e){var r=t.useContext(i),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},_=function(e){var r=u(e.components);return t.createElement(i.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var o=e.components,p=e.mdxType,n=e.originalType,i=e.parentName,_=s(e,["components","mdxType","originalType","parentName"]),c=u(o),l=p,b=c["".concat(i,".").concat(l)]||c[l]||m[l]||n;return o?t.createElement(b,a(a({ref:r},_),{},{components:o})):t.createElement(b,a({ref:r},_))}));function l(e,r){var o=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var n=o.length,a=new Array(n);a[0]=c;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var u=2;u<n;u++)a[u]=o[u];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},48598:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var t=o(87462),p=(o(67294),o(3905));const n={id:"subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/inputs/subspace-user-group-member-bool-exp",id:"graphql/inputs/subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceusergroup_member\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/subspace-user-group-member-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-bool-exp",permalink:"/next/graphql/inputs/subspace-user-group-member-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-group-member-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_avg_order_by",permalink:"/next/graphql/inputs/subspace-user-group-member-avg-order-by"},next:{title:"subspace_user_group_member_inc_input",permalink:"/next/graphql/inputs/subspace-user-group-member-inc-input"}},i={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_user_group_member_bool_exp!]</code>)",id:"_and-subspace_user_group_member_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_user_group_member_bool_exp</code>)",id:"_not-subspace_user_group_member_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_user_group_member_bool_exp!]</code>)",id:"_or-subspace_user_group_member_bool_exp",level:4},{value:"<code>group</code> (<code>subspace_user_group_bool_exp</code>)",id:"group-subspace_user_group_bool_exp",level:4},{value:"<code>group_row_id</code> (<code>bigint_comparison_exp</code>)",id:"group_row_id-bigint_comparison_exp",level:4},{value:"<code>height</code> (<code>bigint_comparison_exp</code>)",id:"height-bigint_comparison_exp",level:4},{value:"<code>member_address</code> (<code>String_comparison_exp</code>)",id:"member_address-string_comparison_exp",level:4},{value:"<code>row_id</code> (<code>Int_comparison_exp</code>)",id:"row_id-int_comparison_exp",level:4}],_={toc:u};function m(e){let{components:r,...o}=e;return(0,p.kt)("wrapper",(0,t.Z)({},_,o,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_user_group_member\". All fields are combined with a logical 'AND'."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_bool_exp {\n  _and: [subspace_user_group_member_bool_exp!]\n  _not: subspace_user_group_member_bool_exp\n  _or: [subspace_user_group_member_bool_exp!]\n  group: subspace_user_group_bool_exp\n  group_row_id: bigint_comparison_exp\n  height: bigint_comparison_exp\n  member_address: String_comparison_exp\n  row_id: Int_comparison_exp\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"_and-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_bool_exp!]")),")"),(0,p.kt)("h4",{id:"_not-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"),(0,p.kt)("h4",{id:"_or-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_bool_exp!]")),")"),(0,p.kt)("h4",{id:"group-subspace_user_group_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"group"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,p.kt)("h4",{id:"group_row_id-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"group_row_id"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"height-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"member_address-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"member_address"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,p.kt)("h4",{id:"row_id-int_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/int-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"Int_comparison_exp")),")"))}m.isMDXComponent=!0}}]);