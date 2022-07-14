"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[37132],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,f=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},17947:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return m},metadata:function(){return s},toc:function(){return c}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],m={id:"timestamp-comparison-exp",title:"timestamp_comparison_exp",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/inputs/timestamp-comparison-exp",id:"version-4.1.0/graphql/inputs/timestamp-comparison-exp",title:"timestamp_comparison_exp",description:"Boolean expression to compare columns of type \"timestamp\". All fields are combined with logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/timestamp-comparison-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/timestamp-comparison-exp",permalink:"/graphql/inputs/timestamp-comparison-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/timestamp-comparison-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"timestamp-comparison-exp",title:"timestamp_comparison_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"_text_comparison_exp",permalink:"/graphql/inputs/text-comparison-exp"},next:{title:"user_block_aggregate_order_by",permalink:"/graphql/inputs/user-block-aggregate-order-by"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_eq</code> (<code>timestamp</code>)",id:"_eq-timestamp",level:4},{value:"<code>_gt</code> (<code>timestamp</code>)",id:"_gt-timestamp",level:4},{value:"<code>_gte</code> (<code>timestamp</code>)",id:"_gte-timestamp",level:4},{value:"<code>_in</code> (<code>[timestamp!]</code>)",id:"_in-timestamp",level:4},{value:"<code>_is_null</code> (<code>Boolean</code>)",id:"_is_null-boolean",level:4},{value:"<code>_lt</code> (<code>timestamp</code>)",id:"_lt-timestamp",level:4},{value:"<code>_lte</code> (<code>timestamp</code>)",id:"_lte-timestamp",level:4},{value:"<code>_neq</code> (<code>timestamp</code>)",id:"_neq-timestamp",level:4},{value:"<code>_nin</code> (<code>[timestamp!]</code>)",id:"_nin-timestamp",level:4}],d={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Boolean expression to compare columns of type \"timestamp\". All fields are combined with logical 'AND'."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input timestamp_comparison_exp {\n  _eq: timestamp\n  _gt: timestamp\n  _gte: timestamp\n  _in: [timestamp!]\n  _is_null: Boolean\n  _lt: timestamp\n  _lte: timestamp\n  _neq: timestamp\n  _nin: [timestamp!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"_eq-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_eq"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"_gt-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_gt"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"_gte-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_gte"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"_in-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_in"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"[timestamp!]")),")"),(0,i.kt)("h4",{id:"_is_null-boolean"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_is_null"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"_lt-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_lt"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"_lte-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_lte"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"_neq-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_neq"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,i.kt)("h4",{id:"_nin-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"_nin"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"[timestamp!]")),")"))}u.isMDXComponent=!0}}]);