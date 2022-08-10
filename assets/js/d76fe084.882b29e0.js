"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[93275],{3905:(e,r,o)=>{o.d(r,{Zo:()=>l,kt:()=>i});var t=o(67294);function p(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function s(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?s(Object(o),!0).forEach((function(r){p(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function n(e,r){if(null==e)return{};var o,t,p=function(e,r){if(null==e)return{};var o,t,p={},s=Object.keys(e);for(t=0;t<s.length;t++)o=s[t],r.indexOf(o)>=0||(p[o]=e[o]);return p}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)o=s[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(p[o]=e[o])}return p}var u=t.createContext({}),_=function(e){var r=t.useContext(u),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},l=function(e){var r=_(e.components);return t.createElement(u.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var o=e.components,p=e.mdxType,s=e.originalType,u=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),m=_(o),i=p,c=m["".concat(u,".").concat(i)]||m[i]||b[i]||s;return o?t.createElement(c,a(a({ref:r},l),{},{components:o})):t.createElement(c,a({ref:r},l))}));function i(e,r){var o=arguments,p=r&&r.mdxType;if("string"==typeof e||p){var s=o.length,a=new Array(s);a[0]=m;var n={};for(var u in r)hasOwnProperty.call(r,u)&&(n[u]=r[u]);n.originalType=e,n.mdxType="string"==typeof e?e:p,a[1]=n;for(var _=2;_<s;_++)a[_]=o[_];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}m.displayName="MDXCreateElement"},56624:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>b,frontMatter:()=>s,metadata:()=>n,toc:()=>_});var t=o(87462),p=(o(67294),o(3905));const s={id:"subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",hide_table_of_contents:!1},a=void 0,n={unversionedId:"graphql/inputs/subspace-user-group-member-bool-exp",id:"version-4.2.0/graphql/inputs/subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceusergroup_member\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-user-group-member-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-bool-exp",permalink:"/graphql/inputs/subspace-user-group-member-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-user-group-member-bool-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-user-group-member-bool-exp",title:"subspace_user_group_member_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_aggregate_order_by",permalink:"/graphql/inputs/subspace-user-group-member-aggregate-order-by"},next:{title:"subspace_user_group_member_max_order_by",permalink:"/graphql/inputs/subspace-user-group-member-max-order-by"}},u={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_user_group_member_bool_exp!]</code>)",id:"_and-subspace_user_group_member_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_user_group_member_bool_exp</code>)",id:"_not-subspace_user_group_member_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_user_group_member_bool_exp!]</code>)",id:"_or-subspace_user_group_member_bool_exp",level:4},{value:"<code>group</code> (<code>subspace_user_group_bool_exp</code>)",id:"group-subspace_user_group_bool_exp",level:4},{value:"<code>member_address</code> (<code>String_comparison_exp</code>)",id:"member_address-string_comparison_exp",level:4}],l={toc:_};function b(e){let{components:r,...o}=e;return(0,p.kt)("wrapper",(0,t.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_user_group_member\". All fields are combined with a logical 'AND'."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_bool_exp {\n  _and: [subspace_user_group_member_bool_exp!]\n  _not: subspace_user_group_member_bool_exp\n  _or: [subspace_user_group_member_bool_exp!]\n  group: subspace_user_group_bool_exp\n  member_address: String_comparison_exp\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"_and-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_bool_exp!]")),")"),(0,p.kt)("h4",{id:"_not-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"),(0,p.kt)("h4",{id:"_or-subspace_user_group_member_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_bool_exp!]")),")"),(0,p.kt)("h4",{id:"group-subspace_user_group_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"group"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"subspace_user_group_bool_exp")),")"),(0,p.kt)("h4",{id:"member_address-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"member_address"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}b.isMDXComponent=!0}}]);