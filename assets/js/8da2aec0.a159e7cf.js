"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80626],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return f}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},p=Object.keys(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)o=p[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(o),f=r,u=d["".concat(c,".").concat(f)]||d[f]||_[f]||p;return o?n.createElement(u,i(i({ref:t},s),{},{components:o})):n.createElement(u,i({ref:t},s))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=o.length,i=new Array(p);i[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<p;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},25952:function(e,t,o){o.r(t),o.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return _}});var n=o(87462),r=o(63366),p=(o(67294),o(3905)),i=["components"],a={id:"post-reference-bool-exp",title:"post_reference_bool_exp",hide_table_of_contents:!1},c=void 0,l={unversionedId:"graphql/inputs/post-reference-bool-exp",id:"version-4.1.0/graphql/inputs/post-reference-bool-exp",title:"post_reference_bool_exp",description:"Boolean expression to filter rows from the table \"post_reference\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/post-reference-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-bool-exp",permalink:"/graphql/inputs/post-reference-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/post-reference-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"post-reference-bool-exp",title:"post_reference_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_avg_order_by",permalink:"/graphql/inputs/post-reference-avg-order-by"},next:{title:"post_reference_max_order_by",permalink:"/graphql/inputs/post-reference-max-order-by"}},s={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_reference_bool_exp!]</code>)",id:"_and-post_reference_bool_exp",level:4},{value:"<code>_not</code> (<code>post_reference_bool_exp</code>)",id:"_not-post_reference_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_reference_bool_exp!]</code>)",id:"_or-post_reference_bool_exp",level:4},{value:"<code>position_index</code> (<code>bigint_comparison_exp</code>)",id:"position_index-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>reference_id</code> (<code>bigint_comparison_exp</code>)",id:"reference_id-bigint_comparison_exp",level:4},{value:"<code>type</code> (<code>String_comparison_exp</code>)",id:"type-string_comparison_exp",level:4}],d={toc:_};function f(e){var t=e.components,o=(0,r.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Boolean expression to filter rows from the table \"post_reference\". All fields are combined with a logical 'AND'."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_bool_exp {\n  _and: [post_reference_bool_exp!]\n  _not: post_reference_bool_exp\n  _or: [post_reference_bool_exp!]\n  position_index: bigint_comparison_exp\n  post: post_bool_exp\n  reference_id: bigint_comparison_exp\n  type: String_comparison_exp\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"_and-post_reference_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[post_reference_bool_exp!]")),")"),(0,p.kt)("h4",{id:"_not-post_reference_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_reference_bool_exp")),")"),(0,p.kt)("h4",{id:"_or-post_reference_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"[post_reference_bool_exp!]")),")"),(0,p.kt)("h4",{id:"position_index-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"post-post_bool_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,p.kt)("h4",{id:"reference_id-bigint_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"reference_id"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,p.kt)("h4",{id:"type-string_comparison_exp"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,p.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,p.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}f.isMDXComponent=!0}}]);