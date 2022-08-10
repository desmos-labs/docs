"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[23412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),_=c(n),m=r,x=_["".concat(p,".").concat(m)]||_[m]||d[m]||o;return n?a.createElement(x,i(i({ref:t},s),{},{components:n})):a.createElement(x,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=_;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},79064:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"text-comparison-exp",title:"_text_comparison_exp",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/inputs/text-comparison-exp",id:"graphql/inputs/text-comparison-exp",title:"_text_comparison_exp",description:"Boolean expression to compare columns of type \"_text\". All fields are combined with logical 'AND'.",source:"@site/docs/07-graphql/inputs/text-comparison-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/text-comparison-exp",permalink:"/next/graphql/inputs/text-comparison-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/text-comparison-exp.mdx",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"text-comparison-exp",title:"_text_comparison_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-order-by"},next:{title:"timestamp_comparison_exp",permalink:"/next/graphql/inputs/timestamp-comparison-exp"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_eq</code> (<code>_text</code>)",id:"_eq-_text",level:4},{value:"<code>_gt</code> (<code>_text</code>)",id:"_gt-_text",level:4},{value:"<code>_gte</code> (<code>_text</code>)",id:"_gte-_text",level:4},{value:"<code>_in</code> (<code>[_text!]</code>)",id:"_in-_text",level:4},{value:"<code>_is_null</code> (<code>Boolean</code>)",id:"_is_null-boolean",level:4},{value:"<code>_lt</code> (<code>_text</code>)",id:"_lt-_text",level:4},{value:"<code>_lte</code> (<code>_text</code>)",id:"_lte-_text",level:4},{value:"<code>_neq</code> (<code>_text</code>)",id:"_neq-_text",level:4},{value:"<code>_nin</code> (<code>[_text!]</code>)",id:"_nin-_text",level:4}],s={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Boolean expression to compare columns of type \"_text\". All fields are combined with logical 'AND'."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input _text_comparison_exp {\n  _eq: _text\n  _gt: _text\n  _gte: _text\n  _in: [_text!]\n  _is_null: Boolean\n  _lt: _text\n  _lte: _text\n  _neq: _text\n  _nin: [_text!]\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"_eq-_text"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_eq"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,r.kt)("inlineCode",{parentName:"a"},"_text")),")"),(0,r.kt)("h4",{id:"_gt-_text"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_gt"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,r.kt)("inlineCode",{parentName:"a"},"_text")),")"),(0,r.kt)("h4",{id:"_gte-_text"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_gte"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,r.kt)("inlineCode",{parentName:"a"},"_text")),")"),(0,r.kt)("h4",{id:"_in-_text"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_in"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,r.kt)("inlineCode",{parentName:"a"},"[_text!]")),")"),(0,r.kt)("h4",{id:"_is_null-boolean"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_is_null"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,r.kt)("h4",{id:"_lt-_text"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_lt"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,r.kt)("inlineCode",{parentName:"a"},"_text")),")"),(0,r.kt)("h4",{id:"_lte-_text"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_lte"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,r.kt)("inlineCode",{parentName:"a"},"_text")),")"),(0,r.kt)("h4",{id:"_neq-_text"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_neq"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,r.kt)("inlineCode",{parentName:"a"},"_text")),")"),(0,r.kt)("h4",{id:"_nin-_text"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"_nin"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/text"},(0,r.kt)("inlineCode",{parentName:"a"},"[_text!]")),")"))}d.isMDXComponent=!0}}]);