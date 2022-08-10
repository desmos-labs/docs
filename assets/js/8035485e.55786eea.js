"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[38557],{3905:(e,r,o)=>{o.d(r,{Zo:()=>d,kt:()=>f});var t=o(67294);function i(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function n(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function p(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?n(Object(o),!0).forEach((function(r){i(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function a(e,r){if(null==e)return{};var o,t,i=function(e,r){if(null==e)return{};var o,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||(i[o]=e[o]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=t.createContext({}),s=function(e){var r=t.useContext(l),o=r;return e&&(o="function"==typeof e?e(r):p(p({},r),e)),o},d=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var o=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=s(o),f=i,h=c["".concat(l,".").concat(f)]||c[f]||_[f]||n;return o?t.createElement(h,p(p({ref:r},d),{},{components:o})):t.createElement(h,p({ref:r},d))}));function f(e,r){var o=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=o.length,p=new Array(n);p[0]=c;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var s=2;s<n;s++)p[s]=o[s];return t.createElement.apply(null,p)}return t.createElement.apply(null,o)}c.displayName="MDXCreateElement"},75226:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>_,frontMatter:()=>n,metadata:()=>a,toc:()=>s});var t=o(87462),i=(o(67294),o(3905));const n={id:"profile-relationship-bool-exp",title:"profile_relationship_bool_exp",hide_table_of_contents:!1},p=void 0,a={unversionedId:"graphql/inputs/profile-relationship-bool-exp",id:"version-4.1.0/graphql/inputs/profile-relationship-bool-exp",title:"profile_relationship_bool_exp",description:"Boolean expression to filter rows from the table \"profile_relationship\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/profile-relationship-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profile-relationship-bool-exp",permalink:"/4.1.0/graphql/inputs/profile-relationship-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/profile-relationship-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"profile-relationship-bool-exp",title:"profile_relationship_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship_aggregate_order_by",permalink:"/4.1.0/graphql/inputs/profile-relationship-aggregate-order-by"},next:{title:"profile_relationship_max_order_by",permalink:"/4.1.0/graphql/inputs/profile-relationship-max-order-by"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[profile_relationship_bool_exp!]</code>)",id:"_and-profile_relationship_bool_exp",level:4},{value:"<code>_not</code> (<code>profile_relationship_bool_exp</code>)",id:"_not-profile_relationship_bool_exp",level:4},{value:"<code>_or</code> (<code>[profile_relationship_bool_exp!]</code>)",id:"_or-profile_relationship_bool_exp",level:4},{value:"<code>receiver</code> (<code>profile_bool_exp</code>)",id:"receiver-profile_bool_exp",level:4},{value:"<code>receiver_address</code> (<code>String_comparison_exp</code>)",id:"receiver_address-string_comparison_exp",level:4},{value:"<code>sender</code> (<code>profile_bool_exp</code>)",id:"sender-profile_bool_exp",level:4},{value:"<code>sender_address</code> (<code>String_comparison_exp</code>)",id:"sender_address-string_comparison_exp",level:4},{value:"<code>subspace</code> (<code>String_comparison_exp</code>)",id:"subspace-string_comparison_exp",level:4}],d={toc:s};function _(e){let{components:r,...o}=e;return(0,i.kt)("wrapper",(0,t.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to filter rows from the table \"profile_relationship\". All fields are combined with a logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input profile_relationship_bool_exp {\n  _and: [profile_relationship_bool_exp!]\n  _not: profile_relationship_bool_exp\n  _or: [profile_relationship_bool_exp!]\n  receiver: profile_bool_exp\n  receiver_address: String_comparison_exp\n  sender: profile_bool_exp\n  sender_address: String_comparison_exp\n  subspace: String_comparison_exp\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_and-profile_relationship_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[profile_relationship_bool_exp!]")),")"),(0,i.kt)("h4",{id:"_not-profile_relationship_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"),(0,i.kt)("h4",{id:"_or-profile_relationship_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"[profile_relationship_bool_exp!]")),")"),(0,i.kt)("h4",{id:"receiver-profile_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"receiver"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,i.kt)("h4",{id:"receiver_address-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"sender-profile_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sender"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,i.kt)("h4",{id:"sender_address-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,i.kt)("h4",{id:"subspace-string_comparison_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}_.isMDXComponent=!0}}]);