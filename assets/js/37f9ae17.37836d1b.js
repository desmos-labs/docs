"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[7740],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>_});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(o),_=a,h=m["".concat(l,".").concat(_)]||m[_]||d[_]||r;return o?n.createElement(h,p(p({ref:t},c),{},{components:o})):n.createElement(h,p({ref:t},c))}));function _(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,p=new Array(r);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<r;s++)p[s]=o[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},64264:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=o(87462),a=(o(67294),o(3905));const r={id:"post-attachment-bool-exp",title:"post_attachment_bool_exp",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/inputs/post-attachment-bool-exp",id:"version-4.2.0/graphql/inputs/post-attachment-bool-exp",title:"post_attachment_bool_exp",description:"Boolean expression to filter rows from the table \"post_attachment\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/post-attachment-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-attachment-bool-exp",permalink:"/graphql/inputs/post-attachment-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/post-attachment-bool-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"post-attachment-bool-exp",title:"post_attachment_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_avg_order_by",permalink:"/graphql/inputs/post-attachment-avg-order-by"},next:{title:"post_attachment_max_order_by",permalink:"/graphql/inputs/post-attachment-max-order-by"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_attachment_bool_exp!]</code>)",id:"_and-post_attachment_bool_exp",level:4},{value:"<code>_not</code> (<code>post_attachment_bool_exp</code>)",id:"_not-post_attachment_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_attachment_bool_exp!]</code>)",id:"_or-post_attachment_bool_exp",level:4},{value:"<code>content</code> (<code>jsonb_comparison_exp</code>)",id:"content-jsonb_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4}],c={toc:s};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"post_attachment\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_attachment_bool_exp {\n  _and: [post_attachment_bool_exp!]\n  _not: post_attachment_bool_exp\n  _or: [post_attachment_bool_exp!]\n  content: jsonb_comparison_exp\n  id: bigint_comparison_exp\n  post: post_bool_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-post_attachment_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[post_attachment_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-post_attachment_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-post_attachment_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[post_attachment_bool_exp!]")),")"),(0,a.kt)("h4",{id:"content-jsonb_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"content"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,a.kt)("h4",{id:"id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"post-post_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"))}d.isMDXComponent=!0}}]);