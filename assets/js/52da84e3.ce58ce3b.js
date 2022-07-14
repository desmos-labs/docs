"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32721],{3905:function(e,o,r){r.d(o,{Zo:function(){return s},kt:function(){return u}});var n=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var p=n.createContext({}),c=function(e){var o=n.useContext(p),r=o;return e&&(r="function"==typeof e?e(o):l(l({},o),e)),r},s=function(e){var o=c(e.components);return n.createElement(p.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},_=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),_=c(r),u=t,b=_["".concat(p,".").concat(u)]||_[u]||d[u]||a;return r?n.createElement(b,l(l({ref:o},s),{},{components:r})):n.createElement(b,l({ref:o},s))}));function u(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=r.length,l=new Array(a);l[0]=_;var i={};for(var p in o)hasOwnProperty.call(o,p)&&(i[p]=o[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},6910:function(e,o,r){r.r(o),r.d(o,{assets:function(){return s},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var n=r(87462),t=r(63366),a=(r(67294),r(3905)),l=["components"],i={id:"user-block-bool-exp",title:"user_block_bool_exp",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/inputs/user-block-bool-exp",id:"version-4.1.0/graphql/inputs/user-block-bool-exp",title:"user_block_bool_exp",description:"Boolean expression to filter rows from the table \"user_block\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/user-block-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-bool-exp",permalink:"/graphql/inputs/user-block-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/user-block-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"user-block-bool-exp",title:"user_block_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_aggregate_order_by",permalink:"/graphql/inputs/user-block-aggregate-order-by"},next:{title:"user_block_max_order_by",permalink:"/graphql/inputs/user-block-max-order-by"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[user_block_bool_exp!]</code>)",id:"_and-user_block_bool_exp",level:4},{value:"<code>_not</code> (<code>user_block_bool_exp</code>)",id:"_not-user_block_bool_exp",level:4},{value:"<code>_or</code> (<code>[user_block_bool_exp!]</code>)",id:"_or-user_block_bool_exp",level:4},{value:"<code>blocked</code> (<code>profile_bool_exp</code>)",id:"blocked-profile_bool_exp",level:4},{value:"<code>blocked_user_address</code> (<code>String_comparison_exp</code>)",id:"blocked_user_address-string_comparison_exp",level:4},{value:"<code>blocker</code> (<code>profile_bool_exp</code>)",id:"blocker-profile_bool_exp",level:4},{value:"<code>blocker_address</code> (<code>String_comparison_exp</code>)",id:"blocker_address-string_comparison_exp",level:4},{value:"<code>reason</code> (<code>String_comparison_exp</code>)",id:"reason-string_comparison_exp",level:4},{value:"<code>subspace</code> (<code>String_comparison_exp</code>)",id:"subspace-string_comparison_exp",level:4}],_={toc:d};function u(e){var o=e.components,r=(0,t.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},_,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"user_block\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_bool_exp {\n  _and: [user_block_bool_exp!]\n  _not: user_block_bool_exp\n  _or: [user_block_bool_exp!]\n  blocked: profile_bool_exp\n  blocked_user_address: String_comparison_exp\n  blocker: profile_bool_exp\n  blocker_address: String_comparison_exp\n  reason: String_comparison_exp\n  subspace: String_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-user_block_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/user-block-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[user_block_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-user_block_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/user-block-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-user_block_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/user-block-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[user_block_bool_exp!]")),")"),(0,a.kt)("h4",{id:"blocked-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocked"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,a.kt)("h4",{id:"blocked_user_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocked_user_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"blocker-profile_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocker"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,a.kt)("h4",{id:"blocker_address-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"blocker_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"reason-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"subspace-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}u.isMDXComponent=!0}}]);